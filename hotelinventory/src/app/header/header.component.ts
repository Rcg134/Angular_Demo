import { Component , ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ake-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  header: string = 'Header';
}
