import { Card, CardHeader, Avatar, CardContent, Typography, Divider, Grid, List, ListItem, Tooltip, TextField, Box  } from "@mui/material"
import { memo } from "react";
import { OrganizationType, OrganizationLisenseInfo } from '../../types';
import VerticonMenu, { VerticonMenuItemType } from '../atoms/VerticonMenu';
import { Edit, SubdirectoryArrowRight, Block } from '@mui/icons-material';

type OrganizationCardProps = {
    item:OrganizationType
}

export const OrganizationCardComponent = ({item}:OrganizationCardProps )=>{
    const menuItems:VerticonMenuItemType[] = [
        {
            name:'Edit',
            icon :<Edit fontSize="small"  />,
            onClick:()=> console.log('Edit clicked'),
        },
        {
            name:'Go to Organization',
            icon :<SubdirectoryArrowRight  fontSize="small"  />,
            onClick:()=> console.log('Go to Organization clicked'),
        },
        {
            name:'Delete Organization',
            icon :<Block  fontSize="small"  />,
            onClick:()=> console.log('Delete Organization clicked'),
        }
    ];

    return(
        <Card className="organizationCard">
            <CardHeader 
                className="organizationCardHead"
                avatar={<Avatar src={item.image} />}
                action={<VerticonMenu menuItems={menuItems} />}
                title={<Typography className="organizationName" variant="h6">{item.name}</Typography>}
            />
            <Divider sx={{margin:'0px 15px'}} />

            <CardContent className="organizationCardContent" >
                <Typography variant="subtitle1" className="contentTitle">Licenses</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <LisenceItemList title="Tracking" info={item.tracking} />
                    </Grid>
                    <Grid item xs={6}>
                        <LisenceItemList title="Protection" info={item.protection} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

type LisenceItemListProps = {
    title:string,
    info: OrganizationLisenseInfo
}

const LisenceItemList = ({title, info}:LisenceItemListProps)=>{
    const inUse = info.inUse.internal + info.inUse.external;
    
    return (
        <>
            <Typography variant="body1" className="contentSubTitle">{title}</Typography>
            <List className="cardContentList">
                <ListItem>
                    <Typography variant="body2" className="listTitle">In Use</Typography>
                    <Box className="listAction">
                        <Tooltip placement="top" title={`Internal: ${info.inUse.internal} | External ${info.inUse.external}`}>
                            <Typography variant="body2" className={inUse > info.assigned ? 'red': 'green'}>{inUse}</Typography>
                        </Tooltip>
                    </Box>
                </ListItem>
                <ListItem>
                    <Typography variant="body2" className="listTitle">Assigned</Typography>
                    <Box className="listAction">
                        <TextField 
                            variant="standard"
                            type="number"
                            fullWidth
                            defaultValue={info.assigned}
                        />
                    </Box>
                </ListItem>
            </List>
        </>
    )
}

export const OrganizationCard = memo(OrganizationCardComponent);