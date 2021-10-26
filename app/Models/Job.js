

export class Job {
constructor(data){
this.id = data.id
this.jobTitle = data.jobTitle || ''
this.hours = data.hours || ''
this.rate = data.rate || ''
this.description = data.description || ''
this.company = data.company || ''
}

get Template() {
  return `
  <div class="col-12 mt-3">
    <div class=" elevation-3 rounded">
      <div class="p-3">
        <p class=""><b>Job Title: ${this.jobTitle}</b></p>
        <p class="f-10">Company: ${this.company}</p>
        <div>
          <p>Description: ${this.description}</p>
        </div>
        <div class="d-flex justify-content-between">
           <p class="m-0"><em>Rate:  ${this.rate}    |     Hours: $${this.hours}</em></p>
           <div class="">
           <button title="edit job" class='btn btn-primary justify-self-end p-1' onclick="app.jobsController.openEditModal('${this.id}')"><i class='mdi mdi-pencil'></i></button>
           <button title="delete job" class='btn btn-danger justify-self-end p-1'
            onclick="app.jobsController.deleteJobs('${this.id}')"><i class='mdi mdi-delete'></i></button>
        </div>
        </div>
      </div>
    </div>
  </div>
  `


// ${this.salary == true ? "salary": "hourly"}

}
}






// return `
// <div class="col-12 mt-3">
//   <div class="bg-light elevation-1 rounded">
//     <div class="p-3">
//       <p class=""><b>Job Title: ${this.title}</b></p>
//       <p class="f-10">Company: ${this.company}</p>
//       <div>
//         <p>Description: ${this.description}</p>
//       </div>
//       <div class="d-flex justify-content-between">
//          <p class="m-0"><em>Payment: ${this.pay}</em></p>
//          <div class="">
//          <button title="delete job" class='btn btn-danger justify-self-end p-1'
//           onclick="app.jobsController.deleteJobs('${this.id}')"><i class='mdi mdi-delete'></i></button>
//       </div>
//       </div>
//     </div>
//   </div>
// </div>
// `
