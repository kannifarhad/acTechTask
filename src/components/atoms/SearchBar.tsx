import { useEffect, useState} from 'react';
import { InputAdornment , FormControl , OutlinedInput, InputLabel } from "@mui/material"
import { Search } from '@mui/icons-material';

type SearchBarProps = {
    onSearch:(name:string)=>void,
    label:string
}

export const SearchBar = ({ onSearch, label }:SearchBarProps)=>{
    const [searchText, setSearchText] = useState<null | string>(null);

    useEffect(() => {
        let timeoutId: null | ReturnType<typeof setTimeout> = null;
        if(searchText !== null){
            timeoutId = setTimeout(async () => {
                onSearch(searchText)
            }, 500);
        }
        return () => {
            timeoutId && clearTimeout(timeoutId);
        };
    }, [searchText, onSearch]);

      
    return(
        <FormControl variant="outlined" size="small" className="searchBar">
            <InputLabel>{label}</InputLabel>
            <OutlinedInput
                type='text'
                onChange={(ev) => setSearchText(ev.target.value)}
                endAdornment={
                    <InputAdornment position="end">
                       <Search />
                    </InputAdornment>
                }
                label={label}
            />
      </FormControl>
    )
}