// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/commons/audit/tickets_events.proto (package api.commons.audit, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { EditTicket } from "../tickets_pb.js";

/**
 * @generated from message api.commons.audit.TicketEvent
 */
export const TicketEvent = proto3.makeMessageType(
  "api.commons.audit.TicketEvent",
  () => [
    { no: 1, name: "editticket", kind: "message", T: EditTicket },
    { no: 2, name: "created_by_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);
