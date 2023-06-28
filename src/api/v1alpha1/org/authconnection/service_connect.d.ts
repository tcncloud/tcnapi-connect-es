// @generated by protoc-gen-connect-es v0.10.1
// @generated from file api/v1alpha1/org/authconnection/service.proto (package api.v1alpha1.org.authconnection, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateAuthConnectionRequest, CreateAuthConnectionResponse, DeleteAuthConnectionRequest, DeleteAuthConnectionResponse, GetAuthConnectionSettingsRequest, GetAuthConnectionSettingsResponse, UpdateAuthConnectionGroupsRequest, UpdateAuthConnectionGroupsResponse, UpdateAuthConnectionSecretRequest, UpdateAuthConnectionSecretResponse } from "./entities_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1alpha1.org.authconnection.AuthConnectionService
 */
export declare const AuthConnectionService: {
  readonly typeName: "api.v1alpha1.org.authconnection.AuthConnectionService",
  readonly methods: {
    /**
     * CreateAuthConnection creates a new auth0 connection.
     *
     * @generated from rpc api.v1alpha1.org.authconnection.AuthConnectionService.CreateAuthConnection
     */
    readonly createAuthConnection: {
      readonly name: "CreateAuthConnection",
      readonly I: typeof CreateAuthConnectionRequest,
      readonly O: typeof CreateAuthConnectionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetAuthConnectionSettings gets auth0 connection settings.
     *
     * @generated from rpc api.v1alpha1.org.authconnection.AuthConnectionService.GetAuthConnectionSettings
     */
    readonly getAuthConnectionSettings: {
      readonly name: "GetAuthConnectionSettings",
      readonly I: typeof GetAuthConnectionSettingsRequest,
      readonly O: typeof GetAuthConnectionSettingsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * DeleteAuthConnection removes the current orgs auth settings.
     *
     * @generated from rpc api.v1alpha1.org.authconnection.AuthConnectionService.DeleteAuthConnection
     */
    readonly deleteAuthConnection: {
      readonly name: "DeleteAuthConnection",
      readonly I: typeof DeleteAuthConnectionRequest,
      readonly O: typeof DeleteAuthConnectionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateAuthConnectionSecret updates a connections secret.
     *
     * @generated from rpc api.v1alpha1.org.authconnection.AuthConnectionService.UpdateAuthConnectionSecret
     */
    readonly updateAuthConnectionSecret: {
      readonly name: "UpdateAuthConnectionSecret",
      readonly I: typeof UpdateAuthConnectionSecretRequest,
      readonly O: typeof UpdateAuthConnectionSecretResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateAuthConnectionGroups updates a connections groups.
     *
     * @generated from rpc api.v1alpha1.org.authconnection.AuthConnectionService.UpdateAuthConnectionGroups
     */
    readonly updateAuthConnectionGroups: {
      readonly name: "UpdateAuthConnectionGroups",
      readonly I: typeof UpdateAuthConnectionGroupsRequest,
      readonly O: typeof UpdateAuthConnectionGroupsResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};
