import React, { Component } from 'react';

class Quote extends Component {
    poista = (e) => {
        console.log("Poista nappia klikattu");
        this.props.poista(this.props.id);
    }

    update = (e) => {
        console.log("Update nappia klikattu");
        this.props.update(this.props.id);
    }

    render() {
        return (
            <p id="sitaatti"><b>{this.props.id}</b><br /> {this.props.quotetext}<br></br><i>- {this.props.author}</i>
            <button className="nappi" type="button" onClick={this.update}>✎</button>
            <button className="nappi" type="button" onClick={this.poista}>X</button>
            </p>
        );
    }
}

export default Quote;