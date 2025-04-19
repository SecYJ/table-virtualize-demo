import type { ReactNode } from "react";
import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "@/styles/app.css?url";

const RootComponent = () => (
	<RootDocument>
		<Outlet />
	</RootDocument>
);

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ title: "TanStack Start Starter" },
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),

	component: RootComponent,
});

const RootDocument = ({ children }: { children: ReactNode }) => (
	<html>
		<head>
			<HeadContent />
			{/* <link rel="stylesheet" href="/app/styles/app.css" /> */}
		</head>
		<body>
			{children}
			<Scripts />
		</body>
	</html>
);
