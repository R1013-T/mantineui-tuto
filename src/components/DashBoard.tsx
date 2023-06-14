import { supabase } from '@/utils/supabase'
import { Layout } from './Layout'
import { ActionIcon, Center, Menu } from '@mantine/core'
import { LogoutIcon, ShieldCheckIcon } from '@heroicons/react/outline'
import { Settings } from 'tabler-icons-react'
import { NextLink } from '@mantine/next'

const DashBoard = () => {
  const signOut = () => {
    supabase.auth.signOut()
  }

  return (
    <Layout title="DashBoard">
      <Center>
        <ShieldCheckIcon className="1-14 mb-4 h-14 text-teal-500" />
      </Center>
      <Center>
        <Menu trigger="hover" size="xl">
          <Menu.Label>UI Components</Menu.Label>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/button"
          >
            Button
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/grid"
          >
            Grid
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/group"
          >
            Group
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/multi-select"
          >
            MultiSelect
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/fetch-api"
          >
            FetchApi
          </Menu.Item>
        </Menu>
        <Menu trigger="hover" size="xl">
          <Menu.Label>UI Components</Menu.Label>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/button"
          >
            Button
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/grid"
          >
            Grid
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/group"
          >
            Group
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/multi-select"
          >
            MultiSelect
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/fetch-api"
          >
            FetchApi
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/dialog"
          >
            Dialog
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/modal"
          >
            Modal
          </Menu.Item>{' '}
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/avatar"
          >
            Avatar
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/card"
          >
            Card
          </Menu.Item>
        </Menu>
      </Center>
      <Center>
        <ActionIcon my="md" size="lg" onClick={signOut}>
          <LogoutIcon />
        </ActionIcon>
      </Center>
    </Layout>
  )
}

export default DashBoard
