// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/commons/tickets.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * EditColumnType Fields
 *
 * @generated from enum api.commons.EditColumnType
 */
export declare enum EditColumnType {
  /**
   * @generated from enum value: NONE_COLUMN = 0;
   */
  NONE_COLUMN = 0,

  /**
   * @generated from enum value: DESCRIPTION = 1;
   */
  DESCRIPTION = 1,

  /**
   * @generated from enum value: SKILLS = 2;
   */
  SKILLS = 2,

  /**
   * @generated from enum value: STATUS = 3;
   */
  STATUS = 3,

  /**
   * @generated from enum value: DUE_DATE = 4;
   */
  DUE_DATE = 4,

  /**
   * @generated from enum value: SLA = 5;
   */
  SLA = 5,

  /**
   * @generated from enum value: ASSIGNEE = 6;
   */
  ASSIGNEE = 6,
}

/**
 * Ticket - Fields for Ticket creation, List tickets and view ticket
 *
 * @generated from message api.commons.Ticket
 */
export declare class Ticket extends Message<Ticket> {
  /**
   * The snowflake id of a ticket row
   *
   * @generated from field: int64 ticket_sid = 1;
   */
  ticketSid: bigint;

  /**
   * The imported/enabled ticket_project project_sid from omni.project
   *
   * @generated from field: int64 project_sid = 2;
   */
  projectSid: bigint;

  /**
   * project_title
   *
   * @generated from field: string project_title = 3;
   */
  projectTitle: string;

  /**
   * A globally distributable, custom sequence generated per-project-per-month for a ticket row.
   *
   * @generated from field: string ticket_code = 4;
   */
  ticketCode: string;

  /**
   * The title of the ticket
   *
   * @generated from field: string title = 5;
   */
  title: string;

  /**
   * The description of the ticket
   *
   * @generated from field: string description = 6;
   */
  description: string;

  /**
   * The org where the created was created
   *
   * @generated from field: string org_id = 7;
   */
  orgId: string;

  /**
   * The userId (uuid) who created the ticket
   *
   * @generated from field: string created_by_id = 8;
   */
  createdById: string;

  /**
   * The created_by_name from omni.project
   *
   * @generated from field: string created_by_name = 9;
   */
  createdByName: string;

  /**
   * @generated from field: google.protobuf.Timestamp created_by_date = 10;
   */
  createdByDate?: Timestamp;

  /**
   * due-date
   *
   * @generated from field: google.protobuf.Timestamp due_date = 11;
   */
  dueDate?: Timestamp;

  /**
   * A list of hunt groups, skills or users assigned to this ticket.
   *
   * note: bound to re-factor later.
   *
   * @generated from field: string assignee_list = 12;
   */
  assigneeList: string;

  /**
   * A list of conversation context meatadatgit stata
   *
   * @generated from field: repeated api.commons.Metadata metadata = 14;
   */
  metadata: Metadata[];

  /**
   * A list of skills assotiated with a ticket
   *
   * @generated from field: repeated api.commons.Skills ticket_skills = 15;
   */
  ticketSkills: Skills[];

  /**
   * Status - Ticket status : 1 open, 2 doing, 3 close etc
   *
   * @generated from field: int64 status = 16;
   */
  status: bigint;

  /**
   * A list of sla  assotiated with a ticket
   *
   * @generated from field: repeated api.commons.Sla ticket_sla = 17;
   */
  ticketSla: Sla[];

  /**
   * @generated from field: string assignee = 18;
   */
  assignee: string;

  constructor(data?: PartialMessage<Ticket>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.Ticket";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Ticket;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Ticket;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Ticket;

  static equals(a: Ticket | PlainMessage<Ticket> | undefined, b: Ticket | PlainMessage<Ticket> | undefined): boolean;
}

/**
 * Metadata - Contains a key value pair of strings, Will have metadata of an agent conversations
 *
 * @generated from message api.commons.Metadata
 */
export declare class Metadata extends Message<Metadata> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: string value = 2;
   */
  value: string;

