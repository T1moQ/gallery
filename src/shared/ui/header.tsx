import { FC } from 'react'
import { Button } from './button'

export const Header: FC = () => {
	return (
		<header className="bg-gradient-to-r from-white to-blue-300">
			<div className="flex items-center justify-between px-6 py-4">
				<h2 className="font-bold text-7xl">LOGO</h2>
				<nav className="flex justify-between  text-2xl">
					<ul className="flex gap-6 items-center">
						<li>Favorites</li>
						<li>Search</li>
						<li>
							<Button>Add Image</Button>
						</li>
						<li>Profile</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
