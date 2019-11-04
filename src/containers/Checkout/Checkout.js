import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import {Route} from 'react-router-dom'
import ContactData from './ContactData/ContactData'
import {connect} from 'react-redux'

class Checkout extends Component {
    //removed after redux was added
    // state= {
    //     ingredients: null,
    //     totalPrice: 0,
    // }

    // componentWillMount() {
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price = 0;

    //     for(let param of query.entries()){
    //         if(param[0] === 'price'){
    //             price = param[1]
    //         }
    //         else{
    //             ingredients[param[0]] = +param[1]
    //         }
            
    //     }
    //     this.setState({ingredients: ingredients, totalPrice: price})
    // }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('checkout/contact-data')
    }

    render(){
        return(
            <div>
                <CheckoutSummary 
                ingredients={this.props.ings}
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler}/>
                <Route 
                path={this.props.match.path + '/contact-data'} 
                component={ContactData}/>
            </div>  
        )
    }
}

const mapStateToProps = state => {
    return{
        ings: state.ingredients,
    }
}

//mapState always has to be first argument, dispatch second argument; if
//there is no mapState method enter the argument as 'null'

export default connect(mapStateToProps)(Checkout);