
export class House {

constructor(data){
this.id = data.id
this.price = data.price || 1
this.description = data.description || ''
this.levels = data.levels || 1
this.year = data.year || ''
this.bedrooms = data.bedrooms || 1
this.bathrooms = data.bathrooms || 1
this.imgUrl = data.imgUrl || ''

}
get Template() {
  return `
  <div class="col-md-3 mt-3">
    <div class="bg-light elevation-1 rounded">
      <img width="100%" class="house-img rounded-top" src="${this.imgUrl}" alt="house image">
      <div class="p-3">
        <p class="f-10 text-center"> Year Built: ${this.year}</p>
        <div>
        <p>Levels: ${this.levels}  <br>  Bedrooms: ${this.bedrooms}  <br>  Bathrooms: ${this.bathrooms}</p>
        </div>
        <p>Description: ${this.description}</p>
        <div class="d-flex">
          <p class="m-0"><em>Price: $${this.price}</em></p>
          </div>
          <div class="text-end">
          <button title="edit house" class='btn btn-primary justify-self-end p-1' onclick="app.housesController.openEditModal('${this.id}')"><i class='mdi mdi-pencil'></i></button>
          <button title="delete house" class='btn btn-danger justify-self-end p-1' onclick="app.housesController.deleteHouses('${this.id}')"><i class='mdi mdi-delete'></i></button>
          </div>
      </div>
    </div>
  </div>
  `
}


}