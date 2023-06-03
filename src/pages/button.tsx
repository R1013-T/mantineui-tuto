import BackHomeButton from '@/components/BackHomeButton'
import { Layout } from '@/components/Layout'
import { Button, Group } from '@mantine/core'
import { BrandApple } from 'tabler-icons-react'
import { BrandBeats } from 'tabler-icons-react'

const ButtonDemo = () => {
  return (
    <Layout title="button">
      <Group direction='column' position="center">
        <Button>button</Button>
        <Button color="cyan" radius="md" size="lg" uppercase>
          button
        </Button>
        <Button
          classNames={{ leftIcon: 'text-pink-500 h-5 w-5' }}
          color="cyan"
          radius="md"
          size="lg"
          uppercase
          leftIcon={<BrandApple />}
          rightIcon={<BrandBeats size={60} strokeWidth={3} color={'#862d2e'} />}
        >
          button
        </Button>
        <Button className='mt-4' >
          button
        </Button>
        <BackHomeButton />
      </Group>
    </Layout>
  )
}

export default ButtonDemo
