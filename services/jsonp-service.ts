import Vue from 'vue';

export default async function jsonp<type>(url: string, params?: object, timeout?: number) {
  const apiParams: any = params || {};
  apiParams.callbackName = 'JSONP_CALLBACK';

  // @ts-ignore
  const response: type = await Vue.jsonp(url, apiParams, timeout);

  return response;
}
