// @generated by protoc-gen-es v1.4.2 with parameter "target=js+dts"
// @generated from file api/commons/tickets.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.TimeScale
 */
export declare enum TimeScale {
  /**
   * @generated from enum value: TIME_SCALE_MINUTE = 0;
   */
  MINUTE = 0,

  /**
   * @generated from enum value: TIME_SCALE_HOUR = 1;
   */
  HOUR = 1,

  /**
   * @generated from enum value: TIME_SCALE_DAY = 2;
   */
  DAY = 2,

  /**
   * @generated from enum value: TIME_SCALE_WEEK = 3;
   */
  WEEK = 3,

  /**
   * @generated from enum value: TIME_SCALE_MONTH = 4;
   */
  MONTH = 4,

  /**
   * @generated from enum value: TIME_SCALE_YEAR = 5;
   */
  YEAR = 5,
}

/**
 * @generated from enum api.commons.TicketStatus
 */
export declare enum TicketStatus {
  /**
   * @generated from enum value: TICKET_STATUS_NEW = 0;
   */
  NEW = 0,

  /**
   * @generated from enum value: TICKET_STATUS_OPEN = 1;
   */
  OPEN = 1,

  /**
   * @generated from enum value: TICKET_STATUS_CLOSE = 2;
   */
  CLOSE = 2,
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
   * @generated from field: int64 ticket_sid = 1 [jstype = JS_STRING];
   */
  ticketSid: string;

  /**
   * The imported/enabled ticket_project project_sid from omni.project
   *
   * @generated from field: int64 project_sid = 2 [jstype = JS_STRING];
   */
  projectSid: string;

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

  /**
   * @generated from field: repeated api.commons.TicketAction ticket_action = 19;
   */
  ticketAction: TicketAction[];

  /**
   * @generated from field: api.commons.TicketStatus ticket_status = 20;
   */
  ticketStatus: TicketStatus;

  /**
   * assignee list
   *
   * @generated from field: repeated string ticket_assignee = 21;
   */
  ticketAssignee: string[];

  /**
   * participant list
   *
   * @generated from field: repeated string ticket_participant = 22;
   */
  ticketParticipant: string[];

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
 * @generated from message api.commons.TicketTemplate
 */
export declare class TicketTemplate extends Message<TicketTemplate> {
  /**
   * @generated from field: int64 ticket_template_id = 1;
   */
  ticketTemplateId: bigint;

  /**
   * @generated from field: string org_id = 2;
   */
  orgId: string;

  /**
   * @generated from field: string template = 3;
   */
  template: string;

  /**
   * @generated from field: string template_entity_version = 4;
   */
  templateEntityVersion: string;

  /**
   * @generated from field: string template_name = 5;
   */
  templateName: string;

  /**
   * @generated from field: string created_by_id = 6;
   */
  createdById: string;

  /**
   * @generated from field: string modified_by = 7;
   */
  modifiedBy: string;

  /**
   * @generated from field: google.protobuf.Timestamp created_date = 8;
   */
  createdDate?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp modified_date = 9;
   */
  modifiedDate?: Timestamp;

  /**
   * @generated from field: bool is_active = 10;
   */
  isActive: boolean;

  constructor(data?: PartialMessage<TicketTemplate>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.TicketTemplate";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TicketTemplate;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TicketTemplate;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TicketTemplate;

  static equals(a: TicketTemplate | PlainMessage<TicketTemplate> | undefined, b: TicketTemplate | PlainMessage<TicketTemplate> | undefined): boolean;
}

/**
 * @generated from message api.commons.ListTemplate
 */
export declare class ListTemplate extends Message<ListTemplate> {
  /**
   * @generated from field: int64 ticket_template_id = 1 [jstype = JS_STRING];
   */
  ticketTemplateId: string;

  /**
   * @generated from field: string template_name = 2;
   */
  templateName: string;

  /**
   * @generated from field: int64 project_id = 3 [jstype = JS_STRING];
   */
  projectId: string;

  /**
   * @generated from field: string template = 4;
   */
  template: string;

  /**
   * @generated from field: string template_entity_version = 5;
   */
  templateEntityVersion: string;

  /**
   * @generated from field: bool is_active = 6;
   */
  isActive: boolean;

  /**
   * @generated from field: string created_by_id = 7;
   */
  createdById: string;

  /**
   * @generated from field: google.protobuf.Timestamp created_date = 8;
   */
  createdDate?: Timestamp;

