// @generated by protoc-gen-connect-es v0.10.1
// @generated from file api/v1alpha1/workflows/service.proto (package api.v1alpha1.workflows, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetFlowDefinitionRequest, GetFlowDefinitionResponse, GetFlowStateRequest, GetFlowStateResponse, SaveFlowDefinitionRequest, SaveFlowDefinitionResponse, SaveFlowStateRequest, SaveFlowStateResponse } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1alpha1.workflows.WorkflowsService
 */
export const WorkflowsService = {
  typeName: "api.v1alpha1.workflows.WorkflowsService",
  methods: {
    /**
     * @generated from rpc api.v1alpha1.workflows.WorkflowsService.SaveFlow
     */
    saveFlow: {
      name: "SaveFlow",
      I: SaveFlowDefinitionRequest,
      O: SaveFlowDefinitionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.workflows.WorkflowsService.GetFlow
     */
    getFlow: {
      name: "GetFlow",
      I: GetFlowDefinitionRequest,
      O: GetFlowDefinitionResponse,
      kind: MethodKind.Unary,
    },
  }
};

/**
 * @generated from service api.v1alpha1.workflows.WorkflowsDefinitionsService
 */
export const WorkflowsDefinitionsService = {
  typeName: "api.v1alpha1.workflows.WorkflowsDefinitionsService",
  methods: {
    /**
     * @generated from rpc api.v1alpha1.workflows.WorkflowsDefinitionsService.SaveFlowDefinition
     */
    saveFlowDefinition: {
      name: "SaveFlowDefinition",
      I: SaveFlowDefinitionRequest,
      O: SaveFlowDefinitionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.workflows.WorkflowsDefinitionsService.GetFlowDefinition
     */
    getFlowDefinition: {
      name: "GetFlowDefinition",
      I: GetFlowDefinitionRequest,
      O: GetFlowDefinitionResponse,
      kind: MethodKind.Unary,
    },
  }
};

/**
 * @generated from service api.v1alpha1.workflows.WorkflowsStateService
 */
export const WorkflowsStateService = {
  typeName: "api.v1alpha1.workflows.WorkflowsStateService",
  methods: {
    /**
     * @generated from rpc api.v1alpha1.workflows.WorkflowsStateService.SaveFlowState
     */
    saveFlowState: {
      name: "SaveFlowState",
      I: SaveFlowStateRequest,
      O: SaveFlowStateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.workflows.WorkflowsStateService.GetFlowState
     */
    getFlowState: {
      name: "GetFlowState",
      I: GetFlowStateRequest,
      O: GetFlowStateResponse,
      kind: MethodKind.Unary,
    },
  }
};

