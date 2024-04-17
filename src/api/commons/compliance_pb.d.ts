// @generated by protoc-gen-es v1.8.0 with parameter "target=js+dts"
// @generated from file api/commons/compliance.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Month, Weekday_Enum } from "./enums_pb.js";
import type { CommType } from "./communication_pb.js";

/**
 * @generated from enum api.commons.Verb
 */
export declare enum Verb {
  /**
   * @generated from enum value: V_UNKNOWN = 0;
   */
  V_UNKNOWN = 0,

  /**
   * @generated from enum value: V_ALLOW = 1;
   */
  V_ALLOW = 1,

  /**
   * @generated from enum value: V_DENY = 2;
   */
  V_DENY = 2,

  /**
   * @generated from enum value: V_SCRUB = 3;
   */
  V_SCRUB = 3,

  /**
   * @generated from enum value: V_OVERRIDE = 4;
   */
  V_OVERRIDE = 4,
}

/**
 * @generated from enum api.commons.Entity
 */
export declare enum Entity {
  /**
   * @generated from enum value: E_UNKNOWN = 0;
   */
  E_UNKNOWN = 0,

  /**
   * @generated from enum value: E_CALL = 1;
   */
  E_CALL = 1,

  /**
   * @generated from enum value: E_EMAIL = 2;
   */
  E_EMAIL = 2,

  /**
   * @generated from enum value: E_SMS = 3;
   */
  E_SMS = 3,

  /**
   * @generated from enum value: E_WHATSAPP = 4;
   */
  E_WHATSAPP = 4,
}

/**
 * @generated from enum api.commons.SubEntity
 */
export declare enum SubEntity {
  /**
   * @generated from enum value: SE_ALL = 0;
   */
  SE_ALL = 0,

  /**
   * @generated from enum value: SE_INBOUND = 1;
   */
  SE_INBOUND = 1,

  /**
   * @generated from enum value: SE_OUTBOUND = 2;
   */
  SE_OUTBOUND = 2,

  /**
   * @generated from enum value: SE_MANUAL = 3;
   */
  SE_MANUAL = 3,

  /**
   * @generated from enum value: SE_PREVIEW = 4;
   */
  SE_PREVIEW = 4,

  /**
   * @generated from enum value: SE_MAC = 5;
   */
  SE_MAC = 5,

  /**
   * @generated from enum value: SE_BROADCAST = 6;
   */
  SE_BROADCAST = 6,
}

/**
 * @generated from enum api.commons.PhoneType
 */
export declare enum PhoneType {
  /**
   * @generated from enum value: CELL = 0;
   */
  CELL = 0,

  /**
   * @generated from enum value: LAND = 1;
   */
  LAND = 1,

  /**
   * @generated from enum value: TOLL_FREE = 2;
   */
  TOLL_FREE = 2,
}

/**
 * @generated from enum api.commons.ContentType
 */
export declare enum ContentType {
  /**
   * @generated from enum value: CT_PHONE_NUMBER = 0;
   */
  CT_PHONE_NUMBER = 0,

  /**
   * @generated from enum value: CT_EMAIL = 1;
   */
  CT_EMAIL = 1,

  /**
   * @generated from enum value: CT_SMS = 2;
   */
  CT_SMS = 2,

  /**
   * @generated from enum value: CT_OTHER = 3;
   */
  CT_OTHER = 3,

  /**
   * @generated from enum value: CT_ACCOUNT_NUMBER = 4;
   */
  CT_ACCOUNT_NUMBER = 4,

  /**
   * @generated from enum value: CT_WHATSAPP = 5;
   */
  CT_WHATSAPP = 5,
}

/**
 * @generated from enum api.commons.Channel
 */
export declare enum Channel {
  /**
   * @generated from enum value: CHANNEL_CALL = 0;
   */
  CALL = 0,

  /**
   * @generated from enum value: CHANNEL_EMAIL = 1;
   */
  EMAIL = 1,

