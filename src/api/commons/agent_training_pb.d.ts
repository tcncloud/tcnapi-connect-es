// @generated by protoc-gen-es v1.3.0 with parameter "target=js+dts"
// @generated from file api/commons/agent_training.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { CallType_Enum } from "./acd_pb.js";

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

  constructor(data?: PartialMessage<LearningOpportunity>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.LearningOpportunity";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LearningOpportunity;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LearningOpportunity;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LearningOpportunity;

  static equals(a: LearningOpportunity | PlainMessage<LearningOpportunity> | undefined, b: LearningOpportunity | PlainMessage<LearningOpportunity> | undefined): boolean;
}
