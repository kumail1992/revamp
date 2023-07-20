import {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken} from 'axios';
import {mergeMap as _observableMergeMap, catchError as _observableCatch} from 'rxjs/operators';
import {Observable, throwError as _observableThrow, of as _observableOf, observable} from 'rxjs';
import {Injectable, Inject, Optional, InjectionToken} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse, HttpResponseBase} from '@angular/common/http';

import {
  AddNewUserRequest,
  CallResponse,
  AddUpdateProductsRequest,
  AddUpdateCommissionRateRequest,
  AddUpdateLevelsRequest,
  LoginRequest,
  LoginResponse,
  ProductListRequest,
  ProductListResponse,
  SubAccountRequest,
  SubAccountResponse,
  ApiException,
  IRegister,
  GetWalletResponse,
  GetWalletRequest,
  CreateIDRequest,
  UserSignUpRequest,
  PlusMinusRequest,
  UpdatePaymentApexPayRequest,
  GetOrderApexPaymentResponse,
  GetOrderApexPaymentRequest,
  CreateApexPaymentOrderRequest,
  CheckSubAccountBalanceResponse,
  CheckSubAccountBalanceRequest,
  CheckNumberRequest,
  FileParameter,

  LoginNumberResponse,
  LoginNumberRequest,
  QtechGameRequest,
  VerificationNumberResponse,
  VerificationNumberRequest,
  SignUpDetailRequest,
  UserProductListRequest,
  UserProductListResponse,
  TransferFundsRequest,
  TransferFundsResponse,
  AccountStatementRequest,
  AccountStatementResponse,
  AddUpdateCardDetailsRequest,
  GetAllProfitAndLossOfProductsRequest,
  GetAllProfitAndLossOfProcutsResponse,
  ManualPaymentRequest,
  ManualPaymentResponse,
  ListOfUserCardDetailsRequest,
  ListOfUserCardDetailsResponse,
  LobbyURLResponse,
  CheckTokenRequest,
  ListOfOrderApexPaymentRequest,
  ListOfOrderApexPaymentResponse,
  AddUpdateUserKYCRequest,
  ListOfKycDetailsResponse,
  ListOfIdTypesRequest,
  ListOfUserKycDetailsRequest,
  ListOfUserKycDetailsResponse,
  ListOfIdTypesResponse,
  // UpdateUserPasswordInProductsRequest,
  UpdateUserPasswordRequest,
  CloseIDRequest,
  ListOfKycDetailsRequest,
  ListOfPaymentMethodsResponse,
  ListOfPaymentMethodsRequest,
  AddUpdateBankDetailsRequest,
  ListOfUserCurrentMarketBetsResponse,
  ListOfUserCurrentMarketBetsRequest,
  ListOfUserCurrentMarketBetsQTResponse,
  ListOfUserCurrentMarketBetsQTRequest,
  AddWithdrawRequest,
  ListOfManualIDCreationStatusResponse,
  UpdatedManualIDCreationRequestInProductRequest,
  UpdateStatusOfManualRequestDepositAndWithdrawFromProductRequest,
  ListOfManualDepositAndWithdrawResponse,
  AddManualIDCreationRequest,
  VerificationPasswordRequest,
  VerificationPasswordResponse,
  AddManualDWFromProductRequest,
  ListOfCompanyPaymentModsResponse,
  ListOfManualIDCreationResponse,
  GetUserNameStatusInManualIDCreationRequest,
  GetListOfIDCreationRequest,
  ChangeStatusOfManualPaymentRequest,

  GetProfitAndLossOfProcutDetailsRequest,
  GetProfitAndLossOfProductDetailsRequest,
  GetProfitAndLossOfProcutDetailsResponse,
  GetProfitAndLossOfProductDetailsResponse,

  AccountStatementProductWiseRequest,
  AccountStatementDepositOrWithdrawRequest,
  UpdatePaymentMethodStatusRequest,
  ListOfPaymentStatusResponse,
  checkManualDepositStatusResponse,
  GetUserNameTransferFundsStatusInProductRequest,
  ForgetPasswordRequest,
  VerificationForgetPasswordRequest,
  UpdateUserPasswordInProductsRequest,
  UpdateUserPasswordFromAdminRequest,
  ListOfUserMarketBetsRequest,
  UpdateUserStatusRequest,
  ListOfUserMarketBetsResponse,
  RegistrationUserRequest,
  GetSnapRequest,
  GetSnapResponse,
  ListOfUserPaymentMethodResponse,
  ListOfUserPaymentMethodRequest,
  UpdateUserKycStatusRequest,
  TransactionNatureListResponse,
  NotificationResponse,
  NotificationRequest,
  NotificationReadedRequest,
  ListOfUserProductUserResponse,
  ProductUserAccountStatementRequest,
  ProductUserAccountStatementDepositOrWithdrawRequest,
  UserAccountStatementDepositOrWithdrawRequest,
  UserAccountStatementDWRequest,
  UpdateCardStatusRequest,
  SubAccountForCampaignResponse,
  SubAccountForCampaignRequest,
  UserBetsRequest,
  BetsResponse,
  UserAccountStatementRequest,
  AddUpdateAffiliationRequest,

  GetListOfAffiliationsResponse,
  GetListOfAffiliatSubAccountsResponse,
  GetListOfAffiliatSubAccountsRequest,
  CreatePaymentResp,
  ExceptionResponse,
  PaymentRequestModel,
  CreateYesBankOrderRequest,
  GetOrderYesBankResponse,
  CreateOnlinePaymentOrderRequest,
  GetOnlinePaymentOrderResponse,
  GetOrderMorePayPaymentResponse,
  GetToshaniPaymentOrderResponse,
  CreateToshaniPaymentOrderRequest,
  PaymentProviderListResponse,
  AddUpdateApexTypeOfProviderRequest,
  PaymentProviderListRequest,
  GetOrderApexTypePaymentResponse,
  CreateApexTypePaymentOrderRequest,
  CreateGlobalPayinOrderRequest,
  CreateGlobalPayinResponse,
  CreateGlobalPayoutResponse,
  CreateGlobalPayOutOrderRequest,
  GetNewsResponse,
  GetOrderYesOpenTypePaymentResponse,
  GetListOfAffiliationsRequest,
  GetClientDepositAndWidrawRequestInProductRequest,
  GetClientDepositAndWidrawRequestInProducResponse,
  ListOfAllUserResponse,
  ListOfAllUserIdsRequest,
  AddUpdateUserCustomerServiceNumbersRequest,
  ListOfServiceContactNumbersResponse,
  AddUpdateCustomerServiceNumbersRequest,
  ListOfServicesResponse,
  ListOfServicesRequest,
  LoginAtlasRequest,
  LoginAtlasResponse,
  TokenOnlyRequest,
  CheckTokenRequestExc,
  CheckSubAccountLiabilityRequest,
  CheckSubAccountLiabilityResponse,
  TransferFundsRequestExc,
  UserProductWalletPositionRequest,
  UserProductWalletPositionResponse,
  UpdateBankOrOtherStatusRequest,
  ListOfGeneralPaymentProviderForResponse,
  AddManualPaymentResponse,
  EvolutionResponse,
  ResetPasswordRequest,
  ResetNewPasswordRequest,
  BannerSettingsResponse,
  ExternalExchangeRequest,
  PokerCasinoResponse,
  PokerCasinoRequest
} from '../models/models';
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {TimerService} from "./timer.service";
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  // private instance: AxiosInstance;
  url = environment.streamUrl;

  getStream(): Observable<any> {
    return this.http.get(this.url + '/spdatatvnoforapp')
  }

  private http: HttpClient;
  private baseUrl: string;
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;
  private ListOfIdTypesResponse: any;

  constructor(@Inject(HttpClient) http: HttpClient, private router: Router, private timerService: TimerService) {
    this.http = http;
    this.baseUrl = environment.apiurl;
  }
  /**
   * @param body (optional)
   * @return Success
   */
  getCustomerServices(body: ListOfServicesRequest | undefined): Observable<ListOfServicesResponse[]> {
    let url_ = this.baseUrl + "/api/GetCustomerServices";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_ : any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
      return this.processGetCustomerServices(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetCustomerServices(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<ListOfServicesResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<ListOfServicesResponse[]>;
    }));
  }

  protected processGetCustomerServices(response: HttpResponseBase): Observable<ListOfServicesResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(ListOfServicesResponse.fromJS(item));
        }
        else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }
  /**
   * @param body (optional)
   * @return Success
   */
  addUpdateUserCustomerServiceNumbers(body: AddUpdateUserCustomerServiceNumbersRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/AddUpdateUserCustomerServiceNumbers";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processAddUpdateUserCustomerServiceNumbers(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processAddUpdateUserCustomerServiceNumbers(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processAddUpdateUserCustomerServiceNumbers(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  checkSubAccountLiability(body: CheckSubAccountLiabilityRequest | undefined): Observable<CheckSubAccountLiabilityResponse[]> {
    let url_ = this.baseUrl + "/api/CheckSubAccountLiability";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_ : any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
      return this.processCheckSubAccountLiability(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processCheckSubAccountLiability(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CheckSubAccountLiabilityResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CheckSubAccountLiabilityResponse[]>;
    }));
  }

  protected processCheckSubAccountLiability(response: HttpResponseBase): Observable<CheckSubAccountLiabilityResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(CheckSubAccountLiabilityResponse.fromJS(item));
        }
        else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf(null as any);
  }
/**
     * @param body (optional)
     * @return Success
     */
getServiceNumberForCustomer(body: ListOfServicesRequest | undefined): Observable<ListOfServiceContactNumbersResponse[]> {
  let url_ = this.baseUrl + "/api/GetServiceNumberForCustomer";
  url_ = url_.replace(/[?&]$/, "");

  const content_ = JSON.stringify(body);

  let options_ : any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
          "Content-Type": "application/json-patch+json",
          "Accept": "text/plain"
      })
  };

  return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
      return this.processGetServiceNumberForCustomer(response_);
  })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
          try {
              return this.processGetServiceNumberForCustomer(response_ as any);
          } catch (e) {
              return _observableThrow(e) as any as Observable<ListOfServiceContactNumbersResponse[]>;
          }
      } else
          return _observableThrow(response_) as any as Observable<ListOfServiceContactNumbersResponse[]>;
  }));
}

