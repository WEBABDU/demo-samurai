import React from "react";
import { Field } from "redux-form";
import s from "./formsControl.module.css";

const FormsControl = ({ input, meta:{error,touched}, children}) => {
  const hasError = error && touched;
  return (
    <div className={hasError ? s.formControl + " " + s.error : null}>
      <div>{children}</div>
      {hasError && (
        <span className={s.formControl + " " + s.error}>{error}</span>
      )}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormsControl {...props}>
      <textarea {...input} {...restProps} />
    </FormsControl>
  );
};
export const Input = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormsControl {...props}>
      <input {...input} {...restProps} />
    </FormsControl>
  );
};

export const createField = (placeholder, name, component, validate, props = {}, text = '', ) => (
  <div>
  <Field
    placeholder={placeholder}
    name={name}
    component={component}
    validate={validate}
    {...props}
  /> {text}
</div>
)
