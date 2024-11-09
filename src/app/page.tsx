"use client"

import { TodoList } from "@/components/site/TodoList";
import { ToggleTheme } from "@/components/ToggleTheme";
import { TodosProvider } from "@/contexts/TodosContext";

export default function Page() { 
	return (
		<TodosProvider>
			<div className="min-h-screen flex flex-col items-center min-w-full gap-10">
				<ToggleTheme/>
				<TodoList/>
			</div>
		</TodosProvider>
	)
}