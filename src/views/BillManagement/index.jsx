import React from 'react'
import SearchForm from './SearchForm'
import { Table } from 'antd'
import axios from 'axios'
import typeMap from './typeMap'
import moment from 'moment'
export default class BillManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      dataSource: [],
      columns: [
        {
          title: '类型',
          dataIndex: 'type',
          key: 'type',
        },
        {
          title: '金额',
          dataIndex: 'money',
          key: 'money',
        },
        {
          title: '日期',
          dataIndex: 'time',
          key: 'time',
        },
        {
          title: '备注',
          dataIndex: 'detail',
          key: 'detail',
        }
      ]
    }
  }

  getBillList = (type = '') => {
    axios.get('/bill/list', { params: { type } }).then(res => {
      if ( res && res.data && res.data.code === 200 && res.data.code ) {
        let dataList = (res.data.data || []).map(item => { 
          item.key = item.id
          item.type = typeMap[item.type]
          item.time = moment(item.time).format('YYYY-MM-DD')
          return item
        })
        this.setState({
          dataSource: dataList
        })
      }
    })
  }

  componentDidMount() {
    this.getBillList()
  }

  render() { 
    return ( 
      <div>
        <SearchForm onSubmit={this.getBillList}></SearchForm>
        <Table dataSource={this.state.dataSource} columns={this.state.columns} />
      </div>
    );
  }
}