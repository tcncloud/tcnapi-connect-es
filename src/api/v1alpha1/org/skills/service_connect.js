// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v1alpha1/org/skills/service.proto (package api.v1alpha1.org.skills, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AssignSkillGroupsRequest, AssignSkillGroupsResponse, CreateSkillGroupRequest, CreateSkillGroupResponse, DeleteSkillGroupRequest, DeleteSkillGroupResponse, GetAgentSkillsRequest, GetAgentSkillsResponse, GetSkillGroupMembersRequest, GetSkillGroupMembersResponse, GetSkillGroupRequest, GetSkillGroupResponse, GetUserSkillGroupsRequest, GetUserSkillGroupsResponse, GetUserSkillsRequest, GetUserSkillsResponse, ListSkillGroupsMembersRequest, ListSkillGroupsMembersResponse, ListSkillGroupsRequest, ListSkillGroupsResponse, ListSkillsForCurrentAgentRequest, ListSkillsForCurrentAgentResponse, RemoveSkillFromAllGroupsRequest, RemoveSkillFromAllGroupsResponse, RevokeSkillGroupsRequest, RevokeSkillGroupsResponse, UpdateSkillGroupRequest, UpdateSkillGroupResponse, UpdateUsersOnSkillGroupRequest, UpdateUsersOnSkillGroupResponse } from "./entities_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1alpha1.org.skills.SkillsService
 */
export const SkillsService = {
  typeName: "api.v1alpha1.org.skills.SkillsService",
  methods: {
    /**
     * CreateSkillGroup creates a new skill group.
     *
     * @generated from rpc api.v1alpha1.org.skills.SkillsService.CreateSkillGroup
     */
    createSkillGroup: {
      name: "CreateSkillGroup",
      I: CreateSkillGroupRequest,
      O: CreateSkillGroupResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListSkillGroups lists the skill groups belonging to an organization.
     *
     * @generated from rpc api.v1alpha1.org.skills.SkillsService.ListSkillGroups
     */
    listSkillGroups: {
      name: "ListSkillGroups",
      I: ListSkillGroupsRequest,
      O: ListSkillGroupsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateSkillGroup updates a single skill group.
     *
     * @generated from rpc api.v1alpha1.org.skills.SkillsService.UpdateSkillGroup
     */
    updateSkillGroup: {
      name: "UpdateSkillGroup",
      I: UpdateSkillGroupRequest,
      O: UpdateSkillGroupResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetSkillGroup gets a single skill group.
     *
     * @generated from rpc api.v1alpha1.org.skills.SkillsService.GetSkillGroup
     */
    getSkillGroup: {
      name: "GetSkillGroup",
      I: GetSkillGroupRequest,
      O: GetSkillGroupResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteSkillGroup deletes a skill group.
     *
     * @generated from rpc api.v1alpha1.org.skills.SkillsService.DeleteSkillGroup
     */
    deleteSkillGroup: {
      name: "DeleteSkillGroup",
      I: DeleteSkillGroupRequest,
      O: DeleteSkillGroupResponse,
      kind: MethodKind.Unary,
    },
    /**
     * RemoveSkillFromAllGroups removes a skill from all skill groups which contain it.
     *
     * @generated from rpc api.v1alpha1.org.skills.SkillsService.RemoveSkillFromAllGroups
     */
    removeSkillFromAllGroups: {
      name: "RemoveSkillFromAllGroups",
      I: RemoveSkillFromAllGroupsRequest,
      O: RemoveSkillFromAllGroupsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * AssignSkillGroups assigns a user to the given skill groups.
     *
     * @generated from rpc api.v1alpha1.org.skills.SkillsService.AssignSkillGroups
     */
    assignSkillGroups: {
      name: "AssignSkillGroups",
      I: AssignSkillGroupsRequest,
      O: AssignSkillGroupsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateUsersOnSkillGroup updates a skill groups assigned users.
     *
     * @generated from rpc api.v1alpha1.org.skills.SkillsService.UpdateUsersOnSkillGroup
     */
    updateUsersOnSkillGroup: {
      name: "UpdateUsersOnSkillGroup",
      I: UpdateUsersOnSkillGroupRequest,
      O: UpdateUsersOnSkillGroupResponse,
      kind: MethodKind.Unary,
    },
    /**
     * RevokeSkillGroups revokes the given skill groups from a user.
     *
     * @generated from rpc api.v1alpha1.org.skills.SkillsService.RevokeSkillGroups
     */
    revokeSkillGroups: {
      name: "RevokeSkillGroups",
      I: RevokeSkillGroupsRequest,
      O: RevokeSkillGroupsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetUserSkillGroups gets the skill groups assigned to a user.
     *
     * @generated from rpc api.v1alpha1.org.skills.SkillsService.GetUserSkillGroups
     */
    getUserSkillGroups: {
      name: "GetUserSkillGroups",
      I: GetUserSkillGroupsRequest,
      O: GetUserSkillGroupsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetUserSkills gets a user's skill proficiencies.
     *
     * @generated from rpc api.v1alpha1.org.skills.SkillsService.GetUserSkills
     */
    getUserSkills: {
      name: "GetUserSkills",
      I: GetUserSkillsRequest,
      O: GetUserSkillsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetSkillGroupMembers gets the members of a skill group.
     *
     * @generated from rpc api.v1alpha1.org.skills.SkillsService.GetSkillGroupMembers
     */
    getSkillGroupMembers: {
      name: "GetSkillGroupMembers",
      I: GetSkillGroupMembersRequest,
      O: GetSkillGroupMembersResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListSkillGroupsMembers gets the members of a skill group for each skill group in an Org.
     *
     * @generated from rpc api.v1alpha1.org.skills.SkillsService.ListSkillGroupsMembers
     */
    listSkillGroupsMembers: {
      name: "ListSkillGroupsMembers",
      I: ListSkillGroupsMembersRequest,
      O: ListSkillGroupsMembersResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Gets the skills of the requesting agent. This includes agent skills, hunt group skills, and extension skills(PBX).
     * Skills will be returned as a value pair (name, level).
     * For agent skills, the name of each skill will be the agent_skill_sid.
     * All other skills' names (hunt group and PBX) will be given special formats.
     * The requesting agent and hunt_group_sid skills will be defaulted to the max level (1000 and 100 respectively).
     *
     * Required permissions:
     *   NONE
     * Errors:
     *   - grpc.Invalid: the hunt_group_sid in the request in invalid.
     *
     * @generated from rpc api.v1alpha1.org.skills.SkillsService.GetAgentSkills
     */
    getAgentSkills: {
      name: "GetAgentSkills",
      I: GetAgentSkillsRequest,
      O: GetAgentSkillsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Returns a list of skills for the current agent.
     *
     * @generated from rpc api.v1alpha1.org.skills.SkillsService.ListSkillsForCurrentAgent
     */
    listSkillsForCurrentAgent: {
      name: "ListSkillsForCurrentAgent",
      I: ListSkillsForCurrentAgentRequest,
      O: ListSkillsForCurrentAgentResponse,
      kind: MethodKind.Unary,
    },
  }
};

