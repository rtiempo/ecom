import React, { useState, useEffect } from 'react';
import { Typography, Grid, Paper, Button, CircularProgress, Box, CssBaseline } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { commerce } from '../../../lib/commerce';

import useStyles from './styles';

const ProductPage = ({ onAddToCart }) => {
    const classes = useStyles();
    const history = useHistory();
    const [product, setProduct] = useState(null);

    const fetchProduct = async (productId) => {
        const singleProduct  = await commerce.products.retrieve(productId);
        
        setProduct(singleProduct);
    }

    useEffect(() => {
        if (history.location.state) fetchProduct(history.location.state.productId);
    }, [history.location.state]);


    let ProductFetched = () => (product != null) ? (
        <>
            <CssBaseline />
            <Box style={{ margin: 'auto' }} width="75%" sx={{ flexGrow: 1 }}>
                <Grid container justify="center" spacing={5}>
                    <Grid item xs={12} md={8}>
                        <Paper elevation={0} className={classes.paper}><img src={product.media.source} alt="product_image" width="100%" height="auto" /></Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={0} className={classes.paper}>
                            <br />
                            <Typography variant="h5" gutterBottom>
                                {product.name}
                            </Typography>
                            <br />
                            <Typography variant="h5" color="secondary" gutterBottom>
                                {product.price.formatted_with_symbol}
                            </Typography>
                            <br />
                            <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body1" color="textSecondary" gutterBottom />
                            <br />
                            <Button style={{ width: "100%", height: "50px" }} type="button" variant="contained" color="primary" startIcon={<AddShoppingCart />} onClick={() => onAddToCart(product.id, 1)}>
                                Add To Cart                                
                            </Button>                            
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>
    ) : (
        <div>
            <CircularProgress />
        </div>
    );

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
                <ProductFetched />
        </main>
    )
}

export default ProductPage
