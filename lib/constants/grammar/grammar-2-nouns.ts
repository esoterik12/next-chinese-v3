import { SectionConceptsData } from '@/types/grammar.types'

export const grammar2Nouns: SectionConceptsData = {
  title: 'Nouns',
  conceptNumber: 2,
  sectionConcepts: [
    {
      subSectionNumber: 1,
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
      subSectionNumber: 2,
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
      subSectionNumber: 3,
      title: 'Reflexive Pronoun: 自己 zìjǐ',
      explanation:
        'Mandarin has one reflexive pronoun, 自己 zìjǐ, which is not marked for person or gender. It can refer to the subject of the sentence or indicate contrast with other pronouns or noun phrases. Optional personal pronouns may precede 自己 to specify person.',
      examples: [
        {
          exNumber: 1,
          exExplanation:
            'Reflexive pronouns may include a personal pronoun for clarity.',
          exStructure: '[personal pronoun] + 自己',
          exSimplified: '我自己, 我们自己, 你自己, 你们自己, 他自己, 他们自己',
          exTraditional: '我自己, 我們自己, 你自己, 你們自己, 他自己, 他們自己',
          exPinyin:
            'wǒ zìjǐ, wǒmen zìjǐ, nǐ zìjǐ, nǐmen zìjǐ, tā zìjǐ, tāmen zìjǐ',
          exTranslation:
            'myself, ourselves, yourself, yourselves, himself/herself, themselves'
        },
        {
          exNumber: 2,
          exExplanation:
            'When used in object position without a personal pronoun, 自己 refers to the subject.',
          exStructure: '[subject] + 把 + 自己 + [verb phrase]',
          exSimplified: '你在中国一定得把自己照顾好。',
          exTraditional: '你在中國一定得把自己照顧好。',
          exPinyin: 'nǐ zài Zhōngguó yīdìng děi bǎ zìjǐ zhàogù hǎo.',
          exTranslation:
            'When you are in China you certainly should take good care of yourself.'
        },
        {
          exNumber: 3,
          exExplanation:
            '自己 can emphasize self-reference and is understood contextually.',
          exStructure: '[noun/pronoun] + 不 + 喜欢 + 自己',
          exSimplified: '没有人不喜欢自己的。',
          exTraditional: '沒有人不喜歡自己的。',
          exPinyin: 'méi yǒu rén bù xǐhuan zìjǐ de.',
          exTranslation: 'No one doesn’t like him/herself.'
        },
        {
          exNumber: 4,
          exExplanation:
            '自己 may indicate contrast when paired with another noun or pronoun.',
          exStructure: '[subject] + 自己 + [contrast phrase]',
          exSimplified: '我希望他们结婚，可是我自己不想结婚。',
          exTraditional: '我希望他們結婚，可是我自己不想結婚。',
          exPinyin: 'wǒ xīwàng tāmen jiéhūn, kěshì wǒ zìjǐ bù xiǎng jiéhūn.',
          exTranslation:
            'I hope they will get married, but I myself don’t plan to get married.'
        },
        {
          exNumber: 5,
          exExplanation:
            '自己 can emphasize personal ownership or responsibility.',
          exStructure: '[noun/pronoun] + 的 + 自己 + [object]',
          exSimplified: '这是我自己的事。你不用管。',
          exTraditional: '這是我自己的事。你不用管。',
          exPinyin: 'zhè shì wǒ zìjǐ de shì. nǐ bù yòng guǎn.',
          exTranslation: 'This is my affair. You need not be concerned with it.'
        }
      ]
    },
    {
      subSectionNumber: 4,
      title: "Inclusive Pronoun: 咱们/咱們 zánmen",
      explanation:
        "The inclusive pronoun 咱们/咱們 zánmen, used in northern Mandarin dialects, refers to 'we' including the speaker, the addressee, and other associated individuals. Unlike the more common 我们/我們 wǒmen, which can be inclusive or exclusive, 咱们/咱們 zánmen is always inclusive and only used as a subject.",
      examples: [
        {
          exNumber: 1,
          exExplanation:
            '咱们/咱們 zánmen refers inclusively to the speaker, the addressee, and others in the group.',
          exStructure: '[subject] + 都是 + [phrase]',
          exSimplified: '咱们都是自己人。',
          exTraditional: '咱們都是自己人。',
          exPinyin: 'zánmen dōu shì zìjǐ rén.',
          exTranslation:
            'We are all family. (We, including you, are all one family.)'
        },
        {
          exNumber: 2,
          exExplanation:
            'Exclusive 我们/我們 wǒmen refers to the speaker and others associated with the speaker, excluding the addressee.',
          exStructure: '[subject] + 欢迎 + [object]',
          exSimplified: '我们欢迎你。',
          exTraditional: '我們歡迎你。',
          exPinyin: 'wǒmen huānyíng nǐ.',
          exTranslation: 'We welcome you. (Exclusive of the addressee.)'
        }
      ],
      notes: [
        '咱们/咱們 zánmen is exclusively inclusive and only used as a subject.',
        '我们/我們 wǒmen can be inclusive or exclusive and can function as both subject and object.',
        '咱们/咱們 zánmen is less commonly used than 我们/我們 wǒmen.'
      ]
    },
    {
      subSectionNumber: 5,
      title: 'Modification of Pronouns',
      explanation:
        'In general, Mandarin pronouns represent entire noun phrases and are not further modified. However, there are exceptions in certain literary expressions where pronouns can be modified by adjectives or descriptive phrases.',
      examples: [
        {
          exNumber: 1,
          exExplanation:
            "The pronoun 我 wǒ ('me') is modified by the adjective 可怜/可憐 kělián ('poor') to express emotion.",
          exStructure: '[adjective] + 的 + [pronoun]',
          exSimplified: '可怜的我',
          exTraditional: '可憐的我',
          exPinyin: 'kělián de wǒ',
          exTranslation: 'Poor me'
        },
        {
          exNumber: 2,
          exExplanation:
            "The pronoun 她 tā ('her') is modified by the adjective 美丽/美麗 měilì ('pretty') to describe appearance.",
          exStructure: '[adjective] + 的 + [pronoun]',
          exSimplified: '美丽的她',
          exTraditional: '美麗的她',
          exPinyin: 'měilì de tā',
          exTranslation: 'Pretty her'
        },
        {
          exNumber: 3,
          exExplanation:
            "The noun 高老师/高老師 Gāo lǎoshī ('Professor Gao') is modified by the adjective 善良 shànliáng ('good-hearted') to highlight a personal quality.",
          exStructure: '[adjective] + 的 + [noun]',
          exSimplified: '善良的高老师',
          exTraditional: '善良的高老師',
          exPinyin: 'shànliáng de Gāo lǎoshī',
          exTranslation: 'Good-hearted Professor Gao'
        }
      ],
      notes: [
        'These modifications are more commonly found in literary or poetic contexts.',
        "The structure '[adjective] + 的 + [pronoun/noun]' adds descriptive or emotional nuance.",
        'While such constructions are rare in everyday speech, they are used for stylistic or expressive purposes.'
      ]
    },
    {
      subSectionNumber: 6,
      title: 'Possessive Pronouns in Mandarin',
      explanation:
        'Mandarin does not have possessive pronouns. The meaning of possessive pronouns is conveyed by pronoun + 的 (de). When followed by a noun, it translates to "my," "your," etc. When not followed by a noun, it translates to "mine," "yours," etc.',
      examples: [
        {
          exNumber: 1,
          exExplanation: 'Possessive pronoun followed by a noun.',
          exStructure: 'pronoun + 的 + noun',
          exSimplified: '我的朋友',
          exTraditional: '我的朋友',
          exPinyin: 'wǒ de péngyou',
          exTranslation: 'my friend'
        },
        {
          exNumber: 2,
          exExplanation: 'Possessive pronoun followed by a noun.',
          exStructure: 'pronoun + 的 + noun',
          exSimplified: '他的小狗',
          exTraditional: '他的⼩狗',
          exPinyin: 'tā de xiǎogǒu',
          exTranslation: 'his puppy'
        },
        {
          exNumber: 3,
          exExplanation: 'Singular possessive pronoun example.',
          exStructure: 'pronoun + 的',
          exSimplified: '我的',
          exTraditional: '我的',
          exPinyin: 'wǒ de',
          exTranslation: 'my/mine'
        },
        {
          exNumber: 4,
          exExplanation: 'Plural possessive pronoun example.',
          exStructure: 'pronoun + 的',
          exSimplified: '我们 的',
          exTraditional: '我們 的',
          exPinyin: 'wǒmen de',
          exTranslation: 'our/ours'
        },
        {
          exNumber: 5,
          exExplanation: 'Possessive pronoun with a noun.',
          exStructure: '这是 + pronoun + 的 + noun',
          exSimplified: '这是我的书。',
          exTraditional: '這是我的書。',
          exPinyin: 'Zhè shì wǒ de shū.',
          exTranslation: 'This is my book.'
        },
        {
          exNumber: 6,
          exExplanation: 'Possessive pronoun without a noun.',
          exStructure: '这是 + pronoun + 的',
          exSimplified: '这是我的，那是你的。',
          exTraditional: '這是我的，那是你的。',
          exPinyin: 'Zhè shì wǒ de, nà shì nǐ de.',
          exTranslation: 'This is mine, that is yours.'
        }
      ],
      notes: [
        'When pronoun + 的 (de) is followed by a noun, the English equivalent is "my," "your," "his/her," etc.',
        'When pronoun + 的 (de) is not followed by a noun, the English equivalent is "mine," "yours," "his/hers," etc.',
        'In reflexive possession, 自己的 (zìjǐ de) is used for "one’s own."',
        'The structure "pronoun + 的" is versatile and context-dependent.'
      ]
    },
    {
      subSectionNumber: 7,
      title: 'Definition of Proper Nouns',
      explanation:
        'Proper nouns in Mandarin include personal names, place names, names of companies, names of schools, etc. They typically occur without additional modification but can occasionally appear in literary expressions with modifiers.',
      examples: [
        {
          exNumber: 1,
          exExplanation:
            'Example of a proper noun representing an institution.',
          exStructure: 'Proper noun without modification.',
          exSimplified: '牛津大学',
          exTraditional: '牛津大學',
          exPinyin: 'Niújīn Dàxué',
          exTranslation: 'Oxford University'
        },
        {
          exNumber: 2,
          exExplanation: 'Example of a proper noun representing a place.',
          exStructure: 'Proper noun without modification.',
          exSimplified: '伦敦',
          exTraditional: '倫敦',
          exPinyin: 'Lúndūn',
          exTranslation: 'London'
        },
        {
          exNumber: 3,
          exExplanation:
            'Example of a proper noun representing a historical site.',
          exStructure: 'Proper noun without modification.',
          exSimplified: '万里长城',
          exTraditional: '萬里長城',
          exPinyin: 'Wànlǐ Chángchéng',
          exTranslation: 'The Great Wall'
        },
        {
          exNumber: 4,
          exExplanation:
            'Example of a proper noun representing a geographical feature.',
          exStructure: 'Proper noun without modification.',
          exSimplified: '喜玛拉雅山脉',
          exTraditional: '喜瑪拉雅山脈',
          exPinyin: 'Xǐmǎlāyǎ shān mài',
          exTranslation: 'Himalayan Mountains'
        }
      ],
      notes: [
        'Proper nouns typically do not require additional modification.',
        'They include names of people, places, organizations, and more.'
      ]
    },
    {
      subSectionNumber: 8,
      title: 'Proper Nouns in Literary Expressions',
      explanation:
        'In Mandarin, proper nouns may occasionally appear with modifiers, especially in literary or poetic contexts. These modifiers provide descriptive or emotive context.',
      examples: [
        {
          exNumber: 1,
          exExplanation: 'Modified personal name for an affectionate tone.',
          exStructure: 'modifier + 的 + proper noun',
          exSimplified: '可爱的王美玲',
          exTraditional: '可愛的王美玲',
          exPinyin: 'kě’ài de Wáng Měilíng',
          exTranslation: 'charming Wang Meiling'
        },
        {
          exNumber: 2,
          exExplanation: 'Modified place name for descriptive emphasis.',
          exStructure: 'modifier + 的 + proper noun',
          exSimplified: '山清水秀的台湾',
          exTraditional: '山清水秀的臺灣',
          exPinyin: 'shānqīng shuǐxiù de Táiwān',
          exTranslation:
            'Taiwan of green hills and clear streams → beautiful Taiwan'
        },
        {
          exNumber: 3,
          exExplanation: 'Modified country name for descriptive emphasis.',
          exStructure: 'modifier + 的 + proper noun',
          exSimplified: '地大物博的美国',
          exTraditional: '地大物博的美國',
          exPinyin: 'dìdà wùbó de Měiguó',
          exTranslation: 'America vast in territory and rich in resources'
        }
      ],
      notes: [
        'Modifiers used with proper nouns in literary contexts often convey emotion, imagery, or additional descriptive details.',
        'Such expressions are less common in everyday speech but can enhance communication in creative or formal writing.'
      ]
    }
  ]
}
