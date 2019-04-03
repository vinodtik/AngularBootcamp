import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PhotoService {
    
    constructor(private httpclient:HttpClient) { 

    }
    getData():Observable<any>{
        // return this.httpclient.get('https://jsonplaceholder.typicode.com/photos');
        return this.httpclient.get('https://jsonplaceholder.typicode.com/albums');
    }
    postData():Observable<any>{
        return this.httpclient.post('https://jsonplaceholder.typicode.com/album/1/photos',{
            // post data to be added
            "albumId": 1,
            "title": "Fake record",
            "url": "https://via.placeholder.com/600/92c952",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        });
    }

}