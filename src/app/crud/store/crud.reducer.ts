import { createReducer, on } from '@ngrx/store';
import { AssociateModel } from '../models/associate';
import * as crudActions from './crud.actions';

export const CRUD_REDUCER_KEY = 'crud';

export const initialState: AssociateModel = {
  list: [],
  errormessage: '',
  associateobj: {
    id: 0,
    name: '',
    email: '',
    phone: '',
    type: 'Customer',
    address: '',
    associategroup: 'level-1',
    status: true,
  },
};

export const crudReducer = createReducer(
  initialState,
  on(crudActions.getAssociateSuccess, (state, action) => {
    return {
      ...state,
      list: action.list,
    };
  }),
  on(crudActions.getAssociateFail, (state, action) => {
    return {
      ...state,
      errormessage: action.error,
    };
  })
);
