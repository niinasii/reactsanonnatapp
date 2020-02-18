import React, { Component } from 'react';

class Quote extends Component {
    poista = (e) => {
        console.log("Poista nappia klikattu");
        this.props.poista(this.props.id);
    }

    render() {
        return (
            <p id="sitaatti"><b>{this.props.id}</b><br /> {this.props.quote}<br></br><i>- {this.props.author}</i>
            <button id="poista" type="button" onClick={this.poista}>X</button>
            </p>
        );
    }
}

export default Quote;