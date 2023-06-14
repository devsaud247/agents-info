import type { FC } from "react";
import { agentFormSchema } from "../../validations/newAgentFormValidation";
import { Form, Formik } from "formik";
import { InputField } from "./../Input";

export interface IProps {
  createAgentHandler: any;
}

const NewAgentForm: FC<IProps> = ({ createAgentHandler }) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    photoUrl: "",
    agentLicence: "",
    address: "",
    practiceAreas: "",
    aboutMe: "",
    reviews: "",
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={createAgentHandler}
        validationSchema={agentFormSchema}
        enableReinitialize
      >
        {({ touched, errors, handleChange }) => {
          return (
            <>
              <Form className="pg-auth-form">
                <div className="pg-auth-field-block">
                  <InputField
                    name="firstName"
                    label="First Name"
                    onChange={handleChange}
                    touched={touched.firstName}
                    error={errors.firstName}
                  />
                  <InputField
                    name="lastName"
                    label="Last Name"
                    onChange={handleChange}
                    touched={touched.lastName}
                    error={errors.lastName}
                  />
                  <InputField
                    name="photoUrl"
                    label="Photo Url"
                    onChange={handleChange}
                    touched={touched.photoUrl}
                    error={errors.photoUrl}
                  />
                  <InputField
                    name="agentLicence"
                    label="Agent Licence"
                    onChange={handleChange}
                    touched={touched.agentLicence}
                    error={errors.agentLicence}
                  />
                  <InputField
                    name="address"
                    label="Address"
                    onChange={handleChange}
                    touched={touched.address}
                    error={errors.address}
                  />
                  <InputField
                    name="practiceAreas"
                    label="Practice Area"
                    onChange={handleChange}
                    touched={touched.practiceAreas}
                    error={errors.practiceAreas}
                  />
                  <InputField
                    name="aboutMe"
                    label="About Me"
                    type="textArea"
                    onChange={handleChange}
                    touched={touched.aboutMe}
                    error={errors.aboutMe}
                  />
                </div>
                <button
                  type="submit"
                  className="new-agent-button create-agent-button"
                >
                  Create
                </button>
              </Form>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default NewAgentForm;
