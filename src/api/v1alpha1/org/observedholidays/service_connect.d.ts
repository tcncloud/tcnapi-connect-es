// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v1alpha1/org/observedholidays/service.proto (package api.v1alpha1.org.observedholidays, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AddToObservedHolidaysRequest, AddToObservedHolidaysResponse, DeleteObservedHolidaysRequest, DeleteObservedHolidaysResponse, EvaluateObservedHolidaysRequest, EvaluateObservedHolidaysResponse, GetObservedHolidaysRequest, GetObservedHolidaysResponse, ListObservedHolidaysRequest, ListObservedHolidaysResponse, RemoveFromObservedHolidaysRequest, RemoveFromObservedHolidaysResponse, SetObservedHolidaysRequest, SetObservedHolidaysResponse, UpdateObservedHolidaysInfoRequest, UpdateObservedHolidaysInfoResponse } from "./entities_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1alpha1.org.observedholidays.ObservedHolidaysService
 */
export declare const ObservedHolidaysService: {
  readonly typeName: "api.v1alpha1.org.observedholidays.ObservedHolidaysService",
  readonly methods: {
    /**
     * ListObservedHolidays returns all ObservedHolidays for an Org.
     *
     * @generated from rpc api.v1alpha1.org.observedholidays.ObservedHolidaysService.ListObservedHolidays
     */
    readonly listObservedHolidays: {
      readonly name: "ListObservedHolidays",
      readonly I: typeof ListObservedHolidaysRequest,
      readonly O: typeof ListObservedHolidaysResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetObservedHolidays returns the ObservedHolidays for the ID.
     *
     * @generated from rpc api.v1alpha1.org.observedholidays.ObservedHolidaysService.GetObservedHolidays
     */
    readonly getObservedHolidays: {
      readonly name: "GetObservedHolidays",
      readonly I: typeof GetObservedHolidaysRequest,
      readonly O: typeof GetObservedHolidaysResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * SetObservedHolidays creates a new ObservedHolidays for an Org.
     *
     * @generated from rpc api.v1alpha1.org.observedholidays.ObservedHolidaysService.SetObservedHolidays
     */
    readonly setObservedHolidays: {
      readonly name: "SetObservedHolidays",
      readonly I: typeof SetObservedHolidaysRequest,
      readonly O: typeof SetObservedHolidaysResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * AddToObservedHolidays adds a new ObservedHolidays for an Org.
     *
     * @generated from rpc api.v1alpha1.org.observedholidays.ObservedHolidaysService.AddToObservedHolidays
     */
    readonly addToObservedHolidays: {
      readonly name: "AddToObservedHolidays",
      readonly I: typeof AddToObservedHolidaysRequest,
      readonly O: typeof AddToObservedHolidaysResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * RemoveObservedHolidays removes an existing ObservedHolidays from an Org.
     *
     * @generated from rpc api.v1alpha1.org.observedholidays.ObservedHolidaysService.RemoveObservedHolidays
     */
    readonly removeObservedHolidays: {
      readonly name: "RemoveObservedHolidays",
      readonly I: typeof RemoveFromObservedHolidaysRequest,
      readonly O: typeof RemoveFromObservedHolidaysResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateObservedHolidaysInfo updates the general info for a specified ObservedHolidays.
     *
     * @generated from rpc api.v1alpha1.org.observedholidays.ObservedHolidaysService.UpdateObservedHolidaysInfo
     */
    readonly updateObservedHolidaysInfo: {
      readonly name: "UpdateObservedHolidaysInfo",
      readonly I: typeof UpdateObservedHolidaysInfoRequest,
      readonly O: typeof UpdateObservedHolidaysInfoResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * DeleteObservedHolidays deletes an existing ObservedHolidays.
     *
     * @generated from rpc api.v1alpha1.org.observedholidays.ObservedHolidaysService.DeleteObservedHolidays
     */
    readonly deleteObservedHolidays: {
      readonly name: "DeleteObservedHolidays",
      readonly I: typeof DeleteObservedHolidaysRequest,
      readonly O: typeof DeleteObservedHolidaysResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * EvaluateObservedHolidays evaluates the ObservedHolidays.
     *
     * @generated from rpc api.v1alpha1.org.observedholidays.ObservedHolidaysService.EvaluateObservedHolidays
     */
    readonly evaluateObservedHolidays: {
      readonly name: "EvaluateObservedHolidays",
      readonly I: typeof EvaluateObservedHolidaysRequest,
      readonly O: typeof EvaluateObservedHolidaysResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};
