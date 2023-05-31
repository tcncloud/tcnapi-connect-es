// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/commons/workflows/omni.proto (package api.commons.workflows, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message api.commons.workflows.OmniNodePrompt
 */
export const OmniNodePrompt = proto3.makeMessageType(
  "api.commons.workflows.OmniNodePrompt",
  () => [
    { no: 1, name: "prompt", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "store_to", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "options", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message api.commons.workflows.OmniNodeSetSkill
 */
export const OmniNodeSetSkill = proto3.makeMessageType(
  "api.commons.workflows.OmniNodeSetSkill",
  () => [
    { no: 1, name: "skill", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.commons.workflows.OmniNodeToAgent
 */
export const OmniNodeToAgent = proto3.makeMessageType(
  "api.commons.workflows.OmniNodeToAgent",
  [],
);

/**
 * @generated from message api.commons.workflows.OmniNodeError
 */
export const OmniNodeError = proto3.makeMessageType(
  "api.commons.workflows.OmniNodeError",
  () => [
    { no: 1, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);
