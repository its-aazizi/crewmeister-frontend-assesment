import { render } from "@testing-library/react";

import EmptyList from "./EmptyList";

describe("<EmptyList />", () => {
	it("should render successfully", () => {
		const { getByTestId } = render(<EmptyList />);
		expect(getByTestId("empty-list")).toBeInTheDocument();
	});
});
