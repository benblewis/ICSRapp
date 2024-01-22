/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { ICSRverticals } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ICSRverticalsUpdateForm(props) {
  const {
    id: idProp,
    iCSRverticals: iCSRverticalsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Vertical: "",
    imageurl: "",
  };
  const [Vertical, setVertical] = React.useState(initialValues.Vertical);
  const [imageurl, setImageurl] = React.useState(initialValues.imageurl);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = iCSRverticalsRecord
      ? { ...initialValues, ...iCSRverticalsRecord }
      : initialValues;
    setVertical(cleanValues.Vertical);
    setImageurl(cleanValues.imageurl);
    setErrors({});
  };
  const [iCSRverticalsRecord, setICSRverticalsRecord] = React.useState(
    iCSRverticalsModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(ICSRverticals, idProp)
        : iCSRverticalsModelProp;
      setICSRverticalsRecord(record);
    };
    queryData();
  }, [idProp, iCSRverticalsModelProp]);
  React.useEffect(resetStateValues, [iCSRverticalsRecord]);
  const validations = {
    Vertical: [],
    imageurl: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Vertical,
          imageurl,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            ICSRverticals.copyOf(iCSRverticalsRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ICSRverticalsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Vertical"
        isRequired={false}
        isReadOnly={false}
        value={Vertical}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Vertical: value,
              imageurl,
            };
            const result = onChange(modelFields);
            value = result?.Vertical ?? value;
          }
          if (errors.Vertical?.hasError) {
            runValidationTasks("Vertical", value);
          }
          setVertical(value);
        }}
        onBlur={() => runValidationTasks("Vertical", Vertical)}
        errorMessage={errors.Vertical?.errorMessage}
        hasError={errors.Vertical?.hasError}
        {...getOverrideProps(overrides, "Vertical")}
      ></TextField>
      <TextField
        label="Imageurl"
        isRequired={false}
        isReadOnly={false}
        value={imageurl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Vertical,
              imageurl: value,
            };
            const result = onChange(modelFields);
            value = result?.imageurl ?? value;
          }
          if (errors.imageurl?.hasError) {
            runValidationTasks("imageurl", value);
          }
          setImageurl(value);
        }}
        onBlur={() => runValidationTasks("imageurl", imageurl)}
        errorMessage={errors.imageurl?.errorMessage}
        hasError={errors.imageurl?.hasError}
        {...getOverrideProps(overrides, "imageurl")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || iCSRverticalsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || iCSRverticalsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
