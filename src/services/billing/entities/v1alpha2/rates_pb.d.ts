// @generated by protoc-gen-es v1.8.0 with parameter "target=js+dts"
// @generated from file services/billing/entities/v1alpha2/rates.proto (package services.billing.entities.v1alpha2, syntax proto3)
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
 * @generated from enum services.billing.entities.v1alpha2.RateDefinitionConfigType
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
   * omni config types (1000-1999)
   *
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_SEATS = 1000;
   */
  OMNI_AGENT_SEATS = 1000,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_CONNECTED_INBOX_POLL = 1500;
   */
  OMNI_CONNECTED_INBOX_POLL = 1500,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_CONNECTED_INBOX_CREATED = 1501;
   */
  OMNI_CONNECTED_INBOX_CREATED = 1501,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_MESSAGE_CHAT = 1600;
   */
  OMNI_AGENT_MESSAGE_CHAT = 1600,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_MESSAGE_CHAT_SIZE = 1601;
   */
  OMNI_AGENT_MESSAGE_CHAT_SIZE = 1601,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_MESSAGE_CHAT_UNITS = 1602;
   */
  OMNI_AGENT_MESSAGE_CHAT_UNITS = 1602,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_MESSAGE_EMAIL = 1610;
   */
  OMNI_AGENT_MESSAGE_EMAIL = 1610,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_MESSAGE_EMAIL_SIZE = 1611;
   */
  OMNI_AGENT_MESSAGE_EMAIL_SIZE = 1611,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_MESSAGE_EMAIL_UNITS = 1612;
   */
  OMNI_AGENT_MESSAGE_EMAIL_UNITS = 1612,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_MESSAGE_SMS = 1620;
   */
  OMNI_AGENT_MESSAGE_SMS = 1620,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_MESSAGE_SMS_SIZE = 1621;
   */
  OMNI_AGENT_MESSAGE_SMS_SIZE = 1621,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_MESSAGE_SMS_UNITS = 1622;
   */
  OMNI_AGENT_MESSAGE_SMS_UNITS = 1622,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_MANAGER_MESSAGE_CHAT = 1700;
   */
  OMNI_MANAGER_MESSAGE_CHAT = 1700,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_MANAGER_MESSAGE_CHAT_SIZE = 1701;
   */
  OMNI_MANAGER_MESSAGE_CHAT_SIZE = 1701,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_MANAGER_MESSAGE_CHAT_UNITS = 1702;
   */
  OMNI_MANAGER_MESSAGE_CHAT_UNITS = 1702,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_MANAGER_MESSAGE_EMAIL = 1710;
   */
  OMNI_MANAGER_MESSAGE_EMAIL = 1710,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_MANAGER_MESSAGE_EMAIL_SIZE = 1711;
   */
  OMNI_MANAGER_MESSAGE_EMAIL_SIZE = 1711,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_MANAGER_MESSAGE_EMAIL_UNITS = 1712;
   */
  OMNI_MANAGER_MESSAGE_EMAIL_UNITS = 1712,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_MANAGER_MESSAGE_SMS = 1720;
   */
  OMNI_MANAGER_MESSAGE_SMS = 1720,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_MANAGER_MESSAGE_SMS_SIZE = 1721;
   */
  OMNI_MANAGER_MESSAGE_SMS_SIZE = 1721,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_MANAGER_MESSAGE_SMS_UNITS = 1722;
   */
  OMNI_MANAGER_MESSAGE_SMS_UNITS = 1722,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_SYSTEM_MESSAGE_CHAT = 1800;
   */
  OMNI_SYSTEM_MESSAGE_CHAT = 1800,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_SYSTEM_MESSAGE_CHAT_SIZE = 1801;
   */
  OMNI_SYSTEM_MESSAGE_CHAT_SIZE = 1801,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_SYSTEM_MESSAGE_CHAT_UNITS = 1802;
   */
  OMNI_SYSTEM_MESSAGE_CHAT_UNITS = 1802,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_SYSTEM_MESSAGE_EMAIL = 1810;
   */
  OMNI_SYSTEM_MESSAGE_EMAIL = 1810,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_SYSTEM_MESSAGE_EMAIL_SIZE = 1811;
   */
  OMNI_SYSTEM_MESSAGE_EMAIL_SIZE = 1811,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_SYSTEM_MESSAGE_EMAIL_UNITS = 1812;
   */
  OMNI_SYSTEM_MESSAGE_EMAIL_UNITS = 1812,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_SYSTEM_MESSAGE_SMS = 1820;
   */
  OMNI_SYSTEM_MESSAGE_SMS = 1820,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_SYSTEM_MESSAGE_SMS_SIZE = 1821;
   */
  OMNI_SYSTEM_MESSAGE_SMS_SIZE = 1821,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_SYSTEM_MESSAGE_SMS_UNITS = 1822;
   */
  OMNI_SYSTEM_MESSAGE_SMS_UNITS = 1822,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_CUSTOMER_MESSAGE_CHAT = 1900;
   */
  OMNI_CUSTOMER_MESSAGE_CHAT = 1900,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_CUSTOMER_MESSAGE_CHAT_SIZE = 1901;
   */
  OMNI_CUSTOMER_MESSAGE_CHAT_SIZE = 1901,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_CUSTOMER_MESSAGE_CHAT_UNITS = 1902;
   */
  OMNI_CUSTOMER_MESSAGE_CHAT_UNITS = 1902,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_CUSTOMER_MESSAGE_EMAIL = 1910;
   */
  OMNI_CUSTOMER_MESSAGE_EMAIL = 1910,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_CUSTOMER_MESSAGE_EMAIL_SIZE = 1911;
   */
  OMNI_CUSTOMER_MESSAGE_EMAIL_SIZE = 1911,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_CUSTOMER_MESSAGE_EMAIL_UNITS = 1912;
   */
  OMNI_CUSTOMER_MESSAGE_EMAIL_UNITS = 1912,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_CUSTOMER_MESSAGE_SMS = 1920;
   */
  OMNI_CUSTOMER_MESSAGE_SMS = 1920,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_CUSTOMER_MESSAGE_SMS_SIZE = 1921;
   */
  OMNI_CUSTOMER_MESSAGE_SMS_SIZE = 1921,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_OMNI_CUSTOMER_MESSAGE_SMS_UNITS = 1922;
   */
  OMNI_CUSTOMER_MESSAGE_SMS_UNITS = 1922,

  /**
   * compliance config types (2000-2999)
   *
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_COMPLIANCE_RND_QUERY = 2000;
   */
  COMPLIANCE_RND_QUERY = 2000,

  /**
   * @generated from enum value: RATE_DEFINITION_CONFIG_TYPE_COMPLIANCE_RND_QUERY_CACHED = 2001;
   */
  COMPLIANCE_RND_QUERY_CACHED = 2001,
}

