import React from 'react'
import { Container, Typography, Button, Grid, CssBaseline, Paper, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import CartItem from './CartItem/CartItem';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">Your cart is currently empty, 
            <Link to="/" className={classes.link}> start adding some</Link>!
        </Typography>
    );

    const FilledCart = () => (
        <>
            <CssBaseline />
            <Grid container spacing={4} alignItems="flex-start" >
                <Grid item xs={12} md={8}>
                    {cart.line_items.map((item) => (
                        <Grid item xs={12} md={12} key={item.id}>
                            <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                        </Grid>
                    ))}
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={0} style={{ backgroundColor: "transparent" }}>
                        <Typography variant="h4" gutterBottom>Summary</Typography>
                        <br/>
                        <div>                            
                            <Box py={2} borderBottom={1} borderTop={1} style={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography variant="h5" style={{ margin: '0 20px 0 0' }}>Subtotal: </Typography>
                                <Typography variant="h5" gutterBottom style={{ margin: '0 20px 0 0' }}> {cart.subtotal.formatted_with_symbol}</Typography>
                            </Box>                                      
                            <br />                      
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart} >Empty Cart</Button>
                                <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                            </div>
                            <br />
                        </div>
                    </Paper>
                </Grid>
            </Grid>            
        </>
    );

    if(!cart.line_items) return 'Loading ... ';

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h4" gutterBottom>Your Cart</Typography>
            <br />
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
        </Container>
    )
}

export default Cart
