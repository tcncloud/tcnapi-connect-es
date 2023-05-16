// @generated by protoc-gen-es v1.2.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/scorecards/scorecard.proto (package api.v1alpha1.scorecards, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Scorecard, ScorecardState } from "../../commons/scorecards_pb.js";

/**
 * CreateScorecardRequest is the request to create a scorecard.
 *
 * @generated from message api.v1alpha1.scorecards.CreateScorecardRequest
 */
export declare class CreateScorecardRequest extends Message<CreateScorecardRequest> {
  /**
   * @generated from field: api.commons.Scorecard scorecard = 1;
   */
  scorecard?: Scorecard;

  constructor(data?: PartialMessage<CreateScorecardRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.CreateScorecardRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateScorecardRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateScorecardRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateScorecardRequest;

  static equals(a: CreateScorecardRequest | PlainMessage<CreateScorecardRequest> | undefined, b: CreateScorecardRequest | PlainMessage<CreateScorecardRequest> | undefined): boolean;
}

/**
 * CreateScorecardResponse contains the scorecard that was created.
 *
 * @generated from message api.v1alpha1.scorecards.CreateScorecardResponse
 */
export declare class CreateScorecardResponse extends Message<CreateScorecardResponse> {
  /**
   * @generated from field: api.commons.Scorecard scorecard = 1;
   */
  scorecard?: Scorecard;

  constructor(data?: PartialMessage<CreateScorecardResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.CreateScorecardResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateScorecardResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateScorecardResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateScorecardResponse;

  static equals(a: CreateScorecardResponse | PlainMessage<CreateScorecardResponse> | undefined, b: CreateScorecardResponse | PlainMessage<CreateScorecardResponse> | undefined): boolean;
}

/**
 * ListScorecardsRequest is the request for listing scorecards by certain criteria.
 *
 * @generated from message api.v1alpha1.scorecards.ListScorecardsRequest
 */
export declare class ListScorecardsRequest extends Message<ListScorecardsRequest> {
  /**
   * Optional. Results include any of the authors
   *
   * @generated from field: repeated string author_ids = 2;
   */
  authorIds: string[];

  /**
   * Optional. Results include any of the categories listed.
   *
   * @generated from field: repeated int64 category_ids = 3;
   */
  categoryIds: bigint[];

  /**
   * Optional. Results include scorecard in any of the given states.
   *
   * @generated from field: repeated api.commons.ScorecardState states = 4;
   */
  states: ScorecardState[];

  constructor(data?: PartialMessage<ListScorecardsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.ListScorecardsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListScorecardsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListScorecardsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListScorecardsRequest;

  static equals(a: ListScorecardsRequest | PlainMessage<ListScorecardsRequest> | undefined, b: ListScorecardsRequest | PlainMessage<ListScorecardsRequest> | undefined): boolean;
}

/**
 * ListScorecardsResponse includes a list of scorecards.
 *
 * @generated from message api.v1alpha1.scorecards.ListScorecardsResponse
 */
export declare class ListScorecardsResponse extends Message<ListScorecardsResponse> {
  /**
   * @generated from field: repeated api.commons.Scorecard scorecards = 1;
   */
  scorecards: Scorecard[];

  constructor(data?: PartialMessage<ListScorecardsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.ListScorecardsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListScorecardsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListScorecardsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListScorecardsResponse;

  static equals(a: ListScorecardsResponse | PlainMessage<ListScorecardsResponse> | undefined, b: ListScorecardsResponse | PlainMessage<ListScorecardsResponse> | undefined): boolean;
}

/**
 * UpdateScorecardRequest is the request for updating a scorecard.
 *
 * @generated from message api.v1alpha1.scorecards.UpdateScorecardRequest
 */
export declare class UpdateScorecardRequest extends Message<UpdateScorecardRequest> {
  /**
   * Required.
   *
   * @generated from field: api.commons.Scorecard scorecard = 1;
   */
  scorecard?: Scorecard;

