import React,{ Component } from 'react';
import classes from './App.module.css';
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails';
import Topbar from './Topbar';
import ProductData from './ProductData';

class App extends Component {
  state ={
    productData : ProductData
  }


  render(){
    return (
      <div className="App">      
          <Topbar/>
        <div className={classes.MainContainer}>
          <ProductPreview/>
          <ProductDetails data={this.state.productData}/>
        </div>
      </div>
    );
}
}

export default App;
