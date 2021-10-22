import { ProxyState } from "../AppState.js"
import { getHouseForm } from "../Forms/Houseform.js"
import { housesService } from "../Services/HousesService.js"
import { loadStateHouses, saveStateHouses } from "../Utils/LocalStorage.js";


function _drawHouses() {
  const houses = ProxyState.houses
  let template = ''
  houses.forEach(house => template += house.Template)
  document.getElementById('listings').innerHTML = template

  
}

export class HousesController {
constructor(){
  ProxyState.on('houses', _drawHouses)
  ProxyState.on('houses', saveStateHouses)

}

createHouse() {
  window.event.preventDefault()
  /** @type {HTMLFormElement} */
  const formElem = window.event.target
  const houseData = {
    address: formElem.address.value,
    city: formElem.city.value,
    year: formElem.year.value,
    price: formElem.price.value,
    size: formElem.size.value,
    bedroom: formElem.bedroom.value,
    bathroom: formElem.bathroom.value,
    imgUrl: formElem.imgUrl.value
  }
  housesService.createHouse(houseData)

formElem.reset()
bootstrap.Modal.getInstance(document.getElementById('form-modal')).toggle()
}
showHouses(){
_drawHouses()
document.getElementById('form-button').classList.remove('visually-hidden')
document.getElementById('modal-body-slot').innerHTML = getHouseForm()
loadStateHouses()
}

deleteHouses(id){
housesService.deleteHouses(id)
}





}