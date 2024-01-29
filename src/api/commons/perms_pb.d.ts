// @generated by protoc-gen-es v1.7.1 with parameter "target=js+dts"
// @generated from file api/commons/perms.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * @generated from enum api.commons.Permission
 */
export declare enum Permission {
  /**
   * @generated from enum value: NO_PERMISSION = 0;
   */
  NO_PERMISSION = 0,

  /**
   * P3 permissions
   *
   * Enables viewing.
   *
   * @generated from enum value: VIEW_LIST_MANAGER = 1;
   */
  VIEW_LIST_MANAGER = 1,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_LIST_MANAGER = 2;
   */
  CREATE_LIST_MANAGER = 2,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_LIST_MANAGER = 3;
   */
  EDIT_LIST_MANAGER = 3,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_LIST_MANAGER = 4;
   */
  DELETE_LIST_MANAGER = 4,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_LIST_MANAGER = 5;
   */
  EXECUTE_LIST_MANAGER = 5,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_FIELD_DEFINITIONS = 6;
   */
  VIEW_FIELD_DEFINITIONS = 6,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_FIELD_DEFINITIONS = 7;
   */
  CREATE_FIELD_DEFINITIONS = 7,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_FIELD_DEFINITIONS = 8;
   */
  EDIT_FIELD_DEFINITIONS = 8,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_FIELD_DEFINITIONS = 9;
   */
  DELETE_FIELD_DEFINITIONS = 9,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_FIELD_DEFINITIONS = 10;
   */
  EXECUTE_FIELD_DEFINITIONS = 10,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_IMPORT_TEMPLATES = 11;
   */
  VIEW_IMPORT_TEMPLATES = 11,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_IMPORT_TEMPLATES = 12;
   */
  CREATE_IMPORT_TEMPLATES = 12,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_IMPORT_TEMPLATES = 13;
   */
  EDIT_IMPORT_TEMPLATES = 13,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_IMPORT_TEMPLATES = 14;
   */
  DELETE_IMPORT_TEMPLATES = 14,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_IMPORT_TEMPLATES = 15;
   */
  EXECUTE_IMPORT_TEMPLATES = 15,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_ADMIN_TOOLS = 16;
   */
  VIEW_ADMIN_TOOLS = 16,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_ADMIN_TOOLS = 17;
   */
  CREATE_ADMIN_TOOLS = 17,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_ADMIN_TOOLS = 18;
   */
  EDIT_ADMIN_TOOLS = 18,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_ADMIN_TOOLS = 19;
   */
  DELETE_ADMIN_TOOLS = 19,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_ADMIN_TOOLS = 20;
   */
  EXECUTE_ADMIN_TOOLS = 20,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_COUNTRY_MANAGER = 21;
   */
  VIEW_COUNTRY_MANAGER = 21,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_COUNTRY_MANAGER = 22;
   */
  CREATE_COUNTRY_MANAGER = 22,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_COUNTRY_MANAGER = 23;
   */
  EDIT_COUNTRY_MANAGER = 23,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_COUNTRY_MANAGER = 24;
   */
  DELETE_COUNTRY_MANAGER = 24,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_COUNTRY_MANAGER = 25;
   */
  EXECUTE_COUNTRY_MANAGER = 25,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_DIAL_REGION_GROUPS = 26;
   */
  VIEW_DIAL_REGION_GROUPS = 26,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_DIAL_REGION_GROUPS = 27;
   */
  CREATE_DIAL_REGION_GROUPS = 27,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_DIAL_REGION_GROUPS = 28;
   */
  EDIT_DIAL_REGION_GROUPS = 28,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_DIAL_REGION_GROUPS = 29;
   */
  DELETE_DIAL_REGION_GROUPS = 29,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_DIAL_REGION_GROUPS = 30;
   */
  EXECUTE_DIAL_REGION_GROUPS = 30,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_DIAL_REGION = 31;
   */
  VIEW_DIAL_REGION = 31,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_DIAL_REGION = 32;
   */
  CREATE_DIAL_REGION = 32,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_DIAL_REGION = 33;
   */
  EDIT_DIAL_REGION = 33,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_DIAL_REGION = 34;
   */
  DELETE_DIAL_REGION = 34,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_DIAL_REGION = 35;
   */
  EXECUTE_DIAL_REGION = 35,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_TTS_MANAGER = 36;
   */
  VIEW_TTS_MANAGER = 36,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_TTS_MANAGER = 37;
   */
  CREATE_TTS_MANAGER = 37,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_TTS_MANAGER = 38;
   */
  EDIT_TTS_MANAGER = 38,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_TTS_MANAGER = 39;
   */
  DELETE_TTS_MANAGER = 39,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_TTS_MANAGER = 40;
   */
  EXECUTE_TTS_MANAGER = 40,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_USER_MANAGEMENT = 41;
   */
  VIEW_USER_MANAGEMENT = 41,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_USER_MANAGEMENT = 42;
   */
  CREATE_USER_MANAGEMENT = 42,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_USER_MANAGEMENT = 43;
   */
  EDIT_USER_MANAGEMENT = 43,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_USER_MANAGEMENT = 44;
   */
  DELETE_USER_MANAGEMENT = 44,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_USER_MANAGEMENT = 45;
   */
  EXECUTE_USER_MANAGEMENT = 45,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_CLIENT = 46;
   */
  VIEW_CLIENT = 46,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_CLIENT = 47;
   */
  CREATE_CLIENT = 47,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_CLIENT = 48;
   */
  EDIT_CLIENT = 48,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_CLIENT = 49;
   */
  DELETE_CLIENT = 49,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_CLIENT = 50;
   */
  EXECUTE_CLIENT = 50,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_LOGIN = 51;
   */
  VIEW_LOGIN = 51,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_LOGIN = 52;
   */
  CREATE_LOGIN = 52,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_LOGIN = 53;
   */
  EDIT_LOGIN = 53,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_LOGIN = 54;
   */
  DELETE_LOGIN = 54,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_LOGIN = 55;
   */
  EXECUTE_LOGIN = 55,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_PERMISSIONS = 56;
   */
  VIEW_PERMISSIONS = 56,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_PERMISSIONS = 57;
   */
  CREATE_PERMISSIONS = 57,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_PERMISSIONS = 58;
   */
  EDIT_PERMISSIONS = 58,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_PERMISSIONS = 59;
   */
  DELETE_PERMISSIONS = 59,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_PERMISSIONS = 60;
   */
  EXECUTE_PERMISSIONS = 60,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_PERMISSIONS_GROUPS = 61;
   */
  VIEW_PERMISSIONS_GROUPS = 61,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_PERMISSIONS_GROUPS = 62;
   */
  CREATE_PERMISSIONS_GROUPS = 62,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_PERMISSIONS_GROUPS = 63;
   */
  EDIT_PERMISSIONS_GROUPS = 63,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_PERMISSIONS_GROUPS = 64;
   */
  DELETE_PERMISSIONS_GROUPS = 64,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_PERMISSIONS_GROUPS = 65;
   */
  EXECUTE_PERMISSIONS_GROUPS = 65,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_PERMISSIONS_GROUP_ADMINISTRATOR = 66;
   */
  VIEW_PERMISSIONS_GROUP_ADMINISTRATOR = 66,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_PERMISSIONS_GROUP_ADMINISTRATOR = 67;
   */
  CREATE_PERMISSIONS_GROUP_ADMINISTRATOR = 67,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_PERMISSIONS_GROUP_ADMINISTRATOR = 68;
   */
  EDIT_PERMISSIONS_GROUP_ADMINISTRATOR = 68,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_PERMISSIONS_GROUP_ADMINISTRATOR = 69;
   */
  DELETE_PERMISSIONS_GROUP_ADMINISTRATOR = 69,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_PERMISSIONS_GROUP_ADMINISTRATOR = 70;
   */
  EXECUTE_PERMISSIONS_GROUP_ADMINISTRATOR = 70,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_CONTACT_US = 71;
   */
  VIEW_CONTACT_US = 71,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_CONTACT_US = 72;
   */
  CREATE_CONTACT_US = 72,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_CONTACT_US = 73;
   */
  EDIT_CONTACT_US = 73,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_CONTACT_US = 74;
   */
  DELETE_CONTACT_US = 74,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_CONTACT_US = 75;
   */
  EXECUTE_CONTACT_US = 75,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_USER_OPTIONS = 76;
   */
  VIEW_USER_OPTIONS = 76,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_USER_OPTIONS = 77;
   */
  CREATE_USER_OPTIONS = 77,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_USER_OPTIONS = 78;
   */
  EDIT_USER_OPTIONS = 78,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_USER_OPTIONS = 79;
   */
  DELETE_USER_OPTIONS = 79,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_USER_OPTIONS = 80;
   */
  EXECUTE_USER_OPTIONS = 80,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_CHANGE_PASSWORD = 81;
   */
  VIEW_CHANGE_PASSWORD = 81,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_CHANGE_PASSWORD = 82;
   */
  CREATE_CHANGE_PASSWORD = 82,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_CHANGE_PASSWORD = 83;
   */
  EDIT_CHANGE_PASSWORD = 83,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_CHANGE_PASSWORD = 84;
   */
  DELETE_CHANGE_PASSWORD = 84,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_CHANGE_PASSWORD = 85;
   */
  EXECUTE_CHANGE_PASSWORD = 85,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_PREFERENCES = 86;
   */
  VIEW_PREFERENCES = 86,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_PREFERENCES = 87;
   */
  CREATE_PREFERENCES = 87,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_PREFERENCES = 88;
   */
  EDIT_PREFERENCES = 88,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_PREFERENCES = 89;
   */
  DELETE_PREFERENCES = 89,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_PREFERENCES = 90;
   */
  EXECUTE_PREFERENCES = 90,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_WEB_BROADCASTING = 91;
   */
  VIEW_WEB_BROADCASTING = 91,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_WEB_BROADCASTING = 92;
   */
  CREATE_WEB_BROADCASTING = 92,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_WEB_BROADCASTING = 93;
   */
  EDIT_WEB_BROADCASTING = 93,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_WEB_BROADCASTING = 94;
   */
  DELETE_WEB_BROADCASTING = 94,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_WEB_BROADCASTING = 95;
   */
  EXECUTE_WEB_BROADCASTING = 95,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_REPORTS = 96;
   */
  VIEW_REPORTS = 96,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_REPORTS = 97;
   */
  CREATE_REPORTS = 97,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_REPORTS = 98;
   */
  EDIT_REPORTS = 98,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_REPORTS = 99;
   */
  DELETE_REPORTS = 99,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_REPORTS = 100;
   */
  EXECUTE_REPORTS = 100,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_SEND_BROADCAST = 101;
   */
  VIEW_SEND_BROADCAST = 101,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_SEND_BROADCAST = 102;
   */
  CREATE_SEND_BROADCAST = 102,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_SEND_BROADCAST = 103;
   */
  EDIT_SEND_BROADCAST = 103,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_SEND_BROADCAST = 104;
   */
  DELETE_SEND_BROADCAST = 104,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_SEND_BROADCAST = 105;
   */
  EXECUTE_SEND_BROADCAST = 105,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_MESSAGE_MANAGER = 106;
   */
  VIEW_MESSAGE_MANAGER = 106,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_MESSAGE_MANAGER = 107;
   */
  CREATE_MESSAGE_MANAGER = 107,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_MESSAGE_MANAGER = 108;
   */
  EDIT_MESSAGE_MANAGER = 108,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_MESSAGE_MANAGER = 109;
   */
  DELETE_MESSAGE_MANAGER = 109,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_MESSAGE_MANAGER = 110;
   */
  EXECUTE_MESSAGE_MANAGER = 110,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_TEMPLATE_MANAGER = 111;
   */
  VIEW_TEMPLATE_MANAGER = 111,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_TEMPLATE_MANAGER = 112;
   */
  CREATE_TEMPLATE_MANAGER = 112,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_TEMPLATE_MANAGER = 113;
   */
  EDIT_TEMPLATE_MANAGER = 113,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_TEMPLATE_MANAGER = 114;
   */
  DELETE_TEMPLATE_MANAGER = 114,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_TEMPLATE_MANAGER = 115;
   */
  EXECUTE_TEMPLATE_MANAGER = 115,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_DO_NOT_CALL_LIST = 116;
   */
  VIEW_DO_NOT_CALL_LIST = 116,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_DO_NOT_CALL_LIST = 117;
   */
  CREATE_DO_NOT_CALL_LIST = 117,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_DO_NOT_CALL_LIST = 118;
   */
  EDIT_DO_NOT_CALL_LIST = 118,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_DO_NOT_CALL_LIST = 119;
   */
  DELETE_DO_NOT_CALL_LIST = 119,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_DO_NOT_CALL_LIST = 120;
   */
  EXECUTE_DO_NOT_CALL_LIST = 120,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_SCHEDULE_RULES = 121;
   */
  VIEW_SCHEDULE_RULES = 121,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_SCHEDULE_RULES = 122;
   */
  CREATE_SCHEDULE_RULES = 122,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_SCHEDULE_RULES = 123;
   */
  EDIT_SCHEDULE_RULES = 123,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_SCHEDULE_RULES = 124;
   */
  DELETE_SCHEDULE_RULES = 124,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_SCHEDULE_RULES = 125;
   */
  EXECUTE_SCHEDULE_RULES = 125,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_BILLING = 126;
   */
  VIEW_BILLING = 126,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_BILLING = 127;
   */
  CREATE_BILLING = 127,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_BILLING = 128;
   */
  EDIT_BILLING = 128,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_BILLING = 129;
   */
  DELETE_BILLING = 129,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_BILLING = 130;
   */
  EXECUTE_BILLING = 130,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_SAP_EXPORT = 131;
   */
  VIEW_SAP_EXPORT = 131,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_SAP_EXPORT = 132;
   */
  CREATE_SAP_EXPORT = 132,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_SAP_EXPORT = 133;
   */
  EDIT_SAP_EXPORT = 133,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_SAP_EXPORT = 134;
   */
  DELETE_SAP_EXPORT = 134,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_SAP_EXPORT = 135;
   */
  EXECUTE_SAP_EXPORT = 135,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_AUDIT = 136;
   */
  VIEW_AUDIT = 136,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_AUDIT = 137;
   */
  CREATE_AUDIT = 137,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_AUDIT = 138;
   */
  EDIT_AUDIT = 138,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_AUDIT = 139;
   */
  DELETE_AUDIT = 139,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_AUDIT = 140;
   */
  EXECUTE_AUDIT = 140,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_AUTOMATED_REPORTING = 141;
   */
  VIEW_AUTOMATED_REPORTING = 141,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_AUTOMATED_REPORTING = 142;
   */
  CREATE_AUTOMATED_REPORTING = 142,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_AUTOMATED_REPORTING = 143;
   */
  EDIT_AUTOMATED_REPORTING = 143,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_AUTOMATED_REPORTING = 144;
   */
  DELETE_AUTOMATED_REPORTING = 144,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_AUTOMATED_REPORTING = 145;
   */
  EXECUTE_AUTOMATED_REPORTING = 145,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_CUSTOMER_SERVICE = 146;
   */
  VIEW_CUSTOMER_SERVICE = 146,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_CUSTOMER_SERVICE = 147;
   */
  CREATE_CUSTOMER_SERVICE = 147,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_CUSTOMER_SERVICE = 148;
   */
  EDIT_CUSTOMER_SERVICE = 148,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_CUSTOMER_SERVICE = 149;
   */
  DELETE_CUSTOMER_SERVICE = 149,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_CUSTOMER_SERVICE = 150;
   */
  EXECUTE_CUSTOMER_SERVICE = 150,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_SCRIPTS = 151;
   */
  VIEW_SCRIPTS = 151,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_SCRIPTS = 152;
   */
  CREATE_SCRIPTS = 152,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_SCRIPTS = 153;
   */
  EDIT_SCRIPTS = 153,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_SCRIPTS = 154;
   */
  DELETE_SCRIPTS = 154,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_SCRIPTS = 155;
   */
  EXECUTE_SCRIPTS = 155,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_CLIENT_PREFERENCES = 156;
   */
  VIEW_CLIENT_PREFERENCES = 156,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_CLIENT_PREFERENCES = 157;
   */
  CREATE_CLIENT_PREFERENCES = 157,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_CLIENT_PREFERENCES = 158;
   */
  EDIT_CLIENT_PREFERENCES = 158,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_CLIENT_PREFERENCES = 159;
   */
  DELETE_CLIENT_PREFERENCES = 159,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_CLIENT_PREFERENCES = 160;
   */
  EXECUTE_CLIENT_PREFERENCES = 160,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_RECORDINGS_REPORTING = 161;
   */
  VIEW_RECORDINGS_REPORTING = 161,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_RECORDINGS_REPORTING = 162;
   */
  CREATE_RECORDINGS_REPORTING = 162,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_RECORDINGS_REPORTING = 163;
   */
  EDIT_RECORDINGS_REPORTING = 163,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_RECORDINGS_REPORTING = 164;
   */
  DELETE_RECORDINGS_REPORTING = 164,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_RECORDINGS_REPORTING = 165;
   */
  EXECUTE_RECORDINGS_REPORTING = 165,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_DEBUG_MODE = 166;
   */
  VIEW_DEBUG_MODE = 166,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_DEBUG_MODE = 167;
   */
  CREATE_DEBUG_MODE = 167,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_DEBUG_MODE = 168;
   */
  EDIT_DEBUG_MODE = 168,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_DEBUG_MODE = 169;
   */
  DELETE_DEBUG_MODE = 169,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_DEBUG_MODE = 170;
   */
  EXECUTE_DEBUG_MODE = 170,

