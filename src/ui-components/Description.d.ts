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
export declare type DescriptionOverridesProps = {
    Description?: PrimitiveOverrideProps<ViewProps>;
    "Data Description"?: PrimitiveOverrideProps<TextProps>;
    "The data hub contains dispatcher and police stop data from roughly 40 participating cities in America. Below is a list of our publicly available datasets organized by state/city/(call or stop)/year. Call data refers to dispatcher data, while stop data is data collected from police stop interactions."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DescriptionProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DescriptionOverridesProps | undefined | null;
}>;
export default function Description(props: DescriptionProps): React.ReactElement;
