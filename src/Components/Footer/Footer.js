/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";

export default function Footer(props) {
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent='space-between'
      px={{ base: "15px", md: "30px" }}
      pb='20px'>
      <Text
        fontSize='sm'
        color='white'
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}>
        &copy; {1900 + new Date().getYear()},{" "}
        <Text as='span'>
          {document.documentElement.dir === "rtl"
            ? " مصنوع من ❤️ بواسطة"
            : "CyberDex"}
        </Text>
      </Text>
      <List display='flex'>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}>
          <Link color='white' fontSize='sm' href='#'>
            {document.documentElement.dir === "rtl"
              ? "توقيت الإبداعية"
              : "Terms and conditions"}
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
