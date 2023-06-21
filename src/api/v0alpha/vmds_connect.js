// @generated by protoc-gen-connect-es v0.10.1
// @generated from file api/v0alpha/vmds.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DeleteGreetingReq, DeleteGreetingRes, DeleteVoicemailReq, DeleteVoicemailRes, DownloadGreetingForExtensionReq, DownloadGreetingForExtensionRes, DownloadGreetingReq, DownloadGreetingRes, DownloadMessageReq, DownloadMessageRes, DownloadMessagesReq, DownloadMessagesRes, GetUploadGreetingUrlReq, GetUploadGreetingUrlRes, GetVoicemailCountReq, GetVoicemailCountRes, GetVoicemailMetadataReq, GetVoicemailMetadataRes, ListAvailableGreetingsReq, ListAvailableGreetingsRes, ProcessGreetingUploadReq, ProcessGreetingUploadRes, UpdateGreetingForExtensionReq, UpdateGreetingForExtensionRes, UpdateUploadNameReq, UpdateUploadNameRes, UpdateVoicemailFlagReadReq, UpdateVoicemailFlagReadRes } from "./vmds_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v0alpha.Vmds
 */
export const Vmds = {
  typeName: "api.v0alpha.Vmds",
  methods: {
    /**
     * @generated from rpc api.v0alpha.Vmds.GetVoicemailMetadata
     */
    getVoicemailMetadata: {
      name: "GetVoicemailMetadata",
      I: GetVoicemailMetadataReq,
      O: GetVoicemailMetadataRes,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc api.v0alpha.Vmds.GetVoicemailMessageCount
     */
    getVoicemailMessageCount: {
      name: "GetVoicemailMessageCount",
      I: GetVoicemailCountReq,
      O: GetVoicemailCountRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Vmds.DeleteVoicemail
     */
    deleteVoicemail: {
      name: "DeleteVoicemail",
      I: DeleteVoicemailReq,
      O: DeleteVoicemailRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Vmds.DeleteGreeting
     */
    deleteGreeting: {
      name: "DeleteGreeting",
      I: DeleteGreetingReq,
      O: DeleteGreetingRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Vmds.UpdateUploadName
     */
    updateUploadName: {
      name: "UpdateUploadName",
      I: UpdateUploadNameReq,
      O: UpdateUploadNameRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Vmds.UpdateVoicemailFlagRead
     */
    updateVoicemailFlagRead: {
      name: "UpdateVoicemailFlagRead",
      I: UpdateVoicemailFlagReadReq,
      O: UpdateVoicemailFlagReadRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Vmds.DownloadMessage
     */
    downloadMessage: {
      name: "DownloadMessage",
      I: DownloadMessageReq,
      O: DownloadMessageRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Vmds.DownloadMessages
     */
    downloadMessages: {
      name: "DownloadMessages",
      I: DownloadMessagesReq,
      O: DownloadMessagesRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Vmds.DownloadGreetingForExtension
     */
    downloadGreetingForExtension: {
      name: "DownloadGreetingForExtension",
      I: DownloadGreetingForExtensionReq,
      O: DownloadGreetingForExtensionRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Vmds.DownloadGreeting
     */
    downloadGreeting: {
      name: "DownloadGreeting",
      I: DownloadGreetingReq,
      O: DownloadGreetingRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Vmds.GetUploadGreetingUrl
     */
    getUploadGreetingUrl: {
      name: "GetUploadGreetingUrl",
      I: GetUploadGreetingUrlReq,
      O: GetUploadGreetingUrlRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Vmds.ProcessGreetingUpload
     */
    processGreetingUpload: {
      name: "ProcessGreetingUpload",
      I: ProcessGreetingUploadReq,
      O: ProcessGreetingUploadRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Vmds.UpdateGreetingForExtension
     */
    updateGreetingForExtension: {
      name: "UpdateGreetingForExtension",
      I: UpdateGreetingForExtensionReq,
      O: UpdateGreetingForExtensionRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Vmds.ListAvailableGreetings
     */
    listAvailableGreetings: {
      name: "ListAvailableGreetings",
      I: ListAvailableGreetingsReq,
      O: ListAvailableGreetingsRes,
      kind: MethodKind.Unary,
    },
  }
};

