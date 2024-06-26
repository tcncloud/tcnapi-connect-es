// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/org/labels/entities.proto (package api.v1alpha1.org.labels, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3 } from "@bufbuild/protobuf";
import { Label } from "../../../commons/org/labels_pb.js";
import { LabeledEntity } from "../../../commons/labels_pb.js";

/**
 * Request message for the CreateLabel rpc.
 *
 * @generated from message api.v1alpha1.org.labels.CreateLabelRequest
 */
export const CreateLabelRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.labels.CreateLabelRequest",
  () => [
    { no: 1, name: "label", kind: "message", T: Label },
  ],
);

/**
 * Response message for the CreateLabel rpc.
 *
 * @generated from message api.v1alpha1.org.labels.CreateLabelResponse
 */
export const CreateLabelResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.labels.CreateLabelResponse",
  () => [
    { no: 1, name: "label_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Request message for the UpdateLabel rpc.
 *
 * @generated from message api.v1alpha1.org.labels.UpdateLabelRequest
 */
export const UpdateLabelRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.labels.UpdateLabelRequest",
  () => [
    { no: 1, name: "label", kind: "message", T: Label },
    { no: 3, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response message for the UpdateLabel rpc.
 *
 * @generated from message api.v1alpha1.org.labels.UpdateLabelResponse
 */
export const UpdateLabelResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.labels.UpdateLabelResponse",
  () => [
    { no: 1, name: "label", kind: "message", T: Label },
  ],
);

/**
 * Request message for the GetLabel rpc.
 *
 * @generated from message api.v1alpha1.org.labels.GetLabelRequest
 */
export const GetLabelRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.labels.GetLabelRequest",
  () => [
    { no: 1, name: "label_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the GetLabel rpc.
 *
 * @generated from message api.v1alpha1.org.labels.GetLabelResponse
 */
export const GetLabelResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.labels.GetLabelResponse",
  () => [
    { no: 1, name: "label", kind: "message", T: Label },
  ],
);

/**
 * Request message for the ListLabels rpc.
 *
 * @generated from message api.v1alpha1.org.labels.ListLabelsRequest
 */
export const ListLabelsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.labels.ListLabelsRequest",
  [],
);

/**
 * Response message for the ListLabels rpc.
 *
 * @generated from message api.v1alpha1.org.labels.ListLabelsResponse
 */
export const ListLabelsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.labels.ListLabelsResponse",
  () => [
    { no: 1, name: "label", kind: "message", T: Label, repeated: true },
  ],
);

/**
 * Request message for the DeleteLabel rpc.
 *
 * @generated from message api.v1alpha1.org.labels.DeleteLabelRequest
 */
export const DeleteLabelRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.labels.DeleteLabelRequest",
  () => [
    { no: 1, name: "label_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the DeleteLabel rpc.
 *
 * @generated from message api.v1alpha1.org.labels.DeleteLabelResponse
 */
export const DeleteLabelResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.labels.DeleteLabelResponse",
  [],
);

/**
 * Request message for the AttachLabel rpc.
 *
 * @generated from message api.v1alpha1.org.labels.AttachLabelRequest
 */
export const AttachLabelRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.labels.AttachLabelRequest",
  () => [
    { no: 1, name: "label_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "entity_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "entity_type", kind: "enum", T: proto3.getEnumType(LabeledEntity) },
  ],
);

/**
 * Response message for the AttachLabel rpc.
 *
 * @generated from message api.v1alpha1.org.labels.AttachLabelResponse
 */
export const AttachLabelResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.labels.AttachLabelResponse",
  [],
);

/**
 * Request message for the DetachLabel rpc.
 *
 * @generated from message api.v1alpha1.org.labels.DetachLabelRequest
 */
export const DetachLabelRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.labels.DetachLabelRequest",
  () => [
    { no: 1, name: "label_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "entity_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "entity_type", kind: "enum", T: proto3.getEnumType(LabeledEntity) },
  ],
);

/**
 * Response message for the DetachLabel rpc.
 *
 * @generated from message api.v1alpha1.org.labels.DetachLabelResponse
 */
export const DetachLabelResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.labels.DetachLabelResponse",
  [],
);

/**
 * Request message for the GetLabeledEntityMapRequest rpc.
 *
 * @generated from message api.v1alpha1.org.labels.GetLabeledEntityMapRequest
 */
export const GetLabeledEntityMapRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.labels.GetLabeledEntityMapRequest",
  () => [
    { no: 1, name: "entity_type", kind: "enum", T: proto3.getEnumType(LabeledEntity) },
  ],
);

/**
 * Response message for the GetLabeledEntityMapResponse rpc.
 *
 * @generated from message api.v1alpha1.org.labels.GetLabeledEntityMapResponse
 */
export const GetLabeledEntityMapResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.labels.GetLabeledEntityMapResponse",
  () => [
    { no: 1, name: "entity_map", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: GetLabeledEntityMapResponse_EntityLabels} },
  ],
);

/**
 * @generated from message api.v1alpha1.org.labels.GetLabeledEntityMapResponse.EntityLabels
 */
export const GetLabeledEntityMapResponse_EntityLabels = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.labels.GetLabeledEntityMapResponse.EntityLabels",
  () => [
    { no: 1, name: "labels", kind: "message", T: Label, repeated: true },
  ],
  {localName: "GetLabeledEntityMapResponse_EntityLabels"},
);

