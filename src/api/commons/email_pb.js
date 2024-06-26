// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/commons/email.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.EmailResult
 */
export const EmailResult = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.EmailResult",
  [
    {no: 0, name: "EMAIL_RESULT_UNKNOWN"},
    {no: 8600, name: "EMAIL_TASK_WAITING"},
    {no: 8700, name: "EMAIL_TASK_PROCESSING"},
    {no: 8710, name: "EMAIL_TASK_DNC"},
    {no: 8720, name: "EMAIL_TASK_INVALID"},
    {no: 8730, name: "EMAIL_TASK_ATTACHMENT_ERROR"},
    {no: 8740, name: "EMAIL_TASK_CANCELLED"},
    {no: 8800, name: "EMAIL_TASK_QUEUED"},
    {no: 8900, name: "EMAIL_TASK_DELIVERED"},
    {no: 8910, name: "EMAIL_TASK_DROPPED"},
    {no: 8920, name: "EMAIL_TASK_DEFERRED"},
    {no: 8930, name: "EMAIL_TASK_BOUNCED"},
    {no: 8940, name: "EMAIL_TASK_OPENED"},
    {no: 8950, name: "EMAIL_TASK_CLICKED"},
    {no: 8960, name: "EMAIL_TASK_UNSUBSCRIBED"},
    {no: 8970, name: "EMAIL_TASK_MARKED_AS_SPAM"},
    {no: 8980, name: "EMAIL_TASK_BLOCKED"},
  ],
);

/**
 * @generated from enum api.commons.EmailStatus
 */
export const EmailStatus = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.EmailStatus",
  [
    {no: 0, name: "EMAIL_STATUS_UNKKNOWN"},
    {no: 8000, name: "EMAIL_PREPARING"},
    {no: 8100, name: "EMAIL_SCHEDULED"},
    {no: 8150, name: "EMAIL_RESUME"},
    {no: 8200, name: "EMAIL_RUNNING"},
    {no: 8300, name: "EMAIL_COMPLETED"},
    {no: 8310, name: "EMAIL_CANCELLED"},
    {no: 8320, name: "EMAIL_CANCELLED_ADMIN"},
    {no: 8400, name: "EMAIL_SUMMED_COMPLETED"},
    {no: 8410, name: "EMAIL_SUMMED_CANCELLED"},
    {no: 8420, name: "EMAIL_SUMMED_CANCELLED_ADMIN"},
    {no: 8500, name: "EMAIL_PAUSED"},
  ],
);

/**
 * @generated from enum api.commons.EmailIBGroupStatus
 */
export const EmailIBGroupStatus = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.EmailIBGroupStatus",
  [
    {no: 0, name: "IB_EMAIL_GROUP_UNKNOWN"},
    {no: 10000, name: "IB_EMAIL_GROUP_PREPARING"},
    {no: 10010, name: "IB_EMAIL_GROUP_SCHEDULED"},
    {no: 10020, name: "IB_EMAIL_GROUP_RUNNING"},
    {no: 10030, name: "IB_EMAIL_GROUP_PAUSED"},
    {no: 10040, name: "IB_EMAIL_GROUP_RESUME"},
    {no: 10041, name: "IB_EMAIL_GROUP_RUNNING_WITH_ERROR"},
    {no: 10042, name: "IB_EMAIL_GROUP_ERROR_STANDBY"},
    {no: 10050, name: "IB_EMAIL_GROUP_COMPLETED"},
    {no: 10060, name: "IB_EMAIL_GROUP_CANCELLED_USER"},
    {no: 10070, name: "IB_EMAIL_GROUP_CANCELLED_ADMIN"},
    {no: 10150, name: "IB_EMAIL_GROUP_SUMMED_COMPLETED"},
    {no: 10160, name: "IB_EMAIL_GROUP_SUMMED_CANCELLED_USER"},
    {no: 10170, name: "IB_EMAIL_GROUP_SUMMED_CANCELLED_ADMIN"},
  ],
);

