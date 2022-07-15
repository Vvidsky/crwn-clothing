import { InputHTMLAttributes, FC } from "react";
import { Input, FormInputLabel, Group } from "./form-input.styles.jsx";

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...props }) => {
  return (
    <Group>
      <Input {...props} />
      {label && (
        <FormInputLabel
          shrink={Boolean(
            props.value && typeof props.value === "string" && props.value.length
          )}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;