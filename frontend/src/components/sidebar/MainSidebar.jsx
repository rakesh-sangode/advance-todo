import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@/components/ui/sidebar';

import { AppSidebar } from './sidebar';
import { Outlet } from 'react-router-dom';

export default function MainSidebar({ children }) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				{/* <header className="flex h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
					<div className="flex items-center gap-2 px-4">
						<SidebarTrigger className="-ml-1" />
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem className="hidden md:block">
									<BreadcrumbLink href="#">
										Upcoming
									</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator className="hidden md:block" />
								<BreadcrumbItem>
									<BreadcrumbPage>
										Data Fetching
									</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>
				</header> */}
				{/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
					<div className="grid auto-rows-min gap-4 md:grid-cols-3">
						<div className="aspect-video rounded-base bg-background/50 border-2 border-border" />
						<div className="aspect-video rounded-base bg-background/50 border-2 border-border" />
						<div className="aspect-video rounded-base bg-background/50 border-2 border-border" />
					</div>
					<div className="min-h-[100vh] flex-1 rounded-base bg-background/50 border-2 border-border md:min-h-min" />
				</div> */}
				{/* {children} */}
				<div className="bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] px-16">
					<Outlet />
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