  /**
   * @generated from enum value: CHANNEL_SMS = 2;
   */
  SMS = 2,

  /**
   * @generated from enum value: CHANNEL_WHATSAPP = 3;
   */
  WHATSAPP = 3,
}

/**
 * @generated from enum api.commons.PluginType
 */
export declare enum PluginType {
  /**
   * @generated from enum value: UNKNOWN_PLUGIN = 0;
   */
  UNKNOWN_PLUGIN = 0,

  /**
   * @generated from enum value: GRYPHON = 1;
   */
  GRYPHON = 1,

  /**
   * @generated from enum value: TCN_CONSENT = 2;
   */
  TCN_CONSENT = 2,

  /**
   * @generated from enum value: RND = 3;
   */
  RND = 3,

  /**
   * @generated from enum value: MRS_COMPLIANCE = 4;
   */
  MRS_COMPLIANCE = 4,
}

/**
 * @generated from enum api.commons.Environment
 */
export declare enum Environment {
  /**
   * @generated from enum value: INVALID_ENV = 0;
   */
  INVALID_ENV = 0,

  /**
   * @generated from enum value: TEST = 1;
   */
  TEST = 1,

  /**
   * @generated from enum value: PRODUCTION = 2;
   */
  PRODUCTION = 2,
}

/**
 * @generated from enum api.commons.ConsentAbsentAction
 */
export declare enum ConsentAbsentAction {
  /**
   * @generated from enum value: CONSENT_ABSENT_ACTION_ALLOW = 0;
   */
  ALLOW = 0,

  /**
   * @generated from enum value: CONSENT_ABSENT_ACTION_DENY = 1;
   */
  DENY = 1,
}

/**
 * @generated from message api.commons.Rule
 */
export declare class Rule extends Message<Rule> {
  /**
   * @generated from field: api.commons.Verb verb = 1;
   */
  verb: Verb;

  /**
   * @generated from field: api.commons.Entity entity = 2;
   */
  entity: Entity;

  /**
   * @generated from field: api.commons.SubEntity sub_entity = 3;
   */
  subEntity: SubEntity;

  /**
   * @generated from field: repeated api.commons.Selector selectors = 4;
   */
  selectors: Selector[];

  /**
   * @generated from field: string rule_text = 6;
   */
  ruleText: string;

  constructor(data?: PartialMessage<Rule>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.Rule";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Rule;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Rule;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Rule;

  static equals(a: Rule | PlainMessage<Rule> | undefined, b: Rule | PlainMessage<Rule> | undefined): boolean;
}

/**
 * @generated from message api.commons.Selector
 */
export declare class Selector extends Message<Selector> {
  /**
   * @generated from oneof api.commons.Selector.selection_rule
   */
  selectionRule: {
    /**
     * @generated from field: api.commons.TimeExp time = 1;
     */
    value: TimeExp;
    case: "time";
  } | {
    /**
     * @generated from field: api.commons.WeekdayExp week = 2;
     */
    value: WeekdayExp;
    case: "week";
  } | {
    /**
     * @generated from field: api.commons.DnclExp dncl = 3;
     */
    value: DnclExp;
    case: "dncl";
  } | {
    /**
     * @generated from field: api.commons.FrequencyExp frequency = 4;
     */
    value: FrequencyExp;
    case: "frequency";
  } | {
    /**
     * @generated from field: api.commons.LocationExp location = 5;
     */
    value: LocationExp;
    case: "location";
  } | {
    /**
     * @generated from field: api.commons.PhoneTypeExp phone_type = 6;
     */
    value: PhoneTypeExp;
    case: "phoneType";
  } | {
    /**
     * @generated from field: api.commons.MonthExp month = 7;
     */
    value: MonthExp;
    case: "month";
  } | {
    /**
     * @generated from field: api.commons.DateExp date = 8;
     */
    value: DateExp;
    case: "date";
  } | {
    /**
     * @generated from field: api.commons.HolidayExp holiday = 9;
     */
    value: HolidayExp;
    case: "holiday";
  } | {
    /**
     * @generated from field: api.commons.MetaFieldExp meta = 10;
     */
    value: MetaFieldExp;
    case: "meta";
  } | {
    /**
     * @generated from field: api.commons.PluginExp plugin = 11;
     */
    value: PluginExp;
    case: "plugin";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<Selector>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.Selector";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Selector;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Selector;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Selector;

  static equals(a: Selector | PlainMessage<Selector> | undefined, b: Selector | PlainMessage<Selector> | undefined): boolean;
}

/**
 * @generated from message api.commons.TimeExp
 */
export declare class TimeExp extends Message<TimeExp> {
  /**
   * @generated from field: string start_hour = 1;
   */
  startHour: string;

