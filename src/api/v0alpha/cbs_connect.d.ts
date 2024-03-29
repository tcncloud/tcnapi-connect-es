// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v0alpha/cbs.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateCallbackWithDetailsReq, CreateCallbackWithDetailsRes, CreateServiceIdReq, CreateServiceIdRes, GetNextScheduledCallbackWithDetailsReq, GetNextScheduledCallbackWithDetailsRes, GetScheduledCallbackWithDetailsReq, GetScheduledCallbackWithDetailsRes, ListScheduledCallbacksWithDetailsBySkillsReq, ListScheduledCallbacksWithDetailsReq, ListScheduledCallbacksWithDetailsRes, UpdateScheduledCallbackReq, UpdateScheduledCallbackRes, UpdateScheduledCallbackToCanceledReq, UpdateScheduledCallbackToCanceledRes, UpdateScheduledCallbackToClosedReq, UpdateScheduledCallbackToClosedRes, UpdateScheduledCallbackToReadyReq, UpdateScheduledCallbackToReadyRes } from "./cbs_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v0alpha.CBS
 */
export declare const CBS: {
  readonly typeName: "api.v0alpha.CBS",
  readonly methods: {
    /**
     * @generated from rpc api.v0alpha.CBS.CreateServiceId
     */
    readonly createServiceId: {
      readonly name: "CreateServiceId",
      readonly I: typeof CreateServiceIdReq,
      readonly O: typeof CreateServiceIdRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.CBS.CreateCallbackWithDetails
     */
    readonly createCallbackWithDetails: {
      readonly name: "CreateCallbackWithDetails",
      readonly I: typeof CreateCallbackWithDetailsReq,
      readonly O: typeof CreateCallbackWithDetailsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.CBS.UpdateScheduledCallbackToReady
     */
    readonly updateScheduledCallbackToReady: {
      readonly name: "UpdateScheduledCallbackToReady",
      readonly I: typeof UpdateScheduledCallbackToReadyReq,
      readonly O: typeof UpdateScheduledCallbackToReadyRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.CBS.UpdateScheduledCallbackToCanceled
     */
    readonly updateScheduledCallbackToCanceled: {
      readonly name: "UpdateScheduledCallbackToCanceled",
      readonly I: typeof UpdateScheduledCallbackToCanceledReq,
      readonly O: typeof UpdateScheduledCallbackToCanceledRes,
      readonly kind: MethodKind.Unary,
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
    readonly getNextScheduledCallbackWithDetails: {
      readonly name: "GetNextScheduledCallbackWithDetails",
      readonly I: typeof GetNextScheduledCallbackWithDetailsReq,
      readonly O: typeof GetNextScheduledCallbackWithDetailsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.CBS.UpdateScheduledCallbackToClosed
     */
    readonly updateScheduledCallbackToClosed: {
      readonly name: "UpdateScheduledCallbackToClosed",
      readonly I: typeof UpdateScheduledCallbackToClosedReq,
      readonly O: typeof UpdateScheduledCallbackToClosedRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Updates a callback with the provided info, and replaces the details with the ones provided.
     *
     * @generated from rpc api.v0alpha.CBS.UpdateScheduledCallback
     */
    readonly updateScheduledCallback: {
      readonly name: "UpdateScheduledCallback",
      readonly I: typeof UpdateScheduledCallbackReq,
      readonly O: typeof UpdateScheduledCallbackRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Gets a scheduled callback's info and it's details for the given scheduled_callback_id.
     *
     * @generated from rpc api.v0alpha.CBS.GetScheduledCallbackWithDetails
     */
    readonly getScheduledCallbackWithDetails: {
      readonly name: "GetScheduledCallbackWithDetails",
      readonly I: typeof GetScheduledCallbackWithDetailsReq,
      readonly O: typeof GetScheduledCallbackWithDetailsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Lists callbacks by phone number, caller id, or time range
     *
     * @generated from rpc api.v0alpha.CBS.ListScheduledCallbacksWithDetails
     */
    readonly listScheduledCallbacksWithDetails: {
      readonly name: "ListScheduledCallbacksWithDetails",
      readonly I: typeof ListScheduledCallbacksWithDetailsReq,
      readonly O: typeof ListScheduledCallbacksWithDetailsRes,
      readonly kind: MethodKind.ServerStreaming,
    },
    /**
     * List callbacks by skills
     *
     * @generated from rpc api.v0alpha.CBS.ListScheduledCallbacksWithDetailsBySkills
     */
    readonly listScheduledCallbacksWithDetailsBySkills: {
      readonly name: "ListScheduledCallbacksWithDetailsBySkills",
      readonly I: typeof ListScheduledCallbacksWithDetailsBySkillsReq,
      readonly O: typeof ListScheduledCallbacksWithDetailsRes,
      readonly kind: MethodKind.Unary,
    },
  }
};

