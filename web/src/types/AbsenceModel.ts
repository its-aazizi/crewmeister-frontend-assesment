import { LeaveType } from "./Enums";

export type AbsenceType = {
	id: number;
	createdAt: string;
	updatedAt: string;
	admitterId?: number;
	admitterNote?: string;
	confirmedAt?: string;
	crewId: number;
	endDate: string;
	memberNote?: string;
	name: string;
	rejectedAt?: string;
	status: string;
	duration: number;
	startDate: string;
	type: string;
	userId: number;
};

export type GetAbsenceQueryType = {
	page: number;
	date?: string;
	type?: LeaveType;
};
