// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v1alpha1/classifier/service.proto (package api.v1alpha1.classifier, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DeleteFileTemplateRequest, DeleteFileTemplateResponse, GetFileTemplateRequest, GetFileTemplateResponse, ListFileTemplatesRequest, ListFileTemplatesResponse, ParseFileRequest, ParseFileResponse, UpdateFileTemplateRequest, UpdateFileTemplateResponse } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1alpha1.classifier.ClassifierFileTemplates
 */
export const ClassifierFileTemplates = {
  typeName: "api.v1alpha1.classifier.ClassifierFileTemplates",
  methods: {
    /**
     * @generated from rpc api.v1alpha1.classifier.ClassifierFileTemplates.ParseFile
     */
    parseFile: {
      name: "ParseFile",
      I: ParseFileRequest,
      O: ParseFileResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.classifier.ClassifierFileTemplates.UpdateFileTemplate
     */
    updateFileTemplate: {
      name: "UpdateFileTemplate",
      I: UpdateFileTemplateRequest,
      O: UpdateFileTemplateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.classifier.ClassifierFileTemplates.DeleteFileTemplate
     */
    deleteFileTemplate: {
      name: "DeleteFileTemplate",
      I: DeleteFileTemplateRequest,
      O: DeleteFileTemplateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.classifier.ClassifierFileTemplates.ListFileTemplates
     */
    listFileTemplates: {
      name: "ListFileTemplates",
      I: ListFileTemplatesRequest,
      O: ListFileTemplatesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.classifier.ClassifierFileTemplates.GetFileTemplate
     */
    getFileTemplate: {
      name: "GetFileTemplate",
      I: GetFileTemplateRequest,
      O: GetFileTemplateResponse,
      kind: MethodKind.Unary,
    },
  }
};

