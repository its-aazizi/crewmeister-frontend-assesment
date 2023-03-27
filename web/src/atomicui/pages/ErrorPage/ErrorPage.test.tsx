import {
	// fireEvent,
	render
} from "@testing-library/react";

import ErrorPage from "./ErrorPage";

jest.mock("react-router-dom", () => ({
	...(jest.requireActual("react-router-dom") as any),
	useNavigate: jest.fn(),
	useRouteError: jest.fn()
}));

describe("<ErrorPage />", () => {
	it("should render successfully", () => {
		const { getByTestId } = render(<ErrorPage />);
		expect(getByTestId("error-page")).toBeInTheDocument();
	});

	// it("should trigger onClick of reload button", () => {
	// 	const { getByText } = render(<ErrorPage />);
	// 	const reloadButton = getByText("Reload");
	// 	fireEvent.click(reloadButton);
	// 	expect(reloadButton).toHaveBeenCalled();
	// });
});
