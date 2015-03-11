import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find("movie", params.id);
  },
  afterModel: function(model) {
    // Lists of movies don't include full movie data
    // so if the model came from one of those lists,
    // it won't have properties like overview or tagline.
    // This causes the model to load itself from the API,
    // thus ensuring we have all the movie's details.
    //
    if (!model.get("overview")) {
      return model.reload();
    }
  }
});
