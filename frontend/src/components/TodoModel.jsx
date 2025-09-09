import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
	BookHeart,
	BriefcaseBusiness,
	Calendar,
	ChevronRight,
	Map,
	MoreHorizontal,
	Plus,
	ScrollText,
} from 'lucide-react';
import React, { useState } from 'react';

const TodoModel = ({ tasks, setTasks, title }) => {
	const [openTask, setOpenTask] = useState(null);
	// const [tasks, setTasks] = useState();

	const categoryColor = (category) => {
		switch ((category || '').toLowerCase()) {
			case 'personal':
				return 'bg-red-500';
			case 'work':
				return 'bg-blue-500';
			default:
				return 'bg-yellow-500';
		}
	};

	const categoryIcon = (category) => {
		switch ((category || '').toLowerCase()) {
			case 'personal':
				return <BookHeart />;
			case 'work':
				return <BriefcaseBusiness />;
			default:
				return <Map />;
		}
	};

	const toggleTask = (id) => {
		setTasks((prev) =>
			prev.map((t) =>
				t.id === id ? { ...t, completed: !t.completed } : t,
			),
		);
	};

	const toggleDetails = (id) => {
		setOpenTask(openTask === id ? null : id);
	};

	return (
		<div>
			<Card>
				<CardHeader>
					<div className="flex items-end justify-between mb-4">
						<CardTitle className="text-3xl">{title}</CardTitle>
						<Button>
							<Plus /> New Task
						</Button>
					</div>
				</CardHeader>
				<CardContent>
					<div className="rounded-base border-2 border-border overflow-hidden bg-secondary-background">
						{tasks.map((task) => (
							<div
								key={task.id}
								className={`group flex items-center gap-4 border-b-2 border-border px-4 py-2.5 last:border-b-0 ${
									task.completed
										? 'bg-main text-main-foreground'
										: 'bg-background/10 hover:bg-background'
								}`}
							>
								<Checkbox
									checked={task.completed}
									onCheckedChange={() => toggleTask(task.id)}
									className="size-5"
								/>
								<div className="min-w-0 flex-1">
									<div
										className={`truncate ${
											task.completed
												? 'line-through opacity-80'
												: 'font-base'
										}`}
									>
										{task.name}
									</div>
									{openTask === task.id && (
										<div className="mt-1 flex flex-wrap items-center gap-2 text-xs opacity-80">
											<span className="flex items-center gap-1 px-2 py-0.5 border-r border-border">
												<Calendar size={16} />
												{task.date}
											</span>
											<span className="flex items-center gap-1 px-2 py-0.5 border-r border-border">
												<span className="rounded-full bg-main px-2 py-0.5 mr-1">
													{task.subtask}
												</span>
												Subtasks
											</span>
											{/* <span
											className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ${
												fillColorMap[task.fill] ??
												'bg-gray-400'
											}`}
										> */}
											<Badge
												className={`${categoryColor(
													task.category,
												)}`}
											>
												{categoryIcon(task.category)}
												{task.category}
											</Badge>
											{/* </span> */}
										</div>
									)}
								</div>
								{/* <div className="ml-auto"> */}
								<Button
									className="ml-auto"
									size="icon"
									onClick={() => toggleDetails(task.id)}
									aria-expanded={openTask === task.id}
								>
									<ChevronRight
										className={`${
											openTask === task.id
												? 'rotate-90'
												: ''
										} transition-transform`}
									/>
								</Button>
								{/* </div> */}
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default TodoModel;
