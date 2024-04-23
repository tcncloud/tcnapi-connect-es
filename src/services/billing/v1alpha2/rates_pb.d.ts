// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file services/billing/v1alpha2/rates.proto (package services.billing.v1alpha2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { RateDefinition, RateSnapshot } from "../entities/v1alpha2/rates_pb.js";
import type { Page, Sort } from "./core_pb.js";

/**
 * @generated from message services.billing.v1alpha2.CreateDefaultRateDefinitionRequest
 */
export declare class CreateDefaultRateDefinitionRequest extends Message<CreateDefaultRateDefinitionRequest> {
  /**
   * @generated from field: string rate_definition_id = 1;
   */
  rateDefinitionId: string;

  /**
   * @generated from field: services.billing.entities.v1alpha2.RateDefinition rate_definition = 2;
   */
  rateDefinition?: RateDefinition;

  constructor(data?: PartialMessage<CreateDefaultRateDefinitionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha2.CreateDefaultRateDefinitionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateDefaultRateDefinitionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateDefaultRateDefinitionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateDefaultRateDefinitionRequest;

  static equals(a: CreateDefaultRateDefinitionRequest | PlainMessage<CreateDefaultRateDefinitionRequest> | undefined, b: CreateDefaultRateDefinitionRequest | PlainMessage<CreateDefaultRateDefinitionRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha2.CreateDefaultRateDefinitionResponse
 */
export declare class CreateDefaultRateDefinitionResponse extends Message<CreateDefaultRateDefinitionResponse> {
  /**
   * @generated from field: string rate_definition_id = 1;
   */
  rateDefinitionId: string;

  constructor(data?: PartialMessage<CreateDefaultRateDefinitionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha2.CreateDefaultRateDefinitionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateDefaultRateDefinitionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateDefaultRateDefinitionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateDefaultRateDefinitionResponse;

  static equals(a: CreateDefaultRateDefinitionResponse | PlainMessage<CreateDefaultRateDefinitionResponse> | undefined, b: CreateDefaultRateDefinitionResponse | PlainMessage<CreateDefaultRateDefinitionResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha2.CreateDefaultRateDefinitionsRequest
 */
export declare class CreateDefaultRateDefinitionsRequest extends Message<CreateDefaultRateDefinitionsRequest> {
  /**
   * @generated from field: repeated services.billing.v1alpha2.CreateDefaultRateDefinitionRequest rates = 1;
   */
  rates: CreateDefaultRateDefinitionRequest[];

  constructor(data?: PartialMessage<CreateDefaultRateDefinitionsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha2.CreateDefaultRateDefinitionsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateDefaultRateDefinitionsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateDefaultRateDefinitionsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateDefaultRateDefinitionsRequest;

  static equals(a: CreateDefaultRateDefinitionsRequest | PlainMessage<CreateDefaultRateDefinitionsRequest> | undefined, b: CreateDefaultRateDefinitionsRequest | PlainMessage<CreateDefaultRateDefinitionsRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha2.CreateDefaultRateDefinitionsResponse
 */
export declare class CreateDefaultRateDefinitionsResponse extends Message<CreateDefaultRateDefinitionsResponse> {
  /**
   * @generated from field: repeated services.billing.v1alpha2.CreateDefaultRateDefinitionResponse rates = 1;
   */
  rates: CreateDefaultRateDefinitionResponse[];

  constructor(data?: PartialMessage<CreateDefaultRateDefinitionsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha2.CreateDefaultRateDefinitionsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateDefaultRateDefinitionsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateDefaultRateDefinitionsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateDefaultRateDefinitionsResponse;

  static equals(a: CreateDefaultRateDefinitionsResponse | PlainMessage<CreateDefaultRateDefinitionsResponse> | undefined, b: CreateDefaultRateDefinitionsResponse | PlainMessage<CreateDefaultRateDefinitionsResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha2.CreateRateDefinitionRequest
 */
export declare class CreateRateDefinitionRequest extends Message<CreateRateDefinitionRequest> {
  /**
   * @generated from field: string rate_definition_id = 1;
   */
  rateDefinitionId: string;

  /**
   * @generated from field: services.billing.entities.v1alpha2.RateDefinition rate_definition = 2;
   */
  rateDefinition?: RateDefinition;

  constructor(data?: PartialMessage<CreateRateDefinitionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha2.CreateRateDefinitionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateRateDefinitionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateRateDefinitionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateRateDefinitionRequest;

  static equals(a: CreateRateDefinitionRequest | PlainMessage<CreateRateDefinitionRequest> | undefined, b: CreateRateDefinitionRequest | PlainMessage<CreateRateDefinitionRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha2.CreateRateDefinitionResponse
 */
export declare class CreateRateDefinitionResponse extends Message<CreateRateDefinitionResponse> {
  /**
   * @generated from field: string rate_definition_id = 1;
   */
  rateDefinitionId: string;

  constructor(data?: PartialMessage<CreateRateDefinitionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha2.CreateRateDefinitionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateRateDefinitionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateRateDefinitionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateRateDefinitionResponse;

  static equals(a: CreateRateDefinitionResponse | PlainMessage<CreateRateDefinitionResponse> | undefined, b: CreateRateDefinitionResponse | PlainMessage<CreateRateDefinitionResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha2.CreateRateDefinitionsRequest
 */
export declare class CreateRateDefinitionsRequest extends Message<CreateRateDefinitionsRequest> {
  /**
   * @generated from field: repeated services.billing.v1alpha2.CreateRateDefinitionRequest rates = 1;
   */
  rates: CreateRateDefinitionRequest[];

  constructor(data?: PartialMessage<CreateRateDefinitionsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha2.CreateRateDefinitionsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateRateDefinitionsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateRateDefinitionsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateRateDefinitionsRequest;

  static equals(a: CreateRateDefinitionsRequest | PlainMessage<CreateRateDefinitionsRequest> | undefined, b: CreateRateDefinitionsRequest | PlainMessage<CreateRateDefinitionsRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha2.CreateRateDefinitionsResponse
 */
export declare class CreateRateDefinitionsResponse extends Message<CreateRateDefinitionsResponse> {
  /**
   * @generated from field: repeated services.billing.v1alpha2.CreateRateDefinitionResponse rates = 1;
   */
  rates: CreateRateDefinitionResponse[];

  constructor(data?: PartialMessage<CreateRateDefinitionsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha2.CreateRateDefinitionsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateRateDefinitionsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateRateDefinitionsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateRateDefinitionsResponse;

  static equals(a: CreateRateDefinitionsResponse | PlainMessage<CreateRateDefinitionsResponse> | undefined, b: CreateRateDefinitionsResponse | PlainMessage<CreateRateDefinitionsResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha2.DeleteDefaultRateDefinitionRequest
 */
export declare class DeleteDefaultRateDefinitionRequest extends Message<DeleteDefaultRateDefinitionRequest> {
  /**
   * @generated from field: string rate_definition_id = 1;
   */
  rateDefinitionId: string;

  constructor(data?: PartialMessage<DeleteDefaultRateDefinitionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha2.DeleteDefaultRateDefinitionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteDefaultRateDefinitionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteDefaultRateDefinitionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteDefaultRateDefinitionRequest;

  static equals(a: DeleteDefaultRateDefinitionRequest | PlainMessage<DeleteDefaultRateDefinitionRequest> | undefined, b: DeleteDefaultRateDefinitionRequest | PlainMessage<DeleteDefaultRateDefinitionRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha2.DeleteDefaultRateDefinitionResponse
 */
export declare class DeleteDefaultRateDefinitionResponse extends Message<DeleteDefaultRateDefinitionResponse> {
  constructor(data?: PartialMessage<DeleteDefaultRateDefinitionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha2.DeleteDefaultRateDefinitionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteDefaultRateDefinitionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteDefaultRateDefinitionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteDefaultRateDefinitionResponse;

  static equals(a: DeleteDefaultRateDefinitionResponse | PlainMessage<DeleteDefaultRateDefinitionResponse> | undefined, b: DeleteDefaultRateDefinitionResponse | PlainMessage<DeleteDefaultRateDefinitionResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha2.DeleteDefaultRateDefinitionsRequest
 */
export declare class DeleteDefaultRateDefinitionsRequest extends Message<DeleteDefaultRateDefinitionsRequest> {
  /**
   * @generated from field: repeated string rate_definition_ids = 1;
   */
  rateDefinitionIds: string[];

  constructor(data?: PartialMessage<DeleteDefaultRateDefinitionsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha2.DeleteDefaultRateDefinitionsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteDefaultRateDefinitionsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteDefaultRateDefinitionsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteDefaultRateDefinitionsRequest;

  static equals(a: DeleteDefaultRateDefinitionsRequest | PlainMessage<DeleteDefaultRateDefinitionsRequest> | undefined, b: DeleteDefaultRateDefinitionsRequest | PlainMessage<DeleteDefaultRateDefinitionsRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha2.DeleteDefaultRateDefinitionsResponse
 */
export declare class DeleteDefaultRateDefinitionsResponse extends Message<DeleteDefaultRateDefinitionsResponse> {
  constructor(data?: PartialMessage<DeleteDefaultRateDefinitionsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha2.DeleteDefaultRateDefinitionsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteDefaultRateDefinitionsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteDefaultRateDefinitionsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteDefaultRateDefinitionsResponse;

  static equals(a: DeleteDefaultRateDefinitionsResponse | PlainMessage<DeleteDefaultRateDefinitionsResponse> | undefined, b: DeleteDefaultRateDefinitionsResponse | PlainMessage<DeleteDefaultRateDefinitionsResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha2.DeleteRateDefinitionRequest
 */
export declare class DeleteRateDefinitionRequest extends Message<DeleteRateDefinitionRequest> {
  /**
   * @generated from field: string rate_definition_id = 1;
   */
  rateDefinitionId: string;

  constructor(data?: PartialMessage<DeleteRateDefinitionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha2.DeleteRateDefinitionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteRateDefinitionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteRateDefinitionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteRateDefinitionRequest;

  static equals(a: DeleteRateDefinitionRequest | PlainMessage<DeleteRateDefinitionRequest> | undefined, b: DeleteRateDefinitionRequest | PlainMessage<DeleteRateDefinitionRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha2.DeleteRateDefinitionResponse
 */
export declare class DeleteRateDefinitionResponse extends Message<DeleteRateDefinitionResponse> {
  constructor(data?: PartialMessage<DeleteRateDefinitionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha2.DeleteRateDefinitionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteRateDefinitionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteRateDefinitionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteRateDefinitionResponse;

  static equals(a: DeleteRateDefinitionResponse | PlainMessage<DeleteRateDefinitionResponse> | undefined, b: DeleteRateDefinitionResponse | PlainMessage<DeleteRateDefinitionResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha2.DeleteRateDefinitionsRequest
 */
export declare class DeleteRateDefinitionsRequest extends Message<DeleteRateDefinitionsRequest> {
  /**
   * @generated from field: repeated string rate_definition_ids = 1;
   */
  rateDefinitionIds: string[];

  constructor(data?: PartialMessage<DeleteRateDefinitionsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha2.DeleteRateDefinitionsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteRateDefinitionsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteRateDefinitionsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteRateDefinitionsRequest;

  static equals(a: DeleteRateDefinitionsRequest | PlainMessage<DeleteRateDefinitionsRequest> | undefined, b: DeleteRateDefinitionsRequest | PlainMessage<DeleteRateDefinitionsRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha2.DeleteRateDefinitionsResponse
 */
export declare class DeleteRateDefinitionsResponse extends Message<DeleteRateDefinitionsResponse> {
  constructor(data?: PartialMessage<DeleteRateDefinitionsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha2.DeleteRateDefinitionsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteRateDefinitionsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteRateDefinitionsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteRateDefinitionsResponse;

  static equals(a: DeleteRateDefinitionsResponse | PlainMessage<DeleteRateDefinitionsResponse> | undefined, b: DeleteRateDefinitionsResponse | PlainMessage<DeleteRateDefinitionsResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha2.GetRateDefinitionRequest
 */
export declare class GetRateDefinitionRequest extends Message<GetRateDefinitionRequest> {
  /**
   * @generated from field: string rate_definition_id = 1;
   */
  rateDefinitionId: string;

  constructor(data?: PartialMessage<GetRateDefinitionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha2.GetRateDefinitionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRateDefinitionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRateDefinitionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRateDefinitionRequest;

  static equals(a: GetRateDefinitionRequest | PlainMessage<GetRateDefinitionRequest> | undefined, b: GetRateDefinitionRequest | PlainMessage<GetRateDefinitionRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha2.GetRateDefinitionResponse
 */
export declare class GetRateDefinitionResponse extends Message<GetRateDefinitionResponse> {
  /**
   * @generated from field: services.billing.entities.v1alpha2.RateDefinition rate_definition = 1;
   */
  rateDefinition?: RateDefinition;

  constructor(data?: PartialMessage<GetRateDefinitionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha2.GetRateDefinitionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRateDefinitionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRateDefinitionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRateDefinitionResponse;

  static equals(a: GetRateDefinitionResponse | PlainMessage<GetRateDefinitionResponse> | undefined, b: GetRateDefinitionResponse | PlainMessage<GetRateDefinitionResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha2.GetRateHistoryRequest
 */
export declare class GetRateHistoryRequest extends Message<GetRateHistoryRequest> {
  /**
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  /**
   * @generated from field: repeated string group_ids = 2;
   */
  groupIds: string[];

  /**
   * Optional: if not set, will use the beginning of time
   *
   * @generated from field: google.protobuf.Timestamp start_time = 3;
   */
  startTime?: Timestamp;

  /**
   * Optional: if not set, will use the current time
   *
   * @generated from field: google.protobuf.Timestamp end_time = 4;
   */
  endTime?: Timestamp;

  constructor(data?: PartialMessage<GetRateHistoryRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha2.GetRateHistoryRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRateHistoryRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRateHistoryRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRateHistoryRequest;

  static equals(a: GetRateHistoryRequest | PlainMessage<GetRateHistoryRequest> | undefined, b: GetRateHistoryRequest | PlainMessage<GetRateHistoryRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha2.GetRateHistoryResponse
 */
export declare class GetRateHistoryResponse extends Message<GetRateHistoryResponse> {
  /**
   * @generated from field: repeated services.billing.entities.v1alpha2.RateSnapshot snapshots = 1;
   */
  snapshots: RateSnapshot[];

  constructor(data?: PartialMessage<GetRateHistoryResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha2.GetRateHistoryResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRateHistoryResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRateHistoryResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRateHistoryResponse;

  static equals(a: GetRateHistoryResponse | PlainMessage<GetRateHistoryResponse> | undefined, b: GetRateHistoryResponse | PlainMessage<GetRateHistoryResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha2.ListActiveRateDefinitionsRequest
 */
export declare class ListActiveRateDefinitionsRequest extends Message<ListActiveRateDefinitionsRequest> {
  /**
   * @generated from field: string rate_definition_id = 1;
   */
  rateDefinitionId: string;

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
   * @generated from field: repeated services.billing.v1alpha2.Sort sort = 4;
   */
  sort: Sort[];

  /**
   * Optional: defaults to no paging.
   *
   * @generated from field: services.billing.v1alpha2.Page page = 5;
   */
  page?: Page;

  constructor(data?: PartialMessage<ListActiveRateDefinitionsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha2.ListActiveRateDefinitionsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListActiveRateDefinitionsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListActiveRateDefinitionsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListActiveRateDefinitionsRequest;

  static equals(a: ListActiveRateDefinitionsRequest | PlainMessage<ListActiveRateDefinitionsRequest> | undefined, b: ListActiveRateDefinitionsRequest | PlainMessage<ListActiveRateDefinitionsRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha2.ListActiveRateDefinitionsResponse
 */
export declare class ListActiveRateDefinitionsResponse extends Message<ListActiveRateDefinitionsResponse> {
  /**
   * @generated from field: repeated services.billing.entities.v1alpha2.RateDefinition rate_definitions = 1;
   */
  rateDefinitions: RateDefinition[];

  /**
   * Optional: only present if paginating.
   *
   * @generated from field: string token = 2;
   */
  token: string;

  constructor(data?: PartialMessage<ListActiveRateDefinitionsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha2.ListActiveRateDefinitionsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListActiveRateDefinitionsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListActiveRateDefinitionsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListActiveRateDefinitionsResponse;

  static equals(a: ListActiveRateDefinitionsResponse | PlainMessage<ListActiveRateDefinitionsResponse> | undefined, b: ListActiveRateDefinitionsResponse | PlainMessage<ListActiveRateDefinitionsResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha2.ListRateDefinitionsRequest
 */
export declare class ListRateDefinitionsRequest extends Message<ListRateDefinitionsRequest> {
  /**
   * @generated from field: string rate_definition_id = 1;
   */
  rateDefinitionId: string;

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
   * @generated from field: repeated services.billing.v1alpha2.Sort sort = 4;
   */
  sort: Sort[];

  /**
   * Optional: defaults to no paging.
   *
   * @generated from field: services.billing.v1alpha2.Page page = 5;
   */
  page?: Page;

  constructor(data?: PartialMessage<ListRateDefinitionsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha2.ListRateDefinitionsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRateDefinitionsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRateDefinitionsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRateDefinitionsRequest;

  static equals(a: ListRateDefinitionsRequest | PlainMessage<ListRateDefinitionsRequest> | undefined, b: ListRateDefinitionsRequest | PlainMessage<ListRateDefinitionsRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha2.ListRateDefinitionsResponse
 */
export declare class ListRateDefinitionsResponse extends Message<ListRateDefinitionsResponse> {
  /**
   * @generated from field: repeated services.billing.entities.v1alpha2.RateDefinition rate_definitions = 1;
   */
  rateDefinitions: RateDefinition[];

  /**
   * Optional: only present if paginating.
   *
   * @generated from field: string token = 2;
   */
  token: string;

  constructor(data?: PartialMessage<ListRateDefinitionsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha2.ListRateDefinitionsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRateDefinitionsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRateDefinitionsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRateDefinitionsResponse;

  static equals(a: ListRateDefinitionsResponse | PlainMessage<ListRateDefinitionsResponse> | undefined, b: ListRateDefinitionsResponse | PlainMessage<ListRateDefinitionsResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha2.UpdateDefaultRateDefinitionRequest
 */
export declare class UpdateDefaultRateDefinitionRequest extends Message<UpdateDefaultRateDefinitionRequest> {
  /**
   * @generated from field: string rate_definition_id = 1;
   */
  rateDefinitionId: string;

  /**
   * @generated from field: services.billing.entities.v1alpha2.RateDefinition rate_definition = 2;
   */
  rateDefinition?: RateDefinition;

  /**
   * @generated from field: google.protobuf.FieldMask update_fields = 3;
   */
  updateFields?: FieldMask;

  constructor(data?: PartialMessage<UpdateDefaultRateDefinitionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha2.UpdateDefaultRateDefinitionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateDefaultRateDefinitionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateDefaultRateDefinitionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateDefaultRateDefinitionRequest;

  static equals(a: UpdateDefaultRateDefinitionRequest | PlainMessage<UpdateDefaultRateDefinitionRequest> | undefined, b: UpdateDefaultRateDefinitionRequest | PlainMessage<UpdateDefaultRateDefinitionRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha2.UpdateDefaultRateDefinitionResponse
 */
export declare class UpdateDefaultRateDefinitionResponse extends Message<UpdateDefaultRateDefinitionResponse> {
  constructor(data?: PartialMessage<UpdateDefaultRateDefinitionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha2.UpdateDefaultRateDefinitionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateDefaultRateDefinitionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateDefaultRateDefinitionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateDefaultRateDefinitionResponse;

  static equals(a: UpdateDefaultRateDefinitionResponse | PlainMessage<UpdateDefaultRateDefinitionResponse> | undefined, b: UpdateDefaultRateDefinitionResponse | PlainMessage<UpdateDefaultRateDefinitionResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha2.UpdateRateDefinitionRequest
 */
export declare class UpdateRateDefinitionRequest extends Message<UpdateRateDefinitionRequest> {
  /**
   * @generated from field: string rate_definition_id = 1;
   */
  rateDefinitionId: string;

  /**
   * @generated from field: services.billing.entities.v1alpha2.RateDefinition rate_definition = 2;
   */
  rateDefinition?: RateDefinition;

  /**
   * @generated from field: google.protobuf.FieldMask update_fields = 3;
   */
  updateFields?: FieldMask;

  constructor(data?: PartialMessage<UpdateRateDefinitionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha2.UpdateRateDefinitionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateRateDefinitionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateRateDefinitionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateRateDefinitionRequest;

  static equals(a: UpdateRateDefinitionRequest | PlainMessage<UpdateRateDefinitionRequest> | undefined, b: UpdateRateDefinitionRequest | PlainMessage<UpdateRateDefinitionRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha2.UpdateRateDefinitionResponse
 */
export declare class UpdateRateDefinitionResponse extends Message<UpdateRateDefinitionResponse> {
  constructor(data?: PartialMessage<UpdateRateDefinitionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha2.UpdateRateDefinitionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateRateDefinitionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateRateDefinitionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateRateDefinitionResponse;

  static equals(a: UpdateRateDefinitionResponse | PlainMessage<UpdateRateDefinitionResponse> | undefined, b: UpdateRateDefinitionResponse | PlainMessage<UpdateRateDefinitionResponse> | undefined): boolean;
}

