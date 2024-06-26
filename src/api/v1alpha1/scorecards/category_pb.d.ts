// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/scorecards/category.proto (package api.v1alpha1.scorecards, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Duration, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Category } from "../../commons/scorecards_pb.js";
import type { CallType_Enum } from "../../commons/acd_pb.js";

/**
 * CreateCategoryRequest is request to create a category.
 *
 * @generated from message api.v1alpha1.scorecards.CreateCategoryRequest
 */
export declare class CreateCategoryRequest extends Message<CreateCategoryRequest> {
  /**
   * Required.
   *
   * @generated from field: api.commons.Category category = 1;
   */
  category?: Category;

  constructor(data?: PartialMessage<CreateCategoryRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.CreateCategoryRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateCategoryRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateCategoryRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateCategoryRequest;

  static equals(a: CreateCategoryRequest | PlainMessage<CreateCategoryRequest> | undefined, b: CreateCategoryRequest | PlainMessage<CreateCategoryRequest> | undefined): boolean;
}

/**
 * CreateCategoryResponse returns the created category.
 *
 * @generated from message api.v1alpha1.scorecards.CreateCategoryResponse
 */
export declare class CreateCategoryResponse extends Message<CreateCategoryResponse> {
  /**
   * @generated from field: api.commons.Category category = 1;
   */
  category?: Category;

  constructor(data?: PartialMessage<CreateCategoryResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.CreateCategoryResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateCategoryResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateCategoryResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateCategoryResponse;

  static equals(a: CreateCategoryResponse | PlainMessage<CreateCategoryResponse> | undefined, b: CreateCategoryResponse | PlainMessage<CreateCategoryResponse> | undefined): boolean;
}

/**
 * ListCategoriesRequest is the request to list categories by some criteria.
 *
 * @generated from message api.v1alpha1.scorecards.ListCategoriesRequest
 */
export declare class ListCategoriesRequest extends Message<ListCategoriesRequest> {
  /**
   * Optional. Returns categories by any author.
   *
   * @generated from field: repeated string author_ids = 2;
   */
  authorIds: string[];

  /**
   * Optional. Returns categories with any skill.
   *
   * @generated from field: repeated int64 skill_profiles = 3;
   */
  skillProfiles: bigint[];

  /**
   * Deprecated.
   *
   * @generated from field: repeated api.commons.CallType.Enum call_types = 4 [deprecated = true];
   * @deprecated
   */
  callTypes: CallType_Enum[];

  /**
   * Required. Returns categories matching type.
   *
   * @generated from field: api.v1alpha1.scorecards.ListCategoriesRequest.CategoryType category_type = 5;
   */
  categoryType: ListCategoriesRequest_CategoryType;

  constructor(data?: PartialMessage<ListCategoriesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.ListCategoriesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListCategoriesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListCategoriesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListCategoriesRequest;

  static equals(a: ListCategoriesRequest | PlainMessage<ListCategoriesRequest> | undefined, b: ListCategoriesRequest | PlainMessage<ListCategoriesRequest> | undefined): boolean;
}

/**
 * @generated from enum api.v1alpha1.scorecards.ListCategoriesRequest.CategoryType
 */
export declare enum ListCategoriesRequest_CategoryType {
  /**
   * Default. Returns all category types.
   *
   * @generated from enum value: ANY = 0;
   */
  ANY = 0,

  /**
   * System created category (cannot be edited by users).
   *
   * @generated from enum value: SYSTEM = 1;
   */
  SYSTEM = 1,

  /**
   *  User created category.
   *
   * @generated from enum value: USER = 2;
   */
  USER = 2,
}

/**
 * ListCategoriesResponse returns a list of categories.
 *
 * @generated from message api.v1alpha1.scorecards.ListCategoriesResponse
 */
export declare class ListCategoriesResponse extends Message<ListCategoriesResponse> {
  /**
   * @generated from field: repeated api.commons.Category categories = 1;
   */
  categories: Category[];

  constructor(data?: PartialMessage<ListCategoriesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.ListCategoriesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListCategoriesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListCategoriesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListCategoriesResponse;

  static equals(a: ListCategoriesResponse | PlainMessage<ListCategoriesResponse> | undefined, b: ListCategoriesResponse | PlainMessage<ListCategoriesResponse> | undefined): boolean;
}

/**
 * UpdateCategoryRequest is the request to update a category by id.
 *
 * @generated from message api.v1alpha1.scorecards.UpdateCategoryRequest
 */
export declare class UpdateCategoryRequest extends Message<UpdateCategoryRequest> {
  /**
   * Required.
   *
   * @generated from field: api.commons.Category category = 1;
   */
  category?: Category;

  /**
   * Required. Valid paths: [title, description].
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateCategoryRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.UpdateCategoryRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateCategoryRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateCategoryRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateCategoryRequest;

  static equals(a: UpdateCategoryRequest | PlainMessage<UpdateCategoryRequest> | undefined, b: UpdateCategoryRequest | PlainMessage<UpdateCategoryRequest> | undefined): boolean;
}

/**
 * UpdateCategoryResponse returns the updated category.
 *
 * @generated from message api.v1alpha1.scorecards.UpdateCategoryResponse
 */
export declare class UpdateCategoryResponse extends Message<UpdateCategoryResponse> {
  /**
   * @generated from field: api.commons.Category category = 1;
   */
  category?: Category;

