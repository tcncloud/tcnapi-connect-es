// @generated by protoc-gen-es v1.7.0 with parameter "target=js+dts"
// @generated from file services/billing/entities/v1alpha1/rates.proto (package services.billing.entities.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { EventType } from "../../../../api/commons/audit/event_types_pb.js";
import type { MatchingConfig, MatchingRule } from "./matching_pb.js";
import type { BasicConfig, BasicUnitConfig } from "./modules_pb.js";

/**
 * RateDefinitionConfigType defines the type of configuration for a rate definition.
 *
 * @generated from enum services.billing.entities.v1alpha1.RateDefinitionConfigType
 */
export declare enum RateDefinitionConfigType {
  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_NOOP = 1;
   */
  NOOP = 1,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_AGENT_SEATS = 2;
   */
  AGENT_SEATS = 2,

  /**
   * omni config types
   *
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_AGENT_TEXT_MESSAGE_CHAT = 100;
   */
  AGENT_TEXT_MESSAGE_CHAT = 100,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_AGENT_TEXT_MESSAGE_EMAIL_MESSAGE = 101;
   */
  AGENT_TEXT_MESSAGE_EMAIL_MESSAGE = 101,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_AGENT_TEXT_MESSAGE_EMAIL_SIZE = 102;
   */
  AGENT_TEXT_MESSAGE_EMAIL_SIZE = 102,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_AGENT_TEXT_MESSAGE_SMS = 103;
   */
  AGENT_TEXT_MESSAGE_SMS = 103,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_TASK_MESSAGE_SENT_EMAIL_MESSAGE = 104;
   */
  TASK_MESSAGE_SENT_EMAIL_MESSAGE = 104,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_TASK_MESSAGE_SENT_EMAIL_SIZE = 105;
   */
  TASK_MESSAGE_SENT_EMAIL_SIZE = 105,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_TASK_MESSAGE_SENT_SMS = 106;
   */
  TASK_MESSAGE_SENT_SMS = 106,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_CONNECTED_INBOX_POLL = 107;
   */
  CONNECTED_INBOX_POLL = 107,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_CHAT = 108;
   */
  MANAGER_TEXT_MESSAGE_CHAT = 108,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_EMAIL_MESSAGE = 109;
   */
  MANAGER_TEXT_MESSAGE_EMAIL_MESSAGE = 109,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_EMAIL_SIZE = 110;
   */
  MANAGER_TEXT_MESSAGE_EMAIL_SIZE = 110,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_SMS = 111;
   */
  MANAGER_TEXT_MESSAGE_SMS = 111,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_CHAT = 112;
   */
  CUSTOMER_TEXT_MESSAGE_CHAT = 112,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_EMAIL_MESSAGE = 113;
   */
  CUSTOMER_TEXT_MESSAGE_EMAIL_MESSAGE = 113,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_EMAIL_SIZE = 114;
   */
  CUSTOMER_TEXT_MESSAGE_EMAIL_SIZE = 114,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_SMS = 115;
   */
  CUSTOMER_TEXT_MESSAGE_SMS = 115,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_AGENT_TEXT_MESSAGE_CHAT_SIZE = 116;
   */
  AGENT_TEXT_MESSAGE_CHAT_SIZE = 116,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_CHAT_SIZE = 117;
   */
  MANAGER_TEXT_MESSAGE_CHAT_SIZE = 117,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_CHAT_SIZE = 118;
   */
  CUSTOMER_TEXT_MESSAGE_CHAT_SIZE = 118,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_CONNECTED_INBOX_CREATED = 119;
   */
  CONNECTED_INBOX_CREATED = 119,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_AGENT_TEXT_MESSAGE_SMS_SIZE = 120;
   */
  AGENT_TEXT_MESSAGE_SMS_SIZE = 120,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_SMS_SIZE = 121;
   */
  MANAGER_TEXT_MESSAGE_SMS_SIZE = 121,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_SMS_SIZE = 122;
   */
  CUSTOMER_TEXT_MESSAGE_SMS_SIZE = 122,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_TASK_MESSAGE_SENT_SMS_SIZE = 123;
   */
  TASK_MESSAGE_SENT_SMS_SIZE = 123,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_AGENT_CHAT_MESSAGE_UNITS = 124;
   */
  AGENT_CHAT_MESSAGE_UNITS = 124,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_AGENT_EMAIL_MESSAGE_UNITS = 125;
   */
  AGENT_EMAIL_MESSAGE_UNITS = 125,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_AGENT_SMS_MESSAGE_UNITS = 126;
   */
  AGENT_SMS_MESSAGE_UNITS = 126,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_MANAGER_CHAT_MESSAGE_UNITS = 127;
   */
  MANAGER_CHAT_MESSAGE_UNITS = 127,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_MANAGER_EMAIL_MESSAGE_UNITS = 128;
   */
  MANAGER_EMAIL_MESSAGE_UNITS = 128,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_MANAGER_SMS_MESSAGE_UNITS = 129;
   */
  MANAGER_SMS_MESSAGE_UNITS = 129,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_CUSTOMER_CHAT_MESSAGE_UNITS = 130;
   */
  CUSTOMER_CHAT_MESSAGE_UNITS = 130,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_CUSTOMER_EMAIL_MESSAGE_UNITS = 131;
   */
  CUSTOMER_EMAIL_MESSAGE_UNITS = 131,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_CUSTOMER_SMS_MESSAGE_UNITS = 132;
   */
  CUSTOMER_SMS_MESSAGE_UNITS = 132,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_SYSTEM_CHAT_MESSAGE_UNITS = 133;
   */
  SYSTEM_CHAT_MESSAGE_UNITS = 133,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_SYSTEM_EMAIL_MESSAGE_UNITS = 134;
   */
  SYSTEM_EMAIL_MESSAGE_UNITS = 134,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_SYSTEM_SMS_MESSAGE_UNITS = 135;
   */
  SYSTEM_SMS_MESSAGE_UNITS = 135,

