import React, { FC, useState } from 'react'
import { useMutation } from '@apollo/client'
import { Button, Center, Image, Input, Stack, Text } from '@chakra-ui/react'
import { Session } from 'next-auth'
import { signIn } from 'next-auth/react'
import UserOperations from '../../graphql/operations/user'
import { CreateUsernameData, CreateUsernameVariables } from '../../util/types'

interface IAuthProps {
  session: Session | null
  reloadSession: () => void
}

const Auth: FC<IAuthProps> = ({ session, reloadSession }) => {
  const [username, setUsername] = useState<string>('')

  const [createUsername, { data, loading, error }] = useMutation<
    CreateUsernameData,
    CreateUsernameVariables
  >(UserOperations.Mutations.createUsername)

  console.log(data, loading, error)

  const onSubmit = async () => {
    if (!username) return
    try {
      await createUsername({
        variables: {
          username,
        },
      })
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
