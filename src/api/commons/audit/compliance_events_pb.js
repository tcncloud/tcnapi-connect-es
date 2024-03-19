// @generated by protoc-gen-es v1.8.0 with parameter "target=js+dts"
// @generated from file api/commons/audit/compliance_events.proto (package api.commons.audit, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * ComplianceRndQueryEvent - whenever a call is made to the reassigned numbers database service
 *
 * @generated from message api.commons.audit.ComplianceRndQueryEvent
 */
export const ComplianceRndQueryEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.ComplianceRndQueryEvent",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "phone_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "result", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "date_last_contact", kind: "message", T: Timestamp },
  ],
);

