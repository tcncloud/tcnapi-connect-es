// @generated by protoc-gen-es v1.3.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/newsroom/entities.proto (package api.v1alpha1.newsroom, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ArticleStatus } from "../../commons/newsroom_pb.js";

/**
 * Request to create news article
 *
 * @generated from message api.v1alpha1.newsroom.CreateNewsArticleRequest
 */
export declare class CreateNewsArticleRequest extends Message<CreateNewsArticleRequest> {
  /**
   * news article title
   *
   * @generated from field: string title = 1;
   */
  title: string;

  /**
   * markdown content
   *
   * @generated from field: string content = 2;
   */
  content: string;

  /**
   * article author
   *
   * @generated from field: string author = 3;
   */
  author: string;

  /**
   * image reference id
   *
   * @generated from field: string image_reference_id = 4;
   */
  imageReferenceId: string;

  constructor(data?: PartialMessage<CreateNewsArticleRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.CreateNewsArticleRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateNewsArticleRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateNewsArticleRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateNewsArticleRequest;

  static equals(a: CreateNewsArticleRequest | PlainMessage<CreateNewsArticleRequest> | undefined, b: CreateNewsArticleRequest | PlainMessage<CreateNewsArticleRequest> | undefined): boolean;
}

/**
 * Response to create news article
 *
 * @generated from message api.v1alpha1.newsroom.CreateNewsArticleResponse
 */
export declare class CreateNewsArticleResponse extends Message<CreateNewsArticleResponse> {
  /**
   * news article details
   *
   * @generated from field: api.v1alpha1.newsroom.NewsArticleDetails article_details = 1;
   */
  articleDetails?: NewsArticleDetails;

  constructor(data?: PartialMessage<CreateNewsArticleResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.CreateNewsArticleResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateNewsArticleResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateNewsArticleResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateNewsArticleResponse;

  static equals(a: CreateNewsArticleResponse | PlainMessage<CreateNewsArticleResponse> | undefined, b: CreateNewsArticleResponse | PlainMessage<CreateNewsArticleResponse> | undefined): boolean;
}

/**
 * Request to list of news articles
 *
 * @generated from message api.v1alpha1.newsroom.ListNewsArticlesRequest
 */
export declare class ListNewsArticlesRequest extends Message<ListNewsArticlesRequest> {
  /**
   * the statuses to select by when listing articles (if empty, selects all)
   *
   * @generated from field: repeated api.commons.ArticleStatus statuses = 1;
   */
  statuses: ArticleStatus[];

  /**
   * list of article details to be Requested
   *
   * @generated from field: google.protobuf.FieldMask field_mask = 100;
   */
  fieldMask?: FieldMask;

  constructor(data?: PartialMessage<ListNewsArticlesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.ListNewsArticlesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListNewsArticlesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListNewsArticlesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListNewsArticlesRequest;

  static equals(a: ListNewsArticlesRequest | PlainMessage<ListNewsArticlesRequest> | undefined, b: ListNewsArticlesRequest | PlainMessage<ListNewsArticlesRequest> | undefined): boolean;
}

/**
 * Responseponse to list of news articles
 *
 * @generated from message api.v1alpha1.newsroom.ListNewsArticlesResponse
 */
export declare class ListNewsArticlesResponse extends Message<ListNewsArticlesResponse> {
  /**
   * article details
   *
   * @generated from field: repeated api.v1alpha1.newsroom.NewsArticleDetails article_details = 1;
   */
  articleDetails: NewsArticleDetails[];

  constructor(data?: PartialMessage<ListNewsArticlesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.ListNewsArticlesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListNewsArticlesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListNewsArticlesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListNewsArticlesResponse;

  static equals(a: ListNewsArticlesResponse | PlainMessage<ListNewsArticlesResponse> | undefined, b: ListNewsArticlesResponse | PlainMessage<ListNewsArticlesResponse> | undefined): boolean;
}

/**
 * Request to get news article by id
 *
 * @generated from message api.v1alpha1.newsroom.GetNewsArticleByIdRequest
 */
export declare class GetNewsArticleByIdRequest extends Message<GetNewsArticleByIdRequest> {
  /**
   * the unique news article identifier
   *
   * @generated from field: int64 new_article_sid = 1;
   */
  newArticleSid: bigint;

