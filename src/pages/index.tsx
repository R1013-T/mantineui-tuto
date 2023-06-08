import { Layout } from '@/components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <Link href="/button">button</Link>
      <Link href="/group">group</Link>
      <Link href="/grid">grid</Link>
      <Link href="/form">form</Link>
    </Layout>
  )
}
