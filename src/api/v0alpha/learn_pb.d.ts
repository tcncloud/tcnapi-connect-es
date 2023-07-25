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

// @generated by protoc-gen-es v1.3.0 with parameter "target=js+dts"
// @generated from file api/v0alpha/learn.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * request to check if learning page url exists
 *
 * @generated from message api.v0alpha.ExistReq
 */
export declare class ExistReq extends Message<ExistReq> {
  /**
   * @generated from field: string url = 1;
   */
  url: string;

  /**
   * @generated from field: string locale = 2;
   */
  locale: string;

  constructor(data?: PartialMessage<ExistReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.ExistReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExistReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExistReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExistReq;

  static equals(a: ExistReq | PlainMessage<ExistReq> | undefined, b: ExistReq | PlainMessage<ExistReq> | undefined): boolean;
}

/**
 * response for checking if learning page  url exists
 *
 * @generated from message api.v0alpha.ExistRes
 */
export declare class ExistRes extends Message<ExistRes> {
  /**
   * @generated from field: bool exist = 1;
   */
  exist: boolean;

  constructor(data?: PartialMessage<ExistRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.ExistRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExistRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExistRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExistRes;

  static equals(a: ExistRes | PlainMessage<ExistRes> | undefined, b: ExistRes | PlainMessage<ExistRes> | undefined): boolean;
}

/**
 * request to retreive learning pages content from the url
 *
 * @generated from message api.v0alpha.ContentReq
 */
export declare class ContentReq extends Message<ContentReq> {
  /**
   * @generated from field: string url = 1;
   */
  url: string;

  /**
   * @generated from field: string locale = 2;
   */
  locale: string;

  constructor(data?: PartialMessage<ContentReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.ContentReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContentReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContentReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContentReq;

  static equals(a: ContentReq | PlainMessage<ContentReq> | undefined, b: ContentReq | PlainMessage<ContentReq> | undefined): boolean;
}

/**
 * response to retreive learning pages content
 *
 * @generated from message api.v0alpha.ContentRes
 */
export declare class ContentRes extends Message<ContentRes> {
  /**
   * @generated from field: string content = 1;
   */
  content: string;

  /**
   * The last time this learning content was edited.
   *
   * @generated from field: google.protobuf.Timestamp last_edited_timestamp = 2;
   */
  lastEditedTimestamp?: Timestamp;

  /**
   * List containing static file links from parsing markdown
   *
   * @generated from field: repeated api.v0alpha.LearnImage images = 3;
   */
  images: LearnImage[];

  /**
   * title of the article
   *
   * @generated from field: string title = 4;
   */
  title: string;

  constructor(data?: PartialMessage<ContentRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.ContentRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContentRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContentRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContentRes;

  static equals(a: ContentRes | PlainMessage<ContentRes> | undefined, b: ContentRes | PlainMessage<ContentRes> | undefined): boolean;
}

/**
 * request to retreive last user edited learning pages content
 *
 * @generated from message api.v0alpha.ContentEditorDataReq
 */
export declare class ContentEditorDataReq extends Message<ContentEditorDataReq> {
  /**
   * @generated from field: string url = 1;
   */
  url: string;

  /**
   * @generated from field: string locale = 2;
   */
  locale: string;

  constructor(data?: PartialMessage<ContentEditorDataReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.ContentEditorDataReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContentEditorDataReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContentEditorDataReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContentEditorDataReq;

  static equals(a: ContentEditorDataReq | PlainMessage<ContentEditorDataReq> | undefined, b: ContentEditorDataReq | PlainMessage<ContentEditorDataReq> | undefined): boolean;
}

/**
 * response to retreive last user edited learning pages content
 *
 * @generated from message api.v0alpha.ContentEditorDataRes
 */
export declare class ContentEditorDataRes extends Message<ContentEditorDataRes> {
  /**
   * The user who edited the content last. This is only visible to users with the Permission_PERMISSION_LEARN_EDIT permission.
   *
   * @generated from field: string last_edited_user = 1;
   */
  lastEditedUser: string;

