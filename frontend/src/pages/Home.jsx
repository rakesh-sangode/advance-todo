import React, { useState } from 'react';
import { ScrollText } from 'lucide-react';
import NewTask from '@/components/NewTask';
import TodoModel from '@/components/TodoModel';
import { todayData } from '@/components/data/today';
import { tomorrowData } from '@/components/data/tomorrow';
import { weekData } from '@/components/data/week';

const Home = () => {
	const [todayTasks, setTodayTasks] = useState(todayData);
	const [tomorrowTasks, setTomorrowTasks] = useState(tomorrowData);
	const [weekTasks, setWeekTasks] = useState(weekData);
	return (
		<div className="min-h-screen py-8">
			{/* <div className="inline-flex items-center rounded-base border-2 p-1 px-4 gap-2 bg-main mb-8">
				<ScrollText size={32} />
				<span className="text-3xl font-semibold">Upcoming</span>
			</div>
			<TodoModel
				title="Today"
				tasks={todayTasks}
				setTasks={setTodayTasks}
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-16 my-16">
				<TodoModel
					title="Tomorrow"
					tasks={tomorrowTasks}
					setTasks={setTomorrowTasks}
				/>
				<TodoModel
					title="This Week"
					tasks={weekTasks}
					setTasks={setWeekTasks}
				/>
			</div> */}
			<NewTask />
		</div>
	);
};

export default Home;
