export function fixOrphans(node) {
  node.childNodes.forEach(child => {
    if (child.nodeType === Node.TEXT_NODE) {
      child.textContent = child.textContent
        .replace(/\s([aiouvszkAIOUVSZK])\s/g, ' $1\u00A0');
    } else {
      fixOrphans(child);
    }
  });
}