import { environment } from './../../environments/environment';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/internal/operators';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, empty } from 'rxjs';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {
  hero$: Observable<any>;
  apiUrl = environment.api.url;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      map((paramMap: Params) => {
        console.log(paramMap.get('id'));
        return paramMap.get('id') !== null ? +paramMap.get('id') : null;
      }),
      switchMap(id => {
        if (!id) { return empty(); }

        return this.http.get(this.apiUrl + `/heroes/${id}`);
      })
    );
  }

}
