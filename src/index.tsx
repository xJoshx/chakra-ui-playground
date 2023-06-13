import { ChakraProvider, Heading } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Flex, Avatar, Box, IconButton, Text, Image } from "@chakra-ui/react";
import { ArrowUpIcon, UpDownIcon } from "@chakra-ui/icons";
import * as React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const ProposalCard = () => {
  return (
    <Card maxW="md">
      <CardHeader>
        <Flex flex="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Box>
              <Heading size="sm">Segun Adebayo</Heading>
              <Text>Creator, Chakra UI</Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>
          With Chakra UI, I wanted to sync the speed of development with the
          speed of design. I wanted the developer to be just as excited as the
          designer to create a screen. With Chakra UI, I wanted to sync the
          speed of development with the speed of design. I wanted the developer
          to be just as excited as the designer to create a screen. With Chakra
          UI, I wanted to.
        </Text>
      </CardBody>

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px"
          }
        }}
      >
        <Button flex="1" variant="ghost" leftIcon={<ArrowUpIcon />}>
          Share
        </Button>
      </CardFooter>
    </Card>
  );
};

function App() {
  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <GridItem w="100%" h="5" bg="blue.500">
          <ProposalCard />
        </GridItem>
        <GridItem w="100%" h="5" bg="blue.500">
          <ProposalCard />
        </GridItem>
        <GridItem w="100%" h="5" bg="blue.500">
          <ProposalCard />
        </GridItem>
        <GridItem w="100%" h="5" bg="blue.500">
          <ProposalCard />
        </GridItem>
      </Grid>
    </>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
