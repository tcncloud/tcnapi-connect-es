// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v1alpha1/lms/api.proto (package api.v1alpha1.lms, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DeleteFileTemplateRequest, DeleteFileTemplateResponse, GetFileTemplateRequest, GetFileTemplateResponse, ListFileTemplatesRequest, ListFileTemplatesResponse, ParseFileTemplateRequest, ParseFileTemplateResult, UpdateFileTemplateRequest, UpdateFileTemplateResponse } from "./api_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1alpha1.lms.LMS
 */
export const LMS = {
  typeName: "api.v1alpha1.lms.LMS",
  methods: {
    /**
     * @generated from rpc api.v1alpha1.lms.LMS.DeleteFileTemplate
     */
    deleteFileTemplate: {
      name: "DeleteFileTemplate",
      I: DeleteFileTemplateRequest,
      O: DeleteFileTemplateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.lms.LMS.GetFileTemplate
     */
    getFileTemplate: {
      name: "GetFileTemplate",
      I: GetFileTemplateRequest,
      O: GetFileTemplateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.lms.LMS.ListFileTemplates
     */
    listFileTemplates: {
      name: "ListFileTemplates",
      I: ListFileTemplatesRequest,
      O: ListFileTemplatesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.lms.LMS.ParseFileTemplate
     */
    parseFileTemplate: {
      name: "ParseFileTemplate",
      I: ParseFileTemplateRequest,
      O: ParseFileTemplateResult,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.lms.LMS.UpdateFileTemplate
     */
    updateFileTemplate: {
      name: "UpdateFileTemplate",
      I: UpdateFileTemplateRequest,
      O: UpdateFileTemplateResponse,
      kind: MethodKind.Unary,
    },
  }
};

