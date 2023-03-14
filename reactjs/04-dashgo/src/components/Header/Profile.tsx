import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Lucas Noman</Text>
        <Text color='gray.300' fontSize='small'>
          lucas.noman7@gmail.com
        </Text>
      </Box>

      <Avatar
        size='md'
        name='Lucas Noman'
        src='https://github.com/lucasnoman.png'
      ></Avatar>
    </Flex>
  );
}
