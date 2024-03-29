// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v0alpha/ana.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AnaAccount, BillingSummary, CopyDashVizReq, CopyDashVizRes, DataVisibility, Family, GenerateMonthlyBillingReq, GenerateMonthlyBillingRes, GenerateVizDataByIdReq, GenerateVizDataByIdRes, GetAccessibleClientsReq, GetAccountReq, GetAuthorizedAnalyticsLinkReq, GetAuthorizedAnalyticsLinkRes, GetBillingSummaryReq, GetClientStatusReq, GetClientStatusResp, GetFamilyReq, GetOrganizationNamesReq, GetOrganizationNamesRes, GetSpecifiedAccountReq, GetSpecifiedBillingSummaryReq, GetSpecifiedVisualizationsReq, GetTimeZoneReq, GetVisibilityReq, IndicesVisibility, ListVisualizationsLegacyReq, ListVisualizationsLegacyRes, MakeAdoptableReq, MakeAdoptableRes, RegisterAccountReq, ReloadClientDataReq, ReloadClientDataResp, SetAnaAccountRelationReq, SetAnaAccountRelationRes, SetCustomReportsEnabledReq, SetCustomReportsEnabledRes, SetDefaultDashboardReq, SetDefaultDashboardRes, SetDefaultTimeFilterReq, SetDefaultTimeFilterRes, SetTimeZoneReq, SetTimeZoneRes, SetWeeksReq, SetWeeksRes, SimpleRelations, TimeZone, Visualizations } from "./ana_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v0alpha.Ana
 */
