function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() ) //.then((res)=>{return res.jason() }) - função anônima que retorna um valor de forma antiga
    .then( states => {
        
        for( const state of states) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }

    } )
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]") //input[name=state]

    const ufValue = event.target.value //console.log(event.target.value)

    const indexOfSelectedState = event.target.selectedIndex 
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    
    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json() ) //.then((res)=>{return res.jason() }) - função anônima que retorna um valor de forma antiga
    .then( cities => {
        for( const city of cities) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    } )

}


document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities) //ou getCities(event)

//Item de coleta
//Pegar todos os li's 
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}

function handleSelectedItem(event){
    console.log(event.target.dataset.id)
}
