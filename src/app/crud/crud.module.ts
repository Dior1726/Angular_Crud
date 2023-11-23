import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { MaterialModule } from '../material/material.module';
import { AddComponent } from './components/add/add.component';
import { StoreModule } from '@ngrx/store';
import { CRUD_REDUCER_KEY, crudReducer } from './store/crud.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CrudEffects } from './store/crud.effects';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ListComponent, AddComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forFeature(CRUD_REDUCER_KEY, crudReducer),
    EffectsModule.forFeature([CrudEffects]),
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
    ]),
  ],
})
export class CrudModule {}
