import React from 'react';
import { OrganizationStateType, initalOrganizationState } from './state';
import { OrganizationActions } from './actions';

export const OrganizationsContext = React.createContext<{
  state: OrganizationStateType;
  dispatch: React.Dispatch<OrganizationActions>;
}>({
  state: initalOrganizationState,
  dispatch: () => undefined,
});
