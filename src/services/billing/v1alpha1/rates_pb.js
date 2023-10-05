// @generated by protoc-gen-es v1.3.1 with parameter "target=js+dts"
// @generated from file services/billing/v1alpha1/rates.proto (package services.billing.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3 } from "@bufbuild/protobuf";
import { RateDefinition } from "../entities/v1alpha1/rates_pb.js";
import { Page, Sort } from "./core_pb.js";

/**
 * @generated from message services.billing.v1alpha1.BulkDeleteRateDefinitionsRequest
 */
export const BulkDeleteRateDefinitionsRequest = proto3.makeMessageType(
  "services.billing.v1alpha1.BulkDeleteRateDefinitionsRequest",
  () => [
    { no: 1, name: "rate_definition_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message services.billing.v1alpha1.BulkDeleteRateDefinitionsResponse
 */
export const BulkDeleteRateDefinitionsResponse = proto3.makeMessageType(
  "services.billing.v1alpha1.BulkDeleteRateDefinitionsResponse",
  [],
);

/**
 * @generated from message services.billing.v1alpha1.BulkUpdateRateDefinitionsRequest
 */
export const BulkUpdateRateDefinitionsRequest = proto3.makeMessageType(
  "services.billing.v1alpha1.BulkUpdateRateDefinitionsRequest",
  () => [
    { no: 1, name: "rate_definition_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "rate_definition", kind: "message", T: RateDefinition },
    { no: 3, name: "update_fields", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message services.billing.v1alpha1.BulkUpdateRateDefinitionsResponse
 */
export const BulkUpdateRateDefinitionsResponse = proto3.makeMessageType(
  "services.billing.v1alpha1.BulkUpdateRateDefinitionsResponse",
  [],
);

/**
 * @generated from message services.billing.v1alpha1.CreateRateDefinitionRequest
 */
export const CreateRateDefinitionRequest = proto3.makeMessageType(
  "services.billing.v1alpha1.CreateRateDefinitionRequest",
  () => [
    { no: 1, name: "rate_definition_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "rate_definition", kind: "message", T: RateDefinition },
  ],
);

/**
 * @generated from message services.billing.v1alpha1.CreateRateDefinitionResponse
 */
export const CreateRateDefinitionResponse = proto3.makeMessageType(
  "services.billing.v1alpha1.CreateRateDefinitionResponse",
  () => [
    { no: 1, name: "rate_definition_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message services.billing.v1alpha1.DeleteRateDefinitionRequest
 */
export const DeleteRateDefinitionRequest = proto3.makeMessageType(
  "services.billing.v1alpha1.DeleteRateDefinitionRequest",
  () => [
    { no: 1, name: "rate_definition_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message services.billing.v1alpha1.DeleteRateDefinitionResponse
 */
export const DeleteRateDefinitionResponse = proto3.makeMessageType(
  "services.billing.v1alpha1.DeleteRateDefinitionResponse",
  [],
);

/**
 * @generated from message services.billing.v1alpha1.GetRateDefinitionRequest
 */
export const GetRateDefinitionRequest = proto3.makeMessageType(
  "services.billing.v1alpha1.GetRateDefinitionRequest",
  () => [
    { no: 1, name: "rate_definition_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message services.billing.v1alpha1.GetRateDefinitionResponse
 */
export const GetRateDefinitionResponse = proto3.makeMessageType(
  "services.billing.v1alpha1.GetRateDefinitionResponse",
  () => [
    { no: 1, name: "rate_definition", kind: "message", T: RateDefinition },
  ],
);

/**
 * @generated from message services.billing.v1alpha1.ListRateDefinitionsRequest
 */
export const ListRateDefinitionsRequest = proto3.makeMessageType(
  "services.billing.v1alpha1.ListRateDefinitionsRequest",
  () => [
    { no: 1, name: "rate_definition_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "filter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "fields", kind: "message", T: FieldMask },
    { no: 4, name: "sort", kind: "message", T: Sort, repeated: true },
    { no: 5, name: "page", kind: "message", T: Page },
  ],
);

/**
 * @generated from message services.billing.v1alpha1.ListRateDefinitionsResponse
 */
export const ListRateDefinitionsResponse = proto3.makeMessageType(
  "services.billing.v1alpha1.ListRateDefinitionsResponse",
  () => [
    { no: 1, name: "rate_definitions", kind: "message", T: RateDefinition, repeated: true },
    { no: 2, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message services.billing.v1alpha1.UpdateRateDefinitionRequest
 */
export const UpdateRateDefinitionRequest = proto3.makeMessageType(
  "services.billing.v1alpha1.UpdateRateDefinitionRequest",
  () => [
    { no: 1, name: "rate_definition_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "rate_definition", kind: "message", T: RateDefinition },
    { no: 3, name: "update_fields", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message services.billing.v1alpha1.UpdateRateDefinitionResponse
 */
export const UpdateRateDefinitionResponse = proto3.makeMessageType(
  "services.billing.v1alpha1.UpdateRateDefinitionResponse",
  [],
);

