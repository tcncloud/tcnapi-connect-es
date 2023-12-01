// @generated by protoc-gen-es v1.5.0 with parameter "target=js+dts"
// @generated from file api/commons/org/labels.proto (package api.commons.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { EntityType } from "../labels_pb.js";

/**
 * Label is an entity message.
 *
 * @generated from message api.commons.org.Label
 */
export const Label = proto3.makeMessageType(
  "api.commons.org.Label",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "label_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "deleted", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Entity message for a label assignment.
 *
 * @generated from message api.commons.org.LabelAssignment
 */
export const LabelAssignment = proto3.makeMessageType(
  "api.commons.org.LabelAssignment",
  () => [
    { no: 1, name: "label_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(EntityType) },
    { no: 3, name: "entity_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "label", kind: "message", T: Label },
  ],
);

