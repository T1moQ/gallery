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
	const [files, setFiles] = useState<File[]>([])

	const inputRef = useRef<HTMLInputElement>(null)

	const { closeModal } = useModal()

	const buttonClickHandler = () => {
		inputRef.current?.click()
	}

	const fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFiles = event.target.files

		if (selectedFiles && selectedFiles.length > 0) {
			const filesArray = Array.from(selectedFiles)
			setFiles(filesArray)

			const previewsArray: string[] = []
			filesArray.forEach((file) => {
				const reader = new FileReader()
				reader.onloadend = () => {
					previewsArray.push(reader.result as string)
				}

				if (previewsArray.length === filesArray.length) {
					setPreviews(previewsArray)
				}

				reader.readAsDataURL(file)
			})
		}
	}

	const removePreview = (index: number) => {
		const newPreviews = [...previews]
		newPreviews.splice(index, 1)
		setPreviews(newPreviews)

		const newFiles = [...files]
		newFiles.splice(index, 1)
		setFiles(newFiles)
	}

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (files.length > 0) {
			const images: ImageData[] = files.map((file, index) => ({
				file: file,
				preview: previews[index],
			}))

			onSubmit?.(images)
		}

		closeModal()
	}

	return (
		<form
			onSubmit={submitHandler}
			className="w-[404px] mt-4 flex flex-col gap-4 items-center justify-center"
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
			<div className="w-full flex gap-3">
				{previews.map((preview, index) => (
					<div className="relative" key={index}>
						<button
							onClick={() => removePreview(index)}
							className="absolute top-2 right-2 fill-zinc-400 hover:bg-zinc-100/40 rounded-full p-1 cursor-pointer"
						>
							<Trash />
						</button>
						<img src={preview} />
					</div>
				))}
				{/* {previews ? (
					<div className="relative">
						<button
							onClick={() => setPreview(null)}
							className="absolute top-2 right-2 fill-zinc-400 hover:bg-zinc-100/40 rounded-full p-1 cursor-pointer"
						>
							<Trash />
						</button>
						<img src={preview} />
					</div>
				) : (
					<img src="../public/img-dummy.png" />
				)} */}
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
