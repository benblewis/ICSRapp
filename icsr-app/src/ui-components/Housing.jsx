/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import img from "./Housing.png"
export default function Housing(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="417px"
      height="277px"
      justifyContent="space-between"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      boxShadow="0px 0px 0px rgba(0, 0, 0, 0.25)"
      borderRadius="20px"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Housing")}
      {...rest}
    >
      <Image
        src={img}
        style={{ alignSelf: 'center' }}
        width="100%"
        height="100%"
        display="block"
        gap="unset"
        alignItems="center"
        //verticalAlign= 'middle'
        justifyContent="unset"
        shrink="100"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image 2")}
      ></Image>
      <Text
        fontFamily="Source Sans Pro"
        fontSize="36px"
        fontWeight="600"
        color="rgba(255,255,255,1)"
        lineHeight="45.25199890136719px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="192px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Housing Lab"
        {...getOverrideProps(overrides, "Housing Lab")}
      ></Text>
    </Flex>
  );
}
