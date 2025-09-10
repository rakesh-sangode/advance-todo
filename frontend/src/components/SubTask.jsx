import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Check, Pencil, Plus, X } from 'lucide-react';

function SubTask() {
	const [subtasks, setSubtasks] = useState([]);
	const [newSubtask, setNewSubtask] = useState('');
	const [editingIndex, setEditingIndex] = useState(null);
	const [editingText, setEditingText] = useState('');

	const handleAddSubtask = () => {
		if (newSubtask.trim() !== '') {
			setSubtasks([...subtasks, newSubtask.trim()]);
			setNewSubtask('');
		}
	};

	const startEditing = (index) => {
		setEditingIndex(index);
		setEditingText(subtasks[index]);
	};

	const saveEditing = (index) => {
		if (editingText.trim() === '') return; // ignore empty
		const updated = subtasks.map((task, i) =>
			i === index ? editingText.trim() : task,
		);
		setSubtasks(updated);
		setEditingIndex(null);
	};

	const cancelEditing = () => {
		setEditingIndex(null);
	};

	return (
		<div>
			<Label>Subtasks</Label>
			{subtasks.length > 0 && (
				<div>
					<div style={{ listStyle: 'none', padding: 0 }}>
						{subtasks.map((task, index) => (
							<div
								key={index}
								className="flex mb-2"
								// style={{
								// 	display: 'flex',
								// 	alignItems: 'center',
								// 	marginBottom: '10px',
								// }}
							>
								{editingIndex === index ? (
									<div className="gap-3 flex w-full">
										<Input
											value={editingText}
											onChange={(e) =>
												setEditingText(e.target.value)
											}
											style={{
												flexGrow: 1,
												marginRight: '10px',
											}}
										/>
										<Button
											variant="noShadow"
											className="bg-green-500"
											onClick={() => saveEditing(index)}
										>
											<Check />
										</Button>
										<Button
											onClick={cancelEditing}
											className="bg-red-500"
											variant="noShadow"
										>
											<X />
										</Button>
									</div>
								) : (
									<div className="flex w-full gap-1">
										<div
											className="w-full border-border border-1 rounded-base bg-gray-300 h-10 px-3 py-2"
											// style={{
											// 	flexGrow: 1,
											// 	cursor: 'pointer',
											// 	userSelect: 'none',
											// 	paddingRight: '10px',
											// }}
											title="Click to edit"
											onClick={() => startEditing(index)}
										>
											{task}
										</div>
										<div>
											<Button
												variant="ghost"
												size="icon"
												onClick={() =>
													startEditing(index)
												}
												className="[&_svg]:!w-6 [&_svg]:!h-6"
											>
												<Pencil
													// fill="red"
													className="!w-6 !h-6"
												/>
											</Button>
										</div>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			)}
			<div className="flex items-center justify-center gap-3">
				<Input
					placeholder="Enter subtask..."
					value={newSubtask}
					onChange={(e) => setNewSubtask(e.target.value)}
					fullWidth
				/>
				<Button
					variant="noShadow"
					onClick={handleAddSubtask}
				>
					<Plus />
				</Button>
			</div>
		</div>
	);
}

export default SubTask;
