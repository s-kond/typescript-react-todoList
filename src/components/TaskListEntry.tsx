import { Task } from "../types/tasklist";

export default function TaskListEntry({ data }: { data: Task }) {
  return <li>{data.title}</li>;
}
