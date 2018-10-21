import request from "@/utils/request";

/**
 * 章节列表
 * @param {*} course_id
 */
export function getNodeList({ course_id }) {
  return request({
    url: "/api/node/list",
    method: "post",
    data: { course_id }
  });
}

/**
 * 取得课程计划
 * @param {*} param
 * pid 产品ID 必传 p 分页 必传 offset 每页显示的数量 默认为10
 * */
export function getCoursePlan(param) {
  return request.post("/api/course/plan", param);
}

/**
 * 章节列表
 * @param {*} course_id
 */
export function getQuestionList({ id, type }) {
  return request({
    url: "/api/question/list",
    method: "post",
    data: { id, type }
  });
}

/**
 * 章节列表
 * @param {*} params
 */
export function submitQuestionAnswer({ id, type, answer }) {
  return request({
    url: "/api/question/submit-answer",
    method: "post",
    data: { id, type, answer }
  });
}
