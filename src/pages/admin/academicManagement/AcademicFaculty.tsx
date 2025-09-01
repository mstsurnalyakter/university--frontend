import { useGetAllAcademicFacultiesQuery } from '../../../redux/features/admin/academinManagement.api';

import { Button,Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import type { TAcademicFaculty, TQueryParam } from '../../../types';
import { useState } from 'react';

export type TTableData = Pick<
  TAcademicFaculty,
  'name' 
>;

const AcademicFaculty = () => {
  const [params, setParasm] = useState<TQueryParam[] | undefined>(undefined);
  const {
    data: faculatyData,
    isFetching,
  } = useGetAllAcademicFacultiesQuery(params);
  console.log(faculatyData)
  const tableData = faculatyData?.data?.map(
    ({ _id, name, createdAt, updatedAt }: TAcademicFaculty) => ({
      key: _id,
      name,
      createdAt,
      updatedAt
    
    })
  ) ;

  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      key: 'name',
      dataIndex: 'name',
      showSorterTooltip: { target: 'full-header' },
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
      title:"Action",
      key:'x',
      render:()=>{
        return <Button>Update</Button>
      },
      width:"1%"

    }
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
      filters?.year?.forEach((item) =>
        quearyParams.push({ name: 'year', value: item })
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
      showSorterTooltip={{ target: 'sorter-icon' }}
    />

  );
};

export default AcademicFaculty;
