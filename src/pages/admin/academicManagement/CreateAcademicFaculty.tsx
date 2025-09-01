import type { FieldValues, SubmitHandler } from 'react-hook-form';
import { FormComponent } from '../../../components/form/FormComponent';
import InputComponent from '../../../components/form/InputComponent';
import { zodResolver } from '@hookform/resolvers/zod';
import { academicFacultySchema } from '../../../schema/academicManagement.schema';
import { Button, Col, Flex } from 'antd';
import { useAddAcademicFacultyMutation } from '../../../redux/features/admin/academinManagement.api';
import { toast } from 'sonner';
import type { TResponse } from '../../../types';

const CreateAcademicFaculty = () => {
  const [addAcademicFaculty, result] = useAddAcademicFacultyMutation();
  console.log({ result });
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Creating.....');
    try {
      const res = (await addAcademicFaculty(data)) as TResponse<any>;
      console.log({ res });
      if (res?.error) {
        toast.error(res?.error?.data?.message, { id: toastId });
      } else {
        toast.success(res?.data?.message, { id: toastId });
      }
    } catch (error) {
      toast.error('Something went wrong', { id: toastId });
    }
  };
  return (
    <Flex justify="center" align="center">
      <Col span={24} md={{ span: 12 }} lg={{ span: 6 }}>
        <FormComponent
          onSubmit={onSubmit}
          resolver={zodResolver(academicFacultySchema)}
        >
          <InputComponent type="text" name="name" label="Facult Name:" />
          <Button htmlType="submit">Submit</Button>
        </FormComponent>
      </Col>
    </Flex>
  );
};

export default CreateAcademicFaculty;
