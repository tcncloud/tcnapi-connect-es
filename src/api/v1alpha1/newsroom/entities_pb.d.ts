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
   * latest news article
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
 * published news article details
 *
 * @generated from message api.v1alpha1.newsroom.PublishedNewsArticleDetails
 */
export declare class PublishedNewsArticleDetails extends Message<PublishedNewsArticleDetails> {
  /**
   * the unique published news article identifier
   *
   * @generated from field: int64 published_new_article_sid = 1;
   */
  publishedNewArticleSid: bigint;

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

  constructor(data?: PartialMessage<PublishedNewsArticleDetails>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.PublishedNewsArticleDetails";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PublishedNewsArticleDetails;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PublishedNewsArticleDetails;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PublishedNewsArticleDetails;

  static equals(a: PublishedNewsArticleDetails | PlainMessage<PublishedNewsArticleDetails> | undefined, b: PublishedNewsArticleDetails | PlainMessage<PublishedNewsArticleDetails> | undefined): boolean;
}

/**
 * Request to create published news article
 *
 * @generated from message api.v1alpha1.newsroom.CreatePublishedNewsArticleRequest
 */
export declare class CreatePublishedNewsArticleRequest extends Message<CreatePublishedNewsArticleRequest> {
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

  constructor(data?: PartialMessage<CreatePublishedNewsArticleRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.CreatePublishedNewsArticleRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreatePublishedNewsArticleRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreatePublishedNewsArticleRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreatePublishedNewsArticleRequest;

  static equals(a: CreatePublishedNewsArticleRequest | PlainMessage<CreatePublishedNewsArticleRequest> | undefined, b: CreatePublishedNewsArticleRequest | PlainMessage<CreatePublishedNewsArticleRequest> | undefined): boolean;
}

/**
 * Response to create published news article
 *
 * @generated from message api.v1alpha1.newsroom.CreatePublishedNewsArticleResponse
 */
export declare class CreatePublishedNewsArticleResponse extends Message<CreatePublishedNewsArticleResponse> {
  /**
   * news article details
   *
   * @generated from field: api.v1alpha1.newsroom.PublishedNewsArticleDetails published_article_details = 1;
   */
  publishedArticleDetails?: PublishedNewsArticleDetails;

  constructor(data?: PartialMessage<CreatePublishedNewsArticleResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.CreatePublishedNewsArticleResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreatePublishedNewsArticleResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreatePublishedNewsArticleResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreatePublishedNewsArticleResponse;

  static equals(a: CreatePublishedNewsArticleResponse | PlainMessage<CreatePublishedNewsArticleResponse> | undefined, b: CreatePublishedNewsArticleResponse | PlainMessage<CreatePublishedNewsArticleResponse> | undefined): boolean;
}

/**
 * Request to list of published news articles
 *
 * @generated from message api.v1alpha1.newsroom.ListPublishedNewsArticlesRequest
 */
export declare class ListPublishedNewsArticlesRequest extends Message<ListPublishedNewsArticlesRequest> {
  constructor(data?: PartialMessage<ListPublishedNewsArticlesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.ListPublishedNewsArticlesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPublishedNewsArticlesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPublishedNewsArticlesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPublishedNewsArticlesRequest;

  static equals(a: ListPublishedNewsArticlesRequest | PlainMessage<ListPublishedNewsArticlesRequest> | undefined, b: ListPublishedNewsArticlesRequest | PlainMessage<ListPublishedNewsArticlesRequest> | undefined): boolean;
}

/**
 * Response to list of published news articles
 *
 * @generated from message api.v1alpha1.newsroom.ListPublishedNewsArticlesResponse
 */
export declare class ListPublishedNewsArticlesResponse extends Message<ListPublishedNewsArticlesResponse> {
  /**
   * published article details
   *
   * @generated from field: repeated api.v1alpha1.newsroom.PublishedNewsArticleDetails published_article_details = 1;
   */
  publishedArticleDetails: PublishedNewsArticleDetails[];

