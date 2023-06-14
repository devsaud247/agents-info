import { useState, FC } from "react";

import NewAgentForm from "./NewAgentForm";
import Modal from "../Modal";
import axios from "axios";

import { IAgent } from "../../types/Agent";
import "./NewAgent.css";

export interface INewAgentProps {
  setAgents: any;
}

const NewAgent: FC<INewAgentProps> = ({ setAgents }) => {
  const [isNewAgentFormVisible, setNewAgentFormVisibility] = useState(false);

  const createAgentHandler = (agent: IAgent) => {
    axios.post("/agent", agent).then(async () => {
      const response = await axios.get("/agents");
      const newAgents = response.data.map((agent: any) => ({
        ...agent,
        practiceAreas: agent.practiceAreas
          ? agent.practiceAreas.split(",")
          : [],
        reviews: agent.reviews ? agent.reviews.split(",") : [],
      }));
      setAgents(newAgents);
      setNewAgentFormVisibility(false);
    });
  };

  const hideModalHandler = () => setNewAgentFormVisibility(false);

  return (
    <>
      <button
        onClick={() => setNewAgentFormVisibility(true)}
        className="new-agent-button"
      >
        Join the team!
      </button>
      {isNewAgentFormVisible && (
        <Modal
          heading={"Create Agent"}
          show={isNewAgentFormVisible}
          onHide={hideModalHandler}
          children={<NewAgentForm createAgentHandler={createAgentHandler} />}
          size="md"
        />
      )}
    </>
  );
};

export default NewAgent;
