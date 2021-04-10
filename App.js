import React from "react";
import DrawerNavigation from "./app/routes/DrawerNavigation";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <DrawerNavigation />
    </Provider>
  );
};

export default App;
