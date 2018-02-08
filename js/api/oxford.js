import axios from 'axios';

const keys = {
    id: '1bedbfbf',
    key: 'eecceed7ec3064f0d8ad83fb8030f6a1',
}

const baseUrl = 'https://od-api.oxforddictionaries.com/api/v1';

//dictionary entry - retrieve definition for a given word

export const searchWord = async (word) => {
    //fetch definition with given word
    const res = await 
        axios({
            method:'get',
            url: baseUrl + '/entries/en/' + word,
            headers: {
                app_id: keys.id,
                app_key: keys.key
            },

        })
    return res.data.results
}