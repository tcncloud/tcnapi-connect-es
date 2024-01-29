// @generated by protoc-gen-es v1.7.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/scorecards/scorecard_question.proto (package api.v1alpha1.scorecards, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ScorecardQuestion } from "../../commons/scorecards_pb.js";

/**
 * GetScorecardQuestionRequest is the request to get a scorecard question.
 *
 * @generated from message api.v1alpha1.scorecards.GetScorecardQuestionRequest
 */
export declare class GetScorecardQuestionRequest extends Message<GetScorecardQuestionRequest> {
  /**
   * Required - unique id of scorecard question to get.
   *
   * @generated from field: int64 scorecard_question_id = 2;
   */
  scorecardQuestionId: bigint;

  constructor(data?: PartialMessage<GetScorecardQuestionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.GetScorecardQuestionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetScorecardQuestionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetScorecardQuestionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetScorecardQuestionRequest;

  static equals(a: GetScorecardQuestionRequest | PlainMessage<GetScorecardQuestionRequest> | undefined, b: GetScorecardQuestionRequest | PlainMessage<GetScorecardQuestionRequest> | undefined): boolean;
}

/**
 * GetScorecardQuestionResponse returns the scorecard question requested.
 *
 * @generated from message api.v1alpha1.scorecards.GetScorecardQuestionResponse
 */
export declare class GetScorecardQuestionResponse extends Message<GetScorecardQuestionResponse> {
  /**
   * Requested scorecard question resource.
   *
   * @generated from field: api.commons.ScorecardQuestion scorecard_question = 1;
   */
  scorecardQuestion?: ScorecardQuestion;

  constructor(data?: PartialMessage<GetScorecardQuestionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.GetScorecardQuestionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetScorecardQuestionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetScorecardQuestionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetScorecardQuestionResponse;

  static equals(a: GetScorecardQuestionResponse | PlainMessage<GetScorecardQuestionResponse> | undefined, b: GetScorecardQuestionResponse | PlainMessage<GetScorecardQuestionResponse> | undefined): boolean;
}

/**
 * CreateScorecardQuestionRequest is the request to create a new scorecard question.
 *
 * @generated from message api.v1alpha1.scorecards.CreateScorecardQuestionRequest
 */
export declare class CreateScorecardQuestionRequest extends Message<CreateScorecardQuestionRequest> {
  /**
   * @generated from field: api.commons.ScorecardQuestion scorecard_question = 1;
   */
  scorecardQuestion?: ScorecardQuestion;

  constructor(data?: PartialMessage<CreateScorecardQuestionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.CreateScorecardQuestionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateScorecardQuestionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateScorecardQuestionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateScorecardQuestionRequest;

  static equals(a: CreateScorecardQuestionRequest | PlainMessage<CreateScorecardQuestionRequest> | undefined, b: CreateScorecardQuestionRequest | PlainMessage<CreateScorecardQuestionRequest> | undefined): boolean;
}

/**
 * CreateScorecardQuestionResponse returns the created scorecard.
 *
 * @generated from message api.v1alpha1.scorecards.CreateScorecardQuestionResponse
 */
export declare class CreateScorecardQuestionResponse extends Message<CreateScorecardQuestionResponse> {
  /**
   * @generated from field: api.commons.ScorecardQuestion scorecard_question = 1;
   */
  scorecardQuestion?: ScorecardQuestion;

  constructor(data?: PartialMessage<CreateScorecardQuestionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.CreateScorecardQuestionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateScorecardQuestionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateScorecardQuestionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateScorecardQuestionResponse;

  static equals(a: CreateScorecardQuestionResponse | PlainMessage<CreateScorecardQuestionResponse> | undefined, b: CreateScorecardQuestionResponse | PlainMessage<CreateScorecardQuestionResponse> | undefined): boolean;
}

/**
 * UpdateScorecardQuestionRequest is the request to update a scorecard question.
 *
 * @generated from message api.v1alpha1.scorecards.UpdateScorecardQuestionRequest
 */
export declare class UpdateScorecardQuestionRequest extends Message<UpdateScorecardQuestionRequest> {
  /**
   * Required.
   *
   * @generated from field: api.commons.ScorecardQuestion scorecard_question = 1;
   */
  scorecardQuestion?: ScorecardQuestion;

  /**
   * Required.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateScorecardQuestionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.UpdateScorecardQuestionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateScorecardQuestionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateScorecardQuestionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateScorecardQuestionRequest;

  static equals(a: UpdateScorecardQuestionRequest | PlainMessage<UpdateScorecardQuestionRequest> | undefined, b: UpdateScorecardQuestionRequest | PlainMessage<UpdateScorecardQuestionRequest> | undefined): boolean;
}

/**
 * UpdateScorecardQuestionResponse returns the updated scorecard question.
 *
 * @generated from message api.v1alpha1.scorecards.UpdateScorecardQuestionResponse
 */
export declare class UpdateScorecardQuestionResponse extends Message<UpdateScorecardQuestionResponse> {
  /**
   * @generated from field: api.commons.ScorecardQuestion scorecard_question = 1;
   */
  scorecardQuestion?: ScorecardQuestion;

  constructor(data?: PartialMessage<UpdateScorecardQuestionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.UpdateScorecardQuestionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateScorecardQuestionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateScorecardQuestionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateScorecardQuestionResponse;

  static equals(a: UpdateScorecardQuestionResponse | PlainMessage<UpdateScorecardQuestionResponse> | undefined, b: UpdateScorecardQuestionResponse | PlainMessage<UpdateScorecardQuestionResponse> | undefined): boolean;
}

/**
 * DeleteScorecardQuestionRequest is the request to delete a scorecard question.
 *
 * @generated from message api.v1alpha1.scorecards.DeleteScorecardQuestionRequest
 */
export declare class DeleteScorecardQuestionRequest extends Message<DeleteScorecardQuestionRequest> {
  /**
   * Required.
   *
   * @generated from field: int64 scorecard_question_id = 2;
   */
  scorecardQuestionId: bigint;

  constructor(data?: PartialMessage<DeleteScorecardQuestionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.DeleteScorecardQuestionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteScorecardQuestionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteScorecardQuestionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteScorecardQuestionRequest;

  static equals(a: DeleteScorecardQuestionRequest | PlainMessage<DeleteScorecardQuestionRequest> | undefined, b: DeleteScorecardQuestionRequest | PlainMessage<DeleteScorecardQuestionRequest> | undefined): boolean;
}

/**
 * DeleteScorecardQuestionResponse returns the deleted scorecard question.
 *
 * @generated from message api.v1alpha1.scorecards.DeleteScorecardQuestionResponse
 */
export declare class DeleteScorecardQuestionResponse extends Message<DeleteScorecardQuestionResponse> {
  /**
   * @generated from field: api.commons.ScorecardQuestion scorecard_question = 1;
   */
  scorecardQuestion?: ScorecardQuestion;

  constructor(data?: PartialMessage<DeleteScorecardQuestionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.DeleteScorecardQuestionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteScorecardQuestionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteScorecardQuestionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteScorecardQuestionResponse;

  static equals(a: DeleteScorecardQuestionResponse | PlainMessage<DeleteScorecardQuestionResponse> | undefined, b: DeleteScorecardQuestionResponse | PlainMessage<DeleteScorecardQuestionResponse> | undefined): boolean;
}

