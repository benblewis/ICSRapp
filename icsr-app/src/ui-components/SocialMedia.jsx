/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import pic from "./AdobeStock_389328016_Editorial_Use_Only.webp"
export default function SocialMedia(props) {
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
      padding="11px 7px 11px 7px"
      {...getOverrideProps(overrides, "SocialMedia")}
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
        {...getOverrideProps(overrides, "Rectangle 4")}
      ></Image>
      <Text
        fontFamily="Kameron"
        fontSize="20px"
        fontWeight="700"
        color="rgba(245,245,245,1)"
        lineHeight="25.41015625px"
        textAlign="center"
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
        children="Social Media Lab"
        {...getOverrideProps(overrides, "Social Media Lab")}
      ></Text>
    </Flex>
  );
}
