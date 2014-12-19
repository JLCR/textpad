var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var PageConstants = require('../constants/PageConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _localStorage = window.localStorage;
var _pages = null;
var _currentPage = null;

var initStorage = function initStorage() {
  lsp = _localStorage.getItem("_pages");
  _pages = JSON.parse(lsp);
  _pages = (_pages || {});
}

initStorage();

function updateStorage() {
  _localStorage.setItem("_pages", JSON.stringify(_pages));
}

function getId() {
  return (+new Date()).toString(16)
}

function Page(id, title, text, tags) {
  this.id = id;
  this.title = title;
  this.text  = text || "";
  this.tags  = tags || [];
};

function create(title) {
  var id = getId();
  var page = new Page(id, title, "");
  _currentPage = _pages[id] = page;
  updateStorage();
}

function updateTitle(id, title) {
  var page = _pages[id];
  page.title = title;
  updateStorage();
}

function updateText(id, text) {
  var page = _pages[id];
  page.text = text;
  updateStorage();
}

function clearText(id) {
  var page = _pages[id];
  page.text = "";
  updateStorage();
}

function save(id, text) {
  var page = _pages[id];
  page.text = text;
  updateStorage();
}

function show(id) {
  var page = _pages[id]
  _currentPage = page;
}

function destroy(id) {
  delete _pages[id];
  if ( _currentPage.id === id ) {
    _currentPage = null;
  }
  updateStorage();
}

var PageStore = assign({}, EventEmitter.prototype, {

  // getters
  getAll: function() {
    return _pages;
  },

  getCurrent: function() {
    return _currentPage;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  // listeners
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case PageConstants.PAGE_CREATE:
      create(action.title);
      break;
    case PageConstants.PAGE_UPDATE_TEXT:
      updateText(action.id, action.text);
      break;
    case PageConstants.PAGE_UPDATE_TITLE:
      updateText(action.id, action.title);
      break;
    case PageConstants.PAGE_SHOW:
      show(action.id);
      break;
    case PageConstants.PAGE_DESTROY:
      destroy(action.id);
      break;
    case PageConstants.PAGE_SAVE:
      console.log(action);
      save(action.id, action.text);
      break;
    case PageConstants.PAGE_CLEAR:
      clearText(action.id);
      break;
    default:
      return true;
  }

  PageStore.emitChange();

  return true;
});

module.exports = PageStore;
