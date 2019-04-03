import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-trackchanges',
    template: `
        <ul>
            <li *ngFor="let p of persons; trackBy:trackbyid">
                {{ p.Id }}, {{ p.Name }}
            </li>
        </ul>
        <button (click)="fecthData()">Fetch More</button>
    `
})
export class TrackComponent implements OnInit {

    persons = [
        { Id : 10, Name : 'Ramesh' },
        { Id : 11, Name : 'Mahesh' },
        { Id : 12, Name : 'Suresh' }
    ]
    constructor() { }

    ngOnInit() { 

    }
    //mutating or recreating the array 
    fecthData(){
        this.persons = [
            { Id : 10, Name : 'Ramesh' },
            { Id : 11, Name : 'Mahesh' },
            { Id : 12, Name : 'Suresh' },
            { Id : 14, Name : 'Kamlesh' }
        ]
    }

    trackbyid(item){
        return item.Id;
    }

}