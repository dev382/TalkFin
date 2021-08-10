import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import isDeepEqual from 'fast-deep-equal/react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { getStockSearchData } from '../../actions/stock';

/* eslint-disable react-hooks/exhaustive-deps */

const StockSearch = ({ getStockSearchData, stockSearchData }) => {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);
    const [notFound, setNotFound] = useState("");
    const stockSearchDataRef = useRef(stockSearchData);

    if (!isDeepEqual(stockSearchDataRef.current, stockSearchData)) {
        stockSearchDataRef.current = stockSearchData
    };

    useEffect(() => {
        if (term) {
            fetchStockSearchData();
        }
    }, [stockSearchDataRef.current]);

    const fetchStockSearchData = () => {
        getStockSearchData(term);
        setResults(stockSearchDataRef.current.bestMatches)
    };

    const onFormSubmit = event => {
        event.preventDefault();
        fetchStockSearchData();
        if (results.length === 0) {
            setNotFound("No more search results found")
        };
      };

    console.log(results);

    if (results || !results) {

        const renderedResults = results?.map((result, index) => {
            return (
                <div key={index} className="item">
                    <div className="right floated content">
                        <a
                            className="ui primary button"
                            href={`/stock/${result['1. symbol']}`}
                        >
                            Go
                        </a>
                    </div>
                    <a href={`/stock/${result['1. symbol']}`}>
                    <div >
                        <div className="searchHeader"><b>{`${result['2. name']} - (${result['1. symbol']})`}</b></div>
                        <span className="searchHeader1" dangerouslySetInnerHTML={{ __html: `Currency: ${result['8. currency']}` }}></span>
                    </div>
                    </a>
                </div>
            );
        });

        return (
            <div>
                <h1 className="large text-primary">Search</h1>
                <p className="lead">
                <i className="fas fa-search" /> Find stock market data and charts
                </p>
                <div>
                    <div className="ui form ui black message">
                        <form onSubmit={onFormSubmit}>
                        <div className="field">
                            <label><h5 className="text-light">Enter company name, stock ticker or keyword</h5></label>
                            <input
                                value={term}
                                onChange={(e) => setTerm(e.target.value)}
                                className="input"
                                placeholder="Search..."
                            />
                        </div>
                        <input type='submit' className='btn btn-primary' value='Submit' />
                        <Link className="btn btn-light my-1" to="/dashboard">
                            Go to Dashboard
                         </Link>
                        </form>
                    </div>
                    <div className="ui celled list">{renderedResults}</div> 
                    <div className="ui celled list">{notFound}</div> 
                </div>
            </div>
        );
    };
}  

StockSearch.propTypes = {
    getStockSearchData: PropTypes.func.isRequired,
    stockSearchData: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    stockSearchData: state.stock.stockSearchData,
});

export default withRouter(connect(mapStateToProps, { getStockSearchData })(StockSearch));