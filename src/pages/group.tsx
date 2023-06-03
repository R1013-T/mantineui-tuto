import BackHomeButton from '@/components/BackHomeButton'
import { Layout } from '@/components/Layout'
import { Group, Button, Center } from '@mantine/core'

const GroupDemo = () => {
  return (
    <Layout title="group">
      <Group className="my-4 bg-gray-500">
        <Button className="bg-indigo-400">button 1</Button>
        <Button className="bg-teal-400">button 2</Button>
        <Button className="bg-orange-400">button 3</Button>
      </Group>
      <Group className="my-4 bg-gray-500" position="center">
        <Button className="bg-indigo-400">button 1</Button>
        <Button className="bg-teal-400">button 2</Button>
        <Button className="bg-orange-400">button 3</Button>
      </Group>
      <Group className="my-4 bg-gray-500" position="right">
        <Button className="bg-indigo-400">button 1</Button>
        <Button className="bg-teal-400">button 2</Button>
        <Button className="bg-orange-400">button 3</Button>
      </Group>
      <Group className="my-4 bg-gray-500" position="apart">
        <Button className="bg-indigo-400">button 1</Button>
        <Button className="bg-teal-400">button 2</Button>
        <Button className="bg-orange-400">button 3</Button>
      </Group>
      <Group className="my-4 bg-gray-500" grow>
        <Button className="bg-indigo-400">button 1</Button>
        <Button className="bg-teal-400">button 2</Button>
        <Button className="bg-orange-400">button 3</Button>
      </Group>
      <Group className="my-4 bg-gray-500" direction="column">
        <Button className="bg-indigo-400">button 1</Button>
        <Button className="bg-teal-400">button 2</Button>
        <Button className="bg-orange-400">button 3</Button>
      </Group>
      <Group className="my-4 bg-gray-500" align="start">
        <Button className="h-10 bg-indigo-400">button 1</Button>
        <Button className="h-16 bg-teal-400">button 2</Button>
        <Button className="h-28 bg-orange-400">button 3</Button>
      </Group>
      <Group className="my-4 bg-gray-500" align="end">
        <Button className="h-10 bg-indigo-400">button 1</Button>
        <Button className="h-16 bg-teal-400">button 2</Button>
        <Button className="h-28 bg-orange-400">button 3</Button>
      </Group>
      <Group className="my-4 bg-gray-500" align="center">
        <Button className="h-10 bg-indigo-400">button 1</Button>
        <Button className="h-16 bg-teal-400">button 2</Button>
        <Button className="h-28 bg-orange-400">button 3</Button>
      </Group>
      <Center>
        <BackHomeButton />
      </Center>
    </Layout>
  )
}

export default GroupDemo
