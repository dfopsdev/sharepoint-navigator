import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private siteUrl = 'SharePoint_API_URL/_api/web/webs';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    // Replace 'YOUR_BEARER_TOKEN' with the actual Bearer token you want to use
    const token = 'YOUR_BEARER_TOKEN';
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  // Fetch contents from SharePoint with Bearer token
  fetchContents(): Observable<any[]> {
    const headers = this.getHeaders();
    return this.http.get<any[]>(this.siteUrl, { headers });
  }

  // Fetch custom contents from a given endpoint with Bearer token
  fetchCustomContents(endpoint: string): Observable<any[]> {
    const headers = this.getHeaders();
    return this.http.get<any[]>(endpoint, { headers });
  }

  // Search contents in SharePoint with Bearer token
  searchContents(query: string): Observable<any[]> {
    const headers = this.getHeaders();
    const searchUrl = `SharePoint_API_URL/_api/web/lists/getbytitle('Documents')/items?$filter=substringof('${query}',Title)`;
    return this.http.get<any[]>(searchUrl, { headers });
  }

  // Fetch a list of items (for list-container.component) with Bearer token
  getItems(): Observable<any[]> {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint for items
    const itemsUrl = 'SharePoint_API_URL/_api/web/webs';
    const headers = this.getHeaders();
    return this.http.get<any[]>(itemsUrl, { headers });
  }
}
