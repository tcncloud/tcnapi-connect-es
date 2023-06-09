// @generated by protoc-gen-connect-es v0.11.0
// @generated from file api/v1alpha1/tickets/service.proto (package api.v1alpha1.tickets, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AssignTicketReq, AssignTicketRes, CloseTicketReq, CloseTicketRes, CreateCommentReq, CreateCommentRes, CreateSelfAssignReq, CreateSelfAssignRes, CreateSlaReq, CreateSlaRes, CreateTicketReq, CreateTicketRes, EditTicketReq, EditTicketRes, ListSlaConditionReq, ListSlaConditionRes, ListSlaReq, ListSlaRes, ListTicketsReq, ListTicketsRes, ReplyCommentReq, ReplyCommentRes, UpdateSlaReq, UpdateSlaRes, ViewTicketReq, ViewTicketRes } from "./ticket_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { EnableProjectReq, EnableProjectRes, ListEnabledProjectsReq, ListEnabledProjectsRes, ListTicketAuditLogReq, ListTicketAuditLogRes } from "./project_pb.js";

/**
 * Tickets service is the public api for the tickets service., for public integrations to manage tickets / customer service requests. Can be used by any authorized frontend-app.
 *
 * @generated from service api.v1alpha1.tickets.Tickets
 */
export declare const Tickets: {
  readonly typeName: "api.v1alpha1.tickets.Tickets",
  readonly methods: {
    /**
     * Public Method to create a ticket.
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.CreateTicket
     */
    readonly createTicket: {
      readonly name: "CreateTicket",
      readonly I: typeof CreateTicketReq,
      readonly O: typeof CreateTicketRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public Method to edit a ticket.
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.EditTicket
     */
    readonly editTicket: {
      readonly name: "EditTicket",
      readonly I: typeof EditTicketReq,
      readonly O: typeof EditTicketRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to list tickets
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.ListTickets
     */
    readonly listTickets: {
      readonly name: "ListTickets",
      readonly I: typeof ListTicketsReq,
      readonly O: typeof ListTicketsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to assign ticket
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.AssignTicket
     */
    readonly assignTicket: {
      readonly name: "AssignTicket",
      readonly I: typeof AssignTicketReq,
      readonly O: typeof AssignTicketRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public Method to Close a ticket
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.CloseTicket
     */
    readonly closeTicket: {
      readonly name: "CloseTicket",
      readonly I: typeof CloseTicketReq,
      readonly O: typeof CloseTicketRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to view ticket
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.ViewTicket
     */
    readonly viewTicket: {
      readonly name: "ViewTicket",
      readonly I: typeof ViewTicketReq,
      readonly O: typeof ViewTicketRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public Method to create a Comment.
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.CreateComment
     */
    readonly createComment: {
      readonly name: "CreateComment",
      readonly I: typeof CreateCommentReq,
      readonly O: typeof CreateCommentRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to Enable Project for Ticketing system
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.EnableProject
     */
    readonly enableProject: {
      readonly name: "EnableProject",
      readonly I: typeof EnableProjectReq,
      readonly O: typeof EnableProjectRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to List projects enabled for Ticketing system
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.ListEnabledProjects
     */
    readonly listEnabledProjects: {
      readonly name: "ListEnabledProjects",
      readonly I: typeof ListEnabledProjectsReq,
      readonly O: typeof ListEnabledProjectsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public Method to create a sla.
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.CreateSLA
     */
    readonly createSLA: {
      readonly name: "CreateSLA",
      readonly I: typeof CreateSlaReq,
      readonly O: typeof CreateSlaRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to list sla
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.ListSLA
     */
    readonly listSLA: {
      readonly name: "ListSLA",
      readonly I: typeof ListSlaReq,
      readonly O: typeof ListSlaRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to update sla
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.UpdateSLA
     */
    readonly updateSLA: {
      readonly name: "UpdateSLA",
      readonly I: typeof UpdateSlaReq,
      readonly O: typeof UpdateSlaRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to list sla_condition
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.ListSLACondition
     */
    readonly listSLACondition: {
      readonly name: "ListSLACondition",
      readonly I: typeof ListSlaConditionReq,
      readonly O: typeof ListSlaConditionRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to list sla_condition
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.ReplyComment
     */
    readonly replyComment: {
      readonly name: "ReplyComment",
      readonly I: typeof ReplyCommentReq,
      readonly O: typeof ReplyCommentRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to List audit log for Ticketing system
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.ListTicketAuditLog
     */
    readonly listTicketAuditLog: {
      readonly name: "ListTicketAuditLog",
      readonly I: typeof ListTicketAuditLogReq,
      readonly O: typeof ListTicketAuditLogRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to assign a ticket
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.AssignSelf
     */
    readonly assignSelf: {
      readonly name: "AssignSelf",
      readonly I: typeof CreateSelfAssignReq,
      readonly O: typeof CreateSelfAssignRes,
      readonly kind: MethodKind.Unary,
    },
  }
};

