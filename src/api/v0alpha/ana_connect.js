// @generated by protoc-gen-connect-es v0.9.0
// @generated from file api/v0alpha/ana.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AnaAccount, BillingSummary, CopyDashVizReq, CopyDashVizRes, DataVisibility, Family, GenerateMonthlyBillingReq, GenerateMonthlyBillingRes, GenerateVizDataByIdReq, GenerateVizDataByIdRes, GetAccessibleClientsReq, GetAccountReq, GetAuthorizedAnalyticsLinkReq, GetAuthorizedAnalyticsLinkRes, GetBillingSummaryReq, GetClientStatusReq, GetClientStatusResp, GetFamilyReq, GetOrganizationNamesReq, GetOrganizationNamesRes, GetSpecifiedAccountReq, GetSpecifiedBillingSummaryReq, GetSpecifiedVisualizationsReq, GetTimeZoneReq, GetVisibilityReq, IndicesVisibility, ListVisualizationsLegacyReq, ListVisualizationsLegacyRes, MakeAdoptableReq, MakeAdoptableRes, RegisterAccountReq, ReloadClientDataReq, ReloadClientDataResp, SetAnaAccountRelationReq, SetAnaAccountRelationRes, SetCustomReportsEnabledReq, SetCustomReportsEnabledRes, SetDefaultDashboardReq, SetDefaultDashboardRes, SetDefaultTimeFilterReq, SetDefaultTimeFilterRes, SetTimeZoneReq, SetTimeZoneRes, SetWeeksReq, SetWeeksRes, SimpleRelations, TimeZone, Visualizations } from "./ana_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v0alpha.Ana
 */
