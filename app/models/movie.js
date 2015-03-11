import DS from 'ember-data';

export default DS.Model.extend({
  imdbId: DS.attr('string'),
  backdropPath: DS.attr('string'),
  budget: DS.attr('number'),
  homepage: DS.attr('string'),
  title: DS.attr('string'),
  overview: DS.attr('string'),
  popularity: DS.attr('number'),
  status: DS.attr('string'),
  tagline: DS.attr('string')
});
