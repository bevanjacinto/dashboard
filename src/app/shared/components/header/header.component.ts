import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() toogleSideBarForMe: EventEmitter<any> = new EventEmitter();

  toogleSideBar() {
    this.toogleSideBarForMe.emit();
  }
}
