import React, { useState } from 'react';
import Axios from 'axios';

import { useStyles } from './FilterButtonStyles';
import Article from '../Articles/Article';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

const FilterButton = () => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [products, setProducts] = useState([]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleAscName = async () => {
        setAnchorEl(null);
        const result = await Axios.get("http://localhost:5000/filtres/A-Z");
        setProducts(result.data);
    };

    const handleDescName = async () => {
        setAnchorEl(null);
        const result = await Axios.get("http://localhost:5000/filtres/Z-A");
        setProducts(result.data);
    };

    const handleAscPrice = async () => {
        setAnchorEl(null);
        const result = await Axios.get("http://localhost:5000/filtres/prix-asc");
        setProducts(result.data);
    };

    const handleDescPrice = async () => {
        setAnchorEl(null);
        const result = await Axios.get("http://localhost:5000/filtres/prix-desc");
        setProducts(result.data);
    };

    const handleAscCat = async () => {
        setAnchorEl(null);
        const result = await Axios.get("http://localhost:5000/filtres/categorie-A-Z");
        setProducts(result.data);
    };

    const handleDescCat = async () => {
        setAnchorEl(null);
        const result = await Axios.get("http://localhost:5000/filtres/prix-desc");
        setProducts(result.data);
    };

    const handleDisable = async () => {
        setAnchorEl(null);
        setProducts([]);
    }

    return (
        <div>
            <Button onClick={handleClick} className={classes.button}>
                <Typography variant="h6" color="primary">
                    Filtrer par
                </Typography>
            </Button>
            <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)}>
                <MenuItem onClick={handleDisable}>Effacer le filtre</MenuItem>
                <MenuItem onClick={handleAscName}>Nom A-Z</MenuItem>
                <MenuItem onClick={handleDescName}>Nom Z-A</MenuItem>
                <MenuItem onClick={handleAscPrice}>Prix croissant</MenuItem>
                <MenuItem onClick={handleDescPrice}>Prix décroissant</MenuItem>
                <MenuItem onClick={handleAscCat}>Catégorie A-Z</MenuItem>
                <MenuItem onClick={handleDescCat}>Catégorie Z-A</MenuItem>
            </Menu>
            <div className={classes.flex}>
                {
                products.map((item, index) => {
                    return (
                        <Article key={index} item={item} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default FilterButton;