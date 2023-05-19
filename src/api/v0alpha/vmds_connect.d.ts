// @generated by protoc-gen-connect-es v0.9.0
// @generated from file api/v0alpha/vmds.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DeleteGreetingReq, DeleteGreetingRes, DeleteVoicemailReq, DeleteVoicemailRes, DownloadGreetingForExtensionReq, DownloadGreetingForExtensionRes, DownloadGreetingReq, DownloadGreetingRes, DownloadMessageReq, DownloadMessageRes, DownloadMessagesReq, DownloadMessagesRes, GetUploadGreetingUrlReq, GetUploadGreetingUrlRes, GetVoicemailCountReq, GetVoicemailCountRes, GetVoicemailMetadataReq, GetVoicemailMetadataRes, ListAvailableGreetingsReq, ListAvailableGreetingsRes, ProcessGreetingUploadReq, ProcessGreetingUploadRes, UpdateGreetingForExtensionReq, UpdateGreetingForExtensionRes, UpdateUploadNameReq, UpdateUploadNameRes, UpdateVoicemailFlagReadReq, UpdateVoicemailFlagReadRes } from "./vmds_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v0alpha.Vmds
 */
export declare const Vmds: {
  readonly typeName: "api.v0alpha.Vmds",
  readonly methods: {
    /**
     * @generated from rpc api.v0alpha.Vmds.GetVoicemailMetadata
     */
    readonly getVoicemailMetadata: {
      readonly name: "GetVoicemailMetadata",
      readonly I: typeof GetVoicemailMetadataReq,
      readonly O: typeof GetVoicemailMetadataRes,
      readonly kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc api.v0alpha.Vmds.GetVoicemailMessageCount
     */
    readonly getVoicemailMessageCount: {
      readonly name: "GetVoicemailMessageCount",
      readonly I: typeof GetVoicemailCountReq,
      readonly O: typeof GetVoicemailCountRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Vmds.DeleteVoicemail
     */
    readonly deleteVoicemail: {
      readonly name: "DeleteVoicemail",
      readonly I: typeof DeleteVoicemailReq,
      readonly O: typeof DeleteVoicemailRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Vmds.DeleteGreeting
     */
    readonly deleteGreeting: {
      readonly name: "DeleteGreeting",
      readonly I: typeof DeleteGreetingReq,
      readonly O: typeof DeleteGreetingRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Vmds.UpdateUploadName
     */
    readonly updateUploadName: {
      readonly name: "UpdateUploadName",
      readonly I: typeof UpdateUploadNameReq,
      readonly O: typeof UpdateUploadNameRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Vmds.UpdateVoicemailFlagRead
     */
    readonly updateVoicemailFlagRead: {
      readonly name: "UpdateVoicemailFlagRead",
      readonly I: typeof UpdateVoicemailFlagReadReq,
      readonly O: typeof UpdateVoicemailFlagReadRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Vmds.DownloadMessage
     */
    readonly downloadMessage: {
      readonly name: "DownloadMessage",
      readonly I: typeof DownloadMessageReq,
      readonly O: typeof DownloadMessageRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Vmds.DownloadMessages
     */
    readonly downloadMessages: {
      readonly name: "DownloadMessages",
      readonly I: typeof DownloadMessagesReq,
      readonly O: typeof DownloadMessagesRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Vmds.DownloadGreetingForExtension
     */
    readonly downloadGreetingForExtension: {
      readonly name: "DownloadGreetingForExtension",
      readonly I: typeof DownloadGreetingForExtensionReq,
      readonly O: typeof DownloadGreetingForExtensionRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Vmds.DownloadGreeting
     */
    readonly downloadGreeting: {
      readonly name: "DownloadGreeting",
      readonly I: typeof DownloadGreetingReq,
      readonly O: typeof DownloadGreetingRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Vmds.GetUploadGreetingUrl
     */
    readonly getUploadGreetingUrl: {
      readonly name: "GetUploadGreetingUrl",
      readonly I: typeof GetUploadGreetingUrlReq,
      readonly O: typeof GetUploadGreetingUrlRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Vmds.ProcessGreetingUpload
     */
    readonly processGreetingUpload: {
      readonly name: "ProcessGreetingUpload",
      readonly I: typeof ProcessGreetingUploadReq,
      readonly O: typeof ProcessGreetingUploadRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Vmds.UpdateGreetingForExtension
     */
    readonly updateGreetingForExtension: {
      readonly name: "UpdateGreetingForExtension",
      readonly I: typeof UpdateGreetingForExtensionReq,
      readonly O: typeof UpdateGreetingForExtensionRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Vmds.ListAvailableGreetings
     */
    readonly listAvailableGreetings: {
      readonly name: "ListAvailableGreetings",
      readonly I: typeof ListAvailableGreetingsReq,
      readonly O: typeof ListAvailableGreetingsRes,
      readonly kind: MethodKind.Unary,
    },
  }
};