export declare const Ana: {
  readonly typeName: "api.v0alpha.Ana",
  readonly methods: {
    /**
     * gets all visualizations for a specific client
     *
     * @generated from rpc api.v0alpha.Ana.GetSpecifiedVisualizations
     */
    readonly getSpecifiedVisualizations: {
      readonly name: "GetSpecifiedVisualizations",
      readonly I: typeof GetSpecifiedVisualizationsReq,
      readonly O: typeof Visualizations,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Registers a new AnaAccoun based on org_id
     * The method will return the newly create AnaAccount
     * on the response message AnaAccount.
     * Required Permissions:
     *  EDIT_ADMIN_CLIENT_PREFERENCES
     *
     * @generated from rpc api.v0alpha.Ana.RegisterAccount
     */
    readonly registerAccount: {
      readonly name: "RegisterAccount",
      readonly I: typeof RegisterAccountReq,
      readonly O: typeof AnaAccount,
      readonly kind: MethodKind.Unary,
    },
    /**
     * sets the length of analytics history the client can view
     *
     * @generated from rpc api.v0alpha.Ana.SetWeeks
     */
    readonly setWeeks: {
      readonly name: "SetWeeks",
      readonly I: typeof SetWeeksReq,
      readonly O: typeof SetWeeksRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * set default time filter for given ana account
     * org.Permission_EDIT_CLIENT_PREFERENCES
     *
     * @generated from rpc api.v0alpha.Ana.SetDefaultTimeFilter
     */
    readonly setDefaultTimeFilter: {
      readonly name: "SetDefaultTimeFilter",
      readonly I: typeof SetDefaultTimeFilterReq,
      readonly O: typeof SetDefaultTimeFilterRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * sets the dashboard that is shown by default for neo
     * org.Permission_EDIT_CLIENT_PREFERENCES
     *
     * @generated from rpc api.v0alpha.Ana.SetDefaultDashboard
     */
    readonly setDefaultDashboard: {
      readonly name: "SetDefaultDashboard",
      readonly I: typeof SetDefaultDashboardReq,
      readonly O: typeof SetDefaultDashboardRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * gets account details for the client
     * org.Permission_VIEW_REPORTS
     *
     * @generated from rpc api.v0alpha.Ana.GetAccount
     */
    readonly getAccount: {
      readonly name: "GetAccount",
      readonly I: typeof GetAccountReq,
      readonly O: typeof AnaAccount,
      readonly kind: MethodKind.Unary,
    },
    /**
     * gets account details using the org_id provided
     *
     * @generated from rpc api.v0alpha.Ana.GetSpecifiedAccount
     */
    readonly getSpecifiedAccount: {
      readonly name: "GetSpecifiedAccount",
      readonly I: typeof GetSpecifiedAccountReq,
      readonly O: typeof AnaAccount,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Gets an authorized url for the clients BI analytics page
     *
     * @generated from rpc api.v0alpha.Ana.GetAuthorizedAnalyticsLink
     */
    readonly getAuthorizedAnalyticsLink: {
      readonly name: "GetAuthorizedAnalyticsLink",
      readonly I: typeof GetAuthorizedAnalyticsLinkReq,
      readonly O: typeof GetAuthorizedAnalyticsLinkRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * creates and returns a url to download billing for the month provided or the previous month if none is provided
     * org.Permission_VIEW_BILLING
     *
     * @generated from rpc api.v0alpha.Ana.GenerateMonthlyBilling
     */
    readonly generateMonthlyBilling: {
      readonly name: "GenerateMonthlyBilling",
      readonly I: typeof GenerateMonthlyBillingReq,
      readonly O: typeof GenerateMonthlyBillingRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * gets the ana_account timezone for the client
     * org.Permission_VIEW_REPORTS
     *
     * @generated from rpc api.v0alpha.Ana.GetTimeZone
     */
    readonly getTimeZone: {
      readonly name: "GetTimeZone",
      readonly I: typeof GetTimeZoneReq,
      readonly O: typeof TimeZone,
      readonly kind: MethodKind.Unary,
    },
    /**
     * updates the timezone for the account
     * org.Permission_VIEW_REPORTS
     *
     * @generated from rpc api.v0alpha.Ana.SetTimeZone
     */
    readonly setTimeZone: {
      readonly name: "SetTimeZone",
      readonly I: typeof SetTimeZoneReq,
      readonly O: typeof SetTimeZoneRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * copies the reports (dashboards legacy and visualizations legacy)
     * corresponding with the ids provided
     *
     * @generated from rpc api.v0alpha.Ana.CopyDashViz
     */
    readonly copyDashViz: {
      readonly name: "CopyDashViz",
      readonly I: typeof CopyDashVizReq,
      readonly O: typeof CopyDashVizRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * returns a summary of all billing factors for the specified client, whether client is pro, and which of those features contribute to making the client pro
     *
     * @generated from rpc api.v0alpha.Ana.GetSpecifiedBillingSummary
     */
    readonly getSpecifiedBillingSummary: {
      readonly name: "GetSpecifiedBillingSummary",
      readonly I: typeof GetSpecifiedBillingSummaryReq,
      readonly O: typeof BillingSummary,
      readonly kind: MethodKind.Unary,
    },
    /**
     * returns a summary of all billing factors for the client, whether client is
     * pro, and which of those features contribute to making the client pro
     *
     * @generated from rpc api.v0alpha.Ana.GetBillingSummary
     */
    readonly getBillingSummary: {
      readonly name: "GetBillingSummary",
      readonly I: typeof GetBillingSummaryReq,
      readonly O: typeof BillingSummary,
      readonly kind: MethodKind.Unary,
    },
    /**
     * enable custom report usage for the client
     * org.Permission_EDIT_CLIENT_PREFERENCES
     *
     * @generated from rpc api.v0alpha.Ana.EnableCustomReports
     */
    readonly enableCustomReports: {
      readonly name: "EnableCustomReports",
      readonly I: typeof SetCustomReportsEnabledReq,
      readonly O: typeof SetCustomReportsEnabledRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * disable custom report usage for the client
     * org.Permission_EDIT_CLIENT_PREFERENCES
     *
     * @generated from rpc api.v0alpha.Ana.DisableCustomReports
     */
    readonly disableCustomReports: {
      readonly name: "DisableCustomReports",
      readonly I: typeof SetCustomReportsEnabledReq,
      readonly O: typeof SetCustomReportsEnabledRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * allow the client to be adopted by another account
     * org.Permission_EDIT_CLIENT_PREFERENCES
     *
     * @generated from rpc api.v0alpha.Ana.MakeAdoptable
     */
    readonly makeAdoptable: {
      readonly name: "MakeAdoptable",
      readonly I: typeof MakeAdoptableReq,
      readonly O: typeof MakeAdoptableRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * disallow other accounts from adopting the client
     * org.Permission_EDIT_CLIENT_PREFERENCES
     *
     * @generated from rpc api.v0alpha.Ana.MakeUnadoptable
     */
    readonly makeUnadoptable: {
      readonly name: "MakeUnadoptable",
      readonly I: typeof MakeAdoptableReq,
      readonly O: typeof MakeAdoptableRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * allow the parent to view the data of the adoptable child
     *
     * @generated from rpc api.v0alpha.Ana.AdoptAnaAccount
     */
    readonly adoptAnaAccount: {
      readonly name: "AdoptAnaAccount",
      readonly I: typeof SetAnaAccountRelationReq,
      readonly O: typeof SetAnaAccountRelationRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * disallow the parent from viewing the data of the child
     *
     * @generated from rpc api.v0alpha.Ana.DisownAnaAccount
     */
    readonly disownAnaAccount: {
      readonly name: "DisownAnaAccount",
      readonly I: typeof SetAnaAccountRelationReq,
      readonly O: typeof SetAnaAccountRelationRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * gets all clients that can be viewed by the client including the client
     *
     * @generated from rpc api.v0alpha.Ana.GetAccessibleClients
     */
    readonly getAccessibleClients: {
      readonly name: "GetAccessibleClients",
      readonly I: typeof GetAccessibleClientsReq,
      readonly O: typeof SimpleRelations,
      readonly kind: MethodKind.Unary,
    },
    /**
     * gets all relations in which the client is involved grouped by whether the
     * client is the parent or child account
     *
     * @generated from rpc api.v0alpha.Ana.GetFamily
     */
    readonly getFamily: {
      readonly name: "GetFamily",
      readonly I: typeof GetFamilyReq,
      readonly O: typeof Family,
      readonly kind: MethodKind.Unary,
    },
    /**
     * gets the client's data visibility as defined in the database (source of
     * truth); internal use only
     *
     * @generated from rpc api.v0alpha.Ana.GetAllowedDataVisibility
     */
    readonly getAllowedDataVisibility: {
      readonly name: "GetAllowedDataVisibility",
      readonly I: typeof GetVisibilityReq,
      readonly O: typeof DataVisibility,
      readonly kind: MethodKind.Unary,
    },
    /**
     * gets the client's data visibility as is evident from the elasticsearch
     * indices structure; internal use only
     *
     * @generated from rpc api.v0alpha.Ana.GetCurrentDataVisibility
     */
    readonly getCurrentDataVisibility: {
      readonly name: "GetCurrentDataVisibility",
      readonly I: typeof GetVisibilityReq,
      readonly O: typeof DataVisibility,
      readonly kind: MethodKind.Unary,
    },
    /**
     * gets a visibility summary from the perspective of the elasticsearch
     * indices; internal use only
     *
     * @generated from rpc api.v0alpha.Ana.GetIndicesVisibility
     */
    readonly getIndicesVisibility: {
      readonly name: "GetIndicesVisibility",
      readonly I: typeof GetVisibilityReq,
      readonly O: typeof IndicesVisibility,
      readonly kind: MethodKind.Unary,
    },
    /**
     * gets the client's data visibility as exists in the elasticsearch data;
     * internal use only
     *
     * @generated from rpc api.v0alpha.Ana.GetAuditableDataVisibility
     */
    readonly getAuditableDataVisibility: {
      readonly name: "GetAuditableDataVisibility",
      readonly I: typeof GetVisibilityReq,
      readonly O: typeof DataVisibility,
      readonly kind: MethodKind.Unary,
    },
    /**
     * gets a map of client sids to organization names
     *
     * @generated from rpc api.v0alpha.Ana.GetOrganizationNames
     */
    readonly getOrganizationNames: {
      readonly name: "GetOrganizationNames",
      readonly I: typeof GetOrganizationNamesReq,
      readonly O: typeof GetOrganizationNamesRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * generate visualization data for the id
     *
     * @generated from rpc api.v0alpha.Ana.GenerateVizDataById
     */
    readonly generateVizDataById: {
      readonly name: "GenerateVizDataById",
      readonly I: typeof GenerateVizDataByIdReq,
      readonly O: typeof GenerateVizDataByIdRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Gets client's data status
     * Data status is the status of calls loaded in elasticsearch
     * against all calls in the database that are within the clients weeks of data setting
     * This method requires a client sid
     * Required permissions:
     *      CUSTOMER_SUPPORT
     *
     * @generated from rpc api.v0alpha.Ana.GetClientStatus
     */
    readonly getClientStatus: {
      readonly name: "GetClientStatus",
      readonly I: typeof GetClientStatusReq,
      readonly O: typeof GetClientStatusResp,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Reloads client's data
     * This loads calls from the database into elasticsearch
     * This method requires a client sid
     * Required permissions:
     *      WIP - DEV_OPS
     *
     * @generated from rpc api.v0alpha.Ana.ReloadClientData
     */
    readonly reloadClientData: {
      readonly name: "ReloadClientData",
      readonly I: typeof ReloadClientDataReq,
      readonly O: typeof ReloadClientDataResp,
      readonly kind: MethodKind.Unary,
    },
    /**
     * list all clients visualizations id and title
     *
     * @generated from rpc api.v0alpha.Ana.ListVisualizationsLegacy
     */
    readonly listVisualizationsLegacy: {
      readonly name: "ListVisualizationsLegacy",
      readonly I: typeof ListVisualizationsLegacyReq,
      readonly O: typeof ListVisualizationsLegacyRes,
      readonly kind: MethodKind.Unary,
    },
  }
};

