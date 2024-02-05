/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type TopBarOverridesProps = {
    TopBar?: PrimitiveOverrideProps<ViewProps>;
    TopBar2?: PrimitiveOverrideProps<ViewProps>;
    Links?: PrimitiveOverrideProps<FlexProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    "About Us"?: PrimitiveOverrideProps<TextProps>;
    "Working Papers"?: PrimitiveOverrideProps<TextProps>;
    "MIT ICSR Open Data Initiative"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TopBarProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TopBarOverridesProps | undefined | null;
}>;
export default function TopBar(props: TopBarProps): React.ReactElement;
