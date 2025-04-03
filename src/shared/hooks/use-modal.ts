import { ReactNode, useContext } from 'react'
import { ModalContext } from '../context/modal-context'

export const useModal = () => {
	const modal = useContext(ModalContext)

	if (typeof modal === 'undefined') {
		throw new Error('useModal hook can be called just inside ModalProvider')
	}

	const openModal = (children: ReactNode, isSlideshow: boolean) => {
		modal.setState((prev) => ({ ...prev, isOpen: true, children, isSlideshow }))
	}

	const closeModal = () => {
		modal.setState((prev) => ({ ...prev, isOpen: false, isSlideshow: false }))
	}

	return {
		state: modal.state,
		openModal,
		closeModal,
	}
}
