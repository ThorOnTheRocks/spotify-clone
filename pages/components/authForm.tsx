import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { FC, useState } from "react";
import { useRouter } from "next/router";
import { useSWRConfig } from "swr";
import { auth } from "../../lib/fetcher";

const AuthForm: FC<{ mode: string }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, isLoading] = useState(false);
  const router = useRouter();

  return (
    <Box width="100vw" height="100wh" bg="black" color="white">
      <Flex justify="center" align="center" height="100px">
        hello
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        Form
      </Flex>
    </Box>
  );
};

export default AuthForm;
