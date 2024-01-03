// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v1alpha1/org/skills/service.proto (package api.v1alpha1.org.skills, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AssignSkillGroupsRequest, AssignSkillGroupsResponse, AssignUsersRequest, AssignUsersResponse, CreateSkillGroupRequest, CreateSkillGroupResponse, DeleteSkillGroupRequest, DeleteSkillGroupResponse, GetSkillGroupMembersRequest, GetSkillGroupMembersResponse, GetSkillGroupRequest, GetSkillGroupResponse, GetUserSkillGroupsRequest, GetUserSkillGroupsResponse, GetUserSkillsRequest, GetUserSkillsResponse, ListSkillGroupsMembersRequest, ListSkillGroupsMembersResponse, ListSkillGroupsRequest, ListSkillGroupsResponse, RevokeSkillGroupsRequest, RevokeSkillGroupsResponse, UpdateSkillGroupRequest, UpdateSkillGroupResponse } from "./entities_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1alpha1.org.skills.SkillsService
 */
export declare const SkillsService: {
  readonly typeName: "api.v1alpha1.org.skills.SkillsService",
  readonly methods: {
    /**
     * CreateSkillGroup creates a new skill group.
     *
     * @generated from rpc api.v1alpha1.org.skills.SkillsService.CreateSkillGroup
     */
    readonly createSkillGroup: {
      readonly name: "CreateSkillGroup",
      readonly I: typeof CreateSkillGroupRequest,
      readonly O: typeof CreateSkillGroupResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListSkillGroups lists the skill groups belonging to an organization.
     *
     * @generated from rpc api.v1alpha1.org.skills.SkillsService.ListSkillGroups
     */
    readonly listSkillGroups: {
      readonly name: "ListSkillGroups",
      readonly I: typeof ListSkillGroupsRequest,
      readonly O: typeof ListSkillGroupsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateSkillGroup updates a single skill group.
     *
     * @generated from rpc api.v1alpha1.org.skills.SkillsService.UpdateSkillGroup
     */
    readonly updateSkillGroup: {
      readonly name: "UpdateSkillGroup",
      readonly I: typeof UpdateSkillGroupRequest,
      readonly O: typeof UpdateSkillGroupResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetSkillGroup gets a single skill group.
     *
     * @generated from rpc api.v1alpha1.org.skills.SkillsService.GetSkillGroup
     */
    readonly getSkillGroup: {
      readonly name: "GetSkillGroup",
      readonly I: typeof GetSkillGroupRequest,
      readonly O: typeof GetSkillGroupResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * DeleteSkillGroup deletes a skill group.
     *
     * @generated from rpc api.v1alpha1.org.skills.SkillsService.DeleteSkillGroup
     */
    readonly deleteSkillGroup: {
      readonly name: "DeleteSkillGroup",
      readonly I: typeof DeleteSkillGroupRequest,
      readonly O: typeof DeleteSkillGroupResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * AssignSkillGroups assigns a user to the given skill groups.
     *
     * @generated from rpc api.v1alpha1.org.skills.SkillsService.AssignSkillGroups
     */
    readonly assignSkillGroups: {
      readonly name: "AssignSkillGroups",
      readonly I: typeof AssignSkillGroupsRequest,
      readonly O: typeof AssignSkillGroupsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * AssignUsers assigns users to the given skill group.
     *
     * @generated from rpc api.v1alpha1.org.skills.SkillsService.AssignUsers
     */
    readonly assignUsers: {
      readonly name: "AssignUsers",
      readonly I: typeof AssignUsersRequest,
      readonly O: typeof AssignUsersResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * RevokeSkillGroups revokes the given skill groups from a user.
     *
     * @generated from rpc api.v1alpha1.org.skills.SkillsService.RevokeSkillGroups
     */
    readonly revokeSkillGroups: {
      readonly name: "RevokeSkillGroups",
      readonly I: typeof RevokeSkillGroupsRequest,
      readonly O: typeof RevokeSkillGroupsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetUserSkillGroups gets the skill groups assigned to a user.
     *
     * @generated from rpc api.v1alpha1.org.skills.SkillsService.GetUserSkillGroups
     */
    readonly getUserSkillGroups: {
      readonly name: "GetUserSkillGroups",
      readonly I: typeof GetUserSkillGroupsRequest,
      readonly O: typeof GetUserSkillGroupsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetUserSkills gets a user's skill proficiencies.
     *
     * @generated from rpc api.v1alpha1.org.skills.SkillsService.GetUserSkills
     */
    readonly getUserSkills: {
      readonly name: "GetUserSkills",
      readonly I: typeof GetUserSkillsRequest,
      readonly O: typeof GetUserSkillsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetSkillGroupMembers gets the members of a skill group.
     *
     * @generated from rpc api.v1alpha1.org.skills.SkillsService.GetSkillGroupMembers
     */
    readonly getSkillGroupMembers: {
      readonly name: "GetSkillGroupMembers",
      readonly I: typeof GetSkillGroupMembersRequest,
      readonly O: typeof GetSkillGroupMembersResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListSkillGroupsMembers gets the members of a skill group for each skill group in an Org.
     *
     * @generated from rpc api.v1alpha1.org.skills.SkillsService.ListSkillGroupsMembers
     */
    readonly listSkillGroupsMembers: {
      readonly name: "ListSkillGroupsMembers",
      readonly I: typeof ListSkillGroupsMembersRequest,
      readonly O: typeof ListSkillGroupsMembersResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

