import { FC } from 'react'
import { Close } from '../shared/icons/close'

type SlideshowProps = {
	curentIndex: number
	images: { preview: string; title?: string; description?: string }[]
	onClose: () => void
}

export const Slideshow: FC<SlideshowProps> = ({
	curentIndex,
	images,
	onClose,
}) => {
	return (
		<div className="flex flex-col justify-center ">
			<button onClick={onClose} className="cursor-pointer flex justify-end">
				<Close />
			</button>
			<img
				src={images[curentIndex].preview}
				alt=""
				className="max-w-full max-h-[80vh] rounded-lg object-contain"
			/>
		</div>
	)
}
