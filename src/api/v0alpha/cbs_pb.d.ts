// @generated by protoc-gen-es v1.7.0 with parameter "target=js+dts"
// @generated from file api/v0alpha/cbs.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ScheduledCallbackStatus } from "../commons/cbs_pb.js";
import type { CallType_Enum } from "../commons/acd_pb.js";

/**
 * @generated from message api.v0alpha.CreateServiceIdReq
 */
export declare class CreateServiceIdReq extends Message<CreateServiceIdReq> {
  constructor(data?: PartialMessage<CreateServiceIdReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.CreateServiceIdReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateServiceIdReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateServiceIdReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateServiceIdReq;

  static equals(a: CreateServiceIdReq | PlainMessage<CreateServiceIdReq> | undefined, b: CreateServiceIdReq | PlainMessage<CreateServiceIdReq> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.CreateServiceIdRes
 */
export declare class CreateServiceIdRes extends Message<CreateServiceIdRes> {
  /**
   * @generated from field: string service_id = 1;
   */
  serviceId: string;

  constructor(data?: PartialMessage<CreateServiceIdRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.CreateServiceIdRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateServiceIdRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateServiceIdRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateServiceIdRes;

  static equals(a: CreateServiceIdRes | PlainMessage<CreateServiceIdRes> | undefined, b: CreateServiceIdRes | PlainMessage<CreateServiceIdRes> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.ScheduledCallback
 */
export declare class ScheduledCallback extends Message<ScheduledCallback> {
  /**
   * @generated from field: string scheduled_callback_id = 1;
   */
  scheduledCallbackId: string;

  /**
   * @generated from field: string service_id = 100;
   */
  serviceId: string;

  /**
   * @generated from field: api.commons.ScheduledCallbackStatus status = 101;
   */
  status: ScheduledCallbackStatus;

  /**
   * @generated from field: google.protobuf.Timestamp start_time = 102;
   */
  startTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp end_time = 103;
   */
  endTime?: Timestamp;

  /**
   * @generated from field: string phone_number = 104;
   */
  phoneNumber: string;

  /**
   * @generated from field: string caller_id = 105;
   */
  callerId: string;

  /**
   * @generated from field: string notes = 107;
   */
  notes: string;

  /**
   * @generated from field: google.protobuf.Timestamp create_date = 108;
   */
  createDate?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp last_update = 109;
   */
  lastUpdate?: Timestamp;

  /**
   * @generated from field: string last_updated_by = 111;
   */
  lastUpdatedBy: string;

  /**
   * @generated from field: repeated string callback_skills = 112;
   */
  callbackSkills: string[];

  constructor(data?: PartialMessage<ScheduledCallback>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.ScheduledCallback";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScheduledCallback;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScheduledCallback;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScheduledCallback;

  static equals(a: ScheduledCallback | PlainMessage<ScheduledCallback> | undefined, b: ScheduledCallback | PlainMessage<ScheduledCallback> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.ScheduledCallbackDetail
 */
export declare class ScheduledCallbackDetail extends Message<ScheduledCallbackDetail> {
  /**
   * @generated from field: string scheduled_callback_detail_id = 1;
   */
  scheduledCallbackDetailId: string;

  /**
   * @generated from field: string scheduled_callback_id = 2;
   */
  scheduledCallbackId: string;

  /**
   * @generated from field: string key = 100;
   */
  key: string;

  /**
   * @generated from field: string value = 101;
   */
  value: string;

  constructor(data?: PartialMessage<ScheduledCallbackDetail>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.ScheduledCallbackDetail";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScheduledCallbackDetail;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScheduledCallbackDetail;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScheduledCallbackDetail;

  static equals(a: ScheduledCallbackDetail | PlainMessage<ScheduledCallbackDetail> | undefined, b: ScheduledCallbackDetail | PlainMessage<ScheduledCallbackDetail> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.UpdateScheduledCallbackToReadyReq
 */
export declare class UpdateScheduledCallbackToReadyReq extends Message<UpdateScheduledCallbackToReadyReq> {
  /**
   * @generated from field: string scheduled_callback_id = 2;
   */
  scheduledCallbackId: string;

  /**
   * @generated from field: bool is_auto_return = 3;
   */
  isAutoReturn: boolean;

  /**
   * @generated from field: string service_id = 4;
   */
  serviceId: string;

  constructor(data?: PartialMessage<UpdateScheduledCallbackToReadyReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.UpdateScheduledCallbackToReadyReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateScheduledCallbackToReadyReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateScheduledCallbackToReadyReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateScheduledCallbackToReadyReq;

  static equals(a: UpdateScheduledCallbackToReadyReq | PlainMessage<UpdateScheduledCallbackToReadyReq> | undefined, b: UpdateScheduledCallbackToReadyReq | PlainMessage<UpdateScheduledCallbackToReadyReq> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.UpdateScheduledCallbackToReadyRes
 */
export declare class UpdateScheduledCallbackToReadyRes extends Message<UpdateScheduledCallbackToReadyRes> {
  constructor(data?: PartialMessage<UpdateScheduledCallbackToReadyRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.UpdateScheduledCallbackToReadyRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateScheduledCallbackToReadyRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateScheduledCallbackToReadyRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateScheduledCallbackToReadyRes;

  static equals(a: UpdateScheduledCallbackToReadyRes | PlainMessage<UpdateScheduledCallbackToReadyRes> | undefined, b: UpdateScheduledCallbackToReadyRes | PlainMessage<UpdateScheduledCallbackToReadyRes> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.UpdateScheduledCallbackToCanceledReq
 */
export declare class UpdateScheduledCallbackToCanceledReq extends Message<UpdateScheduledCallbackToCanceledReq> {
  /**
   * @generated from field: string scheduled_callback_id = 2;
   */
  scheduledCallbackId: string;

  /**
   * @generated from field: string service_id = 3;
   */
  serviceId: string;

  constructor(data?: PartialMessage<UpdateScheduledCallbackToCanceledReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.UpdateScheduledCallbackToCanceledReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateScheduledCallbackToCanceledReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateScheduledCallbackToCanceledReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateScheduledCallbackToCanceledReq;

  static equals(a: UpdateScheduledCallbackToCanceledReq | PlainMessage<UpdateScheduledCallbackToCanceledReq> | undefined, b: UpdateScheduledCallbackToCanceledReq | PlainMessage<UpdateScheduledCallbackToCanceledReq> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.UpdateScheduledCallbackToCanceledRes
 */
export declare class UpdateScheduledCallbackToCanceledRes extends Message<UpdateScheduledCallbackToCanceledRes> {
  constructor(data?: PartialMessage<UpdateScheduledCallbackToCanceledRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.UpdateScheduledCallbackToCanceledRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateScheduledCallbackToCanceledRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateScheduledCallbackToCanceledRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateScheduledCallbackToCanceledRes;

  static equals(a: UpdateScheduledCallbackToCanceledRes | PlainMessage<UpdateScheduledCallbackToCanceledRes> | undefined, b: UpdateScheduledCallbackToCanceledRes | PlainMessage<UpdateScheduledCallbackToCanceledRes> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.UpdateScheduledCallbackToClosedReq
 */
export declare class UpdateScheduledCallbackToClosedReq extends Message<UpdateScheduledCallbackToClosedReq> {
  /**
   * @generated from field: string scheduled_callback_id = 2;
   */
  scheduledCallbackId: string;

  /**
   * @generated from field: int64 manual_dial_call_sid = 3;
   */
  manualDialCallSid: bigint;

  /**
   * @generated from field: string service_id = 4;
   */
  serviceId: string;

  constructor(data?: PartialMessage<UpdateScheduledCallbackToClosedReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.UpdateScheduledCallbackToClosedReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateScheduledCallbackToClosedReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateScheduledCallbackToClosedReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateScheduledCallbackToClosedReq;

  static equals(a: UpdateScheduledCallbackToClosedReq | PlainMessage<UpdateScheduledCallbackToClosedReq> | undefined, b: UpdateScheduledCallbackToClosedReq | PlainMessage<UpdateScheduledCallbackToClosedReq> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.UpdateScheduledCallbackToClosedRes
 */
export declare class UpdateScheduledCallbackToClosedRes extends Message<UpdateScheduledCallbackToClosedRes> {
  constructor(data?: PartialMessage<UpdateScheduledCallbackToClosedRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.UpdateScheduledCallbackToClosedRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateScheduledCallbackToClosedRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateScheduledCallbackToClosedRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateScheduledCallbackToClosedRes;

  static equals(a: UpdateScheduledCallbackToClosedRes | PlainMessage<UpdateScheduledCallbackToClosedRes> | undefined, b: UpdateScheduledCallbackToClosedRes | PlainMessage<UpdateScheduledCallbackToClosedRes> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.CreateCallbackWithDetailsReq
 */
export declare class CreateCallbackWithDetailsReq extends Message<CreateCallbackWithDetailsReq> {
  /**
   * @generated from field: api.v0alpha.ScheduledCallback callback = 2;
   */
  callback?: ScheduledCallback;

  /**
   * @generated from field: repeated api.v0alpha.ScheduledCallbackDetail callback_details = 3;
   */
  callbackDetails: ScheduledCallbackDetail[];

  /**
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * @generated from field: api.commons.CallType.Enum former_call_type = 5;
   */
  formerCallType: CallType_Enum;

  /**
   * @generated from field: int64 former_call_sid = 6;
   */
  formerCallSid: bigint;

  /**
   * @generated from field: google.protobuf.Int64Value country_sid = 8;
   */
  countrySid?: bigint;

  /**
   * @generated from field: bool manager_login = 9;
   */
  managerLogin: boolean;

  constructor(data?: PartialMessage<CreateCallbackWithDetailsReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.CreateCallbackWithDetailsReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateCallbackWithDetailsReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateCallbackWithDetailsReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateCallbackWithDetailsReq;

  static equals(a: CreateCallbackWithDetailsReq | PlainMessage<CreateCallbackWithDetailsReq> | undefined, b: CreateCallbackWithDetailsReq | PlainMessage<CreateCallbackWithDetailsReq> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.CreateCallbackWithDetailsRes
 */
export declare class CreateCallbackWithDetailsRes extends Message<CreateCallbackWithDetailsRes> {
  /**
   * @generated from field: string scheduled_callback_id = 1;
   */
  scheduledCallbackId: string;

  constructor(data?: PartialMessage<CreateCallbackWithDetailsRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.CreateCallbackWithDetailsRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateCallbackWithDetailsRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateCallbackWithDetailsRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateCallbackWithDetailsRes;

  static equals(a: CreateCallbackWithDetailsRes | PlainMessage<CreateCallbackWithDetailsRes> | undefined, b: CreateCallbackWithDetailsRes | PlainMessage<CreateCallbackWithDetailsRes> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.UpdateScheduledCallbackReq
 */
export declare class UpdateScheduledCallbackReq extends Message<UpdateScheduledCallbackReq> {
  /**
   * @generated from field: string scheduled_callback_id = 2;
   */
  scheduledCallbackId: string;

  /**
   * @generated from field: api.commons.ScheduledCallbackStatus new_status = 3;
   */
  newStatus: ScheduledCallbackStatus;

  /**
   * @generated from field: google.protobuf.Timestamp start_time = 4;
   */
  startTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp end_time = 5;
   */
  endTime?: Timestamp;

  /**
   * @generated from field: string phone_number = 6;
   */
  phoneNumber: string;

  /**
   * @generated from field: string caller_id = 7;
   */
  callerId: string;

  /**
   * @generated from field: repeated string skills = 8;
   */
  skills: string[];

  /**
   * @generated from field: string last_updated_by = 9;
   */
  lastUpdatedBy: string;

  /**
   * @generated from field: string notes = 10;
   */
  notes: string;

  /**
   * @generated from field: repeated api.v0alpha.ScheduledCallbackDetail callback_details = 11;
   */
  callbackDetails: ScheduledCallbackDetail[];

  /**
   * @generated from field: string name = 12;
   */
  name: string;

  constructor(data?: PartialMessage<UpdateScheduledCallbackReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.UpdateScheduledCallbackReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateScheduledCallbackReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateScheduledCallbackReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateScheduledCallbackReq;

  static equals(a: UpdateScheduledCallbackReq | PlainMessage<UpdateScheduledCallbackReq> | undefined, b: UpdateScheduledCallbackReq | PlainMessage<UpdateScheduledCallbackReq> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.UpdateScheduledCallbackRes
 */
export declare class UpdateScheduledCallbackRes extends Message<UpdateScheduledCallbackRes> {
  constructor(data?: PartialMessage<UpdateScheduledCallbackRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.UpdateScheduledCallbackRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateScheduledCallbackRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateScheduledCallbackRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateScheduledCallbackRes;

  static equals(a: UpdateScheduledCallbackRes | PlainMessage<UpdateScheduledCallbackRes> | undefined, b: UpdateScheduledCallbackRes | PlainMessage<UpdateScheduledCallbackRes> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.ScheduledCallbackWithDetails
 */
export declare class ScheduledCallbackWithDetails extends Message<ScheduledCallbackWithDetails> {
  /**
   * @generated from field: string scheduled_callback_id = 1;
   */
  scheduledCallbackId: string;

  /**
   * @generated from field: string service_id = 2;
   */
  serviceId: string;

  /**
   * @generated from field: api.commons.ScheduledCallbackStatus status = 3;
   */
  status: ScheduledCallbackStatus;

  /**
   * @generated from field: google.protobuf.Timestamp start_time = 4;
   */
  startTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp end_time = 5;
   */
  endTime?: Timestamp;

  /**
   * @generated from field: string phone_number = 6;
   */
  phoneNumber: string;

  /**
   * @generated from field: string caller_id = 7;
   */
  callerId: string;

  /**
   * @generated from field: repeated string skills = 8;
   */
  skills: string[];

  /**
   * @generated from field: string notes = 9;
   */
  notes: string;

  /**
   * @generated from field: google.protobuf.Timestamp create_date = 10;
   */
  createDate?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp last_update = 11;
   */
  lastUpdate?: Timestamp;

  /**
   * @generated from field: string created_by = 12;
   */
  createdBy: string;

  /**
   * @generated from field: string last_updated_by = 13;
   */
  lastUpdatedBy: string;

  /**
   * @generated from field: string name = 14;
   */
  name: string;

  /**
   * @generated from field: int64 former_call_sid = 15;
   */
  formerCallSid: bigint;

  /**
   * @generated from field: api.commons.CallType.Enum former_call_type = 16;
   */
  formerCallType: CallType_Enum;

  /**
   * @generated from field: repeated api.v0alpha.ScheduledCallbackDetail callback_details = 17;
   */
  callbackDetails: ScheduledCallbackDetail[];

  /**
   * @generated from field: google.protobuf.Int64Value country_sid = 18;
   */
  countrySid?: bigint;

  constructor(data?: PartialMessage<ScheduledCallbackWithDetails>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.ScheduledCallbackWithDetails";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScheduledCallbackWithDetails;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScheduledCallbackWithDetails;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScheduledCallbackWithDetails;

  static equals(a: ScheduledCallbackWithDetails | PlainMessage<ScheduledCallbackWithDetails> | undefined, b: ScheduledCallbackWithDetails | PlainMessage<ScheduledCallbackWithDetails> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.GetScheduledCallbackWithDetailsReq
 */
export declare class GetScheduledCallbackWithDetailsReq extends Message<GetScheduledCallbackWithDetailsReq> {
  /**
   * @generated from field: string service_id = 1;
   */
  serviceId: string;

  /**
   * @generated from field: string scheduled_callback_id = 2;
   */
  scheduledCallbackId: string;

  constructor(data?: PartialMessage<GetScheduledCallbackWithDetailsReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.GetScheduledCallbackWithDetailsReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetScheduledCallbackWithDetailsReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetScheduledCallbackWithDetailsReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetScheduledCallbackWithDetailsReq;

  static equals(a: GetScheduledCallbackWithDetailsReq | PlainMessage<GetScheduledCallbackWithDetailsReq> | undefined, b: GetScheduledCallbackWithDetailsReq | PlainMessage<GetScheduledCallbackWithDetailsReq> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.GetScheduledCallbackWithDetailsRes
 */
export declare class GetScheduledCallbackWithDetailsRes extends Message<GetScheduledCallbackWithDetailsRes> {
  /**
   * @generated from field: api.v0alpha.ScheduledCallbackWithDetails callback = 1;
   */
  callback?: ScheduledCallbackWithDetails;

  constructor(data?: PartialMessage<GetScheduledCallbackWithDetailsRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.GetScheduledCallbackWithDetailsRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetScheduledCallbackWithDetailsRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetScheduledCallbackWithDetailsRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetScheduledCallbackWithDetailsRes;

  static equals(a: GetScheduledCallbackWithDetailsRes | PlainMessage<GetScheduledCallbackWithDetailsRes> | undefined, b: GetScheduledCallbackWithDetailsRes | PlainMessage<GetScheduledCallbackWithDetailsRes> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.ListScheduledCallbacksWithDetailsRes
 */
export declare class ListScheduledCallbacksWithDetailsRes extends Message<ListScheduledCallbacksWithDetailsRes> {
  /**
   * @generated from field: repeated api.v0alpha.ScheduledCallbackWithDetails callbacks = 1;
   */
  callbacks: ScheduledCallbackWithDetails[];

  constructor(data?: PartialMessage<ListScheduledCallbacksWithDetailsRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.ListScheduledCallbacksWithDetailsRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListScheduledCallbacksWithDetailsRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListScheduledCallbacksWithDetailsRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListScheduledCallbacksWithDetailsRes;

  static equals(a: ListScheduledCallbacksWithDetailsRes | PlainMessage<ListScheduledCallbacksWithDetailsRes> | undefined, b: ListScheduledCallbacksWithDetailsRes | PlainMessage<ListScheduledCallbacksWithDetailsRes> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.GetNextScheduledCallbackWithDetailsReq
 */
export declare class GetNextScheduledCallbackWithDetailsReq extends Message<GetNextScheduledCallbackWithDetailsReq> {
  /**
   * service id that the callback will belong to.
   *
   * @generated from field: string service_id = 1;
   */
  serviceId: string;

  /**
   * list of agent_skills (skill names) that will be used to find a matching callback.
   *
   * @generated from field: repeated string agent_skills = 3;
   */
  agentSkills: string[];

  constructor(data?: PartialMessage<GetNextScheduledCallbackWithDetailsReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.GetNextScheduledCallbackWithDetailsReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetNextScheduledCallbackWithDetailsReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetNextScheduledCallbackWithDetailsReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetNextScheduledCallbackWithDetailsReq;

  static equals(a: GetNextScheduledCallbackWithDetailsReq | PlainMessage<GetNextScheduledCallbackWithDetailsReq> | undefined, b: GetNextScheduledCallbackWithDetailsReq | PlainMessage<GetNextScheduledCallbackWithDetailsReq> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.GetNextScheduledCallbackWithDetailsRes
 */
export declare class GetNextScheduledCallbackWithDetailsRes extends Message<GetNextScheduledCallbackWithDetailsRes> {
  /**
   * @generated from field: api.v0alpha.ScheduledCallbackWithDetails scheduled_callback = 1;
   */
  scheduledCallback?: ScheduledCallbackWithDetails;

  constructor(data?: PartialMessage<GetNextScheduledCallbackWithDetailsRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.GetNextScheduledCallbackWithDetailsRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetNextScheduledCallbackWithDetailsRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetNextScheduledCallbackWithDetailsRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetNextScheduledCallbackWithDetailsRes;

  static equals(a: GetNextScheduledCallbackWithDetailsRes | PlainMessage<GetNextScheduledCallbackWithDetailsRes> | undefined, b: GetNextScheduledCallbackWithDetailsRes | PlainMessage<GetNextScheduledCallbackWithDetailsRes> | undefined): boolean;
}

/**
 * ListScheduledCallbacksWithDetailsReq each of the following fields is applied as a filter phone_number, caller_id, or skills. The fields from_start_time and to_start_time need to be provided together.
 *
 * @generated from message api.v0alpha.ListScheduledCallbacksWithDetailsReq
 */
export declare class ListScheduledCallbacksWithDetailsReq extends Message<ListScheduledCallbacksWithDetailsReq> {
  /**
   * @generated from field: string phone_number = 2;
   */
  phoneNumber: string;

  /**
   * @generated from field: string caller_id = 3;
   */
  callerId: string;

  /**
   * @generated from field: google.protobuf.Timestamp from_start_time = 4;
   */
  fromStartTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp to_start_time = 5;
   */
  toStartTime?: Timestamp;

  /**
   * @generated from field: repeated string skills = 6;
   */
  skills: string[];

  constructor(data?: PartialMessage<ListScheduledCallbacksWithDetailsReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.ListScheduledCallbacksWithDetailsReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListScheduledCallbacksWithDetailsReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListScheduledCallbacksWithDetailsReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListScheduledCallbacksWithDetailsReq;

  static equals(a: ListScheduledCallbacksWithDetailsReq | PlainMessage<ListScheduledCallbacksWithDetailsReq> | undefined, b: ListScheduledCallbacksWithDetailsReq | PlainMessage<ListScheduledCallbacksWithDetailsReq> | undefined): boolean;
}

/**
 * ListScheduledCallbacksWithDetailsBySkillsReq requests all the scheduled callbacks by a filter of skills.
 *
 * @generated from message api.v0alpha.ListScheduledCallbacksWithDetailsBySkillsReq
 */
export declare class ListScheduledCallbacksWithDetailsBySkillsReq extends Message<ListScheduledCallbacksWithDetailsBySkillsReq> {
  /**
   * the service id that the callback will belong to.
   *
   * @generated from field: string service_id = 1;
   */
  serviceId: string;

  /**
   * list of agent_skills (skill names) that will be used to find a matching callback.
   *
   * @generated from field: repeated string skills = 3;
   */
  skills: string[];

  constructor(data?: PartialMessage<ListScheduledCallbacksWithDetailsBySkillsReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.ListScheduledCallbacksWithDetailsBySkillsReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListScheduledCallbacksWithDetailsBySkillsReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListScheduledCallbacksWithDetailsBySkillsReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListScheduledCallbacksWithDetailsBySkillsReq;

  static equals(a: ListScheduledCallbacksWithDetailsBySkillsReq | PlainMessage<ListScheduledCallbacksWithDetailsBySkillsReq> | undefined, b: ListScheduledCallbacksWithDetailsBySkillsReq | PlainMessage<ListScheduledCallbacksWithDetailsBySkillsReq> | undefined): boolean;
}

