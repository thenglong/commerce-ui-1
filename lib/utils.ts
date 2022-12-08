export const makeClassName = (names: unknown) => {
  if (typeof names === "string" || typeof names === "number") return "" + names;

  let out = "";
  if (Array.isArray(names)) {
    for (let i = 0, tmp; i < names.length; i++) {
      if ((tmp = makeClassName(names[i])) !== "") {
        out += (out && " ") + tmp;
      }
    }
  } else {
    for (const k in names as any) {
      if ((names as any)[k]) out += (out && " ") + k;
    }
  }

  return out;
};
