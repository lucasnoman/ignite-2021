import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    // FormControl serve para cada "conjunto" dentro de um form. Ajuda também no caso do stack, a não ficar com espaço entre a label e input.

    <FormControl>
      {!!label && <FormLabel htmlFor='email'>E-mail</FormLabel>}

      <ChakraInput
        id='email'
        name='email'
        type='email'
        focusBorderColor='pink.500'
        bgColor='gray.900'
        variant='filled'
        _hover={{
          bgColor: 'gray.900',
        }}
        size='lg'
        {...rest}
      />
    </FormControl>
  );
}
