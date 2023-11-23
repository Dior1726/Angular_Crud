import {
  createFeature,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { CRUD_REDUCER_KEY } from './crud.reducer';
import { AssociateModel } from '../models/associate';

const associateFeature =
  createFeatureSelector<AssociateModel>(CRUD_REDUCER_KEY);

export const associateListSelector = createSelector(
  associateFeature,
  (state: AssociateModel) => state.list
);

export const associateErrorSelector = createSelector(
  associateFeature,
  (state: AssociateModel) => state.errormessage
);
