
/**
 * nlp.js
 * 
 * Processes the natural language input.
 */

import natural from 'natural'
import sentiment from 'sentiment'

import nlpData from 'assets/trained-data.json'
import nlpAnswers from 'assets/trained-answers.json'

export class NLP {

    constructor() {
        this.classifier = natural.BayesClassifier.restore(nlpData)
        this.analyzer = new sentiment()
    }

    getAnswer(text) {

        let sentiment = this.analyzer.analyze(text)

        let classifications = this.classifier.getClassifications(text)
        let classification = classifications.reduce(
            (prev, next) => next.value > prev.value ? next : prev,
            { label: '', value: 0 })
            .label

        console.log(classification, classifications)

        if (classification !== undefined && Object.keys(nlpAnswers).includes(classification)) {

            let answers = nlpAnswers[classification]
            let sentimentKey = this.getSentimentKey(sentiment)

            if (Object.keys(answers).includes(sentimentKey)) {

                return this.getRandomAnswer(answers[sentimentKey])

            } else if (answers.default) {

                return this.getRandomAnswer(answers.default)

            }

        }

        return undefined

    }

    getSentimentKey(sentiment) {

        if (sentiment.score < 0) {

            return 'negative'

        } else if (sentiment.score > 0) {

            return 'positive'

        } else {

            return 'default'

        }

    }

    getRandomAnswer(array) {
        return array[Math.floor(Math.random() * array.length)]
    }

}