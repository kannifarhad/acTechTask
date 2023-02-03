import { useMemo } from 'react';
import React, { useReducer } from 'react';
import { OrganizationsContext } from './context';
import { organizationReducer } from './reducer';
import { initalOrganizationState } from './state';
export const OrganizationsContextProvider = ({ children } : {children: JSX.Element}) =>{
    const [state, dispatch] = useReducer(organizationReducer, initalOrganizationState);

    //Wrapping values in useMemo helps us improve performance
    const value = useMemo(()=> ({ 
      state,
      dispatch 
    }),[state, dispatch])
      
    // Wrap the context provider around our component
    return (
        <OrganizationsContext.Provider value={value}>
          {children}
        </OrganizationsContext.Provider>
      )
}