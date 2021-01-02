import { useContext } from "react";
import { Context } from "../hoc/State";

export const useAppContext = () => useContext(Context);
