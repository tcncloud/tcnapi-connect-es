// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v1alpha1/lms/api.proto (package api.v1alpha1.lms, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DeleteFileTemplateRequest, DeleteFileTemplateResponse, GetFileTemplateRequest, GetFileTemplateResponse, ListFileTemplatesRequest, ListFileTemplatesResponse, ParseFileTemplateRequest, ParseFileTemplateResult, UpdateFileTemplateRequest, UpdateFileTemplateResponse } from "./api_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1alpha1.lms.LMS
 */
export declare const LMS: {
  readonly typeName: "api.v1alpha1.lms.LMS",
  readonly methods: {
    /**
     * @generated from rpc api.v1alpha1.lms.LMS.DeleteFileTemplate
     */
    readonly deleteFileTemplate: {
      readonly name: "DeleteFileTemplate",
      readonly I: typeof DeleteFileTemplateRequest,
      readonly O: typeof DeleteFileTemplateResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.lms.LMS.GetFileTemplate
     */
    readonly getFileTemplate: {
      readonly name: "GetFileTemplate",
      readonly I: typeof GetFileTemplateRequest,
      readonly O: typeof GetFileTemplateResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.lms.LMS.ListFileTemplates
     */
    readonly listFileTemplates: {
      readonly name: "ListFileTemplates",
      readonly I: typeof ListFileTemplatesRequest,
      readonly O: typeof ListFileTemplatesResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.lms.LMS.ParseFileTemplate
     */
    readonly parseFileTemplate: {
      readonly name: "ParseFileTemplate",
      readonly I: typeof ParseFileTemplateRequest,
      readonly O: typeof ParseFileTemplateResult,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.lms.LMS.UpdateFileTemplate
     */
    readonly updateFileTemplate: {
      readonly name: "UpdateFileTemplate",
      readonly I: typeof UpdateFileTemplateRequest,
      readonly O: typeof UpdateFileTemplateResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

