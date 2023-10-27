// @generated by protoc-gen-es v1.4.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/soundboard/entities.proto (package api.v1alpha1.soundboard, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { RecordingFileType } from "../../commons/org_pb.js";

/**
 * SoundboardDetails is the core entity which contains metadata for soundboard
 * audio files, along with their identifiers.
 *
 * @generated from message api.v1alpha1.soundboard.SoundboardDetails
 */
export const SoundboardDetails = proto3.makeMessageType(
  "api.v1alpha1.soundboard.SoundboardDetails",
  () => [
    { no: 1, name: "soundboard_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "file_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "file_type", kind: "enum", T: proto3.getEnumType(RecordingFileType) },
    { no: 4, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "date_created", kind: "message", T: Timestamp },
    { no: 7, name: "last_modified", kind: "message", T: Timestamp },
    { no: 8, name: "file_size", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 9, name: "recording_length", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * Request message for the GetSoundboardFile RPC method.
 *
 * @generated from message api.v1alpha1.soundboard.GetSoundboardFileReq
 */
export const GetSoundboardFileReq = proto3.makeMessageType(
  "api.v1alpha1.soundboard.GetSoundboardFileReq",
  () => [
    { no: 1, name: "soundboard_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
  ],
);

/**
 * Response message for the GetSoundboardFile RPC method.
 *
 * @generated from message api.v1alpha1.soundboard.GetSoundboardFileRes
 */
export const GetSoundboardFileRes = proto3.makeMessageType(
  "api.v1alpha1.soundboard.GetSoundboardFileRes",
  () => [
    { no: 1, name: "soundboard_file", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * Request message for the GetSoundboard RPC method.
 *
 * @generated from message api.v1alpha1.soundboard.GetSoundboardReq
 */
export const GetSoundboardReq = proto3.makeMessageType(
  "api.v1alpha1.soundboard.GetSoundboardReq",
  () => [
    { no: 1, name: "soundboard_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
  ],
);

/**
 * Response message for the GetSoundboard RPC method.
 *
 * @generated from message api.v1alpha1.soundboard.GetSoundboardRes
 */
export const GetSoundboardRes = proto3.makeMessageType(
  "api.v1alpha1.soundboard.GetSoundboardRes",
  () => [
    { no: 1, name: "soundboard", kind: "message", T: SoundboardDetails },
  ],
);

/**
 * Request message for the CreateSoundboard RPC method.
 *
 * @generated from message api.v1alpha1.soundboard.CreateSoundboardReq
 */
export const CreateSoundboardReq = proto3.makeMessageType(
  "api.v1alpha1.soundboard.CreateSoundboardReq",
  () => [
    { no: 1, name: "soundboard", kind: "message", T: SoundboardDetails },
    { no: 2, name: "fts_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the CreateSoundboard RPC method.
 *
 * @generated from message api.v1alpha1.soundboard.CreateSoundboardRes
 */
export const CreateSoundboardRes = proto3.makeMessageType(
  "api.v1alpha1.soundboard.CreateSoundboardRes",
  () => [
    { no: 1, name: "soundboard_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "fts_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Request message for the ListSoundboards RPC method.
 *
 * @generated from message api.v1alpha1.soundboard.ListSoundboardsReq
 */
export const ListSoundboardsReq = proto3.makeMessageType(
  "api.v1alpha1.soundboard.ListSoundboardsReq",
  [],
);

/**
 * Response message for the ListSoundboards RPC method.
 *
 * @generated from message api.v1alpha1.soundboard.ListSoundboardsRes
 */
export const ListSoundboardsRes = proto3.makeMessageType(
  "api.v1alpha1.soundboard.ListSoundboardsRes",
  () => [
    { no: 1, name: "soundboards", kind: "message", T: SoundboardDetails, repeated: true },
  ],
);

/**
 * Request message for the UpdateSoundboard RPC method.
 *
 * @generated from message api.v1alpha1.soundboard.UpdateSoundboardReq
 */
export const UpdateSoundboardReq = proto3.makeMessageType(
  "api.v1alpha1.soundboard.UpdateSoundboardReq",
  () => [
    { no: 1, name: "soundboard", kind: "message", T: SoundboardDetails },
  ],
);

/**
 * Response message for the UpdateSoundboard RPC method.
 *
 * @generated from message api.v1alpha1.soundboard.UpdateSoundboardRes
 */
export const UpdateSoundboardRes = proto3.makeMessageType(
  "api.v1alpha1.soundboard.UpdateSoundboardRes",
  () => [
    { no: 1, name: "soundboard_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
  ],
);

/**
 * Request message for the DeleteSoundboard RPC method.
 *
 * @generated from message api.v1alpha1.soundboard.DeleteSoundboardReq
 */
export const DeleteSoundboardReq = proto3.makeMessageType(
  "api.v1alpha1.soundboard.DeleteSoundboardReq",
  () => [
    { no: 1, name: "soundboard_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
  ],
);

/**
 * Response message for the DeleteSoundboard RPC method.
 *
 * @generated from message api.v1alpha1.soundboard.DeleteSoundboardRes
 */
export const DeleteSoundboardRes = proto3.makeMessageType(
  "api.v1alpha1.soundboard.DeleteSoundboardRes",
  [],
);

