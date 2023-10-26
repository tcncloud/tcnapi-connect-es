// @generated by protoc-gen-es v1.4.0 with parameter "target=js+dts"
// @generated from file api/commons/agent_session.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message api.commons.AgentSessionStatus
 */
export const AgentSessionStatus = proto3.makeMessageType(
  "api.commons.AgentSessionStatus",
  [],
);

/**
 * @generated from enum api.commons.AgentSessionStatus.Enum
 */
export const AgentSessionStatus_Enum = proto3.makeEnum(
  "api.commons.AgentSessionStatus.Enum",
  [
    {no: 0, name: "UNKNOWN"},
    {no: 4100, name: "LOGGING_IN"},
    {no: 4110, name: "LOGGED_IN"},
    {no: 4200, name: "COMPLETED"},
    {no: 4300, name: "SUMMED"},
    {no: 4400, name: "ACCOUNTING_EXPORT"},
  ],
);

