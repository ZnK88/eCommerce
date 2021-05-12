import React, { useState } from 'react';

import { useStyles } from './SearchStyles';

import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

const Searchbar = ({ getQuery }) => {
    
    const classes = useStyles();

    const [text, setText] = useState('');

    const onChange = (q) => {
        setText(q);
        getQuery(q);
    }
    
    return (
        <div className={classes.search}>
            <SearchIcon className={classes.icon} />
            <TextField
                placeholder="Rechercher un produit"
                className={classes.input}
                variant="outlined"
                type="text"
                value={text}
                fullWidth
                onChange={(event) => onChange(event.target.value)}
            />
        </div>
    );
}

export default Searchbar;