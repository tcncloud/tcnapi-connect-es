// @generated by protoc-gen-es v1.3.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/vanalytics/correction.proto (package api.v1alpha1.vanalytics, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Duration, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * CreateCorrectionRequest is a request for creating a correction.
 *
 * @generated from message api.v1alpha1.vanalytics.CreateCorrectionRequest
 */
export declare class CreateCorrectionRequest extends Message<CreateCorrectionRequest> {
  /**
   * The correction resource to create.
   *
   * @generated from field: api.v1alpha1.vanalytics.Correction correction = 1;
   */
  correction?: Correction;

  constructor(data?: PartialMessage<CreateCorrectionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.CreateCorrectionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateCorrectionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateCorrectionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateCorrectionRequest;

  static equals(a: CreateCorrectionRequest | PlainMessage<CreateCorrectionRequest> | undefined, b: CreateCorrectionRequest | PlainMessage<CreateCorrectionRequest> | undefined): boolean;
}

/**
 * CreateCorrectionResponse is a response for creating a correction.
 *
 * @generated from message api.v1alpha1.vanalytics.CreateCorrectionResponse
 */
export declare class CreateCorrectionResponse extends Message<CreateCorrectionResponse> {
  /**
   * The correction resource that was created.
   *
   * @generated from field: api.v1alpha1.vanalytics.Correction correction = 1;
   */
  correction?: Correction;

  constructor(data?: PartialMessage<CreateCorrectionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.CreateCorrectionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateCorrectionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateCorrectionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateCorrectionResponse;

  static equals(a: CreateCorrectionResponse | PlainMessage<CreateCorrectionResponse> | undefined, b: CreateCorrectionResponse | PlainMessage<CreateCorrectionResponse> | undefined): boolean;
}

/**
 * Correction is a resource in the Vanalytics API.
 *
 * @generated from message api.v1alpha1.vanalytics.Correction
 */
export declare class Correction extends Message<Correction> {
  /**
   * Output only. The unique id of this correction.
   *
   * @generated from field: int64 correction_sid = 1;
   */
  correctionSid: bigint;

  /**
   * Required. The transcript sid of the transcript that the correction is on.
   *
   * @generated from field: int64 transcript_sid = 3;
   */
  transcriptSid: bigint;

  /**
   * Required. Start offset of the selected words in the transcript.
   *
   * @generated from field: google.protobuf.Duration start_offset = 4;
   */
  startOffset?: Duration;

  /**
   * Required. End offset of the selected words in the transcript.
   *
   * @generated from field: google.protobuf.Duration end_offset = 5;
   */
  endOffset?: Duration;

  /**
   * Required. Proposed text of what the transcript selected text should be.
   *
   * @generated from field: string proposed_text = 6;
   */
  proposedText: string;

  /**
   * Required. Channel that the words were spoken on.
   *
   * @generated from field: uint32 channel = 7;
   */
  channel: number;

  constructor(data?: PartialMessage<Correction>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.Correction";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Correction;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Correction;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Correction;

  static equals(a: Correction | PlainMessage<Correction> | undefined, b: Correction | PlainMessage<Correction> | undefined): boolean;
}