protected processGetServiceNumberForCustomer(response: HttpResponseBase): Observable<ListOfServiceContactNumbersResponse[]> {
  const status = response.status;
  const responseBlob =
      response instanceof HttpResponse ? response.body :
      (response as any).error instanceof Blob ? (response as any).error : undefined;

  let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
  if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
      let result200: any = null;
      let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
              result200!.push(ListOfServiceContactNumbersResponse.fromJS(item));
      }
      else {
          result200 = <any>null;
      }
      return _observableOf(result200);
      }));
  } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
      return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
  }
  return _observableOf<any[]>(null as any);
}

  /**
     * @return Success
     */
  listOfCustomerServices(){
    let url_ = this.baseUrl + "/api/ListOfCustomerServices";
    return this.http.get(url_)
}
 /**
   * @param body (optional)
   * @return Success
   */
  addUpdateCustomerServiceNumbers(body: AddUpdateCustomerServiceNumbersRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/AddUpdateCustomerServiceNumbers";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_ : any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
      return this.processAddUpdateCustomerServiceNumbers(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processAddUpdateCustomerServiceNumbers(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processAddUpdateCustomerServiceNumbers(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }
 
/**
     * @param amount (optional) 
     * @param file (optional) 
     * @param onlinePaymentID (optional) 
     * @param uTR (optional) 
     * @param token (optional) 
     * @return Success
     */
addManualPayment(amount: number | undefined, file: FileParameter | undefined, onlinePaymentID: number | undefined, uTR: number | undefined, token: string | undefined): Observable<AddManualPaymentResponse> {
  let url_ = this.baseUrl + "/api/AddManualPayment";
  url_ = url_.replace(/[?&]$/, "");

  const content_ = new FormData();
  if (amount === null || amount === undefined)
      throw new Error("The parameter 'amount' cannot be null.");
  else
      content_.append("Amount", amount.toString());
  if (file === null || file === undefined)
      throw new Error("The parameter 'file' cannot be null.");
  else
      content_.append("File", file.data, file.fileName ? file.fileName : "File");
  if (onlinePaymentID === null || onlinePaymentID === undefined)
      throw new Error("The parameter 'onlinePaymentID' cannot be null.");
  else
      content_.append("OnlinePaymentID", onlinePaymentID.toString());
  if (uTR === null || uTR === undefined)
      throw new Error("The parameter 'uTR' cannot be null.");
  else
      content_.append("UTR", uTR.toString());
  if (token === null || token === undefined)
      throw new Error("The parameter 'token' cannot be null.");
  else
      content_.append("Token", token.toString());

  let options_ : any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
          "Accept": "text/plain"
      })
  };

  return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
      return this.processAddManualPayment(response_);
  })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
          try {
              return this.processAddManualPayment(response_ as any);
          } catch (e) {
              return _observableThrow(e) as any as Observable<AddManualPaymentResponse>;
          }
      } else
          return _observableThrow(response_) as any as Observable<AddManualPaymentResponse>;
  }));
}

protected processAddManualPayment(response: HttpResponseBase): Observable<AddManualPaymentResponse> {
  const status = response.status;
  const responseBlob =
      response instanceof HttpResponse ? response.body :
      (response as any).error instanceof Blob ? (response as any).error : undefined;

  let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
  if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
      let result200: any = null;
      let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      result200 = AddManualPaymentResponse.fromJS(resultData200);
      return _observableOf(result200);
      }));
  } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
      return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
  }
  return _observableOf<AddManualPaymentResponse>(null as any);
}

  /**
     * @param body (optional) 
     * @return Success
     */
  createYesOpenTypePaymentOrder(body: CreateApexTypePaymentOrderRequest | undefined): Observable<GetOrderApexTypePaymentResponse> {
    let url_ = this.baseUrl + "/api/CreateYesOpenTypePaymentOrder";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_ : any = {
        body: content_,
        observe: "response",
        responseType: "blob",
        headers: new HttpHeaders({
            "Content-Type": "application/json-patch+json",
            "Accept": "text/plain"
        })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
        return this.processCreateYesOpenTypePaymentOrder(response_);
    })).pipe(_observableCatch((response_: any) => {
        if (response_ instanceof HttpResponseBase) {
            try {
                return this.processCreateYesOpenTypePaymentOrder(response_ as any);
            } catch (e) {
                return _observableThrow(e) as any as Observable<GetOrderApexTypePaymentResponse>;
            }
        } else
            return _observableThrow(response_) as any as Observable<GetOrderApexTypePaymentResponse>;
    }));
}

