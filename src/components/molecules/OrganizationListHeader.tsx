import { Typography, Divider, Box, Grid } from "@mui/material"
import { SearchBar, Button } from '../atoms'

type BlockHeaderProps = {

}

export const OrganizationListHeader = ({}:BlockHeaderProps)=>{
    return(
        <Box className="organizationListHeader">
            <Grid container alignItems="center">
                <Grid item paddingRight="20px"><Typography variant="h6" className="organizationListHeaderTitle">All organizations (15)</Typography></Grid>
                <Grid item>
                    <SearchBar 
                        handleSearchClick={()=> console.log('search clicked')} 
                        label="Search organization"
                    />
                </Grid>
                
                <Grid item sx={{"marginLeft": "auto"}}>
                    <Button 
                        variant="contained"
                        onClick={()=>console.log('click')}
                        className="addNewOrgButton"
                    >Add New Organization</Button>
                </Grid>
            </Grid>
            <Divider sx={{margin:'20px 0px'}} />
        </Box>
    )
}