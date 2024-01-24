// @generated by protoc-gen-es v1.7.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/soundboard/entities.proto (package api.v1alpha1.soundboard, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { RecordingFileType } from "../../commons/org_pb.js";

/**
 * SoundboardDetails is the core entity which contains metadata for soundboard
 * audio files, along with their identifiers.
 *
 * @generated from message api.v1alpha1.soundboard.SoundboardDetails
 */
export declare class SoundboardDetails extends Message<SoundboardDetails> {
  /**
   * ID of the soundboard, in the snowflake ID format.
   *
   * @generated from field: int64 soundboard_id = 1 [jstype = JS_STRING];
   */
  soundboardId: string;

  /**
   * Name of audio file (does not include path), e.g. 'file.wav'.
   *
   * @generated from field: string file_name = 2;
   */
  fileName: string;

  /**
   * Audio file format of soundboard (.wav or .mp3).
   *
   * @generated from field: api.commons.RecordingFileType file_type = 3;
   */
  fileType: RecordingFileType;

  /**
   * Soundboard title.
   *
   * @generated from field: string title = 4;
   */
  title: string;

  /**
   * Soundboard description.
   *
   * @generated from field: string description = 5;
   */
  description: string;

  /**
   * Timestamp of when the soundboard was created.
   *
   * @generated from field: google.protobuf.Timestamp date_created = 6;
   */
  dateCreated?: Timestamp;

  /**
   * Timestamp of when the soundboard was last updated.
   *
   * @generated from field: google.protobuf.Timestamp last_modified = 7;
   */
  lastModified?: Timestamp;

  /**
   * Soundboard audio file size as number of bytes, e.g. '3145728' = 3mb.
   *
   * @generated from field: int64 file_size = 8;
   */
  fileSize: bigint;

  /**
   * Length of audio file in seconds, e.g. '192' = 3:12.
   *
   * @generated from field: int64 recording_length = 9;
   */
  recordingLength: bigint;

  constructor(data?: PartialMessage<SoundboardDetails>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.soundboard.SoundboardDetails";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SoundboardDetails;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SoundboardDetails;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SoundboardDetails;

  static equals(a: SoundboardDetails | PlainMessage<SoundboardDetails> | undefined, b: SoundboardDetails | PlainMessage<SoundboardDetails> | undefined): boolean;
}

/**
 * Request message for the GetSoundboardFile RPC method.
 *
 * @generated from message api.v1alpha1.soundboard.GetSoundboardFileReq
 */
export declare class GetSoundboardFileReq extends Message<GetSoundboardFileReq> {
  /**
   * ID of the requested soundboard whose file will be returned.
   *
   * @generated from field: int64 soundboard_id = 1 [jstype = JS_STRING];
   */
  soundboardId: string;

  constructor(data?: PartialMessage<GetSoundboardFileReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.soundboard.GetSoundboardFileReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSoundboardFileReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSoundboardFileReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSoundboardFileReq;

  static equals(a: GetSoundboardFileReq | PlainMessage<GetSoundboardFileReq> | undefined, b: GetSoundboardFileReq | PlainMessage<GetSoundboardFileReq> | undefined): boolean;
}

/**
 * Response message for the GetSoundboardFile RPC method.
 *
 * @generated from message api.v1alpha1.soundboard.GetSoundboardFileRes
 */
export declare class GetSoundboardFileRes extends Message<GetSoundboardFileRes> {
  /**
   * Segments of the audio file, sent in 3mb chunks.
   *
   * @generated from field: bytes soundboard_file = 1;
   */
  soundboardFile: Uint8Array;

  constructor(data?: PartialMessage<GetSoundboardFileRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.soundboard.GetSoundboardFileRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSoundboardFileRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSoundboardFileRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSoundboardFileRes;

  static equals(a: GetSoundboardFileRes | PlainMessage<GetSoundboardFileRes> | undefined, b: GetSoundboardFileRes | PlainMessage<GetSoundboardFileRes> | undefined): boolean;
}

/**
 * Request message for the GetSoundboard RPC method.
 *
 * @generated from message api.v1alpha1.soundboard.GetSoundboardReq
 */
export declare class GetSoundboardReq extends Message<GetSoundboardReq> {
  /**
   * ID of the requested soundboard whose details will be returned.
   *
   * @generated from field: int64 soundboard_id = 1 [jstype = JS_STRING];
   */
  soundboardId: string;

