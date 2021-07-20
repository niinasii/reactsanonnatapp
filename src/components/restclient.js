const restURL = "http://localhost:4000/api/quotes"; //back-end serveri pyörii portissa 4000 ja apirajapinnalla on reititys
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

export {haesanonnat, poistasanonta, luosanonta}