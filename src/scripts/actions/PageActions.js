

var AppDispatcher = require('../dispatcher/AppDispatcher');
var PageConstants = require('../constants/PageConstants');

var PageActions = {

  create: function(title) {
    AppDispatcher.handleViewAction({
      actionType: PageConstants.PAGE_CREATE,
      title: title
    });
  },

  show: function(id) {
    AppDispatcher.handleViewAction({
      actionType: PageConstants.PAGE_SHOW,
      id: id
    });
  },

  updateText: function(id, text) {
    AppDispatcher.handleViewAction({
      actionType: PageConstants.PAGE_UPDATE_TEXT,
      id: id,
      text: text
    });
  },

  updateTitle: function(id, title) {
    AppDispatcher.handleViewAction({
      actionType: PageConstants.PAGE_UPDATE_TITLE,
      id: id,
      title: title
    });
  },

  destroy: function(id) {
    AppDispatcher.handleViewAction({
      actionType: PageConstants.PAGE_DESTROY,
      id: id
    });
  },

  save: function(id, text) {
    AppDispatcher.handleViewAction({
      actionType: PageConstants.PAGE_SAVE,
      id: id,
      text: text
    });
  },

  clear: function(id) {
    AppDispatcher.handleViewAction({
      actionType: PageConstants.PAGE_CLEAR,
      id: id
    });
  },

};

module.exports = PageActions;
