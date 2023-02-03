import { Box, Grid } from "@mui/material"
import {OrganizationCard} from './OrganizationCard'
import { OrganizationType } from '../../types';
import {Button} from '../atoms';

type OrganizationListProps = {
    itemsList:OrganizationType[]
}
export const OrganizationList = ({ itemsList }:OrganizationListProps)=>{
    return(
        <Box>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {itemsList.map(item=><Grid key={item.id} item xs={12} sm={4} md={4} ><OrganizationCard item={item} /> </Grid> )}
            </Grid>

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                className="pagination"
            >
                <Grid item>
                    <Button 
                        variant="contained"
                        onClick={()=>console.log('click')}
                    >
                        Load More
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}