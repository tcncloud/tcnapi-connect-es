// @generated by protoc-gen-es v1.4.2 with parameter "target=js+dts"
// @generated from file api/commons/billing/modules/modules.proto (package api.commons.billing.modules, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Int64Value, proto3 } from "@bufbuild/protobuf";

/**
 * BasicConfig - basic config for a rating module when there is no
 * other data needed
 *
 * @generated from message api.commons.billing.modules.BasicConfig
 */
export const BasicConfig = proto3.makeMessageType(
  "api.commons.billing.modules.BasicConfig",
  () => [
    { no: 1, name: "rate", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
  ],
);

/**
 * BasicSizeConfig - basic config for a rating module that rates based
 * on event size
 *
 * @generated from message api.commons.billing.modules.BasicAmountConfig
 */
export const BasicAmountConfig = proto3.makeMessageType(
  "api.commons.billing.modules.BasicAmountConfig",
  () => [
    { no: 1, name: "amount", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "rate", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 3, name: "min_increment", kind: "message", T: Int64Value },
    { no: 4, name: "max_increment", kind: "message", T: Int64Value },
  ],
);

