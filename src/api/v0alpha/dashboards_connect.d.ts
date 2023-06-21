// @generated by protoc-gen-connect-es v0.10.0
// @generated from file api/v0alpha/dashboards.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateDashboardRequest, CreateDashboardResponse, Dashboard, DeleteDashboardRequest, GetDashboardRequest, GetDefaultDashboardRequest, ListDashboardsRequest, ListDashboardsResponse, ListProductTypesRequest, ListProductTypesResult, SetDefaultDashboardRequest, UpdateDashboardLayoutRequest, UpdateDashboardRequest, UpdateDashboardTitleAndDescriptionRequest, UpdateDashboardViewRequest } from "./dashboards_pb.js";
import { Empty, MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v0alpha.Dashboards
 */
export declare const Dashboards: {
  readonly typeName: "api.v0alpha.Dashboards",
  readonly methods: {
    /**
     * CreateDashboard creates a dashboard and associated panels
     *
     * @generated from rpc api.v0alpha.Dashboards.CreateDashboard
     */
    readonly createDashboard: {
      readonly name: "CreateDashboard",
      readonly I: typeof CreateDashboardRequest,
      readonly O: typeof CreateDashboardResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetDashboard retrieves a dashboard by the given ID and orgID and fetches its associated panels
     *
     * @generated from rpc api.v0alpha.Dashboards.GetDashboard
     */
    readonly getDashboard: {
      readonly name: "GetDashboard",
      readonly I: typeof GetDashboardRequest,
      readonly O: typeof Dashboard,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Dashboards.GetDefaultDashboard
     */
    readonly getDefaultDashboard: {
      readonly name: "GetDefaultDashboard",
      readonly I: typeof GetDefaultDashboardRequest,
      readonly O: typeof Dashboard,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListDashboards retrieves all dashboard summaries for the given organization
     *
     * @generated from rpc api.v0alpha.Dashboards.ListDashboards
     */
    readonly listDashboards: {
      readonly name: "ListDashboards",
      readonly I: typeof ListDashboardsRequest,
      readonly O: typeof ListDashboardsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Dashboards.ListProductTypes
     */
    readonly listProductTypes: {
      readonly name: "ListProductTypes",
      readonly I: typeof ListProductTypesRequest,
      readonly O: typeof ListProductTypesResult,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Deletes a given dashboard
     *
     * @generated from rpc api.v0alpha.Dashboards.DeleteDashboard
     */
    readonly deleteDashboard: {
      readonly name: "DeleteDashboard",
      readonly I: typeof DeleteDashboardRequest,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Sets a dashboard as the user's default
     *
     * @generated from rpc api.v0alpha.Dashboards.SetDefaultDashboard
     */
    readonly setDefaultDashboard: {
      readonly name: "SetDefaultDashboard",
      readonly I: typeof SetDefaultDashboardRequest,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateDashboard updates a dashboard
     *
     * @generated from rpc api.v0alpha.Dashboards.UpdateDashboard
     */
    readonly updateDashboard: {
      readonly name: "UpdateDashboard",
      readonly I: typeof UpdateDashboardRequest,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateDashboardTitleAndDescription updates a dashboards title and description
     *
     * @generated from rpc api.v0alpha.Dashboards.UpdateDashboardTitleAndDescription
     */
    readonly updateDashboardTitleAndDescription: {
      readonly name: "UpdateDashboardTitleAndDescription",
      readonly I: typeof UpdateDashboardTitleAndDescriptionRequest,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateDashboardView updates a dashboards view with the given view
     *
     * @generated from rpc api.v0alpha.Dashboards.UpdateDashboardView
     */
    readonly updateDashboardView: {
      readonly name: "UpdateDashboardView",
      readonly I: typeof UpdateDashboardViewRequest,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateDashboardLayout replaces a dashboards layout with a given layout
     *
     * @generated from rpc api.v0alpha.Dashboards.UpdateDashboardLayout
     */
    readonly updateDashboardLayout: {
      readonly name: "UpdateDashboardLayout",
      readonly I: typeof UpdateDashboardLayoutRequest,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
  }
};