  constructor(data?: PartialMessage<Metadata>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.Metadata";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Metadata;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Metadata;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Metadata;

  static equals(a: Metadata | PlainMessage<Metadata> | undefined, b: Metadata | PlainMessage<Metadata> | undefined): boolean;
}

/**
 * Skills - Field for a skill set assigned to a ticket
 *
 * @generated from message api.commons.Skills
 */
export declare class Skills extends Message<Skills> {
  /**
   * @generated from field: string skill_id = 1;
   */
  skillId: string;

  /**
   * Mandatory = 1, Preferred = 2
   *
   * @generated from field: int64 mandatory_preferred = 2;
   */
  mandatoryPreferred: bigint;

  constructor(data?: PartialMessage<Skills>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.Skills";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Skills;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Skills;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Skills;

  static equals(a: Skills | PlainMessage<Skills> | undefined, b: Skills | PlainMessage<Skills> | undefined): boolean;
}

/**
 * Sla - Field for a sla set assigned to a ticket
 *
 * @generated from message api.commons.Sla
 */
export declare class Sla extends Message<Sla> {
  /**
   * @generated from field: int64 condition_sid = 1;
   */
  conditionSid: bigint;

  /**
   * @generated from field: int64 sla_sid = 2;
   */
  slaSid: bigint;

  /**
   * @generated from field: int64 sla_min = 3;
   */
  slaMin: bigint;

  constructor(data?: PartialMessage<Sla>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.Sla";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Sla;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Sla;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Sla;

  static equals(a: Sla | PlainMessage<Sla> | undefined, b: Sla | PlainMessage<Sla> | undefined): boolean;
}

/**
 * Comment - Fields for Comment on a ticket, listing comments of a ticket (ViewComment)
 *
 * @generated from message api.commons.Comment
 */
export declare class Comment extends Message<Comment> {
  /**
   * The snowflake id of a comment row in ticket_comment.
   *
   * @generated from field: int64 comment_sid = 1;
   */
  commentSid: bigint;

  /**
   * The ticket reference where the comment was added.
   *
   * @generated from field: int64 ticket_sid = 2;
   */
  ticketSid: bigint;

  /**
   * The comment text
   *
   * @generated from field: string comment = 3;
   */
  comment: string;

  /**
   * commenter by id
   *
   * used in creating comment
   *
   * @generated from field: string created_by_id = 4;
   */
  createdById: string;

  /**
   * comment by name
   *
   * @generated from field: string created_by_name = 5;
   */
  createdByName: string;

  /**
   * created by date
   *
   * @generated from field: google.protobuf.Timestamp created_by_date = 6;
   */
  createdByDate?: Timestamp;

  constructor(data?: PartialMessage<Comment>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.Comment";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Comment;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Comment;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Comment;

  static equals(a: Comment | PlainMessage<Comment> | undefined, b: Comment | PlainMessage<Comment> | undefined): boolean;
}

/**
 * CloseTicket - Fields for closing a Ticket
 *
 * @generated from message api.commons.CloseTicket
 */
export declare class CloseTicket extends Message<CloseTicket> {
  /**
   * @generated from field: int64 ticket_sid = 1;
   */
  ticketSid: bigint;

  /**
   * @generated from field: int64 status = 2;
   */
  status: bigint;

  /**
   * The comment text
   *
   * @generated from field: string comment = 3;
   */
  comment: string;

  /**
   * before status
   *
   * @generated from field: int64 from_status = 4;
   */
  fromStatus: bigint;

  /**
   * commenter by id
   *
   * used in creating comment
   *
   * @generated from field: string created_by_id = 5;
   */
  createdById: string;

  constructor(data?: PartialMessage<CloseTicket>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.CloseTicket";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CloseTicket;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CloseTicket;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CloseTicket;

  static equals(a: CloseTicket | PlainMessage<CloseTicket> | undefined, b: CloseTicket | PlainMessage<CloseTicket> | undefined): boolean;
}

/**
 * ConfirmClose - Boolean response for closing a Ticket
 *
 * @generated from message api.commons.ConfirmClose
 */
export declare class ConfirmClose extends Message<ConfirmClose> {
  /**
   * @generated from field: int64 status = 1;
   */
  status: bigint;