  constructor(data?: PartialMessage<GetNewsArticleByIdRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.GetNewsArticleByIdRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetNewsArticleByIdRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetNewsArticleByIdRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetNewsArticleByIdRequest;

  static equals(a: GetNewsArticleByIdRequest | PlainMessage<GetNewsArticleByIdRequest> | undefined, b: GetNewsArticleByIdRequest | PlainMessage<GetNewsArticleByIdRequest> | undefined): boolean;
}

/**
 * Response to get news article
 *
 * @generated from message api.v1alpha1.newsroom.GetNewsArticleByIdResponse
 */
export declare class GetNewsArticleByIdResponse extends Message<GetNewsArticleByIdResponse> {
  /**
   * news article details
   *
   * @generated from field: api.v1alpha1.newsroom.NewsArticleDetails article_details = 1;
   */
  articleDetails?: NewsArticleDetails;

  constructor(data?: PartialMessage<GetNewsArticleByIdResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.GetNewsArticleByIdResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetNewsArticleByIdResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetNewsArticleByIdResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetNewsArticleByIdResponse;

  static equals(a: GetNewsArticleByIdResponse | PlainMessage<GetNewsArticleByIdResponse> | undefined, b: GetNewsArticleByIdResponse | PlainMessage<GetNewsArticleByIdResponse> | undefined): boolean;
}

/**
 * Request to update news article
 *
 * @generated from message api.v1alpha1.newsroom.UpdateNewsArticleRequest
 */
export declare class UpdateNewsArticleRequest extends Message<UpdateNewsArticleRequest> {
  /**
   * the news article fields specified to be updated
   *
   * @generated from field: api.v1alpha1.newsroom.NewsArticleDetails article_details = 1;
   */
  articleDetails?: NewsArticleDetails;

  /**
   * list of fields Requested to be updated
   *
   * @generated from field: google.protobuf.FieldMask field_mask = 100;
   */
  fieldMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateNewsArticleRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.UpdateNewsArticleRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateNewsArticleRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateNewsArticleRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateNewsArticleRequest;

  static equals(a: UpdateNewsArticleRequest | PlainMessage<UpdateNewsArticleRequest> | undefined, b: UpdateNewsArticleRequest | PlainMessage<UpdateNewsArticleRequest> | undefined): boolean;
}

/**
 * Response to update news article
 *
 * @generated from message api.v1alpha1.newsroom.UpdateNewsArticleResponse
 */
export declare class UpdateNewsArticleResponse extends Message<UpdateNewsArticleResponse> {
  /**
   * updated news article
   *
   * @generated from field: api.v1alpha1.newsroom.NewsArticleDetails article_details = 1;
   */
  articleDetails?: NewsArticleDetails;

  constructor(data?: PartialMessage<UpdateNewsArticleResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.UpdateNewsArticleResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateNewsArticleResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateNewsArticleResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateNewsArticleResponse;

  static equals(a: UpdateNewsArticleResponse | PlainMessage<UpdateNewsArticleResponse> | undefined, b: UpdateNewsArticleResponse | PlainMessage<UpdateNewsArticleResponse> | undefined): boolean;
}

/**
 * news article details
 *
 * @generated from message api.v1alpha1.newsroom.NewsArticleDetails
 */
export declare class NewsArticleDetails extends Message<NewsArticleDetails> {
  /**
   * the unique news article identifier
   *
   * @generated from field: int64 new_article_sid = 1;
   */
  newArticleSid: bigint;

  /**
   * news article title
   *
   * @generated from field: string title = 2;
   */
  title: string;

  /**
   * markdown content
   *
   * @generated from field: string content = 3;
   */
  content: string;

  /**
   * article status
   *
   * @generated from field: api.commons.ArticleStatus status = 4;
   */
  status: ArticleStatus;

  /**
   * news article creation date
   *
   * @generated from field: google.protobuf.Timestamp date_created = 5;
   */
  dateCreated?: Timestamp;

