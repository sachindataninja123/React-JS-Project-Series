import {
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  Heading,
  HStack,
  Box,
  Icon,
} from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box px="2">
      <HStack
        maxW="70rem"
        h="16"
        mx="auto"
        px="32px" // ✅ same space left & right
        justify="space-between"
        align="center"
      >
        <Icon
          cursor="pointer"
          fontSize="22px"
          as={IoMenu}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading fontSize="30px">{title}</Heading>

        <Menu>
          <MenuButton>
            <Icon as={FaUserCircle} fontSize="30px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
