// @generated by protoc-gen-connect-es v0.11.0
// @generated from file api/v1alpha1/delivery/service.proto (package api.v1alpha1.delivery, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateCredentialReq, CreateCredentialRes, CreateTransferConfigReq, CreateTransferConfigRes, DeleteCredentialReq, DeleteCredentialRes, DeleteTransferConfigReq, DeleteTransferConfigRes, GetCredentialReq, GetCredentialRes, GetTransferConfigByNameReq, GetTransferConfigByNameRes, GetTransferConfigReq, GetTransferConfigRes, ListCredentialsReq, ListCredentialsRes, ListHistoryByTransferConfigReq, ListHistoryByTransferConfigRes, ListHistoryReq, ListHistoryRes, ListTransferConfigsByCredentialIDReq, ListTransferConfigsByCredentialIDRes, ListTransferConfigsReq, ListTransferConfigsRes, UpdateCredentialReq, UpdateCredentialRes, UpdateTransferConfigReq, UpdateTransferConfigRes } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1alpha1.delivery.DeliveryApi
 */
export const DeliveryApi = {
  typeName: "api.v1alpha1.delivery.DeliveryApi",
  methods: {
    /**
     * @generated from rpc api.v1alpha1.delivery.DeliveryApi.CreateTransferConfig
     */
    createTransferConfig: {
      name: "CreateTransferConfig",
      I: CreateTransferConfigReq,
      O: CreateTransferConfigRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.delivery.DeliveryApi.ListTransferConfigs
     */
    listTransferConfigs: {
      name: "ListTransferConfigs",
      I: ListTransferConfigsReq,
      O: ListTransferConfigsRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.delivery.DeliveryApi.ListTransferConfigsByCredentialID
     */
    listTransferConfigsByCredentialID: {
      name: "ListTransferConfigsByCredentialID",
      I: ListTransferConfigsByCredentialIDReq,
      O: ListTransferConfigsByCredentialIDRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.delivery.DeliveryApi.UpdateTransferConfig
     */
    updateTransferConfig: {
      name: "UpdateTransferConfig",
      I: UpdateTransferConfigReq,
      O: UpdateTransferConfigRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.delivery.DeliveryApi.DeleteTransferConfig
     */
    deleteTransferConfig: {
      name: "DeleteTransferConfig",
      I: DeleteTransferConfigReq,
      O: DeleteTransferConfigRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.delivery.DeliveryApi.GetTransferConfig
     */
    getTransferConfig: {
      name: "GetTransferConfig",
      I: GetTransferConfigReq,
      O: GetTransferConfigRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.delivery.DeliveryApi.GetTransferConfigByName
     */
    getTransferConfigByName: {
      name: "GetTransferConfigByName",
      I: GetTransferConfigByNameReq,
      O: GetTransferConfigByNameRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.delivery.DeliveryApi.ListHistory
     */
    listHistory: {
      name: "ListHistory",
      I: ListHistoryReq,
      O: ListHistoryRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.delivery.DeliveryApi.ListHistoryByTransferConfig
     */
    listHistoryByTransferConfig: {
      name: "ListHistoryByTransferConfig",
      I: ListHistoryByTransferConfigReq,
      O: ListHistoryByTransferConfigRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.delivery.DeliveryApi.ListCredentials
     */
    listCredentials: {
      name: "ListCredentials",
      I: ListCredentialsReq,
      O: ListCredentialsRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.delivery.DeliveryApi.GetCredential
     */
    getCredential: {
      name: "GetCredential",
      I: GetCredentialReq,
      O: GetCredentialRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.delivery.DeliveryApi.CreateCredential
     */
    createCredential: {
      name: "CreateCredential",
      I: CreateCredentialReq,
      O: CreateCredentialRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.delivery.DeliveryApi.DeleteCredential
     */
    deleteCredential: {
      name: "DeleteCredential",
      I: DeleteCredentialReq,
      O: DeleteCredentialRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.delivery.DeliveryApi.UpdateCredential
     */
    updateCredential: {
      name: "UpdateCredential",
      I: UpdateCredentialReq,
      O: UpdateCredentialRes,
      kind: MethodKind.Unary,
    },
  }
};

