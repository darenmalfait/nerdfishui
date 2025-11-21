'use client'

import { Button } from '@nerdfish/react/button'
import {
	createFilter,
	Filters,
	type Filter,
	type FilterFieldConfig,
} from '@nerdfish/react/filters'
import { cn } from '@nerdfish/utils/class'
import {
	AlertCircleIcon,
	BanIcon,
	BellIcon,
	BuildingIcon,
	CalendarIcon,
	CheckCircleIcon,
	ClockIcon,
	FunnelXIcon,
	GlobeIcon,
	MailIcon,
	PhoneIcon,
	SlidersHorizontalIcon,
	StarIcon,
	TimerIcon,
	TrendingUpIcon,
	TypeIcon,
	UserRoundCheckIcon,
	UsersIcon,
	WalletIcon,
} from 'lucide-react'
import { useState } from 'react'

// Priority icon component
const PriorityIconIcon = ({ priority }: { priority: string }) => {
	const colors = {
		low: 'bg-green-500',
		medium: 'bg-yellow-500',
		high: 'bg-violet-500',
		urgent: 'bg-orange-500',
		critical: 'bg-red-500',
	}
	return (
		<div
			className={cn(
				'size-2.25 shrink-0 rounded-full',
				colors[priority as keyof typeof colors],
			)}
		/>
	)
}

export function FiltersExample() {
	// Example: All Possible Filter Field Types with Grouping
	const fields: FilterFieldConfig[] = [
		{
			group: 'Basic',
			fields: [
				{
					key: 'text',
					label: 'Text',
					type: 'text',
					icon: <TypeIcon />,
					placeholder: 'Search text...',
				},
				{
					key: 'email',
					label: 'Email',
					type: 'email',
					icon: <MailIcon />,
					placeholder: 'user@example.com',
				},
				{
					key: 'website',
					label: 'Website',
					icon: <GlobeIcon />,
					type: 'url',
					className: 'w-40',
					placeholder: 'https://example.com',
				},
				{
					key: 'phone',
					label: 'Phone',
					icon: <PhoneIcon />,
					type: 'tel',
					className: 'w-40',
					placeholder: '+1 (123) 456-7890',
				},
				{
					key: 'isActive',
					label: 'Is active ?',
					icon: <CheckCircleIcon />,
					type: 'boolean',
				},
			],
		},
		{
			group: 'Select',
			fields: [
				{
					key: 'status',
					label: 'Status',
					icon: <BellIcon />,
					type: 'select',
					searchable: false,
					className: 'w-[200px]',
					options: [
						{
							value: 'todo',
							label: 'To Do',
							icon: <ClockIcon className="text-primary size-3" />,
						},
						{
							value: 'in-progress',
							label: 'In Progress',
							icon: <AlertCircleIcon className="size-3 text-yellow-500" />,
						},
						{
							value: 'done',
							label: 'Done',
							icon: <CheckCircleIcon className="size-3 text-green-500" />,
						},
						{
							value: 'cancelled',
							label: 'Cancelled',
							icon: <BanIcon className="text-destructive size-3" />,
						},
					],
				},
				{
					key: 'priority',
					label: 'Priority',
					icon: <SlidersHorizontalIcon />,
					type: 'multiselect',
					className: 'w-[180px]',
					selectedOptionsClassName: '-space-x-1',
					options: [
						{
							value: 'low',
							label: 'Low',
							icon: <PriorityIconIcon priority="low" />,
						},
						{
							value: 'medium',
							label: 'Medium',
							icon: <PriorityIconIcon priority="medium" />,
						},
						{
							value: 'high',
							label: 'High',
							icon: <PriorityIconIcon priority="high" />,
						},
						{
							value: 'urgent',
							label: 'Urgent',
							icon: <PriorityIconIcon priority="urgent" />,
						},
						{
							value: 'critical',
							label: 'Critical',
							icon: <PriorityIconIcon priority="critical" />,
						},
					],
				},
				{
					key: 'assignee',
					label: 'Assignee',
					icon: <UserRoundCheckIcon />,
					type: 'multiselect',
					maxSelections: 5,
					options: [
						{
							value: 'john',
							label: 'John Doe',
							icon: <div className="size-3 rounded-full bg-blue-400" />,
						},
						{
							value: 'jane',
							label: 'Jane Smith',
							icon: <div className="size-3 rounded-full bg-green-400" />,
						},
						{
							value: 'bob',
							label: 'Bob Johnson',
							icon: <div className="size-3 rounded-full bg-purple-400" />,
						},
						{
							value: 'unassigned',
							label: 'Unassigned',
							icon: <BuildingIcon className="size-3 text-gray-400" />,
						},
					],
				},
				{
					key: 'userType',
					label: 'User Type',
					icon: <UsersIcon />,
					type: 'select',
					searchable: false,
					className: 'w-[200px]',
					options: [
						{
							value: 'premium',
							label: 'Premium',
							icon: <StarIcon className="size-3 text-yellow-500" />,
						},
						{
							value: 'standard',
							label: 'Standard',
							icon: <BuildingIcon className="size-3 text-blue-500" />,
						},
						{
							value: 'trial',
							label: 'Trial',
							icon: <ClockIcon className="size-3 text-gray-500" />,
						},
					],
				},
			],
		},
		{
			group: 'Date & Time',
			fields: [
				{
					key: 'dueDate',
					label: 'Due Date',
					icon: <CalendarIcon />,
					type: 'date',
					className: 'w-36',
				},
				{
					key: 'orderDate',
					label: 'Order Date',
					icon: <CalendarIcon />,
					type: 'select',
					searchable: false,
					className: 'w-[200px]',
					options: [
						{ value: 'past', label: 'in the past' },
						{ value: '24h', label: '24 hours from now' },
						{ value: '3d', label: '3 days from now' },
						{ value: '1w', label: '1 week from now' },
						{ value: '1m', label: '1 month from now' },
						{ value: '3m', label: '3 months from now' },
					],
				},
				{
					key: 'dateRange',
					label: 'Date Range',
					icon: <CalendarIcon />,
					type: 'daterange',
				},
				{
					key: 'createdAt',
					label: 'Created At',
					icon: <ClockIcon />,
					type: 'datetime',
				},
				{
					key: 'workingHours',
					label: 'Working Hours',
					icon: <TimerIcon />,
					type: 'time',
				},
			],
		},
		{
			group: 'Numbers',
			fields: [
				{
					key: 'score',
					label: 'Score',
					icon: <StarIcon />,
					type: 'number',
					min: 0,
					max: 100,
					step: 1,
				},
				{
					key: 'salary',
					label: 'Salary',
					icon: <WalletIcon />,
					type: 'number',
					prefix: '$',
					className: 'w-24',
					min: 0,
					max: 500000,
					step: 1000,
				},
				{
					key: 'completion',
					label: 'Completion',
					icon: <TrendingUpIcon />,
					className: 'w-24',
					suffix: '%',
					type: 'number',
					step: 5,
				},
			],
		},
	]

	const [filters, setFilters] = useState<Filter[]>([
		createFilter('priority', 'contains', ['low', 'medium', 'critical']),
	])

	return (
		<div className="content-starIcont items-starIcont self-starIcont flex grow gap-2.5 space-y-6">
			<div className="flex-1">
				<Filters
					filters={filters}
					fields={fields}
					variant="outline"
					onChange={setFilters}
				/>
			</div>

			{filters.length > 0 ? (
				<div>
					<Button variant="outline" onClick={() => setFilters([])}>
						<FunnelXIcon className="size-4" /> Clear
					</Button>
				</div>
			) : null}
		</div>
	)
}
