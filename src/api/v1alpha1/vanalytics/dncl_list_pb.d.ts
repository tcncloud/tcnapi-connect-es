// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/vanalytics/dncl_list.proto (package api.v1alpha1.vanalytics, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ContentType } from "../../commons/compliance_pb.js";

/**
 * @generated from enum api.v1alpha1.vanalytics.DnclExpirePeriod
 */
export declare enum DnclExpirePeriod {
  /**
   * @generated from enum value: DNCL_EXPIRE_PERIOD_HOUR = 0;
   */
  HOUR = 0,

  /**
   * @generated from enum value: DNCL_EXPIRE_PERIOD_DAY = 1;
   */
  DAY = 1,

  /**
   * @generated from enum value: DNCL_EXPIRE_PERIOD_WEEK = 2;
   */
  WEEK = 2,

  /**
   * @generated from enum value: DNCL_EXPIRE_PERIOD_NEVER = 3;
   */
  NEVER = 3,

  /**
   * @generated from enum value: DNCL_EXPIRE_PERIOD_MONTH = 4;
   */
  MONTH = 4,
}

/**
 * @generated from message api.v1alpha1.vanalytics.DnclList
 */
export declare class DnclList extends Message<DnclList> {
  /**
   * Required. Dncl list id to add the item to.
   *
   * @generated from field: string list_id = 2;
   */
  listId: string;

  /**
   * Required. Specifies the dncl list content type.
   *
   * @generated from field: api.commons.ContentType content_type = 3;
   */
  contentType: ContentType;

  /**
   * Optional. Expected duration to keep item in DNCL.
   *
   * @generated from field: api.v1alpha1.vanalytics.DnclExpirePeriod expire_period = 4;
   */
  expirePeriod: DnclExpirePeriod;

  /**
   * Optional. Specifies how many expire periods
   * to calculate. i.e. number of weeks.
   *
   * @generated from field: uint64 expire_offset = 5;
   */
  expireOffset: bigint;

  /**
   * Optional. Specifies an agent response to get the scrub value from.
   *
   * @generated from field: string agent_response_key = 6;
   */
  agentResponseKey: string;

  constructor(data?: PartialMessage<DnclList>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.DnclList";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DnclList;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DnclList;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DnclList;

  static equals(a: DnclList | PlainMessage<DnclList> | undefined, b: DnclList | PlainMessage<DnclList> | undefined): boolean;
}

