import type { FC } from "react";
import "./App.css";

import AgentsDashboard from "../AgentsDashboard/AgentsDashboard";

const App: FC = () => {
  return (
    <div className="app">
      <AgentsDashboard />
    </div>
  );
};

export default App;
