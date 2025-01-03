import { Component } from '@angular/core';
import { CryptoListComponent } from './crypto-list/crypto-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CryptoListComponent], // Import other components
  template: `<app-crypto-list></app-crypto-list>`,
  styleUrls: ['./app.component.less'],
})
export class AppComponent {}
