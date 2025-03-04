import { FC, useState } from 'react'
import { Close } from '../shared/icons/close'

export const UploaderForm: FC = () => {
	const [preview, setPreview] = useState<string | null>(null)

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
		<form className="w-[404px] flex flex-col items-center justify-center">
			<input type="file" onChange={fileChangeHandler} />
			<div>
				{preview ? (
					<div className="relative">
						<button
							onClick={() => setPreview(null)}
							className="absolute top-2 right-2 fill-zinc-400 hover:bg-zinc-100/40 rounded-full p-1 cursor-pointer"
						>
							<Close />
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