/**
 * RateSnapshot represents a snapshot of rates for a given time period.
 *
 * @generated from message services.billing.entities.v1alpha2.RateSnapshot
 */
export declare class RateSnapshot extends Message<RateSnapshot> {
  /**
   * @generated from field: google.protobuf.Timestamp start_date = 1;
   */
  startDate?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp end_date = 2;
   */
  endDate?: Timestamp;

  /**
   * @generated from field: repeated services.billing.entities.v1alpha2.RateDefinition rates = 3;
   */
  rates: RateDefinition[];

  constructor(data?: PartialMessage<RateSnapshot>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.entities.v1alpha2.RateSnapshot";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RateSnapshot;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RateSnapshot;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RateSnapshot;

  static equals(a: RateSnapshot | PlainMessage<RateSnapshot> | undefined, b: RateSnapshot | PlainMessage<RateSnapshot> | undefined): boolean;
}

/**
 * @generated from message services.billing.entities.v1alpha2.RateDefinition
 */
export declare class RateDefinition extends Message<RateDefinition> {
  /**
   * @generated from field: string rate_definition_id = 1;
   */
  rateDefinitionId: string;

  /**
   * @generated from field: api.commons.audit.EventType event_type = 2;
   */
  eventType: EventType;

  /**
   * @generated from field: services.billing.entities.v1alpha2.RateDefinitionConfigType config_type = 3;
   */
  configType: RateDefinitionConfigType;

