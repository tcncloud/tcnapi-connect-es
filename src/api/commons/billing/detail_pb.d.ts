// @generated by protoc-gen-es v1.7.0 with parameter "target=js+dts"
// @generated from file api/commons/billing/detail.proto (package api.commons.billing, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { EventType } from "../audit/event_types_pb.js";
import type { BasicAmountConfig, BasicConfig } from "./modules/modules_pb.js";

/**
 * @generated from enum api.commons.billing.DetailConfigType
 * @deprecated
 */
export declare enum DetailConfigType {
  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_UNSPECIFIED = 0;
   */
  DETAIL_CONFIG_TYPE_UNSPECIFIED = 0,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_NOOP = 1;
   */
  DETAIL_CONFIG_TYPE_NOOP = 1,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_AGENT_SEATS = 2;
   */
  DETAIL_CONFIG_TYPE_AGENT_SEATS = 2,

  /**
   * omni config types
   *
   * @generated from enum value: DETAIL_CONFIG_TYPE_AGENT_TEXT_MESSAGE_CHAT = 100;
   */
  DETAIL_CONFIG_TYPE_AGENT_TEXT_MESSAGE_CHAT = 100,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_AGENT_TEXT_MESSAGE_EMAIL_MESSAGE = 101;
   */
  DETAIL_CONFIG_TYPE_AGENT_TEXT_MESSAGE_EMAIL_MESSAGE = 101,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_AGENT_TEXT_MESSAGE_EMAIL_SIZE = 102;
   */
  DETAIL_CONFIG_TYPE_AGENT_TEXT_MESSAGE_EMAIL_SIZE = 102,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_AGENT_TEXT_MESSAGE_SMS = 103;
   */
  DETAIL_CONFIG_TYPE_AGENT_TEXT_MESSAGE_SMS = 103,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_TASK_MESSAGE_SENT_EMAIL_MESSAGE = 104;
   */
  DETAIL_CONFIG_TYPE_TASK_MESSAGE_SENT_EMAIL_MESSAGE = 104,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_TASK_MESSAGE_SENT_EMAIL_SIZE = 105;
   */
  DETAIL_CONFIG_TYPE_TASK_MESSAGE_SENT_EMAIL_SIZE = 105,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_TASK_MESSAGE_SENT_SMS = 106;
   */
  DETAIL_CONFIG_TYPE_TASK_MESSAGE_SENT_SMS = 106,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_CONNECTED_INBOX_POLL = 107;
   */
  DETAIL_CONFIG_TYPE_CONNECTED_INBOX_POLL = 107,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_CHAT = 108;
   */
  DETAIL_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_CHAT = 108,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_EMAIL_MESSAGE = 109;
   */
  DETAIL_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_EMAIL_MESSAGE = 109,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_EMAIL_SIZE = 110;
   */
  DETAIL_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_EMAIL_SIZE = 110,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_SMS = 111;
   */
  DETAIL_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_SMS = 111,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_CHAT = 112;
   */
  DETAIL_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_CHAT = 112,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_EMAIL_MESSAGE = 113;
   */
  DETAIL_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_EMAIL_MESSAGE = 113,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_EMAIL_SIZE = 114;
   */
  DETAIL_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_EMAIL_SIZE = 114,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_SMS = 115;
   */
  DETAIL_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_SMS = 115,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_AGENT_TEXT_MESSAGE_CHAT_SIZE = 116;
   */
  DETAIL_CONFIG_TYPE_AGENT_TEXT_MESSAGE_CHAT_SIZE = 116,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_CHAT_SIZE = 117;
   */
  DETAIL_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_CHAT_SIZE = 117,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_CHAT_SIZE = 118;
   */
  DETAIL_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_CHAT_SIZE = 118,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_CONNECTED_INBOX_CREATED = 119;
   */
  DETAIL_CONFIG_TYPE_CONNECTED_INBOX_CREATED = 119,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_AGENT_TEXT_MESSAGE_SMS_SIZE = 120;
   */
  DETAIL_CONFIG_TYPE_AGENT_TEXT_MESSAGE_SMS_SIZE = 120,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_SMS_SIZE = 121;
   */
  DETAIL_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_SMS_SIZE = 121,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_SMS_SIZE = 122;
   */
  DETAIL_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_SMS_SIZE = 122,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_TASK_MESSAGE_SENT_SMS_SIZE = 123;
   */
  DETAIL_CONFIG_TYPE_TASK_MESSAGE_SENT_SMS_SIZE = 123,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_AGENT_CHAT_MESSAGE_UNITS = 124;
   */
  DETAIL_CONFIG_TYPE_AGENT_CHAT_MESSAGE_UNITS = 124,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_AGENT_EMAIL_MESSAGE_UNITS = 125;
   */
  DETAIL_CONFIG_TYPE_AGENT_EMAIL_MESSAGE_UNITS = 125,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_AGENT_SMS_MESSAGE_UNITS = 126;
   */
  DETAIL_CONFIG_TYPE_AGENT_SMS_MESSAGE_UNITS = 126,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_MANAGER_CHAT_MESSAGE_UNITS = 127;
   */
  DETAIL_CONFIG_TYPE_MANAGER_CHAT_MESSAGE_UNITS = 127,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_MANAGER_EMAIL_MESSAGE_UNITS = 128;
   */
  DETAIL_CONFIG_TYPE_MANAGER_EMAIL_MESSAGE_UNITS = 128,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_MANAGER_SMS_MESSAGE_UNITS = 129;
   */
  DETAIL_CONFIG_TYPE_MANAGER_SMS_MESSAGE_UNITS = 129,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_CUSTOMER_CHAT_MESSAGE_UNITS = 130;
   */
  DETAIL_CONFIG_TYPE_CUSTOMER_CHAT_MESSAGE_UNITS = 130,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_CUSTOMER_EMAIL_MESSAGE_UNITS = 131;
   */
  DETAIL_CONFIG_TYPE_CUSTOMER_EMAIL_MESSAGE_UNITS = 131,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_CUSTOMER_SMS_MESSAGE_UNITS = 132;
   */
  DETAIL_CONFIG_TYPE_CUSTOMER_SMS_MESSAGE_UNITS = 132,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_SYSTEM_CHAT_MESSAGE_UNITS = 133;
   */
  DETAIL_CONFIG_TYPE_SYSTEM_CHAT_MESSAGE_UNITS = 133,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_SYSTEM_EMAIL_MESSAGE_UNITS = 134;
   */
  DETAIL_CONFIG_TYPE_SYSTEM_EMAIL_MESSAGE_UNITS = 134,

