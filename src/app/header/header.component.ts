import {Component} from '@angular/core';
import {WaiterComponent} from '../../produtcs/components/waiter/waiter.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    WaiterComponent,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
