import { SectionConceptsData } from '@/types/grammar.types'

export const grammar1PhraseOrder: SectionConceptsData = {
  sectionTitle: 'Phrase Order',
  conceptNumber: 1,
  sectionConcepts: [
    {
      subSection: 1,
      title: 'The position of direct and indirect objects',
      explanation:
        'In neutral sentences, the direct and indirect objects of the verb come after the verb. The verb and its objects are called the verb phrase.',
      examples: [
        {
          exNumber: 1,
          exExplanation:
            'If there is an indirect object, it precedes the direct object.',
          exStructure: 'subject + verb + indirect object + direct object',
          exSimplified: '他给我一本书。',
          exTraditional: '他給我一本書。',
          exPinyin: 'Tā gěi wǒ yī běn shū.',
          exTranslation: 'He gave (gives) me one book.'
        },
        {
          exNumber: 2,
          exExplanation: 'Most verbs take only a direct object.',
          exStructure: 'subject + verb + direct object',
          exSimplified: '我看了那些书。',
          exTraditional: '我看了那些書。',
          exPinyin: 'Wǒ kàn le nà xiē shū.',
          exTranslation: 'I read those books.'
        }
      ]
    },
    {
      subSection: 2,
      title: 'The position of prepositional phrases',
      explanation:
        'Prepositional phrases generally occur right before the verb and its objects.',
      examples: [
        {
          exNumber: 1,
          exExplanation:
            'A prepositional phrase is placed directly before the verb and the direct object.',
          exStructure: 'subject + prepositional phrase + verb + direct object',
          exSimplified: '他跟他的女朋友吃晚饭。',
          exTraditional: '他跟他的女朋友吃晚飯。',
          exPinyin: 'Tā gēn tā de nǚ péngyou chī wǎnfàn.',
          exTranslation: 'He eats dinner with his girlfriend.'
        }
      ]
    },
    {
      subSection: 3,
      title: 'The position of location phrases',
      explanation:
        'The location phrase, which indicates where an action occurs, is a type of prepositional phrase. It always occurs before the verb phrase.',
      examples: [
        {
          exNumber: 1,
          exExplanation: 'A location phrase appears before the verb phrase.',
          exStructure: 'subject + location phrase + verb phrase',
          exSimplified: '我在家吃饭。',
          exTraditional: '我在家吃飯。',
          exPinyin: 'Wǒ zài jiā chī fàn.',
          exTranslation: 'I eat at home.'
        },
        {
          exNumber: 2,
          exExplanation:
            'Within a location phrase, constituents are ordered from the largest to the smallest.',
          exStructure: 'location phrase (from largest to smallest)',
          exSimplified: '中国北京潮阳区建国门外大街一号',
          exTraditional: '中國北京潮陽區建國門外大街一號',
          exPinyin:
            'Zhōngguó Běijīng Cháoyáng qū Jiànguó mén wài dà jiē yī hào',
          exTranslation:
            'Number 1, Jianguo Gate Outer Road, Chaoyang District, Beijing, China'
        }
      ]
    },
    {
      subSection: 4,
      title: 'The position of "time when" phrases',
      explanation:
        'A phrase that indicates the "time when" a situation takes place occurs at the beginning of the predicate. If "time when" is emphasized or contrasted with another time, it may occur before the subject. Within the "time when" phrase, the order of constituents is from the largest block of time to the smallest block of time.',
      examples: [
        {
          exNumber: 1,
          exExplanation:
            'The "time when" phrase is placed at the beginning of the predicate.',
          exStructure: 'subject + time when + predicate',
          exSimplified: '我每天喝咖啡。',
          exTraditional: '我每天喝咖啡。',
          exPinyin: 'Wǒ měitiān hē kāfēi.',
          exTranslation: 'I drink coffee every day.'
        },
        {
          exNumber: 2,
          exExplanation:
            'The "time when" phrase precedes both the subject and predicate when emphasized or contrasted.',
          exStructure: 'time when + subject + predicate',
          exSimplified: '昨天我不太舒服。今天已经没问题了。',
          exTraditional: '昨天我不太舒服。今天已經沒問題了。',
          exPinyin: 'Zuótiān wǒ bù tài shūfu. Jīntiān yǐjing méi wèntí le.',
          exTranslation:
            'Yesterday I was a bit uncomfortable. Today it is no longer a problem.'
        },
        {
          exNumber: 3,
          exExplanation:
            'Within the "time when" phrase, the order of constituents is from the largest block of time to the smallest.',
          exSimplified: '一九九八年二月十五日',
          exTraditional: '一九九八年二月十五日',
          exPinyin: 'yī jiǔ jiǔ bā nián èryuè shíwǔ rì',
          exTranslation: 'February 15, 1998'
        },
        {
          exNumber: 4,
          exExplanation:
            'For specific times, the order is also from largest to smallest within the phrase.',
          exSimplified: '昨天晚上八点钟',
          exTraditional: '昨天晚上八點鐘',
          exPinyin: 'zuótiān wǎnshang bā diǎn zhōng',
          exTranslation: "8 o'clock last night"
        }
      ]
    },
    {
      subSection: 5,
      title:
        'The relative order of the "time when" phrase and the location phrase',
      explanation:
        'When a sentence includes both a "time when" phrase and a location phrase, the "time when" phrase generally occurs before the location phrase.',
      examples: [
        {
          exNumber: 1,
          exExplanation:
            'In a neutral sentence, the "time when" phrase appears before the location phrase.',
          exStructure: 'subject + time when + location + verb phrase',
          exSimplified: '我每天在家吃饭。',
          exTraditional: '我每天在家吃飯。',
          exPinyin: 'Wǒ měitiān zài jiā chī fàn.',
          exTranslation: 'I eat at home every day.'
        }
      ]
    },
    {
      subSection: 6,
      title: 'The position of adverbs',
      explanation:
        'Adverbs occur at the beginning of the predicate, before the verb and any prepositional phrase. Adverbs usually occur after the "time when" phrase.',
      examples: [
        {
          exNumber: 1,
          exExplanation:
            'In a neutral sentence, adverbs follow the "time when" phrase and come before the verb.',
          exStructure: 'subject + time when + adverb + verb + direct object',
          exSimplified: '我上个月只看了一个电影。',
          exTraditional: '我上個月只看了一個電影。',
          exPinyin: 'Wǒ shàng gè yuè zhǐ kàn le yī gè diànyǐng.',
          exTranslation: 'Last month I only saw one movie.'
        }
      ]
    },
    {
      subSection: 7,
      title: 'The position of negation',
      explanation:
        'Negation occurs before the verb and any prepositional phrase. It usually occurs after an adverb, though certain adverbs may either precede or follow negation.',
      examples: [
        {
          exNumber: 1,
          exExplanation:
            'Negation typically follows an adverb and comes immediately before the verb.',
          exStructure: 'subject + adverb + negation + verb + object',
          exSimplified: '我今天不想去。',
          exTraditional: '我今天不想去。',
          exPinyin: 'Wǒ jīntiān bù xiǎng qù.',
          exTranslation: "I don't feel like going today."
        }
      ]
    },
    {
      subSection: 8,
      title: 'The position of duration phrases',
      explanation:
        'Duration phrases indicate the length of time that an action occurs. They follow the verb directly and do not use prepositions.',
      examples: [
        {
          exNumber: 1,
          exExplanation:
            'A duration phrase follows the verb directly, without a preposition.',
          exStructure: 'subject + location phrase + verb + duration phrase',
          exSimplified: '我在中国住了三年。',
          exTraditional: '我在中國住了三年。',
          exPinyin: 'Wǒ zài Zhōngguó zhù le sān nián.',
          exTranslation: 'I lived in China for three years.'
        },
        {
          exNumber: 2,
          exExplanation:
            'Another example where the duration phrase follows the verb directly.',
          exStructure: 'subject + time when + verb + duration phrase',
          exSimplified: '我昨天晚上睡了八个钟头。',
          exTraditional: '我昨天晚上睡了八個鐘頭。',
          exPinyin: 'Wǒ zuótiān wǎnshang shuì le bā gè zhōngtóu.',
          exTranslation: 'I slept for eight hours yesterday.'
        }
      ]
    },
    {
      subSection: 9,
      title: 'Order within the noun phrase',
      explanation:
        'The head noun occurs as the last word in the noun phrase, with all descriptive or modifying phrases occurring before it.',
      examples: [
        {
          exNumber: 1,
          exExplanation:
            'Modifiers and descriptive phrases come before the head noun.',
          exStructure: 'modifier(s) + head noun',
          exSimplified: '那本很有意思的书',
          exTraditional: '那本很有意思的書',
          exPinyin: 'nà běn hěn yǒu yìsi de shū',
          exTranslation: 'that very interesting book'
        }
      ]
    },
    {
      subSection: 10,
      title: 'Phrase order in questions',
      explanation:
        'In Mandarin, the phrase order in questions is identical to that in statements. Mandarin does not use a special question word order as in English and many European languages.',
      examples: [
        {
          exNumber: 1,
          exExplanation:
            'The phrase order in statements is maintained in questions.',
          exStructure: 'subject + verb + object',
          exSimplified: '我喜欢他。',
          exTraditional: '我喜歡他。',
          exPinyin: 'Wǒ xǐhuan tā.',
          exTranslation: 'I like him.'
        },
        {
          exNumber: 2,
          exExplanation:
            'Content question (who, what, where, etc.) with the same phrase order as a statement.',
          exStructure: 'subject + verb + question word',
          exSimplified: '你喜欢谁？',
          exTraditional: '你喜歡誰？',
          exPinyin: 'Nǐ xǐhuan shéi?',
          exTranslation: 'Who do you like?'
        },
        {
          exNumber: 3,
          exExplanation:
            'Yes-no question formed by adding a question particle without changing word order.',
          exStructure: 'subject + verb + object + question particle',
          exSimplified: '你喜欢他吗？',
          exTraditional: '你喜歡他嗎？',
          exPinyin: 'Nǐ xǐhuan tā ma?',
          exTranslation: 'Do you like him?'
        }
      ]
    }
  ]
}
