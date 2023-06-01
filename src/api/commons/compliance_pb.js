// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/commons/compliance.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, StringValue, Timestamp } from "@bufbuild/protobuf";
import { Month, Weekday_Enum } from "./enums_pb.js";
import { CommType } from "./communication_pb.js";

/**
 * @generated from enum api.commons.Verb
 */
export const Verb = proto3.makeEnum(
  "api.commons.Verb",
  [
    {no: 0, name: "V_UNKNOWN"},
    {no: 1, name: "V_ALLOW"},
    {no: 2, name: "V_DENY"},
    {no: 3, name: "V_SCRUB"},
    {no: 4, name: "V_OVERRIDE"},
  ],
);

/**
 * @generated from enum api.commons.Entity
 */
export const Entity = proto3.makeEnum(
  "api.commons.Entity",
  [
    {no: 0, name: "E_UNKNOWN"},
    {no: 1, name: "E_CALL"},
    {no: 2, name: "E_EMAIL"},
    {no: 3, name: "E_SMS"},
  ],
);

/**
 * @generated from enum api.commons.SubEntity
 */
export const SubEntity = proto3.makeEnum(
  "api.commons.SubEntity",
  [
    {no: 0, name: "SE_ALL"},
    {no: 1, name: "SE_INBOUND"},
    {no: 2, name: "SE_OUTBOUND"},
    {no: 3, name: "SE_MANUAL"},
    {no: 4, name: "SE_PREVIEW"},
    {no: 5, name: "SE_MAC"},
    {no: 6, name: "SE_BROADCAST"},
  ],
);

/**
 * @generated from enum api.commons.PhoneType
 */
export const PhoneType = proto3.makeEnum(
  "api.commons.PhoneType",
  [
    {no: 0, name: "CELL"},
    {no: 1, name: "LAND"},
    {no: 2, name: "TOLL_FREE"},
  ],
);

/**
 * @generated from enum api.commons.ContentType
 */
export const ContentType = proto3.makeEnum(
  "api.commons.ContentType",
  [
    {no: 0, name: "CT_PHONE_NUMBER"},
    {no: 1, name: "CT_EMAIL"},
    {no: 2, name: "CT_SMS"},
    {no: 3, name: "CT_OTHER"},
    {no: 4, name: "CT_ACCOUNT_NUMBER"},
  ],
);

/**
 * @generated from enum api.commons.Channel
 */
export const Channel = proto3.makeEnum(
  "api.commons.Channel",
  [
    {no: 0, name: "CHANNEL_CALL", localName: "CALL"},
    {no: 1, name: "CHANNEL_EMAIL", localName: "EMAIL"},
    {no: 2, name: "CHANNEL_SMS", localName: "SMS"},
  ],
);

/**
 * @generated from enum api.commons.PluginType
 */
export const PluginType = proto3.makeEnum(
  "api.commons.PluginType",
  [
    {no: 0, name: "UNKNOWN_PLUGIN"},
    {no: 1, name: "GRYPHON"},
    {no: 2, name: "TCN_CONSENT"},
    {no: 3, name: "RND"},
  ],
);

/**
 * @generated from enum api.commons.Environment
 */
export const Environment = proto3.makeEnum(
  "api.commons.Environment",
  [
    {no: 0, name: "INVALID_ENV"},
    {no: 1, name: "TEST"},
    {no: 2, name: "PRODUCTION"},
  ],
);

/**
 * @generated from enum api.commons.ConsentAbsentAction
 */
export const ConsentAbsentAction = proto3.makeEnum(
  "api.commons.ConsentAbsentAction",
  [
    {no: 0, name: "CONSENT_ABSENT_ACTION_ALLOW", localName: "ALLOW"},
    {no: 1, name: "CONSENT_ABSENT_ACTION_DENY", localName: "DENY"},
  ],
);

/**
 * @generated from message api.commons.Rule
 */
