import { FC, PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'
import { useModal } from '../hooks/use-modal'

export const Modal: FC<PropsWithChildren> = ({ children }) => {
	const { closeModal, state } = useModal()

	const onBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
		if (event.target === event.currentTarget) {
			closeModal()
		}
	}

	if (!state.isOpen) return null

	return createPortal(
		<div className="fixed inset-0 z-[8999] flex justify-center items-center">
			<div onClick={onBackdropClick} className="w-full h-screen bg-gray-200/60">
				<div className="w-32 h-24 bg-white rounded-xl">{children}</div>
			</div>
		</div>,
		document.body
	)
}
