// @generated by protoc-gen-es v1.8.0 with parameter "target=js+dts"
// @generated from file api/commons/asm.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Int64Value, proto3, Timestamp } from "@bufbuild/protobuf";
import { AgentState, CallerSid, QueuedNotificationType } from "./acd_pb.js";

/**
 * @generated from enum api.commons.AsmSubsessionType
 */
export const AsmSubsessionType = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.AsmSubsessionType",
  [
    {no: 0, name: "VOICE"},
    {no: 1, name: "OMNI"},
  ],
);

/**
 * @generated from enum api.commons.StatusState
 */
export const StatusState = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.StatusState",
  [
    {no: 0, name: "STATUS_STATE_UNKNOWN"},
    {no: 1, name: "WAITING"},
    {no: 2, name: "IDLE"},
    {no: 3, name: "CONVERSATION_OPEN"},
  ],
);

/**
 * TODO remove unused fields
 *
 * @generated from message api.commons.DashboardAgentInfo
 */
export const DashboardAgentInfo = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.DashboardAgentInfo",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "user_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "hunt_group_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "partner_agent_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "agent_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 12, name: "user_caller_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "created", kind: "message", T: Timestamp },
    { no: 16, name: "last_updated", kind: "message", T: Timestamp },
    { no: 17, name: "agent_profile_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 18, name: "agent_profile_group_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 19, name: "agent_status", kind: "enum", T: proto3.getEnumType(StatusState) },
    { no: 20, name: "current_conversation_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 22, name: "average_customer_wait_time_seconds", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 23, name: "average_time_to_respond_seconds", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 24, name: "average_conversation_duration_seconds", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 25, name: "login_time", kind: "message", T: Timestamp },
    { no: 26, name: "last_event_time", kind: "message", T: Timestamp },
    { no: 27, name: "events", kind: "message", T: DashboardAgentInfo_DashboardAgentResponseEvent, repeated: true },
    { no: 28, name: "skills", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 3 /* ScalarType.INT64 */} },
    { no: 29, name: "asm_session_sid", kind: "message", T: Int64Value },
  ],
);

/**
 * The response event information for an agent
 *
 * @generated from message api.commons.DashboardAgentInfo.DashboardAgentResponseEvent
 */
export const DashboardAgentInfo_DashboardAgentResponseEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.DashboardAgentInfo.DashboardAgentResponseEvent",
  () => [
    { no: 1, name: "response_time_seconds", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "time", kind: "message", T: Timestamp },
    { no: 3, name: "is_initial_agent_message", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
  {localName: "DashboardAgentInfo_DashboardAgentResponseEvent"},
);

/**
 * @generated from message api.commons.StreamAgentStateRes
 */
export const StreamAgentStateRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.StreamAgentStateRes",
  () => [
    { no: 1, name: "state", kind: "message", T: AgentState, oneof: "agent_state" },
    { no: 2, name: "heart_beat", kind: "message", T: KeepAlive, oneof: "agent_state" },
    { no: 3, name: "call_queue_add", kind: "message", T: QueueCallAdd, oneof: "agent_state" },
    { no: 4, name: "call_queue_remove", kind: "message", T: QueueCallRemove, oneof: "agent_state" },
  ],
);

/**
 * @generated from message api.commons.ManagerStreamAgentStateRes
 */
export const ManagerStreamAgentStateRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.ManagerStreamAgentStateRes",
  () => [
    { no: 1, name: "state", kind: "message", T: AgentState, oneof: "manager_agent_state" },
    { no: 2, name: "heart_beat", kind: "message", T: KeepAlive, oneof: "manager_agent_state" },
  ],
);

/**
 * @generated from message api.commons.KeepAlive
 */
export const KeepAlive = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.KeepAlive",
  [],
);

/**
 * @generated from message api.commons.QueueCallAdd
 */
export const QueueCallAdd = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.QueueCallAdd",
  () => [
    { no: 1, name: "phone_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "caller_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "start_date", kind: "message", T: Timestamp },
    { no: 4, name: "hold_date", kind: "message", T: Timestamp },
    { no: 5, name: "formatted_skills", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 6, name: "agent_specific", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "queued_notification_type", kind: "enum", T: proto3.getEnumType(QueuedNotificationType) },
    { no: 8, name: "caller_sid", kind: "message", T: CallerSid },
    { no: 9, name: "skills", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 8 /* ScalarType.BOOL */} },
  ],
);

/**
 * @generated from message api.commons.QueueCallRemove
 */
export const QueueCallRemove = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.QueueCallRemove",
  () => [
    { no: 1, name: "caller_sid", kind: "message", T: CallerSid },
  ],
);

