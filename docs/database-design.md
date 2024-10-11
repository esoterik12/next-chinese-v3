# Database Design for Next Chinese (NC)

## 1. Final Table List
- User: allows NC app to manage individual user learning progess
- Word: allows NC app to provide all 7,989 words to users
- UserWord: allows the NC app to track learning of each word for each user
- Sentence: allows the app to store generated sentences and provide context sentences to learners
- Session: allows the application to monitor active sessions in real time

## 2. Field Specifications
- See `/models` for schema definitions and field specifications of each collection

## 3. Table Structure
- Word-User relationship with user-specific learning data.


## 4. Relationship Diagram / ER Diagram

## 5. Key Business Rules
# User:
  - A user must have an email
  - A user must have a lastWordSeen to determine learning progress

# Word:
  - 

## 6. View Diagrams

...




