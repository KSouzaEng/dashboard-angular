import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';





@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listUsuarios: Usuario[] = [
    {usuario: 'Karem', nome: 'Karem Cristine', sobrenome: 'de Souza', sexo: 'Feminino'},
    {usuario: 'Lucas', nome: 'Lucas Henrique', sobrenome: 'Serrão da Silva', sexo: 'Masculino'},
    {usuario: 'Daenarys', nome: 'Daenarys ', sobrenome: 'Targaryan', sexo: 'Feminino'},
  ];

    displayedColumns: string[] = ['usuario', 'nome', 'sobrenome', 'sexo','acoes'];
    dataSource = new MatTableDataSource(this.listUsuarios);

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }


  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