protected processCreateYesOpenTypePaymentOrder(response: HttpResponseBase): Observable<GetOrderApexTypePaymentResponse> {
    const status = response.status;
    const responseBlob =
        response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
    if (status === 200) {
        return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = GetOrderApexTypePaymentResponse.fromJS(resultData200);
        return _observableOf(result200);
        }));
    } else if (status !== 200 && status !== 204) {
        return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }));
    }
    return _observableOf<GetOrderApexTypePaymentResponse>(null as any);
}
  /**
   * @param body (optional)
   * @return Success
   */
  createMorePayPaymentOrder(body: CreateApexPaymentOrderRequest | undefined): Observable<GetOrderMorePayPaymentResponse> {
    let url_ = this.baseUrl + "/api/CreateMorePayPaymentOrder";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processCreateMorePayPaymentOrder(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processCreateMorePayPaymentOrder(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<GetOrderMorePayPaymentResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<GetOrderMorePayPaymentResponse>;
    }));
  }

  protected processCreateMorePayPaymentOrder(response: HttpResponseBase): Observable<GetOrderMorePayPaymentResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = GetOrderMorePayPaymentResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<GetOrderMorePayPaymentResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  updateApexTypePayment(body: UpdatePaymentApexPayRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/UpdateApexTypePayment";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processUpdateApexTypePayment(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processUpdateApexTypePayment(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processUpdateApexTypePayment(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  getOrderApexTypeOfPayment(body: GetOrderApexPaymentRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/GetOrderApexTypeOfPayment";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetOrderApexTypeOfPayment(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetOrderApexTypeOfPayment(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processGetOrderApexTypeOfPayment(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  createGlobalPayin(body: CreateGlobalPayinOrderRequest | undefined): Observable<CreateGlobalPayinResponse> {
    let url_ = this.baseUrl + "/api/CreateGlobalPayin";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processCreateGlobalPayin(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processCreateGlobalPayin(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CreateGlobalPayinResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CreateGlobalPayinResponse>;
    }));
  }

  protected processCreateGlobalPayin(response: HttpResponseBase): Observable<CreateGlobalPayinResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CreateGlobalPayinResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CreateGlobalPayinResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  createGlobalPayout(body: CreateGlobalPayOutOrderRequest | undefined): Observable<CreateGlobalPayoutResponse> {
    let url_ = this.baseUrl + "/api/CreateGlobalPayout";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processCreateGlobalPayout(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processCreateGlobalPayout(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CreateGlobalPayoutResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CreateGlobalPayoutResponse>;
    }));
  }

  protected processCreateGlobalPayout(response: HttpResponseBase): Observable<CreateGlobalPayoutResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CreateGlobalPayoutResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CreateGlobalPayoutResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  createApexTypePaymentOrder(body: CreateApexTypePaymentOrderRequest | undefined): Observable<GetOrderApexTypePaymentResponse> {
    let url_ = this.baseUrl + "/api/CreateApexTypePaymentOrder";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processCreateApexTypePaymentOrder(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processCreateApexTypePaymentOrder(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<GetOrderApexTypePaymentResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<GetOrderApexTypePaymentResponse>;
    }));
  }

  protected processCreateApexTypePaymentOrder(response: HttpResponseBase): Observable<GetOrderApexTypePaymentResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = GetOrderApexTypePaymentResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  getNews(body: CheckTokenRequest | undefined): Observable<GetNewsResponse> {
    let url_ = this.baseUrl + "/api/GetNews";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetNews(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetNews(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<GetNewsResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<GetNewsResponse>;
    }));
  }

  protected processGetNews(response: HttpResponseBase): Observable<GetNewsResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = GetNewsResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<GetNewsResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  listOfPaymentProvider(body: PaymentProviderListRequest | undefined): Observable<PaymentProviderListResponse[]> {
    let url_ = this.baseUrl + "/api/ListOfPaymentProvider";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processListOfPaymentProvider(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processListOfPaymentProvider(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<PaymentProviderListResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<PaymentProviderListResponse[]>;
    }));
  }

  protected processListOfPaymentProvider(response: HttpResponseBase): Observable<PaymentProviderListResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(PaymentProviderListResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  addUpdateApexTypeOfProvider(body: AddUpdateApexTypeOfProviderRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/AddUpdateApexTypeOfProvider";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processAddUpdateApexTypeOfProvider(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processAddUpdateApexTypeOfProvider(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processAddUpdateApexTypeOfProvider(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  createFonePaisaPaymentOrder(body: CreateApexTypePaymentOrderRequest | undefined): Observable<GetOrderApexTypePaymentResponse> {
    let url_ = this.baseUrl + "/api/CreateFonePaisaPaymentOrder";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processCreateFonePaisaPaymentOrder(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processCreateFonePaisaPaymentOrder(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<GetOrderApexTypePaymentResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<GetOrderApexTypePaymentResponse>;
    }));
  }

  protected processCreateFonePaisaPaymentOrder(response: HttpResponseBase): Observable<GetOrderApexTypePaymentResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = GetOrderApexTypePaymentResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<GetOrderApexTypePaymentResponse>(null as any);
  }

  /**
   * @return Success
   */
  listOfProducts(): Observable<ProductListResponse[]> {
    let url_ = this.baseUrl + "/api/ListOfProducts";
    url_ = url_.replace(/[?&]$/, "");

    let options_: any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Accept": "text/plain"
      })
    };

    return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processListOfProducts(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processListOfProducts(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<ProductListResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<ProductListResponse[]>;
    }));
  }

  protected processListOfProducts(response: HttpResponseBase): Observable<ProductListResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(ProductListResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  createToshaniPaymentOrder(body: CreateToshaniPaymentOrderRequest | undefined): Observable<GetToshaniPaymentOrderResponse> {
    let url_ = this.baseUrl + "/api/CreateToshaniPaymentOrder";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processCreateToshaniPaymentOrder(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processCreateToshaniPaymentOrder(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<GetToshaniPaymentOrderResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<GetToshaniPaymentOrderResponse>;
    }));
  }

  protected processCreateToshaniPaymentOrder(response: HttpResponseBase): Observable<GetToshaniPaymentOrderResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = GetToshaniPaymentOrderResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<GetToshaniPaymentOrderResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  userManualPaymentList(body: ManualPaymentRequest | undefined): Observable<ManualPaymentResponse[]> {
    let url_ = this.baseUrl + "/api/UserManualPaymentList";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processUserManualPaymentList(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processUserManualPaymentList(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<ManualPaymentResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<ManualPaymentResponse[]>;
    }));
  }

  protected processUserManualPaymentList(response: HttpResponseBase): Observable<ManualPaymentResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(ManualPaymentResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  getUserPaymentMethodList(body: ListOfUserPaymentMethodRequest | undefined): Observable<ListOfUserPaymentMethodResponse[]> {
    let url_ = this.baseUrl + "/api/GetUserPaymentMethodList";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetUserPaymentMethodList(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetUserPaymentMethodList(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<ListOfUserPaymentMethodResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<ListOfUserPaymentMethodResponse[]>;
    }));
  }

  protected processGetUserPaymentMethodList(response: HttpResponseBase): Observable<ListOfUserPaymentMethodResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(ListOfUserPaymentMethodResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }


  /**
   * @param body (optional)
   * @return Success
   */
  getSnap(body: GetSnapRequest | undefined): Observable<GetSnapResponse> {
    let url_ = this.baseUrl + "/api/GetSnap";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetSnap(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetSnap(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<GetSnapResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<GetSnapResponse>;
    }));
  }

  protected processGetSnap(response: HttpResponseBase): Observable<GetSnapResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = GetSnapResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<GetSnapResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  updateUserStatus(body: UpdateUserStatusRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/UpdateUserStatus";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processUpdateUserStatus(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processUpdateUserStatus(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processUpdateUserStatus(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  listOfKYCDetails(body: ListOfKycDetailsRequest | undefined): Observable<ListOfKycDetailsResponse[]> {
    let url_ = this.baseUrl + "/api/ListOfKYCDetails";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processListOfKYCDetails(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processListOfKYCDetails(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<ListOfKycDetailsResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<ListOfKycDetailsResponse[]>;
    }));
  }

  protected processListOfKYCDetails(response: HttpResponseBase): Observable<ListOfKycDetailsResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(ListOfKycDetailsResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

  listOfUserKYCDetails(body: ListOfUserKycDetailsRequest | undefined): Observable<ListOfUserKycDetailsResponse[]> {
    let url_ = this.baseUrl + "/api/ListOfUserKYCDetails";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processListOfUserKYCDetails(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processListOfUserKYCDetails(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<ListOfUserKycDetailsResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<ListOfUserKycDetailsResponse[]>;
    }));
  }

  protected processListOfUserKYCDetails(response: HttpResponseBase): Observable<ListOfUserKycDetailsResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(ListOfUserKycDetailsResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }


  /**
   * @param body (optional)
   * @return Success
   */
  updatePaymentMethodStatus(body: UpdatePaymentMethodStatusRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/UpdatePaymentMethodStatus";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processUpdatePaymentMethodStatus(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processUpdatePaymentMethodStatus(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processUpdatePaymentMethodStatus(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  getUserKycSnap(body: GetSnapRequest | undefined): Observable<GetSnapResponse> {
    let url_ = this.baseUrl + "/api/GetUserKycSnap";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetUserKycSnap(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetUserKycSnap(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<GetSnapResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<GetSnapResponse>;
    }));
  }

  protected processGetUserKycSnap(response: HttpResponseBase): Observable<GetSnapResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = GetSnapResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<GetSnapResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  listOfManualIDCreationRequestInProduct(body: CheckTokenRequest | undefined): Observable<ListOfManualIDCreationStatusResponse[]> {
    let url_ = this.baseUrl + "/api/ListOfManualIDCreationRequestInProduct";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processListOfManualIDCreationRequestInProduct(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processListOfManualIDCreationRequestInProduct(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<ListOfManualIDCreationStatusResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<ListOfManualIDCreationStatusResponse[]>;
    }));
  }

  protected processListOfManualIDCreationRequestInProduct(response: HttpResponseBase): Observable<ListOfManualIDCreationStatusResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(ListOfManualIDCreationStatusResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  listOfIdTypes(body: ListOfIdTypesRequest | undefined): Observable<ListOfIdTypesResponse[]> {
    let url_ = this.baseUrl + "/api/ListOfIdTypes";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(body);
    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processListOfIdTypes(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processListOfIdTypes(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<ListOfIdTypesResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<ListOfIdTypesResponse[]>;
    }));
  }

  protected processListOfIdTypes(response: HttpResponseBase): Observable<ListOfIdTypesResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(ListOfIdTypesResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  listOfPaymentMethods(body: ListOfPaymentMethodsRequest | undefined): Observable<ListOfPaymentMethodsResponse[]> {
    let url_ = this.baseUrl + "/api/ListOfPaymentMethods";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processListOfPaymentMethods(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processListOfPaymentMethods(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<ListOfPaymentMethodsResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<ListOfPaymentMethodsResponse[]>;
    }));
  }

  protected processListOfPaymentMethods(response: HttpResponseBase): Observable<ListOfPaymentMethodsResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(ListOfPaymentMethodsResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  getListOfPaymentMethodsAdmin(body: ListOfPaymentMethodsRequest | undefined): Observable<ListOfPaymentMethodsResponse[]> {
    let url_ = this.baseUrl + "/api/ListOfPaymentMethodsAdmin";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetListOfPaymentMethodsAdmin(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetListOfPaymentMethodsAdmin(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<ListOfPaymentMethodsResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<ListOfPaymentMethodsResponse[]>;
    }));
  }

  protected processGetListOfPaymentMethodsAdmin(response: HttpResponseBase): Observable<ListOfPaymentMethodsResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(ListOfPaymentMethodsResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

  // /**
  //  * @param body (optional)
  //  * @return Success
  //  */
  // addUpdateBankOrOtherDetails(body: AddUpdateBankDetailsRequest | undefined): Observable<CallResponse> {
  //   let url_ = this.baseUrl + "/api/AddUpdateBankOrOtherDetails";
  //   url_ = url_.replace(/[?&]$/, "");
  //
  //   const content_ = JSON.stringify(body);
  //
  //   let options_: any = {
  //     body: content_,
  //     observe: "response",
  //     responseType: "blob",
  //     headers: new HttpHeaders({
  //       "Content-Type": "application/json-patch+json",
  //       "Accept": "text/plain"
  //     })
  //   };
  //
  //   return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
  //     return this.processAddUpdateBankOrOtherDetails(response_);
  //   })).pipe(_observableCatch((response_: any) => {
  //     if (response_ instanceof HttpResponseBase) {
  //       try {
  //         return this.processAddUpdateBankOrOtherDetails(response_ as any);
  //       } catch (e) {
  //         return _observableThrow(e) as any as Observable<CallResponse>;
  //       }
  //     } else
  //       return _observableThrow(response_) as any as Observable<CallResponse>;
  //   }));
  // }
  //
  // protected processAddUpdateBankOrOtherDetails(response: HttpResponseBase): Observable<CallResponse> {
  //   const status = response.status;
  //   const responseBlob =
  //     response instanceof HttpResponse ? response.body :
  //       (response as any).error instanceof Blob ? (response as any).error : undefined;
  //
  //   let _headers: any = {};
  //   if (response.headers) {
  //     for (let key of response.headers.keys()) {
  //       _headers[key] = response.headers.get(key);
  //     }
  //   }
  //   if (status === 200) {
  //     return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
  //       let result200: any = null;
  //       let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
  //       result200 = CallResponse.fromJS(resultData200);
  //       return _observableOf(result200);
  //     }));
  //   } else if (status !== 200 && status !== 204) {
  //     return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
  //       return throwException("An unexpected server error occurred.", status, _responseText, _headers);
  //     }));
  //   }
  //   return _observableOf<CallResponse>(null as any);
  // }


   /**
   * @param body (optional)
   * @return Success
   */
   updateBankOrOtherStatus(body: UpdateBankOrOtherStatusRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/UpdateBankOrOtherStatus";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processUpdateBankOrOtherStatus(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processUpdateBankOrOtherStatus(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processUpdateBankOrOtherStatus(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }


  /**
   * @param holderName (optional)
   * @param bankName (optional)
   * @param branch (optional)
   * @param accountNo (optional)
   * @param iBAN (optional)
   * @param currencyCode (optional)
   * @param methodTypeID (optional)
   * @param file (optional)
   * @param token (optional)
   * @return Success
   */
  addUpdateBankOrOtherDetails(holderName: string | undefined, bankName: string | undefined, branch: string | undefined, accountNo: string | undefined, iBAN: string
    | undefined, currencyCode: string | undefined, methodTypeID: number | undefined, file: FileParameter | undefined, token: string | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/AddUpdateBankOrOtherDetails";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = new FormData();
    if (holderName === null || holderName === undefined)
      throw new Error("The parameter 'holderName' cannot be null.");
    else
      content_.append("HolderName", holderName.toString());
    if (bankName === null || bankName === undefined)
      throw new Error("The parameter 'bankName' cannot be null.");
    else
      content_.append("BankName", bankName.toString());
    if (branch === null || branch === undefined)
      throw new Error("The parameter 'branch' cannot be null.");
    else
      content_.append("Branch", branch.toString());
    if (accountNo === null || accountNo === undefined)
      throw new Error("The parameter 'accountNo' cannot be null.");
    else
      content_.append("AccountNo", accountNo.toString());
    if (iBAN === null || iBAN === undefined)
      throw new Error("The parameter 'iBAN' cannot be null.");
    else
      content_.append("IBAN", iBAN.toString());
    if (currencyCode === null || currencyCode === undefined)
      throw new Error("The parameter 'currencyCode' cannot be null.");
    else
      content_.append("CurrencyCode", currencyCode.toString());
    if (methodTypeID === null || methodTypeID === undefined)
      throw new Error("The parameter 'methodTypeID' cannot be null.");
    else
      content_.append("MethodTypeID", methodTypeID.toString());
    if (file === null || file === undefined)
      throw new Error("The parameter 'file' cannot be null.");
    else
      content_.append("File", file.data, file.fileName ? file.fileName : "File");
    if (token === null || token === undefined)
      throw new Error("The parameter 'token' cannot be null.");
    else
      content_.append("Token", token.toString());

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processAddUpdateBankOrOtherDetails(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processAddUpdateBankOrOtherDetails(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processAddUpdateBankOrOtherDetails(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  addNewUser(body: AddNewUserRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/AddNewUser";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processAddNewUser(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processAddNewUser(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processAddNewUser(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  addUpdateCommissionRate(body: AddUpdateCommissionRateRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/AddUpdateCommissionRate";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processAddUpdateCommissionRate(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processAddUpdateCommissionRate(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processAddUpdateCommissionRate(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  AddUpdateCardDetails(body: AddUpdateCardDetailsRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/AddUpdateCardDetails";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processAddUpdateCardDetails(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processAddUpdateCardDetails(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processAddUpdateCardDetails(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  listOfUserCurrentMarketBetsQT(body: ListOfUserCurrentMarketBetsQTRequest | undefined): Observable<ListOfUserCurrentMarketBetsQTResponse[]> {
    let url_ = this.baseUrl + "/api/ListOfUserCurrentMarketBetsQT";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processListOfUserCurrentMarketBetsQT(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processListOfUserCurrentMarketBetsQT(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<ListOfUserCurrentMarketBetsQTResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<ListOfUserCurrentMarketBetsQTResponse[]>;
    }));
  }

  protected processListOfUserCurrentMarketBetsQT(response: HttpResponseBase): Observable<ListOfUserCurrentMarketBetsQTResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(ListOfUserCurrentMarketBetsQTResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  accountStatementDepostOrWithdraw(body: AccountStatementDepositOrWithdrawRequest | undefined): Observable<AccountStatementResponse[]> {
    debugger
    let url_ = this.baseUrl + "/api/AccountStatementDepostOrWithdraw";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processAccountStatementDepostOrWithdraw(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processAccountStatementDepostOrWithdraw(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<AccountStatementResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<AccountStatementResponse[]>;
    }));
  }

  protected processAccountStatementDepostOrWithdraw(response: HttpResponseBase): Observable<AccountStatementResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(AccountStatementResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  forgetPassword(body: ForgetPasswordRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/ForgetPassword";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processForgetPassword(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processForgetPassword(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processForgetPassword(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  //
  // /**
  //  * @param body (optional)
  //  * @return Success
  //  */
  // updateUserPasswordFromAdmin(body: UpdateUserPasswordFromAdminRequest | undefined): Observable<CallResponse> {
  //   let url_ = this.baseUrl + "/api/UpdateUserPasswordFromAdmin";
  //   url_ = url_.replace(/[?&]$/, "");
  //
  //   const content_ = JSON.stringify(body);
  //
  //   let options_ : any = {
  //     body: content_,
  //     observe: "response",
  //     responseType: "blob",
  //     headers: new HttpHeaders({
  //       "Content-Type": "application/json-patch+json",
  //       "Accept": "text/plain"
  //     })
  //   };
  //
  //   return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
  //     return this.processUpdateUserPasswordFromAdmin(response_);
  //   })).pipe(_observableCatch((response_: any) => {
  //     if (response_ instanceof HttpResponseBase) {
  //       try {
  //         return this.processUpdateUserPasswordFromAdmin(response_ as any);
  //       } catch (e) {
  //         return _observableThrow(e) as any as Observable<CallResponse>;
  //       }
  //     } else
  //       return _observableThrow(response_) as any as Observable<CallResponse>;
  //   }));
  // }
  //
  // protected processUpdateUserPasswordFromAdmin(response: HttpResponseBase): Observable<CallResponse> {
  //   const status = response.status;
  //   const responseBlob =
  //     response instanceof HttpResponse ? response.body :
  //       (response as any).error instanceof Blob ? (response as any).error : undefined;
  //
  //   let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
  //   if (status === 200) {
  //     return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
  //       let result200: any = null;
  //       let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
  //       result200 = CallResponse.fromJS(resultData200);
  //       return _observableOf(result200);
  //     }));
  //   } else if (status !== 200 && status !== 204) {
  //     return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
  //       return throwException("An unexpected server error occurred.", status, _responseText, _headers);
  //     }));
  //   }
  //   return _observableOf<CallResponse>(null as any);
  // }

  /**
   * @param body (optional)
   * @return Success
   */
  resentForgetPasswordOTP(body: ForgetPasswordRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/ResentForgetPasswordOTP";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processResentForgetPasswordOTP(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processResentForgetPasswordOTP(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processResentForgetPasswordOTP(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  resentForgetPassword(body: ForgetPasswordRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/ResentForgetPassword";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processResentForgetPassword(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processResentForgetPassword(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processResentForgetPassword(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  resentSignOTP(body: UserSignUpRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/ResentSignOTP";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processResentSignOTP(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processResentSignOTP(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processResentSignOTP(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  getAllProfitAndLossOfProcuts(body: GetAllProfitAndLossOfProductsRequest | undefined): Observable<GetAllProfitAndLossOfProcutsResponse[]> {
    let url_ = this.baseUrl + "/api/GetAllProfitAndLossOfProducts";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetAllProfitAndLossOfProcuts(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetAllProfitAndLossOfProcuts(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<GetAllProfitAndLossOfProcutsResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<GetAllProfitAndLossOfProcutsResponse[]>;
    }));
  }

  protected processGetAllProfitAndLossOfProcuts(response: HttpResponseBase): Observable<GetAllProfitAndLossOfProcutsResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(GetAllProfitAndLossOfProcutsResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  accountStatementProductWise(body: AccountStatementProductWiseRequest | undefined): Observable<AccountStatementResponse[]> {
    debugger
    let url_ = this.baseUrl + "/api/AccountStatementProductWise";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processAccountStatementProductWise(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processAccountStatementProductWise(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<AccountStatementResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<AccountStatementResponse[]>;
    }));
  }

  protected processAccountStatementProductWise(response: HttpResponseBase): Observable<AccountStatementResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(AccountStatementResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status === 401 || status === 403) {
      this.router.navigateByUrl(`/login`)
      this.timerService.clearTimer()
      return throwException("Unothorized", status, '', _headers)
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  getProfitAndLossOfProcutDetails(body: GetProfitAndLossOfProcutDetailsRequest | undefined): Observable<GetProfitAndLossOfProcutDetailsResponse[]> {
    let url_ = this.baseUrl + "/api/GetProfitAndLossOfProductDetails";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetProfitAndLossOfProcutDetails(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetProfitAndLossOfProcutDetails(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<GetProfitAndLossOfProcutDetailsResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<GetProfitAndLossOfProcutDetailsResponse[]>;
    }));
  }

  protected processGetProfitAndLossOfProcutDetails(response: HttpResponseBase): Observable<GetProfitAndLossOfProcutDetailsResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(GetProfitAndLossOfProcutDetailsResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

  /**
   * @param paymentID (optional)
   * @param paymentMethod (optional)
   * @param token (optional)
   * @return Success
   */
  addPaymentMethods(paymentMethod: string | undefined, token: string | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/AddPaymentMethods";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = new FormData();
    if (paymentMethod === null || paymentMethod === undefined)
      throw new Error("The parameter 'paymentMethod' cannot be null.");
    else
      content_.append("PaymentMethod", paymentMethod.toString());
    if (token === null || token === undefined)
      throw new Error("The parameter 'token' cannot be null.");
    else
      content_.append("Token", token.toString());

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processAddPaymentMethods(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processAddPaymentMethods(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processAddPaymentMethods(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  changeStatusOfManualPayment(body: ChangeStatusOfManualPaymentRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/ChangeStatusOfManualPayment";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processChangeStatusOfManualPayment(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processChangeStatusOfManualPayment(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processChangeStatusOfManualPayment(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  listOfUserCurrentMarketBets(body: ListOfUserCurrentMarketBetsRequest | undefined): Observable<ListOfUserCurrentMarketBetsResponse[]> {
    let url_ = this.baseUrl + "/api/ListOfUserCurrentMarketBets";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processListOfUserCurrentMarketBets(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processListOfUserCurrentMarketBets(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<ListOfUserCurrentMarketBetsResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<ListOfUserCurrentMarketBetsResponse[]>;
    }));
  }

  protected processListOfUserCurrentMarketBets(response: HttpResponseBase): Observable<ListOfUserCurrentMarketBetsResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(ListOfUserCurrentMarketBetsResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  addUpdateProduct(body: AddUpdateProductsRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/AddUpdateProduct";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processAddUpdateProduct(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processAddUpdateProduct(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processAddUpdateProduct(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  closeID(body: CloseIDRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/CloseID";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processCloseID(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processCloseID(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processCloseID(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  getUserCardsList(body: ListOfUserCardDetailsRequest | undefined): Observable<ListOfUserCardDetailsResponse[]> {
    let url_ = this.baseUrl + "/api/GetUserCardsList";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetUserCardsList(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetUserCardsList(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<ListOfUserCardDetailsResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<ListOfUserCardDetailsResponse[]>;
    }));
  }

  protected processGetUserCardsList(response: HttpResponseBase): Observable<ListOfUserCardDetailsResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(ListOfUserCardDetailsResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

  /**
   * @param typeOfID (optional)
   * @param issueDate (optional)
   * @param expireDate (optional)
   * @param iDNumber (optional)
   * @param file (optional)
   * @param active (optional)
   * @param token (optional)
   * @return Success
   */
  addUpdateUserKYC(typeOfID: number | undefined, issueDate: Date | undefined, expireDate: Date | undefined, iDNumber: string | undefined, file: FileParameter | undefined, active: boolean | undefined, token: string | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/AddUpdateUserKYC";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = new FormData();
    if (typeOfID === null || typeOfID === undefined)
      throw new Error("The parameter 'typeOfID' cannot be null.");
    else
      content_.append("TypeOfID", typeOfID.toString());
    if (issueDate === null || issueDate === undefined)
      throw new Error("The parameter 'issueDate' cannot be null.");
    else
      content_.append("IssueDate", issueDate.toString());
    if (expireDate === null || expireDate === undefined)
      throw new Error("The parameter 'expireDate' cannot be null.");
    else
      content_.append("ExpireDate", expireDate.toString());
    if (iDNumber === null || iDNumber === undefined)
      throw new Error("The parameter 'iDNumber' cannot be null.");
    else
      content_.append("IDNumber", iDNumber.toString());
    if (file === null || file === undefined)
      throw new Error("The parameter 'file' cannot be null.");
    else
      content_.append("File", file.data, file.fileName ? file.fileName : "File");
    if (active === null || active === undefined)
      throw new Error("The parameter 'active' cannot be null.");
    else
      content_.append("Active", active.toString());
    if (token === null || token === undefined)
      throw new Error("The parameter 'token' cannot be null.");
    else
      content_.append("Token", token.toString());

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processAddUpdateUserKYC(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processAddUpdateUserKYC(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processAddUpdateUserKYC(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  listOfPaymentStatus(body: CheckTokenRequest | undefined): Observable<ListOfPaymentStatusResponse[]> {
    let url_ = this.baseUrl + "/api/ListOfPaymentStatus";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processListOfPaymentStatus(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processListOfPaymentStatus(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<ListOfPaymentStatusResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<ListOfPaymentStatusResponse[]>;
    }));
  }

  protected processListOfPaymentStatus(response: HttpResponseBase): Observable<ListOfPaymentStatusResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(ListOfPaymentStatusResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  userRegistration(body: RegistrationUserRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/UserRegistration";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processUserRegistration(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processUserRegistration(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processUserRegistration(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */

  manualPaymentList(body: ManualPaymentRequest | undefined): Observable<ManualPaymentResponse[]> {
    let url_ = this.baseUrl + "/api/ManualPaymentList";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processManualPaymentList(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processManualPaymentList(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<ManualPaymentResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<ManualPaymentResponse[]>;
    }));
  }

  protected processManualPaymentList(response: HttpResponseBase): Observable<ManualPaymentResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(ManualPaymentResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  checkNumber(body: CheckNumberRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/CheckNumber";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processCheckNumber(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processCheckNumber(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processCheckNumber(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  updateUserPassword(body: UpdateUserPasswordRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/UpdateUserPassword";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processUpdateUserPassword(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processUpdateUserPassword(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processUpdateUserPassword(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }


  /**
   * @param body (optional)
   * @return Success
   */
  updateUserPasswordFromAdmin(body: UpdateUserPasswordFromAdminRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/UpdateUserPasswordFromAdmin";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processUpdateUserPasswordFromAdmin(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processUpdateUserPasswordFromAdmin(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processUpdateUserPasswordFromAdmin(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as CallResponse;
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  updateUserPasswordInProducts(body: UpdateUserPasswordInProductsRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/UpdateUserPasswordInProducts";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processUpdateUserPasswordInProducts(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processUpdateUserPasswordInProducts(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processUpdateUserPasswordInProducts(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }


  /**
   * @param body (optional)
   * @return Success
   */
  checkSubAccountBalance(body: CheckSubAccountBalanceRequest | undefined): Observable<CheckSubAccountBalanceResponse> {
    let url_ = this.baseUrl + "/api/CheckSubAccountBalance";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processCheckSubAccountBalance(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processCheckSubAccountBalance(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CheckSubAccountBalanceResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CheckSubAccountBalanceResponse>;
    }));
  }

  protected processCheckSubAccountBalance(response: HttpResponseBase): Observable<CheckSubAccountBalanceResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CheckSubAccountBalanceResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CheckSubAccountBalanceResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */






  createApexPaymentOrder(body: CreateApexPaymentOrderRequest | undefined): Observable<GetOrderApexPaymentResponse> {
    let url_ = this.baseUrl + "/api/CreateApexPaymentOrder";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processCreateApexPaymentOrder(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processCreateApexPaymentOrder(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<GetOrderApexPaymentResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<GetOrderApexPaymentResponse>;
    }));
  }

  protected processCreateApexPaymentOrder(response: HttpResponseBase): Observable<GetOrderApexPaymentResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = GetOrderApexPaymentResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<GetOrderApexPaymentResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  createID(body: CreateIDRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/CreateID";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processCreateID(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processCreateID(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processCreateID(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }


  /**
   * @param body (optional)
   * @return Success
   */
  getSupernowa(body: any | undefined): Observable<LobbyURLResponse> {
    let url_ = this.baseUrl + "/api/GetSupernowa";
    url_ = url_.replace(/[?&]$/, "");
    // body.provider="SN";
    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetSupernowa(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetSupernowa(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<LobbyURLResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<LobbyURLResponse>;
    }));
  }

  protected processGetSupernowa(response: HttpResponseBase): Observable<LobbyURLResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = LobbyURLResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<LobbyURLResponse>(null as any);
  }
  /**
   * @param body (optional)
   * @return Success
   */
  getEvolution(body: any | undefined): Observable<EvolutionResponse> {
    let url_ = this.baseUrl + "/api/Evolution";
    url_ = url_.replace(/[?&]$/, "");
    // body.provider="SN";
    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetEvolution(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetEvolution(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<EvolutionResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<EvolutionResponse>;
    }));
  }

  protected processGetEvolution(response: HttpResponseBase): Observable<EvolutionResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = EvolutionResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<EvolutionResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  externalExchangeLogin(body: ExternalExchangeRequest | undefined): Observable<LobbyURLResponse> {
    let url_ = this.baseUrl + "/api/ExternalExchangeLogin";
    url_ = url_.replace(/[?&]$/, "");

  const content_ = JSON.stringify(body);

  let options_ : any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
          "Content-Type": "application/json-patch+json",
          "Accept": "text/plain"
      })
  };

  return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
      return this.processExternalExchangeLogin(response_);
  })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
          try {
              return this.processExternalExchangeLogin(response_ as any);
          } catch (e) {
              return _observableThrow(e) as any as Observable<LobbyURLResponse>;
          }
      } else
          return _observableThrow(response_) as any as Observable<LobbyURLResponse>;
  }));
}

protected processExternalExchangeLogin(response: HttpResponseBase): Observable<LobbyURLResponse> {
  const status = response.status;
  const responseBlob =
      response instanceof HttpResponse ? response.body :
      (response as any).error instanceof Blob ? (response as any).error : undefined;

  let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
  if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
      let result200: any = null;
      let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      result200 = LobbyURLResponse.fromJS(resultData200);
      return _observableOf(result200);
      }));
  } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
      return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
  }
  return _observableOf<LobbyURLResponse>(null as any);
}
  /**
   * @param body (optional)
   * @return Success
   */
  getPokerCasino(body: PokerCasinoRequest | undefined): Observable<PokerCasinoResponse> {
    let url_ = this.baseUrl + "/api/GetPokerCasino";
    url_ = url_.replace(/[?&]$/, "");

  const content_ = JSON.stringify(body);

  let options_ : any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
          "Content-Type": "application/json-patch+json",
          "Accept": "text/plain"
      })
  };

  return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
      return this.processgetPokerCasino(response_);
  })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
          try {
              return this.processgetPokerCasino(response_ as any);
          } catch (e) {
              return _observableThrow(e) as any as Observable<PokerCasinoResponse>;
          }
      } else
          return _observableThrow(response_) as any as Observable<PokerCasinoResponse>;
  }));
}

protected processgetPokerCasino(response: HttpResponseBase): Observable<PokerCasinoResponse> {
  const status = response.status;
  const responseBlob =
      response instanceof HttpResponse ? response.body :
      (response as any).error instanceof Blob ? (response as any).error : undefined;

  let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
  if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
      let result200: any = null;
      let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      result200 = PokerCasinoResponse.fromJS(resultData200);
      return _observableOf(result200);
      }));
  } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
      return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
  }
  return _observableOf<PokerCasinoResponse>(null as any);
}

   /**
     * @return Success
     */
   getBannerSettings(): Observable<BannerSettingsResponse[]> {
    let url_ = this.baseUrl + "/api/GetBannerSettings";
    url_ = url_.replace(/[?&]$/, "");

    let options_ : any = {
        observe: "response",
        responseType: "blob",
        headers: new HttpHeaders({
            "Accept": "text/plain"
        })
    };

    return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
        return this.processGetBannerSettings(response_);
    })).pipe(_observableCatch((response_: any) => {
        if (response_ instanceof HttpResponseBase) {
            try {
                return this.processGetBannerSettings(response_ as any);
            } catch (e) {
                return _observableThrow(e) as any as Observable<BannerSettingsResponse[]>;
            }
        } else
            return _observableThrow(response_) as any as Observable<BannerSettingsResponse[]>;
    }));
}

