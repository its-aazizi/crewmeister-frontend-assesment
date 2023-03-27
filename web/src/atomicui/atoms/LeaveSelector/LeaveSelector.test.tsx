import { render } from "@testing-library/react";
import { LeaveType } from "types";

import LeaveSelector from "./LeaveSelector";

const setLeaveType = jest.fn();

describe("<LeaveSelector />", () => {
	it("should render successfully", () => {
		const { getByTestId } = render(<LeaveSelector leaveType={LeaveType.VACATION} setLeaveType={setLeaveType} />);
		expect(getByTestId("leave-selector")).toBeInTheDocument();
	});
});
