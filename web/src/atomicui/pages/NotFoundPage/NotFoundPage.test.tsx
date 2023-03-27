import { render } from "@testing-library/react";

import NotFoundPage from "./NotFoundPage";

describe("<NotFoundPage />", () => {
	it("should render successfully", () => {
		const { getByTestId } = render(<NotFoundPage />);
		expect(getByTestId("not-found-page")).toBeInTheDocument();
	});
});
