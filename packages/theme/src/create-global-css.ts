import fs from 'fs'

import { dark, light } from './colors'
import { toCSSVar } from './to-css-var'

function createGlobalCssVars() {
	const lightTheme = toCSSVar({
		colors: light,
	})

	const darkTheme = toCSSVar({
		colors: dark,
	})

	const lightVars = Object.keys(lightTheme.cssVars)
		.map((key) => `${key}: ${lightTheme.cssVars[key]};`)
		.join('\n')

	const darkVars = Object.keys(darkTheme.cssVars)
		.map((key) => `${key}: ${darkTheme.cssVars[key]};`)
		.join('\n')

	const content = `:root {\n${lightVars}\n}\n\n.dark{\n${darkVars}\n}
	
	[data-vaul-drawer] {
	touch-action: none;
	will-change: transform;
	transition: transform 0.5s cubic-bezier(0.32, 0.72, 0, 1);
	animation-duration: 0.5s;
	animation-timing-function: cubic-bezier(0.32, 0.72, 0, 1);
}

[data-vaul-drawer][data-vaul-snap-points='false'][data-vaul-drawer-direction='bottom'][data-state='open'] {
	animation-name: slideFromBottom;
}
[data-vaul-drawer][data-vaul-snap-points='false'][data-vaul-drawer-direction='bottom'][data-state='closed'] {
	animation-name: slideToBottom;
}

[data-vaul-drawer][data-vaul-snap-points='false'][data-vaul-drawer-direction='top'][data-state='open'] {
	animation-name: slideFromTop;
}
[data-vaul-drawer][data-vaul-snap-points='false'][data-vaul-drawer-direction='top'][data-state='closed'] {
	animation-name: slideToTop;
}

[data-vaul-drawer][data-vaul-snap-points='false'][data-vaul-drawer-direction='left'][data-state='open'] {
	animation-name: slideFromLeft;
}
[data-vaul-drawer][data-vaul-snap-points='false'][data-vaul-drawer-direction='left'][data-state='closed'] {
	animation-name: slideToLeft;
}

[data-vaul-drawer][data-vaul-snap-points='false'][data-vaul-drawer-direction='right'][data-state='open'] {
	animation-name: slideFromRight;
}
[data-vaul-drawer][data-vaul-snap-points='false'][data-vaul-drawer-direction='right'][data-state='closed'] {
	animation-name: slideToRight;
}

[data-vaul-drawer][data-vaul-snap-points='true'][data-vaul-drawer-direction='bottom'] {
	transform: translate3d(0, 100%, 0);
}

[data-vaul-drawer][data-vaul-snap-points='true'][data-vaul-drawer-direction='top'] {
	transform: translate3d(0, -100%, 0);
}

[data-vaul-drawer][data-vaul-snap-points='true'][data-vaul-drawer-direction='left'] {
	transform: translate3d(-100%, 0, 0);
}

[data-vaul-drawer][data-vaul-snap-points='true'][data-vaul-drawer-direction='right'] {
	transform: translate3d(100%, 0, 0);
}

[data-vaul-drawer][data-vaul-delayed-snap-points='true'][data-vaul-drawer-direction='top'] {
	transform: translate3d(0, var(--snap-point-height, 0), 0);
}

[data-vaul-drawer][data-vaul-delayed-snap-points='true'][data-vaul-drawer-direction='bottom'] {
	transform: translate3d(0, var(--snap-point-height, 0), 0);
}

[data-vaul-drawer][data-vaul-delayed-snap-points='true'][data-vaul-drawer-direction='left'] {
	transform: translate3d(var(--snap-point-height, 0), 0, 0);
}

[data-vaul-drawer][data-vaul-delayed-snap-points='true'][data-vaul-drawer-direction='right'] {
	transform: translate3d(var(--snap-point-height, 0), 0, 0);
}

[data-vaul-overlay][data-vaul-snap-points='false'] {
	animation-duration: 0.5s;
	animation-timing-function: cubic-bezier(0.32, 0.72, 0, 1);
}
[data-vaul-overlay][data-vaul-snap-points='false'][data-state='open'] {
	animation-name: fadeIn;
}
[data-vaul-overlay][data-state='closed'] {
	animation-name: fadeOut;
}

[data-vaul-overlay][data-vaul-snap-points='true'] {
	opacity: 0;
	transition: opacity 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

[data-vaul-overlay][data-vaul-snap-points='true'] {
	opacity: 1;
}

[data-vaul-drawer]:not([data-vaul-custom-container='true'])::after {
	content: '';
	position: absolute;
	background: inherit;
	background-color: inherit;
}

[data-vaul-drawer][data-vaul-drawer-direction='top']::after {
	top: initial;
	bottom: 100%;
	left: 0;
	right: 0;
	height: 200%;
}

[data-vaul-drawer][data-vaul-drawer-direction='bottom']::after {
	top: 100%;
	bottom: initial;
	left: 0;
	right: 0;
	height: 200%;
}

[data-vaul-drawer][data-vaul-drawer-direction='left']::after {
	left: initial;
	right: 100%;
	top: 0;
	bottom: 0;
	width: 200%;
}

[data-vaul-drawer][data-vaul-drawer-direction='right']::after {
	left: 100%;
	right: initial;
	top: 0;
	bottom: 0;
	width: 200%;
}

[data-vaul-overlay][data-vaul-snap-points='true']:not(
		[data-vaul-snap-points-overlay='true']
	):not([data-state='closed']) {
	opacity: 0;
}

[data-vaul-overlay][data-vaul-snap-points-overlay='true'] {
	opacity: 1;
}

[data-vaul-handle] {
	display: block;
	position: relative;
	opacity: 0.7;
	background: #e2e2e4;
	margin-left: auto;
	margin-right: auto;
	height: 5px;
	width: 32px;
	border-radius: 1rem;
	touch-action: pan-y;
}

[data-vaul-handle]:hover,
[data-vaul-handle]:active {
	opacity: 1;
}

[data-vaul-handle-hitarea] {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: max(100%, 2.75rem); /* 44px */
	height: max(100%, 2.75rem); /* 44px */
	touch-action: inherit;
}

@media (hover: hover) and (pointer: fine) {
	[data-vaul-drawer] {
		user-select: none;
	}
}

@media (pointer: fine) {
	[data-vaul-handle-hitarea]: {
		width: 100%;
		height: 100%;
	}
}

/* This will allow us to not animate via animation, but still benefit from delaying unmount via Radix. */
@keyframes fake-animation {
	from {
	}
	to {
	}
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@keyframes fadeOut {
	to {
		opacity: 0;
	}
}

@keyframes slideFromBottom {
	from {
		transform: translate3d(0, 100%, 0);
	}
	to {
		transform: translate3d(0, 0, 0);
	}
}

@keyframes slideToBottom {
	to {
		transform: translate3d(0, 100%, 0);
	}
}

@keyframes slideFromTop {
	from {
		transform: translate3d(0, -100%, 0);
	}
	to {
		transform: translate3d(0, 0, 0);
	}
}

@keyframes slideToTop {
	to {
		transform: translate3d(0, -100%, 0);
	}
}

@keyframes slideFromLeft {
	from {
		transform: translate3d(-100%, 0, 0);
	}
	to {
		transform: translate3d(0, 0, 0);
	}
}

@keyframes slideToLeft {
	to {
		transform: translate3d(-100%, 0, 0);
	}
}

@keyframes slideFromRight {
	from {
		transform: translate3d(100%, 0, 0);
	}
	to {
		transform: translate3d(0, 0, 0);
	}
}

@keyframes slideToRight {
	to {
		transform: translate3d(100%, 0, 0);
	}
}

	`

	if (!fs.existsSync('./dist')) {
		fs.mkdirSync('./dist')
	}

	fs.writeFile('./dist/nerdfishui.css', content, (err: any) => {
		if (err) console.error(err)
		// file written successfully
	})
}

createGlobalCssVars()
