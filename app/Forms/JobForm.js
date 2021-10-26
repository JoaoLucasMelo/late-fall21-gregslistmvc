import { Job } from "../Models/Job.js";

// export function getJobForm() {
//   return /*html*/`
//   // <form onsubmit="app.jobsController.createJob()">
//   //   <div class="mb-3">
//   //     <div>
//   //       <label for="title" class="form-label">Job Title</label>
//   //       <input type="text" class="form-control" name="title" id="title" aria-describedby="title" placeholder="Title..."
//   //         required>
//   //     </div>
//   //   </div>
//   //   <div class="mb-3">
//   //   <div>
//   //     <label for="company" class="form-label">Company</label>
//   //     <input type="text" class="form-control" name="company" id="company" aria-describedby="company" placeholder="company..."
//   //       required>
//   //   </div>
//   // </div>
//   //   <div class="mb-3">
//   //     <div>
//   //       <label for="pay" class="form-label">Pay $</label>
//   //       <input type="number" class="form-control" name="pay" id="pay" aria-describedby="pay" placeholder="pay..." required>
//   //     </div>
//   //   </div>
//   //   <div class="mb-3 mt-2">
//   //     <div>
//   //       <label for="description" class="form-label">Description</label>
//   //       <textarea type="text" class="form-control" name="description" id="description" aria-describedby="description"
//   //         placeholder="Description..." min="5" max="250" required> </textarea>
//   //     </div>
//   //   </div>
//   //   <div class="modal-footer">
//   //     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//   //     <button type="submit" class="btn btn-primary">Post</button>
//   //   </div>
//   // </form>`




//   }

export function getJobForm(jobData = {}) {
  const job = new Job(jobData)
return /*html*/`
<form onsubmit="app.jobsController.createJob()">
  <div class="mb-3">
    <div>
      <label for="title" class="form-label">Job Title</label>
      <input type="text" class="form-control" name="title" id="jobTitle" value="${job.jobTitle}" aria-describedby="jobTitle" placeholder="Job Title..."
        required>
    </div>
  </div>
  <div class="mb-3">
    <div>
      <label for="company" class="form-label">Company</label>
      <input type="text" class="form-control" value="${job.company}" name="company" id="company" aria-describedby="company"
        placeholder="Company..." required>
    </div>
  </div>
  <div class="mb-3 d-flex justify-content-between">
  <div>
    <label for="rate" class="form-label">Rate</label>
    <input type="number" class="form-control" value="${job.rate}" name="rate" id="rate" aria-describedby="rate"
      placeholder="Rate..." min="1" required>
  </div>
  <div>
    <label for="hours" class="form-label">Hours</label>
    <input type="number" class="form-control" value="${job.hours}" name="hours" id="hours" aria-describedby="hours"
      placeholder="Hours..." min="1" required>
  </div>
  </div>
  <div class="mb-3 mt-2">
    <div>
      <label for="description" class="form-label">Description</label>
      <textarea type="text" class="form-control" name="description" id="description" aria-describedby="description"
        placeholder="Description..." min="5" max="250" required> ${job.description} </textarea>
    </div>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="submit" class="btn btn-primary">${job.id ? 'Edit' : 'Post'}</button>
  </div>
</form>`
  
}