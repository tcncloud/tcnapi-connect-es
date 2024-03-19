// @generated by protoc-gen-es v1.8.0 with parameter "target=js+dts"
// @generated from file api/commons/audit/delivery_events.proto (package api.commons.audit, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from message api.commons.audit.DeliveryFailureEvent
 */
export const DeliveryFailureEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.DeliveryFailureEvent",
  () => [
    { no: 1, name: "delivery_definition_name", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "transaction_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "attachment_names", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "failure_time", kind: "message", T: Timestamp },
    { no: 6, name: "failure_error_message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "definition", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "original_payload", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.commons.audit.DeliverySuccessEvent
 */
export const DeliverySuccessEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.DeliverySuccessEvent",
  () => [
    { no: 1, name: "delivery_definition_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "transaction_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "attachment_names", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "success_time", kind: "message", T: Timestamp },
    { no: 6, name: "success_message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

