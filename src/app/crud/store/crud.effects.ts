import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CrudService } from '../services/crud.service';
import {
  getAssociate,
  getAssociateFail,
  getAssociateSuccess,
} from './crud.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class CrudEffects {
  constructor(private actions$: Actions, private crudService: CrudService) {}

  getAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAssociate),
      exhaustMap((action) => {
        return this.crudService.getAll().pipe(
          map((data) => getAssociateSuccess({ list: data })),
          catchError((error) => of(getAssociateFail({ error: error.message })))
        );
      })
    )
  );
}