  constructor(data?: PartialMessage<ContentEditorDataRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.ContentEditorDataRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContentEditorDataRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContentEditorDataRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContentEditorDataRes;

  static equals(a: ContentEditorDataRes | PlainMessage<ContentEditorDataRes> | undefined, b: ContentEditorDataRes | PlainMessage<ContentEditorDataRes> | undefined): boolean;
}

/**
 * request to update learning pages content based on the url
 *
 * @generated from message api.v0alpha.UpdateReq
 */
export declare class UpdateReq extends Message<UpdateReq> {
  /**
   * @generated from field: string url = 1;
   */
  url: string;

  /**
   * @generated from field: string locale = 2;
   */
  locale: string;

  /**
   * @generated from field: string content = 3;
   */
  content: string;

  /**
   * commit message
   *
   * @generated from field: string message = 12;
   */
  message: string;

  /**
   * title of the article
   *
   * @generated from field: string title = 13;
   */
  title: string;

  constructor(data?: PartialMessage<UpdateReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.UpdateReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateReq;

  static equals(a: UpdateReq | PlainMessage<UpdateReq> | undefined, b: UpdateReq | PlainMessage<UpdateReq> | undefined): boolean;
}

/**
 * response to update learning pages content
 *
 * @generated from message api.v0alpha.UpdateRes
 */
export declare class UpdateRes extends Message<UpdateRes> {
  constructor(data?: PartialMessage<UpdateRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.UpdateRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateRes;

  static equals(a: UpdateRes | PlainMessage<UpdateRes> | undefined, b: UpdateRes | PlainMessage<UpdateRes> | undefined): boolean;
}

/**
 * request to export multiple pages of the learning center markdown to PDF
 *
 * @generated from message api.v0alpha.ExportManyReq
 */
export declare class ExportManyReq extends Message<ExportManyReq> {
  /**
   * url identifiers for the whole book containing all the pages
   *
   * @generated from field: repeated string url = 1;
   */
  url: string[];

  /**
   * locale used for the markdown contents
   *
   * @generated from field: string locale = 2;
   */
  locale: string;

  /**
   * header image content
   *
   * @generated from field: string content = 3;
   */
  content: string;

  constructor(data?: PartialMessage<ExportManyReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.ExportManyReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExportManyReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExportManyReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExportManyReq;

  static equals(a: ExportManyReq | PlainMessage<ExportManyReq> | undefined, b: ExportManyReq | PlainMessage<ExportManyReq> | undefined): boolean;
}

/**
 * response to export the pages of the learning center markdown to PDF
 *
 * @generated from message api.v0alpha.ExportRes
 */
export declare class ExportRes extends Message<ExportRes> {
  /**
   * generated pdf contents to be downloaded from url
   *
   * @generated from field: string download_url = 1;
   */
  downloadUrl: string;

  constructor(data?: PartialMessage<ExportRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.ExportRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExportRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExportRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExportRes;

  static equals(a: ExportRes | PlainMessage<ExportRes> | undefined, b: ExportRes | PlainMessage<ExportRes> | undefined): boolean;
}

/**
 * request to upload url for static images
 *
 * @generated from message api.v0alpha.StoreStaticImageReq
 */
export declare class StoreStaticImageReq extends Message<StoreStaticImageReq> {
  /**
   * LearnImage
   *
   * @generated from field: api.v0alpha.LearnImage image = 1;
   */
  image?: LearnImage;

  constructor(data?: PartialMessage<StoreStaticImageReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.StoreStaticImageReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoreStaticImageReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoreStaticImageReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoreStaticImageReq;

  static equals(a: StoreStaticImageReq | PlainMessage<StoreStaticImageReq> | undefined, b: StoreStaticImageReq | PlainMessage<StoreStaticImageReq> | undefined): boolean;
}

/**
 * request for LearnImage
 *
 * @generated from message api.v0alpha.LearnImage
 */
export declare class LearnImage extends Message<LearnImage> {
  /**
   * unique name of the image
   *
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * image content
   *
   * @generated from field: string content = 2;
   */
  content: string;

  /**
   * download image url
   *
   * @generated from field: string download_url = 3;
   */
  downloadUrl: string;