  /**
   * @generated from enum value: DETAIL_CONFIG_TYPE_SYSTEM_SMS_MESSAGE_UNITS = 135;
   */
  DETAIL_CONFIG_TYPE_SYSTEM_SMS_MESSAGE_UNITS = 135,

  /**
   * compliance config types
   *
   * @generated from enum value: BillingDetailConfigType_COMPLIANCE_RND_QUERY = 200;
   */
  BillingDetailConfigType_COMPLIANCE_RND_QUERY = 200,

  /**
   * @generated from enum value: BillingDetailConfigType_COMPLIANCE_RND_QUERY_CACHED = 201;
   */
  BillingDetailConfigType_COMPLIANCE_RND_QUERY_CACHED = 201,
}

/**
 * @generated from message api.commons.billing.Plan
 * @deprecated
 */
export declare class Plan extends Message<Plan> {
  /**
   * @generated from field: repeated api.commons.billing.Detail details = 1 [deprecated = true];
   * @deprecated
   */
  details: Detail[];

  /**
   * @generated from field: string org_id = 2 [deprecated = true];
   * @deprecated
   */
  orgId: string;

  /**
   * @generated from field: int64 billing_plan_id = 3 [jstype = JS_STRING, deprecated = true];
   * @deprecated
   */
  billingPlanId: string;

  /**
   * @generated from field: google.protobuf.Timestamp create_time = 4 [deprecated = true];
   * @deprecated
   */
  createTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp update_time = 5 [deprecated = true];
   * @deprecated
   */
  updateTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp start_time = 6 [deprecated = true];
   * @deprecated
   */
  startTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp end_time = 7 [deprecated = true];
   * @deprecated
   */
  endTime?: Timestamp;

  constructor(data?: PartialMessage<Plan>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.billing.Plan";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Plan;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Plan;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Plan;

  static equals(a: Plan | PlainMessage<Plan> | undefined, b: Plan | PlainMessage<Plan> | undefined): boolean;
}

/**
 * @generated from message api.commons.billing.Detail
 * @deprecated
 */
export declare class Detail extends Message<Detail> {
  /**
   * @generated from field: int64 billing_detail_sid = 1 [deprecated = true];
   * @deprecated
   */
  billingDetailSid: bigint;

  /**
   * @generated from field: api.commons.audit.EventType event_type = 2 [deprecated = true];
   * @deprecated
   */
  eventType: EventType;