/**
 * @generated from enum api.commons.EmailIBReplyStatus
 */
export const EmailIBReplyStatus = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.EmailIBReplyStatus",
  [
    {no: 0, name: "IB_EMAIL_REPLY_UNKNOWN"},
    {no: 12000, name: "IB_EMAIL_REPLY_RECEIVED"},
    {no: 12010, name: "IB_EMAIL_AGENT_REPLY_SENDING"},
    {no: 12020, name: "IB_EMAIL_AGENT_REPLY_SENDING_FAILED"},
    {no: 12030, name: "IB_EMAIL_AGENT_REPLY_INVALID"},
    {no: 12040, name: "IB_EMAIL_AGENT_REPLY_SENT"},
    {no: 12050, name: "IB_EMAIL_AGENT_REPLY_DELIVERED"},
    {no: 12060, name: "IB_EMAIL_AGENT_REPLY_DROPPED"},
    {no: 12070, name: "IB_EMAIL_AGENT_REPLY_DEFERRED"},
    {no: 12080, name: "IB_EMAIL_AGENT_REPLY_BOUNCED"},
    {no: 12090, name: "IB_EMAIL_AGENT_REPLY_OPENED"},
    {no: 12100, name: "IB_EMAIL_AGENT_REPLY_CLICKED"},
    {no: 12110, name: "IB_EMAIL_AGENT_REPLY_UNSUBSCRIBED"},
    {no: 12120, name: "IB_EMAIL_AGENT_REPLY_MARKED_AS_SPAM"},
    {no: 12130, name: "IB_EMAIL_AGENT_REPLY_BLOCKED"},
    {no: 12140, name: "IB_EMAIL_REPLY_DNC"},
    {no: 12150, name: "IB_EMAIL_REPLY_CANCELLED"},
  ],
);

/**
 * @generated from enum api.commons.EmailIBGroupEvent
 */
export const EmailIBGroupEvent = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.EmailIBGroupEvent",
  [
    {no: 0, name: "IB_EMAIL_GROUP_EVENT_PREPARED"},
    {no: 1, name: "IB_EMAIL_GROUP_EVENT_SCHEDULED"},
    {no: 2, name: "IB_EMAIL_GROUP_EVENT_STARTED"},
    {no: 3, name: "IB_EMAIL_GROUP_EVENT_RUNNING"},
    {no: 4, name: "IB_EMAIL_GROUP_EVENT_STOPPED"},
    {no: 5, name: "IB_EMAIL_GROUP_EVENT_PAUSED"},
    {no: 6, name: "IB_EMAIL_GROUP_EVENT_RESUME"},
    {no: 7, name: "IB_EMAIL_GROUP_EVENT_CANCELLED"},
    {no: 8, name: "IB_EMAIL_GROUP_EVENT_MESSAGE_RECEIVED"},
    {no: 9, name: "IB_EMAIL_GROUP_EVENT_LOGIN_ERROR"},
    {no: 10, name: "IB_EMAIL_GROUP_EVENT_FETCH_ERROR"},
    {no: 11, name: "IB_EMAIL_GROUP_EVENT_STANDBY_ERROR"},
    {no: 12, name: "IB_EMAIL_GROUP_EVENT_COMPLETED"},
  ],
);

/**
 * @generated from enum api.commons.EmailIBReplyType
 */
export const EmailIBReplyType = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.EmailIBReplyType",
  [
    {no: 0, name: "REPLY_UNKNOWN"},
    {no: 1, name: "EXISTING_CONV"},
    {no: 2, name: "OUTBOUND_REPLY"},
    {no: 3, name: "AGENT_REPLY"},
    {no: 4, name: "INBOUND_PURE"},
    {no: 5, name: "OUTBOUND_TASK"},
    {no: 6, name: "OUTBOUND_PURE"},
  ],
);