  /**
   * @generated from field: string end_hour = 2;
   */
  endHour: string;

  constructor(data?: PartialMessage<TimeExp>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.TimeExp";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TimeExp;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TimeExp;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TimeExp;

  static equals(a: TimeExp | PlainMessage<TimeExp> | undefined, b: TimeExp | PlainMessage<TimeExp> | undefined): boolean;
}

/**
 * @generated from message api.commons.WeekdayExp
 */
export declare class WeekdayExp extends Message<WeekdayExp> {
  /**
   * @generated from field: api.commons.Weekday.Enum day = 1;
   */
  day: Weekday_Enum;

  /**
   * @generated from field: string text = 2;
   */
  text: string;

  constructor(data?: PartialMessage<WeekdayExp>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.WeekdayExp";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WeekdayExp;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WeekdayExp;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WeekdayExp;

  static equals(a: WeekdayExp | PlainMessage<WeekdayExp> | undefined, b: WeekdayExp | PlainMessage<WeekdayExp> | undefined): boolean;
}

/**
 * @generated from message api.commons.DnclExp
 */
export declare class DnclExp extends Message<DnclExp> {
  /**
   * @generated from field: string list_name = 1;
   */
  listName: string;

  /**
   * @generated from field: api.commons.FieldNamesMod field_names = 2;
   */
  fieldNames?: FieldNamesMod;

  constructor(data?: PartialMessage<DnclExp>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.DnclExp";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DnclExp;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DnclExp;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DnclExp;

  static equals(a: DnclExp | PlainMessage<DnclExp> | undefined, b: DnclExp | PlainMessage<DnclExp> | undefined): boolean;
}

/**
 * @generated from message api.commons.FrequencyExp
 */
export declare class FrequencyExp extends Message<FrequencyExp> {
  /**
   * Maximum number of tries
   *
   * @generated from field: int64 count = 1;
   */
  count: bigint;

  /**
   * Measured in nanoseconds
   *
   * @generated from field: int64 duration = 2;
   */
  duration: bigint;

  /**
   * @generated from field: api.commons.ResultsMod results = 3;
   */
  results?: ResultsMod;

  /**
   * @generated from field: api.commons.DispositionMod dispositions = 4;
   */
  dispositions?: DispositionMod;

  /**
   * @generated from field: api.commons.FieldNamesMod field_names = 5;
   */
  fieldNames?: FieldNamesMod;

  /**
   * @generated from field: repeated api.commons.EntityExp checking_entities = 6;
   */
  checkingEntities: EntityExp[];

  /**
   * @generated from field: api.commons.MatchingMod matching = 7;
   */
  matching?: MatchingMod;

  constructor(data?: PartialMessage<FrequencyExp>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.FrequencyExp";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FrequencyExp;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FrequencyExp;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FrequencyExp;

  static equals(a: FrequencyExp | PlainMessage<FrequencyExp> | undefined, b: FrequencyExp | PlainMessage<FrequencyExp> | undefined): boolean;
}

/**
 * @generated from message api.commons.MatchingMod
 */
export declare class MatchingMod extends Message<MatchingMod> {
  /**
   * @generated from field: repeated api.commons.MatchingMod and = 1;
   */
  and: MatchingMod[];

