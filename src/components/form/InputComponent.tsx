import Input from 'antd/es/input/Input';
import { Controller } from 'react-hook-form';

type TInput = {
  name: string;
  type: string;
  label?: string;
};

const InputComponent = ({ type, name, label }: TInput) => {
  return (
    <div style={{marginBottom:'20px'}}>
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </div>
  );
};

export default InputComponent;
