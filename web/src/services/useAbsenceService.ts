import { useMemo } from "react";

import { GetAbsenceQueryType } from "types";

const baseApiUrl = process.env["VITE_BASE_API_URL"];

const useAbsenceService = () => {
	return useMemo(
		() => ({
			fetchAbsences: async (query: GetAbsenceQueryType) => {
				const { page, date, type } = query;
				const url = `${baseApiUrl}/absences?page=${page}&date=${date ? date : ""}&type=${type ? type : ""}`;

				return await fetch(url, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				});
			}
		}),
		[]
	);
};

export default useAbsenceService;
