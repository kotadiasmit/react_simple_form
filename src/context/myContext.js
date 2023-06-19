import { createContext } from "react";

export const MyContext = createContext({
  userLocationArray: [],
  updateUserLocationArray: () => {},
  deleteUserLocation: () => {},
});
