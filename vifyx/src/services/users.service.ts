import { axiosClassic } from "src/api/axios"

class UsersService {
  private readonly BASE_URL = "/users";

  public async getAll() {
    const { data } = await axiosClassic.get(this.BASE_URL);
    return data;
  }
  public async getProfile() {
    const { data, status } = await axiosClassic.get(this.BASE_URL + `/my_profile`);
    if (status === 404) throw new Error("Album not found!");
    return data;
  }
}
export default new UsersService();
