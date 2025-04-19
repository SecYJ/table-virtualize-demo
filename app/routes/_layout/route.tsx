import { createFileRoute, Outlet } from "@tanstack/react-router";
import {
	SidebarProvider,
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarSeparator,
} from "@/components/ui/sidebar";
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuLink,
	NavigationMenuIndicator,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export const Route = createFileRoute("/_layout")({
	component: LayoutRouteComponent,
});

function LayoutRouteComponent() {
	return (
		<div className="grid grid-cols-[auto_1fr] h-dvh overflow-hidden bg-background">
			<SidebarProvider>
				<Sidebar className="border-r shadow-lg">
					<SidebarHeader>
						<span className="text-xl font-bold tracking-tight">MyApp</span>
					</SidebarHeader>
					<SidebarSeparator />
					<SidebarContent className="overflow-x-hidden">
						<SidebarGroup>
							<SidebarGroupLabel>Main</SidebarGroupLabel>
							<SidebarMenu>
								<SidebarMenuItem>
									<SidebarMenuButton isActive>Dashboard</SidebarMenuButton>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton>Projects</SidebarMenuButton>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton>Team</SidebarMenuButton>
								</SidebarMenuItem>
							</SidebarMenu>
						</SidebarGroup>
						<SidebarSeparator />
						<SidebarGroup>
							<SidebarGroupLabel>Settings</SidebarGroupLabel>
							<SidebarMenu>
								<SidebarMenuItem>
									<SidebarMenuButton>Account</SidebarMenuButton>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton>Preferences</SidebarMenuButton>
								</SidebarMenuItem>
							</SidebarMenu>
						</SidebarGroup>
					</SidebarContent>
				</Sidebar>
			</SidebarProvider>
			<div>
				<TopNavigation />

				<Outlet />
			</div>
		</div>
	);
}

const TopNavigation = () => (
	<header className="fixed w-[calc(100%-273px)] top-0 z-30 left-[256px] border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
		<div className="mx-auto flex h-16 max-w-screen-2xl items-center px-4 sm:px-8">
			<NavigationMenu className="flex-1">
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Overview</NavigationMenuTrigger>
						<NavigationMenuContent>
							<NavigationMenuLink href="#">Overview Page</NavigationMenuLink>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Features</NavigationMenuTrigger>
						<NavigationMenuContent>
							<NavigationMenuLink href="#">Feature 1</NavigationMenuLink>
							<NavigationMenuLink href="#">Feature 2</NavigationMenuLink>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink href="#">Pricing</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
				<NavigationMenuIndicator />
				<NavigationMenuViewport />
			</NavigationMenu>
			<div className="ml-4 flex items-center gap-2">
				<span className="font-medium text-muted-foreground">Welcome, User</span>
				{/* Add avatar or user menu here if needed */}
			</div>
		</div>
	</header>
);
