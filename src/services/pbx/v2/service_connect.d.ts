// @generated by protoc-gen-connect-es v0.13.0
// @generated from file services/pbx/v2/service.proto (package services.pbx.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AssignRandomExtensionRequest, AssignRandomExtensionResponse, CreateRingGroupRequest, CreateRingGroupResponse, DeleteRingGroupRequest, DeleteRingGroupResponse, GetPBXUserRequest, GetPBXUserResponse, GetRingGroupRequest, GetRingGroupResponse, ListPBXUsersRequest, ListPBXUsersResponse, ListRingGroupsRequest, ListRingGroupsResponse, UpdateRingGroupRequest, UpdateRingGroupResponse, UpdateSIPAccountRequest, UpdateSIPAccountResponse } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service services.pbx.v2.PBXService
 */
export declare const PBXService: {
  readonly typeName: "services.pbx.v2.PBXService",
  readonly methods: {
    /**
     * Returns details of all PBX Users associated with the authenticated callers ORG
     * Required permissions:
     *   PBX-MANAGER
     * Errors:
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.pbx.v2.PBXService.ListPBXUsers
     */
    readonly listPBXUsers: {
      readonly name: "ListPBXUsers",
      readonly I: typeof ListPBXUsersRequest,
      readonly O: typeof ListPBXUsersResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Returns details of the PBX User associated with the pbx_user_id
     * Required permissions:
     *   PBX-MANAGER
     * Errors:
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.NotFound: The user does not exist or is not in the caller's ORG.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.pbx.v2.PBXService.GetPBXUser
     */
    readonly getPBXUser: {
      readonly name: "GetPBXUser",
      readonly I: typeof GetPBXUserRequest,
      readonly O: typeof GetPBXUserResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Returns details of all Ring Groups associated with the authenticated callers ORG
     * Required permissions:
     *   PBX-MANAGER
     * Errors:
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.pbx.v2.PBXService.ListRingGroups
     */
    readonly listRingGroups: {
      readonly name: "ListRingGroups",
      readonly I: typeof ListRingGroupsRequest,
      readonly O: typeof ListRingGroupsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Returns details of the Ring Group associated with the ring_group_id
     * Required permissions:
     *   PBX-MANAGER
     * Errors:
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.NotFound: The group does not exist or is not in the caller's ORG.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.pbx.v2.PBXService.GetRingGroup
     */
    readonly getRingGroup: {
      readonly name: "GetRingGroup",
      readonly I: typeof GetRingGroupRequest,
      readonly O: typeof GetRingGroupResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Updates details of the SIP Account for the specific SIP Account within the authenticated callers ORG.
     * Allows for updating, activating, and deactivating a user.
     * Required permissions:
     *   PBX-MANAGER
     * Errors:
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.AlreadyExists: The extension already exists
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.pbx.v2.PBXService.UpdateSIPAccount
     */
    readonly updateSIPAccount: {
      readonly name: "UpdateSIPAccount",
      readonly I: typeof UpdateSIPAccountRequest,
      readonly O: typeof UpdateSIPAccountResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Updates details of a Ring Group for the authenticated callers ORG. This operation acts as an "upsert".
     *   - If the groupID is in the update mask and the group exists, the group will be updated.
     *   - If the groupID is not in the update mask a group will be created.
     * Allows for creating and updating a ring group.
     * Required permissions:
     *   PBX-MANAGER
     * Errors:
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.AlreadyExists: The extension or name already exists.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.pbx.v2.PBXService.UpdateRingGroup
     */
    readonly updateRingGroup: {
      readonly name: "UpdateRingGroup",
      readonly I: typeof UpdateRingGroupRequest,
      readonly O: typeof UpdateRingGroupResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Creates a ring group for the authenticated caller's ORG.
     * Required permissions:
     *   PBX-MANAGER
     * Errors:
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.OutOfRange: The request has fields that are out of range of constraints
     *   - grpc.AlreadyExists: The extension or name already exists.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.pbx.v2.PBXService.CreateRingGroup
     */
    readonly createRingGroup: {
      readonly name: "CreateRingGroup",
      readonly I: typeof CreateRingGroupRequest,
      readonly O: typeof CreateRingGroupResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Deletes a specific Ring Group for the authenticated caller's ORG.
     * Required permissions:
     *   PBX-MANAGER
     * Errors:
     *   - grpc.InvalidArgument: The groupID is an invalid format.
     *   - grpc.NotFound: The group does not exist or is not in the caller's ORG.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.pbx.v2.PBXService.DeleteRingGroup
     */
    readonly deleteRingGroup: {
      readonly name: "DeleteRingGroup",
      readonly I: typeof DeleteRingGroupRequest,
      readonly O: typeof DeleteRingGroupResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Assigns a random extension either to a PBX user or a Ring Group
     * Required permissions:
     *   PBX-MANAGER
     * Errors:
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.NotFound: No free extension found.
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.pbx.v2.PBXService.AssignRandomExtension
     */
    readonly assignRandomExtension: {
      readonly name: "AssignRandomExtension",
      readonly I: typeof AssignRandomExtensionRequest,
      readonly O: typeof AssignRandomExtensionResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};
