// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/scorecards/auto_evaluation.proto (package api.v1alpha1.scorecards, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { AutoEvaluation, RiskLevel, TimeFilter } from "../../commons/scorecards_pb.js";

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

  /**
   * Optional, filter completed timestamp by a specific range
   *
   * @generated from field: api.commons.TimeFilter completed_at = 3;
   */
  completedAt?: TimeFilter;

  /**
   * Optional - filter by category ids.
   *
   * @generated from field: repeated int64 category_ids = 5;
   */
  categoryIds: bigint[];

  /**
   * Optional - filter by call sid.
   *
   * @generated from field: api.v1alpha1.scorecards.ListAutoEvaluationsRequest.CallSidFilter call_sid = 6;
   */
  callSid?: ListAutoEvaluationsRequest_CallSidFilter;

  /**
   * Optional - filter by agent user ids.
   *
   * @generated from field: repeated string agent_user_ids = 7;
   */
  agentUserIds: string[];

  /**
   * Optional - number of auto evaluations included in response.
   *
   * @generated from field: int32 page_size = 8;
   */
  pageSize: number;

  /**
   * Optional. The order by which auto evaluations will be listed. Follows sql order by
   * syntax. When not provided the order defaults to "completed_at DESC".
   *
   * @generated from field: string order_by = 9;
   */
  orderBy: string;

  /**
   * Optional. The next_page_token returned from a previous List request, if any.
   *
   * @generated from field: string page_token = 10;
   */
  pageToken: string;

  /**
   * Optional - filter by risk level.
   *
   * @generated from field: repeated api.commons.RiskLevel risk_levels = 11;
   */
  riskLevels: RiskLevel[];

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
 * @generated from message api.v1alpha1.scorecards.ListAutoEvaluationsRequest.CallSidFilter
 */
export declare class ListAutoEvaluationsRequest_CallSidFilter extends Message<ListAutoEvaluationsRequest_CallSidFilter> {
  /**
   * Optional - filter by any of the provided sids.
   *
   * @generated from field: repeated int64 any_of = 1;
   */
  anyOf: bigint[];

  /**
   * filter values must be non-zero to be applied
   *
   * Optional - filter by equal to.
   *
   * @generated from field: int64 eq = 2;
   */
  eq: bigint;

  /**
   * Optional - filter by greater than or equal to.
   *
   * @generated from field: int64 gte = 3;
   */
  gte: bigint;

  /**
   * Optional - filter by less than or equal to.
   *
   * @generated from field: int64 lte = 4;
   */
  lte: bigint;

  /**
   * Optional - filter by greater than.
   *
   * @generated from field: int64 gt = 5;
   */
  gt: bigint;

  /**
   * Optional - filter by less than.
   *
   * @generated from field: int64 lt = 6;
   */
  lt: bigint;

