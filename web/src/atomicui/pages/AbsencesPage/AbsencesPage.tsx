import React, { useEffect, useState } from "react";

import { Box, Grid, Typography } from "@mui/material";
import { DateSelector, LeaveSelector, Table } from "atomicui";
import { useAbsence } from "hooks";
import { LeaveType } from "types";

const AbsencesPage: React.FC = () => {
	const [date, setDate] = useState("");
	const [leaveType, setLeaveType] = useState<LeaveType | string>("");
	const { getAbsences, page, totalAbsences } = useAbsence();

	useEffect(() => {
		getAbsences({ page, date, type: leaveType ? (leaveType as LeaveType) : undefined });
	}, [getAbsences, page, date, leaveType]);

	return (
		<Grid data-testid="absences-page" container display="flex" alignItems="center" columnGap={5}>
			<Grid item xs={12} sm={3}>
				<DateSelector date={date} setDate={setDate} />
			</Grid>
			<Grid item xs={12} sm={3} marginTop={{ xs: "1rem", sm: 0 }}>
				<LeaveSelector leaveType={leaveType} setLeaveType={setLeaveType} />
			</Grid>
			<Box display={{ xs: "none", sm: "flex" }} flexGrow={1} />
			<Grid item xs={12} sm={3} justifySelf={{ xs: "center", sm: "flex-end" }} marginTop={{ xs: "1rem", sm: 0 }}>
				<Typography
					data-testid="total-absences"
					fontSize="1.3rem"
					textAlign={{ xs: "center", sm: "end" }}
					color={theme => theme.palette.primary.main}
				>{`Total Absences: ${totalAbsences}`}</Typography>
			</Grid>
			<Grid item xs={12} marginTop="1rem">
				<Table />
			</Grid>
		</Grid>
	);
};

export default AbsencesPage;
