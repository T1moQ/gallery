import { FC, SVGAttributes } from 'react'
import cn from 'classnames'

export const Close: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
	return (
		<svg
			className={cn('w-6 h-6 fill-current', className)}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="Iconset/Close">
				<path
					id="Union"
					fillRule="evenodd"
					clipRule="evenodd"
					d="M17.8014 7.25947C18.0943 6.96658 18.0943 6.49171 17.8014 6.19881C17.5085 5.90592 17.0336 5.90592 16.7408 6.19881L12.0001 10.9395L7.25936 6.1987C6.96647 5.90581 6.49159 5.90581 6.1987 6.1987C5.90581 6.49159 5.90581 6.96647 6.1987 7.25936L10.9395 12.0001L6.19891 16.7407C5.90601 17.0336 5.90601 17.5084 6.19891 17.8013C6.4918 18.0942 6.96667 18.0942 7.25957 17.8013L12.0001 13.0608L16.7405 17.8012C17.0334 18.0941 17.5083 18.0941 17.8012 17.8012C18.0941 17.5083 18.0941 17.0334 17.8012 16.7405L13.0608 12.0001L17.8014 7.25947Z"
					fill=""
				/>
			</g>
		</svg>
	)
}
