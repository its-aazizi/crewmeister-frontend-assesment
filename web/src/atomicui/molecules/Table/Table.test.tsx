import { render } from "@testing-library/react";

import Table from "./Table";

describe("<Table />", () => {
	it("should render successfully", () => {
		const { getByTestId } = render(<Table />);
		expect(getByTestId("table")).toBeInTheDocument();
	});
});
