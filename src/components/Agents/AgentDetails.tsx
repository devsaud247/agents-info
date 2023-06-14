import type { FC } from "react";
import { IAgent } from "../../types/Agent";

import "./Agent.css";
import { reviewFormSchema } from "../../validations/newReviewFormValidation";
import { Form, Formik } from "formik";

import { InputField } from "./../Input";
import axios from "axios";

import "./Agent.css";

export interface IAgentDetail {
  agent: IAgent;
  setAgents: any;
  setAgentDetailModelVisibility: any;
}

const AgentDetail: FC<IAgentDetail> = ({
  agent,
  setAgents,
  setAgentDetailModelVisibility,
}) => {
  const initialValues = { review: "" };

  const addReviewHandler = (values: any) => {
    axios.patch(`/agent/${agent.id}`, values).then(async () => {
      const response = await axios.get("/agents");
      const newAgents = response.data.map((agent: any) => ({
        ...agent,
        practiceAreas: agent.practiceAreas
          ? agent.practiceAreas.split(",")
          : [],
        reviews: agent.reviews ? agent.reviews.split(",") : [],
      }));
      setAgents(newAgents);
      setAgentDetailModelVisibility(false);
    });
  };

  return (
    <div className="agent-detail-container">
      <h3>
        <strong className="colorful-text">Agent Licence No.: </strong>
        {agent.agentLicence}
      </h3>
      <h3>
        <strong className="colorful-text">Agent Address: </strong>
        {agent.address}
      </h3>

      <h3>
        <strong className="colorful-text">Practice Areas</strong>
      </h3>
      <ul>
        {agent?.practiceAreas?.map((area) => (
          <li>{area}</li>
        ))}
      </ul>
      <h3>
        <strong className="colorful-text">About Agent</strong>
      </h3>
      <div className="body">{agent.aboutMe}</div>

      <h3>
        <strong className="colorful-text">Reviews about agent</strong>{" "}
      </h3>

      <ul>
        {agent?.reviews?.map((review) => (
          <li>{review}</li>
        ))}
      </ul>

      <Formik
        initialValues={initialValues}
        onSubmit={addReviewHandler}
        validationSchema={reviewFormSchema}
        enableReinitialize
      >
        {({ touched, errors, handleChange }) => {
          return (
            <>
              <Form>
                <InputField
                  type="textArea"
                  name="review"
                  label="Review"
                  onChange={handleChange}
                  touched={touched.review}
                  error={errors.review}
                />
                <button type="submit" className="add-review-button">
                  Add Review
                </button>
              </Form>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default AgentDetail;
