import { FC } from 'react'

export const ImageCard: FC = () => {
	return (
		<div className="flex flex-col gap-3 rounded-lg shadow-md p-3 w-">
			<div className="w-[424px]">
				<img
					src="../public/img-dummy.jpg"
					alt=""
					className="w-full rounded-md"
				/>
			</div>
			<h3 className="text-2xl">Your cool image</h3>
			<p className="text-lg">Here you can place your images description</p>
		</div>
	)
}
