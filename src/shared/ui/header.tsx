import { FC } from 'react'
import { Button } from './button'
import { User } from '../icons/user'
import { Menu } from '../icons/menu'

export const Header: FC = () => {
	return (
		<header className="bg-gradient-to-r from-white to-blue-300">
			<div className="flex items-center justify-between px-6 py-4">
				<h2 className="font-bold md:text-5xl text-2xl">LOGO</h2>
				<nav className="md:flex hidden justify-between text-2xl">
					<ul className="flex gap-6 items-center">
						<li>Favorites</li>
						<li>Search</li>
						<li>
							<Button size="large">Add Image</Button>
						</li>
						<li>
							<User />
						</li>
					</ul>
				</nav>
				<nav className="md:hidden flex items-center gap-5">
					<Button size="small">Add</Button>

					<Menu className="" />
				</nav>
			</div>
		</header>
	)
}
