import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ConnectionArgs = {
  readonly limit?: InputMaybe<Scalars['Int']>;
  readonly offset?: InputMaybe<Scalars['Int']>;
};

export type CreateReportInput = {
  readonly link: Scalars['String'];
  readonly name: Scalars['String'];
};

export type CreateRoleInput = {
  readonly name: Scalars['String'];
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly login: TokenResponse;
  readonly logout: OperationStatus;
  readonly refreshToken: TokenResponse;
  readonly reportCreate: Report;
  readonly reportPatch: Report;
  readonly reportRemove: OperationStatus;
  readonly reportsConfigPatch: ReportConfig;
  readonly roleCreate: Role;
  readonly rolePatch: Role;
  readonly roleRemove: OperationStatus;
  readonly roleUpdatePermissions: OperationStatus;
};


export type MutationLoginArgs = {
  input: SignInInput;
};


export type MutationReportCreateArgs = {
  input: CreateReportInput;
};


export type MutationReportPatchArgs = {
  id: Scalars['String'];
  input: PatchReportInput;
};


export type MutationReportRemoveArgs = {
  id: Scalars['String'];
};


export type MutationReportsConfigPatchArgs = {
  input: PatchReportConfigInput;
};


export type MutationRoleCreateArgs = {
  input: CreateRoleInput;
};


export type MutationRolePatchArgs = {
  id: Scalars['String'];
  input: PatchRoleInput;
};


export type MutationRoleRemoveArgs = {
  id: Scalars['String'];
};


export type MutationRoleUpdatePermissionsArgs = {
  input: UpdateRolePermissionsInput;
};

export type OperationStatus = {
  readonly __typename?: 'OperationStatus';
  readonly success: Scalars['Boolean'];
};

export type PatchReportConfigInput = {
  readonly credentials?: InputMaybe<ReportCredentialsInput>;
  readonly iFrames?: InputMaybe<Scalars['Int']>;
};

export type PatchReportInput = {
  readonly link?: InputMaybe<Scalars['String']>;
  readonly name?: InputMaybe<Scalars['String']>;
};

export type PatchRoleInput = {
  readonly name?: InputMaybe<Scalars['String']>;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly getReport: Report;
  readonly getReports: ReportConnection;
  readonly getReportsConfig: ReportConfig;
  readonly getRole: Role;
  readonly getRoles: RoleConnection;
  readonly me: User;
};


export type QueryGetReportArgs = {
  id: Scalars['String'];
};


export type QueryGetReportsArgs = {
  filter?: InputMaybe<ReportFilterInput>;
  pagination?: InputMaybe<ConnectionArgs>;
};


export type QueryGetRoleArgs = {
  id: Scalars['String'];
};


export type QueryGetRolesArgs = {
  filter?: InputMaybe<RoleFilterInput>;
  pagination?: InputMaybe<ConnectionArgs>;
};

/** Report */
export type Report = {
  readonly __typename?: 'Report';
  readonly id: Scalars['String'];
  readonly link: Scalars['String'];
  readonly name: Scalars['String'];
  readonly roles?: Maybe<RoleConnection>;
};


/** Report */
export type ReportRolesArgs = {
  filter?: InputMaybe<RoleFilterInput>;
  pagination?: InputMaybe<ConnectionArgs>;
};

/** ReportConfig */
export type ReportConfig = {
  readonly __typename?: 'ReportConfig';
  readonly credentials?: Maybe<ReportCredentials>;
  readonly iFrames: Scalars['Float'];
};

export type ReportConnection = {
  readonly __typename?: 'ReportConnection';
  readonly edges: ReadonlyArray<ReportEdge>;
  readonly total: Scalars['Int'];
};

/** ReportCredentials */
export type ReportCredentials = {
  readonly __typename?: 'ReportCredentials';
  readonly password: Scalars['String'];
  readonly username: Scalars['String'];
};

export type ReportCredentialsInput = {
  readonly password: Scalars['String'];
  readonly username: Scalars['String'];
};

export type ReportEdge = {
  readonly __typename?: 'ReportEdge';
  /** Used in `before` and `after` args */
  readonly cursor: Scalars['String'];
  readonly node: Report;
};

