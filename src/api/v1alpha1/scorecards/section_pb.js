// @generated by protoc-gen-es v1.4.2 with parameter "target=js+dts"
// @generated from file api/v1alpha1/scorecards/section.proto (package api.v1alpha1.scorecards, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3 } from "@bufbuild/protobuf";
import { Section } from "../../commons/scorecards_pb.js";

/**
 * CreateSectionRequest is the request to create a new section.
 *
 * @generated from message api.v1alpha1.scorecards.CreateSectionRequest
 */
export const CreateSectionRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.CreateSectionRequest",
  () => [
    { no: 1, name: "section", kind: "message", T: Section },
  ],
);

/**
 * CreateSectionResponse returns the created section.
 *
 * @generated from message api.v1alpha1.scorecards.CreateSectionResponse
 */
export const CreateSectionResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.CreateSectionResponse",
  () => [
    { no: 1, name: "section", kind: "message", T: Section },
  ],
);

/**
 * ListSectionsRequest is request to list sections by scorecard id.
 *
 * @generated from message api.v1alpha1.scorecards.ListSectionsRequest
 */
export const ListSectionsRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.ListSectionsRequest",
  () => [
    { no: 2, name: "scorecard_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * ListSectionsResponse returns a list of sections.
 *
 * @generated from message api.v1alpha1.scorecards.ListSectionsResponse
 */
export const ListSectionsResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.ListSectionsResponse",
  () => [
    { no: 1, name: "sections", kind: "message", T: Section, repeated: true },
  ],
);

/**
 * UpdateSectionRequest is the request to update a section.
 *
 * @generated from message api.v1alpha1.scorecards.UpdateSectionRequest
 */
export const UpdateSectionRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.UpdateSectionRequest",
  () => [
    { no: 1, name: "section", kind: "message", T: Section },
    { no: 2, name: "update_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * UpdateSectionResponse returns the updated section.
 *
 * @generated from message api.v1alpha1.scorecards.UpdateSectionResponse
 */
export const UpdateSectionResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.UpdateSectionResponse",
  () => [
    { no: 1, name: "section", kind: "message", T: Section },
  ],
);

/**
 * DeleteSectionRequest is the request to delete a section.
 *
 * @generated from message api.v1alpha1.scorecards.DeleteSectionRequest
 */
export const DeleteSectionRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.DeleteSectionRequest",
  () => [
    { no: 2, name: "section_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * DeleteSectionResponse returns the deleted section.
 *
 * @generated from message api.v1alpha1.scorecards.DeleteSectionResponse
 */
export const DeleteSectionResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.DeleteSectionResponse",
  () => [
    { no: 1, name: "section", kind: "message", T: Section },
  ],
);

/**
 * GetSectionRequest is the request to get a section.
 *
 * @generated from message api.v1alpha1.scorecards.GetSectionRequest
 */
export const GetSectionRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.GetSectionRequest",
  () => [
    { no: 2, name: "section_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * GetSectionResponse is the response to getting a section.
 *
 * @generated from message api.v1alpha1.scorecards.GetSectionResponse
 */
export const GetSectionResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.GetSectionResponse",
  () => [
    { no: 1, name: "section", kind: "message", T: Section },
  ],
);