  constructor(data?: PartialMessage<ListAutoEvaluationsRequest_CallSidFilter>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.ListAutoEvaluationsRequest.CallSidFilter";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAutoEvaluationsRequest_CallSidFilter;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAutoEvaluationsRequest_CallSidFilter;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAutoEvaluationsRequest_CallSidFilter;

  static equals(a: ListAutoEvaluationsRequest_CallSidFilter | PlainMessage<ListAutoEvaluationsRequest_CallSidFilter> | undefined, b: ListAutoEvaluationsRequest_CallSidFilter | PlainMessage<ListAutoEvaluationsRequest_CallSidFilter> | undefined): boolean;
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

  /**
   * Token to retrieve the next page of auto evaluations, or empty if there are no
   * more entries in the list.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;

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

/**
 * StreamAutoEvaluationsRequest is the request to stream a list of auto evaluations.
 *
 * @generated from message api.v1alpha1.scorecards.StreamAutoEvaluationsRequest
 */
export declare class StreamAutoEvaluationsRequest extends Message<StreamAutoEvaluationsRequest> {
  /**
   * Optional - filter by scorecard ids.
   *
   * @generated from field: repeated int64 scorecard_ids = 2;
   */
  scorecardIds: bigint[];

  /**
   * Optional - filter completed timestamp by a specific range
   *
   * @generated from field: api.commons.TimeFilter completed_at = 3;
   */
  completedAt?: TimeFilter;

  constructor(data?: PartialMessage<StreamAutoEvaluationsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.StreamAutoEvaluationsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamAutoEvaluationsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamAutoEvaluationsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamAutoEvaluationsRequest;

  static equals(a: StreamAutoEvaluationsRequest | PlainMessage<StreamAutoEvaluationsRequest> | undefined, b: StreamAutoEvaluationsRequest | PlainMessage<StreamAutoEvaluationsRequest> | undefined): boolean;
}

/**
 * StreamAutoEvaluationsResponse is the response object streamed.
 *
 * @generated from message api.v1alpha1.scorecards.StreamAutoEvaluationsResponse
 */
export declare class StreamAutoEvaluationsResponse extends Message<StreamAutoEvaluationsResponse> {
  /**
   * single-stream object.
   *
   * @generated from field: api.commons.AutoEvaluation auto_evaluation = 1;
   */
  autoEvaluation?: AutoEvaluation;

  constructor(data?: PartialMessage<StreamAutoEvaluationsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.StreamAutoEvaluationsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamAutoEvaluationsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamAutoEvaluationsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamAutoEvaluationsResponse;

  static equals(a: StreamAutoEvaluationsResponse | PlainMessage<StreamAutoEvaluationsResponse> | undefined, b: StreamAutoEvaluationsResponse | PlainMessage<StreamAutoEvaluationsResponse> | undefined): boolean;
}

/**
 * ListAutoEvaluationsByOrgIdRequest is the request to get a list of auto evaluations.
 *
 * @generated from message api.v1alpha1.scorecards.ListAutoEvaluationsByOrgIdRequest
 */
export declare class ListAutoEvaluationsByOrgIdRequest extends Message<ListAutoEvaluationsByOrgIdRequest> {
  /**
   * Required - org id of auto evaluations
   *
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  /**
   * Optional - filter by scorecard ids.
   *
   * @generated from field: repeated int64 scorecard_ids = 2;
   */
  scorecardIds: bigint[];

  /**
   * Optional, filter completed timestamp by a specific range
   *
   * @generated from field: api.commons.TimeFilter completed_at = 3;
   */
  completedAt?: TimeFilter;

  /**
   * Optional - filter by category ids.
   *
   * @generated from field: repeated int64 category_ids = 5;
   */
  categoryIds: bigint[];

  /**
   * Optional - filter by call sid.
   *
   * @generated from field: api.v1alpha1.scorecards.ListAutoEvaluationsByOrgIdRequest.CallSidFilter call_sid = 6;
   */
  callSid?: ListAutoEvaluationsByOrgIdRequest_CallSidFilter;

  /**
   * Optional - filter by agent user ids.
   *
   * @generated from field: repeated string agent_user_ids = 7;
   */
  agentUserIds: string[];

  /**
   * Optional - number of auto evaluations included in response.
   *
   * @generated from field: int32 page_size = 8;
   */
  pageSize: number;

  /**
   * Optional. The order by which auto evaluations will be listed. Follows sql order by
   * syntax. When not provided the order defaults to "completed_at DESC".
   *
   * @generated from field: string order_by = 9;
   */
  orderBy: string;

  /**
   * Optional. The next_page_token returned from a previous List request, if any.
   *
   * @generated from field: string page_token = 10;
   */
  pageToken: string;

  /**
   * Optional - filter by risk level.
   *
   * @generated from field: repeated api.commons.RiskLevel risk_levels = 11;
   */
  riskLevels: RiskLevel[];

  constructor(data?: PartialMessage<ListAutoEvaluationsByOrgIdRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.ListAutoEvaluationsByOrgIdRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAutoEvaluationsByOrgIdRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAutoEvaluationsByOrgIdRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAutoEvaluationsByOrgIdRequest;

  static equals(a: ListAutoEvaluationsByOrgIdRequest | PlainMessage<ListAutoEvaluationsByOrgIdRequest> | undefined, b: ListAutoEvaluationsByOrgIdRequest | PlainMessage<ListAutoEvaluationsByOrgIdRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.scorecards.ListAutoEvaluationsByOrgIdRequest.CallSidFilter
 */
export declare class ListAutoEvaluationsByOrgIdRequest_CallSidFilter extends Message<ListAutoEvaluationsByOrgIdRequest_CallSidFilter> {
  /**
   * Optional - filter by any of the provided sids.
   *
   * @generated from field: repeated int64 any_of = 1;
   */
  anyOf: bigint[];

  /**
   * filter values must be non-zero to be applied
   *
   * Optional - filter by equal to.
   *
   * @generated from field: int64 eq = 2;
   */
  eq: bigint;

  /**
   * Optional - filter by greater than or equal to.
   *
   * @generated from field: int64 gte = 3;
   */
  gte: bigint;

  /**
   * Optional - filter by less than or equal to.
   *
   * @generated from field: int64 lte = 4;
   */
  lte: bigint;

  /**
   * Optional - filter by greater than.
   *
   * @generated from field: int64 gt = 5;
   */
  gt: bigint;

  /**
   * Optional - filter by less than.
   *
   * @generated from field: int64 lt = 6;
   */
  lt: bigint;

  constructor(data?: PartialMessage<ListAutoEvaluationsByOrgIdRequest_CallSidFilter>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.ListAutoEvaluationsByOrgIdRequest.CallSidFilter";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAutoEvaluationsByOrgIdRequest_CallSidFilter;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAutoEvaluationsByOrgIdRequest_CallSidFilter;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAutoEvaluationsByOrgIdRequest_CallSidFilter;

  static equals(a: ListAutoEvaluationsByOrgIdRequest_CallSidFilter | PlainMessage<ListAutoEvaluationsByOrgIdRequest_CallSidFilter> | undefined, b: ListAutoEvaluationsByOrgIdRequest_CallSidFilter | PlainMessage<ListAutoEvaluationsByOrgIdRequest_CallSidFilter> | undefined): boolean;
}

/**
 * DeleteAutoEvaluationByOrgIdRequest is the request to delete an auto evaluation (with sub-entities).
 *
 * @generated from message api.v1alpha1.scorecards.DeleteAutoEvaluationByOrgIdRequest
 */
export declare class DeleteAutoEvaluationByOrgIdRequest extends Message<DeleteAutoEvaluationByOrgIdRequest> {
  /**
   * Required - org id of auto evaluations
   *
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  /**
   * Required - unique id of auto evalution to delete.
   *
   * @generated from field: int64 auto_evaluation_id = 2;
   */
  autoEvaluationId: bigint;

  constructor(data?: PartialMessage<DeleteAutoEvaluationByOrgIdRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.DeleteAutoEvaluationByOrgIdRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteAutoEvaluationByOrgIdRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteAutoEvaluationByOrgIdRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteAutoEvaluationByOrgIdRequest;

  static equals(a: DeleteAutoEvaluationByOrgIdRequest | PlainMessage<DeleteAutoEvaluationByOrgIdRequest> | undefined, b: DeleteAutoEvaluationByOrgIdRequest | PlainMessage<DeleteAutoEvaluationByOrgIdRequest> | undefined): boolean;
}

