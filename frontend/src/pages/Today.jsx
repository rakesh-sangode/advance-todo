import { todayData } from '@/components/data/today';
import TodoModel from '@/components/TodoModel';
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

const Today = () => {
	const [openTask, setOpenTask] = useState(null);
	const [tasks, setTasks] = useState(todayData);
	return (
		<div className="py-8 min-h-screen">
			<div className="inline-flex items-center rounded-base border-2 p-1 px-4 gap-2 bg-main my-8">
				<ScrollText size={32} />
				<span className="text-3xl font-semibold">Today</span>
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
