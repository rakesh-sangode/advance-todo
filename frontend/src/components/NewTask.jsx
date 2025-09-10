import React, { useState } from 'react';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from './ui/dialog';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';

import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { TagSelector } from './TagSelector';
import SubTask from './SubTask';

const NewTask = ({ open, onOpenChange }) => {
	const [date, setDate] = useState();

	return (
		<div>
			<Dialog
				open={open}
				onOpenChange={onOpenChange}
			>
				{/* <DialogTrigger asChild>
					<Button>Edit Profile</Button>
				</DialogTrigger> */}
				<DialogContent className="max-w-3xl">
					<DialogHeader>
						<DialogTitle>Add New Task</DialogTitle>
						<DialogDescription>
							Make changes to your profile here. Click save when
							you done.
						</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4">
						<div className="grid gap-2">
							<Label>Task</Label>
							<Input
								type="text"
								placeholder="Enter a Task"
							/>
						</div>
						<div className="grid gap-2">
							<Label>Description</Label>
							<Textarea placeholder="Enter the description.." />
						</div>
						<div className="flex justify-between gap-2">
							<div className="grid gap-2">
								<Label>Category</Label>
								<Select>
									<SelectTrigger className="w-[180px]">
										<SelectValue placeholder="Select a category" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											{/* <SelectLabel>
												Categories
											</SelectLabel> */}
											<SelectItem value="personal">
												Personal
											</SelectItem>
											<SelectItem value="work">
												Work
											</SelectItem>
											<SelectItem value="others">
												Others
											</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
							<div className="grid gap-2">
								<Label>Due Date</Label>
								<Popover>
									<PopoverTrigger asChild>
										<Button
											variant="noShadow"
											className="w-[270px] justify-start text-left font-base gap-2"
										>
											<CalendarIcon />
											{date ? (
												format(date, 'PPP')
											) : (
												<span>Pick a date</span>
											)}
										</Button>
									</PopoverTrigger>
									<PopoverContent
										align="start"
										sideOffset={8}
										className="w-auto p-0"
									>
										<Calendar
											mode="single"
											selected={date}
											onSelect={setDate}
											// captionLayout="buttons"
											// initialFocus
										/>
									</PopoverContent>
								</Popover>
							</div>
						</div>
						<TagSelector />
						<SubTask />
					</div>
					<DialogFooter>
						<div className="flex w-full justify-between items-center py-4">
							<div>
								<DialogClose asChild>
									<Button variant="neutral">Cancel</Button>
								</DialogClose>
							</div>
							<div>
								<Button className="bg-main-red">Delete</Button>
							</div>
							<div>
								<Button type="submit">Save changes</Button>
							</div>
						</div>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default NewTask;
