// import axios from 'axios';
//import MD5 from 'md5.js';
// import qs from 'querystring';
import { baseUrl } from "./config.js";

export default {
  baseUrl,
  // getToken(url, data) {
  //   return this.ajax({
  //     url,
  //     data
  //   });
  // },
  post(url, data, token) {
    // if (!token) {
    //   window.location.href = `./#/login`;
    //   return new Promise((res, rej) => {
    //     window.$message({
    //       type: "error",
    //       message: "未登录"
    //     });
    //     res({
    //       code: 900,
    //       message: "未登录"
    //     });
    //   });
    // }

    let ret = this.ajax({
      url,
      data,
      token
    });

    // ret
    //   .then(({ code, message }) => {
    //     if (code != 200) {
    //       window.$message({
    //         type: "error",
    //         message
    //       });
    //     }
    //     if (code === 904) {
    //       window.location.href = `./#/${platform}/login`;
    //     }
    //     if (code === 905) {
    //       window.location.href = `./#/${platform}/login`;
    //     }
    //   })
    //   .catch(res => {});

    return ret;
  },
  get(url, data, token) {
    let headers = {};

    if (token) {
      headers.token = token;
    }

    let params = this.formatParams(data);
    return fetch(`${baseUrl}${url}?${params}`, {
      method: "GET",
      headers
    }).then(function(requst) {
      return requst.json();
    });
  },
  upload(url, data) {
    let [requstUrl, formData] = [`${baseUrl}${url}`, new FormData()];

    for (const key in data) {
      const element = data[key];
      formData.append(key, element);
    }
    let reter = fetch(requstUrl, {
      method: "POST",
      headers: {
        //signature: this.getSign(this.formatParams(data)),
        //token
      },
      body: formData
    })
      .then(function(requst) {
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
    let params = this.formatParams(data);
    let headers = {
      "Content-Type": "application/x-www-form-urlencoded"
      //signature: this.getSign(params)
    };

    if (token) {
      headers.token = token;
    }

    let requst = {};
    let requstUrl =
      method == "POST" ? `${baseUrl}${url}` : `${baseUrl}${url}?${params}`;
    let res = fetch(requstUrl, {
      method,
      headers,
      body: params
    }).then(function(requst) {
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
