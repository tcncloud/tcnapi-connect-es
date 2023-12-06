// @generated by protoc-gen-es v1.5.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/org/labels.proto (package api.v1alpha1.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { EntityType } from "../../commons/labels_pb.js";
import { Permission } from "../../commons/auth/perms_pb.js";

/**
 * Label is an entity message.
 *
 * @generated from message api.v1alpha1.org.Label
 */
export const Label = proto3.makeMessageType(
  "api.v1alpha1.org.Label",
  () => [
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "label_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "deleted", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Request message for the CreateLabel rpc.
 *
 * @generated from message api.v1alpha1.org.CreateLabelRequest
 */
export const CreateLabelRequest = proto3.makeMessageType(
  "api.v1alpha1.org.CreateLabelRequest",
  () => [
    { no: 1, name: "label", kind: "message", T: Label },
  ],
);

/**
 * Response message for the CreateLabel rpc.
 *
 * @generated from message api.v1alpha1.org.CreateLabelResponse
 */
export const CreateLabelResponse = proto3.makeMessageType(
  "api.v1alpha1.org.CreateLabelResponse",
  () => [
    { no: 1, name: "label_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Request message for the DeleteLabel rpc.
 *
 * @generated from message api.v1alpha1.org.DeleteLabelRequest
 */
export const DeleteLabelRequest = proto3.makeMessageType(
  "api.v1alpha1.org.DeleteLabelRequest",
  () => [
    { no: 2, name: "label_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the DeleteLabel rpc.
 *
 * @generated from message api.v1alpha1.org.DeleteLabelResponse
 */
export const DeleteLabelResponse = proto3.makeMessageType(
  "api.v1alpha1.org.DeleteLabelResponse",
  [],
);

/**
 * Request message for the ListLabels rpc.
 *
 * @generated from message api.v1alpha1.org.ListLabelsRequest
 */
export const ListLabelsRequest = proto3.makeMessageType(
  "api.v1alpha1.org.ListLabelsRequest",
  [],
);

/**
 * Response message for the ListLabels rpc.
 *
 * @generated from message api.v1alpha1.org.ListLabelsResponse
 */
export const ListLabelsResponse = proto3.makeMessageType(
  "api.v1alpha1.org.ListLabelsResponse",
  () => [
    { no: 1, name: "labels", kind: "message", T: Label, repeated: true },
  ],
);

/**
 * Request message for the GetLabel RPC.
 *
 * @generated from message api.v1alpha1.org.GetLabelRequest
 */
export const GetLabelRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetLabelRequest",
  () => [
    { no: 2, name: "label_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the GetLabel RPC.
 *
 * @generated from message api.v1alpha1.org.GetLabelResponse
 */
export const GetLabelResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetLabelResponse",
  () => [
    { no: 1, name: "label", kind: "message", T: Label },
  ],
);

/**
 * Request message for the UpdateLabel RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateLabelRequest
 */
export const UpdateLabelRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateLabelRequest",
  () => [
    { no: 1, name: "label", kind: "message", T: Label },
  ],
);

/**
 * Response message for the UpdateLabel RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateLabelResponse
 */
export const UpdateLabelResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateLabelResponse",
  [],
);

/**
 * Entity message for a label assignment.
 *
 * @generated from message api.v1alpha1.org.LabelAssignment
 */
export const LabelAssignment = proto3.makeMessageType(
  "api.v1alpha1.org.LabelAssignment",
  () => [
    { no: 1, name: "label_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(EntityType) },
    { no: 3, name: "entity_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "label", kind: "message", T: Label },
  ],
);

/**
 * Request message for the AssignLabel RPC.
 *
 * @generated from message api.v1alpha1.org.AssignLabelRequest
 */
export const AssignLabelRequest = proto3.makeMessageType(
  "api.v1alpha1.org.AssignLabelRequest",
  () => [
    { no: 2, name: "assignments", kind: "message", T: LabelAssignment, repeated: true },
  ],
);

/**
 * Response message for the AssingLabel RPC.
 *
 * @generated from message api.v1alpha1.org.AssignLabelResponse
 */
export const AssignLabelResponse = proto3.makeMessageType(
  "api.v1alpha1.org.AssignLabelResponse",
  [],
);

/**
 * Request message for the UnassignLabel RPC.
 *
 * @generated from message api.v1alpha1.org.UnassignLabelRequest
 */
export const UnassignLabelRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UnassignLabelRequest",
  () => [
    { no: 2, name: "assignments", kind: "message", T: LabelAssignment, repeated: true },
  ],
);

/**
 * Response message for the UnassingLabel RPC.
 *
 * @generated from message api.v1alpha1.org.UnassignLabelResponse
 */
export const UnassignLabelResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UnassignLabelResponse",
  [],
);

/**
 * Reqeust message for the GetAssignmentCounts RPC.
 *
 * @generated from message api.v1alpha1.org.GetAssignmentCountsRequest
 */
export const GetAssignmentCountsRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetAssignmentCountsRequest",
  () => [
    { no: 1, name: "label_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the GetASsignmentCounts RPC.
 *
 * @generated from message api.v1alpha1.org.GetAssignmentCountsResponse
 */
export const GetAssignmentCountsResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetAssignmentCountsResponse",
  () => [
    { no: 1, name: "counts", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "scalar", T: 3 /* ScalarType.INT64 */} },
  ],
);

/**
 * Request message for the GetAssignableLabels RPC.
 *
 * @generated from message api.v1alpha1.org.GetAssignableLabelsRequest
 */
export const GetAssignableLabelsRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetAssignableLabelsRequest",
  () => [
    { no: 1, name: "permission", kind: "enum", T: proto3.getEnumType(Permission) },
  ],
);

/**
 * Response message for the GetAssignableLabels RPC.
 *
 * @generated from message api.v1alpha1.org.GetAssignableLabelsResponse
 */
export const GetAssignableLabelsResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetAssignableLabelsResponse",
  () => [
    { no: 1, name: "labels", kind: "message", T: Label, repeated: true },
  ],
);

