'use client'

import { Button } from '@nerdfish/react/button'
import { Card, CardContent } from '@nerdfish/react/card'
import { Slider, SliderThumb } from '@nerdfish/react/slider'
import {
	HeartIcon,
	PauseCircleIcon,
	Repeat1Icon,
	ShuffleIcon,
	SkipBackIcon,
	SkipForwardIcon,
} from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export function CardBlurredExample() {
	const [liked, setLiked] = React.useState(false)

	return (
		<div className="p-acquaintances rounded-container from-info/80 to-info/90 bg-linear-to-tr">
			<Card className="bg-blurred text-info-contrast border-none">
				<CardContent>
					<div className="grid grid-cols-6 items-center justify-center gap-6 md:grid-cols-12 md:gap-4">
						<div className="relative col-span-6 md:col-span-4">
							<Image
								alt="Album cover"
								className="rounded-[calc(var(--radius-container)-theme(padding.friends))] object-cover"
								height={200}
								width={200}
								src="https://avatars.githubusercontent.com/u/92470693"
							/>
						</div>

						<div className="col-span-6 flex flex-col md:col-span-8">
							<div className="flex items-start justify-between">
								<div className="flex flex-col gap-0">
									<h3 className="text-info-contrast font-semibold">
										Daily Mix
									</h3>
									<p className="text-info-contrast text-sm">12 Tracks</p>
									<h1 className="text-large mt-2 font-medium">
										Frontend Radio
									</h1>
								</div>
								<Button
									icon
									variant="ghost"
									onClick={() => setLiked((v) => !v)}
								>
									<HeartIcon
										className={liked ? '[&>path]:stroke-transparent' : ''}
										fill={liked ? 'currentColor' : 'none'}
									/>
								</Button>
							</div>

							<div className="mt-3 flex flex-col gap-1">
								<Slider
									aria-label="music progress"
									defaultValue={[50]}
									max={100}
									step={1}
								>
									<SliderThumb />
								</Slider>
								<div className="flex justify-between">
									<p className="text-sm">1:23</p>
									<p className="text-info-contrast/50 text-sm">4:32</p>
								</div>
							</div>

							<div className="flex w-full items-center justify-center">
								<Button icon variant="ghost">
									<Repeat1Icon className="text-info-contrast/80" />
								</Button>
								<Button icon variant="ghost">
									<SkipBackIcon />
								</Button>
								<Button icon variant="ghost">
									<PauseCircleIcon />
								</Button>
								<Button icon variant="ghost">
									<SkipForwardIcon />
								</Button>
								<Button icon variant="ghost">
									<ShuffleIcon />
								</Button>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
