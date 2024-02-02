// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file api/v1alpha1/vanalytics/notifier/service.proto (package api.v1alpha1.vanalytics.notifier, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * GetNotifyRequest is a request for getting a notify.
 *
 * @generated from message api.v1alpha1.vanalytics.notifier.GetNotifyRequest
 */
export declare class GetNotifyRequest extends Message<GetNotifyRequest> {
  /**
   * The unique id of this notify.
   *
   * @generated from field: string notify_id = 1;
   */
  notifyId: string;

  constructor(data?: PartialMessage<GetNotifyRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.notifier.GetNotifyRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetNotifyRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetNotifyRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetNotifyRequest;

  static equals(a: GetNotifyRequest | PlainMessage<GetNotifyRequest> | undefined, b: GetNotifyRequest | PlainMessage<GetNotifyRequest> | undefined): boolean;
}

/**
 * A notify resource in the vana notifier API.
 *
 * @generated from message api.v1alpha1.vanalytics.notifier.Notify
 */
export declare class Notify extends Message<Notify> {
  /**
   * The unique id of this notify.
   *
   * @generated from field: string notify_id = 1;
   */
  notifyId: string;

  /**
   * Required. The start transcript_sid of the flagged transcripts.
   *
   * @generated from field: int64 start_transcript_sid = 2;
   */
  startTranscriptSid: bigint;

  /**
   * Required. The end transcript_sid of the flagged transcripts.
   *
   * @generated from field: int64 end_transcript_sid = 3;
   */
  endTranscriptSid: bigint;

  /**
   * Required. The flag_sid of the flagged transcripts.
   *
   * @generated from field: int64 flag_sid = 4;
   */
  flagSid: bigint;

  /**
   * Output only. The timestamp when this was created. Assigned by the server.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 5;
   */
  createTime?: Timestamp;

  constructor(data?: PartialMessage<Notify>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.notifier.Notify";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Notify;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Notify;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Notify;

  static equals(a: Notify | PlainMessage<Notify> | undefined, b: Notify | PlainMessage<Notify> | undefined): boolean;
}

