// @generated by protoc-gen-es v1.4.2 with parameter "target=js+dts"
// @generated from file api/v1alpha1/vanalytics/aclpb/aclpb.proto (package api.v1alpha1.vanalytics.aclpb, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * AgentCallLog resource.
 *
 * @generated from message api.v1alpha1.vanalytics.aclpb.AgentCallLog
 */
export declare class AgentCallLog extends Message<AgentCallLog> {
  /**
   * actions are the agent call log actions.
   *
   * @generated from field: repeated api.v1alpha1.vanalytics.aclpb.Action actions = 1;
   */
  actions: Action[];

  constructor(data?: PartialMessage<AgentCallLog>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.aclpb.AgentCallLog";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AgentCallLog;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AgentCallLog;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AgentCallLog;

  static equals(a: AgentCallLog | PlainMessage<AgentCallLog> | undefined, b: AgentCallLog | PlainMessage<AgentCallLog> | undefined): boolean;
}

/**
 * Action is an agent call log action.
 *
 * @generated from message api.v1alpha1.vanalytics.aclpb.Action
 */
export declare class Action extends Message<Action> {
  /**
   * @generated from oneof api.v1alpha1.vanalytics.aclpb.Action.kind
   */
  kind: {
    /**
     * CallSkillsInitial are the initial call skills on a call.
     *
     * @generated from field: api.v1alpha1.vanalytics.aclpb.CallSkillsInitial call_skills_initial = 1;
     */
    value: CallSkillsInitial;
    case: "callSkillsInitial";
  } | {
    /**
     * CallEnded is the reason the call ended.
     *
     * @generated from field: string call_ended = 2;
     */
    value: string;
    case: "callEnded";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<Action>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.aclpb.Action";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Action;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Action;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Action;

  static equals(a: Action | PlainMessage<Action> | undefined, b: Action | PlainMessage<Action> | undefined): boolean;
}

/**
 * CallSkillsInitial are the initial call skills on a call.
 *
 * @generated from message api.v1alpha1.vanalytics.aclpb.CallSkillsInitial
 */
export declare class CallSkillsInitial extends Message<CallSkillsInitial> {
  /**
   * need is all the call skills that are needed.
   *
   * @generated from field: repeated string need = 1;
   */
  need: string[];

  /**
   * want is all the call skills that are wanted.
   *
   * @generated from field: repeated string want = 2;
   */
  want: string[];

  constructor(data?: PartialMessage<CallSkillsInitial>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.aclpb.CallSkillsInitial";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CallSkillsInitial;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CallSkillsInitial;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CallSkillsInitial;

  static equals(a: CallSkillsInitial | PlainMessage<CallSkillsInitial> | undefined, b: CallSkillsInitial | PlainMessage<CallSkillsInitial> | undefined): boolean;
}

