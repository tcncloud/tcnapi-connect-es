// @generated by protoc-gen-connect-es v0.11.0
// @generated from file api/v0alpha/cbs.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateCallbackWithDetailsReq, CreateCallbackWithDetailsRes, CreateServiceIdReq, CreateServiceIdRes, GetNextScheduledCallbackWithDetailsReq, GetNextScheduledCallbackWithDetailsRes, GetScheduledCallbackWithDetailsReq, GetScheduledCallbackWithDetailsRes, ListScheduledCallbacksWithDetailsBySkillsReq, ListScheduledCallbacksWithDetailsReq, ListScheduledCallbacksWithDetailsRes, UpdateScheduledCallbackReq, UpdateScheduledCallbackRes, UpdateScheduledCallbackToCanceledReq, UpdateScheduledCallbackToCanceledRes, UpdateScheduledCallbackToClosedReq, UpdateScheduledCallbackToClosedRes, UpdateScheduledCallbackToReadyReq, UpdateScheduledCallbackToReadyRes } from "./cbs_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v0alpha.CBS
 */
export const CBS = {
  typeName: "api.v0alpha.CBS",
  methods: {
    /**
     * @generated from rpc api.v0alpha.CBS.CreateServiceId
     */
    createServiceId: {
      name: "CreateServiceId",
      I: CreateServiceIdReq,
      O: CreateServiceIdRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.CBS.CreateCallbackWithDetails
     */
    createCallbackWithDetails: {
      name: "CreateCallbackWithDetails",
      I: CreateCallbackWithDetailsReq,
      O: CreateCallbackWithDetailsRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.CBS.UpdateScheduledCallbackToReady
     */
    updateScheduledCallbackToReady: {
      name: "UpdateScheduledCallbackToReady",
      I: UpdateScheduledCallbackToReadyReq,
      O: UpdateScheduledCallbackToReadyRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.CBS.UpdateScheduledCallbackToCanceled
     */
    updateScheduledCallbackToCanceled: {
      name: "UpdateScheduledCallbackToCanceled",
      I: UpdateScheduledCallbackToCanceledReq,
      O: UpdateScheduledCallbackToCanceledRes,
      kind: MethodKind.Unary,
    },
    /**
     * Skills that are a matching subset of the ones provided in the request.
     * If a callback is found the status of the callback is set to OPEN.
     * Required permissions:
     *   NONE
     * Errors:
     *   - grpc.Invalid: the service_id provided in the request is invalid.
     *   - grpc.NotFound: no matching service_id is found.
     *                    callback is not found after updating the status of it to OPEN (shouldn't happen).
     *
     * @generated from rpc api.v0alpha.CBS.GetNextScheduledCallbackWithDetails
     */
    getNextScheduledCallbackWithDetails: {
      name: "GetNextScheduledCallbackWithDetails",
      I: GetNextScheduledCallbackWithDetailsReq,
      O: GetNextScheduledCallbackWithDetailsRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.CBS.UpdateScheduledCallbackToClosed
     */
    updateScheduledCallbackToClosed: {
      name: "UpdateScheduledCallbackToClosed",
      I: UpdateScheduledCallbackToClosedReq,
      O: UpdateScheduledCallbackToClosedRes,
      kind: MethodKind.Unary,
    },
    /**
     * Updates a callback with the provided info, and replaces the details with the ones provided.
     *
     * @generated from rpc api.v0alpha.CBS.UpdateScheduledCallback
     */
    updateScheduledCallback: {
      name: "UpdateScheduledCallback",
      I: UpdateScheduledCallbackReq,
      O: UpdateScheduledCallbackRes,
      kind: MethodKind.Unary,
    },
    /**
     * Gets a scheduled callback's info and it's details for the given scheduled_callback_id.
     *
     * @generated from rpc api.v0alpha.CBS.GetScheduledCallbackWithDetails
     */
    getScheduledCallbackWithDetails: {
      name: "GetScheduledCallbackWithDetails",
      I: GetScheduledCallbackWithDetailsReq,
      O: GetScheduledCallbackWithDetailsRes,
      kind: MethodKind.Unary,
    },
    /**
     * Lists callbacks by phone number, caller id, or time range
     *
     * @generated from rpc api.v0alpha.CBS.ListScheduledCallbacksWithDetails
     */
    listScheduledCallbacksWithDetails: {
      name: "ListScheduledCallbacksWithDetails",
      I: ListScheduledCallbacksWithDetailsReq,
      O: ListScheduledCallbacksWithDetailsRes,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * List callbacks by skills
     *
     * @generated from rpc api.v0alpha.CBS.ListScheduledCallbacksWithDetailsBySkills
     */
    listScheduledCallbacksWithDetailsBySkills: {
      name: "ListScheduledCallbacksWithDetailsBySkills",
      I: ListScheduledCallbacksWithDetailsBySkillsReq,
      O: ListScheduledCallbacksWithDetailsRes,
      kind: MethodKind.Unary,
    },
  }
};