  /**
   * compliance config types
   *
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_COMPLIANCE_RND_QUERY = 200;
   */
  COMPLIANCE_RND_QUERY = 200,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_COMPLIANCE_RND_QUERY_CACHED = 201;
   */
  COMPLIANCE_RND_QUERY_CACHED = 201,
}

/**
 * RateDefinition defines a rating configuration.
 *
 * @generated from message services.billing.entities.v1alpha1.RateDefinition
 */
export declare class RateDefinition extends Message<RateDefinition> {
  /**
   * the resource identifier
   *
   * @generated from field: string rate_definition_id = 1;
   */
  rateDefinitionId: string;

  /**
   * unused
   *
   * @generated from field: string rate_definition_feature_id = 2 [deprecated = true];
   * @deprecated
   */
  rateDefinitionFeatureId: string;

  /**
   * unused
   *
   * @generated from field: string rate_definition_group_id = 3 [deprecated = true];
   * @deprecated
   */
  rateDefinitionGroupId: string;

  /**
   * the event type this definition rates
   *
   * @generated from field: api.commons.audit.EventType event_type = 4;
   */
  eventType: EventType;

  /**
   * the config type of this definitioin
   *
   * @generated from field: services.billing.entities.v1alpha1.RateDefinitionConfigType config_type = 5;
   */
  configType: RateDefinitionConfigType;

  /**
   * the matching rule for this definition
   *
   * @generated from field: services.billing.entities.v1alpha1.MatchingRule matching_rule = 6;
   */
  matchingRule: MatchingRule;

  /**
   * the matching config for this definition
   *
   * @generated from field: services.billing.entities.v1alpha1.MatchingConfig matching_config = 7;
   */
  matchingConfig?: MatchingConfig;

  /**
   * the configuration for this definition
   *
   * @generated from field: services.billing.entities.v1alpha1.RateDefinitionConfig config = 8;
   */
  config?: RateDefinitionConfig;

  /**
   * the time the rate definition was created
   *
   * @generated from field: google.protobuf.Timestamp create_time = 9;
   */
  createTime?: Timestamp;

  /**
   * the time the rate definition was last updated
   *
   * @generated from field: google.protobuf.Timestamp update_time = 10;
   */
  updateTime?: Timestamp;

  /**
   * the time this rate definition was deleted (if applicable)
   *
   * @generated from field: google.protobuf.Timestamp delete_time = 11;
   */
  deleteTime?: Timestamp;

  /**
   * the matching sha for this definition
   *
   * @generated from field: string matching_sha = 12;
   */
  matchingSha: string;

