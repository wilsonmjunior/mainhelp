import { Box, Heading, Icon, useTheme, VStack } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';

import { Input } from '../../components/Input';

import Logo from '../../assets/logo_primary.svg';

export function SignIn() {
  const { colors } = useTheme();

  return (
    <VStack
      flex={1}
      alignItems='center'
      bg='gray.600'
      px={8}
      pt={24}
    >
      <Logo />

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
        />
      </Box>
    </VStack>
  );
}