  constructor(data?: PartialMessage<UpdateCategoryResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.UpdateCategoryResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateCategoryResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateCategoryResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateCategoryResponse;

  static equals(a: UpdateCategoryResponse | PlainMessage<UpdateCategoryResponse> | undefined, b: UpdateCategoryResponse | PlainMessage<UpdateCategoryResponse> | undefined): boolean;
}

/**
 * DeleteCategoryRequest is request to delete a category by id.
 *
 * @generated from message api.v1alpha1.scorecards.DeleteCategoryRequest
 */
export declare class DeleteCategoryRequest extends Message<DeleteCategoryRequest> {
  /**
   * Required.
   *
   * @generated from field: int64 category_id = 2;
   */
  categoryId: bigint;

  constructor(data?: PartialMessage<DeleteCategoryRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.DeleteCategoryRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteCategoryRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteCategoryRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteCategoryRequest;

  static equals(a: DeleteCategoryRequest | PlainMessage<DeleteCategoryRequest> | undefined, b: DeleteCategoryRequest | PlainMessage<DeleteCategoryRequest> | undefined): boolean;
}

/**
 * DeleteCategoryResponse returns the deleted category.
 *
 * @generated from message api.v1alpha1.scorecards.DeleteCategoryResponse
 */
export declare class DeleteCategoryResponse extends Message<DeleteCategoryResponse> {
  /**
   * @generated from field: api.commons.Category category = 1;
   */
  category?: Category;

  constructor(data?: PartialMessage<DeleteCategoryResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.DeleteCategoryResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteCategoryResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteCategoryResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteCategoryResponse;

  static equals(a: DeleteCategoryResponse | PlainMessage<DeleteCategoryResponse> | undefined, b: DeleteCategoryResponse | PlainMessage<DeleteCategoryResponse> | undefined): boolean;
}

/**
 * GetCategoryRequest is request to get a category by id.
 *
 * @generated from message api.v1alpha1.scorecards.GetCategoryRequest
 */
export declare class GetCategoryRequest extends Message<GetCategoryRequest> {
  /**
   * Required. Must set category_id or title.
   *
   * @generated from field: int64 category_id = 2;
   */
  categoryId: bigint;

  /**
   * Required. Must set category_id or title.
   *
   * @generated from field: string title = 3;
   */
  title: string;

  constructor(data?: PartialMessage<GetCategoryRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.GetCategoryRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCategoryRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCategoryRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCategoryRequest;

  static equals(a: GetCategoryRequest | PlainMessage<GetCategoryRequest> | undefined, b: GetCategoryRequest | PlainMessage<GetCategoryRequest> | undefined): boolean;
}

/**
 * GetCategoryResponse returns the category.
 *
 * @generated from message api.v1alpha1.scorecards.GetCategoryResponse
 */
export declare class GetCategoryResponse extends Message<GetCategoryResponse> {
  /**
   * @generated from field: api.commons.Category category = 1;
   */
  category?: Category;

  constructor(data?: PartialMessage<GetCategoryResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.GetCategoryResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCategoryResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCategoryResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCategoryResponse;

  static equals(a: GetCategoryResponse | PlainMessage<GetCategoryResponse> | undefined, b: GetCategoryResponse | PlainMessage<GetCategoryResponse> | undefined): boolean;
}

/**
 * SampleCallsByCategoryRequest is a request to get some sample calls for evaluating
 *
 * @generated from message api.v1alpha1.scorecards.SampleCallsByCategoryRequest
 */
export declare class SampleCallsByCategoryRequest extends Message<SampleCallsByCategoryRequest> {
  /**
   * required for getting skill profile(s)
   *
   * @generated from field: int64 category_id = 2;
   */
  categoryId: bigint;

  /**
   * required
   *
   * @generated from field: google.protobuf.Timestamp start_time = 3;
   */
  startTime?: Timestamp;

  /**
   * optional. if not set, use time.Now()
   *
   * @generated from field: google.protobuf.Timestamp end_time = 4;
   */
  endTime?: Timestamp;

  /**
   * required
   *
   * @generated from field: int32 scorer_max_evaluations = 5;
   */
  scorerMaxEvaluations: number;

  /**
   * optional. range from 1-100. If not set, return all
   *
   * @generated from field: int32 sample_percentage = 6;
   */
  samplePercentage: number;

  /**
   * optional. filter calls by agent user id
   *
   * @generated from field: repeated string agent_user_ids = 7;
   */
  agentUserIds: string[];

  /**
   * optional. filter calls by scorecard id
   *
   * @generated from field: int64 scorecard_id = 10;
   */
  scorecardId: bigint;

