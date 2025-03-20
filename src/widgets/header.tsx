import { FC, useState } from 'react'
import { Button } from '../shared/ui/button'
import { User } from '../shared/icons/user'
import { Menu } from '../shared/icons/menu'
import { Close } from '../shared/icons/close'
import { useModal } from '../shared/hooks/use-modal'
import { UploaderForm } from './uploader-form'
import { Logo } from '../shared/icons/logo'

export const Header: FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const { openModal } = useModal()

	const handeleClick = () => {
		openModal(<UploaderForm />)
	}

	return (
		<header className="bg-gradient-to-r from-white via-blue-50 to-blue-300">
			<div className="flex items-center justify-between md:px-16 px-2 md:py-4 py-2 relative">
				<div>
					<Logo />
				</div>
				<nav className="md:flex hidden justify-between md:text-2xl text-lg">
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
				<div className="md:hidden absolute z-0 right-0 top-[72px] p-2 bg-blue-300 rounded-xl w-[50svw] h-[25svh] ">
					<ul className="mt-6 flex gap-3 flex-col items-center text-xl">
						<li>Favorites</li>
						<li className="h-[1px] w-full bg-black/50"></li>
						<li>Search</li>
						<li className="h-[1px] w-full bg-black/50"></li>
						<li>Profile</li>
					</ul>
				</div>
			)}
		</header>
	)
}
