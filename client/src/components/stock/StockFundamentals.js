import React, { useState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { getStockFundamentals } from '../../actions/stock';

/* eslint-disable react-hooks/exhaustive-deps */

const StockFundamentals = ({ getStockFundamentals, stockFundamentals, match }) => {

  const [fundamentalsData, setFundamentalsData] = useState([]);

  useDeepCompareEffect(() => {
    fetchStockFundamentals();
  }, [stockFundamentals]);

  const fetchStockFundamentals = () => {
    getStockFundamentals(match.params.stocksymbol);
    setFundamentalsData(stockFundamentals)
  };

  return (
    <div className='py'>
      <div className="ui black message">
        <ul className="ui list">
          <h3>Company: {fundamentalsData.Name} <span className="ticker">({fundamentalsData.Symbol})</span></h3>
          <li><span className="dot-style">●</span><b className="list-title">Address:</b>{fundamentalsData.Address}</li>
          <li><span className="dot-style">●</span><b className="list-title">Exchange:</b>{fundamentalsData.Exchange}</li>
          <li><span className="dot-style">●</span><b className="list-title">Industry:</b>{fundamentalsData.Industry}</li>
          <li><span className="dot-style">●</span><b className="list-title">Sector:</b>{fundamentalsData.Sector}</li>
          <li>
            <span className="dot-style">●</span><b className="list-title">Market Cap:</b>
            {parseInt(fundamentalsData.MarketCapitalization).toLocaleString()}
          </li>
          <li><span className="dot-style">●</span><b className="list-title">P/E Ratio:</b>{fundamentalsData.PERatio}</li>
          <li><span className="dot-style">●</span><b className="list-title">Dividends Per Share:</b>{fundamentalsData.DividendPerShare}</li>
          <li><span className="dot-style">●</span><b className="list-title">Dividend Yield:</b>{fundamentalsData.DividendYield}</li>
          <li><span className="dot-style">●</span><b className="list-title">Earnings Per Share (EPS):</b>{fundamentalsData.EPS}</li>
          <li><span className="dot-style">●</span><b className="list-title">Profit Margin:</b>{fundamentalsData.ProfitMargin}</li>
        </ul>
      </div >
    </div>

  )
}

StockFundamentals.propTypes = {
  getStockFundamentals: PropTypes.func.isRequired,
  stockFundamentals: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  stockFundamentals: state.stock.stockFundamentals,
});

export default withRouter(connect(mapStateToProps, { getStockFundamentals })(StockFundamentals));
