import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";
import { Job } from "../Models/Job.js";
import { Car } from "../Models/Car.js";




  export function saveStateHouses(){
    localStorage.setItem('gregslistHouses', JSON.stringify({
      houses: ProxyState.houses
    }))
  }
  export function saveStateCars(){
    localStorage.setItem('gregslistCars', JSON.stringify({
      cars: ProxyState.cars
    }))
  }
  export function saveStateJobs(){
    localStorage.setItem('gregslistJobs', JSON.stringify({
      jobs: ProxyState.jobs
    }))
  }

  export function loadStateHouses(){

    let data = JSON.parse(localStorage.getItem('gregslistHouses'))
    if(data != null){
      ProxyState.houses = data.houses.map(h => new House(h))
    }
  }

  export function loadStateCars(){

    let data = JSON.parse(localStorage.getItem('gregslistCars'))
    if(data != null){
      ProxyState.cars = data.cars.map(c => new Car(c))
    }
  }

  export function loadStateJobs(){

    let data = JSON.parse(localStorage.getItem('gregslistJobs'))
    if(data != null){
      ProxyState.jobs = data.jobs.map(j => new Job(j))
    }
  }