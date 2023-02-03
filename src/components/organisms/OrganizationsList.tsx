import { Paper, Box } from "@mui/material"
import { OrganizationList, OrganizationListHeader } from '../molecules';
import { createOrganizationList } from '../../utils/api';
import './styles.scss';
const list = createOrganizationList();

export const OrganizationsList = ()=>{
    return (
        <Box className="organizationWrap" >
            <Paper elevation={1} className="organizationContainer">
                <OrganizationListHeader />
                <OrganizationList 
                    itemsList={list}
                />
            </Paper>
        </Box>
    )
}