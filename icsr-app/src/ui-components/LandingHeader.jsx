/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
import pic from "./home-deep-learning.jpg"
export default function LandingHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1060px"
      height="262px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "LandingHeader")}
      {...rest}
    >
      <Image
        src={pic}
        width="100%"
        height="62.6%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="37.4%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></Image>
      <Text
        fontFamily="Karla"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="28.055999755859375px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="691px"
        height="40px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="84.73%"
        left="17.36%"
        right="17.45%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="MIT’s Initiative on Combating Systemic Racism&#xA;Using Data to inform unbiased policy recommendations"
        {...getOverrideProps(
          overrides,
          "MIT\u2019s Initiative on Combating Systemic Racism Using Data to inform unbiased policy recommendations"
        )}
      ></Text>
    </View>
  );
}