  /**
   * @generated from enum value: CREATE_DNCL_MAP = 171;
   */
  CREATE_DNCL_MAP = 171,

  /**
   * @generated from enum value: VIEW_DNCL_MAP = 172;
   */
  VIEW_DNCL_MAP = 172,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_COPY_DOWN = 173;
   */
  EXECUTE_COPY_DOWN = 173,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_AGENTS = 174;
   */
  VIEW_AGENTS = 174,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_ADMIN_CUSTOMER_SERVICE = 175;
   */
  VIEW_ADMIN_CUSTOMER_SERVICE = 175,

  /**
   * Enables editing
   *
   * @generated from enum value: EDIT_AGENTS = 176;
   */
  EDIT_AGENTS = 176,

  /**
   * Enables deletion
   *
   * @generated from enum value: DELETE_AGENTS = 177;
   */
  DELETE_AGENTS = 177,

  /**
   * Enables viewing of reports
   *
   * @generated from enum value: EXECUTE_AGENTS = 178;
   */
  EXECUTE_AGENTS = 178,

  /**
   * Enables editing
   *
   * @generated from enum value: EDIT_HUNT_GROUP = 179;
   */
  EDIT_HUNT_GROUP = 179,

  /**
   * Enables deletion
   *
   * @generated from enum value: DELETE_HUNT_GROUP = 180;
   */
  DELETE_HUNT_GROUP = 180,

