const nonBreakingWords = [
  'a',
  'i',
  'o',
  'u',
  'v',
  's',
  'z',
  'k',
  'na',
  'do',
  'od',
  'po',
  've',
  'ze',
  'se',
  'ke',
  'ku',
  'za',
  'pro',
  'pod',
  'nad',
  'při',
  'přes',
  'bez',
  'dle',
  'díky',
  'vůči',
  'mezi',
  'skrz',
  'či',
  'že',
  'jak',
  'ale',
  'aby',
  'kdy',
  'kde',
  'kam',
  'zda',
  'než',
  'jen',
  'ani'
];

const orphanWordPattern = new RegExp(
  `(?<!\\S)(${nonBreakingWords.join('|')})\\s+`,
  'giu'
);

export function fixOrphans(node) {
  node.childNodes.forEach(child => {
    if (child.nodeType === Node.TEXT_NODE) {
      child.textContent = child.textContent
        .replace(orphanWordPattern, '$1\u00A0');
    } else {
      fixOrphans(child);
    }
  });
}
