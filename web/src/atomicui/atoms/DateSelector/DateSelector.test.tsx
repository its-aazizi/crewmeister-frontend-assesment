import { render } from "@testing-library/react";

import DateSelector from "./DateSelector";

const setDate = jest.fn();

describe("<DateSelector />", () => {
	it("should render successfully", () => {
		const { getByTestId } = render(<DateSelector date="" setDate={setDate} />);
		expect(getByTestId("date-selector")).toBeInTheDocument();
	});
});
