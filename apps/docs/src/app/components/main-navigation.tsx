import { cx } from '@nerdfish/utils'
import Link from 'next/link'
import { siteConfig } from 'site.config'
import { Logo } from './icons/logo'

export function MainNavigation() {
	return (
		<div className="flex items-center gap-6 md:gap-10">
			<Link href="/" aria-label="Home">
				<div className="flex items-center space-x-3">
					<Logo className="h-6" />
					<span className="text-primary ml-2 flex items-center space-x-2 text-lg font-semibold">
						Nerdfish
						<span className="border-muted ml-1 rounded-lg border p-1 text-[8px] leading-snug">
							UI
						</span>
					</span>
				</div>
			</Link>
			{siteConfig.mainNav.length ? (
				<nav className="hidden gap-6 md:flex">
					{siteConfig.mainNav.map(
						(item, index) =>
							item.href && (
								<Link
									key={index}
									href={item.href}
									className={cx(
										'flex items-center text-lg font-semibold text-gray-600 hover:text-gray-900 sm:text-sm dark:text-gray-100',
										item.disabled && 'cursor-not-allowed opacity-80',
									)}
								>
									{item.title}
								</Link>
							),
					)}
				</nav>
			) : null}
		</div>
	)
}
