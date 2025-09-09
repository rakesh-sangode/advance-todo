'use client';

import {
	AudioWaveform,
	BadgeCheck,
	Bell,
	BookHeart,
	BookOpen,
	Bot,
	BriefcaseBusiness,
	CalendarCheck2,
	CalendarDays,
	ChevronRight,
	ChevronsUpDown,
	Command,
	CreditCard,
	Folder,
	Forward,
	Frame,
	GalleryVerticalEnd,
	LogOut,
	Map,
	Menu,
	MoreHorizontal,
	PieChart,
	Plus,
	ScrollText,
	Search,
	Settings2,
	Sparkles,
	SquareTerminal,
	Sticker,
	Trash2,
} from 'lucide-react';

import * as React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupAction,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarRail,
	SidebarTrigger,
	useSidebar,
} from '@/components/ui/sidebar';
import { Input } from '../ui/input';
import { Link } from 'react-router-dom';

// This is sample data.
const data = {
	user: {
		name: 'rakesh',
		email: 'rakesh@example.com',
		avatar: '/avatars/shadcn.jpg',
	},
	teams: [
		{
			name: 'Acme Inc',
			logo: GalleryVerticalEnd,
			plan: 'Enterprise',
		},
		{
			name: 'Acme Corp.',
			logo: AudioWaveform,
			plan: 'Startup',
		},
		{
			name: 'Evil Corp.',
			logo: Command,
			plan: 'Free',
		},
	],
	tasks: [
		// {
		// 	title: 'Playground',
		// 	url: '#',
		// 	icon: SquareTerminal,
		// 	isActive: true,
		// 	items: [
		// 		{
		// 			title: 'History',
		// 			url: '#',
		// 		},
		// 		{
		// 			title: 'Starred',
		// 			url: '#',
		// 		},
		// 		{
		// 			title: 'Settings',
		// 			url: '#',
		// 		},
		// 	],
		// },
		{
			title: 'Upcoming',
			url: '/upcoming',
			icon: ScrollText,
			isActive: true,
			count: 5,
		},
		{
			title: 'Today',
			url: '/today',
			icon: CalendarCheck2,
			count: 8,
			// items: [
			// 	{
			// 		title: 'Genesis',
			// 		url: '#',
			// 	},
			// 	{
			// 		title: 'Explorer',
			// 		url: '#',
			// 	},
			// 	{
			// 		title: 'Quantum',
			// 		url: '#',
			// 	},
			// ],
		},
		{
			title: 'Calendar',
			url: '#',
			icon: CalendarDays,
			// items: [
			// 	{
			// 		title: 'Introduction',
			// 		url: '#',
			// 	},
			// 	{
			// 		title: 'Get Started',
			// 		url: '#',
			// 	},
			// 	{
			// 		title: 'Tutorials',
			// 		url: '#',
			// 	},
			// 	{
			// 		title: 'Changelog',
			// 		url: '#',
			// 	},
			// ],
		},
		{
			title: 'Sticky Wall',
			url: '#',
			icon: Sticker,
			// items: [
			// 	{
			// 		title: 'General',
			// 		url: '#',
			// 	},
			// 	{
			// 		title: 'Team',
			// 		url: '#',
			// 	},
			// 	{
			// 		title: 'Billing',
			// 		url: '#',
			// 	},
			// 	{
			// 		title: 'Limits',
			// 		url: '#',
			// 	},
			// ],
		},
	],
	categories: [
		{
			name: 'Personal',
			url: '#',
			icon: BookHeart,
			count: 3,
			fill: 'red',
		},
		{
			name: 'Work',
			url: '#',
			icon: BriefcaseBusiness,
			count: 8,
			fill: 'blue',
		},
		{
			name: 'Other',
			url: '#',
			icon: Map,
			count: 6,
			fill: 'yellow',
		},
	],
};

