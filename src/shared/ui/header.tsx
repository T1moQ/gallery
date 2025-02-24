import { FC } from 'react'

export const Header: FC = () => {
	return (
		<header className="py-4 px-6 bg-gradient-to-r from-white to-blue-300">
			<div className="flex items-center justify-between">
				<h2 className="font-bold text-5xl">LOGO</h2>
				<nav className="flex justify-between">
					<ul className="flex gap-2">
						<li>Favorites</li>
						<li>Search</li>
						<li>Profile</li>
						<li>Add</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
