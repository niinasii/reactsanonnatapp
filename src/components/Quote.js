import React, { Component } from 'react';

class Quote extends Component {
    render() {
        return (
            <p id="sitaatti"><b>{this.props.id}</b> {this.props.quotetext}<br></br><i>- {this.props.author}</i></p>
        );
    }
}

export default Quote;