// @generated by protoc-gen-es v1.5.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/agenttraining/learning_opportunity.proto (package api.v1alpha1.agenttraining, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { CallIdentifier, LearningOpportunity } from "../../commons/agent_training_pb.js";
import type { TimeFilter } from "../../commons/scorecards_pb.js";

/**
 * CreateLearningOpportunityRequest represents a request to create a new learning opportunity.
 *
 * @generated from message api.v1alpha1.agenttraining.CreateLearningOpportunityRequest
 */
export declare class CreateLearningOpportunityRequest extends Message<CreateLearningOpportunityRequest> {
  /**
   * @generated from field: api.commons.LearningOpportunity learning_opportunity = 1;
   */
  learningOpportunity?: LearningOpportunity;

  constructor(data?: PartialMessage<CreateLearningOpportunityRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.agenttraining.CreateLearningOpportunityRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateLearningOpportunityRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateLearningOpportunityRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateLearningOpportunityRequest;

  static equals(a: CreateLearningOpportunityRequest | PlainMessage<CreateLearningOpportunityRequest> | undefined, b: CreateLearningOpportunityRequest | PlainMessage<CreateLearningOpportunityRequest> | undefined): boolean;
}

/**
 * CreateLearningOpportunityResponse represents the created learning opportunity.
 *
 * @generated from message api.v1alpha1.agenttraining.CreateLearningOpportunityResponse
 */
export declare class CreateLearningOpportunityResponse extends Message<CreateLearningOpportunityResponse> {
  /**
   * @generated from field: api.commons.LearningOpportunity learning_opportunity = 1;
   */
  learningOpportunity?: LearningOpportunity;

  constructor(data?: PartialMessage<CreateLearningOpportunityResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.agenttraining.CreateLearningOpportunityResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateLearningOpportunityResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateLearningOpportunityResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateLearningOpportunityResponse;

  static equals(a: CreateLearningOpportunityResponse | PlainMessage<CreateLearningOpportunityResponse> | undefined, b: CreateLearningOpportunityResponse | PlainMessage<CreateLearningOpportunityResponse> | undefined): boolean;
}

/**
 * ListLearningOpportunitiesRequest represents a request to list learning opportunities.
 *
 * @generated from message api.v1alpha1.agenttraining.ListLearningOpportunitiesRequest
 */
export declare class ListLearningOpportunitiesRequest extends Message<ListLearningOpportunitiesRequest> {
  /**
   * Optional - 'any of' if provided.
   *
   * @generated from field: repeated api.commons.CallIdentifier call_identifiers = 2;
   */
  callIdentifiers: CallIdentifier[];

  /**
   * Optional - 'any of' if provided.
   *
   * @generated from field: repeated int64 transcript_sids = 3;
   */
  transcriptSids: bigint[];

  /**
   * Optional - 'any of' if provided.
   *
   * @generated from field: repeated string agent_user_ids = 4;
   */
  agentUserIds: string[];

  /**
   * Optional.
   *
   * @generated from field: api.commons.TimeFilter created_at = 5;
   */
  createdAt?: TimeFilter;

  constructor(data?: PartialMessage<ListLearningOpportunitiesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.agenttraining.ListLearningOpportunitiesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListLearningOpportunitiesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListLearningOpportunitiesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListLearningOpportunitiesRequest;

  static equals(a: ListLearningOpportunitiesRequest | PlainMessage<ListLearningOpportunitiesRequest> | undefined, b: ListLearningOpportunitiesRequest | PlainMessage<ListLearningOpportunitiesRequest> | undefined): boolean;
}

/**
 * ListLearningOpportunitiesResponse represents the listed learning opportunities.
 *
 * @generated from message api.v1alpha1.agenttraining.ListLearningOpportunitiesResponse
 */
export declare class ListLearningOpportunitiesResponse extends Message<ListLearningOpportunitiesResponse> {
  /**
   * @generated from field: repeated api.commons.LearningOpportunity learning_opportunities = 1;
   */
  learningOpportunities: LearningOpportunity[];

  constructor(data?: PartialMessage<ListLearningOpportunitiesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.agenttraining.ListLearningOpportunitiesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListLearningOpportunitiesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListLearningOpportunitiesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListLearningOpportunitiesResponse;

  static equals(a: ListLearningOpportunitiesResponse | PlainMessage<ListLearningOpportunitiesResponse> | undefined, b: ListLearningOpportunitiesResponse | PlainMessage<ListLearningOpportunitiesResponse> | undefined): boolean;
}

/**
 * ListAgentLearningOpportunitiesRequest represents a request to list learning opportunities by agent.
 *
 * @generated from message api.v1alpha1.agenttraining.ListAgentLearningOpportunitiesRequest
 */
export declare class ListAgentLearningOpportunitiesRequest extends Message<ListAgentLearningOpportunitiesRequest> {
  /**
   * Optional - 'any of' if provided.
   *
   * @generated from field: repeated api.commons.CallIdentifier call_identifiers = 2;
   */
  callIdentifiers: CallIdentifier[];

