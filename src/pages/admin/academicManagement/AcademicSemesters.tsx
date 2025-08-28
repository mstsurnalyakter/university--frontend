import { useGetAllSemestersQuery } from "../../../redux/features/admin/academinManagement.api";

const AcademicSemesters = () => {
  const {data} = useGetAllSemestersQuery(undefined);

  console.log(data,'academicSemester')
  return (
    <div>AcademicSemesters</div>
  )
}

export default AcademicSemesters