  /**
   * news article last updated date
   *
   * @generated from field: google.protobuf.Timestamp last_edited = 6;
   */
  lastEdited?: Timestamp;

  /**
   * article author
   *
   * @generated from field: string author = 7;
   */
  author: string;

  /**
   * image reference id
   *
   * @generated from field: string image_reference_id = 8;
   */
  imageReferenceId: string;

  constructor(data?: PartialMessage<NewsArticleDetails>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.NewsArticleDetails";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NewsArticleDetails;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NewsArticleDetails;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NewsArticleDetails;

  static equals(a: NewsArticleDetails | PlainMessage<NewsArticleDetails> | undefined, b: NewsArticleDetails | PlainMessage<NewsArticleDetails> | undefined): boolean;
}

/**
 * published article details
 *
 * @generated from message api.v1alpha1.newsroom.PublishedArticleDetails
 */
export declare class PublishedArticleDetails extends Message<PublishedArticleDetails> {
  /**
   * the unique published article identifier
   *
   * @generated from field: int64 published_article_sid = 1;
   */
  publishedArticleSid: bigint;

  /**
   * news article details
   *
   * @generated from field: api.v1alpha1.newsroom.NewsArticleDetails news_article_details = 2;
   */
  newsArticleDetails?: NewsArticleDetails;

  /**
   * news article published date
   *
   * @generated from field: google.protobuf.Timestamp date_published = 3;
   */
  datePublished?: Timestamp;

  /**
   * this flag determines if we show to user or not
   *
   * @generated from field: bool display_to_user = 4;
   */
  displayToUser: boolean;

  constructor(data?: PartialMessage<PublishedArticleDetails>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.PublishedArticleDetails";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PublishedArticleDetails;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PublishedArticleDetails;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PublishedArticleDetails;

  static equals(a: PublishedArticleDetails | PlainMessage<PublishedArticleDetails> | undefined, b: PublishedArticleDetails | PlainMessage<PublishedArticleDetails> | undefined): boolean;
}

/**
 * user activity details
 *
 * @generated from message api.v1alpha1.newsroom.UserActivity
 */
export declare class UserActivity extends Message<UserActivity> {
  /**
   * the unique user activity log identifier
   *
   * @generated from field: int64 user_activity_log_sid = 1;
   */
  userActivityLogSid: bigint;

  /**
   * user activity created date
   *
   * @generated from field: google.protobuf.Timestamp date_created = 2;
   */
  dateCreated?: Timestamp;

  /**
   * user activity details
   *
   * @generated from field: api.v1alpha1.newsroom.UserActivity.UserActivityDetails user_activity_details = 3;
   */
  userActivityDetails?: UserActivity_UserActivityDetails;

  constructor(data?: PartialMessage<UserActivity>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.UserActivity";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserActivity;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserActivity;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserActivity;

  static equals(a: UserActivity | PlainMessage<UserActivity> | undefined, b: UserActivity | PlainMessage<UserActivity> | undefined): boolean;
}

/**
 * user activity details
 *
 * @generated from message api.v1alpha1.newsroom.UserActivity.UserActivityDetails
 */
export declare class UserActivity_UserActivityDetails extends Message<UserActivity_UserActivityDetails> {
  /**
   * the unique published article identifier
   *
   * @generated from field: int64 published_article_sid = 1;
   */
  publishedArticleSid: bigint;

  constructor(data?: PartialMessage<UserActivity_UserActivityDetails>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.UserActivity.UserActivityDetails";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserActivity_UserActivityDetails;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserActivity_UserActivityDetails;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserActivity_UserActivityDetails;

  static equals(a: UserActivity_UserActivityDetails | PlainMessage<UserActivity_UserActivityDetails> | undefined, b: UserActivity_UserActivityDetails | PlainMessage<UserActivity_UserActivityDetails> | undefined): boolean;
}

/**
 * Request to create published article
 *
 * @generated from message api.v1alpha1.newsroom.CreatePublishedArticleRequest
 */
export declare class CreatePublishedArticleRequest extends Message<CreatePublishedArticleRequest> {
  /**
   * news article identifier
   *
   * @generated from field: int64 new_article_sid = 1;
   */
  newArticleSid: bigint;

