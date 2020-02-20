const restURL = "http://localhost:8080/api/quotes";
var axios = require('axios');

function haesanonnat(callback) {
    return axios.get(restURL)
        .then(function (lista) {
            callback(lista.data);
        })
};

function luosanonta(sanonta, callback) {
    axios.post(restURL, sanonta)
    .then(function (response) {
        console.dir(response);
        callback(response.status);
    });
}

function poistasanonta(id) {
    return axios.delete(restURL+'/'+id)
    .then(res=>{
        console.log("Rest: Deletoitu");
        console.dir(res);
    });
}

function päivitäsanonta(sanonta, callback) {
    return axios.put(restURL + 'quotes/', )
    .then(res => {
        console.log("Rest: Päivitetty");
        console.dir(res);
    })
}

export {haesanonnat, poistasanonta, luosanonta, päivitäsanonta}

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