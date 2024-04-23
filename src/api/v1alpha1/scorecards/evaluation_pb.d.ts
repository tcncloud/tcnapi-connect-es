// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/scorecards/evaluation.proto (package api.v1alpha1.scorecards, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Evaluation, Scorecard, TimeFilter } from "../../commons/scorecards_pb.js";

/**
 * CreateEvaluationRequest is request to create a new evaluation
 *
 * @generated from message api.v1alpha1.scorecards.CreateEvaluationRequest
 */
export declare class CreateEvaluationRequest extends Message<CreateEvaluationRequest> {
  /**
   * entity to create
   *
   * @generated from field: api.commons.Evaluation evaluation = 1;
   */
  evaluation?: Evaluation;

  constructor(data?: PartialMessage<CreateEvaluationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.CreateEvaluationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateEvaluationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateEvaluationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateEvaluationRequest;

  static equals(a: CreateEvaluationRequest | PlainMessage<CreateEvaluationRequest> | undefined, b: CreateEvaluationRequest | PlainMessage<CreateEvaluationRequest> | undefined): boolean;
}

/**
 * CreateEvaluationResponse is response with created entity
 *
 * @generated from message api.v1alpha1.scorecards.CreateEvaluationResponse
 */
export declare class CreateEvaluationResponse extends Message<CreateEvaluationResponse> {
  /**
   * entity created
   *
   * @generated from field: api.commons.Evaluation evaluation = 1;
   */
  evaluation?: Evaluation;

