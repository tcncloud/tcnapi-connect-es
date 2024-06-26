// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/commons/call.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { CallResult } from "./results_pb.js";

/**
 * @generated from enum api.commons.CallStatus
 */
export declare enum CallStatus {
  /**
   * @generated from enum value: CALL_UNKNOWN = 0;
   */
  CALL_UNKNOWN = 0,

  /**
   * "CALL_SCHEDULED", "Call is currently waiting for scheduler"),
   *
   * @generated from enum value: CALL_SCHEDULED = 3100;
   */
  CALL_SCHEDULED = 3100,

  /**
   * "CALL_RUNNING", "Call is currently being executed"),
   *
   * @generated from enum value: CALL_RUNNING = 3200;
   */
  CALL_RUNNING = 3200,

  /**
   * "CALL_COMPLTED", "Call has been executed"),
   *
   * @generated from enum value: CALL_COMPLETED = 3300;
   */
  CALL_COMPLETED = 3300,
}

/**
 * @generated from message api.commons.SimpleCallData
 */
export declare class SimpleCallData extends Message<SimpleCallData> {
  /**
   * @generated from field: int64 task_sid = 1;
   */
  taskSid: bigint;

  /**
   * @generated from field: int64 call_sid = 2;
   */
  callSid: bigint;

  /**
   * @generated from field: int64 task_group_sid = 3;
   */
  taskGroupSid: bigint;

  /**
   * @generated from field: int64 client_sid = 4;
   */
  clientSid: bigint;

  /**
   * @generated from field: int64 country_sid = 5;
   */
  countrySid: bigint;

  /**
   * @generated from field: int64 agent_sid = 6;
   */
  agentSid: bigint;

  /**
   * @generated from field: int64 start_time = 7;
   */
  startTime: bigint;

  /**
   * @generated from field: string caller_id = 8;
   */
  callerId: string;

  /**
   * @generated from field: string phone_number = 9;
   */
  phoneNumber: string;

  /**
   * @generated from field: string country_code = 10;
   */
  countryCode: string;

  /**
   * @generated from field: int32 delivery_duration = 11;
   */
  deliveryDuration: number;

  /**
   * @generated from field: int32 link_call_duration = 12;
   */
  linkCallDuration: number;

  /**
   * @generated from field: api.commons.CallResult result = 13;
   */
  result: CallResult;

  /**
   * @generated from field: int32 sip_code = 14;
   */
  sipCode: number;

  /**
   * @generated from field: bool do_record = 15;
   */
  doRecord: boolean;

  /**
   * @generated from field: string recording_file_name = 16;
   */
  recordingFileName: string;

  /**
   * WARNING: don't delete these fields randomly, the frontend checks the inverse
   * so reserved fields will trigger a false positive for the scrub. Most likely you
   * will need to hardcode the value to True in matrix-api (like custom calling rules)
   *
   * @generated from field: bool is_dial_validation_ok = 17;
   */
  isDialValidationOk: boolean;

  /**
   * @generated from field: bool is_time_zone_scrub_ok = 18;
   */
  isTimeZoneScrubOk: boolean;

  /**
   * @generated from field: bool is_cell_phone_scrub_ok = 19;
   */
  isCellPhoneScrubOk: boolean;

  /**
   * @generated from field: bool is_custom_calling_rules_scrub_ok = 20;
   */
  isCustomCallingRulesScrubOk: boolean;

  /**
   * @generated from field: bool is_dncl_scrub_ok = 21;
   */
  isDnclScrubOk: boolean;

  /**
   * @generated from field: bool use_global_time_zone_scrub = 22;
   */
  useGlobalTimeZoneScrub: boolean;

  /**
   * @generated from field: bool do_cell_phone_scrub = 23;
   */
  doCellPhoneScrub: boolean;

  /**
   * @generated from field: bool do_dncl_scrub = 25;
   */
  doDnclScrub: boolean;

  /**
   * @generated from field: string call_data_type = 26;
   */
  callDataType: string;

  /**
   * @generated from field: string caller_id_country_code = 28;
   */
  callerIdCountryCode: string;

  /**
   * @generated from field: int64 caller_id_country_sid = 29;
   */
  callerIdCountrySid: bigint;

  /**
   * @generated from field: string zip_code = 30;
   */
  zipCode: string;

  /**
   * @generated from field: bool is_preview_by_record = 31;
   */
  isPreviewByRecord: boolean;

  /**
   * @generated from field: string rule_set_name = 32;
   */
  ruleSetName: string;

  /**
   * @generated from field: bool is_natural_compliance_ok = 33;
   */
  isNaturalComplianceOk: boolean;

  /**
   * @generated from field: repeated api.commons.SimpleKeyValue simple_meta_data = 34;
   */
  simpleMetaData: SimpleKeyValue[];

  /**
   * @generated from field: repeated api.commons.SimpleKeyValue simple_result_meta_data = 35;
   */
  simpleResultMetaData: SimpleKeyValue[];

  constructor(data?: PartialMessage<SimpleCallData>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.SimpleCallData";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SimpleCallData;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SimpleCallData;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SimpleCallData;

  static equals(a: SimpleCallData | PlainMessage<SimpleCallData> | undefined, b: SimpleCallData | PlainMessage<SimpleCallData> | undefined): boolean;
}

/**
 * @generated from message api.commons.SimpleKeyValue
 */
export declare class SimpleKeyValue extends Message<SimpleKeyValue> {
  /**
   * @generated from field: string key = 1;
   */
  key: string;

  /**
   * @generated from field: string value = 2;
   */
  value: string;

  constructor(data?: PartialMessage<SimpleKeyValue>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.SimpleKeyValue";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SimpleKeyValue;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SimpleKeyValue;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SimpleKeyValue;

  static equals(a: SimpleKeyValue | PlainMessage<SimpleKeyValue> | undefined, b: SimpleKeyValue | PlainMessage<SimpleKeyValue> | undefined): boolean;
}

/**
 * @generated from message api.commons.SimpleRecordData
 */
export declare class SimpleRecordData extends Message<SimpleRecordData> {
  /**
   * @generated from field: int64 task_sid = 1;
   */
  taskSid: bigint;

  /**
   * @generated from field: int64 task_group_sid = 2;
   */
  taskGroupSid: bigint;

  /**
   * @generated from field: int64 agent_sid = 3;
   */
  agentSid: bigint;

  /**
   * @generated from field: google.protobuf.Timestamp start_time = 4;
   */
  startTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp stop_time = 5;
   */
  stopTime?: Timestamp;

  constructor(data?: PartialMessage<SimpleRecordData>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.SimpleRecordData";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SimpleRecordData;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SimpleRecordData;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SimpleRecordData;

  static equals(a: SimpleRecordData | PlainMessage<SimpleRecordData> | undefined, b: SimpleRecordData | PlainMessage<SimpleRecordData> | undefined): boolean;
}

