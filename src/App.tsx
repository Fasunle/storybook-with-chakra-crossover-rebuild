import logo from "./assets/crossover.svg";
import { Box, Text } from '@chakra-ui/react';

function App() {

  return (
    <Box textAlign={'center'}>
      <img src={logo} alt="Crossover" height={"200px"} />
      <Text fontSize={'2xl'}>
        Crossover Replicate with Reactjs + Storybook + Chakra + TypeScript
      </Text>
    </Box>
  )
}

export default App
