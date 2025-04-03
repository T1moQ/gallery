import { createContext, ReactNode } from 'react'

export type ModalContextType = {
	isOpen: boolean
	isSlideshow?: boolean
	children: ReactNode
}

export const ModalContext = createContext<
	| {
			state: ModalContextType
			setState: React.Dispatch<React.SetStateAction<ModalContextType>>
	  }
	| undefined
>(undefined)
