import * as Yup from 'yup'
import React, { useCallback, useState } from 'react'
import { useForm, yupResolver } from '@mantine/form'
import { AuthForm } from '@/types'
import {
  LoadingOverlay,
  Paper,
  Group,
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Button,
} from '@mantine/core'

const schema = Yup.object().shape({
  firstName: Yup.string().required('No first name provided.'),
  lastName: Yup.string().required('No last name provided.'),
  email: Yup.string()
    .email('Invalid email address')
    .required('No email provided.'),
  password: Yup.string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 6 chars minimum.'),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password')], 'Passwords must match'),
  termsOfService: Yup.boolean().required(),
})

const AuthenForm = () => {
  const [loading, setLoading] = useState(false)
  const [isRegister, setIsRegister] = useState(true)

  const toggleAuthMode = () => {
    setIsRegister(!isRegister)
  }

  const form = useForm<AuthForm>({
    schema: yupResolver(schema),
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      termsOfService: true,
    },
  })

  const handleSubmit = (values: AuthForm) => {
    console.log(values)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      form.reset()
    }, 3000)
  }

  return (
    <Paper>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <LoadingOverlay visible={loading} />
        {isRegister && (
          <Group grow>
            <TextInput
              data-autofocus
              placeholder="Your first name"
              label="First name"
              {...form.getInputProps('firstName')}
            />
            <TextInput
              placeholder="Your last name"
              label="Last name"
              {...form.getInputProps('lastName')}
            />
          </Group>
        )}
        <TextInput
          mt="md"
          placeholder="Your email address"
          label="Email"
          {...form.getInputProps('email')}
        />
        <PasswordInput
          mt="md"
          placeholder="Your password"
          label="Password"
          {...form.getInputProps('password')}
        />
        {isRegister && (
          <PasswordInput
            mt="md"
            placeholder="Confirm password"
            label="Confirm password"
            {...form.getInputProps('confirmPassword')}
          />
        )}
        {isRegister && (
          <Checkbox
            mt="xl"
            label="I agree to terms and conditions"
            {...form.getInputProps('termsOfService', { type: 'checkbox' })}
          />
        )}
        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="gray"
            onClick={toggleAuthMode}
            size="sm"
          >
            {isRegister ? 'Already have an account?' : 'Create new account'}
          </Anchor>
          <Button color="blue" type="submit">
            {isRegister ? 'Register' : 'Login'}
          </Button>
        </Group>
      </form>
    </Paper>
  )
}

export default AuthenForm