  /**
   * determines if we show to user
   *
   * @generated from field: bool display_to_user = 2;
   */
  displayToUser: boolean;

  /**
   * link to the published article
   *
   * @generated from field: string article_link = 3;
   */
  articleLink: string;

  constructor(data?: PartialMessage<CreatePublishedArticleRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.CreatePublishedArticleRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreatePublishedArticleRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreatePublishedArticleRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreatePublishedArticleRequest;

  static equals(a: CreatePublishedArticleRequest | PlainMessage<CreatePublishedArticleRequest> | undefined, b: CreatePublishedArticleRequest | PlainMessage<CreatePublishedArticleRequest> | undefined): boolean;
}

/**
 * Response to create published article
 *
 * @generated from message api.v1alpha1.newsroom.CreatePublishedArticleResponse
 */
export declare class CreatePublishedArticleResponse extends Message<CreatePublishedArticleResponse> {
  /**
   * news article details
   *
   * @generated from field: api.v1alpha1.newsroom.PublishedArticleDetails published_article_details = 1;
   */
  publishedArticleDetails?: PublishedArticleDetails;

  constructor(data?: PartialMessage<CreatePublishedArticleResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.CreatePublishedArticleResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreatePublishedArticleResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreatePublishedArticleResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreatePublishedArticleResponse;

  static equals(a: CreatePublishedArticleResponse | PlainMessage<CreatePublishedArticleResponse> | undefined, b: CreatePublishedArticleResponse | PlainMessage<CreatePublishedArticleResponse> | undefined): boolean;
}

/**
 * Request to list of published articles
 *
 * @generated from message api.v1alpha1.newsroom.ListPublishedArticlesRequest
 */
export declare class ListPublishedArticlesRequest extends Message<ListPublishedArticlesRequest> {
  constructor(data?: PartialMessage<ListPublishedArticlesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.ListPublishedArticlesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPublishedArticlesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPublishedArticlesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPublishedArticlesRequest;

  static equals(a: ListPublishedArticlesRequest | PlainMessage<ListPublishedArticlesRequest> | undefined, b: ListPublishedArticlesRequest | PlainMessage<ListPublishedArticlesRequest> | undefined): boolean;
}

/**
 * Response to list of published articles
 *
 * @generated from message api.v1alpha1.newsroom.ListPublishedArticlesResponse
 */
export declare class ListPublishedArticlesResponse extends Message<ListPublishedArticlesResponse> {
  /**
   * published article details
   *
   * @generated from field: repeated api.v1alpha1.newsroom.PublishedArticleDetails published_article_details = 1;
   */
  publishedArticleDetails: PublishedArticleDetails[];

  constructor(data?: PartialMessage<ListPublishedArticlesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.ListPublishedArticlesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPublishedArticlesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPublishedArticlesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPublishedArticlesResponse;

  static equals(a: ListPublishedArticlesResponse | PlainMessage<ListPublishedArticlesResponse> | undefined, b: ListPublishedArticlesResponse | PlainMessage<ListPublishedArticlesResponse> | undefined): boolean;
}

/**
 * Request to get published article by id
 *
 * @generated from message api.v1alpha1.newsroom.GetPublishedArticleByIdRequest
 */
export declare class GetPublishedArticleByIdRequest extends Message<GetPublishedArticleByIdRequest> {
  /**
   * deprecated
   *
   * @generated from field: int64 new_article_sid = 1 [deprecated = true];
   * @deprecated
   */
  newArticleSid: bigint;

  /**
   * the unique published article sid
   *
   * @generated from field: int64 published_article_sid = 2;
   */
  publishedArticleSid: bigint;

  constructor(data?: PartialMessage<GetPublishedArticleByIdRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.GetPublishedArticleByIdRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPublishedArticleByIdRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPublishedArticleByIdRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPublishedArticleByIdRequest;

  static equals(a: GetPublishedArticleByIdRequest | PlainMessage<GetPublishedArticleByIdRequest> | undefined, b: GetPublishedArticleByIdRequest | PlainMessage<GetPublishedArticleByIdRequest> | undefined): boolean;
}

/**
 * Response to get published article
 *
 * @generated from message api.v1alpha1.newsroom.GetPublishedArticleByIdResponse
 */
export declare class GetPublishedArticleByIdResponse extends Message<GetPublishedArticleByIdResponse> {
  /**
   * published article details
   *
   * @generated from field: api.v1alpha1.newsroom.PublishedArticleDetails published_article_details = 1;
   */
  publishedArticleDetails?: PublishedArticleDetails;

