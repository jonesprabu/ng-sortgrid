import {Component} from '@angular/core';

@Component({
  selector: 'ngsg-demo-memory',
  templateUrl: 'getting-started-memory.component.html',
  styleUrls: ['../memory-demo.css']
})
export class GettingStartedMemoryComponent {

  public items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
