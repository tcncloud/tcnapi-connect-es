// @generated by protoc-gen-es v1.2.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/callqueue/service.proto (package api.v1alpha1.callqueue, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { SimpleCallData, SimpleRecordData } from "../../commons/call_pb.js";
import type { GetClientInfoDataRes, GetClientInfoDisplayTemplateRes } from "../../v0alpha/p3api_pb.js";
import type { SimpleSmsMamData } from "../../commons/sms_pb.js";

/**
 * @generated from message api.v1alpha1.callqueue.DequeuePreviewRecordOrCallReq
 */
export declare class DequeuePreviewRecordOrCallReq extends Message<DequeuePreviewRecordOrCallReq> {
  /**
   * @generated from field: int32 timeout_minutes = 1;
   */
  timeoutMinutes: number;

  /**
   * @generated from field: int64 agent_session_sid = 2;
   */
  agentSessionSid: bigint;

  constructor(data?: PartialMessage<DequeuePreviewRecordOrCallReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.DequeuePreviewRecordOrCallReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DequeuePreviewRecordOrCallReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DequeuePreviewRecordOrCallReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DequeuePreviewRecordOrCallReq;

  static equals(a: DequeuePreviewRecordOrCallReq | PlainMessage<DequeuePreviewRecordOrCallReq> | undefined, b: DequeuePreviewRecordOrCallReq | PlainMessage<DequeuePreviewRecordOrCallReq> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.DequeuePreviewRecordOrCallRes
 */
export declare class DequeuePreviewRecordOrCallRes extends Message<DequeuePreviewRecordOrCallRes> {
  /**
   * @generated from field: string queue_name = 1;
   */
  queueName: string;

  /**
   * @generated from field: api.commons.SimpleCallData call = 2;
   */
  call?: SimpleCallData;

  /**
   * @generated from field: api.commons.SimpleRecordData record = 3;
   */
  record?: SimpleRecordData;

  constructor(data?: PartialMessage<DequeuePreviewRecordOrCallRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.DequeuePreviewRecordOrCallRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DequeuePreviewRecordOrCallRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DequeuePreviewRecordOrCallRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DequeuePreviewRecordOrCallRes;

  static equals(a: DequeuePreviewRecordOrCallRes | PlainMessage<DequeuePreviewRecordOrCallRes> | undefined, b: DequeuePreviewRecordOrCallRes | PlainMessage<DequeuePreviewRecordOrCallRes> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.EnqueuePreviewRecordReq
 */
export declare class EnqueuePreviewRecordReq extends Message<EnqueuePreviewRecordReq> {
  /**
   * @generated from field: api.commons.SimpleRecordData record = 1;
   */
  record?: SimpleRecordData;

  /**
   * @generated from field: string queue_name = 2;
   */
  queueName: string;

  constructor(data?: PartialMessage<EnqueuePreviewRecordReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.EnqueuePreviewRecordReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnqueuePreviewRecordReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnqueuePreviewRecordReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnqueuePreviewRecordReq;

  static equals(a: EnqueuePreviewRecordReq | PlainMessage<EnqueuePreviewRecordReq> | undefined, b: EnqueuePreviewRecordReq | PlainMessage<EnqueuePreviewRecordReq> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.EnqueuePreviewRecordRes
 */
export declare class EnqueuePreviewRecordRes extends Message<EnqueuePreviewRecordRes> {
  constructor(data?: PartialMessage<EnqueuePreviewRecordRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.EnqueuePreviewRecordRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnqueuePreviewRecordRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnqueuePreviewRecordRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnqueuePreviewRecordRes;

  static equals(a: EnqueuePreviewRecordRes | PlainMessage<EnqueuePreviewRecordRes> | undefined, b: EnqueuePreviewRecordRes | PlainMessage<EnqueuePreviewRecordRes> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.DequeueScrubbedCallForPreviewRecordReq
 */
export declare class DequeueScrubbedCallForPreviewRecordReq extends Message<DequeueScrubbedCallForPreviewRecordReq> {
  /**
   * @generated from field: int64 hunt_group_sid = 1;
   */
  huntGroupSid: bigint;

  /**
   * @generated from field: string phone_number = 2;
   */
  phoneNumber: string;

  /**
   * @generated from field: int32 phone_num_index = 3;
   */
  phoneNumIndex: number;

  /**
   * @generated from field: int64 task_group_sid = 4;
   */
  taskGroupSid: bigint;

  /**
   * @generated from field: int64 task_sid = 5;
   */
  taskSid: bigint;

  constructor(data?: PartialMessage<DequeueScrubbedCallForPreviewRecordReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.DequeueScrubbedCallForPreviewRecordReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DequeueScrubbedCallForPreviewRecordReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DequeueScrubbedCallForPreviewRecordReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DequeueScrubbedCallForPreviewRecordReq;

  static equals(a: DequeueScrubbedCallForPreviewRecordReq | PlainMessage<DequeueScrubbedCallForPreviewRecordReq> | undefined, b: DequeueScrubbedCallForPreviewRecordReq | PlainMessage<DequeueScrubbedCallForPreviewRecordReq> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.DequeueScrubbedCallForPreviewRecordRes
 */
export declare class DequeueScrubbedCallForPreviewRecordRes extends Message<DequeueScrubbedCallForPreviewRecordRes> {
  /**
   * @generated from field: api.commons.SimpleCallData call = 1;
   */
  call?: SimpleCallData;

  constructor(data?: PartialMessage<DequeueScrubbedCallForPreviewRecordRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.DequeueScrubbedCallForPreviewRecordRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DequeueScrubbedCallForPreviewRecordRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DequeueScrubbedCallForPreviewRecordRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DequeueScrubbedCallForPreviewRecordRes;

  static equals(a: DequeueScrubbedCallForPreviewRecordRes | PlainMessage<DequeueScrubbedCallForPreviewRecordRes> | undefined, b: DequeueScrubbedCallForPreviewRecordRes | PlainMessage<DequeueScrubbedCallForPreviewRecordRes> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.ClearPreviewRecordReturnQueueReq
 */
export declare class ClearPreviewRecordReturnQueueReq extends Message<ClearPreviewRecordReturnQueueReq> {
  constructor(data?: PartialMessage<ClearPreviewRecordReturnQueueReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.ClearPreviewRecordReturnQueueReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClearPreviewRecordReturnQueueReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClearPreviewRecordReturnQueueReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClearPreviewRecordReturnQueueReq;

  static equals(a: ClearPreviewRecordReturnQueueReq | PlainMessage<ClearPreviewRecordReturnQueueReq> | undefined, b: ClearPreviewRecordReturnQueueReq | PlainMessage<ClearPreviewRecordReturnQueueReq> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.ClearPreviewRecordReturnQueueRes
 */
export declare class ClearPreviewRecordReturnQueueRes extends Message<ClearPreviewRecordReturnQueueRes> {
  constructor(data?: PartialMessage<ClearPreviewRecordReturnQueueRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.ClearPreviewRecordReturnQueueRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClearPreviewRecordReturnQueueRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClearPreviewRecordReturnQueueRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClearPreviewRecordReturnQueueRes;

  static equals(a: ClearPreviewRecordReturnQueueRes | PlainMessage<ClearPreviewRecordReturnQueueRes> | undefined, b: ClearPreviewRecordReturnQueueRes | PlainMessage<ClearPreviewRecordReturnQueueRes> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.EnqueuePreviewDialCallReq
 */
export declare class EnqueuePreviewDialCallReq extends Message<EnqueuePreviewDialCallReq> {
  /**
   * @generated from field: api.commons.SimpleCallData call = 1;
   */
  call?: SimpleCallData;

  /**
   * @generated from field: string queue_name = 2;
   */
  queueName: string;

  constructor(data?: PartialMessage<EnqueuePreviewDialCallReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.EnqueuePreviewDialCallReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnqueuePreviewDialCallReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnqueuePreviewDialCallReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnqueuePreviewDialCallReq;

  static equals(a: EnqueuePreviewDialCallReq | PlainMessage<EnqueuePreviewDialCallReq> | undefined, b: EnqueuePreviewDialCallReq | PlainMessage<EnqueuePreviewDialCallReq> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.EnqueuePreviewDialCallRes
 */
export declare class EnqueuePreviewDialCallRes extends Message<EnqueuePreviewDialCallRes> {
  constructor(data?: PartialMessage<EnqueuePreviewDialCallRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.EnqueuePreviewDialCallRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnqueuePreviewDialCallRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnqueuePreviewDialCallRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnqueuePreviewDialCallRes;

  static equals(a: EnqueuePreviewDialCallRes | PlainMessage<EnqueuePreviewDialCallRes> | undefined, b: EnqueuePreviewDialCallRes | PlainMessage<EnqueuePreviewDialCallRes> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.ClearManualDialQueueReq
 */
export declare class ClearManualDialQueueReq extends Message<ClearManualDialQueueReq> {
  constructor(data?: PartialMessage<ClearManualDialQueueReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.ClearManualDialQueueReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClearManualDialQueueReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClearManualDialQueueReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClearManualDialQueueReq;

  static equals(a: ClearManualDialQueueReq | PlainMessage<ClearManualDialQueueReq> | undefined, b: ClearManualDialQueueReq | PlainMessage<ClearManualDialQueueReq> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.ClearManualDialQueueRes
 */
export declare class ClearManualDialQueueRes extends Message<ClearManualDialQueueRes> {
  constructor(data?: PartialMessage<ClearManualDialQueueRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.ClearManualDialQueueRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClearManualDialQueueRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClearManualDialQueueRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClearManualDialQueueRes;

  static equals(a: ClearManualDialQueueRes | PlainMessage<ClearManualDialQueueRes> | undefined, b: ClearManualDialQueueRes | PlainMessage<ClearManualDialQueueRes> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.ProcessManualDialCallReq
 */
export declare class ProcessManualDialCallReq extends Message<ProcessManualDialCallReq> {
  /**
   * @generated from field: api.commons.SimpleCallData call = 1;
   */
  call?: SimpleCallData;

  constructor(data?: PartialMessage<ProcessManualDialCallReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.ProcessManualDialCallReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProcessManualDialCallReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProcessManualDialCallReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProcessManualDialCallReq;

  static equals(a: ProcessManualDialCallReq | PlainMessage<ProcessManualDialCallReq> | undefined, b: ProcessManualDialCallReq | PlainMessage<ProcessManualDialCallReq> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.ProcessManualDialCallRes
 */
export declare class ProcessManualDialCallRes extends Message<ProcessManualDialCallRes> {
  /**
   * @generated from field: api.commons.SimpleCallData scrubbed_call = 1;
   */
  scrubbedCall?: SimpleCallData;

  constructor(data?: PartialMessage<ProcessManualDialCallRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.ProcessManualDialCallRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProcessManualDialCallRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProcessManualDialCallRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProcessManualDialCallRes;

  static equals(a: ProcessManualDialCallRes | PlainMessage<ProcessManualDialCallRes> | undefined, b: ProcessManualDialCallRes | PlainMessage<ProcessManualDialCallRes> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.DequeueCallForManualApprovalReq
 */
export declare class DequeueCallForManualApprovalReq extends Message<DequeueCallForManualApprovalReq> {
  /**
   * @generated from field: int64 hunt_group_sid = 1;
   */
  huntGroupSid: bigint;

  /**
   * @generated from field: int64 agent_session_sid = 2;
   */
  agentSessionSid: bigint;

  /**
   * @generated from field: int32 timeout_minutes = 3;
   */
  timeoutMinutes: number;

  constructor(data?: PartialMessage<DequeueCallForManualApprovalReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.DequeueCallForManualApprovalReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DequeueCallForManualApprovalReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DequeueCallForManualApprovalReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DequeueCallForManualApprovalReq;

  static equals(a: DequeueCallForManualApprovalReq | PlainMessage<DequeueCallForManualApprovalReq> | undefined, b: DequeueCallForManualApprovalReq | PlainMessage<DequeueCallForManualApprovalReq> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.DequeueCallForManualApprovalRes
 */
export declare class DequeueCallForManualApprovalRes extends Message<DequeueCallForManualApprovalRes> {
  /**
   * @generated from field: api.commons.SimpleCallData call = 1;
   */
  call?: SimpleCallData;

  /**
   * @generated from field: string queue = 2;
   */
  queue: string;

  /**
   * @generated from field: api.v0alpha.GetClientInfoDataRes client_info = 3;
   */
  clientInfo?: GetClientInfoDataRes;

  /**
   * @generated from field: api.v0alpha.GetClientInfoDisplayTemplateRes client_info_template = 4;
   */
  clientInfoTemplate?: GetClientInfoDisplayTemplateRes;

  constructor(data?: PartialMessage<DequeueCallForManualApprovalRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.DequeueCallForManualApprovalRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DequeueCallForManualApprovalRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DequeueCallForManualApprovalRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DequeueCallForManualApprovalRes;

  static equals(a: DequeueCallForManualApprovalRes | PlainMessage<DequeueCallForManualApprovalRes> | undefined, b: DequeueCallForManualApprovalRes | PlainMessage<DequeueCallForManualApprovalRes> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.EnqueueManuallyApprovedCallReq
 */
export declare class EnqueueManuallyApprovedCallReq extends Message<EnqueueManuallyApprovedCallReq> {
  /**
   * @generated from field: api.commons.SimpleCallData call = 1;
   */
  call?: SimpleCallData;

  constructor(data?: PartialMessage<EnqueueManuallyApprovedCallReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.EnqueueManuallyApprovedCallReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnqueueManuallyApprovedCallReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnqueueManuallyApprovedCallReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnqueueManuallyApprovedCallReq;

  static equals(a: EnqueueManuallyApprovedCallReq | PlainMessage<EnqueueManuallyApprovedCallReq> | undefined, b: EnqueueManuallyApprovedCallReq | PlainMessage<EnqueueManuallyApprovedCallReq> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.EnqueueManuallyApprovedCallRes
 */
export declare class EnqueueManuallyApprovedCallRes extends Message<EnqueueManuallyApprovedCallRes> {
  constructor(data?: PartialMessage<EnqueueManuallyApprovedCallRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.EnqueueManuallyApprovedCallRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnqueueManuallyApprovedCallRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnqueueManuallyApprovedCallRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnqueueManuallyApprovedCallRes;

  static equals(a: EnqueueManuallyApprovedCallRes | PlainMessage<EnqueueManuallyApprovedCallRes> | undefined, b: EnqueueManuallyApprovedCallRes | PlainMessage<EnqueueManuallyApprovedCallRes> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.EnqueueManuallyRejectedCallReq
 */
export declare class EnqueueManuallyRejectedCallReq extends Message<EnqueueManuallyRejectedCallReq> {
  /**
   * @generated from field: api.commons.SimpleCallData call = 1;
   */
  call?: SimpleCallData;

  constructor(data?: PartialMessage<EnqueueManuallyRejectedCallReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.EnqueueManuallyRejectedCallReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnqueueManuallyRejectedCallReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnqueueManuallyRejectedCallReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnqueueManuallyRejectedCallReq;

  static equals(a: EnqueueManuallyRejectedCallReq | PlainMessage<EnqueueManuallyRejectedCallReq> | undefined, b: EnqueueManuallyRejectedCallReq | PlainMessage<EnqueueManuallyRejectedCallReq> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.EnqueueManuallyRejectedCallRes
 */
export declare class EnqueueManuallyRejectedCallRes extends Message<EnqueueManuallyRejectedCallRes> {
  constructor(data?: PartialMessage<EnqueueManuallyRejectedCallRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.EnqueueManuallyRejectedCallRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnqueueManuallyRejectedCallRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnqueueManuallyRejectedCallRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnqueueManuallyRejectedCallRes;

  static equals(a: EnqueueManuallyRejectedCallRes | PlainMessage<EnqueueManuallyRejectedCallRes> | undefined, b: EnqueueManuallyRejectedCallRes | PlainMessage<EnqueueManuallyRejectedCallRes> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.RequeueManuallyApprovedCallReq
 */
export declare class RequeueManuallyApprovedCallReq extends Message<RequeueManuallyApprovedCallReq> {
  /**
   * @generated from field: api.commons.SimpleCallData call = 1;
   */
  call?: SimpleCallData;

  /**
   * @generated from field: string queue_name = 2;
   */
  queueName: string;

  constructor(data?: PartialMessage<RequeueManuallyApprovedCallReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.RequeueManuallyApprovedCallReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequeueManuallyApprovedCallReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequeueManuallyApprovedCallReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequeueManuallyApprovedCallReq;

  static equals(a: RequeueManuallyApprovedCallReq | PlainMessage<RequeueManuallyApprovedCallReq> | undefined, b: RequeueManuallyApprovedCallReq | PlainMessage<RequeueManuallyApprovedCallReq> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.RequeueManuallyApprovedCallRes
 */
export declare class RequeueManuallyApprovedCallRes extends Message<RequeueManuallyApprovedCallRes> {
  constructor(data?: PartialMessage<RequeueManuallyApprovedCallRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.RequeueManuallyApprovedCallRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequeueManuallyApprovedCallRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequeueManuallyApprovedCallRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequeueManuallyApprovedCallRes;

  static equals(a: RequeueManuallyApprovedCallRes | PlainMessage<RequeueManuallyApprovedCallRes> | undefined, b: RequeueManuallyApprovedCallRes | PlainMessage<RequeueManuallyApprovedCallRes> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.EnqueueManuallyApprovedSmsReq
 */
export declare class EnqueueManuallyApprovedSmsReq extends Message<EnqueueManuallyApprovedSmsReq> {
  /**
   * @generated from field: api.commons.SimpleSmsMamData sms = 1;
   */
  sms?: SimpleSmsMamData;

  constructor(data?: PartialMessage<EnqueueManuallyApprovedSmsReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.EnqueueManuallyApprovedSmsReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnqueueManuallyApprovedSmsReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnqueueManuallyApprovedSmsReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnqueueManuallyApprovedSmsReq;

  static equals(a: EnqueueManuallyApprovedSmsReq | PlainMessage<EnqueueManuallyApprovedSmsReq> | undefined, b: EnqueueManuallyApprovedSmsReq | PlainMessage<EnqueueManuallyApprovedSmsReq> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.EnqueueManuallyApprovedSmsRes
 */
export declare class EnqueueManuallyApprovedSmsRes extends Message<EnqueueManuallyApprovedSmsRes> {
  constructor(data?: PartialMessage<EnqueueManuallyApprovedSmsRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.EnqueueManuallyApprovedSmsRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnqueueManuallyApprovedSmsRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnqueueManuallyApprovedSmsRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnqueueManuallyApprovedSmsRes;

  static equals(a: EnqueueManuallyApprovedSmsRes | PlainMessage<EnqueueManuallyApprovedSmsRes> | undefined, b: EnqueueManuallyApprovedSmsRes | PlainMessage<EnqueueManuallyApprovedSmsRes> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.EnqueueManuallyRejectedSmsReq
 */
export declare class EnqueueManuallyRejectedSmsReq extends Message<EnqueueManuallyRejectedSmsReq> {
  /**
   * @generated from field: api.commons.SimpleSmsMamData sms = 1;
   */
  sms?: SimpleSmsMamData;

  constructor(data?: PartialMessage<EnqueueManuallyRejectedSmsReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.EnqueueManuallyRejectedSmsReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnqueueManuallyRejectedSmsReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnqueueManuallyRejectedSmsReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnqueueManuallyRejectedSmsReq;

  static equals(a: EnqueueManuallyRejectedSmsReq | PlainMessage<EnqueueManuallyRejectedSmsReq> | undefined, b: EnqueueManuallyRejectedSmsReq | PlainMessage<EnqueueManuallyRejectedSmsReq> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.EnqueueManuallyRejectedSmsRes
 */
export declare class EnqueueManuallyRejectedSmsRes extends Message<EnqueueManuallyRejectedSmsRes> {
  constructor(data?: PartialMessage<EnqueueManuallyRejectedSmsRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.EnqueueManuallyRejectedSmsRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnqueueManuallyRejectedSmsRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnqueueManuallyRejectedSmsRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnqueueManuallyRejectedSmsRes;

  static equals(a: EnqueueManuallyRejectedSmsRes | PlainMessage<EnqueueManuallyRejectedSmsRes> | undefined, b: EnqueueManuallyRejectedSmsRes | PlainMessage<EnqueueManuallyRejectedSmsRes> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.RequeueManuallyApprovedSmsReq
 */
export declare class RequeueManuallyApprovedSmsReq extends Message<RequeueManuallyApprovedSmsReq> {
  /**
   * @generated from field: api.commons.SimpleSmsMamData sms = 1;
   */
  sms?: SimpleSmsMamData;

  /**
   * @generated from field: string queue_name = 2;
   */
  queueName: string;

  constructor(data?: PartialMessage<RequeueManuallyApprovedSmsReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.RequeueManuallyApprovedSmsReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequeueManuallyApprovedSmsReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequeueManuallyApprovedSmsReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequeueManuallyApprovedSmsReq;

  static equals(a: RequeueManuallyApprovedSmsReq | PlainMessage<RequeueManuallyApprovedSmsReq> | undefined, b: RequeueManuallyApprovedSmsReq | PlainMessage<RequeueManuallyApprovedSmsReq> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.RequeueManuallyApprovedSmsRes
 */
export declare class RequeueManuallyApprovedSmsRes extends Message<RequeueManuallyApprovedSmsRes> {
  constructor(data?: PartialMessage<RequeueManuallyApprovedSmsRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.RequeueManuallyApprovedSmsRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequeueManuallyApprovedSmsRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequeueManuallyApprovedSmsRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequeueManuallyApprovedSmsRes;

  static equals(a: RequeueManuallyApprovedSmsRes | PlainMessage<RequeueManuallyApprovedSmsRes> | undefined, b: RequeueManuallyApprovedSmsRes | PlainMessage<RequeueManuallyApprovedSmsRes> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.DequeueSmsMamForManualApprovalReq
 */
export declare class DequeueSmsMamForManualApprovalReq extends Message<DequeueSmsMamForManualApprovalReq> {
  /**
   * @generated from field: int64 hunt_group_sid = 2;
   */
  huntGroupSid: bigint;

  constructor(data?: PartialMessage<DequeueSmsMamForManualApprovalReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.DequeueSmsMamForManualApprovalReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DequeueSmsMamForManualApprovalReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DequeueSmsMamForManualApprovalReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DequeueSmsMamForManualApprovalReq;

  static equals(a: DequeueSmsMamForManualApprovalReq | PlainMessage<DequeueSmsMamForManualApprovalReq> | undefined, b: DequeueSmsMamForManualApprovalReq | PlainMessage<DequeueSmsMamForManualApprovalReq> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.callqueue.DequeueSmsMamForManualApprovalRes
 */
export declare class DequeueSmsMamForManualApprovalRes extends Message<DequeueSmsMamForManualApprovalRes> {
  /**
   * @generated from field: api.commons.SimpleSmsMamData sms = 1;
   */
  sms?: SimpleSmsMamData;

  /**
   * @generated from field: string queue = 2;
   */
  queue: string;

  constructor(data?: PartialMessage<DequeueSmsMamForManualApprovalRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.callqueue.DequeueSmsMamForManualApprovalRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DequeueSmsMamForManualApprovalRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DequeueSmsMamForManualApprovalRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DequeueSmsMamForManualApprovalRes;

  static equals(a: DequeueSmsMamForManualApprovalRes | PlainMessage<DequeueSmsMamForManualApprovalRes> | undefined, b: DequeueSmsMamForManualApprovalRes | PlainMessage<DequeueSmsMamForManualApprovalRes> | undefined): boolean;
}

