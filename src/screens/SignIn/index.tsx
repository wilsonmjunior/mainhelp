import { Heading, VStack } from 'native-base';

import Logo from '../../assets/logo_primary.svg';

export function SignIn() {
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
    </VStack>
  );
}