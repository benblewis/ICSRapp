/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PolicingPageHeaderOverridesProps = {
    PolicingPageHeader?: PrimitiveOverrideProps<ViewProps>;
    "Frame 69828"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 69876"?: PrimitiveOverrideProps<ViewProps>;
    "Policing Lab"?: PrimitiveOverrideProps<TextProps>;
    "The central theme of the project is to understand the role of data in the design of unbiased policies with regard to race and other factors for emergency and police priority dispatch systems, policing, justice systems, correction facilities and beyond. Towards that, the project aims to create a publicly available comprehensive \u201Cdata hub\u201D to foster the role of data in policy design, as well as develop analytic methods to evaluate biases using the data."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PolicingPageHeaderProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PolicingPageHeaderOverridesProps | undefined | null;
}>;
export default function PolicingPageHeader(props: PolicingPageHeaderProps): React.ReactElement;
