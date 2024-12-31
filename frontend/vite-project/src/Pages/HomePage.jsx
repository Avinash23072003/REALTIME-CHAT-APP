import Login from '../components/authentication/Login';
import SignUp from '../components/authentication/SignUp';

import { Container ,Box,Text ,Tabs} from "@chakra-ui/react"
const HomePage = () => {
  return (
    <Container maxW='xl' centerContent>
  <Box
  d="flex"
  justifyContent="center"
  alignItems="center"
  p={3}
  bg="white"
  w="100%"
  m="40px 0 15px 0"
  borderRadius="lg"
  borderWidth="1px"
>
  <Text
    fontSize="3xl"
    fontFamily="work-sans"
    color="black"
    textAlign="center"
  >
    Welcome to App
  </Text>

</Box>
<Box
  bg="white"
  w="100%"
  p={4}
  color="black"
  borderRadius="lg"
  borderWidth="1px"
>
  <Tabs.Root variant="enclosed" maxW="md" fitted defaultValue={"first"}>
    <Tabs.List>
      <Tabs.Trigger value="first">Login</Tabs.Trigger>
      <Tabs.Trigger value="second">SignUp</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="first">
      <Login />
    </Tabs.Content>
    <Tabs.Content value="second">
      <SignUp />
    </Tabs.Content>
  </Tabs.Root>
</Box>



    </Container>
  );
};

export default HomePage;
