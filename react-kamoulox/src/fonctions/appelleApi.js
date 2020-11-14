import axios from 'axios'

export const getQuestions = (nbQuestion) => {
    return axios
        .get(
            'https://kamoulox-api.osc-fr1.scalingo.io/api/getQuestions/'+nbQuestion, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            return res.data
        })
}