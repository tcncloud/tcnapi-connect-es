// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/tickets/project.proto (package api.v1alpha1.tickets, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { TicketProject } from "../../commons/tickets_pb.js";
import type { AuditEvent } from "../../commons/audit/audit_pb.js";

/**
 * EnableProjectReq - Details of project to be enabled in the ticketing system
 *
 * @generated from message api.v1alpha1.tickets.EnableProjectReq
 */
export declare class EnableProjectReq extends Message<EnableProjectReq> {
  /**
   * project seq id of project to be enabled
   *
   * @generated from field: int64 project_sid = 1 [jstype = JS_STRING];
   */
  projectSid: string;

  /**
   * Project code to be set
   *
   * @generated from field: string project_code = 2;
   */
  projectCode: string;

  /**
   * Project title pulled from Omni
   *
   * @generated from field: string project_title = 3;
   */
  projectTitle: string;

  /**
   * Is project enabled for ticketing
   *
   * @generated from field: bool is_active = 4;
   */
  isActive: boolean;

  constructor(data?: PartialMessage<EnableProjectReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.EnableProjectReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnableProjectReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnableProjectReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnableProjectReq;

  static equals(a: EnableProjectReq | PlainMessage<EnableProjectReq> | undefined, b: EnableProjectReq | PlainMessage<EnableProjectReq> | undefined): boolean;
}

/**
 * EnableProjectRes - Indicates result of the project enable request
 *
 * @generated from message api.v1alpha1.tickets.EnableProjectRes
 */
export declare class EnableProjectRes extends Message<EnableProjectRes> {
  /**
   * result of project mapped to ticket was successful
   *
   * @generated from field: bool success = 1;
   */
  success: boolean;

  constructor(data?: PartialMessage<EnableProjectRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.EnableProjectRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnableProjectRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnableProjectRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnableProjectRes;

  static equals(a: EnableProjectRes | PlainMessage<EnableProjectRes> | undefined, b: EnableProjectRes | PlainMessage<EnableProjectRes> | undefined): boolean;
}

/**
 * ListEnabledProjectsReq - Request to list enabled projects in ticketing system
 *
 * @generated from message api.v1alpha1.tickets.ListEnabledProjectsReq
 */
export declare class ListEnabledProjectsReq extends Message<ListEnabledProjectsReq> {
  constructor(data?: PartialMessage<ListEnabledProjectsReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.ListEnabledProjectsReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListEnabledProjectsReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListEnabledProjectsReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListEnabledProjectsReq;

  static equals(a: ListEnabledProjectsReq | PlainMessage<ListEnabledProjectsReq> | undefined, b: ListEnabledProjectsReq | PlainMessage<ListEnabledProjectsReq> | undefined): boolean;
}

/**
 * ListEnabledProjectsRes - Response wraps list of projects enabled for ticketing system
 *
 * @generated from message api.v1alpha1.tickets.ListEnabledProjectsRes
 */
export declare class ListEnabledProjectsRes extends Message<ListEnabledProjectsRes> {
  /**
   * enabled projects list
   *
   * @generated from field: repeated api.commons.TicketProject projects = 1;
   */
  projects: TicketProject[];

  constructor(data?: PartialMessage<ListEnabledProjectsRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.ListEnabledProjectsRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListEnabledProjectsRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListEnabledProjectsRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListEnabledProjectsRes;

  static equals(a: ListEnabledProjectsRes | PlainMessage<ListEnabledProjectsRes> | undefined, b: ListEnabledProjectsRes | PlainMessage<ListEnabledProjectsRes> | undefined): boolean;
}

/**
 * ListTicketAuditLogReq -
 *
 * @generated from message api.v1alpha1.tickets.ListTicketAuditLogReq
 */
export declare class ListTicketAuditLogReq extends Message<ListTicketAuditLogReq> {
  /**
   * ticket_sid  scoping filter
   *
   * @generated from field: int64 ticket_sid = 1 [jstype = JS_STRING];
   */
  ticketSid: string;

  constructor(data?: PartialMessage<ListTicketAuditLogReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.ListTicketAuditLogReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTicketAuditLogReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTicketAuditLogReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTicketAuditLogReq;

  static equals(a: ListTicketAuditLogReq | PlainMessage<ListTicketAuditLogReq> | undefined, b: ListTicketAuditLogReq | PlainMessage<ListTicketAuditLogReq> | undefined): boolean;
}

/**
 * ListTicketAuditLogRes -
 *
 * @generated from message api.v1alpha1.tickets.ListTicketAuditLogRes
 */
export declare class ListTicketAuditLogRes extends Message<ListTicketAuditLogRes> {
  /**
   * the retrieved audit events
   *
   * @generated from field: repeated api.commons.audit.AuditEvent events = 1;
   */
  events: AuditEvent[];

  constructor(data?: PartialMessage<ListTicketAuditLogRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.ListTicketAuditLogRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTicketAuditLogRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTicketAuditLogRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTicketAuditLogRes;

  static equals(a: ListTicketAuditLogRes | PlainMessage<ListTicketAuditLogRes> | undefined, b: ListTicketAuditLogRes | PlainMessage<ListTicketAuditLogRes> | undefined): boolean;
}

