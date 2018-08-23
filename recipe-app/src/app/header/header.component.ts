import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStoreService: DataStorageService, public authService: AuthService) { }

  ngOnInit() {
  }

  onSaveData() {
    this.dataStoreService.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.dataStoreService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
