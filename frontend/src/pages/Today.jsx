import { todayData } from '@/components/data/today';
import { Heading } from '@/components/Heading';
import TodoModel from '@/components/TodoModel';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const Today = () => {
	const [openTask, setOpenTask] = useState(null);
	const [tasks, setTasks] = useState(todayData);
	return (
		<div className="py-8 min-h-screen">
			<div className="inline-flex items-center bg-secondary-background p-1 px-4 gap-2 mb-8">
				{/* <ScrollText size={32} /> */}
				<Heading
					level="h1"
					// className="font-semibold"
				>
					Today
				</Heading>
				<Badge className="w-8 h-8 ml-2">8</Badge>
			</div>
			<TodoModel
				title="Today"
				tasks={tasks}
				setTasks={setTasks}
			/>
		</div>
	);
};

export default Today;
