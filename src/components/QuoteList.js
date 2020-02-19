import React, { Component } from 'react';
import Quote from './Quote';

class QuoteList extends Component {
    render() {
        var self = this;
        const quotes = this.props.quotes.map(function(quote) {
            return (
            <Quote key={quote.id} author={quote.author} quotetext={quote.quotetext} id={quote.id} poista={self.props.poista} update={self.props.update}/> 
            );
        })
        return (
            <div id="sitaatit">
                {quotes}
            </div>
        );
    }
}

export default QuoteList;