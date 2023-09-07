// @generated by protoc-gen-es v1.3.1 with parameter "target=js+dts"
// @generated from file api/commons/newsroom.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * newsroom article statuses -
 *
 * @generated from enum api.commons.ArticleStatus
 */
export const ArticleStatus = proto3.makeEnum(
  "api.commons.ArticleStatus",
  [
    {no: 0, name: "STATUS_DRAFT"},
    {no: 1, name: "STATUS_PUBLISHED"},
    {no: 2, name: "STATUS_ARCHIVED"},
  ],
);