  constructor(data?: PartialMessage<LearnImage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.LearnImage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LearnImage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LearnImage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LearnImage;

  static equals(a: LearnImage | PlainMessage<LearnImage> | undefined, b: LearnImage | PlainMessage<LearnImage> | undefined): boolean;
}

/**
 * response to upload url for static images
 *
 * @generated from message api.v0alpha.StoreStaticImageRes
 */
export declare class StoreStaticImageRes extends Message<StoreStaticImageRes> {
  /**
   * updated LearnImage details
   *
   * @generated from field: api.v0alpha.LearnImage image = 1;
   */
  image?: LearnImage;

  constructor(data?: PartialMessage<StoreStaticImageRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.StoreStaticImageRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoreStaticImageRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoreStaticImageRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoreStaticImageRes;

  static equals(a: StoreStaticImageRes | PlainMessage<StoreStaticImageRes> | undefined, b: StoreStaticImageRes | PlainMessage<StoreStaticImageRes> | undefined): boolean;
}

/**
 * request to search content in learning pages
 *
 * @generated from message api.v0alpha.SearchContentReq
 */
export declare class SearchContentReq extends Message<SearchContentReq> {
  /**
   * search for the specific content in markdown contents
   *
   * @generated from field: string search_content = 1;
   */
  searchContent: string;

  /**
   * locale used for the markdown contents
   *
   * @generated from field: string locale = 2;
   */
  locale: string;

  /**
   * field mask to filter apps that are accessible to be searched
   *
   * @generated from field: google.protobuf.FieldMask field_mask = 5;
   */
  fieldMask?: FieldMask;

  constructor(data?: PartialMessage<SearchContentReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.SearchContentReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchContentReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchContentReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchContentReq;

  static equals(a: SearchContentReq | PlainMessage<SearchContentReq> | undefined, b: SearchContentReq | PlainMessage<SearchContentReq> | undefined): boolean;
}

/**
 * response to search in learning pages
 *
 * @generated from message api.v0alpha.SearchRes
 */
export declare class SearchRes extends Message<SearchRes> {
  /**
   * matched urls
   *
   * @generated from field: repeated api.v0alpha.LearnSearchDetails search_details = 1;
   */
  searchDetails: LearnSearchDetails[];

  constructor(data?: PartialMessage<SearchRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.SearchRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchRes;

  static equals(a: SearchRes | PlainMessage<SearchRes> | undefined, b: SearchRes | PlainMessage<SearchRes> | undefined): boolean;
}

/**
 * search response details
 *
 * @generated from message api.v0alpha.LearnSearchDetails
 */
export declare class LearnSearchDetails extends Message<LearnSearchDetails> {
  /**
   * matched storage bucket
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * matched markdown content
   *
   * @generated from field: string content = 2;
   */
  content: string;

  constructor(data?: PartialMessage<LearnSearchDetails>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.LearnSearchDetails";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LearnSearchDetails;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LearnSearchDetails;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LearnSearchDetails;

  static equals(a: LearnSearchDetails | PlainMessage<LearnSearchDetails> | undefined, b: LearnSearchDetails | PlainMessage<LearnSearchDetails> | undefined): boolean;
}

/**
 * upload dynamic learning image screenshot request
 *
 * @generated from message api.v0alpha.UploadDynamicScreenshotReq
 */
export declare class UploadDynamicScreenshotReq extends Message<UploadDynamicScreenshotReq> {
  /**
   * learn id name
   *
   * @generated from field: string data_learn_id = 1;
   */
  dataLearnId: string;

  /**
   * current version
   *
   * @generated from field: int64 version = 2;
   */
  version: bigint;

  /**
   * locale used for the markdown contents
   *
   * @generated from field: string locale = 3;
   */
  locale: string;

  /**
   * image content
   *
   * @generated from field: string content = 4;
   */
  content: string;

