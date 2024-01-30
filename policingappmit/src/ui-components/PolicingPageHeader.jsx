/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function PolicingPageHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1093px"
      height="727px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "PolicingPageHeader")}
      {...rest}
    >
      <View
        width="100%"
        height="61.35%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0%"
        bottom="38.65%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 69828")}
      ></View>
      <View
        width="784px"
        height="321px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="55.85%"
        bottom="0%"
        left="14.09%"
        right="14.18%"
        border="3px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 69876")}
      >
        <Text
          fontFamily="Kameron"
          fontSize="24px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="30.4921875px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="39px"
          left="calc(50% - 73.5px - 0.5px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Policing Lab"
          {...getOverrideProps(overrides, "Policing Lab")}
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
          width="753px"
          height="172px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="118px"
          left="calc(50% - 376.5px - 0.5px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="The central theme of the project is to understand the role of data in the design of unbiased policies with regard to race and other factors for emergency and police priority dispatch systems, policing, justice systems, correction facilities and beyond. Towards that, the project aims to create a publicly available comprehensive “data hub” to foster the role of data in policy design, as well as develop analytic methods to evaluate biases using the data."
          {...getOverrideProps(
            overrides,
            "The central theme of the project is to understand the role of data in the design of unbiased policies with regard to race and other factors for emergency and police priority dispatch systems, policing, justice systems, correction facilities and beyond. Towards that, the project aims to create a publicly available comprehensive \u201Cdata hub\u201D to foster the role of data in policy design, as well as develop analytic methods to evaluate biases using the data."
          )}
        ></Text>
      </View>
    </View>
  );
}
