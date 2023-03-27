import React, { ChangeEvent } from "react";

import { Box, InputLabel, TextField } from "@mui/material";

interface DateSelectorProps {
	date: string;
	setDate: (date: string) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ date, setDate }) => {
	const handleChange = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setDate(value);

	return (
		<Box data-testid="date-selector">
			<InputLabel sx={{ fontWeight: "bold" }}>Date Selector</InputLabel>
			<TextField type="date" value={date} onChange={handleChange} fullWidth />
		</Box>
	);
};

export default DateSelector;
