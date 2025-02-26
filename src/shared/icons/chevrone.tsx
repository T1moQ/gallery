import { FC, SVGAttributes } from 'react'
import cn from 'classnames'

export const Chevrone: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
	return (
		<svg
			className={cn(className, 'w-5 h-5 fill-gray-700')}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5.80301 8.13631C6.09591 7.84341 6.57078 7.84341 6.86367 8.13631L9.66668 10.9393L12.4697 8.13631C12.7626 7.84341 13.2374 7.84341 13.5303 8.13631C13.8232 8.4292 13.8232 8.90407 13.5303 9.19697L10.197 12.5303C9.90411 12.8232 9.42924 12.8232 9.13635 12.5303L5.80301 9.19697C5.51012 8.90407 5.51012 8.4292 5.80301 8.13631Z"
				fill=""
			/>
		</svg>
	)
}
