import { FC, PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

export const Modal: FC<PropsWithChildren> = () => {
	return createPortal(
		<div className="fixed inset-0 z-[8999] flex justify-center items-center">
			<div className="w-full h-screen bg-gray-200">
				<div className="w-32 h-24 bg-white rounded-xl"></div>
			</div>
		</div>,
		document.body
	)
}
