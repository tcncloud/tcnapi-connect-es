// @generated by protoc-gen-es v1.3.3 with parameter "target=js+dts"
// @generated from file api/v1alpha1/scorecards/auto_question.proto (package api.v1alpha1.scorecards, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { AutoQuestion } from "../../commons/scorecards_pb.js";

/**
 * GetAutoQuestionRequest is the request to get an auto question.
 *
 * @generated from message api.v1alpha1.scorecards.GetAutoQuestionRequest
 */
export declare class GetAutoQuestionRequest extends Message<GetAutoQuestionRequest> {
  /**
   * Required - unique id of auto question to get.
   *
   * @generated from field: int64 auto_question_id = 2;
   */
  autoQuestionId: bigint;

  constructor(data?: PartialMessage<GetAutoQuestionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.GetAutoQuestionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAutoQuestionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAutoQuestionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAutoQuestionRequest;

  static equals(a: GetAutoQuestionRequest | PlainMessage<GetAutoQuestionRequest> | undefined, b: GetAutoQuestionRequest | PlainMessage<GetAutoQuestionRequest> | undefined): boolean;
}

/**
 * GetAutoQuestionResponse returns the auto question requested.
 *
 * @generated from message api.v1alpha1.scorecards.GetAutoQuestionResponse
 */
export declare class GetAutoQuestionResponse extends Message<GetAutoQuestionResponse> {
  /**
   * auto question response object.
   *
   * @generated from field: api.commons.AutoQuestion auto_question = 1;
   */
  autoQuestion?: AutoQuestion;

  constructor(data?: PartialMessage<GetAutoQuestionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.GetAutoQuestionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAutoQuestionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAutoQuestionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAutoQuestionResponse;

  static equals(a: GetAutoQuestionResponse | PlainMessage<GetAutoQuestionResponse> | undefined, b: GetAutoQuestionResponse | PlainMessage<GetAutoQuestionResponse> | undefined): boolean;
}

/**
 * CreateAutoQuestionRequest is the request to create a new auto question.
 *
 * @generated from message api.v1alpha1.scorecards.CreateAutoQuestionRequest
 */
export declare class CreateAutoQuestionRequest extends Message<CreateAutoQuestionRequest> {
  /**
   * Required - auto question object to create.
   *
   * @generated from field: api.commons.AutoQuestion auto_question = 2;
   */
  autoQuestion?: AutoQuestion;

  constructor(data?: PartialMessage<CreateAutoQuestionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.CreateAutoQuestionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateAutoQuestionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateAutoQuestionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateAutoQuestionRequest;

  static equals(a: CreateAutoQuestionRequest | PlainMessage<CreateAutoQuestionRequest> | undefined, b: CreateAutoQuestionRequest | PlainMessage<CreateAutoQuestionRequest> | undefined): boolean;
}

/**
 * CreateAutoQuestionResponse returns the created auto question.
 *
 * @generated from message api.v1alpha1.scorecards.CreateAutoQuestionResponse
 */
export declare class CreateAutoQuestionResponse extends Message<CreateAutoQuestionResponse> {
  /**
   * updated auto question object.
   *
   * @generated from field: api.commons.AutoQuestion auto_question = 1;
   */
  autoQuestion?: AutoQuestion;

  constructor(data?: PartialMessage<CreateAutoQuestionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.CreateAutoQuestionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateAutoQuestionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateAutoQuestionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateAutoQuestionResponse;

  static equals(a: CreateAutoQuestionResponse | PlainMessage<CreateAutoQuestionResponse> | undefined, b: CreateAutoQuestionResponse | PlainMessage<CreateAutoQuestionResponse> | undefined): boolean;
}

/**
 * UpdateAutoQuestionRequest is the request to update an auto question.
 *
 * @generated from message api.v1alpha1.scorecards.UpdateAutoQuestionRequest
 */
export declare class UpdateAutoQuestionRequest extends Message<UpdateAutoQuestionRequest> {
  /**
   * Required - auto question to update fields from.
   *
   * @generated from field: api.commons.AutoQuestion auto_question = 2;
   */
  autoQuestion?: AutoQuestion;

  /**
   * Required - mask defining which fields to update.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 3;
   */
  updateMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateAutoQuestionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.UpdateAutoQuestionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateAutoQuestionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateAutoQuestionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateAutoQuestionRequest;

  static equals(a: UpdateAutoQuestionRequest | PlainMessage<UpdateAutoQuestionRequest> | undefined, b: UpdateAutoQuestionRequest | PlainMessage<UpdateAutoQuestionRequest> | undefined): boolean;
}

/**
 * UpdateAutoQuestionResponse returns the updated auto question.
 *
 * @generated from message api.v1alpha1.scorecards.UpdateAutoQuestionResponse
 */
export declare class UpdateAutoQuestionResponse extends Message<UpdateAutoQuestionResponse> {
  /**
   * updated auto question object.
   *
   * @generated from field: api.commons.AutoQuestion auto_question = 1;
   */
  autoQuestion?: AutoQuestion;

  constructor(data?: PartialMessage<UpdateAutoQuestionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.UpdateAutoQuestionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateAutoQuestionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateAutoQuestionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateAutoQuestionResponse;

  static equals(a: UpdateAutoQuestionResponse | PlainMessage<UpdateAutoQuestionResponse> | undefined, b: UpdateAutoQuestionResponse | PlainMessage<UpdateAutoQuestionResponse> | undefined): boolean;
}

/**
 * DeleteAutoQuestionRequest is the request to delete an auto question.
 *
 * @generated from message api.v1alpha1.scorecards.DeleteAutoQuestionRequest
 */
export declare class DeleteAutoQuestionRequest extends Message<DeleteAutoQuestionRequest> {
  /**
   * Required - unique id of auto question to delete.
   *
   * @generated from field: int64 auto_question_id = 3;
   */
  autoQuestionId: bigint;

  constructor(data?: PartialMessage<DeleteAutoQuestionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.DeleteAutoQuestionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteAutoQuestionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteAutoQuestionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteAutoQuestionRequest;

  static equals(a: DeleteAutoQuestionRequest | PlainMessage<DeleteAutoQuestionRequest> | undefined, b: DeleteAutoQuestionRequest | PlainMessage<DeleteAutoQuestionRequest> | undefined): boolean;
}

/**
 * DeleteAutoQuestionResponse returns the deleted auto question.
 *
 * @generated from message api.v1alpha1.scorecards.DeleteAutoQuestionResponse
 */
export declare class DeleteAutoQuestionResponse extends Message<DeleteAutoQuestionResponse> {
  /**
   * deleted auto question object.
   *
   * @generated from field: api.commons.AutoQuestion auto_question = 1;
   */
  autoQuestion?: AutoQuestion;

  constructor(data?: PartialMessage<DeleteAutoQuestionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.DeleteAutoQuestionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteAutoQuestionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteAutoQuestionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteAutoQuestionResponse;

  static equals(a: DeleteAutoQuestionResponse | PlainMessage<DeleteAutoQuestionResponse> | undefined, b: DeleteAutoQuestionResponse | PlainMessage<DeleteAutoQuestionResponse> | undefined): boolean;
}

