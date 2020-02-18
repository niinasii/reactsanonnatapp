import React, { Component } from 'react';
import Quote from './Quote';

class QuoteList extends Component {
    render() {
        const quotes = this.props.quotes.map(function(quote) {
            return (
            <Quote key={quote.id} author={quote.author} quotetext={quote.quotetext} id={quote.id}/> 
            );
        })
        return (
            <div className="sitaatit">
                {quotes}
            </div>
        );
    }
}

export default QuoteList;