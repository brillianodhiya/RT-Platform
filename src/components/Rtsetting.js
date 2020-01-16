import React, { Component } from "react";
import { Form, Input, Tooltip, Icon, Button } from "antd";

class Rtsetting extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Password yang di isikan tidak sesuai!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="Nama RT">
          {getFieldDecorator("namart", {
            rules: [
              {
                required: true,
                message: "Tambahkan Nama Ketua RT!",
                whitespace: true,
                value: "Imam Mujiono"
              }
            ],
            initialValue: "Imam Mujiono"
          })(<Input onChange={e => console.log(e.target.value)} />)}
        </Form.Item>
        <Form.Item label="Nomor Hp">
          {getFieldDecorator("nomorhp", {
            rules: [{ required: true, message: "Isikan nomor hp!" }]
          })(<Input type="number" />)}
        </Form.Item>
        <Form.Item label="Alamat RT">
          {getFieldDecorator("alamat", {
            rules: [{ required: true, message: "Isikan alamat RT!" }]
          })(<Input.TextArea />)}
        </Form.Item>
        <Form.Item
          label={
            <span>
              Username&nbsp;
              <Tooltip title="Nama Panggilan Digunakan Untuk Login juga!">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator("nickname", {
            rules: [
              {
                required: true,
                message: "Tambahkan Nama Panggilan!",
                whitespace: true
              }
            ],
            initialValue: "Imam"
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Isi Password Anda!"
              },
              {
                validator: this.validateToNextPassword
              }
            ],
            initialValue: "imammujiono"
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="Konfirmasi Password" hasFeedback>
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "Isikan Kembali Password!"
              },
              {
                validator: this.compareToFirstPassword
              }
            ]
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Simpan
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const CreateForm = Form.create({ name: "Setting RT" })(Rtsetting);

export default CreateForm;
