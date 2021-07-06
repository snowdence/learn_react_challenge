import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ComponentC from "components/context/ComponentC";

export const UserContext = React.createContext("user");
export const ChannelContext = React.createContext("channel");
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"snowdence"}>
        <ChannelContext.Provider value={"youtube"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
