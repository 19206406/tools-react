import { useDispatch, useSelector } from "react-redux"; // esto es recomendable
import type { AppDispatch, RootState } from "../store";
import type { TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;