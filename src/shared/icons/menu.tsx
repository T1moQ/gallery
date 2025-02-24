import { FC, SVGAttributes } from 'react'
import cn from 'classnames'

export const Menu: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
	return (
		<svg
			className={cn(className, 'w-6 h-6')}
			viewBox="0 0 13 8"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="Group 1321315667">
				<path
					id="Vector"
					d="M1.34424 1H11.3442"
					stroke="#000000"
					strokeWidth="1.6"
					strokeMiterlimit="10"
					strokeLinecap="round"
				/>
				<path
					id="Vector_2"
					d="M1.34424 7H11.3442"
					stroke="#000000"
					strokeWidth="1.6"
					strokeMiterlimit="10"
					strokeLinecap="round"
				/>
			</g>
		</svg>
	)
}
