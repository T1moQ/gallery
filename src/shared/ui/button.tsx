import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import cn from 'classnames'

type ButtonProps = PropsWithChildren<
	ButtonHTMLAttributes<HTMLButtonElement>
> & {
	option?: 'primary' | 'secondary'
	size?: 'large' | 'small'
	type?: 'submit' | 'button'
}

export const Button: FC<ButtonProps> = ({
	children,
	option = 'primary',
	size = 'large',
	type = 'button',
	...rest
}) => {
	return (
		<button
			type={type}
			className={cn(
				'rounded-3xl flex justify-center items-center border font-semibold cursor-pointer',
				option === 'primary' && 'bg-black text-white border-black shadow-lg',
				option === 'secondary' &&
					'bg-transparent text-black border-black shadow-lg',
				{
					'h-12 py-4 text-2xl px-6': size === 'large',

					'h-[2.375rem] py-2 text-xl px-3': size === 'small',
				}
			)}
			{...rest}
		>
			{children}
		</button>
	)
}
