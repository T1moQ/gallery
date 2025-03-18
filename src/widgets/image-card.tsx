import { FC, useState } from 'react'
import dummyImage from '../../public/img-dummy.png'
import { Edit } from '../shared/icons/edit'
import cn from 'classnames'

type ImageCardProps = {
	src?: string
	onTitleChange?: (title: string) => void
	onDescriptionChange?: (description: string) => void
}

export const ImageCard: FC<ImageCardProps> = ({
	src,
	onDescriptionChange,
	onTitleChange,
}) => {
	const [isTitleEdit, setIsTitleEdit] = useState(false)
	const [isDescriptionEdit, setisDescriptionEdit] = useState(false)
	const [title, setTitle] = useState('Your Cool Title')
	const [description, setDescription] = useState(
		'Here might be your description'
	)

	const titleCahngeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newTitle = event.target.value
		setTitle(newTitle)
		if (onTitleChange) onTitleChange(newTitle)
	}
	const descriptionCahngeHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const newDescription = event.target.value
		setDescription(newDescription)
		if (onDescriptionChange) onDescriptionChange(newDescription)
	}

	const handleTitleEdit = () => {
		setIsTitleEdit(!isTitleEdit)
	}

	const handleDescriptionEdit = () => {
		setisDescriptionEdit(!isDescriptionEdit)
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
				{isTitleEdit ? (
					<input
						type="text"
						onChange={titleCahngeHandler}
						defaultValue={title}
						className={cn('md:text-2xl outline-none border-b border-zinc-700')}
					/>
				) : (
					<h3 className="md:text-2xl text-xl">{title}</h3>
				)}

				<button onClick={handleTitleEdit} className="cursor-pointer">
					<Edit className="!w-7 !h-7" />
				</button>
			</div>
			<div className="flex items-center gap-2">
				{isDescriptionEdit ? (
					<input
						type="text"
						onChange={descriptionCahngeHandler}
						defaultValue={description}
						className={cn('md:text-2xl outline-none border-b border-zinc-700')}
					/>
				) : (
					<p className="md:text-xl text-lg italic">{description}</p>
				)}
				<button onClick={handleDescriptionEdit} className="cursor-pointer">
					<Edit className="!w-7 !h-7" />
				</button>
			</div>
		</div>
	)
}