  /**
   * @generated from field: repeated api.commons.MatchingMod or = 2;
   */
  or: MatchingMod[];

  /**
   * @generated from field: api.commons.MatchingEntity mod = 3;
   */
  mod?: MatchingEntity;

  constructor(data?: PartialMessage<MatchingMod>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.MatchingMod";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MatchingMod;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MatchingMod;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MatchingMod;

  static equals(a: MatchingMod | PlainMessage<MatchingMod> | undefined, b: MatchingMod | PlainMessage<MatchingMod> | undefined): boolean;
}

/**
 * @generated from message api.commons.MatchingEntity
 */
export declare class MatchingEntity extends Message<MatchingEntity> {
  /**
   * @generated from oneof api.commons.MatchingEntity.entity
   */
  entity: {
    /**
     * @generated from field: api.commons.ResultsMod results = 1;
     */
    value: ResultsMod;
    case: "results";
  } | {
    /**
     * @generated from field: api.commons.DispositionMod dispositions = 2;
     */
    value: DispositionMod;
    case: "dispositions";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<MatchingEntity>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.MatchingEntity";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MatchingEntity;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MatchingEntity;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MatchingEntity;

  static equals(a: MatchingEntity | PlainMessage<MatchingEntity> | undefined, b: MatchingEntity | PlainMessage<MatchingEntity> | undefined): boolean;
}

/**
 * @generated from message api.commons.LocationExp
 */
export declare class LocationExp extends Message<LocationExp> {
  /**
   * @generated from field: string country = 1;
   */
  country: string;

  /**
   * @generated from field: string state = 2;
   */
  state: string;

  /**
   * @generated from field: string county = 3;
   */
  county: string;

  /**
   * @generated from field: string city = 4;
   */
  city: string;

  /**
   * @generated from field: string province = 5;
   */
  province: string;

  /**
   * @generated from field: repeated string postal_codes = 6;
   */
  postalCodes: string[];

  /**
   * @generated from field: repeated string area_codes = 7;
   */
  areaCodes: string[];

  constructor(data?: PartialMessage<LocationExp>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.LocationExp";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocationExp;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocationExp;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocationExp;

  static equals(a: LocationExp | PlainMessage<LocationExp> | undefined, b: LocationExp | PlainMessage<LocationExp> | undefined): boolean;
}

/**
 * @generated from message api.commons.PhoneTypeExp
 */
export declare class PhoneTypeExp extends Message<PhoneTypeExp> {
  /**
   * @generated from field: api.commons.PhoneType phone_type = 1;
   */
  phoneType: PhoneType;

  constructor(data?: PartialMessage<PhoneTypeExp>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.PhoneTypeExp";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PhoneTypeExp;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PhoneTypeExp;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PhoneTypeExp;

  static equals(a: PhoneTypeExp | PlainMessage<PhoneTypeExp> | undefined, b: PhoneTypeExp | PlainMessage<PhoneTypeExp> | undefined): boolean;
}

/**
 * @generated from message api.commons.MonthExp
 */
export declare class MonthExp extends Message<MonthExp> {
  /**
   * @generated from field: api.commons.Month month = 1;
   */
  month: Month;

  /**
   * @generated from field: string text = 2;
   */
  text: string;

  constructor(data?: PartialMessage<MonthExp>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.MonthExp";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MonthExp;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MonthExp;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MonthExp;

  static equals(a: MonthExp | PlainMessage<MonthExp> | undefined, b: MonthExp | PlainMessage<MonthExp> | undefined): boolean;
}

/**
 * @generated from message api.commons.DateExp
 */
export declare class DateExp extends Message<DateExp> {
  /**
   * @generated from field: api.commons.Month month = 1;
   */
  month: Month;

