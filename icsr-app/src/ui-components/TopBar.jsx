/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function TopBar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1220px"
      height="52px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "TopBar")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        position="absolute"
        top="calc(50% - 25px - -1px)"
        left="calc(50% - 158px - -428px)"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Links")}
      >
        <Text
          fontFamily="Kanit"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="29.899999618530273px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Home"
          {...getOverrideProps(overrides, "Home")}
        ></Text>
        <Text
          fontFamily="Kanit"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="29.899999618530273px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="About Us"
          {...getOverrideProps(overrides, "About Us")}
        ></Text>
        <Text
          fontFamily="Kanit"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="29.899999618530273px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Working Papers"
          {...getOverrideProps(overrides, "Working Papers")}
        ></Text>
      </Flex>
      <Text
        fontFamily="Kanit"
        fontSize="25px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="37.375px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="11px"
        left="32px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="MIT ICSR Open Data Initiative"
        {...getOverrideProps(overrides, "MIT ICSR Open Data Initiative")}
      ></Text>
    </View>
  );
}
