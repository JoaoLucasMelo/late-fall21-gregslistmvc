export function getHouseForm() {
  return /*html*/`
  <form onsubmit="app.housesController.createHouse()">
    <div class="mb-3">
      <div>
        <label for="address" class="form-label">Address</label>
        <input type="text" class="form-control" name="address" id="address" aria-describedby="address"
          placeholder="Address..." required>
      </div>
    </div>
    <div class="mb-3 d-flex justify-content-between">
      <div>
        <label for="city" class="form-label">City</label>
        <input type="text" class="form-control" name="city" id="city" aria-describedby="city" placeholder="City..."
          required>
      </div>
      <div class="me-2 ms-2">
        <label for="year" class="form-label">Year Built</label>
        <input type="number" class="form-control" name="year" id="year" aria-describedby="year" placeholder="Year..."
          min="1950" max="2022" required>
      </div>
      <div>
        <label for="size" class="form-label">Size in Sq Ft</label>
        <input type="number" class="form-control" name="size" id="size" aria-describedby="size" placeholder="Size..."
          min='1' required>
      </div>
    </div>
    <div class="mb-3 d-flex justify-content-between">
      <div>
        <label for="bedroom" class="form-label">Bedrooms</label>
        <input type="number" class="form-control" name="bedroom" id="bedroom" aria-describedby="bedroom"
          placeholder="bedrooms..." min="1" required>
      </div>
      <div>
        <label for="bathroom" class="form-label">Bathrooms</label>
        <input type="number" class="form-control" name="bathroom" id="bathroom" aria-describedby="bathroom"
          placeholder="Bathrooms..." min="1" required>
      </div>
    </div>
    <div class="mb-3">
      <div>
        <label for="imgUrl" class="form-label">Image Url</label>
        <input type="url" class="form-control" name="imgUrl" id="imgUrl" aria-describedby="imgUrl"
          placeholder="Image Url..." required>
      </div>
    </div>
    <div class="mb-3 d-flex justify-content-end">
      <div>
        <label for="price" class="form-label">Price</label>
        <input type="number" class="form-control" name="price" id="price" aria-describedby="price"
          placeholder="Price..." min="1" required>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary">Post</button>
    </div>
  </form>`
}