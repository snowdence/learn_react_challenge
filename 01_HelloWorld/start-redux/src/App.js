import logo from "./logo.svg";
import "./App.css";
import React from "react";
import CakeContainer from "./components/CakeContainer";
import HookCakeContainer from "./components/HookCakeContainer";
import store from "./redux/store";
import { Provider } from "react-redux";
import IceCreamContainer from "components/IceCreamContainer";
import NewCakeContainer from "components/NewCakeContainer";
import ItemContainer from "components/ItemContainer";
import UserContainer from "components/UserContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HookCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
        <ItemContainer cake />
        <ItemContainer iceCream />
        <hr />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
