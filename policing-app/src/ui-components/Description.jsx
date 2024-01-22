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
      width="532px"
      height="231px"
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
        fontFamily="Kameron"
        fontSize="20px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="25.41015625px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="41px"
        left="calc(50% - 84.5px - 0.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Data Description"
        {...getOverrideProps(overrides, "Data Description")}
      ></Text>
      <Text
        fontFamily="Kameron"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="23.740234375px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="480px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="86px"
        left="calc(50% - 240px - 0px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="The data hub contains dispatcher and police stop data from 40 participating cities in America&#xA;&#xA;Toggle with the data visualization tool on the left to examine crime rates fora specific state overtime"
        {...getOverrideProps(
          overrides,
          "The data hub contains dispatcher and police stop data from 40 participating cities in America Toggle with the data visualization tool on the left to examine crime rates fora specific state overtime"
        )}
      ></Text>
    </View>
  );
}
