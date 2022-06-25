import React from "react";
import { Input, FormInputLabel, Group } from "./form-input.styles.jsx";

export default function FormInput({ label, ...props }) {
  return (
    <Group>
      <Input {...props} />
      {label && (
        <FormInputLabel shrink={props.value.length}>{label}</FormInputLabel>
      )}
    </Group>
  );
}