  /**
   * @generated from field: api.commons.billing.DetailConfigType config_type = 3 [deprecated = true];
   * @deprecated
   */
  configType: DetailConfigType;

  /**
   * @generated from field: api.commons.billing.DetailConfig config = 4 [deprecated = true];
   * @deprecated
   */
  config?: DetailConfig;

  /**
   * @generated from field: google.protobuf.Timestamp date_created = 5 [deprecated = true];
   * @deprecated
   */
  dateCreated?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp date_modified = 6 [deprecated = true];
   * @deprecated
   */
  dateModified?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp deleted_on = 7 [deprecated = true];
   * @deprecated
   */
  deletedOn?: Timestamp;

  /**
   * @generated from field: int64 billing_plan_id = 8 [jstype = JS_STRING, deprecated = true];
   * @deprecated
   */
  billingPlanId: string;

  constructor(data?: PartialMessage<Detail>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.billing.Detail";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Detail;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Detail;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Detail;

  static equals(a: Detail | PlainMessage<Detail> | undefined, b: Detail | PlainMessage<Detail> | undefined): boolean;
}

/**
 * @generated from message api.commons.billing.DetailConfig
 * @deprecated
 */
export declare class DetailConfig extends Message<DetailConfig> {
  /**
   * @generated from oneof api.commons.billing.DetailConfig.config
   */
  config: {
    /**
     * @generated from field: api.commons.billing.modules.BasicConfig agent_seats_config = 2 [deprecated = true];
     * @deprecated
     */
    value: BasicConfig;
    case: "agentSeatsConfig";
  } | {
    /**
     * omni configs
     *
     * @generated from field: api.commons.billing.modules.BasicConfig agent_text_message_chat_config = 100 [deprecated = true];
     * @deprecated
     */
    value: BasicConfig;
    case: "agentTextMessageChatConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicConfig agent_text_message_email_message_config = 101 [deprecated = true];
     * @deprecated
     */
    value: BasicConfig;
    case: "agentTextMessageEmailMessageConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicAmountConfig agent_text_message_email_size_config = 102 [deprecated = true];
     * @deprecated
     */
    value: BasicAmountConfig;
    case: "agentTextMessageEmailSizeConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicConfig agent_text_message_sms_config = 103 [deprecated = true];
     * @deprecated
     */
    value: BasicConfig;
    case: "agentTextMessageSmsConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicConfig task_message_sent_email_message_config = 104 [deprecated = true];
     * @deprecated
     */
    value: BasicConfig;
    case: "taskMessageSentEmailMessageConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicAmountConfig task_message_sent_email_size_config = 105 [deprecated = true];
     * @deprecated
     */
    value: BasicAmountConfig;
    case: "taskMessageSentEmailSizeConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicConfig task_message_sent_sms_config = 106 [deprecated = true];
     * @deprecated
     */
    value: BasicConfig;
    case: "taskMessageSentSmsConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicConfig connected_inbox_poll_config = 107 [deprecated = true];
     * @deprecated
     */
    value: BasicConfig;
    case: "connectedInboxPollConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicConfig manager_text_message_chat_config = 108 [deprecated = true];
     * @deprecated
     */
    value: BasicConfig;
    case: "managerTextMessageChatConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicConfig manager_text_message_email_message_config = 109 [deprecated = true];
     * @deprecated
     */
    value: BasicConfig;
    case: "managerTextMessageEmailMessageConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicAmountConfig manager_text_message_email_size_config = 110 [deprecated = true];
     * @deprecated
     */
    value: BasicAmountConfig;
    case: "managerTextMessageEmailSizeConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicConfig manager_text_message_sms_config = 111 [deprecated = true];
     * @deprecated
     */
    value: BasicConfig;
    case: "managerTextMessageSmsConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicConfig customer_text_message_chat_config = 112 [deprecated = true];
     * @deprecated
     */
    value: BasicConfig;
    case: "customerTextMessageChatConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicConfig customer_text_message_email_message_config = 113 [deprecated = true];
     * @deprecated
     */
    value: BasicConfig;
    case: "customerTextMessageEmailMessageConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicAmountConfig customer_text_message_email_size_config = 114 [deprecated = true];
     * @deprecated
     */
    value: BasicAmountConfig;
    case: "customerTextMessageEmailSizeConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicConfig customer_text_message_sms_config = 115 [deprecated = true];
     * @deprecated
     */
    value: BasicConfig;
    case: "customerTextMessageSmsConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicAmountConfig agent_text_message_chat_size_config = 116 [deprecated = true];
     * @deprecated
     */
    value: BasicAmountConfig;
    case: "agentTextMessageChatSizeConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicAmountConfig manager_text_message_chat_size_config = 117 [deprecated = true];
     * @deprecated
     */
    value: BasicAmountConfig;
    case: "managerTextMessageChatSizeConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicAmountConfig customer_text_message_chat_size_config = 118 [deprecated = true];
     * @deprecated
     */
    value: BasicAmountConfig;
    case: "customerTextMessageChatSizeConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicConfig connected_inbox_created_config = 119 [deprecated = true];
     * @deprecated
     */
    value: BasicConfig;
    case: "connectedInboxCreatedConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicAmountConfig agent_text_message_sms_size_config = 120 [deprecated = true];
     * @deprecated
     */
    value: BasicAmountConfig;
    case: "agentTextMessageSmsSizeConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicAmountConfig manager_text_message_sms_size_config = 121 [deprecated = true];
     * @deprecated
     */
    value: BasicAmountConfig;
    case: "managerTextMessageSmsSizeConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicAmountConfig customer_text_message_sms_size_config = 122 [deprecated = true];
     * @deprecated
     */
    value: BasicAmountConfig;
    case: "customerTextMessageSmsSizeConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicAmountConfig task_message_sent_sms_size_config = 123 [deprecated = true];
     * @deprecated
     */
    value: BasicAmountConfig;
    case: "taskMessageSentSmsSizeConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicConfig agent_chat_message_units_config = 124 [deprecated = true];
     * @deprecated
     */
    value: BasicConfig;
    case: "agentChatMessageUnitsConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicConfig agent_email_message_units_config = 125 [deprecated = true];
     * @deprecated
     */
    value: BasicConfig;
    case: "agentEmailMessageUnitsConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicConfig agent_sms_message_units_config = 126 [deprecated = true];
     * @deprecated
     */
    value: BasicConfig;
    case: "agentSmsMessageUnitsConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicConfig manager_chat_message_units_config = 127 [deprecated = true];
     * @deprecated
     */
    value: BasicConfig;
    case: "managerChatMessageUnitsConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicConfig manager_email_message_units_config = 128 [deprecated = true];
     * @deprecated
     */
    value: BasicConfig;
    case: "managerEmailMessageUnitsConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicConfig manager_sms_message_units_config = 129 [deprecated = true];
     * @deprecated
     */
    value: BasicConfig;
    case: "managerSmsMessageUnitsConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicConfig customer_chat_message_units_config = 130 [deprecated = true];
     * @deprecated
     */
    value: BasicConfig;
    case: "customerChatMessageUnitsConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicConfig customer_email_message_units_config = 131 [deprecated = true];
     * @deprecated
     */
    value: BasicConfig;
    case: "customerEmailMessageUnitsConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicConfig customer_sms_message_units_config = 132 [deprecated = true];
     * @deprecated
     */
    value: BasicConfig;
    case: "customerSmsMessageUnitsConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicConfig system_chat_message_units_config = 133 [deprecated = true];
     * @deprecated
     */
    value: BasicConfig;
    case: "systemChatMessageUnitsConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicConfig system_email_message_units_config = 134 [deprecated = true];
     * @deprecated
     */
    value: BasicConfig;
    case: "systemEmailMessageUnitsConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicConfig system_sms_message_units_config = 135 [deprecated = true];
     * @deprecated
     */
    value: BasicConfig;
    case: "systemSmsMessageUnitsConfig";
  } | {
    /**
     * compliance configs
     *
     * @generated from field: api.commons.billing.modules.BasicConfig compliance_rnd_query_config = 200 [deprecated = true];
     * @deprecated
     */
    value: BasicConfig;
    case: "complianceRndQueryConfig";
  } | {
    /**
     * @generated from field: api.commons.billing.modules.BasicConfig compliance_rnd_query_cached_config = 201 [deprecated = true];
     * @deprecated
     */
    value: BasicConfig;
    case: "complianceRndQueryCachedConfig";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<DetailConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.billing.DetailConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DetailConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DetailConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DetailConfig;

  static equals(a: DetailConfig | PlainMessage<DetailConfig> | undefined, b: DetailConfig | PlainMessage<DetailConfig> | undefined): boolean;
}

