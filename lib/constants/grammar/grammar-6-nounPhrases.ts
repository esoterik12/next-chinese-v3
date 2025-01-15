import { SectionConceptsData } from '@/types/grammar.types'

export const grammar6NounPhrases: SectionConceptsData = {
  title: 'Noun Phrases',
  conceptNumber: 6,
  sectionConcepts: [
    {
      subSectionNumber: 1,
      title: 'Modifying a Noun with a Specifier and/or Number',
      explanation:
        'Nouns can be modified by a specifier (“this,” “that,” “which?”), a number (“four,” “twenty”), or a specifier and number together (“these four,” “those twenty,” “which two?”). In Mandarin, the classifier associated with the noun being modified must be included in the modifying phrase. The entire phrase precedes the head noun as follows: specifier + number + classifier + noun.',
      examples: [
        {
          exNumber: 1,
          exExplanation: 'Specifier + classifier + noun.',
          exStructure: 'Specifier + classifier + noun',
          exSimplified: '那本书',
          exTraditional: '那本書',
          exPinyin: 'nà běn shū',
          exTranslation: 'that book'
        },
        {
          exNumber: 2,
          exExplanation: 'Number + classifier + noun.',
          exStructure: 'Number + classifier + noun',
          exSimplified: '两本书',
          exTraditional: '兩本書',
          exPinyin: 'liǎng běn shū',
          exTranslation: 'two books'
        },
        {
          exNumber: 3,
          exExplanation: 'Specifier + number + classifier + noun.',
          exStructure: 'Specifier + number + classifier + noun',
          exSimplified: '那三个人',
          exTraditional: '那三個人',
          exPinyin: 'nà sān gè rén',
          exTranslation: 'those three people'
        },
        {
          exNumber: 4,
          exExplanation: 'Specifier + number + classifier + noun.',
          exStructure: 'Specifier + number + classifier + noun',
          exSimplified: '哪三个人',
          exTraditional: '哪三個人',
          exPinyin: 'nǎ sān gè rén',
          exTranslation: 'which three people?'
        }
      ],
      notes: [
        'Classifiers must be included when a specifier and/or number is present in a noun phrase.'
      ]
    },
    {
      subSectionNumber: 2,
      title:
        'Modifying a Noun with All Other Modifiers: Modification with 的 de',
      explanation:
        'Noun modifiers may also be nouns, pronouns, verbs, or phrases that include a verb. These kinds of modifiers are typically followed by the particle 的 de, and the noun phrase has the following form: modifier + 的 de + head noun.',
      examples: [
        {
          exNumber: 1,
          exExplanation: "Modifier + 的 de + head noun: children's clothing.",
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '孩子的衣服',
          exTraditional: '孩子的衣服',
          exPinyin: 'háizi de yīfu',
          exTranslation: "children's clothing"
        },
        {
          exNumber: 2,
          exExplanation: 'Modifier + 的 de + head noun: the speed of the car.',
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '车的速度',
          exTraditional: '車的速度',
          exPinyin: 'chē de sùdù',
          exTranslation: 'the speed of the car'
        },
        {
          exNumber: 3,
          exExplanation:
            "Modifier + 的 de + head noun: Professor Ma's students.",
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '马老师的学生',
          exTraditional: '馬老師的學生',
          exPinyin: 'Mǎ lǎoshī de xuésheng',
          exTranslation: "Professor Ma's student(s)"
        },
        {
          exNumber: 4,
          exExplanation: "Modifier + 的 de + head noun: America's city.",
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '美国的城市',
          exTraditional: '美國的城市',
          exPinyin: 'Měiguó de chéngshì',
          exTranslation: "America's city (cities)/a city (cities) in America."
        }
      ],
      notes: [
        'In English, modifiers like relative clauses appear after the noun, but in Mandarin, all modifiers precede the head noun.',
        'Mandarin does not use relative pronouns or complementizers to introduce relative clauses.'
      ]
    },
    {
      subSectionNumber: 3,
      title: 'Modifiers that are Nouns',
      explanation:
        'Modifiers can be nouns that describe the head noun, forming possessive phrases.',
      examples: [
        {
          exNumber: 1,
          exExplanation: "Modifier + 的 de + head noun: children's clothing.",
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '孩子的衣服',
          exTraditional: '孩子的衣服',
          exPinyin: 'háizi de yīfu',
          exTranslation: "children's clothing"
        },
        {
          exNumber: 2,
          exExplanation: 'Modifier + 的 de + head noun: the speed of the car.',
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '车的速度',
          exTraditional: '車的速度',
          exPinyin: 'chē de sùdù',
          exTranslation: 'the speed of the car'
        },
        {
          exNumber: 3,
          exExplanation:
            "Modifier + 的 de + head noun: Professor Ma's students.",
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '马老师的学生',
          exTraditional: '馬老師的學生',
          exPinyin: 'Mǎ lǎoshī de xuésheng',
          exTranslation: "Professor Ma's student(s)"
        },
        {
          exNumber: 4,
          exExplanation: "Modifier + 的 de + head noun: America's city.",
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '美国的城市',
          exTraditional: '美國的城市',
          exPinyin: 'Měiguó de chéngshì',
          exTranslation: "America's city (cities)/a city (cities) in America."
        }
      ],
      notes: []
    },
    {
      subSectionNumber: 4,
      title: 'Modifiers that are Pronouns',
      explanation:
        'Modifiers can be pronouns that describe the head noun, functioning similarly to possessive pronouns in English.',
      examples: [
        {
          exNumber: 1,
          exExplanation: 'Modifier + 的 de + head noun: my car.',
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '我的车',
          exTraditional: '我的車',
          exPinyin: 'wǒ de chē',
          exTranslation: 'my car'
        },
        {
          exNumber: 2,
          exExplanation: 'Modifier + 的 de + head noun: his home.',
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '他的家',
          exTraditional: '他的家',
          exPinyin: 'tā de jiā',
          exTranslation: 'his home'
        },
        {
          exNumber: 3,
          exExplanation: 'Modifier + 的 de + head noun: your books.',
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '你们的书',
          exTraditional: '你們的書',
          exPinyin: 'nǐmen de shū',
          exTranslation: 'your book(s)'
        }
      ],
      notes: [
        'Pronoun + 的 de serves the same function as a possessive pronoun in English and other languages. There are no separate possessive pronouns in Mandarin.'
      ]
    },
    {
      subSectionNumber: 4,
      title: 'Modifiers that are Adjectival Verbs',
      explanation:
        'Modifiers can be adjectival verbs that describe the head noun. These modifiers typically use 的 de to link to the noun, forming phrases like "a very expensive car."',
      examples: [
        {
          exNumber: 1,
          exExplanation: 'Modifier + 的 de + head noun: very expensive car.',
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '很贵的车',
          exTraditional: '很貴的車',
          exPinyin: 'hěn guì de chē',
          exTranslation: 'a very expensive car'
        }
      ],
      notes: [
        'In Chinese, modifiers such as adjectives precede the head noun and are connected by 的 de.'
      ]
    },
    {
      subSectionNumber: 5,
      title: 'Modifiers that are Stative Verbs',
      explanation:
        'Modifiers can be stative verbs that describe the state or condition of the head noun. These modifiers typically use 的 de to link to the noun, forming phrases like "a car that I like."',
      examples: [
        {
          exNumber: 1,
          exExplanation: 'Modifier + 的 de + head noun: a car that I like.',
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '我喜欢的车',
          exTraditional: '我喜歡的車',
          exPinyin: 'wǒ xǐhuan de chē',
          exTranslation: 'a car that I like'
        }
      ],
      notes: [
        'Modifiers that are stative verbs function similarly to relative clauses in English.'
      ]
    },
    {
      subSectionNumber: 6,
      title: 'Modifiers that are Action Verbs',
      explanation:
        'Modifiers can be action verbs that describe actions related to the head noun. These modifiers typically use 的 de to link to the noun, forming phrases like "a character that is written."',
      examples: [
        {
          exNumber: 1,
          exExplanation:
            'Modifier + 的 de + head noun: a character that is written.',
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '写的字',
          exTraditional: '寫的字',
          exPinyin: 'xiě de zì',
          exTranslation: 'a character that is written'
        },
        {
          exNumber: 2,
          exExplanation:
            'Modifier + 的 de + head noun: the people who have come.',
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '来的人',
          exTraditional: '來的人',
          exPinyin: 'lái de rén',
          exTranslation: 'the people who have come/the person who has come'
        }
      ],
      notes: [
        'Modifiers that are action verbs describe actions performed on or by the head noun.'
      ]
    },
    {
      subSectionNumber: 7,
      title: 'Modifiers that are Verb + Object',
      explanation:
        'Modifiers can be sequences of a verb and its object that describe the head noun. These modifiers typically use 的 de to link to the noun, forming phrases like "the girl who is singing."',
      examples: [
        {
          exNumber: 1,
          exExplanation:
            'Modifier + 的 de + head noun: the girl who is singing.',
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '唱歌儿的女孩子',
          exTraditional: '唱歌兒的女孩子',
          exPinyin: 'chàng gēr de nǚ háizi',
          exTranslation: 'the girl who is singing'
        },
        {
          exNumber: 2,
          exExplanation:
            'Modifier + 的 de + head noun: the person who sells books.',
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '卖书的人',
          exTraditional: '賣書的人',
          exPinyin: 'mài shū de rén',
          exTranslation: 'the person who sells books'
        }
      ],
      notes: [
        'Verb + object modifiers provide specific actions related to the head noun.'
      ]
    },
    {
      subSectionNumber: 8,
      title: 'Modifiers that are Prepositional Phrase + Verb',
      explanation:
        'Modifiers can be prepositional phrases combined with verbs that describe the head noun. These modifiers typically use 的 de to link to the noun, forming phrases like "people who are playing in the park."',
      examples: [
        {
          exNumber: 1,
          exExplanation:
            'Modifier + 的 de + head noun: people who are playing in the park.',
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '在公园里玩的的人',
          exTraditional: '在公園裏玩的人',
          exPinyin: 'zài gōngyuán lǐ wán de rén',
          exTranslation: 'people who are playing in the park'
        },
        {
          exNumber: 2,
          exExplanation:
            'Modifier + 的 de + head noun: a student who has come from Japan.',
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '从日本来的学生',
          exTraditional: '從日本來的學生',
          exPinyin: 'cóng Rìběn lái de xuésheng',
          exTranslation: 'a student who has come from Japan'
        }
      ],
      notes: [
        'Prepositional phrase + verb modifiers provide context about location or origin related to the head noun.'
      ]
    },
    {
      subSectionNumber: 9,
      title: 'Modifiers that are Subject + Verb Sequences',
      explanation:
        'Modifiers can be sequences of subject and verb that describe the head noun. These modifiers typically use 的 de to link to the noun, forming phrases like "the things that he likes."',
      examples: [
        {
          exNumber: 1,
          exExplanation:
            'Modifier + 的 de + head noun: the things that he likes.',
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '他喜欢的东西',
          exTraditional: '他喜歡的東西',
          exPinyin: 'tā xǐhuan de dōngxi',
          exTranslation: 'the things that he likes'
        },
        {
          exNumber: 2,
          exExplanation: 'Modifier + 的 de + head noun: the movie that we saw.',
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '我们看的电影',
          exTraditional: '我們看的電影',
          exPinyin: 'wǒmen kàn de diànyǐng',
          exTranslation: 'the movie that we saw'
        }
      ],
      notes: [
        'Subject + verb sequence modifiers function similarly to relative clauses in English.'
      ]
    },
    {
      subSectionNumber: 5,
      title: 'Modifiers that are Adjectival Verbs',
      explanation:
        'Modifiers can be adjectival verbs that describe the head noun. These modifiers typically use 的 de to link to the noun, forming phrases like "a very expensive car."',
      examples: [
        {
          exNumber: 1,
          exExplanation: 'Modifier + 的 de + head noun: very expensive car.',
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '很贵的车',
          exTraditional: '很貴的車',
          exPinyin: 'hěn guì de chē',
          exTranslation: 'a very expensive car'
        }
      ],
      notes: [
        'In Chinese, modifiers such as adjectives precede the head noun and are connected by 的 de.'
      ]
    },
    {
      subSectionNumber: 6,
      title: 'Modifiers that are Stative Verbs',
      explanation:
        'Modifiers can be stative verbs that describe the state or condition of the head noun. These modifiers typically use 的 de to link to the noun, forming phrases like "a car that I like."',
      examples: [
        {
          exNumber: 1,
          exExplanation: 'Modifier + 的 de + head noun: a car that I like.',
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '我喜欢的车',
          exTraditional: '我喜歡的車',
          exPinyin: 'wǒ xǐhuan de chē',
          exTranslation: 'a car that I like'
        }
      ],
      notes: [
        'Modifiers that are stative verbs function similarly to relative clauses in English.'
      ]
    },
    {
      subSectionNumber: 7,
      title: 'Modifiers that are Action Verbs',
      explanation:
        'Modifiers can be action verbs that describe actions related to the head noun. These modifiers typically use 的 de to link to the noun, forming phrases like "a character that is written."',
      examples: [
        {
          exNumber: 1,
          exExplanation:
            'Modifier + 的 de + head noun: a character that is written.',
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '写的字',
          exTraditional: '寫的字',
          exPinyin: 'xiě de zì',
          exTranslation: 'a character that is written'
        },
        {
          exNumber: 2,
          exExplanation:
            'Modifier + 的 de + head noun: the people who have come.',
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '来的人',
          exTraditional: '來的人',
          exPinyin: 'lái de rén',
          exTranslation: 'the people who have come/the person who has come'
        }
      ],
      notes: [
        'Modifiers that are action verbs describe actions performed on or by the head noun.'
      ]
    },
    {
      subSectionNumber: 8,
      title: 'Modifiers that are Verb + Object',
      explanation:
        'Modifiers can be sequences of a verb and its object that describe the head noun. These modifiers typically use 的 de to link to the noun, forming phrases like "the girl who is singing."',
      examples: [
        {
          exNumber: 1,
          exExplanation:
            'Modifier + 的 de + head noun: the girl who is singing.',
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '唱歌儿的女孩子',
          exTraditional: '唱歌兒的女孩子',
          exPinyin: 'chàng gēr de nǚ háizi',
          exTranslation: 'the girl who is singing'
        },
        {
          exNumber: 2,
          exExplanation:
            'Modifier + 的 de + head noun: the person who sells books.',
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '卖书的人',
          exTraditional: '賣書的人',
          exPinyin: 'mài shū de rén',
          exTranslation: 'the person who sells books'
        }
      ],
      notes: [
        'Verb + object modifiers provide specific actions related to the head noun.'
      ]
    },
    {
      subSectionNumber: 9,
      title: 'Modifiers that are Prepositional Phrase + Verb',
      explanation:
        'Modifiers can be prepositional phrases combined with verbs that describe the head noun. These modifiers typically use 的 de to link to the noun, forming phrases like "people who are playing in the park."',
      examples: [
        {
          exNumber: 1,
          exExplanation:
            'Modifier + 的 de + head noun: people who are playing in the park.',
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '在公园里玩的的人',
          exTraditional: '在公園裏玩的人',
          exPinyin: 'zài gōngyuán lǐ wán de rén',
          exTranslation: 'people who are playing in the park'
        },
        {
          exNumber: 2,
          exExplanation:
            'Modifier + 的 de + head noun: a student who has come from Japan.',
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '从日本来的学生',
          exTraditional: '從日本來的學生',
          exPinyin: 'cóng Rìběn lái de xuésheng',
          exTranslation: 'a student who has come from Japan'
        }
      ],
      notes: [
        'Prepositional phrase + verb modifiers provide context about location or origin related to the head noun.'
      ]
    },
    {
      subSectionNumber: 10,
      title: 'Modifiers that are Subject + Verb Sequences',
      explanation:
        'Modifiers can be sequences of subject and verb that describe the head noun. These modifiers typically use 的 de to link to the noun, forming phrases like "the things that he likes."',
      examples: [
        {
          exNumber: 1,
          exExplanation:
            'Modifier + 的 de + head noun: the things that he likes.',
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '他喜欢的东西',
          exTraditional: '他喜歡的東西',
          exPinyin: 'tā xǐhuan de dōngxi',
          exTranslation: 'the things that he likes'
        },
        {
          exNumber: 2,
          exExplanation: 'Modifier + 的 de + head noun: the movie that we saw.',
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '我们看的电影',
          exTraditional: '我們看的電影',
          exPinyin: 'wǒmen kàn de diànyǐng',
          exTranslation: 'the movie that we saw'
        }
      ],
      notes: [
        'Subject + verb sequence modifiers function similarly to relative clauses in English.'
      ]
    },
    {
      subSectionNumber: 11,
      title: 'Modifiers that are Question Words',
      explanation:
        'Modifiers can be question words that describe the head noun, functioning similarly to relative clauses in English.',
      examples: [
        {
          exNumber: 1,
          exExplanation: 'Modifier + 的 de + head noun: whose book.',
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '谁的书？',
          exTraditional: '誰的書？',
          exPinyin: 'shéi de shū?',
          exTranslation: 'whose book?'
        },
        {
          exNumber: 2,
          exExplanation:
            'Modifier + 的 de + head noun: a restaurant located where?',
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '哪儿的饭馆？',
          exTraditional: '哪兒的飯館？',
          exPinyin: 'nǎr de fànguǎn?',
          exTranslation: 'a restaurant located where?'
        }
      ],
      notes: [
        'Question word modifiers function to specify certain aspects of the noun.'
      ]
    },
    {
      subSectionNumber: 12,
      title: 'Omission of the Particle 的 de',
      explanation:
        'The particle 的 de is sometimes omitted from the modifier. 的 de may be omitted when the modifier is an unmodified one-syllable adjectival verb, when the modifier is closely associated with the noun, describing, for example, nationality, or a close personal relationship in which the modifier is a pronoun.',
      examples: [
        {
          exNumber: 1,
          exExplanation:
            'Omission when modifier is an unmodified one-syllable adjectival verb.',
          exStructure: 'Modifier → head noun',
          exSimplified: '贵车',
          exTraditional: '貴車',
          exPinyin: 'guì chē',
          exTranslation: 'expensive car'
        },
        {
          exNumber: 2,
          exExplanation: 'Cannot omit when modifier has additional adjectives.',
          exStructure: 'Modifier + 的 + head noun',
          exSimplified: '很贵的车',
          exTraditional: '很貴的車',
          exPinyin: 'hěn guì de chē',
          exTranslation: '*expensive car*'
        },
        {
          exNumber: 3,
          exExplanation: 'Omission when modifier is nationality.',
          exStructure: 'Modifier → head noun',
          exSimplified: '美国人',
          exTraditional: '美國人',
          exPinyin: 'Měiguó rén',
          exTranslation: 'American person'
        },
        {
          exNumber: 4,
          exExplanation:
            'Omission when modifier is a pronoun indicating close personal relationship.',
          exStructure: 'Modifier → head noun',
          exSimplified: '我爸爸',
          exTraditional: '我爸爸',
          exPinyin: 'wǒ bàba',
          exTranslation: 'my father'
        }
      ],
      notes: [
        '的 de may be omitted in certain conditions, but cannot be omitted if the head noun is not predictable from context.'
      ]
    },
    {
      subSectionNumber: 13,
      title: 'Noun Modifiers in a Series',
      explanation:
        'In Mandarin Chinese, a noun may be modified by any number of modifiers. The modifiers occur in a series before the head noun. A modifier that is a specifier and/or a number ends with a classifier. All other modifiers may end in the particle 的 de. The head noun occurs only once, at the end of the series of modifiers.',
      examples: [
        {
          exNumber: 1,
          exExplanation: 'Multiple modifiers preceding head noun.',
          exStructure: 'Modifier + Modifier + ... + head noun',
          exSimplified: '我们[昨天看的][刚出来的][中国的]电影',
          exTraditional: '我們[昨天看的][剛出來的][中國的]電影',
          exPinyin:
            'wǒmen [zuótiān kàn de] [gāng chūlái de] [Zhōngguó de] diànyǐng',
          exTranslation:
            'the Chinese movie that just came out that we saw yesterday'
        },
        {
          exNumber: 2,
          exExplanation: 'Multiple modifiers with specifiers and properties.',
          exStructure: 'Modifier + Modifier + ... + head noun',
          exSimplified: '[你给我介绍的][那两个][很聪明的]留学生',
          exTraditional: '[你給我介紹的][那兩個][很聰明的]留學生',
          exPinyin:
            '[nǐ gěi wǒ jièshào de] [nà liǎng gè] [hěn cōngming de] liúxuéshēng',
          exTranslation:
            'those two very smart exchange students who you introduced me to'
        },
        {
          exNumber: 3,
          exExplanation:
            'Modifiers can occur in any order, but inherent characteristics are closer to the noun.',
          exStructure: 'Modifier + Modifier + ... + head noun',
          exSimplified: '[穿毛衣的][很可爱的]小孩子',
          exTraditional: '[穿毛衣的][很可愛的]小孩子',
          exPinyin: '[chuān máoyī de] [hěn kě’ài de] xiǎo háizi',
          exTranslation: 'the very cute child who is wearing a sweater'
        },
        {
          exNumber: 4,
          exExplanation: 'Modifiers can be ordered for emphasis or contrast.',
          exStructure: 'Modifier + Modifier + ... + head noun',
          exSimplified: '[很高的][戴眼镜的][那个]人',
          exTraditional: '[很高的][戴眼鏡的][那個]人',
          exPinyin: '[hěn gāo de] [dài yǎnjìng de] [nàge] rén',
          exTranslation: 'that very tall person who wears glasses'
        }
      ],
      notes: [
        'Modifiers can occur in any order, but modifiers involving inherent personal characteristics often occur closer to the head noun.'
      ]
    },
    {
      subSectionNumber: 14,
      title: 'Omission of the Head Noun',
      explanation:
        'When the head noun is predictable from the context, it may be omitted. The presence of 的 de or a classifier at the end of a phrase identifies the phrase as a noun phrase modifier. When the head noun is omitted, 的 de cannot be omitted.',
      examples: [
        {
          exNumber: 1,
          exExplanation: 'Omitting the head noun after 的 de.',
          exStructure: 'Modifier + 的 + [noun]',
          exSimplified: '这是谁做的菜？ 这是马老师做的(__)。',
          exTraditional: '這是誰做的菜？ 這是馬老師做的(__)。',
          exPinyin: 'Zhè shì shéi zuò de cài? Zhè shì Mǎ lǎoshī zuò de (__).',
          exTranslation:
            'This is food cooked by whom? This is (food) cooked by Professor Ma.'
        },
        {
          exNumber: 2,
          exExplanation:
            'Omitting the head noun after 的 de in descriptive phrases.',
          exStructure: 'Modifier + 的 + [noun]',
          exSimplified: '我特别喜欢红烧的(__)。',
          exTraditional: '我特別喜歡紅燒的(__)。',
          exPinyin: 'Wǒ tèbié xǐhuan hóngshāo de (__).',
          exTranslation: 'I especially like red cooked (ones).'
        },
        {
          exNumber: 3,
          exExplanation: 'Omitting the head noun after 的 de in noun phrases.',
          exStructure: 'Modifier + 的 + [noun]',
          exSimplified: '我要那本(书)。',
          exTraditional: '我要那本(書)。',
          exPinyin: 'Wǒ yào nà běn (shū).',
          exTranslation: 'I want that (one).'
        },
        {
          exNumber: 4,
          exExplanation: 'Omission when the head noun is obvious from context.',
          exStructure: 'Modifier + [noun]',
          exSimplified: '三块(钱)。',
          exTraditional: '三塊(錢)。',
          exPinyin: 'Sān kuài (qián).',
          exTranslation: 'Three dollars.'
        }
      ],
      notes: [
        'When the head noun is predictable from context, it may be omitted. However, when omitting the head noun, 的 de must be present.'
      ]
    },
    {
      subSectionNumber: 15,
      title: 'Modification with 之 zhī',
      explanation:
        '之 zhī is the marker of noun modification in literary Chinese and is used in certain literary expressions in modern Chinese. These instances of 之 zhī are not interchangeable with 的 de.',
      examples: [
        {
          exNumber: 1,
          exExplanation: 'Percentage: one-third.',
          exStructure: 'Number + 分 + 之 + Number',
          exSimplified: '三分之一',
          exTraditional: '三分之一',
          exPinyin: 'sān fēn zhī yī',
          exTranslation: 'one-third'
        },
        {
          exNumber: 2,
          exExplanation: 'Percentage: 10%.',
          exStructure: 'Number + 分 + 之 + Number',
          exSimplified: '百分之十',
          exTraditional: '百分之十',
          exPinyin: 'bǎi fēn zhī shí',
          exTranslation: '10%'
        },
        {
          exNumber: 3,
          exExplanation: 'Time phrase: after three years.',
          exStructure: 'Number + 年 + 之 + 后',
          exSimplified: '三年之后',
          exTraditional: '三年之後',
          exPinyin: 'sān nián zhīhòu',
          exTranslation: 'three years afterward/after three years'
        },
        {
          exNumber: 4,
          exExplanation: 'Time phrase: before the Second World War.',
          exStructure: 'Number + 次 + 世界 + 战争 + 之 + 前',
          exSimplified: '第二次世界战争之前',
          exTraditional: '第二次世界戰爭之前',
          exPinyin: 'dì èrcì shìjiè zhànzhēng zhīqián',
          exTranslation: 'before the Second World War'
        },
        {
          exNumber: 5,
          exExplanation: 'Time phrase: within three days.',
          exStructure: 'Number + 天 + 之 + 内',
          exSimplified: '我三天之内一定做得完。',
          exTraditional: '我三天之內一定做得完。',
          exPinyin: 'Wǒ sāntiān zhīnèi yīdìng zuòdewán.',
          exTranslation:
            'I will definitely be able to finish within three days.'
        }
      ],
      notes: [
        'In literary Chinese, 之 zhī is used as a marker for noun modification and is not interchangeable with 的 de.',
        'Percentages, fractions, and time phrases can use 之 zhī for modification.'
      ]
    }
  ]
}