  constructor(data?: PartialMessage<ListPublishedNewsArticlesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.ListPublishedNewsArticlesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPublishedNewsArticlesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPublishedNewsArticlesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPublishedNewsArticlesResponse;

  static equals(a: ListPublishedNewsArticlesResponse | PlainMessage<ListPublishedNewsArticlesResponse> | undefined, b: ListPublishedNewsArticlesResponse | PlainMessage<ListPublishedNewsArticlesResponse> | undefined): boolean;
}

/**
 * Request to get published news article by id
 *
 * @generated from message api.v1alpha1.newsroom.GetPublishedNewsArticleByIdRequest
 */
export declare class GetPublishedNewsArticleByIdRequest extends Message<GetPublishedNewsArticleByIdRequest> {
  /**
   * the unique news article identifier
   *
   * @generated from field: int64 new_article_sid = 1;
   */
  newArticleSid: bigint;

  constructor(data?: PartialMessage<GetPublishedNewsArticleByIdRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.GetPublishedNewsArticleByIdRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPublishedNewsArticleByIdRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPublishedNewsArticleByIdRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPublishedNewsArticleByIdRequest;

  static equals(a: GetPublishedNewsArticleByIdRequest | PlainMessage<GetPublishedNewsArticleByIdRequest> | undefined, b: GetPublishedNewsArticleByIdRequest | PlainMessage<GetPublishedNewsArticleByIdRequest> | undefined): boolean;
}

/**
 * Response to get published news article
 *
 * @generated from message api.v1alpha1.newsroom.GetPublishedNewsArticleByIdResponse
 */
export declare class GetPublishedNewsArticleByIdResponse extends Message<GetPublishedNewsArticleByIdResponse> {
  /**
   * published news article details
   *
   * @generated from field: api.v1alpha1.newsroom.PublishedNewsArticleDetails published_article_details = 1;
   */
  publishedArticleDetails?: PublishedNewsArticleDetails;

  constructor(data?: PartialMessage<GetPublishedNewsArticleByIdResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.GetPublishedNewsArticleByIdResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPublishedNewsArticleByIdResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPublishedNewsArticleByIdResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPublishedNewsArticleByIdResponse;

  static equals(a: GetPublishedNewsArticleByIdResponse | PlainMessage<GetPublishedNewsArticleByIdResponse> | undefined, b: GetPublishedNewsArticleByIdResponse | PlainMessage<GetPublishedNewsArticleByIdResponse> | undefined): boolean;
}

/**
 * Request to update published news article
 *
 * @generated from message api.v1alpha1.newsroom.UpdatePublishedNewsArticleRequest
 */
export declare class UpdatePublishedNewsArticleRequest extends Message<UpdatePublishedNewsArticleRequest> {
  /**
   * the published news article fields specified to be updated
   *
   * @generated from field: api.v1alpha1.newsroom.PublishedNewsArticleDetails published_article_details = 1;
   */
  publishedArticleDetails?: PublishedNewsArticleDetails;

  /**
   * list of fields Requested to be updated
   *
   * @generated from field: google.protobuf.FieldMask field_mask = 100;
   */
  fieldMask?: FieldMask;

  constructor(data?: PartialMessage<UpdatePublishedNewsArticleRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.UpdatePublishedNewsArticleRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdatePublishedNewsArticleRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdatePublishedNewsArticleRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdatePublishedNewsArticleRequest;

  static equals(a: UpdatePublishedNewsArticleRequest | PlainMessage<UpdatePublishedNewsArticleRequest> | undefined, b: UpdatePublishedNewsArticleRequest | PlainMessage<UpdatePublishedNewsArticleRequest> | undefined): boolean;
}

/**
 * Response to update published news article
 *
 * @generated from message api.v1alpha1.newsroom.UpdatePublishedNewsArticleResponse
 */
export declare class UpdatePublishedNewsArticleResponse extends Message<UpdatePublishedNewsArticleResponse> {
  /**
   * latest published news article
   *
   * @generated from field: api.v1alpha1.newsroom.PublishedNewsArticleDetails published_article_details = 1;
   */
  publishedArticleDetails?: PublishedNewsArticleDetails;

  constructor(data?: PartialMessage<UpdatePublishedNewsArticleResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.newsroom.UpdatePublishedNewsArticleResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdatePublishedNewsArticleResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdatePublishedNewsArticleResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdatePublishedNewsArticleResponse;

  static equals(a: UpdatePublishedNewsArticleResponse | PlainMessage<UpdatePublishedNewsArticleResponse> | undefined, b: UpdatePublishedNewsArticleResponse | PlainMessage<UpdatePublishedNewsArticleResponse> | undefined): boolean;
}

