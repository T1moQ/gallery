import { FC, PropsWithChildren, useState } from 'react'
import {
	ModalContext,
	ModalContextType,
} from '../../shared/context/modal-context'
import { Modal } from '../../shared/ui/modal'

export const ModalProvider: FC<PropsWithChildren> = (props) => {
	const [isModalOpen, setIsModalOpen] = useState<ModalContextType>({
		isOpen: false,
		children: null,
	})

	return (
		<ModalContext.Provider
			value={{ state: isModalOpen, setState: setIsModalOpen }}
		>
			{props.children}
			<Modal>{isModalOpen.isOpen && isModalOpen.children}</Modal>
		</ModalContext.Provider>
	)
}
