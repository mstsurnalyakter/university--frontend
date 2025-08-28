<<<<<<< HEAD
import type { TAcademicSemester, TQueryParam, TResponseRedux } from '../../../types';
=======
>>>>>>> cd39519ee4764f09244dff15cc5a5309dd18ea84
import { baseApi } from '../../api/baseApi';

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllSemesters: build.query({
<<<<<<< HEAD
      query: (arg) => {
         const params = new URLSearchParams();

       if (arg) {
        arg.forEach((item:TQueryParam) => (
          params.append(item.name,item.value as string)
        ));
       }
       console.log("params",params)
        return {
        url: '/academic-semesters',
        method: 'GET',
        params:params
      }
      },
      transformResponse: (res: TResponseRedux<TAcademicSemester[]>) => {
        return {
          data: res?.data,
          meta: res?.meta,
        };
      },
=======
      query: () => ({
        url: '/academic-semesters',
        method: 'GET',
      }),
>>>>>>> cd39519ee4764f09244dff15cc5a5309dd18ea84
    }),
    addAcademicSemester: build.mutation({
      query: (data) => ({
        url: '/academic-semesters/create-academic-semester',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

<<<<<<< HEAD
export const { useGetAllSemestersQuery, useAddAcademicSemesterMutation } =
  academicManagementApi;
=======
export const { useGetAllSemestersQuery,useAddAcademicSemesterMutation } = academicManagementApi;
>>>>>>> cd39519ee4764f09244dff15cc5a5309dd18ea84
