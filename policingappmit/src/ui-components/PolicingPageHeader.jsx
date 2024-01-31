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
      width="1091px"
      height="363px"
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
        width="1091px"
        height="363px"
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
        border="3px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 6")}
      >
        <Text
          fontFamily="Source Sans Pro"
          fontSize="32px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="40.2239990234375px"
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
          left="calc(50% - 86px - 0.5px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Policing Lab"
          {...getOverrideProps(overrides, "Policing Lab")}
        ></Text>
        <Text
          fontFamily="Source Sans Pro"
          fontSize="25px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="31.424999237060547px"
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
          left="calc(50% - 376.5px - 0px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="The central theme of the Policing Lab project is to understand the role of data in the design of unbiased policies with regard to race and other factors for emergency and police priority dispatch systems, policing, justice systems, correction facilities and beyond. Towards that, the project aims to create a publicly available comprehensive “data hub” to foster the role of data in policy design, as well as develop analytic methods to evaluate biases using the data."
          {...getOverrideProps(
            overrides,
            "The central theme of the Policing Lab project is to understand the role of data in the design of unbiased policies with regard to race and other factors for emergency and police priority dispatch systems, policing, justice systems, correction facilities and beyond. Towards that, the project aims to create a publicly available comprehensive \u201Cdata hub\u201D to foster the role of data in policy design, as well as develop analytic methods to evaluate biases using the data."
          )}
        ></Text>
      </View>
    </View>
  );
}
