'use client'
import type { FieldValues, SubmitHandler } from 'react-hook-form';
import { FormComponent } from '../../../components/form/FormComponent';
import { Button, Col, Flex } from 'antd';
import SelectComponent from '../../../components/form/SelectComponent';
import { zodResolver } from '@hookform/resolvers/zod';
import { academicDepartmentSchema } from '../../../schema/academicManagement.schema';
import { useAddAcademicDepartmentMutation, useGetAllAcademicFacultiesQuery } from '../../../redux/features/admin/academinManagement.api';
import { toast } from 'sonner';
import type {  TResponse } from '../../../types/globa';
import InputComponent from '../../../components/form/InputComponent';
import type { TAcademicFaculty } from '../../../types';
const CreateAcademicDepartment = () => {
  const [addAcademicSemester] = useAddAcademicDepartmentMutation();
   const {
    data: faculatyData,
    isFetching,
  } = useGetAllAcademicFacultiesQuery(undefined);


  const facultyOptions = faculatyData?.data?.map((faculty:TAcademicFaculty) => ({
    label: faculty.name,
    value: faculty._id,
  }));




  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
   
    const toastId = toast.loading('Creating Department...');
  

    try {
      const res = (await addAcademicSemester(
       data
      )) as TResponse<any>;
      if (res?.error) {
        toast.error(res?.error?.data?.message, { id: toastId });
      } else {
        toast.success(res?.data?.message, { id: toastId });
      }
      console.log(res);
    } catch (error) {
      toast.error('Something went wrong', { id: toastId });
    }
  };

  
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <FormComponent
          onSubmit={onSubmit}
          resolver={zodResolver(academicDepartmentSchema)}
        >
          <InputComponent type="text" name="name" label="Department Name:" />
          <SelectComponent
            label="Faculty Name:"
            name="academicFaculty"
            options={facultyOptions}
            loading={isFetching}
          />
          <Button htmlType="submit">Submit</Button>
        </FormComponent>
      </Col>
    </Flex>
  );
};

export default CreateAcademicDepartment;