  constructor(data?: PartialMessage<CreateEvaluationResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.CreateEvaluationResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateEvaluationResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateEvaluationResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateEvaluationResponse;

  static equals(a: CreateEvaluationResponse | PlainMessage<CreateEvaluationResponse> | undefined, b: CreateEvaluationResponse | PlainMessage<CreateEvaluationResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.scorecards.UpdateEvaluationRequest
 */
export declare class UpdateEvaluationRequest extends Message<UpdateEvaluationRequest> {
  /**
   * Required - evaluation that is to be updated
   *
   * @generated from field: api.commons.Evaluation evaluation = 1;
   */
  evaluation?: Evaluation;

  /**
   * Required - specification of which fields should be updated
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateEvaluationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.UpdateEvaluationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateEvaluationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateEvaluationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateEvaluationRequest;

  static equals(a: UpdateEvaluationRequest | PlainMessage<UpdateEvaluationRequest> | undefined, b: UpdateEvaluationRequest | PlainMessage<UpdateEvaluationRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.scorecards.UpdateEvaluationResponse
 */
export declare class UpdateEvaluationResponse extends Message<UpdateEvaluationResponse> {
  /**
   * @generated from field: api.commons.Evaluation evaluation = 1;
   */
  evaluation?: Evaluation;

  constructor(data?: PartialMessage<UpdateEvaluationResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.UpdateEvaluationResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateEvaluationResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateEvaluationResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateEvaluationResponse;

  static equals(a: UpdateEvaluationResponse | PlainMessage<UpdateEvaluationResponse> | undefined, b: UpdateEvaluationResponse | PlainMessage<UpdateEvaluationResponse> | undefined): boolean;
}

/**
 * DeleteEvaluationRequest is request to delete an evaluation
 *
 * @generated from message api.v1alpha1.scorecards.DeleteEvaluationRequest
 */
export declare class DeleteEvaluationRequest extends Message<DeleteEvaluationRequest> {
  /**
   * Required - unique id of evaluation to get
   *
   * @generated from field: int64 evaluation_id = 2;
   */
  evaluationId: bigint;

  constructor(data?: PartialMessage<DeleteEvaluationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.DeleteEvaluationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteEvaluationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteEvaluationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteEvaluationRequest;

  static equals(a: DeleteEvaluationRequest | PlainMessage<DeleteEvaluationRequest> | undefined, b: DeleteEvaluationRequest | PlainMessage<DeleteEvaluationRequest> | undefined): boolean;
}

/**
 * DeleteEvaluationReponse is response with requested entity
 *
 * @generated from message api.v1alpha1.scorecards.DeleteEvaluationResponse
 */
export declare class DeleteEvaluationResponse extends Message<DeleteEvaluationResponse> {
  /**
   * entity deleted
   *
   * @generated from field: api.commons.Evaluation evaluation = 1;
   */
  evaluation?: Evaluation;

  constructor(data?: PartialMessage<DeleteEvaluationResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.DeleteEvaluationResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteEvaluationResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteEvaluationResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteEvaluationResponse;

  static equals(a: DeleteEvaluationResponse | PlainMessage<DeleteEvaluationResponse> | undefined, b: DeleteEvaluationResponse | PlainMessage<DeleteEvaluationResponse> | undefined): boolean;
}

/**
 * GetEvaluationRequest is request to get an evaluation
 *
 * @generated from message api.v1alpha1.scorecards.GetEvaluationRequest
 */
export declare class GetEvaluationRequest extends Message<GetEvaluationRequest> {
  /**
   * Required - unique id of evaluation to get
   *
   * @generated from field: int64 evaluation_id = 2;
   */
  evaluationId: bigint;

  constructor(data?: PartialMessage<GetEvaluationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.GetEvaluationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetEvaluationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetEvaluationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetEvaluationRequest;

  static equals(a: GetEvaluationRequest | PlainMessage<GetEvaluationRequest> | undefined, b: GetEvaluationRequest | PlainMessage<GetEvaluationRequest> | undefined): boolean;
}

/**
 * GetEvaluationReponse is response with requested entity
 *
 * @generated from message api.v1alpha1.scorecards.GetEvaluationResponse
 */
export declare class GetEvaluationResponse extends Message<GetEvaluationResponse> {
  /**
   * @generated from field: api.commons.Evaluation evaluation = 1;
   */
  evaluation?: Evaluation;

  constructor(data?: PartialMessage<GetEvaluationResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.GetEvaluationResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetEvaluationResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetEvaluationResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetEvaluationResponse;

  static equals(a: GetEvaluationResponse | PlainMessage<GetEvaluationResponse> | undefined, b: GetEvaluationResponse | PlainMessage<GetEvaluationResponse> | undefined): boolean;
}

/**
 * ScoreEvaluationRequest is request to score an evaluation
 *
 * @generated from message api.v1alpha1.scorecards.ScoreEvaluationRequest
 */
export declare class ScoreEvaluationRequest extends Message<ScoreEvaluationRequest> {
  /**
   * Required - unique id of evaluation to score
   *
   * @generated from field: int64 evaluation_id = 3;
   */
  evaluationId: bigint;

  constructor(data?: PartialMessage<ScoreEvaluationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.ScoreEvaluationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScoreEvaluationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScoreEvaluationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScoreEvaluationRequest;

  static equals(a: ScoreEvaluationRequest | PlainMessage<ScoreEvaluationRequest> | undefined, b: ScoreEvaluationRequest | PlainMessage<ScoreEvaluationRequest> | undefined): boolean;
}

/**
 * ScoreEvaluationResponse returns the evaluation that was scored
 *
 * @generated from message api.v1alpha1.scorecards.ScoreEvaluationResponse
 */
export declare class ScoreEvaluationResponse extends Message<ScoreEvaluationResponse> {
  /**
   * @generated from field: api.commons.Evaluation evaluation = 1;
   */
  evaluation?: Evaluation;

  constructor(data?: PartialMessage<ScoreEvaluationResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.ScoreEvaluationResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScoreEvaluationResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScoreEvaluationResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScoreEvaluationResponse;

  static equals(a: ScoreEvaluationResponse | PlainMessage<ScoreEvaluationResponse> | undefined, b: ScoreEvaluationResponse | PlainMessage<ScoreEvaluationResponse> | undefined): boolean;
}

/**
 * ListEvaluationsRequest is request to get list of evaluations
 *
 * @generated from message api.v1alpha1.scorecards.ListEvaluationsRequest
 */
export declare class ListEvaluationsRequest extends Message<ListEvaluationsRequest> {
  /**
   * optional, list by scorer_id
   *
   * @generated from field: repeated string scorer_id = 2;
   */
  scorerId: string[];

  /**
   * optional, filter completed_at by a specific range
   *
   * @generated from field: api.commons.TimeFilter completed_at = 3;
   */
  completedAt?: TimeFilter;

  /**
   * optional, list by category_ids
   *
   * @generated from field: repeated int64 category_ids = 4;
   */
  categoryIds: bigint[];

  /**
   * Optional. List by agent user ids.
   *
   * @generated from field: repeated string agent_user_ids = 5;
   */
  agentUserIds: string[];

  /**
   * Optional. List by scorecard_ids
   *
   * @generated from field: repeated int64 scorecard_ids = 6;
   */
  scorecardIds: bigint[];

  /**
   * Optional. Fields to return. Defaults to all evaluation fields (no sub entities).
   *
   * Example selecting score, section points, and question answers:
   * {
   *   paths: [
   *     "score",
   *     "evaluation_section.points",
   *     "evaluation_section.evaluation_question.answers"
   *   ]
   * }
   *
   * @generated from field: google.protobuf.FieldMask return_fields = 10;
   */
  returnFields?: FieldMask;

  constructor(data?: PartialMessage<ListEvaluationsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.ListEvaluationsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListEvaluationsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListEvaluationsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListEvaluationsRequest;

  static equals(a: ListEvaluationsRequest | PlainMessage<ListEvaluationsRequest> | undefined, b: ListEvaluationsRequest | PlainMessage<ListEvaluationsRequest> | undefined): boolean;
}

/**
 * ListEvaluationsResponse returns a list of evaluations
 *
 * @generated from message api.v1alpha1.scorecards.ListEvaluationsResponse
 */
export declare class ListEvaluationsResponse extends Message<ListEvaluationsResponse> {
  /**
   * @generated from field: repeated api.commons.Evaluation evaluations = 1;
   */
  evaluations: Evaluation[];

  constructor(data?: PartialMessage<ListEvaluationsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.ListEvaluationsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListEvaluationsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListEvaluationsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListEvaluationsResponse;

  static equals(a: ListEvaluationsResponse | PlainMessage<ListEvaluationsResponse> | undefined, b: ListEvaluationsResponse | PlainMessage<ListEvaluationsResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.scorecards.PreviewEvaluationScoreRequest
 */
export declare class PreviewEvaluationScoreRequest extends Message<PreviewEvaluationScoreRequest> {
  /**
   * Required - evaluation to preview score of
   *
   * @generated from field: api.commons.Evaluation evaluation = 2;
   */
  evaluation?: Evaluation;

  /**
   * Required - scorecard the evaluation belongs too
   *
   * @generated from field: api.commons.Scorecard scorecard = 3;
   */
  scorecard?: Scorecard;

  constructor(data?: PartialMessage<PreviewEvaluationScoreRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.PreviewEvaluationScoreRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PreviewEvaluationScoreRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PreviewEvaluationScoreRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PreviewEvaluationScoreRequest;

  static equals(a: PreviewEvaluationScoreRequest | PlainMessage<PreviewEvaluationScoreRequest> | undefined, b: PreviewEvaluationScoreRequest | PlainMessage<PreviewEvaluationScoreRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.scorecards.PreviewEvaluationScoreResponse
 */
export declare class PreviewEvaluationScoreResponse extends Message<PreviewEvaluationScoreResponse> {
  /**
   * preview of scored evaluation
   *
   * @generated from field: api.commons.Evaluation evaluation = 1;
   */
  evaluation?: Evaluation;

  constructor(data?: PartialMessage<PreviewEvaluationScoreResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.PreviewEvaluationScoreResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PreviewEvaluationScoreResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PreviewEvaluationScoreResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PreviewEvaluationScoreResponse;

  static equals(a: PreviewEvaluationScoreResponse | PlainMessage<PreviewEvaluationScoreResponse> | undefined, b: PreviewEvaluationScoreResponse | PlainMessage<PreviewEvaluationScoreResponse> | undefined): boolean;
}

/**
 * ListEvaluationsByOrgIdRequest is request to get list of evaluations
 *
 * @generated from message api.v1alpha1.scorecards.ListEvaluationsByOrgIdRequest
 */
export declare class ListEvaluationsByOrgIdRequest extends Message<ListEvaluationsByOrgIdRequest> {
  /**
   * Required. Specifies the org id to filter evaluations by.
   *
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  /**
   * optional, list by scorer_id
   *
   * @generated from field: repeated string scorer_id = 2;
   */
  scorerId: string[];

  /**
   * optional, filter completed_at by a specific range
   *
   * @generated from field: api.commons.TimeFilter completed_at = 3;
   */
  completedAt?: TimeFilter;

  /**
   * optional, list by category_ids
   *
   * @generated from field: repeated int64 category_ids = 4;
   */
  categoryIds: bigint[];

  /**
   * Optional. List by agent user ids.
   *
   * @generated from field: repeated string agent_user_ids = 5;
   */
  agentUserIds: string[];

  /**
   * Optional. List by scorecard_ids
   *
   * @generated from field: repeated int64 scorecard_ids = 6;
   */
  scorecardIds: bigint[];

  /**
   * Optional. Fields to return. Defaults to all evaluation fields (no sub entities).
   *
   * Example selecting score, section points, and question answers:
   * {
   *   paths: [
   *     "score",
   *     "evaluation_section.points",
   *     "evaluation_section.evaluation_question.answers"
   *   ]
   * }
   *
   * @generated from field: google.protobuf.FieldMask return_fields = 10;
   */
  returnFields?: FieldMask;

  constructor(data?: PartialMessage<ListEvaluationsByOrgIdRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.ListEvaluationsByOrgIdRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListEvaluationsByOrgIdRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListEvaluationsByOrgIdRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListEvaluationsByOrgIdRequest;

  static equals(a: ListEvaluationsByOrgIdRequest | PlainMessage<ListEvaluationsByOrgIdRequest> | undefined, b: ListEvaluationsByOrgIdRequest | PlainMessage<ListEvaluationsByOrgIdRequest> | undefined): boolean;
}

/**
 * DeleteEvaluationByOrgIdRequest is request to delete an evaluation
 *
 * @generated from message api.v1alpha1.scorecards.DeleteEvaluationByOrgIdRequest
 */
export declare class DeleteEvaluationByOrgIdRequest extends Message<DeleteEvaluationByOrgIdRequest> {
  /**
   * Required. Specifies the org in which to delete the evaluation.
   *
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  /**
   * Required - unique id of evaluation to get
   *
   * @generated from field: int64 evaluation_id = 2;
   */
  evaluationId: bigint;

  constructor(data?: PartialMessage<DeleteEvaluationByOrgIdRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.DeleteEvaluationByOrgIdRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteEvaluationByOrgIdRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteEvaluationByOrgIdRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteEvaluationByOrgIdRequest;

  static equals(a: DeleteEvaluationByOrgIdRequest | PlainMessage<DeleteEvaluationByOrgIdRequest> | undefined, b: DeleteEvaluationByOrgIdRequest | PlainMessage<DeleteEvaluationByOrgIdRequest> | undefined): boolean;
}

