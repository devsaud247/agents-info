import * as Yup from "yup";

export const agentFormSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  photoUrl: Yup.string(),
  agentLicence: Yup.string().required(),
  address: Yup.string().required(),
  practiceAreas: Yup.string(),
  aboutMe: Yup.string(),
});
