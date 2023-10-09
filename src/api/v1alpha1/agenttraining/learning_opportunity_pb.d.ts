// @generated by protoc-gen-es v1.3.3 with parameter "target=js+dts"
// @generated from file api/v1alpha1/agenttraining/learning_opportunity.proto (package api.v1alpha1.agenttraining, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { LearningOpportunity } from "../../commons/agent_training_pb.js";

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

