import { ReactNode, useContext } from 'react'
import { ModalContext } from '../context/modal-context'

export const useModal = () => {
	const modal = useContext(ModalContext)

	if (typeof modal === 'undefined') {
		throw new Error('useModal hook can be called just inside ModalProvider')
	}

	const openModal = (children: ReactNode) => {
		modal.setState((prev) => ({ ...prev, isOpen: true, children }))
	}

	const closeModal = () => {
		modal.setState((prev) => ({ ...prev, isOpen: false }))
	}

	return {
		state: modal.state,
		openModal,
		closeModal,
	}
}
