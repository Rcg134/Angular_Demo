import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthLocaStorageService } from '../rooms/services/LocalStorage/auth-loca-storage.service';

@Component({
  selector: 'ake-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss'],
})
export class AppNavComponent implements OnInit {
  Name: string = '';

  constructor(private authlocalStorage: AuthLocaStorageService) {}
  ngOnInit(): void {
    const localName = localStorage.getItem('Name');
    if (localName !== null) {
      this.Name = localName;
    }
  }
  private breakpointObserver = inject(BreakpointObserver);
  showSubMenu: boolean = false;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  toggleSubMenu() {
    this.showSubMenu = !this.showSubMenu;
  }

  logout() {
    this.authlocalStorage.SessionLogout();
  }
}
