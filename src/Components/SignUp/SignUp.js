import { default as React } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
// Chakra imports
import {
  Box,
  Button,
  DarkMode,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  HStack,
  Radio,
  RadioGroup,
  Switch,
  Text,
} from "@chakra-ui/react";

// Assets
import illustration from "../../assets/img/illustration-auth.png";

// Custom components
import GradientBorder from "../GradientBorder/GradientBorder";
import AuthFooter from "../Footer/AuthFooter";

function SignUp() {
  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (
      businessName &&
      ownerName &&
      ownerEmail &&
      ownerPhone &&
      businessAddress &&
      password &&
      confirmPassword
    ) {
      if (password !== confirmPassword) {
        Swal.fire("Error", "Passwords do not match", "error");
        return;
      }

      // Show success message
      Swal.fire("Success", "Signup successful", "success");

      // Reset form fields (optional)
      setBusinessName("");
      setOwnerName("");
      setOwnerEmail("");
      setOwnerPhone("");
      setBusinessAddress("");
      setPassword("");
      setConfirmPassword("");
    } else {
      // Show error message if any field is missing
      Swal.fire("Error", "Please fill out all fields", "error");
    }
  };

  // Chakra color mode
  const titleColor = "white";
  const textColor = "gray.400";
  const illustrationBackground =
    "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)";

  return (
    <Flex position="relative">
      <Flex
        minH="100vh"
        h={{ base: "140vh", lg: "fit-content" }}
        w="100%"
        maxW="1044px"
        mx="auto"
        pt={{ sm: "100px", md: "0px" }}
        flexDirection="column"
        me={{ base: "auto", lg: "50px", xl: "auto" }}
      >
        <Flex
          alignItems="center"
          justifyContent="start"
          style={{ userSelect: "none" }}
          mx={{ base: "auto", lg: "unset" }}
          me={{ base: "auto", lg: "auto" }}
          w={{ base: "100%", md: "50%", lg: "450px" }}
          px="50px"
        >
          <Flex
            direction="column"
            w="100%"
            background="transparent"
            mt={{
              base: "50px",
              md: "150px",
              lg: "160px",
              xl: "185px",
              "2xl": "245px",
            }}
            mb={{ base: "60px", lg: "95px" }}
          >
            <Heading color={titleColor} fontSize="24px" mb="10px">
              Create a new Business Account
            </Heading>
            <form onSubmit={handleSignup}>
              <FormLabel
                color={titleColor}
                ms="4px"
                fontSize="sm"
                fontWeight="500"
              >
                Business Name
              </FormLabel>

              <GradientBorder
                mb="24px"
                h="50px"
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius="20px"
              >
                <Input
                  color={titleColor}
                  bg={{
                    base: "rgb(19,21,54)",
                  }}
                  border="transparent"
                  borderRadius="20px"
                  fontSize="sm"
                  size="lg"
                  w={{ base: "100%", md: "346px" }}
                  maxW="100%"
                  h="46px"
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Business Name"
                />
              </GradientBorder>
              <FormLabel
                color={titleColor}
                ms="4px"
                fontSize="sm"
                fontWeight="500"
              >
                Business Owner Name
              </FormLabel>

              <GradientBorder
                mb="24px"
                h="50px"
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius="20px"
              >
                <Input
                  color={titleColor}
                  bg={{
                    base: "rgb(19,21,54)",
                  }}
                  border="transparent"
                  borderRadius="20px"
                  fontSize="sm"
                  size="lg"
                  w={{ base: "100%", md: "346px" }}
                  maxW="100%"
                  h="46px"
                  type="text"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  placeholder="Business Owner Name"
                />
              </GradientBorder>
              <FormLabel
                color={titleColor}
                ms="4px"
                fontSize="sm"
                fontWeight="500"
              >
                Business Owner Email
              </FormLabel>
              <GradientBorder
                mb="24px"
                h="50px"
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius="20px"
              >
                <Input
                  color={titleColor}
                  bg={{
                    base: "rgb(19,21,54)",
                  }}
                  border="transparent"
                  borderRadius="20px"
                  fontSize="sm"
                  size="lg"
                  w={{ base: "100%", md: "346px" }}
                  maxW="100%"
                  h="46px"
                  type="email"
                  value={ownerEmail}
                  onChange={(e) => setOwnerEmail(e.target.value)}
                  placeholder="Business Owner Email"
                />
              </GradientBorder>
              <FormLabel
                color={titleColor}
                ms="4px"
                fontSize="sm"
                fontWeight="500"
              >
                Business Owner Phone No
              </FormLabel>
              <GradientBorder
                mb="24px"
                h="50px"
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius="20px"
              >
                <Input
                  color={titleColor}
                  bg={{
                    base: "rgb(19,21,54)",
                  }}
                  border="transparent"
                  borderRadius="20px"
                  fontSize="sm"
                  size="lg"
                  w={{ base: "100%", md: "346px" }}
                  maxW="100%"
                  h="46px"
                  type="text"
                  value={ownerPhone}
                  onChange={(e) => setOwnerPhone(e.target.value)}
                  placeholder="Business Owner Phone No"
                />
              </GradientBorder>
              <FormLabel
                color={titleColor}
                ms="4px"
                fontSize="sm"
                fontWeight="500"
              >
                Business Address
              </FormLabel>
              <GradientBorder
                mb="24px"
                h="50px"
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius="20px"
              >
                <Input
                  color={titleColor}
                  bg={{
                    base: "rgb(19,21,54)",
                  }}
                  border="transparent"
                  borderRadius="20px"
                  fontSize="sm"
                  size="lg"
                  w={{ base: "100%", md: "346px" }}
                  maxW="100%"
                  h="46px"
                  type="text"
                  value={businessAddress}
                  onChange={(e) => setBusinessAddress(e.target.value)}
                  placeholder="Business Address"
                />
              </GradientBorder>
              <FormLabel
                color={titleColor}
                ms="4px"
                fontSize="sm"
                fontWeight="500"
              >
                Password
              </FormLabel>
              <GradientBorder
                mb="24px"
                h="50px"
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius="20px"
              >
                <Input
                  color={titleColor}
                  bg={{
                    base: "rgb(19,21,54)",
                  }}
                  border="transparent"
                  borderRadius="20px"
                  fontSize="sm"
                  size="lg"
                  w={{ base: "100%", md: "346px" }}
                  maxW="100%"
                  h="46px"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </GradientBorder>
              <FormLabel
                color={titleColor}
                ms="4px"
                fontSize="sm"
                fontWeight="500"
              >
                Confirm Password
              </FormLabel>
              <GradientBorder
                mb="24px"
                h="50px"
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius="20px"
              >
                <Input
                  color={titleColor}
                  bg={{
                    base: "rgb(19,21,54)",
                  }}
                  border="transparent"
                  borderRadius="20px"
                  fontSize="sm"
                  size="lg"
                  w={{ base: "100%", md: "346px" }}
                  maxW="100%"
                  h="46px"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                />
              </GradientBorder>
              <Button
                variant="brand"
                fontSize="10px"
                type="submit"
                w="100%"
                h="45"
                mb="20px"
              >
                SIGN UP
              </Button>
            </form>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxW="100%"
              mt="0px"
            >
              <Link
                color={titleColor}
                as="span"
                ms="5px"
                href="#"
                fontWeight="bold"
                fontSize="14px"
              >
                Create a new personal account
              </Link>
            </Flex>
          </Flex>
        </Flex>
        <Box
          display={{ base: "none", md: "block" }}
          overflowX="hidden"
          h="100%"
          w={{ lg: "50vw", "2xl": "50vw" }}
          position="absolute"
          right="0px"
        >
          <Flex
            bg={illustrationBackground}
            justify="center"
            align="center"
            w="100%"
            h="100%"
            bgSize="cover"
            bgPosition="50%"
            position="absolute"
          >
            <Image
              w={{ lg: "450px", xl: "550px", "2xl": "690px" }}
              src={illustration}
              alt="illustration"
            />
          </Flex>
        </Box>
        <Box
          w={{ base: "335px", md: "450px" }}
          mx={{ base: "auto", lg: "unset" }}
          me={{ base: "auto", lg: "auto" }}
          mb="80px"
        >
          <AuthFooter />
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignUp;
