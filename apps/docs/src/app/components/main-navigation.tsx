import { cx } from '@nerdfish/utils'
import Link from 'next/link'
import { siteConfig } from 'site.config'
import { Logo } from './icons/logo'

export function MainNavigation() {
	return (
		<div className="gap-md flex items-center">
			<Link href="/" aria-label="Home">
				<div className="space-x-md flex items-center">
					<Logo className="h-6" />
					<span className="ml-sm space-x-sm text-primary flex items-center text-lg font-semibold">
						Nerdfish
						<span className="ml-sm rounded-base border-muted p-sm border text-[8px] leading-snug">
							UI
						</span>
					</span>
				</div>
			</Link>
			{siteConfig.mainNav.length ? (
				<nav className="gap-md hidden md:flex">
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
