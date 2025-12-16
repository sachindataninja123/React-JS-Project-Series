import { HStack, Icon, Stack, Text, Tag, Button } from "@chakra-ui/react";

import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const PortfolioSection = () => {
  return (
    <div>
      <HStack justifyContent="space-between" bg="#fff" borderRadius="xl" px="6" py="7" >
        <HStack spacing={16}>
          <Stack>
            <HStack>
              <Text fontWeight="semibold">Total Portfolio Value</Text>
              <Icon as={FaInfoCircle} />
            </HStack>
            <Text fontSize="24px">₹ 112,312.24</Text>
          </Stack>
          <Stack>
            <HStack>
              <Text fontWeight="semibold">Wallet Balances</Text>
            </HStack>
            <HStack>
              <HStack>
                <Text fontSize="24px">₹ 22.39401000</Text>
                <Tag colorScheme="gray" >BTC</Tag>
              </HStack>
              <HStack>
                <Text>₹ 1300.00</Text> <Tag colorScheme="gray">INR</Tag>
              </HStack>
            </HStack>
          </Stack>
        </HStack>

        <HStack>
          <Button>Deposit</Button>
          <Button>Withdraw</Button>
        </HStack>
      </HStack>
    </div>
  );
};

export default PortfolioSection;
