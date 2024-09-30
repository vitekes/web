import { axiosClassic } from 'src/api/axios'

class CommentsService {
	private readonly BASE_URL = '/comments'

	public async getAll() {
		const { data } = await axiosClassic.get(this.BASE_URL)
		return data
	}
	public async getOne(id: string) {
		const { data, status } = await axiosClassic.get(this.BASE_URL + `/${id}`)
		if (status === 404) throw new Error('Comment not found!')
		return data
	}
}
export default new CommentsService()
