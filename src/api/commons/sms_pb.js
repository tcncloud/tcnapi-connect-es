// @generated by protoc-gen-es v1.3.0 with parameter "target=js+dts"
// @generated from file api/commons/sms.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.SMSStatus
 */
export const SMSStatus = proto3.makeEnum(
  "api.commons.SMSStatus",
  [
    {no: 0, name: "SMS_UNKWNON"},
    {no: 7000, name: "SMS_PREPARING"},
    {no: 7100, name: "SMS_SCHEDULED"},
    {no: 7150, name: "SMS_RESUME"},
    {no: 7200, name: "SMS_RUNNING"},
    {no: 7300, name: "SMS_COMPLETED"},
    {no: 7310, name: "SMS_CANCELLED"},
    {no: 7320, name: "SMS_CANCELLED_ADMIN"},
    {no: 7400, name: "SMS_SUMMED_COMPLETED"},
    {no: 7410, name: "SMS_SUMMED_CANCELLED"},
    {no: 7420, name: "SMS_SUMMED_CANCELLED_ADMIN"},
    {no: 7500, name: "SMS_PAUSED"},
    {no: 7600, name: "SMS_TASK_WAITING"},
    {no: 7700, name: "SMS_TASK_PROCESSING"},
    {no: 7710, name: "SMS_TASK_DNC"},
    {no: 7720, name: "SMS_TASK_INVALID"},
    {no: 7800, name: "SMS_TASK_QUEUED"},
    {no: 7900, name: "SMS_TASK_SENT"},
    {no: 7910, name: "SMS_TASK_DELIVERED"},
    {no: 7920, name: "SMS_TASK_NOT_DELIVERED"},
    {no: 7930, name: "SMS_TASK_CANCELED"},
  ],
);

/**
 * @generated from enum api.commons.SMSIBGroupStatus
 */
export const SMSIBGroupStatus = proto3.makeEnum(
  "api.commons.SMSIBGroupStatus",
  [
    {no: 0, name: "IB_SMS_GROUP_UNKNOWN"},
    {no: 11000, name: "IB_SMS_GROUP_PREPARING"},
    {no: 11010, name: "IB_SMS_GROUP_SCHEDULED"},
    {no: 11020, name: "IB_SMS_GROUP_RUNNING"},
    {no: 11030, name: "IB_SMS_GROUP_PAUSED"},
    {no: 11040, name: "IB_SMS_GROUP_RESUME"},
    {no: 11050, name: "IB_SMS_GROUP_COMPLETED"},
    {no: 11060, name: "IB_SMS_GROUP_CANCELLED_USER"},
    {no: 11070, name: "IB_SMS_GROUP_CANCELLED_ADMIN"},
    {no: 11150, name: "IB_SMS_GROUP_SUMMED_COMPLETED"},
    {no: 11160, name: "IB_SMS_GROUP_SUMMED_CANCELLED_USER"},
    {no: 11170, name: "IB_SMS_GROUP_SUMMED_CANCELLED_ADMIN"},
  ],
);

/**
 * @generated from enum api.commons.SMSIBTaskStatus
 */
export const SMSIBTaskStatus = proto3.makeEnum(
  "api.commons.SMSIBTaskStatus",
  [
    {no: 0, name: "IB_SMS_TASK_UNKNOWN"},
    {no: 13000, name: "IB_SMS_TASK_COMPLETED"},
  ],
);

/**
 * @generated from enum api.commons.SMSConversationAuditAction
 */
export const SMSConversationAuditAction = proto3.makeEnum(
  "api.commons.SMSConversationAuditAction",
  [
    {no: 0, name: "SMS_AUDIT_ACTION_CONVERSATION_START"},
    {no: 1, name: "SMS_AUDIT_ACTION_CONVERSATION_MSG_SENT"},
    {no: 2, name: "SMS_AUDIT_ACTION_CONVERSATION_MSG_READ"},
    {no: 3, name: "SMS_AUDIT_ACTION_CONVERSATION_UNASSIGNED"},
    {no: 4, name: "SMS_AUDIT_ACTION_CONVERSATION_ASSIGNED"},
    {no: 5, name: "SMS_AUDIT_ACTION_CONVERSATION_TRANSFERRED"},
  ],
);

/**
 * Agent Response status for Sms Manual approval Messages
 *
 * @generated from enum api.commons.SMSMamStatus
 */
export const SMSMamStatus = proto3.makeEnum(
  "api.commons.SMSMamStatus",
  [
    {no: 0, name: "QUEUED"},
    {no: 1, name: "APPROVED"},
    {no: 2, name: "REJECTED"},
  ],
);

/**
 * @generated from message api.commons.SimpleSmsMamData
 */
export const SimpleSmsMamData = proto3.makeMessageType(
  "api.commons.SimpleSmsMamData",
  () => [
    { no: 1, name: "src", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "dst", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "msg", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "sms_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "sms_task_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "is_toll_free", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "is_time_zone", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "provider_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "client_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 11, name: "simple_sms_mam_meta_data", kind: "message", T: SimpleSmsMamKeyValue, repeated: true },
    { no: 12, name: "dst_country_code", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.commons.SimpleSmsMamKeyValue
 */
export const SimpleSmsMamKeyValue = proto3.makeMessageType(
  "api.commons.SimpleSmsMamKeyValue",
  () => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

