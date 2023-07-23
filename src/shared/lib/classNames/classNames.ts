type Mods = Record<string, boolean | string>;

export const classNames = (mainClassName: string, mods: Mods = {}, additionalClassNames: string[] = []): string => {
  return [
    mainClassName,
    ...additionalClassNames.filter(Boolean), // Filtering by a Boolean filter so that there are no undefainds
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
};
