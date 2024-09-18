import { House } from "@/models/House.js";
import { api } from "./AxiosService.js";
import { AppState } from "@/AppState.js";

class HousesService {


  async getHouses() {
    const response = await api.get('/api/houses');
    const newHouses = response.data.map(house => new House(house));

    AppState.houses = newHouses;
  }
}

export const housesService = new HousesService();