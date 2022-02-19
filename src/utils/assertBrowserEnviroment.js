/** @format */

export const assertBrowserEnviroment = () =>
  !(typeof process === "object" && String(process) === "[object process]");
