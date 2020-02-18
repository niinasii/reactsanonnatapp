import React, { Component } from 'react';

class Quote extends Component {
    poistaKlikattu = (e) => {
        console.log("Poista nappia klikattu");
        this.props.removeQuote(this.state);
    }

    render() {
        return (
            <p id="sitaatti"><b>{this.props.id}</b><br /> {this.props.quote}<br></br><i>- {this.props.author}</i>
            <button id="poista" type="button" onClick={this.poistaKlikattu}>X</button>
            </p>
        );
    }
}

export default Quote;