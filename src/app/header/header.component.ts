import { Component ,OnInit,EventEmitter,Output} from '@angular/core';
import { templateSourceUrl } from '@angular/compiler';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent implements OnInit{
    @Output() selectedRouter = new EventEmitter<string>();

    constructor( ) { }

    ngOnInit(): void {
    }

    redirectTo(type: string){
          this.selectedRouter.emit(type);
    }
}