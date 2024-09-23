// this server action will be the most fundamental to the app

/*
  The key here will that it fetches a set of the most urgent words to review
  according to the next review date

  It will work in conjunction with RTK state, loading a set of x words (chosen by the user)
  User can choose: review 20, 50, 80, 100 words (or input the number themselves)

  RTK will handle the review session, returning words to the queue, adding learned words to the finished set
  It will then dispatch an update to the database with new values for the words covered in the review session

  Two key features:
    -Stop session: this will trigger an update of the words covered and ensure those not covered in the live session
    are not updated, therefore included in the coming session
    -Interrupted Session: this will trigger the same update if the session is closed or connection is lost
    using event listener beforeunload
*/