// @generated by protoc-gen-connect-es v0.13.0
// @generated from file services/billing/v1alpha1/service.proto (package services.billing.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateBillingPlanRequest, CreateBillingPlanResponse, DeleteBillingPlanRequest, DeleteBillingPlanResponse, GetBillingPlanRequest, GetBillingPlanResponse, GetDefaultBillingPlanRequest, GetDefaultBillingPlanResponse, ListBillingPlansRequest, ListBillingPlansResponse, UpdateBillingPlanRequest, UpdateBillingPlanResponse, UpdateDefaultBillingPlanRequest, UpdateDefaultBillingPlanResponse } from "./plans_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { CreateInvoiceRequest, CreateInvoiceResponse, DeleteInvoiceRequest, DeleteInvoiceResponse, GetInvoiceRequest, GetInvoiceResponse, ListInvoicesRequest, ListInvoicesResponse, UpdateInvoiceRequest, UpdateInvoiceResponse } from "./invoices_pb.js";

/**
 * BillingService handles billing requests.
 *
 * @generated from service services.billing.v1alpha1.BillingService
 */
export const BillingService = {
  typeName: "services.billing.v1alpha1.BillingService",
  methods: {
    /**
     * CreateBillingPlan creates a new billing plan for an organization.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.CreateBillingPlan
     */
    createBillingPlan: {
      name: "CreateBillingPlan",
      I: CreateBillingPlanRequest,
      O: CreateBillingPlanResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateInvoice creates a new invoice for an organization for the specified
     * billing cycle. If one already exists, the old one will be deleted first.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.CreateInvoice
     */
    createInvoice: {
      name: "CreateInvoice",
      I: CreateInvoiceRequest,
      O: CreateInvoiceResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteBillingPlan deletes the specified inactive billing plan. This will fail
     * if the billing plan is in use, or already deleted.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.DeleteBillingPlan
     */
    deleteBillingPlan: {
      name: "DeleteBillingPlan",
      I: DeleteBillingPlanRequest,
      O: DeleteBillingPlanResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteInvoice deletes the specified invoice.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.DeleteInvoice
     */
    deleteInvoice: {
      name: "DeleteInvoice",
      I: DeleteInvoiceRequest,
      O: DeleteInvoiceResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetBillingPlan returns the active billing plan for the organization.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.GetBillingPlan
     */
    getBillingPlan: {
      name: "GetBillingPlan",
      I: GetBillingPlanRequest,
      O: GetBillingPlanResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetDefaultBillingPlan returns the default billing plan for the region.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.GetDefaultBillingPlan
     */
    getDefaultBillingPlan: {
      name: "GetDefaultBillingPlan",
      I: GetDefaultBillingPlanRequest,
      O: GetDefaultBillingPlanResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetInvoice returns the specified invoice.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.GetInvoice
     */
    getInvoice: {
      name: "GetInvoice",
      I: GetInvoiceRequest,
      O: GetInvoiceResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListBillingPlans returns the specified list of billing plans.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.ListBillingPlans
     */
    listBillingPlans: {
      name: "ListBillingPlans",
      I: ListBillingPlansRequest,
      O: ListBillingPlansResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * ListInvoices returns the specified list of invoices.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.ListInvoices
     */
    listInvoices: {
      name: "ListInvoices",
      I: ListInvoicesRequest,
      O: ListInvoicesResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * UpdateBillingPlan updates the specified billing plan.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.UpdateBillingPlan
     */
    updateBillingPlan: {
      name: "UpdateBillingPlan",
      I: UpdateBillingPlanRequest,
      O: UpdateBillingPlanResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateDefaultBillingPlan updates the default billing plan.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.UpdateDefaultBillingPlan
     */
    updateDefaultBillingPlan: {
      name: "UpdateDefaultBillingPlan",
      I: UpdateDefaultBillingPlanRequest,
      O: UpdateDefaultBillingPlanResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateInvoice updates the specified invoice.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.UpdateInvoice
     */
    updateInvoice: {
      name: "UpdateInvoice",
      I: UpdateInvoiceRequest,
      O: UpdateInvoiceResponse,
      kind: MethodKind.Unary,
    },
  }
};
