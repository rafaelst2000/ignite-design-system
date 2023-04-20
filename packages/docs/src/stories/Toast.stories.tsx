import { Meta, StoryObj } from '@storybook/react'
import { Button, Toast, ToastProps } from '@trevizera/react'
import { useEffect, useRef, useState } from 'react'

const DemoToast = (props: ToastProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const timeRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timeRef.current)
  }, [])
  return (
    <div>
      <Button
        onClick={() => {
          setIsOpen(false)
          window.clearTimeout(timeRef.current)
          timeRef.current = window.setTimeout(() => setIsOpen(true), 100)
        }}
      >
        Schedule
      </Button>
      <Toast open={isOpen} onOpenChange={setIsOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Alert/Toast',
  component: DemoToast,
  args: {
    title: 'Schedule done',
    description: 'Today 12pm',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
