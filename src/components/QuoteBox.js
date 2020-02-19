import React, { Component } from 'react';
import QuoteList from './QuoteList';
import QuoteForm from './QuoteForm';
var axios = require('axios');

var sanonta = [
    { id: 1, author: 'Darth Vader', quote: 'Your lack of faith is disturbing' },
    { id: 2, author: 'Mace Windu', quote: 'These parties are over.' },
    { id: 3, author: 'Palpatine', quote: 'I am the senate.' },
    { id: 4, author: 'Obi-Wan Kenobi', quote: 'Well, hello there.' }
];

class QuoteBox extends Component {

    state = {
        sanonnat: []
    };

    constructor(props) {
        super(props);
        this.state = { sanonta: sanonta };
    }

    componentDidMount = () => {
        axios.get('http://localhost:8080/api/quotes')
            .then(res => {
                const oppilaat = res.data;
                this.setState({ oppilaat });
                console.log(oppilaat);
            })
    }

    addNewQuote = (newquote) => {
        this.state.sanonta.push(newquote);
        console.log(newquote);
        this.setState({ seuraavaid: this.state.seuraavaid + 1 });
    }

    poista = (poistettavaID) => {
        console.log(poistettavaID)
        var index = this.state.sanonta.findIndex((quot) => quot.id === poistettavaID);
        this.state.sanonta.splice(index, 1);
        this.setState(this.state);
    }

    render() {
        return (
            <section>
                <h2>Lisää sanonta</h2>
                <QuoteForm addQuote={this.addNewQuote} />
                <h2>Sanonnat</h2>
                <QuoteList quotes={this.state.sanonta} poista={this.poista} />
            </section>
        );
    }
}

export default QuoteBox;