import { Alert, Center, Loader, Text } from '@mantine/core'
import { useQueryTodos } from '../../hooks/useQueryTodos'
import { ExclamationIcon } from '@heroicons/react/outline'

const FetchTodos = () => {
  const { data, status } = useQueryTodos()

  if (status === 'loading') {
    return (
      <Center>
        <Loader color="gray" size="xl" variant="bars" />
      </Center>
    )
  }

  if (status === 'error') {
    return (
      <Alert
        icon={<ExclamationIcon />}
        title="Fetch Error!"
        color="red"
        radius="md"
      >
        Something went wrong!
      </Alert>
    )
  }

  return (
    <div className="text-center">
      <Text weight="bold">task List</Text>
      {data?.map((todo) => (
        <Text my="xs" size="sm" key={todo.id}>
          {todo.title}
        </Text>
      ))}
    </div>
  )
}

export default FetchTodos
