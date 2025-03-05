import { FC, useState } from 'react'
import { Button } from '../shared/ui/button'
import { User } from '../shared/icons/user'
import { Menu } from '../shared/icons/menu'
import { Close } from '../shared/icons/close'
import { useModal } from '../shared/hooks/use-modal'
import { UploaderForm } from './uploader-form'

export const Header: FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const { openModal } = useModal()

	const handeleClick = () => {
		openModal(<UploaderForm />)
	}

	return (
		<header className="bg-gradient-to-r from-white via-blue-50 to-blue-300">
			<div className="flex items-center justify-between md:px-16 px-2 py-4 relative">
				<h2 className="font-bold md:text-5xl text-2xl md:py-2">LOGO</h2>
				<nav className="md:flex hidden justify-between text-2xl">
					<ul className="flex gap-6 items-center">
						<li>Favorites</li>
						<li>Search</li>
						<li>
							<Button size="large" onClick={handeleClick}>
								Add Image
							</Button>
						</li>
						<li>
							<User />
						</li>
					</ul>
				</nav>
				<nav className="md:hidden flex items-center gap-4">
					<Button size="small" onClick={handeleClick}>
						Add
					</Button>

					<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
						{isMenuOpen ? <Close /> : <Menu />}
					</button>
				</nav>
			</div>
			{isMenuOpen && (
				<div className="md:hidden absolute z-0 right-0 p-2 bg-blue-300 rounded-bl-md">
					<ul className="flex gap-3 flex-col items-start">
						<li>Favorites</li>
						<li>Search</li>
						<li>Profile</li>
					</ul>
				</div>
			)}
		</header>
	)
}
