export const makeClassName = (names: unknown) => {
  if (typeof names === "string" || typeof names === "number") return "" + names;

  let output = "";
  if (Array.isArray(names)) {
    for (let i = 0, tmp; i < names.length; i++) {
      if ((tmp = makeClassName(names[i])) !== "") {
        output += (output && " ") + tmp;
      }
    }
  } else {
    for (const k in names as any) {
      if ((names as any)[k]) output += (output && " ") + k;
    }
  }

  return output;
};
