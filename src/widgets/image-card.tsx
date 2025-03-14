import { FC } from 'react'
import { Accordion } from '../shared/ui/accordion'

type ImageCardProps = {
	src?: string
}

export const ImageCard: FC<ImageCardProps> = ({ src }) => {
	return (
		<div className="flex flex-col gap-3 rounded-lg shadow-lg p-3">
			<div className="md:w-[400px] md:h-[440px] w-72 h-80 overflow-hidden">
				<img
					src={src || '../public/img-dummy.png'}
					alt=""
					className="w-full h-full object-cover rounded-md"
				/>
			</div>
			<h3 className="md:text-2xl text-xl">Your cool image</h3>
			<Accordion
				title="Description"
				text="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
			/>
		</div>
	)
}
