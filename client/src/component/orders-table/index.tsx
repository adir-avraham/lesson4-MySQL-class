import React from "react";

export default class OrdersTable extends React.Component<any, any> {
  
    render() {
  
        const { headers, data } = this.props;
  
        if (!Array.isArray(headers) || !Array.isArray(data))
        return <h2>No data in table</h2>;
    
    return (
        <div className="container-fluied">
  <div className="row">
        <div style={{overflowX:'scroll'}}>
        <table className= "table table-sm table-bordered table-striped table-dark">
            <thead>
                <tr>
                {headers}
                </tr>
            </thead>
            <tbody>
                {data}
            </tbody>
        </table>
        </div>
        </div>
    </div>
    );
  }
}
