export const baseUrl =
  //"http://101.201.222.8:8081" ||
  "http://dev-aci-api.chaozhiedu.com" ||
  "http://aci-api.chaozhiedu.com";

export const weixinAuth =
  //"http://dev-aci-api.chaozhiedu.com" ||
  "http://aci-api.chaozhiedu.com";


const config = {
  test:{
    baseUrl:"http://101.201.222.8:8081"
  },
  dev:{
    baseUrl:"http://dev-aci-api.chaozhiedu.com"
  },
  prod:{
    baseUrl:"http://aci-api.chaozhiedu.com"
  }
}

export default {
  getConfig(env="prod"){
    return config[env];
  }
}