import { useContext, useEffect } from "react";
import { Paper, Box } from "@mui/material"
import { OrganizationList, OrganizationListHeader } from '../molecules';
import { createOrganizationList } from '../../utils/api';
import { OrganizationsContext } from "../../store/OrganizationContext/context";
import { fetchOrganization } from "../../store/OrganizationContext/reducer";
import './styles.scss';

//Implemented in this level because of molecules should be independet as much as possible
export const OrganizationsList = ()=>{
    const { state, dispatch } = useContext(OrganizationsContext);

    useEffect(()=>{
        dispatch(fetchOrganization(createOrganizationList()))
    },[dispatch]);

    return (
        <Box className="organizationWrap" >
            <Paper elevation={1} className="organizationContainer">
                <OrganizationListHeader />
                <OrganizationList 
                    itemsList={state.filtered ?? state.list}
                />
            </Paper>
        </Box>
    )
}