import { Context, ContextType } from "react";

import { IContextProps, KeysOfPropsOfType } from "types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type StateOf<T> = Omit<T, KeysOfPropsOfType<T, (...args: any[]) => any>>;

export type IStateProps<TValues> = StateOf<ContextType<Context<IContextProps<TValues>>>>;
