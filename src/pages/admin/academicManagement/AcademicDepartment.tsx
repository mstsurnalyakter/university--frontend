import { useGetAllAcademicDepartmentQuery } from '../../../redux/features/admin/academinManagement.api';

import { Button, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import type {
  TAcademicDepartment,
  TAcademicSemester,
  TQueryParam,
} from '../../../types';
import { useState } from 'react';

export type TTableData = Pick<
  TAcademicSemester,
  'name' | 'createdAt' | 'updatedAt' 
>;

const AcademicDepartment = () => {
  const [params, setParasm] = useState<TQueryParam[] | undefined>(undefined);
  const { data: department, isFetching } =
    useGetAllAcademicDepartmentQuery(params);
  console.log({ department });
  const tableData = department?.data?.map(
    ({ _id, name, createdAt, updatedAt }: TAcademicDepartment) => ({
      key: _id,
      name,
      createdAt,
      updatedAt,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title:"Created At",
      key:"createdAt",
     dataIndex:"createdAt",
    },
    {
      title:"Updated At",
      key:"updatedAt",
     dataIndex:"updatedAt",
    },
    {
      title: 'Action',
      key: 'x',
      render: () => {
        return <Button>Update</Button>;
      },
      width: '1%',
    },
  ];

  const onChange: TableProps<TTableData>['onChange'] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === 'filter') {
      const quearyParams: TQueryParam[] = [];
      filters?.name?.forEach((item) =>
        quearyParams.push({ name: 'name', value: item })
      );
      setParasm(quearyParams);
    }
  };

  return (
    <Table<TTableData>
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      pagination={false}
    />
  );
};

export default AcademicDepartment;
