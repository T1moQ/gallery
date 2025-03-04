import { FC, useRef, useState } from 'react'
import { Trash } from '../shared/icons/trash'
import { Button } from '../shared/ui/button'
import { Upload } from '../shared/icons/upload'

export const UploaderForm: FC = () => {
	const [preview, setPreview] = useState<string | null>(null)

	const inputRef = useRef<HTMLInputElement>(null)

	const buttonClickHandler = () => {
		inputRef.current?.click()
	}

	const fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setPreview(reader.result as string)
			}
			reader.readAsDataURL(file)
		} else {
			setPreview(null)
		}
	}

	return (
		<form className="w-[404px] mt-4 flex flex-col gap-4 items-center justify-center">
			<Button onClick={buttonClickHandler}>
				<span>Upload</span>
				<Upload className="ml-2 !w-6 !h-6" />
			</Button>
			<input
				ref={inputRef}
				type="file"
				onChange={fileChangeHandler}
				className="hidden"
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
		</form>
	)
}
