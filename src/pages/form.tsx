import useStore from '@/store'
import { supabase } from '@/utils/supabase'
import { NextPage } from 'next'
import { useEffect } from 'react'
import Auth from '@/components/Auth'
import DashBoard from '@/components/DashBoard'

const Form: NextPage = () => {
  const session = useStore((state) => state.session)
  const setSession = useStore((state) => state.setSession)

  useEffect(() => {
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [setSession])

  return <>{session ? <DashBoard /> : <Auth />}</>
}

export default Form
