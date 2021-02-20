import React from "react";

const authContext = React.createContext({
  authenticated: false,
  login: () => {},
});

export default authContext;

// Context is a great way of bypassing components and directly passing data from A to D
