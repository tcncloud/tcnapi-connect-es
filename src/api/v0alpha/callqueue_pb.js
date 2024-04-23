// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/v0alpha/callqueue.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { SimpleCallData, SimpleRecordData } from "../commons/call_pb.js";
import { GetClientInfoDataRes, GetClientInfoDisplayTemplateRes } from "./p3api_pb.js";
import { SimpleSmsMamData } from "../commons/sms_pb.js";

/**
 * @generated from message api.v0alpha.DequeuePreviewRecordOrCallReq
 */
export const DequeuePreviewRecordOrCallReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.DequeuePreviewRecordOrCallReq",
  () => [
    { no: 1, name: "timeout_minutes", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "agent_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.DequeuePreviewRecordOrCallRes
 */
export const DequeuePreviewRecordOrCallRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.DequeuePreviewRecordOrCallRes",
  () => [
    { no: 1, name: "queue_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "call", kind: "message", T: SimpleCallData },
    { no: 3, name: "record", kind: "message", T: SimpleRecordData },
  ],
);

/**
 * @generated from message api.v0alpha.EnqueuePreviewRecordReq
 */
export const EnqueuePreviewRecordReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.EnqueuePreviewRecordReq",
  () => [
    { no: 1, name: "record", kind: "message", T: SimpleRecordData },
    { no: 2, name: "queue_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.EnqueuePreviewRecordRes
 */
export const EnqueuePreviewRecordRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.EnqueuePreviewRecordRes",
  [],
);

/**
 * @generated from message api.v0alpha.DequeueScrubbedCallForPreviewRecordReq
 */
export const DequeueScrubbedCallForPreviewRecordReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.DequeueScrubbedCallForPreviewRecordReq",
  () => [
    { no: 1, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "phone_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "phone_num_index", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "task_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "task_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.DequeueScrubbedCallForPreviewRecordRes
 */
export const DequeueScrubbedCallForPreviewRecordRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.DequeueScrubbedCallForPreviewRecordRes",
  () => [
    { no: 1, name: "call", kind: "message", T: SimpleCallData },
  ],
);

/**
 * @generated from message api.v0alpha.ClearPreviewRecordReturnQueueReq
 */
export const ClearPreviewRecordReturnQueueReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.ClearPreviewRecordReturnQueueReq",
  [],
);

/**
 * @generated from message api.v0alpha.ClearPreviewRecordReturnQueueRes
 */
export const ClearPreviewRecordReturnQueueRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.ClearPreviewRecordReturnQueueRes",
  [],
);

/**
 * @generated from message api.v0alpha.EnqueuePreviewDialCallReq
 */
export const EnqueuePreviewDialCallReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.EnqueuePreviewDialCallReq",
  () => [
    { no: 1, name: "call", kind: "message", T: SimpleCallData },
    { no: 2, name: "queue_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.EnqueuePreviewDialCallRes
 */
export const EnqueuePreviewDialCallRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.EnqueuePreviewDialCallRes",
  [],
);

/**
 * @generated from message api.v0alpha.ClearManualDialQueueReq
 */
export const ClearManualDialQueueReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.ClearManualDialQueueReq",
  [],
);

/**
 * @generated from message api.v0alpha.ClearManualDialQueueRes
 */
export const ClearManualDialQueueRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.ClearManualDialQueueRes",
  [],
);

/**
 * @generated from message api.v0alpha.ProcessManualDialCallReq
 */
export const ProcessManualDialCallReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.ProcessManualDialCallReq",
  () => [
    { no: 1, name: "call", kind: "message", T: SimpleCallData },
  ],
);

/**
 * @generated from message api.v0alpha.ProcessManualDialCallRes
 */
export const ProcessManualDialCallRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.ProcessManualDialCallRes",
  () => [
    { no: 1, name: "scrubbed_call", kind: "message", T: SimpleCallData },
  ],
);

/**
 * @generated from message api.v0alpha.DequeueCallForManualApprovalReq
 */
export const DequeueCallForManualApprovalReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.DequeueCallForManualApprovalReq",
  () => [
    { no: 1, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "agent_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "timeout_minutes", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message api.v0alpha.DequeueCallForManualApprovalRes
 */
export const DequeueCallForManualApprovalRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.DequeueCallForManualApprovalRes",
  () => [
    { no: 1, name: "call", kind: "message", T: SimpleCallData },
    { no: 2, name: "queue", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "client_info", kind: "message", T: GetClientInfoDataRes },
    { no: 4, name: "client_info_template", kind: "message", T: GetClientInfoDisplayTemplateRes },
  ],
);

/**
 * @generated from message api.v0alpha.EnqueueManuallyApprovedCallReq
 */
export const EnqueueManuallyApprovedCallReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.EnqueueManuallyApprovedCallReq",
  () => [
    { no: 1, name: "call", kind: "message", T: SimpleCallData },
  ],
);

/**
 * @generated from message api.v0alpha.EnqueueManuallyApprovedCallRes
 */
export const EnqueueManuallyApprovedCallRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.EnqueueManuallyApprovedCallRes",
  [],
);

/**
 * @generated from message api.v0alpha.EnqueueManuallyRejectedCallReq
 */
export const EnqueueManuallyRejectedCallReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.EnqueueManuallyRejectedCallReq",
  () => [
    { no: 1, name: "call", kind: "message", T: SimpleCallData },
  ],
);

/**
 * @generated from message api.v0alpha.EnqueueManuallyRejectedCallRes
 */
export const EnqueueManuallyRejectedCallRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.EnqueueManuallyRejectedCallRes",
  [],
);

/**
 * @generated from message api.v0alpha.RequeueManuallyApprovedCallReq
 */
export const RequeueManuallyApprovedCallReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.RequeueManuallyApprovedCallReq",
  () => [
    { no: 1, name: "call", kind: "message", T: SimpleCallData },
    { no: 2, name: "queue_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.RequeueManuallyApprovedCallRes
 */
export const RequeueManuallyApprovedCallRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.RequeueManuallyApprovedCallRes",
  [],
);

/**
 * @generated from message api.v0alpha.EnqueueManuallyApprovedSmsReq
 */
export const EnqueueManuallyApprovedSmsReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.EnqueueManuallyApprovedSmsReq",
  () => [
    { no: 1, name: "sms", kind: "message", T: SimpleSmsMamData },
  ],
);

/**
 * @generated from message api.v0alpha.EnqueueManuallyApprovedSmsRes
 */
export const EnqueueManuallyApprovedSmsRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.EnqueueManuallyApprovedSmsRes",
  [],
);

/**
 * @generated from message api.v0alpha.EnqueueManuallyRejectedSmsReq
 */
export const EnqueueManuallyRejectedSmsReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.EnqueueManuallyRejectedSmsReq",
  () => [
    { no: 1, name: "sms", kind: "message", T: SimpleSmsMamData },
  ],
);

/**
 * @generated from message api.v0alpha.EnqueueManuallyRejectedSmsRes
 */
export const EnqueueManuallyRejectedSmsRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.EnqueueManuallyRejectedSmsRes",
  [],
);

/**
 * @generated from message api.v0alpha.RequeueManuallyApprovedSmsReq
 */
export const RequeueManuallyApprovedSmsReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.RequeueManuallyApprovedSmsReq",
  () => [
    { no: 1, name: "sms", kind: "message", T: SimpleSmsMamData },
    { no: 2, name: "queue_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.RequeueManuallyApprovedSmsRes
 */
export const RequeueManuallyApprovedSmsRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.RequeueManuallyApprovedSmsRes",
  [],
);

/**
 * @generated from message api.v0alpha.DequeueSmsMamForManualApprovalReq
 */
export const DequeueSmsMamForManualApprovalReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.DequeueSmsMamForManualApprovalReq",
  () => [
    { no: 2, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.DequeueSmsMamForManualApprovalRes
 */
export const DequeueSmsMamForManualApprovalRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.DequeueSmsMamForManualApprovalRes",
  () => [
    { no: 1, name: "sms", kind: "message", T: SimpleSmsMamData },
    { no: 2, name: "queue", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