export type ReportFilterInput = {
  readonly textSearch?: InputMaybe<Scalars['String']>;
};

export type ReportsPermissionsInput = {
  readonly add?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly remove?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly roleId: Scalars['String'];
};

/** Role */
export type Role = {
  readonly __typename?: 'Role';
  readonly id: Scalars['String'];
  readonly name: Scalars['String'];
  readonly reports?: Maybe<ReportConnection>;
};


/** Role */
export type RoleReportsArgs = {
  filter?: InputMaybe<ReportFilterInput>;
  pagination?: InputMaybe<ConnectionArgs>;
};

export type RoleConnection = {
  readonly __typename?: 'RoleConnection';
  readonly edges: ReadonlyArray<RoleEdge>;
  readonly total: Scalars['Int'];
};

export type RoleEdge = {
  readonly __typename?: 'RoleEdge';
  /** Used in `before` and `after` args */
  readonly cursor: Scalars['String'];
  readonly node: Role;
};

export type RoleFilterInput = {
  readonly textSearch?: InputMaybe<Scalars['String']>;
};

export type SignInInput = {
  /** The password for login in clear text. */
  readonly password: Scalars['String'];
  /** The user name for login. */
  readonly username: Scalars['String'];
};

/** Token response view. */
export type TokenResponse = {
  readonly __typename?: 'TokenResponse';
  readonly accessToken: Scalars['String'];
  readonly expiresIn: Scalars['Int'];
};

export type UpdateRolePermissionsInput = {
  readonly reports?: InputMaybe<ReadonlyArray<ReportsPermissionsInput>>;
};

/** User */
export type User = {
  readonly __typename?: 'User';
  readonly email?: Maybe<Scalars['String']>;
  readonly ip?: Maybe<Scalars['String']>;
  readonly isAdmin: Scalars['Boolean'];
  readonly name: Scalars['String'];
  readonly username: Scalars['String'];
};

export type TokenResponseFragment = { readonly __typename?: 'TokenResponse', readonly accessToken: string, readonly expiresIn: number };

export type LoginMutationVariables = Exact<{
  input: SignInInput;
}>;


