// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/scorecards/auto_evaluation.proto (package api.v1alpha1.scorecards, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { AutoEvaluation } from "../../commons/scorecards_pb.js";

/**
 * GetAutoEvaluationRequest is the request to get an auto evaluation
 *
 * @generated from message api.v1alpha1.scorecards.GetAutoEvaluationRequest
 */
export declare class GetAutoEvaluationRequest extends Message<GetAutoEvaluationRequest> {
  /**
   * Required - unique id of auto evalution to get.
   *
   * @generated from field: int64 auto_evaluation_id = 2;
   */
  autoEvaluationId: bigint;

  constructor(data?: PartialMessage<GetAutoEvaluationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.GetAutoEvaluationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAutoEvaluationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAutoEvaluationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAutoEvaluationRequest;

  static equals(a: GetAutoEvaluationRequest | PlainMessage<GetAutoEvaluationRequest> | undefined, b: GetAutoEvaluationRequest | PlainMessage<GetAutoEvaluationRequest> | undefined): boolean;
}

/**
 * GetAutoEvaluationResponse returns the auto evaluation requested.
 *
 * @generated from message api.v1alpha1.scorecards.GetAutoEvaluationResponse
 */
export declare class GetAutoEvaluationResponse extends Message<GetAutoEvaluationResponse> {
  /**
   * auto evaluation response object.
   *
   * @generated from field: api.commons.AutoEvaluation auto_evaluation = 1;
   */
  autoEvaluation?: AutoEvaluation;

  constructor(data?: PartialMessage<GetAutoEvaluationResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.GetAutoEvaluationResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAutoEvaluationResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAutoEvaluationResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAutoEvaluationResponse;

  static equals(a: GetAutoEvaluationResponse | PlainMessage<GetAutoEvaluationResponse> | undefined, b: GetAutoEvaluationResponse | PlainMessage<GetAutoEvaluationResponse> | undefined): boolean;
}

/**
 * ListAutoEvaluationsRequest is the request to get a list of auto evaluations.
 *
 * @generated from message api.v1alpha1.scorecards.ListAutoEvaluationsRequest
 */
export declare class ListAutoEvaluationsRequest extends Message<ListAutoEvaluationsRequest> {
  /**
   * Optional - filter by scorecard ids.
   *
   * @generated from field: repeated int64 scorecard_ids = 2;
   */
  scorecardIds: bigint[];

  constructor(data?: PartialMessage<ListAutoEvaluationsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.ListAutoEvaluationsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAutoEvaluationsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAutoEvaluationsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAutoEvaluationsRequest;

  static equals(a: ListAutoEvaluationsRequest | PlainMessage<ListAutoEvaluationsRequest> | undefined, b: ListAutoEvaluationsRequest | PlainMessage<ListAutoEvaluationsRequest> | undefined): boolean;
}

/**
 * ListAutoEvaluationsResponse returns a list of evaluations.
 *
 * @generated from message api.v1alpha1.scorecards.ListAutoEvaluationsResponse
 */
export declare class ListAutoEvaluationsResponse extends Message<ListAutoEvaluationsResponse> {
  /**
   * List of responses
   *
   * @generated from field: repeated api.commons.AutoEvaluation auto_evaluations = 1;
   */
  autoEvaluations: AutoEvaluation[];

  constructor(data?: PartialMessage<ListAutoEvaluationsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.ListAutoEvaluationsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAutoEvaluationsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAutoEvaluationsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAutoEvaluationsResponse;

  static equals(a: ListAutoEvaluationsResponse | PlainMessage<ListAutoEvaluationsResponse> | undefined, b: ListAutoEvaluationsResponse | PlainMessage<ListAutoEvaluationsResponse> | undefined): boolean;
}

/**
 * DeleteAutoEvaluationRequest is the request to delete an auto evaluation (with sub-entities).
 *
 * @generated from message api.v1alpha1.scorecards.DeleteAutoEvaluationRequest
 */
export declare class DeleteAutoEvaluationRequest extends Message<DeleteAutoEvaluationRequest> {
  /**
   * Required - unique id of auto evalution to delete.
   *
   * @generated from field: int64 auto_evaluation_id = 2;
   */
  autoEvaluationId: bigint;

  constructor(data?: PartialMessage<DeleteAutoEvaluationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.DeleteAutoEvaluationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteAutoEvaluationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteAutoEvaluationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteAutoEvaluationRequest;

  static equals(a: DeleteAutoEvaluationRequest | PlainMessage<DeleteAutoEvaluationRequest> | undefined, b: DeleteAutoEvaluationRequest | PlainMessage<DeleteAutoEvaluationRequest> | undefined): boolean;
}

/**
 * DeleteAutoEvaluationResponse returns the deleted auto evaluation.
 *
 * @generated from message api.v1alpha1.scorecards.DeleteAutoEvaluationResponse
 */
export declare class DeleteAutoEvaluationResponse extends Message<DeleteAutoEvaluationResponse> {
  /**
   * deleted auto evaluation object.
   *
   * @generated from field: api.commons.AutoEvaluation auto_evaluation = 1;
   */
  autoEvaluation?: AutoEvaluation;

  constructor(data?: PartialMessage<DeleteAutoEvaluationResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.DeleteAutoEvaluationResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteAutoEvaluationResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteAutoEvaluationResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteAutoEvaluationResponse;

  static equals(a: DeleteAutoEvaluationResponse | PlainMessage<DeleteAutoEvaluationResponse> | undefined, b: DeleteAutoEvaluationResponse | PlainMessage<DeleteAutoEvaluationResponse> | undefined): boolean;
}
