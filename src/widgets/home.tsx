import { FC } from 'react'
import { Button } from '../shared/ui/button'

export const Home: FC = () => {
	return (
		<main className="">
			<section className="bg-gradient-to-r from-white via-blue-50 to-blue-300 md:px-10 md:py-3">
				<div className="flex md:flex-row flex-col items-center md:gap-40 gap-14">
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
						<Button size="large" option="secondary">
							Add Your Images
						</Button>
					</div>
				</div>
			</section>
		</main>
	)
}
