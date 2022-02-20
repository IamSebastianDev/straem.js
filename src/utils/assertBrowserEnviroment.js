/** @format */

/**
 * Utility method to assert the given enviroment. Stræm will only work in a browser enviroment.
 * While node does implement a EventTarget interface, it does not work like the browser one.
 *
 * @returns { boolean } true / false depeding on the assert result
 */

export const assertBrowserEnviroment = () =>
  !(typeof process === "object" && String(process) === "[object process]");
