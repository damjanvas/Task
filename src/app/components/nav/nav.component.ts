import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  constructor(
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  
  loggedIn() {
    return this.storageService.loggedIn();
  }

  logout() {
    this.storageService.logout();
    this.router.navigate(['/login']);
  }
}
