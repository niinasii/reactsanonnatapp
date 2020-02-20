import React, { Component } from 'react';
import QuoteList from './QuoteList';
import QuoteForm from './QuoteForm';
import { haesanonnat, poistasanonta, luosanonta, päivitäsanonta } from './restclient';

class QuoteBox extends Component {

    state = {
        sanonnat: [],
        msg: "Haetaan dataa..."
    };

    componentDidMount = () => {
        this.haeJaPaivita();
    }

    haeJaPaivita = () => {
        haesanonnat(lista => {
            this.setState({ sanonnat: lista, msg: null });
        });
    }

    addNewQuote = (uusisanonta) => {
        luosanonta(uusisanonta, () => {
            this.haeJaPaivita();
        })
    }

    poista = (poistettavaID) => {
        poistasanonta(poistettavaID)
            .then((response) => {
                this.haeJaPaivita();
            });
    }

    update = (updatedquote) => {
        päivitäsanonta(updatedquote, () => {
            this.haeJaPaivita();
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