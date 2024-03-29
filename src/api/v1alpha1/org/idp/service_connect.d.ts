// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v1alpha1/org/idp/service.proto (package api.v1alpha1.org.idp, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateClientRequest, CreateClientResponse, DeleteClientRequest, DeleteClientResponse, ListClientsRequest, ListClientsResponse, UpdateClientRequest, UpdateClientResponse } from "./entities_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1alpha1.org.idp.IdpService
 */
export declare const IdpService: {
  readonly typeName: "api.v1alpha1.org.idp.IdpService",
  readonly methods: {
    /**
     * CreateClient creates a client.
     *
     * @generated from rpc api.v1alpha1.org.idp.IdpService.CreateClient
     */
    readonly createClient: {
      readonly name: "CreateClient",
      readonly I: typeof CreateClientRequest,
      readonly O: typeof CreateClientResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateClient updates an existing client
     *
     * @generated from rpc api.v1alpha1.org.idp.IdpService.UpdateClient
     */
    readonly updateClient: {
      readonly name: "UpdateClient",
      readonly I: typeof UpdateClientRequest,
      readonly O: typeof UpdateClientResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * DeleteClient deletes the provided client.
     *
     * @generated from rpc api.v1alpha1.org.idp.IdpService.DeleteClient
     */
    readonly deleteClient: {
      readonly name: "DeleteClient",
      readonly I: typeof DeleteClientRequest,
      readonly O: typeof DeleteClientResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListClients returns all clients.
     *
     * @generated from rpc api.v1alpha1.org.idp.IdpService.ListClients
     */
    readonly listClients: {
      readonly name: "ListClients",
      readonly I: typeof ListClientsRequest,
      readonly O: typeof ListClientsResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

