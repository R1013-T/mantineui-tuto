import { useState } from 'react'
import * as Yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'
import {
  Anchor,
  NumberInput,
  TextInput,
  Button,
  Group,
  PasswordInput,
  Alert,
} from '@mantine/core'
import { supabase } from '@/utils/supabase'
import { Layout } from './Layout'
import { Form } from '@/types'
import {
  ExclamationCircleIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline'

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('No email provided.'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password should be at least 8 characters long')
    .matches(/[a-z]/, 'Password should contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password should contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password should contain at least one digit')
    .matches(
      /[@$!%#?&]/,
      'Password should contain at least one special character'
    ),
  age: Yup.number()
    .min(18, 'You must be at least 18 years')
    .required('No age provided.'),
})

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false)
  const [error, setError] = useState('')

  const form = useForm<Form>({
    schema: yupResolver(schema),
    initialValues: {
      email: '',
      password: '',
      age: 18,
    },
  })

  const handleSubmit = async () => {
    if (isRegister) {
      const { error } = await supabase.auth.signUp({
        email: form.values.email,
        password: form.values.password,
      })
      if (error) {
        setError(error.message)
      } else {
        form.reset()
      }
    } else {
      const { error } = await supabase.auth.signIn({
        email: form.values.email,
        password: form.values.password,
      })
      if (error) {
        setError(error.message)
      } else {
        form.reset()
      }
    }
  }

  return (
    <Layout>
      <Group direction="column" position="center">
        <ShieldCheckIcon className="h-16 w-16 text-blue-500" />
        {error && (
          <Alert
            mt="md"
            icon={<ExclamationCircleIcon className="text-pink-500" />}
            title="Authentication Error"
            color="red"
            radius="md"
          >
            {error}
          </Alert>
        )}

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            mt="md"
            id="email"
            label="Email"
            placeholder="Enter your email"
            {...form.getInputProps('email')}
          />
          <PasswordInput
            mt="md"
            id="password"
            label="Password"
            placeholder="Enter your password"
            {...form.getInputProps('password')}
          />
          {isRegister && (
            <NumberInput
              mt="md"
              id="age"
              label="Age"
              placeholder="Enter your age"
              description="You must be at least 18 years"
              {...form.getInputProps('age')}
            />
          )}
          <Group mt="lg" position="apart">
            <Anchor
              component="button"
              type="button"
              color="gray"
              onClick={() => {
                setIsRegister(!isRegister)
                setError('')
              }}
              size="sm"
            >
              {isRegister ? 'Login' : 'Register'}
            </Anchor>
            <Button type="submit">{isRegister ? 'Register' : 'Login'}</Button>
          </Group>
        </form>
      </Group>
    </Layout>
  )
}

export default Auth
