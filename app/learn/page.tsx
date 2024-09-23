// this page will automatically load the next word to learn

/*

  It will load data from three sources:
  1. word.model containing the basic word information
    -word
    -pinyin
    -translation
    -sentences

  2. sentence.model for word sentences [] of top two sentences
    -sentence in chinese
    -sentence in pinyin
    -sentence in english

  3. userwords.model (more complex)
    -userId
    -wordId
    -repetitions (display)
    -interval (display)
    -ease factor (display)
    -next review date
    -last quality (display)
    -reviewHistory [] of :    
    {
      date: { type: Date },
      quality: { type: Number }  // Stores the history of past reviews
    }

*/

// Review Session: this will have functionality to use an event listener beforeunload