export const arrayPtBr = [
  'É', 'S', 'Ã', 'O', 'U', 'M', 'A', 'T', 'R', 'Ê', 'S',
  'M', 'E', 'I', 'O', 'L', 'D', 'I', 'A', 'D', 'E', 'Z',
  'D', 'U', 'A', 'S', 'E', 'I', 'S', 'E', 'T', 'E', 'Y',
  'M', 'E', 'I', 'A', 'L', 'N', 'O', 'I', 'T', 'E', 'Z',
  'Q', 'U', 'A', 'T', 'R', 'O', 'H', 'N', 'O', 'V', 'E',
  'C', 'I', 'N', 'C', 'O', 'I', 'T', 'O', 'N', 'Z', 'E',
  'H', 'O', 'R', 'A', 'S', 'E', 'M', 'E', 'N', 'O', 'S',
  'V', 'I', 'N', 'T', 'E', 'C', 'A', 'M', 'E', 'I', 'A',
  'U', 'M', 'V', 'Q', 'U', 'I', 'N', 'Z', 'E', 'P', 'M',
  'D', 'E', 'Z', 'O', 'E', 'Y', 'C', 'I', 'N', 'C', 'O',
]

export const arrayEnUs = [
  'I', 'T', 'L', 'I', 'S', 'A', 'S', 'A', 'M', 'P', 'M',
  'A', 'C', 'Q', 'U', 'A', 'R', 'T', 'E', 'R', 'D', 'C',
  'T', 'W', 'E', 'N', 'T', 'Y', 'F', 'I', 'V', 'E', 'X',
  'H', 'A', 'L', 'F', 'S', 'T', 'E', 'N', 'F', 'T', 'O',
  'P', 'A', 'S', 'T', 'E', 'R', 'U', 'N', 'I', 'N', 'E',
  'O', 'N', 'E', 'S', 'I', 'X', 'T', 'H', 'R', 'E', 'E',
  'F', 'O', 'U', 'R', 'F', 'I', 'V', 'E', 'T', 'W', 'O',
  'E', 'I', 'G', 'H', 'T', 'E', 'L', 'E', 'V', 'E', 'N',
  'S', 'E', 'V', 'E', 'N', 'T', 'W', 'E', 'L', 'V', 'E',
  'T', 'E', 'N', 'S', 'E', "O'", 'C', 'L', 'O', 'C', 'K'
]

type OptHours = {
  0: number[],
  1: number[],
  2: number[],
  3: number[],
  4: number[],
  5: number[],
  6: number[],
  7: number[],
  8: number[],
  9: number[],
  10: number[],
  11: number[],
  12: number[],
}

const ptBrHours = {
  0: [33, 34, 35, 36, 38, 39, 40, 41, 42],
  1: [4, 5, 6],
  2: [22, 23, 24, 25],
  3: [7, 8, 9, 10],
  4: [44, 45, 46, 47, 48, 49],
  5: [55, 56, 57, 58, 59],
  6: [25, 26, 27, 28],
  7: [28, 29, 30, 31],
  8: [59, 60, 61, 62],
  9: [51, 52, 53, 54],
  10: [19, 20, 21],
  11: [62, 63, 64, 65],
  12: [11, 12, 13, 14, 16, 17, 18],
} as OptHours

const enUsHours = {
  0: [93, 94, 95, 96, 97, 98],
  1: [55, 56, 57],
  2: [74, 75, 76],
  3: [61, 62, 63, 64, 65],
  4: [66, 67, 68, 69],
  5: [70, 71, 72, 73],
  6: [58, 59, 60],
  7: [88, 89, 90, 91, 92],
  8: [77, 78, 79, 80, 81],
  9: [51, 52, 53, 54],
  10: [99, 100, 101],
  11: [82, 83, 84, 85, 86, 87],
  12: [93, 94, 95, 96, 97, 98],
} as OptHours

type OptMinutes = {
  itIsSingular: number[],
  itIsPlural: number[],
  hour: number[],
  hours: number[],
  and: number[],
  minus: number[],
  5: number[],
  10: number[],
  15: number[],
  20: number[],
  25: number[],
  30: number[],
}

const ptBrMinutes = {
  itIsSingular: [0],
  itIsPlural: [1, 2, 3],
  hour: [66, 67, 68, 69],
  hours: [66, 67, 68, 69, 70],
  and: [71],
  minus: [72, 73, 74, 75, 76],
  5: [105, 106, 107, 108, 109],
  10: [99, 100, 101],
  15: [91, 92, 93, 94, 95, 96],
  20: [77, 78, 79, 80, 81],
  25: [77, 78, 79, 80, 81, 103, 105, 106, 107, 108, 109],
  30: [84, 85, 86, 87]
} as OptMinutes

const enUsMinutes = {
  itIsSingular: [0, 1, 3, 4],
  itIsPlural: [0, 1, 3, 4],
  hour: [104, 105, 106, 107, 108, 109],
  hours: [104, 105, 106, 107, 108, 109],
  and: [44, 45, 46, 47],
  minus: [42, 43],
  5: [28, 29, 30, 31],
  10: [38, 39, 40],
  15: [11, 13, 14, 15, 16, 17, 18, 19],
  20: [22, 23, 24, 25, 26, 27],
  25: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  30: [33, 34, 35, 36]
} as OptMinutes

type PossibleHours = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
type PossibleMinutes = '0' | '5' | '10' | '15' | '20' | '25' | '30'

export function getHighLightedLetterArray(lang: string): number[] {
  const currentTime = new Date
  const highlight = [] as number[]


  let hoursRelation = {} as OptHours
  let minutesRelation = {} as OptMinutes

  if (lang === 'pt-BR') {
    hoursRelation = ptBrHours
    minutesRelation = ptBrMinutes
  } else {
    hoursRelation = enUsHours
    minutesRelation = enUsMinutes
  }

  let hours = currentTime.getHours()
  const minutes = currentTime.getMinutes()

  if (minutes >= 35) { ++hours }
  if (hours === 24) { hours = 0 }
  else if (hours > 12) { hours = hours - 12 }

  const currentHour = hours.toString() as PossibleHours
  let currentMinute = (minutes - (minutes % 5)).toString() as PossibleMinutes


  if (currentHour === '0' || currentHour === '1' || currentHour === '12') {
    highlight.push(...minutesRelation['itIsSingular'], ...hoursRelation[currentHour])
  } else {
    highlight.push(...minutesRelation['itIsPlural'], ...hoursRelation[currentHour])
  }

  if (currentMinute === '0') {
    switch (currentHour) {
      case '0':
      case '12': if (lang !== 'pt-BR') { highlight.push(...minutesRelation['hour']) }
        break;
      case '1': highlight.push(...minutesRelation['hour'])
        break;
      default: highlight.push(...minutesRelation['hours'])
        break;
    }
  } else if (parseInt(currentMinute) <= 30) {
    highlight.push(...minutesRelation['and'], ...minutesRelation[currentMinute])
  } else {
    currentMinute = (60 - parseInt(currentMinute)).toString() as '5' | '10' | '15'
    highlight.push(...minutesRelation['minus'], ...minutesRelation[currentMinute])
  }

  return highlight
}