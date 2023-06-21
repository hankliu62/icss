import Cookies from 'js-cookie';

import { COOKIE_KEYS } from '@/constants';

export function getUid() {
  return Cookies.get(COOKIE_KEYS.uid);
}

export function getDeviceId() {
  return Cookies.get(COOKIE_KEYS.device_id);
}
