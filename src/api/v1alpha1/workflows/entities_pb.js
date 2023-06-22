// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/workflows/entities.proto (package api.v1alpha1.workflows, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3 } from "@bufbuild/protobuf";
import { FlowDefinition } from "../../commons/workflows/entities_pb.js";

/**
 * ListFlowDefinitionsRequest is the request object for listing flow definitions
 *
 * @generated from message api.v1alpha1.workflows.ListFlowDefinitionsRequest
 */
export const ListFlowDefinitionsRequest = proto3.makeMessageType(
  "api.v1alpha1.workflows.ListFlowDefinitionsRequest",
  () => [
    { no: 1, name: "filter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ListFlowDefinitionsResponse is the response object for listing flow definitions
 *
 * @generated from message api.v1alpha1.workflows.ListFlowDefinitionsResponse
 */
export const ListFlowDefinitionsResponse = proto3.makeMessageType(
  "api.v1alpha1.workflows.ListFlowDefinitionsResponse",
  () => [
    { no: 1, name: "flow_definitions", kind: "message", T: FlowDefinition, repeated: true },
  ],
);

/**
 * SaveFlowDefinitionRequest is the request object for creating/updating a flow definition
 *
 * @generated from message api.v1alpha1.workflows.SaveFlowDefinitionRequest
 */
export const SaveFlowDefinitionRequest = proto3.makeMessageType(
  "api.v1alpha1.workflows.SaveFlowDefinitionRequest",
  () => [
    { no: 1, name: "flow_definition", kind: "message", T: FlowDefinition },
    { no: 2, name: "update_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * SaveFlowDefinitionResponse is the response object for creating/updating a flow definition
 *
 * @generated from message api.v1alpha1.workflows.SaveFlowDefinitionResponse
 */
export const SaveFlowDefinitionResponse = proto3.makeMessageType(
  "api.v1alpha1.workflows.SaveFlowDefinitionResponse",
  () => [
    { no: 1, name: "flow_definition_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "flow_definition", kind: "message", T: FlowDefinition },
  ],
);

/**
 * GetFlowDefinitionsRequest is the request object for getting a flow definition
 *
 * @generated from message api.v1alpha1.workflows.GetFlowDefinitionRequest
 */
export const GetFlowDefinitionRequest = proto3.makeMessageType(
  "api.v1alpha1.workflows.GetFlowDefinitionRequest",
  () => [
    { no: 1, name: "flow_definition_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * GetFlowDefinitionsResponse is the response object for getting a flow definition
 *
 * @generated from message api.v1alpha1.workflows.GetFlowDefinitionResponse
 */
export const GetFlowDefinitionResponse = proto3.makeMessageType(
  "api.v1alpha1.workflows.GetFlowDefinitionResponse",
  () => [
    { no: 1, name: "flow_definition", kind: "message", T: FlowDefinition },
  ],
);

/**
 * DeleteFlowDefinitionsRequest is the request object for deleting a flow definition
 *
 * @generated from message api.v1alpha1.workflows.DeleteFlowDefinitionRequest
 */
export const DeleteFlowDefinitionRequest = proto3.makeMessageType(
  "api.v1alpha1.workflows.DeleteFlowDefinitionRequest",
  () => [
    { no: 1, name: "flow_definition_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * DeleteFlowDefinitionsResponse is the response object for deleting a flow definition
 *
 * @generated from message api.v1alpha1.workflows.DeleteFlowDefinitionResponse
 */
export const DeleteFlowDefinitionResponse = proto3.makeMessageType(
  "api.v1alpha1.workflows.DeleteFlowDefinitionResponse",
  () => [
    { no: 1, name: "flow_definition_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

