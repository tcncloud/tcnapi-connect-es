// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file services/billing/v1alpha1/rates.proto (package services.billing.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { RateDefinition } from "../entities/v1alpha1/rates_pb.js";
import type { Page, Sort } from "./core_pb.js";

/**
 * @generated from message services.billing.v1alpha1.CreateDefaultRateDefinitionRequest
 */
export declare class CreateDefaultRateDefinitionRequest extends Message<CreateDefaultRateDefinitionRequest> {
  /**
   * @generated from field: string rate_definition_id = 1;
   */
  rateDefinitionId: string;

  /**
   * @generated from field: services.billing.entities.v1alpha1.RateDefinition rate_definition = 2;
   */
  rateDefinition?: RateDefinition;

  constructor(data?: PartialMessage<CreateDefaultRateDefinitionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.CreateDefaultRateDefinitionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateDefaultRateDefinitionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateDefaultRateDefinitionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateDefaultRateDefinitionRequest;

  static equals(a: CreateDefaultRateDefinitionRequest | PlainMessage<CreateDefaultRateDefinitionRequest> | undefined, b: CreateDefaultRateDefinitionRequest | PlainMessage<CreateDefaultRateDefinitionRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.CreateDefaultRateDefinitionResponse
 */
export declare class CreateDefaultRateDefinitionResponse extends Message<CreateDefaultRateDefinitionResponse> {
  /**
   * @generated from field: string rate_definition_id = 1;
   */
  rateDefinitionId: string;

  constructor(data?: PartialMessage<CreateDefaultRateDefinitionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.CreateDefaultRateDefinitionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateDefaultRateDefinitionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateDefaultRateDefinitionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateDefaultRateDefinitionResponse;

  static equals(a: CreateDefaultRateDefinitionResponse | PlainMessage<CreateDefaultRateDefinitionResponse> | undefined, b: CreateDefaultRateDefinitionResponse | PlainMessage<CreateDefaultRateDefinitionResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.CreateRateDefinitionRequest
 */
export declare class CreateRateDefinitionRequest extends Message<CreateRateDefinitionRequest> {
  /**
   * @generated from field: string rate_definition_id = 1;
   */
  rateDefinitionId: string;

  /**
   * @generated from field: services.billing.entities.v1alpha1.RateDefinition rate_definition = 2;
   */
  rateDefinition?: RateDefinition;

  constructor(data?: PartialMessage<CreateRateDefinitionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.CreateRateDefinitionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateRateDefinitionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateRateDefinitionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateRateDefinitionRequest;

  static equals(a: CreateRateDefinitionRequest | PlainMessage<CreateRateDefinitionRequest> | undefined, b: CreateRateDefinitionRequest | PlainMessage<CreateRateDefinitionRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.CreateRateDefinitionResponse
 */
export declare class CreateRateDefinitionResponse extends Message<CreateRateDefinitionResponse> {
  /**
   * @generated from field: string rate_definition_id = 1;
   */
  rateDefinitionId: string;

  constructor(data?: PartialMessage<CreateRateDefinitionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.CreateRateDefinitionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateRateDefinitionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateRateDefinitionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateRateDefinitionResponse;

  static equals(a: CreateRateDefinitionResponse | PlainMessage<CreateRateDefinitionResponse> | undefined, b: CreateRateDefinitionResponse | PlainMessage<CreateRateDefinitionResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.DeleteDefaultRateDefinitionRequest
 */
export declare class DeleteDefaultRateDefinitionRequest extends Message<DeleteDefaultRateDefinitionRequest> {
  /**
   * @generated from field: string rate_definition_id = 1;
   */
  rateDefinitionId: string;

  constructor(data?: PartialMessage<DeleteDefaultRateDefinitionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.DeleteDefaultRateDefinitionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteDefaultRateDefinitionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteDefaultRateDefinitionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteDefaultRateDefinitionRequest;

  static equals(a: DeleteDefaultRateDefinitionRequest | PlainMessage<DeleteDefaultRateDefinitionRequest> | undefined, b: DeleteDefaultRateDefinitionRequest | PlainMessage<DeleteDefaultRateDefinitionRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.DeleteDefaultRateDefinitionResponse
 */
export declare class DeleteDefaultRateDefinitionResponse extends Message<DeleteDefaultRateDefinitionResponse> {
  constructor(data?: PartialMessage<DeleteDefaultRateDefinitionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.DeleteDefaultRateDefinitionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteDefaultRateDefinitionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteDefaultRateDefinitionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteDefaultRateDefinitionResponse;

  static equals(a: DeleteDefaultRateDefinitionResponse | PlainMessage<DeleteDefaultRateDefinitionResponse> | undefined, b: DeleteDefaultRateDefinitionResponse | PlainMessage<DeleteDefaultRateDefinitionResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.DeleteRateDefinitionRequest
 */
export declare class DeleteRateDefinitionRequest extends Message<DeleteRateDefinitionRequest> {
  /**
   * @generated from field: string rate_definition_id = 1;
   */
  rateDefinitionId: string;

  constructor(data?: PartialMessage<DeleteRateDefinitionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.DeleteRateDefinitionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteRateDefinitionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteRateDefinitionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteRateDefinitionRequest;

  static equals(a: DeleteRateDefinitionRequest | PlainMessage<DeleteRateDefinitionRequest> | undefined, b: DeleteRateDefinitionRequest | PlainMessage<DeleteRateDefinitionRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.DeleteRateDefinitionResponse
 */
export declare class DeleteRateDefinitionResponse extends Message<DeleteRateDefinitionResponse> {
  constructor(data?: PartialMessage<DeleteRateDefinitionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.DeleteRateDefinitionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteRateDefinitionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteRateDefinitionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteRateDefinitionResponse;

  static equals(a: DeleteRateDefinitionResponse | PlainMessage<DeleteRateDefinitionResponse> | undefined, b: DeleteRateDefinitionResponse | PlainMessage<DeleteRateDefinitionResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.GetRateDefinitionRequest
 */
export declare class GetRateDefinitionRequest extends Message<GetRateDefinitionRequest> {
  /**
   * @generated from field: string rate_definition_id = 1;
   */
  rateDefinitionId: string;

  constructor(data?: PartialMessage<GetRateDefinitionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.GetRateDefinitionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRateDefinitionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRateDefinitionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRateDefinitionRequest;

  static equals(a: GetRateDefinitionRequest | PlainMessage<GetRateDefinitionRequest> | undefined, b: GetRateDefinitionRequest | PlainMessage<GetRateDefinitionRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.GetRateDefinitionResponse
 */
export declare class GetRateDefinitionResponse extends Message<GetRateDefinitionResponse> {
  /**
   * @generated from field: services.billing.entities.v1alpha1.RateDefinition rate_definition = 1;
   */
  rateDefinition?: RateDefinition;

  constructor(data?: PartialMessage<GetRateDefinitionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.GetRateDefinitionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRateDefinitionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRateDefinitionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRateDefinitionResponse;

  static equals(a: GetRateDefinitionResponse | PlainMessage<GetRateDefinitionResponse> | undefined, b: GetRateDefinitionResponse | PlainMessage<GetRateDefinitionResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.ListRateDefinitionsRequest
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
   * @generated from field: repeated services.billing.v1alpha1.Sort sort = 4;
   */
  sort: Sort[];

  /**
   * Optional: defaults to no paging.
   *
   * @generated from field: services.billing.v1alpha1.Page page = 5;
   */
  page?: Page;

  constructor(data?: PartialMessage<ListRateDefinitionsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.ListRateDefinitionsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRateDefinitionsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRateDefinitionsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRateDefinitionsRequest;

  static equals(a: ListRateDefinitionsRequest | PlainMessage<ListRateDefinitionsRequest> | undefined, b: ListRateDefinitionsRequest | PlainMessage<ListRateDefinitionsRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.ListRateDefinitionsResponse
 */
export declare class ListRateDefinitionsResponse extends Message<ListRateDefinitionsResponse> {
  /**
   * @generated from field: repeated services.billing.entities.v1alpha1.RateDefinition rate_definitions = 1;
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
  static readonly typeName = "services.billing.v1alpha1.ListRateDefinitionsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRateDefinitionsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRateDefinitionsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRateDefinitionsResponse;

  static equals(a: ListRateDefinitionsResponse | PlainMessage<ListRateDefinitionsResponse> | undefined, b: ListRateDefinitionsResponse | PlainMessage<ListRateDefinitionsResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.UpdateDefaultRateDefinitionRequest
 */
export declare class UpdateDefaultRateDefinitionRequest extends Message<UpdateDefaultRateDefinitionRequest> {
  /**
   * @generated from field: string rate_definition_id = 1;
   */
  rateDefinitionId: string;

  /**
   * @generated from field: services.billing.entities.v1alpha1.RateDefinition rate_definition = 2;
   */
  rateDefinition?: RateDefinition;

  /**
   * @generated from field: google.protobuf.FieldMask update_fields = 3;
   */
  updateFields?: FieldMask;

  constructor(data?: PartialMessage<UpdateDefaultRateDefinitionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.UpdateDefaultRateDefinitionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateDefaultRateDefinitionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateDefaultRateDefinitionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateDefaultRateDefinitionRequest;

  static equals(a: UpdateDefaultRateDefinitionRequest | PlainMessage<UpdateDefaultRateDefinitionRequest> | undefined, b: UpdateDefaultRateDefinitionRequest | PlainMessage<UpdateDefaultRateDefinitionRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.UpdateDefaultRateDefinitionResponse
 */
export declare class UpdateDefaultRateDefinitionResponse extends Message<UpdateDefaultRateDefinitionResponse> {
  constructor(data?: PartialMessage<UpdateDefaultRateDefinitionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.UpdateDefaultRateDefinitionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateDefaultRateDefinitionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateDefaultRateDefinitionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateDefaultRateDefinitionResponse;

  static equals(a: UpdateDefaultRateDefinitionResponse | PlainMessage<UpdateDefaultRateDefinitionResponse> | undefined, b: UpdateDefaultRateDefinitionResponse | PlainMessage<UpdateDefaultRateDefinitionResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.UpdateRateDefinitionRequest
 */
export declare class UpdateRateDefinitionRequest extends Message<UpdateRateDefinitionRequest> {
  /**
   * @generated from field: string rate_definition_id = 1;
   */
  rateDefinitionId: string;

  /**
   * @generated from field: services.billing.entities.v1alpha1.RateDefinition rate_definition = 2;
   */
  rateDefinition?: RateDefinition;

  /**
   * @generated from field: google.protobuf.FieldMask update_fields = 3;
   */
  updateFields?: FieldMask;

  constructor(data?: PartialMessage<UpdateRateDefinitionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.UpdateRateDefinitionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateRateDefinitionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateRateDefinitionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateRateDefinitionRequest;

  static equals(a: UpdateRateDefinitionRequest | PlainMessage<UpdateRateDefinitionRequest> | undefined, b: UpdateRateDefinitionRequest | PlainMessage<UpdateRateDefinitionRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.UpdateRateDefinitionResponse
 */
export declare class UpdateRateDefinitionResponse extends Message<UpdateRateDefinitionResponse> {
  constructor(data?: PartialMessage<UpdateRateDefinitionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.UpdateRateDefinitionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateRateDefinitionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateRateDefinitionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateRateDefinitionResponse;

  static equals(a: UpdateRateDefinitionResponse | PlainMessage<UpdateRateDefinitionResponse> | undefined, b: UpdateRateDefinitionResponse | PlainMessage<UpdateRateDefinitionResponse> | undefined): boolean;
}

