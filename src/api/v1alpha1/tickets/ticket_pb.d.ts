// @generated by protoc-gen-es v1.2.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/tickets/ticket.proto (package api.v1alpha1.tickets, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Comment, ConfirmReplyComment, EditAttribute, Metadata, ReplyComment, Skills, Sla, SlaConditions, Ticket, TicketSla } from "../../commons/tickets_pb.js";

/**
 * @generated from message api.v1alpha1.tickets.PingReq
 */
export declare class PingReq extends Message<PingReq> {
  constructor(data?: PartialMessage<PingReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.PingReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PingReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PingReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PingReq;

  static equals(a: PingReq | PlainMessage<PingReq> | undefined, b: PingReq | PlainMessage<PingReq> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.tickets.PingRes
 */
export declare class PingRes extends Message<PingRes> {
  constructor(data?: PartialMessage<PingRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.PingRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PingRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PingRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PingRes;

  static equals(a: PingRes | PlainMessage<PingRes> | undefined, b: PingRes | PlainMessage<PingRes> | undefined): boolean;
}

/**
 * CreateTicketReq - Request for CreateTicket
 *
 * @generated from message api.v1alpha1.tickets.CreateTicketReq
 */
export declare class CreateTicketReq extends Message<CreateTicketReq> {
  /**
   * title of the ticket to be created.
   *
   * @generated from field: string title = 1;
   */
  title: string;

  /**
   * description of the ticket
   *
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * the enabled project sid. project must have been enabled/imported from omni.project.project_sid to tickets_db.ticket_project.project_sid
   *
   * @generated from field: int64 project_sid = 3;
   */
  projectSid: bigint;

  /**
   * ticket due date
   *
   * @generated from field: google.protobuf.Timestamp due_date = 8;
   */
  dueDate?: Timestamp;

  /**
   * A list of conversation context meatadatgit stata
   *
   * @generated from field: repeated api.commons.Metadata metadata = 9;
   */
  metadata: Metadata[];

  /**
   * A list of skills assotiated with a ticket
   *
   * @generated from field: repeated api.commons.Skills ticket_skills = 10;
   */
  ticketSkills: Skills[];

  /**
   * Status - Ticket status : 1 open, 2 doing, 3 close etc
   *
   * @generated from field: int64 status = 11;
   */
  status: bigint;

  /**
   * A list of sla assotiated with a ticket
   *
   * @generated from field: repeated api.commons.Sla ticket_sla = 12;
   */
  ticketSla: Sla[];

  constructor(data?: PartialMessage<CreateTicketReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.CreateTicketReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateTicketReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateTicketReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateTicketReq;

  static equals(a: CreateTicketReq | PlainMessage<CreateTicketReq> | undefined, b: CreateTicketReq | PlainMessage<CreateTicketReq> | undefined): boolean;
}

/**
 * CreateTicketRes - Response from CreateTicket BE API
 *
 * @generated from message api.v1alpha1.tickets.CreateTicketRes
 */
export declare class CreateTicketRes extends Message<CreateTicketRes> {
  /**
   * Returns the created ticket row in the response
   *
   * @generated from field: api.commons.Ticket ticket = 1;
   */
  ticket?: Ticket;

  constructor(data?: PartialMessage<CreateTicketRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.CreateTicketRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateTicketRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateTicketRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateTicketRes;

  static equals(a: CreateTicketRes | PlainMessage<CreateTicketRes> | undefined, b: CreateTicketRes | PlainMessage<CreateTicketRes> | undefined): boolean;
}

/**
 * EditTicketReq - Request for EditTicketReq
 *
 * @generated from message api.v1alpha1.tickets.EditTicketReq
 */
export declare class EditTicketReq extends Message<EditTicketReq> {
  /**
   * @generated from field: int64 ticket_sid = 1;
   */
  ticketSid: bigint;

  /**
   * The comment text
   *
   * @generated from field: api.commons.EditAttribute edit_value = 2;
   */
  editValue?: EditAttribute;

  constructor(data?: PartialMessage<EditTicketReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.EditTicketReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EditTicketReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EditTicketReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EditTicketReq;

  static equals(a: EditTicketReq | PlainMessage<EditTicketReq> | undefined, b: EditTicketReq | PlainMessage<EditTicketReq> | undefined): boolean;
}

/**
 * EditTicketReq - Request for EditTicketReq
 *
 * @generated from message api.v1alpha1.tickets.EditTicketRes
 */
export declare class EditTicketRes extends Message<EditTicketRes> {
  /**
   * @generated from field: bool is_edited = 1;
   */
  isEdited: boolean;

  constructor(data?: PartialMessage<EditTicketRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.EditTicketRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EditTicketRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EditTicketRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EditTicketRes;

  static equals(a: EditTicketRes | PlainMessage<EditTicketRes> | undefined, b: EditTicketRes | PlainMessage<EditTicketRes> | undefined): boolean;
}

/**
 * ListTicketsReq
 *
 * @generated from message api.v1alpha1.tickets.ListTicketsReq
 */
export declare class ListTicketsReq extends Message<ListTicketsReq> {
  constructor(data?: PartialMessage<ListTicketsReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.ListTicketsReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTicketsReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTicketsReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTicketsReq;

  static equals(a: ListTicketsReq | PlainMessage<ListTicketsReq> | undefined, b: ListTicketsReq | PlainMessage<ListTicketsReq> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.tickets.ListTicketsRes
 */
export declare class ListTicketsRes extends Message<ListTicketsRes> {
  /**
   * @generated from field: repeated api.commons.Ticket tickets = 1;
   */
  tickets: Ticket[];

  constructor(data?: PartialMessage<ListTicketsRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.ListTicketsRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTicketsRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTicketsRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTicketsRes;

  static equals(a: ListTicketsRes | PlainMessage<ListTicketsRes> | undefined, b: ListTicketsRes | PlainMessage<ListTicketsRes> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.tickets.AssignTicketReq
 */
export declare class AssignTicketReq extends Message<AssignTicketReq> {
  /**
   * @generated from field: int64 ticket_sid = 1;
   */
  ticketSid: bigint;

  /**
   * type:json - send 0 or null for un-assigning a ticket
   *
   * @generated from field: string assignee_list = 2;
   */
  assigneeList: string;

  /**
   * uuid
   *
   * @generated from field: string assigned_id = 3;
   */
  assignedId: string;

  constructor(data?: PartialMessage<AssignTicketReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.AssignTicketReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssignTicketReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssignTicketReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssignTicketReq;

  static equals(a: AssignTicketReq | PlainMessage<AssignTicketReq> | undefined, b: AssignTicketReq | PlainMessage<AssignTicketReq> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.tickets.AssignTicketRes
 */
export declare class AssignTicketRes extends Message<AssignTicketRes> {
  /**
   * @generated from field: int64 ticket_sid = 1;
   */
  ticketSid: bigint;

  /**
   * @generated from field: string assignee_list = 2;
   */
  assigneeList: string;

  /**
   * uuid
   *
   * @generated from field: string assigned_id = 3;
   */
  assignedId: string;

  constructor(data?: PartialMessage<AssignTicketRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.AssignTicketRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssignTicketRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssignTicketRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssignTicketRes;

  static equals(a: AssignTicketRes | PlainMessage<AssignTicketRes> | undefined, b: AssignTicketRes | PlainMessage<AssignTicketRes> | undefined): boolean;
}

/**
 * ViewTicketReq -
 *
 * @generated from message api.v1alpha1.tickets.ViewTicketReq
 */
export declare class ViewTicketReq extends Message<ViewTicketReq> {
  /**
   * @generated from field: int64 ticket_sid = 1;
   */
  ticketSid: bigint;

  constructor(data?: PartialMessage<ViewTicketReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.ViewTicketReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ViewTicketReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ViewTicketReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ViewTicketReq;

  static equals(a: ViewTicketReq | PlainMessage<ViewTicketReq> | undefined, b: ViewTicketReq | PlainMessage<ViewTicketReq> | undefined): boolean;
}

/**
 * ViewTicketRes -
 *
 * @generated from message api.v1alpha1.tickets.ViewTicketRes
 */
export declare class ViewTicketRes extends Message<ViewTicketRes> {
  /**
   * ticket details
   *
   * @generated from field: api.commons.Ticket ticket = 1;
   */
  ticket?: Ticket;

  /**
   * comments
   *
   * @generated from field: repeated api.commons.Comment comments = 2;
   */
  comments: Comment[];

  /**
   * @generated from field: repeated api.commons.ReplyComment reply_comment = 3;
   */
  replyComment: ReplyComment[];

  constructor(data?: PartialMessage<ViewTicketRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.ViewTicketRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ViewTicketRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ViewTicketRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ViewTicketRes;

  static equals(a: ViewTicketRes | PlainMessage<ViewTicketRes> | undefined, b: ViewTicketRes | PlainMessage<ViewTicketRes> | undefined): boolean;
}

/**
 * Create CommentReq  - Create Comment Request From Client
 *
 * ticket Id of the comment to be created.
 *
 * @generated from message api.v1alpha1.tickets.CreateCommentReq
 */
export declare class CreateCommentReq extends Message<CreateCommentReq> {
  /**
   * @generated from field: int64 ticket_sid = 1;
   */
  ticketSid: bigint;

  /**
   * description of the comment
   *
   * @generated from field: string comment = 2;
   */
  comment: string;

  constructor(data?: PartialMessage<CreateCommentReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.CreateCommentReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateCommentReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateCommentReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateCommentReq;

  static equals(a: CreateCommentReq | PlainMessage<CreateCommentReq> | undefined, b: CreateCommentReq | PlainMessage<CreateCommentReq> | undefined): boolean;
}

/**
 * CreateCommenttRes - Response from CreateComment BE API
 *
 * @generated from message api.v1alpha1.tickets.CreateCommentRes
 */
export declare class CreateCommentRes extends Message<CreateCommentRes> {
  /**
   * Returns the created comment row in the response
   *
   * @generated from field: api.commons.Comment comment = 1;
   */
  comment?: Comment;

  constructor(data?: PartialMessage<CreateCommentRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.CreateCommentRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateCommentRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateCommentRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateCommentRes;

  static equals(a: CreateCommentRes | PlainMessage<CreateCommentRes> | undefined, b: CreateCommentRes | PlainMessage<CreateCommentRes> | undefined): boolean;
}

/**
 * CloseTicketReq - Close Ticket Request Messages
 *
 * @generated from message api.v1alpha1.tickets.CloseTicketReq
 */
export declare class CloseTicketReq extends Message<CloseTicketReq> {
  /**
   * ticket Id of the ticket which needs to be closed
   *
   * @generated from field: int64 ticket_sid = 1;
   */
  ticketSid: bigint;

  /**
   * description of the comment
   *
   * @generated from field: string comment = 2;
   */
  comment: string;

  /**
   * from status of the ticket
   *
   * @generated from field: int64 from_status = 3;
   */
  fromStatus: bigint;

  constructor(data?: PartialMessage<CloseTicketReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.CloseTicketReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CloseTicketReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CloseTicketReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CloseTicketReq;

  static equals(a: CloseTicketReq | PlainMessage<CloseTicketReq> | undefined, b: CloseTicketReq | PlainMessage<CloseTicketReq> | undefined): boolean;
}

/**
 * CloseTicketRes - Close Ticket Response Messages
 *
 * @generated from message api.v1alpha1.tickets.CloseTicketRes
 */
export declare class CloseTicketRes extends Message<CloseTicketRes> {
  /**
   * @generated from field: bool is_status = 1;
   */
  isStatus: boolean;

  constructor(data?: PartialMessage<CloseTicketRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.CloseTicketRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CloseTicketRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CloseTicketRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CloseTicketRes;

  static equals(a: CloseTicketRes | PlainMessage<CloseTicketRes> | undefined, b: CloseTicketRes | PlainMessage<CloseTicketRes> | undefined): boolean;
}

/**
 * Create CreateSlaReq  - Create Sla Request From Client
 *
 * @generated from message api.v1alpha1.tickets.CreateSlaReq
 */
export declare class CreateSlaReq extends Message<CreateSlaReq> {
  /**
   * sla_sid of the sla to be created.
   *
   * @generated from field: int64 sla_sid = 1;
   */
  slaSid: bigint;

  /**
   * name of the sla
   *
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * description of the sla
   *
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * sla interval
   *
   * @generated from field: int64 interval = 4;
   */
  interval: bigint;

  constructor(data?: PartialMessage<CreateSlaReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.CreateSlaReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateSlaReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateSlaReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateSlaReq;

  static equals(a: CreateSlaReq | PlainMessage<CreateSlaReq> | undefined, b: CreateSlaReq | PlainMessage<CreateSlaReq> | undefined): boolean;
}

/**
 * CreateSlaRes - Response from CreateSla BE API
 *
 * @generated from message api.v1alpha1.tickets.CreateSlaRes
 */
export declare class CreateSlaRes extends Message<CreateSlaRes> {
  /**
   * Returns the created sla row in the response
   *
   * @generated from field: api.commons.TicketSla sla = 1;
   */
  sla?: TicketSla;

  constructor(data?: PartialMessage<CreateSlaRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.CreateSlaRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateSlaRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateSlaRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateSlaRes;

  static equals(a: CreateSlaRes | PlainMessage<CreateSlaRes> | undefined, b: CreateSlaRes | PlainMessage<CreateSlaRes> | undefined): boolean;
}

/**
 * ListSlaReq -
 *
 * @generated from message api.v1alpha1.tickets.ListSlaReq
 */
export declare class ListSlaReq extends Message<ListSlaReq> {
  constructor(data?: PartialMessage<ListSlaReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.ListSlaReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSlaReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSlaReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSlaReq;

  static equals(a: ListSlaReq | PlainMessage<ListSlaReq> | undefined, b: ListSlaReq | PlainMessage<ListSlaReq> | undefined): boolean;
}

/**
 * ListSlaRes -
 *
 * @generated from message api.v1alpha1.tickets.ListSlaRes
 */
export declare class ListSlaRes extends Message<ListSlaRes> {
  /**
   * @generated from field: repeated api.commons.TicketSla ticketsSla = 1;
   */
  ticketsSla: TicketSla[];

  constructor(data?: PartialMessage<ListSlaRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.ListSlaRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSlaRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSlaRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSlaRes;

  static equals(a: ListSlaRes | PlainMessage<ListSlaRes> | undefined, b: ListSlaRes | PlainMessage<ListSlaRes> | undefined): boolean;
}

/**
 * UpdateSlaReq -
 *
 * @generated from message api.v1alpha1.tickets.UpdateSlaReq
 */
export declare class UpdateSlaReq extends Message<UpdateSlaReq> {
  /**
   * sla_sid of the sla to be created.
   *
   * @generated from field: int64 sla_sid = 1;
   */
  slaSid: bigint;

  /**
   * sla is_active
   *
   * @generated from field: int64 is_active = 2;
   */
  isActive: bigint;

  constructor(data?: PartialMessage<UpdateSlaReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.UpdateSlaReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateSlaReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateSlaReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateSlaReq;

  static equals(a: UpdateSlaReq | PlainMessage<UpdateSlaReq> | undefined, b: UpdateSlaReq | PlainMessage<UpdateSlaReq> | undefined): boolean;
}

/**
 * ListSlaRes -
 *
 * @generated from message api.v1alpha1.tickets.UpdateSlaRes
 */
export declare class UpdateSlaRes extends Message<UpdateSlaRes> {
  /**
   * @generated from field: api.commons.TicketSla ticketsSla = 1;
   */
  ticketsSla?: TicketSla;

  constructor(data?: PartialMessage<UpdateSlaRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.UpdateSlaRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateSlaRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateSlaRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateSlaRes;

  static equals(a: UpdateSlaRes | PlainMessage<UpdateSlaRes> | undefined, b: UpdateSlaRes | PlainMessage<UpdateSlaRes> | undefined): boolean;
}

/**
 * ListSlaConditionReq -
 *
 * @generated from message api.v1alpha1.tickets.ListSlaConditionReq
 */
export declare class ListSlaConditionReq extends Message<ListSlaConditionReq> {
  constructor(data?: PartialMessage<ListSlaConditionReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.ListSlaConditionReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSlaConditionReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSlaConditionReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSlaConditionReq;

  static equals(a: ListSlaConditionReq | PlainMessage<ListSlaConditionReq> | undefined, b: ListSlaConditionReq | PlainMessage<ListSlaConditionReq> | undefined): boolean;
}

/**
 * ListSlaConditionRes -
 *
 * @generated from message api.v1alpha1.tickets.ListSlaConditionRes
 */
export declare class ListSlaConditionRes extends Message<ListSlaConditionRes> {
  /**
   * @generated from field: repeated api.commons.SlaConditions slaCondition = 1;
   */
  slaCondition: SlaConditions[];

  constructor(data?: PartialMessage<ListSlaConditionRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.ListSlaConditionRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSlaConditionRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSlaConditionRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSlaConditionRes;

  static equals(a: ListSlaConditionRes | PlainMessage<ListSlaConditionRes> | undefined, b: ListSlaConditionRes | PlainMessage<ListSlaConditionRes> | undefined): boolean;
}

/**
 * ReplyCommentReq - Reply Comment Request Messages
 *
 * @generated from message api.v1alpha1.tickets.ReplyCommentReq
 */
export declare class ReplyCommentReq extends Message<ReplyCommentReq> {
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

  constructor(data?: PartialMessage<ReplyCommentReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.ReplyCommentReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplyCommentReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplyCommentReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplyCommentReq;

  static equals(a: ReplyCommentReq | PlainMessage<ReplyCommentReq> | undefined, b: ReplyCommentReq | PlainMessage<ReplyCommentReq> | undefined): boolean;
}

/**
 * ReplyCommentRes - Reply Comment Response Messages
 *
 * @generated from message api.v1alpha1.tickets.ReplyCommentRes
 */
export declare class ReplyCommentRes extends Message<ReplyCommentRes> {
  /**
   * Returns boolen true OR False in the response
   *
   * @generated from field: api.commons.ConfirmReplyComment is_created = 1;
   */
  isCreated?: ConfirmReplyComment;

  constructor(data?: PartialMessage<ReplyCommentRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.tickets.ReplyCommentRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplyCommentRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplyCommentRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplyCommentRes;

  static equals(a: ReplyCommentRes | PlainMessage<ReplyCommentRes> | undefined, b: ReplyCommentRes | PlainMessage<ReplyCommentRes> | undefined): boolean;
}

