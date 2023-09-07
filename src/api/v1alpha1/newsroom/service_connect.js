// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v1alpha1/newsroom/service.proto (package api.v1alpha1.newsroom, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateNewsArticleRequest, CreateNewsArticleResponse, CreatePublishedNewsArticleRequest, CreatePublishedNewsArticleResponse, GetNewsArticleByIdRequest, GetNewsArticleByIdResponse, GetPublishedNewsArticleByIdRequest, GetPublishedNewsArticleByIdResponse, ListNewsArticlesRequest, ListNewsArticlesResponse, ListPublishedNewsArticlesRequest, ListPublishedNewsArticlesResponse, UpdateNewsArticleRequest, UpdateNewsArticleResponse, UpdatePublishedNewsArticleRequest, UpdatePublishedNewsArticleResponse } from "./entities_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Service for interacting with TCN's Newsroom API system.
 * Accessing all of the methods Requestuire an authenticated user with the correct
 * permissions.
 *
 * @generated from service api.v1alpha1.newsroom.NewsroomAPI
 */
export const NewsroomAPI = {
  typeName: "api.v1alpha1.newsroom.NewsroomAPI",
  methods: {
    /**
     * create news article
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.CreateNewsArticle
     */
    createNewsArticle: {
      name: "CreateNewsArticle",
      I: CreateNewsArticleRequest,
      O: CreateNewsArticleResponse,
      kind: MethodKind.Unary,
    },
    /**
     * list news articles
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.ListNewsArticles
     */
    listNewsArticles: {
      name: "ListNewsArticles",
      I: ListNewsArticlesRequest,
      O: ListNewsArticlesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * get news article details by the id
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.GetNewsArticleById
     */
    getNewsArticleById: {
      name: "GetNewsArticleById",
      I: GetNewsArticleByIdRequest,
      O: GetNewsArticleByIdResponse,
      kind: MethodKind.Unary,
    },
    /**
     * update news article
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.UpdateNewsArticle
     */
    updateNewsArticle: {
      name: "UpdateNewsArticle",
      I: UpdateNewsArticleRequest,
      O: UpdateNewsArticleResponse,
      kind: MethodKind.Unary,
    },
    /**
     * create published news article
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.CreatePublishedNewsArticle
     */
    createPublishedNewsArticle: {
      name: "CreatePublishedNewsArticle",
      I: CreatePublishedNewsArticleRequest,
      O: CreatePublishedNewsArticleResponse,
      kind: MethodKind.Unary,
    },
    /**
     * list published news articles
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.ListPublishedNewsArticles
     */
    listPublishedNewsArticles: {
      name: "ListPublishedNewsArticles",
      I: ListPublishedNewsArticlesRequest,
      O: ListPublishedNewsArticlesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * get published news article details by the id
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.GetPublishedNewsArticleById
     */
    getPublishedNewsArticleById: {
      name: "GetPublishedNewsArticleById",
      I: GetPublishedNewsArticleByIdRequest,
      O: GetPublishedNewsArticleByIdResponse,
      kind: MethodKind.Unary,
    },
    /**
     * update published news article
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.UpdatePublishedNewsArticle
     */
    updatePublishedNewsArticle: {
      name: "UpdatePublishedNewsArticle",
      I: UpdatePublishedNewsArticleRequest,
      O: UpdatePublishedNewsArticleResponse,
      kind: MethodKind.Unary,
    },
  }
};

