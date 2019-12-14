import React from 'react';




export default class Customer extends React.Component<any, any> {
 
    
    render() {
        const { first_name, last_name, address, city, fax_number } = this.props

        return (
            
            <div className="col-sm">
                <div className="card border-dark mb-3 shadow-lg" style={{minWidth: "18rem" ,maxWidth: "18rem"}}>
                    <div className="card-header">{first_name} {last_name}</div>
                    <div className="card-body text-dark">
                    <h5 className="card-title">{address} ,{city}</h5>
                    <p className="card-text">{fax_number}</p>
                    </div>
                </div>      
            </div>
        )
    }
    
}

