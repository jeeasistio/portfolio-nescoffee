import { GraphQLResolveInfo } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type EmailSent = {
  __typename?: 'EmailSent';
  message: Scalars['String'];
};

export type GetProductsQueryArgs = {
  category: Scalars['String'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  sendEmail: EmailSent;
};


export type MutationSendEmailArgs = {
  form: SendEmailArgs;
};

export type Product = {
  __typename?: 'Product';
  _id: Scalars['ID'];
  alt: Scalars['String'];
  available: Scalars['Boolean'];
  category: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
};

export type ProductList = {
  __typename?: 'ProductList';
  category: Scalars['String'];
  products?: Maybe<Array<Product>>;
};

export type ProductName = {
  __typename?: 'ProductName';
  available: Scalars['Boolean'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getProducts?: Maybe<Array<ProductList>>;
  getProductsNames?: Maybe<Array<ProductName>>;
};


export type QueryGetProductsArgs = {
  query: GetProductsQueryArgs;
};

export type SendEmailArgs = {
  email: Scalars['String'];
  message?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  product?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  type: Scalars['String'];
};

export type GetProductsQueryVariables = Exact<{
  query: GetProductsQueryArgs;
}>;


export type GetProductsQuery = { __typename?: 'Query', getProducts?: Array<{ __typename?: 'ProductList', category: string, products?: Array<{ __typename?: 'Product', _id: string, name: string, description: string, image: string, alt: string, price: number, category: string, available: boolean }> | null | undefined }> | null | undefined };

export type GetProductsNamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsNamesQuery = { __typename?: 'Query', getProductsNames?: Array<{ __typename?: 'ProductName', name: string, available: boolean }> | null | undefined };

export type SendEmailMutationVariables = Exact<{
  form: SendEmailArgs;
}>;


export type SendEmailMutation = { __typename?: 'Mutation', sendEmail: { __typename?: 'EmailSent', message: string } };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  EmailSent: ResolverTypeWrapper<EmailSent>;
  GetProductsQueryArgs: GetProductsQueryArgs;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Product: ResolverTypeWrapper<Product>;
  ProductList: ResolverTypeWrapper<ProductList>;
  ProductName: ResolverTypeWrapper<ProductName>;
  Query: ResolverTypeWrapper<{}>;
  SendEmailArgs: SendEmailArgs;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  EmailSent: EmailSent;
  GetProductsQueryArgs: GetProductsQueryArgs;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  Product: Product;
  ProductList: ProductList;
  ProductName: ProductName;
  Query: {};
  SendEmailArgs: SendEmailArgs;
  String: Scalars['String'];
};

export type EmailSentResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailSent'] = ResolversParentTypes['EmailSent']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  sendEmail?: Resolver<ResolversTypes['EmailSent'], ParentType, ContextType, RequireFields<MutationSendEmailArgs, 'form'>>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  alt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  available?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductListResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductList'] = ResolversParentTypes['ProductList']> = {
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  products?: Resolver<Maybe<Array<ResolversTypes['Product']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductName'] = ResolversParentTypes['ProductName']> = {
  available?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getProducts?: Resolver<Maybe<Array<ResolversTypes['ProductList']>>, ParentType, ContextType, RequireFields<QueryGetProductsArgs, 'query'>>;
  getProductsNames?: Resolver<Maybe<Array<ResolversTypes['ProductName']>>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  EmailSent?: EmailSentResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductList?: ProductListResolvers<ContextType>;
  ProductName?: ProductNameResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};



export const GetProductsDocument = gql`
    query GetProducts($query: GetProductsQueryArgs!) {
  getProducts(query: $query) {
    category
    products {
      _id
      name
      description
      image
      alt
      price
      category
      available
    }
  }
}
    `;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export const GetProductsNamesDocument = gql`
    query GetProductsNames {
  getProductsNames {
    name
    available
  }
}
    `;

/**
 * __useGetProductsNamesQuery__
 *
 * To run a query within a React component, call `useGetProductsNamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsNamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsNamesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsNamesQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsNamesQuery, GetProductsNamesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsNamesQuery, GetProductsNamesQueryVariables>(GetProductsNamesDocument, options);
      }
export function useGetProductsNamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsNamesQuery, GetProductsNamesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsNamesQuery, GetProductsNamesQueryVariables>(GetProductsNamesDocument, options);
        }
export type GetProductsNamesQueryHookResult = ReturnType<typeof useGetProductsNamesQuery>;
export type GetProductsNamesLazyQueryHookResult = ReturnType<typeof useGetProductsNamesLazyQuery>;
export type GetProductsNamesQueryResult = Apollo.QueryResult<GetProductsNamesQuery, GetProductsNamesQueryVariables>;
export const SendEmailDocument = gql`
    mutation SendEmail($form: SendEmailArgs!) {
  sendEmail(form: $form) {
    message
  }
}
    `;
export type SendEmailMutationFn = Apollo.MutationFunction<SendEmailMutation, SendEmailMutationVariables>;

/**
 * __useSendEmailMutation__
 *
 * To run a mutation, you first call `useSendEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendEmailMutation, { data, loading, error }] = useSendEmailMutation({
 *   variables: {
 *      form: // value for 'form'
 *   },
 * });
 */
export function useSendEmailMutation(baseOptions?: Apollo.MutationHookOptions<SendEmailMutation, SendEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendEmailMutation, SendEmailMutationVariables>(SendEmailDocument, options);
      }
export type SendEmailMutationHookResult = ReturnType<typeof useSendEmailMutation>;
export type SendEmailMutationResult = Apollo.MutationResult<SendEmailMutation>;
export type SendEmailMutationOptions = Apollo.BaseMutationOptions<SendEmailMutation, SendEmailMutationVariables>;