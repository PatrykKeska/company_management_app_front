import React, {ChangeEventHandler, FormEvent, FormEventHandler} from "react";

export type InputOnChange = React.ChangeEvent<HTMLInputElement>;
export type OnChangeCheckbox = ChangeEventHandler;
export type onSubmitType = FormEvent;