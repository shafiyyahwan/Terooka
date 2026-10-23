
/* Terooka shared user profile storage.
   Keeps unrelated profile fields intact. */

(function (root) {
  'use strict';

  function key(uid) {
    return 'terooka_profile_' + uid;
  }

  function read(uid) {
    var value = {};

    try {
      value = JSON.parse(localStorage.getItem(key(uid))) || {};
    } catch (e) {}

    if (!value || typeof value !== 'object' || Array.isArray(value)) {
      value = {};
    }

    return Object.assign(
      {
        interests: [],
        saved: [],
        hideStart: false
      },
      value,
      {
        interests: Array.isArray(value.interests)
          ? value.interests
          : [],
        saved: Array.isArray(value.saved)
          ? value.saved
          : []
      }
    );
  }

  function save(uid, changes) {
    var next = Object.assign({}, read(uid), changes || {});

    localStorage.setItem(key(uid), JSON.stringify(next));

    return next;
  }

  root.TerookaUser = {
    read: read,
    save: save,
    key: key
  };

})(window);
