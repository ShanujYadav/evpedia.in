


export function slugify(value = "") {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}


export function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(date));
}

export function excerpt(text = "", limit = 120) {
  if (text.length <= limit) {
    return text;
  }

  return `${text.slice(0, limit).trim()}...`;
}

export function absoluteUrl(path = "") {
  const baseUrl = process.env.NEXT_PUBLIC_SI_URL;
  return new URL(path, baseUrl).toString();
}

export function getHmac() {
  return process.env.NEXT_HMAC_KEY;
  // var hmac = cryp.createHmac("sha256", hmacKey).update(pid).digest("hex")
  // return hmac.toString("base64")
}