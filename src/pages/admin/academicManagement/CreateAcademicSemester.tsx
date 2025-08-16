import type { FieldValues, SubmitHandler } from 'react-hook-form';
import { FormComponent } from '../../../components/form/FormComponent';
import InputComponent from '../../../components/form/InputComponent';
import { Button, Col, Flex, Row } from 'antd';

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <FormComponent onSubmit={onSubmit}>
          <InputComponent type="text" name="name" label="Name:" />
          <InputComponent type="text" name="year" label="Year:" />
          <InputComponent type="text" name="code" label="Code:" />
          <InputComponent type="text" name="startMonth" label="StartMonth" />
          <InputComponent
            type="text"
            name="
          endMonth"
            label="StartMonth"
          />
          <Button htmlType="submit">Submit</Button>
        </FormComponent>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
