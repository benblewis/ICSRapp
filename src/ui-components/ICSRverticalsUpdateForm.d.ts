/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ICSRverticals } from "../models";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ICSRverticalsUpdateFormInputValues = {
    Vertical?: string;
    imageurl?: string;
};
export declare type ICSRverticalsUpdateFormValidationValues = {
    Vertical?: ValidationFunction<string>;
    imageurl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ICSRverticalsUpdateFormOverridesProps = {
    ICSRverticalsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Vertical?: PrimitiveOverrideProps<TextFieldProps>;
    imageurl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ICSRverticalsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ICSRverticalsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    iCSRverticals?: ICSRverticals;
    onSubmit?: (fields: ICSRverticalsUpdateFormInputValues) => ICSRverticalsUpdateFormInputValues;
    onSuccess?: (fields: ICSRverticalsUpdateFormInputValues) => void;
    onError?: (fields: ICSRverticalsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ICSRverticalsUpdateFormInputValues) => ICSRverticalsUpdateFormInputValues;
    onValidate?: ICSRverticalsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ICSRverticalsUpdateForm(props: ICSRverticalsUpdateFormProps): React.ReactElement;