export type LoginMutation = { readonly login: { readonly __typename?: 'TokenResponse', readonly accessToken: string, readonly expiresIn: number } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { readonly logout: { readonly __typename?: 'OperationStatus', readonly success: boolean } };

export type TokenMutationVariables = Exact<{ [key: string]: never; }>;


export type TokenMutation = { readonly refreshToken: { readonly __typename?: 'TokenResponse', readonly accessToken: string, readonly expiresIn: number } };

export type UserFragment = { readonly __typename?: 'User', readonly isAdmin: boolean, readonly name: string, readonly username: string, readonly email?: string | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { readonly me: { readonly __typename?: 'User', readonly isAdmin: boolean, readonly name: string, readonly username: string, readonly email?: string | null } };

export type ReportFragment = { readonly __typename?: 'Report', readonly id: string, readonly name: string, readonly link: string };

export type GetReportsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetReportsQuery = { readonly getReports: { readonly __typename?: 'ReportConnection', readonly total: number, readonly edges: ReadonlyArray<{ readonly __typename?: 'ReportEdge', readonly cursor: string, readonly node: { readonly __typename?: 'Report', readonly id: string, readonly name: string, readonly link: string } }> } };

export type RoleFragment = { readonly __typename?: 'Role', readonly id: string, readonly name: string };

export type GetRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRolesQuery = { readonly getRoles: { readonly __typename?: 'RoleConnection', readonly total: number, readonly edges: ReadonlyArray<{ readonly __typename?: 'RoleEdge', readonly cursor: string, readonly node: { readonly __typename?: 'Role', readonly id: string, readonly name: string } }> } };

export type GetRoleQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetRoleQuery = { readonly getRole: { readonly __typename?: 'Role', readonly id: string, readonly name: string } };

export const TokenResponseFragmentDoc = gql`
    fragment TokenResponse on TokenResponse {
  accessToken
  expiresIn
}
    `;
export const UserFragmentDoc = gql`
    fragment User on User {
  isAdmin
  name
  username
  email
}
    `;
export const ReportFragmentDoc = gql`
    fragment Report on Report {
  id
  name
  link
}
    `;
export const RoleFragmentDoc = gql`
    fragment Role on Role {
  id
  name
}
    `;
export const LoginDocument = gql`
    mutation login($input: SignInInput!) {
  login(input: $input) {
    ...TokenResponse
  }
}
    ${TokenResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation logout {
  logout {
    success
  }
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const TokenDocument = gql`
    mutation token {
  refreshToken {
    ...TokenResponse
  }
}
    ${TokenResponseFragmentDoc}`;
export type TokenMutationFn = Apollo.MutationFunction<TokenMutation, TokenMutationVariables>;

/**
 * __useTokenMutation__
 *
 * To run a mutation, you first call `useTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tokenMutation, { data, loading, error }] = useTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useTokenMutation(baseOptions?: Apollo.MutationHookOptions<TokenMutation, TokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TokenMutation, TokenMutationVariables>(TokenDocument, options);
      }
export type TokenMutationHookResult = ReturnType<typeof useTokenMutation>;
export type TokenMutationResult = Apollo.MutationResult<TokenMutation>;
export type TokenMutationOptions = Apollo.BaseMutationOptions<TokenMutation, TokenMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const GetReportsDocument = gql`
    query getReports {
  getReports {
    edges {
      cursor
      node {
        ...Report
      }
    }
    total
  }
}
    ${ReportFragmentDoc}`;

/**
 * __useGetReportsQuery__
 *
 * To run a query within a React component, call `useGetReportsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReportsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReportsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetReportsQuery(baseOptions?: Apollo.QueryHookOptions<GetReportsQuery, GetReportsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReportsQuery, GetReportsQueryVariables>(GetReportsDocument, options);
      }
export function useGetReportsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReportsQuery, GetReportsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReportsQuery, GetReportsQueryVariables>(GetReportsDocument, options);
        }
export type GetReportsQueryHookResult = ReturnType<typeof useGetReportsQuery>;
export type GetReportsLazyQueryHookResult = ReturnType<typeof useGetReportsLazyQuery>;
export type GetReportsQueryResult = Apollo.QueryResult<GetReportsQuery, GetReportsQueryVariables>;
export const GetRolesDocument = gql`
    query getRoles {
  getRoles {
    edges {
      cursor
      node {
        ...Role
      }
    }
    total
  }
}
    ${RoleFragmentDoc}`;

/**
 * __useGetRolesQuery__
 *
 * To run a query within a React component, call `useGetRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRolesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRolesQuery(baseOptions?: Apollo.QueryHookOptions<GetRolesQuery, GetRolesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRolesQuery, GetRolesQueryVariables>(GetRolesDocument, options);
      }
export function useGetRolesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRolesQuery, GetRolesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRolesQuery, GetRolesQueryVariables>(GetRolesDocument, options);
        }
export type GetRolesQueryHookResult = ReturnType<typeof useGetRolesQuery>;
export type GetRolesLazyQueryHookResult = ReturnType<typeof useGetRolesLazyQuery>;
export type GetRolesQueryResult = Apollo.QueryResult<GetRolesQuery, GetRolesQueryVariables>;
export const GetRoleDocument = gql`
    query getRole($id: String!) {
  getRole(id: $id) {
    ...Role
  }
}
    ${RoleFragmentDoc}`;

/**
 * __useGetRoleQuery__
 *
 * To run a query within a React component, call `useGetRoleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRoleQuery(baseOptions: Apollo.QueryHookOptions<GetRoleQuery, GetRoleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRoleQuery, GetRoleQueryVariables>(GetRoleDocument, options);
      }
export function useGetRoleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRoleQuery, GetRoleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRoleQuery, GetRoleQueryVariables>(GetRoleDocument, options);
        }
export type GetRoleQueryHookResult = ReturnType<typeof useGetRoleQuery>;
export type GetRoleLazyQueryHookResult = ReturnType<typeof useGetRoleLazyQuery>;
export type GetRoleQueryResult = Apollo.QueryResult<GetRoleQuery, GetRoleQueryVariables>;