// @generated by protoc-gen-es v1.3.1 with parameter "target=js+dts"
// @generated from file services/billing/v1alpha1/groups.proto (package services.billing.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { RateDefinitionGroup } from "../entities/v1alpha1/groups_pb.js";
import type { Page, Sort } from "./core_pb.js";

/**
 * @generated from message services.billing.v1alpha1.CreateRateDefinitionGroupRequest
 */
export declare class CreateRateDefinitionGroupRequest extends Message<CreateRateDefinitionGroupRequest> {
  /**
   * @generated from field: string rate_definition_group_id = 1;
   */
  rateDefinitionGroupId: string;

  /**
   * @generated from field: services.billing.entities.v1alpha1.RateDefinitionGroup rate_definition_group = 2;
   */
  rateDefinitionGroup?: RateDefinitionGroup;

  constructor(data?: PartialMessage<CreateRateDefinitionGroupRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.CreateRateDefinitionGroupRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateRateDefinitionGroupRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateRateDefinitionGroupRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateRateDefinitionGroupRequest;

  static equals(a: CreateRateDefinitionGroupRequest | PlainMessage<CreateRateDefinitionGroupRequest> | undefined, b: CreateRateDefinitionGroupRequest | PlainMessage<CreateRateDefinitionGroupRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.CreateRateDefinitionGroupResponse
 */
export declare class CreateRateDefinitionGroupResponse extends Message<CreateRateDefinitionGroupResponse> {
  /**
   * @generated from field: string rate_definition_group_id = 1;
   */
  rateDefinitionGroupId: string;

  constructor(data?: PartialMessage<CreateRateDefinitionGroupResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.CreateRateDefinitionGroupResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateRateDefinitionGroupResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateRateDefinitionGroupResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateRateDefinitionGroupResponse;

  static equals(a: CreateRateDefinitionGroupResponse | PlainMessage<CreateRateDefinitionGroupResponse> | undefined, b: CreateRateDefinitionGroupResponse | PlainMessage<CreateRateDefinitionGroupResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.DeleteRateDefinitionGroupRequest
 */
export declare class DeleteRateDefinitionGroupRequest extends Message<DeleteRateDefinitionGroupRequest> {
  /**
   * @generated from field: string rate_definition_group_id = 1;
   */
  rateDefinitionGroupId: string;

  constructor(data?: PartialMessage<DeleteRateDefinitionGroupRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.DeleteRateDefinitionGroupRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteRateDefinitionGroupRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteRateDefinitionGroupRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteRateDefinitionGroupRequest;

  static equals(a: DeleteRateDefinitionGroupRequest | PlainMessage<DeleteRateDefinitionGroupRequest> | undefined, b: DeleteRateDefinitionGroupRequest | PlainMessage<DeleteRateDefinitionGroupRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.DeleteRateDefinitionGroupResponse
 */
export declare class DeleteRateDefinitionGroupResponse extends Message<DeleteRateDefinitionGroupResponse> {
  constructor(data?: PartialMessage<DeleteRateDefinitionGroupResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.DeleteRateDefinitionGroupResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteRateDefinitionGroupResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteRateDefinitionGroupResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteRateDefinitionGroupResponse;

  static equals(a: DeleteRateDefinitionGroupResponse | PlainMessage<DeleteRateDefinitionGroupResponse> | undefined, b: DeleteRateDefinitionGroupResponse | PlainMessage<DeleteRateDefinitionGroupResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.GetRateDefinitionGroupRequest
 */
export declare class GetRateDefinitionGroupRequest extends Message<GetRateDefinitionGroupRequest> {
  /**
   * @generated from field: string rate_definition_group_id = 1;
   */
  rateDefinitionGroupId: string;

  constructor(data?: PartialMessage<GetRateDefinitionGroupRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.GetRateDefinitionGroupRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRateDefinitionGroupRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRateDefinitionGroupRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRateDefinitionGroupRequest;

  static equals(a: GetRateDefinitionGroupRequest | PlainMessage<GetRateDefinitionGroupRequest> | undefined, b: GetRateDefinitionGroupRequest | PlainMessage<GetRateDefinitionGroupRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.GetRateDefinitionGroupResponse
 */
export declare class GetRateDefinitionGroupResponse extends Message<GetRateDefinitionGroupResponse> {
  /**
   * @generated from field: services.billing.entities.v1alpha1.RateDefinitionGroup rate_definition_group = 1;
   */
  rateDefinitionGroup?: RateDefinitionGroup;

  constructor(data?: PartialMessage<GetRateDefinitionGroupResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.GetRateDefinitionGroupResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRateDefinitionGroupResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRateDefinitionGroupResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRateDefinitionGroupResponse;

  static equals(a: GetRateDefinitionGroupResponse | PlainMessage<GetRateDefinitionGroupResponse> | undefined, b: GetRateDefinitionGroupResponse | PlainMessage<GetRateDefinitionGroupResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.ListRateDefinitionGroupsRequest
 */
export declare class ListRateDefinitionGroupsRequest extends Message<ListRateDefinitionGroupsRequest> {
  /**
   * @generated from field: string rate_definition_group_id = 1;
   */
  rateDefinitionGroupId: string;

  /**
   * Optional: defaults to no filter
   *
   * @generated from field: string filter = 2;
   */
  filter: string;

  /**
   * Optional: defaults to all fields.
   *
   * @generated from field: google.protobuf.FieldMask fields = 3;
   */
  fields?: FieldMask;

  /**
   * Optional: defaults to no sort.
   *
   * @generated from field: repeated services.billing.v1alpha1.Sort sort = 4;
   */
  sort: Sort[];

  /**
   * Optional: defaults to no paging.
   *
   * @generated from field: services.billing.v1alpha1.Page page = 5;
   */
  page?: Page;

  constructor(data?: PartialMessage<ListRateDefinitionGroupsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.ListRateDefinitionGroupsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRateDefinitionGroupsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRateDefinitionGroupsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRateDefinitionGroupsRequest;

  static equals(a: ListRateDefinitionGroupsRequest | PlainMessage<ListRateDefinitionGroupsRequest> | undefined, b: ListRateDefinitionGroupsRequest | PlainMessage<ListRateDefinitionGroupsRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.ListRateDefinitionGroupsResponse
 */
export declare class ListRateDefinitionGroupsResponse extends Message<ListRateDefinitionGroupsResponse> {
  /**
   * @generated from field: repeated services.billing.entities.v1alpha1.RateDefinitionGroup rate_definition_groups = 1;
   */
  rateDefinitionGroups: RateDefinitionGroup[];

  /**
   * Optional: only present if paginating.
   *
   * @generated from field: string token = 2;
   */
  token: string;

  constructor(data?: PartialMessage<ListRateDefinitionGroupsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.ListRateDefinitionGroupsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRateDefinitionGroupsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRateDefinitionGroupsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRateDefinitionGroupsResponse;

  static equals(a: ListRateDefinitionGroupsResponse | PlainMessage<ListRateDefinitionGroupsResponse> | undefined, b: ListRateDefinitionGroupsResponse | PlainMessage<ListRateDefinitionGroupsResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.UpdateRateDefinitionGroupRequest
 */
export declare class UpdateRateDefinitionGroupRequest extends Message<UpdateRateDefinitionGroupRequest> {
  /**
   * @generated from field: string rate_definition_group_id = 1;
   */
  rateDefinitionGroupId: string;

  /**
   * @generated from field: services.billing.entities.v1alpha1.RateDefinitionGroup rate_definition_group = 2;
   */
  rateDefinitionGroup?: RateDefinitionGroup;

  /**
   * @generated from field: google.protobuf.FieldMask update_fields = 3;
   */
  updateFields?: FieldMask;

  constructor(data?: PartialMessage<UpdateRateDefinitionGroupRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.UpdateRateDefinitionGroupRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateRateDefinitionGroupRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateRateDefinitionGroupRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateRateDefinitionGroupRequest;

  static equals(a: UpdateRateDefinitionGroupRequest | PlainMessage<UpdateRateDefinitionGroupRequest> | undefined, b: UpdateRateDefinitionGroupRequest | PlainMessage<UpdateRateDefinitionGroupRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.UpdateRateDefinitionGroupResponse
 */
export declare class UpdateRateDefinitionGroupResponse extends Message<UpdateRateDefinitionGroupResponse> {
  constructor(data?: PartialMessage<UpdateRateDefinitionGroupResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.UpdateRateDefinitionGroupResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateRateDefinitionGroupResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateRateDefinitionGroupResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateRateDefinitionGroupResponse;

  static equals(a: UpdateRateDefinitionGroupResponse | PlainMessage<UpdateRateDefinitionGroupResponse> | undefined, b: UpdateRateDefinitionGroupResponse | PlainMessage<UpdateRateDefinitionGroupResponse> | undefined): boolean;
}

