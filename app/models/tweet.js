import DS from 'ember-data'

Tweet = DS.Model.extend {
  text: DS.attr 'string'
  timestamp: DS.attr 'date'
  author: DS.belongsTo 'post', { async: true }
}

export default Tweet
