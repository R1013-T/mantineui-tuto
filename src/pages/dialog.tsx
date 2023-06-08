import BackHomeButton from '@/components/BackHomeButton'
import { Layout } from '@/components/Layout'
import { Button, Center, Dialog, Group, Text, TextInput } from '@mantine/core'
import { useEffect, useState } from 'react'

const DialogDemo = () => {
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setOpened(true)
    }, 1500)
  }, [])

  return (
    <Layout>
      <Dialog
        opened={opened}
        withCloseButton
        onClose={() => setOpened(false)}
        size="lg"
        radius="md"
      >
        <Text size="sm" mb="md">
          newsletter
        </Text>
        <Group>
          <TextInput placeholder="email address" className="flex-1" />
          <Button onClick={() => setOpened(false)}>Subscribe</Button>
        </Group>
      </Dialog>
      <Group position="center" direction="column">
        <Button onClick={() => setOpened(!opened)}>dialog</Button>
        <BackHomeButton />
      </Group>
    </Layout>
  )
}

export default DialogDemo
