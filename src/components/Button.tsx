import { Button as NBButton, IButtonProps, Heading } from 'native-base';

interface ButtonProps extends IButtonProps { 
  title: string;
}

export function Button({ title, ...props }: ButtonProps) {
  return (
    <NBButton
      bg='green.700'
      h={14}
      fontSize='sm'
      rounded='sm'
      _pressed={{
        bg: 'green.500',
      }}
      {...props}>
      <Heading
        fontSize='sm'
        color='white'
      >{title}</Heading>
    </NBButton>
  );
}