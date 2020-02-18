import React, { Component } from 'react';
import QuoteList from './QuoteList';
import QuoteForm from './QuoteForm';
var uuid = require('uuid');

var sanonta = [
    { id: 1, author: 'Mummo', quote: 'Eteenpäin sanoi mummo lumessa' },
    { id: 2, author: 'Esterin veli', quote: 'Sataa kuin Esterin perseestä' },
    { id: 3, author: 'Väinö Linna', quote: 'Tulta munille!' }
];

class QuoteBox extends Component {
    constructor(props) {
        super(props);
        this.state = { sanonta: sanonta };
    }

addNewQuote = (newquote) => {
    newquote.id = uuid();
    this.state.sanonta.push(newquote);
    console.log(newquote);
    this.setState(this.state);
}
render() {
    return (
        <section>
            <h2>Lisää sanonta</h2>
            <QuoteForm addQuote={this.addNewQuote} />
            <h2>Sanonnat</h2>
            <QuoteList quotes={this.state.sanonta} />
        </section>
    );
}
}

export default QuoteBox;