protected processGetBannerSettings(response: HttpResponseBase): Observable<BannerSettingsResponse[]> {
    const status = response.status;
    const responseBlob =
        response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
    if (status === 200) {
        return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
            result200 = [] as any;
            for (let item of resultData200)
                result200!.push(BannerSettingsResponse.fromJS(item));
        }
        else {
            result200 = <any>null;
        }
        return _observableOf(result200);
        }));
    } else if (status !== 200 && status !== 204) {
        return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }));
    }
    return _observableOf<any[]>(null as any);
}

  /**
   * @param body (optional)
   * @return Success
   */
  creditPlusMinus(body: PlusMinusRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/CreditPlusMinus";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processCreditPlusMinus(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processCreditPlusMinus(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processCreditPlusMinus(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  addWithdrawRequest(body: AddWithdrawRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/AddWithdrawRequest";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processAddWithdrawRequest(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processAddWithdrawRequest(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processAddWithdrawRequest(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  updateUserKycStatus(body: UpdateUserKycStatusRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/UpdateUserKycStatus";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(body);
    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processUpdateUserKycStatus(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processUpdateUserKycStatus(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processUpdateUserKycStatus(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  getOrderApexPayment(body: GetOrderApexPaymentRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/GetOrderApexPayment";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetOrderApexPayment(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetOrderApexPayment(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processGetOrderApexPayment(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }


  userProductsList(body: UserProductListRequest | undefined): Observable<UserProductListResponse[]> {
    let url_ = this.baseUrl + "/api/UserProductsList";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response: any) => {
      return this.processUserProductsList(response);
    })).pipe(_observableCatch((response: any) => {
      if (response instanceof HttpResponseBase) {
        try {
          return this.processUserProductsList(response as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<[]>;
        }
      } else
        return _observableThrow(response) as any as Observable<[]>;
    }));
  }

  protected processUserProductsList(response: HttpResponseBase): Observable<UserProductListResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(UserProductListResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  updateCardStatus(body: UpdateCardStatusRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/UpdateCardStatus";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processUpdateCardStatus(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processUpdateCardStatus(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processUpdateCardStatus(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  transactionNatureList(body: CheckTokenRequest | undefined): Observable<TransactionNatureListResponse[]> {
    let url_ = this.baseUrl + "/api/TransactionNatureList";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processTransactionNatureList(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processTransactionNatureList(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<TransactionNatureListResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<TransactionNatureListResponse[]>;
    }));
  }

  protected processTransactionNatureList(response: HttpResponseBase): Observable<TransactionNatureListResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(TransactionNatureListResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

  accountStatement(body: AccountStatementRequest | undefined): Observable<AccountStatementResponse[]> {

    let url_ = this.baseUrl + "/api/AccountStatement";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response: any) => {
      return this.processAccountStatement(response);
    })).pipe(_observableCatch((response: any) => {
      if (response instanceof HttpResponseBase) {
        try {
          return this.processAccountStatement(response as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<AccountStatementResponse[]>;
        }
      } else
        return _observableThrow(response) as any as Observable<AccountStatementResponse[]>;
    }));
  }

  protected processAccountStatement(response: HttpResponseBase): Observable<AccountStatementResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(AccountStatementResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  userAccountStatementDW(body: UserAccountStatementDWRequest | undefined): Observable<AccountStatementResponse[]> {
    let url_ = this.baseUrl + "/api/UserAccountStatementDW";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processUserAccountStatementDW(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processUserAccountStatementDW(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<AccountStatementResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<AccountStatementResponse[]>;
    }));
  }

  protected processUserAccountStatementDW(response: HttpResponseBase): Observable<AccountStatementResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(AccountStatementResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  userAccountStatement(body: UserAccountStatementRequest | undefined): Observable<AccountStatementResponse[]> {
    let url_ = this.baseUrl + "/api/UserAccountStatement";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processUserAccountStatement(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processUserAccountStatement(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<AccountStatementResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<AccountStatementResponse[]>;
    }));
  }

  protected processUserAccountStatement(response: HttpResponseBase): Observable<AccountStatementResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(AccountStatementResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  userAccountStatementDepostOrWithdraw(body: UserAccountStatementDepositOrWithdrawRequest | undefined): Observable<AccountStatementResponse[]> {
    let url_ = this.baseUrl + "/api/UserAccountStatementDepostOrWithdraw";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processUserAccountStatementDepostOrWithdraw(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processUserAccountStatementDepostOrWithdraw(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<AccountStatementResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<AccountStatementResponse[]>;
    }));
  }

  protected processUserAccountStatementDepostOrWithdraw(response: HttpResponseBase): Observable<AccountStatementResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(AccountStatementResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  notifications(body: CheckTokenRequest | undefined): Observable<NotificationResponse[]> {
    let url_ = this.baseUrl + "/api/Notifications";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processNotifications(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processNotifications(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<NotificationResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<NotificationResponse[]>;
    }));
  }

  protected processNotifications(response: HttpResponseBase): Observable<NotificationResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(NotificationResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  notificationRead(body: NotificationReadedRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/NotificationRead";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processNotificationRead(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processNotificationRead(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processNotificationRead(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  notificationList(body: NotificationRequest | undefined): Observable<NotificationResponse[]> {
    let url_ = this.baseUrl + "/api/NotificationList";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processNotificationList(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processNotificationList(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<NotificationResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<NotificationResponse[]>;
    }));
  }

  protected processNotificationList(response: HttpResponseBase): Observable<NotificationResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(NotificationResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

  getListOfUserMarketBets(body: ListOfUserMarketBetsRequest | undefined): Observable<ListOfUserMarketBetsResponse[]> {
    let url_ = this.baseUrl + "/api/GetListOfUserMarketBets";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response: any) => {
      return this.processGetListOfUserMarketBets(response);
    })).pipe(_observableCatch((response: any) => {
      if (response instanceof HttpResponseBase) {
        try {
          return this.processGetListOfUserMarketBets(response as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<ListOfUserMarketBetsResponse[]>;
        }
      } else
        return _observableThrow(response) as any as Observable<ListOfUserMarketBetsResponse[]>;
    }));
  }

  protected processGetListOfUserMarketBets(response: HttpResponseBase): Observable<ListOfUserMarketBetsResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(ListOfUserMarketBetsResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<[]>([]);
  }


  transferFunds(body: TransferFundsRequestExc | undefined): Observable<TransferFundsResponse> {
    let url_ = this.baseUrl + "/api/TransferFunds";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response: any) => {
      return this.processTransferFunds(response);
    })).pipe(_observableCatch((response: any) => {
      if (response instanceof HttpResponseBase) {
        try {
          return this.processTransferFunds(response as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<TransferFundsResponse>;
        }
      } else
        return _observableThrow(response) as any as Observable<TransferFundsResponse>;
    }));
  }

  protected processTransferFunds(response: HttpResponseBase): Observable<TransferFundsResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = TransferFundsResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<TransferFundsResponse>(null as any);
  }


  /**
   * @param body (optional)
   * @return Success
   */
  getWallet(body: GetWalletRequest | undefined): Observable<GetWalletResponse> {
    let url_ = this.baseUrl + "/api/GetWallet";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetWallet(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetWallet(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<GetWalletResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<GetWalletResponse>;
    }));
  }

  protected processGetWallet(response: HttpResponseBase): Observable<GetWalletResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = GetWalletResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<GetWalletResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  listOfAllUserManualIDCreationRequestInProduct(body: CheckTokenRequest | undefined): Observable<ListOfManualIDCreationStatusResponse[]> {
    let url_ = this.baseUrl + "/api/ListOfAllUserManualIDCreationRequestInProduct";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processListOfAllUserManualIDCreationRequestInProduct(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processListOfAllUserManualIDCreationRequestInProduct(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<ListOfManualIDCreationStatusResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<ListOfManualIDCreationStatusResponse[]>;
    }));
  }

  protected processListOfAllUserManualIDCreationRequestInProduct(response: HttpResponseBase): Observable<ListOfManualIDCreationStatusResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(ListOfManualIDCreationStatusResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  // listOfManualIDCreationRequestInProduct(body: CheckTokenRequest | undefined): Observable<ListOfManualIDCreationStatusResponse[]> {
  //   let url_ = this.baseUrl + "/api/ListOfManualIDCreationRequestInProduct";
  //   url_ = url_.replace(/[?&]$/, "");
  //
  //   const content_ = JSON.stringify(body);
  //
  //   let options_: any = {
  //     body: content_,
  //     observe: "response",
  //     responseType: "blob",
  //     headers: new HttpHeaders({
  //       "Content-Type": "application/json-patch+json",
  //       "Accept": "text/plain"
  //     })
  //   };
  //
  //   return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
  //     return this.processListOfManualIDCreationRequestInProduct(response_);
  //   })).pipe(_observableCatch((response_: any) => {
  //     if (response_ instanceof HttpResponseBase) {
  //       try {
  //         return this.processListOfManualIDCreationRequestInProduct(response_ as any);
  //       } catch (e) {
  //         return _observableThrow(e) as any as Observable<ListOfManualIDCreationStatusResponse[]>;
  //       }
  //     } else
  //       return _observableThrow(response_) as any as Observable<ListOfManualIDCreationStatusResponse[]>;
  //   }));
  // }
  //
  // protected processListOfManualIDCreationRequestInProduct(response: HttpResponseBase): Observable<ListOfManualIDCreationStatusResponse[]> {
  //   const status = response.status;
  //   const responseBlob =
  //     response instanceof HttpResponse ? response.body :
  //       (response as any).error instanceof Blob ? (response as any).error : undefined;
  //
  //   let _headers: any = {};
  //   if (response.headers) {
  //     for (let key of response.headers.keys()) {
  //       _headers[key] = response.headers.get(key);
  //     }
  //   }
  //   if (status === 200) {
  //     return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
  //       let result200: any = null;
  //       let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
  //       if (Array.isArray(resultData200)) {
  //         result200 = [] as any;
  //         for (let item of resultData200)
  //           result200!.push(ListOfManualIDCreationStatusResponse.fromJS(item));
  //       } else {
  //         result200 = <any>null;
  //       }
  //       return _observableOf(result200);
  //     }));
  //   } else if (status !== 200 && status !== 204) {
  //     return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
  //       return throwException("An unexpected server error occurred.", status, _responseText, _headers);
  //     }));
  //   }
  //   return _observableOf<any[]>(null as any);
  // }
  /**
   * @param body (optional)
   * @return Success
   */
  getListOfIDCreationRequest(body: GetListOfIDCreationRequest | undefined): Observable<ListOfManualIDCreationResponse[]> {
    let url_ = this.baseUrl + "/api/GetListOfIDCreationRequest";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetListOfIDCreationRequest(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetListOfIDCreationRequest(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<ListOfManualIDCreationResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<ListOfManualIDCreationResponse[]>;
    }));
  }

  protected processGetListOfIDCreationRequest(response: HttpResponseBase): Observable<ListOfManualIDCreationResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(ListOfManualIDCreationResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }


  /**
   * @param body (optional)
   * @return Success
   */
  getUserNameStatusInManualIDCreation(body: GetUserNameStatusInManualIDCreationRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/GetUserNameStatusInManualIDCreation";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetUserNameStatusInManualIDCreation(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetUserNameStatusInManualIDCreation(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processGetUserNameStatusInManualIDCreation(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  listOfAllUserManualDepositAndWithdrawRequestInProduct(body: CheckTokenRequest | undefined): Observable<ListOfManualDepositAndWithdrawResponse[]> {
    let url_ = this.baseUrl + "/api/ListOfAllUserManualDepositAndWithdrawRequestInProduct";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processListOfAllUserManualDepositAndWithdrawRequestInProduct(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processListOfAllUserManualDepositAndWithdrawRequestInProduct(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<ListOfManualDepositAndWithdrawResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<ListOfManualDepositAndWithdrawResponse[]>;
    }));
  }

  protected processListOfAllUserManualDepositAndWithdrawRequestInProduct(response: HttpResponseBase): Observable<ListOfManualDepositAndWithdrawResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(ListOfManualDepositAndWithdrawResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

    /**
     * @param body (optional) 
     * @return Success
     */
    listOfGeneralPaymentProviderForClient(body: CheckTokenRequest | undefined): Observable<ListOfGeneralPaymentProviderForResponse[]> {
      let url_ = this.baseUrl + "/api/ListOfGeneralPaymentProviderForClient";
      url_ = url_.replace(/[?&]$/, "");

      const content_ = JSON.stringify(body);

      let options_ : any = {
          body: content_,
          observe: "response",
          responseType: "blob",
          headers: new HttpHeaders({
              "Content-Type": "application/json-patch+json",
              "Accept": "text/plain"
          })
      };

      return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
          return this.processListOfGeneralPaymentProviderForClient(response_);
      })).pipe(_observableCatch((response_: any) => {
          if (response_ instanceof HttpResponseBase) {
              try {
                  return this.processListOfGeneralPaymentProviderForClient(response_ as any);
              } catch (e) {
                  return _observableThrow(e) as any as Observable<ListOfGeneralPaymentProviderForResponse[]>;
              }
          } else
              return _observableThrow(response_) as any as Observable<ListOfGeneralPaymentProviderForResponse[]>;
      }));
  }

  protected processListOfGeneralPaymentProviderForClient(response: HttpResponseBase): Observable<ListOfGeneralPaymentProviderForResponse[]> {
      const status = response.status;
      const responseBlob =
          response instanceof HttpResponse ? response.body :
          (response as any).error instanceof Blob ? (response as any).error : undefined;

      let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
      if (status === 200) {
          return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
          let result200: any = null;
          let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
          if (Array.isArray(resultData200)) {
              result200 = [] as any;
              for (let item of resultData200)
                  result200!.push(ListOfGeneralPaymentProviderForResponse.fromJS(item));
          }
          else {
              result200 = <any>null;
          }
          return _observableOf(result200);
          }));
      } else if (status !== 200 && status !== 204) {
          return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
          }));
      }
      return _observableOf<any>(null as any);
  }

  /**
     * @param body (optional) 
     * @return Success
     */
  userPasswordResetRequest(body: ResetPasswordRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/UserPasswordResetRequest";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_ : any = {
        body: content_,
        observe: "response",
        responseType: "blob",
        headers: new HttpHeaders({
            "Content-Type": "application/json-patch+json",
            "Accept": "text/plain"
        })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
        return this.processUserPasswordResetRequest(response_);
    })).pipe(_observableCatch((response_: any) => {
        if (response_ instanceof HttpResponseBase) {
            try {
                return this.processUserPasswordResetRequest(response_ as any);
            } catch (e) {
                return _observableThrow(e) as any as Observable<CallResponse>;
            }
        } else
            return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
}

protected processUserPasswordResetRequest(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
        response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
    if (status === 200) {
        return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
        }));
    } else if (status !== 200 && status !== 204) {
        return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }));
    }
    return _observableOf<CallResponse>(null as any);
}
/**
     * @param body (optional) 
     * @return Success
     */
