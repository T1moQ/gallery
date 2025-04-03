import { FC, PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'
import { useModal } from '../hooks/use-modal'
import cn from 'classnames'

type ModalProp = PropsWithChildren & { isSlideshow?: boolean }

export const Modal: FC<ModalProp> = ({ children }) => {
	const { state, closeModal } = useModal()

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
				className={cn(
					'w-full h-screen flex justify-center items-center',
					state.isSlideshow ? 'bg-black/85' : 'bg-gray-400/70'
				)}
			>
				<div
					className={cn(
						state.isSlideshow
							? 'bg-black w-[90vw] max-w-[800px] h-[90vh] max-h-[600px]'
							: 'bg-white w-auto h-auto',
						'p-4 rounded-xl md:flex flex-col justify-center items-center hidden relative'
					)}
				>
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
