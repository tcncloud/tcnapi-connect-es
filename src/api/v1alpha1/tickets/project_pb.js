// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file api/v1alpha1/tickets/project.proto (package api.v1alpha1.tickets, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { TicketProject } from "../../commons/tickets_pb.js";
import { AuditEvent } from "../../commons/audit/audit_pb.js";

/**
 * EnableProjectReq - Details of project to be enabled in the ticketing system
 *
 * @generated from message api.v1alpha1.tickets.EnableProjectReq
 */
export const EnableProjectReq = proto3.makeMessageType(
  "api.v1alpha1.tickets.EnableProjectReq",
  () => [
    { no: 1, name: "project_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "project_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "project_title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * EnableProjectRes - Indicates result of the project enable request
 *
 * @generated from message api.v1alpha1.tickets.EnableProjectRes
 */
export const EnableProjectRes = proto3.makeMessageType(
  "api.v1alpha1.tickets.EnableProjectRes",
  () => [
    { no: 1, name: "success", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * ListEnabledProjectsReq - Request to list enabled projects in ticketing system
 *
 * @generated from message api.v1alpha1.tickets.ListEnabledProjectsReq
 */
export const ListEnabledProjectsReq = proto3.makeMessageType(
  "api.v1alpha1.tickets.ListEnabledProjectsReq",
  [],
);

/**
 * ListEnabledProjectsRes - Response wraps list of projects enabled for ticketing system
 *
 * @generated from message api.v1alpha1.tickets.ListEnabledProjectsRes
 */
export const ListEnabledProjectsRes = proto3.makeMessageType(
  "api.v1alpha1.tickets.ListEnabledProjectsRes",
  () => [
    { no: 1, name: "projects", kind: "message", T: TicketProject, repeated: true },
  ],
);

/**
 * ListTicketAuditLogReq -
 *
 * @generated from message api.v1alpha1.tickets.ListTicketAuditLogReq
 */
export const ListTicketAuditLogReq = proto3.makeMessageType(
  "api.v1alpha1.tickets.ListTicketAuditLogReq",
  () => [
    { no: 1, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
  ],
);

/**
 * ListTicketAuditLogRes -
 *
 * @generated from message api.v1alpha1.tickets.ListTicketAuditLogRes
 */
export const ListTicketAuditLogRes = proto3.makeMessageType(
  "api.v1alpha1.tickets.ListTicketAuditLogRes",
  () => [
    { no: 1, name: "events", kind: "message", T: AuditEvent, repeated: true },
  ],
);

