// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file wfo/vanalytics/v2/agent_call_log.proto (package wfo.vanalytics.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { AgentCallLogCallEnded } from "../../../api/commons/acd_pb.js";

/**
 * AgentCallLog resource.
 *
 * @generated from message wfo.vanalytics.v2.AgentCallLog
 */
export const AgentCallLog = /*@__PURE__*/ proto3.makeMessageType(
  "wfo.vanalytics.v2.AgentCallLog",
  () => [
    { no: 1, name: "actions", kind: "message", T: AgentCallLog_Action, repeated: true },
  ],
);

/**
 * Action is an agent call log action.
 *
 * @generated from message wfo.vanalytics.v2.AgentCallLog.Action
 */
export const AgentCallLog_Action = /*@__PURE__*/ proto3.makeMessageType(
  "wfo.vanalytics.v2.AgentCallLog.Action",
  () => [
    { no: 1, name: "call_skills_initial", kind: "message", T: AgentCallLog_CallSkillsInitial, oneof: "kind" },
    { no: 2, name: "call_ended", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "kind" },
  ],
  {localName: "AgentCallLog_Action"},
);

/**
 * CallSkillsInitial are the initial call skills on a call.
 *
 * @generated from message wfo.vanalytics.v2.AgentCallLog.CallSkillsInitial
 */
export const AgentCallLog_CallSkillsInitial = /*@__PURE__*/ proto3.makeMessageType(
  "wfo.vanalytics.v2.AgentCallLog.CallSkillsInitial",
  () => [
    { no: 1, name: "need", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "want", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
  {localName: "AgentCallLog_CallSkillsInitial"},
);

/**
 * Query constraints on agent call log.
 *
 * @generated from message wfo.vanalytics.v2.AgentCallLogQuery
 */
export const AgentCallLogQuery = /*@__PURE__*/ proto3.makeMessageType(
  "wfo.vanalytics.v2.AgentCallLogQuery",
  () => [
    { no: 1, name: "call_skills_initial", kind: "message", T: AgentCallLogQuery_CallSkillsInitial },
    { no: 2, name: "call_ended", kind: "message", T: AgentCallLogQuery_CallEnded },
  ],
);

/**
 * Query constraints on call skills initial.
 *
 * @generated from message wfo.vanalytics.v2.AgentCallLogQuery.CallSkillsInitial
 */
export const AgentCallLogQuery_CallSkillsInitial = /*@__PURE__*/ proto3.makeMessageType(
  "wfo.vanalytics.v2.AgentCallLogQuery.CallSkillsInitial",
  () => [
    { no: 1, name: "need", kind: "message", T: AgentCallLogQuery_CallSkillsInitial_Need },
    { no: 2, name: "want", kind: "message", T: AgentCallLogQuery_CallSkillsInitial_Want },
  ],
  {localName: "AgentCallLogQuery_CallSkillsInitial"},
);

/**
 * Query constraints on call skills initial need.
 *
 * @generated from message wfo.vanalytics.v2.AgentCallLogQuery.CallSkillsInitial.Need
 */
export const AgentCallLogQuery_CallSkillsInitial_Need = /*@__PURE__*/ proto3.makeMessageType(
  "wfo.vanalytics.v2.AgentCallLogQuery.CallSkillsInitial.Need",
  () => [
    { no: 1, name: "values", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "all", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
  {localName: "AgentCallLogQuery_CallSkillsInitial_Need"},
);

/**
 * Query constraints on call skills initial want.
 *
 * @generated from message wfo.vanalytics.v2.AgentCallLogQuery.CallSkillsInitial.Want
 */
export const AgentCallLogQuery_CallSkillsInitial_Want = /*@__PURE__*/ proto3.makeMessageType(
  "wfo.vanalytics.v2.AgentCallLogQuery.CallSkillsInitial.Want",
  () => [
    { no: 1, name: "values", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "all", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
  {localName: "AgentCallLogQuery_CallSkillsInitial_Want"},
);

/**
 * Query constraints on the reason the call ended.
 *
 * @generated from message wfo.vanalytics.v2.AgentCallLogQuery.CallEnded
 */
export const AgentCallLogQuery_CallEnded = /*@__PURE__*/ proto3.makeMessageType(
  "wfo.vanalytics.v2.AgentCallLogQuery.CallEnded",
  () => [
    { no: 1, name: "reasons", kind: "enum", T: proto3.getEnumType(AgentCallLogCallEnded), repeated: true },
  ],
  {localName: "AgentCallLogQuery_CallEnded"},
);

