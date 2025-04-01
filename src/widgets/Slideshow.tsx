import { FC } from 'react'
import { Close } from '../shared/icons/close'
import { Chevrone } from '../shared/icons/chevrone'

type SlideshowProps = {
	curentIndex: number
	images: { preview: string; title?: string; description?: string }[]
	onClose: () => void
	onNavigate: (index: number) => void
}

export const Slideshow: FC<SlideshowProps> = ({
	curentIndex,
	images,
	onClose,
	onNavigate,
}) => {
	const prevImg = () => {
		if (curentIndex > 0) {
			onNavigate(curentIndex - 1)
		} else {
			onNavigate(images.length - 1)
		}
	}

	const nextImg = () => {
		if (curentIndex < images.length - 1) {
			onNavigate(curentIndex + 1)
		} else {
			onNavigate(0)
		}
	}

	return (
		<div className="flex flex-col justify-center">
			<button
				onClick={onClose}
				className="cursor-pointer absolute top-4 right-4"
			>
				<Close />
			</button>
			<div className="flex-1 flex items-center justify-center ">
				<img
					src={images[curentIndex].preview}
					alt=""
					className="max-w-[80%] max-h-[80%] object-contain transition-transform duration-300 border-4 rounded-2xl border-zinc-400"
				/>
			</div>
			<div className="absolute top-1/2 left-4 -translate-y-1/2">
				<button className="cursor-pointer w-12 h-12" onClick={prevImg}>
					<Chevrone className="rotate-90 w-full h-full" />
				</button>
			</div>
			<div className="absolute top-1/2 right-4 -translate-y-1/2">
				<button className="cursor-pointer w-12 h-12" onClick={nextImg}>
					<Chevrone className="rotate-270 w-full h-full" />
				</button>
			</div>
		</div>
	)
}
