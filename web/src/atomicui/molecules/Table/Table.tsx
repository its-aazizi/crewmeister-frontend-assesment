import React from "react";

import {
	Box,
	CircularProgress,
	Table as MuiTable,
	Paper,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow
} from "@mui/material";
import { EmptyList } from "atomicui";
import { appConfig } from "core";
import { useAbsence } from "hooks";

const { TABLE_COLUMNS } = appConfig;

const Table: React.FC = () => {
	const { isLoading, absences, totalAbsences, page, setPage } = useAbsence();

	const handlePageChange = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, page: number) =>
		setPage(page);

	return (
		<>
			<TableContainer component={Paper}>
				<MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							{TABLE_COLUMNS.map((col, idx) => (
								<TableCell key={idx} align="center">
									{col}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					{!isLoading && absences.length ? (
						<TableBody>
							{absences.map(({ name, type, startDate, endDate, memberNote, status, admitterNote }, idx) => (
								<TableRow key={idx} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
									<TableCell align="center">{name}</TableCell>
									<TableCell align="center">{type}</TableCell>
									<TableCell align="center">{startDate}</TableCell>
									<TableCell align="center">{endDate}</TableCell>
									<TableCell sx={{ width: "10rem" }} align="center">
										{memberNote || "No note"}
									</TableCell>
									<TableCell align="center">{status}</TableCell>
									<TableCell align="center">{admitterNote || "No note"}</TableCell>
								</TableRow>
							))}
						</TableBody>
					) : null}
				</MuiTable>
			</TableContainer>
			{isLoading ? (
				<Box height="30rem" display="flex" justifyContent="center" alignItems="center">
					<CircularProgress />
				</Box>
			) : !absences.length ? (
				<Box height="30rem" display="flex" justifyContent="center" alignItems="center">
					<EmptyList />
				</Box>
			) : null}
			<TablePagination
				rowsPerPageOptions={[10]}
				component="div"
				count={totalAbsences}
				rowsPerPage={10}
				page={page}
				onPageChange={handlePageChange}
			/>
		</>
	);
};

export default Table;
