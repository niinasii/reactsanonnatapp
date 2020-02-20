import React, { Component } from 'react';

class QuoteForm extends Component {

    state = { author: '', quotetext: '' }
    authorMuuttunut = (e) => { this.setState({ author: e.target.value }); }
    sitaattiMuuttunut = (e) => { this.setState({ quotetext: e.target.value }); }

    nappiaKlikattu =()=> {
        this.props.addQuote(this.state);
        this.setState({quotetext: '', author: ''});
        console.log("Nappia klikattu");
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
                                    <input type="text" name="author" value={this.state.author} onChange={this.authorMuuttunut}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="quote">Sitaatti: </label>
                                </td>
                                <td>
                                    <input type="text" name="quotetext" value={this.state.quotetext} onChange={this.sitaattiMuuttunut}/>
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