import { z } from 'zod';

export const studentSchema = z.object({
  // password: z.string().min(6, 'Password is required'),
  name: z.object({
    firstName: z.string(),
    middleName: z.string(),
    lastName: z.string(),
  }),
  gender: z.enum(['male', 'female', 'other']),
  // dateOfBirth: z.date(),
  email: z.string().email(),
  contactNo: z.string(),
  emergencyContactNo: z.string(),
  bloogGroup: z.string(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: z.object({
    fatherName: z.string(),
    fatherOccupation: z.string(),
    fatherContactNo: z.string(),
    motherName: z.string(),
    motherOccupation: z.string(),
    motherContactNo: z.string(),
  }),
  localGuardian: z.object({
    name: z.string(),
    occupation: z.string(),
    contactNo: z.string(),
    address: z.string(),
  }),
  admissionSemester: z.string(),
  academicDepartment: z.string(),
});