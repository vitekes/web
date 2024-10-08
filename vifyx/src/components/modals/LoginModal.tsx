import React, { useState } from 'react'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useLoginMutation } from 'src/redux/api/userApi'
import { setAuthData } from 'src/redux/features/auth/authSlice'
import { closeModal } from 'src/redux/features/modal_status/modalStatusSlice'
import { RootState } from 'src/redux/store'
import BaseModal from './BaseModal'
// Устанавливаем элемент для модального окна
Modal.setAppElement('#root')

export default function LoginModal() {
	const dispatch = useDispatch()
	const loginModalStatus = useSelector(
		(state: RootState) => state.modalStatuses.modals.login.isOpen
	)

	const [loginFunc] = useLoginMutation()

	const [formData, setFormData] = useState({
		username: '',
		password: '',
	})

	const closeLoginModal = () => {
		dispatch(closeModal('login'))
		setFormData({
			username: '',
			password: '',
		})
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		console.log('Form Data: ', formData)
		const { token } = await loginFunc(formData).unwrap()
		dispatch(setAuthData({ username: formData.username, token: token }))
		closeLoginModal()
	}

	return (
		<BaseModal
			title='ВХОД'
			isOpen={loginModalStatus}
			onRequestClose={closeLoginModal}
			contentLabel='Registration Modal'
		>
			<>
				<form onSubmit={handleSubmit} className='space-y-[30px]'>
					<div className='space-y-[15px]'>
						<div className='text-lg space-y-[15px]'>
							<label htmlFor='username'>Имя</label>
							<input
								type='text'
								id='username'
								name='username'
								value={formData.username}
								onChange={handleInputChange}
								required
								autoComplete='username'
								className='w-full h-11 border rounded-md p-1'
							/>
						</div>
						<div className='text-lg space-y-[15px]'>
							<label htmlFor='password'>Пароль</label>
							<input
								type='password'
								id='password'
								name='password'
								value={formData.password}
								onChange={handleInputChange}
								required
								autoComplete='current-password'
								className='w-full h-11 border rounded-md p-1'
							/>
						</div>
					</div>
					<div className='flex justify-between items-center'>
						<button
							type='submit'
							className='font-bold text-white px-[26px] py-[12px] bg-black rounded-md'
						>
							Войти
						</button>
						<Link to='#' className='text-[#84A65A] text-lg'>
							Зaбыли пaроль?
						</Link>
					</div>
				</form>

				<div className=''>
					<p className='text-base'>
						<Link to='#' className='text-[#A0A0A0]'>
							Авторизуясь на сайте,{' '}
						</Link>
						вы принимаете условия оказания услуг, условия платежей, политику
						конфиденциальности и файлов cookie
					</p>
				</div>
			</>
		</BaseModal>
	)
}
