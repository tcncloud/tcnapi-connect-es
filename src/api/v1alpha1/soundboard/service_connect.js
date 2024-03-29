// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v1alpha1/soundboard/service.proto (package api.v1alpha1.soundboard, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateSoundboardReq, CreateSoundboardRes, DeleteSoundboardReq, DeleteSoundboardRes, GetSoundboardFileReq, GetSoundboardFileRes, ListSoundboardsReq, ListSoundboardsRes, UpdateSoundboardReq, UpdateSoundboardRes } from "./entities_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1alpha1.soundboard.Soundboard
 */
export const Soundboard = {
  typeName: "api.v1alpha1.soundboard.Soundboard",
  methods: {
    /**
     * GetSoundboardFile streams back segments of the audio file stored in rec
     * corresponding to the provided soundboard id and org id.
     *
     * @generated from rpc api.v1alpha1.soundboard.Soundboard.GetSoundboardFile
     */
    getSoundboardFile: {
      name: "GetSoundboardFile",
      I: GetSoundboardFileReq,
      O: GetSoundboardFileRes,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * CreateSoundboard takes in a stream of metadata and audio file segments.
     * The first expected message should contain SoundboardDetails, then following
     * messages will be chunks of audio file data, which is then aggregated and put
     * into rec. The generated soundboard id is returned.
     *
     * @generated from rpc api.v1alpha1.soundboard.Soundboard.CreateSoundboard
     */
    createSoundboard: {
      name: "CreateSoundboard",
      I: CreateSoundboardReq,
      O: CreateSoundboardRes,
      kind: MethodKind.Unary,
    },
    /**
     * ListSoundboards returns all of the metadata for soundboards corresponding
     * corresponding to a given org id.
     *
     * @generated from rpc api.v1alpha1.soundboard.Soundboard.ListSoundboards
     */
    listSoundboards: {
      name: "ListSoundboards",
      I: ListSoundboardsReq,
      O: ListSoundboardsRes,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateSondboard updates a soundboard's metadata in the soundboard table.
     *
     * @generated from rpc api.v1alpha1.soundboard.Soundboard.UpdateSoundboard
     */
    updateSoundboard: {
      name: "UpdateSoundboard",
      I: UpdateSoundboardReq,
      O: UpdateSoundboardRes,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteSondboard deletes a soundboard's metadata from the soundboard table.
     *
     * @generated from rpc api.v1alpha1.soundboard.Soundboard.DeleteSoundboard
     */
    deleteSoundboard: {
      name: "DeleteSoundboard",
      I: DeleteSoundboardReq,
      O: DeleteSoundboardRes,
      kind: MethodKind.Unary,
    },
  }
};