  /**
   * @generated from field: string project_title = 9;
   */
  projectTitle: string;

  constructor(data?: PartialMessage<ListTemplate>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.ListTemplate";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTemplate;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTemplate;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTemplate;

  static equals(a: ListTemplate | PlainMessage<ListTemplate> | undefined, b: ListTemplate | PlainMessage<ListTemplate> | undefined): boolean;
}

/**
 * @generated from message api.commons.AssignProjectTemplate
 */
export declare class AssignProjectTemplate extends Message<AssignProjectTemplate> {
  /**
   * @generated from field: repeated int64 ticket_template_id = 1 [jstype = JS_STRING];
   */
  ticketTemplateId: string[];

  /**
   * @generated from field: int64 project_id = 2 [jstype = JS_STRING];
   */
  projectId: string;

  constructor(data?: PartialMessage<AssignProjectTemplate>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.AssignProjectTemplate";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssignProjectTemplate;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssignProjectTemplate;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssignProjectTemplate;

  static equals(a: AssignProjectTemplate | PlainMessage<AssignProjectTemplate> | undefined, b: AssignProjectTemplate | PlainMessage<AssignProjectTemplate> | undefined): boolean;
}

/**
 * @generated from message api.commons.Duration
 */
export declare class Duration extends Message<Duration> {
  /**
   * @generated from field: int64 value = 1 [jstype = JS_STRING];
   */
  value: string;

  /**
   * @generated from field: api.commons.TimeScale scale = 2;
   */
  scale: TimeScale;

  constructor(data?: PartialMessage<Duration>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.Duration";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Duration;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Duration;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Duration;

  static equals(a: Duration | PlainMessage<Duration> | undefined, b: Duration | PlainMessage<Duration> | undefined): boolean;
}

/**
 * TICKET_ACTION - New messgae have actions mapped to tickets
 *
 * @generated from message api.commons.TicketAction
 */
export declare class TicketAction extends Message<TicketAction> {
  /**
   * snowflake id
   *
   * @generated from field: int64 ticket_action_id = 1 [jstype = JS_STRING];
   */
  ticketActionId: string;

  /**
   * action id from ACTION_MASTER table, Only callback for now
   *
   * @generated from field: int64 action_id = 2 [jstype = JS_STRING];
   */
  actionId: string;

  /**
   * Attributes for a callback Action
   *
   * @generated from field: api.commons.CallbackContext callback_context = 3;
   */
  callbackContext?: CallbackContext;

  /**
   * ticket id from ticket table
   *
   * @generated from field: int64 ticket_id = 4 [jstype = JS_STRING];
   */
  ticketId: string;

  /**
   * Start Date of the ACTION
   *
   * @generated from field: google.protobuf.Timestamp start_ts = 5;
   */
  startTs?: Timestamp;

  /**
   * Expiry date of the ACTION
   *
   * @generated from field: google.protobuf.Timestamp expiry_ts = 6;
   */
  expiryTs?: Timestamp;

  /**
   * Ticket action status can be 1 == AVAILABLE and 2 == NOT AVAILABLE
   *
   * @generated from field: int64 state = 8;
   */
  state: bigint;

  /**
   * Skills needed for the action to be completed
   * For action we need only skill id and not mandatory/optional
   *
   * @generated from field: repeated string action_skills = 9;
   */
  actionSkills: string[];

  /**
   * SLA Id for the ACTION
   *
   * @generated from field: repeated api.commons.Sla action_sla_id = 10;
   */
  actionSlaId: Sla[];

  /**
   * work done by
   *
   * @generated from field: string work_done_by = 11;
   */
  workDoneBy: string;

  constructor(data?: PartialMessage<TicketAction>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.TicketAction";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TicketAction;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TicketAction;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TicketAction;

  static equals(a: TicketAction | PlainMessage<TicketAction> | undefined, b: TicketAction | PlainMessage<TicketAction> | undefined): boolean;
}

/**
 * @generated from message api.commons.CallbackContext
 */
export declare class CallbackContext extends Message<CallbackContext> {
  /**
   * @generated from field: string caller_id = 1;
   */
  callerId: string;

  /**
   * @generated from field: string phone_no = 2;
   */
  phoneNo: string;

  /**
   * @generated from field: string country_code = 3;
   */
  countryCode: string;

  /**
   * @generated from field: string caller_name = 4;
   */
  callerName: string;

  /**
   * @generated from field: string caller_country_code = 5;
   */
  callerCountryCode: string;

