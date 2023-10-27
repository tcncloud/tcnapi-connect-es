// @generated by protoc-gen-es v1.4.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/vanalytics/service.proto (package api.v1alpha1.vanalytics, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message api.v1alpha1.vanalytics.AuditRequest
 */
export declare class AuditRequest extends Message<AuditRequest> {
  /**
   * @generated from field: google.protobuf.Timestamp since = 2;
   */
  since?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp until = 3;
   */
  until?: Timestamp;

  constructor(data?: PartialMessage<AuditRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.AuditRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuditRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuditRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuditRequest;

  static equals(a: AuditRequest | PlainMessage<AuditRequest> | undefined, b: AuditRequest | PlainMessage<AuditRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.vanalytics.AuditResponse
 */
export declare class AuditResponse extends Message<AuditResponse> {
  /**
   * audio time in seconds within billing period
   *
   * @generated from field: double audio_time = 1;
   */
  audioTime: number;

  /**
   * billed_audio time in seconds within billing period
   *
   * @generated from field: double billed_audio_time = 2;
   */
  billedAudioTime: number;

  /**
   * last_usage is the date of the last transcription
   * within the billing period
   *
   * @generated from field: google.protobuf.Timestamp last_usage = 3;
   */
  lastUsage?: Timestamp;

  /**
   * billed_transcripts is the number of billed transcripts
   * within the billing period
   *
   * @generated from field: int64 billed_transcripts = 4;
   */
  billedTranscripts: bigint;

  constructor(data?: PartialMessage<AuditResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.AuditResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuditResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuditResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuditResponse;

  static equals(a: AuditResponse | PlainMessage<AuditResponse> | undefined, b: AuditResponse | PlainMessage<AuditResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.vanalytics.GetRecordingUrlRequest
 */
export declare class GetRecordingUrlRequest extends Message<GetRecordingUrlRequest> {
  /**
   * @generated from field: int64 transcript_sid = 2;
   */
  transcriptSid: bigint;

  /**
   * Optional. Defaults to "wav". Can be "", "wav" or "mp3".
   *
   * @generated from field: string kind = 4;
   */
  kind: string;

  constructor(data?: PartialMessage<GetRecordingUrlRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.GetRecordingUrlRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRecordingUrlRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRecordingUrlRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRecordingUrlRequest;

  static equals(a: GetRecordingUrlRequest | PlainMessage<GetRecordingUrlRequest> | undefined, b: GetRecordingUrlRequest | PlainMessage<GetRecordingUrlRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.vanalytics.GetRecordingUrlResponse
 */
export declare class GetRecordingUrlResponse extends Message<GetRecordingUrlResponse> {
  /**
   * @generated from field: string url = 1;
   */
  url: string;

  constructor(data?: PartialMessage<GetRecordingUrlResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.GetRecordingUrlResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRecordingUrlResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRecordingUrlResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRecordingUrlResponse;

  static equals(a: GetRecordingUrlResponse | PlainMessage<GetRecordingUrlResponse> | undefined, b: GetRecordingUrlResponse | PlainMessage<GetRecordingUrlResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.vanalytics.ListBillingSpanRequest
 */
export declare class ListBillingSpanRequest extends Message<ListBillingSpanRequest> {
  /**
   * Optional. Page size is based on months from now. Defaults to 12.
   *
   * @generated from field: uint32 page_size = 1;
   */
  pageSize: number;

  /**
   * Optional. The next_page_token returned from a previous List request, if any.
   * When provided all other request fields are ignored.
   *
   * @generated from field: string page_token = 2;
   */
  pageToken: string;

  constructor(data?: PartialMessage<ListBillingSpanRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.ListBillingSpanRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListBillingSpanRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListBillingSpanRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListBillingSpanRequest;

  static equals(a: ListBillingSpanRequest | PlainMessage<ListBillingSpanRequest> | undefined, b: ListBillingSpanRequest | PlainMessage<ListBillingSpanRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.vanalytics.ListBillingSpanResponse
 */
export declare class ListBillingSpanResponse extends Message<ListBillingSpanResponse> {
  /**
   * Token to retrieve the next page of billing spans, or empty if there are no
   * more billing spans in the list.
   *
   * @generated from field: string next_page_token = 1;
   */
  nextPageToken: string;

  /**
   * List of billing spans which contains at most one request page_size.
   *
   * @generated from field: repeated api.v1alpha1.vanalytics.BillingSpan spans = 2;
   */
  spans: BillingSpan[];

  constructor(data?: PartialMessage<ListBillingSpanResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.ListBillingSpanResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListBillingSpanResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListBillingSpanResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListBillingSpanResponse;

  static equals(a: ListBillingSpanResponse | PlainMessage<ListBillingSpanResponse> | undefined, b: ListBillingSpanResponse | PlainMessage<ListBillingSpanResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.vanalytics.BillingSpan
 */
export declare class BillingSpan extends Message<BillingSpan> {
  /**
   * Number of calls/transcripts in the billing period.
   *
   * @generated from field: int64 calls = 1;
   */
  calls: bigint;

  /**
   * Total hours in the billing period. Each call is rounded up to
   * the next 15 seconds and the total for the month is rounded up to
   * the next hour.
   *
   * @generated from field: int64 hours = 2;
   */
  hours: bigint;

  /**
   * Cost is the total cost for the billing period.
   *
   * @generated from field: double cost = 3;
   */
  cost: number;

  /**
   * Start time is the start time of the billing span. Transcripts in this span
   * must have create_time >= start_time.
   *
   * @generated from field: google.protobuf.Timestamp start_time = 4;
   */
  startTime?: Timestamp;

  /**
   * End time is the end time of the billing span. Transcripts in this span must
   * have a create_time < end_time.
   *
   * @generated from field: google.protobuf.Timestamp end_time = 5;
   */
  endTime?: Timestamp;

  constructor(data?: PartialMessage<BillingSpan>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.BillingSpan";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BillingSpan;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BillingSpan;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BillingSpan;

  static equals(a: BillingSpan | PlainMessage<BillingSpan> | undefined, b: BillingSpan | PlainMessage<BillingSpan> | undefined): boolean;
}

