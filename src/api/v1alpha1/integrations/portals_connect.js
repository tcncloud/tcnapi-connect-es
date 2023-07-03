// @generated by protoc-gen-connect-es v0.11.0
// @generated from file api/v1alpha1/integrations/portals.proto (package api.v1alpha1.integrations, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreatePortalLinksReq, CreatePortalLinksRes, DeletePluginInstanceReq, DeletePluginInstanceRes, DeletePortalConfigRes, DeletePortalLinkReq, DeletePortalLinkRes, DeletePortalReq, DeletePortalRes, GetDetailedPortalReq, GetDetailedPortalRes, GetPluginInstanceReq, GetPluginInstanceRes, GetPortalConfigLogoReq, GetPortalConfigLogoRes, GetPortalConfigRes, GetPortalLinkReq, GetPortalLinkRes, GetPortalReq, GetPortalRes, ListAvailablePaymentFieldsReq, ListAvailablePaymentFieldsRes, ListAvailableVerificationFieldsReq, ListAvailableVerificationFieldsRes, ListDetailedPortalsReq, ListDetailedPortalsRes, ListFlowFieldNamesReq, ListFlowFieldNamesRes, ListPluginInstanceReq, ListPluginInstanceRes, ListPortalConfigsRes, ListPortalLinksReq, ListPortalLinksRes, ListPortalsReq, ListPortalsRes, UpdatePortalConfigLogoReq, UpdatePortalConfigLogoRes, UpsertPluginInstanceReq, UpsertPluginInstanceRes, UpsertPortalConfigReq, UpsertPortalConfigRes, UpsertPortalReq, UpsertPortalRes } from "./portals_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { DeletePortalConfigReq, GetPortalConfigReq, ListPortalConfigsReq } from "./service_pb.js";

/**
 * @generated from service api.v1alpha1.integrations.PortalManagerApi
 */
export const PortalManagerApi = {
  typeName: "api.v1alpha1.integrations.PortalManagerApi",
  methods: {
    /**
     * @generated from rpc api.v1alpha1.integrations.PortalManagerApi.UpsertPortalConfig
     */
    upsertPortalConfig: {
      name: "UpsertPortalConfig",
      I: UpsertPortalConfigReq,
      O: UpsertPortalConfigRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.integrations.PortalManagerApi.ListPortalConfigs
     */
    listPortalConfigs: {
      name: "ListPortalConfigs",
      I: ListPortalConfigsReq,
      O: ListPortalConfigsRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.integrations.PortalManagerApi.GetPortalConfig
     */
    getPortalConfig: {
      name: "GetPortalConfig",
      I: GetPortalConfigReq,
      O: GetPortalConfigRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.integrations.PortalManagerApi.DeletePortalConfig
     */
    deletePortalConfig: {
      name: "DeletePortalConfig",
      I: DeletePortalConfigReq,
      O: DeletePortalConfigRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.integrations.PortalManagerApi.UpdatePortalConfigLogo
     */
    updatePortalConfigLogo: {
      name: "UpdatePortalConfigLogo",
      I: UpdatePortalConfigLogoReq,
      O: UpdatePortalConfigLogoRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.integrations.PortalManagerApi.GetPortalConfigLogo
     */
    getPortalConfigLogo: {
      name: "GetPortalConfigLogo",
      I: GetPortalConfigLogoReq,
      O: GetPortalConfigLogoRes,
      kind: MethodKind.Unary,
    },
    /**
     * portal links
     *
     * @generated from rpc api.v1alpha1.integrations.PortalManagerApi.ListPortalLinks
     */
    listPortalLinks: {
      name: "ListPortalLinks",
      I: ListPortalLinksReq,
      O: ListPortalLinksRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.integrations.PortalManagerApi.GetPortalLink
     */
    getPortalLink: {
      name: "GetPortalLink",
      I: GetPortalLinkReq,
      O: GetPortalLinkRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.integrations.PortalManagerApi.DeletePortalLink
     */
    deletePortalLink: {
      name: "DeletePortalLink",
      I: DeletePortalLinkReq,
      O: DeletePortalLinkRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.integrations.PortalManagerApi.CreatePortalLinks
     */
    createPortalLinks: {
      name: "CreatePortalLinks",
      I: CreatePortalLinksReq,
      O: CreatePortalLinksRes,
      kind: MethodKind.Unary,
    },
    /**
     * portals
     *
     * @generated from rpc api.v1alpha1.integrations.PortalManagerApi.UpsertPortal
     */
    upsertPortal: {
      name: "UpsertPortal",
      I: UpsertPortalReq,
      O: UpsertPortalRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.integrations.PortalManagerApi.GetPortal
     */
    getPortal: {
      name: "GetPortal",
      I: GetPortalReq,
      O: GetPortalRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.integrations.PortalManagerApi.DeletePortal
     */
    deletePortal: {
      name: "DeletePortal",
      I: DeletePortalReq,
      O: DeletePortalRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.integrations.PortalManagerApi.ListPortals
     */
    listPortals: {
      name: "ListPortals",
      I: ListPortalsReq,
      O: ListPortalsRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.integrations.PortalManagerApi.ListDetailedPortals
     */
    listDetailedPortals: {
      name: "ListDetailedPortals",
      I: ListDetailedPortalsReq,
      O: ListDetailedPortalsRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.integrations.PortalManagerApi.GetDetailedPortal
     */
    getDetailedPortal: {
      name: "GetDetailedPortal",
      I: GetDetailedPortalReq,
      O: GetDetailedPortalRes,
      kind: MethodKind.Unary,
    },
    /**
     * PluginInstances
     *
     * @generated from rpc api.v1alpha1.integrations.PortalManagerApi.UpsertPluginInstance
     */
    upsertPluginInstance: {
      name: "UpsertPluginInstance",
      I: UpsertPluginInstanceReq,
      O: UpsertPluginInstanceRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.integrations.PortalManagerApi.GetPluginInstance
     */
    getPluginInstance: {
      name: "GetPluginInstance",
      I: GetPluginInstanceReq,
      O: GetPluginInstanceRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.integrations.PortalManagerApi.DeletePluginInstance
     */
    deletePluginInstance: {
      name: "DeletePluginInstance",
      I: DeletePluginInstanceReq,
      O: DeletePluginInstanceRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.integrations.PortalManagerApi.ListPluginInstance
     */
    listPluginInstance: {
      name: "ListPluginInstance",
      I: ListPluginInstanceReq,
      O: ListPluginInstanceRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.integrations.PortalManagerApi.ListFlowFieldNames
     */
    listFlowFieldNames: {
      name: "ListFlowFieldNames",
      I: ListFlowFieldNamesReq,
      O: ListFlowFieldNamesRes,
      kind: MethodKind.Unary,
    },
    /**
     * returns the default form fields for verification flow
     *
     * @generated from rpc api.v1alpha1.integrations.PortalManagerApi.ListAvailableVerificationFields
     */
    listAvailableVerificationFields: {
      name: "ListAvailableVerificationFields",
      I: ListAvailableVerificationFieldsReq,
      O: ListAvailableVerificationFieldsRes,
      kind: MethodKind.Unary,
    },
    /**
     * returns the default form fields for payment flow
     *
     * @generated from rpc api.v1alpha1.integrations.PortalManagerApi.ListAvailablePaymentFields
     */
    listAvailablePaymentFields: {
      name: "ListAvailablePaymentFields",
      I: ListAvailablePaymentFieldsReq,
      O: ListAvailablePaymentFieldsRes,
      kind: MethodKind.Unary,
    },
  }
};