  /**
   * Enables viewing of reports
   *
   * @generated from enum value: EXECUTE_HUNT_GROUP = 181;
   */
  EXECUTE_HUNT_GROUP = 181,

  /**
   * Enables Viewing
   *
   * @generated from enum value: VIEW_HUNT_GROUP = 182;
   */
  VIEW_HUNT_GROUP = 182,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_AGENTS_REPORT = 183;
   */
  VIEW_AGENTS_REPORT = 183,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_AGENTS_DASHBOARD = 184;
   */
  VIEW_AGENTS_DASHBOARD = 184,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_CALLER_ID_BUCKETS = 186;
   */
  VIEW_CALLER_ID_BUCKETS = 186,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_CALLER_ID_BUCKETS = 187;
   */
  EDIT_CALLER_ID_BUCKETS = 187,

  /**
   * Enables creating.
   *
   * @generated from enum value: CREATE_CALLER_ID_BUCKETS = 188;
   */
  CREATE_CALLER_ID_BUCKETS = 188,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_CALLER_ID_BUCKETS = 189;
   */
  DELETE_CALLER_ID_BUCKETS = 189,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_CALLER_ID_BUCKETS = 190;
   */
  EXECUTE_CALLER_ID_BUCKETS = 190,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_REPORT_REQUEST = 191;
   */
  VIEW_REPORT_REQUEST = 191,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_REPORT_REQUEST = 192;
   */
  CREATE_REPORT_REQUEST = 192,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_INBOUND_SCRIPTS = 199;
   */
  VIEW_INBOUND_SCRIPTS = 199,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_INBOUND_SCRIPTS = 200;
   */
  EDIT_INBOUND_SCRIPTS = 200,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_INBOUND_SCRIPTS = 201;
   */
  CREATE_INBOUND_SCRIPTS = 201,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_INBOUND_SCRIPTS = 202;
   */
  DELETE_INBOUND_SCRIPTS = 202,

