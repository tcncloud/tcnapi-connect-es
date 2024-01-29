// @generated by protoc-gen-es v1.7.1 with parameter "target=js+dts"
// @generated from file api/commons/perms.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.Permission
 */
export const Permission = proto3.makeEnum(
  "api.commons.Permission",
  [
    {no: 0, name: "NO_PERMISSION"},
    {no: 1, name: "VIEW_LIST_MANAGER"},
    {no: 2, name: "CREATE_LIST_MANAGER"},
    {no: 3, name: "EDIT_LIST_MANAGER"},
    {no: 4, name: "DELETE_LIST_MANAGER"},
    {no: 5, name: "EXECUTE_LIST_MANAGER"},
    {no: 6, name: "VIEW_FIELD_DEFINITIONS"},
    {no: 7, name: "CREATE_FIELD_DEFINITIONS"},
    {no: 8, name: "EDIT_FIELD_DEFINITIONS"},
    {no: 9, name: "DELETE_FIELD_DEFINITIONS"},
    {no: 10, name: "EXECUTE_FIELD_DEFINITIONS"},
    {no: 11, name: "VIEW_IMPORT_TEMPLATES"},
    {no: 12, name: "CREATE_IMPORT_TEMPLATES"},
    {no: 13, name: "EDIT_IMPORT_TEMPLATES"},
    {no: 14, name: "DELETE_IMPORT_TEMPLATES"},
    {no: 15, name: "EXECUTE_IMPORT_TEMPLATES"},
    {no: 16, name: "VIEW_ADMIN_TOOLS"},
    {no: 17, name: "CREATE_ADMIN_TOOLS"},
    {no: 18, name: "EDIT_ADMIN_TOOLS"},
    {no: 19, name: "DELETE_ADMIN_TOOLS"},
    {no: 20, name: "EXECUTE_ADMIN_TOOLS"},
    {no: 21, name: "VIEW_COUNTRY_MANAGER"},
    {no: 22, name: "CREATE_COUNTRY_MANAGER"},
    {no: 23, name: "EDIT_COUNTRY_MANAGER"},
    {no: 24, name: "DELETE_COUNTRY_MANAGER"},
    {no: 25, name: "EXECUTE_COUNTRY_MANAGER"},
    {no: 26, name: "VIEW_DIAL_REGION_GROUPS"},
    {no: 27, name: "CREATE_DIAL_REGION_GROUPS"},
    {no: 28, name: "EDIT_DIAL_REGION_GROUPS"},
    {no: 29, name: "DELETE_DIAL_REGION_GROUPS"},
    {no: 30, name: "EXECUTE_DIAL_REGION_GROUPS"},
    {no: 31, name: "VIEW_DIAL_REGION"},
    {no: 32, name: "CREATE_DIAL_REGION"},
    {no: 33, name: "EDIT_DIAL_REGION"},
    {no: 34, name: "DELETE_DIAL_REGION"},
    {no: 35, name: "EXECUTE_DIAL_REGION"},
    {no: 36, name: "VIEW_TTS_MANAGER"},
    {no: 37, name: "CREATE_TTS_MANAGER"},
    {no: 38, name: "EDIT_TTS_MANAGER"},
    {no: 39, name: "DELETE_TTS_MANAGER"},
    {no: 40, name: "EXECUTE_TTS_MANAGER"},
    {no: 41, name: "VIEW_USER_MANAGEMENT"},
    {no: 42, name: "CREATE_USER_MANAGEMENT"},
    {no: 43, name: "EDIT_USER_MANAGEMENT"},
    {no: 44, name: "DELETE_USER_MANAGEMENT"},
    {no: 45, name: "EXECUTE_USER_MANAGEMENT"},
    {no: 46, name: "VIEW_CLIENT"},
    {no: 47, name: "CREATE_CLIENT"},
    {no: 48, name: "EDIT_CLIENT"},
    {no: 49, name: "DELETE_CLIENT"},
    {no: 50, name: "EXECUTE_CLIENT"},
    {no: 51, name: "VIEW_LOGIN"},
    {no: 52, name: "CREATE_LOGIN"},
    {no: 53, name: "EDIT_LOGIN"},
    {no: 54, name: "DELETE_LOGIN"},
    {no: 55, name: "EXECUTE_LOGIN"},
    {no: 56, name: "VIEW_PERMISSIONS"},
    {no: 57, name: "CREATE_PERMISSIONS"},
    {no: 58, name: "EDIT_PERMISSIONS"},
    {no: 59, name: "DELETE_PERMISSIONS"},
    {no: 60, name: "EXECUTE_PERMISSIONS"},
    {no: 61, name: "VIEW_PERMISSIONS_GROUPS"},
    {no: 62, name: "CREATE_PERMISSIONS_GROUPS"},
    {no: 63, name: "EDIT_PERMISSIONS_GROUPS"},
    {no: 64, name: "DELETE_PERMISSIONS_GROUPS"},
    {no: 65, name: "EXECUTE_PERMISSIONS_GROUPS"},
    {no: 66, name: "VIEW_PERMISSIONS_GROUP_ADMINISTRATOR"},
    {no: 67, name: "CREATE_PERMISSIONS_GROUP_ADMINISTRATOR"},
    {no: 68, name: "EDIT_PERMISSIONS_GROUP_ADMINISTRATOR"},
    {no: 69, name: "DELETE_PERMISSIONS_GROUP_ADMINISTRATOR"},
    {no: 70, name: "EXECUTE_PERMISSIONS_GROUP_ADMINISTRATOR"},
    {no: 71, name: "VIEW_CONTACT_US"},
    {no: 72, name: "CREATE_CONTACT_US"},
    {no: 73, name: "EDIT_CONTACT_US"},
    {no: 74, name: "DELETE_CONTACT_US"},
    {no: 75, name: "EXECUTE_CONTACT_US"},
    {no: 76, name: "VIEW_USER_OPTIONS"},
    {no: 77, name: "CREATE_USER_OPTIONS"},
    {no: 78, name: "EDIT_USER_OPTIONS"},
    {no: 79, name: "DELETE_USER_OPTIONS"},
    {no: 80, name: "EXECUTE_USER_OPTIONS"},
    {no: 81, name: "VIEW_CHANGE_PASSWORD"},
    {no: 82, name: "CREATE_CHANGE_PASSWORD"},
    {no: 83, name: "EDIT_CHANGE_PASSWORD"},
    {no: 84, name: "DELETE_CHANGE_PASSWORD"},
    {no: 85, name: "EXECUTE_CHANGE_PASSWORD"},
    {no: 86, name: "VIEW_PREFERENCES"},
    {no: 87, name: "CREATE_PREFERENCES"},
    {no: 88, name: "EDIT_PREFERENCES"},
    {no: 89, name: "DELETE_PREFERENCES"},
    {no: 90, name: "EXECUTE_PREFERENCES"},
    {no: 91, name: "VIEW_WEB_BROADCASTING"},
    {no: 92, name: "CREATE_WEB_BROADCASTING"},
    {no: 93, name: "EDIT_WEB_BROADCASTING"},
    {no: 94, name: "DELETE_WEB_BROADCASTING"},
    {no: 95, name: "EXECUTE_WEB_BROADCASTING"},
    {no: 96, name: "VIEW_REPORTS"},
    {no: 97, name: "CREATE_REPORTS"},
    {no: 98, name: "EDIT_REPORTS"},
    {no: 99, name: "DELETE_REPORTS"},
    {no: 100, name: "EXECUTE_REPORTS"},
    {no: 101, name: "VIEW_SEND_BROADCAST"},
    {no: 102, name: "CREATE_SEND_BROADCAST"},
    {no: 103, name: "EDIT_SEND_BROADCAST"},
    {no: 104, name: "DELETE_SEND_BROADCAST"},
    {no: 105, name: "EXECUTE_SEND_BROADCAST"},
    {no: 106, name: "VIEW_MESSAGE_MANAGER"},
    {no: 107, name: "CREATE_MESSAGE_MANAGER"},
    {no: 108, name: "EDIT_MESSAGE_MANAGER"},
    {no: 109, name: "DELETE_MESSAGE_MANAGER"},
    {no: 110, name: "EXECUTE_MESSAGE_MANAGER"},
    {no: 111, name: "VIEW_TEMPLATE_MANAGER"},
    {no: 112, name: "CREATE_TEMPLATE_MANAGER"},
    {no: 113, name: "EDIT_TEMPLATE_MANAGER"},
    {no: 114, name: "DELETE_TEMPLATE_MANAGER"},
    {no: 115, name: "EXECUTE_TEMPLATE_MANAGER"},
    {no: 116, name: "VIEW_DO_NOT_CALL_LIST"},
    {no: 117, name: "CREATE_DO_NOT_CALL_LIST"},
    {no: 118, name: "EDIT_DO_NOT_CALL_LIST"},
    {no: 119, name: "DELETE_DO_NOT_CALL_LIST"},
    {no: 120, name: "EXECUTE_DO_NOT_CALL_LIST"},
    {no: 121, name: "VIEW_SCHEDULE_RULES"},
    {no: 122, name: "CREATE_SCHEDULE_RULES"},
    {no: 123, name: "EDIT_SCHEDULE_RULES"},
    {no: 124, name: "DELETE_SCHEDULE_RULES"},
    {no: 125, name: "EXECUTE_SCHEDULE_RULES"},
    {no: 126, name: "VIEW_BILLING"},
    {no: 127, name: "CREATE_BILLING"},
    {no: 128, name: "EDIT_BILLING"},
    {no: 129, name: "DELETE_BILLING"},
    {no: 130, name: "EXECUTE_BILLING"},
    {no: 131, name: "VIEW_SAP_EXPORT"},
    {no: 132, name: "CREATE_SAP_EXPORT"},
    {no: 133, name: "EDIT_SAP_EXPORT"},
    {no: 134, name: "DELETE_SAP_EXPORT"},
    {no: 135, name: "EXECUTE_SAP_EXPORT"},
    {no: 136, name: "VIEW_AUDIT"},
    {no: 137, name: "CREATE_AUDIT"},
    {no: 138, name: "EDIT_AUDIT"},
    {no: 139, name: "DELETE_AUDIT"},
    {no: 140, name: "EXECUTE_AUDIT"},
    {no: 141, name: "VIEW_AUTOMATED_REPORTING"},
    {no: 142, name: "CREATE_AUTOMATED_REPORTING"},
    {no: 143, name: "EDIT_AUTOMATED_REPORTING"},
    {no: 144, name: "DELETE_AUTOMATED_REPORTING"},
    {no: 145, name: "EXECUTE_AUTOMATED_REPORTING"},
    {no: 146, name: "VIEW_CUSTOMER_SERVICE"},
    {no: 147, name: "CREATE_CUSTOMER_SERVICE"},
    {no: 148, name: "EDIT_CUSTOMER_SERVICE"},
    {no: 149, name: "DELETE_CUSTOMER_SERVICE"},
    {no: 150, name: "EXECUTE_CUSTOMER_SERVICE"},
    {no: 151, name: "VIEW_SCRIPTS"},
    {no: 152, name: "CREATE_SCRIPTS"},
    {no: 153, name: "EDIT_SCRIPTS"},
    {no: 154, name: "DELETE_SCRIPTS"},
    {no: 155, name: "EXECUTE_SCRIPTS"},
    {no: 156, name: "VIEW_CLIENT_PREFERENCES"},
    {no: 157, name: "CREATE_CLIENT_PREFERENCES"},
    {no: 158, name: "EDIT_CLIENT_PREFERENCES"},
    {no: 159, name: "DELETE_CLIENT_PREFERENCES"},
    {no: 160, name: "EXECUTE_CLIENT_PREFERENCES"},
    {no: 161, name: "VIEW_RECORDINGS_REPORTING"},
    {no: 162, name: "CREATE_RECORDINGS_REPORTING"},
    {no: 163, name: "EDIT_RECORDINGS_REPORTING"},
    {no: 164, name: "DELETE_RECORDINGS_REPORTING"},
    {no: 165, name: "EXECUTE_RECORDINGS_REPORTING"},
    {no: 166, name: "VIEW_DEBUG_MODE"},
    {no: 167, name: "CREATE_DEBUG_MODE"},
    {no: 168, name: "EDIT_DEBUG_MODE"},
    {no: 169, name: "DELETE_DEBUG_MODE"},
    {no: 170, name: "EXECUTE_DEBUG_MODE"},
    {no: 171, name: "CREATE_DNCL_MAP"},
    {no: 172, name: "VIEW_DNCL_MAP"},
    {no: 173, name: "EXECUTE_COPY_DOWN"},
    {no: 174, name: "VIEW_AGENTS"},
    {no: 175, name: "VIEW_ADMIN_CUSTOMER_SERVICE"},
    {no: 176, name: "EDIT_AGENTS"},
    {no: 177, name: "DELETE_AGENTS"},
    {no: 178, name: "EXECUTE_AGENTS"},
    {no: 179, name: "EDIT_HUNT_GROUP"},
    {no: 180, name: "DELETE_HUNT_GROUP"},
    {no: 181, name: "EXECUTE_HUNT_GROUP"},
    {no: 182, name: "VIEW_HUNT_GROUP"},
    {no: 183, name: "VIEW_AGENTS_REPORT"},
    {no: 184, name: "VIEW_AGENTS_DASHBOARD"},
    {no: 186, name: "VIEW_CALLER_ID_BUCKETS"},
    {no: 187, name: "EDIT_CALLER_ID_BUCKETS"},
    {no: 188, name: "CREATE_CALLER_ID_BUCKETS"},
    {no: 189, name: "DELETE_CALLER_ID_BUCKETS"},
    {no: 190, name: "EXECUTE_CALLER_ID_BUCKETS"},
    {no: 191, name: "VIEW_REPORT_REQUEST"},
    {no: 192, name: "CREATE_REPORT_REQUEST"},
    {no: 199, name: "VIEW_INBOUND_SCRIPTS"},
    {no: 200, name: "EDIT_INBOUND_SCRIPTS"},
    {no: 201, name: "CREATE_INBOUND_SCRIPTS"},
    {no: 202, name: "DELETE_INBOUND_SCRIPTS"},
    {no: 203, name: "EDIT_BACKOFFICE_THEME"},
    {no: 205, name: "CREATE_PHONE_NUMBER_MANAGEMENT"},
    {no: 206, name: "EDIT_PHONE_NUMBER_MANAGEMENT"},
    {no: 207, name: "VIEW_PHONE_NUMBER_MANAGEMENT"},
    {no: 208, name: "DELETE_PHONE_NUMBER_MANAGEMENT"},
    {no: 209, name: "EXECUTE_PHONE_NUMBER_MANAGEMENT"},
    {no: 210, name: "EXECUTE_INBOUND_SCRIPTS"},
    {no: 211, name: "EXECUTE_CELL_PHONE_SCRUB"},
    {no: 212, name: "EDIT_ADMIN_CLIENT_PREFERENCES"},
    {no: 215, name: "VIEW_ONTARIO_SYSTEMS_ADMINISTRATOR"},
    {no: 216, name: "EXECUTE_ONTARIO_SYSTEMS_ADMINISTRATOR"},
    {no: 217, name: "EXECUTE_ONTARIO_SYSTEMS_USER"},
    {no: 218, name: "VIEW_INTEGRATION_MESSAGES"},
    {no: 219, name: "VIEW_ONTARIO_SYSTEMS_USER"},
    {no: 221, name: "EXECUTE_BROADCAST_CONTROL_INBOUND"},
    {no: 222, name: "EXECUTE_BROADCAST_CONTROL_MANUAL"},
    {no: 223, name: "EXECUTE_BROADCAST_CONTROL_OUTBOUND"},
    {no: 224, name: "CREATE_PREVIEW_ONLY_TEMPLATES"},
    {no: 225, name: "CREATE_MAC_ONLY_TEMPLATES"},
    {no: 226, name: "EDIT_TRIGGER_ADVANCE_ON_CALL"},
    {no: 227, name: "CREATE_TRIGGER_ADVANCE_ON_CALL"},
    {no: 228, name: "DELETE_MAC_ONLY_TEMPLATES"},
    {no: 229, name: "EXECUTE_MAC_ONLY_TEMPLATES"},
    {no: 230, name: "VIEW_MAC_ONLY_TEMPLATES"},
    {no: 231, name: "EDIT_MAC_ONLY_TEMPLATES"},
    {no: 232, name: "EXECUTE_PREVIEW_ONLY_TEMPLATES"},
    {no: 233, name: "VIEW_PREVIEW_ONLY_TEMPLATES"},
    {no: 234, name: "EDIT_PREVIEW_ONLY_TEMPLATES"},
    {no: 235, name: "DELETE_PREVIEW_ONLY_TEMPLATES"},
    {no: 236, name: "VIEW_ANALYTICS_REPORTING"},
    {no: 237, name: "CREATE_HUNT_GROUP"},
    {no: 238, name: "CREATE_AGENTS"},
    {no: 239, name: "CREATE_AGENTS_DASHBOARD"},
    {no: 240, name: "CREATE_AGENTS_REPORT"},
    {no: 241, name: "DELETE_AGENTS_DASHBOARD"},
    {no: 242, name: "DELETE_AGENTS_REPORT"},
    {no: 243, name: "EDIT_AGENTS_DASHBOARD"},
    {no: 244, name: "EDIT_AGENTS_REPORT"},
    {no: 245, name: "EXECUTE_AGENTS_DASHBOARD"},
    {no: 246, name: "EXECUTE_AGENTS_REPORT"},
    {no: 247, name: "DELETE_TRIGGER_ADVANCE_ON_CALL"},
    {no: 249, name: "DELETE_CELL_PHONE_SCRUB"},
    {no: 250, name: "CREATE_RINGLESS_VOICEMAIL_TEMPLATES"},
    {no: 251, name: "EDIT_RINGLESS_VOICEMAIL_TEMPLATES"},
    {no: 252, name: "CREATE_VOCALDIRECT_TEMPLATES"},
    {no: 253, name: "EDIT_VOCALDIRECT_TEMPLATES"},
    {no: 254, name: "VIEW_EMAIL"},
    {no: 255, name: "VIEW_SMS"},
    {no: 256, name: "VIEW_EMAIL_REPORTS"},
    {no: 257, name: "VIEW_EMAIL_AUDIT"},
    {no: 258, name: "VIEW_SMS_REPORTS"},
    {no: 259, name: "VIEW_SMS_AUDIT"},
    {no: 260, name: "FAKE_PERMISSION"},
    {no: 261, name: "VIEW_CHAT"},
    {no: 262, name: "VIEW_CHAT_REPORTS"},
    {no: 263, name: "VIEW_CHAT_AUDIT"},
    {no: 264, name: "VIEW_CAMPAIGN"},
    {no: 265, name: "VIEW_CAMPAIGN_REPORT"},
    {no: 266, name: "VIEW_CAMPAIGN_AUDIT"},
    {no: 267, name: "EDIT_SAP_ADMIN"},
    {no: 268, name: "EDIT_REPORT_REQUEST"},
    {no: 269, name: "DELETE_REPORT_REQUEST"},
    {no: 270, name: "EXECUTE_REPORT_REQUEST"},
    {no: 271, name: "VIEW_BACKOFFICE_THEME"},
    {no: 272, name: "CREATE_BACKOFFICE_THEME"},
    {no: 273, name: "DELETE_BACKOFFICE_THEME"},
    {no: 274, name: "EXECUTE_BACKOFFICE_THEME"},
    {no: 275, name: "CREATE_CELL_PHONE_SCRUB"},
    {no: 276, name: "EDIT_CELL_PHONE_SCRUB"},
    {no: 277, name: "VIEW_CELL_PHONE_SCRUB"},
    {no: 278, name: "VIEW_ADMIN_CLIENT_PREFERENCES"},
    {no: 279, name: "DELETE_ADMIN_CLIENT_PREFERENCES"},
    {no: 280, name: "CREATE_ADMIN_CLIENT_PREFERENCES"},
    {no: 281, name: "EXECUTE_ADMIN_CLIENT_PREFERENCES"},
    {no: 282, name: "CREATE_ONTARIO_SYSTEMS_ADMINISTRATOR"},
    {no: 283, name: "DELETE_ONTARIO_SYSTEMS_ADMINISTRATOR"},
    {no: 284, name: "EDIT_ONTARIO_SYSTEMS_ADMINISTRATOR"},
    {no: 285, name: "CREATE_ONTARIO_SYSTEMS_USER"},
    {no: 286, name: "DELETE_ONTARIO_SYSTEMS_USER"},
    {no: 287, name: "EDIT_ONTARIO_SYSTEMS_USER"},
    {no: 288, name: "CREATE_INTEGRATION_MESSAGES"},
    {no: 289, name: "DELETE_INTEGRATION_MESSAGES"},
    {no: 290, name: "EDIT_INTEGRATION_MESSAGES"},
    {no: 291, name: "EXECUTE_INTEGRATION_MESSAGES"},
    {no: 292, name: "SCHEDULE_RESEND_CAMPAIGN"},
    {no: 2000, name: "APP_AGENT"},
    {no: 2001, name: "APP_BACKOFFICE"},
  ],
);

