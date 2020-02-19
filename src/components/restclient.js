const restURL = "http://localhost:8080/api/quotes";
var axios = require('axios');

function haesanonnat(callback) {
    return axios.get(restURL)
        .then(function (lista) {
            callback(lista.data);
        })
};

export function luosanonta(sanonta, callback) {
    axios.post(restURL, sanonta)
    .then(function (response) {
        console.dir(response);
        callback(response.status);
    });
}

function poistaSanonta(id) {
    return axios.delete('/api/quotes/'+id)
    .then(res=>{
        console.log("Rest: Deletoitu");
        console.dir(res);
    });
}

export function päivitäsanonta(sanonta, callback) {
    return axios.put(restURL + 'quotes/', {
    })
}

export {haesanonnat, poistaSanonta}

/* addNewQuote = (newquote) => {
    this.state.sanonta.push(newquote);
    console.log(newquote);
    this.setState({ seuraavaid: this.state.seuraavaid + 1 });
} */

/* poista = (poistettavaID) => {
        console.log(poistettavaID)
        var index = this.state.sanonta.findIndex((quot) => quot.id === poistettavaID);
        this.state.sanonta.splice(index, 1);
        this.setState(this.state);
    } */