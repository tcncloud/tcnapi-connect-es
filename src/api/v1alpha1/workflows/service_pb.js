// Copyright (c) 2020, TCN Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.4.2 with parameter "target=js+dts"
// @generated from file api/v1alpha1/workflows/service.proto (package api.v1alpha1.workflows, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * PersistedWorkflowDefinition is the flow definition object
 *
 * @generated from message api.v1alpha1.workflows.PersistedWorkflowDefinition
 */
export const PersistedWorkflowDefinition = proto3.makeMessageType(
  "api.v1alpha1.workflows.PersistedWorkflowDefinition",
  () => [
    { no: 1, name: "flow_definition_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "application", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "definition", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "create_time", kind: "message", T: Timestamp },
    { no: 8, name: "update_time", kind: "message", T: Timestamp },
    { no: 100, name: "extra", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * CreateWorkflowDefinitionRequest is the request object for creating a flow definition
 *
 * @generated from message api.v1alpha1.workflows.CreateWorkflowDefinitionRequest
 */
export const CreateWorkflowDefinitionRequest = proto3.makeMessageType(
  "api.v1alpha1.workflows.CreateWorkflowDefinitionRequest",
  () => [
    { no: 1, name: "workflow_definition", kind: "message", T: PersistedWorkflowDefinition },
  ],
);

/**
 * CreateWorkflowDefinitionResponse is the response object for creating a flow definition
 *
 * @generated from message api.v1alpha1.workflows.CreateWorkflowDefinitionResponse
 */
export const CreateWorkflowDefinitionResponse = proto3.makeMessageType(
  "api.v1alpha1.workflows.CreateWorkflowDefinitionResponse",
  () => [
    { no: 1, name: "workflow_definition", kind: "message", T: PersistedWorkflowDefinition },
  ],
);

/**
 * GetWorkflowDefinitionRequest is the request object for retrieving a flow definition
 *
 * @generated from message api.v1alpha1.workflows.GetWorkflowDefinitionRequest
 */
export const GetWorkflowDefinitionRequest = proto3.makeMessageType(
  "api.v1alpha1.workflows.GetWorkflowDefinitionRequest",
  () => [
    { no: 1, name: "workflow_definition_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * GetWorkflowDefinitionResponse is the response object for retrieving a flow definition
 *
 * @generated from message api.v1alpha1.workflows.GetWorkflowDefinitionResponse
 */
export const GetWorkflowDefinitionResponse = proto3.makeMessageType(
  "api.v1alpha1.workflows.GetWorkflowDefinitionResponse",
  () => [
    { no: 1, name: "workflow_definition", kind: "message", T: PersistedWorkflowDefinition },
  ],
);

/**
 * ListWorkflowDefinitionsRequest is the request object for listing flow definitions
 *
 * @generated from message api.v1alpha1.workflows.ListWorkflowDefinitionsRequest
 */
export const ListWorkflowDefinitionsRequest = proto3.makeMessageType(
  "api.v1alpha1.workflows.ListWorkflowDefinitionsRequest",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "application", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ListWorkflowDefinitionsResponse is the response object for listing flow definitions
 *
 * @generated from message api.v1alpha1.workflows.ListWorkflowDefinitionsResponse
 */
export const ListWorkflowDefinitionsResponse = proto3.makeMessageType(
  "api.v1alpha1.workflows.ListWorkflowDefinitionsResponse",
  () => [
    { no: 1, name: "workflow_definition", kind: "message", T: PersistedWorkflowDefinition },
  ],
);

/**
 * UpdateWorkflowDefinitionRequest is the request object for updating a flow definition
 *
 * @generated from message api.v1alpha1.workflows.UpdateWorkflowDefinitionRequest
 */
export const UpdateWorkflowDefinitionRequest = proto3.makeMessageType(
  "api.v1alpha1.workflows.UpdateWorkflowDefinitionRequest",
  () => [
    { no: 1, name: "workflow_definition", kind: "message", T: PersistedWorkflowDefinition },
  ],
);

/**
 * UpdateWorkflowDefinitionResponse is the response object for updating a flow definition
 *
 * @generated from message api.v1alpha1.workflows.UpdateWorkflowDefinitionResponse
 */
export const UpdateWorkflowDefinitionResponse = proto3.makeMessageType(
  "api.v1alpha1.workflows.UpdateWorkflowDefinitionResponse",
  () => [
    { no: 1, name: "workflow_definition", kind: "message", T: PersistedWorkflowDefinition },
  ],
);

/**
 * ValidateWorkflowDefinitionRequest is the request object for validating a flow definition
 *
 * @generated from message api.v1alpha1.workflows.ValidateWorkflowDefinitionRequest
 */
export const ValidateWorkflowDefinitionRequest = proto3.makeMessageType(
  "api.v1alpha1.workflows.ValidateWorkflowDefinitionRequest",
  () => [
    { no: 1, name: "workflow_definition", kind: "message", T: PersistedWorkflowDefinition },
  ],
);

/**
 * ValidateWorkflowDefinitionResponse is the response object for validating a flow definition
 *
 * @generated from message api.v1alpha1.workflows.ValidateWorkflowDefinitionResponse
 */
export const ValidateWorkflowDefinitionResponse = proto3.makeMessageType(
  "api.v1alpha1.workflows.ValidateWorkflowDefinitionResponse",
  () => [
    { no: 1, name: "valid", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

