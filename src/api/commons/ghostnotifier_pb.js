// @generated by protoc-gen-es v1.4.0 with parameter "target=js+dts"
// @generated from file api/commons/ghostnotifier.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Any, proto3, Timestamp } from "@bufbuild/protobuf";
import { OmniConversation } from "./omnichannel_pb.js";
import { AgentBackofficeMessageAlert, AgentDirectedCallHangupAlert, AgentDirectedCallRingingAlert, CallType_Enum, QueuedNotificationType } from "./acd_pb.js";

/**
 * a notificaiton used to return a response for an asyncronous request or
 * data for or about a backend initiated process that needs to be consumed by the user
 *
 * @generated from message api.commons.GhostNotification
 */
export const GhostNotification = proto3.makeMessageType(
  "api.commons.GhostNotification",
  () => [
    { no: 1, name: "reference_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "any", kind: "message", T: Any, oneof: "payload" },
    { no: 3, name: "status", kind: "message", T: Status, oneof: "payload" },
    { no: 4, name: "omni_conversation", kind: "message", T: OmniConversation, oneof: "payload" },
    { no: 6, name: "backoffice_message", kind: "message", T: AgentBackofficeMessageAlert, oneof: "payload" },
    { no: 7, name: "directed_call_ringing", kind: "message", T: AgentDirectedCallRingingAlert, oneof: "payload" },
    { no: 8, name: "directed_call_hangup", kind: "message", T: AgentDirectedCallHangupAlert, oneof: "payload" },
    { no: 9, name: "agent_queued_calls_notification", kind: "message", T: AgentQueuedCallsNotification, oneof: "payload" },
  ],
);

/**
 * This is based on googles status proto message
 *
 * @generated from message api.commons.Status
 */
export const Status = proto3.makeMessageType(
  "api.commons.Status",
  () => [
    { no: 1, name: "code", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.commons.AgentQueuedCallsNotification
 */
export const AgentQueuedCallsNotification = proto3.makeMessageType(
  "api.commons.AgentQueuedCallsNotification",
  () => [
    { no: 16, name: "agent_queue_calls", kind: "message", T: AgentQueuedCallsNotification_QueuedCallData, repeated: true },
    { no: 17, name: "on_hold_calls", kind: "message", T: AgentQueuedCallsNotification_QueuedCallData, repeated: true },
    { no: 18, name: "hqm_calls", kind: "message", T: AgentQueuedCallsNotification_QueuedCallData, repeated: true },
  ],
);

/**
 * @generated from message api.commons.AgentQueuedCallsNotification.QueuedCallData
 */
export const AgentQueuedCallsNotification_QueuedCallData = proto3.makeMessageType(
  "api.commons.AgentQueuedCallsNotification.QueuedCallData",
  () => [
    { no: 1, name: "call_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "phone_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "caller_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "call_type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
    { no: 5, name: "start_date", kind: "message", T: Timestamp },
    { no: 6, name: "hold_date", kind: "message", T: Timestamp },
    { no: 7, name: "skills", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 8, name: "agent_specific", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "queued_notification_type", kind: "enum", T: proto3.getEnumType(QueuedNotificationType) },
  ],
  {localName: "AgentQueuedCallsNotification_QueuedCallData"},
);

