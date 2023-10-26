// @generated by protoc-gen-es v1.4.0 with parameter "target=js+dts"
// @generated from file api/v0alpha/vmds.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { CallType_Enum } from "../commons/acd_pb.js";

/**
 * @generated from message api.v0alpha.GetVoicemailMetadataReq
 */
export const GetVoicemailMetadataReq = proto3.makeMessageType(
  "api.v0alpha.GetVoicemailMetadataReq",
  () => [
    { no: 2, name: "mail_boxes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message api.v0alpha.GetVoicemailMetadataRes
 */
export const GetVoicemailMetadataRes = proto3.makeMessageType(
  "api.v0alpha.GetVoicemailMetadataRes",
  () => [
    { no: 1, name: "caller_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "caller_sid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "caller_type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
    { no: 4, name: "dialed_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "duration_seconds", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "flag_read", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "mail_box", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "recording_filename", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "recording_start", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message api.v0alpha.DeleteVoicemailReq
 */
export const DeleteVoicemailReq = proto3.makeMessageType(
  "api.v0alpha.DeleteVoicemailReq",
  () => [
    { no: 2, name: "mail_box", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "caller_sid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "caller_type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
  ],
);

/**
 * @generated from message api.v0alpha.DeleteVoicemailRes
 */
export const DeleteVoicemailRes = proto3.makeMessageType(
  "api.v0alpha.DeleteVoicemailRes",
  [],
);

/**
 * @generated from message api.v0alpha.DeleteGreetingReq
 */
export const DeleteGreetingReq = proto3.makeMessageType(
  "api.v0alpha.DeleteGreetingReq",
  () => [
    { no: 2, name: "filename", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.DeleteGreetingRes
 */
export const DeleteGreetingRes = proto3.makeMessageType(
  "api.v0alpha.DeleteGreetingRes",
  [],
);

/**
 * @generated from message api.v0alpha.UpdateUploadNameReq
 */
export const UpdateUploadNameReq = proto3.makeMessageType(
  "api.v0alpha.UpdateUploadNameReq",
  () => [
    { no: 1, name: "current_file_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "new_file_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.UpdateUploadNameRes
 */
export const UpdateUploadNameRes = proto3.makeMessageType(
  "api.v0alpha.UpdateUploadNameRes",
  [],
);

/**
 * @generated from message api.v0alpha.GetVoicemailCountReq
 */
export const GetVoicemailCountReq = proto3.makeMessageType(
  "api.v0alpha.GetVoicemailCountReq",
  () => [
    { no: 2, name: "mail_boxes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message api.v0alpha.GetVoicemailCountRes
 */
export const GetVoicemailCountRes = proto3.makeMessageType(
  "api.v0alpha.GetVoicemailCountRes",
  () => [
    { no: 1, name: "total", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "unheard", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message api.v0alpha.UpdateVoicemailFlagReadReq
 */
export const UpdateVoicemailFlagReadReq = proto3.makeMessageType(
  "api.v0alpha.UpdateVoicemailFlagReadReq",
  () => [
    { no: 2, name: "mail_box", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "caller_sid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "caller_type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
    { no: 5, name: "flag_read", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message api.v0alpha.UpdateVoicemailFlagReadRes
 */
export const UpdateVoicemailFlagReadRes = proto3.makeMessageType(
  "api.v0alpha.UpdateVoicemailFlagReadRes",
  () => [
    { no: 1, name: "flag_read", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message api.v0alpha.DownloadMessageReq
 */
export const DownloadMessageReq = proto3.makeMessageType(
  "api.v0alpha.DownloadMessageReq",
  () => [
    { no: 2, name: "mail_box", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "caller_sid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "caller_type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
  ],
);

/**
 * @generated from message api.v0alpha.DownloadMessageRes
 */
export const DownloadMessageRes = proto3.makeMessageType(
  "api.v0alpha.DownloadMessageRes",
  () => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.GetUploadGreetingUrlReq
 */
export const GetUploadGreetingUrlReq = proto3.makeMessageType(
  "api.v0alpha.GetUploadGreetingUrlReq",
  () => [
    { no: 2, name: "pbx_extension", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "filename", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.GetUploadGreetingUrlRes
 */
export const GetUploadGreetingUrlRes = proto3.makeMessageType(
  "api.v0alpha.GetUploadGreetingUrlRes",
  () => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.DownloadMessagesReq
 */
export const DownloadMessagesReq = proto3.makeMessageType(
  "api.v0alpha.DownloadMessagesReq",
  () => [
    { no: 2, name: "mail_boxes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "unheard_only", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message api.v0alpha.DownloadMessagesRes
 */
export const DownloadMessagesRes = proto3.makeMessageType(
  "api.v0alpha.DownloadMessagesRes",
  () => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.DownloadGreetingForExtensionReq
 */
export const DownloadGreetingForExtensionReq = proto3.makeMessageType(
  "api.v0alpha.DownloadGreetingForExtensionReq",
  () => [
    { no: 2, name: "mail_box", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.DownloadGreetingForExtensionRes
 */
export const DownloadGreetingForExtensionRes = proto3.makeMessageType(
  "api.v0alpha.DownloadGreetingForExtensionRes",
  () => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.DownloadGreetingReq
 */
export const DownloadGreetingReq = proto3.makeMessageType(
  "api.v0alpha.DownloadGreetingReq",
  () => [
    { no: 2, name: "filename", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.DownloadGreetingRes
 */
export const DownloadGreetingRes = proto3.makeMessageType(
  "api.v0alpha.DownloadGreetingRes",
  () => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.ProcessGreetingUploadReq
 */
export const ProcessGreetingUploadReq = proto3.makeMessageType(
  "api.v0alpha.ProcessGreetingUploadReq",
  () => [
    { no: 2, name: "pbx_extension", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "filename", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.ProcessGreetingUploadRes
 */
export const ProcessGreetingUploadRes = proto3.makeMessageType(
  "api.v0alpha.ProcessGreetingUploadRes",
  [],
);

/**
 * @generated from message api.v0alpha.UpdateGreetingForExtensionReq
 */
export const UpdateGreetingForExtensionReq = proto3.makeMessageType(
  "api.v0alpha.UpdateGreetingForExtensionReq",
  () => [
    { no: 2, name: "pbx_extension", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "filename", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.UpdateGreetingForExtensionRes
 */
export const UpdateGreetingForExtensionRes = proto3.makeMessageType(
  "api.v0alpha.UpdateGreetingForExtensionRes",
  [],
);

/**
 * @generated from message api.v0alpha.ListAvailableGreetingsReq
 */
export const ListAvailableGreetingsReq = proto3.makeMessageType(
  "api.v0alpha.ListAvailableGreetingsReq",
  [],
);

/**
 * @generated from message api.v0alpha.ListAvailableGreetingsRes
 */
export const ListAvailableGreetingsRes = proto3.makeMessageType(
  "api.v0alpha.ListAvailableGreetingsRes",
  () => [
    { no: 1, name: "greetings", kind: "message", T: ListAvailableGreetingsRes_FileInfo, repeated: true },
  ],
);

/**
 * @generated from message api.v0alpha.ListAvailableGreetingsRes.FileInfo
 */
export const ListAvailableGreetingsRes_FileInfo = proto3.makeMessageType(
  "api.v0alpha.ListAvailableGreetingsRes.FileInfo",
  () => [
    { no: 1, name: "filename", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "size", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
  {localName: "ListAvailableGreetingsRes_FileInfo"},
);

