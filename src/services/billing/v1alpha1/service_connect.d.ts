// @generated by protoc-gen-connect-es v0.13.0
// @generated from file services/billing/v1alpha1/service.proto (package services.billing.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CommitBillingPlanRequest, CommitBillingPlanResponse, CommitDefaultBillingPlanRequest, CommitDefaultBillingPlanResponse, CreateBillingPlanRequest, CreateBillingPlanResponse, CreateDefaultBillingPlanRequest, CreateDefaultBillingPlanResponse, DeleteBillingPlanRequest, DeleteBillingPlanResponse, DeleteDefaultBillingPlanRequest, DeleteDefaultBillingPlanResponse, DuplicateBillingPlanRequest, DuplicateBillingPlanResponse, DuplicateDefaultBillingPlanRequest, DuplicateDefaultBillingPlanResponse, GetActiveBillingPlanRequest, GetActiveBillingPlanResponse, GetBillingPlanHistoryRequest, GetBillingPlanHistoryResponse, GetBillingPlanRequest, GetBillingPlanResponse, ListBillingPlansRequest, ListBillingPlansResponse, UpdateBillingPlanRequest, UpdateBillingPlanResponse, UpdateDefaultBillingPlanRequest, UpdateDefaultBillingPlanResponse } from "./plans_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { CreateDefaultRateDefinitionRequest, CreateDefaultRateDefinitionResponse, CreateRateDefinitionRequest, CreateRateDefinitionResponse, DeleteDefaultRateDefinitionRequest, DeleteDefaultRateDefinitionResponse, DeleteRateDefinitionRequest, DeleteRateDefinitionResponse, GetRateDefinitionRequest, GetRateDefinitionResponse, ListRateDefinitionsRequest, ListRateDefinitionsResponse, UpdateDefaultRateDefinitionRequest, UpdateDefaultRateDefinitionResponse, UpdateRateDefinitionRequest, UpdateRateDefinitionResponse } from "./rates_pb.js";
import { CreateInvoiceRequest, CreateInvoiceResponse, DeleteInvoiceRequest, DeleteInvoiceResponse, ExportInvoiceRequest, ExportInvoiceResponse, GetInvoiceRequest, GetInvoiceResponse, ListInvoicesRequest, ListInvoicesResponse, UpdateInvoiceRequest, UpdateInvoiceResponse } from "./invoices_pb.js";

/**
 * @generated from service services.billing.v1alpha1.BillingService
 */
