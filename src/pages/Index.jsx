import { Container, VStack, Heading, Text, Flex, Box, Button } from '@chakra-ui/react';
import { FaRocket } from 'react-icons/fa';

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh" align="center" justify="center">
        <Box as="header" w="full" p={4} bg="brand.800" color="white">
          <Flex justify="space-between" align="center" maxW="container.md" m="0 auto">
            <Heading size="lg">GPT Engineer</Heading>
            <Button colorScheme="teal" leftIcon={<FaRocket />}>Get Started</Button>
          </Flex>
        </Box>
        <VStack spacing={8} mt={10} mb={20} align="center" justify="center">
          <Heading size="2xl" textAlign="center">Revolutionize Your Web Development</Heading>
          <Text fontSize="xl" maxW="container.md" textAlign="center">
            GPT Engineer is your ultimate AI-powered editor designed to streamline and enhance your web development process. Experience the future of coding now.
          </Text>
          <Button size="lg" colorScheme="blue" leftIcon={<FaRocket />}>Learn More</Button>
        </VStack>
        <Box as="footer" w="full" p={4} bg="brand.700" color="white">
          <Text textAlign="center">© 2023 GPT Engineer. All rights reserved.</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;