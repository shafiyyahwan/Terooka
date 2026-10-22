
/* Terooka journal: shared storage + helpers
   Used by journal.html and journal-edit.html
*/

var session = null;

try {
  session = JSON.parse(
    localStorage.getItem('terooka_session')
  );
} catch (e) {}

if (!session) {
  location.replace('auth.html');
}

var uid = session
  ? (session.username || session.email || 'guest')
  : 'guest';

var TKEY = 'terooka_travelogue_' + uid;

/* LOAD JOURNALS */

var books = [];

try {
  var storedBooks = JSON.parse(localStorage.getItem(TKEY));
  books = Array.isArray(storedBooks) ? storedBooks : [];
} catch (e) {
  books = [];
}

/* COVER COLOURS */

var COVERS = [
  '#5724A3,#8834B9',
  '#C12D91,#E0679E',
  '#4a1d8a,#B04BC2',
  '#D9517A,#F58AA6',
  '#8834B9,#D842A0'
];

/* STAMP LIBRARY */

var STAMP_LIB = [
  { id: 'kelantan', name: 'Kelantan' },
  { id: 'melaka', name: 'Melaka' },
  { id: 'penang', name: 'Penang' },
  { id: 'langkawi', name: 'Langkawi' },
  { id: 'kuala-lumpur', name: 'Kuala Lumpur' },
  { id: 'cameron-highlands', name: 'Cameron Highlands' },
  { id: 'sabah', name: 'Sabah' },
  { id: 'sarawak', name: 'Sarawak' }
];

/* STICKERS */

var EMO = [
  '🌺', '🍜', '✈️', '📍',
  '🌴', '⭐', '🎒', '☕',
  '🏝️', '💜', '🛺', '📸',
  '🌧️', '🍉'
];

/* NORMALISE EXISTING JOURNALS */

books.forEach(function (b) {

  if (!Array.isArray(b.pages) || !b.pages.length) {
    b.pages = [{
      caption: b.note || '',
      items: []
    }];
  }

  b.pages.forEach(function (p) {

    if (!Array.isArray(p.items)) {
      p.items = [];
    }

    // Convert old photos into editable items
    if (p.photo) {
      p.items.unshift({
        t: 'photo',
        src: p.photo,
        x: 12,
        y: 5,
        w: 76,
        r: -1,
        frame: true
      });

      delete p.photo;
    }

  });

});

/* HELPERS */

function $(selector, root) {
  return (root || document).querySelector(selector);
}

function el(tag, props) {
  var element = document.createElement(tag);
  props = props || {};

  Object.keys(props).forEach(function (key) {
    if (key === 'class') {
      element.className = props[key];
    } else if (key === 'text') {
      element.textContent = props[key];
    } else if (key.indexOf('on') === 0) {
      element.addEventListener(
        key.slice(2),
        props[key]
      );
    } else {
      element.setAttribute(key, props[key]);
    }
  });

  for (var i = 2; i < arguments.length; i++) {
    var child = arguments[i];

    if (child != null) {
      element.appendChild(
        typeof child === 'string'
          ? document.createTextNode(child)
          : child
      );
    }
  }

  return element;
}

/* COVER COLOUR
   Uses the saved colour when available.
   Falls back to the original journal colour.
*/

function cover(b) {

  if (b.coverColor) {

    // Support full CSS gradients
    if (
      b.coverColor.indexOf('linear-gradient') === 0
    ) {
      return b.coverColor;
    }

    // Support two colours separated by a comma
    if (b.coverColor.indexOf(',') !== -1) {
      return 'linear-gradient(135deg,' +
        b.coverColor + ')';
    }

    // Support a single HEX colour
    return b.coverColor;
  }

  var index =
    Math.abs(Number(b.id) || 0) % COVERS.length;

  return 'linear-gradient(135deg,' +
    COVERS[index] + ')';
}

/* UPDATE COVER COLOUR */

function updateCoverColor(bookId, selectedColor) {

  var book = books.find(function (b) {
    return String(b.id) === String(bookId);
  });

  if (!book) {
    return false;
  }

  book.coverColor = selectedColor;

  return save();
}

/* TOAST MESSAGE */

var tt;

function toast(message) {
  var x = $('#toast');

  if (!x) {
    console.log(message);
    return;
  }

  x.textContent = message;
  x.classList.add('show');

  clearTimeout(tt);

  tt = setTimeout(function () {
    x.classList.remove('show');
  }, 2300);
}

/* SAVE JOURNALS */

function save() {
  try {
    localStorage.setItem(
      TKEY,
      JSON.stringify(books)
    );

    return true;

  } catch (e) {

    toast(
      'Storage is full. Remove a photo or page and try again.'
    );

    return false;
  }
}

/* FORMAT DATE */

function fmt(iso) {
  try {
    return new Date(iso).toLocaleDateString(
      'en-MY',
      {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }
    );
  } catch (e) {
    return '';
  }
}
