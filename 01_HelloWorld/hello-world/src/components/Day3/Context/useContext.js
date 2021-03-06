import React, { Component } from "react";

const UserContext = React.createContext("user_default");
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;
export { UserProvider, UserConsumer };
export default UserContext;
