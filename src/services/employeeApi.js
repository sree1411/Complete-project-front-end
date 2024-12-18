import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const employeeApi = createApi({
  reducerPath: 'employeeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/employee' }),
  endpoints: (builder) => ({
    getAllEmployee: builder.query({
      query: () => ``,
    }),
    getAddemployee:builder.mutation({
        query: (emp) => ({
            url: ``,
            method: 'POST',
            body: emp,
          }),
    }),
    deleteEmployee:builder.mutation({
        query: (id) => ({
            url: `/${id}`,
            method: 'DELETE',
          }),
    
    }),
    updateEmployee:builder.mutation({
        query: ({id,emp}) => ({
            url: `/${id}`,
            method: 'PUT',
            body: emp
          }), 
    }),

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllEmployeeQuery, useGetAddemployeeMutation, useDeleteEmployeeMutation, useUpdateEmployeeMutation } = employeeApi;

