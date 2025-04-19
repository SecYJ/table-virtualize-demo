import FormGrid from "@/components/form-grid";
import Table from "@/components/table";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Table>
			<FormGrid />
		</Table>
	);
}
