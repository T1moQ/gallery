import { FC, SVGAttributes } from 'react'

export const Logo: FC<SVGAttributes<SVGSVGElement>> = () => {
	return (
		<svg
			width="75"
			height="80"
			viewBox="0 0 200 220"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="50"
				y="40"
				width="100"
				height="100"
				stroke="black"
				strokeWidth="8"
			/>
			<rect
				x="70"
				y="60"
				width="60"
				height="60"
				stroke="black"
				strokeWidth="6"
			/>
			<line x1="85" y1="75" x2="115" y2="105" stroke="black" strokeWidth="6" />
			<line x1="115" y1="75" x2="85" y2="105" stroke="black" strokeWidth="6" />
			<text
				x="50%"
				y="190"
				fontSize="30"
				fontWeight="bold"
				textAnchor="middle"
				fill="black"
			>
				GalleryX
			</text>
		</svg>
	)
}
