import { Button } from '@chakra-ui/react'
import { LayoutGroupContext } from 'framer-motion'
import { signOut } from 'next-auth/react'
import React, { FC } from 'react'

interface IChatProps {}

const Chat: FC<IChatProps> = () => {
  return (
    <div>
      Chat
      <Button onClick={() => signOut()}>Logout</Button>
    </div>
  )
}

export default Chat
