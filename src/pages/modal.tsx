import { useState } from 'react'
import Link from 'next/link'
import { Modal, Button, Group } from '@mantine/core'
import { ReplyIcon } from '@heroicons/react/solid'
import { Layout } from '@/components/Layout'
import AuthenForm from '@/components/AuthenForm'
import BackHomeButton from "@/components/BackHomeButton";

const ModalDemo = () => {
  const [opened, setOpened] = useState(false)

  return (
    <Layout>
      <Modal
        title="Authorization Form"
        centered
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <AuthenForm />
      </Modal>
      <Group direction="column" position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
        <BackHomeButton />
      </Group>
    </Layout>
  )
}

export default ModalDemo
