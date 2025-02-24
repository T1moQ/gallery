import { FC, PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren & {
	option?: 'primary' | 'secondary'
}

export const Button: FC<ButtonProps> = ({ children, option = 'primary' }) => {
	return (
		<button
			className={`rounded-3xl px-6 py-3 flex justify-center items-center border font-bold ${
				option === 'primary' && 'bg-black text-white border-black shadow-lg'
			} ${
				option === 'secondary' &&
				'bg-transparent text-white border-white shadow-lg'
			}`}
			type="button"
		>
			{children}
		</button>
	)
}
