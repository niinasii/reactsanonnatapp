import React, { Component } from 'react';

class Quote extends Component {
    poista = () => {
        console.log("Poista nappia klikattu");
        this.props.poista(this.props.id);
    }

    render() {
        return (
            <p id="sitaatti"><b>{this.props.id}</b><br /> {this.props.quotetext}<br></br><i>- {this.props.author}</i>
            <button className="nappi" id="poistanappi" type="button" onClick={this.poista}>X</button>
            </p>
        );
    }
}

export default Quote;