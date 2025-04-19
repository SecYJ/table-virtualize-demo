import { faker } from "@faker-js/faker";
import { useVirtualizer } from "@tanstack/react-virtual";
import { ReactNode, useRef, useState, useEffect, Fragment } from "react";

const data = Array.from({ length: 300 }, (_, i) => ({
	id: i + 1,
	name: faker.person.fullName(),
	email: faker.internet.email(),
	city: faker.location.city(),
}));

const Table = ({ children }: { children: ReactNode }) => {
	const parentRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(600); // Default height for SSR

	useEffect(() => {
		// NOTE: 24 for padding bottom;
		setHeight(window.innerHeight);
	}, []);

	const rowVirtualizer = useVirtualizer({
		count: data.length,
		getScrollElement: () => parentRef.current,
		estimateSize: () => 48,
		overscan: 10,
	});

	return (
		<div
			ref={parentRef}
			style={{
				height,
			}}
			className="w-full overflow-auto px-6"
		>
			<div className="pt-[calc(var(--header-height)+1.5rem)]">{children}</div>
			<div style={{ height: `${rowVirtualizer.getTotalSize()}px` }}>
				<table className="w-full border-collapse table-auto">
					<thead>
						<tr className="bg-gray-300">
							<th className="px-2 py-1 whitespace-nowrap text-ellipsis">ID</th>
							<th className="px-2 py-1 whitespace-nowrap text-ellipsis">Name</th>
							<th className="px-2 py-1 whitespace-nowrap text-ellipsis">Email</th>
							<th className="px-2 py-1 whitespace-nowrap text-ellipsis">City</th>
						</tr>
					</thead>
					<tbody>
						{rowVirtualizer.getVirtualItems().map((virtualRow, index) => {
							const row = data[virtualRow.index];

							return (
								<Fragment key={row.id}>
									<tr
										className="*:text-center even:bg-gray-100"
										style={{
											height: `${virtualRow.size}px`,
											transform: `translateY(${virtualRow.start - index * virtualRow.size}px)`,
										}}
										data-index={virtualRow.index + 1}
									>
										<td className="px-2 py-1 whitespace-nowrap text-ellipsis">{row.id}</td>
										<td className="px-2 py-1 whitespace-nowrap text-ellipsis">{row.name}</td>
										<td className="px-2 py-1 whitespace-nowrap text-ellipsis">{row.email}</td>
										<td className="px-2 py-1 whitespace-nowrap text-ellipsis">{row.city}</td>
									</tr>
									{virtualRow.index === data.length - 1 && (
										<tr
											style={{
												height: 24,
												transform: `translateY(${
													virtualRow.start - index * virtualRow.size
												}px)`,
											}}
											className="h-6"
											data-index="bodoh"
										/>
									)}
								</Fragment>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;
