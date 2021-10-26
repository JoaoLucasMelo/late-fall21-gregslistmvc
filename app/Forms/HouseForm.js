import { House } from "../Models/House.js"

export function getHouseForm(houseData = {}) {
  const house = new House(houseData)
  return /*html*/`
  <form onsubmit="app.housesController.createHouse('${house.id}')">
    </div>
    <div class="mb-3 d-flex justify-content-between">
    <div class="me-2 ms-2">
    <label for="year" class="form-label">Year Built</label>
    <input type="number" class="form-control" name="year" value="${house.year}" id="year" aria-describedby="year" placeholder="Year..."
      min="1950" max="2022" required>
    </div>
      <div>
        <label for="levels" class="form-label">Levels</label>
        <input type="number" class="form-control" name="levels" id="bathroom" aria-describedby="levels" value="${house.levels}"
          placeholder="Levels..." min="1" required>
      </div>
    </div>
    <div class="mb-3 d-flex justify-content-between">
      <div>
        <label for="bedroom" class="form-label">Bedrooms</label>
        <input type="number" class="form-control" value="${house.bedrooms}" name="bedroom" id="bedroom" aria-describedby="bedroom"
          placeholder="Bedrooms..." min="1" required>
      </div>
      <div>
        <label for="bathroom" class="form-label">Bathrooms</label>
        <input type="number" class="form-control" value="${house.bathrooms}" name="bathroom" id="bathroom" aria-describedby="bathroom"
          placeholder="Bathrooms..." min="1" required>
      </div>
    </div>
    <div class="mb-3">
    <div>
      <label for="description" class="form-label">Description</label>
      <textarea type="text"  class="form-control"  name="description" id="description"
        aria-describedby="description" placeholder="Description..." min="5" max="250" required>${house.description}</textarea>
    </div>
  </div>
    <div class="mb-3">
      <div>
        <label for="imgUrl" class="form-label">Image Url</label>
        <input type="url" class="form-control" value="${house.imgUrl}" name="imgUrl" id="imgUrl" aria-describedby="imgUrl"
          placeholder="Image Url..." required>
      </div>
    </div>
    <div class="mb-3 d-flex justify-content-end">
      <div>
        <label for="price" class="form-label">Price</label>
        <input type="number" class="form-control" name="price" value="${house.price}" id="price" aria-describedby="price"
          placeholder="Price..." min="1" required>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary">${ house.id ? 'Save' : 'Post' }</button>
    </div>
  </form>`
}