  constructor(data?: PartialMessage<UploadDynamicScreenshotReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.UploadDynamicScreenshotReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UploadDynamicScreenshotReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UploadDynamicScreenshotReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UploadDynamicScreenshotReq;

  static equals(a: UploadDynamicScreenshotReq | PlainMessage<UploadDynamicScreenshotReq> | undefined, b: UploadDynamicScreenshotReq | PlainMessage<UploadDynamicScreenshotReq> | undefined): boolean;
}

/**
 * upload dynamic learning image screenshot response
 *
 * @generated from message api.v0alpha.UploadDynamicScreenshotRes
 */
export declare class UploadDynamicScreenshotRes extends Message<UploadDynamicScreenshotRes> {
  /**
   * learn id name
   *
   * @generated from field: string data_learn_id = 1;
   */
  dataLearnId: string;

  /**
   * download url
   *
   * @generated from field: string download_url = 2;
   */
  downloadUrl: string;

  constructor(data?: PartialMessage<UploadDynamicScreenshotRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.UploadDynamicScreenshotRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UploadDynamicScreenshotRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UploadDynamicScreenshotRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UploadDynamicScreenshotRes;

  static equals(a: UploadDynamicScreenshotRes | PlainMessage<UploadDynamicScreenshotRes> | undefined, b: UploadDynamicScreenshotRes | PlainMessage<UploadDynamicScreenshotRes> | undefined): boolean;
}

/**
 * request to get standalone articles
 *
 * @generated from message api.v0alpha.StandaloneReq
 */
export declare class StandaloneReq extends Message<StandaloneReq> {
  /**
   * locale used for the markdown contents
   *
   * @generated from field: string locale = 1;
   */
  locale: string;

  constructor(data?: PartialMessage<StandaloneReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.StandaloneReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StandaloneReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StandaloneReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StandaloneReq;

  static equals(a: StandaloneReq | PlainMessage<StandaloneReq> | undefined, b: StandaloneReq | PlainMessage<StandaloneReq> | undefined): boolean;
}

/**
 * standalone articles
 *
 * @generated from message api.v0alpha.StandaloneRes
 */
export declare class StandaloneRes extends Message<StandaloneRes> {
  /**
   * @generated from field: repeated api.v0alpha.LearnStandaloneDetails standalone_details = 1;
   */
  standaloneDetails: LearnStandaloneDetails[];

  constructor(data?: PartialMessage<StandaloneRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.StandaloneRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StandaloneRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StandaloneRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StandaloneRes;

  static equals(a: StandaloneRes | PlainMessage<StandaloneRes> | undefined, b: StandaloneRes | PlainMessage<StandaloneRes> | undefined): boolean;
}

/**
 * response to get standalone articles
 *
 * @generated from message api.v0alpha.LearnStandaloneDetails
 */
export declare class LearnStandaloneDetails extends Message<LearnStandaloneDetails> {
  /**
   * storage bucket
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * markdown content
   *
   * @generated from field: string content = 2;
   */
  content: string;

  /**
   * The last time this learning content was edited.
   *
   * @generated from field: google.protobuf.Timestamp last_edited_timestamp = 3;
   */
  lastEditedTimestamp?: Timestamp;

  constructor(data?: PartialMessage<LearnStandaloneDetails>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.LearnStandaloneDetails";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LearnStandaloneDetails;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LearnStandaloneDetails;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LearnStandaloneDetails;

  static equals(a: LearnStandaloneDetails | PlainMessage<LearnStandaloneDetails> | undefined, b: LearnStandaloneDetails | PlainMessage<LearnStandaloneDetails> | undefined): boolean;
}

/**
 * request to delete standalone articles
 *
 * @generated from message api.v0alpha.DeleteStandaloneReq
 */
export declare class DeleteStandaloneReq extends Message<DeleteStandaloneReq> {
  /**
   * locale used for the markdown contents
   *
   * @generated from field: string locale = 1;
   */
  locale: string;

  /**
   * list of article names
   *
   * @generated from field: repeated string article_names = 2;
   */
  articleNames: string[];

