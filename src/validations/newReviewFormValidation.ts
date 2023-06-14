import * as Yup from "yup";

export const reviewFormSchema = Yup.object().shape({
  review: Yup.string().required(),
});
