import type { TAcademicSemester, TQueryParam, TResponseRedux } from '../../../types';
import { baseApi } from '../../api/baseApi';

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllSemesters: build.query({
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

export const { useGetAllSemestersQuery, useAddAcademicSemesterMutation } =
  academicManagementApi;
