import React from 'react';
import { Input } from '@/components/ui/input';
// import MenuIcon from '@mui/icons-material/Menu';
import {
	CalendarMonth,
	CalendarMonthOutlined,
	Checklist,
	Logout,
	Menu,
	NavigateNext,
	SearchOutlined,
	StickyNote2,
	StickyNote2Outlined,
} from '@mui/icons-material';
import { FaRegCalendarAlt, FaSearch } from 'react-icons/fa';
import { FaNoteSticky } from 'react-icons/fa6';
import { Button } from '../ui/button';

const Sidebar = () => {
	return (
		<div className="flex-1 bg-secondary-background min-h-screen text-gray-800 py-2 px-1">
			<div className="h-28 p-2">
				<div className="flex justify-between items-center p-1">
					<span className="text-2xl font-bold text-gray-950">
						Menu
					</span>
					<Menu className="icon" />
				</div>
				<div className="flex items-center gap-1.5">
					<Input
						className="w-[200px]"
						type="text"
						placeholder="Search"
					/>
					<SearchOutlined className="icon" />
				</div>
			</div>
			<div className="center">
				<ul>
					<p className="title">TASKS</p>
					<li className="flex items-center gap-1.5">
						<NavigateNext className="icon" />
						<span>Upcoming</span>
					</li>
					<li className="flex items-center gap-1.5">
						<Checklist className="icon" />
						<span>Today</span>
					</li>
					<li className="flex items-center gap-1.5">
						<CalendarMonthOutlined className="icon" />
						<span>Calendar</span>
					</li>
					<li className="flex items-center gap-1.5">
						<StickyNote2Outlined className="icon" />
						<span>Sticky Wall</span>
					</li>

					<p className="title">CATEGORY</p>

					<li>
						<div className="color"></div>
						<span>Personal</span>
					</li>
					<li>
						<div className="color"></div>
						<span>Work</span>
					</li>
					<li>
						<div className="color"></div>
						<span>Others</span>
					</li>
				</ul>
				<p className="title">TAGS</p>
				<div className="tags">
					<div className="tag add-tag">
						{/* <input
							type="text"
							placeholder="New tag name"
						/> */}
						<Input
							className="w-[200px]"
							type="text"
							placeholder="New tag name"
						/>
					</div>
				</div>
			</div>
			<div className="bottom">
				<ul>
					<li>
						<Logout />
						<span>Sign Out</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
