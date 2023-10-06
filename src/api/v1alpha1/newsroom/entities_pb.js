// @generated by protoc-gen-es v1.3.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/newsroom/entities.proto (package api.v1alpha1.newsroom, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3, Timestamp } from "@bufbuild/protobuf";
import { ArticleStatus } from "../../commons/newsroom_pb.js";

/**
 * Request to create news article
 *
 * @generated from message api.v1alpha1.newsroom.CreateNewsArticleRequest
 */
export const CreateNewsArticleRequest = proto3.makeMessageType(
  "api.v1alpha1.newsroom.CreateNewsArticleRequest",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "image_reference_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response to create news article
 *
 * @generated from message api.v1alpha1.newsroom.CreateNewsArticleResponse
 */
export const CreateNewsArticleResponse = proto3.makeMessageType(
  "api.v1alpha1.newsroom.CreateNewsArticleResponse",
  () => [
    { no: 1, name: "article_details", kind: "message", T: NewsArticleDetails },
  ],
);

/**
 * Request to list of news articles
 *
 * @generated from message api.v1alpha1.newsroom.ListNewsArticlesRequest
 */
export const ListNewsArticlesRequest = proto3.makeMessageType(
  "api.v1alpha1.newsroom.ListNewsArticlesRequest",
  () => [
    { no: 1, name: "statuses", kind: "enum", T: proto3.getEnumType(ArticleStatus), repeated: true },
    { no: 100, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Responseponse to list of news articles
 *
 * @generated from message api.v1alpha1.newsroom.ListNewsArticlesResponse
 */
export const ListNewsArticlesResponse = proto3.makeMessageType(
  "api.v1alpha1.newsroom.ListNewsArticlesResponse",
  () => [
    { no: 1, name: "article_details", kind: "message", T: NewsArticleDetails, repeated: true },
  ],
);

/**
 * Request to get news article by id
 *
 * @generated from message api.v1alpha1.newsroom.GetNewsArticleByIdRequest
 */
export const GetNewsArticleByIdRequest = proto3.makeMessageType(
  "api.v1alpha1.newsroom.GetNewsArticleByIdRequest",
  () => [
    { no: 1, name: "new_article_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * Response to get news article
 *
 * @generated from message api.v1alpha1.newsroom.GetNewsArticleByIdResponse
 */
export const GetNewsArticleByIdResponse = proto3.makeMessageType(
  "api.v1alpha1.newsroom.GetNewsArticleByIdResponse",
  () => [
    { no: 1, name: "article_details", kind: "message", T: NewsArticleDetails },
  ],
);

/**
 * Request to update news article
 *
 * @generated from message api.v1alpha1.newsroom.UpdateNewsArticleRequest
 */
export const UpdateNewsArticleRequest = proto3.makeMessageType(
  "api.v1alpha1.newsroom.UpdateNewsArticleRequest",
  () => [
    { no: 1, name: "article_details", kind: "message", T: NewsArticleDetails },
    { no: 100, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response to update news article
 *
 * @generated from message api.v1alpha1.newsroom.UpdateNewsArticleResponse
 */
export const UpdateNewsArticleResponse = proto3.makeMessageType(
  "api.v1alpha1.newsroom.UpdateNewsArticleResponse",
  () => [
    { no: 1, name: "article_details", kind: "message", T: NewsArticleDetails },
  ],
);

/**
 * news article details
 *
 * @generated from message api.v1alpha1.newsroom.NewsArticleDetails
 */
export const NewsArticleDetails = proto3.makeMessageType(
  "api.v1alpha1.newsroom.NewsArticleDetails",
  () => [
    { no: 1, name: "new_article_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "status", kind: "enum", T: proto3.getEnumType(ArticleStatus) },
    { no: 5, name: "date_created", kind: "message", T: Timestamp },
    { no: 6, name: "last_edited", kind: "message", T: Timestamp },
    { no: 7, name: "image_reference_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * published article details
 *
 * @generated from message api.v1alpha1.newsroom.PublishedArticleDetails
 */
export const PublishedArticleDetails = proto3.makeMessageType(
  "api.v1alpha1.newsroom.PublishedArticleDetails",
  () => [
    { no: 1, name: "published_article_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "news_article_details", kind: "message", T: NewsArticleDetails },
    { no: 3, name: "date_published", kind: "message", T: Timestamp },
    { no: 4, name: "display_to_user", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * user activity details
 *
 * @generated from message api.v1alpha1.newsroom.UserActivity
 */
export const UserActivity = proto3.makeMessageType(
  "api.v1alpha1.newsroom.UserActivity",
  () => [
    { no: 1, name: "user_activity_log_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "date_created", kind: "message", T: Timestamp },
    { no: 3, name: "user_activity_details", kind: "message", T: UserActivity_UserActivityDetails },
  ],
);

/**
 * user activity details
 *
 * @generated from message api.v1alpha1.newsroom.UserActivity.UserActivityDetails
 */
export const UserActivity_UserActivityDetails = proto3.makeMessageType(
  "api.v1alpha1.newsroom.UserActivity.UserActivityDetails",
  () => [
    { no: 1, name: "published_article_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
  {localName: "UserActivity_UserActivityDetails"},
);

/**
 * Request to create published article
 *
 * @generated from message api.v1alpha1.newsroom.CreatePublishedArticleRequest
 */
export const CreatePublishedArticleRequest = proto3.makeMessageType(
  "api.v1alpha1.newsroom.CreatePublishedArticleRequest",
  () => [
    { no: 1, name: "new_article_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "display_to_user", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "article_link", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response to create published article
 *
 * @generated from message api.v1alpha1.newsroom.CreatePublishedArticleResponse
 */
export const CreatePublishedArticleResponse = proto3.makeMessageType(
  "api.v1alpha1.newsroom.CreatePublishedArticleResponse",
  () => [
    { no: 1, name: "published_article_details", kind: "message", T: PublishedArticleDetails },
  ],
);

/**
 * Request to list of published articles
 *
 * @generated from message api.v1alpha1.newsroom.ListPublishedArticlesRequest
 */
export const ListPublishedArticlesRequest = proto3.makeMessageType(
  "api.v1alpha1.newsroom.ListPublishedArticlesRequest",
  [],
);

/**
 * Response to list of published articles
 *
 * @generated from message api.v1alpha1.newsroom.ListPublishedArticlesResponse
 */
export const ListPublishedArticlesResponse = proto3.makeMessageType(
  "api.v1alpha1.newsroom.ListPublishedArticlesResponse",
  () => [
    { no: 1, name: "published_article_details", kind: "message", T: PublishedArticleDetails, repeated: true },
  ],
);

/**
 * Request to get published article by id
 *
 * @generated from message api.v1alpha1.newsroom.GetPublishedArticleByIdRequest
 */
export const GetPublishedArticleByIdRequest = proto3.makeMessageType(
  "api.v1alpha1.newsroom.GetPublishedArticleByIdRequest",
  () => [
    { no: 1, name: "new_article_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "published_article_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * Response to get published article
 *
 * @generated from message api.v1alpha1.newsroom.GetPublishedArticleByIdResponse
 */
export const GetPublishedArticleByIdResponse = proto3.makeMessageType(
  "api.v1alpha1.newsroom.GetPublishedArticleByIdResponse",
  () => [
    { no: 1, name: "published_article_details", kind: "message", T: PublishedArticleDetails },
  ],
);

/**
 * Request to update user activity
 *
 * @generated from message api.v1alpha1.newsroom.UserActivityRequest
 */
export const UserActivityRequest = proto3.makeMessageType(
  "api.v1alpha1.newsroom.UserActivityRequest",
  () => [
    { no: 1, name: "published_article_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * Response to user activity updates
 *
 * @generated from message api.v1alpha1.newsroom.UserActivityResponse
 */
export const UserActivityResponse = proto3.makeMessageType(
  "api.v1alpha1.newsroom.UserActivityResponse",
  () => [
    { no: 1, name: "user_activity", kind: "message", T: UserActivity },
  ],
);

/**
 * Request to get unseen news articles for the user
 *
 * @generated from message api.v1alpha1.newsroom.GetNewsForUserRequest
 */
export const GetNewsForUserRequest = proto3.makeMessageType(
  "api.v1alpha1.newsroom.GetNewsForUserRequest",
  [],
);

/**
 * Response to unseen news articles for the user
 *
 * @generated from message api.v1alpha1.newsroom.GetNewsForUserResponse
 */
export const GetNewsForUserResponse = proto3.makeMessageType(
  "api.v1alpha1.newsroom.GetNewsForUserResponse",
  () => [
    { no: 1, name: "published_article_details", kind: "message", T: PublishedArticleDetails, repeated: true },
  ],
);

/**
 * request to upload image for the news article
 *
 * @generated from message api.v1alpha1.newsroom.StoreNewsArticleImageRequest
 */
export const StoreNewsArticleImageRequest = proto3.makeMessageType(
  "api.v1alpha1.newsroom.StoreNewsArticleImageRequest",
  () => [
    { no: 1, name: "image", kind: "message", T: NewsArticleImage },
  ],
);

/**
 * image for the news article details
 *
 * @generated from message api.v1alpha1.newsroom.NewsArticleImage
 */
export const NewsArticleImage = proto3.makeMessageType(
  "api.v1alpha1.newsroom.NewsArticleImage",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "new_article_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "download_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "image_reference_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "image_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * response to uploaded image
 *
 * @generated from message api.v1alpha1.newsroom.StoreNewsArticleImageResponse
 */
export const StoreNewsArticleImageResponse = proto3.makeMessageType(
  "api.v1alpha1.newsroom.StoreNewsArticleImageResponse",
  () => [
    { no: 1, name: "image", kind: "message", T: NewsArticleImage },
  ],
);

/**
 * request to list all images news article
 *
 * @generated from message api.v1alpha1.newsroom.ListImagesForNewsArticleRequest
 */
export const ListImagesForNewsArticleRequest = proto3.makeMessageType(
  "api.v1alpha1.newsroom.ListImagesForNewsArticleRequest",
  () => [
    { no: 1, name: "new_article_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * response to list all images for the news article
 *
 * @generated from message api.v1alpha1.newsroom.ListImagesForNewsArticleResponse
 */
export const ListImagesForNewsArticleResponse = proto3.makeMessageType(
  "api.v1alpha1.newsroom.ListImagesForNewsArticleResponse",
  () => [
    { no: 1, name: "news_article_images", kind: "message", T: NewsArticleImage, repeated: true },
  ],
);

