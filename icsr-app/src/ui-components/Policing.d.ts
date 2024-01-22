/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PolicingOverridesProps = {
    Policing?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ImageProps>;
    "Policing Lab"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PolicingProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: PolicingOverridesProps | undefined | null;
}>;
export default function Policing(props: PolicingProps): React.ReactElement;
