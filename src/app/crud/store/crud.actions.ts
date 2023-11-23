import { createAction, props } from '@ngrx/store';
import { Associates } from '../models/associate';

export const getAssociate = createAction('[crud] get');
export const getAssociateSuccess = createAction(
  '[crud] get success',
  props<{ list: Associates[] }>()
);
export const getAssociateFail = createAction(
  '[crud] get fail',
  props<{ error: string }>()
);
export const createAssociate = createAction('[crud] create');
export const deleteAssociate = createAction('[crud] delete');
export const updateAssociate = createAction('[crud] update');