  /**
   * @generated from field: int64 day = 2;
   */
  day: bigint;

  /**
   * @generated from field: int64 year = 3;
   */
  year: bigint;

  constructor(data?: PartialMessage<DateExp>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.DateExp";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DateExp;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DateExp;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DateExp;

  static equals(a: DateExp | PlainMessage<DateExp> | undefined, b: DateExp | PlainMessage<DateExp> | undefined): boolean;
}

/**
 * @generated from message api.commons.HolidayExp
 */
export declare class HolidayExp extends Message<HolidayExp> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: string country = 2;
   */
  country: string;

  /**
   * @generated from field: string type = 3;
   */
  type: string;

  constructor(data?: PartialMessage<HolidayExp>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.HolidayExp";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HolidayExp;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HolidayExp;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HolidayExp;

  static equals(a: HolidayExp | PlainMessage<HolidayExp> | undefined, b: HolidayExp | PlainMessage<HolidayExp> | undefined): boolean;
}

/**
 * @generated from message api.commons.MetaFieldExp
 */
export declare class MetaFieldExp extends Message<MetaFieldExp> {
  /**
   * @generated from field: string field = 1;
   */
  field: string;

  constructor(data?: PartialMessage<MetaFieldExp>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.MetaFieldExp";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MetaFieldExp;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MetaFieldExp;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MetaFieldExp;

  static equals(a: MetaFieldExp | PlainMessage<MetaFieldExp> | undefined, b: MetaFieldExp | PlainMessage<MetaFieldExp> | undefined): boolean;
}

/**
 * @generated from message api.commons.PluginExp
 */
export declare class PluginExp extends Message<PluginExp> {
  /**
   * @generated from field: api.commons.PluginType type = 1;
   */
  type: PluginType;

  /**
   * true/false deny on errors
   *
   * @generated from field: bool tcn_strict = 4;
   */
  tcnStrict: boolean;

  /**
   * gryphon
   *
   * @generated from field: string license_id = 2;
   */
  licenseId: string;

  /**
   * @generated from field: string reference_key = 3;
   */
  referenceKey: string;

  /**
   * @generated from field: string from_number = 5;
   */
  fromNumber: string;

  /**
   * @generated from field: api.commons.Environment env = 6;
   */
  env: Environment;

  /**
   * tcn_consent
   *
   * @generated from field: string profile_name = 7;
   */
  profileName: string;

  /**
   * @generated from field: string content_field = 8;
   */
  contentField: string;

  /**
   * @generated from field: string topic = 9;
   */
  topic: string;

  /**
   * @generated from field: api.commons.ConsentAbsentAction absent_action = 11;
   */
  absentAction: ConsentAbsentAction;

  /**
   * rnd
   *
   * @generated from field: string date_last_contact = 10;
   */
  dateLastContact: string;

  /**
   * mrs compliance
   *
   * @generated from field: string lu = 12;
   */
  lu: string;

  /**
   * @generated from field: string account = 13;
   */
  account: string;

  /**
   * @generated from field: string master = 14;
   */
  master: string;

  /**
   * @generated from field: string client = 15;
   */
  client: string;

  constructor(data?: PartialMessage<PluginExp>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.PluginExp";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PluginExp;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PluginExp;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PluginExp;

  static equals(a: PluginExp | PlainMessage<PluginExp> | undefined, b: PluginExp | PlainMessage<PluginExp> | undefined): boolean;
}

/**
 * @generated from message api.commons.EntityExp
 */
export declare class EntityExp extends Message<EntityExp> {
  /**
   * @generated from field: api.commons.SubEntity sub_entity = 1;
   */
  subEntity: SubEntity;

  /**
   * @generated from field: api.commons.Entity entity = 2;
   */
  entity: Entity;

