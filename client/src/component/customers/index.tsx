import React from 'react';
import axios from 'axios';
import CustomersList from '../customersList'

const customersUrl = ("http://localhost:4000/getCustomers");

export default class Customers extends React.Component<any, any> {

    state = {
        customers: []
    }

    componentDidMount =  async ()  =>  {
        try{     
            const result = await axios.get(customersUrl);
            this.setState({customers: result.data[0] })
        } catch {
            console.error("some error");
        }
    }
    
    render() {

        return (
            <div>
                <CustomersList customers={this.state.customers}/>    
            </div>
        )
    }  
}


