import { baseApi } from '../../api/baseApi';

const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllSemesters: build.query({
      query: () => ({
        url: '/academic-semesters',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllSemestersQuery } = academicSemesterApi;