  constructor(data?: PartialMessage<GetPublishedArticleByIdResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.GetPublishedArticleByIdResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPublishedArticleByIdResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPublishedArticleByIdResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPublishedArticleByIdResponse;

  static equals(a: GetPublishedArticleByIdResponse | PlainMessage<GetPublishedArticleByIdResponse> | undefined, b: GetPublishedArticleByIdResponse | PlainMessage<GetPublishedArticleByIdResponse> | undefined): boolean;
}

/**
 * Request to update user activity
 *
 * @generated from message api.v1alpha1.newsroom.UserActivityRequest
 */
export declare class UserActivityRequest extends Message<UserActivityRequest> {
  /**
   * the unique published article identifier
   *
   * @generated from field: int64 published_article_sid = 1;
   */
  publishedArticleSid: bigint;

  constructor(data?: PartialMessage<UserActivityRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.UserActivityRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserActivityRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserActivityRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserActivityRequest;

  static equals(a: UserActivityRequest | PlainMessage<UserActivityRequest> | undefined, b: UserActivityRequest | PlainMessage<UserActivityRequest> | undefined): boolean;
}

/**
 * Response to user activity updates
 *
 * @generated from message api.v1alpha1.newsroom.UserActivityResponse
 */
export declare class UserActivityResponse extends Message<UserActivityResponse> {
  /**
   * user activity details
   *
   * @generated from field: api.v1alpha1.newsroom.UserActivity user_activity = 1;
   */
  userActivity?: UserActivity;

  constructor(data?: PartialMessage<UserActivityResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.UserActivityResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserActivityResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserActivityResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserActivityResponse;

  static equals(a: UserActivityResponse | PlainMessage<UserActivityResponse> | undefined, b: UserActivityResponse | PlainMessage<UserActivityResponse> | undefined): boolean;
}

/**
 * Request to get unseen news articles for the user
 *
 * @generated from message api.v1alpha1.newsroom.GetNewsForUserRequest
 */
export declare class GetNewsForUserRequest extends Message<GetNewsForUserRequest> {
  constructor(data?: PartialMessage<GetNewsForUserRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.GetNewsForUserRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetNewsForUserRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetNewsForUserRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetNewsForUserRequest;

  static equals(a: GetNewsForUserRequest | PlainMessage<GetNewsForUserRequest> | undefined, b: GetNewsForUserRequest | PlainMessage<GetNewsForUserRequest> | undefined): boolean;
}

/**
 * Response to unseen news articles for the user
 *
 * @generated from message api.v1alpha1.newsroom.GetNewsForUserResponse
 */
export declare class GetNewsForUserResponse extends Message<GetNewsForUserResponse> {
  /**
   * published article details
   *
   * @generated from field: repeated api.v1alpha1.newsroom.PublishedArticleDetails published_article_details = 1;
   */
  publishedArticleDetails: PublishedArticleDetails[];

  constructor(data?: PartialMessage<GetNewsForUserResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.GetNewsForUserResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetNewsForUserResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetNewsForUserResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetNewsForUserResponse;

  static equals(a: GetNewsForUserResponse | PlainMessage<GetNewsForUserResponse> | undefined, b: GetNewsForUserResponse | PlainMessage<GetNewsForUserResponse> | undefined): boolean;
}

/**
 * request to upload image for the news article
 *
 * @generated from message api.v1alpha1.newsroom.StoreNewsArticleImageRequest
 */
export declare class StoreNewsArticleImageRequest extends Message<StoreNewsArticleImageRequest> {
  /**
   * NewsArticleImage
   *
   * @generated from field: api.v1alpha1.newsroom.NewsArticleImage image = 1;
   */
  image?: NewsArticleImage;

