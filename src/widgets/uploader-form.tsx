import { FC, useRef, useState } from 'react'
import { ImageData } from './home'
import { Trash } from '../shared/icons/trash'
import { Button } from '../shared/ui/button'
import { Upload } from '../shared/icons/upload'
import { useModal } from '../shared/hooks/use-modal'

type UpoaderFormProps = {
	onSubmit?: (images: ImageData[]) => void
}

export const UploaderForm: FC<UpoaderFormProps> = ({ onSubmit }) => {
	const [previews, setPreviews] = useState<string[]>([])

	const inputRef = useRef<HTMLInputElement>(null)

	const { closeModal } = useModal()

	const buttonClickHandler = () => {
		inputRef.current?.click()
	}

	const fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFiles = event.target.files

		if (selectedFiles && selectedFiles.length > 0) {
			const filesArray = Array.from(selectedFiles)

			const previewPromises = filesArray.map((file) => {
				return new Promise<string>((resolve) => {
					const reader = new FileReader()
					reader.onloadend = () => {
						resolve(reader.result as string)
					}
					reader.readAsDataURL(file)
				})
			})

			Promise.all(previewPromises).then((previewsArray) => {
				setPreviews(previewsArray)
			})
		}
	}

	const removePreview = (index: number) => {
		const newPreviews = [...previews]
		newPreviews.splice(index, 1)
		setPreviews(newPreviews)
	}

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (previews.length > 0) {
			const images: ImageData[] = previews.map((preview) => ({
				preview: preview,
			}))

			onSubmit?.(images)
		}
		closeModal()
	}

	return (
		<form
			onSubmit={submitHandler}
			className="md:w-[404px] w-full md:mt-4 mt-8 flex flex-col md:gap-4 gap-8 items-center justify-center"
		>
			<Button onClick={buttonClickHandler} size="small" option="secondary">
				<span>Choose a file</span>
			</Button>
			<input
				ref={inputRef}
				type="file"
				onChange={fileChangeHandler}
				className="hidden"
				accept="image/*"
				multiple
			/>
			<div className="w-full flex flex-wrap gap-3 items-center px-3">
				{previews.map((preview, index) => (
					<div className="relative" key={index}>
						<button
							onClick={() => removePreview(index)}
							className="absolute top-2 right-2 fill-zinc-400 hover:bg-zinc-100/40 rounded-full p-1 cursor-pointer"
						>
							<Trash />
						</button>
						<div className="w-28 h-28 border rounded-xl p-3 border-zinc-400">
							<img src={preview} className="aspect-square" />
						</div>
					</div>
				))}
			</div>
			<div className="self-start">
				<Button type="submit">
					<span>Upload</span>
					<Upload className="ml-2 !w-6 !h-6" />
				</Button>
			</div>
		</form>
	)
}
