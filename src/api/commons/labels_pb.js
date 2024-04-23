// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/commons/labels.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * EntityType is used to determine what type of Entity
 * a label is assigned to.
 * The values of these enums MUST match up with the core.EntityType
 * iota in the labels app.
 *
 * @generated from enum api.commons.EntityType
 */
export const EntityType = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.EntityType",
  [
    {no: 0, name: "ENTITY_TYPE_INVALID", localName: "INVALID"},
    {no: 1, name: "ENTITY_TYPE_USER", localName: "USER"},
    {no: 2, name: "ENTITY_TYPE_LMS_PIPELINE", localName: "LMS_PIPELINE"},
  ],
);

