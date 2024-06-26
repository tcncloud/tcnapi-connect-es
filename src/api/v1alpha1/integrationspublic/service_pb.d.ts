// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/integrationspublic/service.proto (package api.v1alpha1.integrationspublic, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { FieldDefinition, Flow, InvoiceFlow, Invoices, PaymentFlow, Validation, VerificationFlow } from "../../commons/integrations/integrations_pb.js";

/**
 * @generated from message api.v1alpha1.integrationspublic.Values
 */
export declare class Values extends Message<Values> {
  /**
   * @generated from field: map<string, api.v1alpha1.integrationspublic.Value> values = 1;
   */
  values: { [key: string]: Value };

  constructor(data?: PartialMessage<Values>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.integrationspublic.Values";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Values;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Values;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Values;

  static equals(a: Values | PlainMessage<Values> | undefined, b: Values | PlainMessage<Values> | undefined): boolean;
}

/**
 * kind of like a json value, but we don't support circular references
 *
 * @generated from message api.v1alpha1.integrationspublic.Value
 */
export declare class Value extends Message<Value> {
  /**
   * @generated from oneof api.v1alpha1.integrationspublic.Value.val
   */
  val: {
    /**
     * @generated from field: string str_val = 1;
     */
    value: string;
    case: "strVal";
  } | {
    /**
     * @generated from field: double num_val = 2;
     */
    value: number;
    case: "numVal";
  } | {
    /**
     * @generated from field: bool bool_val = 3;
     */
    value: boolean;
    case: "boolVal";
  } | {
    /**
     * @generated from field: google.protobuf.Timestamp time_val = 4;
     */
    value: Timestamp;
    case: "timeVal";
  } | {
    /**
     * @generated from field: api.v1alpha1.integrationspublic.CompositeVal comp_val = 6;
     */
    value: CompositeVal;
    case: "compVal";
  } | {
    /**
     * @generated from field: int64 int_val = 7;
     */
    value: bigint;
    case: "intVal";
  } | { case: undefined; value?: undefined };

  /**
   * whether this value should be allowed to be stored
   *
   * @generated from field: bool sensitive = 5;
   */
  sensitive: boolean;

  /**
   * what type of data value we *want* to validate as.
   * a value does *not* have to match the validation enum.
   * a value that does not match its validation enum is just invalid.
   *
   * @generated from field: api.commons.integrations.Validation validation = 8;
   */
  validation: Validation;

  constructor(data?: PartialMessage<Value>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.integrationspublic.Value";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Value;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Value;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Value;

  static equals(a: Value | PlainMessage<Value> | undefined, b: Value | PlainMessage<Value> | undefined): boolean;
}

/**
 * represents the individual parts of a string, where some of the parts are
 * fields in the payload, and other parts are static strings
 * CompositeVal cannot handle circular references. Meaning you cannot have two
 * values that contain fields of each other in the same payload.
 * Fields that are not found when built into a string will throw an error
 *
 * @generated from message api.v1alpha1.integrationspublic.CompositeVal
 */
export declare class CompositeVal extends Message<CompositeVal> {
  /**
   * @generated from field: repeated api.v1alpha1.integrationspublic.FieldOrStr parts = 1;
   */
  parts: FieldOrStr[];

