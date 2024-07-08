import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-sidebar-static',
  standalone: true,
  imports: [RouterModule, InputTextModule, ButtonModule],
  templateUrl: './sidebar-static.component.html',
  styleUrl: './sidebar-static.component.scss'
})
export class SidebarStaticComponent {
  @Input() public isSidebarActive: boolean = false;
  @Output() public toggleSidebar = new EventEmitter<void>();

  public onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
