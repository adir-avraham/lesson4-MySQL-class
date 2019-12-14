import React from "react";
import axios from "axios";
import OrdersTable from "../orders-table";

const ordersUrl = "http://localhost:4000/getOrders";

export default class Orders extends React.Component<any, any> {
  state = {
    orders: []
  };

  componentDidMount = async () => {
    try {
      const result = await axios.get(ordersUrl);
      this.setState({ orders: result.data[0] });
    } catch {
      console.log("error with orders");
    }
  };


  render() {
      const { orders } = this.state;
      if (!orders.length) return <h2>No data</h2>
      const headers = getHeaders(orders); 
      const data = getTableBody(orders); 
      
      return (
          <div>
              <h1>Orders table</h1>
              <OrdersTable headers={headers} data={data}/>
      </div>
    );
}
}


function getHeaders(data: any) {
    if (!data.length) return;
    const [firstItemInArray] = data;
    return Object.keys(firstItemInArray).map((header: any, index: number) =>  <th key={"th_" + index} scope="col">{header}</th>)
    
}

function getTableBody(data: any) {
    return data.map((dataItem: any, index:number) =>{
        return <tr key={"tr_" + index} >{getTableRow(dataItem)}</tr>
    })
}


function getTableRow(row: any) {
    return Object.entries(row).map(([key, value], index) => {

        return <td key={"td_" + index}> {value} </td>;
    });
}