  constructor(data?: PartialMessage<SampleCallsByCategoryRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.SampleCallsByCategoryRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SampleCallsByCategoryRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SampleCallsByCategoryRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SampleCallsByCategoryRequest;

  static equals(a: SampleCallsByCategoryRequest | PlainMessage<SampleCallsByCategoryRequest> | undefined, b: SampleCallsByCategoryRequest | PlainMessage<SampleCallsByCategoryRequest> | undefined): boolean;
}

/**
 * SampleCallsByCategoryResponse returns the agent calls
 *
 * @generated from message api.v1alpha1.scorecards.SampleCallsByCategoryResponse
 */
export declare class SampleCallsByCategoryResponse extends Message<SampleCallsByCategoryResponse> {
  /**
   * @generated from field: repeated api.v1alpha1.scorecards.SampleAgentCall agent_calls = 1;
   */
  agentCalls: SampleAgentCall[];

  constructor(data?: PartialMessage<SampleCallsByCategoryResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.SampleCallsByCategoryResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SampleCallsByCategoryResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SampleCallsByCategoryResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SampleCallsByCategoryResponse;

  static equals(a: SampleCallsByCategoryResponse | PlainMessage<SampleCallsByCategoryResponse> | undefined, b: SampleCallsByCategoryResponse | PlainMessage<SampleCallsByCategoryResponse> | undefined): boolean;
}

/**
 * SampleAgentCall is an Agent Call returned by SampleCallsByCategory
 *
 * @generated from message api.v1alpha1.scorecards.SampleAgentCall
 */
export declare class SampleAgentCall extends Message<SampleAgentCall> {
  /**
   * id of the call
   *
   * @generated from field: int64 call_sid = 1;
   */
  callSid: bigint;

  /**
   * call type - i.e. manual, inbound, etc.
   *
   * @generated from field: api.commons.CallType.Enum call_type = 2;
   */
  callType: CallType_Enum;

  /**
   * timestamp of call start
   *
   * @generated from field: google.protobuf.Timestamp call_start = 3;
   */
  callStart?: Timestamp;

  /**
   * duration of call
   *
   * @generated from field: google.protobuf.Duration call_duration = 4;
   */
  callDuration?: Duration;

  /**
   * amount of speech in call
   *
   * @generated from field: google.protobuf.Duration speech = 5;
   */
  speech?: Duration;

  /**
   * amount of silence in call
   *
   * @generated from field: google.protobuf.Duration silence = 6;
   */
  silence?: Duration;

  /**
   * user id of first agent on call
   *
   * @generated from field: string agent_user_id = 7;
   */
  agentUserId: string;

  constructor(data?: PartialMessage<SampleAgentCall>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.SampleAgentCall";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SampleAgentCall;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SampleAgentCall;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SampleAgentCall;

  static equals(a: SampleAgentCall | PlainMessage<SampleAgentCall> | undefined, b: SampleAgentCall | PlainMessage<SampleAgentCall> | undefined): boolean;
}

/**
 * ListCategoriesByOrgIdRequest is the request to list categories by some criteria.
 *
 * @generated from message api.v1alpha1.scorecards.ListCategoriesByOrgIdRequest
 */
export declare class ListCategoriesByOrgIdRequest extends Message<ListCategoriesByOrgIdRequest> {
  /**
   * Required. Specifies the org in which to list categories.
   *
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  /**
   * Optional. Returns categories by any author.
   *
   * @generated from field: repeated string author_ids = 2;
   */
  authorIds: string[];

  /**
   * Optional. Returns categories with any skill.
   *
   * @generated from field: repeated int64 skill_profiles = 3;
   */
  skillProfiles: bigint[];

  /**
   * Required. Returns categories matching type.
   *
   * @generated from field: api.v1alpha1.scorecards.ListCategoriesByOrgIdRequest.CategoryType category_type = 4;
   */
  categoryType: ListCategoriesByOrgIdRequest_CategoryType;

  constructor(data?: PartialMessage<ListCategoriesByOrgIdRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.ListCategoriesByOrgIdRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListCategoriesByOrgIdRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListCategoriesByOrgIdRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListCategoriesByOrgIdRequest;

  static equals(a: ListCategoriesByOrgIdRequest | PlainMessage<ListCategoriesByOrgIdRequest> | undefined, b: ListCategoriesByOrgIdRequest | PlainMessage<ListCategoriesByOrgIdRequest> | undefined): boolean;
}

/**
 * @generated from enum api.v1alpha1.scorecards.ListCategoriesByOrgIdRequest.CategoryType
 */
export declare enum ListCategoriesByOrgIdRequest_CategoryType {
  /**
   * Default. Returns all category types.
   *
   * @generated from enum value: ANY = 0;
   */
  ANY = 0,

  /**
   * System created category (cannot be edited by users).
   *
   * @generated from enum value: SYSTEM = 1;
   */
  SYSTEM = 1,

  /**
   *  User created category.
   *
   * @generated from enum value: USER = 2;
   */
  USER = 2,
}