resetUserPassword(body: ResetNewPasswordRequest | undefined): Observable<CallResponse> {
  let url_ = this.baseUrl + "/api/ResetUserPassword";
  url_ = url_.replace(/[?&]$/, "");

  const content_ = JSON.stringify(body);

  let options_ : any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
          "Content-Type": "application/json-patch+json",
          "Accept": "text/plain"
      })
  };

  return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
      return this.processResetUserPassword(response_);
  })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
          try {
              return this.processResetUserPassword(response_ as any);
          } catch (e) {
              return _observableThrow(e) as any as Observable<CallResponse>;
          }
      } else
          return _observableThrow(response_) as any as Observable<CallResponse>;
  }));
}

protected processResetUserPassword(response: HttpResponseBase): Observable<CallResponse> {
  const status = response.status;
  const responseBlob =
      response instanceof HttpResponse ? response.body :
      (response as any).error instanceof Blob ? (response as any).error : undefined;

  let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
  if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
      let result200: any = null;
      let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      result200 = CallResponse.fromJS(resultData200);
      return _observableOf(result200);
      }));
  } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
      return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
  }
  return _observableOf<CallResponse>(null as any);
}

  /**
   * @param body (optional)
   * @return Success
   */
  listOfCompanyPaymentModsForClient(body: CheckTokenRequest | undefined): Observable<ListOfCompanyPaymentModsResponse[]> {
    let url_ = this.baseUrl + "/api/ListOfCompanyPaymentModsForClient";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processListOfCompanyPaymentModsForClient(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processListOfCompanyPaymentModsForClient(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<ListOfCompanyPaymentModsResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<ListOfCompanyPaymentModsResponse[]>;
    }));
  }

  protected processListOfCompanyPaymentModsForClient(response: HttpResponseBase): Observable<ListOfCompanyPaymentModsResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(ListOfCompanyPaymentModsResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }
  /**
   * @param body (optional)
   * @return Success
   */
  externalExchange2Login(body: CheckTokenRequestExc | undefined): Observable<LobbyURLResponse> {
    let url_ = this.baseUrl + "/api/ExternalExchange2Login";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_ : any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
      return this.processExternalExchange2Login(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processExternalExchange2Login(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<LobbyURLResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<LobbyURLResponse>;
    }));
  }

  protected processExternalExchange2Login(response: HttpResponseBase): Observable<LobbyURLResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = LobbyURLResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<LobbyURLResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  atlasLogin(body: LoginAtlasRequest | undefined): Observable<LoginAtlasResponse> {
    let url_ = this.baseUrl + "/api/AtlasLogin";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_ : any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
      return this.processAtlasLogin(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processAtlasLogin(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<LoginAtlasResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<LoginAtlasResponse>;
    }));
  }

  protected processAtlasLogin(response: HttpResponseBase): Observable<LoginAtlasResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = LoginAtlasResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<LoginAtlasResponse>(null as any);
  }
  // adding
  /**
   * @param body (optional)
   * @return Success
   */
  addManualRequestDepositAndWithdrawFromProduct(body: AddManualDWFromProductRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/AddManualRequestDepositAndWithdrawFromProduct";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processAddManualRequestDepositAndWithdrawFromProduct(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processAddManualRequestDepositAndWithdrawFromProduct(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processAddManualRequestDepositAndWithdrawFromProduct(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  // adding
  /**
   * @param body (optional)
   * @return Success
   */
  /**
   * @param body (optional)
   * @return Success
   */
  getUserNameDepositAndWithdrawRequestStatusInProduct(body: GetUserNameTransferFundsStatusInProductRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/GetUserNameDepositAndWithdrawRequestStatusInProduct";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetUserNameDepositAndWithdrawRequestStatusInProduct(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetUserNameDepositAndWithdrawRequestStatusInProduct(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processGetUserNameDepositAndWithdrawRequestStatusInProduct(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  checkManualDepositAndWithdrawResponse(body: checkManualDepositStatusResponse | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/GetUserNameDepositAndWithdrawRequestStatusInProduct";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processCheckManualDepositAndWithdrawResponse(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processCheckManualDepositAndWithdrawResponse(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processCheckManualDepositAndWithdrawResponse(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  verificationForgetPassword(body: VerificationForgetPasswordRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/VerificationForgetPassword";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processVerificationForgetPassword(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processVerificationForgetPassword(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processVerificationForgetPassword(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  verifiyPassword(body: VerificationPasswordRequest | undefined): Observable<VerificationPasswordResponse> {
    let url_ = this.baseUrl + "/api/VerifiyPassword";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processVerifiyPassword(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processVerifiyPassword(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<VerificationPasswordResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<VerificationPasswordResponse>;
    }));
  }

  protected processVerifiyPassword(response: HttpResponseBase): Observable<VerificationPasswordResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = VerificationPasswordResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<VerificationPasswordResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  updatedManualIDCreationRequestInProduct(body: UpdatedManualIDCreationRequestInProductRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/UpdatedManualIDCreationRequestInProduct";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processUpdatedManualIDCreationRequestInProduct(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processUpdatedManualIDCreationRequestInProduct(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processUpdatedManualIDCreationRequestInProduct(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  updateManualRequestDepositAndWithdrawFromProduct(body: UpdateStatusOfManualRequestDepositAndWithdrawFromProductRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/UpdateManualRequestDepositAndWithdrawFromProduct";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processUpdateManualRequestDepositAndWithdrawFromProduct(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processUpdateManualRequestDepositAndWithdrawFromProduct(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processUpdateManualRequestDepositAndWithdrawFromProduct(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

   /**
   * @param body (optional)
   * @return Success
   */
    getProfitAndLossOfProductDetails(body: GetProfitAndLossOfProductDetailsRequest | undefined): Observable<GetProfitAndLossOfProductDetailsResponse[]> {
      let url_ = this.baseUrl + "/api/GetProfitAndLossOfProductDetails";
      url_ = url_.replace(/[?&]$/, "");

      const content_ = JSON.stringify(body);

      let options_: any = {
        body: content_,
        observe: "response",
        responseType: "blob",
        headers: new HttpHeaders({
          "Content-Type": "application/json-patch+json",
          "Accept": "text/plain"
        })
      };

      return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
        return this.processGetProfitAndLossOfProductDetails(response_);
      })).pipe(_observableCatch((response_: any) => {
        if (response_ instanceof HttpResponseBase) {
          try {
            return this.processGetProfitAndLossOfProductDetails(response_ as any);
          } catch (e) {
            return _observableThrow(e) as any as Observable<GetProfitAndLossOfProductDetailsResponse[]>;
          }
        } else
          return _observableThrow(response_) as any as Observable<GetProfitAndLossOfProductDetailsResponse[]>;
      }));
    }

    protected processGetProfitAndLossOfProductDetails(response: HttpResponseBase): Observable<GetProfitAndLossOfProductDetailsResponse[]> {
      const status = response.status;
      const responseBlob =
        response instanceof HttpResponse ? response.body :
          (response as any).error instanceof Blob ? (response as any).error : undefined;

      let _headers: any = {};
      if (response.headers) {
        for (let key of response.headers.keys()) {
          _headers[key] = response.headers.get(key);
        }
      }
      if (status === 200) {
        return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
          let result200: any = null;
          let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
          if (Array.isArray(resultData200)) {
            result200 = [] as any;
            for (let item of resultData200)
              result200!.push(GetProfitAndLossOfProductDetailsResponse.fromJS(item));
          } else {
            result200 = <any>null;
          }
          return _observableOf(result200);
        }));
      } else if (status !== 200 && status !== 204) {
        return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }));
      }
      return _observableOf<[]>(null as any);
    }

  /**
   * @param body (optional)
   * @return Success
   */
  /**
   * @param body (optional)
   * @return Success
   */
  manualIDCreationRequest(body: AddManualIDCreationRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/ManualIDCreationRequest";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processManualIDCreationRequest(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processManualIDCreationRequest(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processManualIDCreationRequest(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
     * @param body (optional)
     * @return Success
     */
   listOfServiceContactNumbers(body: TokenOnlyRequest | undefined): Observable<ListOfServiceContactNumbersResponse[]> {
    let url_ = this.baseUrl + "/api/ListOfServiceContactNumbers";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_ : any = {
        body: content_,
        observe: "response",
        responseType: "blob",
        headers: new HttpHeaders({
            "Content-Type": "application/json-patch+json",
            "Accept": "text/plain"
        })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
        return this.processListOfServiceContactNumbers(response_);
    })).pipe(_observableCatch((response_: any) => {
        if (response_ instanceof HttpResponseBase) {
            try {
                return this.processListOfServiceContactNumbers(response_ as any);
            } catch (e) {
                return _observableThrow(e) as any as Observable<ListOfServiceContactNumbersResponse[]>;
            }
        } else
            return _observableThrow(response_) as any as Observable<ListOfServiceContactNumbersResponse[]>;
    }));
}

