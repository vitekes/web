import { axiosClassic } from "src/api/axios";

class QuestsService {
  private readonly BASE_URL = "/quests";

  public async getAll() {
    const { data } = await axiosClassic.get(this.BASE_URL);
    return data;
  }
  public async getOne(id: string) {
    const { data, status } = await axiosClassic.get(this.BASE_URL + `/${id}`);
    if (status === 404) throw new Error("Quest not found!");
    return data;
  }
}
export default new QuestsService();
