// @generated by protoc-gen-es v1.5.0 with parameter "target=js+dts"
// @generated from file api/commons/user.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * Facilitate user filtering on archived state
 *
 * @generated from enum api.commons.UserArchivedStateFilter
 */
export const UserArchivedStateFilter = proto3.makeEnum(
  "api.commons.UserArchivedStateFilter",
  [
    {no: 0, name: "USER_ARCHIVED_STATE_FILTER_ALL", localName: "ALL"},
    {no: 1, name: "USER_ARCHIVED_STATE_FILTER_ARCHIVED", localName: "ARCHIVED"},
    {no: 2, name: "USER_ARCHIVED_STATE_FILTER_UNARCHIVED", localName: "UNARCHIVED"},
  ],
);

