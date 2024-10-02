import { axiosClassic } from "src/api/axios";

class ContestsService {
  private readonly BASE_URL = "/contests";

  public async getAll() {
    const { data } = await axiosClassic.get(this.BASE_URL);
    return data;
  }
  public async getOne(id: string) {
    const { data, status } = await axiosClassic.get(this.BASE_URL + `/${id}`);
    if (status === 404) throw new Error("Contest not found!");
    return data;
  }
}

export default new ContestsService();
