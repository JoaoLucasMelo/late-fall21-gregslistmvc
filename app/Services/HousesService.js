import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"
import { sandboxApi } from "./AxiosService.js"
class HousesService {


async getAllHouses() {
  const res = await sandboxApi.get('houses')
  const houses = res.data.map(h => new House(h))
  ProxyState.houses = houses
}

async createHouse(houseData) {
  const res = await sandboxApi.post('houses', houseData)
  const house = new House(res.data)
  ProxyState.houses = [...ProxyState.houses, house]
}

async editHouse(houseData, id){
  const res = await sandboxApi.put('houses/' + id, houseData)
  const index = ProxyState.houses.findIndex( h => h.id == id )
  ProxyState.houses.splice(index,1,new House(res.data))
  ProxyState.houses = ProxyState.houses
}

async deleteHouses(id){
  await sandboxApi.delete('/houses' + id)
  ProxyState.houses = ProxyState.houses.filter(house => house.id != id)
}





}









export const housesService = new HousesService()