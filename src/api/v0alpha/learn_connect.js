// Copyright (c) 2019, TCN Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v0alpha/learn.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ContentByVersionReq, ContentEditorDataReq, ContentEditorDataRes, ContentReq, ContentRes, CreateEditVersionReq, CreateEditVersionRes, DeleteLearnPagesReq, DeleteLearnPagesRes, DeleteStandaloneReq, DeleteStandaloneRes, ExistReq, ExistRes, ExportManyReq, ExportRes, PublishVersionReq, PublishVersionRes, SearchContentByVersionReq, SearchContentReq, SearchRes, SnippetReq, SnippetRes, StandaloneReq, StandaloneRes, StoreStaticImageReq, StoreStaticImageRes, UpdateByVersionReq, UpdateReq, UpdateRes, UploadDynamicScreenshotReq, UploadDynamicScreenshotRes } from "./learn_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * A service for creating and reading learning material
 *
 * @generated from service api.v0alpha.Learn
 */
export const Learn = {
  typeName: "api.v0alpha.Learn",
  methods: {
    /**
     * check if learning page already exists
     *
     * @generated from rpc api.v0alpha.Learn.Exist
     */
    exist: {
      name: "Exist",
      I: ExistReq,
      O: ExistRes,
      kind: MethodKind.Unary,
    },
    /**
     * retreive content from learning pages
     *
     * @generated from rpc api.v0alpha.Learn.Content
     */
    content: {
      name: "Content",
      I: ContentReq,
      O: ContentRes,
      kind: MethodKind.Unary,
    },
    /**
     * exports multiple pages of the learning center markdown as PDF
     *
     * @generated from rpc api.v0alpha.Learn.ExportMany
     */
    exportMany: {
      name: "ExportMany",
      I: ExportManyReq,
      O: ExportRes,
      kind: MethodKind.Unary,
    },
    /**
     * search content in learning pages
     * we allow all the logged in agents/admins to view search content
     *
     * @generated from rpc api.v0alpha.Learn.SearchContent
     */
    searchContent: {
      name: "SearchContent",
      I: SearchContentReq,
      O: SearchRes,
      kind: MethodKind.Unary,
    },
    /**
     * stream search content results in learning pages
     * we allow all the logged in agents/admins to view search content
     *
     * @generated from rpc api.v0alpha.Learn.ListSearchResults
     */
    listSearchResults: {
      name: "ListSearchResults",
      I: SearchContentReq,
      O: SearchRes,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * get standalone articles from learning pages
     * we allow all the logged in agents/admins to view standalone articles
     *
     * @generated from rpc api.v0alpha.Learn.Standalone
     */
    standalone: {
      name: "Standalone",
      I: StandaloneReq,
      O: StandaloneRes,
      kind: MethodKind.Unary,
    },
    /**
     * retrieve user who edited the content last
     *
     * @generated from rpc api.v0alpha.Learn.ContentEditorData
     */
    contentEditorData: {
      name: "ContentEditorData",
      I: ContentEditorDataReq,
      O: ContentEditorDataRes,
      kind: MethodKind.Unary,
    },
    /**
     * update contents for learning pages
     *
     * @generated from rpc api.v0alpha.Learn.Update
     */
    update: {
      name: "Update",
      I: UpdateReq,
      O: UpdateRes,
      kind: MethodKind.Unary,
    },
    /**
     * upload url for static images
     *
     * @generated from rpc api.v0alpha.Learn.StoreStaticImage
     */
    storeStaticImage: {
      name: "StoreStaticImage",
      I: StoreStaticImageReq,
      O: StoreStaticImageRes,
      kind: MethodKind.Unary,
    },
    /**
     * upload dynamic learning image screenshot
     *
     * @generated from rpc api.v0alpha.Learn.UploadDynamicScreenshot
     */
    uploadDynamicScreenshot: {
      name: "UploadDynamicScreenshot",
      I: UploadDynamicScreenshotReq,
      O: UploadDynamicScreenshotRes,
      kind: MethodKind.Unary,
    },
    /**
     * delete standalone articles from learning pages
     *
     * @generated from rpc api.v0alpha.Learn.DeleteStandalone
     */
    deleteStandalone: {
      name: "DeleteStandalone",
      I: DeleteStandaloneReq,
      O: DeleteStandaloneRes,
      kind: MethodKind.Unary,
    },
    /**
     * get snippet content from learning pages
     * we allow all the logged in agents/admins to view snippet content
     *
     * @generated from rpc api.v0alpha.Learn.Snippet
     */
    snippet: {
      name: "Snippet",
      I: SnippetReq,
      O: SnippetRes,
      kind: MethodKind.Unary,
    },
    /**
     * delete learning pages
     *
     * @generated from rpc api.v0alpha.Learn.DeleteLearnPages
     */
    deleteLearnPages: {
      name: "DeleteLearnPages",
      I: DeleteLearnPagesReq,
      O: DeleteLearnPagesRes,
      kind: MethodKind.Unary,
    },
    /**
     * create edit version
     *
     * @generated from rpc api.v0alpha.Learn.CreateEditVersion
     */
    createEditVersion: {
      name: "CreateEditVersion",
      I: CreateEditVersionReq,
      O: CreateEditVersionRes,
      kind: MethodKind.Unary,
    },
    /**
     * publish version
     *
     * @generated from rpc api.v0alpha.Learn.PublishVersion
     */
    publishVersion: {
      name: "PublishVersion",
      I: PublishVersionReq,
      O: PublishVersionRes,
      kind: MethodKind.Unary,
    },
    /**
     * retrieve content from learning pages based on version
     *
     * @generated from rpc api.v0alpha.Learn.ContentByVersion
     */
    contentByVersion: {
      name: "ContentByVersion",
      I: ContentByVersionReq,
      O: ContentRes,
      kind: MethodKind.Unary,
    },
    /**
     * update contents for learning pages by version
     *
     * @generated from rpc api.v0alpha.Learn.UpdateByVersion
     */
    updateByVersion: {
      name: "UpdateByVersion",
      I: UpdateByVersionReq,
      O: UpdateRes,
      kind: MethodKind.Unary,
    },
    /**
     * stream search content results in learning pages by version
     * we allow all the logged in agents/admins to view search content
     *
     * @generated from rpc api.v0alpha.Learn.ListSearchResultsByVersion
     */
    listSearchResultsByVersion: {
      name: "ListSearchResultsByVersion",
      I: SearchContentByVersionReq,
      O: SearchRes,
      kind: MethodKind.ServerStreaming,
    },
  }
};

