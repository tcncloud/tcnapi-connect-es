// @generated by protoc-gen-es v1.3.1 with parameter "target=js+dts"
// @generated from file api/commons/sms.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.SMSStatus
 */
export declare enum SMSStatus {
  /**
   * @generated from enum value: SMS_UNKWNON = 0;
   */
  SMS_UNKWNON = 0,

  /**
   * "SMS_PREPARING", "Sms group is being prepared for scheduling"),
   *
   * @generated from enum value: SMS_PREPARING = 7000;
   */
  SMS_PREPARING = 7000,

  /**
   * "SMS_SCHEDULED", "Sms group is currently waiting for scheduler"),
   *
   * @generated from enum value: SMS_SCHEDULED = 7100;
   */
  SMS_SCHEDULED = 7100,

  /**
   * "SMS_RESUME", "Sms group is ready to restart after being paused"),
   *
   * @generated from enum value: SMS_RESUME = 7150;
   */
  SMS_RESUME = 7150,

  /**
   * "SMS_RUNNING", "Sms group is currently being executed"),
   *
   * @generated from enum value: SMS_RUNNING = 7200;
   */
  SMS_RUNNING = 7200,

  /**
   * "SMS_COMPLETED", "Sms group has been executed"),
   *
   * @generated from enum value: SMS_COMPLETED = 7300;
   */
  SMS_COMPLETED = 7300,

  /**
   * "SMS_CANCELLED", "Sms group has been cancelled"),
   *
   * @generated from enum value: SMS_CANCELLED = 7310;
   */
  SMS_CANCELLED = 7310,

  /**
   * "SMS_CANCELLED_ADMIN", "Sms group has been cancelled by admin"),
   *
   * @generated from enum value: SMS_CANCELLED_ADMIN = 7320;
   */
  SMS_CANCELLED_ADMIN = 7320,

  /**
   * "SMS_SUMMED_COMPLETED", "Sms group has been executed and is summed"),
   *
   * @generated from enum value: SMS_SUMMED_COMPLETED = 7400;
   */
  SMS_SUMMED_COMPLETED = 7400,

  /**
   * "SMS_SUMMED_CANCELLED", "Sms group has been cancelled and is summed"),
   *
   * @generated from enum value: SMS_SUMMED_CANCELLED = 7410;
   */
  SMS_SUMMED_CANCELLED = 7410,

  /**
   * "SMS_SUMMED_CANCELLED_ADMIN", "Sms group has been cancelled by the admin and is summed"),
   *
   * @generated from enum value: SMS_SUMMED_CANCELLED_ADMIN = 7420;
   */
  SMS_SUMMED_CANCELLED_ADMIN = 7420,

  /**
   * "SMS_PAUSED", "Sms group has been signaled to pause until further notice"),
   *
   * @generated from enum value: SMS_PAUSED = 7500;
   */
  SMS_PAUSED = 7500,

  /**
   * "SMS_TASK_WAITIN";//"SMS Task is ready to be sent"),
   *
   * @generated from enum value: SMS_TASK_WAITING = 7600;
   */
  SMS_TASK_WAITING = 7600,

  /**
   * "SMS_TASK_PROCESSING";//"SMS Task is sent to gateway "),
   *
   * @generated from enum value: SMS_TASK_PROCESSING = 7700;
   */
  SMS_TASK_PROCESSING = 7700,

  /**
   * "SMS_TASK_DNC";//"SMS Task is DNC "),
   *
   * @generated from enum value: SMS_TASK_DNC = 7710;
   */
  SMS_TASK_DNC = 7710,

  /**
   * "SMS_TASK_INVALID";//"SMS Task is invalid "),
   *
   * @generated from enum value: SMS_TASK_INVALID = 7720;
   */
  SMS_TASK_INVALID = 7720,

  /**
   * "SMS_TASK_QUEUED";//"SMS Task status received as Queued from provider "),
   *
   * @generated from enum value: SMS_TASK_QUEUED = 7800;
   */
  SMS_TASK_QUEUED = 7800,

  /**
   * "SMS_TASK_SENT";//"SMS Task status received as Sent from provider"),
   *
   * @generated from enum value: SMS_TASK_SENT = 7900;
   */
  SMS_TASK_SENT = 7900,

