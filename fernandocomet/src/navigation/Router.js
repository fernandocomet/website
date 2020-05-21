import React from "react";

import Home from '../sites/Home';
import Text from '../sites/Text';
import Works from '../sites/Works';

const Router = {
  "/home": () => <Home />,
  "/text": () => <Text />,
  "/works": () => <Works />
};

export default Router;
