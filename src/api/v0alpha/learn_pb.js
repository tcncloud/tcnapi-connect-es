// Copyright (c) 2019, TCN Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file api/v0alpha/learn.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * request to check if learning page url exists
 *
 * @generated from message api.v0alpha.ExistReq
 */
export const ExistReq = proto3.makeMessageType(
  "api.v0alpha.ExistReq",
  () => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "locale", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * response for checking if learning page  url exists
 *
 * @generated from message api.v0alpha.ExistRes
 */
export const ExistRes = proto3.makeMessageType(
  "api.v0alpha.ExistRes",
  () => [
    { no: 1, name: "exist", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * request to retreive learning pages content from the url
 *
 * @generated from message api.v0alpha.ContentReq
 */
export const ContentReq = proto3.makeMessageType(
  "api.v0alpha.ContentReq",
  () => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "locale", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * response to retreive learning pages content
 *
 * @generated from message api.v0alpha.ContentRes
 */
export const ContentRes = proto3.makeMessageType(
  "api.v0alpha.ContentRes",
  () => [
    { no: 1, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "last_edited_timestamp", kind: "message", T: Timestamp },
    { no: 3, name: "images", kind: "message", T: LearnImage, repeated: true },
    { no: 4, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "total_view_count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "last_edited_user", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * request to retreive last user edited learning pages content
 *
 * @generated from message api.v0alpha.ContentEditorDataReq
 */
export const ContentEditorDataReq = proto3.makeMessageType(
  "api.v0alpha.ContentEditorDataReq",
  () => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "locale", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * response to retreive last user edited learning pages content
 *
 * @generated from message api.v0alpha.ContentEditorDataRes
 */
export const ContentEditorDataRes = proto3.makeMessageType(
  "api.v0alpha.ContentEditorDataRes",
  () => [
    { no: 1, name: "last_edited_user", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * request to update learning pages content based on the url
 *
 * @generated from message api.v0alpha.UpdateReq
 */
export const UpdateReq = proto3.makeMessageType(
  "api.v0alpha.UpdateReq",
  () => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "locale", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * response to update learning pages content
 *
 * @generated from message api.v0alpha.UpdateRes
 */
export const UpdateRes = proto3.makeMessageType(
  "api.v0alpha.UpdateRes",
  [],
);

/**
 * request to export multiple pages of the learning center markdown to PDF
 *
 * @generated from message api.v0alpha.ExportManyReq
 */
export const ExportManyReq = proto3.makeMessageType(
  "api.v0alpha.ExportManyReq",
  () => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "locale", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * response to export the pages of the learning center markdown to PDF
 *
 * @generated from message api.v0alpha.ExportRes
 */
export const ExportRes = proto3.makeMessageType(
  "api.v0alpha.ExportRes",
  () => [
    { no: 1, name: "download_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * request to upload url for static images
 *
 * @generated from message api.v0alpha.StoreStaticImageReq
 */
export const StoreStaticImageReq = proto3.makeMessageType(
  "api.v0alpha.StoreStaticImageReq",
  () => [
    { no: 1, name: "image", kind: "message", T: LearnImage },
  ],
);

/**
 * request for LearnImage
 *
 * @generated from message api.v0alpha.LearnImage
 */
export const LearnImage = proto3.makeMessageType(
  "api.v0alpha.LearnImage",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "download_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * response to upload url for static images
 *
 * @generated from message api.v0alpha.StoreStaticImageRes
 */
export const StoreStaticImageRes = proto3.makeMessageType(
  "api.v0alpha.StoreStaticImageRes",
  () => [
    { no: 1, name: "image", kind: "message", T: LearnImage },
  ],
);

/**
 * request to search content in learning pages
 *
 * @generated from message api.v0alpha.SearchContentReq
 */
export const SearchContentReq = proto3.makeMessageType(
  "api.v0alpha.SearchContentReq",
  () => [
    { no: 1, name: "search_content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "locale", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * response to search in learning pages
 *
 * @generated from message api.v0alpha.SearchRes
 */
export const SearchRes = proto3.makeMessageType(
  "api.v0alpha.SearchRes",
  () => [
    { no: 1, name: "search_details", kind: "message", T: LearnSearchDetails, repeated: true },
  ],
);

/**
 * search response details
 *
 * @generated from message api.v0alpha.LearnSearchDetails
 */
export const LearnSearchDetails = proto3.makeMessageType(
  "api.v0alpha.LearnSearchDetails",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * upload dynamic learning image screenshot request
 *
 * @generated from message api.v0alpha.UploadDynamicScreenshotReq
 */
export const UploadDynamicScreenshotReq = proto3.makeMessageType(
  "api.v0alpha.UploadDynamicScreenshotReq",
  () => [
    { no: 1, name: "data_learn_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "version", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "locale", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * upload dynamic learning image screenshot response
 *
 * @generated from message api.v0alpha.UploadDynamicScreenshotRes
 */
export const UploadDynamicScreenshotRes = proto3.makeMessageType(
  "api.v0alpha.UploadDynamicScreenshotRes",
  () => [
    { no: 1, name: "data_learn_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "download_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * request to get standalone articles
 *
 * @generated from message api.v0alpha.StandaloneReq
 */
export const StandaloneReq = proto3.makeMessageType(
  "api.v0alpha.StandaloneReq",
  () => [
    { no: 1, name: "locale", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "category", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * standalone articles
 *
 * @generated from message api.v0alpha.StandaloneRes
 */
export const StandaloneRes = proto3.makeMessageType(
  "api.v0alpha.StandaloneRes",
  () => [
    { no: 1, name: "standalone_details", kind: "message", T: LearnStandaloneDetails, repeated: true },
  ],
);

/**
 * response to get standalone articles
 *
 * @generated from message api.v0alpha.LearnStandaloneDetails
 */
export const LearnStandaloneDetails = proto3.makeMessageType(
  "api.v0alpha.LearnStandaloneDetails",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "last_edited_timestamp", kind: "message", T: Timestamp },
    { no: 4, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * request to delete standalone articles
 *
 * @generated from message api.v0alpha.DeleteStandaloneReq
 */
export const DeleteStandaloneReq = proto3.makeMessageType(
  "api.v0alpha.DeleteStandaloneReq",
  () => [
    { no: 1, name: "locale", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "article_names", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * response to delete standalone articles
 *
 * @generated from message api.v0alpha.DeleteStandaloneRes
 */
export const DeleteStandaloneRes = proto3.makeMessageType(
  "api.v0alpha.DeleteStandaloneRes",
  [],
);

/**
 * request to get snippets
 *
 * @generated from message api.v0alpha.SnippetReq
 */
export const SnippetReq = proto3.makeMessageType(
  "api.v0alpha.SnippetReq",
  () => [
    { no: 1, name: "locale", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * response to get snippets
 *
 * @generated from message api.v0alpha.SnippetRes
 */
export const SnippetRes = proto3.makeMessageType(
  "api.v0alpha.SnippetRes",
  () => [
    { no: 1, name: "snippet_details", kind: "message", T: LearnSnippetDetails, repeated: true },
  ],
);

/**
 * snippet details
 *
 * @generated from message api.v0alpha.LearnSnippetDetails
 */
export const LearnSnippetDetails = proto3.makeMessageType(
  "api.v0alpha.LearnSnippetDetails",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "last_edited_timestamp", kind: "message", T: Timestamp },
    { no: 4, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * request to delete learn pages
 *
 * @generated from message api.v0alpha.DeleteLearnPagesReq
 */
export const DeleteLearnPagesReq = proto3.makeMessageType(
  "api.v0alpha.DeleteLearnPagesReq",
  () => [
    { no: 1, name: "locale", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * response to delete learn pages
 *
 * @generated from message api.v0alpha.DeleteLearnPagesRes
 */
export const DeleteLearnPagesRes = proto3.makeMessageType(
  "api.v0alpha.DeleteLearnPagesRes",
  [],
);

/**
 * request to create edit version
 *
 * @generated from message api.v0alpha.CreateEditVersionReq
 */
export const CreateEditVersionReq = proto3.makeMessageType(
  "api.v0alpha.CreateEditVersionReq",
  () => [
    { no: 1, name: "src_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "dest_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * response to create edit version
 *
 * @generated from message api.v0alpha.CreateEditVersionRes
 */
export const CreateEditVersionRes = proto3.makeMessageType(
  "api.v0alpha.CreateEditVersionRes",
  [],
);

/**
 * request to publish version
 *
 * @generated from message api.v0alpha.PublishVersionReq
 */
export const PublishVersionReq = proto3.makeMessageType(
  "api.v0alpha.PublishVersionReq",
  () => [
    { no: 1, name: "publish_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * response to publish version
 *
 * @generated from message api.v0alpha.PublishVersionRes
 */
export const PublishVersionRes = proto3.makeMessageType(
  "api.v0alpha.PublishVersionRes",
  [],
);

/**
 * request to retrieve learning pages content from the url by version
 *
 * @generated from message api.v0alpha.ContentByVersionReq
 */
export const ContentByVersionReq = proto3.makeMessageType(
  "api.v0alpha.ContentByVersionReq",
  () => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "locale", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * request to update learning pages content based on the url by version
 *
 * @generated from message api.v0alpha.UpdateByVersionReq
 */
export const UpdateByVersionReq = proto3.makeMessageType(
  "api.v0alpha.UpdateByVersionReq",
  () => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "locale", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * request to search content in learning pages based on version
 *
 * @generated from message api.v0alpha.SearchContentByVersionReq
 */
export const SearchContentByVersionReq = proto3.makeMessageType(
  "api.v0alpha.SearchContentByVersionReq",
  () => [
    { no: 1, name: "search_content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "locale", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "field_mask", kind: "message", T: FieldMask },
    { no: 6, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * request to retrieve diff after comparing file contents in different versions
 *
 * @generated from message api.v0alpha.ReviewFileVersionsReq
 */
export const ReviewFileVersionsReq = proto3.makeMessageType(
  "api.v0alpha.ReviewFileVersionsReq",
  () => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "locale", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * response to retrieve diff after comparing file contents in different versions
 *
 * @generated from message api.v0alpha.ReviewFileVersionsRes
 */
export const ReviewFileVersionsRes = proto3.makeMessageType(
  "api.v0alpha.ReviewFileVersionsRes",
  () => [
    { no: 1, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "diff_content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "images", kind: "message", T: LearnImage, repeated: true },
  ],
);

/**
 * request to retrieve list of differences after comparing different versions
 *
 * @generated from message api.v0alpha.ReviewVersionReq
 */
export const ReviewVersionReq = proto3.makeMessageType(
  "api.v0alpha.ReviewVersionReq",
  () => [
    { no: 1, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "locale", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * response to list of differences after comparing different versions
 *
 * @generated from message api.v0alpha.ReviewVersionRes
 */
export const ReviewVersionRes = proto3.makeMessageType(
  "api.v0alpha.ReviewVersionRes",
  () => [
    { no: 1, name: "diff_urls", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "diff_file_names", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

