/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function Line1(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="1157px"
      height="0px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 1157, height: 0 }}
      paths={[
        {
          d: "M0 0L1157 0L1157 -1L0 -1L0 0Z",
          stroke: "rgba(205,201,202,1)",
          fillRule: "nonzero",
          strokeWidth: 1,
          style: { transform: "translate(0%, NaN%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Line1")}
      {...rest}
    ></Icon>
  );
}
