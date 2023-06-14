import type { FC } from "react";
import { useEffect, useState } from "react";
import Agent from "./Agent";
import axios from "axios";
import "./Agents.css";

import Modal from "./../Modal";
import AgentDetail from "./AgentDetails";

export interface IAgentsProps {
  agents: any;
  setAgents: any;
}

const Agents: FC<IAgentsProps> = ({ agents, setAgents }) => {
  const [isAgentDetailModalVisible, setAgentDetailModelVisibility] =
    useState(false);
  const [activeAgent, setActiveAgent] = useState<any>({});

  useEffect(() => {
    async function fetchInitialData() {
      const response = await axios.get("/agents");
      const newAgents = response.data.map((agent: any) => ({
        ...agent,
        practiceAreas: agent.practiceAreas
          ? agent.practiceAreas.split(",")
          : [],
        reviews: agent.reviews ? agent.reviews.split(",") : [],
      }));
      setAgents(newAgents);
    }
    fetchInitialData();
  }, []);

  return (
    <div className="agents">
      {agents.map((agent: any) => (
        <>
          <div
            onClick={() => {
              setAgentDetailModelVisibility(true);
              setActiveAgent(agent);
            }}
          >
            <Agent key={agent.id} agent={agent} />
          </div>
        </>
      ))}
      <Modal
        heading={
          <h2 className="colorful-text">
            <strong>
              {activeAgent.firstName + " " + activeAgent.lastName}
            </strong>
          </h2>
        }
        show={isAgentDetailModalVisible}
        onHide={() => setAgentDetailModelVisibility(false)}
        size="md"
        children={
          <AgentDetail
            key={activeAgent.id}
            agent={activeAgent}
            setAgents={setAgents}
            setAgentDetailModelVisibility={setAgentDetailModelVisibility}
          />
        }
      />
    </div>
  );
};

export default Agents;