export const Ana = {
  typeName: "api.v0alpha.Ana",
  methods: {
    /**
     * gets all visualizations for a specific client
     *
     * @generated from rpc api.v0alpha.Ana.GetSpecifiedVisualizations
     */
    getSpecifiedVisualizations: {
      name: "GetSpecifiedVisualizations",
      I: GetSpecifiedVisualizationsReq,
      O: Visualizations,
      kind: MethodKind.Unary,
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
    registerAccount: {
      name: "RegisterAccount",
      I: RegisterAccountReq,
      O: AnaAccount,
      kind: MethodKind.Unary,
    },
    /**
     * sets the length of analytics history the client can view
     *
     * @generated from rpc api.v0alpha.Ana.SetWeeks
     */
    setWeeks: {
      name: "SetWeeks",
      I: SetWeeksReq,
      O: SetWeeksRes,
      kind: MethodKind.Unary,
    },
    /**
     * set default time filter for given ana account
     * org.Permission_EDIT_CLIENT_PREFERENCES
     *
     * @generated from rpc api.v0alpha.Ana.SetDefaultTimeFilter
     */
    setDefaultTimeFilter: {
      name: "SetDefaultTimeFilter",
      I: SetDefaultTimeFilterReq,
      O: SetDefaultTimeFilterRes,
      kind: MethodKind.Unary,
    },
    /**
     * sets the dashboard that is shown by default for neo
     * org.Permission_EDIT_CLIENT_PREFERENCES
     *
     * @generated from rpc api.v0alpha.Ana.SetDefaultDashboard
     */
    setDefaultDashboard: {
      name: "SetDefaultDashboard",
      I: SetDefaultDashboardReq,
      O: SetDefaultDashboardRes,
      kind: MethodKind.Unary,
    },
    /**
     * gets account details for the client
     * org.Permission_VIEW_REPORTS
     *
     * @generated from rpc api.v0alpha.Ana.GetAccount
     */
    getAccount: {
      name: "GetAccount",
      I: GetAccountReq,
      O: AnaAccount,
      kind: MethodKind.Unary,
    },
    /**
     * gets account details using the org_id provided
     *
     * @generated from rpc api.v0alpha.Ana.GetSpecifiedAccount
     */
    getSpecifiedAccount: {
      name: "GetSpecifiedAccount",
      I: GetSpecifiedAccountReq,
      O: AnaAccount,
      kind: MethodKind.Unary,
    },
    /**
     * Gets an authorized url for the clients BI analytics page
     *
     * @generated from rpc api.v0alpha.Ana.GetAuthorizedAnalyticsLink
     */
    getAuthorizedAnalyticsLink: {
      name: "GetAuthorizedAnalyticsLink",
      I: GetAuthorizedAnalyticsLinkReq,
      O: GetAuthorizedAnalyticsLinkRes,
      kind: MethodKind.Unary,
    },
    /**
     * creates and returns a url to download billing for the month provided or the previous month if none is provided
     * org.Permission_VIEW_BILLING
     *
     * @generated from rpc api.v0alpha.Ana.GenerateMonthlyBilling
     */
    generateMonthlyBilling: {
      name: "GenerateMonthlyBilling",
      I: GenerateMonthlyBillingReq,
      O: GenerateMonthlyBillingRes,
      kind: MethodKind.Unary,
    },
    /**
     * gets the ana_account timezone for the client
     * org.Permission_VIEW_REPORTS
     *
     * @generated from rpc api.v0alpha.Ana.GetTimeZone
     */
    getTimeZone: {
      name: "GetTimeZone",
      I: GetTimeZoneReq,
      O: TimeZone,
      kind: MethodKind.Unary,
    },
    /**
     * updates the timezone for the account
     * org.Permission_VIEW_REPORTS
     *
     * @generated from rpc api.v0alpha.Ana.SetTimeZone
     */
    setTimeZone: {
      name: "SetTimeZone",
      I: SetTimeZoneReq,
      O: SetTimeZoneRes,
      kind: MethodKind.Unary,
    },
    /**
     * copies the reports (dashboards legacy and visualizations legacy)
     * corresponding with the ids provided
     *
     * @generated from rpc api.v0alpha.Ana.CopyDashViz
     */
    copyDashViz: {
      name: "CopyDashViz",
      I: CopyDashVizReq,
      O: CopyDashVizRes,
      kind: MethodKind.Unary,
    },
    /**
     * returns a summary of all billing factors for the specified client, whether client is pro, and which of those features contribute to making the client pro
     *
     * @generated from rpc api.v0alpha.Ana.GetSpecifiedBillingSummary
     */
    getSpecifiedBillingSummary: {
      name: "GetSpecifiedBillingSummary",
      I: GetSpecifiedBillingSummaryReq,
      O: BillingSummary,
      kind: MethodKind.Unary,
    },
    /**
     * returns a summary of all billing factors for the client, whether client is
     * pro, and which of those features contribute to making the client pro
     *
     * @generated from rpc api.v0alpha.Ana.GetBillingSummary
     */
    getBillingSummary: {
      name: "GetBillingSummary",
      I: GetBillingSummaryReq,
      O: BillingSummary,
      kind: MethodKind.Unary,
    },
    /**
     * enable custom report usage for the client
     * org.Permission_EDIT_CLIENT_PREFERENCES
     *
     * @generated from rpc api.v0alpha.Ana.EnableCustomReports
     */
    enableCustomReports: {
      name: "EnableCustomReports",
      I: SetCustomReportsEnabledReq,
      O: SetCustomReportsEnabledRes,
      kind: MethodKind.Unary,
    },
    /**
     * disable custom report usage for the client
     * org.Permission_EDIT_CLIENT_PREFERENCES
     *
     * @generated from rpc api.v0alpha.Ana.DisableCustomReports
     */
    disableCustomReports: {
      name: "DisableCustomReports",
      I: SetCustomReportsEnabledReq,
      O: SetCustomReportsEnabledRes,
      kind: MethodKind.Unary,
    },
    /**
     * allow the client to be adopted by another account
     * org.Permission_EDIT_CLIENT_PREFERENCES
     *
     * @generated from rpc api.v0alpha.Ana.MakeAdoptable
     */
    makeAdoptable: {
      name: "MakeAdoptable",
      I: MakeAdoptableReq,
      O: MakeAdoptableRes,
      kind: MethodKind.Unary,
    },
    /**
     * disallow other accounts from adopting the client
     * org.Permission_EDIT_CLIENT_PREFERENCES
     *
     * @generated from rpc api.v0alpha.Ana.MakeUnadoptable
     */
    makeUnadoptable: {
      name: "MakeUnadoptable",
      I: MakeAdoptableReq,
      O: MakeAdoptableRes,
      kind: MethodKind.Unary,
    },
    /**
     * allow the parent to view the data of the adoptable child
     *
     * @generated from rpc api.v0alpha.Ana.AdoptAnaAccount
     */
    adoptAnaAccount: {
      name: "AdoptAnaAccount",
      I: SetAnaAccountRelationReq,
      O: SetAnaAccountRelationRes,
      kind: MethodKind.Unary,
    },
    /**
     * disallow the parent from viewing the data of the child
     *
     * @generated from rpc api.v0alpha.Ana.DisownAnaAccount
     */
    disownAnaAccount: {
      name: "DisownAnaAccount",
      I: SetAnaAccountRelationReq,
      O: SetAnaAccountRelationRes,
      kind: MethodKind.Unary,
    },
    /**
     * gets all clients that can be viewed by the client including the client
     *
     * @generated from rpc api.v0alpha.Ana.GetAccessibleClients
     */
    getAccessibleClients: {
      name: "GetAccessibleClients",
      I: GetAccessibleClientsReq,
      O: SimpleRelations,
      kind: MethodKind.Unary,
    },
    /**
     * gets all relations in which the client is involved grouped by whether the
     * client is the parent or child account
     *
     * @generated from rpc api.v0alpha.Ana.GetFamily
     */
    getFamily: {
      name: "GetFamily",
      I: GetFamilyReq,
      O: Family,
      kind: MethodKind.Unary,
    },
    /**
     * gets the client's data visibility as defined in the database (source of
     * truth); internal use only
     *
     * @generated from rpc api.v0alpha.Ana.GetAllowedDataVisibility
     */
    getAllowedDataVisibility: {
      name: "GetAllowedDataVisibility",
      I: GetVisibilityReq,
      O: DataVisibility,
      kind: MethodKind.Unary,
    },
    /**
     * gets the client's data visibility as is evident from the elasticsearch
     * indices structure; internal use only
     *
     * @generated from rpc api.v0alpha.Ana.GetCurrentDataVisibility
     */
    getCurrentDataVisibility: {
      name: "GetCurrentDataVisibility",
      I: GetVisibilityReq,
      O: DataVisibility,
      kind: MethodKind.Unary,
    },
    /**
     * gets a visibility summary from the perspective of the elasticsearch
     * indices; internal use only
     *
     * @generated from rpc api.v0alpha.Ana.GetIndicesVisibility
     */
    getIndicesVisibility: {
      name: "GetIndicesVisibility",
      I: GetVisibilityReq,
      O: IndicesVisibility,
      kind: MethodKind.Unary,
    },
    /**
     * gets the client's data visibility as exists in the elasticsearch data;
     * internal use only
     *
     * @generated from rpc api.v0alpha.Ana.GetAuditableDataVisibility
     */
    getAuditableDataVisibility: {
      name: "GetAuditableDataVisibility",
      I: GetVisibilityReq,
      O: DataVisibility,
      kind: MethodKind.Unary,
    },
    /**
     * gets a map of client sids to organization names
     *
     * @generated from rpc api.v0alpha.Ana.GetOrganizationNames
     */
    getOrganizationNames: {
      name: "GetOrganizationNames",
      I: GetOrganizationNamesReq,
      O: GetOrganizationNamesRes,
      kind: MethodKind.Unary,
    },
    /**
     * generate visualization data for the id
     *
     * @generated from rpc api.v0alpha.Ana.GenerateVizDataById
     */
    generateVizDataById: {
      name: "GenerateVizDataById",
      I: GenerateVizDataByIdReq,
      O: GenerateVizDataByIdRes,
      kind: MethodKind.Unary,
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
    getClientStatus: {
      name: "GetClientStatus",
      I: GetClientStatusReq,
      O: GetClientStatusResp,
      kind: MethodKind.Unary,
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
    reloadClientData: {
      name: "ReloadClientData",
      I: ReloadClientDataReq,
      O: ReloadClientDataResp,
      kind: MethodKind.Unary,
    },
    /**
     * list all clients visualizations id and title
     *
     * @generated from rpc api.v0alpha.Ana.ListVisualizationsLegacy
     */
    listVisualizationsLegacy: {
      name: "ListVisualizationsLegacy",
      I: ListVisualizationsLegacyReq,
      O: ListVisualizationsLegacyRes,
      kind: MethodKind.Unary,
    },
  }
};

