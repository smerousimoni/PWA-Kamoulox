import axios from 'axios'

export const getQuestions = (nbQuestion) => {
    return axios
        .get(
            'http://kamoulox.test/api/getQuestions/'+nbQuestion, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            return res.data
        })
}