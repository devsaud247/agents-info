import type { FC } from "react";
import { Field } from "formik";
import "./input.css";

import { IInput } from "./../../types/Input";

const InputField: FC<IInput> = ({
  label,
  placeholder,
  name,
  error,
  touched,
  className,
  disabled,
  type,
  onKeyUp,
  onChange,
  maxLength,
  checked,
  onBlur,
}) => {
  return (
    <>
      <div
        className={`input-field-container ${
          type === "textArea" ? "long-field-wrapper" : ""
        }`}
      >
        {label && (
          <div className="label-container">
            <label className="field-label">{label}</label>
          </div>
        )}
        <Field
          type={type || "text"}
          as={type}
          className={
            className ||
            `field w-input ${type === "textArea" ? "text-area-container" : ""}`
          }
          name={name}
          data-name={name}
          placeholder={placeholder}
          id={name}
          disabled={disabled}
          onKeyUp={onKeyUp}
          onChange={onChange}
          maxLength={maxLength}
          checked={checked}
          onBlur={onBlur}
        />
        {error && touched && <div className="error-message">{error}</div>}
      </div>
    </>
  );
};

export default InputField;
