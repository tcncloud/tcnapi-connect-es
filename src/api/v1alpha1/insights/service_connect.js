// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v1alpha1/insights/service.proto (package api.v1alpha1.insights, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateInsightRequest, CreateInsightResponse, DeleteInsightRequest, DeleteInsightResponse, GetInsightRequest, GetInsightResponse, GetVfsSchemaRequest, GetVfsSchemaResponse, ListInsightsRequest, ListInsightsResponse, ListVfsesRequest, ListVfsesResponse, PublishInsightRequest, PublishInsightResponse, UpdateInsightRequest, UpdateInsightResponse } from "./insight_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1alpha1.insights.Insights
 */
export const Insights = {
  typeName: "api.v1alpha1.insights.Insights",
  methods: {
    /**
     * CreateInsight creates a new insight
     *
     * @generated from rpc api.v1alpha1.insights.Insights.CreateInsight
     */
    createInsight: {
      name: "CreateInsight",
      I: CreateInsightRequest,
      O: CreateInsightResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListInsights lists insights
     *
     * @generated from rpc api.v1alpha1.insights.Insights.ListInsights
     */
    listInsights: {
      name: "ListInsights",
      I: ListInsightsRequest,
      O: ListInsightsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateInsight updates an existing insight
     *
     * @generated from rpc api.v1alpha1.insights.Insights.UpdateInsight
     */
    updateInsight: {
      name: "UpdateInsight",
      I: UpdateInsightRequest,
      O: UpdateInsightResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteInsight deletes a insight
     *
     * @generated from rpc api.v1alpha1.insights.Insights.DeleteInsight
     */
    deleteInsight: {
      name: "DeleteInsight",
      I: DeleteInsightRequest,
      O: DeleteInsightResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetInsight gets a insight by id
     *
     * @generated from rpc api.v1alpha1.insights.Insights.GetInsight
     */
    getInsight: {
      name: "GetInsight",
      I: GetInsightRequest,
      O: GetInsightResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateCommonsInsight is deprecated.
     *
     * @generated from rpc api.v1alpha1.insights.Insights.CreateCommonsInsight
     */
    createCommonsInsight: {
      name: "CreateCommonsInsight",
      I: CreateInsightRequest,
      O: CreateInsightResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateCommonsInsight is deprecated.
     *
     * @generated from rpc api.v1alpha1.insights.Insights.UpdateCommonsInsight
     */
    updateCommonsInsight: {
      name: "UpdateCommonsInsight",
      I: UpdateInsightRequest,
      O: UpdateInsightResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteCommonsInsight is deprecated.
     *
     * @generated from rpc api.v1alpha1.insights.Insights.DeleteCommonsInsight
     */
    deleteCommonsInsight: {
      name: "DeleteCommonsInsight",
      I: DeleteInsightRequest,
      O: DeleteInsightResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetVfsSchema gets schema for a vfs
     *
     * @generated from rpc api.v1alpha1.insights.Insights.GetVfsSchema
     */
    getVfsSchema: {
      name: "GetVfsSchema",
      I: GetVfsSchemaRequest,
      O: GetVfsSchemaResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListVfses lists exported vfs aliases
     *
     * @generated from rpc api.v1alpha1.insights.Insights.ListVfses
     */
    listVfses: {
      name: "ListVfses",
      I: ListVfsesRequest,
      O: ListVfsesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * PublishInsight publishes an insight
     *
     * @generated from rpc api.v1alpha1.insights.Insights.PublishInsight
     */
    publishInsight: {
      name: "PublishInsight",
      I: PublishInsightRequest,
      O: PublishInsightResponse,
      kind: MethodKind.Unary,
    },
  }
};

