import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, Box, Grid } from '@material-ui/core';
  
import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
    const classes = useStyles();

    return (
        <Box borderBottom={1} boxShadow={0} sx={{ display: 'flex' }} py={2}>
            <Grid container spacing={2}>
                <Grid align="center" item xs={12} md={4}>
                    <img src={item.media.source} alt="product_image" style={{ width: "250px" }} />
                </Grid>
                <Grid item xs={8} md={4}>
                    <Card elevation={0} style={{ backgroundColor: "transparent" }} sx={{ display: "flex" }} >                        
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent>
                                <Typography variant="h6">{item.name}</Typography>                                
                            </CardContent>
                            <CardActions >
                                <div className={classes.buttons}>
                                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                                    <Typography>{item.quantity}</Typography>
                                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                                </div>
                                <Button type="button" color="secondary" onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
                            </CardActions>
                        </Box>                        
                    </Card>
                </Grid>   
                <Grid item xs={4} md={4}>
                    <br />
                    <Typography align="right" variant="h6" color="secondary">{item.line_total.formatted_with_symbol}</Typography>
                </Grid>             
            </Grid>       
        </Box>
    )
}

export default CartItem
