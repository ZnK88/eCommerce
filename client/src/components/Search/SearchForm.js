import React, { useState } from 'react';
import Axios from 'axios';

import { useStyles } from './SearchStyles';
import Article from '../HomePage/Articles/Article';

import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const SearchForm = () => {
    
    const classes = useStyles();

    const [text, setText] = useState("");
    const [items, setItems] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await Axios.get(`http://localhost:5000/search/${text}`)
        .then(response => {
            setItems(response.data);
        })
        .catch(error => {
            console.log(error);
        });

    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} className={classes.search}>
                <SearchIcon className={classes.icon} />
                <TextField
                    placeholder="Rechercher un produit"
                    className={classes.input}
                    variant="outlined"
                    type="text"
                    value={text}
                    fullWidth
                    onChange={(event) => setText(event.target.value)}
                />
                <Button type="submit" onSubmit={handleSubmit}>
                    <Typography variant="h6" color="secondary">
                        Rechercher
                    </Typography>
                </Button>
            </form>
            <div className={classes.flex}>
                {
                    items.map((item, index) => {
                        return (
                            <Article key={index} item={item} />     
                            )
                        })
                    }
            </div>
        </div>
    );
}

export default SearchForm;