export const Rule = proto3.makeMessageType(
  "api.commons.Rule",
  () => [
    { no: 1, name: "verb", kind: "enum", T: proto3.getEnumType(Verb) },
    { no: 2, name: "entity", kind: "enum", T: proto3.getEnumType(Entity) },
    { no: 3, name: "sub_entity", kind: "enum", T: proto3.getEnumType(SubEntity) },
    { no: 4, name: "selectors", kind: "message", T: Selector, repeated: true },
    { no: 6, name: "rule_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.commons.Selector
 */
export const Selector = proto3.makeMessageType(
  "api.commons.Selector",
  () => [
    { no: 1, name: "time", kind: "message", T: TimeExp, oneof: "selection_rule" },
    { no: 2, name: "week", kind: "message", T: WeekdayExp, oneof: "selection_rule" },
    { no: 3, name: "dncl", kind: "message", T: DnclExp, oneof: "selection_rule" },
    { no: 4, name: "frequency", kind: "message", T: FrequencyExp, oneof: "selection_rule" },
    { no: 5, name: "location", kind: "message", T: LocationExp, oneof: "selection_rule" },
    { no: 6, name: "phone_type", kind: "message", T: PhoneTypeExp, oneof: "selection_rule" },
    { no: 7, name: "month", kind: "message", T: MonthExp, oneof: "selection_rule" },
    { no: 8, name: "date", kind: "message", T: DateExp, oneof: "selection_rule" },
    { no: 9, name: "holiday", kind: "message", T: HolidayExp, oneof: "selection_rule" },
    { no: 10, name: "meta", kind: "message", T: MetaFieldExp, oneof: "selection_rule" },
    { no: 11, name: "plugin", kind: "message", T: PluginExp, oneof: "selection_rule" },
  ],
);

/**
 * @generated from message api.commons.TimeExp
 */
export const TimeExp = proto3.makeMessageType(
  "api.commons.TimeExp",
  () => [
    { no: 1, name: "start_hour", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "end_hour", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.commons.WeekdayExp
 */
export const WeekdayExp = proto3.makeMessageType(
  "api.commons.WeekdayExp",
  () => [
    { no: 1, name: "day", kind: "enum", T: proto3.getEnumType(Weekday_Enum) },
    { no: 2, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.commons.DnclExp
 */
export const DnclExp = proto3.makeMessageType(
  "api.commons.DnclExp",
  () => [
    { no: 1, name: "list_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "field_names", kind: "message", T: FieldNamesMod },
  ],
);

/**
 * @generated from message api.commons.FrequencyExp
 */
export const FrequencyExp = proto3.makeMessageType(
  "api.commons.FrequencyExp",
  () => [
    { no: 1, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "duration", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "results", kind: "message", T: ResultsMod },
    { no: 4, name: "dispositions", kind: "message", T: DispositionMod },
    { no: 5, name: "field_names", kind: "message", T: FieldNamesMod },
    { no: 6, name: "checking_entities", kind: "message", T: EntityExp, repeated: true },
  ],
);

/**
 * @generated from message api.commons.LocationExp
 */
export const LocationExp = proto3.makeMessageType(
  "api.commons.LocationExp",
  () => [
    { no: 1, name: "country", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "state", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "county", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "city", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "province", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "postal_codes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 7, name: "area_codes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message api.commons.PhoneTypeExp
 */
export const PhoneTypeExp = proto3.makeMessageType(
  "api.commons.PhoneTypeExp",
  () => [
    { no: 1, name: "phone_type", kind: "enum", T: proto3.getEnumType(PhoneType) },
  ],
);

/**
 * @generated from message api.commons.MonthExp
 */
export const MonthExp = proto3.makeMessageType(
  "api.commons.MonthExp",
  () => [
    { no: 1, name: "month", kind: "enum", T: proto3.getEnumType(Month) },
    { no: 2, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.commons.DateExp
 */
export const DateExp = proto3.makeMessageType(
  "api.commons.DateExp",
  () => [
    { no: 1, name: "month", kind: "enum", T: proto3.getEnumType(Month) },
    { no: 2, name: "day", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "year", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.commons.HolidayExp
 */
export const HolidayExp = proto3.makeMessageType(
  "api.commons.HolidayExp",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "country", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.commons.MetaFieldExp
 */
export const MetaFieldExp = proto3.makeMessageType(
  "api.commons.MetaFieldExp",
  () => [
    { no: 1, name: "field", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.commons.PluginExp
 */
export const PluginExp = proto3.makeMessageType(
  "api.commons.PluginExp",
  () => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(PluginType) },
    { no: 4, name: "tcn_strict", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "license_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "reference_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "from_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "env", kind: "enum", T: proto3.getEnumType(Environment) },
    { no: 7, name: "profile_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "content_field", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "topic", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "absent_action", kind: "enum", T: proto3.getEnumType(ConsentAbsentAction) },
    { no: 10, name: "date_last_contact", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.commons.EntityExp
 */
export const EntityExp = proto3.makeMessageType(
  "api.commons.EntityExp",
  () => [
    { no: 1, name: "sub_entity", kind: "enum", T: proto3.getEnumType(SubEntity) },
    { no: 2, name: "entity", kind: "enum", T: proto3.getEnumType(Entity) },
  ],
);

/**
 * @generated from message api.commons.FieldNamesMod
 */
export const FieldNamesMod = proto3.makeMessageType(
  "api.commons.FieldNamesMod",
  () => [
    { no: 1, name: "field_names", kind: "message", T: Field, repeated: true },
  ],
);

/**
 * @generated from message api.commons.ResultsMod
 */
export const ResultsMod = proto3.makeMessageType(
  "api.commons.ResultsMod",
  () => [
    { no: 1, name: "results", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message api.commons.DispositionMod
 */
export const DispositionMod = proto3.makeMessageType(
  "api.commons.DispositionMod",
  () => [
    { no: 1, name: "dispositions", kind: "message", T: DispositionField, repeated: true },
  ],
);

/**
 * @generated from message api.commons.DispositionField
 */
export const DispositionField = proto3.makeMessageType(
  "api.commons.DispositionField",
  () => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "pairs", kind: "message", T: DispositionPair, repeated: true },
  ],
);

/**
 * @generated from message api.commons.DispositionPair
 */
export const DispositionPair = proto3.makeMessageType(
  "api.commons.DispositionPair",
  () => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.commons.Field
 */
export const Field = proto3.makeMessageType(
  "api.commons.Field",
  () => [
    { no: 1, name: "Field", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "Content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ConsentCondition defines conditions
 * required for a consent to take affect
 *
 * @generated from message api.commons.ConsentCondition
 */
export const ConsentCondition = proto3.makeMessageType(
  "api.commons.ConsentCondition",
  () => [
    { no: 1, name: "consent_condition_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "consent_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "days_of_the_week", kind: "enum", T: proto3.getEnumType(Weekday_Enum), repeated: true },
    { no: 11, name: "time_of_day_from", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "time_of_day_to", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "from_date", kind: "message", T: Timestamp },
    { no: 14, name: "to_date", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message api.commons.ScenarioData
 */
export const ScenarioData = proto3.makeMessageType(
  "api.commons.ScenarioData",
  () => [
    { no: 1, name: "comm_type", kind: "message", T: CommType },
    { no: 2, name: "phone_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "country_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "call_metadata", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 6, name: "time_of_call", kind: "message", T: Timestamp },
    { no: 7, name: "frequency_count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "frequency_duration", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 9, name: "dncl_blocks", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 10, name: "country", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "state", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "county", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "city", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "province", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "phone_type", kind: "enum", T: proto3.getEnumType(PhoneType) },
    { no: 16, name: "time_zone", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 17, name: "holidays", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 18, name: "country_code_data", kind: "message", T: CountryCode },
  ],
);

/**
 * @generated from message api.commons.CountryCode
 */
export const CountryCode = proto3.makeMessageType(
  "api.commons.CountryCode",
  () => [
    { no: 1, name: "country_code", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "country_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "country_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.commons.ScenarioResult
 */
export const ScenarioResult = proto3.makeMessageType(
  "api.commons.ScenarioResult",
  () => [
    { no: 5, name: "passed_value", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "should_allow_responses", kind: "message", T: ScenarioRuleResponse, repeated: true },
    { no: 3, name: "should_deny_responses", kind: "message", T: ScenarioRuleResponse, repeated: true },
    { no: 4, name: "scenario_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.commons.ScenarioRuleResponse
 */
export const ScenarioRuleResponse = proto3.makeMessageType(
  "api.commons.ScenarioRuleResponse",
  () => [
    { no: 1, name: "rule_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "permit_value", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Scrub entry details information
 *
 * @generated from message api.commons.ScrubEntryDetails
 */
export const ScrubEntryDetails = proto3.makeMessageType(
  "api.commons.ScrubEntryDetails",
  () => [
    { no: 1, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "expiration_date", kind: "message", T: Timestamp },
    { no: 3, name: "notes", kind: "message", T: StringValue },
  ],
);

/**
 * @generated from message api.commons.RuleResponse
 */
export const RuleResponse = proto3.makeMessageType(
  "api.commons.RuleResponse",
  () => [
    { no: 1, name: "rule_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "permit", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "plugin_response", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

