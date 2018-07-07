import config from "./config.js";
import { Toast } from "mint-ui";
// import axios from 'axios';
// var $axios = axios.create({
//   baseURL: 'baseUrl',
//   timeout: 30000,
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded"
//   }
// });

// $axios.post(url, querystring.stringify({
//   ...data,
//   token
// }));

const { baseUrl } = config.getConfig("prod");

//import MD5 from 'md5.js';
import querystring from "querystring";

import storage from "./storage";
export default {
  baseUrl,
  // getToken(url, data) {
  //   return this.ajax({
  //     url,
  //     data
  //   });
  // },
  post(url, data, token = "") {
    let headers = { "Content-Type": "application/x-www-form-urlencoded" };
    if (!token) {
      token = storage.get("userToken").token;
    }

    data = { ...data, token };
    for (let key in data) {
      if (data[key] === "") {
        delete data[key];
      }
    }

    let params = querystring.stringify(data);

    let base = url.indexOf("http") >= 0 ? "" : baseUrl;
    let ret = fetch(`${base}${url}`, {
      method: "POST",
      headers,
      body: params
    }).then(function (requst) {
      return requst.json();
    });
    ret
      .then(({ code, msg }) => {
        if (code >= 600 && code < 700) {
          storage.remove("userToken");
          window.location.href = `./#/login`;
        }
        else if (code != 200) {
          Toast(msg)
        }
      })
      .catch(res => { });
    return ret;
  },
  get(url, data, token = "") {
    //let headers = {};
    if (!token) {
      token = storage.get("userToken").token;
    }
    data = { ...data, token };
    for (let key in data) {
      if (data[key] === "") {
        delete data[key];
      }
    }

    let params = querystring.stringify(data);

    let base = url.indexOf("http") >= 0 ? "" : baseUrl;

    let ret = fetch(`${base}${url}?${params}`, {
      method: "GET"
      //headers
    }).then(function (requst) {
      return requst.json();
    });
    ret
      .then(({ code, msg }) => {
        if (code >= 600 && code < 700) {
          storage.remove("userToken");
          window.location.href = `./#/login`;
        }
        else if (code != 200) {
          Toast(msg)
        }
      })
      .catch(res => { });
    return ret;
  },
  upload(url, data, token) {
    let [requstUrl, formData] = [`${baseUrl}${url}`, new FormData()];

    for (const key in data) {
      const element = data[key];
      formData.append(key, element);
    }
    let reter = fetch(requstUrl, {
      method: "POST",
      headers: {
        //signature: this.getSign(this.formatParams(data)),
        token
      },
      body: formData
    })
      .then(function (requst) {
        return requst.json();
      })
      .catch(({ message }) => {
        return new Promise((res, rej) => {
          rej(requst);
        });
      });

    return reter;
  },
  ajax({ url, data, token, method = "POST" }) {
    if (!token) {
      token = storage.get("userToken").token;
    }
    let params = querystring.stringify({
      ...data,
      token
    });
    // let headers = {
    //   "Content-Type": "application/x-www-form-urlencoded"
    // };

    // if (token) {
    //   headers.token = token;
    // }

    let requst = {};
    let requstUrl =
      method == "POST" ? `${baseUrl}${url}` : `${baseUrl}${url}?${params}`;
    let res = fetch(requstUrl, {
      method,
      //headers,
      body: params
    }).then(function (requst) {
      //requst = requst;
      return requst.json();
    });

    return res;
  },
  formatParams(object) {
    let ret = [];
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const element = object[key];
        if (element !== "" && element !== undefined && element !== null) {
          ret.push(`${key}=${element}`);
        }
      }
    }
    //console.log(ret);
    return ret.join("&");
  },
  getSign(data) {
    return ""; //new MD5().update(data).digest("hex");
  }
};
