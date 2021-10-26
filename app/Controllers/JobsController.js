import { ProxyState } from "../AppState.js"
import { jobsService } from "../Services/JobsServices.js"
import { getJobForm } from "../Forms/Jobform.js"
// import { loadStateJobs, saveStateJobs } from "../Utils/LocalStorage.js";



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


async showJobs(){
  try{
    await jobsService.getAllJobs()
  document.getElementById('form-button').classList.remove('visually-hidden')
  document.getElementById('modal-body-slot').innerHTML = getJobForm()
  } catch (error) {

  }
}

async createJob(id) {
  try{
  window.event.preventDefault()
  /** @type {HTMLFormElement} */

  const formElem = window.event.target
  const jobData = {
    jobTitle: formElem.jobTitle.value,
    hours: formElem.hours.value,
    description: formElem.description.value,
    rate: formElem.rate.value,
    company: formElem.company.value
  }
if (id) {

  await jobsService.editJob(jobData, id)
} else {
  await jobsService.createJob(jobData)
}

formElem.reset()
bootstrap.Modal.getInstance(document.getElementById('form-modal')).toggle()
} catch (error) {
  console.error("[CREATE ERROR]", error.message)
}
}

openCreateModal(){
  document.getElementById('form-button').classList.remove('visually-hidden')
  document.getElementById('modal-body-slot').innerHTML = getJobForm()
}
  
async openEditModal(id){

const job = ProxyState.jobs.find(j=> j.id == id)
document.getElementById('modal-body-slot').innerHTML = getJobForm(job)
bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).toggle()
}

 async deleteJobs(id){
   try{
  await jobsService.deleteJobs(id)
  } catch(error) {
    console.error("[DELETE ERROR]", error.message)
  }
}

  logo(){
    document.getElementById('form-button').classList.add('visually-hidden')
    document.getElementById('listings').innerHTML = `          <div>
    <img src="129934248-fe999e3e-b167-485c-9457-663c95329182-removebg-preview - Copy.png" width="950"
      height="250" alt="">
  </div>`
  }


}

