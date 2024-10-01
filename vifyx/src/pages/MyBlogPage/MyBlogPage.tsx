import usersService from 'src/services/users.service'

export default function MyBlogPage() {
	usersService.getProfile().then(json=>console.log(json))	

	
	return <div className='container md:px-0 px-1 md:w-[1120px] mx-auto'>dev</div>
}
