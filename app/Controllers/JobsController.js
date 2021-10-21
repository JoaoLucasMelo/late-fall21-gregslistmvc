import { ProxyState } from "../AppState.js"
import { jobsService } from "../Services/JobsServices.js"
import { getJobForm } from "../Forms/Jobform.js"



function _drawJobs(){
  const jobs = ProxyState.jobs
  let template = ''
  jobs.forEach(job => template += job.Template)
  document.getElementById('listings').innerHTML = template

}



export class JobsController {

  constructor(){
    ProxyState.on('jobs', _drawJobs)
  
  }


showJobs(){
  _drawJobs()
  document.getElementById('form-button').classList.remove('visually-hidden')
  // document.getElementById('modal-body-slot').innerHTML = getJobForm()
}
createJob() {
  window.event.preventDefault()
  /** @type {HTMLFormElement} */

  const formElem = window.event.target
  const jobData = {
    title: formElem.title.value,
    pay: formElem.pay.value,
    description: formElem.description.value,
    company: formElem.company.value
  }

  jobsService.createJob(jobData)

formElem.reset()
bootstrap.Modal.getInstance(document.getElementById('form-modal')).toggle()
}
showJobs(){
  _drawJobs()
  document.getElementById('form-button').classList.remove('visually-hidden')
  document.getElementById('modal-body-slot').innerHTML = getJobForm()
  }
  
  deleteJobs(id){
    console.log(id)
  jobsService.deleteJobs(id)
  }

  logo(){
    document.getElementById('form-button').classList.add('visually-hidden')
    document.getElementById('listings').innerHTML = `          <div>
    <img src="129934248-fe999e3e-b167-485c-9457-663c95329182-removebg-preview - Copy.png" width="950"
      height="250" alt="">
  </div>`
  }


}

