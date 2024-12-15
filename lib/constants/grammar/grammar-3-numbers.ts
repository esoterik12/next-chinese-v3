import { SectionConceptsData } from '@/types/grammar.types'

export const grammar3Numbers: SectionConceptsData = {
  sectionTitle: 'Numbers',
  conceptNumber: 3,
  sectionConcepts: [
    {
      subSection: 1,
      title: 'Mandarin Numbers 0 to 99',
      explanation:
        'Mandarin numbers from 0 to 99 are constructed using simple building blocks. The numbers 0 to 10 are the foundation for larger numbers, while unique rules apply for the number 2 depending on its context.',
      examples: [
        {
          exNumber: 1,
          exExplanation: 'The basic numbers 0 to 10 in Mandarin.',
          exStructure: 'Number → Chinese character → Pinyin',
          exSimplified:
            '0: 零, 1: 一, 2: 二, 3: 三, 4: 四, 5: 五, 6: 六, 7: 七, 8: 八, 9: 九, 10: 十',
          exTraditional:
            '0: 零, 1: 一, 2: 二, 3: 三, 4: 四, 5: 五, 6: 六, 7: 七, 8: 八, 9: 九, 10: 十',
          exPinyin: 'líng, yī, èr, sān, sì, wǔ, liù, qī, bā, jiǔ, shí',
          exTranslation:
            '0 to 10: zero, one, two, three, four, five, six, seven, eight, nine, ten'
        },
        {
          exNumber: 2,
          exExplanation: 'Usage of 二 (èr) versus 两 (liǎng).',
          exStructure: 'Number + classifier → correct usage of liǎng.',
          exSimplified: '两本书, 两个人',
          exTraditional: '兩本書, 兩個人',
          exPinyin: 'liǎng běn shū, liǎng gè rén',
          exTranslation: 'two books, two people'
        },
        {
          exNumber: 3,
          exExplanation: 'Reciting telephone numbers using single digits.',
          exStructure: 'Numbers separated → read individually as digits.',
          exSimplified: '八六二二五六○二',
          exTraditional: '八六二二五六○二',
          exPinyin: 'bā liù èr èr wǔ liù líng èr',
          exTranslation: '86225602'
        }
      ],
      notes: [
        'The number 2 is 二 (èr) when counting or stating numbers but 两 (liǎng) when used with classifiers.',
        'Telephone numbers are recited as individual digits, with 零 (líng) representing 0.'
      ]
    },
    {
      subSection: 2,
      title: 'Numbers 11 to 19',
      explanation:
        'Mandarin numbers 11 to 19 are formed by combining the number 10 (十 shí) with the numbers 1 (一 yī) through 9 (九 jiǔ). The number 12 is uniquely 十二 (shíèr) and not 十两.',
      examples: [
        {
          exNumber: 1,
          exExplanation: 'Construction of numbers 11 to 19.',
          exStructure: '10 + single digit → number structure.',
          exSimplified:
            '11: 十一, 12: 十二, 13: 十三, 14: 十四, 15: 十五, 16: 十六, 17: 十七, 18: 十八, 19: 十九',
          exTraditional:
            '11: 十一, 12: 十二, 13: 十三, 14: 十四, 15: 十五, 16: 十六, 17: 十七, 18: 十八, 19: 十九',
          exPinyin:
            'shíyī, shíèr, shísān, shísì, shíwǔ, shíliù, shíqī, shíbā, shíjiǔ',
          exTranslation:
            '11 to 19: eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen'
        }
      ],
      notes: ['The number 12 uses 十二 (shíèr), not 十两 (shí liǎng).']
    },
    {
      subSection: 3,
      title: 'Numbers 20 to 99',
      explanation:
        'Numbers from 20 to 99 in Mandarin combine multiples of 10 (20, 30, 40, etc.) with digits 1 to 9. They follow a consistent structure: [multiplier] + 十 (shí) + [digit].',
      examples: [
        {
          exNumber: 1,
          exExplanation: 'Forming multiples of ten like 20, 30, and 40.',
          exStructure: 'Base number + 十 → multiple of ten.',
          exSimplified:
            '20: 二十, 30: 三十, 40: 四十, 50: 五十, 60: 六十, 70: 七十, 80: 八十, 90: 九十',
          exTraditional:
            '20: 二十, 30: 三十, 40: 四十, 50: 五十, 60: 六十, 70: 七十, 80: 八十, 90: 九十',
          exPinyin: 'èrshí, sānshí, sìshí, wǔshí, liùshí, qīshí, bāshí, jiǔshí',
          exTranslation: '20, 30, 40, 50, 60, 70, 80, 90'
        },
        {
          exNumber: 2,
          exExplanation: 'Forming numbers like 21, 35, and 99.',
          exStructure: 'Multiple of ten + digit → complete number.',
          exSimplified:
            '21: 二十一, 35: 三十五, 57: 五十七, 68: 六十八, 74: 七十四, 99: 九十九',
          exTraditional:
            '21: 二十一, 35: 三十五, 57: 五十七, 68: 六十八, 74: 七十四, 99: 九十九',
          exPinyin: 'èrshíyī, sānshíwǔ, wǔshíqī, liùshíbā, qīshísì, jiǔshíjiǔ',
          exTranslation: '21, 35, 57, 68, 74, 99'
        }
      ],
      notes: [
        'Numbers from 20 to 99 combine multiples of ten with digits 1 to 9.',
        'The structure is consistent and easy to follow.'
      ]
    },
    {
      subSection: 4,
      title: '100, 1,000, 10,000, and 100,000,000',
      explanation:
        'Mandarin has distinct words for multiples of 100, 1,000, 10,000, and 100,000,000. These words also function as classifiers. The number 2 typically uses 两/兩 (liǎng) before these classifiers, though 二 (èr) is also acceptable in many dialects.',
      examples: [
        {
          exNumber: 1,
          exExplanation: 'Hundreds (百 bǎi): Example for 100.',
          exStructure: 'Number + 百',
          exSimplified: '一百',
          exTraditional: '一百',
          exPinyin: 'yī bǎi',
          exTranslation: '100'
        },
        {
          exNumber: 2,
          exExplanation: 'Thousands (千 qiān): Example for 1,000.',
          exStructure: 'Number + 千',
          exSimplified: '一千',
          exTraditional: '一千',
          exPinyin: 'yī qiān',
          exTranslation: '1,000'
        },
        {
          exNumber: 3,
          exExplanation: 'Ten thousands (万/萬 wàn): Example for 10,000.',
          exStructure: 'Number + 万/萬',
          exSimplified: '一万',
          exTraditional: '一萬',
          exPinyin: 'yī wàn',
          exTranslation: '10,000'
        },
        {
          exNumber: 4,
          exExplanation:
            'Hundred millions (亿/億 yì): Example for 100,000,000.',
          exStructure: 'Number + 亿/億',
          exSimplified: '一亿',
          exTraditional: '一億',
          exPinyin: 'yī yì',
          exTranslation: '100,000,000'
        },
        {
          exNumber: 5,
          exExplanation:
            'The number 2 uses 两/兩 (liǎng) before 百, 千, and 万/萬 when used as a classifier.',
          exStructure: '两/兩 + 百/千/万',
          exSimplified: '两百',
          exTraditional: '兩百',
          exPinyin: 'liǎng bǎi',
          exTranslation: '200'
        }
      ],
      notes: [
        'In many regional dialects, 二 (èr) can also be used before 百 (bǎi), 千 (qiān), and 万/萬 (wàn). For example: 二百 (èr bǎi), 二千 (èr qiān).'
      ]
    },
    {
      subSection: 5,
      title: 'Forming Numbers Through 9,999',
      explanation:
        'Mandarin numbers up to 9,999 follow a consistent pattern: combining hundreds, tens, and single digits using 百 (bǎi), 十 (shí), and direct numerals.',
      examples: [
        {
          exNumber: 1,
          exExplanation: 'Example for 352.',
          exStructure: '三百 + 五十 + 二',
          exSimplified: '三百五十二',
          exTraditional: '三百五十二',
          exPinyin: 'sān bǎi wǔshí èr',
          exTranslation: '352'
        },
        {
          exNumber: 2,
          exExplanation: 'Example for 1,670.',
          exStructure: '一千 + 六百 + 七十',
          exSimplified: '一千六百七十',
          exTraditional: '一千六百七十',
          exPinyin: 'yī qiān liù bǎi qīshí',
          exTranslation: '1,670'
        },
        {
          exNumber: 3,
          exExplanation: 'Example for 3,482.',
          exStructure: '三千 + 四百 + 八十 + 二',
          exSimplified: '三千四百八十二',
          exTraditional: '三千四百八十二',
          exPinyin: 'sān qiān sì bǎi bāshí èr',
          exTranslation: '3,482'
        },
        {
          exNumber: 4,
          exExplanation: 'Example for 9,222, with 两百 as an alternative.',
          exStructure: '九千 + 二百 or 兩百 + 二十二',
          exSimplified: '九千二百二十二',
          exTraditional: '九千兩百二十二',
          exPinyin: 'jiǔ qiān èr bǎi or liǎng bǎi èrshí èr',
          exTranslation: '9,222'
        }
      ],
      notes: [
        'The use of 两/兩 (liǎng) before 百 and 千 is common in modern Mandarin.'
      ]
    },
    {
      subSection: 6,
      title: 'Zero as a Placeholder',
      explanation:
        '零 (líng) is used as a placeholder when the hundreds or tens place is empty, provided numbers exist before and after it.',
      examples: [
        {
          exNumber: 1,
          exExplanation:
            '零 marks the tens place when the hundreds and single digits are filled.',
          exStructure: 'Number + 零 + Tens + Units',
          exSimplified: '七千零六十六',
          exTraditional: '七千零六十六',
          exPinyin: 'qī qiān líng liùshí liù',
          exTranslation: '7,066'
        },
        {
          exNumber: 2,
          exExplanation:
            '零 marks the hundreds place when the thousands and units are filled.',
          exStructure: 'Number + 零 + Units',
          exSimplified: '九千一百零二',
          exTraditional: '九千一百零二',
          exPinyin: 'jiǔ qiān yī bǎi líng èr',
          exTranslation: '9,102'
        },
        {
          exNumber: 3,
          exExplanation:
            'When two consecutive places are empty, 零 is used only once.',
          exStructure: 'Number + 零 + Units',
          exSimplified: '六千零六',
          exTraditional: '六千零六',
          exPinyin: 'liù qiān líng liù',
          exTranslation: '6,006'
        }
      ],
      notes: [
        '零 (líng) is not repeated for consecutive empty places; it appears only once.'
      ]
    }
  ]
}