import React, { Component } from 'react';

class QuoteForm extends Component {

    state = { author: '', quote: '' }
    authorMuuttunut = (e) => { this.setState({ author: e.target.value }); }
    sitaattiMuuttunut = (e) => { this.setState({ quote: e.target.value }); }

    nappiaKlikattu = (e) => {
        console.log("Nappia klikattu");
        this.props.addQuote(this.state);
    }
    render() {
        return (
            <div id="lomake">
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="author">Author: </label>
                                </td>
                                <td>
                                    <input type="text" name="author" value={this.state.author} onChange={this.authorMuuttunut}></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="quote">Sitaatti: </label>
                                </td>
                                <td>
                                    <input type="text" name="quote" value={this.state.quote} onChange={this.sitaattiMuuttunut}></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="button" id="nappi" onClick={this.nappiaKlikattu}>Lisää uusi sitaatti</button>
                </form>
            </div>
        );
    }
}

export default QuoteForm;