  /**
   * @generated from field: services.billing.entities.v1alpha2.MatchingRule matching_rule = 4;
   */
  matchingRule: MatchingRule;

  /**
   * @generated from field: services.billing.entities.v1alpha2.MatchingConfig matching_config = 5;
   */
  matchingConfig?: MatchingConfig;

  /**
   * a hash of the matching rule and config
   *
   * @generated from field: string matching_sha = 6;
   */
  matchingSha: string;

  /**
   * @generated from field: google.protobuf.Timestamp create_time = 7;
   */
  createTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp update_time = 8;
   */
  updateTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp delete_time = 9;
   */
  deleteTime?: Timestamp;

  /**
   * the time this rate definition becomes effective (or now if not set)
   *
   * @generated from field: google.protobuf.Timestamp effective_time = 10;
   */
  effectiveTime?: Timestamp;

  /**
   * the configuration for this definition
   *
   * @generated from field: services.billing.entities.v1alpha2.RateDefinitionConfig config = 11;
   */
  config?: RateDefinitionConfig;

  /**
   * a group identifier for this rate definition; optional
   *
   * @generated from field: string group_id = 12;
   */
  groupId: string;

  constructor(data?: PartialMessage<RateDefinition>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.entities.v1alpha2.RateDefinition";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RateDefinition;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RateDefinition;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RateDefinition;

  static equals(a: RateDefinition | PlainMessage<RateDefinition> | undefined, b: RateDefinition | PlainMessage<RateDefinition> | undefined): boolean;
}

/**
 * @generated from message services.billing.entities.v1alpha2.RateDefinitionConfig
 */
export declare class RateDefinitionConfig extends Message<RateDefinitionConfig> {
  /**
   * @generated from oneof services.billing.entities.v1alpha2.RateDefinitionConfig.config
   */
  config: {
    /**
     * omni (1000 - 1999)
     *
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig agent_seats = 1000;
     */
    value: BasicConfig;
    case: "agentSeats";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig connected_inbox_poll = 1500;
     */
    value: BasicConfig;
    case: "connectedInboxPoll";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig connected_inbox_created = 1501;
     */
    value: BasicConfig;
    case: "connectedInboxCreated";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig agent_message_chat = 1600;
     */
    value: BasicConfig;
    case: "agentMessageChat";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicUnitConfig agent_message_chat_size = 1601;
     */
    value: BasicUnitConfig;
    case: "agentMessageChatSize";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig agent_message_chat_units = 1602;
     */
    value: BasicConfig;
    case: "agentMessageChatUnits";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig agent_message_email = 1610;
     */
    value: BasicConfig;
    case: "agentMessageEmail";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicUnitConfig agent_message_email_size = 1611;
     */
    value: BasicUnitConfig;
    case: "agentMessageEmailSize";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig agent_message_email_units = 1612;
     */
    value: BasicConfig;
    case: "agentMessageEmailUnits";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig agent_message_sms = 1620;
     */
    value: BasicConfig;
    case: "agentMessageSms";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicUnitConfig agent_message_sms_size = 1621;
     */
    value: BasicUnitConfig;
    case: "agentMessageSmsSize";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig agent_message_sms_units = 1622;
     */
    value: BasicConfig;
    case: "agentMessageSmsUnits";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig manager_message_chat = 1700;
     */
    value: BasicConfig;
    case: "managerMessageChat";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicUnitConfig manager_message_chat_size = 1701;
     */
    value: BasicUnitConfig;
    case: "managerMessageChatSize";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig manager_message_chat_units = 1702;
     */
    value: BasicConfig;
    case: "managerMessageChatUnits";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig manager_message_email = 1710;
     */
    value: BasicConfig;
    case: "managerMessageEmail";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicUnitConfig manager_message_email_size = 1711;
     */
    value: BasicUnitConfig;
    case: "managerMessageEmailSize";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig manager_message_email_units = 1712;
     */
    value: BasicConfig;
    case: "managerMessageEmailUnits";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig manager_message_sms = 1720;
     */
    value: BasicConfig;
    case: "managerMessageSms";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicUnitConfig manager_message_sms_size = 1721;
     */
    value: BasicUnitConfig;
    case: "managerMessageSmsSize";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig manager_message_sms_units = 1722;
     */
    value: BasicConfig;
    case: "managerMessageSmsUnits";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig system_message_chat = 1800;
     */
    value: BasicConfig;
    case: "systemMessageChat";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicUnitConfig system_message_chat_size = 1801;
     */
    value: BasicUnitConfig;
    case: "systemMessageChatSize";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig system_message_chat_units = 1802;
     */
    value: BasicConfig;
    case: "systemMessageChatUnits";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig system_message_email = 1810;
     */
    value: BasicConfig;
    case: "systemMessageEmail";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicUnitConfig system_message_email_size = 1811;
     */
    value: BasicUnitConfig;
    case: "systemMessageEmailSize";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig system_message_email_units = 1812;
     */
    value: BasicConfig;
    case: "systemMessageEmailUnits";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig system_message_sms = 1820;
     */
    value: BasicConfig;
    case: "systemMessageSms";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicUnitConfig system_message_sms_size = 1821;
     */
    value: BasicUnitConfig;
    case: "systemMessageSmsSize";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig system_message_sms_units = 1822;
     */
    value: BasicConfig;
    case: "systemMessageSmsUnits";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig customer_message_chat = 1900;
     */
    value: BasicConfig;
    case: "customerMessageChat";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicUnitConfig customer_message_chat_size = 1901;
     */
    value: BasicUnitConfig;
    case: "customerMessageChatSize";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig customer_message_chat_units = 1902;
     */
    value: BasicConfig;
    case: "customerMessageChatUnits";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig customer_message_email = 1910;
     */
    value: BasicConfig;
    case: "customerMessageEmail";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicUnitConfig customer_message_email_size = 1911;
     */
    value: BasicUnitConfig;
    case: "customerMessageEmailSize";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig customer_message_email_units = 1912;
     */
    value: BasicConfig;
    case: "customerMessageEmailUnits";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig customer_message_sms = 1920;
     */
    value: BasicConfig;
    case: "customerMessageSms";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicUnitConfig customer_message_sms_size = 1921;
     */
    value: BasicUnitConfig;
    case: "customerMessageSmsSize";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig customer_message_sms_units = 1922;
     */
    value: BasicConfig;
    case: "customerMessageSmsUnits";
  } | {
    /**
     * compliance configs
     *
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig compliance_rnd_query = 2000;
     */
    value: BasicConfig;
    case: "complianceRndQuery";
  } | {
    /**
     * @generated from field: services.billing.entities.v1alpha2.BasicConfig compliance_rnd_query_cached = 2001;
     */
    value: BasicConfig;
    case: "complianceRndQueryCached";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<RateDefinitionConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.entities.v1alpha2.RateDefinitionConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RateDefinitionConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RateDefinitionConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RateDefinitionConfig;

  static equals(a: RateDefinitionConfig | PlainMessage<RateDefinitionConfig> | undefined, b: RateDefinitionConfig | PlainMessage<RateDefinitionConfig> | undefined): boolean;
}
