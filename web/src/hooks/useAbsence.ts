import { useMemo } from "react";

import { useAbsenceService } from "services";
import { useAbsenceStore } from "stores";
import { GetAbsenceQueryType } from "types";

const useAbsence = () => {
	const store = useAbsenceStore();
	const { setInitial } = store;
	const { setState } = useAbsenceStore;
	const absenceService = useAbsenceService();

	const methods = useMemo(
		() => ({
			getAbsences: async (query: GetAbsenceQueryType) => {
				try {
					setState({ isLoading: true });
					const response = await absenceService.fetchAbsences(query);
					const data = await response.json();
					setState({
						absences: [...data.absences],
						page: data.page,
						totalAbsences: data.totalAbsences
					});
				} catch (error) {
					console.error({ error });
				} finally {
					setState({ isLoading: false });
				}
			},
			setPage: (page: number) => {
				setState({ page });
			},
			resetStore() {
				setInitial();
			}
		}),
		[absenceService, setState, setInitial]
	);

	return useMemo(() => ({ ...methods, ...store }), [methods, store]);
};

export default useAbsence;
