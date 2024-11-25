import { SectionConceptsData } from '@/types/grammar.types'

export const dummyGrammar: SectionConceptsData[] = [
  {
    sectionTitle: 'Phrase Order',
    sectionLink: 'phrase-order',
    conceptNumber: 4,
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
            exStructure:
              'subject + prepositional phrase + verb + direct object',
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
  },
  {
    sectionTitle: 'Nouns',
    sectionLink: 'nouns',
    conceptNumber: 5,
    sectionConcepts: [
      {
        subSection: 1,
        title: 'Common nouns',
        explanation:
          'Most nouns in Mandarin are common nouns, referring to either concrete or abstract entities. They do not distinguish between mass and count nouns and have a single, invariant form, making them unspecified for singular or plural unless modified.',
        examples: [
          {
            exNumber: 1,
            exExplanation:
              'Concrete nouns refer to tangible entities like objects or substances.',
            exStructure: '[noun]',
            exSimplified: '纸, 桌子, 水',
            exTraditional: '紙, 桌子, 水',
            exPinyin: 'zhǐ, zhuōzi, shuǐ',
            exTranslation: 'paper, table, water'
          },
          {
            exNumber: 2,
            exExplanation:
              'Abstract nouns refer to intangible concepts like ideas or principles.',
            exStructure: '[noun]',
            exSimplified: '思想, 原则, 自由',
            exTraditional: '思想, 原則, 自由',
            exPinyin: 'sīxiǎng, yuánzé, zìyóu',
            exTranslation: 'thought, principle, freedom'
          },
          {
            exNumber: 3,
            exExplanation:
              'When specifying quantity, nouns must be modified with a number and a classifier.',
            exStructure: '[number] + [classifier] + [noun]',
            exSimplified: '一本书',
            exTraditional: '一本書',
            exPinyin: 'yì běn shū',
            exTranslation: 'one book'
          },
          {
            exNumber: 4,
            exExplanation:
              'Without classifiers, number + noun constructions are ungrammatical.',
            exStructure: '*[number] + [noun]',
            exSimplified: '一书',
            exTraditional: '一書',
            exPinyin: 'yì shū',
            exTranslation: '*one book (ungrammatical)'
          },
          {
            exNumber: 5,
            exExplanation:
              'A small number of common nouns referring to people can use the suffix -们/們 to indicate inclusion or plurality.',
            exStructure: '[noun] + 们',
            exSimplified: '同志们, 孩子们, 学生们',
            exTraditional: '同志們, 孩子們, 學生們',
            exPinyin: 'tóngzhìmen, háizimen, xuéshengmen',
            exTranslation: 'comrades, children, students'
          },
          {
            exNumber: 6,
            exExplanation:
              'Nouns suffixed with -们 cannot be further modified with phrases like number + classifier.',
            exStructure: '*[number] + [classifier] + [noun] + 们',
            exSimplified: '三个孩子们',
            exTraditional: '三個孩子們',
            exPinyin: 'sān gè háizimen',
            exTranslation: '*three children (ungrammatical)'
          }
        ]
      },
      {
        subSection: 2,
        title: 'Pronouns',
        explanation:
          'Mandarin has first, second, and third-person pronouns, along with a reflexive pronoun. Pronouns are not distinguished by grammatical role, and they share singular and plural forms. Gender distinctions are minimal and primarily found in written third-person pronouns.',
        examples: [
          {
            exNumber: 1,
            exExplanation:
              'Pronouns are invariant to grammatical roles. The same form is used for subject, object, and possessive cases.',
            exStructure: '[pronoun]',
            exSimplified: '我喜欢他。他也喜欢我。',
            exTraditional: '我喜歡他。他也喜歡我。',
            exPinyin: 'wǒ xǐhuān tā. tā yě xǐhuān wǒ.',
            exTranslation: 'I like him. He likes me too.'
          },
          {
            exNumber: 2,
            exExplanation:
              'The suffix -们/們 is used to pluralize singular pronouns.',
            exStructure: '[singular pronoun] + 们',
            exSimplified: '我们, 你们, 他们',
            exTraditional: '我們, 你們, 他們',
            exPinyin: 'wǒmen, nǐmen, tāmen',
            exTranslation: 'we/us, you (plural), they/them'
          },
          {
            exNumber: 3,
            exExplanation:
              'Gender distinctions exist in written third-person pronouns, but not in speech.',
            exStructure: '[third-person pronoun]',
            exSimplified: '他, 她, 它',
            exTraditional: '他, 她, 牠',
            exPinyin: 'tā, tā, tā',
            exTranslation: 'he/him, she/her, it'
          },
          {
            exNumber: 4,
            exExplanation:
              'Inclusive and exclusive forms of "we" are distinguished in Mandarin.',
            exStructure: '[inclusive/exclusive pronoun]',
            exSimplified: '咱们, 我们',
            exTraditional: '咱們, 我們',
            exPinyin: 'zánmen, wǒmen',
            exTranslation: 'we/us (inclusive), we/us (exclusive or neutral)'
          },
          {
            exNumber: 5,
            exExplanation:
              'The reflexive pronoun 自己 zìjǐ is used for self-reference.',
            exStructure: '[subject] + 自己',
            exSimplified: '我相信自己。',
            exTraditional: '我相信自己。',
            exPinyin: 'wǒ xiāngxìn zìjǐ.',
            exTranslation: 'I trust myself.'
          },
          {
            exNumber: 6,
            exExplanation:
              'Feminine second-person pronouns 妳 nǐ exist in written Mandarin but are rarely used.',
            exStructure: '[second-person pronoun]',
            exSimplified: '妳好。',
            exTraditional: '妳好。',
            exPinyin: 'nǐ hǎo.',
            exTranslation: 'Hello (to a female).'
          }
        ]
      },
      {
        subSection: 3,
        title: 'Reflexive Pronoun: 自己 zìjǐ ("self")',
        explanation:
          'Mandarin has one reflexive pronoun, 自己 zìjǐ, which is not marked for person or gender. It can refer to the subject of the sentence or indicate contrast with other pronouns or noun phrases. Optional personal pronouns may precede 自己 to specify person.',
        examples: [
          {
            exNumber: 1,
            exExplanation: 'Reflexive pronouns may include a personal pronoun for clarity.',
            exStructure: '[personal pronoun] + 自己',
            exSimplified: '我自己, 我们自己, 你自己, 你们自己, 他自己, 他们自己',
            exTraditional: '我自己, 我們自己, 你自己, 你們自己, 他自己, 他們自己',
            exPinyin: 'wǒ zìjǐ, wǒmen zìjǐ, nǐ zìjǐ, nǐmen zìjǐ, tā zìjǐ, tāmen zìjǐ',
            exTranslation: 'myself, ourselves, yourself, yourselves, himself/herself, themselves'
          },
          {
            exNumber: 2,
            exExplanation: 'When used in object position without a personal pronoun, 自己 refers to the subject.',
            exStructure: '[subject] + 把 + 自己 + [verb phrase]',
            exSimplified: '你在中国一定得把自己照顾好。',
            exTraditional: '你在中國一定得把自己照顧好。',
            exPinyin: 'nǐ zài Zhōngguó yīdìng děi bǎ zìjǐ zhàogù hǎo.',
            exTranslation: 'When you are in China you certainly should take good care of yourself.'
          },
          {
            exNumber: 3,
            exExplanation: '自己 can emphasize self-reference and is understood contextually.',
            exStructure: '[noun/pronoun] + 不 + 喜欢 + 自己',
            exSimplified: '没有人不喜欢自己的。',
            exTraditional: '沒有人不喜歡自己的。',
            exPinyin: 'méi yǒu rén bù xǐhuan zìjǐ de.',
            exTranslation: 'No one doesn’t like him/herself.'
          },
          {
            exNumber: 4,
            exExplanation: '自己 may indicate contrast when paired with another noun or pronoun.',
            exStructure: '[subject] + 自己 + [contrast phrase]',
            exSimplified: '我希望他们结婚，可是我自己不想结婚。',
            exTraditional: '我希望他們結婚，可是我自己不想結婚。',
            exPinyin: 'wǒ xīwàng tāmen jiéhūn, kěshì wǒ zìjǐ bù xiǎng jiéhūn.',
            exTranslation: 'I hope they will get married, but I myself don’t plan to get married.'
          },
          {
            exNumber: 5,
            exExplanation: '自己 can emphasize personal ownership or responsibility.',
            exStructure: '[noun/pronoun] + 的 + 自己 + [object]',
            exSimplified: '这是我自己的事。你不用管。',
            exTraditional: '這是我自己的事。你不用管。',
            exPinyin: 'zhè shì wǒ zìjǐ de shì. nǐ bù yòng guǎn.',
            exTranslation: 'This is my affair. You need not be concerned with it.'
          }
        ]
      },
      {
        subSection: 4,
        title: "Inclusive Pronoun: 咱们/咱們 zánmen ('we')",
        explanation:
          "The inclusive pronoun 咱们/咱們 zánmen, used in northern Mandarin dialects, refers to 'we' including the speaker, the addressee, and other associated individuals. Unlike the more common 我们/我們 wǒmen, which can be inclusive or exclusive, 咱们/咱們 zánmen is always inclusive and only used as a subject.",
        examples: [
          {
            exNumber: 1,
            exExplanation:
              "咱们/咱們 zánmen refers inclusively to the speaker, the addressee, and others in the group.",
            exStructure: "[subject] + 都是 + [phrase]",
            exSimplified: "咱们都是自己人。",
            exTraditional: "咱們都是自己人。",
            exPinyin: "zánmen dōu shì zìjǐ rén.",
            exTranslation: "We are all family. (We, including you, are all one family.)"
          },
          {
            exNumber: 2,
            exExplanation:
              "Exclusive 我们/我們 wǒmen refers to the speaker and others associated with the speaker, excluding the addressee.",
            exStructure: "[subject] + 欢迎 + [object]",
            exSimplified: "我们欢迎你。",
            exTraditional: "我們歡迎你。",
            exPinyin: "wǒmen huānyíng nǐ.",
            exTranslation: "We welcome you. (Exclusive of the addressee.)"
          }
        ],
        notes: [
          "咱们/咱們 zánmen is exclusively inclusive and only used as a subject.",
          "我们/我們 wǒmen can be inclusive or exclusive and can function as both subject and object.",
          "咱们/咱們 zánmen is less commonly used than 我们/我們 wǒmen."
        ]
      }
    ]
  }
]
