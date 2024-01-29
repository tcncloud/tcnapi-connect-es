// @generated by protoc-gen-es v1.7.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/org/agent_profile_group.proto (package api.v1alpha1.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { AgentProfileGroup } from "../../commons/org/agent_profile_group_pb.js";

/**
 * @generated from message api.v1alpha1.org.GetAgentProfileGroupRequest
 */
export const GetAgentProfileGroupRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetAgentProfileGroupRequest",
  () => [
    { no: 2, name: "agent_profile_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.org.GetAgentProfileGroupResponse
 */
export const GetAgentProfileGroupResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetAgentProfileGroupResponse",
  () => [
    { no: 1, name: "agent_profile_group", kind: "message", T: AgentProfileGroup },
  ],
);

/**
 * @generated from message api.v1alpha1.org.UpdateAgentProfileGroupRequest
 */
export const UpdateAgentProfileGroupRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateAgentProfileGroupRequest",
  () => [
    { no: 2, name: "agent_profile_group", kind: "message", T: AgentProfileGroup },
  ],
);

/**
 * @generated from message api.v1alpha1.org.UpdateAgentProfileGroupResponse
 */
export const UpdateAgentProfileGroupResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateAgentProfileGroupResponse",
  [],
);

/**
 * @generated from message api.v1alpha1.org.ListAgentProfileGroupsRequest
 */
export const ListAgentProfileGroupsRequest = proto3.makeMessageType(
  "api.v1alpha1.org.ListAgentProfileGroupsRequest",
  [],
);

/**
 * @generated from message api.v1alpha1.org.ListAgentProfileGroupsResponse
 */
export const ListAgentProfileGroupsResponse = proto3.makeMessageType(
  "api.v1alpha1.org.ListAgentProfileGroupsResponse",
  () => [
    { no: 1, name: "agent_profile_groups", kind: "message", T: AgentProfileGroup, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.org.CreateAgentProfileGroupRequest
 */
export const CreateAgentProfileGroupRequest = proto3.makeMessageType(
  "api.v1alpha1.org.CreateAgentProfileGroupRequest",
  () => [
    { no: 2, name: "agent_profile_group", kind: "message", T: AgentProfileGroup },
  ],
);

/**
 * @generated from message api.v1alpha1.org.CreateAgentProfileGroupResponse
 */
export const CreateAgentProfileGroupResponse = proto3.makeMessageType(
  "api.v1alpha1.org.CreateAgentProfileGroupResponse",
  () => [
    { no: 1, name: "agent_profile_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.org.DeleteAgentProfileGroupRequest
 */
export const DeleteAgentProfileGroupRequest = proto3.makeMessageType(
  "api.v1alpha1.org.DeleteAgentProfileGroupRequest",
  () => [
    { no: 2, name: "agent_profile_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.org.DeleteAgentProfileGroupResponse
 */
export const DeleteAgentProfileGroupResponse = proto3.makeMessageType(
  "api.v1alpha1.org.DeleteAgentProfileGroupResponse",
  [],
);

/**
 * @generated from message api.v1alpha1.org.AssignAgentProfileGroupsRequest
 */
export const AssignAgentProfileGroupsRequest = proto3.makeMessageType(
  "api.v1alpha1.org.AssignAgentProfileGroupsRequest",
  () => [
    { no: 2, name: "agent_profile_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "user_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.org.AssignAgentProfileGroupsResponse
 */
export const AssignAgentProfileGroupsResponse = proto3.makeMessageType(
  "api.v1alpha1.org.AssignAgentProfileGroupsResponse",
  [],
);

