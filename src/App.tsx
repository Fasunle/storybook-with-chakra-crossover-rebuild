import { Box, Center, Image, Text } from '@chakra-ui/react';

function App() {
  return (
    <Box textAlign={'center'}>
      <Center my={'10'}>
        <Image src='/assets/crossover.svg' alt="crossover logo" h={200} />
      </Center>
      <Text fontSize={'2xl'}>
        Crossover Replicate with Reactjs + Storybook + Chakra + TypeScript
      </Text>
    </Box>
  );
}

export default App;
