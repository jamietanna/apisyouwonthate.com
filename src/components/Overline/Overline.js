import React from 'react';

import { Text, useColorModeValue } from '@chakra-ui/react';

const Overline = ({ children, ...rest }) => (
  <Text
    display={'inline-block'}
    textTransform={'uppercase'}
    color={useColorModeValue('blue.700', 'blue.200')}
    fontWeight={600}
    fontSize={'sm'}
    bg={useColorModeValue('blue.50', 'blue.900')}
    p={2}
    alignSelf={'flex-start'}
    rounded={'md'}
    {...rest}
  >
    {children}
  </Text>
);

export default Overline;