  /**
   * Enables selecting a theme.
   *
   * @generated from enum value: EDIT_BACKOFFICE_THEME = 203;
   */
  EDIT_BACKOFFICE_THEME = 203,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_PHONE_NUMBER_MANAGEMENT = 205;
   */
  CREATE_PHONE_NUMBER_MANAGEMENT = 205,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_PHONE_NUMBER_MANAGEMENT = 206;
   */
  EDIT_PHONE_NUMBER_MANAGEMENT = 206,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_PHONE_NUMBER_MANAGEMENT = 207;
   */
  VIEW_PHONE_NUMBER_MANAGEMENT = 207,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_PHONE_NUMBER_MANAGEMENT = 208;
   */
  DELETE_PHONE_NUMBER_MANAGEMENT = 208,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_PHONE_NUMBER_MANAGEMENT = 209;
   */
  EXECUTE_PHONE_NUMBER_MANAGEMENT = 209,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_INBOUND_SCRIPTS = 210;
   */
  EXECUTE_INBOUND_SCRIPTS = 210,

  /**
   * Enables Executing of other options.
   *
   * @generated from enum value: EXECUTE_CELL_PHONE_SCRUB = 211;
   */
  EXECUTE_CELL_PHONE_SCRUB = 211,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_ADMIN_CLIENT_PREFERENCES = 212;
   */
  EDIT_ADMIN_CLIENT_PREFERENCES = 212,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_ONTARIO_SYSTEMS_ADMINISTRATOR = 215;
   */
  VIEW_ONTARIO_SYSTEMS_ADMINISTRATOR = 215,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_ONTARIO_SYSTEMS_ADMINISTRATOR = 216;
   */
  EXECUTE_ONTARIO_SYSTEMS_ADMINISTRATOR = 216,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_ONTARIO_SYSTEMS_USER = 217;
   */
  EXECUTE_ONTARIO_SYSTEMS_USER = 217,

