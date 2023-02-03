import { InputAdornment , FormControl , OutlinedInput, InputLabel, IconButton } from "@mui/material"
import { Search } from '@mui/icons-material';

type SearchBarProps = {
    handleSearchClick:()=>void,
    label:string
}

export const SearchBar = ({ handleSearchClick, label }:SearchBarProps)=>{
    return(
        <FormControl variant="outlined" size="small" className="searchBar">
            <InputLabel>{label}</InputLabel>
            <OutlinedInput
                type='text'
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleSearchClick}
                            edge="end"
                        >
                            <Search />
                        </IconButton>
                    </InputAdornment>
                }
                label={label}
            />
      </FormControl>
    )
}