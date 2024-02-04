import { AutoComplete, Button, Form, Input,Select } from 'antd';
import  carsMarks from '../../makes.json'

const FormSection: React.FC = () => {
 const rentalCoast=[30,40,50,60,70,80,90,100,110,120]
  const [form] = Form.useForm();
 
  return (
    <Form

      layout={'inline'}
      form={form}
      style={{ justifyContent:'center',marginBottom:'50px' }}
    >
      <Form.Item colon={false}
      label="Car Brand" >
        <AutoComplete placeholder="Enter the text" options={carsMarks.map(item => ({
        value: item,
        label: item,
      }))}/>
      </Form.Item>
      <Form.Item colon={false}
      label="Price/1 hour">
        <Select placeholder="To" options={rentalCoast.map(item=>( { value: item,
        label: item}))}/>
      </Form.Item>
      <Form.Item colon={false}
      label="Сar mileage / km">
        <Input placeholder="From" />
      </Form.Item> 
       <Form.Item >
        <Input placeholder="To" />
      </Form.Item>
      <Form.Item >
        <Button type="primary">Search</Button>
      </Form.Item>
    </Form>
  );
};

export default FormSection;