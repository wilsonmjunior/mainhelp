import { useState } from 'react';
import { Box, Heading, Icon, useTheme, VStack } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

import { LogoPrimary } from '../assets';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { colors } = useTheme();

  const handleEnter = () => {
    console.warn(email, password);
  }

  return (
    <VStack
      flex={1}
      alignItems='center'
      bg='gray.600'
      px={8}
      pt={24}
    >
      <LogoPrimary />

      <Heading 
        color='secondary.700' 
        fontSize='xl' 
        mt={20}
      >
        Acesse sua conta  
      </Heading>

      <Box 
        width='100%'
        mt={10}
      >
        <Input 
          placeholder='E-mail' 
          marginBottom={4}
          InputLeftElement={
            <Icon 
              as={<Envelope color={colors.gray[300]} />} 
              ml={4}
            />
          }
          onChangeText={text => setEmail(text)}
          autoCapitalize='none'
          keyboardType='email-address'
        />
        <Input
          placeholder='Senha' 
          InputLeftElement={
            <Icon 
              as={<Key color={colors.gray[300]} />} 
              ml={4}
            />
          }
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />

        <Button title='Entrar' marginTop={8} onPress={handleEnter} />
      </Box>
    </VStack>
  );
}
