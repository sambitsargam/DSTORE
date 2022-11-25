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

export default class Pool extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      loading:true
    }
  }
  async getUsersData(){
    const res = await axios.get('https://api-v2.blockpour.com/api/stats/pools?sort=volume_usd&network=ethereum&limit=25')
    console.log(res.data.data)
    this.setState({loading:false, users: res.data.data})
  }

  componentDidMount(){
    this.getUsersData()
  }
  render() {
    const columns = [{  
      Header: 'Poll Name',  
      accessor: 'pool_name',
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
      <center  >Pool Statistics(all exchanges top 25 high amount of usd pool details are showing)...............</center>
      </Button>
      <ReactTable  
      data={this.state.users}  
      columns={columns}  
      
   />
   </div>
    )
  }
}

