/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Description(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="680px"
      height="260px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      border="3px SOLID rgba(0,0,0,1)"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Description")}
      {...rest}
    >
      <Text
        fontFamily="Source Sans Pro"
        fontSize="20px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="25.139999389648438px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="19px"
        left="calc(50% - 73.5px - 0.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Data Description"
        {...getOverrideProps(overrides, "Data Description")}
      ></Text>
      <Text
        fontFamily="Source Sans Pro"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="25.139999389648438px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="480px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="54px"
        left="calc(50% - 240px - 0px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="The data hub contains dispatcher and police stop data from roughly 40 participating cities in America.&#xA;&#xA;Below is a list of our publicly available datasets organized by state/city/(call or stop)/year.&#xA;Call data refers to dispatcher data, while stop data is data collected from police stop interactions."
        {...getOverrideProps(
          overrides,
          "The data hub contains dispatcher and police stop data from roughly 40 participating cities in America. Below is a list of our publicly available datasets organized by state/city/(call or stop)/year. Call data refers to dispatcher data, while stop data is data collected from police stop interactions."
        )}
      ></Text>
    </View>
  );
}
