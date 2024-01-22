/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ICSRverticalsCreateFormInputValues = {
    Vertical?: string;
    imageurl?: string;
};
export declare type ICSRverticalsCreateFormValidationValues = {
    Vertical?: ValidationFunction<string>;
    imageurl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ICSRverticalsCreateFormOverridesProps = {
    ICSRverticalsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Vertical?: PrimitiveOverrideProps<TextFieldProps>;
    imageurl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ICSRverticalsCreateFormProps = React.PropsWithChildren<{
    overrides?: ICSRverticalsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ICSRverticalsCreateFormInputValues) => ICSRverticalsCreateFormInputValues;
    onSuccess?: (fields: ICSRverticalsCreateFormInputValues) => void;
    onError?: (fields: ICSRverticalsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ICSRverticalsCreateFormInputValues) => ICSRverticalsCreateFormInputValues;
    onValidate?: ICSRverticalsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ICSRverticalsCreateForm(props: ICSRverticalsCreateFormProps): React.ReactElement;
