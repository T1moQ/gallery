import { FC, useState } from 'react'

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
					<img src={preview} />
				) : (
					<img src="../public/img-dummy.png" />
				)}
			</div>
		</form>
	)
}
