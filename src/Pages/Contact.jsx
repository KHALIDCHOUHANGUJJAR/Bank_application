import { Form, Input, Button, Row, Col, message } from 'antd';

const ContactUs = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("Submitted Values:", values);
    message.success("Your message has been sent!");
    form.resetFields();
  };

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Contact Us</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        style={{ backgroundColor: '#f5f5f5', padding: '30px', borderRadius: '8px'  }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' }
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label="Account Number"
          name="Account Number"
          rules={[{ required: true, message: 'Please enter a Account Number' }]}
        >
          <Input placeholder="00XXX00XX" type='number' />
        </Form.Item>
        <Form.Item
          label="Subject"
          name="subject"
          rules={[{ required: true, message: 'Please enter a subject' }]}
        >
          <Input placeholder="Enter the subject" />
        </Form.Item>

        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: 'Please enter your message' }]}
        >
          <Input.TextArea rows={4} placeholder="Enter your message" />
        </Form.Item>

        <Form.Item>
          <Row justify="center">
            <Col>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactUs;
