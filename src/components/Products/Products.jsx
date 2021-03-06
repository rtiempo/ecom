import React from 'react';
import { Grid, CssBaseline } from '@material-ui/core';

import Product from './Product/Product';

import useStyles from './styles';



const Products = ({ products }) => {
    const classes = useStyles();

    return (    
        <main className={classes.content} >
            <div className={classes.toolbar} />
            <CssBaseline />
            <Grid container justify="left" spacing={1}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} >
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;