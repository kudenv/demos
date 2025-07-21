import { Component, inject } from '@angular/core';
import { Table } from '../table/table';
import { ServiceAPi } from '../../services/data';
//import { HttpClientModule, HttpClient } from '@angular/common/http';
export type Payment = {
	id: string;
	amount: number;
	status: 'pending' | 'processing' | 'success' | 'failed';
	email: string;
};

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'app-orders',
	templateUrl: './orders.html',
	styleUrl: './orders.css',
	imports: [Table]
})

export class Orders {
	message = 'Orders component initialized';
	serviceData = inject(ServiceAPi);
	resData: any[] = [];
	constructor() {		
		this.serviceData.getData();
		this.serviceData.updateData(this.serviceData.currentData());
	}
	sendData() {
		try {
			const response = fetch('https://q5l47.wiremockapi.cloud/api/payments');
			response
				.then(res => {
					console.log(res);					
					return res.json();
				})
				.then((data: Payment[]) => {
					this.resData.push(...data);
					this.serviceData.updateData(data);
				});
		
		} catch (error) {
			console.error("Failed to fetch user data:", error);
		}	
		console.log("Sending data to service...", this.resData);	
		this.serviceData.updateData(this.resData);
	}	

	OnInit() {
		try {
			const response = fetch('https://q5l47.wiremockapi.cloud/api/payments');
			response
				.then(res => {
					console.log(res);					
					return res.json();
				})
				.then((data: Payment[]) => {
					this.resData.push(...data);
					this.serviceData.updateData(data);
				});
		
		} catch (error) {
			console.error("Failed to fetch user data:", error);
		}
	}


}
