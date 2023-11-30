// @generated by protoc-gen-es v1.5.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/vanalytics/correction.proto (package api.v1alpha1.vanalytics, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Duration, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * UpdateCorrectionRequest is a request for updating a correction.
 *
 * @generated from message api.v1alpha1.vanalytics.UpdateCorrectionRequest
 */
export declare class UpdateCorrectionRequest extends Message<UpdateCorrectionRequest> {
  /**
   * The correction resource to update.
   *
   * @generated from field: api.v1alpha1.vanalytics.Correction correction = 1;
   */
  correction?: Correction;

  /**
   * The fields to update.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateCorrectionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.UpdateCorrectionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateCorrectionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateCorrectionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateCorrectionRequest;

  static equals(a: UpdateCorrectionRequest | PlainMessage<UpdateCorrectionRequest> | undefined, b: UpdateCorrectionRequest | PlainMessage<UpdateCorrectionRequest> | undefined): boolean;
}

/**
 * UpdateCorrectionResponse is a response for updating a correction.
 *
 * @generated from message api.v1alpha1.vanalytics.UpdateCorrectionResponse
 */
export declare class UpdateCorrectionResponse extends Message<UpdateCorrectionResponse> {
  /**
   * The correction resource that was updated.
   *
   * @generated from field: api.v1alpha1.vanalytics.Correction correction = 1;
   */
  correction?: Correction;

  constructor(data?: PartialMessage<UpdateCorrectionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.UpdateCorrectionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateCorrectionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateCorrectionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateCorrectionResponse;

  static equals(a: UpdateCorrectionResponse | PlainMessage<UpdateCorrectionResponse> | undefined, b: UpdateCorrectionResponse | PlainMessage<UpdateCorrectionResponse> | undefined): boolean;
}

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
 * @generated from message api.v1alpha1.vanalytics.GetCorrectionRequest
 */
export declare class GetCorrectionRequest extends Message<GetCorrectionRequest> {
  /**
   * Required. The unique id of the correction.
   *
   * @generated from field: int64 correction_sid = 2;
   */
  correctionSid: bigint;

  constructor(data?: PartialMessage<GetCorrectionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.GetCorrectionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCorrectionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCorrectionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCorrectionRequest;

  static equals(a: GetCorrectionRequest | PlainMessage<GetCorrectionRequest> | undefined, b: GetCorrectionRequest | PlainMessage<GetCorrectionRequest> | undefined): boolean;
}

/**
 * ListCorrectionsRequest is a request for listing corrections.
 *
 * @generated from message api.v1alpha1.vanalytics.ListCorrectionsRequest
 */
export declare class ListCorrectionsRequest extends Message<ListCorrectionsRequest> {
  /**
   * Required. The transcript sid of the transcript that the corrections are on.
   *
   * @generated from field: int64 transcript_sid = 2;
   */
  transcriptSid: bigint;

  constructor(data?: PartialMessage<ListCorrectionsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.ListCorrectionsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListCorrectionsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListCorrectionsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListCorrectionsRequest;

  static equals(a: ListCorrectionsRequest | PlainMessage<ListCorrectionsRequest> | undefined, b: ListCorrectionsRequest | PlainMessage<ListCorrectionsRequest> | undefined): boolean;
}

/**
 * ListCorrectionsResponse is a response for listing corrections.
 *
 * @generated from message api.v1alpha1.vanalytics.ListCorrectionsResponse
 */
export declare class ListCorrectionsResponse extends Message<ListCorrectionsResponse> {
  /**
   * List of corrections.
   *
   * @generated from field: repeated api.v1alpha1.vanalytics.Correction corrections = 1;
   */
  corrections: Correction[];

  constructor(data?: PartialMessage<ListCorrectionsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.ListCorrectionsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListCorrectionsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListCorrectionsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListCorrectionsResponse;

  static equals(a: ListCorrectionsResponse | PlainMessage<ListCorrectionsResponse> | undefined, b: ListCorrectionsResponse | PlainMessage<ListCorrectionsResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.vanalytics.DeleteCorrectionRequest
 */
export declare class DeleteCorrectionRequest extends Message<DeleteCorrectionRequest> {
  /**
   * Required. The unique id of the correction to be deleted.
   *
   * @generated from field: int64 correction_sid = 1;
   */
  correctionSid: bigint;

  /**
   * Optional. Return the correction that was deleted.
   *
   * @generated from field: bool return = 3;
   */
  return: boolean;

  constructor(data?: PartialMessage<DeleteCorrectionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.DeleteCorrectionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteCorrectionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteCorrectionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteCorrectionRequest;

  static equals(a: DeleteCorrectionRequest | PlainMessage<DeleteCorrectionRequest> | undefined, b: DeleteCorrectionRequest | PlainMessage<DeleteCorrectionRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.vanalytics.DeleteCorrectionResponse
 */
export declare class DeleteCorrectionResponse extends Message<DeleteCorrectionResponse> {
  /**
   * Optional. The correction that was deleted.
   *
   * @generated from field: api.v1alpha1.vanalytics.Correction correction = 1;
   */
  correction?: Correction;

  constructor(data?: PartialMessage<DeleteCorrectionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.DeleteCorrectionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteCorrectionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteCorrectionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteCorrectionResponse;

  static equals(a: DeleteCorrectionResponse | PlainMessage<DeleteCorrectionResponse> | undefined, b: DeleteCorrectionResponse | PlainMessage<DeleteCorrectionResponse> | undefined): boolean;
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

