import { supabase } from '@/utils/supabase'
import { Layout } from './Layout'
import { ActionIcon, Center } from '@mantine/core'
import { LogoutIcon, ShieldCheckIcon } from '@heroicons/react/outline'

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
        <ActionIcon my="md" size='lg' onClick={signOut} >
          <LogoutIcon />
        </ActionIcon>
      </Center>
    </Layout>
  )
}

export default DashBoard
