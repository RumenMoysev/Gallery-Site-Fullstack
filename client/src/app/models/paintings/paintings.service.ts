import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { painting, paintingDetails } from 'src/app/types/painting';

@Injectable({
    providedIn: 'root'
})
export class PaintingsService {

    constructor(private http: HttpClient) {}

    getAllPaintings() {
        return this.http.get<painting[]>('api/paintings')
    }

    getLast2() {
        return this.http.get<painting[]>('api/paintings/last2')
    }

    getPaintingsDetails(paintingId: string) {
        return this.http.get<paintingDetails>(`api/paintings/${paintingId}`)
    }

    getOwnedPaintings() {
        return this.http.get<painting[]>(`api/users/getOwnedPaintings`)
    }

    getLikedPaintings() {
        return this.http.get<painting[]>(`api/users/getLikedPaintings`)
    }

    addPainting(title: string, summary: string, description: string, imageUrl: string, price: number) {
        const createdAtTime = new Date().toLocaleString('en-GB', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'shortOffset' })
        return this.http.post('api/paintings', {title, summary, description, price, imageUrl, createdAtTime})
    }

    editPainting(title: string, summary: string, description: string, imageUrl: string, price: number, paintingId: any) {
        const updatedAtTime = new Date().toLocaleString('en-GB', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'shortOffset' })
        return this.http.put(`api/paintings/${paintingId}`, {title, summary, description, imageUrl, price, updatedAtTime})
    }

    deletePainting(paintingId: string) {
        return this.http.delete(`api/paintings/${paintingId}`)
    }

    likePainting(paintingId: string) {
        return this.http.post(`api/paintings/${paintingId}/like`, {})
    } 
}
