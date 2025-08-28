import type { FieldValues, SubmitHandler } from 'react-hook-form';
import { FormComponent } from '../../../components/form/FormComponent';
import { Button, Col, Flex } from 'antd';
import SelectComponent from '../../../components/form/SelectComponent';
import { semesterOptions } from '../../../constants/semesters';
import { monthOptions, yearOptions } from '../../../constants/global';
import { zodResolver } from '@hookform/resolvers/zod';
import { academicSemestersSchema } from '../../../schema/academicManagement.schema';
import { useAddAcademicSemesterMutation } from '../../../redux/features/admin/academinManagement.api';
import { toast } from 'sonner';
import type { TResponse } from '../../../types/globa';
const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Creating semester...');
    const name = semesterOptions[Number(data?.name) - 1]?.label;
    const semesterData = {
      name,
      code: data?.name,
      year: data?.year,
      startMonth: data?.startMonth,
      endMonth: data?.endMonth,
    };


    try {
      const res = (await addAcademicSemester(semesterData)) as TResponse;
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
          resolver={zodResolver(academicSemestersSchema)}
        >
          <SelectComponent label="Name" name="name" options={semesterOptions} />
          <SelectComponent label="Year" name="year" options={yearOptions} />
          <SelectComponent
            label="Start Month"
            name="startMonth"
            options={monthOptions}
          />
          <SelectComponent
            label="End Month"
            name="endMonth"
            options={monthOptions}
          />
          <Button htmlType="submit">Submit</Button>
        </FormComponent>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
