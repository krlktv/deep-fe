type Mods = Record<string, boolean | string>;

export const classNames = (
  mainClassName: string,
  mods: Mods,
  additionalClassNames: string[]
): string => {
  return [
    mainClassName,
    ...additionalClassNames,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
};
