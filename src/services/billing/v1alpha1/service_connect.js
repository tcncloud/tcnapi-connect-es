// @generated by protoc-gen-connect-es v0.13.0
// @generated from file services/billing/v1alpha1/service.proto (package services.billing.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateBillingPlanRequest, CreateBillingPlanResponse, DeleteBillingPlanRequest, DeleteBillingPlanResponse, GetActiveBillingPlanRequest, GetActiveBillingPlanResponse, GetBillingPlanRequest, GetBillingPlanResponse, GetDefaultBillingPlanRequest, GetDefaultBillingPlanResponse, ListBillingPlansRequest, ListBillingPlansResponse, UpdateBillingPlanRequest, UpdateBillingPlanResponse, UpdateDefaultBillingPlanRequest, UpdateDefaultBillingPlanResponse } from "./plans_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { CreateInvoiceRequest, CreateInvoiceResponse, DeleteInvoiceRequest, DeleteInvoiceResponse, GetInvoiceRequest, GetInvoiceResponse, ListInvoicesRequest, ListInvoicesResponse, UpdateInvoiceRequest, UpdateInvoiceResponse } from "./invoices_pb.js";

/**
 * @generated from service services.billing.v1alpha1.BillingService
 */
export const BillingService = {
  typeName: "services.billing.v1alpha1.BillingService",
  methods: {
    /**
     * Creates a billing plan for the ORG.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     * Errors:
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
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
     * Creates an invoice for the ORG for the specified billing cycle.
     *   - If an invoice already exists for the ORG for the specified billing cycle,
     *     the old one will be deleted first.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     * Errors:
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
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
     * Deletes an inactive billing plan. A billing plan is inactive if it hasn't started.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     * Errors:
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.NotFound: The specified billing plan doesn't exist.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
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
     * Deletes an invoice.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     * Errors:
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.NotFound: The specified invoice doesn't exist.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
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
     * Returns the active billing plan for the ORG. The active billing plan is a billing plan whose
     * start_time has passed and end_time has not passed. If multiple satisfy that requirement, the
     * newest one is considered active. If no plan is active, it indicates the org is currently using
     * only the system defaults.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     * Errors:
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.NotFound: The org does not have an active billing plan.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.GetActiveBillingPlan
     */
    getActiveBillingPlan: {
      name: "GetActiveBillingPlan",
      I: GetActiveBillingPlanRequest,
      O: GetActiveBillingPlanResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Returns the specified billing plan.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     * Errors:
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.NotFound: The specified billing plan doesn't exist.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
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
     * Returns the default billing plan for the REGION.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     * Errors:
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
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
     * Returns the specified invoice.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     * Errors:
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.NotFound: The specified invoice doesn't exist.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
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
     * Lists the billing plans for the ORG. This includes both active and inactive plans, but does not
     * include deleted plans.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     * Errors:
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.ListBillingPlans
     */
    listBillingPlans: {
      name: "ListBillingPlans",
      I: ListBillingPlansRequest,
      O: ListBillingPlansResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Lists the invoices for the ORG.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     * Errors:
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.ListInvoices
     */
    listInvoices: {
      name: "ListInvoices",
      I: ListInvoicesRequest,
      O: ListInvoicesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Updates an inactive billing plan. A billing plan is inactive if it hasn't started.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     * Errors:
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.NotFound: The specified billing plan doesn't exist.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
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
     * Updates the default billing plan for the REGION.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     * Errors:
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
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
     * Updates the specified invoice.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     * Errors:
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.NotFound: The specified invoice doesn't exist.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
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

