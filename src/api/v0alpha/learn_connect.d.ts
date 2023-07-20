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

// @generated by protoc-gen-connect-es v0.11.0
// @generated from file api/v0alpha/learn.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ContentEditorDataReq, ContentEditorDataRes, ContentReq, ContentRes, DeleteLearnPagesReq, DeleteLearnPagesRes, DeleteStandaloneReq, DeleteStandaloneRes, ExistReq, ExistRes, ExportManyReq, ExportRes, SearchContentReq, SearchRes, SnippetReq, SnippetRes, StandaloneReq, StandaloneRes, StoreStaticImageReq, StoreStaticImageRes, UpdateReq, UpdateRes, UploadDynamicScreenshotReq, UploadDynamicScreenshotRes } from "./learn_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * A service for creating and reading learning material
 *
 * @generated from service api.v0alpha.Learn
 */
export declare const Learn: {
  readonly typeName: "api.v0alpha.Learn",
  readonly methods: {
    /**
     * check if learning page already exists
     *
     * @generated from rpc api.v0alpha.Learn.Exist
     */
    readonly exist: {
      readonly name: "Exist",
      readonly I: typeof ExistReq,
      readonly O: typeof ExistRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * retreive content from learning pages
     *
     * @generated from rpc api.v0alpha.Learn.Content
     */
    readonly content: {
      readonly name: "Content",
      readonly I: typeof ContentReq,
      readonly O: typeof ContentRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * exports multiple pages of the learning center markdown as PDF
     *
     * @generated from rpc api.v0alpha.Learn.ExportMany
     */
    readonly exportMany: {
      readonly name: "ExportMany",
      readonly I: typeof ExportManyReq,
      readonly O: typeof ExportRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * search content in learning pages
     * we allow all the logged in agents/admins to view search content
     *
     * @generated from rpc api.v0alpha.Learn.SearchContent
     */
    readonly searchContent: {
      readonly name: "SearchContent",
      readonly I: typeof SearchContentReq,
      readonly O: typeof SearchRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * stream search content results in learning pages
     * we allow all the logged in agents/admins to view search content
     *
     * @generated from rpc api.v0alpha.Learn.ListSearchResults
     */
    readonly listSearchResults: {
      readonly name: "ListSearchResults",
      readonly I: typeof SearchContentReq,
      readonly O: typeof SearchRes,
      readonly kind: MethodKind.ServerStreaming,
    },
    /**
     * get standalone articles from learning pages
     * we allow all the logged in agents/admins to view standalone articles
     *
     * @generated from rpc api.v0alpha.Learn.Standalone
     */
    readonly standalone: {
      readonly name: "Standalone",
      readonly I: typeof StandaloneReq,
      readonly O: typeof StandaloneRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * retrieve user who edited the content last
     *
     * @generated from rpc api.v0alpha.Learn.ContentEditorData
     */
    readonly contentEditorData: {
      readonly name: "ContentEditorData",
      readonly I: typeof ContentEditorDataReq,
      readonly O: typeof ContentEditorDataRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * update contents for learning pages
     *
     * @generated from rpc api.v0alpha.Learn.Update
     */
    readonly update: {
      readonly name: "Update",
      readonly I: typeof UpdateReq,
      readonly O: typeof UpdateRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * upload url for static images
     *
     * @generated from rpc api.v0alpha.Learn.StoreStaticImage
     */
    readonly storeStaticImage: {
      readonly name: "StoreStaticImage",
      readonly I: typeof StoreStaticImageReq,
      readonly O: typeof StoreStaticImageRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * upload dynamic learning image screenshot
     *
     * @generated from rpc api.v0alpha.Learn.UploadDynamicScreenshot
     */
    readonly uploadDynamicScreenshot: {
      readonly name: "UploadDynamicScreenshot",
      readonly I: typeof UploadDynamicScreenshotReq,
      readonly O: typeof UploadDynamicScreenshotRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * delete standalone articles from learning pages
     *
     * @generated from rpc api.v0alpha.Learn.DeleteStandalone
     */
    readonly deleteStandalone: {
      readonly name: "DeleteStandalone",
      readonly I: typeof DeleteStandaloneReq,
      readonly O: typeof DeleteStandaloneRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * get snippet content from learning pages
     * we allow all the logged in agents/admins to view snippet content
     *
     * @generated from rpc api.v0alpha.Learn.Snippet
     */
    readonly snippet: {
      readonly name: "Snippet",
      readonly I: typeof SnippetReq,
      readonly O: typeof SnippetRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * delete learning pages
     *
     * @generated from rpc api.v0alpha.Learn.DeleteLearnPages
     */
    readonly deleteLearnPages: {
      readonly name: "DeleteLearnPages",
      readonly I: typeof DeleteLearnPagesReq,
      readonly O: typeof DeleteLearnPagesRes,
      readonly kind: MethodKind.Unary,
    },
  }
};

