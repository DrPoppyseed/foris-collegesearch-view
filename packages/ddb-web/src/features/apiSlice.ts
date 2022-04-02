import { getAuth } from 'firebase/auth'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User, School } from '@/models'

export type SchoolsResponse = {
  totalSchoolsFound: number
  schools: School[]
}

export type SchoolResponse = {
  school: School
}

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_ENDPOINT}`,
    prepareHeaders: async headers => {
      const auth = getAuth()
      const token = await auth.currentUser?.getIdToken(true)
      headers.set('Authorization', `Bearer ${token}`)
      return headers
    },
  }),
  endpoints: builder => ({
    // schools endpoint
    getSchools: builder.query<SchoolsResponse, string>({
      query: (queryParams: string) => `/schools?${queryParams}`,
    }),
    getSchool: builder.query<SchoolResponse, string>({
      query: (ff_name: string) => `/schools/${ff_name}`,
    }),
    getSchoolMajorsQuery: builder.query<School, string>({
      query: (schoolId: string) => `/schools/${schoolId}/majors`,
    }),
    getSchoolsWithFilter: builder.mutation<SchoolsResponse, string>({
      query: (queryParams: string) => `/schools?${queryParams}`,
    }),
    // users endpoint
    authenticateWithEmail: builder.mutation<User, void>({
      query: () => ({
        url: '/users',
        method: 'PUT',
      }),
    }),
    authenticateWithGoogle: builder.mutation<User, void>({
      query: () => ({
        url: '/users',
        method: 'PUT',
        headers: {
          'X-Is-Google-SignIn': 'true',
        },
      }),
    }),
    likeSchool: builder.mutation<User, string>({
      query: (schoolId: string) => ({
        url: `/users/like?ipeds_unitid=${schoolId}`,
        method: 'PUT',
      }),
    }),
    unlikeSchool: builder.mutation<User, string>({
      query: (schoolId: string) => ({
        url: `/users/unlike?ipeds_unitid=${schoolId}`,
        method: 'PUT',
      }),
    }),
  }),
})

export const {
  useGetSchoolsQuery,
  useGetSchoolQuery,
  useGetSchoolsWithFilterMutation,
  useAuthenticateWithEmailMutation,
  useAuthenticateWithGoogleMutation,
  useLikeSchoolMutation,
  useUnlikeSchoolMutation,
} = api

export default api