  /**
   * "SMS_TASK_DELIVERED", "SMS Task status received as delivered from provider"),
   *
   * @generated from enum value: SMS_TASK_DELIVERED = 7910;
   */
  SMS_TASK_DELIVERED = 7910,

  /**
   * "SMS_TASK_NOT_DELIVERED", "SMS Task is not delivered by provider"),
   *
   * @generated from enum value: SMS_TASK_NOT_DELIVERED = 7920;
   */
  SMS_TASK_NOT_DELIVERED = 7920,

  /**
   * "SMS_TASK_CANCELED", "SMS Task is canceled by user/admin");
   *
   * @generated from enum value: SMS_TASK_CANCELED = 7930;
   */
  SMS_TASK_CANCELED = 7930,
}

/**
 * @generated from enum api.commons.SMSIBGroupStatus
 */
export declare enum SMSIBGroupStatus {
  /**
   * @generated from enum value: IB_SMS_GROUP_UNKNOWN = 0;
   */
  IB_SMS_GROUP_UNKNOWN = 0,

  /**
   * Inbound Sms Group is being prepared for scheduler
   *
   * @generated from enum value: IB_SMS_GROUP_PREPARING = 11000;
   */
  IB_SMS_GROUP_PREPARING = 11000,

  /**
   * Inbound Sms Group is waiting for scheduler
   *
   * @generated from enum value: IB_SMS_GROUP_SCHEDULED = 11010;
   */
  IB_SMS_GROUP_SCHEDULED = 11010,

  /**
   * Inbound Sms group is currently being executed
   *
   * @generated from enum value: IB_SMS_GROUP_RUNNING = 11020;
   */
  IB_SMS_GROUP_RUNNING = 11020,

  /**
   * Inbound Sms group has been signaled to pause calls until further notice
   *
   * @generated from enum value: IB_SMS_GROUP_PAUSED = 11030;
   */
  IB_SMS_GROUP_PAUSED = 11030,

  /**
   * Inbound Sms group is ready to restart after being paused
   *
   * @generated from enum value: IB_SMS_GROUP_RESUME = 11040;
   */
  IB_SMS_GROUP_RESUME = 11040,

  /**
   * Inbound Sms group has been executed
   *
   * @generated from enum value: IB_SMS_GROUP_COMPLETED = 11050;
   */
  IB_SMS_GROUP_COMPLETED = 11050,

  /**
   * Inbound Sms group has been cancelled by user
   *
   * @generated from enum value: IB_SMS_GROUP_CANCELLED_USER = 11060;
   */
  IB_SMS_GROUP_CANCELLED_USER = 11060,

  /**
   * Inbound Sms group has been cancelled by admin
   *
   * @generated from enum value: IB_SMS_GROUP_CANCELLED_ADMIN = 11070;
   */
  IB_SMS_GROUP_CANCELLED_ADMIN = 11070,

  /**
   * Inbound Sms group has been executed and is summed
   *
   * @generated from enum value: IB_SMS_GROUP_SUMMED_COMPLETED = 11150;
   */
  IB_SMS_GROUP_SUMMED_COMPLETED = 11150,

  /**
   * Inbound Sms group has been cancelled by the user and is summed
   *
   * @generated from enum value: IB_SMS_GROUP_SUMMED_CANCELLED_USER = 11160;
   */
  IB_SMS_GROUP_SUMMED_CANCELLED_USER = 11160,

  /**
   * Inbound Sms group has been cancelled by the admin and is summed
   *
   * @generated from enum value: IB_SMS_GROUP_SUMMED_CANCELLED_ADMIN = 11170;
   */
  IB_SMS_GROUP_SUMMED_CANCELLED_ADMIN = 11170,
}

/**
 * @generated from enum api.commons.SMSIBTaskStatus
 */
export declare enum SMSIBTaskStatus {
  /**
   * @generated from enum value: IB_SMS_TASK_UNKNOWN = 0;
   */
  IB_SMS_TASK_UNKNOWN = 0,

  /**
   * Inbound Sms Task is being received successfully
   *
   * @generated from enum value: IB_SMS_TASK_COMPLETED = 13000;
   */
  IB_SMS_TASK_COMPLETED = 13000,
}

/**
 * @generated from enum api.commons.SMSConversationAuditAction
 */
export declare enum SMSConversationAuditAction {
  /**
   * @generated from enum value: SMS_AUDIT_ACTION_CONVERSATION_START = 0;
   */
  SMS_AUDIT_ACTION_CONVERSATION_START = 0,