  /**
   * Optional - 'any of' if provided.
   *
   * @generated from field: repeated int64 transcript_sids = 3;
   */
  transcriptSids: bigint[];

  /**
   * Optional.
   *
   * @generated from field: api.commons.TimeFilter created_at = 4;
   */
  createdAt?: TimeFilter;

  constructor(data?: PartialMessage<ListAgentLearningOpportunitiesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.agenttraining.ListAgentLearningOpportunitiesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAgentLearningOpportunitiesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAgentLearningOpportunitiesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAgentLearningOpportunitiesRequest;

  static equals(a: ListAgentLearningOpportunitiesRequest | PlainMessage<ListAgentLearningOpportunitiesRequest> | undefined, b: ListAgentLearningOpportunitiesRequest | PlainMessage<ListAgentLearningOpportunitiesRequest> | undefined): boolean;
}

/**
 * ListAgentLearningOpportunitiesResponse represents the listed learning opportunities.
 *
 * @generated from message api.v1alpha1.agenttraining.ListAgentLearningOpportunitiesResponse
 */
export declare class ListAgentLearningOpportunitiesResponse extends Message<ListAgentLearningOpportunitiesResponse> {
  /**
   * @generated from field: repeated api.commons.LearningOpportunity learning_opportunities = 1;
   */
  learningOpportunities: LearningOpportunity[];

  constructor(data?: PartialMessage<ListAgentLearningOpportunitiesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.agenttraining.ListAgentLearningOpportunitiesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAgentLearningOpportunitiesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAgentLearningOpportunitiesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAgentLearningOpportunitiesResponse;

  static equals(a: ListAgentLearningOpportunitiesResponse | PlainMessage<ListAgentLearningOpportunitiesResponse> | undefined, b: ListAgentLearningOpportunitiesResponse | PlainMessage<ListAgentLearningOpportunitiesResponse> | undefined): boolean;
}

/**
 * UpdateLearningOpportunityRequest represents a request to update a learning opportunity.
 *
 * @generated from message api.v1alpha1.agenttraining.UpdateLearningOpportunityRequest
 */
export declare class UpdateLearningOpportunityRequest extends Message<UpdateLearningOpportunityRequest> {
  /**
   * @generated from field: api.commons.LearningOpportunity learning_opportunity = 2;
   */
  learningOpportunity?: LearningOpportunity;

  /**
   * @generated from field: google.protobuf.FieldMask update_mask = 3;
   */
  updateMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateLearningOpportunityRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.agenttraining.UpdateLearningOpportunityRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateLearningOpportunityRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateLearningOpportunityRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateLearningOpportunityRequest;

  static equals(a: UpdateLearningOpportunityRequest | PlainMessage<UpdateLearningOpportunityRequest> | undefined, b: UpdateLearningOpportunityRequest | PlainMessage<UpdateLearningOpportunityRequest> | undefined): boolean;
}

/**
 * UpdateLearningOpportunityResponse represents the updated learning opportunity.
 *
 * @generated from message api.v1alpha1.agenttraining.UpdateLearningOpportunityResponse
 */
export declare class UpdateLearningOpportunityResponse extends Message<UpdateLearningOpportunityResponse> {
  /**
   * @generated from field: api.commons.LearningOpportunity learning_opportunity = 1;
   */
  learningOpportunity?: LearningOpportunity;

  constructor(data?: PartialMessage<UpdateLearningOpportunityResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.agenttraining.UpdateLearningOpportunityResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateLearningOpportunityResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateLearningOpportunityResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateLearningOpportunityResponse;

  static equals(a: UpdateLearningOpportunityResponse | PlainMessage<UpdateLearningOpportunityResponse> | undefined, b: UpdateLearningOpportunityResponse | PlainMessage<UpdateLearningOpportunityResponse> | undefined): boolean;
}

/**
 * CompleteAgentLearningOpportunityRequest represents an agent
 * request to complete a learning opportunity assigned to that agent.
 *
 * @generated from message api.v1alpha1.agenttraining.CompleteAgentLearningOpportunityRequest
 */
export declare class CompleteAgentLearningOpportunityRequest extends Message<CompleteAgentLearningOpportunityRequest> {
  /**
   * @generated from field: int64 learning_opportunity_id = 3;
   */
  learningOpportunityId: bigint;

