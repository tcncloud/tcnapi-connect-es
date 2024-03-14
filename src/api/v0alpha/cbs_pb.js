// @generated by protoc-gen-es v1.8.0 with parameter "target=js+dts"
// @generated from file api/v0alpha/cbs.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Int64Value, proto3, Timestamp } from "@bufbuild/protobuf";
import { ScheduledCallbackStatus } from "../commons/cbs_pb.js";
import { CallType_Enum } from "../commons/acd_pb.js";

/**
 * @generated from message api.v0alpha.CreateServiceIdReq
 */
export const CreateServiceIdReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.CreateServiceIdReq",
  [],
);

/**
 * @generated from message api.v0alpha.CreateServiceIdRes
 */
export const CreateServiceIdRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.CreateServiceIdRes",
  () => [
    { no: 1, name: "service_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.ScheduledCallback
 */
export const ScheduledCallback = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.ScheduledCallback",
  () => [
    { no: 1, name: "scheduled_callback_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 100, name: "service_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 101, name: "status", kind: "enum", T: proto3.getEnumType(ScheduledCallbackStatus) },
    { no: 102, name: "start_time", kind: "message", T: Timestamp },
    { no: 103, name: "end_time", kind: "message", T: Timestamp },
    { no: 104, name: "phone_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 105, name: "caller_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 107, name: "notes", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 108, name: "create_date", kind: "message", T: Timestamp },
    { no: 109, name: "last_update", kind: "message", T: Timestamp },
    { no: 111, name: "last_updated_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 112, name: "callback_skills", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message api.v0alpha.ScheduledCallbackDetail
 */
export const ScheduledCallbackDetail = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.ScheduledCallbackDetail",
  () => [
    { no: 1, name: "scheduled_callback_detail_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "scheduled_callback_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 100, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 101, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.UpdateScheduledCallbackToReadyReq
 */
export const UpdateScheduledCallbackToReadyReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.UpdateScheduledCallbackToReadyReq",
  () => [
    { no: 2, name: "scheduled_callback_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "is_auto_return", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "service_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.UpdateScheduledCallbackToReadyRes
 */
export const UpdateScheduledCallbackToReadyRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.UpdateScheduledCallbackToReadyRes",
  [],
);

/**
 * @generated from message api.v0alpha.UpdateScheduledCallbackToCanceledReq
 */
export const UpdateScheduledCallbackToCanceledReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.UpdateScheduledCallbackToCanceledReq",
  () => [
    { no: 2, name: "scheduled_callback_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "service_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.UpdateScheduledCallbackToCanceledRes
 */
export const UpdateScheduledCallbackToCanceledRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.UpdateScheduledCallbackToCanceledRes",
  [],
);

/**
 * @generated from message api.v0alpha.UpdateScheduledCallbackToClosedReq
 */
export const UpdateScheduledCallbackToClosedReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.UpdateScheduledCallbackToClosedReq",
  () => [
    { no: 2, name: "scheduled_callback_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "manual_dial_call_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "service_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.UpdateScheduledCallbackToClosedRes
 */
export const UpdateScheduledCallbackToClosedRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.UpdateScheduledCallbackToClosedRes",
  [],
);

/**
 * @generated from message api.v0alpha.CreateCallbackWithDetailsReq
 */
export const CreateCallbackWithDetailsReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.CreateCallbackWithDetailsReq",
  () => [
    { no: 2, name: "callback", kind: "message", T: ScheduledCallback },
    { no: 3, name: "callback_details", kind: "message", T: ScheduledCallbackDetail, repeated: true },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "former_call_type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
    { no: 6, name: "former_call_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "country_sid", kind: "message", T: Int64Value },
    { no: 9, name: "manager_login", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message api.v0alpha.CreateCallbackWithDetailsRes
 */
export const CreateCallbackWithDetailsRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.CreateCallbackWithDetailsRes",
  () => [
    { no: 1, name: "scheduled_callback_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.UpdateScheduledCallbackReq
 */
export const UpdateScheduledCallbackReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.UpdateScheduledCallbackReq",
  () => [
    { no: 2, name: "scheduled_callback_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "new_status", kind: "enum", T: proto3.getEnumType(ScheduledCallbackStatus) },
    { no: 4, name: "start_time", kind: "message", T: Timestamp },
    { no: 5, name: "end_time", kind: "message", T: Timestamp },
    { no: 6, name: "phone_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "caller_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "skills", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 9, name: "last_updated_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "notes", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "callback_details", kind: "message", T: ScheduledCallbackDetail, repeated: true },
    { no: 12, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.UpdateScheduledCallbackRes
 */
export const UpdateScheduledCallbackRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.UpdateScheduledCallbackRes",
  [],
);

/**
 * @generated from message api.v0alpha.ScheduledCallbackWithDetails
 */
export const ScheduledCallbackWithDetails = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.ScheduledCallbackWithDetails",
  () => [
    { no: 1, name: "scheduled_callback_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "service_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "status", kind: "enum", T: proto3.getEnumType(ScheduledCallbackStatus) },
    { no: 4, name: "start_time", kind: "message", T: Timestamp },
    { no: 5, name: "end_time", kind: "message", T: Timestamp },
    { no: 6, name: "phone_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "caller_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "skills", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 9, name: "notes", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "create_date", kind: "message", T: Timestamp },
    { no: 11, name: "last_update", kind: "message", T: Timestamp },
    { no: 12, name: "created_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "last_updated_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "former_call_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 16, name: "former_call_type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
    { no: 17, name: "callback_details", kind: "message", T: ScheduledCallbackDetail, repeated: true },
    { no: 18, name: "country_sid", kind: "message", T: Int64Value },
  ],
);

/**
 * @generated from message api.v0alpha.GetScheduledCallbackWithDetailsReq
 */
export const GetScheduledCallbackWithDetailsReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.GetScheduledCallbackWithDetailsReq",
  () => [
    { no: 1, name: "service_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "scheduled_callback_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.GetScheduledCallbackWithDetailsRes
 */
export const GetScheduledCallbackWithDetailsRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.GetScheduledCallbackWithDetailsRes",
  () => [
    { no: 1, name: "callback", kind: "message", T: ScheduledCallbackWithDetails },
  ],
);

/**
 * @generated from message api.v0alpha.ListScheduledCallbacksWithDetailsRes
 */
export const ListScheduledCallbacksWithDetailsRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.ListScheduledCallbacksWithDetailsRes",
  () => [
    { no: 1, name: "callbacks", kind: "message", T: ScheduledCallbackWithDetails, repeated: true },
  ],
);

/**
 * @generated from message api.v0alpha.GetNextScheduledCallbackWithDetailsReq
 */
export const GetNextScheduledCallbackWithDetailsReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.GetNextScheduledCallbackWithDetailsReq",
  () => [
    { no: 1, name: "service_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "agent_skills", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message api.v0alpha.GetNextScheduledCallbackWithDetailsRes
 */
export const GetNextScheduledCallbackWithDetailsRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.GetNextScheduledCallbackWithDetailsRes",
  () => [
    { no: 1, name: "scheduled_callback", kind: "message", T: ScheduledCallbackWithDetails },
  ],
);

/**
 * ListScheduledCallbacksWithDetailsReq each of the following fields is applied as a filter phone_number, caller_id, or skills. The fields from_start_time and to_start_time need to be provided together.
 *
 * @generated from message api.v0alpha.ListScheduledCallbacksWithDetailsReq
 */
export const ListScheduledCallbacksWithDetailsReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.ListScheduledCallbacksWithDetailsReq",
  () => [
    { no: 2, name: "phone_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "caller_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "from_start_time", kind: "message", T: Timestamp },
    { no: 5, name: "to_start_time", kind: "message", T: Timestamp },
    { no: 6, name: "skills", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * ListScheduledCallbacksWithDetailsBySkillsReq requests all the scheduled callbacks by a filter of skills.
 *
 * @generated from message api.v0alpha.ListScheduledCallbacksWithDetailsBySkillsReq
 */
export const ListScheduledCallbacksWithDetailsBySkillsReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v0alpha.ListScheduledCallbacksWithDetailsBySkillsReq",
  () => [
    { no: 1, name: "service_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "skills", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

