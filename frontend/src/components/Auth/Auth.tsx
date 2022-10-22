import { Button, Center, Image, Input, Stack, Text } from '@chakra-ui/react'
import { Session } from 'next-auth'
import { signIn } from 'next-auth/react'
import React, { FC, useState } from 'react'

interface IAuthProps {
  session: Session | null
  reloadSession: () => void
}

const Auth: FC<IAuthProps> = ({ session, reloadSession }) => {
  const [username, setUsername] = useState<string>('')

  const onSubmit = () => {
    try {
      //create username
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Center height="100vh">
      <Stack spacing={8} align={'center'}>
        {session ? (
          <>
            <Text fontSize="3xl">Create a username</Text>
            <Input
              placeholder="Enter a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button width={'100%'} onClick={onSubmit}>
              Save
            </Button>
          </>
        ) : (
          <>
            <Text fontSize="3xl">MessagerQL</Text>
            <Button
              onClick={() => signIn('google')}
              leftIcon={<Image height="20px" src="/images/googlelogo.png" />}
            >
              Continue with Google
            </Button>
          </>
        )}
      </Stack>
    </Center>
  )
}

export default Auth
