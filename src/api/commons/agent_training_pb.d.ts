// @generated by protoc-gen-es v1.7.0 with parameter "target=js+dts"
// @generated from file api/commons/agent_training.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { CallType_Enum } from "./acd_pb.js";

/**
 * LearningOpportunityStatus describes the status of the learning opportunity.
 *
 * @generated from enum api.commons.LearningOpportunityStatus
 */
export declare enum LearningOpportunityStatus {
  /**
   * Default status - Ready to be completed by the agent.
   *
   * @generated from enum value: STATUS_OPEN = 0;
   */
  STATUS_OPEN = 0,

  /**
   * Agent has completed the learning opportunity.
   *
   * @generated from enum value: STATUS_COMPLETED = 1;
   */
  STATUS_COMPLETED = 1,
}

/**
 * LearningOpportunityOrigin describes the possible origins
 * that a learning opportunity can be created from.
 *
 * @generated from enum api.commons.LearningOpportunityOrigin
 */
export declare enum LearningOpportunityOrigin {
  /**
   * Default value - Undefined origin.
   *
   * @generated from enum value: UNDEFINED = 0;
   */
  UNDEFINED = 0,

  /**
   * Created from Quality Evaluation.
   *
   * @generated from enum value: QUALITY_EVALUATION = 1;
   */
  QUALITY_EVALUATION = 1,

  /**
   * Created from Auto Evaluation.
   *
   * @generated from enum value: AUTO_EVALUATION = 2;
   */
  AUTO_EVALUATION = 2,

  /**
   * Created from Flag Evaluation.
   *
   * @generated from enum value: FLAG_EVALUATION = 3;
   */
  FLAG_EVALUATION = 3,

  /**
   * Created from Conversation (voice analytics recordings).
   *
   * @generated from enum value: CONVERSATION = 4;
   */
  CONVERSATION = 4,

  /**
   * Created from Flagged Conversation (voice analytics flagged recordings).
   *
   * @generated from enum value: FLAGGED_CONVERSATION = 5;
   */
  FLAGGED_CONVERSATION = 5,
}

/**
 * LearningOpportunity represents a single learning opportunity entity.
 *
 * @generated from message api.commons.LearningOpportunity
 */
export declare class LearningOpportunity extends Message<LearningOpportunity> {
  /**
   * Unique id of the learning opportunity.
   *
   * @generated from field: int64 learning_opportunity_id = 2;
   */
  learningOpportunityId: bigint;

  /**
   * Call sid of the learning opportunity's related call.
   *
   * @generated from field: int64 call_sid = 3;
   */
  callSid: bigint;

  /**
   * Call type of the learning opportunity's related call.
   *
   * @generated from field: api.commons.CallType.Enum call_type = 4;
   */
  callType: CallType_Enum;

  /**
   * (optional) Transcript sid of the learning opportunity's related transcript.
   *
   * @generated from field: int64 transcript_sid = 5;
   */
  transcriptSid: bigint;

  /**
   * Agent user id of the agent receiving the learning opportunity.
   *
   * @generated from field: string agent_user_id = 6;
   */
  agentUserId: string;

  /**
   * Start offset (in milliseconds) of the learning opportunity.
   *
   * @generated from field: int32 start_offset = 7;
   */
  startOffset: number;

  /**
   * End offset (in milliseconds) of the learning opportunity.
   *
   * @generated from field: int32 end_offset = 8;
   */
  endOffset: number;

  /**
   * (optional) Description text.
   *
   * @generated from field: string description = 9;
   */
  description: string;

  /**
   * Time the learning opportunity was created at.
   *
   * @generated from field: google.protobuf.Timestamp created_at = 10;
   */
  createdAt?: Timestamp;

  /**
   * Title of the learning opportunity.
   *
   * @generated from field: string title = 12;
   */
  title: string;

  /**
   * Current status (ex: OPEN, COMPLETED).
   *
   * @generated from field: api.commons.LearningOpportunityStatus status = 13;
   */
  status: LearningOpportunityStatus;

  /**
   * Origin (ie. opportunity created from).
   *
   * @generated from field: api.commons.LearningOpportunityOrigin origin = 14;
   */
  origin: LearningOpportunityOrigin;

  /**
   * User id for the creator of the learning opportunity.
   *
   * @generated from field: string creator_user_id = 15;
   */
  creatorUserId: string;

  constructor(data?: PartialMessage<LearningOpportunity>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.LearningOpportunity";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LearningOpportunity;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LearningOpportunity;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LearningOpportunity;

  static equals(a: LearningOpportunity | PlainMessage<LearningOpportunity> | undefined, b: LearningOpportunity | PlainMessage<LearningOpportunity> | undefined): boolean;
}

/**
 * CallIdentifier is used to completely identify calls.
 *
 * @generated from message api.commons.CallIdentifier
 */
export declare class CallIdentifier extends Message<CallIdentifier> {
  /**
   * call sid
   *
   * @generated from field: int64 sid = 1;
   */
  sid: bigint;

  /**
   * call type
   *
   * @generated from field: api.commons.CallType.Enum type = 2;
   */
  type: CallType_Enum;

  constructor(data?: PartialMessage<CallIdentifier>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.CallIdentifier";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CallIdentifier;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CallIdentifier;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CallIdentifier;

  static equals(a: CallIdentifier | PlainMessage<CallIdentifier> | undefined, b: CallIdentifier | PlainMessage<CallIdentifier> | undefined): boolean;
}

