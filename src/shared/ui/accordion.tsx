import { FC, useState } from 'react'
import { Chevrone } from '../icons/chevrone'
import cn from 'classnames'

type AccordionProps = {
	title: string
	text: string
}

export const Accordion: FC<AccordionProps> = ({ title, text }) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className="mt-2">
			<div className="flex justify-between">
				<p className="md:text-xl text-lg">{title}</p>
				<button onClick={() => setIsOpen(!isOpen)}>
					<Chevrone className={cn(isOpen && 'rotate-180')} />
				</button>
			</div>
			{isOpen && <p className="mt-2">{text}</p>}
		</div>
	)
}
