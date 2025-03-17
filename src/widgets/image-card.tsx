import { FC, useState } from 'react'
import { Accordion } from '../shared/ui/accordion'
import dummyImage from '../../public/img-dummy.png'
import { Edit } from '../shared/icons/edit'

type ImageCardProps = {
	src?: string
}

export const ImageCard: FC<ImageCardProps> = ({ src }) => {
	const [isEdit, setIsEdit] = useState(false)
	const [title, setTitle] = useState('Your Cool Title')
	const titleEditHandler = () => {
		setIsEdit(!isEdit)
	}

	const titleCahngeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value)
	}

	return (
		<div className="flex flex-col gap-3 rounded-lg shadow-lg p-3">
			<div className="md:w-[400px] md:h-[440px] w-72 h-80 overflow-hidden">
				<img
					src={src || dummyImage}
					alt=""
					className="w-full h-full object-cover rounded-md"
				/>
			</div>
			<div className="flex items-center gap-2">
				{isEdit ? (
					<input
						type="text"
						onChange={titleCahngeHandler}
						defaultValue={title}
						className="md:text-2xl"
					/>
				) : (
					<h3 className="md:text-2xl text-xl">{title}</h3>
				)}

				<button onClick={titleEditHandler} className="cursor-pointer">
					<Edit className="!w-7 !h-7" />
				</button>
			</div>
			<Accordion
				title="Description"
				text="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
			/>
		</div>
	)
}
