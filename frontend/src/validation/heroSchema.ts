import * as yup from "yup";

export const heroSchema = yup
  .object()
  .shape({
    name: yup.string().required("This field is required"),
    superpower: yup.string().required("This field is required"),
    humility: yup
      .string()
      .required("This field is required")
      .matches(/^[1-9]$|^10$/, "Must be a number between 1 and 10"),
  })
  .required();
