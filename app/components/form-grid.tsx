import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FormGrid = () => (
	<div className="grid grid-cols-2 gap-6 mb-8">
		<div className="flex flex-col gap-4">
			<div className="flex flex-col gap-1">
				<Label htmlFor="firstName">First Name</Label>
				<Input id="firstName" type="text" placeholder="First Name" />
			</div>
			<div className="flex flex-col gap-1">
				<Label htmlFor="lastName">Last Name</Label>
				<Input id="lastName" type="text" placeholder="Last Name" />
			</div>
			<div className="flex flex-col gap-1">
				<Label htmlFor="email">Email</Label>
				<Input id="email" type="email" placeholder="Email" />
			</div>
		</div>
		<div className="flex flex-col gap-4">
			<div className="flex flex-col gap-1">
				<Label htmlFor="city">City</Label>
				<Input id="city" type="text" placeholder="City" />
			</div>
			<div className="flex flex-col gap-1">
				<Label htmlFor="country">Country</Label>
				<Input id="country" type="text" placeholder="Country" />
			</div>
			<div className="flex flex-col gap-1">
				<Label htmlFor="phone">Phone</Label>
				<Input id="phone" type="tel" placeholder="Phone" />
			</div>
		</div>
	</div>
);

export default FormGrid;
