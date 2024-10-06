import Logo from 'components/logo/Logo'
import MenuList from 'components/menu_list/MenuList'
import icon1 from 'images/icons/Icons_1.svg'
import icon2 from 'images/icons/Icons_2.svg'
// import icon3 from 'images/icons/Icons_3.svg'
// import icon4 from 'images/icons/Icons_4.svg'
import icon5 from 'images/icons/Icons_5.svg'
import { Link } from 'react-router-dom'
import Avatar from '../avatar/Avatar'

const links = [
	{
		link: '/',
		icon: icon5,
	},
	{
		link: '/',
		icon: icon2,
	},
	{
		link: '/',
		icon: icon1,
	},
]

export default function Header() {
	return (
		<header className='pt-[15px] md:pt-[30px]'>
			<div className='container md:px-0 px-1 md:w-[1120px] mx-auto flex justify-between items-center border-b pb-[15px] mb:pb-[25px]'>
				<Logo />
				<MenuList />
				<div className='inline-flex gap-[28px] items-center'>
					<div className='inline-flex space-x-[9px] lg:space-x-[20px]'>
						{links.map(({ icon, link }, index) => (
							<div className='w-[22px] lg:w-[30px]' key={index}>
								<Link to={link}>
									<img src={icon} alt={`${icon}`} />
								</Link>
							</div>
						))}
					</div>
					<Avatar />
				</div>
			</div>
		</header>
	)
}
