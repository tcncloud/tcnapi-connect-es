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
export const Tickets = {
  typeName: "api.v1alpha1.tickets.Tickets",
  methods: {
    /**
     * Public Method to create a ticket.
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.CreateTicket
     */
    createTicket: {
      name: "CreateTicket",
      I: CreateTicketReq,
      O: CreateTicketRes,
      kind: MethodKind.Unary,
    },
    /**
     * Public Method to edit a ticket.
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.EditTicket
     */
    editTicket: {
      name: "EditTicket",
      I: EditTicketReq,
      O: EditTicketRes,
      kind: MethodKind.Unary,
    },
    /**
     * Public method to list tickets
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.ListTickets
     */
    listTickets: {
      name: "ListTickets",
      I: ListTicketsReq,
      O: ListTicketsRes,
      kind: MethodKind.Unary,
    },
    /**
     * Public method to assign ticket
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.AssignTicket
     */
    assignTicket: {
      name: "AssignTicket",
      I: AssignTicketReq,
      O: AssignTicketRes,
      kind: MethodKind.Unary,
    },
    /**
     * Public Method to Close a ticket
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.CloseTicket
     */
    closeTicket: {
      name: "CloseTicket",
      I: CloseTicketReq,
      O: CloseTicketRes,
      kind: MethodKind.Unary,
    },
    /**
     * Public method to view ticket
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.ViewTicket
     */
    viewTicket: {
      name: "ViewTicket",
      I: ViewTicketReq,
      O: ViewTicketRes,
      kind: MethodKind.Unary,
    },
    /**
     * Public Method to create a Comment.
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.CreateComment
     */
    createComment: {
      name: "CreateComment",
      I: CreateCommentReq,
      O: CreateCommentRes,
      kind: MethodKind.Unary,
    },
    /**
     * Public method to Enable Project for Ticketing system
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.EnableProject
     */
    enableProject: {
      name: "EnableProject",
      I: EnableProjectReq,
      O: EnableProjectRes,
      kind: MethodKind.Unary,
    },
    /**
     * Public method to List projects enabled for Ticketing system
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.ListEnabledProjects
     */
    listEnabledProjects: {
      name: "ListEnabledProjects",
      I: ListEnabledProjectsReq,
      O: ListEnabledProjectsRes,
      kind: MethodKind.Unary,
    },
    /**
     * Public Method to create a sla.
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.CreateSLA
     */
    createSLA: {
      name: "CreateSLA",
      I: CreateSlaReq,
      O: CreateSlaRes,
      kind: MethodKind.Unary,
    },
    /**
     * Public method to list sla
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.ListSLA
     */
    listSLA: {
      name: "ListSLA",
      I: ListSlaReq,
      O: ListSlaRes,
      kind: MethodKind.Unary,
    },
    /**
     * Public method to update sla
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.UpdateSLA
     */
    updateSLA: {
      name: "UpdateSLA",
      I: UpdateSlaReq,
      O: UpdateSlaRes,
      kind: MethodKind.Unary,
    },
    /**
     * Public method to list sla_condition
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.ListSLACondition
     */
    listSLACondition: {
      name: "ListSLACondition",
      I: ListSlaConditionReq,
      O: ListSlaConditionRes,
      kind: MethodKind.Unary,
    },
    /**
     * Public method to list sla_condition
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.ReplyComment
     */
    replyComment: {
      name: "ReplyComment",
      I: ReplyCommentReq,
      O: ReplyCommentRes,
      kind: MethodKind.Unary,
    },
    /**
     * Public method to List audit log for Ticketing system
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.ListTicketAuditLog
     */
    listTicketAuditLog: {
      name: "ListTicketAuditLog",
      I: ListTicketAuditLogReq,
      O: ListTicketAuditLogRes,
      kind: MethodKind.Unary,
    },
    /**
     * Public method to assign a ticket
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.AssignSelf
     */
    assignSelf: {
      name: "AssignSelf",
      I: CreateSelfAssignReq,
      O: CreateSelfAssignRes,
      kind: MethodKind.Unary,
    },
  }
};