  constructor(data?: PartialMessage<DeleteStandaloneReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.DeleteStandaloneReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteStandaloneReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteStandaloneReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteStandaloneReq;

  static equals(a: DeleteStandaloneReq | PlainMessage<DeleteStandaloneReq> | undefined, b: DeleteStandaloneReq | PlainMessage<DeleteStandaloneReq> | undefined): boolean;
}

/**
 * response to delete standalone articles
 *
 * @generated from message api.v0alpha.DeleteStandaloneRes
 */
export declare class DeleteStandaloneRes extends Message<DeleteStandaloneRes> {
  constructor(data?: PartialMessage<DeleteStandaloneRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.DeleteStandaloneRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteStandaloneRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteStandaloneRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteStandaloneRes;

  static equals(a: DeleteStandaloneRes | PlainMessage<DeleteStandaloneRes> | undefined, b: DeleteStandaloneRes | PlainMessage<DeleteStandaloneRes> | undefined): boolean;
}

/**
 * request to get snippets
 *
 * @generated from message api.v0alpha.SnippetReq
 */
export declare class SnippetReq extends Message<SnippetReq> {
  /**
   * locale used for the markdown contents
   *
   * @generated from field: string locale = 1;
   */
  locale: string;

  constructor(data?: PartialMessage<SnippetReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.SnippetReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnippetReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnippetReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnippetReq;

  static equals(a: SnippetReq | PlainMessage<SnippetReq> | undefined, b: SnippetReq | PlainMessage<SnippetReq> | undefined): boolean;
}

/**
 * response to get snippets
 *
 * @generated from message api.v0alpha.SnippetRes
 */
export declare class SnippetRes extends Message<SnippetRes> {
  /**
   * @generated from field: repeated api.v0alpha.LearnSnippetDetails snippet_details = 1;
   */
  snippetDetails: LearnSnippetDetails[];

  constructor(data?: PartialMessage<SnippetRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.SnippetRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnippetRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnippetRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnippetRes;

  static equals(a: SnippetRes | PlainMessage<SnippetRes> | undefined, b: SnippetRes | PlainMessage<SnippetRes> | undefined): boolean;
}

/**
 * snippet details
 *
 * @generated from message api.v0alpha.LearnSnippetDetails
 */
export declare class LearnSnippetDetails extends Message<LearnSnippetDetails> {
  /**
   * storage bucket
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * markdown content
   *
   * @generated from field: string content = 2;
   */
  content: string;

  /**
   * The last time this learning content was edited.
   *
   * @generated from field: google.protobuf.Timestamp last_edited_timestamp = 3;
   */
  lastEditedTimestamp?: Timestamp;

  constructor(data?: PartialMessage<LearnSnippetDetails>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.LearnSnippetDetails";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LearnSnippetDetails;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LearnSnippetDetails;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LearnSnippetDetails;

  static equals(a: LearnSnippetDetails | PlainMessage<LearnSnippetDetails> | undefined, b: LearnSnippetDetails | PlainMessage<LearnSnippetDetails> | undefined): boolean;
}

/**
 * request to delete learn pages
 *
 * @generated from message api.v0alpha.DeleteLearnPagesReq
 */
export declare class DeleteLearnPagesReq extends Message<DeleteLearnPagesReq> {
  /**
   * locale used for the markdown contents
   *
   * @generated from field: string locale = 1;
   */
  locale: string;

  /**
   * list of learning urls to be deleted
   *
   * @generated from field: repeated string url = 2;
   */
  url: string[];

  constructor(data?: PartialMessage<DeleteLearnPagesReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.DeleteLearnPagesReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteLearnPagesReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteLearnPagesReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteLearnPagesReq;

  static equals(a: DeleteLearnPagesReq | PlainMessage<DeleteLearnPagesReq> | undefined, b: DeleteLearnPagesReq | PlainMessage<DeleteLearnPagesReq> | undefined): boolean;
}

/**
 * response to delete learn pages
 *
 * @generated from message api.v0alpha.DeleteLearnPagesRes
 */
export declare class DeleteLearnPagesRes extends Message<DeleteLearnPagesRes> {
  constructor(data?: PartialMessage<DeleteLearnPagesRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.DeleteLearnPagesRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteLearnPagesRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteLearnPagesRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteLearnPagesRes;

  static equals(a: DeleteLearnPagesRes | PlainMessage<DeleteLearnPagesRes> | undefined, b: DeleteLearnPagesRes | PlainMessage<DeleteLearnPagesRes> | undefined): boolean;
}

