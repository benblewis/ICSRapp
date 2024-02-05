/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
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
      opacity="0.9900000095367432"
      {...getOverrideProps(overrides, "TopBar")}
      {...rest}
    >
      <View
        width="1220px"
        height="52px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1899999976158142)"
        borderRadius="30px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "TopBar2")}
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
          top="calc(50% - 22.5px - -1px)"
          left="calc(50% - 149px - -428px)"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Links")}
        >
          <Text
            fontFamily="Source Sans Pro"
            fontSize="20px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="25.139999389648438px"
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
            fontFamily="Source Sans Pro"
            fontSize="20px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="25.139999389648438px"
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
            fontFamily="Source Sans Pro"
            fontSize="20px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="25.139999389648438px"
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
          fontFamily="Source Sans Pro"
          fontSize="25px"
          fontWeight="700"
          color="rgba(4,28,66,1)"
          lineHeight="31.424999237060547px"
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
    </View>
  );
}
