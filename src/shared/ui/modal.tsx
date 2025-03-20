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
		<div className="fixed inset-0 z-[8999]">
			<div
				onClick={onBackdropClick}
				className="w-full h-screen bg-gray-400/50 flex justify-center items-center"
			>
				<div className="p-4 bg-white rounded-xl md:flex flex-col hidden">
					{children}
				</div>

				<div className="p-4 absolute bottom-0 h-[60svh] bg-white w-full rounded-tl-xl rounded-tr-xl md:hidden">
					{children}
				</div>
			</div>
		</div>,
		document.body
	)
}
