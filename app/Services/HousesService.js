import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"
class HousesService {

deleteHouses(id){
  ProxyState.houses = ProxyState.houses.filter(house => house.id != id)
}
createHouse(houseData) {
  const house = new House(houseData)
  ProxyState.houses = [...ProxyState.houses, house]
}












}









export const housesService = new HousesService()