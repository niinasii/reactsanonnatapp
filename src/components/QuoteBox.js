import React, { Component } from 'react';
import QuoteList from './QuoteList';
import QuoteForm from './QuoteForm';

var axios = require('axios');

/*var sanonta = [
    { id: 1, author: 'Darth Vader', quotetext: 'Your lack of faith is disturbing' },
    { id: 2, author: 'Mace Windu', quotetext: 'These parties are over.' },
    { id: 3, author: 'Palpatine', quotetext: 'I am the senate.' },
    { id: 4, author: 'Obi-Wan Kenobi', quotetext: 'Well, hello there.' }
];*/

class QuoteBox extends Component {

    state = {
        sanonnat: []
    };

    componentDidMount = () => {
        axios.get('http://localhost:8080/api/quotes')
            .then(res => {
                const sanonnat = res.data;
                this.setState({ sanonnat });
                console.log(sanonnat);
            })
    }

    render() {
        return (
            <section>
                <h2>Lisää sanonta</h2>
                <QuoteForm addQuote={this.addNewQuote} />
                <h2>Sanonnat</h2>
                <QuoteList quotes={this.state.sanonnat} poista={this.poista} update={this.update} />
            </section>
        );
    }
}

export default QuoteBox;