  constructor(data?: PartialMessage<EntityExp>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.EntityExp";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntityExp;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntityExp;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntityExp;

  static equals(a: EntityExp | PlainMessage<EntityExp> | undefined, b: EntityExp | PlainMessage<EntityExp> | undefined): boolean;
}

/**
 * @generated from message api.commons.FieldNamesMod
 */
export declare class FieldNamesMod extends Message<FieldNamesMod> {
  /**
   * @generated from field: repeated api.commons.Field field_names = 1;
   */
  fieldNames: Field[];

  constructor(data?: PartialMessage<FieldNamesMod>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.FieldNamesMod";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FieldNamesMod;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FieldNamesMod;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FieldNamesMod;

  static equals(a: FieldNamesMod | PlainMessage<FieldNamesMod> | undefined, b: FieldNamesMod | PlainMessage<FieldNamesMod> | undefined): boolean;
}

/**
 * @generated from message api.commons.ResultsMod
 */
export declare class ResultsMod extends Message<ResultsMod> {
  /**
   * @generated from field: repeated string results = 1;
   */
  results: string[];

  constructor(data?: PartialMessage<ResultsMod>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.ResultsMod";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResultsMod;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResultsMod;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResultsMod;

  static equals(a: ResultsMod | PlainMessage<ResultsMod> | undefined, b: ResultsMod | PlainMessage<ResultsMod> | undefined): boolean;
}

/**
 * @generated from message api.commons.DispositionMod
 */
export declare class DispositionMod extends Message<DispositionMod> {
  /**
   * @generated from field: repeated api.commons.DispositionField dispositions = 1;
   */
  dispositions: DispositionField[];

  constructor(data?: PartialMessage<DispositionMod>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.DispositionMod";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DispositionMod;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DispositionMod;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DispositionMod;

  static equals(a: DispositionMod | PlainMessage<DispositionMod> | undefined, b: DispositionMod | PlainMessage<DispositionMod> | undefined): boolean;
}

/**
 * @generated from message api.commons.DispositionField
 */
export declare class DispositionField extends Message<DispositionField> {
  /**
   * @generated from field: string key = 1;
   */
  key: string;

  /**
   * @generated from field: string value = 2;
   */
  value: string;

  /**
   * @generated from field: repeated api.commons.DispositionPair pairs = 3;
   */
  pairs: DispositionPair[];

  constructor(data?: PartialMessage<DispositionField>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.DispositionField";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DispositionField;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DispositionField;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DispositionField;

  static equals(a: DispositionField | PlainMessage<DispositionField> | undefined, b: DispositionField | PlainMessage<DispositionField> | undefined): boolean;
}

/**
 * @generated from message api.commons.DispositionPair
 */
export declare class DispositionPair extends Message<DispositionPair> {
  /**
   * @generated from field: string key = 1;
   */
  key: string;

  /**
   * @generated from field: string value = 2;
   */
  value: string;

  constructor(data?: PartialMessage<DispositionPair>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.DispositionPair";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DispositionPair;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DispositionPair;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DispositionPair;

  static equals(a: DispositionPair | PlainMessage<DispositionPair> | undefined, b: DispositionPair | PlainMessage<DispositionPair> | undefined): boolean;
}

/**
 * @generated from message api.commons.Field
 */
export declare class Field extends Message<Field> {
  /**
   * @generated from field: string Field = 1;
   */
  Field: string;

  /**
   * @generated from field: string Content = 2;
   */
  Content: string;

  constructor(data?: PartialMessage<Field>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.Field";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Field;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Field;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Field;

  static equals(a: Field | PlainMessage<Field> | undefined, b: Field | PlainMessage<Field> | undefined): boolean;
}

/**
 * ConsentCondition defines conditions
 * required for a consent to take affect
 *
 * @generated from message api.commons.ConsentCondition
 */
export declare class ConsentCondition extends Message<ConsentCondition> {
  /**
   * Condition id
   *
   * @generated from field: int64 consent_condition_id = 1;
   */
  consentConditionId: bigint;

