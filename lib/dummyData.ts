import mongoose from 'mongoose'

export const dummyWordData = [
  {
    traditional: '魚',
    simplified: '鱼',
    pinyin: 'yú',
    translation: 'fish',
    partOfSpeech: 'N',
    pastViews: [5, 3, 1, 3, 1]
  },
  {
    traditional: '學習',
    simplified: '学习',
    pinyin: 'xuéxí',
    translation: 'study',
    partOfSpeech: 'V',
    pastViews: [5, 3, 1, 3, 1]
  },
  {
    traditional: '圖書館',
    simplified: '图书馆',
    pinyin: 'túshū guǎn',
    translation: 'library',
    partOfSpeech: 'N',
    pastViews: [5, 3, 1, 3, 1]
  },
  {
    traditional: '經濟發展',
    simplified: '经济发展',
    pinyin: 'jīngjì fāzhǎn',
    translation: 'economic development',
    partOfSpeech: 'N',
    pastViews: [5, 3, 5, 5, 1]
  },
  {
    traditional: '服務員/服務生',
    simplified: '服务员/服务生',
    pinyin: 'fú​wù​yuán/fúwùshēng',
    translation: 'waiter/waiter',
    partOfSpeech: 'N',
    pastViews: [5, 3, 5, 5, 1]
  }
]

export const dummySentenceData = [
  {
    traditional: '中國的經濟發展速度非常快。',
    simplified: '中国的经济发展速度非常快。',
    pinyin: 'Zhōngguó de jīngjì fāzhǎn sùdù fēicháng kuài.',
    translation: 'China’s economic development is very fast.',
    upvotes: 5,
    downvotes: 0
  },
  {
    traditional: '經濟發展對一個國家的繁榮至關重要。',
    simplified: '经济发展对一个国家的繁荣至关重要。',
    pinyin: 'Jīngjì fāzhǎn duì yīgè guójiā de fánróng zhìguān zhòngyào.',
    translation: 'Economic development is crucial to a country’s prosperity.',
    upvotes: 2,
    downvotes: 1
  },
  {
    traditional: '許多專家關注全球的經濟發展趨勢。',
    simplified: '许多专家关注全球的经济发展趋势。',
    pinyin: 'Xǔduō zhuānjiā guānzhù quánqiú de jīngjì fāzhǎn qūshì.',
    translation: 'Many experts focus on global economic development trends.',
    upvotes: 7,
    downvotes: 9
  }
]

export const dummyUserWords = [
  {
    userId: new mongoose.Types.ObjectId('66fae9e84c2ae3ac289446cd'),
    wordId: new mongoose.Types.ObjectId('670106fac77bd237768330eb'), // dummy ObjectId for Word
    repetitions: 3,
    interval: 6,
    easeFactor: 2.8,
    nextReviewDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    reviewHistory: [
      { date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), quality: 5 }, // Last review: 7 days ago
      { date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), quality: 4 } // Recent review: 1 day ago
    ]
  },
  {
    userId: new mongoose.Types.ObjectId('66fae9e84c2ae3ac289446cd'),
    wordId: new mongoose.Types.ObjectId('670106fac77bd237768330ec'),
    repetitions: 2,
    interval: 3,
    easeFactor: 2.6,
    nextReviewDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    reviewHistory: [
      { date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), quality: 4 },
      { date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000), quality: 3 }
    ]
  },
  {
    userId: new mongoose.Types.ObjectId('66fae9e84c2ae3ac289446cd'),

    wordId: new mongoose.Types.ObjectId('670106fac77bd237768330ed'),
    repetitions: 4,
    interval: 10,
    easeFactor: 3.0,
    nextReviewDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
    reviewHistory: [
      { date: new Date(Date.now() - 22 * 24 * 60 * 60 * 1000), quality: 5 },
      { date: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000), quality: 4 }
    ]
  },
  {
    userId: new mongoose.Types.ObjectId('66fae9e84c2ae3ac289446cd'),
    wordId: new mongoose.Types.ObjectId('670106fac77bd237768330ee'),
    repetitions: 1,
    interval: 1,
    easeFactor: 2.5,
    nextReviewDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day from now
    reviewHistory: [
      { date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), quality: 2 }
    ]
  },
  {
    userId: new mongoose.Types.ObjectId('66fae9e84c2ae3ac289446cd'),
    wordId: new mongoose.Types.ObjectId('670106fac77bd237768330ef'),
    repetitions: 5,
    interval: 15,
    easeFactor: 3.1,
    nextReviewDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days from now
    reviewHistory: [
      { date: new Date(Date.now() - 16 * 24 * 60 * 60 * 1000), quality: 5 },
      { date: new Date(Date.now() - 11 * 24 * 60 * 60 * 1000), quality: 5 }
    ]
  }
]

// export const dummyUserData = {
//   _id: new mongoose.Types.ObjectId('66fae9e84c2ae3ac289446cd'),
//   email: 'luke.hide@gmail.com',
//   username: 'Luke Hide',
//   createdAt: new Date('2024-10-02T10:41:27.501+00:00'),
//   latestWord: 5
// }
