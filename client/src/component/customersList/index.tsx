import React from 'react';
import Customer from '../customer'


export default class CustomersList extends React.Component<any, any> {


    render() {
        const { customers } = this.props

        return (
            <div>
                <div className="container mt-3">
                    <div className="row">
                        {customers.map((customer: any) => <Customer key={`customer_${customer.id}`}  {...customer} />)}
                    </div>
                </div>
            </div>
        )
    }
}