  constructor(data?: PartialMessage<StoreNewsArticleImageRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.StoreNewsArticleImageRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoreNewsArticleImageRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoreNewsArticleImageRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoreNewsArticleImageRequest;

  static equals(a: StoreNewsArticleImageRequest | PlainMessage<StoreNewsArticleImageRequest> | undefined, b: StoreNewsArticleImageRequest | PlainMessage<StoreNewsArticleImageRequest> | undefined): boolean;
}

/**
 * image for the news article details
 *
 * @generated from message api.v1alpha1.newsroom.NewsArticleImage
 */
export declare class NewsArticleImage extends Message<NewsArticleImage> {
  /**
   * unique name of the image
   *
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * image for the new article
   *
   * @generated from field: int64 new_article_sid = 2;
   */
  newArticleSid: bigint;

  /**
   * image content
   *
   * @generated from field: string content = 3;
   */
  content: string;

  /**
   * download image url
   *
   * @generated from field: string download_url = 4;
   */
  downloadUrl: string;

  /**
   * image reference id
   *
   * @generated from field: string image_reference_id = 5;
   */
  imageReferenceId: string;

  /**
   * image type
   *
   * @generated from field: string image_type = 6;
   */
  imageType: string;

  constructor(data?: PartialMessage<NewsArticleImage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.NewsArticleImage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NewsArticleImage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NewsArticleImage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NewsArticleImage;

  static equals(a: NewsArticleImage | PlainMessage<NewsArticleImage> | undefined, b: NewsArticleImage | PlainMessage<NewsArticleImage> | undefined): boolean;
}

/**
 * response to uploaded image
 *
 * @generated from message api.v1alpha1.newsroom.StoreNewsArticleImageResponse
 */
export declare class StoreNewsArticleImageResponse extends Message<StoreNewsArticleImageResponse> {
  /**
   * stored image details
   *
   * @generated from field: api.v1alpha1.newsroom.NewsArticleImage image = 1;
   */
  image?: NewsArticleImage;

  constructor(data?: PartialMessage<StoreNewsArticleImageResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.StoreNewsArticleImageResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoreNewsArticleImageResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoreNewsArticleImageResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoreNewsArticleImageResponse;

  static equals(a: StoreNewsArticleImageResponse | PlainMessage<StoreNewsArticleImageResponse> | undefined, b: StoreNewsArticleImageResponse | PlainMessage<StoreNewsArticleImageResponse> | undefined): boolean;
}

/**
 * request to list all images news article
 *
 * @generated from message api.v1alpha1.newsroom.ListImagesForNewsArticleRequest
 */
export declare class ListImagesForNewsArticleRequest extends Message<ListImagesForNewsArticleRequest> {
  /**
   * images for the new article sid
   *
   * @generated from field: int64 new_article_sid = 1;
   */
  newArticleSid: bigint;

  constructor(data?: PartialMessage<ListImagesForNewsArticleRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.ListImagesForNewsArticleRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListImagesForNewsArticleRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListImagesForNewsArticleRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListImagesForNewsArticleRequest;

  static equals(a: ListImagesForNewsArticleRequest | PlainMessage<ListImagesForNewsArticleRequest> | undefined, b: ListImagesForNewsArticleRequest | PlainMessage<ListImagesForNewsArticleRequest> | undefined): boolean;
}

/**
 * response to list all images for the news article
 *
 * @generated from message api.v1alpha1.newsroom.ListImagesForNewsArticleResponse
 */
export declare class ListImagesForNewsArticleResponse extends Message<ListImagesForNewsArticleResponse> {
  /**
   * images for the news article
   *
   * @generated from field: repeated api.v1alpha1.newsroom.NewsArticleImage news_article_images = 1;
   */
  newsArticleImages: NewsArticleImage[];

  constructor(data?: PartialMessage<ListImagesForNewsArticleResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.ListImagesForNewsArticleResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListImagesForNewsArticleResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListImagesForNewsArticleResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListImagesForNewsArticleResponse;

  static equals(a: ListImagesForNewsArticleResponse | PlainMessage<ListImagesForNewsArticleResponse> | undefined, b: ListImagesForNewsArticleResponse | PlainMessage<ListImagesForNewsArticleResponse> | undefined): boolean;
}