  constructor(data?: PartialMessage<CallbackContext>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.CallbackContext";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CallbackContext;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CallbackContext;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CallbackContext;

  static equals(a: CallbackContext | PlainMessage<CallbackContext> | undefined, b: CallbackContext | PlainMessage<CallbackContext> | undefined): boolean;
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
   * Mandatory = 0, Preferred = 1
   *
   * @generated from field: bool is_preferred = 2;
   */
  isPreferred: boolean;

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
   * @generated from field: int64 condition_sid = 1 [jstype = JS_STRING];
   */
  conditionSid: string;

  /**
   * @generated from field: int64 sla_sid = 2 [jstype = JS_STRING];
   */
  slaSid: string;

  /**
   * @generated from field: int64 sla_min = 3 [jstype = JS_STRING];
   */
  slaMin: string;

  /**
   * @generated from field: api.commons.Duration sla_duration = 4;
   */
  slaDuration?: Duration;

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
   * @generated from field: int64 comment_sid = 1 [jstype = JS_STRING];
   */
  commentSid: string;

  /**
   * The ticket reference where the comment was added.
   *
   * @generated from field: int64 ticket_sid = 2 [jstype = JS_STRING];
   */
  ticketSid: string;

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
   * @generated from field: int64 ticket_sid = 1 [jstype = JS_STRING];
   */
  ticketSid: string;

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
   * @generated from field: int64 ticket_project_id = 1 [jstype = JS_STRING];
   */
  ticketProjectId: string;

  /**
   * Logged in user's Org
   *
   * @generated from field: string org_id = 2;
   */
  orgId: string;

  /**
   * Seq Id of Project from Omni
   *
   * @generated from field: int64 project_sid = 3 [jstype = JS_STRING];
   */
  projectSid: string;

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

  /**
   * Added ticket template ID & add in DB too
   *
   * @generated from field: repeated api.commons.TemplateDescription template_desc = 7;
   */
  templateDesc: TemplateDescription[];

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
 * @generated from message api.commons.TemplateDescription
 */
export declare class TemplateDescription extends Message<TemplateDescription> {
  /**
   * @generated from field: int64 ticket_template_id = 1 [jstype = JS_STRING];
   */
  ticketTemplateId: string;

  /**
   * @generated from field: string template_name = 2;
   */
  templateName: string;

  constructor(data?: PartialMessage<TemplateDescription>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.TemplateDescription";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TemplateDescription;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TemplateDescription;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TemplateDescription;

  static equals(a: TemplateDescription | PlainMessage<TemplateDescription> | undefined, b: TemplateDescription | PlainMessage<TemplateDescription> | undefined): boolean;
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
   * @generated from field: int64 sla_sid = 1 [jstype = JS_STRING];
   */
  slaSid: string;

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

  /**
   * @generated from field: api.commons.Duration ticket_sla_duration = 6;
   */
  ticketSlaDuration?: Duration;

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
   * @generated from field: int64 sla_condition_sid = 1 [jstype = JS_STRING];
   */
  slaConditionSid: string;

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
 * ReplyComment -
 *
 * @generated from message api.commons.ReplyComment
 */
export declare class ReplyComment extends Message<ReplyComment> {
  /**
   * The snowflake id of a comment row in ticket_comment.
   *
   * @generated from field: int64 comment_sid = 1 [jstype = JS_STRING];
   */
  commentSid: string;

  /**
   * The ticket reference where the comment was added.
   *
   * @generated from field: int64 ticket_sid = 2 [jstype = JS_STRING];
   */
  ticketSid: string;

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
   * @generated from field: int64 ticket_sid = 4 [jstype = JS_STRING];
   */
  ticketSid: string;

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
   * @generated from field: int64 ticket_sid = 1 [jstype = JS_STRING];
   */
  ticketSid: string;

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
 * @generated from message api.commons.EditAttribute
 */
export declare class EditAttribute extends Message<EditAttribute> {
  /**
   * Column Descripter
   *
   * @generated from field: int64 col_desc = 1 [jstype = JS_STRING];
   */
  colDesc: string;

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

  constructor(data?: PartialMessage<EditAttribute>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.EditAttribute";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EditAttribute;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EditAttribute;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EditAttribute;

  static equals(a: EditAttribute | PlainMessage<EditAttribute> | undefined, b: EditAttribute | PlainMessage<EditAttribute> | undefined): boolean;
}

