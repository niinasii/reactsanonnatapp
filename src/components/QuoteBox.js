import React, { Component } from 'react';
import QuoteList from './QuoteList';
import QuoteForm from './QuoteForm';
var uuid = require('uuid');

class QuoteBox extends Component {
addNewQuote = (newquote) => { 
    newquote.id = uuid();
    this.state.sanonta.push(newquote);
    console.log(newquote);
    this.setState(newquote);
}
    render() {
        return (
            <section>
                <h2>Lisää sanonta</h2>
                <QuoteForm addQuote={this.addNewQuote} />
                <h2>Sanonnat</h2>
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