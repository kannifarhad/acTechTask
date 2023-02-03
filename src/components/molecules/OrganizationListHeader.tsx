import {memo, useContext} from 'react';
import { Typography, Divider, Box, Grid } from "@mui/material"
import { SearchBar, Button } from '../atoms'
import { OrganizationsContext } from "../../store/OrganizationContext/context";
import { addOrganization, searchOrganization, clearSearch } from "../../store/OrganizationContext/reducer";
import { createOrganization } from '../../utils/api';

export const OrganizationListHeaderComponent = ()=>{
    const { state, dispatch } = useContext(OrganizationsContext);
    const amountOfOrganizations = state.list.length;

    const handleAddOrganization = async()=>{
        const org = createOrganization();
        dispatch(addOrganization(org));
    }
    const handleSearchOrganization = (name:string):void=>{
        dispatch(name === '' ? clearSearch(): searchOrganization(name));
    }
    return(
        <Box className="organizationListHeader">
            <Grid container alignItems="center">
                <Grid item paddingRight="20px"><Typography variant="h6" className="organizationListHeaderTitle">All organizations ({amountOfOrganizations})</Typography></Grid>
                <Grid item>
                    <SearchBar 
                        onSearch={handleSearchOrganization} 
                        label="Search organization"
                    />
                </Grid>
                
                <Grid item sx={{"marginLeft": "auto"}}>
                    <Button 
                        variant="contained"
                        onClick={()=>handleAddOrganization()}
                        className="addNewOrgButton"
                    >Add New Organization</Button>
                </Grid>
            </Grid>
            <Divider sx={{margin:'20px 0px'}} />
        </Box>
    )
}

export const OrganizationListHeader = memo(OrganizationListHeaderComponent);