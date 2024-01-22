/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DescriptionofVerticalsOverridesProps = {
    DescriptionofVerticals?: PrimitiveOverrideProps<ViewProps>;
    "Verticals The ICSR is split into verticals (labs) which all address systemic racism in specific areas of society. Click on the labs below to visualize and download data related to that subject area."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DescriptionofVerticalsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DescriptionofVerticalsOverridesProps | undefined | null;
}>;
export default function DescriptionofVerticals(props: DescriptionofVerticalsProps): React.ReactElement;
