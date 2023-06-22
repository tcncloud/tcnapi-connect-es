// @generated by protoc-gen-connect-es v0.10.1
// @generated from file api/v1alpha1/insights/service.proto (package api.v1alpha1.insights, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateInsightRequest, CreateInsightResponse, DeleteInsightRequest, DeleteInsightResponse, GetInsightRequest, GetInsightResponse, GetVfsSchemaRequest, GetVfsSchemaResponse, ListInsightsRequest, ListInsightsResponse, ListVfsesRequest, ListVfsesResponse, UpdateInsightRequest, UpdateInsightResponse } from "./insight_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1alpha1.insights.Insights
 */
export declare const Insights: {
  readonly typeName: "api.v1alpha1.insights.Insights",
  readonly methods: {
    /**
     * CreateInsight creates a new insight
     *
     * @generated from rpc api.v1alpha1.insights.Insights.CreateInsight
     */
    readonly createInsight: {
      readonly name: "CreateInsight",
      readonly I: typeof CreateInsightRequest,
      readonly O: typeof CreateInsightResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListInsights lists insights
     *
     * @generated from rpc api.v1alpha1.insights.Insights.ListInsights
     */
    readonly listInsights: {
      readonly name: "ListInsights",
      readonly I: typeof ListInsightsRequest,
      readonly O: typeof ListInsightsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateInsight updates an existing insight
     *
     * @generated from rpc api.v1alpha1.insights.Insights.UpdateInsight
     */
    readonly updateInsight: {
      readonly name: "UpdateInsight",
      readonly I: typeof UpdateInsightRequest,
      readonly O: typeof UpdateInsightResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * DeleteInsight deletes a insight
     *
     * @generated from rpc api.v1alpha1.insights.Insights.DeleteInsight
     */
    readonly deleteInsight: {
      readonly name: "DeleteInsight",
      readonly I: typeof DeleteInsightRequest,
      readonly O: typeof DeleteInsightResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetInsight gets a insight by id
     *
     * @generated from rpc api.v1alpha1.insights.Insights.GetInsight
     */
    readonly getInsight: {
      readonly name: "GetInsight",
      readonly I: typeof GetInsightRequest,
      readonly O: typeof GetInsightResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * CreateCommonsInsight creates a common library insight
     *
     * @generated from rpc api.v1alpha1.insights.Insights.CreateCommonsInsight
     */
    readonly createCommonsInsight: {
      readonly name: "CreateCommonsInsight",
      readonly I: typeof CreateInsightRequest,
      readonly O: typeof CreateInsightResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateCommonsInsight updates a common library insight
     *
     * @generated from rpc api.v1alpha1.insights.Insights.UpdateCommonsInsight
     */
    readonly updateCommonsInsight: {
      readonly name: "UpdateCommonsInsight",
      readonly I: typeof UpdateInsightRequest,
      readonly O: typeof UpdateInsightResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * DeleteCommonsInsight deletes a common library insight
     *
     * @generated from rpc api.v1alpha1.insights.Insights.DeleteCommonsInsight
     */
    readonly deleteCommonsInsight: {
      readonly name: "DeleteCommonsInsight",
      readonly I: typeof DeleteInsightRequest,
      readonly O: typeof DeleteInsightResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetVfsSchema gets schema for a vfs
     *
     * @generated from rpc api.v1alpha1.insights.Insights.GetVfsSchema
     */
    readonly getVfsSchema: {
      readonly name: "GetVfsSchema",
      readonly I: typeof GetVfsSchemaRequest,
      readonly O: typeof GetVfsSchemaResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListVfses lists exported vfs aliases
     *
     * @generated from rpc api.v1alpha1.insights.Insights.ListVfses
     */
    readonly listVfses: {
      readonly name: "ListVfses",
      readonly I: typeof ListVfsesRequest,
      readonly O: typeof ListVfsesResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

