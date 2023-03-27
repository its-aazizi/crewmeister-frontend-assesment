import { ToastContainer as RTToastContainer, toast } from "react-toastify";
import { ToastType } from "types";
import "./styles.scss";

const ToastContainer = () => (
	<RTToastContainer
		position="top-center"
		autoClose={5000}
		hideProgressBar
		newestOnTop={true}
		closeOnClick
		pauseOnFocusLoss
		draggable={false}
		pauseOnHover
		theme="dark"
	/>
);

const showToast = (params: { content: string; type: ToastType }) => {
	const { type, content } = params;

	switch (type) {
		case "info":
			toast.info(content);
			break;
		case "success":
			toast.success(content);
			break;
		case "warning":
			toast.warn(content);
			break;
		case "error":
			toast.error(content);
			break;
		default:
			toast(content);
			break;
	}
};

export { ToastContainer, showToast };
