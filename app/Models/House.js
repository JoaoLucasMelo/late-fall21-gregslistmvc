
import { generateId } from "../Utils/generateId.js"
export class House {

constructor(data){
this.id = generateId()
this.price = data.price
this.address = data.address
this.city = data.city
this.year = data.year
this.size = data.size
this.bedroom = data.bedroom
this.bathroom = data.bathroom
this.imgUrl = data.imgUrl

}
get Template() {
  return `
  <div class="col-md-3 mt-3">
    <div class="bg-light elevation-1 rounded">
      <img width="100%" class="car-img rounded-top" src="${this.imgUrl}" alt="car image">
      <div class="p-3">
        <p class="text-center"><b>${this.address}</b></p>
        <p class="f-10 text-center">City: ${this.city} | Year Built: ${this.year}</p>
        <div>
        <p>Size: ${this.size}sq ft |  Bedrooms: ${this.bedroom}  |  Bathrooms: ${this.bathroom}</p>
        </div>
        <div class="d-flex">
          <p class="m-0"><em>Price: $${this.price}</em></p>
          </div>
          <div class="text-end">
          <button title="delete house" class='btn btn-danger justify-self-end p-1' onclick="app.housesController.deleteHouses('${this.id}')"><i class='mdi mdi-delete'></i></button>
          </div>
      </div>
    </div>
  </div>
  `
}


}