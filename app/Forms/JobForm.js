export function getJobForm() {
  return /*html*/`
  <form onsubmit="app.jobsController.createJob()">
    <div class="mb-3">
      <div>
        <label for="title" class="form-label">Job Title</label>
        <input type="text" class="form-control" name="title" id="title" aria-describedby="title" placeholder="Title..."
          required>
      </div>
    </div>
    <div class="mb-3">
    <div>
      <label for="company" class="form-label">Company</label>
      <input type="text" class="form-control" name="company" id="company" aria-describedby="company" placeholder="company..."
        required>
    </div>
  </div>
    <div class="mb-3">
      <div>
        <label for="pay" class="form-label">Pay $</label>
        <input type="number" class="form-control" name="pay" id="pay" aria-describedby="pay" placeholder="pay..." required>
      </div>
    </div>
    <div class="mb-3 mt-2">
      <div>
        <label for="description" class="form-label">Description</label>
        <textarea type="text" class="form-control" name="description" id="description" aria-describedby="description"
          placeholder="Description..." min="5" max="250" required> </textarea>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary">Post</button>
    </div>
  </form>`
  }