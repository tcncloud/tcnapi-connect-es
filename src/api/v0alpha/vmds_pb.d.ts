// @generated by protoc-gen-es v1.3.3 with parameter "target=js+dts"
// @generated from file api/v0alpha/vmds.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { CallType_Enum } from "../commons/acd_pb.js";

/**
 * @generated from message api.v0alpha.GetVoicemailMetadataReq
 */
export declare class GetVoicemailMetadataReq extends Message<GetVoicemailMetadataReq> {
  /**
   * extension
   *
   * @generated from field: repeated string mail_boxes = 2;
   */
  mailBoxes: string[];

  constructor(data?: PartialMessage<GetVoicemailMetadataReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.GetVoicemailMetadataReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetVoicemailMetadataReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetVoicemailMetadataReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetVoicemailMetadataReq;

  static equals(a: GetVoicemailMetadataReq | PlainMessage<GetVoicemailMetadataReq> | undefined, b: GetVoicemailMetadataReq | PlainMessage<GetVoicemailMetadataReq> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.GetVoicemailMetadataRes
 */
export declare class GetVoicemailMetadataRes extends Message<GetVoicemailMetadataRes> {
  /**
   * @generated from field: string caller_id = 1;
   */
  callerId: string;

  /**
   * @generated from field: string caller_sid = 2;
   */
  callerSid: string;

  /**
   * @generated from field: api.commons.CallType.Enum caller_type = 3;
   */
  callerType: CallType_Enum;

  /**
   * @generated from field: string dialed_number = 4;
   */
  dialedNumber: string;

  /**
   * @generated from field: int32 duration_seconds = 5;
   */
  durationSeconds: number;

  /**
   * @generated from field: bool flag_read = 6;
   */
  flagRead: boolean;

  /**
   * @generated from field: string mail_box = 7;
   */
  mailBox: string;

  /**
   * @generated from field: string recording_filename = 9;
   */
  recordingFilename: string;

  /**
   * @generated from field: int32 recording_start = 10;
   */
  recordingStart: number;

  constructor(data?: PartialMessage<GetVoicemailMetadataRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.GetVoicemailMetadataRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetVoicemailMetadataRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetVoicemailMetadataRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetVoicemailMetadataRes;

  static equals(a: GetVoicemailMetadataRes | PlainMessage<GetVoicemailMetadataRes> | undefined, b: GetVoicemailMetadataRes | PlainMessage<GetVoicemailMetadataRes> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.DeleteVoicemailReq
 */
export declare class DeleteVoicemailReq extends Message<DeleteVoicemailReq> {
  /**
   * @generated from field: string mail_box = 2;
   */
  mailBox: string;

  /**
   * @generated from field: string caller_sid = 3;
   */
  callerSid: string;

  /**
   * @generated from field: api.commons.CallType.Enum caller_type = 4;
   */
  callerType: CallType_Enum;

  constructor(data?: PartialMessage<DeleteVoicemailReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.DeleteVoicemailReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteVoicemailReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteVoicemailReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteVoicemailReq;

  static equals(a: DeleteVoicemailReq | PlainMessage<DeleteVoicemailReq> | undefined, b: DeleteVoicemailReq | PlainMessage<DeleteVoicemailReq> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.DeleteVoicemailRes
 */
export declare class DeleteVoicemailRes extends Message<DeleteVoicemailRes> {
  constructor(data?: PartialMessage<DeleteVoicemailRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.DeleteVoicemailRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteVoicemailRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteVoicemailRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteVoicemailRes;

  static equals(a: DeleteVoicemailRes | PlainMessage<DeleteVoicemailRes> | undefined, b: DeleteVoicemailRes | PlainMessage<DeleteVoicemailRes> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.DeleteGreetingReq
 */
export declare class DeleteGreetingReq extends Message<DeleteGreetingReq> {
  /**
   * @generated from field: string filename = 2;
   */
  filename: string;

  constructor(data?: PartialMessage<DeleteGreetingReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.DeleteGreetingReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteGreetingReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteGreetingReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteGreetingReq;

  static equals(a: DeleteGreetingReq | PlainMessage<DeleteGreetingReq> | undefined, b: DeleteGreetingReq | PlainMessage<DeleteGreetingReq> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.DeleteGreetingRes
 */
export declare class DeleteGreetingRes extends Message<DeleteGreetingRes> {
  constructor(data?: PartialMessage<DeleteGreetingRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.DeleteGreetingRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteGreetingRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteGreetingRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteGreetingRes;

  static equals(a: DeleteGreetingRes | PlainMessage<DeleteGreetingRes> | undefined, b: DeleteGreetingRes | PlainMessage<DeleteGreetingRes> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.UpdateUploadNameReq
 */
export declare class UpdateUploadNameReq extends Message<UpdateUploadNameReq> {
  /**
   * @generated from field: string current_file_name = 1;
   */
  currentFileName: string;

  /**
   * @generated from field: string new_file_name = 2;
   */
  newFileName: string;

  constructor(data?: PartialMessage<UpdateUploadNameReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.UpdateUploadNameReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateUploadNameReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateUploadNameReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateUploadNameReq;

  static equals(a: UpdateUploadNameReq | PlainMessage<UpdateUploadNameReq> | undefined, b: UpdateUploadNameReq | PlainMessage<UpdateUploadNameReq> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.UpdateUploadNameRes
 */
export declare class UpdateUploadNameRes extends Message<UpdateUploadNameRes> {
  constructor(data?: PartialMessage<UpdateUploadNameRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.UpdateUploadNameRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateUploadNameRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateUploadNameRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateUploadNameRes;

  static equals(a: UpdateUploadNameRes | PlainMessage<UpdateUploadNameRes> | undefined, b: UpdateUploadNameRes | PlainMessage<UpdateUploadNameRes> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.GetVoicemailCountReq
 */
export declare class GetVoicemailCountReq extends Message<GetVoicemailCountReq> {
  /**
   * @generated from field: repeated string mail_boxes = 2;
   */
  mailBoxes: string[];

  constructor(data?: PartialMessage<GetVoicemailCountReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.GetVoicemailCountReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetVoicemailCountReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetVoicemailCountReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetVoicemailCountReq;

  static equals(a: GetVoicemailCountReq | PlainMessage<GetVoicemailCountReq> | undefined, b: GetVoicemailCountReq | PlainMessage<GetVoicemailCountReq> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.GetVoicemailCountRes
 */
export declare class GetVoicemailCountRes extends Message<GetVoicemailCountRes> {
  /**
   * @generated from field: int32 total = 1;
   */
  total: number;

  /**
   * @generated from field: int32 unheard = 2;
   */
  unheard: number;

  constructor(data?: PartialMessage<GetVoicemailCountRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.GetVoicemailCountRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetVoicemailCountRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetVoicemailCountRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetVoicemailCountRes;

  static equals(a: GetVoicemailCountRes | PlainMessage<GetVoicemailCountRes> | undefined, b: GetVoicemailCountRes | PlainMessage<GetVoicemailCountRes> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.UpdateVoicemailFlagReadReq
 */
export declare class UpdateVoicemailFlagReadReq extends Message<UpdateVoicemailFlagReadReq> {
  /**
   * @generated from field: string mail_box = 2;
   */
  mailBox: string;

  /**
   * @generated from field: string caller_sid = 3;
   */
  callerSid: string;

  /**
   * @generated from field: api.commons.CallType.Enum caller_type = 4;
   */
  callerType: CallType_Enum;

  /**
   * @generated from field: bool flag_read = 5;
   */
  flagRead: boolean;

  constructor(data?: PartialMessage<UpdateVoicemailFlagReadReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.UpdateVoicemailFlagReadReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateVoicemailFlagReadReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateVoicemailFlagReadReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateVoicemailFlagReadReq;

  static equals(a: UpdateVoicemailFlagReadReq | PlainMessage<UpdateVoicemailFlagReadReq> | undefined, b: UpdateVoicemailFlagReadReq | PlainMessage<UpdateVoicemailFlagReadReq> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.UpdateVoicemailFlagReadRes
 */
export declare class UpdateVoicemailFlagReadRes extends Message<UpdateVoicemailFlagReadRes> {
  /**
   * @generated from field: bool flag_read = 1;
   */
  flagRead: boolean;

  constructor(data?: PartialMessage<UpdateVoicemailFlagReadRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.UpdateVoicemailFlagReadRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateVoicemailFlagReadRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateVoicemailFlagReadRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateVoicemailFlagReadRes;

  static equals(a: UpdateVoicemailFlagReadRes | PlainMessage<UpdateVoicemailFlagReadRes> | undefined, b: UpdateVoicemailFlagReadRes | PlainMessage<UpdateVoicemailFlagReadRes> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.DownloadMessageReq
 */
export declare class DownloadMessageReq extends Message<DownloadMessageReq> {
  /**
   * @generated from field: string mail_box = 2;
   */
  mailBox: string;

  /**
   * @generated from field: string caller_sid = 3;
   */
  callerSid: string;

  /**
   * @generated from field: api.commons.CallType.Enum caller_type = 4;
   */
  callerType: CallType_Enum;

  constructor(data?: PartialMessage<DownloadMessageReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.DownloadMessageReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DownloadMessageReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DownloadMessageReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DownloadMessageReq;

  static equals(a: DownloadMessageReq | PlainMessage<DownloadMessageReq> | undefined, b: DownloadMessageReq | PlainMessage<DownloadMessageReq> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.DownloadMessageRes
 */
export declare class DownloadMessageRes extends Message<DownloadMessageRes> {
  /**
   * @generated from field: string url = 1;
   */
  url: string;

  constructor(data?: PartialMessage<DownloadMessageRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.DownloadMessageRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DownloadMessageRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DownloadMessageRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DownloadMessageRes;

  static equals(a: DownloadMessageRes | PlainMessage<DownloadMessageRes> | undefined, b: DownloadMessageRes | PlainMessage<DownloadMessageRes> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.GetUploadGreetingUrlReq
 */
export declare class GetUploadGreetingUrlReq extends Message<GetUploadGreetingUrlReq> {
  /**
   * @generated from field: string pbx_extension = 2;
   */
  pbxExtension: string;

  /**
   * @generated from field: string filename = 3;
   */
  filename: string;

  constructor(data?: PartialMessage<GetUploadGreetingUrlReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.GetUploadGreetingUrlReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUploadGreetingUrlReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUploadGreetingUrlReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUploadGreetingUrlReq;

  static equals(a: GetUploadGreetingUrlReq | PlainMessage<GetUploadGreetingUrlReq> | undefined, b: GetUploadGreetingUrlReq | PlainMessage<GetUploadGreetingUrlReq> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.GetUploadGreetingUrlRes
 */
export declare class GetUploadGreetingUrlRes extends Message<GetUploadGreetingUrlRes> {
  /**
   * @generated from field: string url = 1;
   */
  url: string;

  constructor(data?: PartialMessage<GetUploadGreetingUrlRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.GetUploadGreetingUrlRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUploadGreetingUrlRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUploadGreetingUrlRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUploadGreetingUrlRes;

  static equals(a: GetUploadGreetingUrlRes | PlainMessage<GetUploadGreetingUrlRes> | undefined, b: GetUploadGreetingUrlRes | PlainMessage<GetUploadGreetingUrlRes> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.DownloadMessagesReq
 */
export declare class DownloadMessagesReq extends Message<DownloadMessagesReq> {
  /**
   * @generated from field: repeated string mail_boxes = 2;
   */
  mailBoxes: string[];

  /**
   * @generated from field: bool unheard_only = 3;
   */
  unheardOnly: boolean;

  constructor(data?: PartialMessage<DownloadMessagesReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.DownloadMessagesReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DownloadMessagesReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DownloadMessagesReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DownloadMessagesReq;

  static equals(a: DownloadMessagesReq | PlainMessage<DownloadMessagesReq> | undefined, b: DownloadMessagesReq | PlainMessage<DownloadMessagesReq> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.DownloadMessagesRes
 */
export declare class DownloadMessagesRes extends Message<DownloadMessagesRes> {
  /**
   * @generated from field: string url = 1;
   */
  url: string;

  constructor(data?: PartialMessage<DownloadMessagesRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.DownloadMessagesRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DownloadMessagesRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DownloadMessagesRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DownloadMessagesRes;

  static equals(a: DownloadMessagesRes | PlainMessage<DownloadMessagesRes> | undefined, b: DownloadMessagesRes | PlainMessage<DownloadMessagesRes> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.DownloadGreetingForExtensionReq
 */
export declare class DownloadGreetingForExtensionReq extends Message<DownloadGreetingForExtensionReq> {
  /**
   * @generated from field: string mail_box = 2;
   */
  mailBox: string;

  constructor(data?: PartialMessage<DownloadGreetingForExtensionReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.DownloadGreetingForExtensionReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DownloadGreetingForExtensionReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DownloadGreetingForExtensionReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DownloadGreetingForExtensionReq;

  static equals(a: DownloadGreetingForExtensionReq | PlainMessage<DownloadGreetingForExtensionReq> | undefined, b: DownloadGreetingForExtensionReq | PlainMessage<DownloadGreetingForExtensionReq> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.DownloadGreetingForExtensionRes
 */
export declare class DownloadGreetingForExtensionRes extends Message<DownloadGreetingForExtensionRes> {
  /**
   * @generated from field: string url = 1;
   */
  url: string;

  constructor(data?: PartialMessage<DownloadGreetingForExtensionRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.DownloadGreetingForExtensionRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DownloadGreetingForExtensionRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DownloadGreetingForExtensionRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DownloadGreetingForExtensionRes;

  static equals(a: DownloadGreetingForExtensionRes | PlainMessage<DownloadGreetingForExtensionRes> | undefined, b: DownloadGreetingForExtensionRes | PlainMessage<DownloadGreetingForExtensionRes> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.DownloadGreetingReq
 */
export declare class DownloadGreetingReq extends Message<DownloadGreetingReq> {
  /**
   * @generated from field: string filename = 2;
   */
  filename: string;

  constructor(data?: PartialMessage<DownloadGreetingReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.DownloadGreetingReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DownloadGreetingReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DownloadGreetingReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DownloadGreetingReq;

  static equals(a: DownloadGreetingReq | PlainMessage<DownloadGreetingReq> | undefined, b: DownloadGreetingReq | PlainMessage<DownloadGreetingReq> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.DownloadGreetingRes
 */
export declare class DownloadGreetingRes extends Message<DownloadGreetingRes> {
  /**
   * @generated from field: string url = 1;
   */
  url: string;

  constructor(data?: PartialMessage<DownloadGreetingRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.DownloadGreetingRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DownloadGreetingRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DownloadGreetingRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DownloadGreetingRes;

  static equals(a: DownloadGreetingRes | PlainMessage<DownloadGreetingRes> | undefined, b: DownloadGreetingRes | PlainMessage<DownloadGreetingRes> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.ProcessGreetingUploadReq
 */
export declare class ProcessGreetingUploadReq extends Message<ProcessGreetingUploadReq> {
  /**
   * @generated from field: string pbx_extension = 2;
   */
  pbxExtension: string;

  /**
   * @generated from field: string filename = 3;
   */
  filename: string;

  constructor(data?: PartialMessage<ProcessGreetingUploadReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.ProcessGreetingUploadReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProcessGreetingUploadReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProcessGreetingUploadReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProcessGreetingUploadReq;

  static equals(a: ProcessGreetingUploadReq | PlainMessage<ProcessGreetingUploadReq> | undefined, b: ProcessGreetingUploadReq | PlainMessage<ProcessGreetingUploadReq> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.ProcessGreetingUploadRes
 */
export declare class ProcessGreetingUploadRes extends Message<ProcessGreetingUploadRes> {
  constructor(data?: PartialMessage<ProcessGreetingUploadRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.ProcessGreetingUploadRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProcessGreetingUploadRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProcessGreetingUploadRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProcessGreetingUploadRes;

  static equals(a: ProcessGreetingUploadRes | PlainMessage<ProcessGreetingUploadRes> | undefined, b: ProcessGreetingUploadRes | PlainMessage<ProcessGreetingUploadRes> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.UpdateGreetingForExtensionReq
 */
export declare class UpdateGreetingForExtensionReq extends Message<UpdateGreetingForExtensionReq> {
  /**
   * @generated from field: string pbx_extension = 2;
   */
  pbxExtension: string;

  /**
   * @generated from field: string filename = 3;
   */
  filename: string;

  constructor(data?: PartialMessage<UpdateGreetingForExtensionReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.UpdateGreetingForExtensionReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateGreetingForExtensionReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateGreetingForExtensionReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateGreetingForExtensionReq;

  static equals(a: UpdateGreetingForExtensionReq | PlainMessage<UpdateGreetingForExtensionReq> | undefined, b: UpdateGreetingForExtensionReq | PlainMessage<UpdateGreetingForExtensionReq> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.UpdateGreetingForExtensionRes
 */
export declare class UpdateGreetingForExtensionRes extends Message<UpdateGreetingForExtensionRes> {
  constructor(data?: PartialMessage<UpdateGreetingForExtensionRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.UpdateGreetingForExtensionRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateGreetingForExtensionRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateGreetingForExtensionRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateGreetingForExtensionRes;

  static equals(a: UpdateGreetingForExtensionRes | PlainMessage<UpdateGreetingForExtensionRes> | undefined, b: UpdateGreetingForExtensionRes | PlainMessage<UpdateGreetingForExtensionRes> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.ListAvailableGreetingsReq
 */
export declare class ListAvailableGreetingsReq extends Message<ListAvailableGreetingsReq> {
  constructor(data?: PartialMessage<ListAvailableGreetingsReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.ListAvailableGreetingsReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAvailableGreetingsReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAvailableGreetingsReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAvailableGreetingsReq;

  static equals(a: ListAvailableGreetingsReq | PlainMessage<ListAvailableGreetingsReq> | undefined, b: ListAvailableGreetingsReq | PlainMessage<ListAvailableGreetingsReq> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.ListAvailableGreetingsRes
 */
export declare class ListAvailableGreetingsRes extends Message<ListAvailableGreetingsRes> {
  /**
   * @generated from field: repeated api.v0alpha.ListAvailableGreetingsRes.FileInfo greetings = 1;
   */
  greetings: ListAvailableGreetingsRes_FileInfo[];

  constructor(data?: PartialMessage<ListAvailableGreetingsRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.ListAvailableGreetingsRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAvailableGreetingsRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAvailableGreetingsRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAvailableGreetingsRes;

  static equals(a: ListAvailableGreetingsRes | PlainMessage<ListAvailableGreetingsRes> | undefined, b: ListAvailableGreetingsRes | PlainMessage<ListAvailableGreetingsRes> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.ListAvailableGreetingsRes.FileInfo
 */
export declare class ListAvailableGreetingsRes_FileInfo extends Message<ListAvailableGreetingsRes_FileInfo> {
  /**
   * @generated from field: string filename = 1;
   */
  filename: string;

  /**
   * @generated from field: int64 size = 2;
   */
  size: bigint;

  constructor(data?: PartialMessage<ListAvailableGreetingsRes_FileInfo>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.ListAvailableGreetingsRes.FileInfo";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAvailableGreetingsRes_FileInfo;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAvailableGreetingsRes_FileInfo;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAvailableGreetingsRes_FileInfo;

  static equals(a: ListAvailableGreetingsRes_FileInfo | PlainMessage<ListAvailableGreetingsRes_FileInfo> | undefined, b: ListAvailableGreetingsRes_FileInfo | PlainMessage<ListAvailableGreetingsRes_FileInfo> | undefined): boolean;
}

