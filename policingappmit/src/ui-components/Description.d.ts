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
    "The data hub contains dispatcher and police stop data from 40 participating cities in America Toggle with the data visualization tool on the left to examine crime rates fora specific state overtime"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DescriptionProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DescriptionOverridesProps | undefined | null;
}>;
export default function Description(props: DescriptionProps): React.ReactElement;
