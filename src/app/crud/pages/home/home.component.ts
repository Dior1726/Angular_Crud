import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getAssociate } from '../../store/crud.actions';
import { associateListSelector } from '../../store/crud.selector';
import { Observable } from 'rxjs';
import { Associates } from '../../models/associate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  associateList$!: Observable<Associates[]>;

  constructor(private store$: Store) {}

  ngOnInit(): void {
    this.store$.dispatch(getAssociate());
    this.associateList$ = this.store$.pipe(select(associateListSelector));
    this.associateList$.subscribe((item) => console.log(item));
  }
}
