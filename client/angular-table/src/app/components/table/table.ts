import { Component, signal, input, computed, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { BrnMenuTriggerDirective } from '@spartan-ng/brain/menu';
import { BrnSelectModule } from '@spartan-ng/brain/select';
import { HlmButtonModule } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { HlmInputDirective } from '@spartan-ng/helm/input';
import { HlmMenuModule } from '@spartan-ng/helm/menu';
import { HlmSelectModule } from '@spartan-ng/helm/select';
import { HlmTableImports } from '@spartan-ng/helm/table';
import { ServiceAPi } from '../../services/data';
// import { hlmMuted } from '@spartan-ng/helm/typography'; TODO: check as example
import {
	ColumnDef,
	ColumnFiltersState,
	createAngularTable,
	flexRenderComponent,
	FlexRenderDirective,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	PaginationState,
	SortingState,
} from '@tanstack/angular-table';
import { ActionDropdownComponent } from './components/action-dropdown.component';
import { TableHeadSelectionComponent, TableRowSelectionComponent } from './components/selection-column.component';
import { TableHeadSortButtonComponent } from './components/sort-header-button.component';

export type Payment = {
	id: string;
	amount: number;
	status: 'pending' | 'processing' | 'success' | 'failed';
	email: string;
};


@Component({
	selector: 'data-table-preview',
	imports: [
		FlexRenderDirective,
		FormsModule,
		BrnMenuTriggerDirective,
		HlmMenuModule,
		HlmButtonModule,
		NgIcon,
		HlmIconDirective,
		HlmInputDirective,
		BrnSelectModule,
		HlmSelectModule,
		...HlmTableImports,

	],
	providers: [provideIcons({ lucideChevronDown })],
	host: {
		class: 'w-full',
	},
	templateUrl: './table.html',
	styleUrl: './table.css',
})
export class Table {
	//tableData = input.required<Payment[]>();
	//tableData = signal<Payment[]>(PAYMENT_DATA);
	@Input() tableData: Payment[] = [];
	messageData = input<string>('');
	// tableDataInput2 = signal<Payment[]>([]);

	dataService = inject(ServiceAPi);
	// @ts-nocheck 
	get data(): Payment[] {
		return this.dataService.currentData();
	}

	protected readonly _availablePageSizes = [5, 10, 20, 10000];

	protected _filterChanged(event: Event) {
		this._table.getColumn('email')?.setFilterValue((event.target as HTMLInputElement).value);
	}

	protected readonly _columns: ColumnDef<Payment>[] = [
		{
			accessorKey: 'select',
			id: 'select',
			header: () => flexRenderComponent(TableHeadSelectionComponent),
			cell: () => flexRenderComponent(TableRowSelectionComponent),
			enableSorting: false,
			enableHiding: false,
		},
		{
			accessorKey: 'status',
			id: 'status',
			header: 'Status',
			cell: (info) => `<span class="capitalize">${info.getValue<string>()}</span>`,
			enableSorting: false,
		},
		{
			accessorKey: 'email',
			id: 'email',
			header: () => flexRenderComponent(TableHeadSortButtonComponent),
		},
		{
			accessorKey: 'amount',
			id: 'amount',
			header: '<div class="text-right">Amount</div>',
			enableSorting: false,
			cell: (info) => {
				const amount = parseFloat(info.getValue<string>());
				const formatted = new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD',
				}).format(amount);

				return `<div class="text-right">${formatted}</div>`;
			},
		},
		{
			id: 'action',
			enableHiding: false,
			cell: () => flexRenderComponent(ActionDropdownComponent),
		},
	];

	private readonly _columnFilters = signal<ColumnFiltersState>([]);
	private readonly _sorting = signal<SortingState>([]);
	private readonly _pagination = signal<PaginationState>({
		pageSize: 5,
		pageIndex: 0,
	});

	protected readonly _table = createAngularTable<Payment>(() => ({
		data: this.data,
		columns: this._columns,
		state: {
			columnFilters: this._columnFilters(),
			sorting: this._sorting(),
			pagination: this._pagination(),
		},
		onColumnFiltersChange: (updater) => {
			updater instanceof Function ? this._columnFilters.update(updater) : this._columnFilters.set(updater);
		},
		onSortingChange: (updater) => {
			updater instanceof Function ? this._sorting.update(updater) : this._sorting.set(updater);
		},
		onPaginationChange: (updater) => {
			updater instanceof Function ? this._pagination.update(updater) : this._pagination.set(updater);
		},
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		initialState: {
			pagination: {
				pageSize: 5,
			},
		},
	}));
	protected readonly hidableColumns = this._table.getAllColumns().filter((column) => column.getCanHide());

	protected _filterChange(email: Event) {
		const target = email.target as HTMLInputElement;
		const typedValue = target.value;
		this._table.setGlobalFilter(typedValue);
	}
}

const PAYMENT_DATA: Payment[] = [
	{
		id: 'm5gr84i9',
		amount: 316,
		status: 'success',
		email: 'ken99@yahoo.com',
	},
	{
		id: '3u1reuv4',
		amount: 242,
		status: 'success',
		email: 'Abe45@gmail.com',
	},
	{
		id: 'derv1ws0',
		amount: 837,
		status: 'processing',
		email: 'Monserrat44@gmail.com',
	},
	{
		id: '5kma53ae',
		amount: 874,
		status: 'success',
		email: 'Silas22@gmail.com',
	},
	{
		id: 'bhqecj4p',
		amount: 721,
		status: 'failed',
		email: 'carmella@hotmail.com',
	},
	{
		id: 'p0r8sd2f',
		amount: 123,
		status: 'failed',
		email: 'john.doe@example.com',
	},
	{
		id: '8uyv3n1x',
		amount: 589,
		status: 'processing',
		email: 'emma.smith@gmail.com',
	},
	{
		id: '2zqo6ptr',
		amount: 456,
		status: 'success',
		email: 'jackson78@hotmail.com',
	},
	{
		id: 'l7we9a3m',
		amount: 632,
		status: 'success',
		email: 'grace_22@yahoo.com',
	},
	{
		id: 'o9p2v3qk',
		amount: 987,
		status: 'failed',
		email: 'robert.adams@gmail.com',
	},
	{
		id: 'q1o8r7mz',
		amount: 321,
		status: 'processing',
		email: 'alexander34@gmail.com',
	},
	{
		id: 'i5n3s0tv',
		amount: 555,
		status: 'failed',
		email: 'olivia_morris@hotmail.com',
	},
	{
		id: '3xr7s2nl',
		amount: 789,
		status: 'success',
		email: 'michael_cole@yahoo.com',
	},
	{
		id: 'u9v2p1qy',
		amount: 234,
		status: 'success',
		email: 'lily.jones@gmail.com',
	},
	{
		id: 'b4q0e1cp',
		amount: 876,
		status: 'failed',
		email: 'ryan_14@hotmail.com',
	},
	{
		id: 's1z8m7op',
		amount: 456,
		status: 'success',
		email: 'sophia.green@gmail.com',
	},
	{
		id: 'n5a3v0lt',
		amount: 987,
		status: 'failed',
		email: 'david.miller@yahoo.com',
	},
	{
		id: '2qr7v9sm',
		amount: 654,
		status: 'processing',
		email: 'emma_jones@hotmail.com',
	},
	{
		id: 'y9b2h8qq',
		amount: 789,
		status: 'success',
		email: 'jacob_89@gmail.com',
	},
	{
		id: 'c4a0r1xp',
		amount: 123,
		status: 'failed',
		email: 'samantha.richards@yahoo.com',
	},
];
