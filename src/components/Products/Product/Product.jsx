import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Product = ({ product }) => {
    const classes = useStyles();

    return (
        <Box height={ 432 } boxShadow={0} >
            <Card className={classes.root} align="left" component={Link} to={{ pathname: "/productPage", state: { productId: product.id } }} style={{ textDecoration: 'none' }}>
                <CardMedia className={classes.media} image={product.media.source} title={product.name} />
                <CardContent style={{ padding: 0, paddingTop: "10px" }} >
                    <Typography align="left" variant="h6" gutterBottom>
                        {product.name}
                    </Typography>                    
                </CardContent>                       
                <Typography style={{  }} align="left" variant="h6" color="secondary" gutterBottom>
                    {product.price.formatted_with_symbol}
                </Typography>
            </Card>
        </Box>
    )
}


export default Product