  constructor(data?: PartialMessage<CompositeVal>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.integrationspublic.CompositeVal";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CompositeVal;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CompositeVal;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CompositeVal;

  static equals(a: CompositeVal | PlainMessage<CompositeVal> | undefined, b: CompositeVal | PlainMessage<CompositeVal> | undefined): boolean;
}

/**
 * represents either a field name whose value needs to be looked up in the payload
 * or a static string value
 *
 * @generated from message api.v1alpha1.integrationspublic.FieldOrStr
 */
export declare class FieldOrStr extends Message<FieldOrStr> {
  /**
   * @generated from oneof api.v1alpha1.integrationspublic.FieldOrStr.val
   */
  val: {
    /**
     * @generated from field: string field = 1;
     */
    value: string;
    case: "field";
  } | {
    /**
     * @generated from field: string str_val = 2;
     */
    value: string;
    case: "strVal";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<FieldOrStr>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.integrationspublic.FieldOrStr";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FieldOrStr;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FieldOrStr;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FieldOrStr;

  static equals(a: FieldOrStr | PlainMessage<FieldOrStr> | undefined, b: FieldOrStr | PlainMessage<FieldOrStr> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.integrationspublic.PortalConfigId
 */
export declare class PortalConfigId extends Message<PortalConfigId> {
  /**
   * @generated from field: string id = 3;
   */
  id: string;

  constructor(data?: PartialMessage<PortalConfigId>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.integrationspublic.PortalConfigId";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PortalConfigId;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PortalConfigId;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PortalConfigId;

  static equals(a: PortalConfigId | PlainMessage<PortalConfigId> | undefined, b: PortalConfigId | PlainMessage<PortalConfigId> | undefined): boolean;
}

/**
 * all these things will show up on the portal screen to the receiver of the link
 * contact info should look like the company who is using the portal(not tcn)
 *
 * @generated from message api.v1alpha1.integrationspublic.PortalConfig
 */
export declare class PortalConfig extends Message<PortalConfig> {
  /**
   * @generated from field: string id = 21;
   */
  id: string;

  /**
   * @generated from field: string name = 22;
   */
  name: string;

  /**
   * @generated from field: string description = 23;
   */
  description: string;

  /**
   * link to pull up a chat with customer service
   *
   * @generated from field: string chat_client_link = 2;
   */
  chatClientLink: string;

  /**
   * @generated from field: string contact_email = 3;
   */
  contactEmail: string;

  /**
   * @generated from field: string contact_phone = 4;
   */
  contactPhone: string;

  /**
   * @generated from field: string postal_code = 5;
   */
  postalCode: string;

  /**
   * @generated from field: string city = 6;
   */
  city: string;

  /**
   * @generated from field: string state = 7;
   */
  state: string;

  /**
   * @generated from field: string company_name = 8;
   */
  companyName: string;

  /**
   * is the logo used in the corner of the payment portal screen
   *
   * @generated from field: bytes logo = 13;
   */
  logo: Uint8Array;

  /**
   * is the primary color used for the portal screen
   *
   * @generated from field: string primary_color = 14;
   */
  primaryColor: string;

  /**
   * accent color used on the portal screen
   *
   * @generated from field: string secondary_color = 15;
   */
  secondaryColor: string;

  /**
   * @generated from field: string street_address = 19;
   */
  streetAddress: string;

  constructor(data?: PartialMessage<PortalConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.integrationspublic.PortalConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PortalConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PortalConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PortalConfig;

  static equals(a: PortalConfig | PlainMessage<PortalConfig> | undefined, b: PortalConfig | PlainMessage<PortalConfig> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.integrationspublic.PortalLinkId
 */
export declare class PortalLinkId extends Message<PortalLinkId> {
  /**
   * @generated from field: string id = 3;
   */
  id: string;

  constructor(data?: PartialMessage<PortalLinkId>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.integrationspublic.PortalLinkId";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PortalLinkId;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PortalLinkId;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PortalLinkId;

  static equals(a: PortalLinkId | PlainMessage<PortalLinkId> | undefined, b: PortalLinkId | PlainMessage<PortalLinkId> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.integrationspublic.GetLinkDataReq
 */
export declare class GetLinkDataReq extends Message<GetLinkDataReq> {
  /**
   * @generated from field: api.v1alpha1.integrationspublic.PortalLinkId entity = 1;
   */
  entity?: PortalLinkId;

  constructor(data?: PartialMessage<GetLinkDataReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.integrationspublic.GetLinkDataReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLinkDataReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLinkDataReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLinkDataReq;

  static equals(a: GetLinkDataReq | PlainMessage<GetLinkDataReq> | undefined, b: GetLinkDataReq | PlainMessage<GetLinkDataReq> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.integrationspublic.GetLinkDataRes
 */
export declare class GetLinkDataRes extends Message<GetLinkDataRes> {
  /**
   * true if payment was taken for this link
   *
   * @generated from field: bool complete = 2;
   */
  complete: boolean;

  /**
   * true if the link is expired
   *
   * @generated from field: bool expired = 3;
   */
  expired: boolean;

  /**
   * styling info
   *
   * @generated from field: api.v1alpha1.integrationspublic.PortalConfig portal_config = 4;
   */
  portalConfig?: PortalConfig;

  /**
   * how the user verifies identity for this portal
   *
   * @generated from field: api.commons.integrations.VerificationFlow verification = 5;
   */
  verification?: VerificationFlow;

  /**
   * how the user retrieves invoice for this portal
   *
   * @generated from field: api.commons.integrations.InvoiceFlow invoice = 6;
   */
  invoice?: InvoiceFlow;

  /**
   * all the accepted payment flows for this portal
   *
   * @generated from field: repeated api.commons.integrations.PaymentFlow payments = 7;
   */
  payments: PaymentFlow[];

  /**
   * @generated from field: repeated api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames flow_forms = 9;
   */
  flowForms: GetLinkDataRes_FieldNames[];

  /**
   * text that appears on one of the portal pages
   *
   * @generated from field: api.v1alpha1.integrationspublic.PortalText portal_text = 15;
   */
  portalText?: PortalText;

  constructor(data?: PartialMessage<GetLinkDataRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.integrationspublic.GetLinkDataRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLinkDataRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLinkDataRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLinkDataRes;

  static equals(a: GetLinkDataRes | PlainMessage<GetLinkDataRes> | undefined, b: GetLinkDataRes | PlainMessage<GetLinkDataRes> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames
 */
export declare class GetLinkDataRes_FieldNames extends Message<GetLinkDataRes_FieldNames> {
  /**
   * @generated from field: api.commons.integrations.Flow flow = 8;
   */
  flow?: Flow;

  /**
   * @generated from field: repeated string field_names = 9;
   */
  fieldNames: string[];

  /**
   * @generated from field: repeated api.commons.integrations.FieldDefinition fields = 10;
   */
  fields: FieldDefinition[];

  constructor(data?: PartialMessage<GetLinkDataRes_FieldNames>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLinkDataRes_FieldNames;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLinkDataRes_FieldNames;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLinkDataRes_FieldNames;

  static equals(a: GetLinkDataRes_FieldNames | PlainMessage<GetLinkDataRes_FieldNames> | undefined, b: GetLinkDataRes_FieldNames | PlainMessage<GetLinkDataRes_FieldNames> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.integrationspublic.PortalText
 */
export declare class PortalText extends Message<PortalText> {
  /**
   * @generated from field: string verification_header = 1;
   */
  verificationHeader: string;

  /**
   * @generated from field: string verification_footer = 2;
   */
  verificationFooter: string;

  /**
   * @generated from field: string payment_header = 3;
   */
  paymentHeader: string;

  /**
   * @generated from field: string payment_footer = 4;
   */
  paymentFooter: string;

  /**
   * @generated from field: string receipt_header = 5;
   */
  receiptHeader: string;

  /**
   * @generated from field: string receipt_footer = 6;
   */
  receiptFooter: string;

  /**
   * @generated from field: string invoice_header = 7;
   */
  invoiceHeader: string;

  /**
   * @generated from field: string invoice_footer = 8;
   */
  invoiceFooter: string;

  constructor(data?: PartialMessage<PortalText>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.integrationspublic.PortalText";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PortalText;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PortalText;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PortalText;

  static equals(a: PortalText | PlainMessage<PortalText> | undefined, b: PortalText | PlainMessage<PortalText> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.integrationspublic.SubmitVerificationReq
 */
export declare class SubmitVerificationReq extends Message<SubmitVerificationReq> {
  /**
   * @generated from field: api.v1alpha1.integrationspublic.PortalLinkId entity = 1;
   */
  entity?: PortalLinkId;

  /**
   * values from the verification form
   *
   * @generated from field: map<string, api.v1alpha1.integrationspublic.Value> verification_fields = 2;
   */
  verificationFields: { [key: string]: Value };

  constructor(data?: PartialMessage<SubmitVerificationReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.integrationspublic.SubmitVerificationReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubmitVerificationReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubmitVerificationReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubmitVerificationReq;

  static equals(a: SubmitVerificationReq | PlainMessage<SubmitVerificationReq> | undefined, b: SubmitVerificationReq | PlainMessage<SubmitVerificationReq> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.integrationspublic.SubmitVerificationRes
 */
export declare class SubmitVerificationRes extends Message<SubmitVerificationRes> {
  /**
   * if true, the session_id is valid and the user is considered "logged in"
   *
   * @generated from field: bool verified = 1;
   */
  verified: boolean;

  /**
   * must be sent for requests that require a user to be verified
   *
   * @generated from field: string session_id = 2;
   */
  sessionId: string;

  constructor(data?: PartialMessage<SubmitVerificationRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.integrationspublic.SubmitVerificationRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubmitVerificationRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubmitVerificationRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubmitVerificationRes;

  static equals(a: SubmitVerificationRes | PlainMessage<SubmitVerificationRes> | undefined, b: SubmitVerificationRes | PlainMessage<SubmitVerificationRes> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.integrationspublic.SessionKeepAliveReq
 */
export declare class SessionKeepAliveReq extends Message<SessionKeepAliveReq> {
  /**
   * @generated from field: api.v1alpha1.integrationspublic.PortalLinkId entity = 1;
   */
  entity?: PortalLinkId;

  /**
   * @generated from field: string session_id = 2;
   */
  sessionId: string;

  constructor(data?: PartialMessage<SessionKeepAliveReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.integrationspublic.SessionKeepAliveReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SessionKeepAliveReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SessionKeepAliveReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SessionKeepAliveReq;

  static equals(a: SessionKeepAliveReq | PlainMessage<SessionKeepAliveReq> | undefined, b: SessionKeepAliveReq | PlainMessage<SessionKeepAliveReq> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.integrationspublic.SessionKeepAliveRes
 */
export declare class SessionKeepAliveRes extends Message<SessionKeepAliveRes> {
  /**
   * session refreshed ok
   *
   * @generated from field: bool ok = 1;
   */
  ok: boolean;

  /**
   * @generated from field: string session_id = 2;
   */
  sessionId: string;

  constructor(data?: PartialMessage<SessionKeepAliveRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.integrationspublic.SessionKeepAliveRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SessionKeepAliveRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SessionKeepAliveRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SessionKeepAliveRes;

  static equals(a: SessionKeepAliveRes | PlainMessage<SessionKeepAliveRes> | undefined, b: SessionKeepAliveRes | PlainMessage<SessionKeepAliveRes> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.integrationspublic.GetInvoiceReq
 */
export declare class GetInvoiceReq extends Message<GetInvoiceReq> {
  /**
   * @generated from field: api.v1alpha1.integrationspublic.PortalLinkId entity = 1;
   */
  entity?: PortalLinkId;

  /**
   * @generated from field: string session_id = 2;
   */
  sessionId: string;

  constructor(data?: PartialMessage<GetInvoiceReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.integrationspublic.GetInvoiceReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetInvoiceReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetInvoiceReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetInvoiceReq;

  static equals(a: GetInvoiceReq | PlainMessage<GetInvoiceReq> | undefined, b: GetInvoiceReq | PlainMessage<GetInvoiceReq> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.integrationspublic.GetInvoiceRes
 */
export declare class GetInvoiceRes extends Message<GetInvoiceRes> {
  /**
   * the raw data
   *
   * @generated from field: map<string, api.v1alpha1.integrationspublic.Value> fields = 1;
   */
  fields: { [key: string]: Value };

  /**
   * @generated from field: double amount_due = 2;
   */
  amountDue: number;

  /**
   * @generated from field: string amount_due_key = 3;
   */
  amountDueKey: string;

  /**
   * the parsed data
   *
   * @generated from field: api.commons.integrations.Invoices invoices = 4;
   */
  invoices?: Invoices;

  constructor(data?: PartialMessage<GetInvoiceRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.integrationspublic.GetInvoiceRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetInvoiceRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetInvoiceRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetInvoiceRes;

  static equals(a: GetInvoiceRes | PlainMessage<GetInvoiceRes> | undefined, b: GetInvoiceRes | PlainMessage<GetInvoiceRes> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.integrationspublic.SubmitPaymentReq
 */
export declare class SubmitPaymentReq extends Message<SubmitPaymentReq> {
  /**
   * @generated from field: api.v1alpha1.integrationspublic.PortalLinkId entity = 1;
   */
  entity?: PortalLinkId;

  /**
   * @generated from field: string session_id = 2;
   */
  sessionId: string;

  /**
   * @generated from field: map<string, api.v1alpha1.integrationspublic.Value> payment_fields = 3;
   */
  paymentFields: { [key: string]: Value };

  /**
   * @generated from field: api.commons.integrations.PaymentFlow payment_flow = 4;
   */
  paymentFlow?: PaymentFlow;

  constructor(data?: PartialMessage<SubmitPaymentReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.integrationspublic.SubmitPaymentReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubmitPaymentReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubmitPaymentReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubmitPaymentReq;

  static equals(a: SubmitPaymentReq | PlainMessage<SubmitPaymentReq> | undefined, b: SubmitPaymentReq | PlainMessage<SubmitPaymentReq> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.integrationspublic.SubmitPaymentRes
 */
export declare class SubmitPaymentRes extends Message<SubmitPaymentRes> {
  /**
   * @generated from field: map<string, api.v1alpha1.integrationspublic.Value> fields = 1;
   */
  fields: { [key: string]: Value };

  /**
   * @generated from field: double amount_paid = 2;
   */
  amountPaid: number;

  /**
   * @generated from field: string amount_paid_key = 3;
   */
  amountPaidKey: string;

  constructor(data?: PartialMessage<SubmitPaymentRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.integrationspublic.SubmitPaymentRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubmitPaymentRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubmitPaymentRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubmitPaymentRes;

  static equals(a: SubmitPaymentRes | PlainMessage<SubmitPaymentRes> | undefined, b: SubmitPaymentRes | PlainMessage<SubmitPaymentRes> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.integrationspublic.GetReceiptReq
 */
export declare class GetReceiptReq extends Message<GetReceiptReq> {
  /**
   * @generated from field: api.v1alpha1.integrationspublic.PortalLinkId entity = 1;
   */
  entity?: PortalLinkId;

  /**
   * @generated from field: string session_id = 2;
   */
  sessionId: string;

  constructor(data?: PartialMessage<GetReceiptReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.integrationspublic.GetReceiptReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetReceiptReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetReceiptReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetReceiptReq;

  static equals(a: GetReceiptReq | PlainMessage<GetReceiptReq> | undefined, b: GetReceiptReq | PlainMessage<GetReceiptReq> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.integrationspublic.GetReceiptRes
 */
export declare class GetReceiptRes extends Message<GetReceiptRes> {
  /**
   * @generated from field: string receipt_id = 1;
   */
  receiptId: string;

  /**
   * the non-sensitive request fields used to make the payment
   *
   * @generated from field: map<string, api.v1alpha1.integrationspublic.Value> request = 2;
   */
  request: { [key: string]: Value };

  /**
   * the response from the payment
   *
   * @generated from field: map<string, api.v1alpha1.integrationspublic.Value> response = 3;
   */
  response: { [key: string]: Value };

  /**
   * amount charged
   *
   * @generated from field: double amount_paid = 4;
   */
  amountPaid: number;

  /**
   * field in the response that represents the amount charged
   *
   * @generated from field: string amount_paid_key = 5;
   */
  amountPaidKey: string;

  /**
   * flow name, type and options used
   *
   * @generated from field: api.commons.integrations.PaymentFlow payment_flow = 6;
   */
  paymentFlow?: PaymentFlow;

  constructor(data?: PartialMessage<GetReceiptRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.integrationspublic.GetReceiptRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetReceiptRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetReceiptRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetReceiptRes;

  static equals(a: GetReceiptRes | PlainMessage<GetReceiptRes> | undefined, b: GetReceiptRes | PlainMessage<GetReceiptRes> | undefined): boolean;
}