protected processListOfServiceContactNumbers(response: HttpResponseBase): Observable<ListOfServiceContactNumbersResponse[]> {
    const status = response.status;
    const responseBlob =
        response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
    if (status === 200) {
        return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
            result200 = [] as any;
            for (let item of resultData200)
                result200!.push(ListOfServiceContactNumbersResponse.fromJS(item));
        }
        else {
            result200 = <any>null;
        }
        return _observableOf(result200);
        }));
    } else if (status !== 200 && status !== 204) {
        return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }));
    }
    return _observableOf<[]>(null as any);
}

   /**
     * @param body (optional)
     * @return Success
     */
    getListOfProducts(body: TokenOnlyRequest | undefined): Observable<ProductListResponse[]> {
      let url_ = this.baseUrl + "/api/GetListOfProducts";
      url_ = url_.replace(/[?&]$/, "");

      const content_ = JSON.stringify(body);

      let options_ : any = {
          body: content_,
          observe: "response",
          responseType: "blob",
          headers: new HttpHeaders({
              "Content-Type": "application/json-patch+json",
              "Accept": "text/plain"
          })
      };

      return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
          return this.processGetListOfProducts(response_);
      })).pipe(_observableCatch((response_: any) => {
          if (response_ instanceof HttpResponseBase) {
              try {
                  return this.processGetListOfProducts(response_ as any);
              } catch (e) {
                  return _observableThrow(e) as any as Observable<ProductListResponse[]>;
              }
          } else
              return _observableThrow(response_) as any as Observable<ProductListResponse[]>;
      }));
  }

  protected processGetListOfProducts(response: HttpResponseBase): Observable<ProductListResponse[]> {
      const status = response.status;
      const responseBlob =
          response instanceof HttpResponse ? response.body :
          (response as any).error instanceof Blob ? (response as any).error : undefined;

      let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
      if (status === 200) {
          return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
          let result200: any = null;
          let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
          if (Array.isArray(resultData200)) {
              result200 = [] as any;
              for (let item of resultData200)
                  result200!.push(ProductListResponse.fromJS(item));
          }
          else {
              result200 = <any>null;
          }
          return _observableOf(result200);
          }));
      } else if (status !== 200 && status !== 204) {
          return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
          }));
      }
      return _observableOf<[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  listOfManualDepositAndWithdrawRequestInProduct(body: CheckTokenRequest | undefined): Observable<ListOfManualDepositAndWithdrawResponse[]> {
    let url_ = this.baseUrl + "/api/ListOfManualDepositAndWithdrawRequestInProduct";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processListOfManualDepositAndWithdrawRequestInProduct(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processListOfManualDepositAndWithdrawRequestInProduct(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<ListOfManualDepositAndWithdrawResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<ListOfManualDepositAndWithdrawResponse[]>;
    }));
  }

  protected processListOfManualDepositAndWithdrawRequestInProduct(response: HttpResponseBase): Observable<ListOfManualDepositAndWithdrawResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(ListOfManualDepositAndWithdrawResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  login(body: LoginRequest | undefined): Observable<LoginResponse> {
    let url_ = this.baseUrl + "/api/Login";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processLogin(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processLogin(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<LoginResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<LoginResponse>;
    }));
  }

  protected processLogin(response: HttpResponseBase): Observable<LoginResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = LoginResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<LoginResponse>(null as any);
  }


  signUpVerifiyOTP(body: VerificationNumberRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/SignUpVerifiyOTP";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processSignUpVerifiyOTP(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processSignUpVerifiyOTP(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processSignUpVerifiyOTP(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  loginNumber(body: any | undefined): Observable<LoginNumberResponse> {
    let url_ = this.baseUrl + "/api/LoginNumber";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };
    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processLoginNumber(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processLoginNumber(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<LoginNumberResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<LoginNumberResponse>;
    }));
  }

  protected processLoginNumber(response: HttpResponseBase): Observable<LoginNumberResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = LoginNumberResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<LoginNumberResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  plusMinus(body: PlusMinusRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/PlusMinus";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processPlusMinus(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processPlusMinus(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processPlusMinus(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  productsList(body: ProductListRequest | undefined): Observable<ProductListResponse[]> {
    let url_ = this.baseUrl + "/api/ProductsList";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processProductsList(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processProductsList(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<ProductListResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<ProductListResponse[]>;
    }));
  }

  protected processProductsList(response: HttpResponseBase): Observable<ProductListResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(ProductListResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  qtechRequest(body: QtechGameRequest | undefined): Observable<any> {
    let url_ = this.baseUrl + "/api/QtechRequest";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processQtechRequest(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processQtechRequest(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<any>;
        }
      } else
        return _observableThrow(response_) as any as Observable<void>;
    }));
  }

  protected processQtechRequest(response: HttpResponseBase): Observable<any> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);

        return _observableOf(resultData200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<void>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  qtechDemoRequest(body: QtechGameRequest | undefined): Observable<any> {
    let url_ = this.baseUrl + "/api/QtechDemoRequest";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processQtechDemoRequest(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processQtechDemoRequest(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<any>;
        }
      } else
        return _observableThrow(response_) as any as Observable<void>;
    }));
  }

  protected processQtechDemoRequest(response: HttpResponseBase): Observable<any> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);

        return _observableOf(resultData200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<void>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  subAccountsForCampaign(body: SubAccountForCampaignRequest | undefined): Observable<SubAccountForCampaignResponse[]> {
    let url_ = this.baseUrl + "/api/SubAccountsForCampaign";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processSubAccountsForCampaign(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processSubAccountsForCampaign(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<SubAccountForCampaignResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<SubAccountForCampaignResponse[]>;
    }));
  }

  protected processSubAccountsForCampaign(response: HttpResponseBase): Observable<SubAccountForCampaignResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(SubAccountForCampaignResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  addUpdateAffiliation(body: AddUpdateAffiliationRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/AddUpdateAffiliation";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processAddUpdateAffiliation(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processAddUpdateAffiliation(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processAddUpdateAffiliation(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  getListOfAllUserIds(body: ListOfAllUserIdsRequest | undefined): Observable<ListOfAllUserResponse[]> {
    let url_ = this.baseUrl + "/api/GetListOfAllUserIds";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetListOfAllUserIds(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetListOfAllUserIds(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<ListOfAllUserResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<ListOfAllUserResponse[]>;
    }));
  }

  protected processGetListOfAllUserIds(response: HttpResponseBase): Observable<ListOfAllUserResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(ListOfAllUserResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  getClientDepositAndWidrawRequestInProduct(body: GetClientDepositAndWidrawRequestInProductRequest | undefined): Observable<GetClientDepositAndWidrawRequestInProducResponse[]> {
    let url_ = this.baseUrl + "/api/GetClientDepositAndWidrawRequestInProduct";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetClientDepositAndWidrawRequestInProduct(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetClientDepositAndWidrawRequestInProduct(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<GetClientDepositAndWidrawRequestInProducResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<GetClientDepositAndWidrawRequestInProducResponse[]>;
    }));
  }

  protected processGetClientDepositAndWidrawRequestInProduct(response: HttpResponseBase): Observable<GetClientDepositAndWidrawRequestInProducResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(GetClientDepositAndWidrawRequestInProducResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  affiliateList(body: GetListOfAffiliationsRequest | undefined): Observable<GetListOfAffiliationsResponse[]> {
    let url_ = this.baseUrl + "/api/AffiliateList";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processAffiliateList(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processAffiliateList(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<GetListOfAffiliationsResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<GetListOfAffiliationsResponse[]>;
    }));
  }

  protected processAffiliateList(response: HttpResponseBase): Observable<GetListOfAffiliationsResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(GetListOfAffiliationsResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  affiliateSubAccountsList(body: GetListOfAffiliatSubAccountsRequest | undefined): Observable<GetListOfAffiliatSubAccountsResponse[]> {
    let url_ = this.baseUrl + "/api/AffiliateSubAccountsList";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processAffiliateSubAccountsList(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processAffiliateSubAccountsList(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<GetListOfAffiliatSubAccountsResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<GetListOfAffiliatSubAccountsResponse[]>;
    }));
  }

  protected processAffiliateSubAccountsList(response: HttpResponseBase): Observable<GetListOfAffiliatSubAccountsResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(GetListOfAffiliatSubAccountsResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  subAccountsList(body: SubAccountRequest | undefined): Observable<SubAccountResponse[]> {
    let url_ = this.baseUrl + "/api/SubAccountsList";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processSubAccountsList(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processSubAccountsList(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<SubAccountResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<SubAccountResponse[]>;
    }));
  }

  protected processSubAccountsList(response: HttpResponseBase): Observable<SubAccountResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(SubAccountResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  updatePaymentApexPay(body: UpdatePaymentApexPayRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/UpdatePaymentApexPay";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processUpdatePaymentApexPay(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processUpdatePaymentApexPay(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processUpdatePaymentApexPay(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }


  updateSignUpDetail(body: SignUpDetailRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/UpdateSignUpDetail";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processUpdateSignUpDetail(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processUpdateSignUpDetail(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processUpdateSignUpDetail(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  getPaymentKycSnap(body: GetSnapRequest | undefined): Observable<GetSnapResponse> {
    let url_ = this.baseUrl + "/api/GetPaymentKycSnap";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetPaymentKycSnap(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetPaymentKycSnap(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<GetSnapResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<GetSnapResponse>;
    }));
  }

  protected processGetPaymentKycSnap(response: HttpResponseBase): Observable<GetSnapResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = GetSnapResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<GetSnapResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  userSignUp(body: UserSignUpRequest | undefined): Observable<CallResponse> {
    let url_ = this.baseUrl + "/api/UserSignUp";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processUserSignUp(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processUserSignUp(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<CallResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<CallResponse>;
    }));
  }

  protected processUserSignUp(response: HttpResponseBase): Observable<CallResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CallResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CallResponse>(null as any);
  }


  /**
   * @param body (optional)
   * @return Success
   */
  productUserAccountStatement(body: ProductUserAccountStatementRequest | undefined): Observable<AccountStatementResponse[]> {
    let url_ = this.baseUrl + "/api/ProductUserAccountStatement";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processProductUserAccountStatement(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processProductUserAccountStatement(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<AccountStatementResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<AccountStatementResponse[]>;
    }));
  }

  protected processProductUserAccountStatement(response: HttpResponseBase): Observable<AccountStatementResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(AccountStatementResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<AccountStatementResponse[]>();
  }

  /**
   * @param body (optional)
   * @return Success
   */
  productUserAccountStatementDepostOrWithdraw(body: ProductUserAccountStatementDepositOrWithdrawRequest | undefined): Observable<AccountStatementResponse[]> {
    let url_ = this.baseUrl + "/api/ProductUserAccountStatementDepostOrWithdraw";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processProductUserAccountStatementDepostOrWithdraw(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processProductUserAccountStatementDepostOrWithdraw(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<AccountStatementResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<AccountStatementResponse[]>;
    }));
  }

  protected processProductUserAccountStatementDepostOrWithdraw(response: HttpResponseBase): Observable<AccountStatementResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(AccountStatementResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<AccountStatementResponse[]>();
  }