  /**
   * Enables Viewing.
   *
   * @generated from enum value: VIEW_INTEGRATION_MESSAGES = 218;
   */
  VIEW_INTEGRATION_MESSAGES = 218,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_ONTARIO_SYSTEMS_USER = 219;
   */
  VIEW_ONTARIO_SYSTEMS_USER = 219,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_BROADCAST_CONTROL_INBOUND = 221;
   */
  EXECUTE_BROADCAST_CONTROL_INBOUND = 221,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_BROADCAST_CONTROL_MANUAL = 222;
   */
  EXECUTE_BROADCAST_CONTROL_MANUAL = 222,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_BROADCAST_CONTROL_OUTBOUND = 223;
   */
  EXECUTE_BROADCAST_CONTROL_OUTBOUND = 223,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_PREVIEW_ONLY_TEMPLATES = 224;
   */
  CREATE_PREVIEW_ONLY_TEMPLATES = 224,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_MAC_ONLY_TEMPLATES = 225;
   */
  CREATE_MAC_ONLY_TEMPLATES = 225,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_TRIGGER_ADVANCE_ON_CALL = 226;
   */
  EDIT_TRIGGER_ADVANCE_ON_CALL = 226,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_TRIGGER_ADVANCE_ON_CALL = 227;
   */
  CREATE_TRIGGER_ADVANCE_ON_CALL = 227,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_MAC_ONLY_TEMPLATES = 228;
   */
  DELETE_MAC_ONLY_TEMPLATES = 228,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_MAC_ONLY_TEMPLATES = 229;
   */
  EXECUTE_MAC_ONLY_TEMPLATES = 229,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_MAC_ONLY_TEMPLATES = 230;
   */
  VIEW_MAC_ONLY_TEMPLATES = 230,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_MAC_ONLY_TEMPLATES = 231;
   */
  EDIT_MAC_ONLY_TEMPLATES = 231,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_PREVIEW_ONLY_TEMPLATES = 232;
   */
  EXECUTE_PREVIEW_ONLY_TEMPLATES = 232,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_PREVIEW_ONLY_TEMPLATES = 233;
   */
  VIEW_PREVIEW_ONLY_TEMPLATES = 233,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_PREVIEW_ONLY_TEMPLATES = 234;
   */
  EDIT_PREVIEW_ONLY_TEMPLATES = 234,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_PREVIEW_ONLY_TEMPLATES = 235;
   */
  DELETE_PREVIEW_ONLY_TEMPLATES = 235,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_ANALYTICS_REPORTING = 236;
   */
  VIEW_ANALYTICS_REPORTING = 236,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_HUNT_GROUP = 237;
   */
  CREATE_HUNT_GROUP = 237,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_AGENTS = 238;
   */
  CREATE_AGENTS = 238,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_AGENTS_DASHBOARD = 239;
   */
  CREATE_AGENTS_DASHBOARD = 239,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_AGENTS_REPORT = 240;
   */
  CREATE_AGENTS_REPORT = 240,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_AGENTS_DASHBOARD = 241;
   */
  DELETE_AGENTS_DASHBOARD = 241,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_AGENTS_REPORT = 242;
   */
  DELETE_AGENTS_REPORT = 242,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_AGENTS_DASHBOARD = 243;
   */
  EDIT_AGENTS_DASHBOARD = 243,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_AGENTS_REPORT = 244;
   */
  EDIT_AGENTS_REPORT = 244,

