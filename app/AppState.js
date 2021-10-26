import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Job } from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Car[]} */
  cars = []

  houses = []

  jobs = [
    new Job({ title: 'Store Manager', pay: 50000, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti ad ipsam voluptates unde saepe, eaque autem expedita, repellat incidunt dolor.', company: 'Target', salary: true}),
    new Job({ title: 'Clerk', pay: 25000, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit repellat incidunt dolor.', company: 'Stinker', salary: false})
  ]

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
