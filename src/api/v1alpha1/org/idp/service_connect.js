// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v1alpha1/org/idp/service.proto (package api.v1alpha1.org.idp, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateClientRequest, CreateClientResponse, DeleteClientRequest, DeleteClientResponse, ListClientsRequest, ListClientsResponse, UpdateClientRequest, UpdateClientResponse } from "./entities_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1alpha1.org.idp.IdpService
 */
export const IdpService = {
  typeName: "api.v1alpha1.org.idp.IdpService",
  methods: {
    /**
     * CreateClient creates a client.
     *
     * @generated from rpc api.v1alpha1.org.idp.IdpService.CreateClient
     */
    createClient: {
      name: "CreateClient",
      I: CreateClientRequest,
      O: CreateClientResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateClient updates an existing client
     *
     * @generated from rpc api.v1alpha1.org.idp.IdpService.UpdateClient
     */
    updateClient: {
      name: "UpdateClient",
      I: UpdateClientRequest,
      O: UpdateClientResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteClient deletes the provided client.
     *
     * @generated from rpc api.v1alpha1.org.idp.IdpService.DeleteClient
     */
    deleteClient: {
      name: "DeleteClient",
      I: DeleteClientRequest,
      O: DeleteClientResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListClients returns all clients.
     *
     * @generated from rpc api.v1alpha1.org.idp.IdpService.ListClients
     */
    listClients: {
      name: "ListClients",
      I: ListClientsRequest,
      O: ListClientsResponse,
      kind: MethodKind.Unary,
    },
  }
};
