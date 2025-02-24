import { FC, PropsWithChildren } from 'react'
import cn from 'classnames'

type ButtonProps = PropsWithChildren & {
	option?: 'primary' | 'secondary'
	size?: 'large' | 'small'
}

export const Button: FC<ButtonProps> = ({
	children,
	option = 'primary',
	size = 'large',
}) => {
	return (
		<button
			type="button"
			className={cn(
				'rounded-3xl flex justify-center items-center border font-semibold',
				option === 'primary' && 'bg-black text-white border-black shadow-lg',
				option === 'secondary' &&
					'bg-transparent text-white border-white shadow-lg',
				{
					'h-12 py-4 text-2xl px-6': size === 'large',

					'h-[2.375rem] py-2 text-xl px-3': size === 'small',
				}
			)}
		>
			{children}
		</button>
	)
}