  /**
   * Enables executing of other options.
   *
   * @generated from enum value: EXECUTE_AGENTS_DASHBOARD = 245;
   */
  EXECUTE_AGENTS_DASHBOARD = 245,

  /**
   * Executing of other options.
   *
   * @generated from enum value: EXECUTE_AGENTS_REPORT = 246;
   */
  EXECUTE_AGENTS_REPORT = 246,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_TRIGGER_ADVANCE_ON_CALL = 247;
   */
  DELETE_TRIGGER_ADVANCE_ON_CALL = 247,

  /**
   * Enables deletions.
   *
   * @generated from enum value: DELETE_CELL_PHONE_SCRUB = 249;
   */
  DELETE_CELL_PHONE_SCRUB = 249,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_RINGLESS_VOICEMAIL_TEMPLATES = 250;
   */
  CREATE_RINGLESS_VOICEMAIL_TEMPLATES = 250,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_RINGLESS_VOICEMAIL_TEMPLATES = 251;
   */
  EDIT_RINGLESS_VOICEMAIL_TEMPLATES = 251,

  /**
   * Enables creation.
   *
   * @generated from enum value: CREATE_VOCALDIRECT_TEMPLATES = 252;
   */
  CREATE_VOCALDIRECT_TEMPLATES = 252,

