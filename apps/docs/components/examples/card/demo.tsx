import * as React from 'react'
import {Button, Card, Switch} from '@nerdfish/ui'
import {cx} from '@nerdfish/utils'
import {BellRing, Check} from 'lucide-react'

const notifications = [
  {
    title: 'Your cake has been awarded.',
    description: '1 hour ago',
  },
  {
    title: 'You have a new cake recipe!',
    description: '1 hour ago',
  },
  {
    title: 'Your subscription to the cake club is expiring soon!',
    description: '2 hours ago',
  },
]

type CardProps = React.ComponentProps<typeof Card>

export function CardDemo({className, ...props}: CardProps) {
  return (
    <Card className={cx('w-[380px]', className)} {...props}>
      <Card.Header>
        <Card.Title>Cake Notifications</Card.Title>
        <Card.Description>You have 3 unread cake messages.</Card.Description>
      </Card.Header>
      <Card.Content className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-muted-foreground text-sm">
              Send notifications to device.
            </p>
          </div>
          <Switch />
        </div>
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-muted-foreground text-sm">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card.Content>
      <Card.Footer>
        <Button className="w-full">
          <Check className="mr-2 h-4 w-4" /> Mark all as read
        </Button>
      </Card.Footer>
    </Card>
  )
}
