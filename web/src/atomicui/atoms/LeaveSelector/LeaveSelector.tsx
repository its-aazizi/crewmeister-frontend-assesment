import React from "react";

import { Box, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { LeaveType } from "types";

interface LeaveSelectorProps {
	leaveType: LeaveType | string;
	setLeaveType: (leaveType: LeaveType | string) => void;
}

const LeaveSelector: React.FC<LeaveSelectorProps> = ({ leaveType, setLeaveType }) => {
	const handleChange = ({ target: { value } }: SelectChangeEvent) =>
		!value ? setLeaveType("") : setLeaveType(value as LeaveType);

	return (
		<Box>
			<InputLabel sx={{ fontWeight: "bold" }} id="leave-selector-label-id">
				Leave Type
			</InputLabel>
			<Select
				labelId="leave-selector-label-id"
				value={leaveType}
				onChange={handleChange}
				renderValue={selected => (selected ? selected : "Select Leave Type")}
				displayEmpty
				fullWidth
			>
				<MenuItem value={""}>All</MenuItem>
				<MenuItem value={LeaveType.VACATION}>{LeaveType.VACATION}</MenuItem>
				<MenuItem value={LeaveType.SICKENESS}>{LeaveType.SICKENESS}</MenuItem>
			</Select>
		</Box>
	);
};

export default LeaveSelector;
