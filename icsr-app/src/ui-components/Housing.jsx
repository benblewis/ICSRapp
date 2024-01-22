/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import pic from "./housing-5.18.22.webp"
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
      padding="9px 7px 9px 7px"
      {...getOverrideProps(overrides, "Housing")}
      {...rest}
    >
      <Image
        src={pic}
        width="417px"
        height="277px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "Rectangle 2")}
      ></Image>
      <Text
        fontFamily="Kameron"
        fontSize="20px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="25.41015625px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="155px"
        height="25px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Housing Lab"
        {...getOverrideProps(overrides, "Housing Lab")}
      ></Text>
    </Flex>
  );
}
