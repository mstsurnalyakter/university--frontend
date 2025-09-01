import { Form, Select } from 'antd';
import { Controller } from 'react-hook-form';

type TSelectProps = {
  label: string;
  name: string;
  loading?: boolean;
  options: {
    value: string;
    label: string;
    disabled?: boolean;
  }[];
};

const SelectComponent = ({ label, name, options, loading }: TSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            size="large"
            {...field}
            style={{ width: '100%' }}
            options={options}
            loading={loading}
          />
          {error && <small style={{ color: 'red' }}>{error?.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default SelectComponent;
