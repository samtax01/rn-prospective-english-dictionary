import * as firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDJeD-jozb7x3RNR6-L4BxC_hie8RPhtN0",
    authDomain: "prospective-english-dictionary.firebaseapp.com",
    databaseURL: "https://prospective-english-dictionary.firebaseio.com",
    projectId: "prospective-english-dictionary",
    storageBucket: "prospective-english-dictionary.appspot.com",
    messagingSenderId: "765372882150"
  };
  firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

export const addWord = async (definition) => {
    firebase.database().ref('notebook/' + definition.id ).set({
      word: definition.id,
      definition: definition,
      date: Date.now()
    });
  }

export const fetchWords = async () => {
  let words = await firebase.database().ref('notebook/').once('value');
    return words;
} 

