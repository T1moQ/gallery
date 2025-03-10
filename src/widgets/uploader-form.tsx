import { FC, useRef, useState } from 'react'
import { ImageData } from './home'
import { Trash } from '../shared/icons/trash'
import { Button } from '../shared/ui/button'
import { Upload } from '../shared/icons/upload'

type UpoaderFormProps = {
	onSubmit?: (images: ImageData[]) => void
}

export const UploaderForm: FC<UpoaderFormProps> = ({ onSubmit }) => {
	const [preview, setPreview] = useState<string | null>(null)
	const [files, setFiles] = useState<File[]>([])

	const inputRef = useRef<HTMLInputElement>(null)

	const buttonClickHandler = () => {
		inputRef.current?.click()
	}

	const fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFiles = event.target.files

		if (selectedFiles && selectedFiles.length > 0) {
			const file = selectedFiles[0]
			setFiles(Array.from(selectedFiles))

			const reader = new FileReader()

			reader.onloadend = () => {
				setPreview(reader.result as string)
			}

			reader.readAsDataURL(file)
		}
	}

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (files.length > 0) {
			const images: ImageData[] = files.map((file) => ({
				file: file,
				preview: URL.createObjectURL(file),
			}))

			onSubmit?.(images)
		}
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
				multiple
				accept="image/*"
			/>
			<div>
				{preview ? (
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
				)}
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
