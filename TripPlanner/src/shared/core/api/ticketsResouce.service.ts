/**
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

 import { Inject, Injectable, Optional }                      from '@angular/core';
 import { HttpClient, HttpHeaders, HttpParams,
          HttpResponse, HttpEvent }                           from '@angular/common/http';
 import { CustomHttpUrlEncodingCodec }                        from '../encoder';
 
 import { Observable }                                        from 'rxjs';
 
 import { ViajeDTO } from '../model/viajeDTO.model';
 import { ViajeDetalleDTO } from '../model/viajeDetalleDTO.model';
 
 import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
 import { Configuration }                                     from '../configuration';
 
 
 @Injectable()
 export class TicketsResourceService {
 
     protected basePath = 'https://...';
     public defaultHeaders = new HttpHeaders();
     public configuration = new Configuration();
 
     constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
         if (basePath) {
             this.basePath = basePath;
         }
         if (configuration) {
             this.configuration = configuration;
             this.basePath = basePath || configuration.basePath || this.basePath;
         }
     }
 
     /**
      * @param consumes string[] mime-types
      * @return true: consumes contains 'multipart/form-data', false: otherwise
      */
     private canConsumeForm(consumes: string[]): boolean {
         const form = 'multipart/form-data';
         for (const consume of consumes) {
             if (form === consume) {
                 return true;
             }
         }
         return false;
     }
 
 
     /**
      * 
      * 
      * @param body 
      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
      * @param reportProgress flag to report request and response progress.
      */
     public createViaje(body: ViajeDTO, observe?: 'body', reportProgress?: boolean): Observable<number>;
     public createViaje(body: ViajeDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
     public createViaje(body: ViajeDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
     public createViaje(body: ViajeDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
 
         if (body === null || body === undefined) {
             throw new Error('Required parameter body was null or undefined when calling create Tickets.');
         }
 
         let headers = this.defaultHeaders;
 
         // to determine the Accept header
         let httpHeaderAccepts: string[] = [
             'application/json',
             '*/*'
         ];
         const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
         if (httpHeaderAcceptSelected != undefined) {
             headers = headers.set('Accept', httpHeaderAcceptSelected);
         }
 
         // to determine the Content-Type header
         const consumes: string[] = [
             'application/json'
         ];
         const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
         if (httpContentTypeSelected != undefined) {
             headers = headers.set('Content-Type', httpContentTypeSelected);
         }
 
         return this.httpClient.request<number>('post',`${this.basePath}/api/tickets`,
             {
                 body: body,
                 withCredentials: this.configuration.withCredentials,
                 headers: headers,
                 observe: observe,
                 reportProgress: reportProgress
             }
         );
     }
 
     /**
      * 
      * 
      * @param id 
      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
      * @param reportProgress flag to report request and response progress.
      */
     public deleteViaje(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
     public deleteViaje(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
     public deleteViaje(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
     public deleteViaje(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
 
         if (id === null || id === undefined) {
             throw new Error('Required parameter id was null or undefined when calling delete Tickets.');
         }
 
         let headers = this.defaultHeaders;
 
         // to determine the Accept header
         let httpHeaderAccepts: string[] = [
             '*/*'
         ];
         const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
         if (httpHeaderAcceptSelected != undefined) {
             headers = headers.set('Accept', httpHeaderAcceptSelected);
         }
 
         // to determine the Content-Type header
         const consumes: string[] = [
         ];
 
         return this.httpClient.request<any>('delete',`${this.basePath}/api/tickets/${encodeURIComponent(String(id))}`,
             {
                 withCredentials: this.configuration.withCredentials,
                 headers: headers,
                 observe: observe,
                 reportProgress: reportProgress
             }
         );
     }
 
     /**
      * 
      * 
      * @param filter 
      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
      * @param reportProgress flag to report request and response progress.
      */
     public getAllTickets(filter?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<ViajeDetalleDTO>>;
     public getAllTickets(filter?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ViajeDetalleDTO>>>;
     public getAllTickets(filter?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ViajeDetalleDTO>>>;
     public getAllTickets(filter?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
 
 
         let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
         if (filter !== undefined && filter !== null) {
             queryParameters = queryParameters.set('filter', <any>filter);
         }
 
         let headers = this.defaultHeaders;
 
         // to determine the Accept header
         let httpHeaderAccepts: string[] = [
             'application/json',
             '*/*'
         ];
         const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
         if (httpHeaderAcceptSelected != undefined) {
             headers = headers.set('Accept', httpHeaderAcceptSelected);
         }
 
         // to determine the Content-Type header
         const consumes: string[] = [
         ];
 
         return this.httpClient.request<Array<ViajeDetalleDTO>>('get',`${this.basePath}/api/tickets`,
             {
                 params: queryParameters,
                 withCredentials: this.configuration.withCredentials,
                 headers: headers,
                 observe: observe,
                 reportProgress: reportProgress
             }
         );
     }
 
     /**
      * 
      * 
      * @param id 
      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
      * @param reportProgress flag to report request and response progress.
      */
     public getAllTicketsByPlan(id: number, observe?: 'body', reportProgress?: boolean): Observable<Array<ViajeDetalleDTO>>;
     public getAllTicketsByPlan(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ViajeDetalleDTO>>>;
     public getAllTicketsByPlan(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ViajeDetalleDTO>>>;
     public getAllTicketsByPlan(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
 
         if (id === null || id === undefined) {
             throw new Error('Required parameter id was null or undefined when calling getAllTickets By Plan.');
         }
 
         let headers = this.defaultHeaders;
 
         // to determine the Accept header
         let httpHeaderAccepts: string[] = [
             'application/json',
             '*/*'
         ];
         const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
         if (httpHeaderAcceptSelected != undefined) {
             headers = headers.set('Accept', httpHeaderAcceptSelected);
         }
 
         // to determine the Content-Type header
         const consumes: string[] = [
         ];
 
         return this.httpClient.request<Array<ViajeDetalleDTO>>('get',`${this.basePath}/api/tickets/plan/${encodeURIComponent(String(id))}`,
             {
                 withCredentials: this.configuration.withCredentials,
                 headers: headers,
                 observe: observe,
                 reportProgress: reportProgress
             }
         );
     }
 
     /**
      * 
      * 
      * @param id 
      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
      * @param reportProgress flag to report request and response progress.
      */
     public getViaje(id: number, observe?: 'body', reportProgress?: boolean): Observable<ViajeDTO>;
     public getViaje(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ViajeDTO>>;
     public getViaje(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ViajeDTO>>;
     public getViaje(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
 
         if (id === null || id === undefined) {
             throw new Error('Required parameter id was null or undefined when calling getTickets.');
         }
 
         let headers = this.defaultHeaders;
 
         // to determine the Accept header
         let httpHeaderAccepts: string[] = [
             'application/json',
             '*/*'
         ];
         const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
         if (httpHeaderAcceptSelected != undefined) {
             headers = headers.set('Accept', httpHeaderAcceptSelected);
         }
 
         // to determine the Content-Type header
         const consumes: string[] = [
         ];
 
         return this.httpClient.request<ViajeDTO>('get',`${this.basePath}/api/tickets/${encodeURIComponent(String(id))}`,
             {
                 withCredentials: this.configuration.withCredentials,
                 headers: headers,
                 observe: observe,
                 reportProgress: reportProgress
             }
         );
     }
 
     /**
      * 
      * 
      * @param body 
      * @param id 
      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
      * @param reportProgress flag to report request and response progress.
      */
     public updateViaje(body: ViajeDTO, id: number, observe?: 'body', reportProgress?: boolean): Observable<number>;
     public updateViaje(body: ViajeDTO, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
     public updateViaje(body: ViajeDTO, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
     public updateViaje(body: ViajeDTO, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
 
         if (body === null || body === undefined) {
             throw new Error('Required parameter body was null or undefined when calling updateTickets.');
         }
 
         if (id === null || id === undefined) {
             throw new Error('Required parameter id was null or undefined when calling updateTickets.');
         }
 
         let headers = this.defaultHeaders;
 
         // to determine the Accept header
         let httpHeaderAccepts: string[] = [
             'application/json',
             '*/*'
         ];
         const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
         if (httpHeaderAcceptSelected != undefined) {
             headers = headers.set('Accept', httpHeaderAcceptSelected);
         }
 
         // to determine the Content-Type header
         const consumes: string[] = [
             'application/json'
         ];
         const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
         if (httpContentTypeSelected != undefined) {
             headers = headers.set('Content-Type', httpContentTypeSelected);
         }
 
         return this.httpClient.request<number>('put',`${this.basePath}/api/tickets/${encodeURIComponent(String(id))}`,
             {
                 body: body,
                 withCredentials: this.configuration.withCredentials,
                 headers: headers,
                 observe: observe,
                 reportProgress: reportProgress
             }
         );
     }
 
 }
 