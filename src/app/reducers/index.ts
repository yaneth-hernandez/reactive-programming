import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  createStore,
  MetaReducer,
  State,
} from '@ngrx/store';
import { Task } from '../models/task.model';
import { Injectable } from '@angular/core';


export const appStateFeatureKey = 'appState';

export interface State {
  task: Task[];
}

const initialState: State = {
  task: [],
};

@Injectable({
  providedIn:'root'
})

export const reducers: ActionReducerMap<State> = {};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];

export class StoreService {
  private store = createStore(appReducer, initialState);

}
