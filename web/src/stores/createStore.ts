import { appConfig } from "core";
import { BaseStateProps } from "types";
import { SetState, create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const { LOCAL_STORAGE_PREFIX } = appConfig;

/* eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types */
const foo = <T>(initialState: T, persistant = false, localStorageKey = LOCAL_STORAGE_PREFIX) => {
	const createState = (set: SetState<T & BaseStateProps>) => {
		const init = {
			...initialState,
			set,
			setInitial: () => set(init)
		};

		return init;
	};

	/* @ts-expect-error: valid params */
	const createDataStore = persistant ? persist(createState, { name: localStorageKey }) : createState;
	/* @ts-expect-error: valid params */
	return create<T & BaseStateProps>(devtools(createDataStore));
};

export default foo;