  constructor(data?: PartialMessage<RateDefinition>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.entities.v1alpha1.RateDefinition";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RateDefinition;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RateDefinition;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RateDefinition;

  static equals(a: RateDefinition | PlainMessage<RateDefinition> | undefined, b: RateDefinition | PlainMessage<RateDefinition> | undefined): boolean;
}

/**
 * RateDefinitionConfig defines the configuration for a rate definition.
 *
 * @generated from message services.billing.entities.v1alpha1.RateDefinitionConfig
 */
export declare class RateDefinitionConfig extends Message<RateDefinitionConfig> {
  /**
   * @generated from oneof services.billing.entities.v1alpha1.RateDefinitionConfig.config
   */
  config: {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicConfig agent_seats_config = 2;
     */
    value: BasicConfig;
    case: "agentSeatsConfig";
  } | {
    /**
     * omni configs
     *
     * @generated from field: services.billing.entities.v1alpha1.BasicConfig agent_text_message_chat_config = 100;
     */
    value: BasicConfig;
    case: "agentTextMessageChatConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicConfig agent_text_message_email_message_config = 101;
     */
    value: BasicConfig;
    case: "agentTextMessageEmailMessageConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicUnitConfig agent_text_message_email_size_config = 102;
     */
    value: BasicUnitConfig;
    case: "agentTextMessageEmailSizeConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicConfig agent_text_message_sms_config = 103;
     */
    value: BasicConfig;
    case: "agentTextMessageSmsConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicConfig task_message_sent_email_message_config = 104;
     */
    value: BasicConfig;
    case: "taskMessageSentEmailMessageConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicUnitConfig task_message_sent_email_size_config = 105;
     */
    value: BasicUnitConfig;
    case: "taskMessageSentEmailSizeConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicConfig task_message_sent_sms_config = 106;
     */
    value: BasicConfig;
    case: "taskMessageSentSmsConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicConfig connected_inbox_poll_config = 107;
     */
    value: BasicConfig;
    case: "connectedInboxPollConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicConfig manager_text_message_chat_config = 108;
     */
    value: BasicConfig;
    case: "managerTextMessageChatConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicConfig manager_text_message_email_message_config = 109;
     */
    value: BasicConfig;
    case: "managerTextMessageEmailMessageConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicUnitConfig manager_text_message_email_size_config = 110;
     */
    value: BasicUnitConfig;
    case: "managerTextMessageEmailSizeConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicConfig manager_text_message_sms_config = 111;
     */
    value: BasicConfig;
    case: "managerTextMessageSmsConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicConfig customer_text_message_chat_config = 112;
     */
    value: BasicConfig;
    case: "customerTextMessageChatConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicConfig customer_text_message_email_message_config = 113;
     */
    value: BasicConfig;
    case: "customerTextMessageEmailMessageConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicUnitConfig customer_text_message_email_size_config = 114;
     */
    value: BasicUnitConfig;
    case: "customerTextMessageEmailSizeConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicConfig customer_text_message_sms_config = 115;
     */
    value: BasicConfig;
    case: "customerTextMessageSmsConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicUnitConfig agent_text_message_chat_size_config = 116;
     */
    value: BasicUnitConfig;
    case: "agentTextMessageChatSizeConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicUnitConfig manager_text_message_chat_size_config = 117;
     */
    value: BasicUnitConfig;
    case: "managerTextMessageChatSizeConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicUnitConfig customer_text_message_chat_size_config = 118;
     */
    value: BasicUnitConfig;
    case: "customerTextMessageChatSizeConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicConfig connected_inbox_created_config = 119;
     */
    value: BasicConfig;
    case: "connectedInboxCreatedConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicUnitConfig agent_text_message_sms_size_config = 120;
     */
    value: BasicUnitConfig;
    case: "agentTextMessageSmsSizeConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicUnitConfig manager_text_message_sms_size_config = 121;
     */
    value: BasicUnitConfig;
    case: "managerTextMessageSmsSizeConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicUnitConfig customer_text_message_sms_size_config = 122;
     */
    value: BasicUnitConfig;
    case: "customerTextMessageSmsSizeConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicUnitConfig task_message_sent_sms_size_config = 123;
     */
    value: BasicUnitConfig;
    case: "taskMessageSentSmsSizeConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicConfig agent_chat_message_units_config = 124;
     */
    value: BasicConfig;
    case: "agentChatMessageUnitsConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicConfig agent_email_message_units_config = 125;
     */
    value: BasicConfig;
    case: "agentEmailMessageUnitsConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicConfig agent_sms_message_units_config = 126;
     */
    value: BasicConfig;
    case: "agentSmsMessageUnitsConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicConfig manager_chat_message_units_config = 127;
     */
    value: BasicConfig;
    case: "managerChatMessageUnitsConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicConfig manager_email_message_units_config = 128;
     */
    value: BasicConfig;
    case: "managerEmailMessageUnitsConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicConfig manager_sms_message_units_config = 129;
     */
    value: BasicConfig;
    case: "managerSmsMessageUnitsConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicConfig customer_chat_message_units_config = 130;
     */
    value: BasicConfig;
    case: "customerChatMessageUnitsConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicConfig customer_email_message_units_config = 131;
     */
    value: BasicConfig;
    case: "customerEmailMessageUnitsConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicConfig customer_sms_message_units_config = 132;
     */
    value: BasicConfig;
    case: "customerSmsMessageUnitsConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicConfig system_chat_message_units_config = 133;
     */
    value: BasicConfig;
    case: "systemChatMessageUnitsConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicConfig system_email_message_units_config = 134;
     */
    value: BasicConfig;
    case: "systemEmailMessageUnitsConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicConfig system_sms_message_units_config = 135;
     */
    value: BasicConfig;
    case: "systemSmsMessageUnitsConfig";
  } | {
    /**
     * compliance configs
     *
     * @generated from field: services.billing.entities.v1alpha1.BasicConfig compliance_rnd_query_config = 200;
     */
    value: BasicConfig;
    case: "complianceRndQueryConfig";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha1.BasicConfig compliance_rnd_query_cached_config = 201;
     */
    value: BasicConfig;
    case: "complianceRndQueryCachedConfig";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<RateDefinitionConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.entities.v1alpha1.RateDefinitionConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RateDefinitionConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RateDefinitionConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RateDefinitionConfig;

  static equals(a: RateDefinitionConfig | PlainMessage<RateDefinitionConfig> | undefined, b: RateDefinitionConfig | PlainMessage<RateDefinitionConfig> | undefined): boolean;
}

