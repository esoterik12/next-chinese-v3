This is a [Next.js](https://nextjs.org) project bootstrapped with
[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Contents

1. Getting Started (setting up the NextJS project with Tailwind and NextAuth and
   Framer-Motion)
2. MongoDB models, functions, and implementation
3. The Spaced-Repetition Algorith (theory and practice)

## Further Documentation

- [Database Design](./docs/database-design.md)

## 1. Getting Started

# prettier and prettier plugin for tailwind

- npm install -D prettier prettier-plugin-tailwindcss

# Taiwlind custom classes:

- A few tailwind custom classes for text in /app/global.css

# Theme support:

- Add darkMode: 'class' to tailwind.config.ts
- npm i next-themes
- wrap layout in <ThemeProvider>
- Add attribute='class' defaultTheme='dark' props to ThemeProvider

# NextAuth:

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

## 2. MongoDB w/ Mongoose Implementation

# Connect to DB

- npm i mongodb mongoose
- set up .env.local with MONGODB_ULR
- `/lib/mongoose.ts` contains connectToDB() to be used in server actions
- `/lib/csvUpload.ts` contains a function to upload `/public/word-data.csv`

# Models

# Actions
- Two server actions form the core of the backend:
  - `/lib/actions/fetchWords.ts` which gets all words with nextReviewDate before current time from UserWords collection and then adds new words depending on length of wordsDue from Words collection
  - `/lib/action/updateUserWords.ts` which takes React state from a review session and updates/adds UserWords with results from the session

## 3. The Spaced-Repetition Algorith

# Sources:

- A Stochastic Shortest Path Algorithm for Optimizing Spaced Repetition
  Scheduling
- https://dl.acm.org/doi/10.1145/3534678.3539081?cid=99660547150
- Reddit post by the author in /r/anki:
- https://www.reddit.com/r/Anki/comments/17u01ge/spaced_repetition_algorithm_a_threeday_journey/

# Key Points:

- A. During his experiments, he noticed that the subsequent optimal interval was
  approximately twice as long as the preceding one. Finally, he formalized the
  SM-0 algorithm on paper. I(1) = 1 day I(2) = 7 days I(3) = 16 days I(4) = 35
  days for i>4: I(i) = I(i-1) \* 2 Words forgotten in the first four reviews
  were moved to a new page and cycled back into repetition along with new
  materials.

- B. Though the SM-0 algorithm proved to be beneficial to Wozniak's learning,
  several issues prompted him to seek refinements:

  - If a word is forgotten at the first review (after 1 day), it will be more
    likely to be forgotten again during the subsequent reviews (after 7 and 16
    days) compared to words that were not forgotten before.
  - New note pages composed of forgotten words have a higher chance of being
    forgotten even when the review schedule is the same.

- C. Though the SM-0 algorithm proved to be beneficial to Wozniak's learning,
  several issues prompted him to seek refinements:

  - If a word is forgotten at the first review (after 1 day), it will be more
    likely to be forgotten again during the subsequent reviews
  - New note pages composed of forgotten words have a higher chance of being
    forgotten even when the review schedule is the same.

- D. The details about SM-2: Break down the information you want to remember
  into small question-answer pairs. Use the following intervals (in days) to
  review each question-answer pair: $I(1) = 1$ $I(2) = 6$ For $n > 2$,
  $I(n) = I(n-1) \times EF$ - $EF$—the Ease Factor, with an initial value of
  2.5 - After each review,
  $\text{newEF} = EF + (0.1 - (5-q) \times (0.08 + (5-q) \times 0.02))$ - q is a
  quality score, which the learner assigns after recalling the answer, usually
  on a scale from 0 (completely forgotten) to 5 (perfect recall). If the learner
  forgets, the interval for the question-answer pair will be reset to $I(1)$
  with the same EF.
