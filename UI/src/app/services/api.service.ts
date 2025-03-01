import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable, throwError } from "rxjs";

const baseURL = environment.apiUrl;

export abstract class ApiService {

    constructor(protected http: HttpClient) { }

    // Common headers for all API calls
    private getHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json'
        });
    }

    protected get<T>(apiUrl: string): Observable<T> {
        return this.http.get<T>(baseURL + apiUrl, { headers: this.getHeaders() });
    }

    protected getWithParams<T>(apiUrl: string, params?: HttpParams): Observable<T> {
        return this.http.get<T>(baseURL + apiUrl, { headers: this.getHeaders(), params });
    }

    protected post<T>(apiUrl: string, body: any): Observable<T> {
        return this.http.post<T>(baseURL + apiUrl, body, { headers: this.getHeaders() });
    }

    protected postWithParams<T>(apiUrl: string, body: any, params?: HttpParams): Observable<T> {
        return this.http.post<T>(baseURL + apiUrl, body, { headers: this.getHeaders(), params });
    }


    delete(apiUrl: string): Observable<void> {
        return this.http.delete<void>(baseURL + apiUrl);
    }

}