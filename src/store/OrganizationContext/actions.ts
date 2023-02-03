import { OrganizationType } from './state';

export enum ActionType {
    AddOrganization,
    FetchOrganizationList,
    SearchOrganization,
    ClearSearchOrganization
}

export interface AddOrganization {
  type: ActionType.AddOrganization;
  payload: OrganizationType;
}

export interface FetchOrganizationList {
  type: ActionType.FetchOrganizationList;
  payload: OrganizationType[]
}

export interface SearchOrganization {
    type: ActionType.SearchOrganization;
    payload: string
}

export interface ClearSearchOrganization {
  type: ActionType.ClearSearchOrganization;
  payload: null
}

export type OrganizationActions = AddOrganization | FetchOrganizationList | SearchOrganization | ClearSearchOrganization;