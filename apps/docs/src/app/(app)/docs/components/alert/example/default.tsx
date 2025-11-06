'use client'

import { Alert, AlertDescription, AlertTitle } from '@nerdfish/react/alert'
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from 'lucide-react'

export function AlertExample() {
	return (
		<div className="grid w-full items-start gap-4">
			<Alert>
				<CheckCircle2Icon />
				<AlertTitle>Success! Your changes have been saved</AlertTitle>
				<AlertDescription>
					This is an alert with icon, title and description.
				</AlertDescription>
			</Alert>
			<Alert>
				<PopcornIcon />
				<AlertTitle>
					This Alert has a title and an icon. No description.
				</AlertTitle>
			</Alert>
			<Alert variant="info">
				<AlertCircleIcon />
				<AlertTitle>New feature available</AlertTitle>
				<AlertDescription>
					<p>We&apos;ve added dark mode support to your dashboard.</p>
					<ul className="list-inside list-disc text-sm">
						<li>Toggle in settings</li>
						<li>Automatic system detection</li>
						<li>Custom theme options</li>
					</ul>
				</AlertDescription>
			</Alert>
			<Alert variant="destructive">
				<AlertCircleIcon />
				<AlertTitle>Account security breach detected</AlertTitle>
				<AlertDescription>
					<p>We detected suspicious activity on your account.</p>
					<ul className="list-inside list-disc text-sm">
						<li>Change your password immediately</li>
						<li>Review recent login activity</li>
						<li>Enable two-factor authentication</li>
					</ul>
				</AlertDescription>
			</Alert>
			<Alert variant="warning">
				<AlertCircleIcon />
				<AlertTitle>Storage quota almost full</AlertTitle>
				<AlertDescription>
					<p>You&apos;re using 85% of your storage limit.</p>
					<ul className="list-inside list-disc text-sm">
						<li>Delete unused files</li>
						<li>Upgrade your plan</li>
						<li>Archive old projects</li>
					</ul>
				</AlertDescription>
			</Alert>
			<Alert variant="success">
				<AlertCircleIcon />
				<AlertTitle>Payment processed successfully</AlertTitle>
				<AlertDescription>
					<p>Your subscription has been renewed for another month.</p>
					<ul className="list-inside list-disc text-sm">
						<li>Receipt sent to your email</li>
						<li>Next billing: March 15, 2024</li>
						<li>Access to all premium features</li>
					</ul>
				</AlertDescription>
			</Alert>
		</div>
	)
}
