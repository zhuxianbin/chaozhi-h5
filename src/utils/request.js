import axios from "axios"
import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({
  showSpinner: false
})
import {
  getToken,
  removeToken
} from "./auth"
import {
  baseUrl
} from "./config"
import {
  Toast
} from "vant"

// create an axios instance
const service = axios.create({
  baseURL: baseUrl, // api的base_url
  timeout: 10000,
  // withCredentials:true
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
});
service.caches = {};

function filterObject(object) {
  const newObject = {};
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const element = object[key];

      // if (typeof element === "string") {
      //   if (element) {
      //     newObject[key] = element;
      //   }
      //   continue;
      // }

      // if (typeof element === "number") {
      //   if (element) {
      //     newObject[key] = element;
      //   }
      //   continue;
      // }
      // if (typeof element === "object") {
      //   if (element) {
      //     newObject[key] = element.toStirng();
      //   }
      //   continue;
      // }
      if (element) {
        newObject[key] = element;
      }
    }
  }
  return newObject;
}

// request interceptor
service.interceptors.request.use(config => {
  console.log("异步请求:", config);
  NProgress.start();
  // Do something before request is sent
  // if (store.getters.token) {
  //   config.headers["X-Token"] = getToken() // 让每个请求携带token-- ["X-Token"]为自定义key 请根据实际情况自行修改
  // }

  // 去空参数

  // if (config.method === "get") {
  config.params = filterObject({
    ...config.params,
    token: getToken()
  });
  config.data = filterObject({
    ...config.data,
    token: getToken()
  });
  // }
  // var params = {};
  // if (config.params) {
  //   for (const key in config.params) {
  //     if (config.params.hasOwnProperty(key)) {
  //       const element = config.params[key];
  //       if(element)
  //       params[key]
  //     }
  //   }
  // }
  // if (config.data) {

  // }

  return config
}, error => {
  NProgress.done();
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  (response) => {
    const {
      data,
      config
    } = response;

    NProgress.done();
    console.log("请求结果:", data);


    if (data.code >= 600 && data.code < 700) {
      removeToken()
      window.location.href = `./#/login`;
    } else if (code != 200) {
      Toast(msg)
    }

    const cacheKey = "cache" + config.url.replace(config.baseURL, "").replace(/\//g, "-");
    if (config.cache) {
      service.caches[cacheKey] = {
        value: data
      };
    }

    return data;
  },
  /**
   * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
   * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
   */
  //  const res = response.data;
  //     if (res.code !== 20000) {
  //       Message({
  //         message: res.message,
  //         type: "error",
  //         duration: 5 * 1000
  //       });
  //       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
  //       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //         MessageBox.confirm("你已被登出，可以取消继续留在该页面，或者重新登录", "确定登出", {
  //           confirmButtonText: "重新登录",
  //           cancelButtonText: "取消",
  //           type: "warning"
  //         }).then(() => {
  //           store.dispatch("FedLogOut").then(() => {
  //             location.reload();// 为了重新实例化vue-router对象 避免bug
  //           });
  //         })
  //       }
  //       return Promise.reject("error");
  //     } else {
  //       return response.data;
  //     }
  error => {
    console.log("err" + error) // for debug
    loading.close();
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    })
    return Promise.reject(error)
  })

export default function (options) {
  // 如果这个请求开启了cache,
  if (!!options.cache && !options.reget) {
    // 查看cache库里有没有这个请求的结果
    const cacheKey = "cache" + options.url.replace(/\//g, "-");
    if (service.caches[cacheKey]) {
      // 如果有 --直接返回
      return new Promise((resolv) => {
        resolv(service.caches[cacheKey].value)
      });
    }
  }

  // 如果没有 -- 放行
  return service(options)
}