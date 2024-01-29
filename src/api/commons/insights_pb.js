// @generated by protoc-gen-es v1.7.1 with parameter "target=js+dts"
// @generated from file api/commons/insights.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.InsightPermissionType
 */
export const InsightPermissionType = proto3.makeEnum(
  "api.commons.InsightPermissionType",
  [
    {no: 0, name: "INSIGHT_PERMISSION_TYPE_COMMON_LIBRARY", localName: "COMMON_LIBRARY"},
    {no: 1, name: "INSIGHT_PERMISSION_TYPE_ORG", localName: "ORG"},
  ],
);

/**
 * @generated from enum api.commons.InsightType
 */
export const InsightType = proto3.makeEnum(
  "api.commons.InsightType",
  [
    {no: 0, name: "INSIGHT_TYPE_TABLE_VIEW", localName: "TABLE_VIEW"},
  ],
);

/**
 * InsightVfsSchemaType is enum for column types in a vfs
 *
 * @generated from enum api.commons.InsightVfsSchemaType
 */
export const InsightVfsSchemaType = proto3.makeEnum(
  "api.commons.InsightVfsSchemaType",
  [
    {no: 0, name: "INSIGHT_VFS_SCHEMA_TYPE_STRING", localName: "STRING"},
    {no: 1, name: "INSIGHT_VFS_SCHEMA_TYPE_INT64", localName: "INT64"},
    {no: 2, name: "INSIGHT_VFS_SCHEMA_TYPE_FLOAT64", localName: "FLOAT64"},
    {no: 3, name: "INSIGHT_VFS_SCHEMA_TYPE_BOOLEAN", localName: "BOOLEAN"},
    {no: 4, name: "INSIGHT_VFS_SCHEMA_TYPE_DATETIME", localName: "DATETIME"},
  ],
);