export declare const BillingService: {
  readonly typeName: "services.billing.v1alpha1.BillingService",
  readonly methods: {
    /**
     * Commits a billing plan for the ORG, finalizing it's creation and allowing it
     * to become active.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     * Errors:
     *   - grpc.FailedPrecondition: The billing plan is already committed.
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.NotFound: The specified billing plan doesn't exist.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.CommitBillingPlan
     * @deprecated
     */
    readonly commitBillingPlan: {
      readonly name: "CommitBillingPlan",
      readonly I: typeof CommitBillingPlanRequest,
      readonly O: typeof CommitBillingPlanResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Commits a default billing plan for the REGION, finalizing it's creation and allowing it
     * to become active.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     *   TCN_BILLING_ADMIN
     * Errors:
     *   - grpc.FailedPrecondition: The default billing plan is already committed.
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.NotFound: The specified default billing plan doesn't exist.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.CommitDefaultBillingPlan
     * @deprecated
     */
    readonly commitDefaultBillingPlan: {
      readonly name: "CommitDefaultBillingPlan",
      readonly I: typeof CommitDefaultBillingPlanRequest,
      readonly O: typeof CommitDefaultBillingPlanResponse,
      readonly kind: MethodKind.Unary,
    },
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
     * @deprecated
     */
    readonly createBillingPlan: {
      readonly name: "CreateBillingPlan",
      readonly I: typeof CreateBillingPlanRequest,
      readonly O: typeof CreateBillingPlanResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Creates the default billing plan for the REGION.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     *   TCN_BILLING_ADMIN
     * Errors:
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.CreateDefaultBillingPlan
     * @deprecated
     */
    readonly createDefaultBillingPlan: {
      readonly name: "CreateDefaultBillingPlan",
      readonly I: typeof CreateDefaultBillingPlanRequest,
      readonly O: typeof CreateDefaultBillingPlanResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Creates a default rate definition for a default billing plan for the REGION.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     *   TCN_BILLING_ADMIN
     * Errors:
     *   - grpc.AlreadyExists: A rate definition with the same feature already exists.
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.NotFound: The default billing plan doesn't exist.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.CreateDefaultRateDefinition
     */
    readonly createDefaultRateDefinition: {
      readonly name: "CreateDefaultRateDefinition",
      readonly I: typeof CreateDefaultRateDefinitionRequest,
      readonly O: typeof CreateDefaultRateDefinitionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Creates an invoice for the ORG for the specified billing cycle.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     * Errors:
     *   - grpc.AlreadyExists: An invoice already exists for the specified billing cycle.
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.CreateInvoice
     * @deprecated
     */
    readonly createInvoice: {
      readonly name: "CreateInvoice",
      readonly I: typeof CreateInvoiceRequest,
      readonly O: typeof CreateInvoiceResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Creates a rate definition for a Billing Plan in an ORG.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     * Errors:
     *   - grpc.AlreadyExists: A rate definition with the same feature id already exists.
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.NotFound: The specified billing plan or rate definition group doesn't exist.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.CreateRateDefinition
     */
    readonly createRateDefinition: {
      readonly name: "CreateRateDefinition",
      readonly I: typeof CreateRateDefinitionRequest,
      readonly O: typeof CreateRateDefinitionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Deletes an inactive billing plan. A billing plan is inactive if it hasn't started.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     * Errors:
     *   - grpc.FailedPrecondition: The billing plan is active.
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.NotFound: The specified billing plan doesn't exist.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.DeleteBillingPlan
     * @deprecated
     */
    readonly deleteBillingPlan: {
      readonly name: "DeleteBillingPlan",
      readonly I: typeof DeleteBillingPlanRequest,
      readonly O: typeof DeleteBillingPlanResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Deletes an inactive default billing plan for the REGION. A billing plan is inactive
     * if it hasn't started.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     *   TCN_BILLING_ADMIN
     * Errors:
     *   - grpc.FailedPrecondition: The billing plan is active.
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.NotFound: The default billing plan doesn't exist.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.DeleteDefaultBillingPlan
     * @deprecated
     */
    readonly deleteDefaultBillingPlan: {
      readonly name: "DeleteDefaultBillingPlan",
      readonly I: typeof DeleteDefaultBillingPlanRequest,
      readonly O: typeof DeleteDefaultBillingPlanResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Deletes a rate definition from the default billing plan for the REGION.
     *   - The default billing plan must be inactive.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     *   TCN_BILLING_ADMIN
     * Errors:
     *   - grpc.FailedPrecondition: The billing plan is active.
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.NotFound: The rate definition doesn't exist.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.DeleteDefaultRateDefinition
     */
    readonly deleteDefaultRateDefinition: {
      readonly name: "DeleteDefaultRateDefinition",
      readonly I: typeof DeleteDefaultRateDefinitionRequest,
      readonly O: typeof DeleteDefaultRateDefinitionResponse,
      readonly kind: MethodKind.Unary,
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
     * @deprecated
     */
    readonly deleteInvoice: {
      readonly name: "DeleteInvoice",
      readonly I: typeof DeleteInvoiceRequest,
      readonly O: typeof DeleteInvoiceResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Deletes a rate definition from a Billing Plan in an ORG.
     *   - The billing plan must be inactive.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     * Errors:
     *   - grpc.FailedPrecondition: The billing plan is active.
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.NotFound: The specified billing plan or rate definition group doesn't exist.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.DeleteRateDefinition
     */
    readonly deleteRateDefinition: {
      readonly name: "DeleteRateDefinition",
      readonly I: typeof DeleteRateDefinitionRequest,
      readonly O: typeof DeleteRateDefinitionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Duplicates a billing plan. This copies the billing plan and all of its rate definitions.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     * Errors:
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.NotFound: The specified billing plan doesn't exist.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.DuplicateBillingPlan
     * @deprecated
     */
    readonly duplicateBillingPlan: {
      readonly name: "DuplicateBillingPlan",
      readonly I: typeof DuplicateBillingPlanRequest,
      readonly O: typeof DuplicateBillingPlanResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Duplicates a default billing plan. This copies the billing plan, all of its rate definitions,
     * and all of its rate definition groups and features.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     *   TCN_BILLING_ADMIN
     * Errors:
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.NotFound: The specified billing plan doesn't exist.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.DuplicateDefaultBillingPlan
     * @deprecated
     */
    readonly duplicateDefaultBillingPlan: {
      readonly name: "DuplicateDefaultBillingPlan",
      readonly I: typeof DuplicateDefaultBillingPlanRequest,
      readonly O: typeof DuplicateDefaultBillingPlanResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Exports an invoice.
     * Required permissions:
     *   TCN_BILLING_ADMIN
     * Errors:
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.ExportInvoice
     */
    readonly exportInvoice: {
      readonly name: "ExportInvoice",
      readonly I: typeof ExportInvoiceRequest,
      readonly O: typeof ExportInvoiceResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Returns the active billing plan for the ORG or REGION. The active billing plan is a billing plan
     * whose start_time has passed and end_time has not passed. If multiple satisfy that requirement, the
     * newest one is considered active. If no plan is active, it indicates the ORG is using REGION defaults,
     * or that the REGION has not been set up for billing yet.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     * Errors:
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.NotFound: There isn't an active billing plan.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.GetActiveBillingPlan
     * @deprecated
     */
    readonly getActiveBillingPlan: {
      readonly name: "GetActiveBillingPlan",
      readonly I: typeof GetActiveBillingPlanRequest,
      readonly O: typeof GetActiveBillingPlanResponse,
      readonly kind: MethodKind.Unary,
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
     * @deprecated
     */
    readonly getBillingPlan: {
      readonly name: "GetBillingPlan",
      readonly I: typeof GetBillingPlanRequest,
      readonly O: typeof GetBillingPlanResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Returns the billing plan history for the ORG or REGION.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     * Errors:
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.GetBillingPlanHistory
     * @deprecated
     */
    readonly getBillingPlanHistory: {
      readonly name: "GetBillingPlanHistory",
      readonly I: typeof GetBillingPlanHistoryRequest,
      readonly O: typeof GetBillingPlanHistoryResponse,
      readonly kind: MethodKind.Unary,
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
     * @deprecated
     */
    readonly getInvoice: {
      readonly name: "GetInvoice",
      readonly I: typeof GetInvoiceRequest,
      readonly O: typeof GetInvoiceResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Returns the specified rate definition.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     * Errors:
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.NotFound: The specified rate definition doesn't exist.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.GetRateDefinition
     */
    readonly getRateDefinition: {
      readonly name: "GetRateDefinition",
      readonly I: typeof GetRateDefinitionRequest,
      readonly O: typeof GetRateDefinitionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Lists billing plans.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     * Errors:
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.ListBillingPlans
     * @deprecated
     */
    readonly listBillingPlans: {
      readonly name: "ListBillingPlans",
      readonly I: typeof ListBillingPlansRequest,
      readonly O: typeof ListBillingPlansResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Lists invoices.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     * Errors:
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.ListInvoices
     * @deprecated
     */
    readonly listInvoices: {
      readonly name: "ListInvoices",
      readonly I: typeof ListInvoicesRequest,
      readonly O: typeof ListInvoicesResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Lists rate definitions.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     * Errors:
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.ListRateDefinitions
     */
    readonly listRateDefinitions: {
      readonly name: "ListRateDefinitions",
      readonly I: typeof ListRateDefinitionsRequest,
      readonly O: typeof ListRateDefinitionsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Updates an inactive billing plan. A billing plan is inactive if it hasn't started.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     * Errors:
     *   - grpc.FailedPrecondition: The billing plan is active.
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.NotFound: The specified billing plan doesn't exist.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.UpdateBillingPlan
     * @deprecated
     */
    readonly updateBillingPlan: {
      readonly name: "UpdateBillingPlan",
      readonly I: typeof UpdateBillingPlanRequest,
      readonly O: typeof UpdateBillingPlanResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Updates an inactive default billing plan for the REGION. A billing plan is inactive
     * if it hasn't started.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     *   TCN_BILLING_ADMIN
     * Errors:
     *   - grpc.FailedPrecondition: The billing plan is active.
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable. Likely a transient issue with a downstream service.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.UpdateDefaultBillingPlan
     * @deprecated
     */
    readonly updateDefaultBillingPlan: {
      readonly name: "UpdateDefaultBillingPlan",
      readonly I: typeof UpdateDefaultBillingPlanRequest,
      readonly O: typeof UpdateDefaultBillingPlanResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Updates a default rate definition.
     *   - The billing plan must be inactive.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     * Errors:
     *   - grpc.FailedPrecondition: The billing plan is active.
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.NotFound: The specified rate definition doesn't exist.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.UpdateDefaultRateDefinition
     */
    readonly updateDefaultRateDefinition: {
      readonly name: "UpdateDefaultRateDefinition",
      readonly I: typeof UpdateDefaultRateDefinitionRequest,
      readonly O: typeof UpdateDefaultRateDefinitionResponse,
      readonly kind: MethodKind.Unary,
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
     * @deprecated
     */
    readonly updateInvoice: {
      readonly name: "UpdateInvoice",
      readonly I: typeof UpdateInvoiceRequest,
      readonly O: typeof UpdateInvoiceResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Updates a rate definition.
     *   - The billing plan must be inactive.
     * Required permissions:
     *   CUSTOMER_SUPPORT
     * Errors:
     *   - grpc.FailedPrecondition: The billing plan is active.
     *   - grpc.Internal: An internal error occurred.
     *   - grpc.InvalidArgument: The request is invalid.
     *   - grpc.NotFound: The specified rate definition doesn't exist.
     *   - grpc.PermissionDenied: Caller doesn't have the required permissions.
     *   - grpc.Unavailable: The operation is currently unavailable.
     *
     * @generated from rpc services.billing.v1alpha1.BillingService.UpdateRateDefinition
     */
    readonly updateRateDefinition: {
      readonly name: "UpdateRateDefinition",
      readonly I: typeof UpdateRateDefinitionRequest,
      readonly O: typeof UpdateRateDefinitionResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