  constructor(data?: PartialMessage<ConfirmClose>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.ConfirmClose";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConfirmClose;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConfirmClose;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConfirmClose;

  static equals(a: ConfirmClose | PlainMessage<ConfirmClose> | undefined, b: ConfirmClose | PlainMessage<ConfirmClose> | undefined): boolean;
}

/**
 * TicketProject - Fields for Project setting in ticketing system
 *
 * @generated from message api.commons.TicketProject
 */
export declare class TicketProject extends Message<TicketProject> {
  /**
   * Seq Id of project entry
   *
   * @generated from field: int64 ticket_project_id = 1;
   */
  ticketProjectId: bigint;

  /**
   * Logged in user's Org
   *
   * @generated from field: string org_id = 2;
   */
  orgId: string;

  /**
   * Seq Id of Project from Omni
   *
   * @generated from field: int64 project_sid = 3;
   */
  projectSid: bigint;

  /**
   * 3 to 5 letter User entered Project Code
   *
   * @generated from field: string project_code = 4;
   */
  projectCode: string;

  /**
   * Project Title as in omni
   *
   * @generated from field: string project_title = 5;
   */
  projectTitle: string;

  /**
   * Indicates if Project is enabled in ticketing system
   *
   * @generated from field: bool is_active = 6;
   */
  isActive: boolean;

  constructor(data?: PartialMessage<TicketProject>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.TicketProject";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TicketProject;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TicketProject;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TicketProject;

  static equals(a: TicketProject | PlainMessage<TicketProject> | undefined, b: TicketProject | PlainMessage<TicketProject> | undefined): boolean;
}

/**
 * TicketSla - Fields for sla on a ticket
 *
 * @generated from message api.commons.TicketSla
 */
export declare class TicketSla extends Message<TicketSla> {
  /**
   * The snowflake id of a comment row in ticket_comment.
   *
   * @generated from field: int64 sla_sid = 1;
   */
  slaSid: bigint;

  /**
   * The name.
   *
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * The description text
   *
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * interval
   *
   * @generated from field: int64 interval = 4;
   */
  interval: bigint;

  /**
   * Indicates sla is enable or disable
   *
   * @generated from field: int64 is_active = 5;
   */
  isActive: bigint;

  constructor(data?: PartialMessage<TicketSla>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.TicketSla";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TicketSla;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TicketSla;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TicketSla;

  static equals(a: TicketSla | PlainMessage<TicketSla> | undefined, b: TicketSla | PlainMessage<TicketSla> | undefined): boolean;
}

/**
 * SlaConditions - Condition Fields for sla on a ticket
 *
 * @generated from message api.commons.SlaConditions
 */
export declare class SlaConditions extends Message<SlaConditions> {
  /**
   * The snowflake id of a comment row in ticket_comment.
   *
   * @generated from field: int64 sla_condition_sid = 1;
   */
  slaConditionSid: bigint;

  /**
   * The name.
   *
   * @generated from field: string sla_condition_name = 2;
   */
  slaConditionName: string;

  constructor(data?: PartialMessage<SlaConditions>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.SlaConditions";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SlaConditions;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SlaConditions;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SlaConditions;

  static equals(a: SlaConditions | PlainMessage<SlaConditions> | undefined, b: SlaConditions | PlainMessage<SlaConditions> | undefined): boolean;
}

/**
 * SlaConditions - Condition Fields for sla on a ticket
 *
 * @generated from message api.commons.ReplyComment
 */
export declare class ReplyComment extends Message<ReplyComment> {
  /**
   * The snowflake id of a comment row in ticket_comment.
   *
   * @generated from field: int64 comment_sid = 1;
   */
  commentSid: bigint;

  /**
   * The ticket reference where the comment was added.
   *
   * @generated from field: int64 ticket_sid = 2;
   */
  ticketSid: bigint;

  /**
   * The comment text
   *
   * @generated from field: string reply = 3;
   */
  reply: string;

  /**
   * commenter by id
   *
   * used in creating comment
   *
   * @generated from field: string created_by_id = 4;
   */
  createdById: string;

  /**
   * @generated from field: google.protobuf.Timestamp created_by_date = 5;
   */
  createdByDate?: Timestamp;