  /**
   * Consent it belongs to
   *
   * @generated from field: int64 consent_id = 2;
   */
  consentId: bigint;

  /**
   * Days of week the condition is applicable to
   *
   * @generated from field: repeated api.commons.Weekday.Enum days_of_the_week = 10;
   */
  daysOfTheWeek: Weekday_Enum[];

  /**
   * Time of day condition starts
   *
   * @generated from field: string time_of_day_from = 11;
   */
  timeOfDayFrom: string;

  /**
   * Time of day condition ends
   *
   * @generated from field: string time_of_day_to = 12;
   */
  timeOfDayTo: string;

  /**
   * Date condition starts
   *
   * @generated from field: google.protobuf.Timestamp from_date = 13;
   */
  fromDate?: Timestamp;

  /**
   * Date condition ends
   *
   * @generated from field: google.protobuf.Timestamp to_date = 14;
   */
  toDate?: Timestamp;

  constructor(data?: PartialMessage<ConsentCondition>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.ConsentCondition";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConsentCondition;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConsentCondition;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConsentCondition;

  static equals(a: ConsentCondition | PlainMessage<ConsentCondition> | undefined, b: ConsentCondition | PlainMessage<ConsentCondition> | undefined): boolean;
}

/**
 * @generated from message api.commons.ScenarioData
 */
export declare class ScenarioData extends Message<ScenarioData> {
  /**
   * @generated from field: api.commons.CommType comm_type = 1;
   */
  commType?: CommType;

  /**
   * @generated from field: string phone_number = 2;
   */
  phoneNumber: string;

  /**
   * @generated from field: string country_code = 3 [deprecated = true];
   * @deprecated
   */
  countryCode: string;

  /**
   * @generated from field: string email = 4;
   */
  email: string;

  /**
   * @generated from field: map<string, string> call_metadata = 5;
   */
  callMetadata: { [key: string]: string };

  /**
   * @generated from field: google.protobuf.Timestamp time_of_call = 6;
   */
  timeOfCall?: Timestamp;

  /**
   * @generated from field: int64 frequency_count = 7;
   */
  frequencyCount: bigint;

  /**
   * @generated from field: int64 frequency_duration = 8;
   */
  frequencyDuration: bigint;

  /**
   * @generated from field: bool dncl_blocks = 9;
   */
  dnclBlocks: boolean;

  /**
   * @generated from field: string country = 10;
   */
  country: string;

  /**
   * @generated from field: string state = 11;
   */
  state: string;

  /**
   * @generated from field: string county = 12;
   */
  county: string;

  /**
   * @generated from field: string city = 13;
   */
  city: string;

  /**
   * @generated from field: string province = 14;
   */
  province: string;

  /**
   * @generated from field: api.commons.PhoneType phone_type = 15;
   */
  phoneType: PhoneType;

  /**
   * time_zone uses the iana timezone format. Defaults to utc
   *
   * @generated from field: string time_zone = 16;
   */
  timeZone: string;

  /**
   * @generated from field: repeated string holidays = 17;
   */
  holidays: string[];

  /**
   * @generated from field: api.commons.CountryCode country_code_data = 18;
   */
  countryCodeData?: CountryCode;

  constructor(data?: PartialMessage<ScenarioData>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.ScenarioData";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScenarioData;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScenarioData;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScenarioData;

  static equals(a: ScenarioData | PlainMessage<ScenarioData> | undefined, b: ScenarioData | PlainMessage<ScenarioData> | undefined): boolean;
}

/**
 * @generated from message api.commons.CountryCode
 */
export declare class CountryCode extends Message<CountryCode> {
  /**
   * @generated from field: int64 country_code = 1;
   */
  countryCode: bigint;

  /**
   * @generated from field: string country_name = 2;
   */
  countryName: string;

