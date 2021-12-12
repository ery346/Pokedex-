import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidacionCorreoService {

  constructor(private http: HttpClient) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
   
    const email = control.value;
    console.log(email)
    return this.http.get<any[]>(`  http://localhost:3000/pokeUsuario?q=${ email }`)
                .pipe(
                  map( resp => {
                    return (resp.length === 0) ? null : { emailTomado: true};
                  })
                )

  }

}
