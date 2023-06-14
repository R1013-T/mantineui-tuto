import { FC } from 'react'
import { Badge, Button, Card, Group, Image, Text } from '@mantine/core'

type Props = {
  title: string
  content: string
  status: string
  postUrl: string
}
export const CustomCardDemo: FC<Props> = ({
  title,
  content,
  status,
  postUrl,
}) => {
  return (
    <Card withBorder >
      <Card.Section>
        <Image
          src={postUrl}
          height={160}
          alt="With default placeholder"
          withPlaceholder
        />
      </Card.Section>
      <Group position="apart" my="md">
        <Text weight={800}>{title}</Text>
        <Badge color="pink" radius="lg" variant="filled">
          {status}
        </Badge>
      </Group>
      <Text size="sm">{content}</Text>
      <Button className='w-full' mt="md" size="xs" variant="light" color="indigo">
        Subscribe
      </Button>
    </Card>
  )
}
