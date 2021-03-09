browser.runtime.onMessage.addListener(function () {
  console.log('Hello from the background')
})

import store from './store';
import Axios from 'axios'
import { prependRequestsWithDefaults } from '@/network/interceptors.js'
Axios.interceptors.request.use(prependRequestsWithDefaults(), error => (Promise.reject(error)))

// OnInstall handler
browser.runtime.onInstalled.addListener(() => {
  console.clear()

  // What events fire when?
  // var eventList = ['onBeforeNavigate', 'onCreatedNavigationTarget',
  //   'onCommitted', 'onCompleted', 'onDOMContentLoaded',
  //   'onErrorOccurred', 'onReferenceFragmentUpdated', 'onTabReplaced',
  //   'onHistoryStateUpdated'];
  // eventList.forEach(function (e) {
  //   browser.webNavigation[e].addListener(function (data) {
  //     if (typeof data && data) {
  //       console.log(browser.i18n.getMessage('inHandler'), e, data);
  //     } else {
  //       console.error(browser.i18n.getMessage('inHandlerError'), e);
  //     }
  //   });
  // });

  browser.webNavigation.onCompleted.addListener(function ({ parentFrameId, url }) {
    if (parentFrameId === -1) {
      store.dispatch('travel', url)
    }
  })

  browser.storage.local.clear()
})


console.log('here')
