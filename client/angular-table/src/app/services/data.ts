import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the Config interface according to your API response structure
interface Config {
  // example properties, update as needed
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceAPi {
   private http = inject(HttpClient);
   private apiUrl1 = 'https://q5l47.wiremockapi.cloud/api/payments';
   private apiUrl = 'http://localhost:8080/api/payments'

    headers = new HttpHeaders({
    'Content-Type': 'application/json',    
    'Access-Control-Allow-Origin': '*'
  });

   private dataSource = signal<any>([])

   currentData = this.dataSource.asReadonly();

   updateData(data: any) {
	 this.dataSource.set(data);
   }	

   getData() {
		this.http.get<any>(this.apiUrl, {headers: this.headers}).subscribe(res => {
			this.dataSource.set(res);
		});
   }   
    // updateData(id: number, data: Partial<Config>): Observable<Config> {
    //  return this.http.put<Config>(`/api/config/${id}`, data);
   //}

    createData(data: Config): Observable<Config> {
     return this.http.post<Config>('/api/config', data);
   }

    deleteData(id: number): Observable<void> {
     return this.http.delete<void>(`/api/config/${id}`);
   }
}
