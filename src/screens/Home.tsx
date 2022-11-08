import { HStack, IconButton, useTheme, VStack } from 'native-base';
import { SignOut } from 'phosphor-react-native';

import { LogoSecondary } from '../assets';

export function Home() {
  const { colors } = useTheme();

  return (
    <VStack
      flex={1}
      pb={6}
      bg='gray.700'
    >
      <HStack 
        w='full'
        justifyContent='space-between'
        alignItems='center'
        bg='gray.600'
        pt={12}
        pb={5}
        px={6}
      >
        <LogoSecondary />

        <IconButton 
          icon={<SignOut size={26} color={colors.gray[300]} />}
        />
      </HStack>

    </VStack>
  );
}