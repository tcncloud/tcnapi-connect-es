// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v1alpha1/org/programmeddates/service.proto (package api.v1alpha1.org.programmeddates, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AddToProgrammedDatesRequest, AddToProgrammedDatesResponse, DeleteProgrammedDatesRequest, DeleteProgrammedDatesResponse, EvaluateProgrammedDatesRequest, EvaluateProgrammedDatesResponse, GetProgrammedDatesRequest, GetProgrammedDatesResponse, ListProgrammedDatesRequest, ListProgrammedDatesResponse, RemoveFromProgrammedDatesRequest, RemoveFromProgrammedDatesResponse, SetProgrammedDatesRequest, SetProgrammedDatesResponse, UpdateProgrammedDatesInfoRequest, UpdateProgrammedDatesInfoResponse } from "./entities_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1alpha1.org.programmeddates.ProgrammedDatesService
 */
export const ProgrammedDatesService = {
  typeName: "api.v1alpha1.org.programmeddates.ProgrammedDatesService",
  methods: {
    /**
     * ListProgrammedDates returns all ListProgrammedDates for an Org.
     *
     * @generated from rpc api.v1alpha1.org.programmeddates.ProgrammedDatesService.ListProgrammedDates
     */
    listProgrammedDates: {
      name: "ListProgrammedDates",
      I: ListProgrammedDatesRequest,
      O: ListProgrammedDatesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetProgrammedDates returns the programmed dates for the ID.
     *
     * @generated from rpc api.v1alpha1.org.programmeddates.ProgrammedDatesService.GetProgrammedDates
     */
    getProgrammedDates: {
      name: "GetProgrammedDates",
      I: GetProgrammedDatesRequest,
      O: GetProgrammedDatesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * SetProgrammedDates creates a new programmed dates for an Org.
     *
     * @generated from rpc api.v1alpha1.org.programmeddates.ProgrammedDatesService.SetProgrammedDates
     */
    setProgrammedDates: {
      name: "SetProgrammedDates",
      I: SetProgrammedDatesRequest,
      O: SetProgrammedDatesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * AddToProgrammedDates adds a new programmed day for an Org.
     *
     * @generated from rpc api.v1alpha1.org.programmeddates.ProgrammedDatesService.AddToProgrammedDates
     */
    addToProgrammedDates: {
      name: "AddToProgrammedDates",
      I: AddToProgrammedDatesRequest,
      O: AddToProgrammedDatesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * RemoveFromProgrammedDates removes an existing programmed day from an Org.
     *
     * @generated from rpc api.v1alpha1.org.programmeddates.ProgrammedDatesService.RemoveFromProgrammedDates
     */
    removeFromProgrammedDates: {
      name: "RemoveFromProgrammedDates",
      I: RemoveFromProgrammedDatesRequest,
      O: RemoveFromProgrammedDatesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateProgrammedDatesInfo updates the general info for a programmed date.
     *
     * @generated from rpc api.v1alpha1.org.programmeddates.ProgrammedDatesService.UpdateProgrammedDatesInfo
     */
    updateProgrammedDatesInfo: {
      name: "UpdateProgrammedDatesInfo",
      I: UpdateProgrammedDatesInfoRequest,
      O: UpdateProgrammedDatesInfoResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteProgrammedDates deletes an existing programmed date.
     *
     * @generated from rpc api.v1alpha1.org.programmeddates.ProgrammedDatesService.DeleteProgrammedDates
     */
    deleteProgrammedDates: {
      name: "DeleteProgrammedDates",
      I: DeleteProgrammedDatesRequest,
      O: DeleteProgrammedDatesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * EvaluateProgrammedDates evaluates the programmed date.
     *
     * @generated from rpc api.v1alpha1.org.programmeddates.ProgrammedDatesService.EvaluateProgrammedDates
     */
    evaluateProgrammedDates: {
      name: "EvaluateProgrammedDates",
      I: EvaluateProgrammedDatesRequest,
      O: EvaluateProgrammedDatesResponse,
      kind: MethodKind.Unary,
    },
  }
};

