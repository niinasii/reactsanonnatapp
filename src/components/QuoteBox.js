import React, { Component } from 'react';
import QuoteList from './QuoteList';
import QuoteForm from './QuoteForm';
//var uuid = require('uuid');

var sanonta = [
    { id: 1, author: 'Darth Vader', quote: 'Your lack of faith is disturbing' },
    { id: 2, author: 'Mace Windu', quote: 'These parties are over.' },
    { id: 3, author: 'Palpatine', quote: 'I am the senate.' },
    { id: 4, author: 'Obi-Wan Kenobi', quote: 'Well, hello there.' }
];

class QuoteBox extends Component {
    constructor(props) {
        super(props);

        //ID seuraava
        var maxid = 1;
        for (var i=0; i < sanonta.length; i++) {
            if (sanonta[i].id > maxid) maxid = sanonta[i].id
        }

        this.state = { seuraavaid: maxid + 1, sanonta: sanonta };
    }

    addNewQuote = (newquote) => {
        //newquote.id = uuid();
        newquote.id = this.state.seuraavaid;
        this.state.sanonta.push(newquote);
        console.log(newquote);
        this.setState({seuraavaid: this.state.seuraavaid + 1});
    }

    poista = (poistettavaID) => {
        console.log(poistettavaID)
        var index = this.state.sanonta.findIndex((quot) => quot.id === poistettavaID );
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