  /**
   * Enables editing.
   *
   * @generated from enum value: EDIT_VOCALDIRECT_TEMPLATES = 253;
   */
  EDIT_VOCALDIRECT_TEMPLATES = 253,

  /**
   * Enables Viewing.
   *
   * @generated from enum value: VIEW_EMAIL = 254;
   */
  VIEW_EMAIL = 254,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_SMS = 255;
   */
  VIEW_SMS = 255,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_EMAIL_REPORTS = 256;
   */
  VIEW_EMAIL_REPORTS = 256,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_EMAIL_AUDIT = 257;
   */
  VIEW_EMAIL_AUDIT = 257,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_SMS_REPORTS = 258;
   */
  VIEW_SMS_REPORTS = 258,

  /**
   * Enables viewing.
   *
   * @generated from enum value: VIEW_SMS_AUDIT = 259;
   */
  VIEW_SMS_AUDIT = 259,

  /**
   * @generated from enum value: FAKE_PERMISSION = 260;
   */
  FAKE_PERMISSION = 260,

  /**
   * @generated from enum value: VIEW_CHAT = 261;
   */
  VIEW_CHAT = 261,

  /**
   * @generated from enum value: VIEW_CHAT_REPORTS = 262;
   */
  VIEW_CHAT_REPORTS = 262,

  /**
   * @generated from enum value: VIEW_CHAT_AUDIT = 263;
   */
  VIEW_CHAT_AUDIT = 263,

  /**
   * @generated from enum value: VIEW_CAMPAIGN = 264;
   */
  VIEW_CAMPAIGN = 264,

  /**
   * @generated from enum value: VIEW_CAMPAIGN_REPORT = 265;
   */
  VIEW_CAMPAIGN_REPORT = 265,

  /**
   * @generated from enum value: VIEW_CAMPAIGN_AUDIT = 266;
   */
  VIEW_CAMPAIGN_AUDIT = 266,

  /**
   * @generated from enum value: EDIT_SAP_ADMIN = 267;
   */
  EDIT_SAP_ADMIN = 267,

  /**
   * @generated from enum value: EDIT_REPORT_REQUEST = 268;
   */
  EDIT_REPORT_REQUEST = 268,

  /**
   * @generated from enum value: DELETE_REPORT_REQUEST = 269;
   */
  DELETE_REPORT_REQUEST = 269,

  /**
   * @generated from enum value: EXECUTE_REPORT_REQUEST = 270;
   */
  EXECUTE_REPORT_REQUEST = 270,

