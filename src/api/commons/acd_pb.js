// @generated by protoc-gen-es v1.5.1 with parameter "target=js+dts"
// @generated from file api/commons/acd.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.ACDStatus
 */
export const ACDStatus = proto3.makeEnum(
  "api.commons.ACDStatus",
  [
    {no: 0, name: "ACD_UNKNOWN"},
    {no: 4100, name: "AGENT_SESSION_LOGGING_IN"},
    {no: 4110, name: "AGENT_SESSION_LOGGED_IN"},
    {no: 4200, name: "AGENT_SESSION_COMPLETED"},
    {no: 4300, name: "AGENT_SESSION_SUMMED"},
    {no: 4400, name: "AGENT_SESSION_ACCOUNTINGEXPORT"},
  ],
);

/**
 * @generated from enum api.commons.AgentCallLogCallEnded
 */
export const AgentCallLogCallEnded = proto3.makeEnum(
  "api.commons.AgentCallLogCallEnded",
  [
    {no: 0, name: "AGENT_CANCELLED"},
    {no: 1, name: "CALLER_DISCONNECTED"},
    {no: 2, name: "NOT_CONNECTED"},
    {no: 3, name: "AGENT_LOST"},
    {no: 4, name: "AGENT_HANGUP"},
    {no: 5, name: "CALLER_HANGUP"},
    {no: 6, name: "CALL_END_ESTIMATE"},
  ],
);

/**
 * @generated from enum api.commons.HoldType
 */
export const HoldType = proto3.makeEnum(
  "api.commons.HoldType",
  [
    {no: 0, name: "UNKNOWN"},
    {no: 1, name: "SIMPLE"},
    {no: 2, name: "MULTI"},
  ],
);

/**
 * Queued notification type definition that's going to be used by the ACD client to determine
 * the notification type of the queued call
 *
 * @generated from enum api.commons.QueuedNotificationType
 */
export const QueuedNotificationType = proto3.makeEnum(
  "api.commons.QueuedNotificationType",
  [
    {no: 0, name: "QueuedNotificationType_GENERAL_INITIAL"},
    {no: 1, name: "QueuedNotificationType_PBX_INITIAL"},
    {no: 2, name: "QueuedNotificationType_AGENT_BOUND_INITIAL"},
    {no: 3, name: "QueuedNotificationType_GENERAL_REQUEUED"},
    {no: 4, name: "QueuedNotificationType_AGENT_BOUND_REQUEUED"},
  ],
);

/**
 * @generated from enum api.commons.TransferMemberType
 */
export const TransferMemberType = proto3.makeEnum(
  "api.commons.TransferMemberType",
  [
    {no: 0, name: "TransferMemberType_AGENT"},
    {no: 1, name: "TransferMemberType_CALLER"},
    {no: 2, name: "TransferMemberType_OUTBOUND"},
  ],
);

/**
 * enum used to represent a dtmf tone
 *
 * @generated from enum api.commons.DTMFDigit
 */
export const DTMFDigit = proto3.makeEnum(
  "api.commons.DTMFDigit",
  [
    {no: 0, name: "DTMFDigit_0"},
    {no: 1, name: "DTMFDigit_1"},
    {no: 2, name: "DTMFDigit_2"},
    {no: 3, name: "DTMFDigit_3"},
    {no: 4, name: "DTMFDigit_4"},
    {no: 5, name: "DTMFDigit_5"},
    {no: 6, name: "DTMFDigit_6"},
    {no: 7, name: "DTMFDigit_7"},
    {no: 8, name: "DTMFDigit_8"},
    {no: 9, name: "DTMFDigit_9"},
    {no: 10, name: "DTMFDigit_A"},
    {no: 11, name: "DTMFDigit_B"},
    {no: 12, name: "DTMFDigit_C"},
    {no: 13, name: "DTMFDigit_D"},
    {no: 14, name: "DTMFDigit_STAR"},
    {no: 15, name: "DTMFDigit_POUND"},
  ],
);

/**
 * a complex type that completely identifies an agent
 *
 * @generated from message api.commons.AgentSession
 */
