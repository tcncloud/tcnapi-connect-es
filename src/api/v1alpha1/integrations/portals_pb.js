// @generated by protoc-gen-es v1.2.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/integrations/portals.proto (package api.v1alpha1.integrations, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3 } from "@bufbuild/protobuf";
import { PluginInstance, PluginInstanceId, Portal, PortalConfig, PortalConfigId, PortalId, PortalLink, PortalLinkId, PortalType, Task } from "./service_pb.js";
import { FieldDefinition, Flow, FlowFieldLoc, PaymentFlow, VerificationFlow } from "../../commons/public/integrations_pb.js";

/**
 * @generated from message api.v1alpha1.integrations.UpsertPortalConfigReq
 */
export const UpsertPortalConfigReq = proto3.makeMessageType(
  "api.v1alpha1.integrations.UpsertPortalConfigReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: PortalConfig },
    { no: 2, name: "mask", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.UpsertPortalConfigRes
 */
export const UpsertPortalConfigRes = proto3.makeMessageType(
  "api.v1alpha1.integrations.UpsertPortalConfigRes",
  () => [
    { no: 1, name: "entity", kind: "message", T: PortalConfigId },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.GetPortalConfigRes
 */
export const GetPortalConfigRes = proto3.makeMessageType(
  "api.v1alpha1.integrations.GetPortalConfigRes",
  () => [
    { no: 1, name: "entity", kind: "message", T: PortalConfig },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.DeletePortalConfigRes
 */
export const DeletePortalConfigRes = proto3.makeMessageType(
  "api.v1alpha1.integrations.DeletePortalConfigRes",
  [],
);

/**
 * @generated from message api.v1alpha1.integrations.ListPortalConfigsRes
 */
export const ListPortalConfigsRes = proto3.makeMessageType(
  "api.v1alpha1.integrations.ListPortalConfigsRes",
  () => [
    { no: 1, name: "entities", kind: "message", T: PortalConfig, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.UpdatePortalConfigLogoReq
 */
export const UpdatePortalConfigLogoReq = proto3.makeMessageType(
  "api.v1alpha1.integrations.UpdatePortalConfigLogoReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: PortalConfig },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.UpdatePortalConfigLogoRes
 */
export const UpdatePortalConfigLogoRes = proto3.makeMessageType(
  "api.v1alpha1.integrations.UpdatePortalConfigLogoRes",
  [],
);

/**
 * @generated from message api.v1alpha1.integrations.GetPortalConfigLogoReq
 */
export const GetPortalConfigLogoReq = proto3.makeMessageType(
  "api.v1alpha1.integrations.GetPortalConfigLogoReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: PortalConfigId },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.GetPortalConfigLogoRes
 */
export const GetPortalConfigLogoRes = proto3.makeMessageType(
  "api.v1alpha1.integrations.GetPortalConfigLogoRes",
  () => [
    { no: 1, name: "entity", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.UpsertPortalReq
 */
export const UpsertPortalReq = proto3.makeMessageType(
  "api.v1alpha1.integrations.UpsertPortalReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: Portal },
    { no: 2, name: "mask", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.UpsertPortalRes
 */
export const UpsertPortalRes = proto3.makeMessageType(
  "api.v1alpha1.integrations.UpsertPortalRes",
  () => [
    { no: 1, name: "entity", kind: "message", T: PortalId },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.GetPortalReq
 */
export const GetPortalReq = proto3.makeMessageType(
  "api.v1alpha1.integrations.GetPortalReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: PortalId },
    { no: 2, name: "mask", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.GetPortalRes
 */
export const GetPortalRes = proto3.makeMessageType(
  "api.v1alpha1.integrations.GetPortalRes",
  () => [
    { no: 1, name: "entity", kind: "message", T: Portal },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.DeletePortalReq
 */
export const DeletePortalReq = proto3.makeMessageType(
  "api.v1alpha1.integrations.DeletePortalReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: PortalId },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.DeletePortalRes
 */
export const DeletePortalRes = proto3.makeMessageType(
  "api.v1alpha1.integrations.DeletePortalRes",
  [],
);

/**
 * @generated from message api.v1alpha1.integrations.ListPortalsReq
 */
export const ListPortalsReq = proto3.makeMessageType(
  "api.v1alpha1.integrations.ListPortalsReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: PortalId },
    { no: 2, name: "mask", kind: "message", T: FieldMask },
    { no: 3, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "page", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "ptypes", kind: "message", T: PortalType, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.ListPortalsRes
 */
export const ListPortalsRes = proto3.makeMessageType(
  "api.v1alpha1.integrations.ListPortalsRes",
  () => [
    { no: 1, name: "entities", kind: "message", T: Portal, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.ListDetailedPortalsReq
 */
export const ListDetailedPortalsReq = proto3.makeMessageType(
  "api.v1alpha1.integrations.ListDetailedPortalsReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: PortalId },
    { no: 2, name: "portal_mask", kind: "message", T: FieldMask },
    { no: 3, name: "portal_config_mask", kind: "message", T: FieldMask },
    { no: 4, name: "plugin_instance_mask", kind: "message", T: FieldMask },
    { no: 5, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "page", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 7, name: "ptypes", kind: "message", T: PortalType, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.ListDetailedPortalsRes
 */
export const ListDetailedPortalsRes = proto3.makeMessageType(
  "api.v1alpha1.integrations.ListDetailedPortalsRes",
  () => [
    { no: 4, name: "entities", kind: "message", T: ListDetailedPortalsRes_Entity, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.ListDetailedPortalsRes.Entity
 */
export const ListDetailedPortalsRes_Entity = proto3.makeMessageType(
  "api.v1alpha1.integrations.ListDetailedPortalsRes.Entity",
  () => [
    { no: 1, name: "portal", kind: "message", T: Portal },
    { no: 2, name: "portal_config", kind: "message", T: PortalConfig },
    { no: 3, name: "plugin_instances", kind: "message", T: PluginInstance, repeated: true },
  ],
  {localName: "ListDetailedPortalsRes_Entity"},
);

/**
 * @generated from message api.v1alpha1.integrations.GetDetailedPortalReq
 */
export const GetDetailedPortalReq = proto3.makeMessageType(
  "api.v1alpha1.integrations.GetDetailedPortalReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: PortalId },
    { no: 2, name: "portal_mask", kind: "message", T: FieldMask },
    { no: 3, name: "portal_config_mask", kind: "message", T: FieldMask },
    { no: 4, name: "plugin_instance_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.GetDetailedPortalRes
 */
export const GetDetailedPortalRes = proto3.makeMessageType(
  "api.v1alpha1.integrations.GetDetailedPortalRes",
  () => [
    { no: 4, name: "entity", kind: "message", T: GetDetailedPortalRes_Entity },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.GetDetailedPortalRes.Entity
 */
export const GetDetailedPortalRes_Entity = proto3.makeMessageType(
  "api.v1alpha1.integrations.GetDetailedPortalRes.Entity",
  () => [
    { no: 1, name: "portal", kind: "message", T: Portal },
    { no: 2, name: "portal_config", kind: "message", T: PortalConfig },
    { no: 3, name: "plugin_instances", kind: "message", T: PluginInstance, repeated: true },
  ],
  {localName: "GetDetailedPortalRes_Entity"},
);

/**
 * @generated from message api.v1alpha1.integrations.UpsertPluginInstanceReq
 */
export const UpsertPluginInstanceReq = proto3.makeMessageType(
  "api.v1alpha1.integrations.UpsertPluginInstanceReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: PluginInstance },
    { no: 2, name: "mask", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.UpsertPluginInstanceRes
 */
export const UpsertPluginInstanceRes = proto3.makeMessageType(
  "api.v1alpha1.integrations.UpsertPluginInstanceRes",
  () => [
    { no: 1, name: "entity", kind: "message", T: PluginInstanceId },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.GetPluginInstanceReq
 */
export const GetPluginInstanceReq = proto3.makeMessageType(
  "api.v1alpha1.integrations.GetPluginInstanceReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: PluginInstanceId },
    { no: 2, name: "mask", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.GetPluginInstanceRes
 */
export const GetPluginInstanceRes = proto3.makeMessageType(
  "api.v1alpha1.integrations.GetPluginInstanceRes",
  () => [
    { no: 1, name: "entity", kind: "message", T: PluginInstance },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.DeletePluginInstanceReq
 */
export const DeletePluginInstanceReq = proto3.makeMessageType(
  "api.v1alpha1.integrations.DeletePluginInstanceReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: PluginInstanceId },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.DeletePluginInstanceRes
 */
export const DeletePluginInstanceRes = proto3.makeMessageType(
  "api.v1alpha1.integrations.DeletePluginInstanceRes",
  [],
);

/**
 * @generated from message api.v1alpha1.integrations.ListPluginInstanceReq
 */
export const ListPluginInstanceReq = proto3.makeMessageType(
  "api.v1alpha1.integrations.ListPluginInstanceReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: PluginInstance },
    { no: 2, name: "mask", kind: "message", T: FieldMask },
    { no: 3, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "page", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.ListPluginInstanceRes
 */
export const ListPluginInstanceRes = proto3.makeMessageType(
  "api.v1alpha1.integrations.ListPluginInstanceRes",
  () => [
    { no: 1, name: "entities", kind: "message", T: PluginInstance, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.ListPluginsReq
 */
export const ListPluginsReq = proto3.makeMessageType(
  "api.v1alpha1.integrations.ListPluginsReq",
  [],
);

/**
 * TODO DISCUSS
 *
 * @generated from message api.v1alpha1.integrations.ListPluginsRes
 */
export const ListPluginsRes = proto3.makeMessageType(
  "api.v1alpha1.integrations.ListPluginsRes",
  [],
);

/**
 * @generated from message api.v1alpha1.integrations.ListPortalLinksReq
 */
export const ListPortalLinksReq = proto3.makeMessageType(
  "api.v1alpha1.integrations.ListPortalLinksReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: PortalLinkId },
    { no: 2, name: "mask", kind: "message", T: FieldMask },
    { no: 3, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "page", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.ListPortalLinksRes
 */
export const ListPortalLinksRes = proto3.makeMessageType(
  "api.v1alpha1.integrations.ListPortalLinksRes",
  () => [
    { no: 1, name: "entities", kind: "message", T: PortalLink, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.GetPortalLinkReq
 */
export const GetPortalLinkReq = proto3.makeMessageType(
  "api.v1alpha1.integrations.GetPortalLinkReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: PortalLinkId },
    { no: 2, name: "mask", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.GetPortalLinkRes
 */
export const GetPortalLinkRes = proto3.makeMessageType(
  "api.v1alpha1.integrations.GetPortalLinkRes",
  () => [
    { no: 1, name: "entity", kind: "message", T: PortalLink },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.DeletePortalLinkReq
 */
export const DeletePortalLinkReq = proto3.makeMessageType(
  "api.v1alpha1.integrations.DeletePortalLinkReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: PortalLinkId },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.DeletePortalLinkRes
 */
export const DeletePortalLinkRes = proto3.makeMessageType(
  "api.v1alpha1.integrations.DeletePortalLinkRes",
  [],
);

/**
 * @generated from message api.v1alpha1.integrations.CreatePortalLinksReq
 */
export const CreatePortalLinksReq = proto3.makeMessageType(
  "api.v1alpha1.integrations.CreatePortalLinksReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: PortalId },
    { no: 2, name: "link_datas", kind: "message", T: Task, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.CreatePortalLinksRes
 */
export const CreatePortalLinksRes = proto3.makeMessageType(
  "api.v1alpha1.integrations.CreatePortalLinksRes",
  () => [
    { no: 1, name: "urls", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * used to check what field names are expected by a flow
 * does not return any other information about the fields,
 * and the user backend still allows any data to be submitted.
 *
 * @generated from message api.v1alpha1.integrations.ListFlowFieldNamesReq
 */
export const ListFlowFieldNamesReq = proto3.makeMessageType(
  "api.v1alpha1.integrations.ListFlowFieldNamesReq",
  () => [
    { no: 5, name: "entity", kind: "message", T: ListFlowFieldNamesReq_Entity },
  ],
);

/**
 * @generated from message api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity
 */
export const ListFlowFieldNamesReq_Entity = proto3.makeMessageType(
  "api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity",
  () => [
    { no: 3, name: "flow", kind: "message", T: Flow },
    { no: 4, name: "loc", kind: "enum", T: proto3.getEnumType(FlowFieldLoc) },
  ],
  {localName: "ListFlowFieldNamesReq_Entity"},
);

/**
 * the field names the flow will look for at the request's specified location
 *
 * @generated from message api.v1alpha1.integrations.ListFlowFieldNamesRes
 */
export const ListFlowFieldNamesRes = proto3.makeMessageType(
  "api.v1alpha1.integrations.ListFlowFieldNamesRes",
  () => [
    { no: 1, name: "field_names", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * for listing fields on the given verification flow
 *
 * @generated from message api.v1alpha1.integrations.ListAvailableVerificationFieldsReq
 */
export const ListAvailableVerificationFieldsReq = proto3.makeMessageType(
  "api.v1alpha1.integrations.ListAvailableVerificationFieldsReq",
  () => [
    { no: 1, name: "verification", kind: "message", T: VerificationFlow },
  ],
);

/**
 * the available fields for the verification flow
 *
 * @generated from message api.v1alpha1.integrations.ListAvailableVerificationFieldsRes
 */
export const ListAvailableVerificationFieldsRes = proto3.makeMessageType(
  "api.v1alpha1.integrations.ListAvailableVerificationFieldsRes",
  () => [
    { no: 2, name: "verification_fields", kind: "message", T: FieldDefinition, repeated: true },
  ],
);

/**
 * for listing fields on the given payment flow
 *
 * @generated from message api.v1alpha1.integrations.ListAvailablePaymentFieldsReq
 */
export const ListAvailablePaymentFieldsReq = proto3.makeMessageType(
  "api.v1alpha1.integrations.ListAvailablePaymentFieldsReq",
  () => [
    { no: 1, name: "payment", kind: "message", T: PaymentFlow },
  ],
);

/**
 * the available fields for the payment flow
 *
 * @generated from message api.v1alpha1.integrations.ListAvailablePaymentFieldsRes
 */
export const ListAvailablePaymentFieldsRes = proto3.makeMessageType(
  "api.v1alpha1.integrations.ListAvailablePaymentFieldsRes",
  () => [
    { no: 2, name: "payment_fields", kind: "message", T: FieldDefinition, repeated: true },
  ],
);

