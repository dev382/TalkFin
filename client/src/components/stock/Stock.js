import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useDeepCompareEffect from 'use-deep-compare-effect'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getStock } from '../../actions/stock';
import StockFundamentals from './StockFundamentals';
import Plot from 'react-plotly.js';

/* eslint-disable react-hooks/exhaustive-deps */

const Stock = ({ getStock, stockData, match }) => {

  const [stockChartValues, setStockChartValues] = useState([]);

  useDeepCompareEffect(() => {
      fetchStock();
    }, [stockData]);

  const fetchStock = () => {
    getStock(match.params.stocksymbol);
    let stockChartXValues = [];
    let stockChartYValues = [];

    for (var key in stockData['Time Series (Daily)']) {
      stockChartXValues.push(key);
      stockChartYValues.push(stockData['Time Series (Daily)'][key]['4. close']);
    }
    setStockChartValues({  
      X: stockChartXValues, 
      Y: stockChartYValues, 
      lastPrice: stockChartYValues[0], 
      previousPrice: stockChartYValues[1]
    });
  };

  const lastPrice = stockChartValues.lastPrice;
  const previousPrice = stockChartValues.previousPrice;
  const priceChange = Math.round(((Math.abs((previousPrice-lastPrice)/previousPrice))*100 + Number.EPSILON) * 100) / 100;
  
  return (
    <div>
      <Link className="btn btn-light my-1" to="/stocks">
        Go Back to Stock Search
      </Link>
      <StockFundamentals />
      <div className='py'>
        <div className="ui black message">
          <h3 className = "timeFrame">Daily Time Frame Chart</h3>
          <h4 className = "lastPriceTitle">
            Last Price: <span className = { lastPrice >= previousPrice ? "lastPriceUp" : "lastPriceDown"}>${lastPrice}</span>
            <span className = { lastPrice >= previousPrice ? "lastPriceUp" : "lastPriceDown"}>({priceChange}%)</span>
            <span className = { lastPrice >= previousPrice ? "lastPriceUp" : "lastPriceDown"}>
              <i className={lastPrice >= previousPrice ? "fas fa-arrow-up" : "fas fa-arrow-down"}></i>  
            </span>    
          </h4> 
          <Plot
            data={[
              {
                x: stockChartValues.X,
                y: stockChartValues.Y,
                type: 'scatter',
                mode: 'lines',
                marker: {color: lastPrice >= previousPrice ? "green" : "red"},
              }
            ]}
            layout={{
              width: 1000,
              height: 560,
              plot_bgcolor: "#040404",
              xaxis: {
                linecolor: 'silver',
                linewidth: 2.5,
                gridcolor: "353535",
                mirror: true
              },
              yaxis: {
                linecolor: 'silver',
                linewidth: 2.5,
                gridcolor: "353535",
                mirror: true
              },
            }}
          />
        </div>
      </div>
    </div>
  )
}

Stock.propTypes = {
  getStock: PropTypes.func.isRequired,
  stockData: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  stockData: state.stock.stockData,
});

export default connect(mapStateToProps, { getStock })(Stock);
