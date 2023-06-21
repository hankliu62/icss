import fetch from 'isomorphic-fetch';

type Handler = (data?: any) => void;

const events: Record<string, Handler[]> = {};

function request(url: string, options: Record<string, any>) {
  return fetch(url, options).then(
    (response: any) => {
      if (response.status === 403) {
        // message.error('暂无权限进行此操作');
        console.error('暂无权限进行此操作');
        return request.error('暂无权限进行此操作');
      }
      // 业务数据正常返回
      return response.json().then(
        (res: any) => {
          // 业务逻辑 -1 -2
          if (res.code !== '0') {
            if (res.code === '401') {
              return request.error(res);
            }
            request.trigger(`${res.code}`, res);
            return request.error(res);
          }
          return res.result;
        },
        (err: any) => {
          request.trigger('DATA-ERROR');
          return request.error(err);
        },
      );
    },
    (err: any) => {
      if (err && err.status && err.status === 500) {
        request.trigger('SERVER-ERROR');
      } else {
        request.trigger('FETCH-ERROR');
        request.error(err);
      }
    },
  );
}

request.error = (err: any) => {
  throw err;
};

request.defaults = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
};

request.pathDefaults = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
};

request.get = (url: string, options?: Record<string, any>) => {
  options = options || {};
  options.method = 'GET';
  options = Object.assign(
    {},
    options && options.ignoreServiceName
      ? request.pathDefaults
      : request.defaults,
    options,
  );
  return request(url, options);
};

request.post = (
  url: string,
  data: Record<string, any>,
  options?: Record<string, any>,
) => {
  options = options || {};
  options.body = JSON.stringify(data || {});
  options.method = 'POST';
  options = Object.assign(
    {},
    options && options.ignoreServiceName
      ? request.pathDefaults
      : request.defaults,
    options,
  );
  return request(url, options);
};

request.put = (
  url: string,
  data: Record<string, any>,
  options?: Record<string, any>,
) => {
  options = options || {};
  options.body = JSON.stringify(data || {});
  options.method = 'PUT';
  options = Object.assign(
    {},
    options && options.ignoreServiceName
      ? request.pathDefaults
      : request.defaults,
    options,
  );
  return request(url, options);
};

request.patch = (
  url: string,
  data: Record<string, any>,
  options?: Record<string, any>,
) => {
  options = options || {};
  options.body = JSON.stringify(data || {});
  options.method = 'PATCH';
  options = Object.assign(
    {},
    options && options.ignoreServiceName
      ? request.pathDefaults
      : request.defaults,
    options,
  );
  return request(url, options);
};

request.delete = (url: string, options?: Record<string, any>) => {
  options = options || {};
  options.method = 'DELETE';
  options = Object.assign(
    {},
    options && options.ignoreServiceName
      ? request.pathDefaults
      : request.defaults,
    options,
  );
  return request(url, options);
};

request.on = (name: string, handler: Handler) => {
  if (!events[name]) events[name] = [];
  events[name].push(handler);
};

request.defaultHandles = [
  (err: any) => {
    console.error('请求异常，请检查', err); // these error ignores
  },
];

request.trigger = (name: string, data?: any) => {
  const handlers = events[name] || request.defaultHandles;
  if (handlers) {
    handlers.forEach((handler) => handler(data));
  }
};

export default request;