//   OpenPayemnt(body: PaymentRequestModel | undefined, cancelToken?: CancelToken | undefined): Promise<ExceptionResponse> {
//     let url_ = this.baseUrl + "/exchangeapi/client/paymentrequestopen";
//     url_ = url_.replace(/[?&]$/, "");
//
//     const content_ = JSON.stringify(body);
//
//     let options_: AxiosRequestConfig = {
//       data: content_,
//       method: "POST",
//       url: url_,
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       cancelToken
//     };
//
//     return this.instance.request(options_).catch((_error: any) => {
//       if (isAxiosError(_error) && _error.response) {
//         return _error.response;
//       } else {
//         throw _error;
//       }
//     }).then((_response: AxiosResponse) => {
//       return this.processOpenPayemnt(_response);
//     });
//   }

//   protected processOpenPayemnt(response: AxiosResponse): Promise<ExceptionResponse> {
//     const status = response.status;
//     let _headers: any = {};
//     if (response.headers && typeof response.headers === "object") {
//       for (let k in response.headers) {
//         if (response.headers.hasOwnProperty(k)) {
//           _headers[k] = response.headers[k];
//         }
//       }
//     }
//     if (status === 200) {
//       const _responseText = response.data;
//       let result200: any = null;
//       let resultData200 = _responseText;
//       result200 = CreatePaymentResp.fromJS(resultData200);
//       return Promise.resolve<ExceptionResponse>(result200);
//
//     } else if (status === 417) {
//       const _responseText = response.data;
//       return throwException1("Client Error", status, _responseText, _headers);
//
//     } else {
//       const _responseText = response.data;
//       return throwException1("Error", status, _responseText, _headers);
//
//     }
//   }

  //
  OpenPayemnt(body: PaymentRequestModel | undefined): Observable<ExceptionResponse> {
    let url_ = this.baseUrl + "/exchangeapi/client/paymentrequestopen";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processOpenPayemnt(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processOpenPayemnt(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<ExceptionResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<ExceptionResponse>;
    }));
  }

  protected processOpenPayemnt(response: HttpResponseBase): Observable<ExceptionResponse> {
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status == '200') {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = GetOrderYesBankResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== '200' && status !== '204') {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", Number(status), _responseText, _headers);
      }));
    }
    return _observableOf<ExceptionResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */

  createYesBankOrder(body: PaymentRequestModel | undefined): Observable<GetOrderYesBankResponse> {
    let url_ = this.baseUrl + "/api/CreateYesBankOrder";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processCreateYesBankOrder(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processCreateYesBankOrder(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<GetOrderYesBankResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<GetOrderYesBankResponse>;
    }));
  }

  protected processCreateYesBankOrder(response: HttpResponseBase): Observable<GetOrderYesBankResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = GetOrderYesBankResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<GetOrderYesBankResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  createOnlinePaymentOrder(body: CreateOnlinePaymentOrderRequest | undefined): Observable<GetOnlinePaymentOrderResponse> {
    let url_ = this.baseUrl + "/api/CreateOnlinePaymentOrder";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processCreateOnlinePaymentOrder(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processCreateOnlinePaymentOrder(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<GetOnlinePaymentOrderResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<GetOnlinePaymentOrderResponse>;
    }));
  }

  protected processCreateOnlinePaymentOrder(response: HttpResponseBase): Observable<GetOnlinePaymentOrderResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = GetOnlinePaymentOrderResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<GetOnlinePaymentOrderResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  productUserList(body: CheckTokenRequest | undefined): Observable<ListOfUserProductUserResponse[]> {
    let url_ = this.baseUrl + "/api/ProductUserList";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processProductUserList(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processProductUserList(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<ListOfUserProductUserResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<ListOfUserProductUserResponse[]>;
    }));
  }

  protected processProductUserList(response: HttpResponseBase): Observable<ListOfUserProductUserResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(ListOfUserProductUserResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  getOrderApexPaymentList(body: ListOfOrderApexPaymentRequest | undefined): Observable<ListOfOrderApexPaymentResponse[]> {
    let url_ = this.baseUrl + "/api/GetOrderApexPaymentList";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetOrderApexPaymentList(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetOrderApexPaymentList(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<ListOfOrderApexPaymentResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<ListOfOrderApexPaymentResponse[]>;
    }));
  }

  protected processGetOrderApexPaymentList(response: HttpResponseBase): Observable<ListOfOrderApexPaymentResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(ListOfOrderApexPaymentResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  userBetDetails(body: UserBetsRequest | undefined): Observable<BetsResponse[]> {
    let url_ = this.baseUrl + "/api/UserBetDetails";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processUserBetDetails(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processUserBetDetails(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<BetsResponse[]>;
        }
      } else
        return _observableThrow(response_) as any as Observable<BetsResponse[]>;
    }));
  }

  protected processUserBetDetails(response: HttpResponseBase): Observable<BetsResponse[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(BetsResponse.fromJS(item));
        } else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<[]>(null as any);
  }
   /**
     * @param body (optional) 
     * @return Success
     */
   getUserProductWallet(body: UserProductWalletPositionRequest | undefined): Observable<UserProductWalletPositionResponse> {
    let url_ = this.baseUrl + "/api/GetUserProductWallet";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_ : any = {
        body: content_,
        observe: "response",
        responseType: "blob",
        headers: new HttpHeaders({
            "Content-Type": "application/json-patch+json",
            "Accept": "text/plain"
        })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
        return this.processGetUserProductWallet(response_);
    })).pipe(_observableCatch((response_: any) => {
        if (response_ instanceof HttpResponseBase) {
            try {
                return this.processGetUserProductWallet(response_ as any);
            } catch (e) {
                return _observableThrow(e) as any as Observable<UserProductWalletPositionResponse>;
            }
        } else
            return _observableThrow(response_) as any as Observable<UserProductWalletPositionResponse>;
    }));
}

