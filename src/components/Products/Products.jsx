import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

import useStyles from './styles';

// const Objects =()=> {
//     const [temp, setTemp] = useState([]);
//     const [products, setProducts] = useState([]);
    
//     async function getProducts(){
//         let response = await fetch('https://fakestoreapi.com/products')
//         let data = await response.json()
//         return data;
//     }

//     useEffect (()=> {
//         getProducts().then((bisagunsa) => {
//             setTemp(bisagunsa);
//         });
//         setProducts(temp);
//         console.log(temp,'test');
//     },[temp, setTemp]);

    

//     return (    
//         <main>
//             <Grid container justify="center" spacing={4}>
//                 {products.map((product) => (
//                     <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
//                         <Product product={product} />
//                         {/* <h1>{products}</h1> */}
//                     </Grid>
//                 ))}
//             </Grid>
//         </main>
//     )

// }


const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return (    
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;