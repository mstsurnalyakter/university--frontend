import { Form } from 'antd';
import Input from 'antd/es/input/Input';
import { Controller } from 'react-hook-form';

type TInput = {
  name: string;
  type: string;
  label?: string;
};

const InputComponent = ({ type, name, label }: TInput) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Input size="large" {...field} type={type} id={name} />
            {error && <small style={{ color: 'red' }}>{error?.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default InputComponent;
