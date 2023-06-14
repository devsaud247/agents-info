import { useState, FC } from "react";

import Agents from "../Agents/Agents";
import NewAgent from "../NewAgent/NewAgent";

import { IAgent } from "../../types/Agent";
import "./AgentsDashboard.css";

const AgentsDashboard: FC = () => {
  const [agents, setAgents] = useState<IAgent[]>([]);
  const [searchedAgents, setSearchedAgents] = useState<IAgent[]>([]);
  const [searchedArea, setSearchedArea] = useState("");

  const handleAgentSearch = (event: any) => {
    const searchedValue = event.target.value.toLowerCase();
    setSearchedArea(searchedValue);

    const searchedAgents = searchedValue
      ? agents.filter((agent) =>
          agent.practiceAreas.some((area) =>
            area.toLowerCase().includes(searchedValue)
          )
        )
      : agents;
    setSearchedAgents(searchedAgents);
  };

  return (
    <div>
      <input
        type="text"
        name="searchAgent"
        className="search-bar"
        placeholder="Search by agent's practice area..."
        onChange={handleAgentSearch}
      />
      <NewAgent setAgents={setAgents} />

      <Agents
        agents={searchedArea ? searchedAgents : agents}
        setAgents={setAgents}
      />
    </div>
  );
};

export default AgentsDashboard;
