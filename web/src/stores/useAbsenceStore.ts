import { AbsenceType, IStateProps } from "types";

import createStore from "./createStore";

interface AbsenceStoreProps {
	isLoading: boolean;
	absences: AbsenceType[];
	page: number;
	totalAbsences: number;
}

const initialState: IStateProps<AbsenceStoreProps> = {
	isLoading: false,
	absences: [],
	page: 0,
	totalAbsences: 0
};

export default createStore<AbsenceStoreProps>(initialState);
