import type { FieldValues, SubmitHandler } from 'react-hook-form';
import { FormComponent } from '../../../components/form/FormComponent';
import { Button, Col, Flex } from 'antd';
import SelectComponent from '../../../components/form/SelectComponent';
import { semesterOptions } from '../../../constants/semesters';
import { monthOptions, yearOptions } from '../../../constants/global';
import { zodResolver } from '@hookform/resolvers/zod';
import { academicSemestersSchema } from '../../../schema/academicManagement.schema';
const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const name = semesterOptions[Number(data?.name) - 1]?.label;
    const semesterData = {
      name,
      code: data?.name,
      year: data?.year,
      startMonth: data?.startMonth,
      endMonth: data?.endMonth,
    };

    console.log(semesterData);
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
