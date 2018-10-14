import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {
  heroes$: Observable<any[]>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.heroes$ = this.http.get('http://localhost:8000/heroes', { headers: { Accept: 'application/json' } }) as Observable<any[]>;
  }

}