  constructor(data?: PartialMessage<CompleteAgentLearningOpportunityRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.agenttraining.CompleteAgentLearningOpportunityRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CompleteAgentLearningOpportunityRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CompleteAgentLearningOpportunityRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CompleteAgentLearningOpportunityRequest;

  static equals(a: CompleteAgentLearningOpportunityRequest | PlainMessage<CompleteAgentLearningOpportunityRequest> | undefined, b: CompleteAgentLearningOpportunityRequest | PlainMessage<CompleteAgentLearningOpportunityRequest> | undefined): boolean;
}

/**
 * CompleteAgentLearningOpportunityResponse represents the completed learning opportunity.
 *
 * @generated from message api.v1alpha1.agenttraining.CompleteAgentLearningOpportunityResponse
 */
export declare class CompleteAgentLearningOpportunityResponse extends Message<CompleteAgentLearningOpportunityResponse> {
  /**
   * @generated from field: api.commons.LearningOpportunity learning_opportunity = 1;
   */
  learningOpportunity?: LearningOpportunity;

  constructor(data?: PartialMessage<CompleteAgentLearningOpportunityResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.agenttraining.CompleteAgentLearningOpportunityResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CompleteAgentLearningOpportunityResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CompleteAgentLearningOpportunityResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CompleteAgentLearningOpportunityResponse;

  static equals(a: CompleteAgentLearningOpportunityResponse | PlainMessage<CompleteAgentLearningOpportunityResponse> | undefined, b: CompleteAgentLearningOpportunityResponse | PlainMessage<CompleteAgentLearningOpportunityResponse> | undefined): boolean;
}

/**
 * DeleteLearningOpportunityRequest represents a request to delete a learning opportunity.
 *
 * @generated from message api.v1alpha1.agenttraining.DeleteLearningOpportunityRequest
 */
export declare class DeleteLearningOpportunityRequest extends Message<DeleteLearningOpportunityRequest> {
  /**
   * @generated from field: int64 learning_opportunity_id = 3;
   */
  learningOpportunityId: bigint;

  constructor(data?: PartialMessage<DeleteLearningOpportunityRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.agenttraining.DeleteLearningOpportunityRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteLearningOpportunityRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteLearningOpportunityRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteLearningOpportunityRequest;

  static equals(a: DeleteLearningOpportunityRequest | PlainMessage<DeleteLearningOpportunityRequest> | undefined, b: DeleteLearningOpportunityRequest | PlainMessage<DeleteLearningOpportunityRequest> | undefined): boolean;
}

/**
 * DeleteLearningOpportunityResponse represents the deleted learning opportunity.
 *
 * @generated from message api.v1alpha1.agenttraining.DeleteLearningOpportunityResponse
 */
export declare class DeleteLearningOpportunityResponse extends Message<DeleteLearningOpportunityResponse> {
  /**
   * @generated from field: api.commons.LearningOpportunity learning_opportunity = 1;
   */
  learningOpportunity?: LearningOpportunity;

  constructor(data?: PartialMessage<DeleteLearningOpportunityResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.agenttraining.DeleteLearningOpportunityResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteLearningOpportunityResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteLearningOpportunityResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteLearningOpportunityResponse;

  static equals(a: DeleteLearningOpportunityResponse | PlainMessage<DeleteLearningOpportunityResponse> | undefined, b: DeleteLearningOpportunityResponse | PlainMessage<DeleteLearningOpportunityResponse> | undefined): boolean;
}

/**
 * GetLearningOpportunityRequest represents a request to get a learning opportunity.
 *
 * @generated from message api.v1alpha1.agenttraining.GetLearningOpportunityRequest
 */
export declare class GetLearningOpportunityRequest extends Message<GetLearningOpportunityRequest> {
  /**
   * @generated from field: int64 learning_opportunity = 2;
   */
  learningOpportunity: bigint;

  constructor(data?: PartialMessage<GetLearningOpportunityRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.agenttraining.GetLearningOpportunityRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLearningOpportunityRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLearningOpportunityRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLearningOpportunityRequest;

  static equals(a: GetLearningOpportunityRequest | PlainMessage<GetLearningOpportunityRequest> | undefined, b: GetLearningOpportunityRequest | PlainMessage<GetLearningOpportunityRequest> | undefined): boolean;
}

/**
 * GetLearningOpportunityResponse represents the gotten learning opportunity.
 *
 * @generated from message api.v1alpha1.agenttraining.GetLearningOpportunityResponse
 */
export declare class GetLearningOpportunityResponse extends Message<GetLearningOpportunityResponse> {
  /**
   * @generated from field: api.commons.LearningOpportunity learning_opportunity = 1;
   */
  learningOpportunity?: LearningOpportunity;

  constructor(data?: PartialMessage<GetLearningOpportunityResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.agenttraining.GetLearningOpportunityResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLearningOpportunityResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLearningOpportunityResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLearningOpportunityResponse;

  static equals(a: GetLearningOpportunityResponse | PlainMessage<GetLearningOpportunityResponse> | undefined, b: GetLearningOpportunityResponse | PlainMessage<GetLearningOpportunityResponse> | undefined): boolean;
}

