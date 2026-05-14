/** 日本語本文を想定したおおよその読了時間（分）。 */
export function estimateReadingMinutesFromBody(body: string | undefined): number {
  if (!body?.trim()) return 1;
  const stripped = body.replace(/```[\s\S]*?```/g, " ").replace(/\s+/g, " ").trim();
  return Math.max(1, Math.ceil(stripped.length / 420));
}

export function estimateReadingMinutesFromDescription(title: string, description: string): number {
  const text = `${title}\n${description}`;
  return Math.max(1, Math.ceil(text.length / 420));
}
