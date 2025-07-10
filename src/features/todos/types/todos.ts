import { CheckIcon, ClockIcon } from "lucide-react";

export const TodoStatus = [
  {
    label: "Done",
    value: "done",
    icon: CheckIcon,
  },
  {
    label: "Pending",
    value: "pending",
    icon: ClockIcon,
  },
];

export type TodoStatus = (typeof TodoStatus)[number]["value"];

export type Todo = {
  id: string;
  createdAt: string;
  title: string;
  status: TodoStatus;
};
