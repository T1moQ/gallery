import { FC } from 'react'
import { Button } from '../shared/ui/button'

export const Home: FC = () => {
	return (
		<main className="">
			<section className="bg-gradient-to-r from-white via-blue-50 to-blue-300 md:px-10 md:py-3">
				<div className="flex items-center gap-32">
					<div className="z-20 md:w-[460px] ">
						<img
							src="../public/hero.png"
							alt="hero"
							className="w-full rounded-4xl"
						/>
					</div>
					<div className="flex flex-col gap-4">
						<p className="text-6xl uppercase md:w-[512px]">
							Helping you upload your images to the internt
						</p>
						<p className="text-2xl md:w-[512px]">
							You can read this text, but it doesn’t matter. It’s concept, not
							important for your life or life your friends
						</p>
						<Button size="large" option="secondary">
							Add Your Images
						</Button>
					</div>
				</div>
			</section>
		</main>
	)
}