  /**
   * @generated from enum value: SMS_AUDIT_ACTION_CONVERSATION_MSG_SENT = 1;
   */
  SMS_AUDIT_ACTION_CONVERSATION_MSG_SENT = 1,

  /**
   * @generated from enum value: SMS_AUDIT_ACTION_CONVERSATION_MSG_READ = 2;
   */
  SMS_AUDIT_ACTION_CONVERSATION_MSG_READ = 2,

  /**
   * @generated from enum value: SMS_AUDIT_ACTION_CONVERSATION_UNASSIGNED = 3;
   */
  SMS_AUDIT_ACTION_CONVERSATION_UNASSIGNED = 3,

  /**
   * @generated from enum value: SMS_AUDIT_ACTION_CONVERSATION_ASSIGNED = 4;
   */
  SMS_AUDIT_ACTION_CONVERSATION_ASSIGNED = 4,

  /**
   * @generated from enum value: SMS_AUDIT_ACTION_CONVERSATION_TRANSFERRED = 5;
   */
  SMS_AUDIT_ACTION_CONVERSATION_TRANSFERRED = 5,
}

/**
 * Agent Response status for Sms Manual approval Messages
 *
 * @generated from enum api.commons.SMSMamStatus
 */
export declare enum SMSMamStatus {
  /**
   * Initial Request
   *
   * @generated from enum value: QUEUED = 0;
   */
  QUEUED = 0,

  /**
   * Agent Approved
   *
   * @generated from enum value: APPROVED = 1;
   */
  APPROVED = 1,

  /**
   * Agent Rejected
   *
   * @generated from enum value: REJECTED = 2;
   */
  REJECTED = 2,
}

/**
 * @generated from message api.commons.SimpleSmsMamData
 */
export declare class SimpleSmsMamData extends Message<SimpleSmsMamData> {
  /**
   * @generated from field: string src = 1;
   */
  src: string;

  /**
   * @generated from field: string dst = 2;
   */
  dst: string;

  /**
   * @generated from field: string msg = 3;
   */
  msg: string;

  /**
   * @generated from field: int64 sms_group_sid = 4;
   */
  smsGroupSid: bigint;

  /**
   * @generated from field: int64 sms_task_sid = 5;
   */
  smsTaskSid: bigint;

  /**
   * @generated from field: string is_toll_free = 6;
   */
  isTollFree: string;

  /**
   * @generated from field: string is_time_zone = 7;
   */
  isTimeZone: string;

  /**
   * @generated from field: string provider_name = 8;
   */
  providerName: string;

  /**
   * @generated from field: int64 hunt_group_sid = 9;
   */
  huntGroupSid: bigint;

  /**
   * @generated from field: int64 client_sid = 10;
   */
  clientSid: bigint;

  /**
   * @generated from field: repeated api.commons.SimpleSmsMamKeyValue simple_sms_mam_meta_data = 11;
   */
  simpleSmsMamMetaData: SimpleSmsMamKeyValue[];

  /**
   * @generated from field: int64 dst_country_code = 12;
   */
  dstCountryCode: bigint;

  constructor(data?: PartialMessage<SimpleSmsMamData>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.SimpleSmsMamData";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SimpleSmsMamData;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SimpleSmsMamData;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SimpleSmsMamData;

  static equals(a: SimpleSmsMamData | PlainMessage<SimpleSmsMamData> | undefined, b: SimpleSmsMamData | PlainMessage<SimpleSmsMamData> | undefined): boolean;
}

/**
 * @generated from message api.commons.SimpleSmsMamKeyValue
 */
export declare class SimpleSmsMamKeyValue extends Message<SimpleSmsMamKeyValue> {
  /**
   * @generated from field: string key = 1;
   */
  key: string;

  /**
   * @generated from field: string value = 2;
   */
  value: string;

  constructor(data?: PartialMessage<SimpleSmsMamKeyValue>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.SimpleSmsMamKeyValue";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SimpleSmsMamKeyValue;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SimpleSmsMamKeyValue;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SimpleSmsMamKeyValue;

  static equals(a: SimpleSmsMamKeyValue | PlainMessage<SimpleSmsMamKeyValue> | undefined, b: SimpleSmsMamKeyValue | PlainMessage<SimpleSmsMamKeyValue> | undefined): boolean;
}

