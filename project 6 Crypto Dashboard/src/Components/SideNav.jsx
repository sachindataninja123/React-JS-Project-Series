import React from "react";
import { HStack, Stack, Icon, Text, Heading, Box } from "@chakra-ui/react";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbArrowsDoubleNwSe } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";

const SideNav = () => {
  const navLinks = [
    {
      icon: LuLayoutDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: TbArrowsDoubleNwSe,
      text: "Transactions",
      link: "/transactions",
    },
  ];

  return (
    <div>
      <Stack bg="white"
        justifyContent="space-between"
        boxShadow={{
          base: "none",
          lg: "lg",
        }}
        w={{
          base: "full",
          lg: "16rem",
        }}
        h="100vh"
      >
        <Box>
          <Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem">
            @CODE WITH ME
          </Heading>
          <Box mt="6" mx="3">
            {navLinks.map((nav) => {
              return (
                <HStack
                  py="3"
                  px="4"
                  _hover={{
                    bg: "#f3f3f7",
                    color: "#171717",
                  }}
                  color="#797e82"
                  cursor="pointer"
                  borderRadius="10px"
                  key={nav.text}
                >
                  <Icon as={nav.icon} />
                  <Text fontSize="14px" fontWeight="medium">
                    {nav.text}
                  </Text>
                </HStack>
              );
            })}
          </Box>
        </Box>

        <Box mt="6" mx="3" mb="6">
          <HStack
            borderRadius="10px"
            py="3"
            px="4"
            color="#797e82"
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
          >
            <Icon as={MdOutlineSupportAgent} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Box>
      </Stack>
    </div>
  );
};

export default SideNav;
