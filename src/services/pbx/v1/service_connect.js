// @generated by protoc-gen-connect-es v0.13.0
// @generated from file services/pbx/v1/service.proto (package services.pbx.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AssignRandomExtensionRequest, AssignRandomExtensionResponse, CreateRingGroupRequest, CreateRingGroupResponse, DeleteRingGroupRequest, DeleteRingGroupResponse, QueryPbxUsersRequest, QueryPbxUsersResponse, QueryRingGroupsRequest, QueryRingGroupsResponse, UpdatePbxUserRequest, UpdatePbxUserResponse, UpdateRingGroupRequest, UpdateRingGroupResponse } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service services.pbx.v1.PBXService
 */
export const PBXService = {
  typeName: "services.pbx.v1.PBXService",
  methods: {
    /**
     * Queries details of PBX Users based on specified criteria for the authenticated callers ORG
     * Required permissions:
     *   PBX-MANAGER
     * Errors:
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.pbx.v1.PBXService.QueryPbxUsers
     */
    queryPbxUsers: {
      name: "QueryPbxUsers",
      I: QueryPbxUsersRequest,
      O: QueryPbxUsersResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Queries details of Ring Groups based on specified criteria for the authenticated callers ORG
     * Required permissions:
     *   PBX-MANAGER
     * Errors:
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.pbx.v1.PBXService.QueryRingGroups
     */
    queryRingGroups: {
      name: "QueryRingGroups",
      I: QueryRingGroupsRequest,
      O: QueryRingGroupsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Updates details of a PBX User for the authenticated callers ORG.
     * Allows for updating, activating, and deactivating a user.
     * Required permissions:
     *   PBX-MANAGER
     * Errors:
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.pbx.v1.PBXService.UpdatePbxUser
     */
    updatePbxUser: {
      name: "UpdatePbxUser",
      I: UpdatePbxUserRequest,
      O: UpdatePbxUserResponse,
      kind: MethodKind.Unary,
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
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.pbx.v1.PBXService.UpdateRingGroup
     */
    updateRingGroup: {
      name: "UpdateRingGroup",
      I: UpdateRingGroupRequest,
      O: UpdateRingGroupResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Creates a ring group for the authenticated caller's ORG.
     * Required permissions:
     *   PBX-MANAGER
     * Errors:
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.pbx.v1.PBXService.CreateRingGroup
     */
    createRingGroup: {
      name: "CreateRingGroup",
      I: CreateRingGroupRequest,
      O: CreateRingGroupResponse,
      kind: MethodKind.Unary,
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
     * @generated from rpc services.pbx.v1.PBXService.DeleteRingGroup
     */
    deleteRingGroup: {
      name: "DeleteRingGroup",
      I: DeleteRingGroupRequest,
      O: DeleteRingGroupResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Assigns a random extension either to a PBX user or a Ring Group
     * Required permissions:
     *   PBX-MANAGER
     * Errors:
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.pbx.v1.PBXService.AssignRandomExtension
     */
    assignRandomExtension: {
      name: "AssignRandomExtension",
      I: AssignRandomExtensionRequest,
      O: AssignRandomExtensionResponse,
      kind: MethodKind.Unary,
    },
  }
};

