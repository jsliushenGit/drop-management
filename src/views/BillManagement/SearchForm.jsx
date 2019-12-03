import React from 'react'
import { Form, Select, Button } from 'antd';
import axios from 'axios'

const { Option } = Select

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      typeOptions: [],
      selectType: ''
    }
  }

  handleChange = (value) => {
    this.setState({
      selectType: value
    })
  }

  componentDidMount() {
    this.props.form.validateFields();
    axios.get('/type/list').then(res => {
      this.setState({
        typeOptions: res.data.data
      })
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(this.state.selectType)
      }
    });
  }

  render() {
    const { getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const typeError = isFieldTouched('type') && getFieldError('type');

    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item validateStatus={typeError ? 'error' : ''} help={typeError || ''}>
          <Select allowClear={true} style={{ width: 120 }} onChange={this.handleChange}>
            {
              this.state.typeOptions.map((item, index) => {
                return (
                  <Option value={item.value} key={index}>{item.label}</Option>
                )
              })
            }
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            搜索
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedSearchForm = Form.create({ name: 'search_form' })(SearchForm);

export default WrappedSearchForm