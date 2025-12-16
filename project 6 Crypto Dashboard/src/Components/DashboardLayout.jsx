import React from "react";
import TopNav from "./TopNav";
import SideNav from "./SideNav";
import { Flex, Box, Container, useDisclosure } from "@chakra-ui/react";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <div>
      <Flex bg="#ccc" >
        <Box
          display={{
            base: "none",
            lg: "flex",
          }}
        >
          <SideNav />
        </Box>
        <SideDrawer isOpen={isOpen} onClose={onClose} />
        <Box flexGrow={1}>
          <TopNav title={title} onOpen={onOpen} />
          <Container maxW="66rem">
            {children}
          </Container>
        </Box>
      </Flex>
    </div>
  );
};

export default DashboardLayout;
