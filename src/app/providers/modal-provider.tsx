import { FC, PropsWithChildren, useState } from 'react'
import {
	ModalContext,
	ModalContextType,
} from '../../shared/context/modal-context'
import { Modal } from '../../shared/ui/modal'

export const ModalProvider: FC<PropsWithChildren> = (props) => {
	const [modalState, setModalState] = useState<ModalContextType>({
		isOpen: false,
		isSlideshow: false,
		children: null,
	})

	return (
		<ModalContext.Provider
			value={{ state: modalState, setState: setModalState }}
		>
			{props.children}
			{modalState.isOpen && (
				<Modal isSlideshow={modalState.isSlideshow}>
					{modalState.children}
				</Modal>
			)}
		</ModalContext.Provider>
	)
}
