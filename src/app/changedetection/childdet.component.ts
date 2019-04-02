import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-childdet',
    template: `    

    <h1>Cars</h1>
    <ul>

    <li *ngFor="let car of cars1">
       {{car}}
    </li>
    </ul>

    <button (click)="refresh()">Refresh</button>
    `,

    changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildDetComponent implements OnInit {

    @Input()
    personobj


    @Input()
    cars1

    constructor(private changedet:ChangeDetectorRef) { }

    ngOnInit() { 

    }


    refresh(){
        this.changedet.detectChanges() //now reflect all mutated changes
    }
}