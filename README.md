This is a [Next.js](https://nextjs.org) project bootstrapped with
[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Contents

1. Getting Started (setting up the NextJS project with Tailwind and NextAuth and
   Framer-Motion)
2. MongoDB models, functions, and implementation
3. The Spaced-Repetition Algorith (theory and practice)

# Further Documentation

- [Database Design](./docs/database-design.md)

## 1. Getting Started

### prettier and prettier plugin for tailwind

- npm install -D prettier prettier-plugin-tailwindcss

### Taiwlind custom classes:

- A few tailwind custom classes for text in `/app/global.css`

### Theme support:

- Add darkMode: 'class' to tailwind.config.ts
- npm i next-themes
- wrap layout in <ThemeProvider>
- Add attribute='class' defaultTheme='dark' props to ThemeProvider

### NextAuth:

- Loosely follows the docs: https://next-auth.js.org/getting-started/example
- install next-auth
- set NEXTAUTH_SECRET in .env.local (generate a key)
- Set NEXTAUTH_URL (localhost for dev) in .env.local (update for deployment)
- create /lib/authOptions.ts and add GoogleProvider
- Create a file `route.ts` in the folder `/app/api/auth/[…nextauth]`
- Add <SessionProvider> to layout.tsx (in a custom client component) - provides
  client access to the session
- Create custom buttons using { signIn } from 'next-auth/react' (and signOut)
- Client-side: <UseSession> provides name, email, and image
- Server-side: <UseServerSession> provides the same, used in server actions
- MongoDB integration requires adding callbacks to `authOptions`, type extension
  of session in `next-auth.d.ts` (add
  `"typeRoots": ["./types", "./node_modules/@types"]` to `tsconfig.json`). The
  callbacks get a userId from mongo or make a new user entry with an id and
  store the id in the session for access on client-side.

## 2. Backend & MongoDB w/ Mongoose Implementation

### Connect to DB

- npm i mongodb mongoose
- set up .env.local with MONGODB_ULR
- `/lib/mongoose.ts` contains connectToDB() to be used in server actions
- `/lib/csvUpload.ts` contains a function to upload `/public/word-data.csv`
  which forms the raw data for the application

### Models

- The NC application uses 5 models/collections with MongoDB:
  - Users
  - Words
  - UserWords
  - Sentences
  - Sessions

### Actions

- These server actions form the core of the backend:
  - `/lib/actions/session/startLearnSession.ts`: Starts a session stored in the
    DB to prevent users opening multiple learning instances
  - `/lib/actions/session/endLearnSession.ts`: XXX
  - `/lib/actions/words/fetchWords.ts`: Gets all words with nextReviewDate
    before current time from UserWords collection and then adds new words
    depending on length of wordsDue from Words collection and sessionWordGoal.
  - `/lib/actions/words/updateUserWords.ts`: Takes React context state from a
    review session and updates/adds UserWords with results from the session
  - `/lib/actions/sentences/fetchSentences.ts`
  - `/lib/actions/sentences/saveSentences.ts`
  - `/lib/actions/sentences/generateSentence.ts`

## 3. Front-end:

### React Context:

- Core state management logic is handled using React Context with the useReducer
  hook. The context manages the state of flashcards, handling the user's review
  sessions, tracking finished and unfinished words, and integrating
  spaced-repetition logic through an SM2 algorithm.
- **App Context** central context to hold unfinishedWords, finishedWords,
  loading, error, and user's latestWord
- **Reducer** function for loading words, adding sentences, or updating state
  based on different word review results (includes review history)
- **ContextProvider** wraps the app to provide context

### Loading Words

When the application fetches a set of words from the database, they are loaded
into the context by dispatching the `loadWords` action. Here’s how it works:

- **Action**: The `loadWords` action is dispatched, and the fetched words are
  passed to the reducer as the `fetchedWords` property in the action payload.
- **Reducer Handling**: The reducer's `loadWords` case takes these fetched
  words, updates the `unfinishedWords` state with them, and resets the
  `finishedWords` array.
- **Managing Words with SM2 Algorithm**: When a user reviews a word, the context
  is updated based on the spaced-repetition SM2 algorithm. The reducer computes
  new values for interval, easeFactor, and repetitions using the sm2 algorithm.
  The word is either moved to the finishedWords or returned to the
  unfinishedWords for further review, depending on the result.

# Error-Handling:

For error handling on the front-end a mix of React Context and
component-specific state is used:

- React Context error handling is used to handle global errors and critical
  processes, particularly server actions and database requests
- XXXXXXXXXXXXX

## 4. The Spaced-Repetition Algorith

### Sources:

- A Stochastic Shortest Path Algorithm for Optimizing Spaced Repetition
  Scheduling
- https://dl.acm.org/doi/10.1145/3534678.3539081?cid=99660547150
- Reddit post by the author in /r/anki:
- https://www.reddit.com/r/Anki/comments/17u01ge/spaced_repetition_algorithm_a_threeday_journey/

### SM2 Algorithm Overview

The SM2 algorithm, used for spaced repetition, optimizes review intervals based
on recall performance. It works by breaking information into question-answer
pairs and scheduling reviews according to the following intervals:

- **Initial intervals**: Day 1, Day 6
- **Subsequent intervals**: Calculated as `I(n) = I(n-1) × EF`, where EF (Ease
  Factor) starts at 2.5

After each review, the EF is adjusted based on recall quality (0-5 scale). If
recall is perfect, the interval increases. If forgotten, the interval resets to
Day 1, with EF unchanged. This adaptive approach helps prioritize difficult
material for more frequent review, while easier material is reviewed less often.
