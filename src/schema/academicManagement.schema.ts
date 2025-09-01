import {z} from "zod";

  export const academicSemestersSchema = z.object({
    name:z.string({
      error:'Please Select a Name'
    }),
    year:z.string({
      error:'Please Select a Year'
    }),
    startMonth:z.string({
      error:'Please Select a Start Month'
    }),
    endMonth:z.string({
      error:'Please Select a End Month'
    }),
  })

  export const academicFacultySchema = z.object({
    name:z.string({
      error:'Please under a Faculty Name'
    })
  })