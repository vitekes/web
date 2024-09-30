import { axiosClassic } from '../api/axios'

class CompaniesService {
	private readonly BASE_URL = '/companies'

	public async getAll() {
		const { data } = await axiosClassic.get(this.BASE_URL)
		return data
	}
	public async getOne(id: string) {
		const { data, status } = await axiosClassic.get(this.BASE_URL + `/${id}`)
		if (status === 404) throw new Error('Company not found!')
		return data
	}
}
export default new CompaniesService()
