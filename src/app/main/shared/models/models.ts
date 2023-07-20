export class FileParameter {
    data: any;
    fileName: string | undefined;
  }
  
  export class QTDBResponse implements IQTDBResponse {
    playerId?: string | undefined;
    displayName?: string | undefined;
    currency?: string | undefined;
    country?: string | undefined;
    gender?: string | undefined;
    lang?: string | undefined;
    gameTypes?: string[] | undefined;
    mode?: string | undefined;
    device?: string | undefined;
    walletSessionId?: string | undefined;
    gameLaunchTarget?: string | undefined;
    jurisdiction?: string | undefined;
    returnUrl?: string | undefined;
    authToken_?: string | undefined;
    statusCode__?: number;
    errorDescription__?: string | undefined;
  
    constructor(data?: IQTDBResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.playerId = _data["playerId"];
        this.displayName = _data["displayName"];
        this.currency = _data["currency"];
        this.country = _data["country"];
        this.gender = _data["gender"];
        this.lang = _data["lang"];
        if (Array.isArray(_data["gameTypes"])) {
          this.gameTypes = [] as any;
          for (let item of _data["gameTypes"])
            this.gameTypes!.push(item);
        }
        this.mode = _data["mode"];
        this.device = _data["device"];
        this.walletSessionId = _data["walletSessionId"];
        this.gameLaunchTarget = _data["gameLaunchTarget"];
        this.jurisdiction = _data["jurisdiction"];
        this.returnUrl = _data["returnUrl"];
        this.authToken_ = _data["authToken "];
        this.statusCode__ = _data["statusCode  "];
        this.errorDescription__ = _data["errorDescription  "];
      }
    }
  
    static fromJS(data: any): QTDBResponse {
      data = typeof data === 'object' ? data : {};
      let result = new QTDBResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["playerId"] = this.playerId;
      data["displayName"] = this.displayName;
      data["currency"] = this.currency;
      data["country"] = this.country;
      data["gender"] = this.gender;
      data["lang"] = this.lang;
      if (Array.isArray(this.gameTypes)) {
        data["gameTypes"] = [];
        for (let item of this.gameTypes)
          data["gameTypes"].push(item);
      }
      data["mode"] = this.mode;
      data["device"] = this.device;
      data["walletSessionId"] = this.walletSessionId;
      data["gameLaunchTarget"] = this.gameLaunchTarget;
      data["jurisdiction"] = this.jurisdiction;
      data["returnUrl"] = this.returnUrl;
      data["authToken "] = this.authToken_;
      data["statusCode  "] = this.statusCode__;
      data["errorDescription  "] = this.errorDescription__;
      return data;
    }
  }
  
  export class BannerSettingsResponse implements IBannerSettingsResponse {
    id?: number;
    imageType?: string | undefined;
    routLink?: string | undefined;
    isShow?: string | undefined;
    theme?: string | undefined;
    forLanguage?: string | undefined;
    websiteName?: string | undefined;
    forMobile?: boolean;
  
    constructor(data?: IBannerSettingsResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
  
    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.imageType = _data["imageType"];
            this.routLink = _data["routLink"];
            this.isShow = _data["isShow"];
            this.theme = _data["theme"];
            this.forLanguage = _data["forLanguage"];
            this.websiteName = _data["websiteName"];
            this.forMobile = _data["forMobile"];
        }
    }
  
    static fromJS(data: any): BannerSettingsResponse {
        data = typeof data === 'object' ? data : {};
        let result = new BannerSettingsResponse();
        result.init(data);
        return result;
    }
  
    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["imageType"] = this.imageType;
        data["routLink"] = this.routLink;
        data["isShow"] = this.isShow;
        data["theme"] = this.theme;
        data["forLanguage"] = this.forLanguage;
        data["websiteName"] = this.websiteName;
        data["forMobile"] = this.forMobile;
        return data;
    }
  }
  
  export interface IBannerSettingsResponse {
    id?: number;
    imageType?: string | undefined;
    routLink?: string | undefined;
    isShow?: string | undefined;
    theme?: string | undefined;
    forLanguage?: string | undefined;
    websiteName?: string | undefined;
    forMobile?: boolean;
  }
  
  export class ExternalExchangeRequest implements IExternalExchangeRequest {
    token?: string | undefined;
    gameId?: string | undefined;
  
    constructor(data?: IExternalExchangeRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
  
    init(_data?: any) {
        if (_data) {
            this.token = _data["token"];
            this.gameId = _data["gameId"];
        }
    }
  
    static fromJS(data: any): ExternalExchangeRequest {
        data = typeof data === 'object' ? data : {};
        let result = new ExternalExchangeRequest();
        result.init(data);
        return result;
    }
  
    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["token"] = this.token;
        data["gameId"] = this.gameId;
        return data;
    }
  }
  
  export interface IExternalExchangeRequest {
    token?: string | undefined;
    gameId?: string | undefined;
  }
  
  export class GetProfitAndLossOfProductDetailsRequest implements IGetProfitAndLossOfProductDetailsRequest {
    productID?: number;
    from?: Date;
    to?: Date;
    startRecord?: number;
    viewRecords?: number | undefined;
    token?: string | undefined;
  
    constructor(data?: IGetProfitAndLossOfProductDetailsRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.productID = _data["productID"];
        this.from = _data["from"] ? new Date(_data["from"].toString()) : <any>undefined;
        this.to = _data["to"] ? new Date(_data["to"].toString()) : <any>undefined;
        this.startRecord = _data["startRecord"];
        this.viewRecords = _data["viewRecords"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): GetProfitAndLossOfProductDetailsRequest {
      data = typeof data === 'object' ? data : {};
      let result = new GetProfitAndLossOfProductDetailsRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["productID"] = this.productID;
      data["from"] = this.from ? this.from.toISOString() : <any>undefined;
      data["to"] = this.to ? this.to.toISOString() : <any>undefined;
      data["startRecord"] = this.startRecord;
      data["viewRecords"] = this.viewRecords;
      data["token"] = this.token;
      return data;
    }
  }
  
  export class GetProfitAndLossOfProductDetailsResponse implements IGetProfitAndLossOfProductDetailsResponse {
    refID?: number;
    transactionDate?: Date;
    transactionStatus?: string | undefined;
    amount?: number;
    description?: string | undefined;
    totalRecords?: number;
  
    constructor(data?: IGetProfitAndLossOfProductDetailsResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.refID = _data["refID"];
        this.transactionDate = _data["transactionDate"] ? new Date(_data["transactionDate"].toString()) : <any>undefined;
        this.transactionStatus = _data["transactionStatus"];
        this.amount = _data["amount"];
        this.description = _data["description"];
        this.totalRecords = _data["totalRecords"];
      }
    }
  
    static fromJS(data: any): GetProfitAndLossOfProductDetailsResponse {
      data = typeof data === 'object' ? data : {};
      let result = new GetProfitAndLossOfProductDetailsResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["refID"] = this.refID;
      data["transactionDate"] = this.transactionDate ? this.transactionDate.toISOString() : <any>undefined;
      data["transactionStatus"] = this.transactionStatus;
      data["amount"] = this.amount;
      data["description"] = this.description;
      data["totalRecords"] = this.totalRecords;
      return data;
    }
  }
  
  export interface IGetProfitAndLossOfProductDetailsResponse {
    refID?: number;
    transactionDate?: Date;
    transactionStatus?: string | undefined;
    amount?: number;
    description?: string | undefined;
    totalRecords?: number;
  }
  
  export interface IGetProfitAndLossOfProductDetailsRequest {
    productID?: number;
    from?: Date;
    to?: Date;
    startRecord?: number;
    viewRecords?: number | undefined;
    token?: string | undefined;
  }
  
  export class GetProfitAndLossOfProcutDetailsRequest implements IGetProfitAndLossOfProcutDetailsRequest {
    productID?: number;
    from?: Date;
    to?: Date;
    token?: string | undefined;
  
    constructor(data?: IGetProfitAndLossOfProcutDetailsRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.productID = _data["productID"];
        this.from = _data["from"] ? new Date(_data["from"].toString()) : <any>undefined;
        this.to = _data["to"] ? new Date(_data["to"].toString()) : <any>undefined;
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): GetProfitAndLossOfProcutDetailsRequest {
      data = typeof data === 'object' ? data : {};
      let result = new GetProfitAndLossOfProcutDetailsRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["productID"] = this.productID;
      data["from"] = this.from ? this.from.toISOString() : <any>undefined;
      data["to"] = this.to ? this.to.toISOString() : <any>undefined;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IGetProfitAndLossOfProcutDetailsRequest {
    productID?: number;
    from?: Date;
    to?: Date;
    token?: string | undefined;
  }
  
  export class GetProfitAndLossOfProcutDetailsResponse implements IGetProfitAndLossOfProcutDetailsResponse {
    refID?: number;
    transactionDate?: Date;
    transactionStatus?: string | undefined;
    amount?: number;
    description?: string | undefined;
  
    constructor(data?: IGetProfitAndLossOfProcutDetailsResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.refID = _data["refID"];
        this.transactionDate = _data["transactionDate"] ? new Date(_data["transactionDate"].toString()) : <any>undefined;
        this.transactionStatus = _data["transactionStatus"];
        this.amount = _data["amount"];
        this.description = _data["description"];
      }
    }
  
    static fromJS(data: any): GetProfitAndLossOfProcutDetailsResponse {
      data = typeof data === 'object' ? data : {};
      let result = new GetProfitAndLossOfProcutDetailsResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["refID"] = this.refID;
      data["transactionDate"] = this.transactionDate ? this.transactionDate.toISOString() : <any>undefined;
      data["transactionStatus"] = this.transactionStatus;
      data["amount"] = this.amount;
      data["description"] = this.description;
      return data;
    }
  }
  
  export class GetAllProfitAndLossOfProductsRequest implements IGetAllProfitAndLossOfProductsRequest {
    from?: Date;
    to?: Date;
    startRecord?: number | undefined;
    viewRecords?: number | undefined;
    token?: string | undefined;
  
    constructor(data?: IGetAllProfitAndLossOfProductsRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.from = _data["from"] ? new Date(_data["from"].toString()) : <any>undefined;
        this.to = _data["to"] ? new Date(_data["to"].toString()) : <any>undefined;
        this.startRecord = _data["startRecord"];
        this.viewRecords = _data["viewRecords"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): GetAllProfitAndLossOfProductsRequest {
      data = typeof data === 'object' ? data : {};
      let result = new GetAllProfitAndLossOfProductsRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["from"] = this.from ? this.from.toISOString() : <any>undefined;
      data["to"] = this.to ? this.to.toISOString() : <any>undefined;
      data["startRecord"] = this.startRecord;
      data["viewRecords"] = this.viewRecords;
      data["token"] = this.token;
      return data;
    }
  }
  export class GetClientDepositAndWidrawRequestInProducResponse implements IGetClientDepositAndWidrawRequestInProducResponse {
    orderID?: number;
    userName?: string | undefined;
    createUserName?: string | undefined;
    productID?: number;
    productTitle?: string | undefined;
    webSite?: string | undefined;
    agencyCode?: string | undefined;
    agentUserName?: string | undefined;
    agentPassword?: string | undefined;
    amount?: number;
    appKey?: string | undefined;
    transID?: number;
    apiToken?: string | undefined;
    parent?: string | undefined;
    totalRecords?: number;
  
    constructor(data?: IGetClientDepositAndWidrawRequestInProducResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.orderID = _data["orderID"];
        this.userName = _data["userName"];
        this.createUserName = _data["createUserName"];
        this.productID = _data["productID"];
        this.productTitle = _data["productTitle"];
        this.webSite = _data["webSite"];
        this.agencyCode = _data["agencyCode"];
        this.agentUserName = _data["agentUserName"];
        this.agentPassword = _data["agentPassword"];
        this.amount = _data["amount"];
        this.appKey = _data["appKey"];
        this.transID = _data["TransID"];
        this.apiToken = _data["apiToken"];
        this.parent = _data["parent"];
        this.totalRecords = _data["totalRecords"];
      }
    }
  
    static fromJS(data: any): GetClientDepositAndWidrawRequestInProducResponse {
      data = typeof data === 'object' ? data : {};
      let result = new GetClientDepositAndWidrawRequestInProducResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["orderID"] = this.orderID;
      data["userName"] = this.userName;
      data["createUserName"] = this.createUserName;
      data["productID"] = this.productID;
      data["productTitle"] = this.productTitle;
      data["webSite"] = this.webSite;
      data["agencyCode"] = this.agencyCode;
      data["agentUserName"] = this.agentUserName;
      data["agentPassword"] = this.agentPassword;
      data["amount"] = this.amount;
      data["appKey"] = this.appKey;
      data["TransID"] = this.transID;
      data["apiToken"] = this.apiToken;
      data["parent"] = this.parent;
      data["totalRecords"] = this.totalRecords;
      return data;
    }
  }
  
  export interface IGetClientDepositAndWidrawRequestInProducResponse {
    orderID?: number;
    userName?: string | undefined;
    createUserName?: string | undefined;
    productID?: number;
    productTitle?: string | undefined;
    webSite?: string | undefined;
    agencyCode?: string | undefined;
    agentUserName?: string | undefined;
    agentPassword?: string | undefined;
    amount?: number;
    appKey?: string | undefined;
    transID?: number;
    apiToken?: string | undefined;
    parent?: string | undefined;
    totalRecords?: number;
  }
  
  export class GetClientDepositAndWidrawRequestInProductRequest implements IGetClientDepositAndWidrawRequestInProductRequest {
    productID?: number;
    startRecord?: number | undefined;
    viewRecords?: number | undefined;
    token?: string | undefined;
  
    constructor(data?: IGetClientDepositAndWidrawRequestInProductRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.productID = _data["productID"];
        this.startRecord = _data["startRecord"];
        this.viewRecords = _data["viewRecords"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): GetClientDepositAndWidrawRequestInProductRequest {
      data = typeof data === 'object' ? data : {};
      let result = new GetClientDepositAndWidrawRequestInProductRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["productID"] = this.productID;
      data["startRecord"] = this.startRecord;
      data["viewRecords"] = this.viewRecords;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IGetClientDepositAndWidrawRequestInProductRequest {
    productID?: number;
    startRecord?: number | undefined;
    viewRecords?: number | undefined;
    token?: string | undefined;
  }
  export interface IGetAllProfitAndLossOfProductsRequest {
    from?: Date;
    to?: Date;
    startRecord?: number | undefined;
    viewRecords?: number | undefined;
    token?: string | undefined;
  }
  
  export class GetAllProfitAndLossOfProcutsResponse implements IGetAllProfitAndLossOfProcutsResponse {
    productID?: number;
    product?: string | undefined;
    amount?: number;
    totalRecords?: number;
  
    constructor(data?: IGetAllProfitAndLossOfProcutsResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.productID = _data["productID"];
        this.product = _data["product"];
        this.amount = _data["amount"];
        this.totalRecords = _data["totalRecords"];
      }
    }
  
    static fromJS(data: any): GetAllProfitAndLossOfProcutsResponse {
      data = typeof data === 'object' ? data : {};
      let result = new GetAllProfitAndLossOfProcutsResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["productID"] = this.productID;
      data["product"] = this.product;
      data["amount"] = this.amount;
      data["totalRecords"] = this.totalRecords;
      return data;
    }
  }
  
  export interface IGetAllProfitAndLossOfProcutsResponse {
    productID?: number;
    product?: string | undefined;
    amount?: number;
    totalRecords?: number;
  }
  export class AccountStatementDepositOrWithdrawRequest {
    deposit: boolean;
    from: string;
    to: string;
    token: string | undefined;
  
    constructor(deposit: boolean, from: string, to: string, token: string) {
      this.deposit = deposit;
      this.from = from;
      this.to = to;
      this.token = token;
    }
  
  
  }
  
  export interface IAccountStatementDepositOrWithdrawRequest {
    deposit?: boolean;
    from?: Date;
    to?: Date;
    token?: string | undefined;
  }
  
  export class AccountStatementProductWiseRequest {
    productID?: number;
    from?: string;
    to?: string;
    token?: string | undefined;
  
    constructor(productid: number, from: string, to: string, token: string) {
      this.productID = productid;
      this.from = from;
      this.to = to;
      this.token = token;
    }
  
  
  }
  
  export interface IAccountStatementProductWiseRequest {
    productID?: number;
    from?: Date;
    to?: Date;
    token?: string | undefined;
  }
  
  export interface IGetAllProfitAndLossOfProcutsRequest {
    from?: Date;
    to?: Date;
    token?: string | undefined;
  }
  
  
  export interface IGetProfitAndLossOfProcutDetailsResponse {
    refID?: number;
    transactionDate?: Date;
    transactionStatus?: string | undefined;
    amount?: number;
    description?: string | undefined;
  }
  
  export class QtechGameRequest {
    device?: string | undefined;
    isDemo?: boolean;
    gameName?: string | undefined;
    token?: string | undefined;
    gameId?: string | undefined;
  
  
    constructor(token: string, gamename: string, isdemo: boolean, device: string,gameId:string) {
      this.token = token;
      this.gameName = gamename;
      this.isDemo = isdemo;
      this.device = device
      this.gameId = gameId
    }
  }
  export class ListOfAllUserIdsRequest implements IListOfAllUserIdsRequest {
    productID?: number;
    active?: boolean;
    startRecord?: number | undefined;
    viewRecords?: number | undefined;
    token?: string | undefined;
  
    constructor(data?: IListOfAllUserIdsRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.productID = _data["productID"];
        this.active = _data["active"];
        this.startRecord = _data["startRecord"];
        this.viewRecords = _data["viewRecords"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): ListOfAllUserIdsRequest {
      data = typeof data === 'object' ? data : {};
      let result = new ListOfAllUserIdsRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["productID"] = this.productID;
      data["active"] = this.active;
      data["startRecord"] = this.startRecord;
      data["viewRecords"] = this.viewRecords;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IListOfAllUserIdsRequest {
    productID?: number;
    active?: boolean;
    startRecord?: number | undefined;
    viewRecords?: number | undefined;
    token?: string | undefined;
  }
  
  export class ListOfAllUserResponse implements IListOfAllUserResponse {
    iD?: number;
    client?: string | undefined;
    userName?: string | undefined;
    levelID?: number;
    levelTitle?: string | undefined;
    productID?: number;
    productTitle?: string | undefined;
    webSite?: string | undefined;
    active?: boolean;
    creationDate?: Date;
    totalRecords?: number;
  
    constructor(data?: IListOfAllUserResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.iD = _data["iD"];
        this.client = _data["client"];
        this.userName = _data["userName"];
        this.levelID = _data["levelID"];
        this.levelTitle = _data["levelTitle"];
        this.productID = _data["productID"];
        this.productTitle = _data["productTitle"];
        this.webSite = _data["webSite"];
        this.active = _data["active"];
        this.creationDate = _data["creationDate"] ? new Date(_data["creationDate"].toString()) : <any>undefined;
        this.totalRecords = _data["totalRecords"];
      }
    }
  
    static fromJS(data: any): ListOfAllUserResponse {
      data = typeof data === 'object' ? data : {};
      let result = new ListOfAllUserResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["iD"] = this.iD;
      data["client"] = this.client;
      data["userName"] = this.userName;
      data["levelID"] = this.levelID;
      data["levelTitle"] = this.levelTitle;
      data["productID"] = this.productID;
      data["productTitle"] = this.productTitle;
      data["webSite"] = this.webSite;
      data["active"] = this.active;
      data["creationDate"] = this.creationDate ? this.creationDate.toISOString() : <any>undefined;
      data["totalRecords"] = this.totalRecords;
      return data;
    }
  }
  
  export interface IListOfAllUserResponse {
    iD?: number;
    client?: string | undefined;
    userName?: string | undefined;
    levelID?: number;
    levelTitle?: string | undefined;
    productID?: number;
    productTitle?: string | undefined;
    webSite?: string | undefined;
    active?: boolean;
    creationDate?: Date;
    totalRecords?: number;
  }
  // export class GetSnapRequest implements IGetSnapRequest {
  //   orderID?: number;
  //   token?: string | undefined;
  
  //   constructor(data?: IGetSnapRequest) {
  //       if (data) {
  //           for (var property in data) {
  //               if (data.hasOwnProperty(property))
  //                   (<any>this)[property] = (<any>data)[property];
  //           }
  //       }
  //   }
  
  //   init(_data?: any) {
  //       if (_data) {
  //           this.orderID = _data["orderID"];
  //           this.token = _data["token"];
  //       }
  //   }
  
  //   static fromJS(data: any): GetSnapRequest {
  //       data = typeof data === 'object' ? data : {};
  //       let result = new GetSnapRequest();
  //       result.init(data);
  //       return result;
  //   }
  
  //   toJSON(data?: any) {
  //       data = typeof data === 'object' ? data : {};
  //       data["orderID"] = this.orderID;
  //       data["token"] = this.token;
  //       return data;
  //   }
  // }
  
  export interface IGetSnapRequest {
    orderID?: number;
    token?: string | undefined;
  }
  
  // export class GetSnapResponse implements IGetSnapResponse {
  //   contentType?: string | undefined;
  //   imageData?: string | undefined;
  
  //   constructor(data?: IGetSnapResponse) {
  //       if (data) {
  //           for (var property in data) {
  //               if (data.hasOwnProperty(property))
  //                   (<any>this)[property] = (<any>data)[property];
  //           }
  //       }
  //   }
  
  //   init(_data?: any) {
  //       if (_data) {
  //           this.contentType = _data["contentType"];
  //           this.imageData = _data["imageData"];
  //       }
  //   }
  
  //   static fromJS(data: any): GetSnapResponse {
  //       data = typeof data === 'object' ? data : {};
  //       let result = new GetSnapResponse();
  //       result.init(data);
  //       return result;
  //   }
  
  //   toJSON(data?: any) {
  //       data = typeof data === 'object' ? data : {};
  //       data["contentType"] = this.contentType;
  //       data["imageData"] = this.imageData;
  //       return data;
  //   }
  // }
  
  export interface IGetSnapResponse {
    contentType?: string | undefined;
    imageData?: string | undefined;
  }
  
  export class VerificationNumberResponse implements IVerificationNumberResponse {
    name?: string | undefined;
    levelID?: number;
    accountStatusID?: number;
    admin?: boolean;
    statusCode?: number;
    status?: string | undefined;
    token?: string | undefined;
  
    constructor(data?: IVerificationNumberResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.name = _data["name"];
        this.levelID = _data["levelID"];
        this.accountStatusID = _data["accountStatusID"];
        this.admin = _data["admin"];
        this.statusCode = _data["statusCode"];
        this.status = _data["status"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): VerificationNumberResponse {
      data = typeof data === 'object' ? data : {};
      let result = new VerificationNumberResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["userName"] = this.name;
      data["levelID"] = this.levelID;
      data["accountStatusID"] = this.accountStatusID;
      data["admin"] = this.admin;
      data["statusCode"] = this.statusCode;
      data["status"] = this.status;
      data["token"] = this.token;
      return data;
    }
  }
  
  export class VerificationNumberRequest implements IVerificationNumberRequest {
    oTP?: number;
    contactNumber?: string | undefined;
    token?: string | undefined;
  
  
    constructor(otp: number, contactnumber: string, token: string) {
      this.oTP = otp;
      this.contactNumber = contactnumber;
      this.token = token;
  
    }
  
  
  }
  
  export class ListOfOrderApexPaymentRequest implements IListOfOrderApexPaymentRequest {
    status?: string | undefined;
    from?: Date;
    to?: Date;
    token?: string | undefined;
  
    constructor(data?: IListOfOrderApexPaymentRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.status = _data["status"];
        this.from = _data["from"] ? new Date(_data["from"].toString()) : <any>undefined;
        this.to = _data["to"] ? new Date(_data["to"].toString()) : <any>undefined;
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): ListOfOrderApexPaymentRequest {
      data = typeof data === 'object' ? data : {};
      let result = new ListOfOrderApexPaymentRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["status"] = this.status;
      data["from"] = this.from ? this.from.toISOString() : <any>undefined;
      data["to"] = this.to ? this.to.toISOString() : <any>undefined;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IListOfOrderApexPaymentRequest {
    status?: string | undefined;
    from?: Date;
    to?: Date;
    token?: string | undefined;
  }
  
  export class ListOfOrderApexPaymentResponse implements IListOfOrderApexPaymentResponse {
    orderID?: number;
    orderCurrency?: string | undefined;
    customerName?: string | undefined;
    customerPhonenumber?: string | undefined;
    email?: string | undefined;
    tXNTYPE?: string | undefined;
    currencyName?: string | undefined;
    orderDateTime?: Date;
    orderAmount?: number;
    orderStatus?: string | undefined;
  
    constructor(data?: IListOfOrderApexPaymentResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.orderID = _data["orderID"];
        this.orderCurrency = _data["orderCurrency"];
        this.customerName = _data["customerName"];
        this.customerPhonenumber = _data["customerPhonenumber"];
        this.email = _data["email"];
        this.tXNTYPE = _data["tXNTYPE"];
        this.currencyName = _data["currencyName"];
        this.orderDateTime = _data["orderDateTime"] ? new Date(_data["orderDateTime"].toString()) : <any>undefined;
        this.orderAmount = _data["orderAmount"];
        this.orderStatus = _data["orderStatus"];
      }
    }
  
    static fromJS(data: any): ListOfOrderApexPaymentResponse {
      data = typeof data === 'object' ? data : {};
      let result = new ListOfOrderApexPaymentResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["orderID"] = this.orderID;
      data["orderCurrency"] = this.orderCurrency;
      data["customerName"] = this.customerName;
      data["customerPhonenumber"] = this.customerPhonenumber;
      data["email"] = this.email;
      data["tXNTYPE"] = this.tXNTYPE;
      data["currencyName"] = this.currencyName;
      data["orderDateTime"] = this.orderDateTime ? this.orderDateTime.toISOString() : <any>undefined;
      data["orderAmount"] = this.orderAmount;
      data["orderStatus"] = this.orderStatus;
      return data;
    }
  }
  
  export interface IListOfOrderApexPaymentResponse {
    orderID?: number;
    orderCurrency?: string | undefined;
    customerName?: string | undefined;
    customerPhonenumber?: string | undefined;
    email?: string | undefined;
    tXNTYPE?: string | undefined;
    currencyName?: string | undefined;
    orderDateTime?: Date;
    orderAmount?: number;
    orderStatus?: string | undefined;
  }
  
  export class TransferFundsResponse implements ITransferFundsResponse {
    statusCode?: number;
    status?: string | undefined;
  
    constructor(data?: ITransferFundsResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.statusCode = _data["statusCode"];
        this.status = _data["status"];
      }
    }
  
    static fromJS(data: any): TransferFundsResponse {
      data = typeof data === 'object' ? data : {};
      let result = new TransferFundsResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["statusCode"] = this.statusCode;
      data["status"] = this.status;
      return data;
    }
  }
  
  export interface ITransferFundsResponse {
    statusCode?: number;
    status?: string | undefined;
  }
  
  export class TransferFundsRequest implements ITransferFundsRequest {
    token?: string | undefined;
    userName?: string | undefined;
    amount?: number;
    productID?: number;
    memberCode?: string | undefined;
  
    constructor(token: string, username: string, amount: number, productid: number, membercode: string) {
      this.token = token;
      this.userName = username;
      this.amount = amount;
      this.productID = productid;
      this.memberCode = membercode;
      
    }
  }
  
  export interface ITransferFundsRequest {
    token?: string | undefined;
    userName?: string | undefined;
    amount?: number;
    productID?: number;
    memberCode?: string | undefined;
  }
  
  export interface ITransferFundsResponse {
    statusCode?: number;
    status?: string | undefined;
  }
  
  export class TransferFundsRequestExc implements ITransferFundsRequestExc {
    token?: string | undefined;
    userName?: string | undefined;
    amount?: number;
    productID?: number;
    memberCode?: string | undefined;
    exchangeID?: number | undefined;
  
    constructor(token: string, username: string, amount: number, productid: number, membercode: string, exchangeId: number) {
      this.token = token;
      this.userName = username;
      this.amount = amount;
      this.productID = productid;
      this.memberCode = membercode;
      this.exchangeID = exchangeId;
      
    }
  }
  
  export interface ITransferFundsRequestExc {
    token?: string | undefined;
    userName?: string | undefined;
    amount?: number;
    productID?: number;
    memberCode?: string | undefined;
    exchangeID?: number | undefined;
  }
  
  export class UserProductListResponse implements IUserProductListResponse {
    productID?: number;
    productTitle?: string | undefined;
    domain?: string | undefined;
    userName?: string | undefined;
    memberCode?: string | undefined;
    userPassword?: string | undefined;
  
    constructor(data?: IUserProductListResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.productID = _data["productID"];
        this.productTitle = _data["productTitle"];
        this.domain = _data["domain"];
        this.userName = _data["userName"];
        this.memberCode = _data["memberCode"];
        this.userPassword = _data["userPassword"];
  
      }
    }
  
    static fromJS(data: any): UserProductListResponse {
      data = typeof data === 'object' ? data : {};
      let result = new UserProductListResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["productID"] = this.productID;
      data["productTitle"] = this.productTitle;
      data["domain"] = this.domain;
      data["userName"] = this.userName;
      data["userPassword"] = this.userPassword;
      return data;
    }
  }
  
  export class UserProductListRequest implements IUserProductListRequest {
    token?: string | undefined;
  
    constructor(token: string) {
      this.token = token;
    }
  
  
  }
  
  export interface IUserProductListRequest {
    token?: string | undefined;
  }
  
  export interface IUserProductListResponse {
    productID?: number;
    productTitle?: string | undefined;
    domain?: string | undefined;
    userName?: string | undefined;
    memberCode?: string | undefined;
    userPassword?: string | undefined;
  }
  
  
  export class AccountStatementRequest {
    from?: string;
    to?: string;
    nature?: string;
    token?: string | undefined;
  
    constructor(startdate: string, to: string, nature: string, token: string) {
      this.from = new Date(startdate).toISOString();
      this.to = new Date(to).toISOString();
      this.nature = nature;
      this.token = token;
    }
  }
  
  export interface IAccountStatementRequest {
    from?: Date;
    to?: Date,
    nature?: string;
    token?: string | undefined;
  }
  
  // <------------------transactiona natrue list ------------------>
  export class TransactionNatureListResponse implements ITransactionNatureListResponse {
    id?: string | undefined;
    natureName?: string | undefined;
  
    constructor(data?: ITransactionNatureListResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.id = _data["id"];
        this.natureName = _data["natureName"];
      }
    }
  
    static fromJS(data: any): TransactionNatureListResponse {
      data = typeof data === 'object' ? data : {};
      let result = new TransactionNatureListResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["id"] = this.id;
      data["natureName"] = this.natureName;
      return data;
    }
  }
  
  export interface ITransactionNatureListResponse {
    iD?: string | undefined;
    natureName?: string | undefined;
  }
  
  export class NotificationReadedRequest implements INotificationReadedRequest {
    iD?: number;
    token?: string | undefined;
  
    constructor(data?: INotificationReadedRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.iD = _data["iD"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): NotificationReadedRequest {
      data = typeof data === 'object' ? data : {};
      let result = new NotificationReadedRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["iD"] = this.iD;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface INotificationReadedRequest {
    iD?: number;
    token?: string | undefined;
  }
  
  export interface INotificationReadedRequest {
    iD?: number;
    token?: string | undefined;
  }
  
  export class NotificationRequest implements INotificationRequest {
    from?: Date;
    to?: Date;
    token?: string | undefined;
  
    constructor(data?: INotificationRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.from = _data["from"] ? new Date(_data["from"].toString()) : <any>undefined;
        this.to = _data["to"] ? new Date(_data["to"].toString()) : <any>undefined;
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): NotificationRequest {
      data = typeof data === 'object' ? data : {};
      let result = new NotificationRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["from"] = this.from ? this.from.toISOString() : <any>undefined;
      data["to"] = this.to ? this.to.toISOString() : <any>undefined;
      data["token"] = this.token;
      return data;
    }
  }
  
  // <----- Notification Request ------->
  export interface INotificationRequest {
    from?: Date;
    to?: Date;
    token?: string | undefined;
  }
  
  export class NotificationResponse implements INotificationResponse {
    id?: number;
    userID?: number;
    details?: string | undefined;
    statusID?: number;
    createdOn?: Date;
  
    constructor(data?: INotificationResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.id = _data["id"];
        this.userID = _data["userID"];
        this.details = _data["details"];
        this.statusID = _data["statusID"];
        this.createdOn = _data["createdOn"] ? new Date(_data["createdOn"].toString()) : <any>undefined;
      }
    }
  
    static fromJS(data: any): NotificationResponse {
      data = typeof data === 'object' ? data : {};
      let result = new NotificationResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["id"] = this.id;
      data["userID"] = this.userID;
      data["details"] = this.details;
      data["statusID"] = this.statusID;
      data["createdOn"] = this.createdOn ? this.createdOn.toISOString() : <any>undefined;
      return data;
    }
  }
  
  export interface INotificationResponse {
    id?: number;
    userID?: number;
    details?: string | undefined;
    statusID?: number;
    createdOn?: Date;
  }
  
  // <------- ManualPaymentResponse---->
  
  export class ListOfPaymentStatusResponse implements IListOfPaymentStatusResponse {
    iD?: number | undefined;
    clientUserName?: string | undefined;
    statusName?: string | undefined;
  
    constructor(data?: IListOfPaymentStatusResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.iD = _data["iD"];
        this.clientUserName = _data["clientUserName"];
        this.statusName = _data["statusName"];
      }
    }
  
    static fromJS(data: any): ListOfPaymentStatusResponse {
      data = typeof data === 'object' ? data : {};
      let result = new ListOfPaymentStatusResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["iD"] = this.iD;
      data["clientUserName"] = this.clientUserName;
      data["statusName"] = this.statusName;
      return data;
    }
  }
  
  export interface IListOfPaymentStatusResponse {
    iD?: number | undefined;
    clientUserName?: string | undefined;
    statusName?: string | undefined;
  }
  
  export class ManualPaymentRequest implements IManualPaymentRequest {
    statusID?: number | undefined;
    from?: Date;
    to?: Date;
    token?: string | undefined;
  
    constructor(data?: IManualPaymentRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.statusID = _data["statusID"];
        this.from = _data["from"] ? new Date(_data["from"].toString()) : <any>undefined;
        this.to = _data["to"] ? new Date(_data["to"].toString()) : <any>undefined;
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): ManualPaymentRequest {
      data = typeof data === 'object' ? data : {};
      let result = new ManualPaymentRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["statusID"] = this.statusID;
      data["from"] = this.from ? this.from.toISOString() : <any>undefined;
      data["to"] = this.to ? this.to.toISOString() : <any>undefined;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IManualPaymentRequest {
    statusID?: number | undefined;
    from?: Date;
    to?: Date;
    token?: string | undefined;
  }
  
  export class ManualPaymentResponse implements IManualPaymentResponse {
    orderID?: number;
    userID?: number;
    userName?: string | undefined;
    name?: string | undefined;
    statusID?: number;
    transactionStatus?: string | undefined;
    amount?: number;
    requestDate?: Date;
    paymentMethod?: string | undefined;
    holderName?: string | undefined;
    bankName?: string | undefined;
    number?: string | undefined;
    iBAN?: string | undefined;
    cardNo?: string | undefined;
    utr?: number;
  
    constructor(data?: IManualPaymentResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
  
    init(_data?: any) {
        if (_data) {
            this.orderID = _data["orderID"];
            this.userID = _data["userID"];
            this.userName = _data["userName"];
            this.name = _data["name"];
            this.statusID = _data["StatusID"];
            this.transactionStatus = _data["transactionStatus"];
            this.amount = _data["amount"];
            this.requestDate = _data["requestDate"] ? new Date(_data["requestDate"].toString()) : <any>undefined;
            this.paymentMethod = _data["paymentMethod"];
            this.holderName = _data["holderName"];
            this.bankName = _data["bankName"];
            this.number = _data["number"];
            this.iBAN = _data["iBAN"];
            this.cardNo = _data["cardNo"];
            this.utr = _data["utr"];
        }
    }
  
    static fromJS(data: any): ManualPaymentResponse {
        data = typeof data === 'object' ? data : {};
        let result = new ManualPaymentResponse();
        result.init(data);
        return result;
    }
  
    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["orderID"] = this.orderID;
        data["userID"] = this.userID;
        data["userName"] = this.userName;
        data["name"] = this.name;
        data["StatusID"] = this.statusID;
        data["transactionStatus"] = this.transactionStatus;
        data["amount"] = this.amount;
        data["requestDate"] = this.requestDate ? this.requestDate.toISOString() : <any>undefined;
        data["paymentMethod"] = this.paymentMethod;
        data["holderName"] = this.holderName;
        data["bankName"] = this.bankName;
        data["number"] = this.number;
        data["iBAN"] = this.iBAN;
        data["cardNo"] = this.cardNo;
        data["utr"] = this.utr;
        return data;
    }
  }
  
  export interface IManualPaymentResponse {
    orderID?: number;
    userID?: number;
    userName?: string | undefined;
    name?: string | undefined;
    statusID?: number;
    transactionStatus?: string | undefined;
    amount?: number;
    requestDate?: Date;
    paymentMethod?: string | undefined;
    holderName?: string | undefined;
    bankName?: string | undefined;
    number?: string | undefined;
    iBAN?: string | undefined;
    cardNo?: string | undefined;
    utr?: number;
  }
  
  export class AccountStatementResponse implements IAccountStatementResponse {
    refID?: number;
    transactionDate?: Date;
    transactionStatus?: string | undefined;
    transactionType?: string | undefined;
    product?: string | undefined;
    productUserName?: string | undefined;
    marketID?: string | undefined;
    amount?: number;
    description?: string | undefined;
    runningTotal?: number;
  
    constructor(data?: IAccountStatementResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.refID = _data["refID"];
        this.transactionDate = _data["transactionDate"] ? new Date(_data["transactionDate"].toString()) : <any>undefined;
        this.transactionStatus = _data["transactionStatus"];
        this.transactionType = _data["transactionType"];
        this.product = _data["product"];
        this.productUserName = _data["productUserName"];
        this.marketID = _data["marketID"];
        this.amount = _data["amount"];
        this.description = _data["description"];
        this.runningTotal = _data["runningTotal"];
      }
    }
  
    static fromJS(data: any): AccountStatementResponse {
      data = typeof data === 'object' ? data : {};
      let result = new AccountStatementResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["refID"] = this.refID;
      data["transactionDate"] = this.transactionDate ? this.transactionDate.toISOString() : <any>undefined;
      data["transactionStatus"] = this.transactionStatus;
      data["transactionType"] = this.transactionType;
      data["product"] = this.product;
      data["productUserName"] = this.productUserName;
      data["marketID"] = this.marketID;
      data["amount"] = this.amount;
      data["description"] = this.description;
      data["runningTotal"] = this.runningTotal;
      return data;
    }
  }
  
  export interface IAccountStatementResponse {
    refID?: number;
    transactionDate?: Date;
    transactionStatus?: string | undefined;
    transactionType?: string | undefined;
    product?: string | undefined;
    productUserName?: string | undefined;
    marketID?: string | undefined;
    amount?: number;
    description?: string | undefined;
    runningTotal?: number;
  }
  
  
  export interface IVerificationNumberRequest {
    oTP?: number;
    contactNumber?: string | undefined;
    verificationNumber?: number;
  }
  
  export interface IVerificationNumberResponse {
    userTitle?: string | undefined;
    levelID?: number;
    accountStatusID?: number;
    admin?: boolean;
    statusCode?: number;
    status?: string | undefined;
    token?: string | undefined;
  }
  
  export interface IQTDBResponse {
    playerId?: string | undefined;
    displayName?: string | undefined;
    currency?: string | undefined;
    country?: string | undefined;
    gender?: string | undefined;
    lang?: string | undefined;
    gameTypes?: string[] | undefined;
    mode?: string | undefined;
    device?: string | undefined;
    walletSessionId?: string | undefined;
    gameLaunchTarget?: string | undefined;
    jurisdiction?: string | undefined;
    returnUrl?: string | undefined;
    authToken_?: string | undefined;
    statusCode__?: number;
    errorDescription__?: string | undefined;
  }
  
  export class GetToshaniPaymentOrderResponse implements IGetToshaniPaymentOrderResponse {
    orderAmount?: number | undefined;
    returnURL?: string | undefined;
    pAY_ID?: string | undefined;
    orderId?: string | undefined;
    customerName?: string | undefined;
    customerPhonenumber?: string | undefined;
    statusCode?: number | undefined;
    status?: string | undefined;
    data?: TResponseData;
  
    constructor(data?: IGetToshaniPaymentOrderResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.orderAmount = _data["orderAmount"];
        this.returnURL = _data["returnURL"];
        this.pAY_ID = _data["pAY_ID"];
        this.orderId = _data["orderId"];
        this.customerName = _data["customerName"];
        this.customerPhonenumber = _data["customerPhonenumber"];
        this.statusCode = _data["statusCode"];
        this.status = _data["status"];
        this.data = _data["data"] ? TResponseData.fromJS(_data["data"]) : <any>undefined;
      }
    }
  
    static fromJS(data: any): GetToshaniPaymentOrderResponse {
      data = typeof data === 'object' ? data : {};
      let result = new GetToshaniPaymentOrderResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["orderAmount"] = this.orderAmount;
      data["returnURL"] = this.returnURL;
      data["pAY_ID"] = this.pAY_ID;
      data["orderId"] = this.orderId;
      data["customerName"] = this.customerName;
      data["customerPhonenumber"] = this.customerPhonenumber;
      data["statusCode"] = this.statusCode;
      data["status"] = this.status;
      data["data"] = this.data ? this.data.toJSON() : <any>undefined;
      return data;
    }
  }
  
  export class CreateToshaniPaymentOrderRequest implements ICreateToshaniPaymentOrderRequest {
    amount?: number | undefined;
    token?: string | undefined;
  
    constructor(data?: ICreateToshaniPaymentOrderRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.amount = _data["amount"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): CreateToshaniPaymentOrderRequest {
      data = typeof data === 'object' ? data : {};
      let result = new CreateToshaniPaymentOrderRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["amount"] = this.amount;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface ICreateToshaniPaymentOrderRequest {
    amount?: number | undefined;
    token?: string | undefined;
  }
  
  export interface IGetToshaniPaymentOrderResponse {
    orderAmount?: number | undefined;
    returnURL?: string | undefined;
    pAY_ID?: string | undefined;
    orderId?: string | undefined;
    customerName?: string | undefined;
    customerPhonenumber?: string | undefined;
    statusCode?: number | undefined;
    status?: string | undefined;
    data?: TResponseData;
  }
  
  export class GetOrderMorePayPaymentResponse implements IGetOrderMorePayPaymentResponse {
    orderAmount?: number | undefined;
    returnURL?: string | undefined;
    readonly postURL?: string | undefined;
    paY_ID?: string | undefined;
    orderId?: string | undefined;
    orderCurrency?: string | undefined;
    hash?: string | undefined;
    customerName?: string | undefined;
    customerPhonenumber?: string | undefined;
    cusT_ID?: string | undefined;
    email?: string | undefined;
    txntype?: string | undefined;
    status?: boolean | undefined;
    message?: string | undefined;
    statusCode?: number;
  
    constructor(data?: IGetOrderMorePayPaymentResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.orderAmount = _data["orderAmount"];
        this.returnURL = _data["returnURL"];
        (<any>this).postURL = _data["postURL"];
        this.paY_ID = _data["paY_ID"];
        this.orderId = _data["orderId"];
        this.orderCurrency = _data["orderCurrency"];
        this.hash = _data["hash"];
        this.customerName = _data["customerName"];
        this.customerPhonenumber = _data["customerPhonenumber"];
        this.cusT_ID = _data["cusT_ID"];
        this.email = _data["email"];
        this.txntype = _data["txntype"];
        this.status = _data["status"];
        this.message = _data["message"];
        this.statusCode = _data["statusCode"];
      }
    }
  
    static fromJS(data: any): GetOrderMorePayPaymentResponse {
      data = typeof data === 'object' ? data : {};
      let result = new GetOrderMorePayPaymentResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["orderAmount"] = this.orderAmount;
      data["returnURL"] = this.returnURL;
      data["postURL"] = this.postURL;
      data["paY_ID"] = this.paY_ID;
      data["orderId"] = this.orderId;
      data["orderCurrency"] = this.orderCurrency;
      data["hash"] = this.hash;
      data["customerName"] = this.customerName;
      data["customerPhonenumber"] = this.customerPhonenumber;
      data["cusT_ID"] = this.cusT_ID;
      data["email"] = this.email;
      data["txntype"] = this.txntype;
      data["status"] = this.status;
      data["message"] = this.message;
      data["statusCode"] = this.statusCode;
      return data;
    }
  }
  
  export class TResponseData implements ITResponseData {
    order_id?: string | undefined;
    name?: string | undefined;
    number?: string | undefined;
    payments_status?: string | undefined;
    qr_id?: string | undefined;
    entity?: string | undefined;
    image_url?: string | undefined;
    payment_amount?: string | undefined;
    status?: string | undefined;
  
    constructor(data?: ITResponseData) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.order_id = _data["order_id"];
        this.name = _data["name"];
        this.number = _data["number"];
        this.payments_status = _data["payments_status"];
        this.qr_id = _data["qr_id"];
        this.entity = _data["entity"];
        this.image_url = _data["image_url"];
        this.payment_amount = _data["payment_amount"];
        this.status = _data["status"];
      }
    }
  
    static fromJS(data: any): TResponseData {
      data = typeof data === 'object' ? data : {};
      let result = new TResponseData();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["order_id"] = this.order_id;
      data["name"] = this.name;
      data["number"] = this.number;
      data["payments_status"] = this.payments_status;
      data["qr_id"] = this.qr_id;
      data["entity"] = this.entity;
      data["image_url"] = this.image_url;
      data["payment_amount"] = this.payment_amount;
      data["status"] = this.status;
      return data;
    }
  }
  export class TokenOnlyRequest implements ITokenOnlyRequest {
    token?: string | undefined;
  
    constructor(data?: ITokenOnlyRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): TokenOnlyRequest {
      data = typeof data === 'object' ? data : {};
      let result = new TokenOnlyRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface ITokenOnlyRequest {
    token?: string | undefined;
  }
  
  export interface ITResponseData {
    order_id?: string | undefined;
    name?: string | undefined;
    number?: string | undefined;
    payments_status?: string | undefined;
    qr_id?: string | undefined;
    entity?: string | undefined;
    image_url?: string | undefined;
    payment_amount?: string | undefined;
    status?: string | undefined;
  }
  
  export interface IGetOrderMorePayPaymentResponse {
    orderAmount?: number | undefined;
    returnURL?: string | undefined;
    postURL?: string | undefined;
    paY_ID?: string | undefined;
    orderId?: string | undefined;
    orderCurrency?: string | undefined;
    hash?: string | undefined;
    customerName?: string | undefined;
    customerPhonenumber?: string | undefined;
    cusT_ID?: string | undefined;
    email?: string | undefined;
    txntype?: string | undefined;
    status?: boolean | undefined;
    message?: string | undefined;
    statusCode?: number;
  }
  
  
  export class CheckSubAccountBalanceRequest implements ICheckSubAccountBalanceRequest {
    userID?: number;
    token?: string | undefined;
  
    constructor(data?: ICheckSubAccountBalanceRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.userID = _data["userID"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): CheckSubAccountBalanceRequest {
      data = typeof data === 'object' ? data : {};
      let result = new CheckSubAccountBalanceRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["userID"] = this.userID;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface ICheckSubAccountBalanceRequest {
    userID?: number;
    token?: string | undefined;
  }
  
  export class CheckSubAccountBalanceResponse implements ICheckSubAccountBalanceResponse {
    balance?: number;
    liability?: number;
    aviBalance?: number;
    statusCode?: number;
    status?: string | undefined;
  
    constructor(data?: ICheckSubAccountBalanceResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.balance = _data["balance"];
        this.liability = _data["liability"];
        this.aviBalance = _data["aviBalance"];
        this.statusCode = _data["statusCode"];
        this.status = _data["status"];
      }
    }
  
    static fromJS(data: any): CheckSubAccountBalanceResponse {
      data = typeof data === 'object' ? data : {};
      let result = new CheckSubAccountBalanceResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["balance"] = this.balance;
      data["liability"] = this.liability;
      data["aviBalance"] = this.aviBalance;
      data["statusCode"] = this.statusCode;
      data["status"] = this.status;
      return data;
    }
  }
  
  export class UpdatePaymentApexPayRequest implements IUpdatePaymentApexPayRequest {
    responsE_DATE_TIME?: Date;
    responsE_CODE?: string | undefined;
    txN_ID?: string | undefined;
    merchanT_NAME?: string | undefined;
    status?: string | undefined;
    pG_REF_NUM?: string | undefined;
    ordeR_ID?: string | undefined;
    amount?: number;
    bookinG_MERCHANT_FLAG?: string | undefined;
    totaL_AMOUNT?: number;
    pG_TXN_MESSAGE?: string | undefined;
    responsE_MESSAGE?: string | undefined;
    moP_TYPE?: string | undefined;
    paymenT_TYPE?: string | undefined;
    carD_MASK?: string | undefined;
    acQ_ID?: string | undefined;
    rrn?: string | undefined;
    checkouT_JS_FLAG?: string | undefined;
    surchargE_FLAG?: string | undefined;
    suF_GST?: string | undefined;
    cusT_NAME?: string | undefined;
    suF_TDR?: string | undefined;
    oriG_TXN_ID?: string | undefined;
    iS_STATUS_FINAL?: string | undefined;
    paY_ID?: string | undefined;
    currencY_CODE?: string | undefined;
    txN_TYPE?: string | undefined;
    autH_CODE?: string | undefined;
    token?: string | undefined;
  
    constructor(data?: IUpdatePaymentApexPayRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.responsE_DATE_TIME = _data["responsE_DATE_TIME"] ? new Date(_data["responsE_DATE_TIME"].toString()) : <any>undefined;
        this.responsE_CODE = _data["responsE_CODE"];
        this.txN_ID = _data["txN_ID"];
        this.merchanT_NAME = _data["merchanT_NAME"];
        this.status = _data["status"];
        this.pG_REF_NUM = _data["pG_REF_NUM"];
        this.ordeR_ID = _data["ordeR_ID"];
        this.amount = _data["amount"];
        this.bookinG_MERCHANT_FLAG = _data["bookinG_MERCHANT_FLAG"];
        this.totaL_AMOUNT = _data["totaL_AMOUNT"];
        this.pG_TXN_MESSAGE = _data["pG_TXN_MESSAGE"];
        this.responsE_MESSAGE = _data["responsE_MESSAGE"];
        this.moP_TYPE = _data["moP_TYPE"];
        this.paymenT_TYPE = _data["paymenT_TYPE"];
        this.carD_MASK = _data["carD_MASK"];
        this.acQ_ID = _data["acQ_ID"];
        this.rrn = _data["rrn"];
        this.checkouT_JS_FLAG = _data["checkouT_JS_FLAG"];
        this.surchargE_FLAG = _data["surchargE_FLAG"];
        this.suF_GST = _data["suF_GST"];
        this.cusT_NAME = _data["cusT_NAME"];
        this.suF_TDR = _data["suF_TDR"];
        this.oriG_TXN_ID = _data["oriG_TXN_ID"];
        this.iS_STATUS_FINAL = _data["iS_STATUS_FINAL"];
        this.paY_ID = _data["paY_ID"];
        this.currencY_CODE = _data["currencY_CODE"];
        this.txN_TYPE = _data["txN_TYPE"];
        this.autH_CODE = _data["autH_CODE"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): UpdatePaymentApexPayRequest {
      data = typeof data === 'object' ? data : {};
      let result = new UpdatePaymentApexPayRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["responsE_DATE_TIME"] = this.responsE_DATE_TIME ? this.responsE_DATE_TIME.toISOString() : <any>undefined;
      data["responsE_CODE"] = this.responsE_CODE;
      data["txN_ID"] = this.txN_ID;
      data["merchanT_NAME"] = this.merchanT_NAME;
      data["status"] = this.status;
      data["pG_REF_NUM"] = this.pG_REF_NUM;
      data["ordeR_ID"] = this.ordeR_ID;
      data["amount"] = this.amount;
      data["bookinG_MERCHANT_FLAG"] = this.bookinG_MERCHANT_FLAG;
      data["totaL_AMOUNT"] = this.totaL_AMOUNT;
      data["pG_TXN_MESSAGE"] = this.pG_TXN_MESSAGE;
      data["responsE_MESSAGE"] = this.responsE_MESSAGE;
      data["moP_TYPE"] = this.moP_TYPE;
      data["paymenT_TYPE"] = this.paymenT_TYPE;
      data["carD_MASK"] = this.carD_MASK;
      data["acQ_ID"] = this.acQ_ID;
      data["rrn"] = this.rrn;
      data["checkouT_JS_FLAG"] = this.checkouT_JS_FLAG;
      data["surchargE_FLAG"] = this.surchargE_FLAG;
      data["suF_GST"] = this.suF_GST;
      data["cusT_NAME"] = this.cusT_NAME;
      data["suF_TDR"] = this.suF_TDR;
      data["oriG_TXN_ID"] = this.oriG_TXN_ID;
      data["iS_STATUS_FINAL"] = this.iS_STATUS_FINAL;
      data["paY_ID"] = this.paY_ID;
      data["currencY_CODE"] = this.currencY_CODE;
      data["txN_TYPE"] = this.txN_TYPE;
      data["autH_CODE"] = this.autH_CODE;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IUpdatePaymentApexPayRequest {
    responsE_DATE_TIME?: Date;
    responsE_CODE?: string | undefined;
    txN_ID?: string | undefined;
    merchanT_NAME?: string | undefined;
    status?: string | undefined;
    pG_REF_NUM?: string | undefined;
    ordeR_ID?: string | undefined;
    amount?: number;
    bookinG_MERCHANT_FLAG?: string | undefined;
    totaL_AMOUNT?: number;
    pG_TXN_MESSAGE?: string | undefined;
    responsE_MESSAGE?: string | undefined;
    moP_TYPE?: string | undefined;
    paymenT_TYPE?: string | undefined;
    carD_MASK?: string | undefined;
    acQ_ID?: string | undefined;
    rrn?: string | undefined;
    checkouT_JS_FLAG?: string | undefined;
    surchargE_FLAG?: string | undefined;
    suF_GST?: string | undefined;
    cusT_NAME?: string | undefined;
    suF_TDR?: string | undefined;
    oriG_TXN_ID?: string | undefined;
    iS_STATUS_FINAL?: string | undefined;
    paY_ID?: string | undefined;
    currencY_CODE?: string | undefined;
    txN_TYPE?: string | undefined;
    autH_CODE?: string | undefined;
    token?: string | undefined;
  }
  
  export interface ICheckSubAccountBalanceResponse {
    balance?: number;
    liability?: number;
    aviBalance?: number;
    statusCode?: number;
    status?: string | undefined;
  }
  
  export class CheckNumberRequest implements ICheckNumberRequest {
    teleNo?: string | undefined;
  
    constructor(phonenumber: string) {
      this.teleNo = phonenumber;
    }
  
  
  }
  
  export interface ICheckNumberRequest {
    teleNo?: string | undefined;
  }
  
  export class AddManualPaymentRequest implements IAddManualPaymentRequest {
    fileName?: string | undefined;
    contentType?: string | undefined;
    amount?: number;
    data?: string | undefined;
    token?: string | undefined;
  
    constructor(data?: IAddManualPaymentRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.fileName = _data["fileName"];
        this.contentType = _data["contentType"];
        this.amount = _data["amount"];
        this.data = _data["data"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): AddManualPaymentRequest {
      data = typeof data === 'object' ? data : {};
      let result = new AddManualPaymentRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["fileName"] = this.fileName;
      data["contentType"] = this.contentType;
      data["amount"] = this.amount;
      data["data"] = this.data;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IAddManualPaymentRequest {
    fileName?: string | undefined;
    contentType?: string | undefined;
    amount?: number;
    data?: string | undefined;
    token?: string | undefined;
  }
  
  export interface ICheckNumberRequest {
    teleNo?: string | undefined;
    token?: string | undefined;
  }
  
  export class UpdateCardStatusRequest implements IUpdateCardStatusRequest {
    cardNo?: string | undefined;
    active?: boolean;
    token?: string | undefined;
  
    constructor(data?: IUpdateCardStatusRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.cardNo = _data["cardNo"];
        this.active = _data["active"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): UpdateCardStatusRequest {
      data = typeof data === 'object' ? data : {};
      let result = new UpdateCardStatusRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["cardNo"] = this.cardNo;
      data["active"] = this.active;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IUpdateCardStatusRequest {
    cardNo?: string | undefined;
    active?: boolean;
    token?: string | undefined;
  }
  
  export class GetOrderApexPaymentRequest implements IGetOrderApexPaymentRequest {
    orderID?: number;
    token?: string | undefined;
  
    constructor(data?: IGetOrderApexPaymentRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.orderID = _data["orderID"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): GetOrderApexPaymentRequest {
      data = typeof data === 'object' ? data : {};
      let result = new GetOrderApexPaymentRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["orderID"] = this.orderID;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IGetOrderApexPaymentRequest {
    orderID?: number;
    token?: string | undefined;
  }
  
  
  export class GetOrderApexPaymentResponse implements IGetOrderApexPaymentResponse {
    orderAmount?: number | undefined;
    returnURL?: string | undefined;
    readonly postURL?: string | undefined;
    pAY_ID?: string | undefined;
    orderId?: string | undefined;
    orderCurrency?: string | undefined;
    orderNote?: string | undefined;
    signature?: string | undefined;
    hash?: string | undefined;
    customerName?: string | undefined;
    cUST_ID?: string | undefined;
    customerPhonenumber?: string | undefined;
    email?: string | undefined;
    tXNTYPE?: string | undefined;
    statusCode?: number | undefined;
    status?: string | undefined;
  
    constructor(data?: IGetOrderApexPaymentResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.orderAmount = _data["orderAmount"];
        this.returnURL = _data["returnURL"];
        (<any>this).postURL = _data["postURL"];
        this.pAY_ID = _data["pAY_ID"];
        this.orderId = _data["orderId"];
        this.orderCurrency = _data["orderCurrency"];
        this.orderNote = _data["orderNote"];
        this.signature = _data["signature"];
        this.hash = _data["hash"];
        this.customerName = _data["customerName"];
        this.cUST_ID = _data["cUST_ID"];
        this.customerPhonenumber = _data["customerPhonenumber"];
        this.email = _data["email"];
        this.tXNTYPE = _data["tXNTYPE"];
        this.statusCode = _data["statusCode"];
        this.status = _data["status"];
      }
    }
  
    static fromJS(data: any): GetOrderApexPaymentResponse {
      data = typeof data === 'object' ? data : {};
      let result = new GetOrderApexPaymentResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["orderAmount"] = this.orderAmount;
      data["returnURL"] = this.returnURL;
      data["postURL"] = this.postURL;
      data["pAY_ID"] = this.pAY_ID;
      data["orderId"] = this.orderId;
      data["orderCurrency"] = this.orderCurrency;
      data["orderNote"] = this.orderNote;
      data["signature"] = this.signature;
      data["hash"] = this.hash;
      data["customerName"] = this.customerName;
      data["cUST_ID"] = this.cUST_ID;
      data["customerPhonenumber"] = this.customerPhonenumber;
      data["email"] = this.email;
      data["tXNTYPE"] = this.tXNTYPE;
      data["statusCode"] = this.statusCode;
      data["status"] = this.status;
      return data;
    }
  }
  
  export interface IGetOrderApexPaymentResponse {
    orderAmount?: number | undefined;
    returnURL?: string | undefined;
    postURL?: string | undefined;
    pAY_ID?: string | undefined;
    orderId?: string | undefined;
    orderCurrency?: string | undefined;
    orderNote?: string | undefined;
    signature?: string | undefined;
    hash?: string | undefined;
    customerName?: string | undefined;
    cUST_ID?: string | undefined;
    customerPhonenumber?: string | undefined;
    email?: string | undefined;
    tXNTYPE?: string | undefined;
    statusCode?: number | undefined;
    status?: string | undefined;
  }
  
  export class GetOrderApexTypePaymentResponse implements IGetOrderApexTypePaymentResponse {
    orderAmount?: number | undefined;
    returnURL?: string | undefined;
    readonly postURL?: string | undefined;
    readonly surl?: string | undefined;
    readonly curl?: string | undefined;
    paY_ID?: string | undefined;
    orderId?: string | undefined;
    orderCurrency?: string | undefined;
    hash?: string | undefined;
    customerName?: string | undefined;
    customerPhonenumber?: string | undefined;
    cusT_ID?: string | undefined;
    email?: string | undefined;
    txntype?: string | undefined;
    status?: boolean | undefined;
    message?: string | undefined;
    apikey?: string | undefined;
    statusCode?: number;
    readonly address?: string | undefined;
    readonly city?: string | undefined;
    readonly state?: string | undefined;
    readonly pinCode?: string | undefined;
  
    constructor(data?: IGetOrderApexTypePaymentResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
  
    init(_data?: any) {
        if (_data) {
            this.orderAmount = _data["orderAmount"];
            this.returnURL = _data["returnURL"];
            (<any>this).postURL = _data["postURL"];
            (<any>this).surl = _data["surl"];
            (<any>this).curl = _data["curl"];
            this.paY_ID = _data["paY_ID"];
            this.orderId = _data["orderId"];
            this.orderCurrency = _data["orderCurrency"];
            this.hash = _data["hash"];
            this.customerName = _data["customerName"];
            this.customerPhonenumber = _data["customerPhonenumber"];
            this.cusT_ID = _data["cusT_ID"];
            this.email = _data["email"];
            this.txntype = _data["txntype"];
            this.status = _data["status"];
            this.message = _data["message"];
            this.apikey = _data["apikey"];
            this.statusCode = _data["statusCode"];
            (<any>this).address = _data["address"];
            (<any>this).city = _data["city"];
            (<any>this).state = _data["state"];
            (<any>this).pinCode = _data["pinCode"];
        }
    }
  
    static fromJS(data: any): GetOrderApexTypePaymentResponse {
        data = typeof data === 'object' ? data : {};
        let result = new GetOrderApexTypePaymentResponse();
        result.init(data);
        return result;
    }
  
    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["orderAmount"] = this.orderAmount;
        data["returnURL"] = this.returnURL;
        data["postURL"] = this.postURL;
        data["surl"] = this.surl;
        data["curl"] = this.curl;
        data["paY_ID"] = this.paY_ID;
        data["orderId"] = this.orderId;
        data["orderCurrency"] = this.orderCurrency;
        data["hash"] = this.hash;
        data["customerName"] = this.customerName;
        data["customerPhonenumber"] = this.customerPhonenumber;
        data["cusT_ID"] = this.cusT_ID;
        data["email"] = this.email;
        data["txntype"] = this.txntype;
        data["status"] = this.status;
        data["message"] = this.message;
        data["apikey"] = this.apikey;
        data["statusCode"] = this.statusCode;
        data["address"] = this.address;
        data["city"] = this.city;
        data["state"] = this.state;
        data["pinCode"] = this.pinCode;
        return data;
    }
  }
  
  export interface IGetOrderApexTypePaymentResponse {
    orderAmount?: number | undefined;
    returnURL?: string | undefined;
    postURL?: string | undefined;
    surl?: string | undefined;
    curl?: string | undefined;
    paY_ID?: string | undefined;
    orderId?: string | undefined;
    orderCurrency?: string | undefined;
    hash?: string | undefined;
    customerName?: string | undefined;
    customerPhonenumber?: string | undefined;
    cusT_ID?: string | undefined;
    email?: string | undefined;
    txntype?: string | undefined;
    status?: boolean | undefined;
    message?: string | undefined;
    apikey?: string | undefined;
    statusCode?: number;
    address?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
    pinCode?: string | undefined;
  }
  
  export class AddNewUserRequest implements IAddNewUserRequest {
    name?: string | undefined;
    userName?: string | undefined;
    userPassword?: string | undefined;
    levelID?: number;
    accountStatusID?: number;
    userType?: boolean;
    teleNo?: string | undefined;
    paymentThresholdLimit?: number;
    credit?: number;
    marginRate?: number;
    token?: string | undefined;
  
    constructor(data?: IAddNewUserRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.name = _data["name"];
        this.userName = _data["userName"];
        this.userPassword = _data["userPassword"];
        this.levelID = _data["levelID"];
        this.accountStatusID = _data["accountStatusID"];
        this.userType = _data["userType"];
        this.teleNo = _data["teleNo"];
        this.paymentThresholdLimit = _data["paymentThresholdLimit"];
        this.credit = _data["credit"];
        this.marginRate = _data["marginRate"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): AddNewUserRequest {
      data = typeof data === 'object' ? data : {};
      let result = new AddNewUserRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["name"] = this.name;
      data["userName"] = this.userName;
      data["userPassword"] = this.userPassword;
      data["levelID"] = this.levelID;
      data["accountStatusID"] = this.accountStatusID;
      data["userType"] = this.userType;
      data["teleNo"] = this.teleNo;
      data["paymentThresholdLimit"] = this.paymentThresholdLimit;
      data["credit"] = this.credit;
      data["marginRate"] = this.marginRate;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IAddNewUserRequest {
    name?: string | undefined;
    userName?: string | undefined;
    userPassword?: string | undefined;
    levelID?: number;
    accountStatusID?: number;
    userType?: boolean;
    teleNo?: string | undefined;
    paymentThresholdLimit?: number;
    credit?: number;
    marginRate?: number;
    token?: string | undefined;
  }
  
  // export class CreateIDRequest {
  //   userName?: string | undefined;
  //   userPassword?: string | undefined;
  //   productID?: number;
  //   token?: any;
  //
  //   constructor(username: string, productid: number, token: string) {
  //     this.userName = username;
  //     // this.userPassword = userpassword;
  //     this.productID = productid;
  //     this.token = token;
  //
  //   }
  //
  //
  // }
  
  export class CreateIDRequest implements ICreateIDRequest {
    userName?: string | undefined;
    productID?: number;
    deposit?: number;
    token?: string | undefined;
  
    constructor(username: string, productid: number, deposit: number, token: string) {
      this.userName = username;
      this.productID = productid;
      this.deposit = deposit;
      this.token = token;
    }
  
  }
  
  export interface ICreateIDRequest {
    userName?: string | undefined;
    productID?: number;
    deposit?: number;
    token?: string | undefined;
  }
  
  export class ChangeStatusOfManualPaymentRequest implements IChangeStatusOfManualPaymentRequest {
    orderID?: number;
    statusID?: number;
    details?: string | undefined;
    token?: string | undefined;
  
    constructor(data?: IChangeStatusOfManualPaymentRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.orderID = _data["orderID"];
        this.statusID = _data["statusID"];
        this.details = _data["details"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): ChangeStatusOfManualPaymentRequest {
      data = typeof data === 'object' ? data : {};
      let result = new ChangeStatusOfManualPaymentRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["orderID"] = this.orderID;
      data["statusID"] = this.statusID;
      data["details"] = this.details;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IChangeStatusOfManualPaymentRequest {
    orderID?: number;
    statusID?: number;
    details?: string | undefined;
    token?: string | undefined;
  }
  
  export interface ICreateIDRequest {
    userName?: string | undefined;
    // userPassword?: string | undefined;
    productID?: number;
    // memberCode?: string | undefined;
    token?: string | undefined;
  }
  
  export class SignUpDetailRequest implements ISignUpDetailRequest {
    name?: string | undefined;
    userPassword?: string | undefined;
    contactNumber?: string | undefined;
    oTP?: number;
    campaign?: string | undefined;
    medium?: string | undefined;
    source?: string | undefined;
    affiliation?: string | undefined;
    browserID?: string | undefined;
    token?: string | undefined;
  
    constructor(data?: ISignUpDetailRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
  
    init(_data?: any) {
        if (_data) {
            this.name = _data["name"];
            this.userPassword = _data["userPassword"];
            this.contactNumber = _data["contactNumber"];
            this.oTP = _data["oTP"];
            this.campaign = _data["campaign"];
            this.medium = _data["medium"];
            this.source = _data["source"];
            this.affiliation = _data["affiliation"];
            this.browserID = _data["browserID"];
            this.token = _data["token"];
        }
    }
  
    static fromJS(data: any): SignUpDetailRequest {
        data = typeof data === 'object' ? data : {};
        let result = new SignUpDetailRequest();
        result.init(data);
        return result;
    }
  
    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["userPassword"] = this.userPassword;
        data["contactNumber"] = this.contactNumber;
        data["oTP"] = this.oTP;
        data["campaign"] = this.campaign;
        data["medium"] = this.medium;
        data["source"] = this.source;
        data["affiliation"] = this.affiliation;
        data["browserID"] = this.browserID;
        data["token"] = this.token;
        return data;
    }
  }
  
  export interface ISignUpDetailRequest {
    name?: string | undefined;
    userPassword?: string | undefined;
    contactNumber?: string | undefined;
    oTP?: number;
    campaign?: string | undefined;
    medium?: string | undefined;
    source?: string | undefined;
    affiliation?: string | undefined;
    browserID?: string | undefined;
    token?: string | undefined;
  }
  
  export class UserSignUpRequest implements IUserSignUpRequest {
    contactNumber?: string | undefined;
    token?: string | undefined;
    countryCode?: string | undefined;
  
    constructor(phonenumber: string, token: string, countryCode: string) {
      this.contactNumber = phonenumber;
      this.token = token;
      this.token = token;
      this.countryCode = countryCode;
    }
  
  
  }
  
  export interface IUserSignUpRequest {
    contactNumber?: string | undefined;
    token?: string | undefined;
    countryCode?: string | undefined;
  }
  
  export interface ILoginNumberRequest {
    contactNumber?: string | undefined;
    token?: string | undefined;
    countryCode?: string | undefined;
    fbtoken?: string | undefined;
  }
  
  export class LoginNumberRequest {
    contactNumber?: string | undefined;
    token?: string | undefined;
    countryCode?: string | undefined;
    fbtoken?: string | undefined;
  
    constructor(phonenumber: string, token: string, countryCode: string, fbtoken: string) {
      this.contactNumber = phonenumber;
      this.token = token;
      this.countryCode = countryCode;
      this.fbtoken = fbtoken;
    }
  
  
  }
  
  
  export class ProductUserAccountStatementRequest implements IProductUserAccountStatementRequest {
    productUserName?: string | undefined;
    from?: Date;
    to?: Date;
    token?: string | undefined;
  
    constructor(data?: IProductUserAccountStatementRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.productUserName = _data["productUserName"];
        this.from = _data["from"] ? new Date(_data["from"].toString()) : <any>undefined;
        this.to = _data["to"] ? new Date(_data["to"].toString()) : <any>undefined;
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): ProductUserAccountStatementRequest {
      data = typeof data === 'object' ? data : {};
      let result = new ProductUserAccountStatementRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["productUserName"] = this.productUserName;
      data["from"] = this.from ? this.from.toISOString() : <any>undefined;
      data["to"] = this.to ? this.to.toISOString() : <any>undefined;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IProductUserAccountStatementRequest {
    productUserName?: string | undefined;
    from?: Date;
    to?: Date;
    token?: string | undefined;
  }
  
  export class ListOfUserProductUserResponse implements IListOfUserProductUserResponse {
    productUserName?: string | undefined;
  
    constructor(data?: IListOfUserProductUserResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.productUserName = _data["productUserName"];
      }
    }
  
    static fromJS(data: any): ListOfUserProductUserResponse {
      data = typeof data === 'object' ? data : {};
      let result = new ListOfUserProductUserResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["productUserName"] = this.productUserName;
      return data;
    }
  }
  
  export interface IListOfUserProductUserResponse {
    productUserName?: string | undefined;
  }
  
  export class LoginNumberResponse implements ILoginNumberResponse {
    oTP?: number | undefined;
    statusCode?: number;
    status?: string | undefined;
  
    constructor(data?: ILoginNumberResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.oTP = _data["oTP"];
        this.statusCode = _data["statusCode"];
        this.status = _data["status"];
      }
    }
  
    static fromJS(data: any): LoginNumberResponse {
      data = typeof data === 'object' ? data : {};
      let result = new LoginNumberResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["oTP"] = this.oTP;
      data["statusCode"] = this.statusCode;
      data["status"] = this.status;
      return data;
    }
  }
  
  export class CloseIDRequest implements ICloseIDRequest {
    userName?: string | undefined;
    productID?: number;
    active?: boolean;
    token?: string | undefined;
  
    constructor(data?: ICloseIDRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.userName = _data["userName"];
        this.productID = _data["productID"];
        this.active = _data["active"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): CloseIDRequest {
      data = typeof data === 'object' ? data : {};
      let result = new CloseIDRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["userName"] = this.userName;
      data["productID"] = this.productID;
      data["active"] = this.active;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface ICloseIDRequest {
    userName?: string | undefined;
    productID?: number;
    active?: boolean;
    token?: string | undefined;
  }
  
  export interface IListOfUserKycDetailsResponse {
    typeOfID?: number;
    typeOfIDs?: string | undefined;
    issueDate?: Date;
    expireDate?: Date;
    iDNumber?: string | undefined;
    file?: string | undefined;
    active?: boolean;
  }
  
  export interface IListOfKycDetailsResponse {
    userID?: number;
    userName?: string | undefined;
    typeOfID?: number;
    typeOfIDs?: string | undefined;
    issueDate?: Date;
    expireDate?: Date;
    iDNumber?: string | undefined;
    file?: string | undefined;
    active?: boolean;
  }
  
  export interface ILoginNumberResponse {
    oTP?: number | undefined;
    statusCode?: number;
    status?: string | undefined;
  }
  
  export interface IUserSignUpRequest {
    userTitle?: string | undefined;
    userName?: string | undefined;
    userPassword?: string | undefined;
    teleNo?: string | undefined;
    countryCode?: string | undefined;
  }
  
  export class PlusMinusRequest implements IPlusMinusRequest {
    userID?: number;
    amount?: number;
    token?: string | undefined;
    narration?: string | undefined;
  
    constructor(userid: number, amount: number, token: string, narration: string) {
      this.userID = userid;
      this.amount = amount;
      this.token = token;
      this.narration = narration;
    }
  
  
  }
  
  export interface IPlusMinusRequest {
    userID?: number;
    amount?: number;
    token?: string | undefined;
    narration?: string | undefined;
  }
  
  export class ListOfIdTypesRequest implements IListOfIdTypesRequest {
    token?: string | undefined;
  
    constructor(data?: IListOfIdTypesRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): ListOfIdTypesRequest {
      data = typeof data === 'object' ? data : {};
      let result = new ListOfIdTypesRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IListOfIdTypesRequest {
    token?: string | undefined;
  }
  
  export class ListOfIdTypesResponse implements IListOfIdTypesResponse {
    id?: number;
    typeOfIDs?: string | undefined;
  
    constructor(data?: IListOfIdTypesResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.id = _data["id"];
        this.typeOfIDs = _data["typeOfIDs"];
      }
    }
  
    static fromJS(data: any): ListOfIdTypesResponse {
      data = typeof data === 'object' ? data : {};
      let result = new ListOfIdTypesResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["id"] = this.id;
      data["typeOfIDs"] = this.typeOfIDs;
      return data;
    }
  }
  
  export interface IListOfIdTypesResponse {
    id?: number;
    typeOfIDs?: string | undefined;
  }
  
  export class UserAccountStatementDWRequest implements IUserAccountStatementDWRequest {
    userID?: number;
    from?: Date;
    to?: Date;
    token?: string | undefined;
  
    constructor(data?: IUserAccountStatementDWRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.userID = _data["userID"];
        this.from = _data["from"] ? new Date(_data["from"].toString()) : <any>undefined;
        this.to = _data["to"] ? new Date(_data["to"].toString()) : <any>undefined;
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): UserAccountStatementDWRequest {
      data = typeof data === 'object' ? data : {};
      let result = new UserAccountStatementDWRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["userID"] = this.userID;
      data["from"] = this.from ? this.from.toISOString() : <any>undefined;
      data["to"] = this.to ? this.to.toISOString() : <any>undefined;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IUserAccountStatementDWRequest {
    userID?: number;
    from?: Date;
    to?: Date;
    token?: string | undefined;
  }
  
  export class ListOfKycDetailsRequest implements IListOfKycDetailsRequest {
    token?: string | undefined;
  
    constructor(data?: IListOfKycDetailsRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): ListOfKycDetailsRequest {
      data = typeof data === 'object' ? data : {};
      let result = new ListOfKycDetailsRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IListOfKycDetailsRequest {
    token?: string | undefined;
  }
  
  export interface UpdateUserPasswordFromAdminRequest {
    userID?: number;
    newPassword?: string | undefined;
    token?: string | undefined;
  }
  
  export class UpdateUserPasswordFromAdminRequest implements IUpdateUserPasswordFromAdminRequest {
    userID?: number;
    newPassword?: string | undefined;
    token?: string | undefined;
  
    constructor(data?: IUpdateUserPasswordFromAdminRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.userID = _data["userID"];
        this.newPassword = _data["newPassword"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): UpdateUserPasswordFromAdminRequest {
      data = typeof data === 'object' ? data : {};
      let result = new UpdateUserPasswordFromAdminRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["userID"] = this.userID;
      data["newPassword"] = this.newPassword;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IUpdateUserPasswordFromAdminRequest {
    userID?: number;
    newPassword?: string | undefined;
    token?: string | undefined;
  }
  
  export class ListOfKycDetailsResponse implements IListOfKycDetailsResponse {
    userID?: number;
    userName?: string | undefined;
    typeOfID?: number;
    orderID?: number;
    typeOfIDs?: string | undefined;
    issueDate?: Date;
    expireDate?: Date;
    iDNumber?: string | undefined;
    file?: string | undefined;
    active?: boolean;
  
    constructor(data?: IListOfKycDetailsResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.userID = _data["userID"];
        this.userName = _data["userName"];
        this.typeOfID = _data["typeOfID"];
        this.orderID = _data["orderID"];
        this.typeOfIDs = _data["typeOfIDs"];
        this.issueDate = _data["issueDate"] ? new Date(_data["issueDate"].toString()) : <any>undefined;
        this.expireDate = _data["expireDate"] ? new Date(_data["expireDate"].toString()) : <any>undefined;
        this.iDNumber = _data["IDNumber"];
        this.file = _data["file"];
        this.active = _data["active"];
      }
    }
  
    static fromJS(data: any): ListOfKycDetailsResponse {
      data = typeof data === 'object' ? data : {};
      let result = new ListOfKycDetailsResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["userID"] = this.userID;
      data["userName"] = this.userName;
      data["typeOfID"] = this.typeOfID;
      data["orderID"] = this.orderID;
      data["typeOfIDs"] = this.typeOfIDs;
      data["issueDate"] = this.issueDate ? this.issueDate.toISOString() : <any>undefined;
      data["expireDate"] = this.expireDate ? this.expireDate.toISOString() : <any>undefined;
      data["IDNumber"] = this.iDNumber;
      data["file"] = this.file;
      data["active"] = this.active;
      return data;
    }
  }
  
  export interface IListOfKycDetailsResponse {
    userID?: number;
    userName?: string | undefined;
    typeOfID?: number;
    orderID?: number;
    typeOfIDs?: string | undefined;
    issueDate?: Date;
    expireDate?: Date;
    iDNumber?: string | undefined;
    file?: string | undefined;
    active?: boolean;
  }
  
  export class AddUpdateUserKYCRequest implements IAddUpdateUserKYCRequest {
    typeOfID?: number;
    issueDate?: Date;
    expireDate?: Date;
    iDNumber?: string | undefined;
    file?: string | undefined;
    active?: boolean;
    token?: string | undefined;
  
    constructor(data?: IAddUpdateUserKYCRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.typeOfID = _data["typeOfID"];
        this.issueDate = _data["issueDate"] ? new Date(_data["issueDate"].toString()) : <any>undefined;
        this.expireDate = _data["expireDate"] ? new Date(_data["expireDate"].toString()) : <any>undefined;
        this.iDNumber = _data["iDNumber"];
        this.file = _data["file"];
        this.active = _data["active"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): AddUpdateUserKYCRequest {
      data = typeof data === 'object' ? data : {};
      let result = new AddUpdateUserKYCRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["typeOfID"] = this.typeOfID;
      data["issueDate"] = this.issueDate ? this.issueDate.toISOString() : <any>undefined;
      data["expireDate"] = this.expireDate ? this.expireDate.toISOString() : <any>undefined;
      data["iDNumber"] = this.iDNumber;
      data["file"] = this.file;
      data["active"] = this.active;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IAddUpdateUserKYCRequest {
    typeOfID?: number;
    issueDate?: Date;
    expireDate?: Date;
    iDNumber?: string | undefined;
    file?: string | undefined;
    active?: boolean;
    token?: string | undefined;
  }
  
  export class GetWalletRequest implements IGetWalletRequest {
    token?: string | undefined;
  
    constructor(token: string) {
      this.token = token;
    }
  
  
  }
  
  export class GetproductUserListRequest implements IProductListRequest {
    token?: string | undefined;
  
    constructor(token: string) {
      this.token = token;
    }
  }
  
  export class ListOfUserKycDetailsRequest implements IListOfUserKycDetailsRequest {
    token?: string | undefined;
  
    constructor(data?: IListOfUserKycDetailsRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): ListOfUserKycDetailsRequest {
      data = typeof data === 'object' ? data : {};
      let result = new ListOfUserKycDetailsRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IListOfUserKycDetailsRequest {
    token?: string | undefined;
  }
  
  export class ListOfUserKycDetailsResponse implements IListOfUserKycDetailsResponse {
    typeOfID?: number;
    typeOfIDs?: string | undefined;
    issueDate?: Date;
    expireDate?: Date;
    iDNumber?: string | undefined;
    file?: string | undefined;
    active?: boolean;
  
    constructor(data?: IListOfUserKycDetailsResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.typeOfID = _data["typeOfID"];
        this.typeOfIDs = _data["typeOfIDs"];
        this.issueDate = _data["issueDate"] ? new Date(_data["issueDate"].toString()) : <any>undefined;
        this.expireDate = _data["expireDate"] ? new Date(_data["expireDate"].toString()) : <any>undefined;
        this.iDNumber = _data["IDNumber"];
        this.file = _data["file"];
        this.active = _data["active"];
      }
    }
  
    static fromJS(data: any): ListOfUserKycDetailsResponse {
      data = typeof data === 'object' ? data : {};
      let result = new ListOfUserKycDetailsResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["typeOfID"] = this.typeOfID;
      data["typeOfIDs"] = this.typeOfIDs;
      data["issueDate"] = this.issueDate ? this.issueDate.toISOString() : <any>undefined;
      data["expireDate"] = this.expireDate ? this.expireDate.toISOString() : <any>undefined;
      data["IDNumber"] = this.iDNumber;
      data["file"] = this.file;
      data["active"] = this.active;
      return data;
    }
  }
  
  export interface IListOfUserKycDetailsResponse {
    typeOfID?: number;
    typeOfIDs?: string | undefined;
    issueDate?: Date;
    expireDate?: Date;
    iDNumber?: string | undefined;
    file?: string | undefined;
    active?: boolean;
  }
  
  export class ListOfPaymentMethodsRequest implements IListOfPaymentMethodsRequest {
    token?: string | undefined;
  
    constructor(data?: IListOfPaymentMethodsRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): ListOfPaymentMethodsRequest {
      data = typeof data === 'object' ? data : {};
      let result = new ListOfPaymentMethodsRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IListOfPaymentMethodsRequest {
    token?: string | undefined;
  }
  
  export class UpdatePaymentMethodStatusRequest implements IUpdatePaymentMethodStatusRequest {
    inActive?: boolean;
    paymentID?: number;
    token?: string | undefined;
  
    constructor(data?: IUpdatePaymentMethodStatusRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.inActive = _data["inActive"];
        this.paymentID = _data["paymentID"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): UpdatePaymentMethodStatusRequest {
      data = typeof data === 'object' ? data : {};
      let result = new UpdatePaymentMethodStatusRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["inActive"] = this.inActive;
      data["paymentID"] = this.paymentID;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IUpdatePaymentMethodStatusRequest {
    inActive?: boolean;
    paymentID?: number;
    token?: string | undefined;
  }
  
  export class ListOfPaymentMethodsResponse implements IListOfPaymentMethodsResponse {
    id?: number;
    paymentMethod?: string | undefined;
    inActive?: boolean;
  
    constructor(data?: IListOfPaymentMethodsResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.id = _data["id"];
        this.paymentMethod = _data["paymentMethod"];
        this.inActive = _data["inActive"];
      }
    }
  
    static fromJS(data: any): ListOfPaymentMethodsResponse {
      data = typeof data === 'object' ? data : {};
      let result = new ListOfPaymentMethodsResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["id"] = this.id;
      data["paymentMethod"] = this.paymentMethod;
      data["inActive"] = this.inActive;
      return data;
    }
  }
  
  export interface IListOfPaymentMethodsResponse {
    id?: number;
    paymentMethod?: string | undefined;
    inActive?: boolean;
  }
  
  export interface IGetWalletRequest {
    token?: string | undefined;
  }
  
  export class UpdateUserPasswordInProductsRequest implements IUpdateUserPasswordInProductsRequest {
    newPassword?: string | undefined;
    productID?: number;
    token?: string | undefined;
  
    constructor(data?: IUpdateUserPasswordInProductsRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.newPassword = _data["newPassword"];
        this.productID = _data["productID"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): UpdateUserPasswordInProductsRequest {
      data = typeof data === 'object' ? data : {};
      let result = new UpdateUserPasswordInProductsRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["newPassword"] = this.newPassword;
      data["productID"] = this.productID;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IUpdateUserPasswordInProductsRequest {
    newPassword?: string | undefined;
    productID?: number;
    token?: string | undefined;
  }
  
  export class UpdateUserPasswordRequest implements IUpdateUserPasswordRequest {
    oldPassword?: string | undefined;
    newPassword?: string | undefined;
    token?: string | undefined;
  
    constructor(data?: IUpdateUserPasswordRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.oldPassword = _data["oldPassword"];
        this.newPassword = _data["newPassword"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): UpdateUserPasswordRequest {
      data = typeof data === 'object' ? data : {};
      let result = new UpdateUserPasswordRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["oldPassword"] = this.oldPassword;
      data["newPassword"] = this.newPassword;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IUpdateUserPasswordRequest {
    oldPassword?: string | undefined;
    newPassword?: string | undefined;
    token?: string | undefined;
  }
  
  export class AddUpdateCommissionRateRequest implements IAddUpdateCommissionRateRequest {
    userID?: number;
    marginRate?: number;
    token?: string | undefined;
  
    constructor(data?: IAddUpdateCommissionRateRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.userID = _data["userID"];
        this.marginRate = _data["marginRate"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): AddUpdateCommissionRateRequest {
      data = typeof data === 'object' ? data : {};
      let result = new AddUpdateCommissionRateRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["userID"] = this.userID;
      data["marginRate"] = this.marginRate;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IAddUpdateCommissionRateRequest {
    userID?: number;
    marginRate?: number;
    token?: string | undefined;
  }
  
  export class GetWalletResponse implements IGetWalletResponse {
    balance?: number;
    liability?: number;
    aviBalance?: number;
    bonus?: number;
    credit?: number;
    memberCode?: string | undefined;
    statusCode?: number;
    status?: string | undefined;
    id?: number | undefined;
  
    constructor(data?: IGetWalletResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
  
    init(_data?: any) {
        if (_data) {
            this.balance = _data["balance"];
            this.liability = _data["liability"];
            this.aviBalance = _data["aviBalance"];
            this.bonus = _data["bonus"];
            this.credit = _data["credit"];
            this.memberCode = _data["memberCode"];
            this.statusCode = _data["statusCode"];
            this.status = _data["status"];
            this.id = _data["id"];
        }
    }
  
    static fromJS(data: any): GetWalletResponse {
        data = typeof data === 'object' ? data : {};
        let result = new GetWalletResponse();
        result.init(data);
        return result;
    }
  
    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["balance"] = this.balance;
        data["liability"] = this.liability;
        data["aviBalance"] = this.aviBalance;
        data["bonus"] = this.bonus;
        data["credit"] = this.credit;
        data["memberCode"] = this.memberCode;
        data["statusCode"] = this.statusCode;
        data["status"] = this.status;
        data["id"] = this.id;
        return data;
    }
  }
  
  export interface IGetWalletResponse {
    balance?: number;
    liability?: number;
    aviBalance?: number;
    bonus?: number;
    credit?: number;
    memberCode?: string | undefined;
    statusCode?: number;
    status?: string | undefined;
    id?: number | undefined;
  }
  
  export class AddUpdateProductsRequest implements IAddUpdateProductsRequest {
    productTitle?: string | undefined;
    domain?: string | undefined;
    accountStatusID?: number;
    token?: string | undefined;
  
    constructor(data?: IAddUpdateProductsRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.productTitle = _data["productTitle"];
        this.domain = _data["domain"];
        this.accountStatusID = _data["accountStatusID"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): AddUpdateProductsRequest {
      data = typeof data === 'object' ? data : {};
      let result = new AddUpdateProductsRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["productTitle"] = this.productTitle;
      data["domain"] = this.domain;
      data["accountStatusID"] = this.accountStatusID;
      data["token"] = this.token;
      return data;
    }
  }
  
  
  export interface IListOfUserCurrentMarketBetsRequest {
    typeOfTransaction?: string | undefined;
  
    token?: string | undefined;
  }
  
  
  export interface IListOfUserCurrentMarketBetsResponse {
    userName?: string | undefined;
    marketId?: string | undefined;
    marketName?: string | undefined;
    rate?: number;
    stake?: number;
    betType?: string | undefined;
    transactionCode?: string | undefined;
    posted?: boolean;
    payableAmount?: number;
    netPL?: number;
    settlementID?: string | undefined;
    commissionPer?: number;
  }
  
  export interface IAddUpdateCardDetailsRequest {
    holderName?: string | undefined;
    cardNo?: string | undefined;
    cVCode?: number;
    issuedDate?: Date;
    expiredDate?: Date;
    currencyCode?: string | undefined;
    methodTypeID?: number;
    token?: string | undefined;
  }
  
  export interface IAddUpdateProductsRequest {
    productTitle?: string | undefined;
    domain?: string | undefined;
    accountStatusID?: number;
    token?: string | undefined;
  }
  
  export class AddUpdateLevelsRequest implements IAddUpdateLevelsRequest {
    levelTitle?: string | undefined;
    token?: string | undefined;
  
    constructor(data?: IAddUpdateLevelsRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.levelTitle = _data["levelTitle"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): AddUpdateLevelsRequest {
      data = typeof data === 'object' ? data : {};
      let result = new AddUpdateLevelsRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["levelTitle"] = this.levelTitle;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IAddUpdateLevelsRequest {
    levelTitle?: string | undefined;
    token?: string | undefined;
  }
  
  export class AddManualPaymentResponse implements IAddManualPaymentResponse {
    refID?: number | undefined;
    statusCode?: number;
    status?: string | undefined;
  
    constructor(data?: IAddManualPaymentResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
  
    init(_data?: any) {
        if (_data) {
            this.refID = _data["refID"];
            this.statusCode = _data["statusCode"];
            this.status = _data["status"];
        }
    }
  
    static fromJS(data: any): AddManualPaymentResponse {
        data = typeof data === 'object' ? data : {};
        let result = new AddManualPaymentResponse();
        result.init(data);
        return result;
    }
  
    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["refID"] = this.refID;
        data["statusCode"] = this.statusCode;
        data["status"] = this.status;
        return data;
    }
  }
  
  export interface IAddManualPaymentResponse {
    refID?: number | undefined;
    statusCode?: number;
    status?: string | undefined;
  }
  
  export class CallResponse implements ICallResponse {
    statusCode?: number;
    status?: string | undefined;
  
    constructor(data?: ICallResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.statusCode = _data["statusCode"];
        this.status = _data["status"];
      }
    }
  
    static fromJS(data: any): CallResponse {
      data = typeof data === 'object' ? data : {};
      let result = new CallResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["statusCode"] = this.statusCode;
      data["status"] = this.status;
      return data;
    }
  }
  
  export class UpdateUserKycStatusRequest implements IUpdateUserKycStatusRequest {
    active?: boolean;
    orderID?: number;
    token?: string | undefined;
  
    constructor(data?: IUpdateUserKycStatusRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.active = _data["active"];
        this.orderID = _data["orderID"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): UpdateUserKycStatusRequest {
      data = typeof data === 'object' ? data : {};
      let result = new UpdateUserKycStatusRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["active"] = this.active;
      data["orderID"] = this.orderID;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IUpdateUserKycStatusRequest {
    active?: boolean;
    orderID?: number;
    token?: string | undefined;
  }
  
  export class AddWithdrawRequest implements IAddWithdrawRequest {
    onlinePaymentID?: number;
    amount?: number;
    token?: string | undefined;
  
    constructor(data?: IAddWithdrawRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.onlinePaymentID = _data["onlinePaymentID"];
        this.amount = _data["amount"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): AddWithdrawRequest {
      data = typeof data === 'object' ? data : {};
      let result = new AddWithdrawRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["onlinePaymentID"] = this.onlinePaymentID;
      data["amount"] = this.amount;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IAddWithdrawRequest {
    onlinePaymentID?: number;
    amount?: number;
    token?: string | undefined;
  }
  
  export class ListOfUserCurrentMarketBetsQTRequest implements IListOfUserCurrentMarketBetsQTRequest {
    typeOfTransaction?: string | undefined;
    from?: Date;
    to?: Date;
    token?: string | undefined;
  
    constructor(data?: IListOfUserCurrentMarketBetsQTRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.typeOfTransaction = _data["typeOfTransaction"];
        this.from = _data["from"] ? new Date(_data["from"].toString()) : <any>undefined;
        this.to = _data["to"] ? new Date(_data["to"].toString()) : <any>undefined;
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): ListOfUserCurrentMarketBetsQTRequest {
      data = typeof data === 'object' ? data : {};
      let result = new ListOfUserCurrentMarketBetsQTRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["typeOfTransaction"] = this.typeOfTransaction;
      data["from"] = this.from ? this.from.toString() : <any>undefined;
      data["to"] = this.to ? this.to.toString() : <any>undefined;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IListOfUserCurrentMarketBetsQTRequest {
    typeOfTransaction?: string | undefined;
    from?: Date;
    to?: Date;
    token?: string | undefined;
  }
  
  export class ListOfUserCurrentMarketBetsQTResponse implements IListOfUserCurrentMarketBetsQTResponse {
    userName?: string | undefined;
    gameId?: string | undefined;
    roundId?: string | undefined;
    pl?: number;
  
    constructor(data?: IListOfUserCurrentMarketBetsQTResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.userName = _data["userName"];
        this.gameId = _data["gameId"];
        this.roundId = _data["roundId"];
        this.pl = _data["pl"];
      }
    }
  
    static fromJS(data: any): ListOfUserCurrentMarketBetsQTResponse {
      data = typeof data === 'object' ? data : {};
      let result = new ListOfUserCurrentMarketBetsQTResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["userName"] = this.userName;
      data["gameId"] = this.gameId;
      data["roundId"] = this.roundId;
      data["pl"] = this.pl;
      return data;
    }
  }
  
  export interface IListOfUserCurrentMarketBetsQTResponse {
    userName?: string | undefined;
    gameId?: string | undefined;
    roundId?: string | undefined;
    pl?: number;
  }
  
  export class ListOfUserCurrentMarketBetsRequest implements IListOfUserCurrentMarketBetsRequest {
    typeOfTransaction?: string | undefined;
    from?: string;
    to?: string;
    token?: string | undefined;
  
    constructor(typeOfTransaction: string, startdate: string, to: string, token: string) {
      this.typeOfTransaction = typeOfTransaction;
      this.from = new Date(startdate).toISOString();
      this.to = new Date(to).toISOString();
      this.token = token;
    }
  }
  
  export interface IListOfUserCurrentMarketBetsRequest {
    typeOfTransaction?: string | undefined;
    token?: string | undefined;
  }
  
  export class ListOfUserCurrentMarketBetsResponse implements IListOfUserCurrentMarketBetsResponse {
    userName?: string | undefined;
    marketId?: string | undefined;
    marketName?: string | undefined;
    rate?: number;
    stake?: number;
    betType?: string | undefined;
    transactionCode?: string | undefined;
    posted?: boolean;
    payableAmount?: number;
    netPL?: number;
    settlementID?: string | undefined;
    commissionPer?: number;
  
    constructor(data?: IListOfUserCurrentMarketBetsResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.userName = _data["userName"];
        this.marketId = _data["marketId"];
        this.marketName = _data["marketName"];
        this.rate = _data["rate"];
        this.stake = _data["stake"];
        this.betType = _data["betType"];
        this.transactionCode = _data["transactionCode"];
        this.posted = _data["posted"];
        this.payableAmount = _data["payableAmount"];
        this.netPL = _data["netPL"];
        this.settlementID = _data["settlementID"];
        this.commissionPer = _data["commissionPer"];
      }
    }
  
    static fromJS(data: any): ListOfUserCurrentMarketBetsResponse {
      data = typeof data === 'object' ? data : {};
      let result = new ListOfUserCurrentMarketBetsResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["userName"] = this.userName;
      data["marketId"] = this.marketId;
      data["marketName"] = this.marketName;
      data["rate"] = this.rate;
      data["stake"] = this.stake;
      data["betType"] = this.betType;
      data["transactionCode"] = this.transactionCode;
      data["posted"] = this.posted;
      data["payableAmount"] = this.payableAmount;
      data["netPL"] = this.netPL;
      data["settlementID"] = this.settlementID;
      data["commissionPer"] = this.commissionPer;
      return data;
    }
  }
  
  export interface IListOfUserCurrentMarketBetsResponse {
    userName?: string | undefined;
    marketId?: string | undefined;
    marketName?: string | undefined;
    rate?: number;
    stake?: number;
    betType?: string | undefined;
    transactionCode?: string | undefined;
    posted?: boolean;
    payableAmount?: number;
    netPL?: number;
    settlementID?: string | undefined;
    commissionPer?: number;
  }
  
  export interface ICallResponse {
    statusCode?: number;
    status?: string | undefined;
  }
  
  export interface IListOfKycDetailsResponse {
    userId?: number;
    userName?: string | undefined;
    typeOfID?: number;
    typeOfIDs?: string | undefined;
    issueDate?: Date;
    expireDate?: Date;
    iDNumber?: string | undefined;
    file?: string | undefined;
    active?: boolean;
  }
  
  export class ListOfManualDepositAndWithdrawResponse implements IListOfManualDepositAndWithdrawResponse {
    id?: number;
    userName?: string | undefined;
    userID?: number;
    amount?: number;
    productID?: number;
    productTitle?: string | undefined;
    webSite?: string | undefined;
    transactionStatusID?: number;
    transactionStatus?: string | undefined;
  
    constructor(data?: IListOfManualDepositAndWithdrawResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.id = _data["id"];
        this.userName = _data["userName"];
        this.userID = _data["userID"];
        this.amount = _data["amount"];
        this.productID = _data["productID"];
        this.productTitle = _data["productTitle"];
        this.webSite = _data["webSite"];
        this.transactionStatusID = _data["transactionStatusID"];
        this.transactionStatus = _data["transactionStatus"];
      }
    }
  
    static fromJS(data: any): ListOfManualDepositAndWithdrawResponse {
      data = typeof data === 'object' ? data : {};
      let result = new ListOfManualDepositAndWithdrawResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["id"] = this.id;
      data["userName"] = this.userName;
      data["userID"] = this.userID;
      data["amount"] = this.amount;
      data["productID"] = this.productID;
      data["productTitle"] = this.productTitle;
      data["webSite"] = this.webSite;
      data["transactionStatusID"] = this.transactionStatusID;
      data["transactionStatus"] = this.transactionStatus;
      return data;
    }
  }
  
  export interface IListOfManualDepositAndWithdrawResponse {
    id?: number;
    userName?: string | undefined;
    userID?: number;
    amount?: number;
    productID?: number;
    productTitle?: string | undefined;
    webSite?: string | undefined;
    transactionStatusID?: number;
    transactionStatus?: string | undefined;
  }
  
  export class UpdatedManualIDCreationRequestInProductRequest implements IUpdatedManualIDCreationRequestInProductRequest {
    orderID?: number;
    statusID?: number;
    userName?: string | undefined;
    password?: string | undefined;
    memberCode?: string | undefined;
    details?: string | undefined;
    token?: string | undefined;
  
    constructor(data?: IUpdatedManualIDCreationRequestInProductRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.orderID = _data["orderID"];
        this.statusID = _data["statusID"];
        this.userName = _data["userName"];
        this.password = _data["password"];
        this.memberCode = _data["memberCode"];
        this.details = _data["details"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): UpdatedManualIDCreationRequestInProductRequest {
      data = typeof data === 'object' ? data : {};
      let result = new UpdatedManualIDCreationRequestInProductRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["orderID"] = this.orderID;
      data["statusID"] = this.statusID;
      data["userName"] = this.userName;
      data["password"] = this.password;
      data["memberCode"] = this.memberCode;
      data["details"] = this.details;
      data["token"] = this.token;
      return data;
    }
  }
  
  export class AddManualDWFromProductRequest implements IAddManualDWFromProductRequest {
    productID?: number;
    userName?: string | undefined;
    amount?: number;
    token?: string | undefined;
  
    constructor(data?: IAddManualDWFromProductRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.productID = _data["productID"];
        this.userName = _data["userName"];
        this.amount = _data["amount"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): AddManualDWFromProductRequest {
      data = typeof data === 'object' ? data : {};
      let result = new AddManualDWFromProductRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["productID"] = this.productID;
      data["userName"] = this.userName;
      data["amount"] = this.amount;
      data["token"] = this.token;
      return data;
    }
  }
  
  export class checkManualDepositStatusResponse implements IcheckManualDepositStatusResponse {
    productID?: number;
    userName?: string | undefined;
    token?: string | undefined;
  
    constructor(data?: IAddManualDWFromProductRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.productID = _data["productID"];
        this.userName = _data["userName"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): AddManualDWFromProductRequest {
      data = typeof data === 'object' ? data : {};
      let result = new AddManualDWFromProductRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["productID"] = this.productID;
      data["userName"] = this.userName;
      data["token"] = this.token;
      return data;
    }
  }
  
  export class ListOfManualIDCreationResponse implements IListOfManualIDCreationResponse {
    orderID?: number;
    userName?: string | undefined;
    password?: string | undefined;
    productID?: number;
    productTitle?: string | undefined;
    webSite?: string | undefined;
    agencyCode?: string | undefined;
    agentUserName?: string | undefined;
    agentPassword?: string | undefined;
    appKey?: string | undefined;
    transID?: number;
    apiToken?: string | undefined;
  
    constructor(data?: IListOfManualIDCreationResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.orderID = _data["orderID"];
        this.userName = _data["userName"];
        this.password = _data["password"];
        this.productID = _data["productID"];
        this.productTitle = _data["productTitle"];
        this.webSite = _data["webSite"];
        this.agencyCode = _data["agencyCode"];
        this.agentUserName = _data["agentUserName"];
        this.agentPassword = _data["agentPassword"];
        this.appKey = _data["appKey"];
        this.transID = _data["TransID"];
        this.apiToken = _data["apiToken"];
      }
    }
  
    static fromJS(data: any): ListOfManualIDCreationResponse {
      data = typeof data === 'object' ? data : {};
      let result = new ListOfManualIDCreationResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["orderID"] = this.orderID;
      data["userName"] = this.userName;
      data["password"] = this.password;
      data["productID"] = this.productID;
      data["productTitle"] = this.productTitle;
      data["webSite"] = this.webSite;
      data["agencyCode"] = this.agencyCode;
      data["agentUserName"] = this.agentUserName;
      data["agentPassword"] = this.agentPassword;
      data["appKey"] = this.appKey;
      data["TransID"] = this.transID;
      data["apiToken"] = this.apiToken;
      return data;
    }
  }
  
  export interface IListOfManualIDCreationResponse {
    orderID?: number;
    userName?: string | undefined;
    password?: string | undefined;
    productID?: number;
    productTitle?: string | undefined;
    webSite?: string | undefined;
    agencyCode?: string | undefined;
    agentUserName?: string | undefined;
    agentPassword?: string | undefined;
    appKey?: string | undefined;
    transID?: number;
    apiToken?: string | undefined;
  }
  
  export class ListOfManualIDCreationStatusResponse implements IListOfManualIDCreationStatusResponse {
    id?: number;
    client?: string | undefined;
    userName?: string | undefined;
    password?: string | undefined;
    productID?: number;
    productTitle?: string | undefined;
    webSite?: string | undefined;
    transactionStatusID?: number;
    transactionStatus?: string | undefined;
  
    constructor(data?: IListOfManualIDCreationStatusResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.id = _data["id"];
        this.id = _data["id"];
        this.client = _data["client"];
        this.userName = _data["userName"];
        this.password = _data["password"];
        this.productID = _data["productID"];
        this.productTitle = _data["productTitle"];
        this.webSite = _data["webSite"];
        this.transactionStatusID = _data["transactionStatusID"];
        this.transactionStatus = _data["transactionStatus"];
      }
    }
  
    static fromJS(data: any): ListOfManualIDCreationStatusResponse {
      data = typeof data === 'object' ? data : {};
      let result = new ListOfManualIDCreationStatusResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["id"] = this.id;
      data["client"] = this.client;
      data["userName"] = this.userName;
      data["password"] = this.password;
      data["productID"] = this.productID;
      data["productTitle"] = this.productTitle;
      data["webSite"] = this.webSite;
      data["transactionStatusID"] = this.transactionStatusID;
      data["transactionStatus"] = this.transactionStatus;
      return data;
    }
  }
  
  export class GetUserNameStatusInManualIDCreationRequest implements IGetUserNameStatusInManualIDCreationRequest {
    userName?: string | undefined;
    productID?: number;
    token?: string | undefined;
  
    constructor(data?: IGetUserNameStatusInManualIDCreationRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.userName = _data["userName"];
        this.productID = _data["productID"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): GetUserNameStatusInManualIDCreationRequest {
      data = typeof data === 'object' ? data : {};
      let result = new GetUserNameStatusInManualIDCreationRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["userName"] = this.userName;
      data["productID"] = this.productID;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IGetUserNameStatusInManualIDCreationRequest {
    userName?: string | undefined;
    productID?: number;
    token?: string | undefined;
  }
  
  export class GetUserNameTransferFundsStatusInProductRequest implements IGetUserNameTransferFundsStatusInProductRequest {
    userName?: string | undefined;
    productID?: number;
    token?: string | undefined;
  
    constructor(data?: IGetUserNameTransferFundsStatusInProductRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.userName = _data["userName"];
        this.productID = _data["ProductID"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): GetUserNameTransferFundsStatusInProductRequest {
      data = typeof data === 'object' ? data : {};
      let result = new GetUserNameTransferFundsStatusInProductRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["userName"] = this.userName;
      data["ProductID"] = this.productID;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IGetUserNameTransferFundsStatusInProductRequest {
    userName?: string | undefined;
    productID?: number;
    token?: string | undefined;
  }
  
  // for checking manual deposit
  
  export class VerificationForgetPasswordRequest implements IVerificationForgetPasswordRequest {
    newPassword?: string | undefined;
    contactNumber?: string | undefined;
    oTP?: number;
  
    constructor(data?: IVerificationForgetPasswordRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.newPassword = _data["newPassword"];
        this.contactNumber = _data["contactNumber"];
        this.oTP = _data["oTP"];
      }
    }
  
    static fromJS(data: any): VerificationForgetPasswordRequest {
      data = typeof data === 'object' ? data : {};
      let result = new VerificationForgetPasswordRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["newPassword"] = this.newPassword;
      data["contactNumber"] = this.contactNumber;
      data["oTP"] = this.oTP;
      return data;
    }
  }
  
  export interface IVerificationForgetPasswordRequest {
    newPassword?: string | undefined;
    contactNumber?: string | undefined;
    oTP?: number;
  }
  
  export class ForgetPasswordRequest implements IForgetPasswordRequest {
    contactNumber?: string | undefined;
  
    constructor(data?: IForgetPasswordRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.contactNumber = _data["contactNumber"];
      }
    }
  
    static fromJS(data: any): ForgetPasswordRequest {
      data = typeof data === 'object' ? data : {};
      let result = new ForgetPasswordRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["contactNumber"] = this.contactNumber;
      return data;
    }
  }
  
  export interface IForgetPasswordRequest {
    contactNumber?: string | undefined;
  }
  
  export class GetListOfIDCreationRequest implements IGetListOfIDCreationRequest {
    productID?: number;
    token?: string | undefined;
  
    constructor(data?: IGetListOfIDCreationRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.productID = _data["productID"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): GetListOfIDCreationRequest {
      data = typeof data === 'object' ? data : {};
      let result = new GetListOfIDCreationRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["productID"] = this.productID;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IGetListOfIDCreationRequest {
    productID?: number;
    token?: string | undefined;
  }
  
  export interface IListOfManualIDCreationStatusResponse {
    iD?: number;
    userName?: string | undefined;
    password?: string | undefined;
    productID?: number;
    productTitle?: string | undefined;
    webSite?: string | undefined;
    transactionStatusID?: number;
    transactionStatus?: string | undefined;
  }
  
  export interface IAddManualDWFromProductRequest {
    productID?: number;
    userName?: string | undefined;
    amount?: number;
    token?: string | undefined;
  }
  
  export interface IcheckManualDepositStatusResponse {
    productID?: number;
    userName?: string | undefined;
    token?: string | undefined;
  }
  
  export interface IListOfManualDepositAndWithdrawResponse {
    iD?: number;
    userName?: string | undefined;
    userID?: number;
    amount?: number;
    productID?: number;
    productTitle?: string | undefined;
    webSite?: string | undefined;
    transactionStatusID?: number;
    transactionStatus?: string | undefined;
  }
  
  export class AddManualIDCreationRequest implements IAddManualIDCreationRequest {
    productID?: number;
    userName?: string | undefined;
    password?: string | undefined;
    token?: string | undefined;
  
    constructor(data?: IAddManualIDCreationRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.productID = _data["productID"];
        this.userName = _data["userName"];
        this.password = _data["password"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): AddManualIDCreationRequest {
      data = typeof data === 'object' ? data : {};
      let result = new AddManualIDCreationRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["productID"] = this.productID;
      data["userName"] = this.userName;
      data["password"] = this.password;
      data["token"] = this.token;
      return data;
    }
  }
  
  export class GetNewsResponse implements IGetNewsResponse {
    news?: string | undefined;
  
    constructor(data?: IGetNewsResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.news = _data["news"];
      }
    }
  
    static fromJS(data: any): GetNewsResponse {
      data = typeof data === 'object' ? data : {};
      let result = new GetNewsResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["news"] = this.news;
      return data;
    }
  }
  
  export interface IGetNewsResponse {
    news?: string | undefined;
  }
  
  export class PaymentProviderListRequest implements IPaymentProviderListRequest {
    token?: string | undefined;
  
    constructor(data?: IPaymentProviderListRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): PaymentProviderListRequest {
      data = typeof data === 'object' ? data : {};
      let result = new PaymentProviderListRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["token"] = this.token;
      return data;
    }
  }
  
  
  export class CreateApexPaymentOrderRequest implements ICreateApexPaymentOrderRequest {
    email?: string | undefined;
    phoneNumber?: string | undefined;
    amount?: number;
    token?: string | undefined;
  
    constructor(data?: ICreateApexPaymentOrderRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.email = _data["email"];
        this.phoneNumber = _data["phoneNumber"];
        this.amount = _data["amount"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): CreateApexPaymentOrderRequest {
      data = typeof data === 'object' ? data : {};
      let result = new CreateApexPaymentOrderRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["email"] = this.email;
      data["phoneNumber"] = this.phoneNumber;
      data["amount"] = this.amount;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface ICreateApexPaymentOrderRequest {
    email?: string | undefined;
    phoneNumber?: string | undefined;
    amount?: number;
    token?: string | undefined;
  }
  
  export class GetOrderYesOpenTypePaymentResponse implements IGetOrderYesOpenTypePaymentResponse {
    status?: string | undefined;
    data?: string | undefined;
  
    constructor(data?: IGetOrderYesOpenTypePaymentResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.status = _data["status"];
        this.data = _data["data"];
      }
    }
  
    static fromJS(data: any): GetOrderYesOpenTypePaymentResponse {
      data = typeof data === 'object' ? data : {};
      let result = new GetOrderYesOpenTypePaymentResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["status"] = this.status;
      data["data"] = this.data;
      return data;
    }
  }
  
  export interface IGetOrderYesOpenTypePaymentResponse {
    status?: string | undefined;
    data?: string | undefined;
  }
  
  export interface IGetOrderApexPaymentRequest {
    orderID?: number;
    token?: string | undefined;
  }
  
  
  export class AddUpdateApexTypeOfProviderRequest implements IAddUpdateApexTypeOfProviderRequest {
    userID?: number;
    providerID?: number;
    tXNType?: string | undefined;
    returnURL?: string | undefined;
    postUrl?: string | undefined;
    salt?: string | undefined;
    encryptionKey?: string | undefined;
    currencyCode?: string | undefined;
    prefix?: string | undefined;
    apiKey?: string | undefined;
    active?: boolean;
    token?: string | undefined;
  
    constructor(data?: IAddUpdateApexTypeOfProviderRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.userID = _data["userID"];
        this.providerID = _data["providerID"];
        this.tXNType = _data["tXNType"];
        this.returnURL = _data["returnURL"];
        this.postUrl = _data["postUrl"];
        this.salt = _data["salt"];
        this.encryptionKey = _data["encryptionKey"];
        this.currencyCode = _data["currencyCode"];
        this.prefix = _data["prefix"];
        this.apiKey = _data["apiKey"];
        this.active = _data["active"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): AddUpdateApexTypeOfProviderRequest {
      data = typeof data === 'object' ? data : {};
      let result = new AddUpdateApexTypeOfProviderRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["userID"] = this.userID;
      data["providerID"] = this.providerID;
      data["tXNType"] = this.tXNType;
      data["returnURL"] = this.returnURL;
      data["postUrl"] = this.postUrl;
      data["salt"] = this.salt;
      data["encryptionKey"] = this.encryptionKey;
      data["currencyCode"] = this.currencyCode;
      data["prefix"] = this.prefix;
      data["apiKey"] = this.apiKey;
      data["active"] = this.active;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IAddUpdateApexTypeOfProviderRequest {
    userID?: number;
    providerID?: number;
    tXNType?: string | undefined;
    returnURL?: string | undefined;
    postUrl?: string | undefined;
    salt?: string | undefined;
    encryptionKey?: string | undefined;
    currencyCode?: string | undefined;
    prefix?: string | undefined;
    apiKey?: string | undefined;
    active?: boolean;
    token?: string | undefined;
  }
  
  
  export class CreateApexTypePaymentOrderRequest implements ICreateApexTypePaymentOrderRequest {
    providerID?: number;
    amount?: number;
    token?: string | undefined;
  
    constructor(data?: ICreateApexTypePaymentOrderRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.providerID = _data["providerID"];
        this.amount = _data["amount"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): CreateApexTypePaymentOrderRequest {
      data = typeof data === 'object' ? data : {};
      let result = new CreateApexTypePaymentOrderRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["providerID"] = this.providerID;
      data["amount"] = this.amount;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface ICreateApexTypePaymentOrderRequest {
    providerID?: number;
    amount?: number;
    token?: string | undefined;
  }
  
  export interface IPaymentProviderListRequest {
    token?: string | undefined;
  }
  
  export class PaymentProviderListResponse implements IPaymentProviderListResponse {
    providerID?: number;
    providerName?: string | undefined;
  
    constructor(data?: IPaymentProviderListResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.providerID = _data["providerID"];
        this.providerName = _data["providerName"];
      }
    }
  
    static fromJS(data: any): PaymentProviderListResponse {
      data = typeof data === 'object' ? data : {};
      let result = new PaymentProviderListResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["providerID"] = this.providerID;
      data["providerName"] = this.providerName;
      return data;
    }
  }
  
  export interface IPaymentProviderListResponse {
    providerID?: number;
    providerName?: string | undefined;
  }
  
  export interface IAddManualIDCreationRequest {
    productID?: number;
    userName?: string | undefined;
    password?: string | undefined;
    token?: string | undefined;
  }
  
  export interface IListOfManualIDCreationStatusResponse {
    iD?: number;
    userName?: string | undefined;
    password?: string | undefined;
    productID?: number;
    productTitle?: string | undefined;
    webSite?: string | undefined;
    transactionStatusID?: number;
    transactionStatus?: string | undefined;
  }
  
  export class UpdateStatusOfManualRequestDepositAndWithdrawFromProductRequest implements IUpdateStatusOfManualRequestDepositAndWithdrawFromProductRequest {
    orderID?: number;
    statusID?: number;
    details?: string | undefined;
    token?: string | undefined;
  
    constructor(data?: IUpdateStatusOfManualRequestDepositAndWithdrawFromProductRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.orderID = _data["orderID"];
        this.statusID = _data["statusID"];
        this.details = _data["details"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): UpdateStatusOfManualRequestDepositAndWithdrawFromProductRequest {
      data = typeof data === 'object' ? data : {};
      let result = new UpdateStatusOfManualRequestDepositAndWithdrawFromProductRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["orderID"] = this.orderID;
      data["statusID"] = this.statusID;
      data["details"] = this.details;
      data["token"] = this.token;
      return data;
    }
  }
  export class ListOfCompanyPaymentModsResponse implements IListOfCompanyPaymentModsResponse {
    id?: number;
    paymentMethod?: string | undefined;
    holderName?: string | undefined;
    number?: string | undefined;
    iban?: string | undefined;
    bankName?: string | undefined;
    cardNo?: string | undefined;
    kyc?: string | undefined;
  
    constructor(data?: IListOfCompanyPaymentModsResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
  
    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.paymentMethod = _data["paymentMethod"];
            this.holderName = _data["holderName"];
            this.number = _data["number"];
            this.iban = _data["iban"];
            this.bankName = _data["bankName"];
            this.cardNo = _data["cardNo"];
            this.kyc = _data["kyc"];
        }
    }
  
    static fromJS(data: any): ListOfCompanyPaymentModsResponse {
        data = typeof data === 'object' ? data : {};
        let result = new ListOfCompanyPaymentModsResponse();
        result.init(data);
        return result;
    }
  
    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["paymentMethod"] = this.paymentMethod;
        data["holderName"] = this.holderName;
        data["number"] = this.number;
        data["iban"] = this.iban;
        data["bankName"] = this.bankName;
        data["cardNo"] = this.cardNo;
        data["kyc"] = this.kyc;
        return data;
    }
  }
  
  export interface IListOfCompanyPaymentModsResponse {
    id?: number;
    paymentMethod?: string | undefined;
    holderName?: string | undefined;
    number?: string | undefined;
    iban?: string | undefined;
    bankName?: string | undefined;
    cardNo?: string | undefined;
    kyc?: string | undefined;
  }
  
  export interface IUpdateStatusOfManualRequestDepositAndWithdrawFromProductRequest {
    orderID?: number;
    statusID?: number;
    details?: string | undefined;
    token?: string | undefined;
  }
  
  
  
  export interface IUpdatedManualIDCreationRequestInProductRequest {
    orderID?: number;
    statusID?: number;
    userName?: string | undefined;
    password?: string | undefined;
    memberCode?: string | undefined;
    details?: string | undefined;
    token?: string | undefined;
  }
  
  export interface IListOfManualIDCreationStatusResponse {
    iD?: number;
    userName?: string | undefined;
    password?: string | undefined;
    productID?: number;
    productTitle?: string | undefined;
    webSite?: string | undefined;
    transactionStatusID?: number;
    transactionStatus?: string | undefined;
  }
  
  export class ResetPasswordRequest implements IResetPasswordRequest {
    userName?: string | undefined;
    token?: string | undefined;
  
    constructor(data?: IResetPasswordRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
  
    init(_data?: any) {
        if (_data) {
            this.userName = _data["userName"];
            this.token = _data["token"];
        }
    }
  
    static fromJS(data: any): ResetPasswordRequest {
        data = typeof data === 'object' ? data : {};
        let result = new ResetPasswordRequest();
        result.init(data);
        return result;
    }
  
    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["userName"] = this.userName;
        data["token"] = this.token;
        return data;
    }
  }
  
  export interface IResetPasswordRequest {
    userName?: string | undefined;
    token?: string | undefined;
  }
  
  export class ResetNewPasswordRequest implements IResetNewPasswordRequest {
    oTP?: number;
    userName?: string | undefined;
    newPassword?: string | undefined;
    confirmNewPassword?: string | undefined;
  
    constructor(data?: IResetNewPasswordRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
  
    init(_data?: any) {
        if (_data) {
            this.oTP = _data["oTP"];
            this.userName = _data["userName"];
            this.newPassword = _data["newPassword"];
            this.confirmNewPassword = _data["confirmNewPassword"];
        }
    }
  
    static fromJS(data: any): ResetNewPasswordRequest {
        data = typeof data === 'object' ? data : {};
        let result = new ResetNewPasswordRequest();
        result.init(data);
        return result;
    }
  
    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["oTP"] = this.oTP;
        data["userName"] = this.userName;
        data["newPassword"] = this.newPassword;
        data["confirmNewPassword"] = this.confirmNewPassword;
        return data;
    }
  }
  
  export interface IResetNewPasswordRequest {
    oTP?: number;
    userName?: string | undefined;
    newPassword?: string | undefined;
    confirmNewPassword?: string | undefined;
  }
  
  export class LoginAtlasRequest implements ILoginAtlasRequest {
    redirectTo?: string | undefined;
    language?: string | undefined;
    token?: string | undefined;
  
    constructor(data?: ILoginAtlasRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.redirectTo = _data["redirectTo"];
        this.language = _data["language"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): LoginAtlasRequest {
      data = typeof data === 'object' ? data : {};
      let result = new LoginAtlasRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["redirectTo"] = this.redirectTo;
      data["language"] = this.language;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface ILoginAtlasRequest {
    redirectTo?: string | undefined;
    language?: string | undefined;
    token?: string | undefined;
  }
  export class LoginAtlasResponse implements ILoginAtlasResponse {
    returnURL?: string | undefined;
    statusCode?: number;
    status?: string | undefined;
  
    constructor(data?: ILoginAtlasResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.returnURL = _data["returnURL"];
        this.statusCode = _data["statusCode"];
        this.status = _data["status"];
      }
    }
  
    static fromJS(data: any): LoginAtlasResponse {
      data = typeof data === 'object' ? data : {};
      let result = new LoginAtlasResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["returnURL"] = this.returnURL;
      data["statusCode"] = this.statusCode;
      data["status"] = this.status;
      return data;
    }
  }
  
  export interface ILoginAtlasResponse {
    returnURL?: string | undefined;
    statusCode?: number;
    status?: string | undefined;
  }
  
  export class LoginRequest implements ILoginRequest {
    userName?: string | undefined;
    password?: string | undefined;
  
    constructor(username: string, password: string) {
      this.userName = username;
      this.password = password;
    }
  
  }
  
  export interface ILoginRequest {
    userName?: string | undefined;
    password?: string | undefined;
  }
  
  export class LoginResponse implements ILoginResponse {
    userTitle?: string | undefined;
    levelID?: number;
    accountStatusID?: number;
    admin?: boolean;
    statusCode?: number;
    status?: string | undefined;
    token?: string | undefined;
  
    constructor(data?: ILoginResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.userTitle = _data["userTitle"];
        this.levelID = _data["levelID"];
        this.accountStatusID = _data["accountStatusID"];
        this.admin = _data["admin"];
        this.statusCode = _data["statusCode"];
        this.status = _data["status"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): LoginResponse {
      data = typeof data === 'object' ? data : {};
      let result = new LoginResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["userTitle"] = this.userTitle;
      data["levelID"] = this.levelID;
      data["accountStatusID"] = this.accountStatusID;
      data["admin"] = this.admin;
      data["statusCode"] = this.statusCode;
      data["status"] = this.status;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface ILoginResponse {
    userTitle?: string | undefined;
    levelID?: number;
    accountStatusID?: number;
    admin?: boolean;
    statusCode?: number;
    status?: string | undefined;
    token?: string | undefined;
  }
  
  export class ProductListRequest implements IProductListRequest {
    userID?: number;
    accountStatusID?: number | undefined;
    token?: string | undefined;
  
    constructor(accountstatusid: number, token: string) {
  
      this.accountStatusID = accountstatusid;
      this.token = token;
    }
  
  
  }
  
  export interface IProductListRequest {
    userID?: number;
    accountStatusID?: number | undefined;
    token?: string | undefined;
  }
  
  export class ProductListResponse implements IProductListResponse {
    productID?: number;
    productTitle?: string | undefined;
    domain?: string | undefined;
    accountStatusID?: number;
  
    constructor(data?: IProductListResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
  
      if (_data) {
        this.productID = _data["productID"];
        this.productTitle = _data["productTitle"];
        this.domain = _data["domain"];
        this.accountStatusID = _data["accountStatusID"];
      }
    }
  
    static fromJS(data: any): ProductListResponse {
  
      data = typeof data === 'object' ? data : {};
      let result = new ProductListResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
  
      data = typeof data === 'object' ? data : {};
      data["productID"] = this.productID;
      data["productTitle"] = this.productTitle;
      data["domain"] = this.domain;
      data["accountStatusID"] = this.accountStatusID;
      return data;
    }
  }
  
  export interface IProductListResponse {
    productID?: number;
    productTitle?: string | undefined;
    domain?: string | undefined;
    accountStatusID?: number;
  }
  
  
  export class SubAccountRequest implements ISubAccountRequest {
    userID?: number;
    accountStatusID?: number | undefined;
    token?: string | undefined;
  
    constructor(data?: ISubAccountRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.userID = _data["userID"];
        this.accountStatusID = _data["accountStatusID"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): SubAccountRequest {
      data = typeof data === 'object' ? data : {};
      let result = new SubAccountRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["userID"] = this.userID;
      data["accountStatusID"] = this.accountStatusID;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface ISubAccountRequest {
    userID?: number;
    accountStatusID?: number | undefined;
    token?: string | undefined;
  }
  
  export class SubAccountResponse implements ISubAccountResponse {
    userID?: number;
    userTitle?: string | undefined;
    useName?: string | undefined;
    levelID?: number;
    levelTitle?: string | undefined;
    accountStatusID?: number;
    accountStatus?: string | undefined;
    userType?: boolean;
    teleNo?: string | undefined;
    domain?: string | undefined;
    paymentThresholdLimit?: number;
    credit?: number;
    payment?: any;
    registrationDate?: Date;
    campaign?: string | undefined;
    medium?: string | undefined;
    source?: string | undefined;
  
    constructor(data?: ISubAccountResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.userID = _data["userID"];
        this.userTitle = _data["userTitle"];
        this.useName = _data["useName"];
        this.levelID = _data["levelID"];
        this.levelTitle = _data["levelTitle"];
        this.accountStatusID = _data["accountStatusID"];
        this.accountStatus = _data["accountStatus"];
        this.userType = _data["userType"];
        this.teleNo = _data["teleNo"];
        this.domain = _data["domain"];
        this.paymentThresholdLimit = _data["paymentThresholdLimit"];
        this.credit = _data["credit"];
        this.registrationDate = _data["registrationDate"] ? new Date(_data["registrationDate"].toString()) : <any>undefined;
        this.campaign = _data["campaign"];
        this.medium = _data["medium"];
        this.source = _data["source"];
      }
    }
  
    static fromJS(data: any): SubAccountResponse {
      data = typeof data === 'object' ? data : {};
      let result = new SubAccountResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["userID"] = this.userID;
      data["userTitle"] = this.userTitle;
      data["useName"] = this.useName;
      data["levelID"] = this.levelID;
      data["levelTitle"] = this.levelTitle;
      data["accountStatusID"] = this.accountStatusID;
      data["accountStatus"] = this.accountStatus;
      data["userType"] = this.userType;
      data["teleNo"] = this.teleNo;
      data["domain"] = this.domain;
      data["paymentThresholdLimit"] = this.paymentThresholdLimit;
      data["credit"] = this.credit;
      data["registrationDate"] = this.registrationDate ? this.registrationDate.toISOString() : <any>undefined;
      data["campaign"] = this.campaign;
      data["medium"] = this.medium;
      data["source"] = this.source;
      return data;
    }
  }
  
  export interface ISubAccountResponse {
    userID?: number;
    userTitle?: string | undefined;
    useName?: string | undefined;
    levelID?: number;
    levelTitle?: string | undefined;
    accountStatusID?: number;
    accountStatus?: string | undefined;
    userType?: boolean;
    teleNo?: string | undefined;
    domain?: string | undefined;
    paymentThresholdLimit?: number;
    credit?: number;
    campaign?: string | undefined;
    medium?: string | undefined;
    source?: string | undefined;
  }
  
  export interface IRegister {
    userID?: number;
    userTitle?: string | undefined;
    useName?: string | undefined;
    levelID?: number;
    levelTitle?: string | undefined;
  
  }
  
  export class UserProductWalletPositionRequest implements IUserProductWalletPositionRequest {
    token?: string | undefined;
    userName?: string | undefined;
    productID?: number;
    exchangeID?: number | undefined;
    memberCode?: string | undefined;
  
    constructor(data?: IUserProductWalletPositionRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
  
    init(_data?: any) {
        if (_data) {
            this.token = _data["token"];
            this.userName = _data["userName"];
            this.productID = _data["productID"];
            this.exchangeID = _data["exchangeID"];
            this.memberCode = _data["memberCode"];
        }
    }
  
    static fromJS(data: any): UserProductWalletPositionRequest {
        data = typeof data === 'object' ? data : {};
        let result = new UserProductWalletPositionRequest();
        result.init(data);
        return result;
    }
  
    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["token"] = this.token;
        data["userName"] = this.userName;
        data["productID"] = this.productID;
        data["exchangeID"] = this.exchangeID;
        data["memberCode"] = this.memberCode;
        return data;
    }
  }
  
  export interface IUserProductWalletPositionRequest {
    token?: string | undefined;
    userName?: string | undefined;
    productID?: number;
    exchangeID?: number | undefined;
    memberCode?: string | undefined;
  }
  
  export class UserProductWalletPositionResponse implements IUserProductWalletPositionResponse {
    balance?: number;
    exposure?: number;
    credit?: number;
    bonus?: number;
    available?: number;
    statusCode?: number;
    status?: string | undefined;
  
    constructor(data?: IUserProductWalletPositionResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
  
    init(_data?: any) {
        if (_data) {
            this.balance = _data["balance"];
            this.exposure = _data["exposure"];
            this.credit = _data["credit"];
            this.bonus = _data["bonus"];
            this.available = _data["available"];
            this.statusCode = _data["statusCode"];
            this.status = _data["status"];
        }
    }
  
    static fromJS(data: any): UserProductWalletPositionResponse {
        data = typeof data === 'object' ? data : {};
        let result = new UserProductWalletPositionResponse();
        result.init(data);
        return result;
    }
  
    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["balance"] = this.balance;
        data["exposure"] = this.exposure;
        data["credit"] = this.credit;
        data["bonus"] = this.bonus;
        data["available"] = this.available;
        data["statusCode"] = this.statusCode;
        data["status"] = this.status;
        return data;
    }
  }
  
  export interface IUserProductWalletPositionResponse {
    balance?: number;
    exposure?: number;
    credit?: number;
    bonus?: number;
    available?: number;
    statusCode?: number;
    status?: string | undefined;
  }
  
  export class ApiException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;
  
    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
      super();
  
      this.message = message;
      this.status = status;
      this.response = response;
      this.headers = headers;
      this.result = result;
    }
  
    protected isApiException = true;
  
    static isApiException(obj: any): obj is ApiException {
      return obj.isApiException === true;
    }
  }
  
  
  export class ListOfUserCardDetailsRequest implements IListOfUserCardDetailsRequest {
    token?: string | undefined;
  
    constructor(data?: IListOfUserCardDetailsRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): ListOfUserCardDetailsRequest {
      data = typeof data === 'object' ? data : {};
      let result = new ListOfUserCardDetailsRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IListOfUserCardDetailsRequest {
    token?: string | undefined;
  }
  
  export class CreateGlobalPayinOrderRequest implements ICreateGlobalPayinOrderRequest {
    payment_amount?: number;
    token?: string | undefined;
  
    constructor(data?: ICreateGlobalPayinOrderRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.payment_amount = _data["payment_amount"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): CreateGlobalPayinOrderRequest {
      data = typeof data === 'object' ? data : {};
      let result = new CreateGlobalPayinOrderRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["payment_amount"] = this.payment_amount;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface ICreateGlobalPayinOrderRequest {
    payment_amount?: number;
    token?: string | undefined;
  }
  
  export class CreateGlobalPayinResponse implements ICreateGlobalPayinResponse {
    status?: boolean;
    response_code?: string | undefined;
    message?: string | undefined;
    checkout_url?: string | undefined;
    transaction_id?: string | undefined;
  
    constructor(data?: ICreateGlobalPayinResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.status = _data["status"];
        this.response_code = _data["response_code"];
        this.message = _data["message"];
        this.checkout_url = _data["checkout_url"];
        this.transaction_id = _data["transaction_id"];
      }
    }
  
    static fromJS(data: any): CreateGlobalPayinResponse {
      data = typeof data === 'object' ? data : {};
      let result = new CreateGlobalPayinResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["status"] = this.status;
      data["response_code"] = this.response_code;
      data["message"] = this.message;
      data["checkout_url"] = this.checkout_url;
      data["transaction_id"] = this.transaction_id;
      return data;
    }
  }
  
  export interface ICreateGlobalPayinResponse {
    status?: boolean;
    response_code?: string | undefined;
    message?: string | undefined;
    checkout_url?: string | undefined;
    transaction_id?: string | undefined;
  }
  
  export class CreateGlobalPayOutOrderRequest implements ICreateGlobalPayOutOrderRequest {
    account_holder?: string | undefined;
    account_number?: string | undefined;
    ifsc_code?: string | undefined;
    amount?: number;
    token?: string | undefined;
  
    constructor(data?: ICreateGlobalPayOutOrderRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.account_holder = _data["account_holder"];
        this.account_number = _data["account_number"];
        this.ifsc_code = _data["ifsc_code"];
        this.amount = _data["amount"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): CreateGlobalPayOutOrderRequest {
      data = typeof data === 'object' ? data : {};
      let result = new CreateGlobalPayOutOrderRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["account_holder"] = this.account_holder;
      data["account_number"] = this.account_number;
      data["ifsc_code"] = this.ifsc_code;
      data["amount"] = this.amount;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface ICreateGlobalPayOutOrderRequest {
    account_holder?: string | undefined;
    account_number?: string | undefined;
    ifsc_code?: string | undefined;
    amount?: number;
    token?: string | undefined;
  }
  
  export class CreateGlobalPayoutResponse implements ICreateGlobalPayoutResponse {
    status?: boolean;
    response_code?: string | undefined;
    message?: string | undefined;
  
    constructor(data?: ICreateGlobalPayoutResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.status = _data["status"];
        this.response_code = _data["response_code"];
        this.message = _data["message"];
      }
    }
  
    static fromJS(data: any): CreateGlobalPayoutResponse {
      data = typeof data === 'object' ? data : {};
      let result = new CreateGlobalPayoutResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["status"] = this.status;
      data["response_code"] = this.response_code;
      data["message"] = this.message;
      return data;
    }
  }
  
  export interface ICreateGlobalPayoutResponse {
    status?: boolean;
    response_code?: string | undefined;
    message?: string | undefined;
  }
  
  export class ListOfUserCardDetailsResponse implements IListOfUserCardDetailsResponse {
    cardHolderName?: string | undefined;
    accountNo?: string | undefined;
    iban?: string | undefined;
    cardNo?: string | undefined;
    cVCode?: number | undefined;
    issuedDate?: Date | undefined;
    expiredDate?: Date | undefined;
    currencyCode?: number | undefined;
    active?: boolean;
    paymentMethod?: string | undefined;
  
    constructor(data?: IListOfUserCardDetailsResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    // accountNo: "232145654777888"
    // active: false
    // cardHolderName: "FahadBankAccount"
    // cardNo: null
    // currencyCode: "INR"
    // cvCode: 0
    // expiredDate: null
    // iban: "54545454545458780"
    // issuedDate: null
    // paymentMethod: "Bank"
  
    init(_data?: any) {
      if (_data) {
        this.cardHolderName = _data["cardHolderName"];
        this.accountNo = _data["accountNo"];
        this.iban = _data["iban"];
        this.cardNo = _data["cardNo"];
        this.cVCode = _data["cVCode"];
        this.issuedDate = _data["issuedDate"] ? new Date(_data["issuedDate"].toString()) : <any>undefined;
        this.expiredDate = _data["expiredDate"] ? new Date(_data["expiredDate"].toString()) : <any>undefined;
        this.currencyCode = _data["currencyCode"];
        this.active = _data["active"];
        this.paymentMethod = _data["paymentMethod"];
      }
    }
  
    static fromJS(data: any): ListOfUserCardDetailsResponse {
      data = typeof data === 'object' ? data : {};
      let result = new ListOfUserCardDetailsResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["cardHolderName"] = this.cardHolderName;
      data["accountNo"] = this.accountNo;
      data["iBAN"] = this.iban;
      data["cardNo"] = this.cardNo;
      data["cVCode"] = this.cVCode;
      data["issuedDate"] = this.issuedDate ? this.issuedDate.toISOString() : <any>undefined;
      data["expiredDate"] = this.expiredDate ? this.expiredDate.toISOString() : <any>undefined;
      data["currencyCode"] = this.currencyCode;
      data["active"] = this.active;
      data["paymentMethod"] = this.paymentMethod;
      return data;
    }
  }
  
  export interface IListOfUserCardDetailsResponse {
    cardHolderName?: string | undefined;
    accountNo?: string | undefined;
    iBAN?: string | undefined;
    cardNo?: string | undefined;
    cVCode?: number | undefined;
    issuedDate?: Date | undefined;
    expiredDate?: Date | undefined;
    currencyCode?: number | undefined;
    active?: boolean;
    paymentMethod?: string | undefined;
  }
  
  
  export class AddUpdateBankDetailsRequest implements IAddUpdateBankDetailsRequest {
    holderName?: string | undefined;
    bankName?: string | undefined;
    accountNo?: string | undefined;
    iBAN?: string | undefined;
    currencyCode?: string | undefined;
    methodTypeID?: number;
    token?: string | undefined;
  
    constructor(data?: IAddUpdateBankDetailsRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.holderName = _data["holderName"];
        this.bankName = _data["bankName"];
        this.accountNo = _data["accountNo"];
        this.iBAN = _data["iBAN"];
        this.currencyCode = _data["currencyCode"];
        this.methodTypeID = _data["methodTypeID"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): AddUpdateBankDetailsRequest {
      data = typeof data === 'object' ? data : {};
      let result = new AddUpdateBankDetailsRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["holderName"] = this.holderName;
      data["bankName"] = this.bankName;
      data["accountNo"] = this.accountNo;
      data["iBAN"] = this.iBAN;
      data["currencyCode"] = this.currencyCode;
      data["methodTypeID"] = this.methodTypeID;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IAddUpdateBankDetailsRequest {
    holderName?: string | undefined;
    bankName?: string | undefined;
    accountNo?: string | undefined;
    iBAN?: string | undefined;
    currencyCode?: string | undefined;
    methodTypeID?: number;
    token?: string | undefined;
  }
  
  
  export class VerificationPasswordRequest implements IVerificationPasswordRequest {
    password?: string | undefined;
    contactNumber?: string | undefined;
  
    constructor(data?: IVerificationPasswordRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.password = _data["password"];
        this.contactNumber = _data["contactNumber"];
      }
    }
  
    static fromJS(data: any): VerificationPasswordRequest {
      data = typeof data === 'object' ? data : {};
      let result = new VerificationPasswordRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["password"] = this.password;
      data["contactNumber"] = this.contactNumber;
      return data;
    }
  }
  
  export interface IVerificationPasswordRequest {
    password?: string | undefined;
    contactNumber?: string | undefined;
  }
  
  export class VerificationPasswordResponse implements IVerificationPasswordResponse {
    name?: string | undefined;
    levelID?: number;
    accountStatusID?: number;
    admin?: boolean;
    statusCode?: number;
    status?: string | undefined;
    token?: string | undefined;
  
    constructor(data?: IVerificationPasswordResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.name = _data["name"];
        this.levelID = _data["levelID"];
        this.accountStatusID = _data["accountStatusID"];
        this.admin = _data["admin"];
        this.statusCode = _data["statusCode"];
        this.status = _data["status"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): VerificationPasswordResponse {
      data = typeof data === 'object' ? data : {};
      let result = new VerificationPasswordResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["name"] = this.name;
      data["levelID"] = this.levelID;
      data["accountStatusID"] = this.accountStatusID;
      data["admin"] = this.admin;
      data["statusCode"] = this.statusCode;
      data["status"] = this.status;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IVerificationPasswordResponse {
    name?: string | undefined;
    levelID?: number;
    accountStatusID?: number;
    admin?: boolean;
    statusCode?: number;
    status?: string | undefined;
    token?: string | undefined;
  }
  
  export class AddUpdateCardDetailsRequest implements IAddUpdateCardDetailsRequest {
    holderName?: string | undefined;
    cardNo?: string | undefined;
    cVCode?: number;
    issuedDate?: Date;
    expiredDate?: Date;
    currencyCode?: string | undefined;
    methodTypeID?: number;
    token?: string | undefined;
  
    constructor(data?: IAddUpdateCardDetailsRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.holderName = _data["holderName"];
        this.cardNo = _data["cardNo"];
        this.cVCode = _data["cVCode"];
        this.issuedDate = _data["issuedDate"] ? new Date(_data["issuedDate"].toString()) : <any>undefined;
        this.expiredDate = _data["expiredDate"] ? new Date(_data["expiredDate"].toString()) : <any>undefined;
        this.currencyCode = _data["currencyCode"];
        this.methodTypeID = _data["methodTypeID"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): AddUpdateCardDetailsRequest {
      data = typeof data === 'object' ? data : {};
      let result = new AddUpdateCardDetailsRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["holderName"] = this.holderName;
      data["cardNo"] = this.cardNo;
      data["cVCode"] = this.cVCode;
      data["issuedDate"] = this.issuedDate ? this.issuedDate.toISOString() : <any>undefined;
      data["expiredDate"] = this.expiredDate ? this.expiredDate.toISOString() : <any>undefined;
      data["currencyCode"] = this.currencyCode;
      data["methodTypeID"] = this.methodTypeID;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IAddUpdateCardDetailsRequest {
    holderName?: string | undefined;
    cardNo?: string | undefined;
    cVCode?: number;
    issuedDate?: Date;
    expiredDate?: Date;
    currencyCode?: string | undefined;
    methodTypeID?: number;
    token?: string | undefined;
  }
  
  export class SubAccountForCampaignRequest implements ISubAccountForCampaignRequest {
    accountStatusID?: number | undefined;
    token?: string | undefined;
  
    constructor(data?: ISubAccountForCampaignRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.accountStatusID = _data["accountStatusID"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): SubAccountForCampaignRequest {
      data = typeof data === 'object' ? data : {};
      let result = new SubAccountForCampaignRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["accountStatusID"] = this.accountStatusID;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface ISubAccountForCampaignRequest {
    accountStatusID?: number | undefined;
    token?: string | undefined;
  }
  
  export class SubAccountForCampaignResponse implements ISubAccountForCampaignResponse {
    userID?: number;
    clientName?: string | undefined;
    userName?: string | undefined;
    accountStatus?: string | undefined;
    avilableBalance?: number;
    firstDeposit?: number;
    totalDeposit?: number;
    registrationDate?: Date | undefined;
    firstDepositOn?: Date | undefined;
    campaign?: string | undefined;
    medium?: string | undefined;
    source?: string | undefined;
    affiliation?: string | undefined;
  
    constructor(data?: ISubAccountForCampaignResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.userID = _data["userID"];
        this.clientName = _data["clientName"];
        this.userName = _data["UserName"];
        this.accountStatus = _data["accountStatus"];
        this.avilableBalance = _data["avilableBalance"];
        this.firstDeposit = _data["firstDeposit"];
        this.totalDeposit = _data["totalDeposit"];
        this.registrationDate = _data["registrationDate"] ? new Date(_data["registrationDate"].toString()) : <any>undefined;
        this.firstDepositOn = _data["firstDepositOn"] ? new Date(_data["firstDepositOn"].toString()) : <any>undefined;
        this.campaign = _data["campaign"];
        this.medium = _data["medium"];
        this.source = _data["source"];
        this.affiliation = _data["affiliation"];
      }
    }
  
    static fromJS(data: any): SubAccountForCampaignResponse {
      data = typeof data === 'object' ? data : {};
      let result = new SubAccountForCampaignResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["userID"] = this.userID;
      data["clientName"] = this.clientName;
      data["UserName"] = this.userName;
      data["accountStatus"] = this.accountStatus;
      data["avilableBalance"] = this.avilableBalance;
      data["firstDeposit"] = this.firstDeposit;
      data["totalDeposit"] = this.totalDeposit;
      data["registrationDate"] = this.registrationDate ? this.registrationDate.toISOString() : <any>undefined;
      data["firstDepositOn"] = this.firstDepositOn ? this.firstDepositOn.toISOString() : <any>undefined;
      data["campaign"] = this.campaign;
      data["medium"] = this.medium;
      data["source"] = this.source;
      data["affiliation"] = this.affiliation;
      return data;
    }
  }
  
  export interface ISubAccountForCampaignResponse {
    userID?: number;
    clientName?: string | undefined;
    userName?: string | undefined;
    accountStatus?: string | undefined;
    avilableBalance?: number;
    firstDeposit?: number;
    totalDeposit?: number;
    registrationDate?: Date | undefined;
    firstDepositOn?: Date | undefined;
    campaign?: string | undefined;
    medium?: string | undefined;
    source?: string | undefined;
    affiliation?: string | undefined;
  }
  
  export class LobbyURLResponse implements ILobbyURLResponse {
    websiteURL?: string | undefined;
  
    constructor(data?: ILobbyURLResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.websiteURL = _data["websiteURL"];
      }
    }
  
    static fromJS(data: any): LobbyURLResponse {
      data = typeof data === 'object' ? data : {};
      let result = new LobbyURLResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["websiteURL"] = this.websiteURL;
      return data;
    }
  }
  
  export interface ILobbyURLResponse {
    websiteURL?: string | undefined;
  }
  export class PokerCasinoRequest implements IPokerCasinoRequest {
    isMobile?: Boolean | undefined;
    token?: String | undefined;
    gameId?: String | undefined;
  
    constructor(data?: IPokerCasinoRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.isMobile = _data["isMobile"];
        this.token = _data["token"];
        this.gameId = _data["gameId"];
      }
    }
  
    static fromJS(data: any): PokerCasinoResponse {
      data = typeof data === 'object' ? data : {};
      let result = new PokerCasinoResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["isMobile"] = this.isMobile;
      data["token"] = this.token;
      data["gameId"] = this.gameId;
      return data;
    }
  }
  
  export interface IPokerCasinoRequest {
    isMobile?: Boolean | undefined;
    token?: String | undefined;
    gameId?: String | undefined;
  }
  export class PokerCasinoResponse implements IPokerCasinoResponse {
    url?: String | undefined;
  
    constructor(data?: IPokerCasinoResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.url = _data["url"];
      }
    }
  
    static fromJS(data: any): PokerCasinoResponse {
      data = typeof data === 'object' ? data : {};
      let result = new PokerCasinoResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["url"] = this.url;
      return data;
    }
  }
  
  export interface IPokerCasinoResponse {
    url?: String | undefined;
  }
  
  export class EvolutionResponse implements IEvolutionResponse {
    entry?: string | undefined;
    entryEmbedded?: string | undefined;
    errors?: string | undefined
  
    constructor(data?: IEvolutionResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.entry = _data["entry"];
        this.entryEmbedded = _data["entryEmbedded"];
        this.errors = _data["errors"];
      }
    }
  
    static fromJS(data: any): EvolutionResponse {
      data = typeof data === 'object' ? data : {};
      let result = new EvolutionResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["entry"] = this.entry;
      data["entryEmbedded"] = this.entryEmbedded;
      data["errors"] = this.errors;
      return data;
    }
  }
  
  export interface IEvolutionResponse {
    entry?: string | undefined;
    entryEmbedded?: string | undefined;
    errors?: string | undefined;
  }
  
  export class CheckTokenRequest implements ICheckTokenRequest {
    token?: string | undefined;
  
    constructor(token: any) {
      this.token = token;
    }
  
  }
  export class CheckTokenRequestExc implements ICheckTokenRequestExc {
    token?: string | undefined;
    exchangeID?: number | undefined;
  
    constructor(data?: ICheckTokenRequestExc) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.token = _data["token"];
        this.exchangeID = _data["exchangeID"];
      }
    }
  
    static fromJS(data: any): CheckTokenRequestExc {
      data = typeof data === 'object' ? data : {};
      let result = new CheckTokenRequestExc();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["token"] = this.token;
      data["exchangeID"] = this.exchangeID;
      return data;
    }
  }
  
  export class ListOfGeneralPaymentProviderForResponse implements IListOfGeneralPaymentProviderForResponse {
    iD?: number;
    providerName?: string | undefined;
  
    constructor(data?: IListOfGeneralPaymentProviderForResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
  
    init(_data?: any) {
        if (_data) {
            this.iD = _data["ID"];
            this.providerName = _data["providerName"];
        }
    }
  
    static fromJS(data: any): ListOfGeneralPaymentProviderForResponse {
        data = typeof data === 'object' ? data : {};
        let result = new ListOfGeneralPaymentProviderForResponse();
        result.init(data);
        return result;
    }
  
    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["ID"] = this.iD;
        data["providerName"] = this.providerName;
        return data;
    }
  }
  
  export interface IListOfGeneralPaymentProviderForResponse {
    iD?: number;
    providerName?: string | undefined;
  }
  
  
  
  export class CheckIndianCasinoRequest implements ICheckIndianCasinoRequest {
    token?: string | undefined;
    provider?: string | undefined;
    gameId?: string | undefined;
  
    constructor(token: any, provider: any, gameId: any) {
      this.token = token;
      this.provider = provider;
      this.gameId = gameId;
    }
  
  }
  
  export interface ICheckIndianCasinoRequest {
    token?: string | undefined;
    provider?: string | undefined;
    gameId?: string | undefined;
  }
  
  export class CheckGameRequest implements ICheckGameRequest {
    token?: string | undefined;
    provider?: string | undefined;
  
    constructor(token: any, provider: any) {
      this.token = token;
      this.provider = provider;
    }
  
  }
  
  export interface ICheckGameRequest {
    token?: string | undefined;
    provider?: string | undefined;
  }
  
  export class ListOfUserPaymentMethodRequest implements IListOfUserPaymentMethodRequest {
    token?: string | undefined;
  
    constructor(data?: IListOfUserPaymentMethodRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): ListOfUserPaymentMethodRequest {
      data = typeof data === 'object' ? data : {};
      let result = new ListOfUserPaymentMethodRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IAddUpdateAffiliationRequest {
    affiliationID?: string | undefined;
    affiliation?: string | undefined;
    isActive?: boolean;
    token?: string | undefined;
  }
  
  export class AddUpdateAffiliationRequest implements IAddUpdateAffiliationRequest {
    affiliationID?: string | undefined;
    affiliation?: string | undefined;
    isActive?: boolean;
    token?: string | undefined;
  
    constructor(data?: IAddUpdateAffiliationRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.affiliationID = _data["affiliationID"];
        this.affiliation = _data["affiliation"];
        this.isActive = _data["isActive"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): AddUpdateAffiliationRequest {
      data = typeof data === 'object' ? data : {};
      let result = new AddUpdateAffiliationRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["affiliationID"] = this.affiliationID;
      data["affiliation"] = this.affiliation;
      data["isActive"] = this.isActive;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IListOfUserPaymentMethodRequest {
    token?: string | undefined;
  }
  
  export class ListOfUserPaymentMethodResponse implements IListOfUserPaymentMethodResponse {
    cardHolderName?: string | undefined;
    accountNo?: string | undefined;
    iban?: string | undefined;
    cardNo?: string | undefined;
    cVCode?: number | undefined;
    issuedDate?: Date | undefined;
    expiredDate?: Date | undefined;
    currencyCode?: string | undefined;
    active?: boolean;
    approved?: boolean;
    paymentMethod?: string | undefined;
    onlinePaymentID?: number | undefined;
  
    constructor(data?: IListOfUserPaymentMethodResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.cardHolderName = _data["cardHolderName"];
        this.accountNo = _data["accountNo"];
        this.iban = _data["iban"];
        this.cardNo = _data["cardNo"];
        this.cVCode = _data["cVCode"];
        this.issuedDate = _data["issuedDate"] ? new Date(_data["issuedDate"].toString()) : <any>undefined;
        this.expiredDate = _data["expiredDate"] ? new Date(_data["expiredDate"].toString()) : <any>undefined;
        this.currencyCode = _data["currencyCode"];
        this.active = _data["active"];
        this.approved = _data["approved"];
        this.paymentMethod = _data["paymentMethod"];
        this.onlinePaymentID = _data["onlinePaymentID"];
      }
    }
  
    static fromJS(data: any): ListOfUserPaymentMethodResponse {
      data = typeof data === 'object' ? data : {};
      let result = new ListOfUserPaymentMethodResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["cardHolderName"] = this.cardHolderName;
      data["accountNo"] = this.accountNo;
      data["iban"] = this.iban;
      data["cardNo"] = this.cardNo;
      data["cVCode"] = this.cVCode;
      data["issuedDate"] = this.issuedDate ? this.issuedDate.toISOString() : <any>undefined;
      data["expiredDate"] = this.expiredDate ? this.expiredDate.toISOString() : <any>undefined;
      data["currencyCode"] = this.currencyCode;
      data["active"] = this.active;
      data["approved"] = this.approved;
      data["paymentMethod"] = this.paymentMethod;
      data["onlinePaymentID"] = this.onlinePaymentID;
      return data;
    }
  }
  
  export interface IListOfUserPaymentMethodResponse {
    cardHolderName?: string | undefined;
    accountNo?: string | undefined;
    iban?: string | undefined;
    cardNo?: string | undefined;
    cVCode?: number | undefined;
    issuedDate?: Date | undefined;
    expiredDate?: Date | undefined;
    currencyCode?: string | undefined;
    active?: boolean;
    approved?: boolean;
    paymentMethod?: string | undefined;
    onlinePaymentID?: number;
  }
  
  export interface IGetListOfAffiliationsRequest {
    from?: Date;
    to?: Date;
    startRecord?: number | undefined;
    viewRecords?: number | undefined;
    isActive?: boolean;
    token?: string | undefined;
  }
  
  export class GetListOfAffiliationsResponse implements IGetListOfAffiliationsResponse {
    affiliationID?: string | undefined;
    affiliation?: string | undefined;
    affiliationStart?: Date;
    isActive?: boolean;
    totalRecords?: number;
  
    constructor(data?: IGetListOfAffiliationsResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.affiliationID = _data["affiliationID"];
        this.affiliation = _data["affiliation"];
        this.affiliationStart = _data["affiliationStart"] ? new Date(_data["affiliationStart"].toString()) : <any>undefined;
        this.isActive = _data["isActive"];
        this.totalRecords = _data["totalRecords"];
      }
    }
  
    static fromJS(data: any): GetListOfAffiliationsResponse {
      data = typeof data === 'object' ? data : {};
      let result = new GetListOfAffiliationsResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["affiliationID"] = this.affiliationID;
      data["affiliation"] = this.affiliation;
      data["affiliationStart"] = this.affiliationStart ? this.affiliationStart.toISOString() : <any>undefined;
      data["isActive"] = this.isActive;
      data["totalRecords"] = this.totalRecords;
      return data;
    }
  }
  
  export interface IGetListOfAffiliationsResponse {
    affiliationID?: string | undefined;
    affiliation?: string | undefined;
    affiliationStart?: Date;
    isActive?: boolean;
    totalRecords?: number;
  }
  
  export class GetListOfAffiliatSubAccountsRequest implements IGetListOfAffiliatSubAccountsRequest {
    isActive?: boolean;
    userName?: string | undefined;
    userTitle?: string | undefined;
    startRecord?: number | undefined;
    viewRecords?: number | undefined;
    token?: string | undefined;
  
    constructor(data?: IGetListOfAffiliatSubAccountsRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.isActive = _data["isActive"];
        this.userName = _data["userName"];
        this.userTitle = _data["userTitle"];
        this.startRecord = _data["startRecord"];
        this.viewRecords = _data["viewRecords"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): GetListOfAffiliatSubAccountsRequest {
      data = typeof data === 'object' ? data : {};
      let result = new GetListOfAffiliatSubAccountsRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["isActive"] = this.isActive;
      data["userName"] = this.userName;
      data["userTitle"] = this.userTitle;
      data["startRecord"] = this.startRecord;
      data["viewRecords"] = this.viewRecords;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IGetListOfAffiliatSubAccountsRequest {
    isActive?: boolean;
    userName?: string | undefined;
    userTitle?: string | undefined;
    startRecord?: number | undefined;
    viewRecords?: number | undefined;
    token?: string | undefined;
  }
  export class GetListOfAffiliationsRequest implements IGetListOfAffiliationsRequest {
    from?: Date;
    to?: Date;
    startRecord?: number | undefined;
    viewRecords?: number | undefined;
    isActive?: boolean;
    token?: string | undefined;
  
    constructor(data?: IGetListOfAffiliationsRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.from = _data["from"] ? new Date(_data["from"].toString()) : <any>undefined;
        this.to = _data["to"] ? new Date(_data["to"].toString()) : <any>undefined;
        this.startRecord = _data["startRecord"];
        this.viewRecords = _data["viewRecords"];
        this.isActive = _data["isActive"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): GetListOfAffiliationsRequest {
      data = typeof data === 'object' ? data : {};
      let result = new GetListOfAffiliationsRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["from"] = this.from ? this.from.toISOString() : <any>undefined;
      data["to"] = this.to ? this.to.toISOString() : <any>undefined;
      data["startRecord"] = this.startRecord;
      data["viewRecords"] = this.viewRecords;
      data["isActive"] = this.isActive;
      data["token"] = this.token;
      return data;
    }
  }
  
  export class GetListOfAffiliatSubAccountsResponse implements IGetListOfAffiliatSubAccountsResponse {
    userID?: number;
    clientName?: string | undefined;
    userName?: string | undefined;
    accountStatus?: string | undefined;
    affiliation?: string | undefined;
    avilableBalance?: number;
    firstDeposit?: number;
    totalDeposit?: number;
    registrationDate?: Date | undefined;
    firstDepositOn?: Date | undefined;
    totalRecords?: number;
  
    constructor(data?: IGetListOfAffiliatSubAccountsResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.userID = _data["userID"];
        this.clientName = _data["clientName"];
        this.userName = _data["UserName"];
        this.accountStatus = _data["accountStatus"];
        this.affiliation = _data["affiliation"];
        this.avilableBalance = _data["avilableBalance"];
        this.firstDeposit = _data["firstDeposit"];
        this.totalDeposit = _data["totalDeposit"];
        this.registrationDate = _data["registrationDate"] ? new Date(_data["registrationDate"].toString()) : <any>undefined;
        this.firstDepositOn = _data["firstDepositOn"] ? new Date(_data["firstDepositOn"].toString()) : <any>undefined;
        this.totalRecords = _data["totalRecords"];
      }
    }
  
    static fromJS(data: any): GetListOfAffiliatSubAccountsResponse {
      data = typeof data === 'object' ? data : {};
      let result = new GetListOfAffiliatSubAccountsResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["userID"] = this.userID;
      data["clientName"] = this.clientName;
      data["UserName"] = this.userName;
      data["accountStatus"] = this.accountStatus;
      data["affiliation"] = this.affiliation;
      data["avilableBalance"] = this.avilableBalance;
      data["firstDeposit"] = this.firstDeposit;
      data["totalDeposit"] = this.totalDeposit;
      data["registrationDate"] = this.registrationDate ? this.registrationDate.toISOString() : <any>undefined;
      data["firstDepositOn"] = this.firstDepositOn ? this.firstDepositOn.toISOString() : <any>undefined;
      data["totalRecords"] = this.totalRecords;
      return data;
    }
  }
  
  export interface IGetListOfAffiliatSubAccountsResponse {
    userID?: number;
    clientName?: string | undefined;
    userName?: string | undefined;
    accountStatus?: string | undefined;
    affiliation?: string | undefined;
    avilableBalance?: number;
    firstDeposit?: number;
    totalDeposit?: number;
    registrationDate?: Date | undefined;
    firstDepositOn?: Date | undefined;
    totalRecords?: number;
  }
  
  export interface ICheckTokenRequest {
    token?: string | undefined;
  }
  
  export interface ICheckTokenRequestExc {
    token?: string | undefined;
    exchangeID?: number | undefined;
  }
  
  export class GetSnapRequest implements IGetSnapRequest {
    orderID?: number;
    token?: string | undefined;
  
    constructor(data?: IGetSnapRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.orderID = _data["orderID"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): GetSnapRequest {
      data = typeof data === 'object' ? data : {};
      let result = new GetSnapRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["orderID"] = this.orderID;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IGetSnapRequest {
    orderID?: number;
    token?: string | undefined;
  }
  
  export class GetSnapResponse implements IGetSnapResponse {
    contentType?: string | undefined;
    imageData?: string | undefined;
  
    constructor(data?: IGetSnapResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.contentType = _data["contentType"];
        this.imageData = _data["imageData"];
      }
    }
  
    static fromJS(data: any): GetSnapResponse {
      data = typeof data === 'object' ? data : {};
      let result = new GetSnapResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["contentType"] = this.contentType;
      data["imageData"] = this.imageData;
      return data;
    }
  }
  
  export interface IGetSnapResponse {
    contentType?: string | undefined;
    imageData?: string | undefined;
  }
  
  export class ListOfUserMarketBetsRequest implements IListOfUserMarketBetsRequest {
  
    marketID?: string | undefined;
    token?: string | undefined;
  
    constructor(marketId: string, token: string) {
      // if (data) {
      //   for (var property in data) {
      //     if (data.hasOwnProperty(property))
      //       (<any>this)[property] = (<any>data)[property];
      //   }
      // }
  
      this.token = token;
      this.marketID = marketId;
    }
  
    // init(_data?: any) {
    //   if (_data) {
    //
    //     this.marketID = _data["marketID"];
    //     this.token = _data["token"];
    //   }
    // }
    //
    // static fromJS(data: any): ListOfUserMarketBetsRequest {
    //   data = typeof data === 'object' ? data : {};
    //   let result = new ListOfUserMarketBetsRequest();
    //   result.init(data);
    //   return result;
    // }
    //
    // toJSON(data?: any) {
    //   data = typeof data === 'object' ? data : {};
    //   data["from"] = this.from;
    //   data["to"] = this.to;
    //   data["marketID"] = this.marketID;
    //   data["token"] = this.token;
    //   return data;
    // }
  }
  
  export interface IListOfUserMarketBetsRequest {
  
    marketID?: string | undefined;
    token?: string | undefined;
  }
  
  export class ListOfUserMarketBetsResponse implements IListOfUserMarketBetsResponse {
    marketName?: string | undefined;
    selectionName?: string | undefined;
    rate?: number;
    stake?: number;
    betType?: string | undefined;
    refID?: string | undefined;
  
    constructor(data?: IListOfUserMarketBetsResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.marketName = _data["marketName"];
        this.selectionName = _data["selectionName"];
        this.rate = _data["rate"];
        this.stake = _data["stake"];
        this.betType = _data["betType"];
        this.refID = _data["refID"];
      }
    }
  
    static fromJS(data: any): ListOfUserMarketBetsResponse {
      data = typeof data === 'object' ? data : {};
      let result = new ListOfUserMarketBetsResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["marketName"] = this.marketName;
      data["selectionName"] = this.selectionName;
      data["rate"] = this.rate;
      data["stake"] = this.stake;
      data["betType"] = this.betType;
      data["refID"] = this.refID;
      return data;
    }
  }
  export class CheckSubAccountLiabilityRequest implements ICheckSubAccountLiabilityRequest {
    userID?: number | undefined;
    token?: string | undefined;
  
    constructor(data?: ICheckSubAccountLiabilityRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
  
    init(_data?: any) {
        if (_data) {
            this.userID = _data["userID"];
            this.token = _data["token"];
        }
    }
  
    static fromJS(data: any): CheckSubAccountLiabilityRequest {
        data = typeof data === 'object' ? data : {};
        let result = new CheckSubAccountLiabilityRequest();
        result.init(data);
        return result;
    }
  
    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["userID"] = this.userID;
        data["token"] = this.token;
        return data;
    }
  }
  
  export interface ICheckSubAccountLiabilityRequest {
    userID?: number | undefined;
    token?: string | undefined;
  }
  
  export class CheckSubAccountLiabilityResponse implements ICheckSubAccountLiabilityResponse {
    providers?: string | undefined;
    marketNameOrRoundID?: string | undefined;
    betId?: number;
    liability?: number;
  
    constructor(data?: ICheckSubAccountLiabilityResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.providers = _data["providers"];
        this.marketNameOrRoundID = _data["marketNameOrRoundID"];
        this.betId = _data["betId"];
        this.liability = _data["liability"];
      }
    }
  
    static fromJS(data: any): CheckSubAccountLiabilityResponse {
      data = typeof data === 'object' ? data : {};
      let result = new CheckSubAccountLiabilityResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["providers"] = this.providers;
      data["marketNameOrRoundID"] = this.marketNameOrRoundID;
      data["betId"] = this.betId;
      data["liability"] = this.liability;
      return data;
    }
  }
  
  export interface ICheckSubAccountLiabilityResponse {
    providers?: string | undefined;
    marketNameOrRoundID?: string | undefined;
    betId?: number;
    liability?: number;
  }
  
  export interface IListOfUserMarketBetsResponse {
    marketName?: string | undefined;
    selectionName?: string | undefined;
    rate?: number;
    stake?: number;
    betType?: string | undefined;
    refID?: string | undefined;
  }
  export class AddUpdateUserCustomerServiceNumbersRequest implements IAddUpdateUserCustomerServiceNumbersRequest {
    userID?: number;
    customerServiceNo?: string | undefined;
    customerServiceNoType?: string | undefined;
    customerServiceNoSVGIcon?: string | undefined;
    active?: boolean;
    token?: string | undefined;
  
    constructor(data?: IAddUpdateUserCustomerServiceNumbersRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.userID = _data["userID"];
        this.customerServiceNo = _data["customerServiceNo"];
        this.customerServiceNoType = _data["customerServiceNoType"];
        this.customerServiceNoSVGIcon = _data["customerServiceNoSVGIcon"];
        this.active = _data["active"];
        this.token = _data["Token"];
      }
    }
  
    static fromJS(data: any): AddUpdateUserCustomerServiceNumbersRequest {
      data = typeof data === 'object' ? data : {};
      let result = new AddUpdateUserCustomerServiceNumbersRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["userID"] = this.userID;
      data["customerServiceNo"] = this.customerServiceNo;
      data["customerServiceNoType"] = this.customerServiceNoType;
      data["customerServiceNoSVGIcon"] = this.customerServiceNoSVGIcon;
      data["active"] = this.active;
      data["Token"] = this.token;
      return data;
    }
  }
  
  export class ListOfServicesRequest implements IListOfServicesRequest {
    active?: boolean | undefined;
    token?: string | undefined;
  
    constructor(data?: IListOfServicesRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.active = _data["active"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): ListOfServicesRequest {
      data = typeof data === 'object' ? data : {};
      let result = new ListOfServicesRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["active"] = this.active;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IListOfServicesRequest {
    active?: boolean | undefined;
    token?: string | undefined;
  }
  
  export class ListOfServicesResponse implements IListOfServicesResponse {
    csNo?: string | undefined;
    csNoType?: string | undefined;
    icon?: string | undefined;
    active?: boolean;
  
    constructor(data?: IListOfServicesResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.csNo = _data["csNo"];
        this.csNoType = _data["csNoType"];
        this.icon = _data["icon"];
        this.active = _data["active"];
      }
    }
  
    static fromJS(data: any): ListOfServicesResponse {
      data = typeof data === 'object' ? data : {};
      let result = new ListOfServicesResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["csNo"] = this.csNo;
      data["csNoType"] = this.csNoType;
      data["icon"] = this.icon;
      data["active"] = this.active;
      return data;
    }
  }
  
  export interface IListOfServicesResponse {
    csNo?: string | undefined;
    csNoType?: string | undefined;
    icon?: string | undefined;
    active?: boolean;
  }
  export interface IAddUpdateUserCustomerServiceNumbersRequest {
    userID?: number;
    customerServiceNo?: string | undefined;
    customerServiceNoType?: string | undefined;
    customerServiceNoSVGIcon?: string | undefined;
    active?: boolean;
    token?: string | undefined;
  }
  export class ListOfServiceContactNumbersResponse implements IListOfServiceContactNumbersResponse {
    csNo?: string | undefined; 
    csNoType?: string | undefined;
    icon?: string | undefined;
    customerQRCode?: string | undefined;
  
    constructor(data?: IListOfServiceContactNumbersResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
  
    init(_data?: any) {
        if (_data) {
            this.csNo = _data["csNo"];
            this.csNoType = _data["csNoType"];
            this.icon = _data["icon"];
            this.customerQRCode = _data["customerQRCode"];
        }
    }
  
    static fromJS(data: any): ListOfServiceContactNumbersResponse {
        data = typeof data === 'object' ? data : {};
        let result = new ListOfServiceContactNumbersResponse();
        result.init(data);
        return result;
    }
  
    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["csNo"] = this.csNo;
        data["csNoType"] = this.csNoType;
        data["icon"] = this.icon;
        data["customerQRCode"] = this.customerQRCode;
        return data;
    }
  }
  
  export interface IListOfServiceContactNumbersResponse {
    csNo?: string | undefined;
    csNoType?: string | undefined;
    icon?: string | undefined;
    customerQRCode?: string | undefined;
  }
  export class AddUpdateCustomerServiceNumbersRequest implements IAddUpdateCustomerServiceNumbersRequest {
    customerServiceNo?: string | undefined;
    customerServiceNoType?: string | undefined;
    customerServiceNoSVGIcon?: string | undefined;
    active?: boolean;
    token?: string | undefined;
  
    constructor(data?: IAddUpdateCustomerServiceNumbersRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.customerServiceNo = _data["customerServiceNo"];
        this.customerServiceNoType = _data["customerServiceNoType"];
        this.customerServiceNoSVGIcon = _data["customerServiceNoSVGIcon"];
        this.active = _data["active"];
        this.token = _data["Token"];
      }
    }
  
    static fromJS(data: any): AddUpdateCustomerServiceNumbersRequest {
      data = typeof data === 'object' ? data : {};
      let result = new AddUpdateCustomerServiceNumbersRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["customerServiceNo"] = this.customerServiceNo;
      data["customerServiceNoType"] = this.customerServiceNoType;
      data["customerServiceNoSVGIcon"] = this.customerServiceNoSVGIcon;
      data["active"] = this.active;
      data["Token"] = this.token;
      return data;
    }
  }
  
  export interface IAddUpdateCustomerServiceNumbersRequest {
    customerServiceNo?: string | undefined;
    customerServiceNoType?: string | undefined;
    customerServiceNoSVGIcon?: string | undefined;
    active?: boolean;
    token?: string | undefined;
  }
  export class UpdateUserStatusRequest implements IUpdateUserStatusRequest {
    statusID?: number;
    userID?: number;
    token?: string | undefined;
  
    constructor(data?: IUpdateUserStatusRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.statusID = _data["statusID"];
        this.userID = _data["userID"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): UpdateUserStatusRequest {
      data = typeof data === 'object' ? data : {};
      let result = new UpdateUserStatusRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["statusID"] = this.statusID;
      data["userID"] = this.userID;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IUpdateUserStatusRequest {
    statusID?: number;
    userID?: number;
    token?: string | undefined;
  }
  
  
  export class RegistrationUserRequest implements IRegistrationUserRequest {
    name?: string | undefined;
    userPassword?: string | undefined;
    contactNumber?: string | undefined;
    campaign?: string | undefined;
    medium?: string | undefined;
    source?: string | undefined;
    affiliation?: string | undefined;
    browserID?: string | undefined;
  
    constructor(data?: IRegistrationUserRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
  
    init(_data?: any) {
        if (_data) {
            this.name = _data["name"];
            this.userPassword = _data["userPassword"];
            this.contactNumber = _data["contactNumber"];
            this.campaign = _data["campaign"];
            this.medium = _data["medium"];
            this.source = _data["source"];
            this.affiliation = _data["affiliation"];
            this.browserID = _data["browserID"];
        }
    }
  
    static fromJS(data: any): RegistrationUserRequest {
        data = typeof data === 'object' ? data : {};
        let result = new RegistrationUserRequest();
        result.init(data);
        return result;
    }
  
    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["userPassword"] = this.userPassword;
        data["contactNumber"] = this.contactNumber;
        data["campaign"] = this.campaign;
        data["medium"] = this.medium;
        data["source"] = this.source;
        data["affiliation"] = this.affiliation;
        data["browserID"] = this.browserID;
        return data;
    }
  }
  
  export interface IRegistrationUserRequest {
    name?: string | undefined;
    userPassword?: string | undefined;
    contactNumber?: string | undefined;
    campaign?: string | undefined;
    medium?: string | undefined;
    source?: string | undefined;
    affiliation?: string | undefined;
    browserID?: string | undefined;
  }
  
  
  
  export interface IUserAccountStatementDepositOrWithdrawRequest {
    userID?: number;
    deposit?: boolean;
    from?: Date;
    to?: Date;
    token?: string | undefined;
  }
  
  export class UserAccountStatementDepositOrWithdrawRequest implements IUserAccountStatementDepositOrWithdrawRequest {
    userID?: number;
    deposit?: boolean;
    from?: Date;
    to?: Date;
    token?: string | undefined;
  
    constructor(data?: IUserAccountStatementDepositOrWithdrawRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.userID = _data["userID"];
        this.deposit = _data["deposit"];
        this.from = _data["from"] ? new Date(_data["from"].toString()) : <any>undefined;
        this.to = _data["to"] ? new Date(_data["to"].toString()) : <any>undefined;
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): UserAccountStatementDepositOrWithdrawRequest {
      data = typeof data === 'object' ? data : {};
      let result = new UserAccountStatementDepositOrWithdrawRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["userID"] = this.userID;
      data["deposit"] = this.deposit;
      data["from"] = this.from ? this.from.toISOString() : <any>undefined;
      data["to"] = this.to ? this.to.toISOString() : <any>undefined;
      data["token"] = this.token;
      return data;
    }
  }
  
  export class PaymentRequestModel implements IPaymentRequestModel {
    amount?: any;
    /** User Name Unique */
    phone?: string | undefined;
    /** User Secret Password */
    email?: string | undefined;
  
    constructor(amount: any, phoenumber: string, emailadd: string) {
      this.amount = amount;
      this.phone = phoenumber;
      this.email = emailadd;
    }
  
  
  }
  
  export class ExceptionResponse implements IExceptionResponse {
    reponse!: any | null;
    message!: any | null;
    status!: any | null;
  
    constructor(data?: IExceptionResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.reponse = _data["reponse"] !== undefined ? _data["reponse"] : <any>null;
        this.message = _data["message"] !== undefined ? _data["message"] : <any>null;
        this.status = _data["status"] !== undefined ? _data["status"] : <any>null;
      }
    }
  
  
    static fromJS(data: any): ExceptionResponse {
      data = typeof data === 'object' ? data : {};
      let result = new ExceptionResponse();
      result.init(data);
      return result;
    }
  
  }
  
  export interface IExceptionResponse {
    reponse: number;
    /** Market id can be null on issurance and withdraw */
    message: string | null;
  }
  
  export interface CancelToken {
    promise: Promise<Cancel>;
    reason?: Cancel;
  
    throwIfRequested(): void;
  }
  
  export interface Cancel {
    message: string;
  }
  
  export interface IPaymentRequestModel {
    amount?: number;
    /** User Name Unique */
    phone?: string | undefined;
    /** User Secret Password */
    email?: string | undefined;
  }
  
  export class ProductUserAccountStatementDepositOrWithdrawRequest implements IProductUserAccountStatementDepositOrWithdrawRequest {
    productUserName?: string | undefined;
    deposit?: boolean;
    from?: Date;
    to?: Date;
    token?: string | undefined;
  
    constructor(data?: IProductUserAccountStatementDepositOrWithdrawRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.productUserName = _data["productUserName"];
        this.deposit = _data["deposit"];
        this.from = _data["from"] ? new Date(_data["from"].toString()) : <any>undefined;
        this.to = _data["to"] ? new Date(_data["to"].toString()) : <any>undefined;
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): ProductUserAccountStatementDepositOrWithdrawRequest {
      data = typeof data === 'object' ? data : {};
      let result = new ProductUserAccountStatementDepositOrWithdrawRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["productUserName"] = this.productUserName;
      data["deposit"] = this.deposit;
      data["from"] = this.from ? this.from.toISOString() : <any>undefined;
      data["to"] = this.to ? this.to.toISOString() : <any>undefined;
      data["token"] = this.token;
      return data;
    }
  }
  
  export class CreatePaymentResp implements ICreatePaymentResp {
    [x: string]: any;
  
    orderAmount?: number;
    returnURL?: string | undefined;
    customerName?: string | undefined;
    orderId?: string | undefined;
    orderCurrency?: string | undefined;
    salt?: string | undefined;
    tXNTYPE?: string | undefined;
    customerId?: string | undefined;
    customerPhonenumber?: string | undefined;
    email?: string | undefined;
    pAY_ID?: string | undefined;
    signature?: string | undefined;
    hash?: string | undefined;
    status?: boolean;
    message?: string | undefined;
    postURL?: string | undefined;
  
    constructor(data?: ICreatePaymentResp) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.orderAmount = _data["orderAmount"];
        this.returnURL = _data["returnURL"];
        this.customerName = _data["customerName"];
        this.orderId = _data["orderId"];
        this.orderCurrency = _data["orderCurrency"];
        this.salt = _data["Salt"];
        this.tXNTYPE = _data["TXNTYPE"];
        this.customerId = _data["customerId"];
        this.customerPhonenumber = _data["customerPhonenumber"];
        this.email = _data["email"];
        this.pAY_ID = _data["PAY_ID"];
        this.signature = _data["signature"];
        this.hash = _data["Hash"];
        this.status = _data["status"];
        this.message = _data["message"];
        this.postURL = _data["postURL"];
      }
    }
  
    static fromJS(data: any): CreatePaymentResp {
      data = typeof data === 'object' ? data : {};
      let result = new CreatePaymentResp();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["orderAmount"] = this.orderAmount;
      data["returnURL"] = this.returnURL;
      data["customerName"] = this.customerName;
      data["orderId"] = this.orderId;
      data["orderCurrency"] = this.orderCurrency;
      data["Salt"] = this.salt;
      data["TXNTYPE"] = this.tXNTYPE;
      data["customerId"] = this.customerId;
      data["customerPhonenumber"] = this.customerPhonenumber;
      data["email"] = this.email;
      data["PAY_ID"] = this.pAY_ID;
      data["signature"] = this.signature;
      data["Hash"] = this.hash;
      data["postURL"] = this.postURL;
      data["status"] = this.status;
      data["message"] = this.message;
      return data;
    }
  }
  
  export class CreateOnlinePaymentOrderRequest implements ICreateOnlinePaymentOrderRequest {
    email?: string | undefined;
    phoneNumber?: string | undefined;
    amount?: number;
    token?: string | undefined;
  
    constructor(data?: ICreateOnlinePaymentOrderRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.email = _data["email"];
        this.phoneNumber = _data["phoneNumber"];
        this.amount = _data["amount"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): CreateOnlinePaymentOrderRequest {
      data = typeof data === 'object' ? data : {};
      let result = new CreateOnlinePaymentOrderRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["email"] = this.email;
      data["phoneNumber"] = this.phoneNumber;
      data["amount"] = this.amount;
      data["token"] = this.token;
      return data;
    }
  }
  
  export class GetOnlinePaymentOrderResponse implements IGetOnlinePaymentOrderResponse {
    orderAmount?: number | undefined;
    returnURL?: string | undefined;
    pAY_ID?: string | undefined;
    orderId?: string | undefined;
    orderCurrency?: string | undefined;
    orderNote?: string | undefined;
    signature?: string | undefined;
    hash?: string | undefined;
    customerName?: string | undefined;
    customerPhonenumber?: string | undefined;
    email?: string | undefined;
    tXNTYPE?: string | undefined;
    statusCode?: number | undefined;
    status?: boolean | undefined;
    message?: string | undefined;
    key_?: string | undefined;
  
    constructor(data?: IGetOnlinePaymentOrderResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.orderAmount = _data["orderAmount"];
        this.returnURL = _data["returnURL"];
        this.pAY_ID = _data["pAY_ID"];
        this.orderId = _data["orderId"];
        this.orderCurrency = _data["orderCurrency"];
        this.orderNote = _data["orderNote"];
        this.signature = _data["signature"];
        this.hash = _data["hash"];
        this.customerName = _data["customerName"];
        this.customerPhonenumber = _data["customerPhonenumber"];
        this.email = _data["email"];
        this.tXNTYPE = _data["tXNTYPE"];
        this.statusCode = _data["statusCode"];
        this.status = _data["status"];
        this.message = _data["message"];
        this.key_ = _data["key "];
      }
    }
  
    static fromJS(data: any): GetOnlinePaymentOrderResponse {
      data = typeof data === 'object' ? data : {};
      let result = new GetOnlinePaymentOrderResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["orderAmount"] = this.orderAmount;
      data["returnURL"] = this.returnURL;
      data["pAY_ID"] = this.pAY_ID;
      data["orderId"] = this.orderId;
      data["orderCurrency"] = this.orderCurrency;
      data["orderNote"] = this.orderNote;
      data["signature"] = this.signature;
      data["hash"] = this.hash;
      data["customerName"] = this.customerName;
      data["customerPhonenumber"] = this.customerPhonenumber;
      data["email"] = this.email;
      data["tXNTYPE"] = this.tXNTYPE;
      data["statusCode"] = this.statusCode;
      data["status"] = this.status;
      data["message"] = this.message;
      data["key "] = this.key_;
      return data;
    }
  }
  
  export interface IGetOnlinePaymentOrderResponse {
    orderAmount?: number | undefined;
    returnURL?: string | undefined;
    pAY_ID?: string | undefined;
    orderId?: string | undefined;
    orderCurrency?: string | undefined;
    orderNote?: string | undefined;
    signature?: string | undefined;
    hash?: string | undefined;
    customerName?: string | undefined;
    customerPhonenumber?: string | undefined;
    email?: string | undefined;
    tXNTYPE?: string | undefined;
    statusCode?: number | undefined;
    status?: boolean | undefined;
    message?: string | undefined;
    key_?: string | undefined;
  }
  
  export interface ICreateOnlinePaymentOrderRequest {
    email?: string | undefined;
    phoneNumber?: string | undefined;
    amount?: number;
    token?: string | undefined;
  }
  
  export class GetOrderYesBankResponse implements IGetOrderYesBankResponse {
    orderAmount?: number | undefined;
    returnURL?: string | undefined;
    pAY_ID?: string | undefined;
    orderId?: string | undefined;
    orderCurrency?: string | undefined;
    orderNote?: string | undefined;
    signature?: string | undefined;
    hash?: string | undefined;
    customerName?: string | undefined;
    customerPhonenumber?: string | undefined;
    email?: string | undefined;
    tXNTYPE?: string | undefined;
    statusCode?: number | undefined;
    status?: boolean | undefined;
    message?: string | undefined;
    key_?: string | undefined;
  
    constructor(data?: IGetOrderYesBankResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.orderAmount = _data["orderAmount"];
        this.returnURL = _data["returnURL"];
        this.pAY_ID = _data["pAY_ID"];
        this.orderId = _data["orderId"];
        this.orderCurrency = _data["orderCurrency"];
        this.orderNote = _data["orderNote"];
        this.signature = _data["signature"];
        this.hash = _data["hash"];
        this.customerName = _data["customerName"];
        this.customerPhonenumber = _data["customerPhonenumber"];
        this.email = _data["email"];
        this.tXNTYPE = _data["tXNTYPE"];
        this.statusCode = _data["statusCode"];
        this.status = _data["status"];
        this.message = _data["message"];
        this.key_ = _data["key "];
      }
    }
  
    static fromJS(data: any): GetOrderYesBankResponse {
      data = typeof data === 'object' ? data : {};
      let result = new GetOrderYesBankResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["orderAmount"] = this.orderAmount;
      data["returnURL"] = this.returnURL;
      data["pAY_ID"] = this.pAY_ID;
      data["orderId"] = this.orderId;
      data["orderCurrency"] = this.orderCurrency;
      data["orderNote"] = this.orderNote;
      data["signature"] = this.signature;
      data["hash"] = this.hash;
      data["customerName"] = this.customerName;
      data["customerPhonenumber"] = this.customerPhonenumber;
      data["email"] = this.email;
      data["tXNTYPE"] = this.tXNTYPE;
      data["statusCode"] = this.statusCode;
      data["status"] = this.status;
      data["message"] = this.message;
      data["key "] = this.key_;
      return data;
    }
  }
  
  export interface IGetOrderYesBankResponse {
    orderAmount?: number | undefined;
    returnURL?: string | undefined;
    pAY_ID?: string | undefined;
    orderId?: string | undefined;
    orderCurrency?: string | undefined;
    orderNote?: string | undefined;
    signature?: string | undefined;
    hash?: string | undefined;
    customerName?: string | undefined;
    customerPhonenumber?: string | undefined;
    email?: string | undefined;
    tXNTYPE?: string | undefined;
    statusCode?: number | undefined;
    status?: boolean | undefined;
    message?: string | undefined;
    key_?: string | undefined;
  }
  
  export class CreateYesBankOrderRequest implements ICreateYesBankOrderRequest {
    amount?: number | undefined;
    token?: string | undefined;
  
    constructor(data?: ICreateYesBankOrderRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.amount = _data["amount"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): CreateYesBankOrderRequest {
      data = typeof data === 'object' ? data : {};
      let result = new CreateYesBankOrderRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["amount"] = this.amount;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface ICreateYesBankOrderRequest {
    amount?: number | undefined;
    token?: string | undefined;
  }
  
  export interface ICreatePaymentResp {
    orderAmount?: number;
    returnURL?: string | undefined;
    customerName?: string | undefined;
    orderId?: string | undefined;
    orderCurrency?: string | undefined;
    salt?: string | undefined;
    tXNTYPE?: string | undefined;
    customerId?: string | undefined;
    customerPhonenumber?: string | undefined;
    email?: string | undefined;
    pAY_ID?: string | undefined;
    signature?: string | undefined;
    hash?: string | undefined;
    status?: boolean;
    message?: string | undefined;
    postURL?: string | undefined;
  }
  
  export class UserAccountStatementRequest implements IUserAccountStatementRequest {
    userID?: number;
    from?: Date;
    to?: Date;
    nature?: string | undefined;
    token?: string | undefined;
  
    constructor(data?: IUserAccountStatementRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.userID = _data["userID"];
        this.from = _data["from"] ? new Date(_data["from"].toString()) : <any>undefined;
        this.to = _data["to"] ? new Date(_data["to"].toString()) : <any>undefined;
        this.nature = _data["nature"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): UserAccountStatementRequest {
      data = typeof data === 'object' ? data : {};
      let result = new UserAccountStatementRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["userID"] = this.userID;
      data["from"] = this.from ? this.from.toISOString() : <any>undefined;
      data["to"] = this.to ? this.to.toISOString() : <any>undefined;
      data["nature"] = this.nature;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IUserAccountStatementRequest {
    userID?: number;
    from?: Date;
    to?: Date;
    nature?: string | undefined;
    token?: string | undefined;
  }
  
  export interface IProductUserAccountStatementDepositOrWithdrawRequest {
    productUserName?: string | undefined;
    deposit?: boolean;
    from?: Date;
    to?: Date;
    token?: string | undefined;
  }
  
  export class BetsResponse implements IBetsResponse {
    betID?: string | undefined;
    eventType?: string | undefined;
    marketName?: string | undefined;
    selection?: string | undefined;
    betType?: string | undefined;
    price?: number;
    stake?: number;
    pL?: number;
  
    constructor(data?: IBetsResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.betID = _data["betID"];
        this.eventType = _data["eventType"];
        this.marketName = _data["marketName"];
        this.selection = _data["selection"];
        this.betType = _data["betType"];
        this.price = _data["price"];
        this.stake = _data["stake"];
        this.pL = _data["pL"];
      }
    }
  
    static fromJS(data: any): BetsResponse {
      data = typeof data === 'object' ? data : {};
      let result = new BetsResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["betID"] = this.betID;
      data["eventType"] = this.eventType;
      data["marketName"] = this.marketName;
      data["selection"] = this.selection;
      data["betType"] = this.betType;
      data["price"] = this.price;
      data["stake"] = this.stake;
      data["pL"] = this.pL;
      return data;
    }
  }
  
  export interface IBetsResponse {
    betID?: string | undefined;
    eventType?: string | undefined;
    marketName?: string | undefined;
    selection?: string | undefined;
    betType?: string | undefined;
    price?: number;
    stake?: number;
    pL?: number;
  }
  export class UpdateBankOrOtherStatusRequest implements IUpdateBankOrOtherStatusRequest {
    accountNo?: string | undefined;
    currencyCode?: string | undefined;
    methodTypeID?: number;
    active?: boolean;
    token?: string | undefined;
  
    constructor(data?: IUpdateBankOrOtherStatusRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
  
    init(_data?: any) {
        if (_data) {
            this.accountNo = _data["accountNo"];
            this.currencyCode = _data["currencyCode"];
            this.methodTypeID = _data["methodTypeID"];
            this.active = _data["active"];
            this.token = _data["token"];
        }
    }
  
    static fromJS(data: any): UpdateBankOrOtherStatusRequest {
        data = typeof data === 'object' ? data : {};
        let result = new UpdateBankOrOtherStatusRequest();
        result.init(data);
        return result;
    }
  
    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["accountNo"] = this.accountNo;
        data["currencyCode"] = this.currencyCode;
        data["methodTypeID"] = this.methodTypeID;
        data["active"] = this.active;
        data["token"] = this.token;
        return data;
    }
  }
  
  export interface IUpdateBankOrOtherStatusRequest {
    accountNo?: string | undefined;
    currencyCode?: string | undefined;
    methodTypeID?: number;
    active?: boolean;
    token?: string | undefined;
  }
  
  export class UserBetsRequest implements IUserBetsRequest {
    userID?: number;
    productName?: string | undefined;
    marketID?: string | undefined;
    token?: string | undefined;
  
    constructor(data?: IUserBetsRequest) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.userID = _data["userID"];
        this.productName = _data["productName"];
        this.marketID = _data["marketID"];
        this.token = _data["token"];
      }
    }
  
    static fromJS(data: any): UserBetsRequest {
      data = typeof data === 'object' ? data : {};
      let result = new UserBetsRequest();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["userID"] = this.userID;
      data["productName"] = this.productName;
      data["marketID"] = this.marketID;
      data["token"] = this.token;
      return data;
    }
  }
  
  export interface IUserBetsRequest {
    userID?: number;
    productName?: string | undefined;
    marketID?: string | undefined;
    token?: string | undefined;
  }
  