export function AppSidebar({ ...props }) {
	const { isMobile } = useSidebar();
	const [activeTeam, setActiveTeam] = React.useState(data.teams[0]);

	if (!activeTeam) {
		return null;
	}

	return (
		<Sidebar
			collapsible="icon"
			{...props}
		>
			<SidebarHeader>
				<SidebarMenu>
					{/* Menu Text and Icon */}
					<div className="flex items-center w-full justify-start group-data-[collapsible=icon]:justify-center">
						<SidebarTrigger />
						<span className="text-xl group-data-[collapsible=icon]:hidden px-2">
							Menu
						</span>
					</div>

					{/* Search icon and placeholder */}
					<div className="flex items-center w-full justify-start group-data-[collapsible=icon]:justify-center pt-2">
						{/* Collapsed: show only the icon, centered */}
						<Search className="hidden group-data-[collapsible=icon]:inline size-5" />
						{/* Expanded: input with right-aligned icon */}
						<div className="relative w-full group-data-[collapsible=icon]:hidden">
							<Input
								type="text"
								placeholder="Search"
								className="pr-8"
							/>
							<Search className="absolute right-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
						</div>
					</div>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Tasks</SidebarGroupLabel>
					<SidebarMenu>
						{data.tasks.map((item) => (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton
									asChild
									className="data-[state=open]:bg-main data-[state=open]:outline-border data-[state=open]:text-main-foreground"
									tooltip={item.title}
								>
									<Link to={item.url}>
										{item.icon && <item.icon />}
										<span>{item.title}</span>
										{typeof item.count === 'number' ? (
											<span className="ml-auto rounded-full bg-main px-2 py-0.5 text-xs group-data-[collapsible=icon]:hidden">
												{item.count}
											</span>
										) : (
											<ChevronRight className="ml-auto" />
										)}
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroup>
				<SidebarGroup>
					<SidebarGroupLabel>Category</SidebarGroupLabel>
					<SidebarMenu>
						{data.categories.map((item) => (
							<SidebarMenuItem key={item.name}>
								<SidebarMenuButton asChild>
									<Link to={item.url}>
										<item.icon fill={item.fill} />
										<span>{item.name}</span>
										{typeof item.count === 'number' ? (
											<span className="ml-auto rounded-full bg-main px-2 py-0.5 text-xs group-data-[collapsible=icon]:hidden">
												{item.count}
											</span>
										) : (
											<ChevronRight />
										)}
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroup>
				<SidebarGroup>
					<SidebarGroupLabel>Tags</SidebarGroupLabel>
					<SidebarMenu>
						{data.categories.map((item) => (
							<SidebarMenuItem key={item.name}>
								<SidebarMenuButton asChild>
									<Link to={item.url}>
										<item.icon />
										<span>{item.name}</span>
									</Link>
								</SidebarMenuButton>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<SidebarMenuAction>
											<MoreHorizontal className="group-hover/menu-item:text-main-foreground" />
											<span className="sr-only">
												More
											</span>
										</SidebarMenuAction>
									</DropdownMenuTrigger>
									<DropdownMenuContent
										className="w-48"
										side={isMobile ? 'bottom' : 'right'}
										align={isMobile ? 'end' : 'start'}
									>
										<DropdownMenuItem>
											<Folder />
											<span>View Project</span>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<Forward />
											<span>Share Project</span>
										</DropdownMenuItem>
										<DropdownMenuSeparator />
										<DropdownMenuItem>
											<Trash2 />
											<span>Delete Project</span>
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<SidebarMenuButton
									className="group-data-[state=collapsed]:hover:outline-0 group-data-[state=collapsed]:hover:bg-transparent overflow-visible"
									size="lg"
								>
									<Avatar className="h-8 w-8">
										<AvatarImage
											src="https://github.com/shadcn.png?size=40"
											alt="CN"
										/>
										<AvatarFallback>CN</AvatarFallback>
									</Avatar>
									<div className="grid flex-1 text-left text-sm leading-tight">
										<span className="truncate font-heading">
											{data.user.name}
										</span>
										<span className="truncate text-xs">
											{data.user.email}
										</span>
									</div>
									<ChevronsUpDown className="ml-auto size-4" />
								</SidebarMenuButton>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								className="w-[--radix-dropdown-menu-trigger-width] min-w-56"
								side={isMobile ? 'bottom' : 'right'}
								align="end"
								sideOffset={4}
							>
								<DropdownMenuLabel className="p-0 font-base">
									<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
										<Avatar className="h-8 w-8">
											<AvatarImage
												src="https://github.com/shadcn.png?size=40"
												alt="CN"
											/>
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
										<div className="grid flex-1 text-left text-sm leading-tight">
											<span className="truncate font-heading">
												{data.user.name}
											</span>
											<span className="truncate text-xs">
												{data.user.email}
											</span>
										</div>
									</div>
								</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuGroup>
									<DropdownMenuItem>
										<Sparkles />
										Upgrade to Pro
									</DropdownMenuItem>
								</DropdownMenuGroup>
								<DropdownMenuSeparator />
								<DropdownMenuGroup>
									<DropdownMenuItem>
										<BadgeCheck />
										Account
									</DropdownMenuItem>
									<DropdownMenuItem>
										<CreditCard />
										Billing
									</DropdownMenuItem>
									<DropdownMenuItem>
										<Bell />
										Notifications
									</DropdownMenuItem>
								</DropdownMenuGroup>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<LogOut />
									Log out
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
