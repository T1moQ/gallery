import { FC, useState } from 'react'
import dummyImage from '../../public/img-dummy.png'
import { Edit } from '../shared/icons/edit'
import cn from 'classnames'
import { Trash } from '../shared/icons/trash'

type ImageCardProps = {
	src?: string
	title?: string
	description?: string
	onDelete?: () => void
	onTitleChange?: (title: string) => void
	onDescriptionChange?: (description: string) => void
}

export const ImageCard: FC<ImageCardProps> = ({
	src,
	title = 'Your Cool Title',
	description = 'Here might be your description',
	onDelete,
	onDescriptionChange,
	onTitleChange,
}) => {
	const [isTitleEdit, setIsTitleEdit] = useState(false)
	const [isDescriptionEdit, setisDescriptionEdit] = useState(false)

	const titleCahngeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newTitle = event.target.value
		if (onTitleChange) onTitleChange(newTitle)
	}
	const descriptionCahngeHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const newDescription = event.target.value
		if (onDescriptionChange) onDescriptionChange(newDescription)
	}

	const handelrDeleteImage = () => {
		onDelete?.()
	}

	const handleTitleEdit = () => {
		setIsTitleEdit(!isTitleEdit)
	}

	const handleDescriptionEdit = () => {
		setisDescriptionEdit(!isDescriptionEdit)
	}

	return (
		<div className="flex flex-col gap-3 rounded-lg shadow-lg p-3">
			<div className="md:w-[400px] md:h-[440px] w-72 h-80 overflow-hidden relative group">
				<img
					src={src || dummyImage}
					alt=""
					className="w-full h-full object-cover rounded-md transition-opacity duration-300 group-hover:opacity-70"
				/>
				<div className="absolute inset-0 w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex justify-between items-center gap-4">
					<button
						onClick={handelrDeleteImage}
						className="absolute top-2 right-2 cursor-pointer border border-white p-1 rounded-full hover:bg-zinc-700 hover:border-zinc-700"
					>
						<Trash className="!w-7 !h-7 fill-white" />
					</button>
				</div>
			</div>
			<div className="flex items-center gap-2">
				{isTitleEdit ? (
					<input
						type="text"
						onChange={titleCahngeHandler}
						value={title}
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
						value={description}
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
