import avatar from 'images/icons/avatar.jpg'
import { useDispatch, useSelector } from 'react-redux'
import {
	closeModal,
	openModal,
} from 'src/redux/features/modal_status/modalStatusSlice'
import { RootState } from 'src/redux/store'
import SidebarModal from '../modals/SidebarModal'

export default function Avatar() {
	const dispatch = useDispatch()
	const menuSidebarModal = useSelector(
		(state: RootState) => state.modalStatuses.modals.menu_sidebar.isOpen
	)

	const handleClick = () => {
		if (menuSidebarModal) {
			dispatch(closeModal('menu_sidebar'))
		} else {
			dispatch(openModal('menu_sidebar'))
		}
	}

	return (
		<div className='w-[35px] lg:w-full relative'>
			<button onClick={handleClick}>
				<img src={avatar} alt='avatar' />
			</button>
			{menuSidebarModal && <SidebarModal />}
		</div>
	)
}
