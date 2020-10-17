//create map
const map = L.map("mapid").setView([-27.2182154,-49.6452308], 15);

//creat and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",).addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

//creat and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remover icone anterior
    marker && map.removeLayer(marker);

    //add icon tileLaye
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

//upload de fotos
function addPhotoField() {
    //pegar container de fotos

    const container = document.querySelector('#images')

    //pegar container para duplicar new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //duplicar última img add
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)
    
    //verificar se o campo está vazio
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }
        
    //limpar o campo antes de adicionar o container de imagem
    input.value = ""

    //add o clone ao container de images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        span.parentNode.children[0].value = ""
        return
    }

    span.parentNode.remove();
}

//select yes or no 
function toggleSelect(event){
    document.querySelectorAll('.button-select button')
    .forEach( function (button) {
        button.classList.remove('active')
    })

    const button = event.currentTarget
    button.classList.add('active')
    
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value
}

function validate(event) {
console.log(event)
    //pegando informações do lat e lng do front
    const latValue= document.querySelector('[name=lat]').value;
    const lngValue= document.querySelector('[name=lng]').value;
    
    //definindo variável como diferente de vazio
    console.log("Está preenchido?", latValue != "")
    const isFilled = latValue != "" && lngValue != "";


    if(isFilled) {
        alert('Seu formulário foi enviado')
    }else{
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    }
}

