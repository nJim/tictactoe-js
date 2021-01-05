import { useContext } from 'preact/hooks';
import { Context } from "../hoc/State";

export const useAppContext = () => useContext(Context);
