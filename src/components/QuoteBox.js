import React, { Component } from 'react';
import QuoteList from './QuoteList';

class QuoteBox extends Component {
    render() {
        return (
            <section>
                <h2>Sanonnat</h2>
                <QuoteForm addQuote={this.addNewQuote}
                <QuoteList quotes={sanonta}/>
            </section>
        );
    }
}

var sanonta = [
    { id: 1, author: 'Mummo', quotetext: 'Eteenpäin sanoi mummo lumessa' },
    { id: 2, author: 'Esterin veli', quotetext: 'Sataa kuin Esterin perseestä' },
    { id: 3, author: 'Väinö Linna', quotetext: 'Tulta munille!' }
];

export default QuoteBox;