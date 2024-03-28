import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PaintingsService {

    constructor(private http: HttpClient) { }

    addPainting(title: string, summary: string, description: string, imageUrl: string) {
        const createdAtTime = new Date().toLocaleString('en-GB', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'shortOffset' })
        return this.http.post('api/paintings', {title, summary, description, imageUrl, createdAtTime})
    }
}