  /**
   * @generated from field: string country_id = 3;
   */
  countryId: string;

  constructor(data?: PartialMessage<CountryCode>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.CountryCode";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CountryCode;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CountryCode;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CountryCode;

  static equals(a: CountryCode | PlainMessage<CountryCode> | undefined, b: CountryCode | PlainMessage<CountryCode> | undefined): boolean;
}

/**
 * @generated from message api.commons.ScenarioResult
 */
export declare class ScenarioResult extends Message<ScenarioResult> {
  /**
   * @generated from field: bool passed_value = 5;
   */
  passedValue: boolean;

  /**
   * @generated from field: repeated api.commons.ScenarioRuleResponse should_allow_responses = 2;
   */
  shouldAllowResponses: ScenarioRuleResponse[];

  /**
   * @generated from field: repeated api.commons.ScenarioRuleResponse should_deny_responses = 3;
   */
  shouldDenyResponses: ScenarioRuleResponse[];

  /**
   * @generated from field: string scenario_name = 4;
   */
  scenarioName: string;

  constructor(data?: PartialMessage<ScenarioResult>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.ScenarioResult";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScenarioResult;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScenarioResult;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScenarioResult;

  static equals(a: ScenarioResult | PlainMessage<ScenarioResult> | undefined, b: ScenarioResult | PlainMessage<ScenarioResult> | undefined): boolean;
}

/**
 * @generated from message api.commons.ScenarioRuleResponse
 */
export declare class ScenarioRuleResponse extends Message<ScenarioRuleResponse> {
  /**
   * @generated from field: string rule_text = 1;
   */
  ruleText: string;

  /**
   * @generated from field: bool permit_value = 3;
   */
  permitValue: boolean;

  constructor(data?: PartialMessage<ScenarioRuleResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.ScenarioRuleResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScenarioRuleResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScenarioRuleResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScenarioRuleResponse;

  static equals(a: ScenarioRuleResponse | PlainMessage<ScenarioRuleResponse> | undefined, b: ScenarioRuleResponse | PlainMessage<ScenarioRuleResponse> | undefined): boolean;
}

/**
 * Scrub entry details information
 *
 * @generated from message api.commons.ScrubEntryDetails
 */
export declare class ScrubEntryDetails extends Message<ScrubEntryDetails> {
  /**
   * entry content (phone number, sms, email ...)
   *
   * @generated from field: string content = 1;
   */
  content: string;

  /**
   * date when entry should expire
   *
   * @generated from field: google.protobuf.Timestamp expiration_date = 2;
   */
  expirationDate?: Timestamp;

  /**
   * @generated from field: google.protobuf.StringValue notes = 3;
   */
  notes?: string;

  constructor(data?: PartialMessage<ScrubEntryDetails>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.ScrubEntryDetails";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScrubEntryDetails;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScrubEntryDetails;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScrubEntryDetails;

  static equals(a: ScrubEntryDetails | PlainMessage<ScrubEntryDetails> | undefined, b: ScrubEntryDetails | PlainMessage<ScrubEntryDetails> | undefined): boolean;
}

/**
 * @generated from message api.commons.RuleResponse
 */
export declare class RuleResponse extends Message<RuleResponse> {
  /**
   * the rule text
   *
   * @generated from field: string rule_text = 1;
   */
  ruleText: string;

  /**
   * indicates if the rule allowed or denied the request
   *
   * @generated from field: bool permit = 2;
   */
  permit: boolean;

  /**
   * the response from the plugin
   *
   * @generated from field: string plugin_response = 3;
   */
  pluginResponse: string;

  constructor(data?: PartialMessage<RuleResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.RuleResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RuleResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RuleResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RuleResponse;

  static equals(a: RuleResponse | PlainMessage<RuleResponse> | undefined, b: RuleResponse | PlainMessage<RuleResponse> | undefined): boolean;
}

