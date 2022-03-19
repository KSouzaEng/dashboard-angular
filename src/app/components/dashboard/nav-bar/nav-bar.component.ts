import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  menu: Menu[] = []

  constructor(private _menuService: MenuService) { }

  ngOnInit(): void {
    this.carregaMenu()
  }

  carregaMenu(){
    this._menuService.getMenu().subscribe(data => {
      console.log(data)
      this.menu = data
    });
  }
}
