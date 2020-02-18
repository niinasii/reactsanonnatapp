import React, { Component } from 'react';

class QuoteForm extends Component {
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
                                    <input type="text" name="author"></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="quote">Sitaatti: </label>
                                </td>
                                <td>
                                    <input type="text" name="quote"></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="button" id="nappi">Lisää uusi henkilö</button>
                </form>
            </div>
        );
    }
}

export default QuoteForm;