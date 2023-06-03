import Link from 'next/link'
import { ReplyIcon } from '@heroicons/react/outline'

const BackHomeButton = () => {
  return (
    <Link href="/">
      <ReplyIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-500" />
    </Link>
  )
}

export default BackHomeButton
