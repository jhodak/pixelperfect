import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  GraphQLBigInt: any;
  GraphQLStringOrFloat: any;
  Hash: any;
  JSON: any;
};

export type Coupons = {
  __typename?: 'Coupons';
  Description?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  Price?: Maybe<Scalars['Float']>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  translations?: Maybe<Array<Maybe<Coupons_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type CouponsTranslationsArgs = {
  filter?: InputMaybe<Coupons_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CouponsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CouponsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Coupons_Aggregated = {
  __typename?: 'Coupons_aggregated';
  avg?: Maybe<Coupons_Aggregated_Fields>;
  avgDistinct?: Maybe<Coupons_Aggregated_Fields>;
  count?: Maybe<Coupons_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Coupons_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Coupons_Aggregated_Fields>;
  min?: Maybe<Coupons_Aggregated_Fields>;
  sum?: Maybe<Coupons_Aggregated_Fields>;
  sumDistinct?: Maybe<Coupons_Aggregated_Fields>;
};

export type Coupons_Aggregated_Count = {
  __typename?: 'Coupons_aggregated_count';
  Description?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['Int']>;
  Price?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  translations?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Coupons_Aggregated_Fields = {
  __typename?: 'Coupons_aggregated_fields';
  Price?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Coupons_Filter = {
  Description?: InputMaybe<String_Filter_Operators>;
  Name?: InputMaybe<String_Filter_Operators>;
  Price?: InputMaybe<Number_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<Coupons_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Coupons_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Coupons_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Coupons_Translations = {
  __typename?: 'Coupons_translations';
  Coupons_id?: Maybe<Coupons>;
  id: Scalars['ID'];
  languages_code?: Maybe<Languages>;
};


export type Coupons_TranslationsCoupons_IdArgs = {
  filter?: InputMaybe<Coupons_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Coupons_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Coupons_Translations_Aggregated = {
  __typename?: 'Coupons_translations_aggregated';
  avg?: Maybe<Coupons_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Coupons_Translations_Aggregated_Fields>;
  count?: Maybe<Coupons_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Coupons_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Coupons_Translations_Aggregated_Fields>;
  min?: Maybe<Coupons_Translations_Aggregated_Fields>;
  sum?: Maybe<Coupons_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Coupons_Translations_Aggregated_Fields>;
};

export type Coupons_Translations_Aggregated_Count = {
  __typename?: 'Coupons_translations_aggregated_count';
  Coupons_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  languages_code?: Maybe<Scalars['Int']>;
};

export type Coupons_Translations_Aggregated_Fields = {
  __typename?: 'Coupons_translations_aggregated_fields';
  Coupons_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Coupons_Translations_Filter = {
  Coupons_id?: InputMaybe<Coupons_Filter>;
  _and?: InputMaybe<Array<InputMaybe<Coupons_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Coupons_Translations_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  create_Coupons_item?: Maybe<Coupons>;
  create_Coupons_items: Array<Coupons>;
  create_Coupons_translations_item?: Maybe<Coupons_Translations>;
  create_Coupons_translations_items: Array<Coupons_Translations>;
  create_categories_item?: Maybe<Categories>;
  create_categories_items: Array<Categories>;
  create_categs_categs_item?: Maybe<Categs_Categs>;
  create_categs_categs_items: Array<Categs_Categs>;
  create_categs_item?: Maybe<Categs>;
  create_categs_items: Array<Categs>;
  create_languages_item?: Maybe<Languages>;
  create_languages_items: Array<Languages>;
  create_pages_item?: Maybe<Pages>;
  create_pages_items: Array<Pages>;
  create_pages_translations_item?: Maybe<Pages_Translations>;
  create_pages_translations_items: Array<Pages_Translations>;
  create_prods_categs_1_item?: Maybe<Prods_Categs_1>;
  create_prods_categs_1_items: Array<Prods_Categs_1>;
  create_prods_categs_item?: Maybe<Prods_Categs>;
  create_prods_categs_items: Array<Prods_Categs>;
  create_prods_item?: Maybe<Prods>;
  create_prods_items: Array<Prods>;
  create_products_categories_item?: Maybe<Products_Categories>;
  create_products_categories_items: Array<Products_Categories>;
  create_products_item?: Maybe<Products>;
  create_products_items: Array<Products>;
  create_products_translations_item?: Maybe<Products_Translations>;
  create_products_translations_items: Array<Products_Translations>;
  delete_Coupons_item?: Maybe<Delete_One>;
  delete_Coupons_items?: Maybe<Delete_Many>;
  delete_Coupons_translations_item?: Maybe<Delete_One>;
  delete_Coupons_translations_items?: Maybe<Delete_Many>;
  delete_categories_item?: Maybe<Delete_One>;
  delete_categories_items?: Maybe<Delete_Many>;
  delete_categs_categs_item?: Maybe<Delete_One>;
  delete_categs_categs_items?: Maybe<Delete_Many>;
  delete_categs_item?: Maybe<Delete_One>;
  delete_categs_items?: Maybe<Delete_Many>;
  delete_languages_item?: Maybe<Delete_One>;
  delete_languages_items?: Maybe<Delete_Many>;
  delete_pages_item?: Maybe<Delete_One>;
  delete_pages_items?: Maybe<Delete_Many>;
  delete_pages_translations_item?: Maybe<Delete_One>;
  delete_pages_translations_items?: Maybe<Delete_Many>;
  delete_prods_categs_1_item?: Maybe<Delete_One>;
  delete_prods_categs_1_items?: Maybe<Delete_Many>;
  delete_prods_categs_item?: Maybe<Delete_One>;
  delete_prods_categs_items?: Maybe<Delete_Many>;
  delete_prods_item?: Maybe<Delete_One>;
  delete_prods_items?: Maybe<Delete_Many>;
  delete_products_categories_item?: Maybe<Delete_One>;
  delete_products_categories_items?: Maybe<Delete_Many>;
  delete_products_item?: Maybe<Delete_One>;
  delete_products_items?: Maybe<Delete_Many>;
  delete_products_translations_item?: Maybe<Delete_One>;
  delete_products_translations_items?: Maybe<Delete_Many>;
  update_Coupons_batch: Array<Coupons>;
  update_Coupons_item?: Maybe<Coupons>;
  update_Coupons_items: Array<Coupons>;
  update_Coupons_translations_batch: Array<Coupons_Translations>;
  update_Coupons_translations_item?: Maybe<Coupons_Translations>;
  update_Coupons_translations_items: Array<Coupons_Translations>;
  update_categories_batch: Array<Categories>;
  update_categories_item?: Maybe<Categories>;
  update_categories_items: Array<Categories>;
  update_categs_batch: Array<Categs>;
  update_categs_categs_batch: Array<Categs_Categs>;
  update_categs_categs_item?: Maybe<Categs_Categs>;
  update_categs_categs_items: Array<Categs_Categs>;
  update_categs_item?: Maybe<Categs>;
  update_categs_items: Array<Categs>;
  update_languages_batch: Array<Languages>;
  update_languages_item?: Maybe<Languages>;
  update_languages_items: Array<Languages>;
  update_pages_batch: Array<Pages>;
  update_pages_item?: Maybe<Pages>;
  update_pages_items: Array<Pages>;
  update_pages_translations_batch: Array<Pages_Translations>;
  update_pages_translations_item?: Maybe<Pages_Translations>;
  update_pages_translations_items: Array<Pages_Translations>;
  update_prods_batch: Array<Prods>;
  update_prods_categs_1_batch: Array<Prods_Categs_1>;
  update_prods_categs_1_item?: Maybe<Prods_Categs_1>;
  update_prods_categs_1_items: Array<Prods_Categs_1>;
  update_prods_categs_batch: Array<Prods_Categs>;
  update_prods_categs_item?: Maybe<Prods_Categs>;
  update_prods_categs_items: Array<Prods_Categs>;
  update_prods_item?: Maybe<Prods>;
  update_prods_items: Array<Prods>;
  update_products_batch: Array<Products>;
  update_products_categories_batch: Array<Products_Categories>;
  update_products_categories_item?: Maybe<Products_Categories>;
  update_products_categories_items: Array<Products_Categories>;
  update_products_item?: Maybe<Products>;
  update_products_items: Array<Products>;
  update_products_translations_batch: Array<Products_Translations>;
  update_products_translations_item?: Maybe<Products_Translations>;
  update_products_translations_items: Array<Products_Translations>;
};


export type MutationCreate_Coupons_ItemArgs = {
  data: Create_Coupons_Input;
};


export type MutationCreate_Coupons_ItemsArgs = {
  data?: InputMaybe<Array<Create_Coupons_Input>>;
  filter?: InputMaybe<Coupons_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Coupons_Translations_ItemArgs = {
  data: Create_Coupons_Translations_Input;
};


export type MutationCreate_Coupons_Translations_ItemsArgs = {
  data?: InputMaybe<Array<Create_Coupons_Translations_Input>>;
  filter?: InputMaybe<Coupons_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Categories_ItemArgs = {
  data: Create_Categories_Input;
};


export type MutationCreate_Categories_ItemsArgs = {
  data?: InputMaybe<Array<Create_Categories_Input>>;
  filter?: InputMaybe<Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Categs_Categs_ItemArgs = {
  data: Create_Categs_Categs_Input;
};


export type MutationCreate_Categs_Categs_ItemsArgs = {
  data?: InputMaybe<Array<Create_Categs_Categs_Input>>;
  filter?: InputMaybe<Categs_Categs_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Categs_ItemArgs = {
  data: Create_Categs_Input;
};


export type MutationCreate_Categs_ItemsArgs = {
  data?: InputMaybe<Array<Create_Categs_Input>>;
  filter?: InputMaybe<Categs_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Languages_ItemArgs = {
  data: Create_Languages_Input;
};


export type MutationCreate_Languages_ItemsArgs = {
  data?: InputMaybe<Array<Create_Languages_Input>>;
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Pages_ItemArgs = {
  data: Create_Pages_Input;
};


export type MutationCreate_Pages_ItemsArgs = {
  data?: InputMaybe<Array<Create_Pages_Input>>;
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Pages_Translations_ItemArgs = {
  data: Create_Pages_Translations_Input;
};


export type MutationCreate_Pages_Translations_ItemsArgs = {
  data?: InputMaybe<Array<Create_Pages_Translations_Input>>;
  filter?: InputMaybe<Pages_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Prods_Categs_1_ItemArgs = {
  data: Create_Prods_Categs_1_Input;
};


export type MutationCreate_Prods_Categs_1_ItemsArgs = {
  data?: InputMaybe<Array<Create_Prods_Categs_1_Input>>;
  filter?: InputMaybe<Prods_Categs_1_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Prods_Categs_ItemArgs = {
  data: Create_Prods_Categs_Input;
};


export type MutationCreate_Prods_Categs_ItemsArgs = {
  data?: InputMaybe<Array<Create_Prods_Categs_Input>>;
  filter?: InputMaybe<Prods_Categs_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Prods_ItemArgs = {
  data: Create_Prods_Input;
};


export type MutationCreate_Prods_ItemsArgs = {
  data?: InputMaybe<Array<Create_Prods_Input>>;
  filter?: InputMaybe<Prods_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Products_Categories_ItemArgs = {
  data: Create_Products_Categories_Input;
};


export type MutationCreate_Products_Categories_ItemsArgs = {
  data?: InputMaybe<Array<Create_Products_Categories_Input>>;
  filter?: InputMaybe<Products_Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Products_ItemArgs = {
  data: Create_Products_Input;
};


export type MutationCreate_Products_ItemsArgs = {
  data?: InputMaybe<Array<Create_Products_Input>>;
  filter?: InputMaybe<Products_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Products_Translations_ItemArgs = {
  data: Create_Products_Translations_Input;
};


export type MutationCreate_Products_Translations_ItemsArgs = {
  data?: InputMaybe<Array<Create_Products_Translations_Input>>;
  filter?: InputMaybe<Products_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationDelete_Coupons_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Coupons_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Coupons_Translations_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Coupons_Translations_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Categories_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Categories_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Categs_Categs_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Categs_Categs_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Categs_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Categs_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Languages_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Languages_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Pages_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Pages_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Pages_Translations_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Pages_Translations_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Prods_Categs_1_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Prods_Categs_1_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Prods_Categs_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Prods_Categs_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Prods_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Prods_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Products_Categories_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Products_Categories_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Products_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Products_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Products_Translations_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Products_Translations_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationUpdate_Coupons_BatchArgs = {
  data?: InputMaybe<Array<Update_Coupons_Input>>;
  filter?: InputMaybe<Coupons_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Coupons_ItemArgs = {
  data: Update_Coupons_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Coupons_ItemsArgs = {
  data: Update_Coupons_Input;
  filter?: InputMaybe<Coupons_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Coupons_Translations_BatchArgs = {
  data?: InputMaybe<Array<Update_Coupons_Translations_Input>>;
  filter?: InputMaybe<Coupons_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Coupons_Translations_ItemArgs = {
  data: Update_Coupons_Translations_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Coupons_Translations_ItemsArgs = {
  data: Update_Coupons_Translations_Input;
  filter?: InputMaybe<Coupons_Translations_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Categories_BatchArgs = {
  data?: InputMaybe<Array<Update_Categories_Input>>;
  filter?: InputMaybe<Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Categories_ItemArgs = {
  data: Update_Categories_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Categories_ItemsArgs = {
  data: Update_Categories_Input;
  filter?: InputMaybe<Categories_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Categs_BatchArgs = {
  data?: InputMaybe<Array<Update_Categs_Input>>;
  filter?: InputMaybe<Categs_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Categs_Categs_BatchArgs = {
  data?: InputMaybe<Array<Update_Categs_Categs_Input>>;
  filter?: InputMaybe<Categs_Categs_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Categs_Categs_ItemArgs = {
  data: Update_Categs_Categs_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Categs_Categs_ItemsArgs = {
  data: Update_Categs_Categs_Input;
  filter?: InputMaybe<Categs_Categs_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Categs_ItemArgs = {
  data: Update_Categs_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Categs_ItemsArgs = {
  data: Update_Categs_Input;
  filter?: InputMaybe<Categs_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Languages_BatchArgs = {
  data?: InputMaybe<Array<Update_Languages_Input>>;
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Languages_ItemArgs = {
  data: Update_Languages_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Languages_ItemsArgs = {
  data: Update_Languages_Input;
  filter?: InputMaybe<Languages_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Pages_BatchArgs = {
  data?: InputMaybe<Array<Update_Pages_Input>>;
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Pages_ItemArgs = {
  data: Update_Pages_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Pages_ItemsArgs = {
  data: Update_Pages_Input;
  filter?: InputMaybe<Pages_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Pages_Translations_BatchArgs = {
  data?: InputMaybe<Array<Update_Pages_Translations_Input>>;
  filter?: InputMaybe<Pages_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Pages_Translations_ItemArgs = {
  data: Update_Pages_Translations_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Pages_Translations_ItemsArgs = {
  data: Update_Pages_Translations_Input;
  filter?: InputMaybe<Pages_Translations_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Prods_BatchArgs = {
  data?: InputMaybe<Array<Update_Prods_Input>>;
  filter?: InputMaybe<Prods_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Prods_Categs_1_BatchArgs = {
  data?: InputMaybe<Array<Update_Prods_Categs_1_Input>>;
  filter?: InputMaybe<Prods_Categs_1_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Prods_Categs_1_ItemArgs = {
  data: Update_Prods_Categs_1_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Prods_Categs_1_ItemsArgs = {
  data: Update_Prods_Categs_1_Input;
  filter?: InputMaybe<Prods_Categs_1_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Prods_Categs_BatchArgs = {
  data?: InputMaybe<Array<Update_Prods_Categs_Input>>;
  filter?: InputMaybe<Prods_Categs_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Prods_Categs_ItemArgs = {
  data: Update_Prods_Categs_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Prods_Categs_ItemsArgs = {
  data: Update_Prods_Categs_Input;
  filter?: InputMaybe<Prods_Categs_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Prods_ItemArgs = {
  data: Update_Prods_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Prods_ItemsArgs = {
  data: Update_Prods_Input;
  filter?: InputMaybe<Prods_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Products_BatchArgs = {
  data?: InputMaybe<Array<Update_Products_Input>>;
  filter?: InputMaybe<Products_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Products_Categories_BatchArgs = {
  data?: InputMaybe<Array<Update_Products_Categories_Input>>;
  filter?: InputMaybe<Products_Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Products_Categories_ItemArgs = {
  data: Update_Products_Categories_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Products_Categories_ItemsArgs = {
  data: Update_Products_Categories_Input;
  filter?: InputMaybe<Products_Categories_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Products_ItemArgs = {
  data: Update_Products_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Products_ItemsArgs = {
  data: Update_Products_Input;
  filter?: InputMaybe<Products_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Products_Translations_BatchArgs = {
  data?: InputMaybe<Array<Update_Products_Translations_Input>>;
  filter?: InputMaybe<Products_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Products_Translations_ItemArgs = {
  data: Update_Products_Translations_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Products_Translations_ItemsArgs = {
  data: Update_Products_Translations_Input;
  filter?: InputMaybe<Products_Translations_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  Coupons: Array<Coupons>;
  Coupons_aggregated: Array<Coupons_Aggregated>;
  Coupons_by_id?: Maybe<Coupons>;
  Coupons_translations: Array<Coupons_Translations>;
  Coupons_translations_aggregated: Array<Coupons_Translations_Aggregated>;
  Coupons_translations_by_id?: Maybe<Coupons_Translations>;
  categories: Array<Categories>;
  categories_aggregated: Array<Categories_Aggregated>;
  categories_by_id?: Maybe<Categories>;
  categs: Array<Categs>;
  categs_aggregated: Array<Categs_Aggregated>;
  categs_by_id?: Maybe<Categs>;
  categs_categs: Array<Categs_Categs>;
  categs_categs_aggregated: Array<Categs_Categs_Aggregated>;
  categs_categs_by_id?: Maybe<Categs_Categs>;
  languages: Array<Languages>;
  languages_aggregated: Array<Languages_Aggregated>;
  languages_by_id?: Maybe<Languages>;
  pages: Array<Pages>;
  pages_aggregated: Array<Pages_Aggregated>;
  pages_by_id?: Maybe<Pages>;
  pages_translations: Array<Pages_Translations>;
  pages_translations_aggregated: Array<Pages_Translations_Aggregated>;
  pages_translations_by_id?: Maybe<Pages_Translations>;
  prods: Array<Prods>;
  prods_aggregated: Array<Prods_Aggregated>;
  prods_by_id?: Maybe<Prods>;
  prods_categs: Array<Prods_Categs>;
  prods_categs_1: Array<Prods_Categs_1>;
  prods_categs_1_aggregated: Array<Prods_Categs_1_Aggregated>;
  prods_categs_1_by_id?: Maybe<Prods_Categs_1>;
  prods_categs_aggregated: Array<Prods_Categs_Aggregated>;
  prods_categs_by_id?: Maybe<Prods_Categs>;
  products: Array<Products>;
  products_aggregated: Array<Products_Aggregated>;
  products_by_id?: Maybe<Products>;
  products_categories: Array<Products_Categories>;
  products_categories_aggregated: Array<Products_Categories_Aggregated>;
  products_categories_by_id?: Maybe<Products_Categories>;
  products_translations: Array<Products_Translations>;
  products_translations_aggregated: Array<Products_Translations_Aggregated>;
  products_translations_by_id?: Maybe<Products_Translations>;
};


export type QueryCouponsArgs = {
  filter?: InputMaybe<Coupons_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCoupons_AggregatedArgs = {
  filter?: InputMaybe<Coupons_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCoupons_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryCoupons_TranslationsArgs = {
  filter?: InputMaybe<Coupons_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCoupons_Translations_AggregatedArgs = {
  filter?: InputMaybe<Coupons_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCoupons_Translations_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryCategoriesArgs = {
  filter?: InputMaybe<Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategories_AggregatedArgs = {
  filter?: InputMaybe<Categories_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategories_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryCategsArgs = {
  filter?: InputMaybe<Categs_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategs_AggregatedArgs = {
  filter?: InputMaybe<Categs_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategs_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryCategs_CategsArgs = {
  filter?: InputMaybe<Categs_Categs_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategs_Categs_AggregatedArgs = {
  filter?: InputMaybe<Categs_Categs_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategs_Categs_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryLanguagesArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryLanguages_AggregatedArgs = {
  filter?: InputMaybe<Languages_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryLanguages_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryPagesArgs = {
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPages_AggregatedArgs = {
  filter?: InputMaybe<Pages_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPages_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryPages_TranslationsArgs = {
  filter?: InputMaybe<Pages_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPages_Translations_AggregatedArgs = {
  filter?: InputMaybe<Pages_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPages_Translations_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryProdsArgs = {
  filter?: InputMaybe<Prods_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProds_AggregatedArgs = {
  filter?: InputMaybe<Prods_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProds_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryProds_CategsArgs = {
  filter?: InputMaybe<Prods_Categs_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProds_Categs_1Args = {
  filter?: InputMaybe<Prods_Categs_1_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProds_Categs_1_AggregatedArgs = {
  filter?: InputMaybe<Prods_Categs_1_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProds_Categs_1_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryProds_Categs_AggregatedArgs = {
  filter?: InputMaybe<Prods_Categs_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProds_Categs_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryProductsArgs = {
  filter?: InputMaybe<Products_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProducts_AggregatedArgs = {
  filter?: InputMaybe<Products_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProducts_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryProducts_CategoriesArgs = {
  filter?: InputMaybe<Products_Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProducts_Categories_AggregatedArgs = {
  filter?: InputMaybe<Products_Categories_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProducts_Categories_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryProducts_TranslationsArgs = {
  filter?: InputMaybe<Products_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProducts_Translations_AggregatedArgs = {
  filter?: InputMaybe<Products_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProducts_Translations_By_IdArgs = {
  id: Scalars['ID'];
};

export type Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Categories = {
  __typename?: 'categories';
  category?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};

export type Categories_Aggregated = {
  __typename?: 'categories_aggregated';
  avg?: Maybe<Categories_Aggregated_Fields>;
  avgDistinct?: Maybe<Categories_Aggregated_Fields>;
  count?: Maybe<Categories_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Categories_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Categories_Aggregated_Fields>;
  min?: Maybe<Categories_Aggregated_Fields>;
  sum?: Maybe<Categories_Aggregated_Fields>;
  sumDistinct?: Maybe<Categories_Aggregated_Fields>;
};

export type Categories_Aggregated_Count = {
  __typename?: 'categories_aggregated_count';
  category?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
};

export type Categories_Aggregated_Fields = {
  __typename?: 'categories_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Categories_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Categories_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Categories_Filter>>>;
  category?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
};

export type Categs = {
  __typename?: 'categs';
  id: Scalars['ID'];
  newcats?: Maybe<Scalars['JSON']>;
  newcats2?: Maybe<Array<Maybe<Scalars['String']>>>;
  newcats_func?: Maybe<Count_Functions>;
  status?: Maybe<Scalars['String']>;
};

export type Categs_Aggregated = {
  __typename?: 'categs_aggregated';
  avg?: Maybe<Categs_Aggregated_Fields>;
  avgDistinct?: Maybe<Categs_Aggregated_Fields>;
  count?: Maybe<Categs_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Categs_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Categs_Aggregated_Fields>;
  min?: Maybe<Categs_Aggregated_Fields>;
  sum?: Maybe<Categs_Aggregated_Fields>;
  sumDistinct?: Maybe<Categs_Aggregated_Fields>;
};

export type Categs_Aggregated_Count = {
  __typename?: 'categs_aggregated_count';
  id?: Maybe<Scalars['Int']>;
  newcats?: Maybe<Scalars['Int']>;
  newcats2?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
};

export type Categs_Aggregated_Fields = {
  __typename?: 'categs_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Categs_Categs = {
  __typename?: 'categs_categs';
  categs_id?: Maybe<Categs>;
  id: Scalars['ID'];
  related_categs_id?: Maybe<Categs>;
};


export type Categs_CategsCategs_IdArgs = {
  filter?: InputMaybe<Categs_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Categs_CategsRelated_Categs_IdArgs = {
  filter?: InputMaybe<Categs_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Categs_Categs_Aggregated = {
  __typename?: 'categs_categs_aggregated';
  avg?: Maybe<Categs_Categs_Aggregated_Fields>;
  avgDistinct?: Maybe<Categs_Categs_Aggregated_Fields>;
  count?: Maybe<Categs_Categs_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Categs_Categs_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Categs_Categs_Aggregated_Fields>;
  min?: Maybe<Categs_Categs_Aggregated_Fields>;
  sum?: Maybe<Categs_Categs_Aggregated_Fields>;
  sumDistinct?: Maybe<Categs_Categs_Aggregated_Fields>;
};

export type Categs_Categs_Aggregated_Count = {
  __typename?: 'categs_categs_aggregated_count';
  categs_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  related_categs_id?: Maybe<Scalars['Int']>;
};

export type Categs_Categs_Aggregated_Fields = {
  __typename?: 'categs_categs_aggregated_fields';
  categs_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  related_categs_id?: Maybe<Scalars['Float']>;
};

export type Categs_Categs_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Categs_Categs_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Categs_Categs_Filter>>>;
  categs_id?: InputMaybe<Categs_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  related_categs_id?: InputMaybe<Categs_Filter>;
};

export type Categs_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Categs_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Categs_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  newcats?: InputMaybe<String_Filter_Operators>;
  newcats2?: InputMaybe<String_Filter_Operators>;
  newcats_func?: InputMaybe<Count_Function_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']>;
};

export type Create_Coupons_Input = {
  Description?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  Price?: InputMaybe<Scalars['Float']>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_updated?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  sort?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  translations?: InputMaybe<Array<InputMaybe<Create_Coupons_Translations_Input>>>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Coupons_Translations_Input = {
  Coupons_id?: InputMaybe<Create_Coupons_Input>;
  id?: InputMaybe<Scalars['ID']>;
  languages_code?: InputMaybe<Create_Languages_Input>;
};

export type Create_Categories_Input = {
  category?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
};

export type Create_Categs_Categs_Input = {
  categs_id?: InputMaybe<Create_Categs_Input>;
  id?: InputMaybe<Scalars['ID']>;
  related_categs_id?: InputMaybe<Create_Categs_Input>;
};

export type Create_Categs_Input = {
  id?: InputMaybe<Scalars['ID']>;
  newcats?: InputMaybe<Scalars['JSON']>;
  newcats2?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Scalars['String']>;
};

export type Create_Directus_Files_Input = {
  charset?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  embed?: InputMaybe<Scalars['String']>;
  filename_disk?: InputMaybe<Scalars['String']>;
  filename_download: Scalars['String'];
  filesize?: InputMaybe<Scalars['GraphQLBigInt']>;
  folder?: InputMaybe<Create_Directus_Folders_Input>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  modified_by?: InputMaybe<Create_Directus_Users_Input>;
  modified_on?: InputMaybe<Scalars['Date']>;
  storage: Scalars['String'];
  tags?: InputMaybe<Scalars['JSON']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uploaded_by?: InputMaybe<Create_Directus_Users_Input>;
  uploaded_on?: InputMaybe<Scalars['Date']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type Create_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  parent?: InputMaybe<Create_Directus_Folders_Input>;
};

export type Create_Directus_Roles_Input = {
  admin_access: Scalars['Boolean'];
  app_access?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  enforce_tfa: Scalars['Boolean'];
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name: Scalars['String'];
  users?: InputMaybe<Array<InputMaybe<Create_Directus_Users_Input>>>;
};

export type Create_Directus_Users_Input = {
  auth_data?: InputMaybe<Scalars['JSON']>;
  avatar?: InputMaybe<Create_Directus_Files_Input>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_notifications?: InputMaybe<Scalars['Boolean']>;
  external_identifier?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  language?: InputMaybe<Scalars['String']>;
  last_access?: InputMaybe<Scalars['Date']>;
  last_name?: InputMaybe<Scalars['String']>;
  last_page?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['Hash']>;
  provider?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Create_Directus_Roles_Input>;
  status?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['JSON']>;
  tfa_secret?: InputMaybe<Scalars['Hash']>;
  theme?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['Hash']>;
};

export type Create_Languages_Input = {
  code: Scalars['ID'];
  direction?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Create_Pages_Input = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_updated?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  price?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  translations?: InputMaybe<Array<InputMaybe<Create_Pages_Translations_Input>>>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Pages_Translations_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  languages_code?: InputMaybe<Create_Languages_Input>;
  name?: InputMaybe<Scalars['String']>;
  page_title?: InputMaybe<Scalars['String']>;
  pages_id?: InputMaybe<Create_Pages_Input>;
};

export type Create_Prods_Categs_1_Input = {
  categs_id?: InputMaybe<Create_Categs_Input>;
  id?: InputMaybe<Scalars['ID']>;
  prods_id?: InputMaybe<Create_Prods_Input>;
};

export type Create_Prods_Categs_Input = {
  categs_id?: InputMaybe<Create_Categs_Input>;
  id?: InputMaybe<Scalars['ID']>;
  prods_id?: InputMaybe<Create_Prods_Input>;
};

export type Create_Prods_Input = {
  categories?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  product_categories?: InputMaybe<Array<InputMaybe<Create_Prods_Categs_1_Input>>>;
  sort?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
};

export type Create_Products_Categories_Input = {
  categories_id?: InputMaybe<Create_Categories_Input>;
  id?: InputMaybe<Scalars['ID']>;
  products_id?: InputMaybe<Create_Products_Input>;
};

export type Create_Products_Input = {
  categories?: InputMaybe<Array<InputMaybe<Create_Products_Categories_Input>>>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_updated?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
  price: Scalars['String'];
  sort?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  translations?: InputMaybe<Array<InputMaybe<Create_Products_Translations_Input>>>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Products_Translations_Input = {
  description: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  languages_code?: InputMaybe<Create_Languages_Input>;
  name: Scalars['String'];
  products_id?: InputMaybe<Create_Products_Input>;
};

export type Date_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  __typename?: 'datetime_functions';
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  weekday?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type Delete_Many = {
  __typename?: 'delete_many';
  ids: Array<Maybe<Scalars['ID']>>;
};

export type Delete_One = {
  __typename?: 'delete_one';
  id: Scalars['ID'];
};

export type Directus_Files = {
  __typename?: 'directus_files';
  charset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  embed?: Maybe<Scalars['String']>;
  filename_disk?: Maybe<Scalars['String']>;
  filename_download: Scalars['String'];
  filesize?: Maybe<Scalars['GraphQLBigInt']>;
  folder?: Maybe<Directus_Folders>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  location?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  metadata_func?: Maybe<Count_Functions>;
  modified_by?: Maybe<Directus_Users>;
  modified_on?: Maybe<Scalars['Date']>;
  modified_on_func?: Maybe<Datetime_Functions>;
  storage: Scalars['String'];
  tags?: Maybe<Scalars['JSON']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uploaded_by?: Maybe<Directus_Users>;
  uploaded_on?: Maybe<Scalars['Date']>;
  uploaded_on_func?: Maybe<Datetime_Functions>;
  width?: Maybe<Scalars['Int']>;
};


export type Directus_FilesFolderArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_FilesModified_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_FilesUploaded_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  charset?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  duration?: InputMaybe<Number_Filter_Operators>;
  embed?: InputMaybe<String_Filter_Operators>;
  filename_disk?: InputMaybe<String_Filter_Operators>;
  filename_download?: InputMaybe<String_Filter_Operators>;
  filesize?: InputMaybe<Number_Filter_Operators>;
  folder?: InputMaybe<Directus_Folders_Filter>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<Directus_Users_Filter>;
  modified_on?: InputMaybe<Date_Filter_Operators>;
  modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  storage?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  uploaded_by?: InputMaybe<Directus_Users_Filter>;
  uploaded_on?: InputMaybe<Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Folders = {
  __typename?: 'directus_folders';
  id: Scalars['ID'];
  name: Scalars['String'];
  parent?: Maybe<Directus_Folders>;
};


export type Directus_FoldersParentArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Folders_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Folders_Filter>;
};

export type Directus_Roles = {
  __typename?: 'directus_roles';
  admin_access: Scalars['Boolean'];
  app_access?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  enforce_tfa: Scalars['Boolean'];
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ip_access?: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Scalars['String'];
  users?: Maybe<Array<Maybe<Directus_Users>>>;
  users_func?: Maybe<Count_Functions>;
};


export type Directus_RolesUsersArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Roles_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  admin_access?: InputMaybe<Boolean_Filter_Operators>;
  app_access?: InputMaybe<Boolean_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  enforce_tfa?: InputMaybe<Boolean_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  ip_access?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  users?: InputMaybe<Directus_Users_Filter>;
  users_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Users = {
  __typename?: 'directus_users';
  auth_data?: Maybe<Scalars['JSON']>;
  auth_data_func?: Maybe<Count_Functions>;
  avatar?: Maybe<Directus_Files>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_notifications?: Maybe<Scalars['Boolean']>;
  external_identifier?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  last_access?: Maybe<Scalars['Date']>;
  last_access_func?: Maybe<Datetime_Functions>;
  last_name?: Maybe<Scalars['String']>;
  last_page?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['Hash']>;
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<Directus_Roles>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  tags_func?: Maybe<Count_Functions>;
  tfa_secret?: Maybe<Scalars['Hash']>;
  theme?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['Hash']>;
};


export type Directus_UsersAvatarArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_UsersRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Users_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  auth_data?: InputMaybe<String_Filter_Operators>;
  auth_data_func?: InputMaybe<Count_Function_Filter_Operators>;
  avatar?: InputMaybe<Directus_Files_Filter>;
  description?: InputMaybe<String_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  email_notifications?: InputMaybe<Boolean_Filter_Operators>;
  external_identifier?: InputMaybe<String_Filter_Operators>;
  first_name?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  language?: InputMaybe<String_Filter_Operators>;
  last_access?: InputMaybe<Date_Filter_Operators>;
  last_access_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  last_name?: InputMaybe<String_Filter_Operators>;
  last_page?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  password?: InputMaybe<Hash_Filter_Operators>;
  provider?: InputMaybe<String_Filter_Operators>;
  role?: InputMaybe<Directus_Roles_Filter>;
  status?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  tfa_secret?: InputMaybe<Hash_Filter_Operators>;
  theme?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  token?: InputMaybe<Hash_Filter_Operators>;
};

export type Hash_Filter_Operators = {
  _empty?: InputMaybe<Scalars['Boolean']>;
  _nempty?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Languages = {
  __typename?: 'languages';
  code: Scalars['ID'];
  direction?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Languages_Aggregated = {
  __typename?: 'languages_aggregated';
  count?: Maybe<Languages_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Languages_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
};

export type Languages_Aggregated_Count = {
  __typename?: 'languages_aggregated_count';
  code?: Maybe<Scalars['Int']>;
  direction?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
};

export type Languages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Languages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Languages_Filter>>>;
  code?: InputMaybe<String_Filter_Operators>;
  direction?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Pages = {
  __typename?: 'pages';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  price?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  translations?: Maybe<Array<Maybe<Pages_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type PagesTranslationsArgs = {
  filter?: InputMaybe<Pages_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PagesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PagesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Pages_Aggregated = {
  __typename?: 'pages_aggregated';
  avg?: Maybe<Pages_Aggregated_Fields>;
  avgDistinct?: Maybe<Pages_Aggregated_Fields>;
  count?: Maybe<Pages_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Pages_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Pages_Aggregated_Fields>;
  min?: Maybe<Pages_Aggregated_Fields>;
  sum?: Maybe<Pages_Aggregated_Fields>;
  sumDistinct?: Maybe<Pages_Aggregated_Fields>;
};

export type Pages_Aggregated_Count = {
  __typename?: 'pages_aggregated_count';
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  translations?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Pages_Aggregated_Fields = {
  __typename?: 'pages_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Pages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Pages_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  price?: InputMaybe<Number_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Pages_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Pages_Translations = {
  __typename?: 'pages_translations';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  languages_code?: Maybe<Languages>;
  name?: Maybe<Scalars['String']>;
  page_title?: Maybe<Scalars['String']>;
  pages_id?: Maybe<Pages>;
};


export type Pages_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Pages_TranslationsPages_IdArgs = {
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Pages_Translations_Aggregated = {
  __typename?: 'pages_translations_aggregated';
  avg?: Maybe<Pages_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Pages_Translations_Aggregated_Fields>;
  count?: Maybe<Pages_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Pages_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Pages_Translations_Aggregated_Fields>;
  min?: Maybe<Pages_Translations_Aggregated_Fields>;
  sum?: Maybe<Pages_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Pages_Translations_Aggregated_Fields>;
};

export type Pages_Translations_Aggregated_Count = {
  __typename?: 'pages_translations_aggregated_count';
  description?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  languages_code?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  page_title?: Maybe<Scalars['Int']>;
  pages_id?: Maybe<Scalars['Int']>;
};

export type Pages_Translations_Aggregated_Fields = {
  __typename?: 'pages_translations_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  pages_id?: Maybe<Scalars['Float']>;
};

export type Pages_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pages_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Pages_Translations_Filter>>>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  name?: InputMaybe<String_Filter_Operators>;
  page_title?: InputMaybe<String_Filter_Operators>;
  pages_id?: InputMaybe<Pages_Filter>;
};

export type Prods = {
  __typename?: 'prods';
  categories?: Maybe<Scalars['JSON']>;
  categories_func?: Maybe<Count_Functions>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  product_categories?: Maybe<Array<Maybe<Prods_Categs_1>>>;
  product_categories_func?: Maybe<Count_Functions>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};


export type ProdsProduct_CategoriesArgs = {
  filter?: InputMaybe<Prods_Categs_1_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Prods_Aggregated = {
  __typename?: 'prods_aggregated';
  avg?: Maybe<Prods_Aggregated_Fields>;
  avgDistinct?: Maybe<Prods_Aggregated_Fields>;
  count?: Maybe<Prods_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Prods_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Prods_Aggregated_Fields>;
  min?: Maybe<Prods_Aggregated_Fields>;
  sum?: Maybe<Prods_Aggregated_Fields>;
  sumDistinct?: Maybe<Prods_Aggregated_Fields>;
};

export type Prods_Aggregated_Count = {
  __typename?: 'prods_aggregated_count';
  categories?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  product_categories?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
};

export type Prods_Aggregated_Fields = {
  __typename?: 'prods_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Prods_Categs = {
  __typename?: 'prods_categs';
  categs_id?: Maybe<Categs>;
  id: Scalars['ID'];
  prods_id?: Maybe<Prods>;
};


export type Prods_CategsCategs_IdArgs = {
  filter?: InputMaybe<Categs_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Prods_CategsProds_IdArgs = {
  filter?: InputMaybe<Prods_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Prods_Categs_1 = {
  __typename?: 'prods_categs_1';
  categs_id?: Maybe<Categs>;
  id: Scalars['ID'];
  prods_id?: Maybe<Prods>;
};


export type Prods_Categs_1Categs_IdArgs = {
  filter?: InputMaybe<Categs_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Prods_Categs_1Prods_IdArgs = {
  filter?: InputMaybe<Prods_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Prods_Categs_1_Aggregated = {
  __typename?: 'prods_categs_1_aggregated';
  avg?: Maybe<Prods_Categs_1_Aggregated_Fields>;
  avgDistinct?: Maybe<Prods_Categs_1_Aggregated_Fields>;
  count?: Maybe<Prods_Categs_1_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Prods_Categs_1_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Prods_Categs_1_Aggregated_Fields>;
  min?: Maybe<Prods_Categs_1_Aggregated_Fields>;
  sum?: Maybe<Prods_Categs_1_Aggregated_Fields>;
  sumDistinct?: Maybe<Prods_Categs_1_Aggregated_Fields>;
};

export type Prods_Categs_1_Aggregated_Count = {
  __typename?: 'prods_categs_1_aggregated_count';
  categs_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  prods_id?: Maybe<Scalars['Int']>;
};

export type Prods_Categs_1_Aggregated_Fields = {
  __typename?: 'prods_categs_1_aggregated_fields';
  categs_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  prods_id?: Maybe<Scalars['Float']>;
};

export type Prods_Categs_1_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Prods_Categs_1_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Prods_Categs_1_Filter>>>;
  categs_id?: InputMaybe<Categs_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  prods_id?: InputMaybe<Prods_Filter>;
};

export type Prods_Categs_Aggregated = {
  __typename?: 'prods_categs_aggregated';
  avg?: Maybe<Prods_Categs_Aggregated_Fields>;
  avgDistinct?: Maybe<Prods_Categs_Aggregated_Fields>;
  count?: Maybe<Prods_Categs_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Prods_Categs_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Prods_Categs_Aggregated_Fields>;
  min?: Maybe<Prods_Categs_Aggregated_Fields>;
  sum?: Maybe<Prods_Categs_Aggregated_Fields>;
  sumDistinct?: Maybe<Prods_Categs_Aggregated_Fields>;
};

export type Prods_Categs_Aggregated_Count = {
  __typename?: 'prods_categs_aggregated_count';
  categs_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  prods_id?: Maybe<Scalars['Int']>;
};

export type Prods_Categs_Aggregated_Fields = {
  __typename?: 'prods_categs_aggregated_fields';
  categs_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  prods_id?: Maybe<Scalars['Float']>;
};

export type Prods_Categs_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Prods_Categs_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Prods_Categs_Filter>>>;
  categs_id?: InputMaybe<Categs_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  prods_id?: InputMaybe<Prods_Filter>;
};

export type Prods_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Prods_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Prods_Filter>>>;
  categories?: InputMaybe<String_Filter_Operators>;
  categories_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  product_categories?: InputMaybe<Prods_Categs_1_Filter>;
  product_categories_func?: InputMaybe<Count_Function_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
};

export type Products = {
  __typename?: 'products';
  categories?: Maybe<Array<Maybe<Products_Categories>>>;
  categories_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  images?: Maybe<Scalars['JSON']>;
  images_func?: Maybe<Count_Functions>;
  name: Scalars['String'];
  price: Scalars['String'];
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  translations?: Maybe<Array<Maybe<Products_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type ProductsCategoriesArgs = {
  filter?: InputMaybe<Products_Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ProductsTranslationsArgs = {
  filter?: InputMaybe<Products_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ProductsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ProductsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Products_Aggregated = {
  __typename?: 'products_aggregated';
  avg?: Maybe<Products_Aggregated_Fields>;
  avgDistinct?: Maybe<Products_Aggregated_Fields>;
  count?: Maybe<Products_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Products_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Products_Aggregated_Fields>;
  min?: Maybe<Products_Aggregated_Fields>;
  sum?: Maybe<Products_Aggregated_Fields>;
  sumDistinct?: Maybe<Products_Aggregated_Fields>;
};

export type Products_Aggregated_Count = {
  __typename?: 'products_aggregated_count';
  categories?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  images?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  translations?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Products_Aggregated_Fields = {
  __typename?: 'products_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Products_Categories = {
  __typename?: 'products_categories';
  categories_id?: Maybe<Categories>;
  id: Scalars['ID'];
  products_id?: Maybe<Products>;
};


export type Products_CategoriesCategories_IdArgs = {
  filter?: InputMaybe<Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Products_CategoriesProducts_IdArgs = {
  filter?: InputMaybe<Products_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Products_Categories_Aggregated = {
  __typename?: 'products_categories_aggregated';
  avg?: Maybe<Products_Categories_Aggregated_Fields>;
  avgDistinct?: Maybe<Products_Categories_Aggregated_Fields>;
  count?: Maybe<Products_Categories_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Products_Categories_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Products_Categories_Aggregated_Fields>;
  min?: Maybe<Products_Categories_Aggregated_Fields>;
  sum?: Maybe<Products_Categories_Aggregated_Fields>;
  sumDistinct?: Maybe<Products_Categories_Aggregated_Fields>;
};

export type Products_Categories_Aggregated_Count = {
  __typename?: 'products_categories_aggregated_count';
  categories_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  products_id?: Maybe<Scalars['Int']>;
};

export type Products_Categories_Aggregated_Fields = {
  __typename?: 'products_categories_aggregated_fields';
  categories_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  products_id?: Maybe<Scalars['Float']>;
};

export type Products_Categories_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Products_Categories_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Products_Categories_Filter>>>;
  categories_id?: InputMaybe<Categories_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  products_id?: InputMaybe<Products_Filter>;
};

export type Products_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Products_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Products_Filter>>>;
  categories?: InputMaybe<Products_Categories_Filter>;
  categories_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  images?: InputMaybe<String_Filter_Operators>;
  images_func?: InputMaybe<Count_Function_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  price?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Products_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Products_Translations = {
  __typename?: 'products_translations';
  description: Scalars['String'];
  id: Scalars['ID'];
  languages_code?: Maybe<Languages>;
  name: Scalars['String'];
  products_id?: Maybe<Products>;
};


export type Products_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Products_TranslationsProducts_IdArgs = {
  filter?: InputMaybe<Products_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Products_Translations_Aggregated = {
  __typename?: 'products_translations_aggregated';
  avg?: Maybe<Products_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Products_Translations_Aggregated_Fields>;
  count?: Maybe<Products_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Products_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Products_Translations_Aggregated_Fields>;
  min?: Maybe<Products_Translations_Aggregated_Fields>;
  sum?: Maybe<Products_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Products_Translations_Aggregated_Fields>;
};

export type Products_Translations_Aggregated_Count = {
  __typename?: 'products_translations_aggregated_count';
  description?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  languages_code?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  products_id?: Maybe<Scalars['Int']>;
};

export type Products_Translations_Aggregated_Fields = {
  __typename?: 'products_translations_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  products_id?: Maybe<Scalars['Float']>;
};

export type Products_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Products_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Products_Translations_Filter>>>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  name?: InputMaybe<String_Filter_Operators>;
  products_id?: InputMaybe<Products_Filter>;
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']>;
  _empty?: InputMaybe<Scalars['Boolean']>;
  _ends_with?: InputMaybe<Scalars['String']>;
  _eq?: InputMaybe<Scalars['String']>;
  _icontains?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _ncontains?: InputMaybe<Scalars['String']>;
  _nempty?: InputMaybe<Scalars['Boolean']>;
  _nends_with?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _nstarts_with?: InputMaybe<Scalars['String']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _starts_with?: InputMaybe<Scalars['String']>;
};

export type Update_Coupons_Input = {
  Description?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  Price?: InputMaybe<Scalars['Float']>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_updated?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  sort?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  translations?: InputMaybe<Array<InputMaybe<Update_Coupons_Translations_Input>>>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Coupons_Translations_Input = {
  Coupons_id?: InputMaybe<Update_Coupons_Input>;
  id?: InputMaybe<Scalars['ID']>;
  languages_code?: InputMaybe<Update_Languages_Input>;
};

export type Update_Categories_Input = {
  category?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
};

export type Update_Categs_Categs_Input = {
  categs_id?: InputMaybe<Update_Categs_Input>;
  id?: InputMaybe<Scalars['ID']>;
  related_categs_id?: InputMaybe<Update_Categs_Input>;
};

export type Update_Categs_Input = {
  id?: InputMaybe<Scalars['ID']>;
  newcats?: InputMaybe<Scalars['JSON']>;
  newcats2?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Scalars['String']>;
};

export type Update_Directus_Files_Input = {
  charset?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  embed?: InputMaybe<Scalars['String']>;
  filename_disk?: InputMaybe<Scalars['String']>;
  filename_download?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['GraphQLBigInt']>;
  folder?: InputMaybe<Update_Directus_Folders_Input>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  modified_by?: InputMaybe<Update_Directus_Users_Input>;
  modified_on?: InputMaybe<Scalars['Date']>;
  storage?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['JSON']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uploaded_by?: InputMaybe<Update_Directus_Users_Input>;
  uploaded_on?: InputMaybe<Scalars['Date']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type Update_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Update_Directus_Folders_Input>;
};

export type Update_Directus_Roles_Input = {
  admin_access?: InputMaybe<Scalars['Boolean']>;
  app_access?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  enforce_tfa?: InputMaybe<Scalars['Boolean']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Update_Directus_Users_Input>>>;
};

export type Update_Directus_Users_Input = {
  auth_data?: InputMaybe<Scalars['JSON']>;
  avatar?: InputMaybe<Update_Directus_Files_Input>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_notifications?: InputMaybe<Scalars['Boolean']>;
  external_identifier?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  language?: InputMaybe<Scalars['String']>;
  last_access?: InputMaybe<Scalars['Date']>;
  last_name?: InputMaybe<Scalars['String']>;
  last_page?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['Hash']>;
  provider?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Update_Directus_Roles_Input>;
  status?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['JSON']>;
  tfa_secret?: InputMaybe<Scalars['Hash']>;
  theme?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['Hash']>;
};

export type Update_Languages_Input = {
  code?: InputMaybe<Scalars['ID']>;
  direction?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Update_Pages_Input = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_updated?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  price?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  translations?: InputMaybe<Array<InputMaybe<Update_Pages_Translations_Input>>>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Pages_Translations_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  languages_code?: InputMaybe<Update_Languages_Input>;
  name?: InputMaybe<Scalars['String']>;
  page_title?: InputMaybe<Scalars['String']>;
  pages_id?: InputMaybe<Update_Pages_Input>;
};

export type Update_Prods_Categs_1_Input = {
  categs_id?: InputMaybe<Update_Categs_Input>;
  id?: InputMaybe<Scalars['ID']>;
  prods_id?: InputMaybe<Update_Prods_Input>;
};

export type Update_Prods_Categs_Input = {
  categs_id?: InputMaybe<Update_Categs_Input>;
  id?: InputMaybe<Scalars['ID']>;
  prods_id?: InputMaybe<Update_Prods_Input>;
};

export type Update_Prods_Input = {
  categories?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  product_categories?: InputMaybe<Array<InputMaybe<Update_Prods_Categs_1_Input>>>;
  sort?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
};

export type Update_Products_Categories_Input = {
  categories_id?: InputMaybe<Update_Categories_Input>;
  id?: InputMaybe<Scalars['ID']>;
  products_id?: InputMaybe<Update_Products_Input>;
};

export type Update_Products_Input = {
  categories?: InputMaybe<Array<InputMaybe<Update_Products_Categories_Input>>>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_updated?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  translations?: InputMaybe<Array<InputMaybe<Update_Products_Translations_Input>>>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Products_Translations_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  languages_code?: InputMaybe<Update_Languages_Input>;
  name?: InputMaybe<Scalars['String']>;
  products_id?: InputMaybe<Update_Products_Input>;
};

export type GetPagesQueryVariables = Exact<{
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  language?: InputMaybe<Scalars['String']>;
}>;


export type GetPagesQuery = { __typename?: 'Query', pages: Array<{ __typename?: 'pages', price?: number | null, status?: string | null, id: string, translations?: Array<{ __typename?: 'pages_translations', name?: string | null, description?: string | null, page_title?: string | null } | null> | null }> };

export type GetProductsQueryVariables = Exact<{
  filter?: InputMaybe<Products_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  language?: InputMaybe<Scalars['String']>;
}>;


export type GetProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'products', price: string, images?: any | null, name: string, translations?: Array<{ __typename?: 'products_translations', name: string, description: string } | null> | null }> };

export type GetLatestProductsQueryVariables = Exact<{
  filter?: InputMaybe<Products_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  language?: InputMaybe<Scalars['String']>;
}>;


export type GetLatestProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'products', price: string, images?: any | null, translations?: Array<{ __typename?: 'products_translations', name: string } | null> | null }> };

export type GetProductsByCategoryQueryVariables = Exact<{
  filter?: InputMaybe<Products_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  language?: InputMaybe<Scalars['String']>;
}>;


export type GetProductsByCategoryQuery = { __typename?: 'Query', products: Array<{ __typename?: 'products', price: string, images?: any | null, translations?: Array<{ __typename?: 'products_translations', name: string } | null> | null, categories?: Array<{ __typename?: 'products_categories', categories_id?: { __typename?: 'categories', category?: Array<string | null> | null } | null } | null> | null }> };


export const GetPagesDocument = gql`
    query getPages($filter: pages_filter, $limit: Int, $offset: Int, $page: Int, $search: String, $sort: [String], $language: String) {
  pages(
    filter: $filter
    limit: $limit
    offset: $offset
    page: $page
    search: $search
    sort: $sort
  ) {
    translations(filter: {languages_code: {code: {_eq: $language}}}) {
      name
      description
      page_title
    }
    price
    status
    id
  }
}
    `;
export const GetProductsDocument = gql`
    query getProducts($filter: products_filter, $limit: Int, $offset: Int, $page: Int, $search: String, $sort: [String], $language: String) {
  products(
    filter: $filter
    limit: $limit
    offset: $offset
    page: $page
    search: $search
    sort: $sort
  ) {
    translations(filter: {languages_code: {code: {_eq: $language}}}) {
      name
      description
    }
    price
    images
    name
  }
}
    `;
export const GetLatestProductsDocument = gql`
    query getLatestProducts($filter: products_filter, $limit: Int, $offset: Int, $page: Int, $search: String, $sort: [String], $language: String) {
  products(
    filter: $filter
    limit: $limit
    offset: $offset
    page: $page
    search: $search
    sort: $sort
  ) {
    translations(filter: {languages_code: {code: {_eq: $language}}}) {
      name
    }
    price
    images
  }
}
    `;
export const GetProductsByCategoryDocument = gql`
    query getProductsByCategory($filter: products_filter, $limit: Int, $offset: Int, $page: Int, $search: String, $sort: [String], $language: String) {
  products(
    filter: $filter
    limit: $limit
    offset: $offset
    page: $page
    search: $search
    sort: $sort
  ) {
    translations(filter: {languages_code: {code: {_eq: $language}}}) {
      name
    }
    price
    images
    categories {
      categories_id {
        category
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getPages(variables?: GetPagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPagesQuery>(GetPagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPages', 'query');
    },
    getProducts(variables?: GetProductsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProductsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProductsQuery>(GetProductsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProducts', 'query');
    },
    getLatestProducts(variables?: GetLatestProductsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetLatestProductsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLatestProductsQuery>(GetLatestProductsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getLatestProducts', 'query');
    },
    getProductsByCategory(variables?: GetProductsByCategoryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProductsByCategoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProductsByCategoryQuery>(GetProductsByCategoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProductsByCategory', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;