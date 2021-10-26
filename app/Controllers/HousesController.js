import { ProxyState } from "../AppState.js"
import { getHouseForm } from "../Forms/Houseform.js"
import { housesService } from "../Services/HousesService.js"
// import { loadStateHouses, saveStateHouses } from "../Utils/LocalStorage.js";


function _drawHouses() {
  const houses = ProxyState.houses
  let template = ''
  houses.forEach(house => template += house.Template)
  document.getElementById('listings').innerHTML = template

  
}

export class HousesController {
constructor(){
  ProxyState.on('houses', _drawHouses)

}

async showHouses(){
  document.getElementById('buttonchange').innerHTML = `<button title='post car' type="button" onclick="app.housesController.openCreateModal()"
  class="btn me-5 btn-secondary visually-hidden" id="form-button1">
  <div class="d-flex flex-row align-content-center ">
    <p class="m-0"><b>Post Listing</b></p><i class="mdi mdi-plus">
    </i>
  </div>
</button>`
try{
  await housesService.getAllHouses()
  document.getElementById('form-button1').classList.remove('visually-hidden')
  document.getElementById('modal-body-slot').innerHTML = getHouseForm()
} catch (error){

}
}
async createHouse(id) {
  try {
  window.event.preventDefault()
  /** @type {HTMLFormElement} */
  const formElem = window.event.target
  const houseData = {
    levels: formElem.levels.value,
    year: formElem.year.value,
    price: formElem.price.value,
    description: formElem.description.value,
    bedroom: formElem.bedroom.value,
    bathroom: formElem.bathroom.value,
    imgUrl: formElem.imgUrl.value
  }
if (id){
  await housesService.editHouses(houseData, id)
} else {
  await housesService.createHouse(houseData)
}


formElem.reset()
bootstrap.Modal.getInstance(document.getElementById('form-modal1')).toggle()
} catch (error) {
  console.error("[CREATE ERROR]", error.message)
}
}

openCreateModal(){
  document.getElementById('modal-body-slot').innerHTML = getHouseForm(house)
  bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal1')).toggle()
}

async openEditModal(id) {
  const house = ProxyState.houses.find(c => c.id == id)
  document.getElementById('modal-body-slot').innerHTML = getHouseForm(house)
  bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal1')).toggle()
}





async deleteHouses(id){
  try{
await housesService.deleteHouses(id)
} catch (error){

  console.error("[DELETE ERROR]", error.message)
}
}
}