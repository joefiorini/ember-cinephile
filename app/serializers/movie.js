import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  extractMeta: function(store, type, payload) {
    var meta = {};
    if (payload.dates) {
      meta.dates = payload.dates;
    }

    if (payload.page) {
      meta.page = payload.page;
      delete payload.page;
    }

    if (payload.total_pages) {
      meta.totalPages = payload.total_pages;
      delete payload.total_pages;
    }

    if (payload.total_results) {
      meta.totalResults = payload.total_results;
      delete payload.total_results;
    }

    store.setMetadataFor(type, meta);
  },
  extractArray: function(store, type, payload) {
    return this._super(store, type, payload.results);
  }
});
