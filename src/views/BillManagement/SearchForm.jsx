import React from 'react'
import { Form, Select, Button } from 'antd';
const { Option } = Select

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

class SearchForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const typeError = isFieldTouched('type') && getFieldError('type');

    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item validateStatus={typeError ? 'error' : ''} help={typeError || ''}>
          {getFieldDecorator('type', {
            rules: [{ required: true, message: 'Please input your type!' }],
          })(
            <Select style={{ width: 120 }} onChange={handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          )}
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