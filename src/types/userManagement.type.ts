export type TStudent ={
  password: string
  student: TStudentPersonalData
}

export type TStudentPersonalData = {
  name: Name
  gender: string
  dateOfBirth: string
  email: string
  contactNo: string
  emergencyContactNo: string
  bloogGroup: string
  presentAddress: string
  permanentAddress: string
  guardian: Guardian
  localGuardian: LocalGuardian
  admissionSemester: string
  academicDepartment: string
}

export type Name = {
  firstName: string
  middleName: string
  lastName: string
}

export type Guardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}

export type LocalGuardian = {
  name: string
  occupation: string
  contactNo: string
  address: string
}