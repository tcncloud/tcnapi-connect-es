// @generated by protoc-gen-es v1.8.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/lms/api.proto (package api.v1alpha1.lms, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { ExistingTemplate, FileTemplateV2, NewTemplate } from "./entities_pb.js";

/**
 * @generated from message api.v1alpha1.lms.DeleteFileTemplateRequest
 */
export const DeleteFileTemplateRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.lms.DeleteFileTemplateRequest",
  () => [
    { no: 1, name: "file_template", kind: "message", T: FileTemplateV2 },
  ],
);

/**
 * @generated from message api.v1alpha1.lms.DeleteFileTemplateResponse
 */
export const DeleteFileTemplateResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.lms.DeleteFileTemplateResponse",
  () => [
    { no: 1, name: "file_template", kind: "message", T: FileTemplateV2 },
  ],
);

/**
 * @generated from message api.v1alpha1.lms.GetFileTemplateRequest
 */
export const GetFileTemplateRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.lms.GetFileTemplateRequest",
  () => [
    { no: 1, name: "file_template", kind: "message", T: FileTemplateV2 },
  ],
);

/**
 * @generated from message api.v1alpha1.lms.GetFileTemplateResponse
 */
export const GetFileTemplateResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.lms.GetFileTemplateResponse",
  () => [
    { no: 1, name: "file_template", kind: "message", T: FileTemplateV2 },
  ],
);

/**
 * @generated from message api.v1alpha1.lms.ListFileTemplatesRequest
 */
export const ListFileTemplatesRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.lms.ListFileTemplatesRequest",
  () => [
    { no: 1, name: "value", kind: "message", T: FileTemplateV2 },
    { no: 2, name: "last_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message api.v1alpha1.lms.ListFileTemplatesResponse
 */
export const ListFileTemplatesResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.lms.ListFileTemplatesResponse",
  () => [
    { no: 1, name: "file_templates", kind: "message", T: FileTemplateV2, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.lms.ParseFileTemplateRequest
 */
export const ParseFileTemplateRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.lms.ParseFileTemplateRequest",
  () => [
    { no: 1, name: "new_template", kind: "message", T: NewTemplate, oneof: "retrieve_by" },
    { no: 2, name: "existing_template", kind: "message", T: ExistingTemplate, oneof: "retrieve_by" },
  ],
);

/**
 * @generated from message api.v1alpha1.lms.ParseFileTemplateResult
 */
export const ParseFileTemplateResult = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.lms.ParseFileTemplateResult",
  [],
);

/**
 * @generated from message api.v1alpha1.lms.UpdateFileTemplateRequest
 */
export const UpdateFileTemplateRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.lms.UpdateFileTemplateRequest",
  () => [
    { no: 1, name: "file_template", kind: "message", T: FileTemplateV2 },
  ],
);

/**
 * @generated from message api.v1alpha1.lms.UpdateFileTemplateResponse
 */
export const UpdateFileTemplateResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.lms.UpdateFileTemplateResponse",
  () => [
    { no: 1, name: "file_template", kind: "message", T: FileTemplateV2 },
  ],
);
