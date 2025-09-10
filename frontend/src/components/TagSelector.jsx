import { useState } from 'react';
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
} from '@/components/ui/popover';
import {
	Command,
	CommandItem,
	CommandList,
	CommandInput,
} from '@/components/ui/command';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';
import { Label } from './ui/label';

// Initial tag options
const defaultTagOptions = ['Work', 'Personal', 'Urgent', 'Shopping', 'Study'];

// Possible tag colors
const colorOptions = [
	'bg-blue-500',
	'bg-green-500',
	'bg-red-500',
	'bg-yellow-500',
	'bg-purple-500',
	'bg-pink-500',
	'bg-orange-500',
	'bg-teal-500',
	'bg-indigo-500',
];

export function TagSelector() {
	const [selectedTags, setSelectedTags] = useState([]);
	const [tagOptions, setTagOptions] = useState(defaultTagOptions);
	const [tagColorMap, setTagColorMap] = useState({
		Work: 'bg-blue-500',
		Personal: 'bg-green-500',
		Urgent: 'bg-red-500',
		Shopping: 'bg-yellow-500',
		Study: 'bg-purple-500',
	});

	const [searchTerm, setSearchTerm] = useState('');
	const [open, setOpen] = useState(false);

	// Toggle tag selection
	const toggleTag = (tag) => {
		setSelectedTags((prev) =>
			prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
		);
	};

	// Assign color if not exists
	const assignColorIfNeeded = (tag) => {
		if (!tagColorMap[tag]) {
			const randomColor =
				colorOptions[Math.floor(Math.random() * colorOptions.length)];
			setTagColorMap((prev) => ({ ...prev, [tag]: randomColor }));
		}
	};

	// Handle enter key to add custom tag
	const handleKeyDown = (e) => {
		if (e.key === 'Enter' && searchTerm.trim() !== '') {
			const newTag = searchTerm.trim();
			if (!tagOptions.includes(newTag)) {
				setTagOptions((prev) => [...prev, newTag]);
			}
			assignColorIfNeeded(newTag);
			toggleTag(newTag);
			setSearchTerm('');
			e.preventDefault();
		}
	};

	return (
		<div>
			<Label>Tags</Label>
			{/* <div
				className={`${
					selectedTags.length > 0
						? 'border-border border-2 rounded-base bg-secondary-background p-2'
						: ''
				}`}
			> */}
			{/* Selected Tags */}
			<div className="flex flex-wrap gap-2">
				{selectedTags.map((tag) => (
					<Badge
						key={tag}
						onClick={() => toggleTag(tag)}
						className={`flex items-center gap-1 text-foreground cursor-pointer ${
							tagColorMap[tag] || 'bg-gray-500'
						}`}
					>
						{tag}
						<X className="w-3 h-3" />
					</Badge>
				))}
			</div>
			{/* </div> */}

			{/* Tag Picker */}
			<div className="flex justify-center py-2">
				<Popover
					open={open}
					onOpenChange={setOpen}
				>
					<PopoverTrigger asChild>
						<Button
							variant="noShadow"
							size="full"
						>
							<Plus /> Add Tag
						</Button>
					</PopoverTrigger>

					<PopoverContent className="w-72 p-0 items-center justify-center">
						<Command>
							<CommandInput
								placeholder="Search or add tag..."
								value={searchTerm}
								onValueChange={setSearchTerm}
								onKeyDown={handleKeyDown}
							/>
							<CommandList>
								{tagOptions
									.filter((tag) =>
										tag
											.toLowerCase()
											.includes(searchTerm.toLowerCase()),
									)
									.map((tag) => (
										<CommandItem
											key={tag}
											onSelect={() => {
												assignColorIfNeeded(tag);
												toggleTag(tag);
											}}
											className="cursor-pointer"
										>
											<span className="mr-2">
												{selectedTags.includes(tag)
													? '✓'
													: ''}
											</span>
											{tag}
										</CommandItem>
									))}

								{/* Optionally show "Add new tag" */}
								{searchTerm.trim() &&
									!tagOptions.some(
										(tag) =>
											tag.toLowerCase() ===
											searchTerm.toLowerCase(),
									) && (
										<CommandItem
											onSelect={() => {
												const newTag =
													searchTerm.trim();
												setTagOptions((prev) => [
													...prev,
													newTag,
												]);
												assignColorIfNeeded(newTag);
												toggleTag(newTag);
												setSearchTerm('');
											}}
											className="cursor-pointer italic text-muted-foreground"
										>
											+ Add "{searchTerm}"
										</CommandItem>
									)}
							</CommandList>
						</Command>
					</PopoverContent>
				</Popover>
			</div>
		</div>
	);
}
