import { createTodo } from "graphql/mutations";
import * as yup from "yup";

export const domain = {
  text: yup.string(),
};
export const testCreateTodo = createTodo;

export type TestType = {
  aaa: string;
};

const s = "ss";
