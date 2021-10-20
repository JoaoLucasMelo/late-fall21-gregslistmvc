import { jobsService } from "../Services/JobsServices.js"

_drawJobs(){
  const jobs = ProxyState.jobs
  let template = ''
  jobs.forEach(job => template += job.Template)
  document.getElementById('listings').innerHTML = template

}



export class JobsController {




showJobs(){
  _drawJobs()
  document.getElementById('form-button').classList.remove('visually-hidden')
  document.getElementById('modal-body-slot').innerHTML = getJobForm()
}
createHouse() {
  window.event.preventDefault()
  /** @type {HTMLFormElement} */
  const formElem = window.event.target
  const jobData = {
    title: formElem.title.value,
    pay: formElem.pay.value,
    salary: formElem.salary.value,
    description: formElem.description.value,
    company: formElem.company.value
  }
  jobsService.createJob(jobData)

formElem.reset()
bootstrap.Modal.getInstance(document.getElementById('form-modal')).toggle()
}


}

