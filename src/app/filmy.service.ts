import { Injectable } from '@angular/core';
import { Film} from './modele/film';

@Injectable({
  providedIn: 'root'
})
export class FilmyService {

  private filmy: Film[] = [
    {tytul: "Iron Man 3", id: 0, rok: 2010, opis: "Tony walczy z Mandarynką"}, 
    {tytul: "Leathal Weapon 3", id: 1, rok: 1995, opis: "Zawody 'Kto ma większą ranę?'"},
    {tytul: "Star Wars New Hope", id:2, rok: 1974, opis: "Jak ci szturmowcy strzelają?"}
  ];

  constructor() { }

  wszystkieFilm(): Film[] {
    return this.filmy;
  }
  getFilm(id: number): Film {
    return this.filmy[id];
  }
}