  constructor(data?: PartialMessage<ReplyComment>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.ReplyComment";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplyComment;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplyComment;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplyComment;

  static equals(a: ReplyComment | PlainMessage<ReplyComment> | undefined, b: ReplyComment | PlainMessage<ReplyComment> | undefined): boolean;
}

/**
 * ConfirmReplyComment -
 *
 * @generated from message api.commons.ConfirmReplyComment
 */
export declare class ConfirmReplyComment extends Message<ConfirmReplyComment> {
  /**
   * boolean value to confirm edit comment
   *
   * @generated from field: bool is_created = 1;
   */
  isCreated: boolean;

  constructor(data?: PartialMessage<ConfirmReplyComment>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.ConfirmReplyComment";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConfirmReplyComment;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConfirmReplyComment;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConfirmReplyComment;

  static equals(a: ConfirmReplyComment | PlainMessage<ConfirmReplyComment> | undefined, b: ConfirmReplyComment | PlainMessage<ConfirmReplyComment> | undefined): boolean;
}

/**
 * TicketAuditLog -
 *
 * @generated from message api.commons.TicketAuditLog
 */
export declare class TicketAuditLog extends Message<TicketAuditLog> {
  /**
   * ticket_audit_event_log_id
   *
   * @generated from field: string ticket_audit_event_log_id = 1;
   */
  ticketAuditEventLogId: string;

  /**
   * Logged in user's Org
   *
   * @generated from field: string org_id = 2;
   */
  orgId: string;

  /**
   * Logged event
   *
   * @generated from field: string event = 3;
   */
  event: string;

  /**
   * ticket_sid
   *
   * @generated from field: int64 ticket_sid = 4;
   */
  ticketSid: bigint;

  /**
   * event_type
   *
   * @generated from field: string event_type = 5;
   */
  eventType: string;

  /**
   * used in creating comment
   *
   * @generated from field: string created_by_id = 6;
   */
  createdById: string;

  /**
   * created by date
   *
   * @generated from field: google.protobuf.Timestamp created_by_date = 7;
   */
  createdByDate?: Timestamp;

  constructor(data?: PartialMessage<TicketAuditLog>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.TicketAuditLog";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TicketAuditLog;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TicketAuditLog;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TicketAuditLog;

  static equals(a: TicketAuditLog | PlainMessage<TicketAuditLog> | undefined, b: TicketAuditLog | PlainMessage<TicketAuditLog> | undefined): boolean;
}

/**
 * EditTicket - Fields for Edit Ticket , listing attributes of a ticket which can be edited
 *
 * @generated from message api.commons.EditTicket
 */
export declare class EditTicket extends Message<EditTicket> {
  /**
   * The ticket reference where the comment was added.
   *
   * @generated from field: int64 ticket_sid = 1;
   */
  ticketSid: bigint;

  /**
   * The comment text
   *
   * @generated from field: api.commons.EditAttribute edit_value = 2;
   */
  editValue?: EditAttribute;

  constructor(data?: PartialMessage<EditTicket>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.EditTicket";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EditTicket;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EditTicket;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EditTicket;

  static equals(a: EditTicket | PlainMessage<EditTicket> | undefined, b: EditTicket | PlainMessage<EditTicket> | undefined): boolean;
}

/**
 *
 * Description = 1
 * Skills = 2
 * Status = 3
 * Due Date = 4
 * SLA = 5
 * All Values must come as String. BE to convert values to int64, JSON and DateTime
 *
 * @generated from message api.commons.EditAttribute
 */
export declare class EditAttribute extends Message<EditAttribute> {
  /**
   * Column Descripter
   *
   * @generated from field: int64 col_desc = 1;
   */
  colDesc: bigint;

  /**
   * @generated from field: string from_val = 2;
   */
  fromVal: string;

  /**
   * @generated from field: string to_val = 3;
   */
  toVal: string;

  /**
   * @generated from field: bool is_edited = 4;
   */
  isEdited: boolean;

  /**
   * @generated from field: api.commons.EditColumnType edit_column_type = 5;
   */
  editColumnType: EditColumnType;

  constructor(data?: PartialMessage<EditAttribute>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.EditAttribute";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EditAttribute;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EditAttribute;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EditAttribute;

  static equals(a: EditAttribute | PlainMessage<EditAttribute> | undefined, b: EditAttribute | PlainMessage<EditAttribute> | undefined): boolean;
}

