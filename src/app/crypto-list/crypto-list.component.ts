import { Component } from '@angular/core';
import { CryptoService } from '../crypto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-crypto-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatInputModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule, MatGridListModule, MatFormFieldModule, MatTableModule],
  templateUrl: './crypto-list.component.html',
  styleUrl: './crypto-list.component.less'
})
export class CryptoListComponent {
  cryptoData: any[] = [];
  searchQuery: string = '';
  filteredCryptos: any[] = [];
  displayedColumns: string[] = ['name', 'symbol', 'current_price', 'market_cap', 'price_change_percentage_24h'];

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    this.cryptoService.getCryptoData().subscribe({
      next: (data) => {
        this.cryptoData = data;
        this.filteredCryptos = data; // Initially, show all cryptocurrencies
      },
      error: (err) => console.error('Error fetching data', err),
    });
  }  

  onSearch(): void {
    // Filter crypto data based on the search query
    this.filteredCryptos = this.cryptoData.filter((crypto) =>
      crypto.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