  /**
   * @generated from enum value: VIEW_BACKOFFICE_THEME = 271;
   */
  VIEW_BACKOFFICE_THEME = 271,

  /**
   * @generated from enum value: CREATE_BACKOFFICE_THEME = 272;
   */
  CREATE_BACKOFFICE_THEME = 272,

  /**
   * @generated from enum value: DELETE_BACKOFFICE_THEME = 273;
   */
  DELETE_BACKOFFICE_THEME = 273,

  /**
   * @generated from enum value: EXECUTE_BACKOFFICE_THEME = 274;
   */
  EXECUTE_BACKOFFICE_THEME = 274,

  /**
   * @generated from enum value: CREATE_CELL_PHONE_SCRUB = 275;
   */
  CREATE_CELL_PHONE_SCRUB = 275,

  /**
   * @generated from enum value: EDIT_CELL_PHONE_SCRUB = 276;
   */
  EDIT_CELL_PHONE_SCRUB = 276,

  /**
   * @generated from enum value: VIEW_CELL_PHONE_SCRUB = 277;
   */
  VIEW_CELL_PHONE_SCRUB = 277,

  /**
   * @generated from enum value: VIEW_ADMIN_CLIENT_PREFERENCES = 278;
   */
  VIEW_ADMIN_CLIENT_PREFERENCES = 278,

  /**
   * @generated from enum value: DELETE_ADMIN_CLIENT_PREFERENCES = 279;
   */
  DELETE_ADMIN_CLIENT_PREFERENCES = 279,

  /**
   * @generated from enum value: CREATE_ADMIN_CLIENT_PREFERENCES = 280;
   */
  CREATE_ADMIN_CLIENT_PREFERENCES = 280,

  /**
   * @generated from enum value: EXECUTE_ADMIN_CLIENT_PREFERENCES = 281;
   */
  EXECUTE_ADMIN_CLIENT_PREFERENCES = 281,

  /**
   * @generated from enum value: CREATE_ONTARIO_SYSTEMS_ADMINISTRATOR = 282;
   */
  CREATE_ONTARIO_SYSTEMS_ADMINISTRATOR = 282,

  /**
   * @generated from enum value: DELETE_ONTARIO_SYSTEMS_ADMINISTRATOR = 283;
   */
  DELETE_ONTARIO_SYSTEMS_ADMINISTRATOR = 283,

  /**
   * @generated from enum value: EDIT_ONTARIO_SYSTEMS_ADMINISTRATOR = 284;
   */
  EDIT_ONTARIO_SYSTEMS_ADMINISTRATOR = 284,

  /**
   * @generated from enum value: CREATE_ONTARIO_SYSTEMS_USER = 285;
   */
  CREATE_ONTARIO_SYSTEMS_USER = 285,

  /**
   * @generated from enum value: DELETE_ONTARIO_SYSTEMS_USER = 286;
   */
  DELETE_ONTARIO_SYSTEMS_USER = 286,

  /**
   * @generated from enum value: EDIT_ONTARIO_SYSTEMS_USER = 287;
   */
  EDIT_ONTARIO_SYSTEMS_USER = 287,

  /**
   * @generated from enum value: CREATE_INTEGRATION_MESSAGES = 288;
   */
  CREATE_INTEGRATION_MESSAGES = 288,

  /**
   * @generated from enum value: DELETE_INTEGRATION_MESSAGES = 289;
   */
  DELETE_INTEGRATION_MESSAGES = 289,

  /**
   * @generated from enum value: EDIT_INTEGRATION_MESSAGES = 290;
   */
  EDIT_INTEGRATION_MESSAGES = 290,

  /**
   * @generated from enum value: EXECUTE_INTEGRATION_MESSAGES = 291;
   */
  EXECUTE_INTEGRATION_MESSAGES = 291,

  /**
   * Control whether a user can resend a campaign.
   *
   * @generated from enum value: SCHEDULE_RESEND_CAMPAIGN = 292;
   */
  SCHEDULE_RESEND_CAMPAIGN = 292,

  /**
   * migration permissions
   *
   * @generated from enum value: APP_AGENT = 2000;
   */
  APP_AGENT = 2000,

  /**
   * @generated from enum value: APP_BACKOFFICE = 2001;
   */
  APP_BACKOFFICE = 2001,
}

