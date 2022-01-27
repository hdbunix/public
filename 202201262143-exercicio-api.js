/// <reference types="cypress" />
var cep;
//cep = window.prompt("Digite o CEP")
describe("Teste api dos correios", () => {
    it("Metodo GET", () => {
        cep = window.prompt("Digite o CEP")
        cy.request({
            method: "GET",
            url: "https://viacep.com.br/ws/"+cep+"/json/"
        }).then(response => console.log(response))
    })
    
})