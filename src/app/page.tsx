import { TodoList } from "@/components/site/TodoList";
import { ToggleTheme } from "@/components/ToggleTheme";

export default function Page() { 
	return (
		<div className="min-h-screen flex flex-col items-center min-w-full gap-10">
			<ToggleTheme/>
			<TodoList/>
		</div>
	)
}
