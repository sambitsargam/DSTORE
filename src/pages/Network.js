import React, { Component } from 'react';
import axios from 'axios';
import {
  Modal,
  Input,
  Row,
  Checkbox,
  Button,
  Text,
  Loading,
  Textarea,
} from "@nextui-org/react";
import ReactTable from "react-table"; 
import 'react-table/react-table.css';

export default class Network extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      loading:true
    }
  }
  async getUsersDatas(){
    const resp = await axios.get('https://api-v2.blockpour.com/api/stats/networks/historical/ethereum?days=10')
    console.log(resp.data.data)
    this.setState({loading:false, users: resp.data.data})
  }

  componentDidMount(){
    this.getUsersDatas()
  }
  render() {
    const columns = [{  
      Header: 'Date',  
      accessor: 'date',
     }
     ,{  
      Header: 'Total Volume',  
      accessor: 'volume_usd' ,
      }
     
     ,{  
     Header: 'Trade Count',  
     accessor: 'trade_count' ,
     }
  ]
    return (
      <div>
         <Button color="gradient" className="mt-6">
      <center  >network historical statistics ...............</center>
      </Button>
      <ReactTable  
      data={this.state.users}  
      columns={columns}  
      
   />
   </div>
    )
  }
}

