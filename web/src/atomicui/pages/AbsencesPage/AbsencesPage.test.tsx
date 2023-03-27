import { render } from "@testing-library/react";

import AbsencesPage from "./AbsencesPage";

describe("<AbsencesPage />", () => {
	it("should render successfully", () => {
		const { getByTestId } = render(<AbsencesPage />);
		expect(getByTestId("absences-page")).toBeInTheDocument();
	});

	it("should show total absences as 0", () => {
		const { getByTestId } = render(<AbsencesPage />);
		expect(getByTestId("total-absences")).toHaveTextContent("Total Absences: 0");
	});
});
