import {Box, Center, Heading} from 'native-base';
import React from 'react';
import type {InformationProps} from '../../navigation';

export default function Information({
  navigation,
  route,
}: InformationProps): React.JSX.Element {
  console.log(navigation, route);
  return (
    <Box>
      <Center p="5">
        <Heading size="md" color="coolGray.700">
          {'Coming soon'.toUpperCase()}
        </Heading>
      </Center>
    </Box>
  );
}
