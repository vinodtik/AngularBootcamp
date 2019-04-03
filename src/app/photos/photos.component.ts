import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photos.service';

@Component({
    selector: 'app-photos',
    template: `

        <table class="table">
            <tr>
                <th>ID</th>
                <th>Photo</th>
            </tr>
            <tr *ngFor=" let p of photos ">
                <td>{{ p.id }}</td>
                <!--<td><img [src]="p.thumbnailUrl"/></td>-->
                <td>{{ p.title }}</td>
            </tr>
        </table>
        <button (click)="postDataOnServer()">click to post data on server</button>
    `,
    providers:[PhotoService]
})
export class PhotosComponent implements OnInit {

    photos:any
    constructor(private photoservice:PhotoService) { }

    ngOnInit() { 
        this.photoservice.getData().subscribe(result=>{
            this.photos = result;
            
        })
    }

    postDataOnServer(){
        this.photoservice.postData().subscribe(result=>{
            console.log(result);
        });
    }

}