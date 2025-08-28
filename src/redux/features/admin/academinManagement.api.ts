import { baseApi } from '../../api/baseApi';

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllSemesters: build.query({
      query: () => ({
        url: '/academic-semesters',
        method: 'GET',
      }),
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

export const { useGetAllSemestersQuery,useAddAcademicSemesterMutation } = academicManagementApi;
