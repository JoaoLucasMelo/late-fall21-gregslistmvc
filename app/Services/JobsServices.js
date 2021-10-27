import { ProxyState } from "../AppState.js"
import { Job } from "../Models/Job.js"
import { sandboxApi } from "./AxiosService.js"



class JobsService {

  async getAllJobs(){
    const res = await sandboxApi.get('jobs')
    const jobs = res.data.map(j => new Job(j))
    ProxyState.jobs = jobs
  }
  async createJob(jobData) {
    const res = await sandboxApi.post('jobs', jobData)
    const job = new Job(res.data)
    ProxyState.jobs = [...ProxyState.jobs, job]
    
  }
  async editJob(jobData, id) {

    const res = await sandboxApi.put('jobs/' + id, jobData)
    const index = ProxyState.jobs.findIndex(j => j.id == id)
    ProxyStatejobs.splice(index, 1, new Job(res.data))
    ProxyStatejobs = ProxyStatejobs
  }
  
  async deleteJobs(id){
    await sandboxApi.delete('jobs/' + id)
  ProxyState.jobs = ProxyState.jobs.filter(job => job.id != id)
  }


}




export const jobsService = new JobsService()