import { FC, useEffect, useState } from 'react'
import { Button } from '../shared/ui/button'
import { ImageCard } from './image-card'
import { useModal } from '../shared/hooks/use-modal'
import { UploaderForm } from './uploader-form'
import { Slideshow } from './slideshow'

export type ImageData = {
	preview: string
	title?: string
	description?: string
}

export const Home: FC = () => {
	const [uploadedImages, setUploadedImages] = useState<ImageData[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const { openModal, closeModal } = useModal()

	const handeleClick = () => {
		openModal(
			<UploaderForm
				onSubmit={(images) => {
					console.log('New images uploaded:', images)
					setUploadedImages((prev) => [...prev, ...images])
				}}
			/>
		)
	}

	useEffect(() => {
		const savedImages = localStorage.getItem('uploadedImages')

		if (savedImages) {
			try {
				const parsedImages = JSON.parse(savedImages)
				if (Array.isArray(parsedImages)) {
					console.log('Loaded from localStorage:', parsedImages)
					setUploadedImages(parsedImages)
				} else {
					console.error('Invalid data in localStorage')
					localStorage.removeItem('uploadedImages')
				}
			} catch (error) {
				console.error('Failed to parse images from localStorage:', error)
				localStorage.removeItem('uploadedImages')
			}
		}

		setIsLoading(false)
	}, [])

	useEffect(() => {
		if (uploadedImages.length > 0) {
			console.log('Saving to localStorage:', uploadedImages)
			localStorage.setItem('uploadedImages', JSON.stringify(uploadedImages))
		}
	}, [uploadedImages])

	const openSlideshowModal = (index: number) => {
		openModal(
			<Slideshow
				onClose={closeModal}
				curentIndex={index}
				images={uploadedImages}
				onNavigate={(newIndex) => openSlideshowModal(newIndex)}
			/>
		)
	}

	return (
		<main className="flex flex-col mb-10">
			<section className="bg-gradient-to-r from-white via-blue-50 to-blue-300 md:py-3 md:px-16 ">
				<div className="flex md:flex-row flex-col items-center justify-between gap-14 md:container mx-auto">
					<div className="z-0 md:w-[460px] w-64 order-2 md:order-1">
						<img
							src="../public/hero.png"
							alt="hero"
							className="w-full md:rounded-4xl"
						/>
					</div>
					<div className="flex flex-col gap-4 md:text-right text-center md:order-2 order-1">
						<p className="md:text-6xl text-3xl uppercase md:w-[512px] w-72">
							Helping you upload your images to the internt
						</p>
						<p className="md:text-2xl md:w-[512px] text-lg w-72">
							You can read this text, but it doesn’t matter. It’s concept, not
							important for your life or life your friends
						</p>
						<Button onClick={handeleClick} size="large" option="secondary">
							Add Your Images
						</Button>
					</div>
				</div>
			</section>
			<section className="mt-10 md:px-16 flex flex-col gap-6 items-start ">
				<h2 className="md:text-5xl text-xl">Here might be your images!</h2>
				{isLoading ? (
					<p>Loading...</p>
				) : (
					<div className="flex md:flex-row md:flex-wrap flex-col justify-center md:items-start items-center gap-4 w-full">
						{uploadedImages.length > 0 ? (
							uploadedImages.map((image, index) => (
								<div key={index}>
									<ImageCard
										src={image.preview}
										title={image.title}
										description={image.description}
										onDescriptionChange={(newDescription) => {
											const updatedImages = [...uploadedImages]
											updatedImages[index].description = newDescription
											setUploadedImages(updatedImages)
										}}
										onTitleChange={(newTitle) => {
											const updatedImages = [...uploadedImages]
											updatedImages[index].title = newTitle
											setUploadedImages(updatedImages)
										}}
										onDelete={() => {
											const updatedImages = [...uploadedImages]
											updatedImages.splice(index, 1)
											setUploadedImages(updatedImages)

											if (uploadedImages.length === 1) {
												localStorage.clear()
											}
										}}
										onSlideshowOpen={() => openSlideshowModal(index)}
									/>
								</div>
							))
						) : (
							<>
								<ImageCard />
								<ImageCard />
								<ImageCard />
							</>
						)}
					</div>
				)}
			</section>
		</main>
	)
}