  constructor(data?: PartialMessage<GetSoundboardReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.soundboard.GetSoundboardReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSoundboardReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSoundboardReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSoundboardReq;

  static equals(a: GetSoundboardReq | PlainMessage<GetSoundboardReq> | undefined, b: GetSoundboardReq | PlainMessage<GetSoundboardReq> | undefined): boolean;
}

/**
 * Response message for the GetSoundboard RPC method.
 *
 * @generated from message api.v1alpha1.soundboard.GetSoundboardRes
 */
export declare class GetSoundboardRes extends Message<GetSoundboardRes> {
  /**
   * Metadata of the soundboard.
   *
   * @generated from field: api.v1alpha1.soundboard.SoundboardDetails soundboard = 1;
   */
  soundboard?: SoundboardDetails;

  constructor(data?: PartialMessage<GetSoundboardRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.soundboard.GetSoundboardRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSoundboardRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSoundboardRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSoundboardRes;

  static equals(a: GetSoundboardRes | PlainMessage<GetSoundboardRes> | undefined, b: GetSoundboardRes | PlainMessage<GetSoundboardRes> | undefined): boolean;
}

/**
 * Request message for the CreateSoundboard RPC method.
 *
 * @generated from message api.v1alpha1.soundboard.CreateSoundboardReq
 */
export declare class CreateSoundboardReq extends Message<CreateSoundboardReq> {
  /**
   * The metadata of the soundboard.
   *
   * @generated from field: api.v1alpha1.soundboard.SoundboardDetails soundboard = 1;
   */
  soundboard?: SoundboardDetails;

  /**
   * The generated ID received from fts.GetUploadFileUrl.
   *
   * @generated from field: string fts_id = 2;
   */
  ftsId: string;

  constructor(data?: PartialMessage<CreateSoundboardReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.soundboard.CreateSoundboardReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateSoundboardReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateSoundboardReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateSoundboardReq;

  static equals(a: CreateSoundboardReq | PlainMessage<CreateSoundboardReq> | undefined, b: CreateSoundboardReq | PlainMessage<CreateSoundboardReq> | undefined): boolean;
}

/**
 * Response message for the CreateSoundboard RPC method.
 *
 * @generated from message api.v1alpha1.soundboard.CreateSoundboardRes
 */
export declare class CreateSoundboardRes extends Message<CreateSoundboardRes> {
  /**
   * Generated snowflake ID which will correspond to the soundboard.
   *
   * @generated from field: int64 soundboard_id = 1 [jstype = JS_STRING];
   */
  soundboardId: string;

  /**
   * The generated ID received from fts.GetUploadFileUrl.
   *
   * @generated from field: string fts_id = 2;
   */
  ftsId: string;

  constructor(data?: PartialMessage<CreateSoundboardRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.soundboard.CreateSoundboardRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateSoundboardRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateSoundboardRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateSoundboardRes;

  static equals(a: CreateSoundboardRes | PlainMessage<CreateSoundboardRes> | undefined, b: CreateSoundboardRes | PlainMessage<CreateSoundboardRes> | undefined): boolean;
}

/**
 * Request message for the ListSoundboards RPC method.
 *
 * @generated from message api.v1alpha1.soundboard.ListSoundboardsReq
 */
export declare class ListSoundboardsReq extends Message<ListSoundboardsReq> {
  constructor(data?: PartialMessage<ListSoundboardsReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.soundboard.ListSoundboardsReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSoundboardsReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSoundboardsReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSoundboardsReq;

  static equals(a: ListSoundboardsReq | PlainMessage<ListSoundboardsReq> | undefined, b: ListSoundboardsReq | PlainMessage<ListSoundboardsReq> | undefined): boolean;
}

/**
 * Response message for the ListSoundboards RPC method.
 *
 * @generated from message api.v1alpha1.soundboard.ListSoundboardsRes
 */
export declare class ListSoundboardsRes extends Message<ListSoundboardsRes> {
  /**
   * Each soundboard's metadata belonging to org.
   *
   * @generated from field: repeated api.v1alpha1.soundboard.SoundboardDetails soundboards = 1;
   */
  soundboards: SoundboardDetails[];

