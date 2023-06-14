import * as Yup from 'yup'
import { Layout } from '@/components/Layout'
import { useQueryClient } from 'react-query'
import { useQueryPosts } from '../../hooks/useQueryPosts'
import { ChangeEvent, useState } from 'react'
import { useForm, yupResolver } from '@mantine/form'
import { Post } from '@/types'
import { supabase } from '@/utils/supabase'
import {
  Button,
  Center,
  Container,
  Grid,
  Loader,
  Select,
  Textarea,
  TextInput,
} from '@mantine/core'
import { CameraIcon } from '@heroicons/react/solid'
import { CustomCardDemo } from '@/components/CustomCard'
import BackHomeButton from "@/components/BackHomeButton";

const schema = Yup.object().shape({
  title: Yup.string().required('No title provided.'),
  content: Yup.string().required('No content provided.'),
  status: Yup.string().required('No status provided.'),
})
const PostList = () => {
  const queryClient = useQueryClient()
  const { data } = useQueryPosts()

  const [isLoading, setIsLoading] = useState(false)
  const [postUrl, setPostUrl] = useState('')

  const form = useForm<Omit<Post, 'id' | 'created_at' | 'post_url'>>({
    schema: yupResolver(schema),
    initialValues: {
      title: '',
      content: '',
      status: '',
    },
  })

  const uploadPostImage = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      throw new Error('You must select an image to upload.')
    }
    const file = e.target.files[0]
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`

    setIsLoading(true)
    const { error } = await supabase.storage
      .from('posts')
      .upload(fileName, file)

    if (error) throw new Error(error.message)
    setPostUrl(fileName)
    setIsLoading(false)
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    const { data, error } = await supabase.from('posts').insert({
      title: form.values.title,
      content: form.values.content,
      status: form.values.status,
      post_url: postUrl,
    })
    if (error) throw new Error(error.message)
    const cashedPosts = queryClient.getQueryData<Post[]>(['posts'])
    if (cashedPosts) {
      queryClient.setQueryData(['posts'], [...cashedPosts, data[0]])
    }
    setIsLoading(false)
    setPostUrl('')
    form.reset()
  }

  return (
    <Layout title="posts list">
      <Container className="w-96">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            mb="md"
            label="Title"
            placeholder="New Title"
            {...form.getInputProps('title')}
          />{' '}
          <Textarea
            mb="md"
            minRows={6}
            label="Content"
            placeholder="New Content"
            {...form.getInputProps('content')}
          />
          <Select
            label="Status"
            data={['New', 'PickUp', 'Hot']}
            {...form.getInputProps('status')}
          />
          <Center>{isLoading && <Loader my="xl" />}</Center>
          <Center>
            <label htmlFor="photo">
              <CameraIcon className="my-3 h-7 w-7 cursor-pointer text-gray-500" />
            </label>
            <input
              className="hidden"
              type="file"
              id="photo"
              accept="image/*"
              onChange={(e) => uploadPostImage(e)}
            />
          </Center>
          <Center>
            <Button mb="xl" type="submit">
              New Post
            </Button>
          </Center>
        </form>
      </Container>
      <Grid>
        {data?.map((post) => (
          <Grid.Col key={post.id} span={3}>
            <CustomCardDemo
              title={post.title}
              content={post.content}
              status={post.status}
              postUrl={
                post.post_url
                  ? `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}/posts/${post.post_url}`
                  : ''
              }
            />
          </Grid.Col>
        ))}
      </Grid>
      <Center>
        <BackHomeButton />
      </Center>
    </Layout>
  )
}

export default PostList