protected processGetUserProductWallet(response: HttpResponseBase): Observable<UserProductWalletPositionResponse> {
    const status = response.status;
    const responseBlob =
        response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
    if (status === 200) {
        return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = UserProductWalletPositionResponse.fromJS(resultData200);
        return _observableOf(result200);
        }));
    } else if (status !== 200 && status !== 204) {
        return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }));
    }
    return _observableOf<UserProductWalletPositionResponse>(null as any);
}


  /**
   * @param body (optional)
   * @return Success
   */
  verifiyOTP(body: VerificationNumberRequest | undefined): Observable<VerificationNumberResponse> {
    debugger
    let url_ = this.baseUrl + "/api/VerifiyOTP";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processVerifiyOTP(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processVerifiyOTP(response_ as any);
        } catch (e) {
          return _observableThrow(e) as any as Observable<VerificationNumberResponse>;
        }
      } else
        return _observableThrow(response_) as any as Observable<VerificationNumberResponse>;
    }));
  }

  protected processVerifiyOTP(response: HttpResponseBase): Observable<VerificationNumberResponse> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (response as any).error instanceof Blob ? (response as any).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = VerificationNumberResponse.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<VerificationNumberResponse>(null as any);


  }
}

export function _window(): any {
  // return the global native browser window object
  return window;
}


function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
  if (result !== null && result !== undefined)
    return _observableThrow(result);
  else
    return _observableThrow(new ApiException(message, status, response, headers, null));
}

function throwException1(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
  if (result !== null && result !== undefined)
    return _observableThrow(result);
  else
    return _observableThrow(new ApiException(message, status, response, headers, null));
}

export function isAxiosError(obj: any | undefined): obj is AxiosError {
  return obj && obj.isAxiosError === true;
}

function blobToText(blob: any): Observable<string> {
  return new Observable<string>((observer: any) => {
    if (!blob) {
      observer.next("");
      observer.complete();
    } else {
      let reader = new FileReader();
      reader.onload = event => {
        observer.next((event.target as any).result);
        observer.complete();
      };
      reader.readAsText(blob);
    }
  });
}
