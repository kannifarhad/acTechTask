import { OrganizationType, OrganizationStateType  } from './state';
import {
  ActionType,
  AddOrganization,
  FetchOrganizationList,
  SearchOrganization,
  OrganizationActions,
  ClearSearchOrganization
} from './actions';

export function organizationReducer(state: OrganizationStateType, action: OrganizationActions): OrganizationStateType {
  switch (action.type) {

    case ActionType.AddOrganization:
      return { ...state, list: [action.payload, ...state.list] };

    case ActionType.FetchOrganizationList:
      return { ...state, list: action.payload};

    case ActionType.SearchOrganization:
      const regex = new RegExp(`${action.payload}`, 'ig');
      return { ...state, filtered: state.list.filter(org => org.name.match(regex))};

    case ActionType.ClearSearchOrganization:
        return { ...state, filtered: null};
        
    default:
      return state;
  }
}

// helper functions to simplify the caller
export const addOrganization = (organization: OrganizationType): AddOrganization => ({
  type: ActionType.AddOrganization,
  payload: organization,
});

export const fetchOrganization = (list: OrganizationType[]): FetchOrganizationList => ({
  type: ActionType.FetchOrganizationList,
  payload: list,
});

export const searchOrganization = (text: string): SearchOrganization => ({
  type: ActionType.SearchOrganization,
  payload: text,
});

export const clearSearch = (): ClearSearchOrganization => ({
  type: ActionType.ClearSearchOrganization,
  payload: null,
});