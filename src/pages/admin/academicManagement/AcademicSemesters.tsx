import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi"


const AcademicSemesters = () => {
  const {data} = useGetAllSemestersQuery(undefined);

  console.log(data,'academicSemester')
  return (
    <div>AcademicSemesters</div>
  )
}

export default AcademicSemesters