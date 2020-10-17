const options = {
    dragging: false,
    touch: false,
    dooubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//create map
const map = L.map("mapid", options).setView([-27.2182154,-49.6452308], 15);

//creat and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",).addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//creat and add marker
const spanLat = document.querySelector('span[data-lat]')
const spanLng = document.querySelector('span[data-lng]')

L
.marker([spanLat.dataset.lat,spanLng.dataset.lng], { icon })
.addTo(map)

  // images gallery

  function selectImage(event) {
      const button = event.currentTarget

      //remover todas as classes .active
      const buttons = document.querySelectorAll(".images button")
      buttons.forEach(removeActiveClass)

      function removeActiveClass(button) {
          button.classList.remove("active")
      }

      // selecionar a imagem clicada
      const image = button.children[0]
      const imageContainer = document.querySelector(".orphanage-details > img")

      //atualizar o container de imagem
      imageContainer.src = image.src

      //adicionar a classe .active para este botão
      button.classList.add("active")
  }
