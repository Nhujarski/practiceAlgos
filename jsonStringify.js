function stringify(obj) {
  if (obj === null) return null;

  if (typeof obj === 'string' || obj instanceof String) {
    return `"${obj}"`;
  }

  if (typeof obj === 'number') {
    return `${obj}`;
  }

  if (Array.isArray(obj)) {
    const parts = [];
    for (const val of obj) {
      parts.push(stringify(val));
    }
    return `[${parts.join(', ')}]`;
  }

  const parts = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      parts.push(`"${key}": ${stringify(obj[key])}`);
    }
  }
  return `{${parts.join(', ')}}`;
}