  constructor(data?: PartialMessage<ListSoundboardsRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.soundboard.ListSoundboardsRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSoundboardsRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSoundboardsRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSoundboardsRes;

  static equals(a: ListSoundboardsRes | PlainMessage<ListSoundboardsRes> | undefined, b: ListSoundboardsRes | PlainMessage<ListSoundboardsRes> | undefined): boolean;
}

/**
 * Request message for the UpdateSoundboard RPC method.
 *
 * @generated from message api.v1alpha1.soundboard.UpdateSoundboardReq
 */
export declare class UpdateSoundboardReq extends Message<UpdateSoundboardReq> {
  /**
   * Soundboard details to be updated, must contain soundboard and org id.
   *
   * @generated from field: api.v1alpha1.soundboard.SoundboardDetails soundboard = 1;
   */
  soundboard?: SoundboardDetails;

  constructor(data?: PartialMessage<UpdateSoundboardReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.soundboard.UpdateSoundboardReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateSoundboardReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateSoundboardReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateSoundboardReq;

  static equals(a: UpdateSoundboardReq | PlainMessage<UpdateSoundboardReq> | undefined, b: UpdateSoundboardReq | PlainMessage<UpdateSoundboardReq> | undefined): boolean;
}

/**
 * Response message for the UpdateSoundboard RPC method.
 *
 * @generated from message api.v1alpha1.soundboard.UpdateSoundboardRes
 */
export declare class UpdateSoundboardRes extends Message<UpdateSoundboardRes> {
  /**
   * ID of the soundboard which was updated.
   *
   * @generated from field: int64 soundboard_id = 1 [jstype = JS_STRING];
   */
  soundboardId: string;

  constructor(data?: PartialMessage<UpdateSoundboardRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.soundboard.UpdateSoundboardRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateSoundboardRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateSoundboardRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateSoundboardRes;

  static equals(a: UpdateSoundboardRes | PlainMessage<UpdateSoundboardRes> | undefined, b: UpdateSoundboardRes | PlainMessage<UpdateSoundboardRes> | undefined): boolean;
}

/**
 * Request message for the DeleteSoundboard RPC method.
 *
 * @generated from message api.v1alpha1.soundboard.DeleteSoundboardReq
 */
export declare class DeleteSoundboardReq extends Message<DeleteSoundboardReq> {
  /**
   * ID of the soundboard whose file and details will be deleted.
   *
   * @generated from field: int64 soundboard_id = 1 [jstype = JS_STRING];
   */
  soundboardId: string;

  constructor(data?: PartialMessage<DeleteSoundboardReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.soundboard.DeleteSoundboardReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteSoundboardReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteSoundboardReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteSoundboardReq;

  static equals(a: DeleteSoundboardReq | PlainMessage<DeleteSoundboardReq> | undefined, b: DeleteSoundboardReq | PlainMessage<DeleteSoundboardReq> | undefined): boolean;
}

/**
 * Response message for the DeleteSoundboard RPC method.
 *
 * @generated from message api.v1alpha1.soundboard.DeleteSoundboardRes
 */
export declare class DeleteSoundboardRes extends Message<DeleteSoundboardRes> {
  constructor(data?: PartialMessage<DeleteSoundboardRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.soundboard.DeleteSoundboardRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteSoundboardRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteSoundboardRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteSoundboardRes;

  static equals(a: DeleteSoundboardRes | PlainMessage<DeleteSoundboardRes> | undefined, b: DeleteSoundboardRes | PlainMessage<DeleteSoundboardRes> | undefined): boolean;
}

