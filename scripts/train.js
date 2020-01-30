
var decache = require('decache')
var fs = require('fs')
var natural = require('natural')
var classifier = new natural.BayesClassifier()

decache('./training-data.json')
dataset = require('./training-data.json')

let answerKey = {}

dataset.forEach(data => {
  data.values.forEach(value => {
    classifier.addDocument(value, data.classification)
  })
  answerKey[data.classification] = data.responses
})

// Train and save the model.
const train = async () => {

  await classifier.train()
  classifier.save('src/assets/trained-data.json')
  fs.writeFileSync('src/assets/trained-answers.json', JSON.stringify(answerKey))

}

train()