  /**
   * Required. Valid paths: [title, description, pass_score, score_type,
   * evaluation_type, allow_feedback, distribute_weights, category.category_id].
   * To update Sections, use *Section and *ScorecardQuestion methods.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateScorecardRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.UpdateScorecardRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateScorecardRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateScorecardRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateScorecardRequest;

  static equals(a: UpdateScorecardRequest | PlainMessage<UpdateScorecardRequest> | undefined, b: UpdateScorecardRequest | PlainMessage<UpdateScorecardRequest> | undefined): boolean;
}

/**
 * UpdateScorecardResponse returns the updated scorecard.
 *
 * @generated from message api.v1alpha1.scorecards.UpdateScorecardResponse
 */
export declare class UpdateScorecardResponse extends Message<UpdateScorecardResponse> {
  /**
   * @generated from field: api.commons.Scorecard scorecard = 1;
   */
  scorecard?: Scorecard;

  constructor(data?: PartialMessage<UpdateScorecardResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.UpdateScorecardResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateScorecardResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateScorecardResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateScorecardResponse;

  static equals(a: UpdateScorecardResponse | PlainMessage<UpdateScorecardResponse> | undefined, b: UpdateScorecardResponse | PlainMessage<UpdateScorecardResponse> | undefined): boolean;
}

/**
 * DeleteScorecardRequest is the request to delete a scorecard.
 *
 * @generated from message api.v1alpha1.scorecards.DeleteScorecardRequest
 */
export declare class DeleteScorecardRequest extends Message<DeleteScorecardRequest> {
  /**
   * Required.
   *
   * @generated from field: int64 scorecard_id = 2;
   */
  scorecardId: bigint;

  constructor(data?: PartialMessage<DeleteScorecardRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.DeleteScorecardRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteScorecardRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteScorecardRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteScorecardRequest;

  static equals(a: DeleteScorecardRequest | PlainMessage<DeleteScorecardRequest> | undefined, b: DeleteScorecardRequest | PlainMessage<DeleteScorecardRequest> | undefined): boolean;
}

/**
 * DeleteScorecardResponse contains the deleted scorecard.
 *
 * @generated from message api.v1alpha1.scorecards.DeleteScorecardResponse
 */
export declare class DeleteScorecardResponse extends Message<DeleteScorecardResponse> {
  /**
   * @generated from field: api.commons.Scorecard scorecard = 1;
   */
  scorecard?: Scorecard;

  constructor(data?: PartialMessage<DeleteScorecardResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.DeleteScorecardResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteScorecardResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteScorecardResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteScorecardResponse;

  static equals(a: DeleteScorecardResponse | PlainMessage<DeleteScorecardResponse> | undefined, b: DeleteScorecardResponse | PlainMessage<DeleteScorecardResponse> | undefined): boolean;
}

/**
 * GetScorecardRequest is the request for getting a scorecard.
 *
 * @generated from message api.v1alpha1.scorecards.GetScorecardRequest
 */
export declare class GetScorecardRequest extends Message<GetScorecardRequest> {
  /**
   * Required.
   *
   * @generated from field: int64 scorecard_id = 2;
   */
  scorecardId: bigint;

  /**
   * if true, will ignore id and return default
   *
   * @generated from field: bool use_default = 3;
   */
  useDefault: boolean;

  constructor(data?: PartialMessage<GetScorecardRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.GetScorecardRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetScorecardRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetScorecardRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetScorecardRequest;

  static equals(a: GetScorecardRequest | PlainMessage<GetScorecardRequest> | undefined, b: GetScorecardRequest | PlainMessage<GetScorecardRequest> | undefined): boolean;
}

/**
 * GetScorecardResponse contains a scorecard.
 *
 * @generated from message api.v1alpha1.scorecards.GetScorecardResponse
 */
export declare class GetScorecardResponse extends Message<GetScorecardResponse> {
  /**
   * @generated from field: api.commons.Scorecard scorecard = 1;
   */
  scorecard?: Scorecard;

  constructor(data?: PartialMessage<GetScorecardResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.GetScorecardResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetScorecardResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetScorecardResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetScorecardResponse;

  static equals(a: GetScorecardResponse | PlainMessage<GetScorecardResponse> | undefined, b: GetScorecardResponse | PlainMessage<GetScorecardResponse> | undefined): boolean;
}