export const AgentSession = proto3.makeMessageType(
  "api.commons.AgentSession",
  () => [
    { no: 1, name: "agent_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "tenant_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "region_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * a complex type that completely identifies a caller
 *
 * @generated from message api.commons.CallerSid
 */
export const CallerSid = proto3.makeMessageType(
  "api.commons.CallerSid",
  () => [
    { no: 1, name: "caller_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
    { no: 3, name: "tenant_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.commons.AgentStatus
 */
export const AgentStatus = proto3.makeMessageType(
  "api.commons.AgentStatus",
  [],
);

/**
 * @generated from enum api.commons.AgentStatus.Enum
 */
export const AgentStatus_Enum = proto3.makeEnum(
  "api.commons.AgentStatus.Enum",
  [
    {no: 0, name: "UNAVALIABLE"},
    {no: 1, name: "IDLE"},
    {no: 2, name: "READY"},
    {no: 3, name: "HUNGUP"},
    {no: 4, name: "DESTROYED"},
    {no: 5, name: "PEERED"},
    {no: 6, name: "PAUSED"},
    {no: 7, name: "WRAPUP"},
    {no: 8, name: "PREPARING_AFTER_IDLE"},
    {no: 9, name: "PREPARING_AFTER_WRAPUP"},
    {no: 10, name: "PREPARING_AFTER_PAUSE"},
    {no: 11, name: "PREPARING_AFTER_DIAL_CANCEL"},
    {no: 12, name: "PREPARING_AFTER_PBX_REJECT"},
    {no: 13, name: "PREPARING_AFTER_PBX_HANGUP"},
    {no: 14, name: "PREPARING_AFTER_PBX_WAS_TAKEN"},
    {no: 15, name: "PREPARING_AFTER_GUI_BUSY"},
    {no: 16, name: "MANUAL_DIAL_PREPARED"},
    {no: 17, name: "PREVIEW_DIAL_PREPARED"},
    {no: 18, name: "MANUAL_DIAL_STARTED"},
    {no: 19, name: "PREVIEW_DIAL_STARTED"},
    {no: 20, name: "OUTBOUND_LOCKED"},
    {no: 21, name: "WARM_AGENT_TRANSFER_STARTED_SOURCE"},
    {no: 22, name: "WARM_AGENT_TRANSFER_STARTED_DESTINATION"},
    {no: 23, name: "WARM_OUTBOUND_TRANSFER_STARTED"},
    {no: 24, name: "WARM_OUTBOUND_TRANSFER_PEER_LOST"},
    {no: 25, name: "PBX_POPUP_LOCKED"},
    {no: 26, name: "PEERED_WITH_CALL_ON_HOLD"},
    {no: 27, name: "CALLBACK_RESUMING"},
    {no: 28, name: "GUI_BUSY"},
    {no: 29, name: "INTERCOM"},
    {no: 30, name: "INTERCOM_RINGING_SOURCE"},
    {no: 31, name: "INTERCOM_RINGING_DESTINATION"},
    {no: 32, name: "WARM_OUTBOUND_TRANSFER_OUTBOUND_LOST"},
    {no: 33, name: "PREPARED_TO_PEER"},
    {no: 34, name: "WARM_SKILL_TRANSFER_SOURCE_PENDING"},
    {no: 35, name: "CALLER_TRANSFER_STARTED"},
    {no: 36, name: "CALLER_TRANSFER_LOST_PEER"},
    {no: 37, name: "CALLER_TRANSFER_LOST_MERGED_CALLER"},
    {no: 38, name: "COLD_OUTBOUND_TRANSFER_STARTED"},
    {no: 39, name: "COLD_AGENT_TRANSFER_STARTED"},
  ],
);

/**
 * @generated from message api.commons.CallerStatus
 */
export const CallerStatus = proto3.makeMessageType(
  "api.commons.CallerStatus",
  [],
);

/**
 * @generated from enum api.commons.CallerStatus.Enum
 */
export const CallerStatus_Enum = proto3.makeEnum(
  "api.commons.CallerStatus.Enum",
  [
    {no: 0, name: "UNAVALIABLE"},
    {no: 1, name: "IDLE"},
    {no: 2, name: "READY"},
    {no: 3, name: "HUNGUP"},
    {no: 4, name: "DESTROYED"},
    {no: 5, name: "PEERED"},
    {no: 6, name: "OUTBOUND_LOCKED"},
    {no: 7, name: "OUTBOUND_PEERED"},
    {no: 8, name: "PBX_POPUP_LOCKED"},
    {no: 9, name: "VOICEMAIL"},
    {no: 10, name: "PEERED_WITH_CALL_ON_HOLD"},
    {no: 11, name: "CALLBACK_SUSPENDED"},
    {no: 12, name: "WARM_AGENT_TRANSFER_STARTED"},
    {no: 13, name: "WARM_OUTBOUND_TRANSFER_STARTED"},
    {no: 14, name: "OUTBOUND_DIAL_TRANSFER_STARTED"},
    {no: 15, name: "PREPARED_TO_PEER"},
    {no: 16, name: "WARM_SKILL_TRANSFER_PENDING"},
    {no: 17, name: "CALLER_TRANSFER_PEER"},
    {no: 18, name: "CALLER_TRANSFER_MERGED_CALLER"},
    {no: 19, name: "CALLER_PEERED"},
  ],
);

/**
 * Call type definition that's going to be used by the ACD client to determine
 * the call_id type
 *
 * @generated from message api.commons.CallType
 */
export const CallType = proto3.makeMessageType(
  "api.commons.CallType",
  [],
);

/**
 * @generated from enum api.commons.CallType.Enum
 */
export const CallType_Enum = proto3.makeEnum(
  "api.commons.CallType.Enum",
  [
    {no: 0, name: "INBOUND"},
    {no: 1, name: "OUTBOUND"},
    {no: 2, name: "PREVIEW"},
    {no: 3, name: "MANUAL"},
    {no: 4, name: "MAC"},
  ],
);

/**
 * @generated from message api.commons.AgentDialIn
 */
export const AgentDialIn = proto3.makeMessageType(
  "api.commons.AgentDialIn",
  [],
);

/**
 * @generated from enum api.commons.AgentDialIn.Enum
 */
export const AgentDialIn_Enum = proto3.makeEnum(
  "api.commons.AgentDialIn.Enum",
  [
    {no: 0, name: "TOLL_FREE"},
    {no: 1, name: "SOFTPHONE"},
    {no: 2, name: "LOCAL"},
  ],
);

/**
 * @generated from message api.commons.HuntGroupType
 */
export const HuntGroupType = proto3.makeMessageType(
  "api.commons.HuntGroupType",
  [],
);

/**
 * @generated from enum api.commons.HuntGroupType.Enum
 */
export const HuntGroupType_Enum = proto3.makeEnum(
  "api.commons.HuntGroupType.Enum",
  [
    {no: 0, name: "UNCONNECTED"},
    {no: 1, name: "CONNECTED"},
    {no: 2, name: "SOFTPHONE"},
  ],
);

/**
 * @generated from message api.commons.AgentSessionLogActionKey
 */
export const AgentSessionLogActionKey = proto3.makeMessageType(
  "api.commons.AgentSessionLogActionKey",
  [],
);

/**
 * @generated from enum api.commons.AgentSessionLogActionKey.Enum
 */
export const AgentSessionLogActionKey_Enum = proto3.makeEnum(
  "api.commons.AgentSessionLogActionKey.Enum",
  [
    {no: 0, name: "AGENT_PAUSE_START"},
    {no: 1, name: "AGENT_PAUSE_STOP"},
    {no: 2, name: "AGENT_SKILLS_INITIAL"},
    {no: 3, name: "AGENT_LOGOUT"},
    {no: 4, name: "EXECUTED_AGENT_TRIGGER"},
    {no: 5, name: "DURATION_SINCE_LAST_LOGON"},
    {no: 6, name: "AGENT_LOGIN_IP"},
    {no: 7, name: "MAC_DECISION"},
    {no: 8, name: "MAC_10_KEY_DECISION"},
    {no: 9, name: "MAC_10_KEY_CONFIRM"},
    {no: 10, name: "HUNT_GROUP_REASSIGNMENT"},
    {no: 11, name: "PBX_ACCEPT"},
    {no: 12, name: "PBX_HANGUP"},
    {no: 13, name: "PBX_LOST"},
    {no: 14, name: "PBX_REJECT"},
    {no: 15, name: "PBX_TIMEOUT"},
    {no: 16, name: "WARM_TRANSFER_AGENT_INVITE_CALLER_INITIAL"},
    {no: 17, name: "WARM_TRANSFER_AGENT_INVITE_CALLER"},
    {no: 18, name: "WARM_TRANSFER_AGENT_START_SOURCE"},
    {no: 19, name: "WARM_TRANSFER_AGENT_END_SOURCE"},
    {no: 20, name: "WARM_TRANSFER_AGENT_START_DESTINATION"},
    {no: 21, name: "WARM_TRANSFER_AGENT_END_DESTINATION"},
    {no: 22, name: "WARM_TRANSFER_OUTBOUND_INVITE_CALLER_INITIAL"},
    {no: 23, name: "WARM_TRANSFER_OUTBOUND_INVITE_CALLER"},
    {no: 24, name: "WARM_TRANSFER_OUTBOUND_START"},
    {no: 25, name: "WARM_TRANSFER_OUTBOUND_END"},
    {no: 26, name: "COLD_TRANSFER_OUTBOUND_START"},
    {no: 27, name: "COLD_TRANSFER_AGENT_START_SOURCE"},
    {no: 28, name: "COLD_TRANSFER_AGENT_END_SOURCE"},
    {no: 29, name: "COLD_TRANSFER_AGENT_START_DESTINATION"},
    {no: 30, name: "COLD_TRANSFER_AGENT_END_DESTINATION"},
    {no: 31, name: "HOLD_START"},
    {no: 32, name: "HOLD_END"},
    {no: 33, name: "REQUEUE"},
    {no: 34, name: "CALLER_SENT_TO_VOICEMAIL"},
    {no: 35, name: "RECORDING_START"},
    {no: 36, name: "RECORDING_STOP"},
    {no: 37, name: "PBR_STARTED_RECORD"},
    {no: 38, name: "PBR_FINISHED_RECORD"},
    {no: 39, name: "ACD_LOGOUT"},
    {no: 40, name: "ACD_REGISTER"},
    {no: 41, name: "EXECUTED_AGENT_WEBLINK"},
    {no: 42, name: "TRANSFER_HOLD_CALLER"},
    {no: 43, name: "TRANSFER_UNHOLD_CALLER"},
    {no: 44, name: "TRANSFER_HOLD_AGENT"},
    {no: 45, name: "TRANSFER_UNHOLD_AGENT"},
    {no: 46, name: "TRANSFER_HOLD"},
    {no: 47, name: "TRANSFER_UNHOLD"},
    {no: 48, name: "TRANSFER_HOLD_OUTBOUND"},
    {no: 49, name: "TRANSFER_UNHOLD_OUTBOUND"},
    {no: 50, name: "TRANSFER_ADD_OUTBOUND"},
    {no: 51, name: "TRANSFER_REMOVE_OUTBOUND"},
    {no: 52, name: "WARM_CALLER_TRANSFER_START"},
    {no: 53, name: "WARM_CALLER_TRANSFER_INVITE_CALLER_INITIAL"},
    {no: 54, name: "WARM_CALLER_TRANSFER_INVITE_CALLER"},
    {no: 55, name: "WARM_CALLER_TRANSFER_END"},
  ],
);

/**
 * @generated from message api.commons.AgentCallLogActionKey
 */
export const AgentCallLogActionKey = proto3.makeMessageType(
  "api.commons.AgentCallLogActionKey",
  [],
);

/**
 * @generated from enum api.commons.AgentCallLogActionKey.Enum
 */
export const AgentCallLogActionKey_Enum = proto3.makeEnum(
  "api.commons.AgentCallLogActionKey.Enum",
  [
    {no: 0, name: "DNCL_ADD"},
    {no: 1, name: "CALL_ENDED"},
    {no: 2, name: "CALL_DISCONNECT"},
    {no: 3, name: "CALLER_HUNGUP"},
    {no: 4, name: "WARM_TRANSFER_AGENT_INVITE_CALLER_INITIAL"},
    {no: 5, name: "WARM_TRANSFER_AGENT_INVITE_CALLER"},
    {no: 6, name: "WARM_TRANSFER_AGENT_START"},
    {no: 7, name: "WARM_TRANSFER_AGENT_END"},
    {no: 8, name: "WARM_TRANSFER_OUTBOUND_INVITE_CALLER"},
    {no: 9, name: "WARM_TRANSFER_OUTBOUND_INVITE_CALLER_INITIAL"},
    {no: 10, name: "WARM_TRANSFER_OUTBOUND_START"},
    {no: 11, name: "WARM_TRANSFER_OUTBOUND_END"},
    {no: 12, name: "COLD_TRANSFER_AGENT_START"},
    {no: 13, name: "COLD_TRANSFER_AGENT_END"},
    {no: 14, name: "COLD_TRANSFER_OUTBOUND_START"},
    {no: 15, name: "CALLBACK_SUSPEND_START"},
    {no: 16, name: "CALLBACK_RESUMING"},
    {no: 17, name: "VOICEMAIL_END"},
    {no: 18, name: "CALLER_SENT_TO_VOICEMAIL"},
    {no: 19, name: "HOLD_START"},
    {no: 20, name: "HOLD_END"},
    {no: 21, name: "RECORDING_START"},
    {no: 22, name: "RECORDING_STOP"},
    {no: 23, name: "CALL_SKILLS_SCORE"},
    {no: 24, name: "CALL_SKILLS_MATCHED"},
    {no: 25, name: "CALL_SKILLS_CURRENT"},
    {no: 26, name: "CALL_SKILLS_INITIAL"},
    {no: 27, name: "SKILLS_CHANGED_DROPSKILLS"},
    {no: 28, name: "SKILLS_CHANGED_ADDSKILLS"},
    {no: 29, name: "REQUEUE"},
    {no: 30, name: "SKILLS_CHANGED_REQUEUE"},
    {no: 31, name: "SCRUB_OVERRIDE"},
    {no: 32, name: "CALLBACK_RESUMING_WITH_MANUAL_CALL_START"},
    {no: 33, name: "CALLBACK_RESUMING_WITH_MANUAL_CALL_FINISH"},
    {no: 34, name: "CALLBACK_RESUMING_WITH_MANUAL_CALL_TIMEDOUT"},
    {no: 35, name: "CALLBACK_RESUMING_WITH_MANUAL_CALL_REPLACED"},
    {no: 36, name: "TRANSFER_HOLD"},
    {no: 37, name: "TRANSFER_UNHOLD"},
    {no: 38, name: "WARM_CALLER_TRANSFER_SOURCE_START"},
    {no: 39, name: "WARM_CALLER_TRANSFER_DESTINATION_START"},
    {no: 40, name: "WARM_CALLER_TRANSFER_INVITE_CALLER_INITIAL"},
    {no: 41, name: "WARM_CALLER_TRANSFER_INVITE_CALLER"},
    {no: 42, name: "WARM_CALLER_TRANSFER_END"},
    {no: 43, name: "BARGE_IN_START"},
    {no: 44, name: "BARGE_IN_STOP"},
  ],
);

/**
 * @generated from message api.commons.AgentCallLogActionValue
 */
export const AgentCallLogActionValue = proto3.makeMessageType(
  "api.commons.AgentCallLogActionValue",
  [],
);

/**
 * @generated from enum api.commons.AgentCallLogActionValue.Enum
 */
export const AgentCallLogActionValue_Enum = proto3.makeEnum(
  "api.commons.AgentCallLogActionValue.Enum",
  [
    {no: 0, name: "UNSPECIFIED"},
    {no: 1, name: "DNCL_RESULT_FAILED"},
    {no: 2, name: "CALL_ENDED_CALLER_DISCONNECTED"},
  ],
);

/**
 * @generated from message api.commons.HuntGroupParamKey
 */
export const HuntGroupParamKey = proto3.makeMessageType(
  "api.commons.HuntGroupParamKey",
  [],
);

/**
 * @generated from enum api.commons.HuntGroupParamKey.Enum
 */
export const HuntGroupParamKey_Enum = proto3.makeEnum(
  "api.commons.HuntGroupParamKey.Enum",
  [
    {no: 0, name: "AGENT_DIAL_IN_NUMBER"},
    {no: 1, name: "AGENT_LOGIN_GUI_STATISTICS_TEMPLATE"},
    {no: 2, name: "AGENT_PASSWORD_REQUIRES_LETTER"},
    {no: 3, name: "AGENT_PASSWORD_REQUIRES_NUMBER"},
    {no: 4, name: "AGENT_PASSWORD_REQUIRES_SYMBOL"},
    {no: 5, name: "AGENT_PASSWORD_REQUIRES_UPPER_LOWER"},
    {no: 6, name: "AGENT_SKILLS_REASSIGNMENT"},
    {no: 7, name: "AGENT_STATS_CALL_HISTORY"},
    {no: 8, name: "AGENT_TRIGGER"},
    {no: 9, name: "AGENT_DISPOSITION_CONDITIONAL_DNCL"},
    {no: 10, name: "ALLOWED_IPS"},
    {no: 11, name: "ALLOW_AGENT_HOLD"},
    {no: 12, name: "ALLOW_AGENT_INTERCOM"},
    {no: 13, name: "ALLOW_AGENT_PASSWORD_RESET"},
    {no: 14, name: "ALLOW_AGENT_PAUSE_CODE_RESET"},
    {no: 15, name: "ALLOW_AGENT_TO_PAUSE"},
    {no: 16, name: "ALLOW_CALLBACK_SCHEDULING"},
    {no: 17, name: "ALLOW_EXPORT_PHONE_NUMBER_ACTIVITY"},
    {no: 18, name: "ALLOW_MANUAL_APPROVAL_OF_CALLS"},
    {no: 19, name: "ALLOW_MANUAL_DIALING"},
    {no: 20, name: "ALLOW_PHONE_NUMBER_ACTIVITY"},
    {no: 21, name: "ALLOW_PREVIEW_DIAL_CANCEL"},
    {no: 22, name: "ALLOW_SCHEDULED_CALLBACK_CALLING"},
    {no: 23, name: "ALLOW_TRANSFER_CALLS"},
    {no: 24, name: "ALPHANUMERIC_KEYPAD"},
    {no: 25, name: "AUTO_PAUSE_ON_MULTI_HOLD"},
    {no: 26, name: "AUTO_PAUSE_ON_PREVIEW_CANCEL"},
    {no: 27, name: "DEFAULT_AGENT_PAUSE_CODE"},
    {no: 28, name: "DEFAULT_AGENT_TRANSFERS_FILTERING"},
    {no: 29, name: "DEFAULT_DNCL_COUNTRY"},
    {no: 30, name: "DEFAULT_DNCL_EXPIRATION"},
    {no: 31, name: "DEFAULT_INBOUND_CALL_DNCL_EXPIRATION"},
    {no: 32, name: "DEFAULT_MANUAL_CALL_DNCL_EXPIRATION"},
    {no: 33, name: "DEFAULT_OUTBOUND_CALL_DNCL_EXPIRATION"},
    {no: 34, name: "DEFAULT_PREVIEW_CALL_DNCL_EXPIRATION"},
    {no: 35, name: "DEFAULT_SCHEDULED_CALLBACK_ROUTING"},
    {no: 36, name: "DISCONNECT_CALL_CONFIRMATION"},
    {no: 37, name: "DISPLAY_AGENT_TRANSFERS_FILTERING"},
    {no: 38, name: "DISPLAY_DATA_COLLECT_DATA"},
    {no: 39, name: "DISPLAY_DATA_DIPPED_DATA"},
    {no: 40, name: "DISPLAY_IVR_KEYS_PRESSED"},
    {no: 41, name: "DISPLAY_PHONE_ZIP_METADATA"},
    {no: 42, name: "DISPLAY_RECORDING_INDICATOR"},
    {no: 43, name: "DO_ALLOW_ADD_DNCL"},
    {no: 44, name: "ENABLE_RECORDING_PAUSE"},
    {no: 45, name: "HOLD_QUEUE_MONITORING"},
    {no: 46, name: "HOLD_QUEUE_MONITORING_AGENT_ROUTING"},
    {no: 47, name: "HOLD_QUEUE_MONITORING_PREFERRED_HUNT_GROUP_ROUTING"},
    {no: 48, name: "HOLD_QUEUE_MONITORING_REQUIRED_HUNT_GROUP_ROUTING"},
    {no: 49, name: "HUNT_GROUP_CLIENT_INFO_DISPLAY_TEMPLATE"},
    {no: 50, name: "HUNT_GROUP_SCRIPT"},
    {no: 51, name: "HUNT_GROUP_WEB_LINK"},
    {no: 52, name: "MANUAL_APPROVAL_NUMBER_CONFIRMATION"},
    {no: 53, name: "MANUAL_DIAL_AUTO_DNCL_ADD"},
    {no: 54, name: "MANUAL_DIAL_DEFAULT_CALLER_ID"},
    {no: 55, name: "MANUAL_DIAL_DEFAULT_COUNTRY"},
    {no: 56, name: "MANUAL_DIAL_DISPLAY_COUNTRY_SELECT_MENU"},
    {no: 57, name: "MANUAL_DIAL_DEFAULT_CALLER_ID_COUNTRY"},
    {no: 58, name: "MANUAL_DIAL_DISPLAY_CALLER_ID_COUNTRY_SELECT_MENU"},
    {no: 59, name: "MANUAL_DIAL_DISPLAY_OUTBOUND_NUMBER_PHONE_BOOK"},
    {no: 60, name: "MANUAL_DIAL_DISPLAY_PHONE_BOOK"},
    {no: 61, name: "MANUAL_DIAL_NUMBER_WHITE_LIST"},
    {no: 62, name: "MANUAL_DIAL_OVERRIDE_CELL_SCRUB"},
    {no: 64, name: "MANUAL_DIAL_OVERRIDE_RECORDING_SETTINGS"},
    {no: 65, name: "MANUAL_DIAL_SCRUB_OVERRIDE"},
    {no: 66, name: "MANUAL_DIAL_TIMEZONE_OVERRIDE"},
    {no: 67, name: "MANUAL_DIAL_USER_EDITABLE_CALLER_ID"},
    {no: 68, name: "MANUAL_QUEUE_CONFIGURATION_NAME"},
    {no: 69, name: "MINIMUM_AGENT_PASSWORD_LENGTH"},
    {no: 70, name: "PHONE_NUMBER_ACTIVITY_EDIT_RESPONSES"},
    {no: 71, name: "PHONE_NUMBER_ACTIVITY_RECORDINGS_DOWNLOAD"},
    {no: 72, name: "PREVIEW_DIAL_AUTO_DNCL_ADD"},
    {no: 73, name: "PREVIEW_DIAL_CALL_TIMEOUT"},
    {no: 74, name: "PREVIEW_DIAL_CONFIRMATION"},
    {no: 75, name: "PREVIEW_QUEUE_CONFIGURATION_NAME"},
    {no: 76, name: "RECORDING_DELAY"},
    {no: 77, name: "REQUEUE_TRANSFER_QUEUE_CONFIGURATION_NAME"},
    {no: 78, name: "SCHEDULED_CALLBACKS_RETRIEVAL_MODE"},
    {no: 79, name: "SCHEDULED_CALLBACK_ROUTING_DISALLOWED"},
    {no: 80, name: "TRANSFER_CALLS_DEFAULT_CALLER_ID"},
    {no: 81, name: "TRANSFER_CALLS_DEFAULT_COUNTRY"},
    {no: 82, name: "TRANSFER_CALLS_DEFAULT_TRANSFER_NUMBER"},
    {no: 83, name: "TRANSFER_CALLS_DISPLAY_CALLER_ID_PHONE_BOOK"},
    {no: 84, name: "TRANSFER_CALLS_DISPLAY_COUNTRY_SELECT_MENU"},
    {no: 85, name: "TRANSFER_CALLS_DISPLAY_TRANSFER_NUMBER_PHONE_BOOK"},
    {no: 86, name: "TRANSFER_CALLS_HAND_OFF_TYPE"},
    {no: 87, name: "TRANSFER_CALLS_TRANSFER_TYPE"},
    {no: 88, name: "TRANSFER_CALLS_USER_EDITABLE_CALLER_ID"},
    {no: 89, name: "TRANSFER_CALLS_USER_EDITABLE_TRANSFER_NUMBER"},
    {no: 90, name: "TRANSFER_RECORDING_STATUS"},
    {no: 91, name: "USE_ADVANCED_GATEWAY_TITLE"},
    {no: 92, name: "USE_AGENT_PAUSE_CODES"},
    {no: 93, name: "USE_IP_BASED_AUTH"},
    {no: 94, name: "HUNT_GROUP_REASSIGNMENT_DISALLOWED"},
    {no: 95, name: "REQUEUE_TRANSFER_DISALLOWED_SKILLS"},
    {no: 96, name: "ALLOW_MANUAL_APPROVAL_FOR_MESSAGING"},
    {no: 97, name: "DISPLAY_SKILLS"},
    {no: 98, name: "PBX_TRANSFER_DISALLOWED_EXTENSIONS"},
  ],
);

/**
 * @generated from message api.commons.ReplaceConfig
 */
export const ReplaceConfig = proto3.makeMessageType(
  "api.commons.ReplaceConfig",
  [],
);

/**
 * @generated from enum api.commons.ReplaceConfig.Enum
 */
export const ReplaceConfig_Enum = proto3.makeEnum(
  "api.commons.ReplaceConfig.Enum",
  [
    {no: 0, name: "NO_CHANGE"},
    {no: 1, name: "TENANT"},
    {no: 2, name: "REPLACE"},
  ],
);

/**
 * @generated from message api.commons.TransferMember
 */
export const TransferMember = proto3.makeMessageType(
  "api.commons.TransferMember",
  () => [
    { no: 1, name: "identifier", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "display_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "member_type", kind: "enum", T: proto3.getEnumType(TransferMemberType) },
  ],
);

/**
 * message used to wrap the alert one of
 *
 * @generated from message api.commons.AgentAlert
 */
export const AgentAlert = proto3.makeMessageType(
  "api.commons.AgentAlert",
  () => [
    { no: 1, name: "backoffice_message", kind: "message", T: AgentBackofficeMessageAlert, oneof: "alert" },
    { no: 2, name: "directed_call_ringing", kind: "message", T: AgentDirectedCallRingingAlert, oneof: "alert" },
    { no: 3, name: "directed_call_hangup", kind: "message", T: AgentDirectedCallHangupAlert, oneof: "alert" },
  ],
);

/**
 * an event used to send a back office message to an agent
 *
 * @generated from message api.commons.AgentBackofficeMessageAlert
 */
export const AgentBackofficeMessageAlert = proto3.makeMessageType(
  "api.commons.AgentBackofficeMessageAlert",
  () => [
    { no: 1, name: "expire_duration", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "timestamp", kind: "message", T: Timestamp },
    { no: 3, name: "target_agent_session", kind: "message", T: AgentSession },
    { no: 4, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * an event used to alert an agent that they have an agent directed call that came in
 *
 * @generated from message api.commons.AgentDirectedCallRingingAlert
 */
export const AgentDirectedCallRingingAlert = proto3.makeMessageType(
  "api.commons.AgentDirectedCallRingingAlert",
  () => [
    { no: 1, name: "expire_duration", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "timestamp", kind: "message", T: Timestamp },
    { no: 3, name: "target_agent_session", kind: "message", T: AgentSession },
    { no: 4, name: "caller_sid", kind: "message", T: CallerSid },
    { no: 5, name: "caller_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "destination_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * an event used to alert an agent that they have an agent directed call that hung up
 *
 * @generated from message api.commons.AgentDirectedCallHangupAlert
 */
export const AgentDirectedCallHangupAlert = proto3.makeMessageType(
  "api.commons.AgentDirectedCallHangupAlert",
  () => [
    { no: 1, name: "expire_duration", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "timestamp", kind: "message", T: Timestamp },
    { no: 3, name: "target_agent_session", kind: "message", T: AgentSession },
    { no: 4, name: "caller_sid", kind: "message", T: CallerSid },
    { no: 5, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.commons.AgentState
 */
export const AgentState = proto3.makeMessageType(
  "api.commons.AgentState",
  () => [
    { no: 2, name: "status", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "status_desc", kind: "enum", T: proto3.getEnumType(AgentStatus_Enum) },
    { no: 4, name: "paused", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "queue", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "current_session_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "last_status_change", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "monitoring", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "calls_count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "last_sip_code", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 11, name: "agent_peer_is_lost_call", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 12, name: "disabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "caller_was_suspended", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 14, name: "transfer_members", kind: "message", T: TransferMember, repeated: true },
    { no: 15, name: "agent_peer_is_direct_to_agent", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 16, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 17, name: "agent_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 18, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 19, name: "agent_is_muted", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

