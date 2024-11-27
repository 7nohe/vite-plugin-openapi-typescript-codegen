"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/picomatch/lib/constants.js
var require_constants = __commonJS({
  "node_modules/picomatch/lib/constants.js"(exports, module2) {
    "use strict";
    var path = require("path");
    var WIN_SLASH = "\\\\/";
    var WIN_NO_SLASH = `[^${WIN_SLASH}]`;
    var DOT_LITERAL = "\\.";
    var PLUS_LITERAL = "\\+";
    var QMARK_LITERAL = "\\?";
    var SLASH_LITERAL = "\\/";
    var ONE_CHAR = "(?=.)";
    var QMARK = "[^/]";
    var END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
    var START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
    var DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
    var NO_DOT = `(?!${DOT_LITERAL})`;
    var NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
    var NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
    var NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
    var QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
    var STAR = `${QMARK}*?`;
    var POSIX_CHARS = {
      DOT_LITERAL,
      PLUS_LITERAL,
      QMARK_LITERAL,
      SLASH_LITERAL,
      ONE_CHAR,
      QMARK,
      END_ANCHOR,
      DOTS_SLASH,
      NO_DOT,
      NO_DOTS,
      NO_DOT_SLASH,
      NO_DOTS_SLASH,
      QMARK_NO_DOT,
      STAR,
      START_ANCHOR
    };
    var WINDOWS_CHARS = __spreadProps(__spreadValues({}, POSIX_CHARS), {
      SLASH_LITERAL: `[${WIN_SLASH}]`,
      QMARK: WIN_NO_SLASH,
      STAR: `${WIN_NO_SLASH}*?`,
      DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
      NO_DOT: `(?!${DOT_LITERAL})`,
      NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
      NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
      START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
      END_ANCHOR: `(?:[${WIN_SLASH}]|$)`
    });
    var POSIX_REGEX_SOURCE = {
      alnum: "a-zA-Z0-9",
      alpha: "a-zA-Z",
      ascii: "\\x00-\\x7F",
      blank: " \\t",
      cntrl: "\\x00-\\x1F\\x7F",
      digit: "0-9",
      graph: "\\x21-\\x7E",
      lower: "a-z",
      print: "\\x20-\\x7E ",
      punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
      space: " \\t\\r\\n\\v\\f",
      upper: "A-Z",
      word: "A-Za-z0-9_",
      xdigit: "A-Fa-f0-9"
    };
    module2.exports = {
      MAX_LENGTH: 1024 * 64,
      POSIX_REGEX_SOURCE,
      // regular expressions
      REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
      REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
      REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
      REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
      REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
      REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
      // Replace globs with equivalent patterns to reduce parsing time.
      REPLACEMENTS: {
        "***": "*",
        "**/**": "**",
        "**/**/**": "**"
      },
      // Digits
      CHAR_0: 48,
      /* 0 */
      CHAR_9: 57,
      /* 9 */
      // Alphabet chars.
      CHAR_UPPERCASE_A: 65,
      /* A */
      CHAR_LOWERCASE_A: 97,
      /* a */
      CHAR_UPPERCASE_Z: 90,
      /* Z */
      CHAR_LOWERCASE_Z: 122,
      /* z */
      CHAR_LEFT_PARENTHESES: 40,
      /* ( */
      CHAR_RIGHT_PARENTHESES: 41,
      /* ) */
      CHAR_ASTERISK: 42,
      /* * */
      // Non-alphabetic chars.
      CHAR_AMPERSAND: 38,
      /* & */
      CHAR_AT: 64,
      /* @ */
      CHAR_BACKWARD_SLASH: 92,
      /* \ */
      CHAR_CARRIAGE_RETURN: 13,
      /* \r */
      CHAR_CIRCUMFLEX_ACCENT: 94,
      /* ^ */
      CHAR_COLON: 58,
      /* : */
      CHAR_COMMA: 44,
      /* , */
      CHAR_DOT: 46,
      /* . */
      CHAR_DOUBLE_QUOTE: 34,
      /* " */
      CHAR_EQUAL: 61,
      /* = */
      CHAR_EXCLAMATION_MARK: 33,
      /* ! */
      CHAR_FORM_FEED: 12,
      /* \f */
      CHAR_FORWARD_SLASH: 47,
      /* / */
      CHAR_GRAVE_ACCENT: 96,
      /* ` */
      CHAR_HASH: 35,
      /* # */
      CHAR_HYPHEN_MINUS: 45,
      /* - */
      CHAR_LEFT_ANGLE_BRACKET: 60,
      /* < */
      CHAR_LEFT_CURLY_BRACE: 123,
      /* { */
      CHAR_LEFT_SQUARE_BRACKET: 91,
      /* [ */
      CHAR_LINE_FEED: 10,
      /* \n */
      CHAR_NO_BREAK_SPACE: 160,
      /* \u00A0 */
      CHAR_PERCENT: 37,
      /* % */
      CHAR_PLUS: 43,
      /* + */
      CHAR_QUESTION_MARK: 63,
      /* ? */
      CHAR_RIGHT_ANGLE_BRACKET: 62,
      /* > */
      CHAR_RIGHT_CURLY_BRACE: 125,
      /* } */
      CHAR_RIGHT_SQUARE_BRACKET: 93,
      /* ] */
      CHAR_SEMICOLON: 59,
      /* ; */
      CHAR_SINGLE_QUOTE: 39,
      /* ' */
      CHAR_SPACE: 32,
      /*   */
      CHAR_TAB: 9,
      /* \t */
      CHAR_UNDERSCORE: 95,
      /* _ */
      CHAR_VERTICAL_LINE: 124,
      /* | */
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
      /* \uFEFF */
      SEP: path.sep,
      /**
       * Create EXTGLOB_CHARS
       */
      extglobChars(chars) {
        return {
          "!": { type: "negate", open: "(?:(?!(?:", close: `))${chars.STAR})` },
          "?": { type: "qmark", open: "(?:", close: ")?" },
          "+": { type: "plus", open: "(?:", close: ")+" },
          "*": { type: "star", open: "(?:", close: ")*" },
          "@": { type: "at", open: "(?:", close: ")" }
        };
      },
      /**
       * Create GLOB_CHARS
       */
      globChars(win32) {
        return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
      }
    };
  }
});

// node_modules/picomatch/lib/utils.js
var require_utils = __commonJS({
  "node_modules/picomatch/lib/utils.js"(exports) {
    "use strict";
    var path = require("path");
    var win32 = process.platform === "win32";
    var {
      REGEX_BACKSLASH,
      REGEX_REMOVE_BACKSLASH,
      REGEX_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_GLOBAL
    } = require_constants();
    exports.isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    exports.hasRegexChars = (str) => REGEX_SPECIAL_CHARS.test(str);
    exports.isRegexChar = (str) => str.length === 1 && exports.hasRegexChars(str);
    exports.escapeRegex = (str) => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
    exports.toPosixSlashes = (str) => str.replace(REGEX_BACKSLASH, "/");
    exports.removeBackslashes = (str) => {
      return str.replace(REGEX_REMOVE_BACKSLASH, (match) => {
        return match === "\\" ? "" : match;
      });
    };
    exports.supportsLookbehinds = () => {
      const segs = process.version.slice(1).split(".").map(Number);
      if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) {
        return true;
      }
      return false;
    };
    exports.isWindows = (options) => {
      if (options && typeof options.windows === "boolean") {
        return options.windows;
      }
      return win32 === true || path.sep === "\\";
    };
    exports.escapeLast = (input, char, lastIdx) => {
      const idx = input.lastIndexOf(char, lastIdx);
      if (idx === -1)
        return input;
      if (input[idx - 1] === "\\")
        return exports.escapeLast(input, char, idx - 1);
      return `${input.slice(0, idx)}\\${input.slice(idx)}`;
    };
    exports.removePrefix = (input, state = {}) => {
      let output = input;
      if (output.startsWith("./")) {
        output = output.slice(2);
        state.prefix = "./";
      }
      return output;
    };
    exports.wrapOutput = (input, state = {}, options = {}) => {
      const prepend = options.contains ? "" : "^";
      const append = options.contains ? "" : "$";
      let output = `${prepend}(?:${input})${append}`;
      if (state.negated === true) {
        output = `(?:^(?!${output}).*$)`;
      }
      return output;
    };
  }
});

// node_modules/picomatch/lib/scan.js
var require_scan = __commonJS({
  "node_modules/picomatch/lib/scan.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var {
      CHAR_ASTERISK,
      /* * */
      CHAR_AT,
      /* @ */
      CHAR_BACKWARD_SLASH,
      /* \ */
      CHAR_COMMA,
      /* , */
      CHAR_DOT,
      /* . */
      CHAR_EXCLAMATION_MARK,
      /* ! */
      CHAR_FORWARD_SLASH,
      /* / */
      CHAR_LEFT_CURLY_BRACE,
      /* { */
      CHAR_LEFT_PARENTHESES,
      /* ( */
      CHAR_LEFT_SQUARE_BRACKET,
      /* [ */
      CHAR_PLUS,
      /* + */
      CHAR_QUESTION_MARK,
      /* ? */
      CHAR_RIGHT_CURLY_BRACE,
      /* } */
      CHAR_RIGHT_PARENTHESES,
      /* ) */
      CHAR_RIGHT_SQUARE_BRACKET
      /* ] */
    } = require_constants();
    var isPathSeparator = (code) => {
      return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
    };
    var depth = (token) => {
      if (token.isPrefix !== true) {
        token.depth = token.isGlobstar ? Infinity : 1;
      }
    };
    var scan = (input, options) => {
      const opts = options || {};
      const length = input.length - 1;
      const scanToEnd = opts.parts === true || opts.scanToEnd === true;
      const slashes = [];
      const tokens = [];
      const parts = [];
      let str = input;
      let index = -1;
      let start = 0;
      let lastIndex = 0;
      let isBrace = false;
      let isBracket = false;
      let isGlob = false;
      let isExtglob = false;
      let isGlobstar = false;
      let braceEscaped = false;
      let backslashes = false;
      let negated = false;
      let negatedExtglob = false;
      let finished = false;
      let braces = 0;
      let prev;
      let code;
      let token = { value: "", depth: 0, isGlob: false };
      const eos = () => index >= length;
      const peek = () => str.charCodeAt(index + 1);
      const advance = () => {
        prev = code;
        return str.charCodeAt(++index);
      };
      while (index < length) {
        code = advance();
        let next;
        if (code === CHAR_BACKWARD_SLASH) {
          backslashes = token.backslashes = true;
          code = advance();
          if (code === CHAR_LEFT_CURLY_BRACE) {
            braceEscaped = true;
          }
          continue;
        }
        if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
          braces++;
          while (eos() !== true && (code = advance())) {
            if (code === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (code === CHAR_LEFT_CURLY_BRACE) {
              braces++;
              continue;
            }
            if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (braceEscaped !== true && code === CHAR_COMMA) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (code === CHAR_RIGHT_CURLY_BRACE) {
              braces--;
              if (braces === 0) {
                braceEscaped = false;
                isBrace = token.isBrace = true;
                finished = true;
                break;
              }
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_FORWARD_SLASH) {
          slashes.push(index);
          tokens.push(token);
          token = { value: "", depth: 0, isGlob: false };
          if (finished === true)
            continue;
          if (prev === CHAR_DOT && index === start + 1) {
            start += 2;
            continue;
          }
          lastIndex = index + 1;
          continue;
        }
        if (opts.noext !== true) {
          const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
          if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
            isGlob = token.isGlob = true;
            isExtglob = token.isExtglob = true;
            finished = true;
            if (code === CHAR_EXCLAMATION_MARK && index === start) {
              negatedExtglob = true;
            }
            if (scanToEnd === true) {
              while (eos() !== true && (code = advance())) {
                if (code === CHAR_BACKWARD_SLASH) {
                  backslashes = token.backslashes = true;
                  code = advance();
                  continue;
                }
                if (code === CHAR_RIGHT_PARENTHESES) {
                  isGlob = token.isGlob = true;
                  finished = true;
                  break;
                }
              }
              continue;
            }
            break;
          }
        }
        if (code === CHAR_ASTERISK) {
          if (prev === CHAR_ASTERISK)
            isGlobstar = token.isGlobstar = true;
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_QUESTION_MARK) {
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_LEFT_SQUARE_BRACKET) {
          while (eos() !== true && (next = advance())) {
            if (next === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              isBracket = token.isBracket = true;
              isGlob = token.isGlob = true;
              finished = true;
              break;
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
          negated = token.negated = true;
          start++;
          continue;
        }
        if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
          isGlob = token.isGlob = true;
          if (scanToEnd === true) {
            while (eos() !== true && (code = advance())) {
              if (code === CHAR_LEFT_PARENTHESES) {
                backslashes = token.backslashes = true;
                code = advance();
                continue;
              }
              if (code === CHAR_RIGHT_PARENTHESES) {
                finished = true;
                break;
              }
            }
            continue;
          }
          break;
        }
        if (isGlob === true) {
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
      }
      if (opts.noext === true) {
        isExtglob = false;
        isGlob = false;
      }
      let base = str;
      let prefix = "";
      let glob = "";
      if (start > 0) {
        prefix = str.slice(0, start);
        str = str.slice(start);
        lastIndex -= start;
      }
      if (base && isGlob === true && lastIndex > 0) {
        base = str.slice(0, lastIndex);
        glob = str.slice(lastIndex);
      } else if (isGlob === true) {
        base = "";
        glob = str;
      } else {
        base = str;
      }
      if (base && base !== "" && base !== "/" && base !== str) {
        if (isPathSeparator(base.charCodeAt(base.length - 1))) {
          base = base.slice(0, -1);
        }
      }
      if (opts.unescape === true) {
        if (glob)
          glob = utils.removeBackslashes(glob);
        if (base && backslashes === true) {
          base = utils.removeBackslashes(base);
        }
      }
      const state = {
        prefix,
        input,
        start,
        base,
        glob,
        isBrace,
        isBracket,
        isGlob,
        isExtglob,
        isGlobstar,
        negated,
        negatedExtglob
      };
      if (opts.tokens === true) {
        state.maxDepth = 0;
        if (!isPathSeparator(code)) {
          tokens.push(token);
        }
        state.tokens = tokens;
      }
      if (opts.parts === true || opts.tokens === true) {
        let prevIndex;
        for (let idx = 0; idx < slashes.length; idx++) {
          const n = prevIndex ? prevIndex + 1 : start;
          const i = slashes[idx];
          const value = input.slice(n, i);
          if (opts.tokens) {
            if (idx === 0 && start !== 0) {
              tokens[idx].isPrefix = true;
              tokens[idx].value = prefix;
            } else {
              tokens[idx].value = value;
            }
            depth(tokens[idx]);
            state.maxDepth += tokens[idx].depth;
          }
          if (idx !== 0 || value !== "") {
            parts.push(value);
          }
          prevIndex = i;
        }
        if (prevIndex && prevIndex + 1 < input.length) {
          const value = input.slice(prevIndex + 1);
          parts.push(value);
          if (opts.tokens) {
            tokens[tokens.length - 1].value = value;
            depth(tokens[tokens.length - 1]);
            state.maxDepth += tokens[tokens.length - 1].depth;
          }
        }
        state.slashes = slashes;
        state.parts = parts;
      }
      return state;
    };
    module2.exports = scan;
  }
});

// node_modules/picomatch/lib/parse.js
var require_parse = __commonJS({
  "node_modules/picomatch/lib/parse.js"(exports, module2) {
    "use strict";
    var constants = require_constants();
    var utils = require_utils();
    var {
      MAX_LENGTH,
      POSIX_REGEX_SOURCE,
      REGEX_NON_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_BACKREF,
      REPLACEMENTS
    } = constants;
    var expandRange = (args, options) => {
      if (typeof options.expandRange === "function") {
        return options.expandRange(...args, options);
      }
      args.sort();
      const value = `[${args.join("-")}]`;
      try {
        new RegExp(value);
      } catch (ex) {
        return args.map((v) => utils.escapeRegex(v)).join("..");
      }
      return value;
    };
    var syntaxError = (type, char) => {
      return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
    };
    var parse = (input, options) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      input = REPLACEMENTS[input] || input;
      const opts = __spreadValues({}, options);
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      let len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      const bos = { type: "bos", value: "", output: opts.prepend || "" };
      const tokens = [bos];
      const capture = opts.capture ? "" : "?:";
      const win32 = utils.isWindows(options);
      const PLATFORM_CHARS = constants.globChars(win32);
      const EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);
      const {
        DOT_LITERAL,
        PLUS_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOT_SLASH,
        NO_DOTS_SLASH,
        QMARK,
        QMARK_NO_DOT,
        STAR,
        START_ANCHOR
      } = PLATFORM_CHARS;
      const globstar = (opts2) => {
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const nodot = opts.dot ? "" : NO_DOT;
      const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
      let star = opts.bash === true ? globstar(opts) : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      if (typeof opts.noext === "boolean") {
        opts.noextglob = opts.noext;
      }
      const state = {
        input,
        index: -1,
        start: 0,
        dot: opts.dot === true,
        consumed: "",
        output: "",
        prefix: "",
        backtrack: false,
        negated: false,
        brackets: 0,
        braces: 0,
        parens: 0,
        quotes: 0,
        globstar: false,
        tokens
      };
      input = utils.removePrefix(input, state);
      len = input.length;
      const extglobs = [];
      const braces = [];
      const stack = [];
      let prev = bos;
      let value;
      const eos = () => state.index === len - 1;
      const peek = state.peek = (n = 1) => input[state.index + n];
      const advance = state.advance = () => input[++state.index] || "";
      const remaining = () => input.slice(state.index + 1);
      const consume = (value2 = "", num = 0) => {
        state.consumed += value2;
        state.index += num;
      };
      const append = (token) => {
        state.output += token.output != null ? token.output : token.value;
        consume(token.value);
      };
      const negate = () => {
        let count = 1;
        while (peek() === "!" && (peek(2) !== "(" || peek(3) === "?")) {
          advance();
          state.start++;
          count++;
        }
        if (count % 2 === 0) {
          return false;
        }
        state.negated = true;
        state.start++;
        return true;
      };
      const increment = (type) => {
        state[type]++;
        stack.push(type);
      };
      const decrement = (type) => {
        state[type]--;
        stack.pop();
      };
      const push = (tok) => {
        if (prev.type === "globstar") {
          const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
          const isExtglob = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
          if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob) {
            state.output = state.output.slice(0, -prev.output.length);
            prev.type = "star";
            prev.value = "*";
            prev.output = star;
            state.output += prev.output;
          }
        }
        if (extglobs.length && tok.type !== "paren") {
          extglobs[extglobs.length - 1].inner += tok.value;
        }
        if (tok.value || tok.output)
          append(tok);
        if (prev && prev.type === "text" && tok.type === "text") {
          prev.value += tok.value;
          prev.output = (prev.output || "") + tok.value;
          return;
        }
        tok.prev = prev;
        tokens.push(tok);
        prev = tok;
      };
      const extglobOpen = (type, value2) => {
        const token = __spreadProps(__spreadValues({}, EXTGLOB_CHARS[value2]), { conditions: 1, inner: "" });
        token.prev = prev;
        token.parens = state.parens;
        token.output = state.output;
        const output = (opts.capture ? "(" : "") + token.open;
        increment("parens");
        push({ type, value: value2, output: state.output ? "" : ONE_CHAR });
        push({ type: "paren", extglob: true, value: advance(), output });
        extglobs.push(token);
      };
      const extglobClose = (token) => {
        let output = token.close + (opts.capture ? ")" : "");
        let rest;
        if (token.type === "negate") {
          let extglobStar = star;
          if (token.inner && token.inner.length > 1 && token.inner.includes("/")) {
            extglobStar = globstar(opts);
          }
          if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
            output = token.close = `)$))${extglobStar}`;
          }
          if (token.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
            const expression = parse(rest, __spreadProps(__spreadValues({}, options), { fastpaths: false })).output;
            output = token.close = `)${expression})${extglobStar})`;
          }
          if (token.prev.type === "bos") {
            state.negatedExtglob = true;
          }
        }
        push({ type: "paren", extglob: true, value, output });
        decrement("parens");
      };
      if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
        let backslashes = false;
        let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
          if (first === "\\") {
            backslashes = true;
            return m;
          }
          if (first === "?") {
            if (esc) {
              return esc + first + (rest ? QMARK.repeat(rest.length) : "");
            }
            if (index === 0) {
              return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : "");
            }
            return QMARK.repeat(chars.length);
          }
          if (first === ".") {
            return DOT_LITERAL.repeat(chars.length);
          }
          if (first === "*") {
            if (esc) {
              return esc + first + (rest ? star : "");
            }
            return star;
          }
          return esc ? m : `\\${m}`;
        });
        if (backslashes === true) {
          if (opts.unescape === true) {
            output = output.replace(/\\/g, "");
          } else {
            output = output.replace(/\\+/g, (m) => {
              return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
            });
          }
        }
        if (output === input && opts.contains === true) {
          state.output = input;
          return state;
        }
        state.output = utils.wrapOutput(output, state, options);
        return state;
      }
      while (!eos()) {
        value = advance();
        if (value === "\0") {
          continue;
        }
        if (value === "\\") {
          const next = peek();
          if (next === "/" && opts.bash !== true) {
            continue;
          }
          if (next === "." || next === ";") {
            continue;
          }
          if (!next) {
            value += "\\";
            push({ type: "text", value });
            continue;
          }
          const match = /^\\+/.exec(remaining());
          let slashes = 0;
          if (match && match[0].length > 2) {
            slashes = match[0].length;
            state.index += slashes;
            if (slashes % 2 !== 0) {
              value += "\\";
            }
          }
          if (opts.unescape === true) {
            value = advance();
          } else {
            value += advance();
          }
          if (state.brackets === 0) {
            push({ type: "text", value });
            continue;
          }
        }
        if (state.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
          if (opts.posix !== false && value === ":") {
            const inner = prev.value.slice(1);
            if (inner.includes("[")) {
              prev.posix = true;
              if (inner.includes(":")) {
                const idx = prev.value.lastIndexOf("[");
                const pre = prev.value.slice(0, idx);
                const rest2 = prev.value.slice(idx + 2);
                const posix = POSIX_REGEX_SOURCE[rest2];
                if (posix) {
                  prev.value = pre + posix;
                  state.backtrack = true;
                  advance();
                  if (!bos.output && tokens.indexOf(prev) === 1) {
                    bos.output = ONE_CHAR;
                  }
                  continue;
                }
              }
            }
          }
          if (value === "[" && peek() !== ":" || value === "-" && peek() === "]") {
            value = `\\${value}`;
          }
          if (value === "]" && (prev.value === "[" || prev.value === "[^")) {
            value = `\\${value}`;
          }
          if (opts.posix === true && value === "!" && prev.value === "[") {
            value = "^";
          }
          prev.value += value;
          append({ value });
          continue;
        }
        if (state.quotes === 1 && value !== '"') {
          value = utils.escapeRegex(value);
          prev.value += value;
          append({ value });
          continue;
        }
        if (value === '"') {
          state.quotes = state.quotes === 1 ? 0 : 1;
          if (opts.keepQuotes === true) {
            push({ type: "text", value });
          }
          continue;
        }
        if (value === "(") {
          increment("parens");
          push({ type: "paren", value });
          continue;
        }
        if (value === ")") {
          if (state.parens === 0 && opts.strictBrackets === true) {
            throw new SyntaxError(syntaxError("opening", "("));
          }
          const extglob = extglobs[extglobs.length - 1];
          if (extglob && state.parens === extglob.parens + 1) {
            extglobClose(extglobs.pop());
            continue;
          }
          push({ type: "paren", value, output: state.parens ? ")" : "\\)" });
          decrement("parens");
          continue;
        }
        if (value === "[") {
          if (opts.nobracket === true || !remaining().includes("]")) {
            if (opts.nobracket !== true && opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("closing", "]"));
            }
            value = `\\${value}`;
          } else {
            increment("brackets");
          }
          push({ type: "bracket", value });
          continue;
        }
        if (value === "]") {
          if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          if (state.brackets === 0) {
            if (opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("opening", "["));
            }
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          decrement("brackets");
          const prevValue = prev.value.slice(1);
          if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
            value = `/${value}`;
          }
          prev.value += value;
          append({ value });
          if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) {
            continue;
          }
          const escaped = utils.escapeRegex(prev.value);
          state.output = state.output.slice(0, -prev.value.length);
          if (opts.literalBrackets === true) {
            state.output += escaped;
            prev.value = escaped;
            continue;
          }
          prev.value = `(${capture}${escaped}|${prev.value})`;
          state.output += prev.value;
          continue;
        }
        if (value === "{" && opts.nobrace !== true) {
          increment("braces");
          const open = {
            type: "brace",
            value,
            output: "(",
            outputIndex: state.output.length,
            tokensIndex: state.tokens.length
          };
          braces.push(open);
          push(open);
          continue;
        }
        if (value === "}") {
          const brace = braces[braces.length - 1];
          if (opts.nobrace === true || !brace) {
            push({ type: "text", value, output: value });
            continue;
          }
          let output = ")";
          if (brace.dots === true) {
            const arr = tokens.slice();
            const range = [];
            for (let i = arr.length - 1; i >= 0; i--) {
              tokens.pop();
              if (arr[i].type === "brace") {
                break;
              }
              if (arr[i].type !== "dots") {
                range.unshift(arr[i].value);
              }
            }
            output = expandRange(range, opts);
            state.backtrack = true;
          }
          if (brace.comma !== true && brace.dots !== true) {
            const out = state.output.slice(0, brace.outputIndex);
            const toks = state.tokens.slice(brace.tokensIndex);
            brace.value = brace.output = "\\{";
            value = output = "\\}";
            state.output = out;
            for (const t of toks) {
              state.output += t.output || t.value;
            }
          }
          push({ type: "brace", value, output });
          decrement("braces");
          braces.pop();
          continue;
        }
        if (value === "|") {
          if (extglobs.length > 0) {
            extglobs[extglobs.length - 1].conditions++;
          }
          push({ type: "text", value });
          continue;
        }
        if (value === ",") {
          let output = value;
          const brace = braces[braces.length - 1];
          if (brace && stack[stack.length - 1] === "braces") {
            brace.comma = true;
            output = "|";
          }
          push({ type: "comma", value, output });
          continue;
        }
        if (value === "/") {
          if (prev.type === "dot" && state.index === state.start + 1) {
            state.start = state.index + 1;
            state.consumed = "";
            state.output = "";
            tokens.pop();
            prev = bos;
            continue;
          }
          push({ type: "slash", value, output: SLASH_LITERAL });
          continue;
        }
        if (value === ".") {
          if (state.braces > 0 && prev.type === "dot") {
            if (prev.value === ".")
              prev.output = DOT_LITERAL;
            const brace = braces[braces.length - 1];
            prev.type = "dots";
            prev.output += value;
            prev.value += value;
            brace.dots = true;
            continue;
          }
          if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
            push({ type: "text", value, output: DOT_LITERAL });
            continue;
          }
          push({ type: "dot", value, output: DOT_LITERAL });
          continue;
        }
        if (value === "?") {
          const isGroup = prev && prev.value === "(";
          if (!isGroup && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("qmark", value);
            continue;
          }
          if (prev && prev.type === "paren") {
            const next = peek();
            let output = value;
            if (next === "<" && !utils.supportsLookbehinds()) {
              throw new Error("Node.js v10 or higher is required for regex lookbehinds");
            }
            if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) {
              output = `\\${value}`;
            }
            push({ type: "text", value, output });
            continue;
          }
          if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
            push({ type: "qmark", value, output: QMARK_NO_DOT });
            continue;
          }
          push({ type: "qmark", value, output: QMARK });
          continue;
        }
        if (value === "!") {
          if (opts.noextglob !== true && peek() === "(") {
            if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
              extglobOpen("negate", value);
              continue;
            }
          }
          if (opts.nonegate !== true && state.index === 0) {
            negate();
            continue;
          }
        }
        if (value === "+") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("plus", value);
            continue;
          }
          if (prev && prev.value === "(" || opts.regex === false) {
            push({ type: "plus", value, output: PLUS_LITERAL });
            continue;
          }
          if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
            push({ type: "plus", value });
            continue;
          }
          push({ type: "plus", value: PLUS_LITERAL });
          continue;
        }
        if (value === "@") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            push({ type: "at", extglob: true, value, output: "" });
            continue;
          }
          push({ type: "text", value });
          continue;
        }
        if (value !== "*") {
          if (value === "$" || value === "^") {
            value = `\\${value}`;
          }
          const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
          if (match) {
            value += match[0];
            state.index += match[0].length;
          }
          push({ type: "text", value });
          continue;
        }
        if (prev && (prev.type === "globstar" || prev.star === true)) {
          prev.type = "star";
          prev.star = true;
          prev.value += value;
          prev.output = star;
          state.backtrack = true;
          state.globstar = true;
          consume(value);
          continue;
        }
        let rest = remaining();
        if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
          extglobOpen("star", value);
          continue;
        }
        if (prev.type === "star") {
          if (opts.noglobstar === true) {
            consume(value);
            continue;
          }
          const prior = prev.prev;
          const before = prior.prev;
          const isStart = prior.type === "slash" || prior.type === "bos";
          const afterStar = before && (before.type === "star" || before.type === "globstar");
          if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
            push({ type: "star", value, output: "" });
            continue;
          }
          const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
          const isExtglob = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
          if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob) {
            push({ type: "star", value, output: "" });
            continue;
          }
          while (rest.slice(0, 3) === "/**") {
            const after = input[state.index + 4];
            if (after && after !== "/") {
              break;
            }
            rest = rest.slice(3);
            consume("/**", 3);
          }
          if (prior.type === "bos" && eos()) {
            prev.type = "globstar";
            prev.value += value;
            prev.output = globstar(opts);
            state.output = prev.output;
            state.globstar = true;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && eos()) {
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
            prev.value += value;
            state.globstar = true;
            state.output += prior.output + prev.output;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
            const end = rest[1] !== void 0 ? "|$" : "";
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
            prev.value += value;
            state.output += prior.output + prev.output;
            state.globstar = true;
            consume(value + advance());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          if (prior.type === "bos" && rest[0] === "/") {
            prev.type = "globstar";
            prev.value += value;
            prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
            state.output = prev.output;
            state.globstar = true;
            consume(value + advance());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          state.output = state.output.slice(0, -prev.output.length);
          prev.type = "globstar";
          prev.output = globstar(opts);
          prev.value += value;
          state.output += prev.output;
          state.globstar = true;
          consume(value);
          continue;
        }
        const token = { type: "star", value, output: star };
        if (opts.bash === true) {
          token.output = ".*?";
          if (prev.type === "bos" || prev.type === "slash") {
            token.output = nodot + token.output;
          }
          push(token);
          continue;
        }
        if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
          token.output = value;
          push(token);
          continue;
        }
        if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
          if (prev.type === "dot") {
            state.output += NO_DOT_SLASH;
            prev.output += NO_DOT_SLASH;
          } else if (opts.dot === true) {
            state.output += NO_DOTS_SLASH;
            prev.output += NO_DOTS_SLASH;
          } else {
            state.output += nodot;
            prev.output += nodot;
          }
          if (peek() !== "*") {
            state.output += ONE_CHAR;
            prev.output += ONE_CHAR;
          }
        }
        push(token);
      }
      while (state.brackets > 0) {
        if (opts.strictBrackets === true)
          throw new SyntaxError(syntaxError("closing", "]"));
        state.output = utils.escapeLast(state.output, "[");
        decrement("brackets");
      }
      while (state.parens > 0) {
        if (opts.strictBrackets === true)
          throw new SyntaxError(syntaxError("closing", ")"));
        state.output = utils.escapeLast(state.output, "(");
        decrement("parens");
      }
      while (state.braces > 0) {
        if (opts.strictBrackets === true)
          throw new SyntaxError(syntaxError("closing", "}"));
        state.output = utils.escapeLast(state.output, "{");
        decrement("braces");
      }
      if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
        push({ type: "maybe_slash", value: "", output: `${SLASH_LITERAL}?` });
      }
      if (state.backtrack === true) {
        state.output = "";
        for (const token of state.tokens) {
          state.output += token.output != null ? token.output : token.value;
          if (token.suffix) {
            state.output += token.suffix;
          }
        }
      }
      return state;
    };
    parse.fastpaths = (input, options) => {
      const opts = __spreadValues({}, options);
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      const len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      input = REPLACEMENTS[input] || input;
      const win32 = utils.isWindows(options);
      const {
        DOT_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOTS,
        NO_DOTS_SLASH,
        STAR,
        START_ANCHOR
      } = constants.globChars(win32);
      const nodot = opts.dot ? NO_DOTS : NO_DOT;
      const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
      const capture = opts.capture ? "" : "?:";
      const state = { negated: false, prefix: "" };
      let star = opts.bash === true ? ".*?" : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      const globstar = (opts2) => {
        if (opts2.noglobstar === true)
          return star;
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const create = (str) => {
        switch (str) {
          case "*":
            return `${nodot}${ONE_CHAR}${star}`;
          case ".*":
            return `${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*.*":
            return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*/*":
            return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;
          case "**":
            return nodot + globstar(opts);
          case "**/*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;
          case "**/*.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "**/.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;
          default: {
            const match = /^(.*?)\.(\w+)$/.exec(str);
            if (!match)
              return;
            const source2 = create(match[1]);
            if (!source2)
              return;
            return source2 + DOT_LITERAL + match[2];
          }
        }
      };
      const output = utils.removePrefix(input, state);
      let source = create(output);
      if (source && opts.strictSlashes !== true) {
        source += `${SLASH_LITERAL}?`;
      }
      return source;
    };
    module2.exports = parse;
  }
});

// node_modules/picomatch/lib/picomatch.js
var require_picomatch = __commonJS({
  "node_modules/picomatch/lib/picomatch.js"(exports, module2) {
    "use strict";
    var path = require("path");
    var scan = require_scan();
    var parse = require_parse();
    var utils = require_utils();
    var constants = require_constants();
    var isObject = (val) => val && typeof val === "object" && !Array.isArray(val);
    var picomatch = (glob, options, returnState = false) => {
      if (Array.isArray(glob)) {
        const fns = glob.map((input) => picomatch(input, options, returnState));
        const arrayMatcher = (str) => {
          for (const isMatch of fns) {
            const state2 = isMatch(str);
            if (state2)
              return state2;
          }
          return false;
        };
        return arrayMatcher;
      }
      const isState = isObject(glob) && glob.tokens && glob.input;
      if (glob === "" || typeof glob !== "string" && !isState) {
        throw new TypeError("Expected pattern to be a non-empty string");
      }
      const opts = options || {};
      const posix = utils.isWindows(options);
      const regex = isState ? picomatch.compileRe(glob, options) : picomatch.makeRe(glob, options, false, true);
      const state = regex.state;
      delete regex.state;
      let isIgnored = () => false;
      if (opts.ignore) {
        const ignoreOpts = __spreadProps(__spreadValues({}, options), { ignore: null, onMatch: null, onResult: null });
        isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
      }
      const matcher = (input, returnObject = false) => {
        const { isMatch, match, output } = picomatch.test(input, regex, options, { glob, posix });
        const result = { glob, state, regex, posix, input, output, match, isMatch };
        if (typeof opts.onResult === "function") {
          opts.onResult(result);
        }
        if (isMatch === false) {
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (isIgnored(input)) {
          if (typeof opts.onIgnore === "function") {
            opts.onIgnore(result);
          }
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (typeof opts.onMatch === "function") {
          opts.onMatch(result);
        }
        return returnObject ? result : true;
      };
      if (returnState) {
        matcher.state = state;
      }
      return matcher;
    };
    picomatch.test = (input, regex, options, { glob, posix } = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected input to be a string");
      }
      if (input === "") {
        return { isMatch: false, output: "" };
      }
      const opts = options || {};
      const format3 = opts.format || (posix ? utils.toPosixSlashes : null);
      let match = input === glob;
      let output = match && format3 ? format3(input) : input;
      if (match === false) {
        output = format3 ? format3(input) : input;
        match = output === glob;
      }
      if (match === false || opts.capture === true) {
        if (opts.matchBase === true || opts.basename === true) {
          match = picomatch.matchBase(input, regex, options, posix);
        } else {
          match = regex.exec(output);
        }
      }
      return { isMatch: Boolean(match), match, output };
    };
    picomatch.matchBase = (input, glob, options, posix = utils.isWindows(options)) => {
      const regex = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options);
      return regex.test(path.basename(input));
    };
    picomatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
    picomatch.parse = (pattern, options) => {
      if (Array.isArray(pattern))
        return pattern.map((p) => picomatch.parse(p, options));
      return parse(pattern, __spreadProps(__spreadValues({}, options), { fastpaths: false }));
    };
    picomatch.scan = (input, options) => scan(input, options);
    picomatch.compileRe = (state, options, returnOutput = false, returnState = false) => {
      if (returnOutput === true) {
        return state.output;
      }
      const opts = options || {};
      const prepend = opts.contains ? "" : "^";
      const append = opts.contains ? "" : "$";
      let source = `${prepend}(?:${state.output})${append}`;
      if (state && state.negated === true) {
        source = `^(?!${source}).*$`;
      }
      const regex = picomatch.toRegex(source, options);
      if (returnState === true) {
        regex.state = state;
      }
      return regex;
    };
    picomatch.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
      if (!input || typeof input !== "string") {
        throw new TypeError("Expected a non-empty string");
      }
      let parsed = { negated: false, fastpaths: true };
      if (options.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
        parsed.output = parse.fastpaths(input, options);
      }
      if (!parsed.output) {
        parsed = parse(input, options);
      }
      return picomatch.compileRe(parsed, options, returnOutput, returnState);
    };
    picomatch.toRegex = (source, options) => {
      try {
        const opts = options || {};
        return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
      } catch (err) {
        if (options && options.debug === true)
          throw err;
        return /$^/;
      }
    };
    picomatch.constants = constants;
    module2.exports = picomatch;
  }
});

// node_modules/picomatch/index.js
var require_picomatch2 = __commonJS({
  "node_modules/picomatch/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_picomatch();
  }
});

// node_modules/readdirp/index.js
var require_readdirp = __commonJS({
  "node_modules/readdirp/index.js"(exports, module2) {
    "use strict";
    var fs = require("fs");
    var { Readable } = require("stream");
    var sysPath = require("path");
    var { promisify } = require("util");
    var picomatch = require_picomatch2();
    var readdir = promisify(fs.readdir);
    var stat = promisify(fs.stat);
    var lstat = promisify(fs.lstat);
    var realpath = promisify(fs.realpath);
    var BANG = "!";
    var RECURSIVE_ERROR_CODE = "READDIRP_RECURSIVE_ERROR";
    var NORMAL_FLOW_ERRORS = /* @__PURE__ */ new Set(["ENOENT", "EPERM", "EACCES", "ELOOP", RECURSIVE_ERROR_CODE]);
    var FILE_TYPE = "files";
    var DIR_TYPE = "directories";
    var FILE_DIR_TYPE = "files_directories";
    var EVERYTHING_TYPE = "all";
    var ALL_TYPES = [FILE_TYPE, DIR_TYPE, FILE_DIR_TYPE, EVERYTHING_TYPE];
    var isNormalFlowError = (error) => NORMAL_FLOW_ERRORS.has(error.code);
    var [maj, min] = process.versions.node.split(".").slice(0, 2).map((n) => Number.parseInt(n, 10));
    var wantBigintFsStats = process.platform === "win32" && (maj > 10 || maj === 10 && min >= 5);
    var normalizeFilter = (filter) => {
      if (filter === void 0)
        return;
      if (typeof filter === "function")
        return filter;
      if (typeof filter === "string") {
        const glob = picomatch(filter.trim());
        return (entry) => glob(entry.basename);
      }
      if (Array.isArray(filter)) {
        const positive = [];
        const negative = [];
        for (const item of filter) {
          const trimmed = item.trim();
          if (trimmed.charAt(0) === BANG) {
            negative.push(picomatch(trimmed.slice(1)));
          } else {
            positive.push(picomatch(trimmed));
          }
        }
        if (negative.length > 0) {
          if (positive.length > 0) {
            return (entry) => positive.some((f) => f(entry.basename)) && !negative.some((f) => f(entry.basename));
          }
          return (entry) => !negative.some((f) => f(entry.basename));
        }
        return (entry) => positive.some((f) => f(entry.basename));
      }
    };
    var ReaddirpStream = class extends Readable {
      static get defaultOptions() {
        return {
          root: ".",
          /* eslint-disable no-unused-vars */
          fileFilter: (path) => true,
          directoryFilter: (path) => true,
          /* eslint-enable no-unused-vars */
          type: FILE_TYPE,
          lstat: false,
          depth: 2147483648,
          alwaysStat: false
        };
      }
      constructor(options = {}) {
        super({
          objectMode: true,
          autoDestroy: true,
          highWaterMark: options.highWaterMark || 4096
        });
        const opts = __spreadValues(__spreadValues({}, ReaddirpStream.defaultOptions), options);
        const { root, type } = opts;
        this._fileFilter = normalizeFilter(opts.fileFilter);
        this._directoryFilter = normalizeFilter(opts.directoryFilter);
        const statMethod = opts.lstat ? lstat : stat;
        if (wantBigintFsStats) {
          this._stat = (path) => statMethod(path, { bigint: true });
        } else {
          this._stat = statMethod;
        }
        this._maxDepth = opts.depth;
        this._wantsDir = [DIR_TYPE, FILE_DIR_TYPE, EVERYTHING_TYPE].includes(type);
        this._wantsFile = [FILE_TYPE, FILE_DIR_TYPE, EVERYTHING_TYPE].includes(type);
        this._wantsEverything = type === EVERYTHING_TYPE;
        this._root = sysPath.resolve(root);
        this._isDirent = "Dirent" in fs && !opts.alwaysStat;
        this._statsProp = this._isDirent ? "dirent" : "stats";
        this._rdOptions = { encoding: "utf8", withFileTypes: this._isDirent };
        this.parents = [this._exploreDir(root, 1)];
        this.reading = false;
        this.parent = void 0;
      }
      async _read(batch) {
        if (this.reading)
          return;
        this.reading = true;
        try {
          while (!this.destroyed && batch > 0) {
            const { path, depth, files = [] } = this.parent || {};
            if (files.length > 0) {
              const slice = files.splice(0, batch).map((dirent) => this._formatEntry(dirent, path));
              for (const entry of await Promise.all(slice)) {
                if (this.destroyed)
                  return;
                const entryType = await this._getEntryType(entry);
                if (entryType === "directory" && this._directoryFilter(entry)) {
                  if (depth <= this._maxDepth) {
                    this.parents.push(this._exploreDir(entry.fullPath, depth + 1));
                  }
                  if (this._wantsDir) {
                    this.push(entry);
                    batch--;
                  }
                } else if ((entryType === "file" || this._includeAsFile(entry)) && this._fileFilter(entry)) {
                  if (this._wantsFile) {
                    this.push(entry);
                    batch--;
                  }
                }
              }
            } else {
              const parent = this.parents.pop();
              if (!parent) {
                this.push(null);
                break;
              }
              this.parent = await parent;
              if (this.destroyed)
                return;
            }
          }
        } catch (error) {
          this.destroy(error);
        } finally {
          this.reading = false;
        }
      }
      async _exploreDir(path, depth) {
        let files;
        try {
          files = await readdir(path, this._rdOptions);
        } catch (error) {
          this._onError(error);
        }
        return { files, depth, path };
      }
      async _formatEntry(dirent, path) {
        let entry;
        try {
          const basename = this._isDirent ? dirent.name : dirent;
          const fullPath = sysPath.resolve(sysPath.join(path, basename));
          entry = { path: sysPath.relative(this._root, fullPath), fullPath, basename };
          entry[this._statsProp] = this._isDirent ? dirent : await this._stat(fullPath);
        } catch (err) {
          this._onError(err);
        }
        return entry;
      }
      _onError(err) {
        if (isNormalFlowError(err) && !this.destroyed) {
          this.emit("warn", err);
        } else {
          this.destroy(err);
        }
      }
      async _getEntryType(entry) {
        const stats = entry && entry[this._statsProp];
        if (!stats) {
          return;
        }
        if (stats.isFile()) {
          return "file";
        }
        if (stats.isDirectory()) {
          return "directory";
        }
        if (stats && stats.isSymbolicLink()) {
          const full = entry.fullPath;
          try {
            const entryRealPath = await realpath(full);
            const entryRealPathStats = await lstat(entryRealPath);
            if (entryRealPathStats.isFile()) {
              return "file";
            }
            if (entryRealPathStats.isDirectory()) {
              const len = entryRealPath.length;
              if (full.startsWith(entryRealPath) && full.substr(len, 1) === sysPath.sep) {
                const recursiveError = new Error(
                  `Circular symlink detected: "${full}" points to "${entryRealPath}"`
                );
                recursiveError.code = RECURSIVE_ERROR_CODE;
                return this._onError(recursiveError);
              }
              return "directory";
            }
          } catch (error) {
            this._onError(error);
          }
        }
      }
      _includeAsFile(entry) {
        const stats = entry && entry[this._statsProp];
        return stats && this._wantsEverything && !stats.isDirectory();
      }
    };
    var readdirp = (root, options = {}) => {
      let type = options.entryType || options.type;
      if (type === "both")
        type = FILE_DIR_TYPE;
      if (type)
        options.type = type;
      if (!root) {
        throw new Error("readdirp: root argument is required. Usage: readdirp(root, options)");
      } else if (typeof root !== "string") {
        throw new TypeError("readdirp: root argument must be a string. Usage: readdirp(root, options)");
      } else if (type && !ALL_TYPES.includes(type)) {
        throw new Error(`readdirp: Invalid type passed. Use one of ${ALL_TYPES.join(", ")}`);
      }
      options.root = root;
      return new ReaddirpStream(options);
    };
    var readdirpPromise = (root, options = {}) => {
      return new Promise((resolve, reject) => {
        const files = [];
        readdirp(root, options).on("data", (entry) => files.push(entry)).on("end", () => resolve(files)).on("error", (error) => reject(error));
      });
    };
    readdirp.promise = readdirpPromise;
    readdirp.ReaddirpStream = ReaddirpStream;
    readdirp.default = readdirp;
    module2.exports = readdirp;
  }
});

// node_modules/normalize-path/index.js
var require_normalize_path = __commonJS({
  "node_modules/normalize-path/index.js"(exports, module2) {
    module2.exports = function(path, stripTrailing) {
      if (typeof path !== "string") {
        throw new TypeError("expected path to be a string");
      }
      if (path === "\\" || path === "/")
        return "/";
      var len = path.length;
      if (len <= 1)
        return path;
      var prefix = "";
      if (len > 4 && path[3] === "\\") {
        var ch = path[2];
        if ((ch === "?" || ch === ".") && path.slice(0, 2) === "\\\\") {
          path = path.slice(2);
          prefix = "//";
        }
      }
      var segs = path.split(/[/\\]+/);
      if (stripTrailing !== false && segs[segs.length - 1] === "") {
        segs.pop();
      }
      return prefix + segs.join("/");
    };
  }
});

// node_modules/anymatch/index.js
var require_anymatch = __commonJS({
  "node_modules/anymatch/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var picomatch = require_picomatch2();
    var normalizePath = require_normalize_path();
    var BANG = "!";
    var DEFAULT_OPTIONS = { returnIndex: false };
    var arrify = (item) => Array.isArray(item) ? item : [item];
    var createPattern = (matcher, options) => {
      if (typeof matcher === "function") {
        return matcher;
      }
      if (typeof matcher === "string") {
        const glob = picomatch(matcher, options);
        return (string) => matcher === string || glob(string);
      }
      if (matcher instanceof RegExp) {
        return (string) => matcher.test(string);
      }
      return (string) => false;
    };
    var matchPatterns = (patterns, negPatterns, args, returnIndex) => {
      const isList = Array.isArray(args);
      const _path = isList ? args[0] : args;
      if (!isList && typeof _path !== "string") {
        throw new TypeError("anymatch: second argument must be a string: got " + Object.prototype.toString.call(_path));
      }
      const path = normalizePath(_path, false);
      for (let index = 0; index < negPatterns.length; index++) {
        const nglob = negPatterns[index];
        if (nglob(path)) {
          return returnIndex ? -1 : false;
        }
      }
      const applied = isList && [path].concat(args.slice(1));
      for (let index = 0; index < patterns.length; index++) {
        const pattern = patterns[index];
        if (isList ? pattern(...applied) : pattern(path)) {
          return returnIndex ? index : true;
        }
      }
      return returnIndex ? -1 : false;
    };
    var anymatch = (matchers, testString, options = DEFAULT_OPTIONS) => {
      if (matchers == null) {
        throw new TypeError("anymatch: specify first argument");
      }
      const opts = typeof options === "boolean" ? { returnIndex: options } : options;
      const returnIndex = opts.returnIndex || false;
      const mtchers = arrify(matchers);
      const negatedGlobs = mtchers.filter((item) => typeof item === "string" && item.charAt(0) === BANG).map((item) => item.slice(1)).map((item) => picomatch(item, opts));
      const patterns = mtchers.filter((item) => typeof item !== "string" || typeof item === "string" && item.charAt(0) !== BANG).map((matcher) => createPattern(matcher, opts));
      if (testString == null) {
        return (testString2, ri = false) => {
          const returnIndex2 = typeof ri === "boolean" ? ri : false;
          return matchPatterns(patterns, negatedGlobs, testString2, returnIndex2);
        };
      }
      return matchPatterns(patterns, negatedGlobs, testString, returnIndex);
    };
    anymatch.default = anymatch;
    module2.exports = anymatch;
  }
});

// node_modules/is-extglob/index.js
var require_is_extglob = __commonJS({
  "node_modules/is-extglob/index.js"(exports, module2) {
    module2.exports = function isExtglob(str) {
      if (typeof str !== "string" || str === "") {
        return false;
      }
      var match;
      while (match = /(\\).|([@?!+*]\(.*\))/g.exec(str)) {
        if (match[2])
          return true;
        str = str.slice(match.index + match[0].length);
      }
      return false;
    };
  }
});

// node_modules/is-glob/index.js
var require_is_glob = __commonJS({
  "node_modules/is-glob/index.js"(exports, module2) {
    var isExtglob = require_is_extglob();
    var chars = { "{": "}", "(": ")", "[": "]" };
    var strictCheck = function(str) {
      if (str[0] === "!") {
        return true;
      }
      var index = 0;
      var pipeIndex = -2;
      var closeSquareIndex = -2;
      var closeCurlyIndex = -2;
      var closeParenIndex = -2;
      var backSlashIndex = -2;
      while (index < str.length) {
        if (str[index] === "*") {
          return true;
        }
        if (str[index + 1] === "?" && /[\].+)]/.test(str[index])) {
          return true;
        }
        if (closeSquareIndex !== -1 && str[index] === "[" && str[index + 1] !== "]") {
          if (closeSquareIndex < index) {
            closeSquareIndex = str.indexOf("]", index);
          }
          if (closeSquareIndex > index) {
            if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
              return true;
            }
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
              return true;
            }
          }
        }
        if (closeCurlyIndex !== -1 && str[index] === "{" && str[index + 1] !== "}") {
          closeCurlyIndex = str.indexOf("}", index);
          if (closeCurlyIndex > index) {
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeCurlyIndex) {
              return true;
            }
          }
        }
        if (closeParenIndex !== -1 && str[index] === "(" && str[index + 1] === "?" && /[:!=]/.test(str[index + 2]) && str[index + 3] !== ")") {
          closeParenIndex = str.indexOf(")", index);
          if (closeParenIndex > index) {
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
              return true;
            }
          }
        }
        if (pipeIndex !== -1 && str[index] === "(" && str[index + 1] !== "|") {
          if (pipeIndex < index) {
            pipeIndex = str.indexOf("|", index);
          }
          if (pipeIndex !== -1 && str[pipeIndex + 1] !== ")") {
            closeParenIndex = str.indexOf(")", pipeIndex);
            if (closeParenIndex > pipeIndex) {
              backSlashIndex = str.indexOf("\\", pipeIndex);
              if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
                return true;
              }
            }
          }
        }
        if (str[index] === "\\") {
          var open = str[index + 1];
          index += 2;
          var close = chars[open];
          if (close) {
            var n = str.indexOf(close, index);
            if (n !== -1) {
              index = n + 1;
            }
          }
          if (str[index] === "!") {
            return true;
          }
        } else {
          index++;
        }
      }
      return false;
    };
    var relaxedCheck = function(str) {
      if (str[0] === "!") {
        return true;
      }
      var index = 0;
      while (index < str.length) {
        if (/[*?{}()[\]]/.test(str[index])) {
          return true;
        }
        if (str[index] === "\\") {
          var open = str[index + 1];
          index += 2;
          var close = chars[open];
          if (close) {
            var n = str.indexOf(close, index);
            if (n !== -1) {
              index = n + 1;
            }
          }
          if (str[index] === "!") {
            return true;
          }
        } else {
          index++;
        }
      }
      return false;
    };
    module2.exports = function isGlob(str, options) {
      if (typeof str !== "string" || str === "") {
        return false;
      }
      if (isExtglob(str)) {
        return true;
      }
      var check = strictCheck;
      if (options && options.strict === false) {
        check = relaxedCheck;
      }
      return check(str);
    };
  }
});

// node_modules/glob-parent/index.js
var require_glob_parent = __commonJS({
  "node_modules/glob-parent/index.js"(exports, module2) {
    "use strict";
    var isGlob = require_is_glob();
    var pathPosixDirname = require("path").posix.dirname;
    var isWin32 = require("os").platform() === "win32";
    var slash = "/";
    var backslash = /\\/g;
    var enclosure = /[\{\[].*[\}\]]$/;
    var globby = /(^|[^\\])([\{\[]|\([^\)]+$)/;
    var escaped = /\\([\!\*\?\|\[\]\(\)\{\}])/g;
    module2.exports = function globParent(str, opts) {
      var options = Object.assign({ flipBackslashes: true }, opts);
      if (options.flipBackslashes && isWin32 && str.indexOf(slash) < 0) {
        str = str.replace(backslash, slash);
      }
      if (enclosure.test(str)) {
        str += slash;
      }
      str += "a";
      do {
        str = pathPosixDirname(str);
      } while (isGlob(str) || globby.test(str));
      return str.replace(escaped, "$1");
    };
  }
});

// node_modules/braces/lib/utils.js
var require_utils2 = __commonJS({
  "node_modules/braces/lib/utils.js"(exports) {
    "use strict";
    exports.isInteger = (num) => {
      if (typeof num === "number") {
        return Number.isInteger(num);
      }
      if (typeof num === "string" && num.trim() !== "") {
        return Number.isInteger(Number(num));
      }
      return false;
    };
    exports.find = (node, type) => node.nodes.find((node2) => node2.type === type);
    exports.exceedsLimit = (min, max, step = 1, limit) => {
      if (limit === false)
        return false;
      if (!exports.isInteger(min) || !exports.isInteger(max))
        return false;
      return (Number(max) - Number(min)) / Number(step) >= limit;
    };
    exports.escapeNode = (block, n = 0, type) => {
      const node = block.nodes[n];
      if (!node)
        return;
      if (type && node.type === type || node.type === "open" || node.type === "close") {
        if (node.escaped !== true) {
          node.value = "\\" + node.value;
          node.escaped = true;
        }
      }
    };
    exports.encloseBrace = (node) => {
      if (node.type !== "brace")
        return false;
      if (node.commas >> 0 + node.ranges >> 0 === 0) {
        node.invalid = true;
        return true;
      }
      return false;
    };
    exports.isInvalidBrace = (block) => {
      if (block.type !== "brace")
        return false;
      if (block.invalid === true || block.dollar)
        return true;
      if (block.commas >> 0 + block.ranges >> 0 === 0) {
        block.invalid = true;
        return true;
      }
      if (block.open !== true || block.close !== true) {
        block.invalid = true;
        return true;
      }
      return false;
    };
    exports.isOpenOrClose = (node) => {
      if (node.type === "open" || node.type === "close") {
        return true;
      }
      return node.open === true || node.close === true;
    };
    exports.reduce = (nodes) => nodes.reduce((acc, node) => {
      if (node.type === "text")
        acc.push(node.value);
      if (node.type === "range")
        node.type = "text";
      return acc;
    }, []);
    exports.flatten = (...args) => {
      const result = [];
      const flat = (arr) => {
        for (let i = 0; i < arr.length; i++) {
          const ele = arr[i];
          if (Array.isArray(ele)) {
            flat(ele);
            continue;
          }
          if (ele !== void 0) {
            result.push(ele);
          }
        }
        return result;
      };
      flat(args);
      return result;
    };
  }
});

// node_modules/braces/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/braces/lib/stringify.js"(exports, module2) {
    "use strict";
    var utils = require_utils2();
    module2.exports = (ast, options = {}) => {
      const stringify = (node, parent = {}) => {
        const invalidBlock = options.escapeInvalid && utils.isInvalidBrace(parent);
        const invalidNode = node.invalid === true && options.escapeInvalid === true;
        let output = "";
        if (node.value) {
          if ((invalidBlock || invalidNode) && utils.isOpenOrClose(node)) {
            return "\\" + node.value;
          }
          return node.value;
        }
        if (node.value) {
          return node.value;
        }
        if (node.nodes) {
          for (const child of node.nodes) {
            output += stringify(child);
          }
        }
        return output;
      };
      return stringify(ast);
    };
  }
});

// node_modules/is-number/index.js
var require_is_number = __commonJS({
  "node_modules/is-number/index.js"(exports, module2) {
    "use strict";
    module2.exports = function(num) {
      if (typeof num === "number") {
        return num - num === 0;
      }
      if (typeof num === "string" && num.trim() !== "") {
        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
      }
      return false;
    };
  }
});

// node_modules/to-regex-range/index.js
var require_to_regex_range = __commonJS({
  "node_modules/to-regex-range/index.js"(exports, module2) {
    "use strict";
    var isNumber = require_is_number();
    var toRegexRange = (min, max, options) => {
      if (isNumber(min) === false) {
        throw new TypeError("toRegexRange: expected the first argument to be a number");
      }
      if (max === void 0 || min === max) {
        return String(min);
      }
      if (isNumber(max) === false) {
        throw new TypeError("toRegexRange: expected the second argument to be a number.");
      }
      let opts = __spreadValues({ relaxZeros: true }, options);
      if (typeof opts.strictZeros === "boolean") {
        opts.relaxZeros = opts.strictZeros === false;
      }
      let relax = String(opts.relaxZeros);
      let shorthand = String(opts.shorthand);
      let capture = String(opts.capture);
      let wrap = String(opts.wrap);
      let cacheKey = min + ":" + max + "=" + relax + shorthand + capture + wrap;
      if (toRegexRange.cache.hasOwnProperty(cacheKey)) {
        return toRegexRange.cache[cacheKey].result;
      }
      let a = Math.min(min, max);
      let b = Math.max(min, max);
      if (Math.abs(a - b) === 1) {
        let result = min + "|" + max;
        if (opts.capture) {
          return `(${result})`;
        }
        if (opts.wrap === false) {
          return result;
        }
        return `(?:${result})`;
      }
      let isPadded = hasPadding(min) || hasPadding(max);
      let state = { min, max, a, b };
      let positives = [];
      let negatives = [];
      if (isPadded) {
        state.isPadded = isPadded;
        state.maxLen = String(state.max).length;
      }
      if (a < 0) {
        let newMin = b < 0 ? Math.abs(b) : 1;
        negatives = splitToPatterns(newMin, Math.abs(a), state, opts);
        a = state.a = 0;
      }
      if (b >= 0) {
        positives = splitToPatterns(a, b, state, opts);
      }
      state.negatives = negatives;
      state.positives = positives;
      state.result = collatePatterns(negatives, positives, opts);
      if (opts.capture === true) {
        state.result = `(${state.result})`;
      } else if (opts.wrap !== false && positives.length + negatives.length > 1) {
        state.result = `(?:${state.result})`;
      }
      toRegexRange.cache[cacheKey] = state;
      return state.result;
    };
    function collatePatterns(neg, pos, options) {
      let onlyNegative = filterPatterns(neg, pos, "-", false, options) || [];
      let onlyPositive = filterPatterns(pos, neg, "", false, options) || [];
      let intersected = filterPatterns(neg, pos, "-?", true, options) || [];
      let subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
      return subpatterns.join("|");
    }
    function splitToRanges(min, max) {
      let nines = 1;
      let zeros = 1;
      let stop = countNines(min, nines);
      let stops = /* @__PURE__ */ new Set([max]);
      while (min <= stop && stop <= max) {
        stops.add(stop);
        nines += 1;
        stop = countNines(min, nines);
      }
      stop = countZeros(max + 1, zeros) - 1;
      while (min < stop && stop <= max) {
        stops.add(stop);
        zeros += 1;
        stop = countZeros(max + 1, zeros) - 1;
      }
      stops = [...stops];
      stops.sort(compare);
      return stops;
    }
    function rangeToPattern(start, stop, options) {
      if (start === stop) {
        return { pattern: start, count: [], digits: 0 };
      }
      let zipped = zip(start, stop);
      let digits = zipped.length;
      let pattern = "";
      let count = 0;
      for (let i = 0; i < digits; i++) {
        let [startDigit, stopDigit] = zipped[i];
        if (startDigit === stopDigit) {
          pattern += startDigit;
        } else if (startDigit !== "0" || stopDigit !== "9") {
          pattern += toCharacterClass(startDigit, stopDigit, options);
        } else {
          count++;
        }
      }
      if (count) {
        pattern += options.shorthand === true ? "\\d" : "[0-9]";
      }
      return { pattern, count: [count], digits };
    }
    function splitToPatterns(min, max, tok, options) {
      let ranges = splitToRanges(min, max);
      let tokens = [];
      let start = min;
      let prev;
      for (let i = 0; i < ranges.length; i++) {
        let max2 = ranges[i];
        let obj = rangeToPattern(String(start), String(max2), options);
        let zeros = "";
        if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
          if (prev.count.length > 1) {
            prev.count.pop();
          }
          prev.count.push(obj.count[0]);
          prev.string = prev.pattern + toQuantifier(prev.count);
          start = max2 + 1;
          continue;
        }
        if (tok.isPadded) {
          zeros = padZeros(max2, tok, options);
        }
        obj.string = zeros + obj.pattern + toQuantifier(obj.count);
        tokens.push(obj);
        start = max2 + 1;
        prev = obj;
      }
      return tokens;
    }
    function filterPatterns(arr, comparison, prefix, intersection, options) {
      let result = [];
      for (let ele of arr) {
        let { string } = ele;
        if (!intersection && !contains(comparison, "string", string)) {
          result.push(prefix + string);
        }
        if (intersection && contains(comparison, "string", string)) {
          result.push(prefix + string);
        }
      }
      return result;
    }
    function zip(a, b) {
      let arr = [];
      for (let i = 0; i < a.length; i++)
        arr.push([a[i], b[i]]);
      return arr;
    }
    function compare(a, b) {
      return a > b ? 1 : b > a ? -1 : 0;
    }
    function contains(arr, key, val) {
      return arr.some((ele) => ele[key] === val);
    }
    function countNines(min, len) {
      return Number(String(min).slice(0, -len) + "9".repeat(len));
    }
    function countZeros(integer, zeros) {
      return integer - integer % Math.pow(10, zeros);
    }
    function toQuantifier(digits) {
      let [start = 0, stop = ""] = digits;
      if (stop || start > 1) {
        return `{${start + (stop ? "," + stop : "")}}`;
      }
      return "";
    }
    function toCharacterClass(a, b, options) {
      return `[${a}${b - a === 1 ? "" : "-"}${b}]`;
    }
    function hasPadding(str) {
      return /^-?(0+)\d/.test(str);
    }
    function padZeros(value, tok, options) {
      if (!tok.isPadded) {
        return value;
      }
      let diff = Math.abs(tok.maxLen - String(value).length);
      let relax = options.relaxZeros !== false;
      switch (diff) {
        case 0:
          return "";
        case 1:
          return relax ? "0?" : "0";
        case 2:
          return relax ? "0{0,2}" : "00";
        default: {
          return relax ? `0{0,${diff}}` : `0{${diff}}`;
        }
      }
    }
    toRegexRange.cache = {};
    toRegexRange.clearCache = () => toRegexRange.cache = {};
    module2.exports = toRegexRange;
  }
});

// node_modules/fill-range/index.js
var require_fill_range = __commonJS({
  "node_modules/fill-range/index.js"(exports, module2) {
    "use strict";
    var util2 = require("util");
    var toRegexRange = require_to_regex_range();
    var isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    var transform = (toNumber) => {
      return (value) => toNumber === true ? Number(value) : String(value);
    };
    var isValidValue = (value) => {
      return typeof value === "number" || typeof value === "string" && value !== "";
    };
    var isNumber = (num) => Number.isInteger(+num);
    var zeros = (input) => {
      let value = `${input}`;
      let index = -1;
      if (value[0] === "-")
        value = value.slice(1);
      if (value === "0")
        return false;
      while (value[++index] === "0")
        ;
      return index > 0;
    };
    var stringify = (start, end, options) => {
      if (typeof start === "string" || typeof end === "string") {
        return true;
      }
      return options.stringify === true;
    };
    var pad = (input, maxLength, toNumber) => {
      if (maxLength > 0) {
        let dash = input[0] === "-" ? "-" : "";
        if (dash)
          input = input.slice(1);
        input = dash + input.padStart(dash ? maxLength - 1 : maxLength, "0");
      }
      if (toNumber === false) {
        return String(input);
      }
      return input;
    };
    var toMaxLen = (input, maxLength) => {
      let negative = input[0] === "-" ? "-" : "";
      if (negative) {
        input = input.slice(1);
        maxLength--;
      }
      while (input.length < maxLength)
        input = "0" + input;
      return negative ? "-" + input : input;
    };
    var toSequence = (parts, options, maxLen) => {
      parts.negatives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      parts.positives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      let prefix = options.capture ? "" : "?:";
      let positives = "";
      let negatives = "";
      let result;
      if (parts.positives.length) {
        positives = parts.positives.map((v) => toMaxLen(String(v), maxLen)).join("|");
      }
      if (parts.negatives.length) {
        negatives = `-(${prefix}${parts.negatives.map((v) => toMaxLen(String(v), maxLen)).join("|")})`;
      }
      if (positives && negatives) {
        result = `${positives}|${negatives}`;
      } else {
        result = positives || negatives;
      }
      if (options.wrap) {
        return `(${prefix}${result})`;
      }
      return result;
    };
    var toRange = (a, b, isNumbers, options) => {
      if (isNumbers) {
        return toRegexRange(a, b, __spreadValues({ wrap: false }, options));
      }
      let start = String.fromCharCode(a);
      if (a === b)
        return start;
      let stop = String.fromCharCode(b);
      return `[${start}-${stop}]`;
    };
    var toRegex = (start, end, options) => {
      if (Array.isArray(start)) {
        let wrap = options.wrap === true;
        let prefix = options.capture ? "" : "?:";
        return wrap ? `(${prefix}${start.join("|")})` : start.join("|");
      }
      return toRegexRange(start, end, options);
    };
    var rangeError = (...args) => {
      return new RangeError("Invalid range arguments: " + util2.inspect(...args));
    };
    var invalidRange = (start, end, options) => {
      if (options.strictRanges === true)
        throw rangeError([start, end]);
      return [];
    };
    var invalidStep = (step, options) => {
      if (options.strictRanges === true) {
        throw new TypeError(`Expected step "${step}" to be a number`);
      }
      return [];
    };
    var fillNumbers = (start, end, step = 1, options = {}) => {
      let a = Number(start);
      let b = Number(end);
      if (!Number.isInteger(a) || !Number.isInteger(b)) {
        if (options.strictRanges === true)
          throw rangeError([start, end]);
        return [];
      }
      if (a === 0)
        a = 0;
      if (b === 0)
        b = 0;
      let descending = a > b;
      let startString = String(start);
      let endString = String(end);
      let stepString = String(step);
      step = Math.max(Math.abs(step), 1);
      let padded = zeros(startString) || zeros(endString) || zeros(stepString);
      let maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
      let toNumber = padded === false && stringify(start, end, options) === false;
      let format3 = options.transform || transform(toNumber);
      if (options.toRegex && step === 1) {
        return toRange(toMaxLen(start, maxLen), toMaxLen(end, maxLen), true, options);
      }
      let parts = { negatives: [], positives: [] };
      let push = (num) => parts[num < 0 ? "negatives" : "positives"].push(Math.abs(num));
      let range = [];
      let index = 0;
      while (descending ? a >= b : a <= b) {
        if (options.toRegex === true && step > 1) {
          push(a);
        } else {
          range.push(pad(format3(a, index), maxLen, toNumber));
        }
        a = descending ? a - step : a + step;
        index++;
      }
      if (options.toRegex === true) {
        return step > 1 ? toSequence(parts, options, maxLen) : toRegex(range, null, __spreadValues({ wrap: false }, options));
      }
      return range;
    };
    var fillLetters = (start, end, step = 1, options = {}) => {
      if (!isNumber(start) && start.length > 1 || !isNumber(end) && end.length > 1) {
        return invalidRange(start, end, options);
      }
      let format3 = options.transform || ((val) => String.fromCharCode(val));
      let a = `${start}`.charCodeAt(0);
      let b = `${end}`.charCodeAt(0);
      let descending = a > b;
      let min = Math.min(a, b);
      let max = Math.max(a, b);
      if (options.toRegex && step === 1) {
        return toRange(min, max, false, options);
      }
      let range = [];
      let index = 0;
      while (descending ? a >= b : a <= b) {
        range.push(format3(a, index));
        a = descending ? a - step : a + step;
        index++;
      }
      if (options.toRegex === true) {
        return toRegex(range, null, { wrap: false, options });
      }
      return range;
    };
    var fill = (start, end, step, options = {}) => {
      if (end == null && isValidValue(start)) {
        return [start];
      }
      if (!isValidValue(start) || !isValidValue(end)) {
        return invalidRange(start, end, options);
      }
      if (typeof step === "function") {
        return fill(start, end, 1, { transform: step });
      }
      if (isObject(step)) {
        return fill(start, end, 0, step);
      }
      let opts = __spreadValues({}, options);
      if (opts.capture === true)
        opts.wrap = true;
      step = step || opts.step || 1;
      if (!isNumber(step)) {
        if (step != null && !isObject(step))
          return invalidStep(step, opts);
        return fill(start, end, 1, step);
      }
      if (isNumber(start) && isNumber(end)) {
        return fillNumbers(start, end, step, opts);
      }
      return fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
    };
    module2.exports = fill;
  }
});

// node_modules/braces/lib/compile.js
var require_compile = __commonJS({
  "node_modules/braces/lib/compile.js"(exports, module2) {
    "use strict";
    var fill = require_fill_range();
    var utils = require_utils2();
    var compile = (ast, options = {}) => {
      const walk = (node, parent = {}) => {
        const invalidBlock = utils.isInvalidBrace(parent);
        const invalidNode = node.invalid === true && options.escapeInvalid === true;
        const invalid = invalidBlock === true || invalidNode === true;
        const prefix = options.escapeInvalid === true ? "\\" : "";
        let output = "";
        if (node.isOpen === true) {
          return prefix + node.value;
        }
        if (node.isClose === true) {
          console.log("node.isClose", prefix, node.value);
          return prefix + node.value;
        }
        if (node.type === "open") {
          return invalid ? prefix + node.value : "(";
        }
        if (node.type === "close") {
          return invalid ? prefix + node.value : ")";
        }
        if (node.type === "comma") {
          return node.prev.type === "comma" ? "" : invalid ? node.value : "|";
        }
        if (node.value) {
          return node.value;
        }
        if (node.nodes && node.ranges > 0) {
          const args = utils.reduce(node.nodes);
          const range = fill(...args, __spreadProps(__spreadValues({}, options), { wrap: false, toRegex: true, strictZeros: true }));
          if (range.length !== 0) {
            return args.length > 1 && range.length > 1 ? `(${range})` : range;
          }
        }
        if (node.nodes) {
          for (const child of node.nodes) {
            output += walk(child, node);
          }
        }
        return output;
      };
      return walk(ast);
    };
    module2.exports = compile;
  }
});

// node_modules/braces/lib/expand.js
var require_expand = __commonJS({
  "node_modules/braces/lib/expand.js"(exports, module2) {
    "use strict";
    var fill = require_fill_range();
    var stringify = require_stringify();
    var utils = require_utils2();
    var append = (queue = "", stash = "", enclose = false) => {
      const result = [];
      queue = [].concat(queue);
      stash = [].concat(stash);
      if (!stash.length)
        return queue;
      if (!queue.length) {
        return enclose ? utils.flatten(stash).map((ele) => `{${ele}}`) : stash;
      }
      for (const item of queue) {
        if (Array.isArray(item)) {
          for (const value of item) {
            result.push(append(value, stash, enclose));
          }
        } else {
          for (let ele of stash) {
            if (enclose === true && typeof ele === "string")
              ele = `{${ele}}`;
            result.push(Array.isArray(ele) ? append(item, ele, enclose) : item + ele);
          }
        }
      }
      return utils.flatten(result);
    };
    var expand = (ast, options = {}) => {
      const rangeLimit = options.rangeLimit === void 0 ? 1e3 : options.rangeLimit;
      const walk = (node, parent = {}) => {
        node.queue = [];
        let p = parent;
        let q = parent.queue;
        while (p.type !== "brace" && p.type !== "root" && p.parent) {
          p = p.parent;
          q = p.queue;
        }
        if (node.invalid || node.dollar) {
          q.push(append(q.pop(), stringify(node, options)));
          return;
        }
        if (node.type === "brace" && node.invalid !== true && node.nodes.length === 2) {
          q.push(append(q.pop(), ["{}"]));
          return;
        }
        if (node.nodes && node.ranges > 0) {
          const args = utils.reduce(node.nodes);
          if (utils.exceedsLimit(...args, options.step, rangeLimit)) {
            throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
          }
          let range = fill(...args, options);
          if (range.length === 0) {
            range = stringify(node, options);
          }
          q.push(append(q.pop(), range));
          node.nodes = [];
          return;
        }
        const enclose = utils.encloseBrace(node);
        let queue = node.queue;
        let block = node;
        while (block.type !== "brace" && block.type !== "root" && block.parent) {
          block = block.parent;
          queue = block.queue;
        }
        for (let i = 0; i < node.nodes.length; i++) {
          const child = node.nodes[i];
          if (child.type === "comma" && node.type === "brace") {
            if (i === 1)
              queue.push("");
            queue.push("");
            continue;
          }
          if (child.type === "close") {
            q.push(append(q.pop(), queue, enclose));
            continue;
          }
          if (child.value && child.type !== "open") {
            queue.push(append(queue.pop(), child.value));
            continue;
          }
          if (child.nodes) {
            walk(child, node);
          }
        }
        return queue;
      };
      return utils.flatten(walk(ast));
    };
    module2.exports = expand;
  }
});

// node_modules/braces/lib/constants.js
var require_constants2 = __commonJS({
  "node_modules/braces/lib/constants.js"(exports, module2) {
    "use strict";
    module2.exports = {
      MAX_LENGTH: 1e4,
      // Digits
      CHAR_0: "0",
      /* 0 */
      CHAR_9: "9",
      /* 9 */
      // Alphabet chars.
      CHAR_UPPERCASE_A: "A",
      /* A */
      CHAR_LOWERCASE_A: "a",
      /* a */
      CHAR_UPPERCASE_Z: "Z",
      /* Z */
      CHAR_LOWERCASE_Z: "z",
      /* z */
      CHAR_LEFT_PARENTHESES: "(",
      /* ( */
      CHAR_RIGHT_PARENTHESES: ")",
      /* ) */
      CHAR_ASTERISK: "*",
      /* * */
      // Non-alphabetic chars.
      CHAR_AMPERSAND: "&",
      /* & */
      CHAR_AT: "@",
      /* @ */
      CHAR_BACKSLASH: "\\",
      /* \ */
      CHAR_BACKTICK: "`",
      /* ` */
      CHAR_CARRIAGE_RETURN: "\r",
      /* \r */
      CHAR_CIRCUMFLEX_ACCENT: "^",
      /* ^ */
      CHAR_COLON: ":",
      /* : */
      CHAR_COMMA: ",",
      /* , */
      CHAR_DOLLAR: "$",
      /* . */
      CHAR_DOT: ".",
      /* . */
      CHAR_DOUBLE_QUOTE: '"',
      /* " */
      CHAR_EQUAL: "=",
      /* = */
      CHAR_EXCLAMATION_MARK: "!",
      /* ! */
      CHAR_FORM_FEED: "\f",
      /* \f */
      CHAR_FORWARD_SLASH: "/",
      /* / */
      CHAR_HASH: "#",
      /* # */
      CHAR_HYPHEN_MINUS: "-",
      /* - */
      CHAR_LEFT_ANGLE_BRACKET: "<",
      /* < */
      CHAR_LEFT_CURLY_BRACE: "{",
      /* { */
      CHAR_LEFT_SQUARE_BRACKET: "[",
      /* [ */
      CHAR_LINE_FEED: "\n",
      /* \n */
      CHAR_NO_BREAK_SPACE: "\xA0",
      /* \u00A0 */
      CHAR_PERCENT: "%",
      /* % */
      CHAR_PLUS: "+",
      /* + */
      CHAR_QUESTION_MARK: "?",
      /* ? */
      CHAR_RIGHT_ANGLE_BRACKET: ">",
      /* > */
      CHAR_RIGHT_CURLY_BRACE: "}",
      /* } */
      CHAR_RIGHT_SQUARE_BRACKET: "]",
      /* ] */
      CHAR_SEMICOLON: ";",
      /* ; */
      CHAR_SINGLE_QUOTE: "'",
      /* ' */
      CHAR_SPACE: " ",
      /*   */
      CHAR_TAB: "	",
      /* \t */
      CHAR_UNDERSCORE: "_",
      /* _ */
      CHAR_VERTICAL_LINE: "|",
      /* | */
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF"
      /* \uFEFF */
    };
  }
});

// node_modules/braces/lib/parse.js
var require_parse2 = __commonJS({
  "node_modules/braces/lib/parse.js"(exports, module2) {
    "use strict";
    var stringify = require_stringify();
    var {
      MAX_LENGTH,
      CHAR_BACKSLASH,
      /* \ */
      CHAR_BACKTICK,
      /* ` */
      CHAR_COMMA,
      /* , */
      CHAR_DOT,
      /* . */
      CHAR_LEFT_PARENTHESES,
      /* ( */
      CHAR_RIGHT_PARENTHESES,
      /* ) */
      CHAR_LEFT_CURLY_BRACE,
      /* { */
      CHAR_RIGHT_CURLY_BRACE,
      /* } */
      CHAR_LEFT_SQUARE_BRACKET,
      /* [ */
      CHAR_RIGHT_SQUARE_BRACKET,
      /* ] */
      CHAR_DOUBLE_QUOTE,
      /* " */
      CHAR_SINGLE_QUOTE,
      /* ' */
      CHAR_NO_BREAK_SPACE,
      CHAR_ZERO_WIDTH_NOBREAK_SPACE
    } = require_constants2();
    var parse = (input, options = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      const opts = options || {};
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      if (input.length > max) {
        throw new SyntaxError(`Input length (${input.length}), exceeds max characters (${max})`);
      }
      const ast = { type: "root", input, nodes: [] };
      const stack = [ast];
      let block = ast;
      let prev = ast;
      let brackets = 0;
      const length = input.length;
      let index = 0;
      let depth = 0;
      let value;
      const advance = () => input[index++];
      const push = (node) => {
        if (node.type === "text" && prev.type === "dot") {
          prev.type = "text";
        }
        if (prev && prev.type === "text" && node.type === "text") {
          prev.value += node.value;
          return;
        }
        block.nodes.push(node);
        node.parent = block;
        node.prev = prev;
        prev = node;
        return node;
      };
      push({ type: "bos" });
      while (index < length) {
        block = stack[stack.length - 1];
        value = advance();
        if (value === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === CHAR_NO_BREAK_SPACE) {
          continue;
        }
        if (value === CHAR_BACKSLASH) {
          push({ type: "text", value: (options.keepEscaping ? value : "") + advance() });
          continue;
        }
        if (value === CHAR_RIGHT_SQUARE_BRACKET) {
          push({ type: "text", value: "\\" + value });
          continue;
        }
        if (value === CHAR_LEFT_SQUARE_BRACKET) {
          brackets++;
          let next;
          while (index < length && (next = advance())) {
            value += next;
            if (next === CHAR_LEFT_SQUARE_BRACKET) {
              brackets++;
              continue;
            }
            if (next === CHAR_BACKSLASH) {
              value += advance();
              continue;
            }
            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              brackets--;
              if (brackets === 0) {
                break;
              }
            }
          }
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_LEFT_PARENTHESES) {
          block = push({ type: "paren", nodes: [] });
          stack.push(block);
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_RIGHT_PARENTHESES) {
          if (block.type !== "paren") {
            push({ type: "text", value });
            continue;
          }
          block = stack.pop();
          push({ type: "text", value });
          block = stack[stack.length - 1];
          continue;
        }
        if (value === CHAR_DOUBLE_QUOTE || value === CHAR_SINGLE_QUOTE || value === CHAR_BACKTICK) {
          const open = value;
          let next;
          if (options.keepQuotes !== true) {
            value = "";
          }
          while (index < length && (next = advance())) {
            if (next === CHAR_BACKSLASH) {
              value += next + advance();
              continue;
            }
            if (next === open) {
              if (options.keepQuotes === true)
                value += next;
              break;
            }
            value += next;
          }
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_LEFT_CURLY_BRACE) {
          depth++;
          const dollar = prev.value && prev.value.slice(-1) === "$" || block.dollar === true;
          const brace = {
            type: "brace",
            open: true,
            close: false,
            dollar,
            depth,
            commas: 0,
            ranges: 0,
            nodes: []
          };
          block = push(brace);
          stack.push(block);
          push({ type: "open", value });
          continue;
        }
        if (value === CHAR_RIGHT_CURLY_BRACE) {
          if (block.type !== "brace") {
            push({ type: "text", value });
            continue;
          }
          const type = "close";
          block = stack.pop();
          block.close = true;
          push({ type, value });
          depth--;
          block = stack[stack.length - 1];
          continue;
        }
        if (value === CHAR_COMMA && depth > 0) {
          if (block.ranges > 0) {
            block.ranges = 0;
            const open = block.nodes.shift();
            block.nodes = [open, { type: "text", value: stringify(block) }];
          }
          push({ type: "comma", value });
          block.commas++;
          continue;
        }
        if (value === CHAR_DOT && depth > 0 && block.commas === 0) {
          const siblings = block.nodes;
          if (depth === 0 || siblings.length === 0) {
            push({ type: "text", value });
            continue;
          }
          if (prev.type === "dot") {
            block.range = [];
            prev.value += value;
            prev.type = "range";
            if (block.nodes.length !== 3 && block.nodes.length !== 5) {
              block.invalid = true;
              block.ranges = 0;
              prev.type = "text";
              continue;
            }
            block.ranges++;
            block.args = [];
            continue;
          }
          if (prev.type === "range") {
            siblings.pop();
            const before = siblings[siblings.length - 1];
            before.value += prev.value + value;
            prev = before;
            block.ranges--;
            continue;
          }
          push({ type: "dot", value });
          continue;
        }
        push({ type: "text", value });
      }
      do {
        block = stack.pop();
        if (block.type !== "root") {
          block.nodes.forEach((node) => {
            if (!node.nodes) {
              if (node.type === "open")
                node.isOpen = true;
              if (node.type === "close")
                node.isClose = true;
              if (!node.nodes)
                node.type = "text";
              node.invalid = true;
            }
          });
          const parent = stack[stack.length - 1];
          const index2 = parent.nodes.indexOf(block);
          parent.nodes.splice(index2, 1, ...block.nodes);
        }
      } while (stack.length > 0);
      push({ type: "eos" });
      return ast;
    };
    module2.exports = parse;
  }
});

// node_modules/braces/index.js
var require_braces = __commonJS({
  "node_modules/braces/index.js"(exports, module2) {
    "use strict";
    var stringify = require_stringify();
    var compile = require_compile();
    var expand = require_expand();
    var parse = require_parse2();
    var braces = (input, options = {}) => {
      let output = [];
      if (Array.isArray(input)) {
        for (const pattern of input) {
          const result = braces.create(pattern, options);
          if (Array.isArray(result)) {
            output.push(...result);
          } else {
            output.push(result);
          }
        }
      } else {
        output = [].concat(braces.create(input, options));
      }
      if (options && options.expand === true && options.nodupes === true) {
        output = [...new Set(output)];
      }
      return output;
    };
    braces.parse = (input, options = {}) => parse(input, options);
    braces.stringify = (input, options = {}) => {
      if (typeof input === "string") {
        return stringify(braces.parse(input, options), options);
      }
      return stringify(input, options);
    };
    braces.compile = (input, options = {}) => {
      if (typeof input === "string") {
        input = braces.parse(input, options);
      }
      return compile(input, options);
    };
    braces.expand = (input, options = {}) => {
      if (typeof input === "string") {
        input = braces.parse(input, options);
      }
      let result = expand(input, options);
      if (options.noempty === true) {
        result = result.filter(Boolean);
      }
      if (options.nodupes === true) {
        result = [...new Set(result)];
      }
      return result;
    };
    braces.create = (input, options = {}) => {
      if (input === "" || input.length < 3) {
        return [input];
      }
      return options.expand !== true ? braces.compile(input, options) : braces.expand(input, options);
    };
    module2.exports = braces;
  }
});

// node_modules/binary-extensions/binary-extensions.json
var require_binary_extensions = __commonJS({
  "node_modules/binary-extensions/binary-extensions.json"(exports, module2) {
    module2.exports = [
      "3dm",
      "3ds",
      "3g2",
      "3gp",
      "7z",
      "a",
      "aac",
      "adp",
      "afdesign",
      "afphoto",
      "afpub",
      "ai",
      "aif",
      "aiff",
      "alz",
      "ape",
      "apk",
      "appimage",
      "ar",
      "arj",
      "asf",
      "au",
      "avi",
      "bak",
      "baml",
      "bh",
      "bin",
      "bk",
      "bmp",
      "btif",
      "bz2",
      "bzip2",
      "cab",
      "caf",
      "cgm",
      "class",
      "cmx",
      "cpio",
      "cr2",
      "cur",
      "dat",
      "dcm",
      "deb",
      "dex",
      "djvu",
      "dll",
      "dmg",
      "dng",
      "doc",
      "docm",
      "docx",
      "dot",
      "dotm",
      "dra",
      "DS_Store",
      "dsk",
      "dts",
      "dtshd",
      "dvb",
      "dwg",
      "dxf",
      "ecelp4800",
      "ecelp7470",
      "ecelp9600",
      "egg",
      "eol",
      "eot",
      "epub",
      "exe",
      "f4v",
      "fbs",
      "fh",
      "fla",
      "flac",
      "flatpak",
      "fli",
      "flv",
      "fpx",
      "fst",
      "fvt",
      "g3",
      "gh",
      "gif",
      "graffle",
      "gz",
      "gzip",
      "h261",
      "h263",
      "h264",
      "icns",
      "ico",
      "ief",
      "img",
      "ipa",
      "iso",
      "jar",
      "jpeg",
      "jpg",
      "jpgv",
      "jpm",
      "jxr",
      "key",
      "ktx",
      "lha",
      "lib",
      "lvp",
      "lz",
      "lzh",
      "lzma",
      "lzo",
      "m3u",
      "m4a",
      "m4v",
      "mar",
      "mdi",
      "mht",
      "mid",
      "midi",
      "mj2",
      "mka",
      "mkv",
      "mmr",
      "mng",
      "mobi",
      "mov",
      "movie",
      "mp3",
      "mp4",
      "mp4a",
      "mpeg",
      "mpg",
      "mpga",
      "mxu",
      "nef",
      "npx",
      "numbers",
      "nupkg",
      "o",
      "odp",
      "ods",
      "odt",
      "oga",
      "ogg",
      "ogv",
      "otf",
      "ott",
      "pages",
      "pbm",
      "pcx",
      "pdb",
      "pdf",
      "pea",
      "pgm",
      "pic",
      "png",
      "pnm",
      "pot",
      "potm",
      "potx",
      "ppa",
      "ppam",
      "ppm",
      "pps",
      "ppsm",
      "ppsx",
      "ppt",
      "pptm",
      "pptx",
      "psd",
      "pya",
      "pyc",
      "pyo",
      "pyv",
      "qt",
      "rar",
      "ras",
      "raw",
      "resources",
      "rgb",
      "rip",
      "rlc",
      "rmf",
      "rmvb",
      "rpm",
      "rtf",
      "rz",
      "s3m",
      "s7z",
      "scpt",
      "sgi",
      "shar",
      "snap",
      "sil",
      "sketch",
      "slk",
      "smv",
      "snk",
      "so",
      "stl",
      "suo",
      "sub",
      "swf",
      "tar",
      "tbz",
      "tbz2",
      "tga",
      "tgz",
      "thmx",
      "tif",
      "tiff",
      "tlz",
      "ttc",
      "ttf",
      "txz",
      "udf",
      "uvh",
      "uvi",
      "uvm",
      "uvp",
      "uvs",
      "uvu",
      "viv",
      "vob",
      "war",
      "wav",
      "wax",
      "wbmp",
      "wdp",
      "weba",
      "webm",
      "webp",
      "whl",
      "wim",
      "wm",
      "wma",
      "wmv",
      "wmx",
      "woff",
      "woff2",
      "wrm",
      "wvx",
      "xbm",
      "xif",
      "xla",
      "xlam",
      "xls",
      "xlsb",
      "xlsm",
      "xlsx",
      "xlt",
      "xltm",
      "xltx",
      "xm",
      "xmind",
      "xpi",
      "xpm",
      "xwd",
      "xz",
      "z",
      "zip",
      "zipx"
    ];
  }
});

// node_modules/binary-extensions/index.js
var require_binary_extensions2 = __commonJS({
  "node_modules/binary-extensions/index.js"(exports, module2) {
    module2.exports = require_binary_extensions();
  }
});

// node_modules/is-binary-path/index.js
var require_is_binary_path = __commonJS({
  "node_modules/is-binary-path/index.js"(exports, module2) {
    "use strict";
    var path = require("path");
    var binaryExtensions = require_binary_extensions2();
    var extensions = new Set(binaryExtensions);
    module2.exports = (filePath) => extensions.has(path.extname(filePath).slice(1).toLowerCase());
  }
});

// node_modules/chokidar/lib/constants.js
var require_constants3 = __commonJS({
  "node_modules/chokidar/lib/constants.js"(exports) {
    "use strict";
    var { sep } = require("path");
    var { platform } = process;
    var os = require("os");
    exports.EV_ALL = "all";
    exports.EV_READY = "ready";
    exports.EV_ADD = "add";
    exports.EV_CHANGE = "change";
    exports.EV_ADD_DIR = "addDir";
    exports.EV_UNLINK = "unlink";
    exports.EV_UNLINK_DIR = "unlinkDir";
    exports.EV_RAW = "raw";
    exports.EV_ERROR = "error";
    exports.STR_DATA = "data";
    exports.STR_END = "end";
    exports.STR_CLOSE = "close";
    exports.FSEVENT_CREATED = "created";
    exports.FSEVENT_MODIFIED = "modified";
    exports.FSEVENT_DELETED = "deleted";
    exports.FSEVENT_MOVED = "moved";
    exports.FSEVENT_CLONED = "cloned";
    exports.FSEVENT_UNKNOWN = "unknown";
    exports.FSEVENT_FLAG_MUST_SCAN_SUBDIRS = 1;
    exports.FSEVENT_TYPE_FILE = "file";
    exports.FSEVENT_TYPE_DIRECTORY = "directory";
    exports.FSEVENT_TYPE_SYMLINK = "symlink";
    exports.KEY_LISTENERS = "listeners";
    exports.KEY_ERR = "errHandlers";
    exports.KEY_RAW = "rawEmitters";
    exports.HANDLER_KEYS = [exports.KEY_LISTENERS, exports.KEY_ERR, exports.KEY_RAW];
    exports.DOT_SLASH = `.${sep}`;
    exports.BACK_SLASH_RE = /\\/g;
    exports.DOUBLE_SLASH_RE = /\/\//;
    exports.SLASH_OR_BACK_SLASH_RE = /[/\\]/;
    exports.DOT_RE = /\..*\.(sw[px])$|~$|\.subl.*\.tmp/;
    exports.REPLACER_RE = /^\.[/\\]/;
    exports.SLASH = "/";
    exports.SLASH_SLASH = "//";
    exports.BRACE_START = "{";
    exports.BANG = "!";
    exports.ONE_DOT = ".";
    exports.TWO_DOTS = "..";
    exports.STAR = "*";
    exports.GLOBSTAR = "**";
    exports.ROOT_GLOBSTAR = "/**/*";
    exports.SLASH_GLOBSTAR = "/**";
    exports.DIR_SUFFIX = "Dir";
    exports.ANYMATCH_OPTS = { dot: true };
    exports.STRING_TYPE = "string";
    exports.FUNCTION_TYPE = "function";
    exports.EMPTY_STR = "";
    exports.EMPTY_FN = () => {
    };
    exports.IDENTITY_FN = (val) => val;
    exports.isWindows = platform === "win32";
    exports.isMacos = platform === "darwin";
    exports.isLinux = platform === "linux";
    exports.isIBMi = os.type() === "OS400";
  }
});

// node_modules/chokidar/lib/nodefs-handler.js
var require_nodefs_handler = __commonJS({
  "node_modules/chokidar/lib/nodefs-handler.js"(exports, module2) {
    "use strict";
    var fs = require("fs");
    var sysPath = require("path");
    var { promisify } = require("util");
    var isBinaryPath = require_is_binary_path();
    var {
      isWindows,
      isLinux,
      EMPTY_FN,
      EMPTY_STR,
      KEY_LISTENERS,
      KEY_ERR,
      KEY_RAW,
      HANDLER_KEYS,
      EV_CHANGE,
      EV_ADD,
      EV_ADD_DIR,
      EV_ERROR,
      STR_DATA,
      STR_END,
      BRACE_START,
      STAR
    } = require_constants3();
    var THROTTLE_MODE_WATCH = "watch";
    var open = promisify(fs.open);
    var stat = promisify(fs.stat);
    var lstat = promisify(fs.lstat);
    var close = promisify(fs.close);
    var fsrealpath = promisify(fs.realpath);
    var statMethods = { lstat, stat };
    var foreach = (val, fn) => {
      if (val instanceof Set) {
        val.forEach(fn);
      } else {
        fn(val);
      }
    };
    var addAndConvert = (main, prop, item) => {
      let container = main[prop];
      if (!(container instanceof Set)) {
        main[prop] = container = /* @__PURE__ */ new Set([container]);
      }
      container.add(item);
    };
    var clearItem = (cont) => (key) => {
      const set = cont[key];
      if (set instanceof Set) {
        set.clear();
      } else {
        delete cont[key];
      }
    };
    var delFromSet = (main, prop, item) => {
      const container = main[prop];
      if (container instanceof Set) {
        container.delete(item);
      } else if (container === item) {
        delete main[prop];
      }
    };
    var isEmptySet = (val) => val instanceof Set ? val.size === 0 : !val;
    var FsWatchInstances = /* @__PURE__ */ new Map();
    function createFsWatchInstance(path, options, listener, errHandler, emitRaw) {
      const handleEvent = (rawEvent, evPath) => {
        listener(path);
        emitRaw(rawEvent, evPath, { watchedPath: path });
        if (evPath && path !== evPath) {
          fsWatchBroadcast(
            sysPath.resolve(path, evPath),
            KEY_LISTENERS,
            sysPath.join(path, evPath)
          );
        }
      };
      try {
        return fs.watch(path, options, handleEvent);
      } catch (error) {
        errHandler(error);
      }
    }
    var fsWatchBroadcast = (fullPath, type, val1, val2, val3) => {
      const cont = FsWatchInstances.get(fullPath);
      if (!cont)
        return;
      foreach(cont[type], (listener) => {
        listener(val1, val2, val3);
      });
    };
    var setFsWatchListener = (path, fullPath, options, handlers) => {
      const { listener, errHandler, rawEmitter } = handlers;
      let cont = FsWatchInstances.get(fullPath);
      let watcher;
      if (!options.persistent) {
        watcher = createFsWatchInstance(
          path,
          options,
          listener,
          errHandler,
          rawEmitter
        );
        return watcher.close.bind(watcher);
      }
      if (cont) {
        addAndConvert(cont, KEY_LISTENERS, listener);
        addAndConvert(cont, KEY_ERR, errHandler);
        addAndConvert(cont, KEY_RAW, rawEmitter);
      } else {
        watcher = createFsWatchInstance(
          path,
          options,
          fsWatchBroadcast.bind(null, fullPath, KEY_LISTENERS),
          errHandler,
          // no need to use broadcast here
          fsWatchBroadcast.bind(null, fullPath, KEY_RAW)
        );
        if (!watcher)
          return;
        watcher.on(EV_ERROR, async (error) => {
          const broadcastErr = fsWatchBroadcast.bind(null, fullPath, KEY_ERR);
          cont.watcherUnusable = true;
          if (isWindows && error.code === "EPERM") {
            try {
              const fd = await open(path, "r");
              await close(fd);
              broadcastErr(error);
            } catch (err) {
            }
          } else {
            broadcastErr(error);
          }
        });
        cont = {
          listeners: listener,
          errHandlers: errHandler,
          rawEmitters: rawEmitter,
          watcher
        };
        FsWatchInstances.set(fullPath, cont);
      }
      return () => {
        delFromSet(cont, KEY_LISTENERS, listener);
        delFromSet(cont, KEY_ERR, errHandler);
        delFromSet(cont, KEY_RAW, rawEmitter);
        if (isEmptySet(cont.listeners)) {
          cont.watcher.close();
          FsWatchInstances.delete(fullPath);
          HANDLER_KEYS.forEach(clearItem(cont));
          cont.watcher = void 0;
          Object.freeze(cont);
        }
      };
    };
    var FsWatchFileInstances = /* @__PURE__ */ new Map();
    var setFsWatchFileListener = (path, fullPath, options, handlers) => {
      const { listener, rawEmitter } = handlers;
      let cont = FsWatchFileInstances.get(fullPath);
      let listeners = /* @__PURE__ */ new Set();
      let rawEmitters = /* @__PURE__ */ new Set();
      const copts = cont && cont.options;
      if (copts && (copts.persistent < options.persistent || copts.interval > options.interval)) {
        listeners = cont.listeners;
        rawEmitters = cont.rawEmitters;
        fs.unwatchFile(fullPath);
        cont = void 0;
      }
      if (cont) {
        addAndConvert(cont, KEY_LISTENERS, listener);
        addAndConvert(cont, KEY_RAW, rawEmitter);
      } else {
        cont = {
          listeners: listener,
          rawEmitters: rawEmitter,
          options,
          watcher: fs.watchFile(fullPath, options, (curr, prev) => {
            foreach(cont.rawEmitters, (rawEmitter2) => {
              rawEmitter2(EV_CHANGE, fullPath, { curr, prev });
            });
            const currmtime = curr.mtimeMs;
            if (curr.size !== prev.size || currmtime > prev.mtimeMs || currmtime === 0) {
              foreach(cont.listeners, (listener2) => listener2(path, curr));
            }
          })
        };
        FsWatchFileInstances.set(fullPath, cont);
      }
      return () => {
        delFromSet(cont, KEY_LISTENERS, listener);
        delFromSet(cont, KEY_RAW, rawEmitter);
        if (isEmptySet(cont.listeners)) {
          FsWatchFileInstances.delete(fullPath);
          fs.unwatchFile(fullPath);
          cont.options = cont.watcher = void 0;
          Object.freeze(cont);
        }
      };
    };
    var NodeFsHandler = class {
      /**
       * @param {import("../index").FSWatcher} fsW
       */
      constructor(fsW) {
        this.fsw = fsW;
        this._boundHandleError = (error) => fsW._handleError(error);
      }
      /**
       * Watch file for changes with fs_watchFile or fs_watch.
       * @param {String} path to file or dir
       * @param {Function} listener on fs change
       * @returns {Function} closer for the watcher instance
       */
      _watchWithNodeFs(path, listener) {
        const opts = this.fsw.options;
        const directory = sysPath.dirname(path);
        const basename = sysPath.basename(path);
        const parent = this.fsw._getWatchedDir(directory);
        parent.add(basename);
        const absolutePath = sysPath.resolve(path);
        const options = { persistent: opts.persistent };
        if (!listener)
          listener = EMPTY_FN;
        let closer;
        if (opts.usePolling) {
          options.interval = opts.enableBinaryInterval && isBinaryPath(basename) ? opts.binaryInterval : opts.interval;
          closer = setFsWatchFileListener(path, absolutePath, options, {
            listener,
            rawEmitter: this.fsw._emitRaw
          });
        } else {
          closer = setFsWatchListener(path, absolutePath, options, {
            listener,
            errHandler: this._boundHandleError,
            rawEmitter: this.fsw._emitRaw
          });
        }
        return closer;
      }
      /**
       * Watch a file and emit add event if warranted.
       * @param {Path} file Path
       * @param {fs.Stats} stats result of fs_stat
       * @param {Boolean} initialAdd was the file added at watch instantiation?
       * @returns {Function} closer for the watcher instance
       */
      _handleFile(file, stats, initialAdd) {
        if (this.fsw.closed) {
          return;
        }
        const dirname = sysPath.dirname(file);
        const basename = sysPath.basename(file);
        const parent = this.fsw._getWatchedDir(dirname);
        let prevStats = stats;
        if (parent.has(basename))
          return;
        const listener = async (path, newStats) => {
          if (!this.fsw._throttle(THROTTLE_MODE_WATCH, file, 5))
            return;
          if (!newStats || newStats.mtimeMs === 0) {
            try {
              const newStats2 = await stat(file);
              if (this.fsw.closed)
                return;
              const at = newStats2.atimeMs;
              const mt = newStats2.mtimeMs;
              if (!at || at <= mt || mt !== prevStats.mtimeMs) {
                this.fsw._emit(EV_CHANGE, file, newStats2);
              }
              if (isLinux && prevStats.ino !== newStats2.ino) {
                this.fsw._closeFile(path);
                prevStats = newStats2;
                this.fsw._addPathCloser(path, this._watchWithNodeFs(file, listener));
              } else {
                prevStats = newStats2;
              }
            } catch (error) {
              this.fsw._remove(dirname, basename);
            }
          } else if (parent.has(basename)) {
            const at = newStats.atimeMs;
            const mt = newStats.mtimeMs;
            if (!at || at <= mt || mt !== prevStats.mtimeMs) {
              this.fsw._emit(EV_CHANGE, file, newStats);
            }
            prevStats = newStats;
          }
        };
        const closer = this._watchWithNodeFs(file, listener);
        if (!(initialAdd && this.fsw.options.ignoreInitial) && this.fsw._isntIgnored(file)) {
          if (!this.fsw._throttle(EV_ADD, file, 0))
            return;
          this.fsw._emit(EV_ADD, file, stats);
        }
        return closer;
      }
      /**
       * Handle symlinks encountered while reading a dir.
       * @param {Object} entry returned by readdirp
       * @param {String} directory path of dir being read
       * @param {String} path of this item
       * @param {String} item basename of this item
       * @returns {Promise<Boolean>} true if no more processing is needed for this entry.
       */
      async _handleSymlink(entry, directory, path, item) {
        if (this.fsw.closed) {
          return;
        }
        const full = entry.fullPath;
        const dir = this.fsw._getWatchedDir(directory);
        if (!this.fsw.options.followSymlinks) {
          this.fsw._incrReadyCount();
          let linkPath;
          try {
            linkPath = await fsrealpath(path);
          } catch (e) {
            this.fsw._emitReady();
            return true;
          }
          if (this.fsw.closed)
            return;
          if (dir.has(item)) {
            if (this.fsw._symlinkPaths.get(full) !== linkPath) {
              this.fsw._symlinkPaths.set(full, linkPath);
              this.fsw._emit(EV_CHANGE, path, entry.stats);
            }
          } else {
            dir.add(item);
            this.fsw._symlinkPaths.set(full, linkPath);
            this.fsw._emit(EV_ADD, path, entry.stats);
          }
          this.fsw._emitReady();
          return true;
        }
        if (this.fsw._symlinkPaths.has(full)) {
          return true;
        }
        this.fsw._symlinkPaths.set(full, true);
      }
      _handleRead(directory, initialAdd, wh, target, dir, depth, throttler) {
        directory = sysPath.join(directory, EMPTY_STR);
        if (!wh.hasGlob) {
          throttler = this.fsw._throttle("readdir", directory, 1e3);
          if (!throttler)
            return;
        }
        const previous = this.fsw._getWatchedDir(wh.path);
        const current = /* @__PURE__ */ new Set();
        let stream = this.fsw._readdirp(directory, {
          fileFilter: (entry) => wh.filterPath(entry),
          directoryFilter: (entry) => wh.filterDir(entry),
          depth: 0
        }).on(STR_DATA, async (entry) => {
          if (this.fsw.closed) {
            stream = void 0;
            return;
          }
          const item = entry.path;
          let path = sysPath.join(directory, item);
          current.add(item);
          if (entry.stats.isSymbolicLink() && await this._handleSymlink(entry, directory, path, item)) {
            return;
          }
          if (this.fsw.closed) {
            stream = void 0;
            return;
          }
          if (item === target || !target && !previous.has(item)) {
            this.fsw._incrReadyCount();
            path = sysPath.join(dir, sysPath.relative(dir, path));
            this._addToNodeFs(path, initialAdd, wh, depth + 1);
          }
        }).on(EV_ERROR, this._boundHandleError);
        return new Promise(
          (resolve) => stream.once(STR_END, () => {
            if (this.fsw.closed) {
              stream = void 0;
              return;
            }
            const wasThrottled = throttler ? throttler.clear() : false;
            resolve();
            previous.getChildren().filter((item) => {
              return item !== directory && !current.has(item) && // in case of intersecting globs;
              // a path may have been filtered out of this readdir, but
              // shouldn't be removed because it matches a different glob
              (!wh.hasGlob || wh.filterPath({
                fullPath: sysPath.resolve(directory, item)
              }));
            }).forEach((item) => {
              this.fsw._remove(directory, item);
            });
            stream = void 0;
            if (wasThrottled)
              this._handleRead(directory, false, wh, target, dir, depth, throttler);
          })
        );
      }
      /**
       * Read directory to add / remove files from `@watched` list and re-read it on change.
       * @param {String} dir fs path
       * @param {fs.Stats} stats
       * @param {Boolean} initialAdd
       * @param {Number} depth relative to user-supplied path
       * @param {String} target child path targeted for watch
       * @param {Object} wh Common watch helpers for this path
       * @param {String} realpath
       * @returns {Promise<Function>} closer for the watcher instance.
       */
      async _handleDir(dir, stats, initialAdd, depth, target, wh, realpath) {
        const parentDir = this.fsw._getWatchedDir(sysPath.dirname(dir));
        const tracked = parentDir.has(sysPath.basename(dir));
        if (!(initialAdd && this.fsw.options.ignoreInitial) && !target && !tracked) {
          if (!wh.hasGlob || wh.globFilter(dir))
            this.fsw._emit(EV_ADD_DIR, dir, stats);
        }
        parentDir.add(sysPath.basename(dir));
        this.fsw._getWatchedDir(dir);
        let throttler;
        let closer;
        const oDepth = this.fsw.options.depth;
        if ((oDepth == null || depth <= oDepth) && !this.fsw._symlinkPaths.has(realpath)) {
          if (!target) {
            await this._handleRead(dir, initialAdd, wh, target, dir, depth, throttler);
            if (this.fsw.closed)
              return;
          }
          closer = this._watchWithNodeFs(dir, (dirPath, stats2) => {
            if (stats2 && stats2.mtimeMs === 0)
              return;
            this._handleRead(dirPath, false, wh, target, dir, depth, throttler);
          });
        }
        return closer;
      }
      /**
       * Handle added file, directory, or glob pattern.
       * Delegates call to _handleFile / _handleDir after checks.
       * @param {String} path to file or ir
       * @param {Boolean} initialAdd was the file added at watch instantiation?
       * @param {Object} priorWh depth relative to user-supplied path
       * @param {Number} depth Child path actually targeted for watch
       * @param {String=} target Child path actually targeted for watch
       * @returns {Promise}
       */
      async _addToNodeFs(path, initialAdd, priorWh, depth, target) {
        const ready = this.fsw._emitReady;
        if (this.fsw._isIgnored(path) || this.fsw.closed) {
          ready();
          return false;
        }
        const wh = this.fsw._getWatchHelpers(path, depth);
        if (!wh.hasGlob && priorWh) {
          wh.hasGlob = priorWh.hasGlob;
          wh.globFilter = priorWh.globFilter;
          wh.filterPath = (entry) => priorWh.filterPath(entry);
          wh.filterDir = (entry) => priorWh.filterDir(entry);
        }
        try {
          const stats = await statMethods[wh.statMethod](wh.watchPath);
          if (this.fsw.closed)
            return;
          if (this.fsw._isIgnored(wh.watchPath, stats)) {
            ready();
            return false;
          }
          const follow = this.fsw.options.followSymlinks && !path.includes(STAR) && !path.includes(BRACE_START);
          let closer;
          if (stats.isDirectory()) {
            const absPath = sysPath.resolve(path);
            const targetPath = follow ? await fsrealpath(path) : path;
            if (this.fsw.closed)
              return;
            closer = await this._handleDir(wh.watchPath, stats, initialAdd, depth, target, wh, targetPath);
            if (this.fsw.closed)
              return;
            if (absPath !== targetPath && targetPath !== void 0) {
              this.fsw._symlinkPaths.set(absPath, targetPath);
            }
          } else if (stats.isSymbolicLink()) {
            const targetPath = follow ? await fsrealpath(path) : path;
            if (this.fsw.closed)
              return;
            const parent = sysPath.dirname(wh.watchPath);
            this.fsw._getWatchedDir(parent).add(wh.watchPath);
            this.fsw._emit(EV_ADD, wh.watchPath, stats);
            closer = await this._handleDir(parent, stats, initialAdd, depth, path, wh, targetPath);
            if (this.fsw.closed)
              return;
            if (targetPath !== void 0) {
              this.fsw._symlinkPaths.set(sysPath.resolve(path), targetPath);
            }
          } else {
            closer = this._handleFile(wh.watchPath, stats, initialAdd);
          }
          ready();
          this.fsw._addPathCloser(path, closer);
          return false;
        } catch (error) {
          if (this.fsw._handleError(error)) {
            ready();
            return path;
          }
        }
      }
    };
    module2.exports = NodeFsHandler;
  }
});

// node_modules/fsevents/fsevents.node
var fsevents_default;
var init_fsevents = __esm({
  "node_modules/fsevents/fsevents.node"() {
    fsevents_default = "./fsevents-X6WP4TKM.node";
  }
});

// node-file:/Users/mikethompson/Desktop/vite-plugin-openapi-typescript-codegen-forked/node_modules/fsevents/fsevents.node
var require_fsevents = __commonJS({
  "node-file:/Users/mikethompson/Desktop/vite-plugin-openapi-typescript-codegen-forked/node_modules/fsevents/fsevents.node"(exports, module2) {
    init_fsevents();
    try {
      module2.exports = require(fsevents_default);
    } catch (e) {
    }
  }
});

// node_modules/fsevents/fsevents.js
var require_fsevents2 = __commonJS({
  "node_modules/fsevents/fsevents.js"(exports) {
    "use strict";
    if (process.platform !== "darwin") {
      throw new Error(`Module 'fsevents' is not compatible with platform '${process.platform}'`);
    }
    var Native = require_fsevents();
    var events = Native.constants;
    function watch(path, since, handler) {
      if (typeof path !== "string") {
        throw new TypeError(`fsevents argument 1 must be a string and not a ${typeof path}`);
      }
      if ("function" === typeof since && "undefined" === typeof handler) {
        handler = since;
        since = Native.flags.SinceNow;
      }
      if (typeof since !== "number") {
        throw new TypeError(`fsevents argument 2 must be a number and not a ${typeof since}`);
      }
      if (typeof handler !== "function") {
        throw new TypeError(`fsevents argument 3 must be a function and not a ${typeof handler}`);
      }
      let instance = Native.start(Native.global, path, since, handler);
      if (!instance)
        throw new Error(`could not watch: ${path}`);
      return () => {
        const result = instance ? Promise.resolve(instance).then(Native.stop) : Promise.resolve(void 0);
        instance = void 0;
        return result;
      };
    }
    function getInfo(path, flags) {
      return {
        path,
        flags,
        event: getEventType(flags),
        type: getFileType(flags),
        changes: getFileChanges(flags)
      };
    }
    function getFileType(flags) {
      if (events.ItemIsFile & flags)
        return "file";
      if (events.ItemIsDir & flags)
        return "directory";
      if (events.MustScanSubDirs & flags)
        return "directory";
      if (events.ItemIsSymlink & flags)
        return "symlink";
    }
    function anyIsTrue(obj) {
      for (let key in obj) {
        if (obj[key])
          return true;
      }
      return false;
    }
    function getEventType(flags) {
      if (events.ItemRemoved & flags)
        return "deleted";
      if (events.ItemRenamed & flags)
        return "moved";
      if (events.ItemCreated & flags)
        return "created";
      if (events.ItemModified & flags)
        return "modified";
      if (events.RootChanged & flags)
        return "root-changed";
      if (events.ItemCloned & flags)
        return "cloned";
      if (anyIsTrue(flags))
        return "modified";
      return "unknown";
    }
    function getFileChanges(flags) {
      return {
        inode: !!(events.ItemInodeMetaMod & flags),
        finder: !!(events.ItemFinderInfoMod & flags),
        access: !!(events.ItemChangeOwner & flags),
        xattrs: !!(events.ItemXattrMod & flags)
      };
    }
    exports.watch = watch;
    exports.getInfo = getInfo;
    exports.constants = events;
  }
});

// node_modules/chokidar/lib/fsevents-handler.js
var require_fsevents_handler = __commonJS({
  "node_modules/chokidar/lib/fsevents-handler.js"(exports, module2) {
    "use strict";
    var fs = require("fs");
    var sysPath = require("path");
    var { promisify } = require("util");
    var fsevents;
    try {
      fsevents = require_fsevents2();
    } catch (error) {
      if (process.env.CHOKIDAR_PRINT_FSEVENTS_REQUIRE_ERROR)
        console.error(error);
    }
    if (fsevents) {
      const mtch = process.version.match(/v(\d+)\.(\d+)/);
      if (mtch && mtch[1] && mtch[2]) {
        const maj = Number.parseInt(mtch[1], 10);
        const min = Number.parseInt(mtch[2], 10);
        if (maj === 8 && min < 16) {
          fsevents = void 0;
        }
      }
    }
    var {
      EV_ADD,
      EV_CHANGE,
      EV_ADD_DIR,
      EV_UNLINK,
      EV_ERROR,
      STR_DATA,
      STR_END,
      FSEVENT_CREATED,
      FSEVENT_MODIFIED,
      FSEVENT_DELETED,
      FSEVENT_MOVED,
      // FSEVENT_CLONED,
      FSEVENT_UNKNOWN,
      FSEVENT_FLAG_MUST_SCAN_SUBDIRS,
      FSEVENT_TYPE_FILE,
      FSEVENT_TYPE_DIRECTORY,
      FSEVENT_TYPE_SYMLINK,
      ROOT_GLOBSTAR,
      DIR_SUFFIX,
      DOT_SLASH,
      FUNCTION_TYPE,
      EMPTY_FN,
      IDENTITY_FN
    } = require_constants3();
    var Depth = (value) => isNaN(value) ? {} : { depth: value };
    var stat = promisify(fs.stat);
    var lstat = promisify(fs.lstat);
    var realpath = promisify(fs.realpath);
    var statMethods = { stat, lstat };
    var FSEventsWatchers = /* @__PURE__ */ new Map();
    var consolidateThreshhold = 10;
    var wrongEventFlags = /* @__PURE__ */ new Set([
      69888,
      70400,
      71424,
      72704,
      73472,
      131328,
      131840,
      262912
    ]);
    var createFSEventsInstance = (path, callback) => {
      const stop = fsevents.watch(path, callback);
      return { stop };
    };
    function setFSEventsListener(path, realPath, listener, rawEmitter) {
      let watchPath = sysPath.extname(realPath) ? sysPath.dirname(realPath) : realPath;
      const parentPath = sysPath.dirname(watchPath);
      let cont = FSEventsWatchers.get(watchPath);
      if (couldConsolidate(parentPath)) {
        watchPath = parentPath;
      }
      const resolvedPath = sysPath.resolve(path);
      const hasSymlink = resolvedPath !== realPath;
      const filteredListener = (fullPath, flags, info) => {
        if (hasSymlink)
          fullPath = fullPath.replace(realPath, resolvedPath);
        if (fullPath === resolvedPath || !fullPath.indexOf(resolvedPath + sysPath.sep))
          listener(fullPath, flags, info);
      };
      let watchedParent = false;
      for (const watchedPath of FSEventsWatchers.keys()) {
        if (realPath.indexOf(sysPath.resolve(watchedPath) + sysPath.sep) === 0) {
          watchPath = watchedPath;
          cont = FSEventsWatchers.get(watchPath);
          watchedParent = true;
          break;
        }
      }
      if (cont || watchedParent) {
        cont.listeners.add(filteredListener);
      } else {
        cont = {
          listeners: /* @__PURE__ */ new Set([filteredListener]),
          rawEmitter,
          watcher: createFSEventsInstance(watchPath, (fullPath, flags) => {
            if (!cont.listeners.size)
              return;
            if (flags & FSEVENT_FLAG_MUST_SCAN_SUBDIRS)
              return;
            const info = fsevents.getInfo(fullPath, flags);
            cont.listeners.forEach((list) => {
              list(fullPath, flags, info);
            });
            cont.rawEmitter(info.event, fullPath, info);
          })
        };
        FSEventsWatchers.set(watchPath, cont);
      }
      return () => {
        const lst = cont.listeners;
        lst.delete(filteredListener);
        if (!lst.size) {
          FSEventsWatchers.delete(watchPath);
          if (cont.watcher)
            return cont.watcher.stop().then(() => {
              cont.rawEmitter = cont.watcher = void 0;
              Object.freeze(cont);
            });
        }
      };
    }
    var couldConsolidate = (path) => {
      let count = 0;
      for (const watchPath of FSEventsWatchers.keys()) {
        if (watchPath.indexOf(path) === 0) {
          count++;
          if (count >= consolidateThreshhold) {
            return true;
          }
        }
      }
      return false;
    };
    var canUse = () => fsevents && FSEventsWatchers.size < 128;
    var calcDepth = (path, root) => {
      let i = 0;
      while (!path.indexOf(root) && (path = sysPath.dirname(path)) !== root)
        i++;
      return i;
    };
    var sameTypes = (info, stats) => info.type === FSEVENT_TYPE_DIRECTORY && stats.isDirectory() || info.type === FSEVENT_TYPE_SYMLINK && stats.isSymbolicLink() || info.type === FSEVENT_TYPE_FILE && stats.isFile();
    var FsEventsHandler = class {
      /**
       * @param {import('../index').FSWatcher} fsw
       */
      constructor(fsw) {
        this.fsw = fsw;
      }
      checkIgnored(path, stats) {
        const ipaths = this.fsw._ignoredPaths;
        if (this.fsw._isIgnored(path, stats)) {
          ipaths.add(path);
          if (stats && stats.isDirectory()) {
            ipaths.add(path + ROOT_GLOBSTAR);
          }
          return true;
        }
        ipaths.delete(path);
        ipaths.delete(path + ROOT_GLOBSTAR);
      }
      addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts) {
        const event = watchedDir.has(item) ? EV_CHANGE : EV_ADD;
        this.handleEvent(event, path, fullPath, realPath, parent, watchedDir, item, info, opts);
      }
      async checkExists(path, fullPath, realPath, parent, watchedDir, item, info, opts) {
        try {
          const stats = await stat(path);
          if (this.fsw.closed)
            return;
          if (sameTypes(info, stats)) {
            this.addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts);
          } else {
            this.handleEvent(EV_UNLINK, path, fullPath, realPath, parent, watchedDir, item, info, opts);
          }
        } catch (error) {
          if (error.code === "EACCES") {
            this.addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts);
          } else {
            this.handleEvent(EV_UNLINK, path, fullPath, realPath, parent, watchedDir, item, info, opts);
          }
        }
      }
      handleEvent(event, path, fullPath, realPath, parent, watchedDir, item, info, opts) {
        if (this.fsw.closed || this.checkIgnored(path))
          return;
        if (event === EV_UNLINK) {
          const isDirectory = info.type === FSEVENT_TYPE_DIRECTORY;
          if (isDirectory || watchedDir.has(item)) {
            this.fsw._remove(parent, item, isDirectory);
          }
        } else {
          if (event === EV_ADD) {
            if (info.type === FSEVENT_TYPE_DIRECTORY)
              this.fsw._getWatchedDir(path);
            if (info.type === FSEVENT_TYPE_SYMLINK && opts.followSymlinks) {
              const curDepth = opts.depth === void 0 ? void 0 : calcDepth(fullPath, realPath) + 1;
              return this._addToFsEvents(path, false, true, curDepth);
            }
            this.fsw._getWatchedDir(parent).add(item);
          }
          const eventName = info.type === FSEVENT_TYPE_DIRECTORY ? event + DIR_SUFFIX : event;
          this.fsw._emit(eventName, path);
          if (eventName === EV_ADD_DIR)
            this._addToFsEvents(path, false, true);
        }
      }
      /**
       * Handle symlinks encountered during directory scan
       * @param {String} watchPath  - file/dir path to be watched with fsevents
       * @param {String} realPath   - real path (in case of symlinks)
       * @param {Function} transform  - path transformer
       * @param {Function} globFilter - path filter in case a glob pattern was provided
       * @returns {Function} closer for the watcher instance
      */
      _watchWithFsEvents(watchPath, realPath, transform, globFilter) {
        if (this.fsw.closed || this.fsw._isIgnored(watchPath))
          return;
        const opts = this.fsw.options;
        const watchCallback = async (fullPath, flags, info) => {
          if (this.fsw.closed)
            return;
          if (opts.depth !== void 0 && calcDepth(fullPath, realPath) > opts.depth)
            return;
          const path = transform(sysPath.join(
            watchPath,
            sysPath.relative(watchPath, fullPath)
          ));
          if (globFilter && !globFilter(path))
            return;
          const parent = sysPath.dirname(path);
          const item = sysPath.basename(path);
          const watchedDir = this.fsw._getWatchedDir(
            info.type === FSEVENT_TYPE_DIRECTORY ? path : parent
          );
          if (wrongEventFlags.has(flags) || info.event === FSEVENT_UNKNOWN) {
            if (typeof opts.ignored === FUNCTION_TYPE) {
              let stats;
              try {
                stats = await stat(path);
              } catch (error) {
              }
              if (this.fsw.closed)
                return;
              if (this.checkIgnored(path, stats))
                return;
              if (sameTypes(info, stats)) {
                this.addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts);
              } else {
                this.handleEvent(EV_UNLINK, path, fullPath, realPath, parent, watchedDir, item, info, opts);
              }
            } else {
              this.checkExists(path, fullPath, realPath, parent, watchedDir, item, info, opts);
            }
          } else {
            switch (info.event) {
              case FSEVENT_CREATED:
              case FSEVENT_MODIFIED:
                return this.addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts);
              case FSEVENT_DELETED:
              case FSEVENT_MOVED:
                return this.checkExists(path, fullPath, realPath, parent, watchedDir, item, info, opts);
            }
          }
        };
        const closer = setFSEventsListener(
          watchPath,
          realPath,
          watchCallback,
          this.fsw._emitRaw
        );
        this.fsw._emitReady();
        return closer;
      }
      /**
       * Handle symlinks encountered during directory scan
       * @param {String} linkPath path to symlink
       * @param {String} fullPath absolute path to the symlink
       * @param {Function} transform pre-existing path transformer
       * @param {Number} curDepth level of subdirectories traversed to where symlink is
       * @returns {Promise<void>}
       */
      async _handleFsEventsSymlink(linkPath, fullPath, transform, curDepth) {
        if (this.fsw.closed || this.fsw._symlinkPaths.has(fullPath))
          return;
        this.fsw._symlinkPaths.set(fullPath, true);
        this.fsw._incrReadyCount();
        try {
          const linkTarget = await realpath(linkPath);
          if (this.fsw.closed)
            return;
          if (this.fsw._isIgnored(linkTarget)) {
            return this.fsw._emitReady();
          }
          this.fsw._incrReadyCount();
          this._addToFsEvents(linkTarget || linkPath, (path) => {
            let aliasedPath = linkPath;
            if (linkTarget && linkTarget !== DOT_SLASH) {
              aliasedPath = path.replace(linkTarget, linkPath);
            } else if (path !== DOT_SLASH) {
              aliasedPath = sysPath.join(linkPath, path);
            }
            return transform(aliasedPath);
          }, false, curDepth);
        } catch (error) {
          if (this.fsw._handleError(error)) {
            return this.fsw._emitReady();
          }
        }
      }
      /**
       *
       * @param {Path} newPath
       * @param {fs.Stats} stats
       */
      emitAdd(newPath, stats, processPath, opts, forceAdd) {
        const pp = processPath(newPath);
        const isDir = stats.isDirectory();
        const dirObj = this.fsw._getWatchedDir(sysPath.dirname(pp));
        const base = sysPath.basename(pp);
        if (isDir)
          this.fsw._getWatchedDir(pp);
        if (dirObj.has(base))
          return;
        dirObj.add(base);
        if (!opts.ignoreInitial || forceAdd === true) {
          this.fsw._emit(isDir ? EV_ADD_DIR : EV_ADD, pp, stats);
        }
      }
      initWatch(realPath, path, wh, processPath) {
        if (this.fsw.closed)
          return;
        const closer = this._watchWithFsEvents(
          wh.watchPath,
          sysPath.resolve(realPath || wh.watchPath),
          processPath,
          wh.globFilter
        );
        this.fsw._addPathCloser(path, closer);
      }
      /**
       * Handle added path with fsevents
       * @param {String} path file/dir path or glob pattern
       * @param {Function|Boolean=} transform converts working path to what the user expects
       * @param {Boolean=} forceAdd ensure add is emitted
       * @param {Number=} priorDepth Level of subdirectories already traversed.
       * @returns {Promise<void>}
       */
      async _addToFsEvents(path, transform, forceAdd, priorDepth) {
        if (this.fsw.closed) {
          return;
        }
        const opts = this.fsw.options;
        const processPath = typeof transform === FUNCTION_TYPE ? transform : IDENTITY_FN;
        const wh = this.fsw._getWatchHelpers(path);
        try {
          const stats = await statMethods[wh.statMethod](wh.watchPath);
          if (this.fsw.closed)
            return;
          if (this.fsw._isIgnored(wh.watchPath, stats)) {
            throw null;
          }
          if (stats.isDirectory()) {
            if (!wh.globFilter)
              this.emitAdd(processPath(path), stats, processPath, opts, forceAdd);
            if (priorDepth && priorDepth > opts.depth)
              return;
            this.fsw._readdirp(wh.watchPath, __spreadValues({
              fileFilter: (entry) => wh.filterPath(entry),
              directoryFilter: (entry) => wh.filterDir(entry)
            }, Depth(opts.depth - (priorDepth || 0)))).on(STR_DATA, (entry) => {
              if (this.fsw.closed) {
                return;
              }
              if (entry.stats.isDirectory() && !wh.filterPath(entry))
                return;
              const joinedPath = sysPath.join(wh.watchPath, entry.path);
              const { fullPath } = entry;
              if (wh.followSymlinks && entry.stats.isSymbolicLink()) {
                const curDepth = opts.depth === void 0 ? void 0 : calcDepth(joinedPath, sysPath.resolve(wh.watchPath)) + 1;
                this._handleFsEventsSymlink(joinedPath, fullPath, processPath, curDepth);
              } else {
                this.emitAdd(joinedPath, entry.stats, processPath, opts, forceAdd);
              }
            }).on(EV_ERROR, EMPTY_FN).on(STR_END, () => {
              this.fsw._emitReady();
            });
          } else {
            this.emitAdd(wh.watchPath, stats, processPath, opts, forceAdd);
            this.fsw._emitReady();
          }
        } catch (error) {
          if (!error || this.fsw._handleError(error)) {
            this.fsw._emitReady();
            this.fsw._emitReady();
          }
        }
        if (opts.persistent && forceAdd !== true) {
          if (typeof transform === FUNCTION_TYPE) {
            this.initWatch(void 0, path, wh, processPath);
          } else {
            let realPath;
            try {
              realPath = await realpath(wh.watchPath);
            } catch (e) {
            }
            this.initWatch(realPath, path, wh, processPath);
          }
        }
      }
    };
    module2.exports = FsEventsHandler;
    module2.exports.canUse = canUse;
  }
});

// node_modules/chokidar/index.js
var require_chokidar = __commonJS({
  "node_modules/chokidar/index.js"(exports) {
    "use strict";
    var { EventEmitter } = require("events");
    var fs = require("fs");
    var sysPath = require("path");
    var { promisify } = require("util");
    var readdirp = require_readdirp();
    var anymatch = require_anymatch().default;
    var globParent = require_glob_parent();
    var isGlob = require_is_glob();
    var braces = require_braces();
    var normalizePath = require_normalize_path();
    var NodeFsHandler = require_nodefs_handler();
    var FsEventsHandler = require_fsevents_handler();
    var {
      EV_ALL,
      EV_READY,
      EV_ADD,
      EV_CHANGE,
      EV_UNLINK,
      EV_ADD_DIR,
      EV_UNLINK_DIR,
      EV_RAW,
      EV_ERROR,
      STR_CLOSE,
      STR_END,
      BACK_SLASH_RE,
      DOUBLE_SLASH_RE,
      SLASH_OR_BACK_SLASH_RE,
      DOT_RE,
      REPLACER_RE,
      SLASH,
      SLASH_SLASH,
      BRACE_START,
      BANG,
      ONE_DOT,
      TWO_DOTS,
      GLOBSTAR,
      SLASH_GLOBSTAR,
      ANYMATCH_OPTS,
      STRING_TYPE,
      FUNCTION_TYPE,
      EMPTY_STR,
      EMPTY_FN,
      isWindows,
      isMacos,
      isIBMi
    } = require_constants3();
    var stat = promisify(fs.stat);
    var readdir = promisify(fs.readdir);
    var arrify = (value = []) => Array.isArray(value) ? value : [value];
    var flatten = (list, result = []) => {
      list.forEach((item) => {
        if (Array.isArray(item)) {
          flatten(item, result);
        } else {
          result.push(item);
        }
      });
      return result;
    };
    var unifyPaths = (paths_) => {
      const paths = flatten(arrify(paths_));
      if (!paths.every((p) => typeof p === STRING_TYPE)) {
        throw new TypeError(`Non-string provided as watch path: ${paths}`);
      }
      return paths.map(normalizePathToUnix);
    };
    var toUnix = (string) => {
      let str = string.replace(BACK_SLASH_RE, SLASH);
      let prepend = false;
      if (str.startsWith(SLASH_SLASH)) {
        prepend = true;
      }
      while (str.match(DOUBLE_SLASH_RE)) {
        str = str.replace(DOUBLE_SLASH_RE, SLASH);
      }
      if (prepend) {
        str = SLASH + str;
      }
      return str;
    };
    var normalizePathToUnix = (path) => toUnix(sysPath.normalize(toUnix(path)));
    var normalizeIgnored = (cwd = EMPTY_STR) => (path) => {
      if (typeof path !== STRING_TYPE)
        return path;
      return normalizePathToUnix(sysPath.isAbsolute(path) ? path : sysPath.join(cwd, path));
    };
    var getAbsolutePath = (path, cwd) => {
      if (sysPath.isAbsolute(path)) {
        return path;
      }
      if (path.startsWith(BANG)) {
        return BANG + sysPath.join(cwd, path.slice(1));
      }
      return sysPath.join(cwd, path);
    };
    var undef = (opts, key) => opts[key] === void 0;
    var DirEntry = class {
      /**
       * @param {Path} dir
       * @param {Function} removeWatcher
       */
      constructor(dir, removeWatcher) {
        this.path = dir;
        this._removeWatcher = removeWatcher;
        this.items = /* @__PURE__ */ new Set();
      }
      add(item) {
        const { items } = this;
        if (!items)
          return;
        if (item !== ONE_DOT && item !== TWO_DOTS)
          items.add(item);
      }
      async remove(item) {
        const { items } = this;
        if (!items)
          return;
        items.delete(item);
        if (items.size > 0)
          return;
        const dir = this.path;
        try {
          await readdir(dir);
        } catch (err) {
          if (this._removeWatcher) {
            this._removeWatcher(sysPath.dirname(dir), sysPath.basename(dir));
          }
        }
      }
      has(item) {
        const { items } = this;
        if (!items)
          return;
        return items.has(item);
      }
      /**
       * @returns {Array<String>}
       */
      getChildren() {
        const { items } = this;
        if (!items)
          return;
        return [...items.values()];
      }
      dispose() {
        this.items.clear();
        delete this.path;
        delete this._removeWatcher;
        delete this.items;
        Object.freeze(this);
      }
    };
    var STAT_METHOD_F = "stat";
    var STAT_METHOD_L = "lstat";
    var WatchHelper = class {
      constructor(path, watchPath, follow, fsw) {
        this.fsw = fsw;
        this.path = path = path.replace(REPLACER_RE, EMPTY_STR);
        this.watchPath = watchPath;
        this.fullWatchPath = sysPath.resolve(watchPath);
        this.hasGlob = watchPath !== path;
        if (path === EMPTY_STR)
          this.hasGlob = false;
        this.globSymlink = this.hasGlob && follow ? void 0 : false;
        this.globFilter = this.hasGlob ? anymatch(path, void 0, ANYMATCH_OPTS) : false;
        this.dirParts = this.getDirParts(path);
        this.dirParts.forEach((parts) => {
          if (parts.length > 1)
            parts.pop();
        });
        this.followSymlinks = follow;
        this.statMethod = follow ? STAT_METHOD_F : STAT_METHOD_L;
      }
      checkGlobSymlink(entry) {
        if (this.globSymlink === void 0) {
          this.globSymlink = entry.fullParentDir === this.fullWatchPath ? false : { realPath: entry.fullParentDir, linkPath: this.fullWatchPath };
        }
        if (this.globSymlink) {
          return entry.fullPath.replace(this.globSymlink.realPath, this.globSymlink.linkPath);
        }
        return entry.fullPath;
      }
      entryPath(entry) {
        return sysPath.join(
          this.watchPath,
          sysPath.relative(this.watchPath, this.checkGlobSymlink(entry))
        );
      }
      filterPath(entry) {
        const { stats } = entry;
        if (stats && stats.isSymbolicLink())
          return this.filterDir(entry);
        const resolvedPath = this.entryPath(entry);
        const matchesGlob = this.hasGlob && typeof this.globFilter === FUNCTION_TYPE ? this.globFilter(resolvedPath) : true;
        return matchesGlob && this.fsw._isntIgnored(resolvedPath, stats) && this.fsw._hasReadPermissions(stats);
      }
      getDirParts(path) {
        if (!this.hasGlob)
          return [];
        const parts = [];
        const expandedPath = path.includes(BRACE_START) ? braces.expand(path) : [path];
        expandedPath.forEach((path2) => {
          parts.push(sysPath.relative(this.watchPath, path2).split(SLASH_OR_BACK_SLASH_RE));
        });
        return parts;
      }
      filterDir(entry) {
        if (this.hasGlob) {
          const entryParts = this.getDirParts(this.checkGlobSymlink(entry));
          let globstar = false;
          this.unmatchedGlob = !this.dirParts.some((parts) => {
            return parts.every((part, i) => {
              if (part === GLOBSTAR)
                globstar = true;
              return globstar || !entryParts[0][i] || anymatch(part, entryParts[0][i], ANYMATCH_OPTS);
            });
          });
        }
        return !this.unmatchedGlob && this.fsw._isntIgnored(this.entryPath(entry), entry.stats);
      }
    };
    var FSWatcher = class extends EventEmitter {
      // Not indenting methods for history sake; for now.
      constructor(_opts) {
        super();
        const opts = {};
        if (_opts)
          Object.assign(opts, _opts);
        this._watched = /* @__PURE__ */ new Map();
        this._closers = /* @__PURE__ */ new Map();
        this._ignoredPaths = /* @__PURE__ */ new Set();
        this._throttled = /* @__PURE__ */ new Map();
        this._symlinkPaths = /* @__PURE__ */ new Map();
        this._streams = /* @__PURE__ */ new Set();
        this.closed = false;
        if (undef(opts, "persistent"))
          opts.persistent = true;
        if (undef(opts, "ignoreInitial"))
          opts.ignoreInitial = false;
        if (undef(opts, "ignorePermissionErrors"))
          opts.ignorePermissionErrors = false;
        if (undef(opts, "interval"))
          opts.interval = 100;
        if (undef(opts, "binaryInterval"))
          opts.binaryInterval = 300;
        if (undef(opts, "disableGlobbing"))
          opts.disableGlobbing = false;
        opts.enableBinaryInterval = opts.binaryInterval !== opts.interval;
        if (undef(opts, "useFsEvents"))
          opts.useFsEvents = !opts.usePolling;
        const canUseFsEvents = FsEventsHandler.canUse();
        if (!canUseFsEvents)
          opts.useFsEvents = false;
        if (undef(opts, "usePolling") && !opts.useFsEvents) {
          opts.usePolling = isMacos;
        }
        if (isIBMi) {
          opts.usePolling = true;
        }
        const envPoll = process.env.CHOKIDAR_USEPOLLING;
        if (envPoll !== void 0) {
          const envLower = envPoll.toLowerCase();
          if (envLower === "false" || envLower === "0") {
            opts.usePolling = false;
          } else if (envLower === "true" || envLower === "1") {
            opts.usePolling = true;
          } else {
            opts.usePolling = !!envLower;
          }
        }
        const envInterval = process.env.CHOKIDAR_INTERVAL;
        if (envInterval) {
          opts.interval = Number.parseInt(envInterval, 10);
        }
        if (undef(opts, "atomic"))
          opts.atomic = !opts.usePolling && !opts.useFsEvents;
        if (opts.atomic)
          this._pendingUnlinks = /* @__PURE__ */ new Map();
        if (undef(opts, "followSymlinks"))
          opts.followSymlinks = true;
        if (undef(opts, "awaitWriteFinish"))
          opts.awaitWriteFinish = false;
        if (opts.awaitWriteFinish === true)
          opts.awaitWriteFinish = {};
        const awf = opts.awaitWriteFinish;
        if (awf) {
          if (!awf.stabilityThreshold)
            awf.stabilityThreshold = 2e3;
          if (!awf.pollInterval)
            awf.pollInterval = 100;
          this._pendingWrites = /* @__PURE__ */ new Map();
        }
        if (opts.ignored)
          opts.ignored = arrify(opts.ignored);
        let readyCalls = 0;
        this._emitReady = () => {
          readyCalls++;
          if (readyCalls >= this._readyCount) {
            this._emitReady = EMPTY_FN;
            this._readyEmitted = true;
            process.nextTick(() => this.emit(EV_READY));
          }
        };
        this._emitRaw = (...args) => this.emit(EV_RAW, ...args);
        this._readyEmitted = false;
        this.options = opts;
        if (opts.useFsEvents) {
          this._fsEventsHandler = new FsEventsHandler(this);
        } else {
          this._nodeFsHandler = new NodeFsHandler(this);
        }
        Object.freeze(opts);
      }
      // Public methods
      /**
       * Adds paths to be watched on an existing FSWatcher instance
       * @param {Path|Array<Path>} paths_
       * @param {String=} _origAdd private; for handling non-existent paths to be watched
       * @param {Boolean=} _internal private; indicates a non-user add
       * @returns {FSWatcher} for chaining
       */
      add(paths_, _origAdd, _internal) {
        const { cwd, disableGlobbing } = this.options;
        this.closed = false;
        let paths = unifyPaths(paths_);
        if (cwd) {
          paths = paths.map((path) => {
            const absPath = getAbsolutePath(path, cwd);
            if (disableGlobbing || !isGlob(path)) {
              return absPath;
            }
            return normalizePath(absPath);
          });
        }
        paths = paths.filter((path) => {
          if (path.startsWith(BANG)) {
            this._ignoredPaths.add(path.slice(1));
            return false;
          }
          this._ignoredPaths.delete(path);
          this._ignoredPaths.delete(path + SLASH_GLOBSTAR);
          this._userIgnored = void 0;
          return true;
        });
        if (this.options.useFsEvents && this._fsEventsHandler) {
          if (!this._readyCount)
            this._readyCount = paths.length;
          if (this.options.persistent)
            this._readyCount += paths.length;
          paths.forEach((path) => this._fsEventsHandler._addToFsEvents(path));
        } else {
          if (!this._readyCount)
            this._readyCount = 0;
          this._readyCount += paths.length;
          Promise.all(
            paths.map(async (path) => {
              const res = await this._nodeFsHandler._addToNodeFs(path, !_internal, 0, 0, _origAdd);
              if (res)
                this._emitReady();
              return res;
            })
          ).then((results) => {
            if (this.closed)
              return;
            results.filter((item) => item).forEach((item) => {
              this.add(sysPath.dirname(item), sysPath.basename(_origAdd || item));
            });
          });
        }
        return this;
      }
      /**
       * Close watchers or start ignoring events from specified paths.
       * @param {Path|Array<Path>} paths_ - string or array of strings, file/directory paths and/or globs
       * @returns {FSWatcher} for chaining
      */
      unwatch(paths_) {
        if (this.closed)
          return this;
        const paths = unifyPaths(paths_);
        const { cwd } = this.options;
        paths.forEach((path) => {
          if (!sysPath.isAbsolute(path) && !this._closers.has(path)) {
            if (cwd)
              path = sysPath.join(cwd, path);
            path = sysPath.resolve(path);
          }
          this._closePath(path);
          this._ignoredPaths.add(path);
          if (this._watched.has(path)) {
            this._ignoredPaths.add(path + SLASH_GLOBSTAR);
          }
          this._userIgnored = void 0;
        });
        return this;
      }
      /**
       * Close watchers and remove all listeners from watched paths.
       * @returns {Promise<void>}.
      */
      close() {
        if (this.closed)
          return this._closePromise;
        this.closed = true;
        this.removeAllListeners();
        const closers = [];
        this._closers.forEach((closerList) => closerList.forEach((closer) => {
          const promise = closer();
          if (promise instanceof Promise)
            closers.push(promise);
        }));
        this._streams.forEach((stream) => stream.destroy());
        this._userIgnored = void 0;
        this._readyCount = 0;
        this._readyEmitted = false;
        this._watched.forEach((dirent) => dirent.dispose());
        ["closers", "watched", "streams", "symlinkPaths", "throttled"].forEach((key) => {
          this[`_${key}`].clear();
        });
        this._closePromise = closers.length ? Promise.all(closers).then(() => void 0) : Promise.resolve();
        return this._closePromise;
      }
      /**
       * Expose list of watched paths
       * @returns {Object} for chaining
      */
      getWatched() {
        const watchList = {};
        this._watched.forEach((entry, dir) => {
          const key = this.options.cwd ? sysPath.relative(this.options.cwd, dir) : dir;
          watchList[key || ONE_DOT] = entry.getChildren().sort();
        });
        return watchList;
      }
      emitWithAll(event, args) {
        this.emit(...args);
        if (event !== EV_ERROR)
          this.emit(EV_ALL, ...args);
      }
      // Common helpers
      // --------------
      /**
       * Normalize and emit events.
       * Calling _emit DOES NOT MEAN emit() would be called!
       * @param {EventName} event Type of event
       * @param {Path} path File or directory path
       * @param {*=} val1 arguments to be passed with event
       * @param {*=} val2
       * @param {*=} val3
       * @returns the error if defined, otherwise the value of the FSWatcher instance's `closed` flag
       */
      async _emit(event, path, val1, val2, val3) {
        if (this.closed)
          return;
        const opts = this.options;
        if (isWindows)
          path = sysPath.normalize(path);
        if (opts.cwd)
          path = sysPath.relative(opts.cwd, path);
        const args = [event, path];
        if (val3 !== void 0)
          args.push(val1, val2, val3);
        else if (val2 !== void 0)
          args.push(val1, val2);
        else if (val1 !== void 0)
          args.push(val1);
        const awf = opts.awaitWriteFinish;
        let pw;
        if (awf && (pw = this._pendingWrites.get(path))) {
          pw.lastChange = /* @__PURE__ */ new Date();
          return this;
        }
        if (opts.atomic) {
          if (event === EV_UNLINK) {
            this._pendingUnlinks.set(path, args);
            setTimeout(() => {
              this._pendingUnlinks.forEach((entry, path2) => {
                this.emit(...entry);
                this.emit(EV_ALL, ...entry);
                this._pendingUnlinks.delete(path2);
              });
            }, typeof opts.atomic === "number" ? opts.atomic : 100);
            return this;
          }
          if (event === EV_ADD && this._pendingUnlinks.has(path)) {
            event = args[0] = EV_CHANGE;
            this._pendingUnlinks.delete(path);
          }
        }
        if (awf && (event === EV_ADD || event === EV_CHANGE) && this._readyEmitted) {
          const awfEmit = (err, stats) => {
            if (err) {
              event = args[0] = EV_ERROR;
              args[1] = err;
              this.emitWithAll(event, args);
            } else if (stats) {
              if (args.length > 2) {
                args[2] = stats;
              } else {
                args.push(stats);
              }
              this.emitWithAll(event, args);
            }
          };
          this._awaitWriteFinish(path, awf.stabilityThreshold, event, awfEmit);
          return this;
        }
        if (event === EV_CHANGE) {
          const isThrottled = !this._throttle(EV_CHANGE, path, 50);
          if (isThrottled)
            return this;
        }
        if (opts.alwaysStat && val1 === void 0 && (event === EV_ADD || event === EV_ADD_DIR || event === EV_CHANGE)) {
          const fullPath = opts.cwd ? sysPath.join(opts.cwd, path) : path;
          let stats;
          try {
            stats = await stat(fullPath);
          } catch (err) {
          }
          if (!stats || this.closed)
            return;
          args.push(stats);
        }
        this.emitWithAll(event, args);
        return this;
      }
      /**
       * Common handler for errors
       * @param {Error} error
       * @returns {Error|Boolean} The error if defined, otherwise the value of the FSWatcher instance's `closed` flag
       */
      _handleError(error) {
        const code = error && error.code;
        if (error && code !== "ENOENT" && code !== "ENOTDIR" && (!this.options.ignorePermissionErrors || code !== "EPERM" && code !== "EACCES")) {
          this.emit(EV_ERROR, error);
        }
        return error || this.closed;
      }
      /**
       * Helper utility for throttling
       * @param {ThrottleType} actionType type being throttled
       * @param {Path} path being acted upon
       * @param {Number} timeout duration of time to suppress duplicate actions
       * @returns {Object|false} tracking object or false if action should be suppressed
       */
      _throttle(actionType, path, timeout) {
        if (!this._throttled.has(actionType)) {
          this._throttled.set(actionType, /* @__PURE__ */ new Map());
        }
        const action = this._throttled.get(actionType);
        const actionPath = action.get(path);
        if (actionPath) {
          actionPath.count++;
          return false;
        }
        let timeoutObject;
        const clear = () => {
          const item = action.get(path);
          const count = item ? item.count : 0;
          action.delete(path);
          clearTimeout(timeoutObject);
          if (item)
            clearTimeout(item.timeoutObject);
          return count;
        };
        timeoutObject = setTimeout(clear, timeout);
        const thr = { timeoutObject, clear, count: 0 };
        action.set(path, thr);
        return thr;
      }
      _incrReadyCount() {
        return this._readyCount++;
      }
      /**
       * Awaits write operation to finish.
       * Polls a newly created file for size variations. When files size does not change for 'threshold' milliseconds calls callback.
       * @param {Path} path being acted upon
       * @param {Number} threshold Time in milliseconds a file size must be fixed before acknowledging write OP is finished
       * @param {EventName} event
       * @param {Function} awfEmit Callback to be called when ready for event to be emitted.
       */
      _awaitWriteFinish(path, threshold, event, awfEmit) {
        let timeoutHandler;
        let fullPath = path;
        if (this.options.cwd && !sysPath.isAbsolute(path)) {
          fullPath = sysPath.join(this.options.cwd, path);
        }
        const now = /* @__PURE__ */ new Date();
        const awaitWriteFinish = (prevStat) => {
          fs.stat(fullPath, (err, curStat) => {
            if (err || !this._pendingWrites.has(path)) {
              if (err && err.code !== "ENOENT")
                awfEmit(err);
              return;
            }
            const now2 = Number(/* @__PURE__ */ new Date());
            if (prevStat && curStat.size !== prevStat.size) {
              this._pendingWrites.get(path).lastChange = now2;
            }
            const pw = this._pendingWrites.get(path);
            const df = now2 - pw.lastChange;
            if (df >= threshold) {
              this._pendingWrites.delete(path);
              awfEmit(void 0, curStat);
            } else {
              timeoutHandler = setTimeout(
                awaitWriteFinish,
                this.options.awaitWriteFinish.pollInterval,
                curStat
              );
            }
          });
        };
        if (!this._pendingWrites.has(path)) {
          this._pendingWrites.set(path, {
            lastChange: now,
            cancelWait: () => {
              this._pendingWrites.delete(path);
              clearTimeout(timeoutHandler);
              return event;
            }
          });
          timeoutHandler = setTimeout(
            awaitWriteFinish,
            this.options.awaitWriteFinish.pollInterval
          );
        }
      }
      _getGlobIgnored() {
        return [...this._ignoredPaths.values()];
      }
      /**
       * Determines whether user has asked to ignore this path.
       * @param {Path} path filepath or dir
       * @param {fs.Stats=} stats result of fs.stat
       * @returns {Boolean}
       */
      _isIgnored(path, stats) {
        if (this.options.atomic && DOT_RE.test(path))
          return true;
        if (!this._userIgnored) {
          const { cwd } = this.options;
          const ign = this.options.ignored;
          const ignored = ign && ign.map(normalizeIgnored(cwd));
          const paths = arrify(ignored).filter((path2) => typeof path2 === STRING_TYPE && !isGlob(path2)).map((path2) => path2 + SLASH_GLOBSTAR);
          const list = this._getGlobIgnored().map(normalizeIgnored(cwd)).concat(ignored, paths);
          this._userIgnored = anymatch(list, void 0, ANYMATCH_OPTS);
        }
        return this._userIgnored([path, stats]);
      }
      _isntIgnored(path, stat2) {
        return !this._isIgnored(path, stat2);
      }
      /**
       * Provides a set of common helpers and properties relating to symlink and glob handling.
       * @param {Path} path file, directory, or glob pattern being watched
       * @param {Number=} depth at any depth > 0, this isn't a glob
       * @returns {WatchHelper} object containing helpers for this path
       */
      _getWatchHelpers(path, depth) {
        const watchPath = depth || this.options.disableGlobbing || !isGlob(path) ? path : globParent(path);
        const follow = this.options.followSymlinks;
        return new WatchHelper(path, watchPath, follow, this);
      }
      // Directory helpers
      // -----------------
      /**
       * Provides directory tracking objects
       * @param {String} directory path of the directory
       * @returns {DirEntry} the directory's tracking object
       */
      _getWatchedDir(directory) {
        if (!this._boundRemove)
          this._boundRemove = this._remove.bind(this);
        const dir = sysPath.resolve(directory);
        if (!this._watched.has(dir))
          this._watched.set(dir, new DirEntry(dir, this._boundRemove));
        return this._watched.get(dir);
      }
      // File helpers
      // ------------
      /**
       * Check for read permissions.
       * Based on this answer on SO: https://stackoverflow.com/a/11781404/1358405
       * @param {fs.Stats} stats - object, result of fs_stat
       * @returns {Boolean} indicates whether the file can be read
      */
      _hasReadPermissions(stats) {
        if (this.options.ignorePermissionErrors)
          return true;
        const md = stats && Number.parseInt(stats.mode, 10);
        const st = md & 511;
        const it = Number.parseInt(st.toString(8)[0], 10);
        return Boolean(4 & it);
      }
      /**
       * Handles emitting unlink events for
       * files and directories, and via recursion, for
       * files and directories within directories that are unlinked
       * @param {String} directory within which the following item is located
       * @param {String} item      base path of item/directory
       * @returns {void}
      */
      _remove(directory, item, isDirectory) {
        const path = sysPath.join(directory, item);
        const fullPath = sysPath.resolve(path);
        isDirectory = isDirectory != null ? isDirectory : this._watched.has(path) || this._watched.has(fullPath);
        if (!this._throttle("remove", path, 100))
          return;
        if (!isDirectory && !this.options.useFsEvents && this._watched.size === 1) {
          this.add(directory, item, true);
        }
        const wp = this._getWatchedDir(path);
        const nestedDirectoryChildren = wp.getChildren();
        nestedDirectoryChildren.forEach((nested) => this._remove(path, nested));
        const parent = this._getWatchedDir(directory);
        const wasTracked = parent.has(item);
        parent.remove(item);
        if (this._symlinkPaths.has(fullPath)) {
          this._symlinkPaths.delete(fullPath);
        }
        let relPath = path;
        if (this.options.cwd)
          relPath = sysPath.relative(this.options.cwd, path);
        if (this.options.awaitWriteFinish && this._pendingWrites.has(relPath)) {
          const event = this._pendingWrites.get(relPath).cancelWait();
          if (event === EV_ADD)
            return;
        }
        this._watched.delete(path);
        this._watched.delete(fullPath);
        const eventName = isDirectory ? EV_UNLINK_DIR : EV_UNLINK;
        if (wasTracked && !this._isIgnored(path))
          this._emit(eventName, path);
        if (!this.options.useFsEvents) {
          this._closePath(path);
        }
      }
      /**
       * Closes all watchers for a path
       * @param {Path} path
       */
      _closePath(path) {
        this._closeFile(path);
        const dir = sysPath.dirname(path);
        this._getWatchedDir(dir).remove(sysPath.basename(path));
      }
      /**
       * Closes only file-specific watchers
       * @param {Path} path
       */
      _closeFile(path) {
        const closers = this._closers.get(path);
        if (!closers)
          return;
        closers.forEach((closer) => closer());
        this._closers.delete(path);
      }
      /**
       *
       * @param {Path} path
       * @param {Function} closer
       */
      _addPathCloser(path, closer) {
        if (!closer)
          return;
        let list = this._closers.get(path);
        if (!list) {
          list = [];
          this._closers.set(path, list);
        }
        list.push(closer);
      }
      _readdirp(root, opts) {
        if (this.closed)
          return;
        const options = __spreadValues({ type: EV_ALL, alwaysStat: true, lstat: true }, opts);
        let stream = readdirp(root, options);
        this._streams.add(stream);
        stream.once(STR_CLOSE, () => {
          stream = void 0;
        });
        stream.once(STR_END, () => {
          if (stream) {
            this._streams.delete(stream);
            stream = void 0;
          }
        });
        return stream;
      }
    };
    exports.FSWatcher = FSWatcher;
    var watch = (paths, options) => {
      const watcher = new FSWatcher(options);
      watcher.add(paths);
      return watcher;
    };
    exports.watch = watch;
  }
});

// node_modules/camelcase/index.js
var require_camelcase = __commonJS({
  "node_modules/camelcase/index.js"(exports, module2) {
    "use strict";
    var UPPERCASE = /[\p{Lu}]/u;
    var LOWERCASE = /[\p{Ll}]/u;
    var LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
    var IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
    var SEPARATORS = /[_.\- ]+/;
    var LEADING_SEPARATORS = new RegExp("^" + SEPARATORS.source);
    var SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, "gu");
    var NUMBERS_AND_IDENTIFIER = new RegExp("\\d+" + IDENTIFIER.source, "gu");
    var preserveCamelCase = (string, toLowerCase, toUpperCase) => {
      let isLastCharLower = false;
      let isLastCharUpper = false;
      let isLastLastCharUpper = false;
      for (let i = 0; i < string.length; i++) {
        const character = string[i];
        if (isLastCharLower && UPPERCASE.test(character)) {
          string = string.slice(0, i) + "-" + string.slice(i);
          isLastCharLower = false;
          isLastLastCharUpper = isLastCharUpper;
          isLastCharUpper = true;
          i++;
        } else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
          string = string.slice(0, i - 1) + "-" + string.slice(i - 1);
          isLastLastCharUpper = isLastCharUpper;
          isLastCharUpper = false;
          isLastCharLower = true;
        } else {
          isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
          isLastLastCharUpper = isLastCharUpper;
          isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
        }
      }
      return string;
    };
    var preserveConsecutiveUppercase = (input, toLowerCase) => {
      LEADING_CAPITAL.lastIndex = 0;
      return input.replace(LEADING_CAPITAL, (m1) => toLowerCase(m1));
    };
    var postProcess = (input, toUpperCase) => {
      SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
      NUMBERS_AND_IDENTIFIER.lastIndex = 0;
      return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier)).replace(NUMBERS_AND_IDENTIFIER, (m) => toUpperCase(m));
    };
    var camelCase = (input, options) => {
      if (!(typeof input === "string" || Array.isArray(input))) {
        throw new TypeError("Expected the input to be `string | string[]`");
      }
      options = __spreadValues({
        pascalCase: false,
        preserveConsecutiveUppercase: false
      }, options);
      if (Array.isArray(input)) {
        input = input.map((x) => x.trim()).filter((x) => x.length).join("-");
      } else {
        input = input.trim();
      }
      if (input.length === 0) {
        return "";
      }
      const toLowerCase = options.locale === false ? (string) => string.toLowerCase() : (string) => string.toLocaleLowerCase(options.locale);
      const toUpperCase = options.locale === false ? (string) => string.toUpperCase() : (string) => string.toLocaleUpperCase(options.locale);
      if (input.length === 1) {
        return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
      }
      const hasUpperCase = input !== toLowerCase(input);
      if (hasUpperCase) {
        input = preserveCamelCase(input, toLowerCase, toUpperCase);
      }
      input = input.replace(LEADING_SEPARATORS, "");
      if (options.preserveConsecutiveUppercase) {
        input = preserveConsecutiveUppercase(input, toLowerCase);
      } else {
        input = toLowerCase(input);
      }
      if (options.pascalCase) {
        input = toUpperCase(input.charAt(0)) + input.slice(1);
      }
      return postProcess(input, toUpperCase);
    };
    module2.exports = camelCase;
    module2.exports.default = camelCase;
  }
});

// node_modules/@jsdevtools/ono/esm/to-json.js
function toJSON() {
  let pojo = {};
  let error = this;
  for (let key of getDeepKeys(error)) {
    if (typeof key === "string") {
      let value = error[key];
      let type = typeof value;
      if (!nonJsonTypes.includes(type)) {
        pojo[key] = value;
      }
    }
  }
  return pojo;
}
function getDeepKeys(obj, omit = []) {
  let keys = [];
  while (obj && obj !== objectPrototype) {
    keys = keys.concat(Object.getOwnPropertyNames(obj), Object.getOwnPropertySymbols(obj));
    obj = Object.getPrototypeOf(obj);
  }
  let uniqueKeys = new Set(keys);
  for (let key of omit.concat(protectedProps)) {
    uniqueKeys.delete(key);
  }
  return uniqueKeys;
}
var nonJsonTypes, protectedProps, objectPrototype;
var init_to_json = __esm({
  "node_modules/@jsdevtools/ono/esm/to-json.js"() {
    nonJsonTypes = ["function", "symbol", "undefined"];
    protectedProps = ["constructor", "prototype", "__proto__"];
    objectPrototype = Object.getPrototypeOf({});
  }
});

// node_modules/@jsdevtools/ono/esm/isomorphic.node.js
function addInspectMethod(newError) {
  newError[inspectMethod] = inspect2;
}
function inspect2() {
  let pojo = {};
  let error = this;
  for (let key of getDeepKeys(error)) {
    let value = error[key];
    pojo[key] = value;
  }
  delete pojo[inspectMethod];
  return pojo;
}
var util, inspectMethod, format2;
var init_isomorphic_node = __esm({
  "node_modules/@jsdevtools/ono/esm/isomorphic.node.js"() {
    util = __toESM(require("util"));
    init_to_json();
    inspectMethod = util.inspect.custom || Symbol.for("nodejs.util.inspect.custom");
    format2 = util.format;
  }
});

// node_modules/@jsdevtools/ono/esm/stack.js
function isLazyStack(stackProp) {
  return Boolean(stackProp && stackProp.configurable && typeof stackProp.get === "function");
}
function isWritableStack(stackProp) {
  return Boolean(
    // If there is no stack property, then it's writable, since assigning it will create it
    !stackProp || stackProp.writable || typeof stackProp.set === "function"
  );
}
function joinStacks(newError, originalError) {
  let newStack = popStack(newError.stack);
  let originalStack = originalError ? originalError.stack : void 0;
  if (newStack && originalStack) {
    return newStack + "\n\n" + originalStack;
  } else {
    return newStack || originalStack;
  }
}
function lazyJoinStacks(lazyStack, newError, originalError) {
  if (originalError) {
    Object.defineProperty(newError, "stack", {
      get: () => {
        let newStack = lazyStack.get.apply(newError);
        return joinStacks({ stack: newStack }, originalError);
      },
      enumerable: false,
      configurable: true
    });
  } else {
    lazyPopStack(newError, lazyStack);
  }
}
function popStack(stack) {
  if (stack) {
    let lines = stack.split(newline);
    let onoStart;
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      if (onoCall.test(line)) {
        if (onoStart === void 0) {
          onoStart = i;
        }
      } else if (onoStart !== void 0) {
        lines.splice(onoStart, i - onoStart);
        break;
      }
    }
    if (lines.length > 0) {
      return lines.join("\n");
    }
  }
  return stack;
}
function lazyPopStack(error, lazyStack) {
  Object.defineProperty(error, "stack", {
    get: () => popStack(lazyStack.get.apply(error)),
    enumerable: false,
    configurable: true
  });
}
var newline, onoCall;
var init_stack = __esm({
  "node_modules/@jsdevtools/ono/esm/stack.js"() {
    newline = /\r?\n/;
    onoCall = /\bono[ @]/;
  }
});

// node_modules/@jsdevtools/ono/esm/extend-error.js
function extendError(error, originalError, props) {
  let onoError = error;
  extendStack(onoError, originalError);
  if (originalError && typeof originalError === "object") {
    mergeErrors(onoError, originalError);
  }
  onoError.toJSON = toJSON;
  if (addInspectMethod) {
    addInspectMethod(onoError);
  }
  if (props && typeof props === "object") {
    Object.assign(onoError, props);
  }
  return onoError;
}
function extendStack(newError, originalError) {
  let stackProp = Object.getOwnPropertyDescriptor(newError, "stack");
  if (isLazyStack(stackProp)) {
    lazyJoinStacks(stackProp, newError, originalError);
  } else if (isWritableStack(stackProp)) {
    newError.stack = joinStacks(newError, originalError);
  }
}
function mergeErrors(newError, originalError) {
  let keys = getDeepKeys(originalError, protectedProps2);
  let _newError = newError;
  let _originalError = originalError;
  for (let key of keys) {
    if (_newError[key] === void 0) {
      try {
        _newError[key] = _originalError[key];
      } catch (e) {
      }
    }
  }
}
var protectedProps2;
var init_extend_error = __esm({
  "node_modules/@jsdevtools/ono/esm/extend-error.js"() {
    init_isomorphic_node();
    init_stack();
    init_to_json();
    protectedProps2 = ["name", "message", "stack"];
  }
});

// node_modules/@jsdevtools/ono/esm/normalize.js
function normalizeOptions(options) {
  options = options || {};
  return {
    concatMessages: options.concatMessages === void 0 ? true : Boolean(options.concatMessages),
    format: options.format === void 0 ? format2 : typeof options.format === "function" ? options.format : false
  };
}
function normalizeArgs(args, options) {
  let originalError;
  let props;
  let formatArgs;
  let message = "";
  if (typeof args[0] === "string") {
    formatArgs = args;
  } else if (typeof args[1] === "string") {
    if (args[0] instanceof Error) {
      originalError = args[0];
    } else {
      props = args[0];
    }
    formatArgs = args.slice(1);
  } else {
    originalError = args[0];
    props = args[1];
    formatArgs = args.slice(2);
  }
  if (formatArgs.length > 0) {
    if (options.format) {
      message = options.format.apply(void 0, formatArgs);
    } else {
      message = formatArgs.join(" ");
    }
  }
  if (options.concatMessages && originalError && originalError.message) {
    message += (message ? " \n" : "") + originalError.message;
  }
  return { originalError, props, message };
}
var init_normalize = __esm({
  "node_modules/@jsdevtools/ono/esm/normalize.js"() {
    init_isomorphic_node();
  }
});

// node_modules/@jsdevtools/ono/esm/constructor.js
function Ono(ErrorConstructor, options) {
  options = normalizeOptions(options);
  function ono2(...args) {
    let { originalError, props, message } = normalizeArgs(args, options);
    let newError = new ErrorConstructor(message);
    return extendError(newError, originalError, props);
  }
  ono2[Symbol.species] = ErrorConstructor;
  return ono2;
}
var constructor;
var init_constructor = __esm({
  "node_modules/@jsdevtools/ono/esm/constructor.js"() {
    init_extend_error();
    init_normalize();
    init_to_json();
    constructor = Ono;
    Ono.toJSON = function toJSON2(error) {
      return toJSON.call(error);
    };
    Ono.extend = function extend(error, originalError, props) {
      if (props || originalError instanceof Error) {
        return extendError(error, originalError, props);
      } else if (originalError) {
        return extendError(error, void 0, originalError);
      } else {
        return extendError(error);
      }
    };
  }
});

// node_modules/@jsdevtools/ono/esm/singleton.js
function ono(...args) {
  let originalError = args[0];
  if (typeof originalError === "object" && typeof originalError.name === "string") {
    for (let typedOno of Object.values(onoMap)) {
      if (typeof typedOno === "function" && typedOno.name === "ono") {
        let species = typedOno[Symbol.species];
        if (species && species !== Error && (originalError instanceof species || originalError.name === species.name)) {
          return typedOno.apply(void 0, args);
        }
      }
    }
  }
  return ono.error.apply(void 0, args);
}
var singleton, onoMap;
var init_singleton = __esm({
  "node_modules/@jsdevtools/ono/esm/singleton.js"() {
    init_constructor();
    singleton = ono;
    ono.error = new constructor(Error);
    ono.eval = new constructor(EvalError);
    ono.range = new constructor(RangeError);
    ono.reference = new constructor(ReferenceError);
    ono.syntax = new constructor(SyntaxError);
    ono.type = new constructor(TypeError);
    ono.uri = new constructor(URIError);
    onoMap = ono;
  }
});

// node_modules/@jsdevtools/ono/esm/types.js
var init_types = __esm({
  "node_modules/@jsdevtools/ono/esm/types.js"() {
  }
});

// node_modules/@jsdevtools/ono/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  Ono: () => constructor,
  default: () => esm_default,
  ono: () => singleton
});
var esm_default;
var init_esm = __esm({
  "node_modules/@jsdevtools/ono/esm/index.js"() {
    init_singleton();
    init_constructor();
    init_types();
    esm_default = singleton;
    if (typeof module === "object" && typeof module.exports === "object") {
      module.exports = Object.assign(module.exports.default, module.exports);
    }
  }
});

// node_modules/@apidevtools/json-schema-ref-parser/lib/util/url.js
var require_url = __commonJS({
  "node_modules/@apidevtools/json-schema-ref-parser/lib/util/url.js"(exports, module2) {
    "use strict";
    var isWindows = /^win/.test(process.platform);
    var forwardSlashPattern = /\//g;
    var protocolPattern = /^(\w{2,}):\/\//i;
    var url = module2.exports;
    var jsonPointerSlash = /~1/g;
    var jsonPointerTilde = /~0/g;
    var urlEncodePatterns = [
      /\?/g,
      "%3F",
      /\#/g,
      "%23"
    ];
    var urlDecodePatterns = [
      /\%23/g,
      "#",
      /\%24/g,
      "$",
      /\%26/g,
      "&",
      /\%2C/g,
      ",",
      /\%40/g,
      "@"
    ];
    exports.parse = require("url").parse;
    exports.resolve = require("url").resolve;
    exports.cwd = function cwd() {
      if (process.browser) {
        return location.href;
      }
      let path = process.cwd();
      let lastChar = path.slice(-1);
      if (lastChar === "/" || lastChar === "\\") {
        return path;
      } else {
        return path + "/";
      }
    };
    exports.getProtocol = function getProtocol(path) {
      let match = protocolPattern.exec(path);
      if (match) {
        return match[1].toLowerCase();
      }
    };
    exports.getExtension = function getExtension(path) {
      let lastDot = path.lastIndexOf(".");
      if (lastDot >= 0) {
        return url.stripQuery(path.substr(lastDot).toLowerCase());
      }
      return "";
    };
    exports.stripQuery = function stripQuery(path) {
      let queryIndex = path.indexOf("?");
      if (queryIndex >= 0) {
        path = path.substr(0, queryIndex);
      }
      return path;
    };
    exports.getHash = function getHash(path) {
      let hashIndex = path.indexOf("#");
      if (hashIndex >= 0) {
        return path.substr(hashIndex);
      }
      return "#";
    };
    exports.stripHash = function stripHash(path) {
      let hashIndex = path.indexOf("#");
      if (hashIndex >= 0) {
        path = path.substr(0, hashIndex);
      }
      return path;
    };
    exports.isHttp = function isHttp(path) {
      let protocol = url.getProtocol(path);
      if (protocol === "http" || protocol === "https") {
        return true;
      } else if (protocol === void 0) {
        return process.browser;
      } else {
        return false;
      }
    };
    exports.isFileSystemPath = function isFileSystemPath(path) {
      if (process.browser) {
        return false;
      }
      let protocol = url.getProtocol(path);
      return protocol === void 0 || protocol === "file";
    };
    exports.fromFileSystemPath = function fromFileSystemPath(path) {
      if (isWindows) {
        path = path.replace(/\\/g, "/");
      }
      path = encodeURI(path);
      for (let i = 0; i < urlEncodePatterns.length; i += 2) {
        path = path.replace(urlEncodePatterns[i], urlEncodePatterns[i + 1]);
      }
      return path;
    };
    exports.toFileSystemPath = function toFileSystemPath(path, keepFileProtocol) {
      path = decodeURI(path);
      for (let i = 0; i < urlDecodePatterns.length; i += 2) {
        path = path.replace(urlDecodePatterns[i], urlDecodePatterns[i + 1]);
      }
      let isFileUrl = path.substr(0, 7).toLowerCase() === "file://";
      if (isFileUrl) {
        path = path[7] === "/" ? path.substr(8) : path.substr(7);
        if (isWindows && path[1] === "/") {
          path = path[0] + ":" + path.substr(1);
        }
        if (keepFileProtocol) {
          path = "file:///" + path;
        } else {
          isFileUrl = false;
          path = isWindows ? path : "/" + path;
        }
      }
      if (isWindows && !isFileUrl) {
        path = path.replace(forwardSlashPattern, "\\");
        if (path.substr(1, 2) === ":\\") {
          path = path[0].toUpperCase() + path.substr(1);
        }
      }
      return path;
    };
    exports.safePointerToPath = function safePointerToPath(pointer) {
      if (pointer.length <= 1 || pointer[0] !== "#" || pointer[1] !== "/") {
        return [];
      }
      return pointer.slice(2).split("/").map((value) => {
        return decodeURIComponent(value).replace(jsonPointerSlash, "/").replace(jsonPointerTilde, "~");
      });
    };
  }
});

// node_modules/@apidevtools/json-schema-ref-parser/lib/util/errors.js
var require_errors = __commonJS({
  "node_modules/@apidevtools/json-schema-ref-parser/lib/util/errors.js"(exports) {
    "use strict";
    var { Ono: Ono2 } = (init_esm(), __toCommonJS(esm_exports));
    var { stripHash, toFileSystemPath } = require_url();
    var JSONParserError = exports.JSONParserError = class JSONParserError extends Error {
      constructor(message, source) {
        super();
        this.code = "EUNKNOWN";
        this.message = message;
        this.source = source;
        this.path = null;
        Ono2.extend(this);
      }
      get footprint() {
        return `${this.path}+${this.source}+${this.code}+${this.message}`;
      }
    };
    setErrorName(JSONParserError);
    var JSONParserErrorGroup = exports.JSONParserErrorGroup = class JSONParserErrorGroup2 extends Error {
      constructor(parser) {
        super();
        this.files = parser;
        this.message = `${this.errors.length} error${this.errors.length > 1 ? "s" : ""} occurred while reading '${toFileSystemPath(parser.$refs._root$Ref.path)}'`;
        Ono2.extend(this);
      }
      static getParserErrors(parser) {
        const errors = [];
        for (const $ref of Object.values(parser.$refs._$refs)) {
          if ($ref.errors) {
            errors.push(...$ref.errors);
          }
        }
        return errors;
      }
      get errors() {
        return JSONParserErrorGroup2.getParserErrors(this.files);
      }
    };
    setErrorName(JSONParserErrorGroup);
    var ParserError = exports.ParserError = class ParserError extends JSONParserError {
      constructor(message, source) {
        super(`Error parsing ${source}: ${message}`, source);
        this.code = "EPARSER";
      }
    };
    setErrorName(ParserError);
    var UnmatchedParserError = exports.UnmatchedParserError = class UnmatchedParserError extends JSONParserError {
      constructor(source) {
        super(`Could not find parser for "${source}"`, source);
        this.code = "EUNMATCHEDPARSER";
      }
    };
    setErrorName(UnmatchedParserError);
    var ResolverError = exports.ResolverError = class ResolverError extends JSONParserError {
      constructor(ex, source) {
        super(ex.message || `Error reading file "${source}"`, source);
        this.code = "ERESOLVER";
        if ("code" in ex) {
          this.ioErrorCode = String(ex.code);
        }
      }
    };
    setErrorName(ResolverError);
    var UnmatchedResolverError = exports.UnmatchedResolverError = class UnmatchedResolverError extends JSONParserError {
      constructor(source) {
        super(`Could not find resolver for "${source}"`, source);
        this.code = "EUNMATCHEDRESOLVER";
      }
    };
    setErrorName(UnmatchedResolverError);
    var MissingPointerError = exports.MissingPointerError = class MissingPointerError extends JSONParserError {
      constructor(token, path) {
        super(`Token "${token}" does not exist.`, stripHash(path));
        this.code = "EMISSINGPOINTER";
      }
    };
    setErrorName(MissingPointerError);
    var InvalidPointerError = exports.InvalidPointerError = class InvalidPointerError extends JSONParserError {
      constructor(pointer, path) {
        super(`Invalid $ref pointer "${pointer}". Pointers must begin with "#/"`, stripHash(path));
        this.code = "EINVALIDPOINTER";
      }
    };
    setErrorName(InvalidPointerError);
    function setErrorName(err) {
      Object.defineProperty(err.prototype, "name", {
        value: err.name,
        enumerable: true
      });
    }
    exports.isHandledError = function(err) {
      return err instanceof JSONParserError || err instanceof JSONParserErrorGroup;
    };
    exports.normalizeError = function(err) {
      if (err.path === null) {
        err.path = [];
      }
      return err;
    };
  }
});

// node_modules/@apidevtools/json-schema-ref-parser/lib/pointer.js
var require_pointer = __commonJS({
  "node_modules/@apidevtools/json-schema-ref-parser/lib/pointer.js"(exports, module2) {
    "use strict";
    module2.exports = Pointer;
    var $Ref = require_ref();
    var url = require_url();
    var { JSONParserError, InvalidPointerError, MissingPointerError, isHandledError } = require_errors();
    var slashes = /\//g;
    var tildes = /~/g;
    var escapedSlash = /~1/g;
    var escapedTilde = /~0/g;
    function Pointer($ref, path, friendlyPath) {
      this.$ref = $ref;
      this.path = path;
      this.originalPath = friendlyPath || path;
      this.value = void 0;
      this.circular = false;
      this.indirections = 0;
    }
    Pointer.prototype.resolve = function(obj, options, pathFromRoot) {
      let tokens = Pointer.parse(this.path, this.originalPath);
      this.value = unwrapOrThrow(obj);
      for (let i = 0; i < tokens.length; i++) {
        if (resolveIf$Ref(this, options)) {
          this.path = Pointer.join(this.path, tokens.slice(i));
        }
        if (typeof this.value === "object" && this.value !== null && "$ref" in this.value) {
          return this;
        }
        let token = tokens[i];
        if (this.value[token] === void 0 || this.value[token] === null) {
          this.value = null;
          throw new MissingPointerError(token, this.originalPath);
        } else {
          this.value = this.value[token];
        }
      }
      if (!this.value || this.value.$ref && url.resolve(this.path, this.value.$ref) !== pathFromRoot) {
        resolveIf$Ref(this, options);
      }
      return this;
    };
    Pointer.prototype.set = function(obj, value, options) {
      let tokens = Pointer.parse(this.path);
      let token;
      if (tokens.length === 0) {
        this.value = value;
        return value;
      }
      this.value = unwrapOrThrow(obj);
      for (let i = 0; i < tokens.length - 1; i++) {
        resolveIf$Ref(this, options);
        token = tokens[i];
        if (this.value && this.value[token] !== void 0) {
          this.value = this.value[token];
        } else {
          this.value = setValue(this, token, {});
        }
      }
      resolveIf$Ref(this, options);
      token = tokens[tokens.length - 1];
      setValue(this, token, value);
      return obj;
    };
    Pointer.parse = function(path, originalPath) {
      let pointer = url.getHash(path).substr(1);
      if (!pointer) {
        return [];
      }
      pointer = pointer.split("/");
      for (let i = 0; i < pointer.length; i++) {
        pointer[i] = decodeURIComponent(pointer[i].replace(escapedSlash, "/").replace(escapedTilde, "~"));
      }
      if (pointer[0] !== "") {
        throw new InvalidPointerError(pointer, originalPath === void 0 ? path : originalPath);
      }
      return pointer.slice(1);
    };
    Pointer.join = function(base, tokens) {
      if (base.indexOf("#") === -1) {
        base += "#";
      }
      tokens = Array.isArray(tokens) ? tokens : [tokens];
      for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        base += "/" + encodeURIComponent(token.replace(tildes, "~0").replace(slashes, "~1"));
      }
      return base;
    };
    function resolveIf$Ref(pointer, options) {
      if ($Ref.isAllowed$Ref(pointer.value, options)) {
        let $refPath = url.resolve(pointer.path, pointer.value.$ref);
        if ($refPath === pointer.path) {
          pointer.circular = true;
        } else {
          let resolved = pointer.$ref.$refs._resolve($refPath, pointer.path, options);
          if (resolved === null) {
            return false;
          }
          pointer.indirections += resolved.indirections + 1;
          if ($Ref.isExtended$Ref(pointer.value)) {
            pointer.value = $Ref.dereference(pointer.value, resolved.value);
            return false;
          } else {
            pointer.$ref = resolved.$ref;
            pointer.path = resolved.path;
            pointer.value = resolved.value;
          }
          return true;
        }
      }
    }
    function setValue(pointer, token, value) {
      if (pointer.value && typeof pointer.value === "object") {
        if (token === "-" && Array.isArray(pointer.value)) {
          pointer.value.push(value);
        } else {
          pointer.value[token] = value;
        }
      } else {
        throw new JSONParserError(`Error assigning $ref pointer "${pointer.path}". 
Cannot set "${token}" of a non-object.`);
      }
      return value;
    }
    function unwrapOrThrow(value) {
      if (isHandledError(value)) {
        throw value;
      }
      return value;
    }
  }
});

// node_modules/@apidevtools/json-schema-ref-parser/lib/ref.js
var require_ref = __commonJS({
  "node_modules/@apidevtools/json-schema-ref-parser/lib/ref.js"(exports, module2) {
    "use strict";
    module2.exports = $Ref;
    var Pointer = require_pointer();
    var { InvalidPointerError, isHandledError, normalizeError } = require_errors();
    var { safePointerToPath, stripHash, getHash } = require_url();
    function $Ref() {
      this.path = void 0;
      this.value = void 0;
      this.$refs = void 0;
      this.pathType = void 0;
      this.errors = void 0;
    }
    $Ref.prototype.addError = function(err) {
      if (this.errors === void 0) {
        this.errors = [];
      }
      const existingErrors = this.errors.map(({ footprint }) => footprint);
      if (Array.isArray(err.errors)) {
        this.errors.push(
          ...err.errors.map(normalizeError).filter(({ footprint }) => !existingErrors.includes(footprint))
        );
      } else if (!existingErrors.includes(err.footprint)) {
        this.errors.push(normalizeError(err));
      }
    };
    $Ref.prototype.exists = function(path, options) {
      try {
        this.resolve(path, options);
        return true;
      } catch (e) {
        return false;
      }
    };
    $Ref.prototype.get = function(path, options) {
      return this.resolve(path, options).value;
    };
    $Ref.prototype.resolve = function(path, options, friendlyPath, pathFromRoot) {
      let pointer = new Pointer(this, path, friendlyPath);
      try {
        return pointer.resolve(this.value, options, pathFromRoot);
      } catch (err) {
        if (!options || !options.continueOnError || !isHandledError(err)) {
          throw err;
        }
        if (err.path === null) {
          err.path = safePointerToPath(getHash(pathFromRoot));
        }
        if (err instanceof InvalidPointerError) {
          err.source = stripHash(pathFromRoot);
        }
        this.addError(err);
        return null;
      }
    };
    $Ref.prototype.set = function(path, value) {
      let pointer = new Pointer(this, path);
      this.value = pointer.set(this.value, value);
    };
    $Ref.is$Ref = function(value) {
      return value && typeof value === "object" && typeof value.$ref === "string" && value.$ref.length > 0;
    };
    $Ref.isExternal$Ref = function(value) {
      return $Ref.is$Ref(value) && value.$ref[0] !== "#";
    };
    $Ref.isAllowed$Ref = function(value, options) {
      if ($Ref.is$Ref(value)) {
        if (value.$ref.substr(0, 2) === "#/" || value.$ref === "#") {
          return true;
        } else if (value.$ref[0] !== "#" && (!options || options.resolve.external)) {
          return true;
        }
      }
    };
    $Ref.isExtended$Ref = function(value) {
      return $Ref.is$Ref(value) && Object.keys(value).length > 1;
    };
    $Ref.dereference = function($ref, resolvedValue) {
      if (resolvedValue && typeof resolvedValue === "object" && $Ref.isExtended$Ref($ref)) {
        let merged = {};
        for (let key of Object.keys($ref)) {
          if (key !== "$ref") {
            merged[key] = $ref[key];
          }
        }
        for (let key of Object.keys(resolvedValue)) {
          if (!(key in merged)) {
            merged[key] = resolvedValue[key];
          }
        }
        return merged;
      } else {
        return resolvedValue;
      }
    };
  }
});

// node_modules/@apidevtools/json-schema-ref-parser/lib/refs.js
var require_refs = __commonJS({
  "node_modules/@apidevtools/json-schema-ref-parser/lib/refs.js"(exports, module2) {
    "use strict";
    var { ono: ono2 } = (init_esm(), __toCommonJS(esm_exports));
    var $Ref = require_ref();
    var url = require_url();
    module2.exports = $Refs;
    function $Refs() {
      this.circular = false;
      this._$refs = {};
      this._root$Ref = null;
    }
    $Refs.prototype.paths = function(types) {
      let paths = getPaths(this._$refs, arguments);
      return paths.map((path) => {
        return path.decoded;
      });
    };
    $Refs.prototype.values = function(types) {
      let $refs = this._$refs;
      let paths = getPaths($refs, arguments);
      return paths.reduce((obj, path) => {
        obj[path.decoded] = $refs[path.encoded].value;
        return obj;
      }, {});
    };
    $Refs.prototype.toJSON = $Refs.prototype.values;
    $Refs.prototype.exists = function(path, options) {
      try {
        this._resolve(path, "", options);
        return true;
      } catch (e) {
        return false;
      }
    };
    $Refs.prototype.get = function(path, options) {
      return this._resolve(path, "", options).value;
    };
    $Refs.prototype.set = function(path, value) {
      let absPath = url.resolve(this._root$Ref.path, path);
      let withoutHash = url.stripHash(absPath);
      let $ref = this._$refs[withoutHash];
      if (!$ref) {
        throw ono2(`Error resolving $ref pointer "${path}". 
"${withoutHash}" not found.`);
      }
      $ref.set(absPath, value);
    };
    $Refs.prototype._add = function(path) {
      let withoutHash = url.stripHash(path);
      let $ref = new $Ref();
      $ref.path = withoutHash;
      $ref.$refs = this;
      this._$refs[withoutHash] = $ref;
      this._root$Ref = this._root$Ref || $ref;
      return $ref;
    };
    $Refs.prototype._resolve = function(path, pathFromRoot, options) {
      let absPath = url.resolve(this._root$Ref.path, path);
      let withoutHash = url.stripHash(absPath);
      let $ref = this._$refs[withoutHash];
      if (!$ref) {
        throw ono2(`Error resolving $ref pointer "${path}". 
"${withoutHash}" not found.`);
      }
      return $ref.resolve(absPath, options, path, pathFromRoot);
    };
    $Refs.prototype._get$Ref = function(path) {
      path = url.resolve(this._root$Ref.path, path);
      let withoutHash = url.stripHash(path);
      return this._$refs[withoutHash];
    };
    function getPaths($refs, types) {
      let paths = Object.keys($refs);
      types = Array.isArray(types[0]) ? types[0] : Array.prototype.slice.call(types);
      if (types.length > 0 && types[0]) {
        paths = paths.filter((key) => {
          return types.indexOf($refs[key].pathType) !== -1;
        });
      }
      return paths.map((path) => {
        return {
          encoded: path,
          decoded: $refs[path].pathType === "file" ? url.toFileSystemPath(path, true) : path
        };
      });
    }
  }
});

// node_modules/@apidevtools/json-schema-ref-parser/lib/util/plugins.js
var require_plugins = __commonJS({
  "node_modules/@apidevtools/json-schema-ref-parser/lib/util/plugins.js"(exports) {
    "use strict";
    exports.all = function(plugins) {
      return Object.keys(plugins).filter((key) => {
        return typeof plugins[key] === "object";
      }).map((key) => {
        plugins[key].name = key;
        return plugins[key];
      });
    };
    exports.filter = function(plugins, method, file) {
      return plugins.filter((plugin) => {
        return !!getResult(plugin, method, file);
      });
    };
    exports.sort = function(plugins) {
      for (let plugin of plugins) {
        plugin.order = plugin.order || Number.MAX_SAFE_INTEGER;
      }
      return plugins.sort((a, b) => {
        return a.order - b.order;
      });
    };
    exports.run = function(plugins, method, file, $refs) {
      let plugin, lastError, index = 0;
      return new Promise((resolve, reject) => {
        runNextPlugin();
        function runNextPlugin() {
          plugin = plugins[index++];
          if (!plugin) {
            return reject(lastError);
          }
          try {
            let result = getResult(plugin, method, file, callback, $refs);
            if (result && typeof result.then === "function") {
              result.then(onSuccess, onError);
            } else if (result !== void 0) {
              onSuccess(result);
            } else if (index === plugins.length) {
              throw new Error("No promise has been returned or callback has been called.");
            }
          } catch (e) {
            onError(e);
          }
        }
        function callback(err, result) {
          if (err) {
            onError(err);
          } else {
            onSuccess(result);
          }
        }
        function onSuccess(result) {
          resolve({
            plugin,
            result
          });
        }
        function onError(error) {
          lastError = {
            plugin,
            error
          };
          runNextPlugin();
        }
      });
    };
    function getResult(obj, prop, file, callback, $refs) {
      let value = obj[prop];
      if (typeof value === "function") {
        return value.apply(obj, [file, callback, $refs]);
      }
      if (!callback) {
        if (value instanceof RegExp) {
          return value.test(file.url);
        } else if (typeof value === "string") {
          return value === file.extension;
        } else if (Array.isArray(value)) {
          return value.indexOf(file.extension) !== -1;
        }
      }
      return value;
    }
  }
});

// node_modules/@apidevtools/json-schema-ref-parser/lib/parse.js
var require_parse3 = __commonJS({
  "node_modules/@apidevtools/json-schema-ref-parser/lib/parse.js"(exports, module2) {
    "use strict";
    var { ono: ono2 } = (init_esm(), __toCommonJS(esm_exports));
    var url = require_url();
    var plugins = require_plugins();
    var { ResolverError, ParserError, UnmatchedParserError, UnmatchedResolverError, isHandledError } = require_errors();
    module2.exports = parse;
    async function parse(path, $refs, options) {
      path = url.stripHash(path);
      let $ref = $refs._add(path);
      let file = {
        url: path,
        extension: url.getExtension(path)
      };
      try {
        const resolver = await readFile(file, options, $refs);
        $ref.pathType = resolver.plugin.name;
        file.data = resolver.result;
        const parser = await parseFile(file, options, $refs);
        $ref.value = parser.result;
        return parser.result;
      } catch (err) {
        if (isHandledError(err)) {
          $ref.value = err;
        }
        throw err;
      }
    }
    function readFile(file, options, $refs) {
      return new Promise((resolve, reject) => {
        let resolvers = plugins.all(options.resolve);
        resolvers = plugins.filter(resolvers, "canRead", file);
        plugins.sort(resolvers);
        plugins.run(resolvers, "read", file, $refs).then(resolve, onError);
        function onError(err) {
          if (!err && options.continueOnError) {
            reject(new UnmatchedResolverError(file.url));
          } else if (!err || !("error" in err)) {
            reject(ono2.syntax(`Unable to resolve $ref pointer "${file.url}"`));
          } else if (err.error instanceof ResolverError) {
            reject(err.error);
          } else {
            reject(new ResolverError(err, file.url));
          }
        }
      });
    }
    function parseFile(file, options, $refs) {
      return new Promise((resolve, reject) => {
        let allParsers = plugins.all(options.parse);
        let filteredParsers = plugins.filter(allParsers, "canParse", file);
        let parsers = filteredParsers.length > 0 ? filteredParsers : allParsers;
        plugins.sort(parsers);
        plugins.run(parsers, "parse", file, $refs).then(onParsed, onError);
        function onParsed(parser) {
          if (!parser.plugin.allowEmpty && isEmpty(parser.result)) {
            reject(ono2.syntax(`Error parsing "${file.url}" as ${parser.plugin.name}. 
Parsed value is empty`));
          } else {
            resolve(parser);
          }
        }
        function onError(err) {
          if (!err && options.continueOnError) {
            reject(new UnmatchedParserError(file.url));
          } else if (!err || !("error" in err)) {
            reject(ono2.syntax(`Unable to parse ${file.url}`));
          } else if (err.error instanceof ParserError) {
            reject(err.error);
          } else {
            reject(new ParserError(err.error.message, file.url));
          }
        }
      });
    }
    function isEmpty(value) {
      return value === void 0 || typeof value === "object" && Object.keys(value).length === 0 || typeof value === "string" && value.trim().length === 0 || Buffer.isBuffer(value) && value.length === 0;
    }
  }
});

// node_modules/@apidevtools/json-schema-ref-parser/lib/parsers/json.js
var require_json = __commonJS({
  "node_modules/@apidevtools/json-schema-ref-parser/lib/parsers/json.js"(exports, module2) {
    "use strict";
    var { ParserError } = require_errors();
    module2.exports = {
      /**
       * The order that this parser will run, in relation to other parsers.
       *
       * @type {number}
       */
      order: 100,
      /**
       * Whether to allow "empty" files. This includes zero-byte files, as well as empty JSON objects.
       *
       * @type {boolean}
       */
      allowEmpty: true,
      /**
       * Determines whether this parser can parse a given file reference.
       * Parsers that match will be tried, in order, until one successfully parses the file.
       * Parsers that don't match will be skipped, UNLESS none of the parsers match, in which case
       * every parser will be tried.
       *
       * @type {RegExp|string|string[]|function}
       */
      canParse: ".json",
      /**
       * Parses the given file as JSON
       *
       * @param {object} file           - An object containing information about the referenced file
       * @param {string} file.url       - The full URL of the referenced file
       * @param {string} file.extension - The lowercased file extension (e.g. ".txt", ".html", etc.)
       * @param {*}      file.data      - The file contents. This will be whatever data type was returned by the resolver
       * @returns {Promise}
       */
      async parse(file) {
        let data = file.data;
        if (Buffer.isBuffer(data)) {
          data = data.toString();
        }
        if (typeof data === "string") {
          if (data.trim().length === 0) {
            return;
          } else {
            try {
              return JSON.parse(data);
            } catch (e) {
              throw new ParserError(e.message, file.url);
            }
          }
        } else {
          return data;
        }
      }
    };
  }
});

// node_modules/js-yaml/lib/common.js
var require_common = __commonJS({
  "node_modules/js-yaml/lib/common.js"(exports, module2) {
    "use strict";
    function isNothing(subject) {
      return typeof subject === "undefined" || subject === null;
    }
    function isObject(subject) {
      return typeof subject === "object" && subject !== null;
    }
    function toArray(sequence) {
      if (Array.isArray(sequence))
        return sequence;
      else if (isNothing(sequence))
        return [];
      return [sequence];
    }
    function extend2(target, source) {
      var index, length, key, sourceKeys;
      if (source) {
        sourceKeys = Object.keys(source);
        for (index = 0, length = sourceKeys.length; index < length; index += 1) {
          key = sourceKeys[index];
          target[key] = source[key];
        }
      }
      return target;
    }
    function repeat(string, count) {
      var result = "", cycle;
      for (cycle = 0; cycle < count; cycle += 1) {
        result += string;
      }
      return result;
    }
    function isNegativeZero(number) {
      return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
    }
    module2.exports.isNothing = isNothing;
    module2.exports.isObject = isObject;
    module2.exports.toArray = toArray;
    module2.exports.repeat = repeat;
    module2.exports.isNegativeZero = isNegativeZero;
    module2.exports.extend = extend2;
  }
});

// node_modules/js-yaml/lib/exception.js
var require_exception = __commonJS({
  "node_modules/js-yaml/lib/exception.js"(exports, module2) {
    "use strict";
    function formatError(exception, compact) {
      var where = "", message = exception.reason || "(unknown reason)";
      if (!exception.mark)
        return message;
      if (exception.mark.name) {
        where += 'in "' + exception.mark.name + '" ';
      }
      where += "(" + (exception.mark.line + 1) + ":" + (exception.mark.column + 1) + ")";
      if (!compact && exception.mark.snippet) {
        where += "\n\n" + exception.mark.snippet;
      }
      return message + " " + where;
    }
    function YAMLException(reason, mark) {
      Error.call(this);
      this.name = "YAMLException";
      this.reason = reason;
      this.mark = mark;
      this.message = formatError(this, false);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      } else {
        this.stack = new Error().stack || "";
      }
    }
    YAMLException.prototype = Object.create(Error.prototype);
    YAMLException.prototype.constructor = YAMLException;
    YAMLException.prototype.toString = function toString(compact) {
      return this.name + ": " + formatError(this, compact);
    };
    module2.exports = YAMLException;
  }
});

// node_modules/js-yaml/lib/snippet.js
var require_snippet = __commonJS({
  "node_modules/js-yaml/lib/snippet.js"(exports, module2) {
    "use strict";
    var common = require_common();
    function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
      var head = "";
      var tail = "";
      var maxHalfLength = Math.floor(maxLineLength / 2) - 1;
      if (position - lineStart > maxHalfLength) {
        head = " ... ";
        lineStart = position - maxHalfLength + head.length;
      }
      if (lineEnd - position > maxHalfLength) {
        tail = " ...";
        lineEnd = position + maxHalfLength - tail.length;
      }
      return {
        str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, "\u2192") + tail,
        pos: position - lineStart + head.length
        // relative position
      };
    }
    function padStart(string, max) {
      return common.repeat(" ", max - string.length) + string;
    }
    function makeSnippet(mark, options) {
      options = Object.create(options || null);
      if (!mark.buffer)
        return null;
      if (!options.maxLength)
        options.maxLength = 79;
      if (typeof options.indent !== "number")
        options.indent = 1;
      if (typeof options.linesBefore !== "number")
        options.linesBefore = 3;
      if (typeof options.linesAfter !== "number")
        options.linesAfter = 2;
      var re = /\r?\n|\r|\0/g;
      var lineStarts = [0];
      var lineEnds = [];
      var match;
      var foundLineNo = -1;
      while (match = re.exec(mark.buffer)) {
        lineEnds.push(match.index);
        lineStarts.push(match.index + match[0].length);
        if (mark.position <= match.index && foundLineNo < 0) {
          foundLineNo = lineStarts.length - 2;
        }
      }
      if (foundLineNo < 0)
        foundLineNo = lineStarts.length - 1;
      var result = "", i, line;
      var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
      var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);
      for (i = 1; i <= options.linesBefore; i++) {
        if (foundLineNo - i < 0)
          break;
        line = getLine(
          mark.buffer,
          lineStarts[foundLineNo - i],
          lineEnds[foundLineNo - i],
          mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]),
          maxLineLength
        );
        result = common.repeat(" ", options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) + " | " + line.str + "\n" + result;
      }
      line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
      result += common.repeat(" ", options.indent) + padStart((mark.line + 1).toString(), lineNoLength) + " | " + line.str + "\n";
      result += common.repeat("-", options.indent + lineNoLength + 3 + line.pos) + "^\n";
      for (i = 1; i <= options.linesAfter; i++) {
        if (foundLineNo + i >= lineEnds.length)
          break;
        line = getLine(
          mark.buffer,
          lineStarts[foundLineNo + i],
          lineEnds[foundLineNo + i],
          mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]),
          maxLineLength
        );
        result += common.repeat(" ", options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) + " | " + line.str + "\n";
      }
      return result.replace(/\n$/, "");
    }
    module2.exports = makeSnippet;
  }
});

// node_modules/js-yaml/lib/type.js
var require_type = __commonJS({
  "node_modules/js-yaml/lib/type.js"(exports, module2) {
    "use strict";
    var YAMLException = require_exception();
    var TYPE_CONSTRUCTOR_OPTIONS = [
      "kind",
      "multi",
      "resolve",
      "construct",
      "instanceOf",
      "predicate",
      "represent",
      "representName",
      "defaultStyle",
      "styleAliases"
    ];
    var YAML_NODE_KINDS = [
      "scalar",
      "sequence",
      "mapping"
    ];
    function compileStyleAliases(map) {
      var result = {};
      if (map !== null) {
        Object.keys(map).forEach(function(style) {
          map[style].forEach(function(alias) {
            result[String(alias)] = style;
          });
        });
      }
      return result;
    }
    function Type(tag, options) {
      options = options || {};
      Object.keys(options).forEach(function(name) {
        if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
          throw new YAMLException('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
        }
      });
      this.options = options;
      this.tag = tag;
      this.kind = options["kind"] || null;
      this.resolve = options["resolve"] || function() {
        return true;
      };
      this.construct = options["construct"] || function(data) {
        return data;
      };
      this.instanceOf = options["instanceOf"] || null;
      this.predicate = options["predicate"] || null;
      this.represent = options["represent"] || null;
      this.representName = options["representName"] || null;
      this.defaultStyle = options["defaultStyle"] || null;
      this.multi = options["multi"] || false;
      this.styleAliases = compileStyleAliases(options["styleAliases"] || null);
      if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
        throw new YAMLException('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
      }
    }
    module2.exports = Type;
  }
});

// node_modules/js-yaml/lib/schema.js
var require_schema = __commonJS({
  "node_modules/js-yaml/lib/schema.js"(exports, module2) {
    "use strict";
    var YAMLException = require_exception();
    var Type = require_type();
    function compileList(schema, name) {
      var result = [];
      schema[name].forEach(function(currentType) {
        var newIndex = result.length;
        result.forEach(function(previousType, previousIndex) {
          if (previousType.tag === currentType.tag && previousType.kind === currentType.kind && previousType.multi === currentType.multi) {
            newIndex = previousIndex;
          }
        });
        result[newIndex] = currentType;
      });
      return result;
    }
    function compileMap() {
      var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {},
        multi: {
          scalar: [],
          sequence: [],
          mapping: [],
          fallback: []
        }
      }, index, length;
      function collectType(type) {
        if (type.multi) {
          result.multi[type.kind].push(type);
          result.multi["fallback"].push(type);
        } else {
          result[type.kind][type.tag] = result["fallback"][type.tag] = type;
        }
      }
      for (index = 0, length = arguments.length; index < length; index += 1) {
        arguments[index].forEach(collectType);
      }
      return result;
    }
    function Schema(definition) {
      return this.extend(definition);
    }
    Schema.prototype.extend = function extend2(definition) {
      var implicit = [];
      var explicit = [];
      if (definition instanceof Type) {
        explicit.push(definition);
      } else if (Array.isArray(definition)) {
        explicit = explicit.concat(definition);
      } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
        if (definition.implicit)
          implicit = implicit.concat(definition.implicit);
        if (definition.explicit)
          explicit = explicit.concat(definition.explicit);
      } else {
        throw new YAMLException("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
      }
      implicit.forEach(function(type) {
        if (!(type instanceof Type)) {
          throw new YAMLException("Specified list of YAML types (or a single Type object) contains a non-Type object.");
        }
        if (type.loadKind && type.loadKind !== "scalar") {
          throw new YAMLException("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
        }
        if (type.multi) {
          throw new YAMLException("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
        }
      });
      explicit.forEach(function(type) {
        if (!(type instanceof Type)) {
          throw new YAMLException("Specified list of YAML types (or a single Type object) contains a non-Type object.");
        }
      });
      var result = Object.create(Schema.prototype);
      result.implicit = (this.implicit || []).concat(implicit);
      result.explicit = (this.explicit || []).concat(explicit);
      result.compiledImplicit = compileList(result, "implicit");
      result.compiledExplicit = compileList(result, "explicit");
      result.compiledTypeMap = compileMap(result.compiledImplicit, result.compiledExplicit);
      return result;
    };
    module2.exports = Schema;
  }
});

// node_modules/js-yaml/lib/type/str.js
var require_str = __commonJS({
  "node_modules/js-yaml/lib/type/str.js"(exports, module2) {
    "use strict";
    var Type = require_type();
    module2.exports = new Type("tag:yaml.org,2002:str", {
      kind: "scalar",
      construct: function(data) {
        return data !== null ? data : "";
      }
    });
  }
});

// node_modules/js-yaml/lib/type/seq.js
var require_seq = __commonJS({
  "node_modules/js-yaml/lib/type/seq.js"(exports, module2) {
    "use strict";
    var Type = require_type();
    module2.exports = new Type("tag:yaml.org,2002:seq", {
      kind: "sequence",
      construct: function(data) {
        return data !== null ? data : [];
      }
    });
  }
});

// node_modules/js-yaml/lib/type/map.js
var require_map = __commonJS({
  "node_modules/js-yaml/lib/type/map.js"(exports, module2) {
    "use strict";
    var Type = require_type();
    module2.exports = new Type("tag:yaml.org,2002:map", {
      kind: "mapping",
      construct: function(data) {
        return data !== null ? data : {};
      }
    });
  }
});

// node_modules/js-yaml/lib/schema/failsafe.js
var require_failsafe = __commonJS({
  "node_modules/js-yaml/lib/schema/failsafe.js"(exports, module2) {
    "use strict";
    var Schema = require_schema();
    module2.exports = new Schema({
      explicit: [
        require_str(),
        require_seq(),
        require_map()
      ]
    });
  }
});

// node_modules/js-yaml/lib/type/null.js
var require_null = __commonJS({
  "node_modules/js-yaml/lib/type/null.js"(exports, module2) {
    "use strict";
    var Type = require_type();
    function resolveYamlNull(data) {
      if (data === null)
        return true;
      var max = data.length;
      return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL");
    }
    function constructYamlNull() {
      return null;
    }
    function isNull(object) {
      return object === null;
    }
    module2.exports = new Type("tag:yaml.org,2002:null", {
      kind: "scalar",
      resolve: resolveYamlNull,
      construct: constructYamlNull,
      predicate: isNull,
      represent: {
        canonical: function() {
          return "~";
        },
        lowercase: function() {
          return "null";
        },
        uppercase: function() {
          return "NULL";
        },
        camelcase: function() {
          return "Null";
        },
        empty: function() {
          return "";
        }
      },
      defaultStyle: "lowercase"
    });
  }
});

// node_modules/js-yaml/lib/type/bool.js
var require_bool = __commonJS({
  "node_modules/js-yaml/lib/type/bool.js"(exports, module2) {
    "use strict";
    var Type = require_type();
    function resolveYamlBoolean(data) {
      if (data === null)
        return false;
      var max = data.length;
      return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE");
    }
    function constructYamlBoolean(data) {
      return data === "true" || data === "True" || data === "TRUE";
    }
    function isBoolean(object) {
      return Object.prototype.toString.call(object) === "[object Boolean]";
    }
    module2.exports = new Type("tag:yaml.org,2002:bool", {
      kind: "scalar",
      resolve: resolveYamlBoolean,
      construct: constructYamlBoolean,
      predicate: isBoolean,
      represent: {
        lowercase: function(object) {
          return object ? "true" : "false";
        },
        uppercase: function(object) {
          return object ? "TRUE" : "FALSE";
        },
        camelcase: function(object) {
          return object ? "True" : "False";
        }
      },
      defaultStyle: "lowercase"
    });
  }
});

// node_modules/js-yaml/lib/type/int.js
var require_int = __commonJS({
  "node_modules/js-yaml/lib/type/int.js"(exports, module2) {
    "use strict";
    var common = require_common();
    var Type = require_type();
    function isHexCode(c) {
      return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;
    }
    function isOctCode(c) {
      return 48 <= c && c <= 55;
    }
    function isDecCode(c) {
      return 48 <= c && c <= 57;
    }
    function resolveYamlInteger(data) {
      if (data === null)
        return false;
      var max = data.length, index = 0, hasDigits = false, ch;
      if (!max)
        return false;
      ch = data[index];
      if (ch === "-" || ch === "+") {
        ch = data[++index];
      }
      if (ch === "0") {
        if (index + 1 === max)
          return true;
        ch = data[++index];
        if (ch === "b") {
          index++;
          for (; index < max; index++) {
            ch = data[index];
            if (ch === "_")
              continue;
            if (ch !== "0" && ch !== "1")
              return false;
            hasDigits = true;
          }
          return hasDigits && ch !== "_";
        }
        if (ch === "x") {
          index++;
          for (; index < max; index++) {
            ch = data[index];
            if (ch === "_")
              continue;
            if (!isHexCode(data.charCodeAt(index)))
              return false;
            hasDigits = true;
          }
          return hasDigits && ch !== "_";
        }
        if (ch === "o") {
          index++;
          for (; index < max; index++) {
            ch = data[index];
            if (ch === "_")
              continue;
            if (!isOctCode(data.charCodeAt(index)))
              return false;
            hasDigits = true;
          }
          return hasDigits && ch !== "_";
        }
      }
      if (ch === "_")
        return false;
      for (; index < max; index++) {
        ch = data[index];
        if (ch === "_")
          continue;
        if (!isDecCode(data.charCodeAt(index))) {
          return false;
        }
        hasDigits = true;
      }
      if (!hasDigits || ch === "_")
        return false;
      return true;
    }
    function constructYamlInteger(data) {
      var value = data, sign = 1, ch;
      if (value.indexOf("_") !== -1) {
        value = value.replace(/_/g, "");
      }
      ch = value[0];
      if (ch === "-" || ch === "+") {
        if (ch === "-")
          sign = -1;
        value = value.slice(1);
        ch = value[0];
      }
      if (value === "0")
        return 0;
      if (ch === "0") {
        if (value[1] === "b")
          return sign * parseInt(value.slice(2), 2);
        if (value[1] === "x")
          return sign * parseInt(value.slice(2), 16);
        if (value[1] === "o")
          return sign * parseInt(value.slice(2), 8);
      }
      return sign * parseInt(value, 10);
    }
    function isInteger(object) {
      return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 === 0 && !common.isNegativeZero(object));
    }
    module2.exports = new Type("tag:yaml.org,2002:int", {
      kind: "scalar",
      resolve: resolveYamlInteger,
      construct: constructYamlInteger,
      predicate: isInteger,
      represent: {
        binary: function(obj) {
          return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
        },
        octal: function(obj) {
          return obj >= 0 ? "0o" + obj.toString(8) : "-0o" + obj.toString(8).slice(1);
        },
        decimal: function(obj) {
          return obj.toString(10);
        },
        /* eslint-disable max-len */
        hexadecimal: function(obj) {
          return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
        }
      },
      defaultStyle: "decimal",
      styleAliases: {
        binary: [2, "bin"],
        octal: [8, "oct"],
        decimal: [10, "dec"],
        hexadecimal: [16, "hex"]
      }
    });
  }
});

// node_modules/js-yaml/lib/type/float.js
var require_float = __commonJS({
  "node_modules/js-yaml/lib/type/float.js"(exports, module2) {
    "use strict";
    var common = require_common();
    var Type = require_type();
    var YAML_FLOAT_PATTERN = new RegExp(
      // 2.5e4, 2.5 and integers
      "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
    );
    function resolveYamlFloat(data) {
      if (data === null)
        return false;
      if (!YAML_FLOAT_PATTERN.test(data) || // Quick hack to not allow integers end with `_`
      // Probably should update regexp & check speed
      data[data.length - 1] === "_") {
        return false;
      }
      return true;
    }
    function constructYamlFloat(data) {
      var value, sign;
      value = data.replace(/_/g, "").toLowerCase();
      sign = value[0] === "-" ? -1 : 1;
      if ("+-".indexOf(value[0]) >= 0) {
        value = value.slice(1);
      }
      if (value === ".inf") {
        return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
      } else if (value === ".nan") {
        return NaN;
      }
      return sign * parseFloat(value, 10);
    }
    var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
    function representYamlFloat(object, style) {
      var res;
      if (isNaN(object)) {
        switch (style) {
          case "lowercase":
            return ".nan";
          case "uppercase":
            return ".NAN";
          case "camelcase":
            return ".NaN";
        }
      } else if (Number.POSITIVE_INFINITY === object) {
        switch (style) {
          case "lowercase":
            return ".inf";
          case "uppercase":
            return ".INF";
          case "camelcase":
            return ".Inf";
        }
      } else if (Number.NEGATIVE_INFINITY === object) {
        switch (style) {
          case "lowercase":
            return "-.inf";
          case "uppercase":
            return "-.INF";
          case "camelcase":
            return "-.Inf";
        }
      } else if (common.isNegativeZero(object)) {
        return "-0.0";
      }
      res = object.toString(10);
      return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
    }
    function isFloat(object) {
      return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 !== 0 || common.isNegativeZero(object));
    }
    module2.exports = new Type("tag:yaml.org,2002:float", {
      kind: "scalar",
      resolve: resolveYamlFloat,
      construct: constructYamlFloat,
      predicate: isFloat,
      represent: representYamlFloat,
      defaultStyle: "lowercase"
    });
  }
});

// node_modules/js-yaml/lib/schema/json.js
var require_json2 = __commonJS({
  "node_modules/js-yaml/lib/schema/json.js"(exports, module2) {
    "use strict";
    module2.exports = require_failsafe().extend({
      implicit: [
        require_null(),
        require_bool(),
        require_int(),
        require_float()
      ]
    });
  }
});

// node_modules/js-yaml/lib/schema/core.js
var require_core = __commonJS({
  "node_modules/js-yaml/lib/schema/core.js"(exports, module2) {
    "use strict";
    module2.exports = require_json2();
  }
});

// node_modules/js-yaml/lib/type/timestamp.js
var require_timestamp = __commonJS({
  "node_modules/js-yaml/lib/type/timestamp.js"(exports, module2) {
    "use strict";
    var Type = require_type();
    var YAML_DATE_REGEXP = new RegExp(
      "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
    );
    var YAML_TIMESTAMP_REGEXP = new RegExp(
      "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
    );
    function resolveYamlTimestamp(data) {
      if (data === null)
        return false;
      if (YAML_DATE_REGEXP.exec(data) !== null)
        return true;
      if (YAML_TIMESTAMP_REGEXP.exec(data) !== null)
        return true;
      return false;
    }
    function constructYamlTimestamp(data) {
      var match, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date;
      match = YAML_DATE_REGEXP.exec(data);
      if (match === null)
        match = YAML_TIMESTAMP_REGEXP.exec(data);
      if (match === null)
        throw new Error("Date resolve error");
      year = +match[1];
      month = +match[2] - 1;
      day = +match[3];
      if (!match[4]) {
        return new Date(Date.UTC(year, month, day));
      }
      hour = +match[4];
      minute = +match[5];
      second = +match[6];
      if (match[7]) {
        fraction = match[7].slice(0, 3);
        while (fraction.length < 3) {
          fraction += "0";
        }
        fraction = +fraction;
      }
      if (match[9]) {
        tz_hour = +match[10];
        tz_minute = +(match[11] || 0);
        delta = (tz_hour * 60 + tz_minute) * 6e4;
        if (match[9] === "-")
          delta = -delta;
      }
      date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
      if (delta)
        date.setTime(date.getTime() - delta);
      return date;
    }
    function representYamlTimestamp(object) {
      return object.toISOString();
    }
    module2.exports = new Type("tag:yaml.org,2002:timestamp", {
      kind: "scalar",
      resolve: resolveYamlTimestamp,
      construct: constructYamlTimestamp,
      instanceOf: Date,
      represent: representYamlTimestamp
    });
  }
});

// node_modules/js-yaml/lib/type/merge.js
var require_merge = __commonJS({
  "node_modules/js-yaml/lib/type/merge.js"(exports, module2) {
    "use strict";
    var Type = require_type();
    function resolveYamlMerge(data) {
      return data === "<<" || data === null;
    }
    module2.exports = new Type("tag:yaml.org,2002:merge", {
      kind: "scalar",
      resolve: resolveYamlMerge
    });
  }
});

// node_modules/js-yaml/lib/type/binary.js
var require_binary = __commonJS({
  "node_modules/js-yaml/lib/type/binary.js"(exports, module2) {
    "use strict";
    var Type = require_type();
    var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
    function resolveYamlBinary(data) {
      if (data === null)
        return false;
      var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;
      for (idx = 0; idx < max; idx++) {
        code = map.indexOf(data.charAt(idx));
        if (code > 64)
          continue;
        if (code < 0)
          return false;
        bitlen += 6;
      }
      return bitlen % 8 === 0;
    }
    function constructYamlBinary(data) {
      var idx, tailbits, input = data.replace(/[\r\n=]/g, ""), max = input.length, map = BASE64_MAP, bits = 0, result = [];
      for (idx = 0; idx < max; idx++) {
        if (idx % 4 === 0 && idx) {
          result.push(bits >> 16 & 255);
          result.push(bits >> 8 & 255);
          result.push(bits & 255);
        }
        bits = bits << 6 | map.indexOf(input.charAt(idx));
      }
      tailbits = max % 4 * 6;
      if (tailbits === 0) {
        result.push(bits >> 16 & 255);
        result.push(bits >> 8 & 255);
        result.push(bits & 255);
      } else if (tailbits === 18) {
        result.push(bits >> 10 & 255);
        result.push(bits >> 2 & 255);
      } else if (tailbits === 12) {
        result.push(bits >> 4 & 255);
      }
      return new Uint8Array(result);
    }
    function representYamlBinary(object) {
      var result = "", bits = 0, idx, tail, max = object.length, map = BASE64_MAP;
      for (idx = 0; idx < max; idx++) {
        if (idx % 3 === 0 && idx) {
          result += map[bits >> 18 & 63];
          result += map[bits >> 12 & 63];
          result += map[bits >> 6 & 63];
          result += map[bits & 63];
        }
        bits = (bits << 8) + object[idx];
      }
      tail = max % 3;
      if (tail === 0) {
        result += map[bits >> 18 & 63];
        result += map[bits >> 12 & 63];
        result += map[bits >> 6 & 63];
        result += map[bits & 63];
      } else if (tail === 2) {
        result += map[bits >> 10 & 63];
        result += map[bits >> 4 & 63];
        result += map[bits << 2 & 63];
        result += map[64];
      } else if (tail === 1) {
        result += map[bits >> 2 & 63];
        result += map[bits << 4 & 63];
        result += map[64];
        result += map[64];
      }
      return result;
    }
    function isBinary(obj) {
      return Object.prototype.toString.call(obj) === "[object Uint8Array]";
    }
    module2.exports = new Type("tag:yaml.org,2002:binary", {
      kind: "scalar",
      resolve: resolveYamlBinary,
      construct: constructYamlBinary,
      predicate: isBinary,
      represent: representYamlBinary
    });
  }
});

// node_modules/js-yaml/lib/type/omap.js
var require_omap = __commonJS({
  "node_modules/js-yaml/lib/type/omap.js"(exports, module2) {
    "use strict";
    var Type = require_type();
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    var _toString = Object.prototype.toString;
    function resolveYamlOmap(data) {
      if (data === null)
        return true;
      var objectKeys = [], index, length, pair, pairKey, pairHasKey, object = data;
      for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index];
        pairHasKey = false;
        if (_toString.call(pair) !== "[object Object]")
          return false;
        for (pairKey in pair) {
          if (_hasOwnProperty.call(pair, pairKey)) {
            if (!pairHasKey)
              pairHasKey = true;
            else
              return false;
          }
        }
        if (!pairHasKey)
          return false;
        if (objectKeys.indexOf(pairKey) === -1)
          objectKeys.push(pairKey);
        else
          return false;
      }
      return true;
    }
    function constructYamlOmap(data) {
      return data !== null ? data : [];
    }
    module2.exports = new Type("tag:yaml.org,2002:omap", {
      kind: "sequence",
      resolve: resolveYamlOmap,
      construct: constructYamlOmap
    });
  }
});

// node_modules/js-yaml/lib/type/pairs.js
var require_pairs = __commonJS({
  "node_modules/js-yaml/lib/type/pairs.js"(exports, module2) {
    "use strict";
    var Type = require_type();
    var _toString = Object.prototype.toString;
    function resolveYamlPairs(data) {
      if (data === null)
        return true;
      var index, length, pair, keys, result, object = data;
      result = new Array(object.length);
      for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index];
        if (_toString.call(pair) !== "[object Object]")
          return false;
        keys = Object.keys(pair);
        if (keys.length !== 1)
          return false;
        result[index] = [keys[0], pair[keys[0]]];
      }
      return true;
    }
    function constructYamlPairs(data) {
      if (data === null)
        return [];
      var index, length, pair, keys, result, object = data;
      result = new Array(object.length);
      for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index];
        keys = Object.keys(pair);
        result[index] = [keys[0], pair[keys[0]]];
      }
      return result;
    }
    module2.exports = new Type("tag:yaml.org,2002:pairs", {
      kind: "sequence",
      resolve: resolveYamlPairs,
      construct: constructYamlPairs
    });
  }
});

// node_modules/js-yaml/lib/type/set.js
var require_set = __commonJS({
  "node_modules/js-yaml/lib/type/set.js"(exports, module2) {
    "use strict";
    var Type = require_type();
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    function resolveYamlSet(data) {
      if (data === null)
        return true;
      var key, object = data;
      for (key in object) {
        if (_hasOwnProperty.call(object, key)) {
          if (object[key] !== null)
            return false;
        }
      }
      return true;
    }
    function constructYamlSet(data) {
      return data !== null ? data : {};
    }
    module2.exports = new Type("tag:yaml.org,2002:set", {
      kind: "mapping",
      resolve: resolveYamlSet,
      construct: constructYamlSet
    });
  }
});

// node_modules/js-yaml/lib/schema/default.js
var require_default = __commonJS({
  "node_modules/js-yaml/lib/schema/default.js"(exports, module2) {
    "use strict";
    module2.exports = require_core().extend({
      implicit: [
        require_timestamp(),
        require_merge()
      ],
      explicit: [
        require_binary(),
        require_omap(),
        require_pairs(),
        require_set()
      ]
    });
  }
});

// node_modules/js-yaml/lib/loader.js
var require_loader = __commonJS({
  "node_modules/js-yaml/lib/loader.js"(exports, module2) {
    "use strict";
    var common = require_common();
    var YAMLException = require_exception();
    var makeSnippet = require_snippet();
    var DEFAULT_SCHEMA = require_default();
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    var CONTEXT_FLOW_IN = 1;
    var CONTEXT_FLOW_OUT = 2;
    var CONTEXT_BLOCK_IN = 3;
    var CONTEXT_BLOCK_OUT = 4;
    var CHOMPING_CLIP = 1;
    var CHOMPING_STRIP = 2;
    var CHOMPING_KEEP = 3;
    var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
    var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
    var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
    var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
    var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
    function _class(obj) {
      return Object.prototype.toString.call(obj);
    }
    function is_EOL(c) {
      return c === 10 || c === 13;
    }
    function is_WHITE_SPACE(c) {
      return c === 9 || c === 32;
    }
    function is_WS_OR_EOL(c) {
      return c === 9 || c === 32 || c === 10 || c === 13;
    }
    function is_FLOW_INDICATOR(c) {
      return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
    }
    function fromHexCode(c) {
      var lc;
      if (48 <= c && c <= 57) {
        return c - 48;
      }
      lc = c | 32;
      if (97 <= lc && lc <= 102) {
        return lc - 97 + 10;
      }
      return -1;
    }
    function escapedHexLen(c) {
      if (c === 120) {
        return 2;
      }
      if (c === 117) {
        return 4;
      }
      if (c === 85) {
        return 8;
      }
      return 0;
    }
    function fromDecimalCode(c) {
      if (48 <= c && c <= 57) {
        return c - 48;
      }
      return -1;
    }
    function simpleEscapeSequence(c) {
      return c === 48 ? "\0" : c === 97 ? "\x07" : c === 98 ? "\b" : c === 116 ? "	" : c === 9 ? "	" : c === 110 ? "\n" : c === 118 ? "\v" : c === 102 ? "\f" : c === 114 ? "\r" : c === 101 ? "\x1B" : c === 32 ? " " : c === 34 ? '"' : c === 47 ? "/" : c === 92 ? "\\" : c === 78 ? "\x85" : c === 95 ? "\xA0" : c === 76 ? "\u2028" : c === 80 ? "\u2029" : "";
    }
    function charFromCodepoint(c) {
      if (c <= 65535) {
        return String.fromCharCode(c);
      }
      return String.fromCharCode(
        (c - 65536 >> 10) + 55296,
        (c - 65536 & 1023) + 56320
      );
    }
    var simpleEscapeCheck = new Array(256);
    var simpleEscapeMap = new Array(256);
    for (i = 0; i < 256; i++) {
      simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
      simpleEscapeMap[i] = simpleEscapeSequence(i);
    }
    var i;
    function State(input, options) {
      this.input = input;
      this.filename = options["filename"] || null;
      this.schema = options["schema"] || DEFAULT_SCHEMA;
      this.onWarning = options["onWarning"] || null;
      this.legacy = options["legacy"] || false;
      this.json = options["json"] || false;
      this.listener = options["listener"] || null;
      this.implicitTypes = this.schema.compiledImplicit;
      this.typeMap = this.schema.compiledTypeMap;
      this.length = input.length;
      this.position = 0;
      this.line = 0;
      this.lineStart = 0;
      this.lineIndent = 0;
      this.firstTabInLine = -1;
      this.documents = [];
    }
    function generateError(state, message) {
      var mark = {
        name: state.filename,
        buffer: state.input.slice(0, -1),
        // omit trailing \0
        position: state.position,
        line: state.line,
        column: state.position - state.lineStart
      };
      mark.snippet = makeSnippet(mark);
      return new YAMLException(message, mark);
    }
    function throwError(state, message) {
      throw generateError(state, message);
    }
    function throwWarning(state, message) {
      if (state.onWarning) {
        state.onWarning.call(null, generateError(state, message));
      }
    }
    var directiveHandlers = {
      YAML: function handleYamlDirective(state, name, args) {
        var match, major, minor;
        if (state.version !== null) {
          throwError(state, "duplication of %YAML directive");
        }
        if (args.length !== 1) {
          throwError(state, "YAML directive accepts exactly one argument");
        }
        match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
        if (match === null) {
          throwError(state, "ill-formed argument of the YAML directive");
        }
        major = parseInt(match[1], 10);
        minor = parseInt(match[2], 10);
        if (major !== 1) {
          throwError(state, "unacceptable YAML version of the document");
        }
        state.version = args[0];
        state.checkLineBreaks = minor < 2;
        if (minor !== 1 && minor !== 2) {
          throwWarning(state, "unsupported YAML version of the document");
        }
      },
      TAG: function handleTagDirective(state, name, args) {
        var handle, prefix;
        if (args.length !== 2) {
          throwError(state, "TAG directive accepts exactly two arguments");
        }
        handle = args[0];
        prefix = args[1];
        if (!PATTERN_TAG_HANDLE.test(handle)) {
          throwError(state, "ill-formed tag handle (first argument) of the TAG directive");
        }
        if (_hasOwnProperty.call(state.tagMap, handle)) {
          throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
        }
        if (!PATTERN_TAG_URI.test(prefix)) {
          throwError(state, "ill-formed tag prefix (second argument) of the TAG directive");
        }
        try {
          prefix = decodeURIComponent(prefix);
        } catch (err) {
          throwError(state, "tag prefix is malformed: " + prefix);
        }
        state.tagMap[handle] = prefix;
      }
    };
    function captureSegment(state, start, end, checkJson) {
      var _position, _length, _character, _result;
      if (start < end) {
        _result = state.input.slice(start, end);
        if (checkJson) {
          for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
            _character = _result.charCodeAt(_position);
            if (!(_character === 9 || 32 <= _character && _character <= 1114111)) {
              throwError(state, "expected valid JSON character");
            }
          }
        } else if (PATTERN_NON_PRINTABLE.test(_result)) {
          throwError(state, "the stream contains non-printable characters");
        }
        state.result += _result;
      }
    }
    function mergeMappings(state, destination, source, overridableKeys) {
      var sourceKeys, key, index, quantity;
      if (!common.isObject(source)) {
        throwError(state, "cannot merge mappings; the provided source object is unacceptable");
      }
      sourceKeys = Object.keys(source);
      for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
        key = sourceKeys[index];
        if (!_hasOwnProperty.call(destination, key)) {
          destination[key] = source[key];
          overridableKeys[key] = true;
        }
      }
    }
    function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startLineStart, startPos) {
      var index, quantity;
      if (Array.isArray(keyNode)) {
        keyNode = Array.prototype.slice.call(keyNode);
        for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
          if (Array.isArray(keyNode[index])) {
            throwError(state, "nested arrays are not supported inside keys");
          }
          if (typeof keyNode === "object" && _class(keyNode[index]) === "[object Object]") {
            keyNode[index] = "[object Object]";
          }
        }
      }
      if (typeof keyNode === "object" && _class(keyNode) === "[object Object]") {
        keyNode = "[object Object]";
      }
      keyNode = String(keyNode);
      if (_result === null) {
        _result = {};
      }
      if (keyTag === "tag:yaml.org,2002:merge") {
        if (Array.isArray(valueNode)) {
          for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
            mergeMappings(state, _result, valueNode[index], overridableKeys);
          }
        } else {
          mergeMappings(state, _result, valueNode, overridableKeys);
        }
      } else {
        if (!state.json && !_hasOwnProperty.call(overridableKeys, keyNode) && _hasOwnProperty.call(_result, keyNode)) {
          state.line = startLine || state.line;
          state.lineStart = startLineStart || state.lineStart;
          state.position = startPos || state.position;
          throwError(state, "duplicated mapping key");
        }
        if (keyNode === "__proto__") {
          Object.defineProperty(_result, keyNode, {
            configurable: true,
            enumerable: true,
            writable: true,
            value: valueNode
          });
        } else {
          _result[keyNode] = valueNode;
        }
        delete overridableKeys[keyNode];
      }
      return _result;
    }
    function readLineBreak(state) {
      var ch;
      ch = state.input.charCodeAt(state.position);
      if (ch === 10) {
        state.position++;
      } else if (ch === 13) {
        state.position++;
        if (state.input.charCodeAt(state.position) === 10) {
          state.position++;
        }
      } else {
        throwError(state, "a line break is expected");
      }
      state.line += 1;
      state.lineStart = state.position;
      state.firstTabInLine = -1;
    }
    function skipSeparationSpace(state, allowComments, checkIndent) {
      var lineBreaks = 0, ch = state.input.charCodeAt(state.position);
      while (ch !== 0) {
        while (is_WHITE_SPACE(ch)) {
          if (ch === 9 && state.firstTabInLine === -1) {
            state.firstTabInLine = state.position;
          }
          ch = state.input.charCodeAt(++state.position);
        }
        if (allowComments && ch === 35) {
          do {
            ch = state.input.charCodeAt(++state.position);
          } while (ch !== 10 && ch !== 13 && ch !== 0);
        }
        if (is_EOL(ch)) {
          readLineBreak(state);
          ch = state.input.charCodeAt(state.position);
          lineBreaks++;
          state.lineIndent = 0;
          while (ch === 32) {
            state.lineIndent++;
            ch = state.input.charCodeAt(++state.position);
          }
        } else {
          break;
        }
      }
      if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
        throwWarning(state, "deficient indentation");
      }
      return lineBreaks;
    }
    function testDocumentSeparator(state) {
      var _position = state.position, ch;
      ch = state.input.charCodeAt(_position);
      if ((ch === 45 || ch === 46) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
        _position += 3;
        ch = state.input.charCodeAt(_position);
        if (ch === 0 || is_WS_OR_EOL(ch)) {
          return true;
        }
      }
      return false;
    }
    function writeFoldedLines(state, count) {
      if (count === 1) {
        state.result += " ";
      } else if (count > 1) {
        state.result += common.repeat("\n", count - 1);
      }
    }
    function readPlainScalar(state, nodeIndent, withinFlowCollection) {
      var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state.kind, _result = state.result, ch;
      ch = state.input.charCodeAt(state.position);
      if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96) {
        return false;
      }
      if (ch === 63 || ch === 45) {
        following = state.input.charCodeAt(state.position + 1);
        if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
          return false;
        }
      }
      state.kind = "scalar";
      state.result = "";
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
      while (ch !== 0) {
        if (ch === 58) {
          following = state.input.charCodeAt(state.position + 1);
          if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
            break;
          }
        } else if (ch === 35) {
          preceding = state.input.charCodeAt(state.position - 1);
          if (is_WS_OR_EOL(preceding)) {
            break;
          }
        } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
          break;
        } else if (is_EOL(ch)) {
          _line = state.line;
          _lineStart = state.lineStart;
          _lineIndent = state.lineIndent;
          skipSeparationSpace(state, false, -1);
          if (state.lineIndent >= nodeIndent) {
            hasPendingContent = true;
            ch = state.input.charCodeAt(state.position);
            continue;
          } else {
            state.position = captureEnd;
            state.line = _line;
            state.lineStart = _lineStart;
            state.lineIndent = _lineIndent;
            break;
          }
        }
        if (hasPendingContent) {
          captureSegment(state, captureStart, captureEnd, false);
          writeFoldedLines(state, state.line - _line);
          captureStart = captureEnd = state.position;
          hasPendingContent = false;
        }
        if (!is_WHITE_SPACE(ch)) {
          captureEnd = state.position + 1;
        }
        ch = state.input.charCodeAt(++state.position);
      }
      captureSegment(state, captureStart, captureEnd, false);
      if (state.result) {
        return true;
      }
      state.kind = _kind;
      state.result = _result;
      return false;
    }
    function readSingleQuotedScalar(state, nodeIndent) {
      var ch, captureStart, captureEnd;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 39) {
        return false;
      }
      state.kind = "scalar";
      state.result = "";
      state.position++;
      captureStart = captureEnd = state.position;
      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        if (ch === 39) {
          captureSegment(state, captureStart, state.position, true);
          ch = state.input.charCodeAt(++state.position);
          if (ch === 39) {
            captureStart = state.position;
            state.position++;
            captureEnd = state.position;
          } else {
            return true;
          }
        } else if (is_EOL(ch)) {
          captureSegment(state, captureStart, captureEnd, true);
          writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
          captureStart = captureEnd = state.position;
        } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
          throwError(state, "unexpected end of the document within a single quoted scalar");
        } else {
          state.position++;
          captureEnd = state.position;
        }
      }
      throwError(state, "unexpected end of the stream within a single quoted scalar");
    }
    function readDoubleQuotedScalar(state, nodeIndent) {
      var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 34) {
        return false;
      }
      state.kind = "scalar";
      state.result = "";
      state.position++;
      captureStart = captureEnd = state.position;
      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        if (ch === 34) {
          captureSegment(state, captureStart, state.position, true);
          state.position++;
          return true;
        } else if (ch === 92) {
          captureSegment(state, captureStart, state.position, true);
          ch = state.input.charCodeAt(++state.position);
          if (is_EOL(ch)) {
            skipSeparationSpace(state, false, nodeIndent);
          } else if (ch < 256 && simpleEscapeCheck[ch]) {
            state.result += simpleEscapeMap[ch];
            state.position++;
          } else if ((tmp = escapedHexLen(ch)) > 0) {
            hexLength = tmp;
            hexResult = 0;
            for (; hexLength > 0; hexLength--) {
              ch = state.input.charCodeAt(++state.position);
              if ((tmp = fromHexCode(ch)) >= 0) {
                hexResult = (hexResult << 4) + tmp;
              } else {
                throwError(state, "expected hexadecimal character");
              }
            }
            state.result += charFromCodepoint(hexResult);
            state.position++;
          } else {
            throwError(state, "unknown escape sequence");
          }
          captureStart = captureEnd = state.position;
        } else if (is_EOL(ch)) {
          captureSegment(state, captureStart, captureEnd, true);
          writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
          captureStart = captureEnd = state.position;
        } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
          throwError(state, "unexpected end of the document within a double quoted scalar");
        } else {
          state.position++;
          captureEnd = state.position;
        }
      }
      throwError(state, "unexpected end of the stream within a double quoted scalar");
    }
    function readFlowCollection(state, nodeIndent) {
      var readNext = true, _line, _lineStart, _pos, _tag = state.tag, _result, _anchor = state.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = /* @__PURE__ */ Object.create(null), keyNode, keyTag, valueNode, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch === 91) {
        terminator = 93;
        isMapping = false;
        _result = [];
      } else if (ch === 123) {
        terminator = 125;
        isMapping = true;
        _result = {};
      } else {
        return false;
      }
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
      }
      ch = state.input.charCodeAt(++state.position);
      while (ch !== 0) {
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if (ch === terminator) {
          state.position++;
          state.tag = _tag;
          state.anchor = _anchor;
          state.kind = isMapping ? "mapping" : "sequence";
          state.result = _result;
          return true;
        } else if (!readNext) {
          throwError(state, "missed comma between flow collection entries");
        } else if (ch === 44) {
          throwError(state, "expected the node content, but found ','");
        }
        keyTag = keyNode = valueNode = null;
        isPair = isExplicitPair = false;
        if (ch === 63) {
          following = state.input.charCodeAt(state.position + 1);
          if (is_WS_OR_EOL(following)) {
            isPair = isExplicitPair = true;
            state.position++;
            skipSeparationSpace(state, true, nodeIndent);
          }
        }
        _line = state.line;
        _lineStart = state.lineStart;
        _pos = state.position;
        composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
        keyTag = state.tag;
        keyNode = state.result;
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if ((isExplicitPair || state.line === _line) && ch === 58) {
          isPair = true;
          ch = state.input.charCodeAt(++state.position);
          skipSeparationSpace(state, true, nodeIndent);
          composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
          valueNode = state.result;
        }
        if (isMapping) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
        } else if (isPair) {
          _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
        } else {
          _result.push(keyNode);
        }
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if (ch === 44) {
          readNext = true;
          ch = state.input.charCodeAt(++state.position);
        } else {
          readNext = false;
        }
      }
      throwError(state, "unexpected end of the stream within a flow collection");
    }
    function readBlockScalar(state, nodeIndent) {
      var captureStart, folding, chomping = CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch === 124) {
        folding = false;
      } else if (ch === 62) {
        folding = true;
      } else {
        return false;
      }
      state.kind = "scalar";
      state.result = "";
      while (ch !== 0) {
        ch = state.input.charCodeAt(++state.position);
        if (ch === 43 || ch === 45) {
          if (CHOMPING_CLIP === chomping) {
            chomping = ch === 43 ? CHOMPING_KEEP : CHOMPING_STRIP;
          } else {
            throwError(state, "repeat of a chomping mode identifier");
          }
        } else if ((tmp = fromDecimalCode(ch)) >= 0) {
          if (tmp === 0) {
            throwError(state, "bad explicit indentation width of a block scalar; it cannot be less than one");
          } else if (!detectedIndent) {
            textIndent = nodeIndent + tmp - 1;
            detectedIndent = true;
          } else {
            throwError(state, "repeat of an indentation width identifier");
          }
        } else {
          break;
        }
      }
      if (is_WHITE_SPACE(ch)) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (is_WHITE_SPACE(ch));
        if (ch === 35) {
          do {
            ch = state.input.charCodeAt(++state.position);
          } while (!is_EOL(ch) && ch !== 0);
        }
      }
      while (ch !== 0) {
        readLineBreak(state);
        state.lineIndent = 0;
        ch = state.input.charCodeAt(state.position);
        while ((!detectedIndent || state.lineIndent < textIndent) && ch === 32) {
          state.lineIndent++;
          ch = state.input.charCodeAt(++state.position);
        }
        if (!detectedIndent && state.lineIndent > textIndent) {
          textIndent = state.lineIndent;
        }
        if (is_EOL(ch)) {
          emptyLines++;
          continue;
        }
        if (state.lineIndent < textIndent) {
          if (chomping === CHOMPING_KEEP) {
            state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
          } else if (chomping === CHOMPING_CLIP) {
            if (didReadContent) {
              state.result += "\n";
            }
          }
          break;
        }
        if (folding) {
          if (is_WHITE_SPACE(ch)) {
            atMoreIndented = true;
            state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
          } else if (atMoreIndented) {
            atMoreIndented = false;
            state.result += common.repeat("\n", emptyLines + 1);
          } else if (emptyLines === 0) {
            if (didReadContent) {
              state.result += " ";
            }
          } else {
            state.result += common.repeat("\n", emptyLines);
          }
        } else {
          state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
        }
        didReadContent = true;
        detectedIndent = true;
        emptyLines = 0;
        captureStart = state.position;
        while (!is_EOL(ch) && ch !== 0) {
          ch = state.input.charCodeAt(++state.position);
        }
        captureSegment(state, captureStart, state.position, false);
      }
      return true;
    }
    function readBlockSequence(state, nodeIndent) {
      var _line, _tag = state.tag, _anchor = state.anchor, _result = [], following, detected = false, ch;
      if (state.firstTabInLine !== -1)
        return false;
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
      }
      ch = state.input.charCodeAt(state.position);
      while (ch !== 0) {
        if (state.firstTabInLine !== -1) {
          state.position = state.firstTabInLine;
          throwError(state, "tab characters must not be used in indentation");
        }
        if (ch !== 45) {
          break;
        }
        following = state.input.charCodeAt(state.position + 1);
        if (!is_WS_OR_EOL(following)) {
          break;
        }
        detected = true;
        state.position++;
        if (skipSeparationSpace(state, true, -1)) {
          if (state.lineIndent <= nodeIndent) {
            _result.push(null);
            ch = state.input.charCodeAt(state.position);
            continue;
          }
        }
        _line = state.line;
        composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
        _result.push(state.result);
        skipSeparationSpace(state, true, -1);
        ch = state.input.charCodeAt(state.position);
        if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
          throwError(state, "bad indentation of a sequence entry");
        } else if (state.lineIndent < nodeIndent) {
          break;
        }
      }
      if (detected) {
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = "sequence";
        state.result = _result;
        return true;
      }
      return false;
    }
    function readBlockMapping(state, nodeIndent, flowIndent) {
      var following, allowCompact, _line, _keyLine, _keyLineStart, _keyPos, _tag = state.tag, _anchor = state.anchor, _result = {}, overridableKeys = /* @__PURE__ */ Object.create(null), keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
      if (state.firstTabInLine !== -1)
        return false;
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
      }
      ch = state.input.charCodeAt(state.position);
      while (ch !== 0) {
        if (!atExplicitKey && state.firstTabInLine !== -1) {
          state.position = state.firstTabInLine;
          throwError(state, "tab characters must not be used in indentation");
        }
        following = state.input.charCodeAt(state.position + 1);
        _line = state.line;
        if ((ch === 63 || ch === 58) && is_WS_OR_EOL(following)) {
          if (ch === 63) {
            if (atExplicitKey) {
              storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
              keyTag = keyNode = valueNode = null;
            }
            detected = true;
            atExplicitKey = true;
            allowCompact = true;
          } else if (atExplicitKey) {
            atExplicitKey = false;
            allowCompact = true;
          } else {
            throwError(state, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
          }
          state.position += 1;
          ch = following;
        } else {
          _keyLine = state.line;
          _keyLineStart = state.lineStart;
          _keyPos = state.position;
          if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
            break;
          }
          if (state.line === _line) {
            ch = state.input.charCodeAt(state.position);
            while (is_WHITE_SPACE(ch)) {
              ch = state.input.charCodeAt(++state.position);
            }
            if (ch === 58) {
              ch = state.input.charCodeAt(++state.position);
              if (!is_WS_OR_EOL(ch)) {
                throwError(state, "a whitespace character is expected after the key-value separator within a block mapping");
              }
              if (atExplicitKey) {
                storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
                keyTag = keyNode = valueNode = null;
              }
              detected = true;
              atExplicitKey = false;
              allowCompact = false;
              keyTag = state.tag;
              keyNode = state.result;
            } else if (detected) {
              throwError(state, "can not read an implicit mapping pair; a colon is missed");
            } else {
              state.tag = _tag;
              state.anchor = _anchor;
              return true;
            }
          } else if (detected) {
            throwError(state, "can not read a block mapping entry; a multiline key may not be an implicit key");
          } else {
            state.tag = _tag;
            state.anchor = _anchor;
            return true;
          }
        }
        if (state.line === _line || state.lineIndent > nodeIndent) {
          if (atExplicitKey) {
            _keyLine = state.line;
            _keyLineStart = state.lineStart;
            _keyPos = state.position;
          }
          if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
            if (atExplicitKey) {
              keyNode = state.result;
            } else {
              valueNode = state.result;
            }
          }
          if (!atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
            keyTag = keyNode = valueNode = null;
          }
          skipSeparationSpace(state, true, -1);
          ch = state.input.charCodeAt(state.position);
        }
        if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
          throwError(state, "bad indentation of a mapping entry");
        } else if (state.lineIndent < nodeIndent) {
          break;
        }
      }
      if (atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
      }
      if (detected) {
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = "mapping";
        state.result = _result;
      }
      return detected;
    }
    function readTagProperty(state) {
      var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 33)
        return false;
      if (state.tag !== null) {
        throwError(state, "duplication of a tag property");
      }
      ch = state.input.charCodeAt(++state.position);
      if (ch === 60) {
        isVerbatim = true;
        ch = state.input.charCodeAt(++state.position);
      } else if (ch === 33) {
        isNamed = true;
        tagHandle = "!!";
        ch = state.input.charCodeAt(++state.position);
      } else {
        tagHandle = "!";
      }
      _position = state.position;
      if (isVerbatim) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (ch !== 0 && ch !== 62);
        if (state.position < state.length) {
          tagName = state.input.slice(_position, state.position);
          ch = state.input.charCodeAt(++state.position);
        } else {
          throwError(state, "unexpected end of the stream within a verbatim tag");
        }
      } else {
        while (ch !== 0 && !is_WS_OR_EOL(ch)) {
          if (ch === 33) {
            if (!isNamed) {
              tagHandle = state.input.slice(_position - 1, state.position + 1);
              if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
                throwError(state, "named tag handle cannot contain such characters");
              }
              isNamed = true;
              _position = state.position + 1;
            } else {
              throwError(state, "tag suffix cannot contain exclamation marks");
            }
          }
          ch = state.input.charCodeAt(++state.position);
        }
        tagName = state.input.slice(_position, state.position);
        if (PATTERN_FLOW_INDICATORS.test(tagName)) {
          throwError(state, "tag suffix cannot contain flow indicator characters");
        }
      }
      if (tagName && !PATTERN_TAG_URI.test(tagName)) {
        throwError(state, "tag name cannot contain such characters: " + tagName);
      }
      try {
        tagName = decodeURIComponent(tagName);
      } catch (err) {
        throwError(state, "tag name is malformed: " + tagName);
      }
      if (isVerbatim) {
        state.tag = tagName;
      } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
        state.tag = state.tagMap[tagHandle] + tagName;
      } else if (tagHandle === "!") {
        state.tag = "!" + tagName;
      } else if (tagHandle === "!!") {
        state.tag = "tag:yaml.org,2002:" + tagName;
      } else {
        throwError(state, 'undeclared tag handle "' + tagHandle + '"');
      }
      return true;
    }
    function readAnchorProperty(state) {
      var _position, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 38)
        return false;
      if (state.anchor !== null) {
        throwError(state, "duplication of an anchor property");
      }
      ch = state.input.charCodeAt(++state.position);
      _position = state.position;
      while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      if (state.position === _position) {
        throwError(state, "name of an anchor node must contain at least one character");
      }
      state.anchor = state.input.slice(_position, state.position);
      return true;
    }
    function readAlias(state) {
      var _position, alias, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 42)
        return false;
      ch = state.input.charCodeAt(++state.position);
      _position = state.position;
      while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      if (state.position === _position) {
        throwError(state, "name of an alias node must contain at least one character");
      }
      alias = state.input.slice(_position, state.position);
      if (!_hasOwnProperty.call(state.anchorMap, alias)) {
        throwError(state, 'unidentified alias "' + alias + '"');
      }
      state.result = state.anchorMap[alias];
      skipSeparationSpace(state, true, -1);
      return true;
    }
    function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
      var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, typeList, type, flowIndent, blockIndent;
      if (state.listener !== null) {
        state.listener("open", state);
      }
      state.tag = null;
      state.anchor = null;
      state.kind = null;
      state.result = null;
      allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
      if (allowToSeek) {
        if (skipSeparationSpace(state, true, -1)) {
          atNewLine = true;
          if (state.lineIndent > parentIndent) {
            indentStatus = 1;
          } else if (state.lineIndent === parentIndent) {
            indentStatus = 0;
          } else if (state.lineIndent < parentIndent) {
            indentStatus = -1;
          }
        }
      }
      if (indentStatus === 1) {
        while (readTagProperty(state) || readAnchorProperty(state)) {
          if (skipSeparationSpace(state, true, -1)) {
            atNewLine = true;
            allowBlockCollections = allowBlockStyles;
            if (state.lineIndent > parentIndent) {
              indentStatus = 1;
            } else if (state.lineIndent === parentIndent) {
              indentStatus = 0;
            } else if (state.lineIndent < parentIndent) {
              indentStatus = -1;
            }
          } else {
            allowBlockCollections = false;
          }
        }
      }
      if (allowBlockCollections) {
        allowBlockCollections = atNewLine || allowCompact;
      }
      if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
        if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
          flowIndent = parentIndent;
        } else {
          flowIndent = parentIndent + 1;
        }
        blockIndent = state.position - state.lineStart;
        if (indentStatus === 1) {
          if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
            hasContent = true;
          } else {
            if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
              hasContent = true;
            } else if (readAlias(state)) {
              hasContent = true;
              if (state.tag !== null || state.anchor !== null) {
                throwError(state, "alias node should not have any properties");
              }
            } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
              hasContent = true;
              if (state.tag === null) {
                state.tag = "?";
              }
            }
            if (state.anchor !== null) {
              state.anchorMap[state.anchor] = state.result;
            }
          }
        } else if (indentStatus === 0) {
          hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
        }
      }
      if (state.tag === null) {
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      } else if (state.tag === "?") {
        if (state.result !== null && state.kind !== "scalar") {
          throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
        }
        for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
          type = state.implicitTypes[typeIndex];
          if (type.resolve(state.result)) {
            state.result = type.construct(state.result);
            state.tag = type.tag;
            if (state.anchor !== null) {
              state.anchorMap[state.anchor] = state.result;
            }
            break;
          }
        }
      } else if (state.tag !== "!") {
        if (_hasOwnProperty.call(state.typeMap[state.kind || "fallback"], state.tag)) {
          type = state.typeMap[state.kind || "fallback"][state.tag];
        } else {
          type = null;
          typeList = state.typeMap.multi[state.kind || "fallback"];
          for (typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1) {
            if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
              type = typeList[typeIndex];
              break;
            }
          }
        }
        if (!type) {
          throwError(state, "unknown tag !<" + state.tag + ">");
        }
        if (state.result !== null && type.kind !== state.kind) {
          throwError(state, "unacceptable node kind for !<" + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
        }
        if (!type.resolve(state.result, state.tag)) {
          throwError(state, "cannot resolve a node with !<" + state.tag + "> explicit tag");
        } else {
          state.result = type.construct(state.result, state.tag);
          if (state.anchor !== null) {
            state.anchorMap[state.anchor] = state.result;
          }
        }
      }
      if (state.listener !== null) {
        state.listener("close", state);
      }
      return state.tag !== null || state.anchor !== null || hasContent;
    }
    function readDocument(state) {
      var documentStart = state.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
      state.version = null;
      state.checkLineBreaks = state.legacy;
      state.tagMap = /* @__PURE__ */ Object.create(null);
      state.anchorMap = /* @__PURE__ */ Object.create(null);
      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        skipSeparationSpace(state, true, -1);
        ch = state.input.charCodeAt(state.position);
        if (state.lineIndent > 0 || ch !== 37) {
          break;
        }
        hasDirectives = true;
        ch = state.input.charCodeAt(++state.position);
        _position = state.position;
        while (ch !== 0 && !is_WS_OR_EOL(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        directiveName = state.input.slice(_position, state.position);
        directiveArgs = [];
        if (directiveName.length < 1) {
          throwError(state, "directive name must not be less than one character in length");
        }
        while (ch !== 0) {
          while (is_WHITE_SPACE(ch)) {
            ch = state.input.charCodeAt(++state.position);
          }
          if (ch === 35) {
            do {
              ch = state.input.charCodeAt(++state.position);
            } while (ch !== 0 && !is_EOL(ch));
            break;
          }
          if (is_EOL(ch))
            break;
          _position = state.position;
          while (ch !== 0 && !is_WS_OR_EOL(ch)) {
            ch = state.input.charCodeAt(++state.position);
          }
          directiveArgs.push(state.input.slice(_position, state.position));
        }
        if (ch !== 0)
          readLineBreak(state);
        if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
          directiveHandlers[directiveName](state, directiveName, directiveArgs);
        } else {
          throwWarning(state, 'unknown document directive "' + directiveName + '"');
        }
      }
      skipSeparationSpace(state, true, -1);
      if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 45 && state.input.charCodeAt(state.position + 1) === 45 && state.input.charCodeAt(state.position + 2) === 45) {
        state.position += 3;
        skipSeparationSpace(state, true, -1);
      } else if (hasDirectives) {
        throwError(state, "directives end mark is expected");
      }
      composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
      skipSeparationSpace(state, true, -1);
      if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
        throwWarning(state, "non-ASCII line breaks are interpreted as content");
      }
      state.documents.push(state.result);
      if (state.position === state.lineStart && testDocumentSeparator(state)) {
        if (state.input.charCodeAt(state.position) === 46) {
          state.position += 3;
          skipSeparationSpace(state, true, -1);
        }
        return;
      }
      if (state.position < state.length - 1) {
        throwError(state, "end of the stream or a document separator is expected");
      } else {
        return;
      }
    }
    function loadDocuments(input, options) {
      input = String(input);
      options = options || {};
      if (input.length !== 0) {
        if (input.charCodeAt(input.length - 1) !== 10 && input.charCodeAt(input.length - 1) !== 13) {
          input += "\n";
        }
        if (input.charCodeAt(0) === 65279) {
          input = input.slice(1);
        }
      }
      var state = new State(input, options);
      var nullpos = input.indexOf("\0");
      if (nullpos !== -1) {
        state.position = nullpos;
        throwError(state, "null byte is not allowed in input");
      }
      state.input += "\0";
      while (state.input.charCodeAt(state.position) === 32) {
        state.lineIndent += 1;
        state.position += 1;
      }
      while (state.position < state.length - 1) {
        readDocument(state);
      }
      return state.documents;
    }
    function loadAll(input, iterator, options) {
      if (iterator !== null && typeof iterator === "object" && typeof options === "undefined") {
        options = iterator;
        iterator = null;
      }
      var documents = loadDocuments(input, options);
      if (typeof iterator !== "function") {
        return documents;
      }
      for (var index = 0, length = documents.length; index < length; index += 1) {
        iterator(documents[index]);
      }
    }
    function load(input, options) {
      var documents = loadDocuments(input, options);
      if (documents.length === 0) {
        return void 0;
      } else if (documents.length === 1) {
        return documents[0];
      }
      throw new YAMLException("expected a single document in the stream, but found more");
    }
    module2.exports.loadAll = loadAll;
    module2.exports.load = load;
  }
});

// node_modules/js-yaml/lib/dumper.js
var require_dumper = __commonJS({
  "node_modules/js-yaml/lib/dumper.js"(exports, module2) {
    "use strict";
    var common = require_common();
    var YAMLException = require_exception();
    var DEFAULT_SCHEMA = require_default();
    var _toString = Object.prototype.toString;
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    var CHAR_BOM = 65279;
    var CHAR_TAB = 9;
    var CHAR_LINE_FEED = 10;
    var CHAR_CARRIAGE_RETURN = 13;
    var CHAR_SPACE = 32;
    var CHAR_EXCLAMATION = 33;
    var CHAR_DOUBLE_QUOTE = 34;
    var CHAR_SHARP = 35;
    var CHAR_PERCENT = 37;
    var CHAR_AMPERSAND = 38;
    var CHAR_SINGLE_QUOTE = 39;
    var CHAR_ASTERISK = 42;
    var CHAR_COMMA = 44;
    var CHAR_MINUS = 45;
    var CHAR_COLON = 58;
    var CHAR_EQUALS = 61;
    var CHAR_GREATER_THAN = 62;
    var CHAR_QUESTION = 63;
    var CHAR_COMMERCIAL_AT = 64;
    var CHAR_LEFT_SQUARE_BRACKET = 91;
    var CHAR_RIGHT_SQUARE_BRACKET = 93;
    var CHAR_GRAVE_ACCENT = 96;
    var CHAR_LEFT_CURLY_BRACKET = 123;
    var CHAR_VERTICAL_LINE = 124;
    var CHAR_RIGHT_CURLY_BRACKET = 125;
    var ESCAPE_SEQUENCES = {};
    ESCAPE_SEQUENCES[0] = "\\0";
    ESCAPE_SEQUENCES[7] = "\\a";
    ESCAPE_SEQUENCES[8] = "\\b";
    ESCAPE_SEQUENCES[9] = "\\t";
    ESCAPE_SEQUENCES[10] = "\\n";
    ESCAPE_SEQUENCES[11] = "\\v";
    ESCAPE_SEQUENCES[12] = "\\f";
    ESCAPE_SEQUENCES[13] = "\\r";
    ESCAPE_SEQUENCES[27] = "\\e";
    ESCAPE_SEQUENCES[34] = '\\"';
    ESCAPE_SEQUENCES[92] = "\\\\";
    ESCAPE_SEQUENCES[133] = "\\N";
    ESCAPE_SEQUENCES[160] = "\\_";
    ESCAPE_SEQUENCES[8232] = "\\L";
    ESCAPE_SEQUENCES[8233] = "\\P";
    var DEPRECATED_BOOLEANS_SYNTAX = [
      "y",
      "Y",
      "yes",
      "Yes",
      "YES",
      "on",
      "On",
      "ON",
      "n",
      "N",
      "no",
      "No",
      "NO",
      "off",
      "Off",
      "OFF"
    ];
    var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
    function compileStyleMap(schema, map) {
      var result, keys, index, length, tag, style, type;
      if (map === null)
        return {};
      result = {};
      keys = Object.keys(map);
      for (index = 0, length = keys.length; index < length; index += 1) {
        tag = keys[index];
        style = String(map[tag]);
        if (tag.slice(0, 2) === "!!") {
          tag = "tag:yaml.org,2002:" + tag.slice(2);
        }
        type = schema.compiledTypeMap["fallback"][tag];
        if (type && _hasOwnProperty.call(type.styleAliases, style)) {
          style = type.styleAliases[style];
        }
        result[tag] = style;
      }
      return result;
    }
    function encodeHex(character) {
      var string, handle, length;
      string = character.toString(16).toUpperCase();
      if (character <= 255) {
        handle = "x";
        length = 2;
      } else if (character <= 65535) {
        handle = "u";
        length = 4;
      } else if (character <= 4294967295) {
        handle = "U";
        length = 8;
      } else {
        throw new YAMLException("code point within a string may not be greater than 0xFFFFFFFF");
      }
      return "\\" + handle + common.repeat("0", length - string.length) + string;
    }
    var QUOTING_TYPE_SINGLE = 1;
    var QUOTING_TYPE_DOUBLE = 2;
    function State(options) {
      this.schema = options["schema"] || DEFAULT_SCHEMA;
      this.indent = Math.max(1, options["indent"] || 2);
      this.noArrayIndent = options["noArrayIndent"] || false;
      this.skipInvalid = options["skipInvalid"] || false;
      this.flowLevel = common.isNothing(options["flowLevel"]) ? -1 : options["flowLevel"];
      this.styleMap = compileStyleMap(this.schema, options["styles"] || null);
      this.sortKeys = options["sortKeys"] || false;
      this.lineWidth = options["lineWidth"] || 80;
      this.noRefs = options["noRefs"] || false;
      this.noCompatMode = options["noCompatMode"] || false;
      this.condenseFlow = options["condenseFlow"] || false;
      this.quotingType = options["quotingType"] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
      this.forceQuotes = options["forceQuotes"] || false;
      this.replacer = typeof options["replacer"] === "function" ? options["replacer"] : null;
      this.implicitTypes = this.schema.compiledImplicit;
      this.explicitTypes = this.schema.compiledExplicit;
      this.tag = null;
      this.result = "";
      this.duplicates = [];
      this.usedDuplicates = null;
    }
    function indentString(string, spaces) {
      var ind = common.repeat(" ", spaces), position = 0, next = -1, result = "", line, length = string.length;
      while (position < length) {
        next = string.indexOf("\n", position);
        if (next === -1) {
          line = string.slice(position);
          position = length;
        } else {
          line = string.slice(position, next + 1);
          position = next + 1;
        }
        if (line.length && line !== "\n")
          result += ind;
        result += line;
      }
      return result;
    }
    function generateNextLine(state, level) {
      return "\n" + common.repeat(" ", state.indent * level);
    }
    function testImplicitResolving(state, str) {
      var index, length, type;
      for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
        type = state.implicitTypes[index];
        if (type.resolve(str)) {
          return true;
        }
      }
      return false;
    }
    function isWhitespace(c) {
      return c === CHAR_SPACE || c === CHAR_TAB;
    }
    function isPrintable(c) {
      return 32 <= c && c <= 126 || 161 <= c && c <= 55295 && c !== 8232 && c !== 8233 || 57344 <= c && c <= 65533 && c !== CHAR_BOM || 65536 <= c && c <= 1114111;
    }
    function isNsCharOrWhitespace(c) {
      return isPrintable(c) && c !== CHAR_BOM && c !== CHAR_CARRIAGE_RETURN && c !== CHAR_LINE_FEED;
    }
    function isPlainSafe(c, prev, inblock) {
      var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
      var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace(c);
      return (
        // ns-plain-safe
        (inblock ? (
          // c = flow-in
          cIsNsCharOrWhitespace
        ) : cIsNsCharOrWhitespace && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET) && c !== CHAR_SHARP && !(prev === CHAR_COLON && !cIsNsChar) || isNsCharOrWhitespace(prev) && !isWhitespace(prev) && c === CHAR_SHARP || prev === CHAR_COLON && cIsNsChar
      );
    }
    function isPlainSafeFirst(c) {
      return isPrintable(c) && c !== CHAR_BOM && !isWhitespace(c) && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_EQUALS && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
    }
    function isPlainSafeLast(c) {
      return !isWhitespace(c) && c !== CHAR_COLON;
    }
    function codePointAt(string, pos) {
      var first = string.charCodeAt(pos), second;
      if (first >= 55296 && first <= 56319 && pos + 1 < string.length) {
        second = string.charCodeAt(pos + 1);
        if (second >= 56320 && second <= 57343) {
          return (first - 55296) * 1024 + second - 56320 + 65536;
        }
      }
      return first;
    }
    function needIndentIndicator(string) {
      var leadingSpaceRe = /^\n* /;
      return leadingSpaceRe.test(string);
    }
    var STYLE_PLAIN = 1;
    var STYLE_SINGLE = 2;
    var STYLE_LITERAL = 3;
    var STYLE_FOLDED = 4;
    var STYLE_DOUBLE = 5;
    function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType, quotingType, forceQuotes, inblock) {
      var i;
      var char = 0;
      var prevChar = null;
      var hasLineBreak = false;
      var hasFoldableLine = false;
      var shouldTrackWidth = lineWidth !== -1;
      var previousLineBreak = -1;
      var plain = isPlainSafeFirst(codePointAt(string, 0)) && isPlainSafeLast(codePointAt(string, string.length - 1));
      if (singleLineOnly || forceQuotes) {
        for (i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
          char = codePointAt(string, i);
          if (!isPrintable(char)) {
            return STYLE_DOUBLE;
          }
          plain = plain && isPlainSafe(char, prevChar, inblock);
          prevChar = char;
        }
      } else {
        for (i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
          char = codePointAt(string, i);
          if (char === CHAR_LINE_FEED) {
            hasLineBreak = true;
            if (shouldTrackWidth) {
              hasFoldableLine = hasFoldableLine || // Foldable line = too long, and not more-indented.
              i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ";
              previousLineBreak = i;
            }
          } else if (!isPrintable(char)) {
            return STYLE_DOUBLE;
          }
          plain = plain && isPlainSafe(char, prevChar, inblock);
          prevChar = char;
        }
        hasFoldableLine = hasFoldableLine || shouldTrackWidth && (i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ");
      }
      if (!hasLineBreak && !hasFoldableLine) {
        if (plain && !forceQuotes && !testAmbiguousType(string)) {
          return STYLE_PLAIN;
        }
        return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
      }
      if (indentPerLevel > 9 && needIndentIndicator(string)) {
        return STYLE_DOUBLE;
      }
      if (!forceQuotes) {
        return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
      }
      return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
    }
    function writeScalar(state, string, level, iskey, inblock) {
      state.dump = function() {
        if (string.length === 0) {
          return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
        }
        if (!state.noCompatMode) {
          if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string)) {
            return state.quotingType === QUOTING_TYPE_DOUBLE ? '"' + string + '"' : "'" + string + "'";
          }
        }
        var indent = state.indent * Math.max(1, level);
        var lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);
        var singleLineOnly = iskey || state.flowLevel > -1 && level >= state.flowLevel;
        function testAmbiguity(string2) {
          return testImplicitResolving(state, string2);
        }
        switch (chooseScalarStyle(
          string,
          singleLineOnly,
          state.indent,
          lineWidth,
          testAmbiguity,
          state.quotingType,
          state.forceQuotes && !iskey,
          inblock
        )) {
          case STYLE_PLAIN:
            return string;
          case STYLE_SINGLE:
            return "'" + string.replace(/'/g, "''") + "'";
          case STYLE_LITERAL:
            return "|" + blockHeader(string, state.indent) + dropEndingNewline(indentString(string, indent));
          case STYLE_FOLDED:
            return ">" + blockHeader(string, state.indent) + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
          case STYLE_DOUBLE:
            return '"' + escapeString(string, lineWidth) + '"';
          default:
            throw new YAMLException("impossible error: invalid scalar style");
        }
      }();
    }
    function blockHeader(string, indentPerLevel) {
      var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : "";
      var clip = string[string.length - 1] === "\n";
      var keep = clip && (string[string.length - 2] === "\n" || string === "\n");
      var chomp = keep ? "+" : clip ? "" : "-";
      return indentIndicator + chomp + "\n";
    }
    function dropEndingNewline(string) {
      return string[string.length - 1] === "\n" ? string.slice(0, -1) : string;
    }
    function foldString(string, width) {
      var lineRe = /(\n+)([^\n]*)/g;
      var result = function() {
        var nextLF = string.indexOf("\n");
        nextLF = nextLF !== -1 ? nextLF : string.length;
        lineRe.lastIndex = nextLF;
        return foldLine(string.slice(0, nextLF), width);
      }();
      var prevMoreIndented = string[0] === "\n" || string[0] === " ";
      var moreIndented;
      var match;
      while (match = lineRe.exec(string)) {
        var prefix = match[1], line = match[2];
        moreIndented = line[0] === " ";
        result += prefix + (!prevMoreIndented && !moreIndented && line !== "" ? "\n" : "") + foldLine(line, width);
        prevMoreIndented = moreIndented;
      }
      return result;
    }
    function foldLine(line, width) {
      if (line === "" || line[0] === " ")
        return line;
      var breakRe = / [^ ]/g;
      var match;
      var start = 0, end, curr = 0, next = 0;
      var result = "";
      while (match = breakRe.exec(line)) {
        next = match.index;
        if (next - start > width) {
          end = curr > start ? curr : next;
          result += "\n" + line.slice(start, end);
          start = end + 1;
        }
        curr = next;
      }
      result += "\n";
      if (line.length - start > width && curr > start) {
        result += line.slice(start, curr) + "\n" + line.slice(curr + 1);
      } else {
        result += line.slice(start);
      }
      return result.slice(1);
    }
    function escapeString(string) {
      var result = "";
      var char = 0;
      var escapeSeq;
      for (var i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
        char = codePointAt(string, i);
        escapeSeq = ESCAPE_SEQUENCES[char];
        if (!escapeSeq && isPrintable(char)) {
          result += string[i];
          if (char >= 65536)
            result += string[i + 1];
        } else {
          result += escapeSeq || encodeHex(char);
        }
      }
      return result;
    }
    function writeFlowSequence(state, level, object) {
      var _result = "", _tag = state.tag, index, length, value;
      for (index = 0, length = object.length; index < length; index += 1) {
        value = object[index];
        if (state.replacer) {
          value = state.replacer.call(object, String(index), value);
        }
        if (writeNode(state, level, value, false, false) || typeof value === "undefined" && writeNode(state, level, null, false, false)) {
          if (_result !== "")
            _result += "," + (!state.condenseFlow ? " " : "");
          _result += state.dump;
        }
      }
      state.tag = _tag;
      state.dump = "[" + _result + "]";
    }
    function writeBlockSequence(state, level, object, compact) {
      var _result = "", _tag = state.tag, index, length, value;
      for (index = 0, length = object.length; index < length; index += 1) {
        value = object[index];
        if (state.replacer) {
          value = state.replacer.call(object, String(index), value);
        }
        if (writeNode(state, level + 1, value, true, true, false, true) || typeof value === "undefined" && writeNode(state, level + 1, null, true, true, false, true)) {
          if (!compact || _result !== "") {
            _result += generateNextLine(state, level);
          }
          if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
            _result += "-";
          } else {
            _result += "- ";
          }
          _result += state.dump;
        }
      }
      state.tag = _tag;
      state.dump = _result || "[]";
    }
    function writeFlowMapping(state, level, object) {
      var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, pairBuffer;
      for (index = 0, length = objectKeyList.length; index < length; index += 1) {
        pairBuffer = "";
        if (_result !== "")
          pairBuffer += ", ";
        if (state.condenseFlow)
          pairBuffer += '"';
        objectKey = objectKeyList[index];
        objectValue = object[objectKey];
        if (state.replacer) {
          objectValue = state.replacer.call(object, objectKey, objectValue);
        }
        if (!writeNode(state, level, objectKey, false, false)) {
          continue;
        }
        if (state.dump.length > 1024)
          pairBuffer += "? ";
        pairBuffer += state.dump + (state.condenseFlow ? '"' : "") + ":" + (state.condenseFlow ? "" : " ");
        if (!writeNode(state, level, objectValue, false, false)) {
          continue;
        }
        pairBuffer += state.dump;
        _result += pairBuffer;
      }
      state.tag = _tag;
      state.dump = "{" + _result + "}";
    }
    function writeBlockMapping(state, level, object, compact) {
      var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, explicitPair, pairBuffer;
      if (state.sortKeys === true) {
        objectKeyList.sort();
      } else if (typeof state.sortKeys === "function") {
        objectKeyList.sort(state.sortKeys);
      } else if (state.sortKeys) {
        throw new YAMLException("sortKeys must be a boolean or a function");
      }
      for (index = 0, length = objectKeyList.length; index < length; index += 1) {
        pairBuffer = "";
        if (!compact || _result !== "") {
          pairBuffer += generateNextLine(state, level);
        }
        objectKey = objectKeyList[index];
        objectValue = object[objectKey];
        if (state.replacer) {
          objectValue = state.replacer.call(object, objectKey, objectValue);
        }
        if (!writeNode(state, level + 1, objectKey, true, true, true)) {
          continue;
        }
        explicitPair = state.tag !== null && state.tag !== "?" || state.dump && state.dump.length > 1024;
        if (explicitPair) {
          if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
            pairBuffer += "?";
          } else {
            pairBuffer += "? ";
          }
        }
        pairBuffer += state.dump;
        if (explicitPair) {
          pairBuffer += generateNextLine(state, level);
        }
        if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
          continue;
        }
        if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
          pairBuffer += ":";
        } else {
          pairBuffer += ": ";
        }
        pairBuffer += state.dump;
        _result += pairBuffer;
      }
      state.tag = _tag;
      state.dump = _result || "{}";
    }
    function detectType(state, object, explicit) {
      var _result, typeList, index, length, type, style;
      typeList = explicit ? state.explicitTypes : state.implicitTypes;
      for (index = 0, length = typeList.length; index < length; index += 1) {
        type = typeList[index];
        if ((type.instanceOf || type.predicate) && (!type.instanceOf || typeof object === "object" && object instanceof type.instanceOf) && (!type.predicate || type.predicate(object))) {
          if (explicit) {
            if (type.multi && type.representName) {
              state.tag = type.representName(object);
            } else {
              state.tag = type.tag;
            }
          } else {
            state.tag = "?";
          }
          if (type.represent) {
            style = state.styleMap[type.tag] || type.defaultStyle;
            if (_toString.call(type.represent) === "[object Function]") {
              _result = type.represent(object, style);
            } else if (_hasOwnProperty.call(type.represent, style)) {
              _result = type.represent[style](object, style);
            } else {
              throw new YAMLException("!<" + type.tag + '> tag resolver accepts not "' + style + '" style');
            }
            state.dump = _result;
          }
          return true;
        }
      }
      return false;
    }
    function writeNode(state, level, object, block, compact, iskey, isblockseq) {
      state.tag = null;
      state.dump = object;
      if (!detectType(state, object, false)) {
        detectType(state, object, true);
      }
      var type = _toString.call(state.dump);
      var inblock = block;
      var tagStr;
      if (block) {
        block = state.flowLevel < 0 || state.flowLevel > level;
      }
      var objectOrArray = type === "[object Object]" || type === "[object Array]", duplicateIndex, duplicate;
      if (objectOrArray) {
        duplicateIndex = state.duplicates.indexOf(object);
        duplicate = duplicateIndex !== -1;
      }
      if (state.tag !== null && state.tag !== "?" || duplicate || state.indent !== 2 && level > 0) {
        compact = false;
      }
      if (duplicate && state.usedDuplicates[duplicateIndex]) {
        state.dump = "*ref_" + duplicateIndex;
      } else {
        if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
          state.usedDuplicates[duplicateIndex] = true;
        }
        if (type === "[object Object]") {
          if (block && Object.keys(state.dump).length !== 0) {
            writeBlockMapping(state, level, state.dump, compact);
            if (duplicate) {
              state.dump = "&ref_" + duplicateIndex + state.dump;
            }
          } else {
            writeFlowMapping(state, level, state.dump);
            if (duplicate) {
              state.dump = "&ref_" + duplicateIndex + " " + state.dump;
            }
          }
        } else if (type === "[object Array]") {
          if (block && state.dump.length !== 0) {
            if (state.noArrayIndent && !isblockseq && level > 0) {
              writeBlockSequence(state, level - 1, state.dump, compact);
            } else {
              writeBlockSequence(state, level, state.dump, compact);
            }
            if (duplicate) {
              state.dump = "&ref_" + duplicateIndex + state.dump;
            }
          } else {
            writeFlowSequence(state, level, state.dump);
            if (duplicate) {
              state.dump = "&ref_" + duplicateIndex + " " + state.dump;
            }
          }
        } else if (type === "[object String]") {
          if (state.tag !== "?") {
            writeScalar(state, state.dump, level, iskey, inblock);
          }
        } else if (type === "[object Undefined]") {
          return false;
        } else {
          if (state.skipInvalid)
            return false;
          throw new YAMLException("unacceptable kind of an object to dump " + type);
        }
        if (state.tag !== null && state.tag !== "?") {
          tagStr = encodeURI(
            state.tag[0] === "!" ? state.tag.slice(1) : state.tag
          ).replace(/!/g, "%21");
          if (state.tag[0] === "!") {
            tagStr = "!" + tagStr;
          } else if (tagStr.slice(0, 18) === "tag:yaml.org,2002:") {
            tagStr = "!!" + tagStr.slice(18);
          } else {
            tagStr = "!<" + tagStr + ">";
          }
          state.dump = tagStr + " " + state.dump;
        }
      }
      return true;
    }
    function getDuplicateReferences(object, state) {
      var objects = [], duplicatesIndexes = [], index, length;
      inspectNode(object, objects, duplicatesIndexes);
      for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
        state.duplicates.push(objects[duplicatesIndexes[index]]);
      }
      state.usedDuplicates = new Array(length);
    }
    function inspectNode(object, objects, duplicatesIndexes) {
      var objectKeyList, index, length;
      if (object !== null && typeof object === "object") {
        index = objects.indexOf(object);
        if (index !== -1) {
          if (duplicatesIndexes.indexOf(index) === -1) {
            duplicatesIndexes.push(index);
          }
        } else {
          objects.push(object);
          if (Array.isArray(object)) {
            for (index = 0, length = object.length; index < length; index += 1) {
              inspectNode(object[index], objects, duplicatesIndexes);
            }
          } else {
            objectKeyList = Object.keys(object);
            for (index = 0, length = objectKeyList.length; index < length; index += 1) {
              inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
            }
          }
        }
      }
    }
    function dump(input, options) {
      options = options || {};
      var state = new State(options);
      if (!state.noRefs)
        getDuplicateReferences(input, state);
      var value = input;
      if (state.replacer) {
        value = state.replacer.call({ "": value }, "", value);
      }
      if (writeNode(state, 0, value, true, true))
        return state.dump + "\n";
      return "";
    }
    module2.exports.dump = dump;
  }
});

// node_modules/js-yaml/index.js
var require_js_yaml = __commonJS({
  "node_modules/js-yaml/index.js"(exports, module2) {
    "use strict";
    var loader = require_loader();
    var dumper = require_dumper();
    function renamed(from, to) {
      return function() {
        throw new Error("Function yaml." + from + " is removed in js-yaml 4. Use yaml." + to + " instead, which is now safe by default.");
      };
    }
    module2.exports.Type = require_type();
    module2.exports.Schema = require_schema();
    module2.exports.FAILSAFE_SCHEMA = require_failsafe();
    module2.exports.JSON_SCHEMA = require_json2();
    module2.exports.CORE_SCHEMA = require_core();
    module2.exports.DEFAULT_SCHEMA = require_default();
    module2.exports.load = loader.load;
    module2.exports.loadAll = loader.loadAll;
    module2.exports.dump = dumper.dump;
    module2.exports.YAMLException = require_exception();
    module2.exports.types = {
      binary: require_binary(),
      float: require_float(),
      map: require_map(),
      null: require_null(),
      pairs: require_pairs(),
      set: require_set(),
      timestamp: require_timestamp(),
      bool: require_bool(),
      int: require_int(),
      merge: require_merge(),
      omap: require_omap(),
      seq: require_seq(),
      str: require_str()
    };
    module2.exports.safeLoad = renamed("safeLoad", "load");
    module2.exports.safeLoadAll = renamed("safeLoadAll", "loadAll");
    module2.exports.safeDump = renamed("safeDump", "dump");
  }
});

// node_modules/@apidevtools/json-schema-ref-parser/lib/parsers/yaml.js
var require_yaml = __commonJS({
  "node_modules/@apidevtools/json-schema-ref-parser/lib/parsers/yaml.js"(exports, module2) {
    "use strict";
    var { ParserError } = require_errors();
    var yaml = require_js_yaml();
    module2.exports = {
      /**
       * The order that this parser will run, in relation to other parsers.
       *
       * @type {number}
       */
      order: 200,
      /**
       * Whether to allow "empty" files. This includes zero-byte files, as well as empty JSON objects.
       *
       * @type {boolean}
       */
      allowEmpty: true,
      /**
       * Determines whether this parser can parse a given file reference.
       * Parsers that match will be tried, in order, until one successfully parses the file.
       * Parsers that don't match will be skipped, UNLESS none of the parsers match, in which case
       * every parser will be tried.
       *
       * @type {RegExp|string[]|function}
       */
      canParse: [".yaml", ".yml", ".json"],
      // JSON is valid YAML
      /**
       * Parses the given file as YAML
       *
       * @param {object} file           - An object containing information about the referenced file
       * @param {string} file.url       - The full URL of the referenced file
       * @param {string} file.extension - The lowercased file extension (e.g. ".txt", ".html", etc.)
       * @param {*}      file.data      - The file contents. This will be whatever data type was returned by the resolver
       * @returns {Promise}
       */
      async parse(file) {
        let data = file.data;
        if (Buffer.isBuffer(data)) {
          data = data.toString();
        }
        if (typeof data === "string") {
          try {
            return yaml.load(data);
          } catch (e) {
            throw new ParserError(e.message, file.url);
          }
        } else {
          return data;
        }
      }
    };
  }
});

// node_modules/@apidevtools/json-schema-ref-parser/lib/parsers/text.js
var require_text = __commonJS({
  "node_modules/@apidevtools/json-schema-ref-parser/lib/parsers/text.js"(exports, module2) {
    "use strict";
    var { ParserError } = require_errors();
    var TEXT_REGEXP = /\.(txt|htm|html|md|xml|js|min|map|css|scss|less|svg)$/i;
    module2.exports = {
      /**
       * The order that this parser will run, in relation to other parsers.
       *
       * @type {number}
       */
      order: 300,
      /**
       * Whether to allow "empty" files (zero bytes).
       *
       * @type {boolean}
       */
      allowEmpty: true,
      /**
       * The encoding that the text is expected to be in.
       *
       * @type {string}
       */
      encoding: "utf8",
      /**
       * Determines whether this parser can parse a given file reference.
       * Parsers that return true will be tried, in order, until one successfully parses the file.
       * Parsers that return false will be skipped, UNLESS all parsers returned false, in which case
       * every parser will be tried.
       *
       * @param {object} file           - An object containing information about the referenced file
       * @param {string} file.url       - The full URL of the referenced file
       * @param {string} file.extension - The lowercased file extension (e.g. ".txt", ".html", etc.)
       * @param {*}      file.data      - The file contents. This will be whatever data type was returned by the resolver
       * @returns {boolean}
       */
      canParse(file) {
        return (typeof file.data === "string" || Buffer.isBuffer(file.data)) && TEXT_REGEXP.test(file.url);
      },
      /**
       * Parses the given file as text
       *
       * @param {object} file           - An object containing information about the referenced file
       * @param {string} file.url       - The full URL of the referenced file
       * @param {string} file.extension - The lowercased file extension (e.g. ".txt", ".html", etc.)
       * @param {*}      file.data      - The file contents. This will be whatever data type was returned by the resolver
       * @returns {string}
       */
      parse(file) {
        if (typeof file.data === "string") {
          return file.data;
        } else if (Buffer.isBuffer(file.data)) {
          return file.data.toString(this.encoding);
        } else {
          throw new ParserError("data is not text", file.url);
        }
      }
    };
  }
});

// node_modules/@apidevtools/json-schema-ref-parser/lib/parsers/binary.js
var require_binary2 = __commonJS({
  "node_modules/@apidevtools/json-schema-ref-parser/lib/parsers/binary.js"(exports, module2) {
    "use strict";
    var BINARY_REGEXP = /\.(jpeg|jpg|gif|png|bmp|ico)$/i;
    module2.exports = {
      /**
       * The order that this parser will run, in relation to other parsers.
       *
       * @type {number}
       */
      order: 400,
      /**
       * Whether to allow "empty" files (zero bytes).
       *
       * @type {boolean}
       */
      allowEmpty: true,
      /**
       * Determines whether this parser can parse a given file reference.
       * Parsers that return true will be tried, in order, until one successfully parses the file.
       * Parsers that return false will be skipped, UNLESS all parsers returned false, in which case
       * every parser will be tried.
       *
       * @param {object} file           - An object containing information about the referenced file
       * @param {string} file.url       - The full URL of the referenced file
       * @param {string} file.extension - The lowercased file extension (e.g. ".txt", ".html", etc.)
       * @param {*}      file.data      - The file contents. This will be whatever data type was returned by the resolver
       * @returns {boolean}
       */
      canParse(file) {
        return Buffer.isBuffer(file.data) && BINARY_REGEXP.test(file.url);
      },
      /**
       * Parses the given data as a Buffer (byte array).
       *
       * @param {object} file           - An object containing information about the referenced file
       * @param {string} file.url       - The full URL of the referenced file
       * @param {string} file.extension - The lowercased file extension (e.g. ".txt", ".html", etc.)
       * @param {*}      file.data      - The file contents. This will be whatever data type was returned by the resolver
       * @returns {Buffer}
       */
      parse(file) {
        if (Buffer.isBuffer(file.data)) {
          return file.data;
        } else {
          return Buffer.from(file.data);
        }
      }
    };
  }
});

// node_modules/@apidevtools/json-schema-ref-parser/lib/resolvers/file.js
var require_file = __commonJS({
  "node_modules/@apidevtools/json-schema-ref-parser/lib/resolvers/file.js"(exports, module2) {
    "use strict";
    var fs = require("fs");
    var { ono: ono2 } = (init_esm(), __toCommonJS(esm_exports));
    var url = require_url();
    var { ResolverError } = require_errors();
    module2.exports = {
      /**
       * The order that this resolver will run, in relation to other resolvers.
       *
       * @type {number}
       */
      order: 100,
      /**
       * Determines whether this resolver can read a given file reference.
       * Resolvers that return true will be tried, in order, until one successfully resolves the file.
       * Resolvers that return false will not be given a chance to resolve the file.
       *
       * @param {object} file           - An object containing information about the referenced file
       * @param {string} file.url       - The full URL of the referenced file
       * @param {string} file.extension - The lowercased file extension (e.g. ".txt", ".html", etc.)
       * @returns {boolean}
       */
      canRead(file) {
        return url.isFileSystemPath(file.url);
      },
      /**
       * Reads the given file and returns its raw contents as a Buffer.
       *
       * @param {object} file           - An object containing information about the referenced file
       * @param {string} file.url       - The full URL of the referenced file
       * @param {string} file.extension - The lowercased file extension (e.g. ".txt", ".html", etc.)
       * @returns {Promise<Buffer>}
       */
      read(file) {
        return new Promise((resolve, reject) => {
          let path;
          try {
            path = url.toFileSystemPath(file.url);
          } catch (err) {
            reject(new ResolverError(ono2.uri(err, `Malformed URI: ${file.url}`), file.url));
          }
          try {
            fs.readFile(path, (err, data) => {
              if (err) {
                reject(new ResolverError(ono2(err, `Error opening file "${path}"`), path));
              } else {
                resolve(data);
              }
            });
          } catch (err) {
            reject(new ResolverError(ono2(err, `Error opening file "${path}"`), path));
          }
        });
      }
    };
  }
});

// node_modules/@apidevtools/json-schema-ref-parser/lib/resolvers/http.js
var require_http = __commonJS({
  "node_modules/@apidevtools/json-schema-ref-parser/lib/resolvers/http.js"(exports, module2) {
    "use strict";
    var http = require("http");
    var https = require("https");
    var { ono: ono2 } = (init_esm(), __toCommonJS(esm_exports));
    var url = require_url();
    var { ResolverError } = require_errors();
    module2.exports = {
      /**
       * The order that this resolver will run, in relation to other resolvers.
       *
       * @type {number}
       */
      order: 200,
      /**
       * HTTP headers to send when downloading files.
       *
       * @example:
       * {
       *   "User-Agent": "JSON Schema $Ref Parser",
       *   Accept: "application/json"
       * }
       *
       * @type {object}
       */
      headers: null,
      /**
       * HTTP request timeout (in milliseconds).
       *
       * @type {number}
       */
      timeout: 5e3,
      // 5 seconds
      /**
       * The maximum number of HTTP redirects to follow.
       * To disable automatic following of redirects, set this to zero.
       *
       * @type {number}
       */
      redirects: 5,
      /**
       * The `withCredentials` option of XMLHttpRequest.
       * Set this to `true` if you're downloading files from a CORS-enabled server that requires authentication
       *
       * @type {boolean}
       */
      withCredentials: false,
      /**
       * Determines whether this resolver can read a given file reference.
       * Resolvers that return true will be tried in order, until one successfully resolves the file.
       * Resolvers that return false will not be given a chance to resolve the file.
       *
       * @param {object} file           - An object containing information about the referenced file
       * @param {string} file.url       - The full URL of the referenced file
       * @param {string} file.extension - The lowercased file extension (e.g. ".txt", ".html", etc.)
       * @returns {boolean}
       */
      canRead(file) {
        return url.isHttp(file.url);
      },
      /**
       * Reads the given URL and returns its raw contents as a Buffer.
       *
       * @param {object} file           - An object containing information about the referenced file
       * @param {string} file.url       - The full URL of the referenced file
       * @param {string} file.extension - The lowercased file extension (e.g. ".txt", ".html", etc.)
       * @returns {Promise<Buffer>}
       */
      read(file) {
        let u = url.parse(file.url);
        if (process.browser && !u.protocol) {
          u.protocol = url.parse(location.href).protocol;
        }
        return download(u, this);
      }
    };
    function download(u, httpOptions, redirects) {
      return new Promise((resolve, reject) => {
        u = url.parse(u);
        redirects = redirects || [];
        redirects.push(u.href);
        get(u, httpOptions).then((res) => {
          if (res.statusCode >= 400) {
            throw ono2({ status: res.statusCode }, `HTTP ERROR ${res.statusCode}`);
          } else if (res.statusCode >= 300) {
            if (redirects.length > httpOptions.redirects) {
              reject(new ResolverError(ono2(
                { status: res.statusCode },
                `Error downloading ${redirects[0]}. 
Too many redirects: 
  ${redirects.join(" \n  ")}`
              )));
            } else if (!res.headers.location) {
              throw ono2({ status: res.statusCode }, `HTTP ${res.statusCode} redirect with no location header`);
            } else {
              let redirectTo = url.resolve(u, res.headers.location);
              download(redirectTo, httpOptions, redirects).then(resolve, reject);
            }
          } else {
            resolve(res.body || Buffer.alloc(0));
          }
        }).catch((err) => {
          reject(new ResolverError(ono2(err, `Error downloading ${u.href}`), u.href));
        });
      });
    }
    function get(u, httpOptions) {
      return new Promise((resolve, reject) => {
        let protocol = u.protocol === "https:" ? https : http;
        let req = protocol.get({
          hostname: u.hostname,
          port: u.port,
          path: u.path,
          auth: u.auth,
          protocol: u.protocol,
          headers: httpOptions.headers || {},
          withCredentials: httpOptions.withCredentials
        });
        if (typeof req.setTimeout === "function") {
          req.setTimeout(httpOptions.timeout);
        }
        req.on("timeout", () => {
          req.abort();
        });
        req.on("error", reject);
        req.once("response", (res) => {
          res.body = Buffer.alloc(0);
          res.on("data", (data) => {
            res.body = Buffer.concat([res.body, Buffer.from(data)]);
          });
          res.on("error", reject);
          res.on("end", () => {
            resolve(res);
          });
        });
      });
    }
  }
});

// node_modules/@apidevtools/json-schema-ref-parser/lib/options.js
var require_options = __commonJS({
  "node_modules/@apidevtools/json-schema-ref-parser/lib/options.js"(exports, module2) {
    "use strict";
    var jsonParser = require_json();
    var yamlParser = require_yaml();
    var textParser = require_text();
    var binaryParser = require_binary2();
    var fileResolver = require_file();
    var httpResolver = require_http();
    module2.exports = $RefParserOptions;
    function $RefParserOptions(options) {
      merge(this, $RefParserOptions.defaults);
      merge(this, options);
    }
    $RefParserOptions.defaults = {
      /**
       * Determines how different types of files will be parsed.
       *
       * You can add additional parsers of your own, replace an existing one with
       * your own implementation, or disable any parser by setting it to false.
       */
      parse: {
        json: jsonParser,
        yaml: yamlParser,
        text: textParser,
        binary: binaryParser
      },
      /**
       * Determines how JSON References will be resolved.
       *
       * You can add additional resolvers of your own, replace an existing one with
       * your own implementation, or disable any resolver by setting it to false.
       */
      resolve: {
        file: fileResolver,
        http: httpResolver,
        /**
         * Determines whether external $ref pointers will be resolved.
         * If this option is disabled, then none of above resolvers will be called.
         * Instead, external $ref pointers will simply be ignored.
         *
         * @type {boolean}
         */
        external: true
      },
      /**
       * By default, JSON Schema $Ref Parser throws the first error it encounters. Setting `continueOnError` to `true`
       * causes it to keep processing as much as possible and then throw a single error that contains all errors
       * that were encountered.
      */
      continueOnError: false,
      /**
       * Determines the types of JSON references that are allowed.
       */
      dereference: {
        /**
         * Dereference circular (recursive) JSON references?
         * If false, then a {@link ReferenceError} will be thrown if a circular reference is found.
         * If "ignore", then circular references will not be dereferenced.
         *
         * @type {boolean|string}
         */
        circular: true
      }
    };
    function merge(target, source) {
      if (isMergeable(source)) {
        let keys = Object.keys(source);
        for (let i = 0; i < keys.length; i++) {
          let key = keys[i];
          let sourceSetting = source[key];
          let targetSetting = target[key];
          if (isMergeable(sourceSetting)) {
            target[key] = merge(targetSetting || {}, sourceSetting);
          } else if (sourceSetting !== void 0) {
            target[key] = sourceSetting;
          }
        }
      }
      return target;
    }
    function isMergeable(val) {
      return val && typeof val === "object" && !Array.isArray(val) && !(val instanceof RegExp) && !(val instanceof Date);
    }
  }
});

// node_modules/@apidevtools/json-schema-ref-parser/lib/normalize-args.js
var require_normalize_args = __commonJS({
  "node_modules/@apidevtools/json-schema-ref-parser/lib/normalize-args.js"(exports, module2) {
    "use strict";
    var Options = require_options();
    module2.exports = normalizeArgs2;
    function normalizeArgs2(args) {
      let path, schema, options, callback;
      args = Array.prototype.slice.call(args);
      if (typeof args[args.length - 1] === "function") {
        callback = args.pop();
      }
      if (typeof args[0] === "string") {
        path = args[0];
        if (typeof args[2] === "object") {
          schema = args[1];
          options = args[2];
        } else {
          schema = void 0;
          options = args[1];
        }
      } else {
        path = "";
        schema = args[0];
        options = args[1];
      }
      if (!(options instanceof Options)) {
        options = new Options(options);
      }
      return {
        path,
        schema,
        options,
        callback
      };
    }
  }
});

// node_modules/@apidevtools/json-schema-ref-parser/lib/resolve-external.js
var require_resolve_external = __commonJS({
  "node_modules/@apidevtools/json-schema-ref-parser/lib/resolve-external.js"(exports, module2) {
    "use strict";
    var $Ref = require_ref();
    var Pointer = require_pointer();
    var parse = require_parse3();
    var url = require_url();
    var { isHandledError } = require_errors();
    module2.exports = resolveExternal;
    function resolveExternal(parser, options) {
      if (!options.resolve.external) {
        return Promise.resolve();
      }
      try {
        let promises = crawl(parser.schema, parser.$refs._root$Ref.path + "#", parser.$refs, options);
        return Promise.all(promises);
      } catch (e) {
        return Promise.reject(e);
      }
    }
    function crawl(obj, path, $refs, options, seen) {
      seen = seen || /* @__PURE__ */ new Set();
      let promises = [];
      if (obj && typeof obj === "object" && !ArrayBuffer.isView(obj) && !seen.has(obj)) {
        seen.add(obj);
        if ($Ref.isExternal$Ref(obj)) {
          promises.push(resolve$Ref(obj, path, $refs, options));
        } else {
          for (let key of Object.keys(obj)) {
            let keyPath = Pointer.join(path, key);
            let value = obj[key];
            if ($Ref.isExternal$Ref(value)) {
              promises.push(resolve$Ref(value, keyPath, $refs, options));
            } else {
              promises = promises.concat(crawl(value, keyPath, $refs, options, seen));
            }
          }
        }
      }
      return promises;
    }
    async function resolve$Ref($ref, path, $refs, options) {
      let resolvedPath = url.resolve(path, $ref.$ref);
      let withoutHash = url.stripHash(resolvedPath);
      $ref = $refs._$refs[withoutHash];
      if ($ref) {
        return Promise.resolve($ref.value);
      }
      try {
        const result = await parse(resolvedPath, $refs, options);
        let promises = crawl(result, withoutHash + "#", $refs, options);
        return Promise.all(promises);
      } catch (err) {
        if (!options.continueOnError || !isHandledError(err)) {
          throw err;
        }
        if ($refs._$refs[withoutHash]) {
          err.source = url.stripHash(path);
          err.path = url.safePointerToPath(url.getHash(path));
        }
        return [];
      }
    }
  }
});

// node_modules/@apidevtools/json-schema-ref-parser/lib/bundle.js
var require_bundle = __commonJS({
  "node_modules/@apidevtools/json-schema-ref-parser/lib/bundle.js"(exports, module2) {
    "use strict";
    var $Ref = require_ref();
    var Pointer = require_pointer();
    var url = require_url();
    module2.exports = bundle;
    function bundle(parser, options) {
      let inventory = [];
      crawl(parser, "schema", parser.$refs._root$Ref.path + "#", "#", 0, inventory, parser.$refs, options);
      remap(inventory);
    }
    function crawl(parent, key, path, pathFromRoot, indirections, inventory, $refs, options) {
      let obj = key === null ? parent : parent[key];
      if (obj && typeof obj === "object" && !ArrayBuffer.isView(obj)) {
        if ($Ref.isAllowed$Ref(obj)) {
          inventory$Ref(parent, key, path, pathFromRoot, indirections, inventory, $refs, options);
        } else {
          let keys = Object.keys(obj).sort((a, b) => {
            if (a === "definitions") {
              return -1;
            } else if (b === "definitions") {
              return 1;
            } else {
              return a.length - b.length;
            }
          });
          for (let key2 of keys) {
            let keyPath = Pointer.join(path, key2);
            let keyPathFromRoot = Pointer.join(pathFromRoot, key2);
            let value = obj[key2];
            if ($Ref.isAllowed$Ref(value)) {
              inventory$Ref(obj, key2, path, keyPathFromRoot, indirections, inventory, $refs, options);
            } else {
              crawl(obj, key2, keyPath, keyPathFromRoot, indirections, inventory, $refs, options);
            }
          }
        }
      }
    }
    function inventory$Ref($refParent, $refKey, path, pathFromRoot, indirections, inventory, $refs, options) {
      let $ref = $refKey === null ? $refParent : $refParent[$refKey];
      let $refPath = url.resolve(path, $ref.$ref);
      let pointer = $refs._resolve($refPath, pathFromRoot, options);
      if (pointer === null) {
        return;
      }
      let depth = Pointer.parse(pathFromRoot).length;
      let file = url.stripHash(pointer.path);
      let hash = url.getHash(pointer.path);
      let external = file !== $refs._root$Ref.path;
      let extended = $Ref.isExtended$Ref($ref);
      indirections += pointer.indirections;
      let existingEntry = findInInventory(inventory, $refParent, $refKey);
      if (existingEntry) {
        if (depth < existingEntry.depth || indirections < existingEntry.indirections) {
          removeFromInventory(inventory, existingEntry);
        } else {
          return;
        }
      }
      inventory.push({
        $ref,
        // The JSON Reference (e.g. {$ref: string})
        parent: $refParent,
        // The object that contains this $ref pointer
        key: $refKey,
        // The key in `parent` that is the $ref pointer
        pathFromRoot,
        // The path to the $ref pointer, from the JSON Schema root
        depth,
        // How far from the JSON Schema root is this $ref pointer?
        file,
        // The file that the $ref pointer resolves to
        hash,
        // The hash within `file` that the $ref pointer resolves to
        value: pointer.value,
        // The resolved value of the $ref pointer
        circular: pointer.circular,
        // Is this $ref pointer DIRECTLY circular? (i.e. it references itself)
        extended,
        // Does this $ref extend its resolved value? (i.e. it has extra properties, in addition to "$ref")
        external,
        // Does this $ref pointer point to a file other than the main JSON Schema file?
        indirections
        // The number of indirect references that were traversed to resolve the value
      });
      if (!existingEntry) {
        crawl(pointer.value, null, pointer.path, pathFromRoot, indirections + 1, inventory, $refs, options);
      }
    }
    function remap(inventory) {
      inventory.sort((a, b) => {
        if (a.file !== b.file) {
          return a.file < b.file ? -1 : 1;
        } else if (a.hash !== b.hash) {
          return a.hash < b.hash ? -1 : 1;
        } else if (a.circular !== b.circular) {
          return a.circular ? -1 : 1;
        } else if (a.extended !== b.extended) {
          return a.extended ? 1 : -1;
        } else if (a.indirections !== b.indirections) {
          return a.indirections - b.indirections;
        } else if (a.depth !== b.depth) {
          return a.depth - b.depth;
        } else {
          let aDefinitionsIndex = a.pathFromRoot.lastIndexOf("/definitions");
          let bDefinitionsIndex = b.pathFromRoot.lastIndexOf("/definitions");
          if (aDefinitionsIndex !== bDefinitionsIndex) {
            return bDefinitionsIndex - aDefinitionsIndex;
          } else {
            return a.pathFromRoot.length - b.pathFromRoot.length;
          }
        }
      });
      let file, hash, pathFromRoot;
      for (let entry of inventory) {
        if (!entry.external) {
          entry.$ref.$ref = entry.hash;
        } else if (entry.file === file && entry.hash === hash) {
          entry.$ref.$ref = pathFromRoot;
        } else if (entry.file === file && entry.hash.indexOf(hash + "/") === 0) {
          entry.$ref.$ref = Pointer.join(pathFromRoot, Pointer.parse(entry.hash.replace(hash, "#")));
        } else {
          file = entry.file;
          hash = entry.hash;
          pathFromRoot = entry.pathFromRoot;
          entry.$ref = entry.parent[entry.key] = $Ref.dereference(entry.$ref, entry.value);
          if (entry.circular) {
            entry.$ref.$ref = entry.pathFromRoot;
          }
        }
      }
    }
    function findInInventory(inventory, $refParent, $refKey) {
      for (let i = 0; i < inventory.length; i++) {
        let existingEntry = inventory[i];
        if (existingEntry.parent === $refParent && existingEntry.key === $refKey) {
          return existingEntry;
        }
      }
    }
    function removeFromInventory(inventory, entry) {
      let index = inventory.indexOf(entry);
      inventory.splice(index, 1);
    }
  }
});

// node_modules/@apidevtools/json-schema-ref-parser/lib/dereference.js
var require_dereference = __commonJS({
  "node_modules/@apidevtools/json-schema-ref-parser/lib/dereference.js"(exports, module2) {
    "use strict";
    var $Ref = require_ref();
    var Pointer = require_pointer();
    var { ono: ono2 } = (init_esm(), __toCommonJS(esm_exports));
    var url = require_url();
    module2.exports = dereference;
    function dereference(parser, options) {
      let dereferenced = crawl(parser.schema, parser.$refs._root$Ref.path, "#", /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Map(), parser.$refs, options);
      parser.$refs.circular = dereferenced.circular;
      parser.schema = dereferenced.value;
    }
    function crawl(obj, path, pathFromRoot, parents, processedObjects, dereferencedCache, $refs, options) {
      let dereferenced;
      let result = {
        value: obj,
        circular: false
      };
      if (options.dereference.circular === "ignore" || !processedObjects.has(obj)) {
        if (obj && typeof obj === "object" && !ArrayBuffer.isView(obj)) {
          parents.add(obj);
          processedObjects.add(obj);
          if ($Ref.isAllowed$Ref(obj, options)) {
            dereferenced = dereference$Ref(obj, path, pathFromRoot, parents, processedObjects, dereferencedCache, $refs, options);
            result.circular = dereferenced.circular;
            result.value = dereferenced.value;
          } else {
            for (const key of Object.keys(obj)) {
              let keyPath = Pointer.join(path, key);
              let keyPathFromRoot = Pointer.join(pathFromRoot, key);
              let value = obj[key];
              let circular = false;
              if ($Ref.isAllowed$Ref(value, options)) {
                dereferenced = dereference$Ref(value, keyPath, keyPathFromRoot, parents, processedObjects, dereferencedCache, $refs, options);
                circular = dereferenced.circular;
                if (obj[key] !== dereferenced.value) {
                  obj[key] = dereferenced.value;
                }
              } else {
                if (!parents.has(value)) {
                  dereferenced = crawl(value, keyPath, keyPathFromRoot, parents, processedObjects, dereferencedCache, $refs, options);
                  circular = dereferenced.circular;
                  if (obj[key] !== dereferenced.value) {
                    obj[key] = dereferenced.value;
                  }
                } else {
                  circular = foundCircularReference(keyPath, $refs, options);
                }
              }
              result.circular = result.circular || circular;
            }
          }
          parents.delete(obj);
        }
      }
      return result;
    }
    function dereference$Ref($ref, path, pathFromRoot, parents, processedObjects, dereferencedCache, $refs, options) {
      let $refPath = url.resolve(path, $ref.$ref);
      const cache = dereferencedCache.get($refPath);
      if (cache) {
        const refKeys = Object.keys($ref);
        if (refKeys.length > 1) {
          const extraKeys = {};
          for (let key of refKeys) {
            if (key !== "$ref" && !(key in cache.value)) {
              extraKeys[key] = $ref[key];
            }
          }
          return {
            circular: cache.circular,
            value: Object.assign({}, cache.value, extraKeys)
          };
        }
        return cache;
      }
      let pointer = $refs._resolve($refPath, path, options);
      if (pointer === null) {
        return {
          circular: false,
          value: null
        };
      }
      let directCircular = pointer.circular;
      let circular = directCircular || parents.has(pointer.value);
      circular && foundCircularReference(path, $refs, options);
      let dereferencedValue = $Ref.dereference($ref, pointer.value);
      if (!circular) {
        let dereferenced = crawl(dereferencedValue, pointer.path, pathFromRoot, parents, processedObjects, dereferencedCache, $refs, options);
        circular = dereferenced.circular;
        dereferencedValue = dereferenced.value;
      }
      if (circular && !directCircular && options.dereference.circular === "ignore") {
        dereferencedValue = $ref;
      }
      if (directCircular) {
        dereferencedValue.$ref = pathFromRoot;
      }
      const dereferencedObject = {
        circular,
        value: dereferencedValue
      };
      if (Object.keys($ref).length === 1) {
        dereferencedCache.set($refPath, dereferencedObject);
      }
      return dereferencedObject;
    }
    function foundCircularReference(keyPath, $refs, options) {
      $refs.circular = true;
      if (!options.dereference.circular) {
        throw ono2.reference(`Circular $ref pointer found at ${keyPath}`);
      }
      return true;
    }
  }
});

// node_modules/call-me-maybe/src/next.js
var require_next = __commonJS({
  "node_modules/call-me-maybe/src/next.js"(exports, module2) {
    "use strict";
    function makeNext() {
      if (typeof process === "object" && typeof process.nextTick === "function") {
        return process.nextTick;
      } else if (typeof setImmediate === "function") {
        return setImmediate;
      } else {
        return function next(f) {
          setTimeout(f, 0);
        };
      }
    }
    module2.exports = makeNext();
  }
});

// node_modules/call-me-maybe/src/maybe.js
var require_maybe = __commonJS({
  "node_modules/call-me-maybe/src/maybe.js"(exports, module2) {
    "use strict";
    var next = require_next();
    module2.exports = function maybe(cb, promise) {
      if (cb) {
        promise.then(function(result) {
          next(function() {
            cb(null, result);
          });
        }, function(err) {
          next(function() {
            cb(err);
          });
        });
        return void 0;
      } else {
        return promise;
      }
    };
  }
});

// node_modules/@apidevtools/json-schema-ref-parser/lib/index.js
var require_lib = __commonJS({
  "node_modules/@apidevtools/json-schema-ref-parser/lib/index.js"(exports, module2) {
    "use strict";
    var $Refs = require_refs();
    var _parse = require_parse3();
    var normalizeArgs2 = require_normalize_args();
    var resolveExternal = require_resolve_external();
    var _bundle = require_bundle();
    var _dereference = require_dereference();
    var url = require_url();
    var { JSONParserError, InvalidPointerError, MissingPointerError, ResolverError, ParserError, UnmatchedParserError, UnmatchedResolverError, isHandledError, JSONParserErrorGroup } = require_errors();
    var maybe = require_maybe();
    var { ono: ono2 } = (init_esm(), __toCommonJS(esm_exports));
    module2.exports = $RefParser;
    module2.exports.default = $RefParser;
    module2.exports.JSONParserError = JSONParserError;
    module2.exports.InvalidPointerError = InvalidPointerError;
    module2.exports.MissingPointerError = MissingPointerError;
    module2.exports.ResolverError = ResolverError;
    module2.exports.ParserError = ParserError;
    module2.exports.UnmatchedParserError = UnmatchedParserError;
    module2.exports.UnmatchedResolverError = UnmatchedResolverError;
    function $RefParser() {
      this.schema = null;
      this.$refs = new $Refs();
    }
    $RefParser.parse = function parse(path, schema, options, callback) {
      let Class = this;
      let instance = new Class();
      return instance.parse.apply(instance, arguments);
    };
    $RefParser.prototype.parse = async function parse(path, schema, options, callback) {
      let args = normalizeArgs2(arguments);
      let promise;
      if (!args.path && !args.schema) {
        let err = ono2(`Expected a file path, URL, or object. Got ${args.path || args.schema}`);
        return maybe(args.callback, Promise.reject(err));
      }
      this.schema = null;
      this.$refs = new $Refs();
      let pathType = "http";
      if (url.isFileSystemPath(args.path)) {
        args.path = url.fromFileSystemPath(args.path);
        pathType = "file";
      }
      args.path = url.resolve(url.cwd(), args.path);
      if (args.schema && typeof args.schema === "object") {
        let $ref = this.$refs._add(args.path);
        $ref.value = args.schema;
        $ref.pathType = pathType;
        promise = Promise.resolve(args.schema);
      } else {
        promise = _parse(args.path, this.$refs, args.options);
      }
      let me = this;
      try {
        let result = await promise;
        if (result !== null && typeof result === "object" && !Buffer.isBuffer(result)) {
          me.schema = result;
          return maybe(args.callback, Promise.resolve(me.schema));
        } else if (args.options.continueOnError) {
          me.schema = null;
          return maybe(args.callback, Promise.resolve(me.schema));
        } else {
          throw ono2.syntax(`"${me.$refs._root$Ref.path || result}" is not a valid JSON Schema`);
        }
      } catch (err) {
        if (!args.options.continueOnError || !isHandledError(err)) {
          return maybe(args.callback, Promise.reject(err));
        }
        if (this.$refs._$refs[url.stripHash(args.path)]) {
          this.$refs._$refs[url.stripHash(args.path)].addError(err);
        }
        return maybe(args.callback, Promise.resolve(null));
      }
    };
    $RefParser.resolve = function resolve(path, schema, options, callback) {
      let Class = this;
      let instance = new Class();
      return instance.resolve.apply(instance, arguments);
    };
    $RefParser.prototype.resolve = async function resolve(path, schema, options, callback) {
      let me = this;
      let args = normalizeArgs2(arguments);
      try {
        await this.parse(args.path, args.schema, args.options);
        await resolveExternal(me, args.options);
        finalize(me);
        return maybe(args.callback, Promise.resolve(me.$refs));
      } catch (err) {
        return maybe(args.callback, Promise.reject(err));
      }
    };
    $RefParser.bundle = function bundle(path, schema, options, callback) {
      let Class = this;
      let instance = new Class();
      return instance.bundle.apply(instance, arguments);
    };
    $RefParser.prototype.bundle = async function bundle(path, schema, options, callback) {
      let me = this;
      let args = normalizeArgs2(arguments);
      try {
        await this.resolve(args.path, args.schema, args.options);
        _bundle(me, args.options);
        finalize(me);
        return maybe(args.callback, Promise.resolve(me.schema));
      } catch (err) {
        return maybe(args.callback, Promise.reject(err));
      }
    };
    $RefParser.dereference = function dereference(path, schema, options, callback) {
      let Class = this;
      let instance = new Class();
      return instance.dereference.apply(instance, arguments);
    };
    $RefParser.prototype.dereference = async function dereference(path, schema, options, callback) {
      let me = this;
      let args = normalizeArgs2(arguments);
      try {
        await this.resolve(args.path, args.schema, args.options);
        _dereference(me, args.options);
        finalize(me);
        return maybe(args.callback, Promise.resolve(me.schema));
      } catch (err) {
        return maybe(args.callback, Promise.reject(err));
      }
    };
    function finalize(parser) {
      const errors = JSONParserErrorGroup.getParserErrors(parser);
      if (errors.length > 0) {
        throw new JSONParserErrorGroup(parser);
      }
    }
  }
});

// node_modules/json-schema-ref-parser/index.js
var require_json_schema_ref_parser = __commonJS({
  "node_modules/json-schema-ref-parser/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_lib();
  }
});

// node_modules/universalify/index.js
var require_universalify = __commonJS({
  "node_modules/universalify/index.js"(exports) {
    "use strict";
    exports.fromCallback = function(fn) {
      return Object.defineProperty(function(...args) {
        if (typeof args[args.length - 1] === "function")
          fn.apply(this, args);
        else {
          return new Promise((resolve, reject) => {
            args.push((err, res) => err != null ? reject(err) : resolve(res));
            fn.apply(this, args);
          });
        }
      }, "name", { value: fn.name });
    };
    exports.fromPromise = function(fn) {
      return Object.defineProperty(function(...args) {
        const cb = args[args.length - 1];
        if (typeof cb !== "function")
          return fn.apply(this, args);
        else {
          args.pop();
          fn.apply(this, args).then((r) => cb(null, r), cb);
        }
      }, "name", { value: fn.name });
    };
  }
});

// node_modules/graceful-fs/polyfills.js
var require_polyfills = __commonJS({
  "node_modules/graceful-fs/polyfills.js"(exports, module2) {
    var constants = require("constants");
    var origCwd = process.cwd;
    var cwd = null;
    var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform;
    process.cwd = function() {
      if (!cwd)
        cwd = origCwd.call(process);
      return cwd;
    };
    try {
      process.cwd();
    } catch (er) {
    }
    if (typeof process.chdir === "function") {
      chdir = process.chdir;
      process.chdir = function(d) {
        cwd = null;
        chdir.call(process, d);
      };
      if (Object.setPrototypeOf)
        Object.setPrototypeOf(process.chdir, chdir);
    }
    var chdir;
    module2.exports = patch;
    function patch(fs) {
      if (constants.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
        patchLchmod(fs);
      }
      if (!fs.lutimes) {
        patchLutimes(fs);
      }
      fs.chown = chownFix(fs.chown);
      fs.fchown = chownFix(fs.fchown);
      fs.lchown = chownFix(fs.lchown);
      fs.chmod = chmodFix(fs.chmod);
      fs.fchmod = chmodFix(fs.fchmod);
      fs.lchmod = chmodFix(fs.lchmod);
      fs.chownSync = chownFixSync(fs.chownSync);
      fs.fchownSync = chownFixSync(fs.fchownSync);
      fs.lchownSync = chownFixSync(fs.lchownSync);
      fs.chmodSync = chmodFixSync(fs.chmodSync);
      fs.fchmodSync = chmodFixSync(fs.fchmodSync);
      fs.lchmodSync = chmodFixSync(fs.lchmodSync);
      fs.stat = statFix(fs.stat);
      fs.fstat = statFix(fs.fstat);
      fs.lstat = statFix(fs.lstat);
      fs.statSync = statFixSync(fs.statSync);
      fs.fstatSync = statFixSync(fs.fstatSync);
      fs.lstatSync = statFixSync(fs.lstatSync);
      if (fs.chmod && !fs.lchmod) {
        fs.lchmod = function(path, mode, cb) {
          if (cb)
            process.nextTick(cb);
        };
        fs.lchmodSync = function() {
        };
      }
      if (fs.chown && !fs.lchown) {
        fs.lchown = function(path, uid, gid, cb) {
          if (cb)
            process.nextTick(cb);
        };
        fs.lchownSync = function() {
        };
      }
      if (platform === "win32") {
        fs.rename = typeof fs.rename !== "function" ? fs.rename : function(fs$rename) {
          function rename(from, to, cb) {
            var start = Date.now();
            var backoff = 0;
            fs$rename(from, to, function CB(er) {
              if (er && (er.code === "EACCES" || er.code === "EPERM" || er.code === "EBUSY") && Date.now() - start < 6e4) {
                setTimeout(function() {
                  fs.stat(to, function(stater, st) {
                    if (stater && stater.code === "ENOENT")
                      fs$rename(from, to, CB);
                    else
                      cb(er);
                  });
                }, backoff);
                if (backoff < 100)
                  backoff += 10;
                return;
              }
              if (cb)
                cb(er);
            });
          }
          if (Object.setPrototypeOf)
            Object.setPrototypeOf(rename, fs$rename);
          return rename;
        }(fs.rename);
      }
      fs.read = typeof fs.read !== "function" ? fs.read : function(fs$read) {
        function read(fd, buffer, offset, length, position, callback_) {
          var callback;
          if (callback_ && typeof callback_ === "function") {
            var eagCounter = 0;
            callback = function(er, _, __) {
              if (er && er.code === "EAGAIN" && eagCounter < 10) {
                eagCounter++;
                return fs$read.call(fs, fd, buffer, offset, length, position, callback);
              }
              callback_.apply(this, arguments);
            };
          }
          return fs$read.call(fs, fd, buffer, offset, length, position, callback);
        }
        if (Object.setPrototypeOf)
          Object.setPrototypeOf(read, fs$read);
        return read;
      }(fs.read);
      fs.readSync = typeof fs.readSync !== "function" ? fs.readSync : function(fs$readSync) {
        return function(fd, buffer, offset, length, position) {
          var eagCounter = 0;
          while (true) {
            try {
              return fs$readSync.call(fs, fd, buffer, offset, length, position);
            } catch (er) {
              if (er.code === "EAGAIN" && eagCounter < 10) {
                eagCounter++;
                continue;
              }
              throw er;
            }
          }
        };
      }(fs.readSync);
      function patchLchmod(fs2) {
        fs2.lchmod = function(path, mode, callback) {
          fs2.open(
            path,
            constants.O_WRONLY | constants.O_SYMLINK,
            mode,
            function(err, fd) {
              if (err) {
                if (callback)
                  callback(err);
                return;
              }
              fs2.fchmod(fd, mode, function(err2) {
                fs2.close(fd, function(err22) {
                  if (callback)
                    callback(err2 || err22);
                });
              });
            }
          );
        };
        fs2.lchmodSync = function(path, mode) {
          var fd = fs2.openSync(path, constants.O_WRONLY | constants.O_SYMLINK, mode);
          var threw = true;
          var ret;
          try {
            ret = fs2.fchmodSync(fd, mode);
            threw = false;
          } finally {
            if (threw) {
              try {
                fs2.closeSync(fd);
              } catch (er) {
              }
            } else {
              fs2.closeSync(fd);
            }
          }
          return ret;
        };
      }
      function patchLutimes(fs2) {
        if (constants.hasOwnProperty("O_SYMLINK") && fs2.futimes) {
          fs2.lutimes = function(path, at, mt, cb) {
            fs2.open(path, constants.O_SYMLINK, function(er, fd) {
              if (er) {
                if (cb)
                  cb(er);
                return;
              }
              fs2.futimes(fd, at, mt, function(er2) {
                fs2.close(fd, function(er22) {
                  if (cb)
                    cb(er2 || er22);
                });
              });
            });
          };
          fs2.lutimesSync = function(path, at, mt) {
            var fd = fs2.openSync(path, constants.O_SYMLINK);
            var ret;
            var threw = true;
            try {
              ret = fs2.futimesSync(fd, at, mt);
              threw = false;
            } finally {
              if (threw) {
                try {
                  fs2.closeSync(fd);
                } catch (er) {
                }
              } else {
                fs2.closeSync(fd);
              }
            }
            return ret;
          };
        } else if (fs2.futimes) {
          fs2.lutimes = function(_a, _b, _c, cb) {
            if (cb)
              process.nextTick(cb);
          };
          fs2.lutimesSync = function() {
          };
        }
      }
      function chmodFix(orig) {
        if (!orig)
          return orig;
        return function(target, mode, cb) {
          return orig.call(fs, target, mode, function(er) {
            if (chownErOk(er))
              er = null;
            if (cb)
              cb.apply(this, arguments);
          });
        };
      }
      function chmodFixSync(orig) {
        if (!orig)
          return orig;
        return function(target, mode) {
          try {
            return orig.call(fs, target, mode);
          } catch (er) {
            if (!chownErOk(er))
              throw er;
          }
        };
      }
      function chownFix(orig) {
        if (!orig)
          return orig;
        return function(target, uid, gid, cb) {
          return orig.call(fs, target, uid, gid, function(er) {
            if (chownErOk(er))
              er = null;
            if (cb)
              cb.apply(this, arguments);
          });
        };
      }
      function chownFixSync(orig) {
        if (!orig)
          return orig;
        return function(target, uid, gid) {
          try {
            return orig.call(fs, target, uid, gid);
          } catch (er) {
            if (!chownErOk(er))
              throw er;
          }
        };
      }
      function statFix(orig) {
        if (!orig)
          return orig;
        return function(target, options, cb) {
          if (typeof options === "function") {
            cb = options;
            options = null;
          }
          function callback(er, stats) {
            if (stats) {
              if (stats.uid < 0)
                stats.uid += 4294967296;
              if (stats.gid < 0)
                stats.gid += 4294967296;
            }
            if (cb)
              cb.apply(this, arguments);
          }
          return options ? orig.call(fs, target, options, callback) : orig.call(fs, target, callback);
        };
      }
      function statFixSync(orig) {
        if (!orig)
          return orig;
        return function(target, options) {
          var stats = options ? orig.call(fs, target, options) : orig.call(fs, target);
          if (stats) {
            if (stats.uid < 0)
              stats.uid += 4294967296;
            if (stats.gid < 0)
              stats.gid += 4294967296;
          }
          return stats;
        };
      }
      function chownErOk(er) {
        if (!er)
          return true;
        if (er.code === "ENOSYS")
          return true;
        var nonroot = !process.getuid || process.getuid() !== 0;
        if (nonroot) {
          if (er.code === "EINVAL" || er.code === "EPERM")
            return true;
        }
        return false;
      }
    }
  }
});

// node_modules/graceful-fs/legacy-streams.js
var require_legacy_streams = __commonJS({
  "node_modules/graceful-fs/legacy-streams.js"(exports, module2) {
    var Stream = require("stream").Stream;
    module2.exports = legacy;
    function legacy(fs) {
      return {
        ReadStream,
        WriteStream
      };
      function ReadStream(path, options) {
        if (!(this instanceof ReadStream))
          return new ReadStream(path, options);
        Stream.call(this);
        var self2 = this;
        this.path = path;
        this.fd = null;
        this.readable = true;
        this.paused = false;
        this.flags = "r";
        this.mode = 438;
        this.bufferSize = 64 * 1024;
        options = options || {};
        var keys = Object.keys(options);
        for (var index = 0, length = keys.length; index < length; index++) {
          var key = keys[index];
          this[key] = options[key];
        }
        if (this.encoding)
          this.setEncoding(this.encoding);
        if (this.start !== void 0) {
          if ("number" !== typeof this.start) {
            throw TypeError("start must be a Number");
          }
          if (this.end === void 0) {
            this.end = Infinity;
          } else if ("number" !== typeof this.end) {
            throw TypeError("end must be a Number");
          }
          if (this.start > this.end) {
            throw new Error("start must be <= end");
          }
          this.pos = this.start;
        }
        if (this.fd !== null) {
          process.nextTick(function() {
            self2._read();
          });
          return;
        }
        fs.open(this.path, this.flags, this.mode, function(err, fd) {
          if (err) {
            self2.emit("error", err);
            self2.readable = false;
            return;
          }
          self2.fd = fd;
          self2.emit("open", fd);
          self2._read();
        });
      }
      function WriteStream(path, options) {
        if (!(this instanceof WriteStream))
          return new WriteStream(path, options);
        Stream.call(this);
        this.path = path;
        this.fd = null;
        this.writable = true;
        this.flags = "w";
        this.encoding = "binary";
        this.mode = 438;
        this.bytesWritten = 0;
        options = options || {};
        var keys = Object.keys(options);
        for (var index = 0, length = keys.length; index < length; index++) {
          var key = keys[index];
          this[key] = options[key];
        }
        if (this.start !== void 0) {
          if ("number" !== typeof this.start) {
            throw TypeError("start must be a Number");
          }
          if (this.start < 0) {
            throw new Error("start must be >= zero");
          }
          this.pos = this.start;
        }
        this.busy = false;
        this._queue = [];
        if (this.fd === null) {
          this._open = fs.open;
          this._queue.push([this._open, this.path, this.flags, this.mode, void 0]);
          this.flush();
        }
      }
    }
  }
});

// node_modules/graceful-fs/clone.js
var require_clone = __commonJS({
  "node_modules/graceful-fs/clone.js"(exports, module2) {
    "use strict";
    module2.exports = clone;
    var getPrototypeOf = Object.getPrototypeOf || function(obj) {
      return obj.__proto__;
    };
    function clone(obj) {
      if (obj === null || typeof obj !== "object")
        return obj;
      if (obj instanceof Object)
        var copy = { __proto__: getPrototypeOf(obj) };
      else
        var copy = /* @__PURE__ */ Object.create(null);
      Object.getOwnPropertyNames(obj).forEach(function(key) {
        Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key));
      });
      return copy;
    }
  }
});

// node_modules/graceful-fs/graceful-fs.js
var require_graceful_fs = __commonJS({
  "node_modules/graceful-fs/graceful-fs.js"(exports, module2) {
    var fs = require("fs");
    var polyfills = require_polyfills();
    var legacy = require_legacy_streams();
    var clone = require_clone();
    var util2 = require("util");
    var gracefulQueue;
    var previousSymbol;
    if (typeof Symbol === "function" && typeof Symbol.for === "function") {
      gracefulQueue = Symbol.for("graceful-fs.queue");
      previousSymbol = Symbol.for("graceful-fs.previous");
    } else {
      gracefulQueue = "___graceful-fs.queue";
      previousSymbol = "___graceful-fs.previous";
    }
    function noop() {
    }
    function publishQueue(context, queue2) {
      Object.defineProperty(context, gracefulQueue, {
        get: function() {
          return queue2;
        }
      });
    }
    var debug = noop;
    if (util2.debuglog)
      debug = util2.debuglog("gfs4");
    else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || ""))
      debug = function() {
        var m = util2.format.apply(util2, arguments);
        m = "GFS4: " + m.split(/\n/).join("\nGFS4: ");
        console.error(m);
      };
    if (!fs[gracefulQueue]) {
      queue = global[gracefulQueue] || [];
      publishQueue(fs, queue);
      fs.close = function(fs$close) {
        function close(fd, cb) {
          return fs$close.call(fs, fd, function(err) {
            if (!err) {
              resetQueue();
            }
            if (typeof cb === "function")
              cb.apply(this, arguments);
          });
        }
        Object.defineProperty(close, previousSymbol, {
          value: fs$close
        });
        return close;
      }(fs.close);
      fs.closeSync = function(fs$closeSync) {
        function closeSync(fd) {
          fs$closeSync.apply(fs, arguments);
          resetQueue();
        }
        Object.defineProperty(closeSync, previousSymbol, {
          value: fs$closeSync
        });
        return closeSync;
      }(fs.closeSync);
      if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || "")) {
        process.on("exit", function() {
          debug(fs[gracefulQueue]);
          require("assert").equal(fs[gracefulQueue].length, 0);
        });
      }
    }
    var queue;
    if (!global[gracefulQueue]) {
      publishQueue(global, fs[gracefulQueue]);
    }
    module2.exports = patch(clone(fs));
    if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !fs.__patched) {
      module2.exports = patch(fs);
      fs.__patched = true;
    }
    function patch(fs2) {
      polyfills(fs2);
      fs2.gracefulify = patch;
      fs2.createReadStream = createReadStream;
      fs2.createWriteStream = createWriteStream;
      var fs$readFile = fs2.readFile;
      fs2.readFile = readFile;
      function readFile(path, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        return go$readFile(path, options, cb);
        function go$readFile(path2, options2, cb2, startTime) {
          return fs$readFile(path2, options2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$readFile, [path2, options2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      var fs$writeFile = fs2.writeFile;
      fs2.writeFile = writeFile;
      function writeFile(path, data, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        return go$writeFile(path, data, options, cb);
        function go$writeFile(path2, data2, options2, cb2, startTime) {
          return fs$writeFile(path2, data2, options2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$writeFile, [path2, data2, options2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      var fs$appendFile = fs2.appendFile;
      if (fs$appendFile)
        fs2.appendFile = appendFile;
      function appendFile(path, data, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        return go$appendFile(path, data, options, cb);
        function go$appendFile(path2, data2, options2, cb2, startTime) {
          return fs$appendFile(path2, data2, options2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$appendFile, [path2, data2, options2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      var fs$copyFile = fs2.copyFile;
      if (fs$copyFile)
        fs2.copyFile = copyFile;
      function copyFile(src, dest, flags, cb) {
        if (typeof flags === "function") {
          cb = flags;
          flags = 0;
        }
        return go$copyFile(src, dest, flags, cb);
        function go$copyFile(src2, dest2, flags2, cb2, startTime) {
          return fs$copyFile(src2, dest2, flags2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$copyFile, [src2, dest2, flags2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      var fs$readdir = fs2.readdir;
      fs2.readdir = readdir;
      var noReaddirOptionVersions = /^v[0-5]\./;
      function readdir(path, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        var go$readdir = noReaddirOptionVersions.test(process.version) ? function go$readdir2(path2, options2, cb2, startTime) {
          return fs$readdir(path2, fs$readdirCallback(
            path2,
            options2,
            cb2,
            startTime
          ));
        } : function go$readdir2(path2, options2, cb2, startTime) {
          return fs$readdir(path2, options2, fs$readdirCallback(
            path2,
            options2,
            cb2,
            startTime
          ));
        };
        return go$readdir(path, options, cb);
        function fs$readdirCallback(path2, options2, cb2, startTime) {
          return function(err, files) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([
                go$readdir,
                [path2, options2, cb2],
                err,
                startTime || Date.now(),
                Date.now()
              ]);
            else {
              if (files && files.sort)
                files.sort();
              if (typeof cb2 === "function")
                cb2.call(this, err, files);
            }
          };
        }
      }
      if (process.version.substr(0, 4) === "v0.8") {
        var legStreams = legacy(fs2);
        ReadStream = legStreams.ReadStream;
        WriteStream = legStreams.WriteStream;
      }
      var fs$ReadStream = fs2.ReadStream;
      if (fs$ReadStream) {
        ReadStream.prototype = Object.create(fs$ReadStream.prototype);
        ReadStream.prototype.open = ReadStream$open;
      }
      var fs$WriteStream = fs2.WriteStream;
      if (fs$WriteStream) {
        WriteStream.prototype = Object.create(fs$WriteStream.prototype);
        WriteStream.prototype.open = WriteStream$open;
      }
      Object.defineProperty(fs2, "ReadStream", {
        get: function() {
          return ReadStream;
        },
        set: function(val) {
          ReadStream = val;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(fs2, "WriteStream", {
        get: function() {
          return WriteStream;
        },
        set: function(val) {
          WriteStream = val;
        },
        enumerable: true,
        configurable: true
      });
      var FileReadStream = ReadStream;
      Object.defineProperty(fs2, "FileReadStream", {
        get: function() {
          return FileReadStream;
        },
        set: function(val) {
          FileReadStream = val;
        },
        enumerable: true,
        configurable: true
      });
      var FileWriteStream = WriteStream;
      Object.defineProperty(fs2, "FileWriteStream", {
        get: function() {
          return FileWriteStream;
        },
        set: function(val) {
          FileWriteStream = val;
        },
        enumerable: true,
        configurable: true
      });
      function ReadStream(path, options) {
        if (this instanceof ReadStream)
          return fs$ReadStream.apply(this, arguments), this;
        else
          return ReadStream.apply(Object.create(ReadStream.prototype), arguments);
      }
      function ReadStream$open() {
        var that = this;
        open(that.path, that.flags, that.mode, function(err, fd) {
          if (err) {
            if (that.autoClose)
              that.destroy();
            that.emit("error", err);
          } else {
            that.fd = fd;
            that.emit("open", fd);
            that.read();
          }
        });
      }
      function WriteStream(path, options) {
        if (this instanceof WriteStream)
          return fs$WriteStream.apply(this, arguments), this;
        else
          return WriteStream.apply(Object.create(WriteStream.prototype), arguments);
      }
      function WriteStream$open() {
        var that = this;
        open(that.path, that.flags, that.mode, function(err, fd) {
          if (err) {
            that.destroy();
            that.emit("error", err);
          } else {
            that.fd = fd;
            that.emit("open", fd);
          }
        });
      }
      function createReadStream(path, options) {
        return new fs2.ReadStream(path, options);
      }
      function createWriteStream(path, options) {
        return new fs2.WriteStream(path, options);
      }
      var fs$open = fs2.open;
      fs2.open = open;
      function open(path, flags, mode, cb) {
        if (typeof mode === "function")
          cb = mode, mode = null;
        return go$open(path, flags, mode, cb);
        function go$open(path2, flags2, mode2, cb2, startTime) {
          return fs$open(path2, flags2, mode2, function(err, fd) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$open, [path2, flags2, mode2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      return fs2;
    }
    function enqueue(elem) {
      debug("ENQUEUE", elem[0].name, elem[1]);
      fs[gracefulQueue].push(elem);
      retry();
    }
    var retryTimer;
    function resetQueue() {
      var now = Date.now();
      for (var i = 0; i < fs[gracefulQueue].length; ++i) {
        if (fs[gracefulQueue][i].length > 2) {
          fs[gracefulQueue][i][3] = now;
          fs[gracefulQueue][i][4] = now;
        }
      }
      retry();
    }
    function retry() {
      clearTimeout(retryTimer);
      retryTimer = void 0;
      if (fs[gracefulQueue].length === 0)
        return;
      var elem = fs[gracefulQueue].shift();
      var fn = elem[0];
      var args = elem[1];
      var err = elem[2];
      var startTime = elem[3];
      var lastTime = elem[4];
      if (startTime === void 0) {
        debug("RETRY", fn.name, args);
        fn.apply(null, args);
      } else if (Date.now() - startTime >= 6e4) {
        debug("TIMEOUT", fn.name, args);
        var cb = args.pop();
        if (typeof cb === "function")
          cb.call(null, err);
      } else {
        var sinceAttempt = Date.now() - lastTime;
        var sinceStart = Math.max(lastTime - startTime, 1);
        var desiredDelay = Math.min(sinceStart * 1.2, 100);
        if (sinceAttempt >= desiredDelay) {
          debug("RETRY", fn.name, args);
          fn.apply(null, args.concat([startTime]));
        } else {
          fs[gracefulQueue].push(elem);
        }
      }
      if (retryTimer === void 0) {
        retryTimer = setTimeout(retry, 0);
      }
    }
  }
});

// node_modules/fs-extra/lib/fs/index.js
var require_fs = __commonJS({
  "node_modules/fs-extra/lib/fs/index.js"(exports) {
    "use strict";
    var u = require_universalify().fromCallback;
    var fs = require_graceful_fs();
    var api = [
      "access",
      "appendFile",
      "chmod",
      "chown",
      "close",
      "copyFile",
      "fchmod",
      "fchown",
      "fdatasync",
      "fstat",
      "fsync",
      "ftruncate",
      "futimes",
      "lchmod",
      "lchown",
      "link",
      "lstat",
      "mkdir",
      "mkdtemp",
      "open",
      "opendir",
      "readdir",
      "readFile",
      "readlink",
      "realpath",
      "rename",
      "rm",
      "rmdir",
      "stat",
      "symlink",
      "truncate",
      "unlink",
      "utimes",
      "writeFile"
    ].filter((key) => {
      return typeof fs[key] === "function";
    });
    Object.assign(exports, fs);
    api.forEach((method) => {
      exports[method] = u(fs[method]);
    });
    exports.exists = function(filename, callback) {
      if (typeof callback === "function") {
        return fs.exists(filename, callback);
      }
      return new Promise((resolve) => {
        return fs.exists(filename, resolve);
      });
    };
    exports.read = function(fd, buffer, offset, length, position, callback) {
      if (typeof callback === "function") {
        return fs.read(fd, buffer, offset, length, position, callback);
      }
      return new Promise((resolve, reject) => {
        fs.read(fd, buffer, offset, length, position, (err, bytesRead, buffer2) => {
          if (err)
            return reject(err);
          resolve({ bytesRead, buffer: buffer2 });
        });
      });
    };
    exports.write = function(fd, buffer, ...args) {
      if (typeof args[args.length - 1] === "function") {
        return fs.write(fd, buffer, ...args);
      }
      return new Promise((resolve, reject) => {
        fs.write(fd, buffer, ...args, (err, bytesWritten, buffer2) => {
          if (err)
            return reject(err);
          resolve({ bytesWritten, buffer: buffer2 });
        });
      });
    };
    if (typeof fs.writev === "function") {
      exports.writev = function(fd, buffers, ...args) {
        if (typeof args[args.length - 1] === "function") {
          return fs.writev(fd, buffers, ...args);
        }
        return new Promise((resolve, reject) => {
          fs.writev(fd, buffers, ...args, (err, bytesWritten, buffers2) => {
            if (err)
              return reject(err);
            resolve({ bytesWritten, buffers: buffers2 });
          });
        });
      };
    }
    if (typeof fs.realpath.native === "function") {
      exports.realpath.native = u(fs.realpath.native);
    } else {
      process.emitWarning(
        "fs.realpath.native is not a function. Is fs being monkey-patched?",
        "Warning",
        "fs-extra-WARN0003"
      );
    }
  }
});

// node_modules/fs-extra/lib/mkdirs/utils.js
var require_utils3 = __commonJS({
  "node_modules/fs-extra/lib/mkdirs/utils.js"(exports, module2) {
    "use strict";
    var path = require("path");
    module2.exports.checkPath = function checkPath(pth) {
      if (process.platform === "win32") {
        const pathHasInvalidWinCharacters = /[<>:"|?*]/.test(pth.replace(path.parse(pth).root, ""));
        if (pathHasInvalidWinCharacters) {
          const error = new Error(`Path contains invalid characters: ${pth}`);
          error.code = "EINVAL";
          throw error;
        }
      }
    };
  }
});

// node_modules/fs-extra/lib/mkdirs/make-dir.js
var require_make_dir = __commonJS({
  "node_modules/fs-extra/lib/mkdirs/make-dir.js"(exports, module2) {
    "use strict";
    var fs = require_fs();
    var { checkPath } = require_utils3();
    var getMode = (options) => {
      const defaults = { mode: 511 };
      if (typeof options === "number")
        return options;
      return __spreadValues(__spreadValues({}, defaults), options).mode;
    };
    module2.exports.makeDir = async (dir, options) => {
      checkPath(dir);
      return fs.mkdir(dir, {
        mode: getMode(options),
        recursive: true
      });
    };
    module2.exports.makeDirSync = (dir, options) => {
      checkPath(dir);
      return fs.mkdirSync(dir, {
        mode: getMode(options),
        recursive: true
      });
    };
  }
});

// node_modules/fs-extra/lib/mkdirs/index.js
var require_mkdirs = __commonJS({
  "node_modules/fs-extra/lib/mkdirs/index.js"(exports, module2) {
    "use strict";
    var u = require_universalify().fromPromise;
    var { makeDir: _makeDir, makeDirSync } = require_make_dir();
    var makeDir = u(_makeDir);
    module2.exports = {
      mkdirs: makeDir,
      mkdirsSync: makeDirSync,
      // alias
      mkdirp: makeDir,
      mkdirpSync: makeDirSync,
      ensureDir: makeDir,
      ensureDirSync: makeDirSync
    };
  }
});

// node_modules/fs-extra/lib/path-exists/index.js
var require_path_exists = __commonJS({
  "node_modules/fs-extra/lib/path-exists/index.js"(exports, module2) {
    "use strict";
    var u = require_universalify().fromPromise;
    var fs = require_fs();
    function pathExists(path) {
      return fs.access(path).then(() => true).catch(() => false);
    }
    module2.exports = {
      pathExists: u(pathExists),
      pathExistsSync: fs.existsSync
    };
  }
});

// node_modules/fs-extra/lib/util/utimes.js
var require_utimes = __commonJS({
  "node_modules/fs-extra/lib/util/utimes.js"(exports, module2) {
    "use strict";
    var fs = require_graceful_fs();
    function utimesMillis(path, atime, mtime, callback) {
      fs.open(path, "r+", (err, fd) => {
        if (err)
          return callback(err);
        fs.futimes(fd, atime, mtime, (futimesErr) => {
          fs.close(fd, (closeErr) => {
            if (callback)
              callback(futimesErr || closeErr);
          });
        });
      });
    }
    function utimesMillisSync(path, atime, mtime) {
      const fd = fs.openSync(path, "r+");
      fs.futimesSync(fd, atime, mtime);
      return fs.closeSync(fd);
    }
    module2.exports = {
      utimesMillis,
      utimesMillisSync
    };
  }
});

// node_modules/fs-extra/lib/util/stat.js
var require_stat = __commonJS({
  "node_modules/fs-extra/lib/util/stat.js"(exports, module2) {
    "use strict";
    var fs = require_fs();
    var path = require("path");
    var util2 = require("util");
    function getStats(src, dest, opts) {
      const statFunc = opts.dereference ? (file) => fs.stat(file, { bigint: true }) : (file) => fs.lstat(file, { bigint: true });
      return Promise.all([
        statFunc(src),
        statFunc(dest).catch((err) => {
          if (err.code === "ENOENT")
            return null;
          throw err;
        })
      ]).then(([srcStat, destStat]) => ({ srcStat, destStat }));
    }
    function getStatsSync(src, dest, opts) {
      let destStat;
      const statFunc = opts.dereference ? (file) => fs.statSync(file, { bigint: true }) : (file) => fs.lstatSync(file, { bigint: true });
      const srcStat = statFunc(src);
      try {
        destStat = statFunc(dest);
      } catch (err) {
        if (err.code === "ENOENT")
          return { srcStat, destStat: null };
        throw err;
      }
      return { srcStat, destStat };
    }
    function checkPaths(src, dest, funcName, opts, cb) {
      util2.callbackify(getStats)(src, dest, opts, (err, stats) => {
        if (err)
          return cb(err);
        const { srcStat, destStat } = stats;
        if (destStat) {
          if (areIdentical(srcStat, destStat)) {
            const srcBaseName = path.basename(src);
            const destBaseName = path.basename(dest);
            if (funcName === "move" && srcBaseName !== destBaseName && srcBaseName.toLowerCase() === destBaseName.toLowerCase()) {
              return cb(null, { srcStat, destStat, isChangingCase: true });
            }
            return cb(new Error("Source and destination must not be the same."));
          }
          if (srcStat.isDirectory() && !destStat.isDirectory()) {
            return cb(new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`));
          }
          if (!srcStat.isDirectory() && destStat.isDirectory()) {
            return cb(new Error(`Cannot overwrite directory '${dest}' with non-directory '${src}'.`));
          }
        }
        if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
          return cb(new Error(errMsg(src, dest, funcName)));
        }
        return cb(null, { srcStat, destStat });
      });
    }
    function checkPathsSync(src, dest, funcName, opts) {
      const { srcStat, destStat } = getStatsSync(src, dest, opts);
      if (destStat) {
        if (areIdentical(srcStat, destStat)) {
          const srcBaseName = path.basename(src);
          const destBaseName = path.basename(dest);
          if (funcName === "move" && srcBaseName !== destBaseName && srcBaseName.toLowerCase() === destBaseName.toLowerCase()) {
            return { srcStat, destStat, isChangingCase: true };
          }
          throw new Error("Source and destination must not be the same.");
        }
        if (srcStat.isDirectory() && !destStat.isDirectory()) {
          throw new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`);
        }
        if (!srcStat.isDirectory() && destStat.isDirectory()) {
          throw new Error(`Cannot overwrite directory '${dest}' with non-directory '${src}'.`);
        }
      }
      if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
        throw new Error(errMsg(src, dest, funcName));
      }
      return { srcStat, destStat };
    }
    function checkParentPaths(src, srcStat, dest, funcName, cb) {
      const srcParent = path.resolve(path.dirname(src));
      const destParent = path.resolve(path.dirname(dest));
      if (destParent === srcParent || destParent === path.parse(destParent).root)
        return cb();
      fs.stat(destParent, { bigint: true }, (err, destStat) => {
        if (err) {
          if (err.code === "ENOENT")
            return cb();
          return cb(err);
        }
        if (areIdentical(srcStat, destStat)) {
          return cb(new Error(errMsg(src, dest, funcName)));
        }
        return checkParentPaths(src, srcStat, destParent, funcName, cb);
      });
    }
    function checkParentPathsSync(src, srcStat, dest, funcName) {
      const srcParent = path.resolve(path.dirname(src));
      const destParent = path.resolve(path.dirname(dest));
      if (destParent === srcParent || destParent === path.parse(destParent).root)
        return;
      let destStat;
      try {
        destStat = fs.statSync(destParent, { bigint: true });
      } catch (err) {
        if (err.code === "ENOENT")
          return;
        throw err;
      }
      if (areIdentical(srcStat, destStat)) {
        throw new Error(errMsg(src, dest, funcName));
      }
      return checkParentPathsSync(src, srcStat, destParent, funcName);
    }
    function areIdentical(srcStat, destStat) {
      return destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev;
    }
    function isSrcSubdir(src, dest) {
      const srcArr = path.resolve(src).split(path.sep).filter((i) => i);
      const destArr = path.resolve(dest).split(path.sep).filter((i) => i);
      return srcArr.reduce((acc, cur, i) => acc && destArr[i] === cur, true);
    }
    function errMsg(src, dest, funcName) {
      return `Cannot ${funcName} '${src}' to a subdirectory of itself, '${dest}'.`;
    }
    module2.exports = {
      checkPaths,
      checkPathsSync,
      checkParentPaths,
      checkParentPathsSync,
      isSrcSubdir,
      areIdentical
    };
  }
});

// node_modules/fs-extra/lib/copy/copy.js
var require_copy = __commonJS({
  "node_modules/fs-extra/lib/copy/copy.js"(exports, module2) {
    "use strict";
    var fs = require_graceful_fs();
    var path = require("path");
    var mkdirs = require_mkdirs().mkdirs;
    var pathExists = require_path_exists().pathExists;
    var utimesMillis = require_utimes().utimesMillis;
    var stat = require_stat();
    function copy(src, dest, opts, cb) {
      if (typeof opts === "function" && !cb) {
        cb = opts;
        opts = {};
      } else if (typeof opts === "function") {
        opts = { filter: opts };
      }
      cb = cb || function() {
      };
      opts = opts || {};
      opts.clobber = "clobber" in opts ? !!opts.clobber : true;
      opts.overwrite = "overwrite" in opts ? !!opts.overwrite : opts.clobber;
      if (opts.preserveTimestamps && process.arch === "ia32") {
        process.emitWarning(
          "Using the preserveTimestamps option in 32-bit node is not recommended;\n\n	see https://github.com/jprichardson/node-fs-extra/issues/269",
          "Warning",
          "fs-extra-WARN0001"
        );
      }
      stat.checkPaths(src, dest, "copy", opts, (err, stats) => {
        if (err)
          return cb(err);
        const { srcStat, destStat } = stats;
        stat.checkParentPaths(src, srcStat, dest, "copy", (err2) => {
          if (err2)
            return cb(err2);
          if (opts.filter)
            return handleFilter(checkParentDir, destStat, src, dest, opts, cb);
          return checkParentDir(destStat, src, dest, opts, cb);
        });
      });
    }
    function checkParentDir(destStat, src, dest, opts, cb) {
      const destParent = path.dirname(dest);
      pathExists(destParent, (err, dirExists) => {
        if (err)
          return cb(err);
        if (dirExists)
          return getStats(destStat, src, dest, opts, cb);
        mkdirs(destParent, (err2) => {
          if (err2)
            return cb(err2);
          return getStats(destStat, src, dest, opts, cb);
        });
      });
    }
    function handleFilter(onInclude, destStat, src, dest, opts, cb) {
      Promise.resolve(opts.filter(src, dest)).then((include) => {
        if (include)
          return onInclude(destStat, src, dest, opts, cb);
        return cb();
      }, (error) => cb(error));
    }
    function startCopy(destStat, src, dest, opts, cb) {
      if (opts.filter)
        return handleFilter(getStats, destStat, src, dest, opts, cb);
      return getStats(destStat, src, dest, opts, cb);
    }
    function getStats(destStat, src, dest, opts, cb) {
      const stat2 = opts.dereference ? fs.stat : fs.lstat;
      stat2(src, (err, srcStat) => {
        if (err)
          return cb(err);
        if (srcStat.isDirectory())
          return onDir(srcStat, destStat, src, dest, opts, cb);
        else if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice())
          return onFile(srcStat, destStat, src, dest, opts, cb);
        else if (srcStat.isSymbolicLink())
          return onLink(destStat, src, dest, opts, cb);
        else if (srcStat.isSocket())
          return cb(new Error(`Cannot copy a socket file: ${src}`));
        else if (srcStat.isFIFO())
          return cb(new Error(`Cannot copy a FIFO pipe: ${src}`));
        return cb(new Error(`Unknown file: ${src}`));
      });
    }
    function onFile(srcStat, destStat, src, dest, opts, cb) {
      if (!destStat)
        return copyFile(srcStat, src, dest, opts, cb);
      return mayCopyFile(srcStat, src, dest, opts, cb);
    }
    function mayCopyFile(srcStat, src, dest, opts, cb) {
      if (opts.overwrite) {
        fs.unlink(dest, (err) => {
          if (err)
            return cb(err);
          return copyFile(srcStat, src, dest, opts, cb);
        });
      } else if (opts.errorOnExist) {
        return cb(new Error(`'${dest}' already exists`));
      } else
        return cb();
    }
    function copyFile(srcStat, src, dest, opts, cb) {
      fs.copyFile(src, dest, (err) => {
        if (err)
          return cb(err);
        if (opts.preserveTimestamps)
          return handleTimestampsAndMode(srcStat.mode, src, dest, cb);
        return setDestMode(dest, srcStat.mode, cb);
      });
    }
    function handleTimestampsAndMode(srcMode, src, dest, cb) {
      if (fileIsNotWritable(srcMode)) {
        return makeFileWritable(dest, srcMode, (err) => {
          if (err)
            return cb(err);
          return setDestTimestampsAndMode(srcMode, src, dest, cb);
        });
      }
      return setDestTimestampsAndMode(srcMode, src, dest, cb);
    }
    function fileIsNotWritable(srcMode) {
      return (srcMode & 128) === 0;
    }
    function makeFileWritable(dest, srcMode, cb) {
      return setDestMode(dest, srcMode | 128, cb);
    }
    function setDestTimestampsAndMode(srcMode, src, dest, cb) {
      setDestTimestamps(src, dest, (err) => {
        if (err)
          return cb(err);
        return setDestMode(dest, srcMode, cb);
      });
    }
    function setDestMode(dest, srcMode, cb) {
      return fs.chmod(dest, srcMode, cb);
    }
    function setDestTimestamps(src, dest, cb) {
      fs.stat(src, (err, updatedSrcStat) => {
        if (err)
          return cb(err);
        return utimesMillis(dest, updatedSrcStat.atime, updatedSrcStat.mtime, cb);
      });
    }
    function onDir(srcStat, destStat, src, dest, opts, cb) {
      if (!destStat)
        return mkDirAndCopy(srcStat.mode, src, dest, opts, cb);
      return copyDir(src, dest, opts, cb);
    }
    function mkDirAndCopy(srcMode, src, dest, opts, cb) {
      fs.mkdir(dest, (err) => {
        if (err)
          return cb(err);
        copyDir(src, dest, opts, (err2) => {
          if (err2)
            return cb(err2);
          return setDestMode(dest, srcMode, cb);
        });
      });
    }
    function copyDir(src, dest, opts, cb) {
      fs.readdir(src, (err, items) => {
        if (err)
          return cb(err);
        return copyDirItems(items, src, dest, opts, cb);
      });
    }
    function copyDirItems(items, src, dest, opts, cb) {
      const item = items.pop();
      if (!item)
        return cb();
      return copyDirItem(items, item, src, dest, opts, cb);
    }
    function copyDirItem(items, item, src, dest, opts, cb) {
      const srcItem = path.join(src, item);
      const destItem = path.join(dest, item);
      stat.checkPaths(srcItem, destItem, "copy", opts, (err, stats) => {
        if (err)
          return cb(err);
        const { destStat } = stats;
        startCopy(destStat, srcItem, destItem, opts, (err2) => {
          if (err2)
            return cb(err2);
          return copyDirItems(items, src, dest, opts, cb);
        });
      });
    }
    function onLink(destStat, src, dest, opts, cb) {
      fs.readlink(src, (err, resolvedSrc) => {
        if (err)
          return cb(err);
        if (opts.dereference) {
          resolvedSrc = path.resolve(process.cwd(), resolvedSrc);
        }
        if (!destStat) {
          return fs.symlink(resolvedSrc, dest, cb);
        } else {
          fs.readlink(dest, (err2, resolvedDest) => {
            if (err2) {
              if (err2.code === "EINVAL" || err2.code === "UNKNOWN")
                return fs.symlink(resolvedSrc, dest, cb);
              return cb(err2);
            }
            if (opts.dereference) {
              resolvedDest = path.resolve(process.cwd(), resolvedDest);
            }
            if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
              return cb(new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`));
            }
            if (destStat.isDirectory() && stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
              return cb(new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`));
            }
            return copyLink(resolvedSrc, dest, cb);
          });
        }
      });
    }
    function copyLink(resolvedSrc, dest, cb) {
      fs.unlink(dest, (err) => {
        if (err)
          return cb(err);
        return fs.symlink(resolvedSrc, dest, cb);
      });
    }
    module2.exports = copy;
  }
});

// node_modules/fs-extra/lib/copy/copy-sync.js
var require_copy_sync = __commonJS({
  "node_modules/fs-extra/lib/copy/copy-sync.js"(exports, module2) {
    "use strict";
    var fs = require_graceful_fs();
    var path = require("path");
    var mkdirsSync = require_mkdirs().mkdirsSync;
    var utimesMillisSync = require_utimes().utimesMillisSync;
    var stat = require_stat();
    function copySync(src, dest, opts) {
      if (typeof opts === "function") {
        opts = { filter: opts };
      }
      opts = opts || {};
      opts.clobber = "clobber" in opts ? !!opts.clobber : true;
      opts.overwrite = "overwrite" in opts ? !!opts.overwrite : opts.clobber;
      if (opts.preserveTimestamps && process.arch === "ia32") {
        process.emitWarning(
          "Using the preserveTimestamps option in 32-bit node is not recommended;\n\n	see https://github.com/jprichardson/node-fs-extra/issues/269",
          "Warning",
          "fs-extra-WARN0002"
        );
      }
      const { srcStat, destStat } = stat.checkPathsSync(src, dest, "copy", opts);
      stat.checkParentPathsSync(src, srcStat, dest, "copy");
      return handleFilterAndCopy(destStat, src, dest, opts);
    }
    function handleFilterAndCopy(destStat, src, dest, opts) {
      if (opts.filter && !opts.filter(src, dest))
        return;
      const destParent = path.dirname(dest);
      if (!fs.existsSync(destParent))
        mkdirsSync(destParent);
      return getStats(destStat, src, dest, opts);
    }
    function startCopy(destStat, src, dest, opts) {
      if (opts.filter && !opts.filter(src, dest))
        return;
      return getStats(destStat, src, dest, opts);
    }
    function getStats(destStat, src, dest, opts) {
      const statSync = opts.dereference ? fs.statSync : fs.lstatSync;
      const srcStat = statSync(src);
      if (srcStat.isDirectory())
        return onDir(srcStat, destStat, src, dest, opts);
      else if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice())
        return onFile(srcStat, destStat, src, dest, opts);
      else if (srcStat.isSymbolicLink())
        return onLink(destStat, src, dest, opts);
      else if (srcStat.isSocket())
        throw new Error(`Cannot copy a socket file: ${src}`);
      else if (srcStat.isFIFO())
        throw new Error(`Cannot copy a FIFO pipe: ${src}`);
      throw new Error(`Unknown file: ${src}`);
    }
    function onFile(srcStat, destStat, src, dest, opts) {
      if (!destStat)
        return copyFile(srcStat, src, dest, opts);
      return mayCopyFile(srcStat, src, dest, opts);
    }
    function mayCopyFile(srcStat, src, dest, opts) {
      if (opts.overwrite) {
        fs.unlinkSync(dest);
        return copyFile(srcStat, src, dest, opts);
      } else if (opts.errorOnExist) {
        throw new Error(`'${dest}' already exists`);
      }
    }
    function copyFile(srcStat, src, dest, opts) {
      fs.copyFileSync(src, dest);
      if (opts.preserveTimestamps)
        handleTimestamps(srcStat.mode, src, dest);
      return setDestMode(dest, srcStat.mode);
    }
    function handleTimestamps(srcMode, src, dest) {
      if (fileIsNotWritable(srcMode))
        makeFileWritable(dest, srcMode);
      return setDestTimestamps(src, dest);
    }
    function fileIsNotWritable(srcMode) {
      return (srcMode & 128) === 0;
    }
    function makeFileWritable(dest, srcMode) {
      return setDestMode(dest, srcMode | 128);
    }
    function setDestMode(dest, srcMode) {
      return fs.chmodSync(dest, srcMode);
    }
    function setDestTimestamps(src, dest) {
      const updatedSrcStat = fs.statSync(src);
      return utimesMillisSync(dest, updatedSrcStat.atime, updatedSrcStat.mtime);
    }
    function onDir(srcStat, destStat, src, dest, opts) {
      if (!destStat)
        return mkDirAndCopy(srcStat.mode, src, dest, opts);
      return copyDir(src, dest, opts);
    }
    function mkDirAndCopy(srcMode, src, dest, opts) {
      fs.mkdirSync(dest);
      copyDir(src, dest, opts);
      return setDestMode(dest, srcMode);
    }
    function copyDir(src, dest, opts) {
      fs.readdirSync(src).forEach((item) => copyDirItem(item, src, dest, opts));
    }
    function copyDirItem(item, src, dest, opts) {
      const srcItem = path.join(src, item);
      const destItem = path.join(dest, item);
      const { destStat } = stat.checkPathsSync(srcItem, destItem, "copy", opts);
      return startCopy(destStat, srcItem, destItem, opts);
    }
    function onLink(destStat, src, dest, opts) {
      let resolvedSrc = fs.readlinkSync(src);
      if (opts.dereference) {
        resolvedSrc = path.resolve(process.cwd(), resolvedSrc);
      }
      if (!destStat) {
        return fs.symlinkSync(resolvedSrc, dest);
      } else {
        let resolvedDest;
        try {
          resolvedDest = fs.readlinkSync(dest);
        } catch (err) {
          if (err.code === "EINVAL" || err.code === "UNKNOWN")
            return fs.symlinkSync(resolvedSrc, dest);
          throw err;
        }
        if (opts.dereference) {
          resolvedDest = path.resolve(process.cwd(), resolvedDest);
        }
        if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
          throw new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`);
        }
        if (fs.statSync(dest).isDirectory() && stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
          throw new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`);
        }
        return copyLink(resolvedSrc, dest);
      }
    }
    function copyLink(resolvedSrc, dest) {
      fs.unlinkSync(dest);
      return fs.symlinkSync(resolvedSrc, dest);
    }
    module2.exports = copySync;
  }
});

// node_modules/fs-extra/lib/copy/index.js
var require_copy2 = __commonJS({
  "node_modules/fs-extra/lib/copy/index.js"(exports, module2) {
    "use strict";
    var u = require_universalify().fromCallback;
    module2.exports = {
      copy: u(require_copy()),
      copySync: require_copy_sync()
    };
  }
});

// node_modules/fs-extra/lib/remove/rimraf.js
var require_rimraf = __commonJS({
  "node_modules/fs-extra/lib/remove/rimraf.js"(exports, module2) {
    "use strict";
    var fs = require_graceful_fs();
    var path = require("path");
    var assert = require("assert");
    var isWindows = process.platform === "win32";
    function defaults(options) {
      const methods = [
        "unlink",
        "chmod",
        "stat",
        "lstat",
        "rmdir",
        "readdir"
      ];
      methods.forEach((m) => {
        options[m] = options[m] || fs[m];
        m = m + "Sync";
        options[m] = options[m] || fs[m];
      });
      options.maxBusyTries = options.maxBusyTries || 3;
    }
    function rimraf(p, options, cb) {
      let busyTries = 0;
      if (typeof options === "function") {
        cb = options;
        options = {};
      }
      assert(p, "rimraf: missing path");
      assert.strictEqual(typeof p, "string", "rimraf: path should be a string");
      assert.strictEqual(typeof cb, "function", "rimraf: callback function required");
      assert(options, "rimraf: invalid options argument provided");
      assert.strictEqual(typeof options, "object", "rimraf: options should be object");
      defaults(options);
      rimraf_(p, options, function CB(er) {
        if (er) {
          if ((er.code === "EBUSY" || er.code === "ENOTEMPTY" || er.code === "EPERM") && busyTries < options.maxBusyTries) {
            busyTries++;
            const time = busyTries * 100;
            return setTimeout(() => rimraf_(p, options, CB), time);
          }
          if (er.code === "ENOENT")
            er = null;
        }
        cb(er);
      });
    }
    function rimraf_(p, options, cb) {
      assert(p);
      assert(options);
      assert(typeof cb === "function");
      options.lstat(p, (er, st) => {
        if (er && er.code === "ENOENT") {
          return cb(null);
        }
        if (er && er.code === "EPERM" && isWindows) {
          return fixWinEPERM(p, options, er, cb);
        }
        if (st && st.isDirectory()) {
          return rmdir(p, options, er, cb);
        }
        options.unlink(p, (er2) => {
          if (er2) {
            if (er2.code === "ENOENT") {
              return cb(null);
            }
            if (er2.code === "EPERM") {
              return isWindows ? fixWinEPERM(p, options, er2, cb) : rmdir(p, options, er2, cb);
            }
            if (er2.code === "EISDIR") {
              return rmdir(p, options, er2, cb);
            }
          }
          return cb(er2);
        });
      });
    }
    function fixWinEPERM(p, options, er, cb) {
      assert(p);
      assert(options);
      assert(typeof cb === "function");
      options.chmod(p, 438, (er2) => {
        if (er2) {
          cb(er2.code === "ENOENT" ? null : er);
        } else {
          options.stat(p, (er3, stats) => {
            if (er3) {
              cb(er3.code === "ENOENT" ? null : er);
            } else if (stats.isDirectory()) {
              rmdir(p, options, er, cb);
            } else {
              options.unlink(p, cb);
            }
          });
        }
      });
    }
    function fixWinEPERMSync(p, options, er) {
      let stats;
      assert(p);
      assert(options);
      try {
        options.chmodSync(p, 438);
      } catch (er2) {
        if (er2.code === "ENOENT") {
          return;
        } else {
          throw er;
        }
      }
      try {
        stats = options.statSync(p);
      } catch (er3) {
        if (er3.code === "ENOENT") {
          return;
        } else {
          throw er;
        }
      }
      if (stats.isDirectory()) {
        rmdirSync(p, options, er);
      } else {
        options.unlinkSync(p);
      }
    }
    function rmdir(p, options, originalEr, cb) {
      assert(p);
      assert(options);
      assert(typeof cb === "function");
      options.rmdir(p, (er) => {
        if (er && (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM")) {
          rmkids(p, options, cb);
        } else if (er && er.code === "ENOTDIR") {
          cb(originalEr);
        } else {
          cb(er);
        }
      });
    }
    function rmkids(p, options, cb) {
      assert(p);
      assert(options);
      assert(typeof cb === "function");
      options.readdir(p, (er, files) => {
        if (er)
          return cb(er);
        let n = files.length;
        let errState;
        if (n === 0)
          return options.rmdir(p, cb);
        files.forEach((f) => {
          rimraf(path.join(p, f), options, (er2) => {
            if (errState) {
              return;
            }
            if (er2)
              return cb(errState = er2);
            if (--n === 0) {
              options.rmdir(p, cb);
            }
          });
        });
      });
    }
    function rimrafSync(p, options) {
      let st;
      options = options || {};
      defaults(options);
      assert(p, "rimraf: missing path");
      assert.strictEqual(typeof p, "string", "rimraf: path should be a string");
      assert(options, "rimraf: missing options");
      assert.strictEqual(typeof options, "object", "rimraf: options should be object");
      try {
        st = options.lstatSync(p);
      } catch (er) {
        if (er.code === "ENOENT") {
          return;
        }
        if (er.code === "EPERM" && isWindows) {
          fixWinEPERMSync(p, options, er);
        }
      }
      try {
        if (st && st.isDirectory()) {
          rmdirSync(p, options, null);
        } else {
          options.unlinkSync(p);
        }
      } catch (er) {
        if (er.code === "ENOENT") {
          return;
        } else if (er.code === "EPERM") {
          return isWindows ? fixWinEPERMSync(p, options, er) : rmdirSync(p, options, er);
        } else if (er.code !== "EISDIR") {
          throw er;
        }
        rmdirSync(p, options, er);
      }
    }
    function rmdirSync(p, options, originalEr) {
      assert(p);
      assert(options);
      try {
        options.rmdirSync(p);
      } catch (er) {
        if (er.code === "ENOTDIR") {
          throw originalEr;
        } else if (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM") {
          rmkidsSync(p, options);
        } else if (er.code !== "ENOENT") {
          throw er;
        }
      }
    }
    function rmkidsSync(p, options) {
      assert(p);
      assert(options);
      options.readdirSync(p).forEach((f) => rimrafSync(path.join(p, f), options));
      if (isWindows) {
        const startTime = Date.now();
        do {
          try {
            const ret = options.rmdirSync(p, options);
            return ret;
          } catch (e) {
          }
        } while (Date.now() - startTime < 500);
      } else {
        const ret = options.rmdirSync(p, options);
        return ret;
      }
    }
    module2.exports = rimraf;
    rimraf.sync = rimrafSync;
  }
});

// node_modules/fs-extra/lib/remove/index.js
var require_remove = __commonJS({
  "node_modules/fs-extra/lib/remove/index.js"(exports, module2) {
    "use strict";
    var fs = require_graceful_fs();
    var u = require_universalify().fromCallback;
    var rimraf = require_rimraf();
    function remove(path, callback) {
      if (fs.rm)
        return fs.rm(path, { recursive: true, force: true }, callback);
      rimraf(path, callback);
    }
    function removeSync(path) {
      if (fs.rmSync)
        return fs.rmSync(path, { recursive: true, force: true });
      rimraf.sync(path);
    }
    module2.exports = {
      remove: u(remove),
      removeSync
    };
  }
});

// node_modules/fs-extra/lib/empty/index.js
var require_empty = __commonJS({
  "node_modules/fs-extra/lib/empty/index.js"(exports, module2) {
    "use strict";
    var u = require_universalify().fromPromise;
    var fs = require_fs();
    var path = require("path");
    var mkdir = require_mkdirs();
    var remove = require_remove();
    var emptyDir = u(async function emptyDir2(dir) {
      let items;
      try {
        items = await fs.readdir(dir);
      } catch (e) {
        return mkdir.mkdirs(dir);
      }
      return Promise.all(items.map((item) => remove.remove(path.join(dir, item))));
    });
    function emptyDirSync(dir) {
      let items;
      try {
        items = fs.readdirSync(dir);
      } catch (e) {
        return mkdir.mkdirsSync(dir);
      }
      items.forEach((item) => {
        item = path.join(dir, item);
        remove.removeSync(item);
      });
    }
    module2.exports = {
      emptyDirSync,
      emptydirSync: emptyDirSync,
      emptyDir,
      emptydir: emptyDir
    };
  }
});

// node_modules/fs-extra/lib/ensure/file.js
var require_file2 = __commonJS({
  "node_modules/fs-extra/lib/ensure/file.js"(exports, module2) {
    "use strict";
    var u = require_universalify().fromCallback;
    var path = require("path");
    var fs = require_graceful_fs();
    var mkdir = require_mkdirs();
    function createFile(file, callback) {
      function makeFile() {
        fs.writeFile(file, "", (err) => {
          if (err)
            return callback(err);
          callback();
        });
      }
      fs.stat(file, (err, stats) => {
        if (!err && stats.isFile())
          return callback();
        const dir = path.dirname(file);
        fs.stat(dir, (err2, stats2) => {
          if (err2) {
            if (err2.code === "ENOENT") {
              return mkdir.mkdirs(dir, (err3) => {
                if (err3)
                  return callback(err3);
                makeFile();
              });
            }
            return callback(err2);
          }
          if (stats2.isDirectory())
            makeFile();
          else {
            fs.readdir(dir, (err3) => {
              if (err3)
                return callback(err3);
            });
          }
        });
      });
    }
    function createFileSync(file) {
      let stats;
      try {
        stats = fs.statSync(file);
      } catch (e) {
      }
      if (stats && stats.isFile())
        return;
      const dir = path.dirname(file);
      try {
        if (!fs.statSync(dir).isDirectory()) {
          fs.readdirSync(dir);
        }
      } catch (err) {
        if (err && err.code === "ENOENT")
          mkdir.mkdirsSync(dir);
        else
          throw err;
      }
      fs.writeFileSync(file, "");
    }
    module2.exports = {
      createFile: u(createFile),
      createFileSync
    };
  }
});

// node_modules/fs-extra/lib/ensure/link.js
var require_link = __commonJS({
  "node_modules/fs-extra/lib/ensure/link.js"(exports, module2) {
    "use strict";
    var u = require_universalify().fromCallback;
    var path = require("path");
    var fs = require_graceful_fs();
    var mkdir = require_mkdirs();
    var pathExists = require_path_exists().pathExists;
    var { areIdentical } = require_stat();
    function createLink(srcpath, dstpath, callback) {
      function makeLink(srcpath2, dstpath2) {
        fs.link(srcpath2, dstpath2, (err) => {
          if (err)
            return callback(err);
          callback(null);
        });
      }
      fs.lstat(dstpath, (_, dstStat) => {
        fs.lstat(srcpath, (err, srcStat) => {
          if (err) {
            err.message = err.message.replace("lstat", "ensureLink");
            return callback(err);
          }
          if (dstStat && areIdentical(srcStat, dstStat))
            return callback(null);
          const dir = path.dirname(dstpath);
          pathExists(dir, (err2, dirExists) => {
            if (err2)
              return callback(err2);
            if (dirExists)
              return makeLink(srcpath, dstpath);
            mkdir.mkdirs(dir, (err3) => {
              if (err3)
                return callback(err3);
              makeLink(srcpath, dstpath);
            });
          });
        });
      });
    }
    function createLinkSync(srcpath, dstpath) {
      let dstStat;
      try {
        dstStat = fs.lstatSync(dstpath);
      } catch (e) {
      }
      try {
        const srcStat = fs.lstatSync(srcpath);
        if (dstStat && areIdentical(srcStat, dstStat))
          return;
      } catch (err) {
        err.message = err.message.replace("lstat", "ensureLink");
        throw err;
      }
      const dir = path.dirname(dstpath);
      const dirExists = fs.existsSync(dir);
      if (dirExists)
        return fs.linkSync(srcpath, dstpath);
      mkdir.mkdirsSync(dir);
      return fs.linkSync(srcpath, dstpath);
    }
    module2.exports = {
      createLink: u(createLink),
      createLinkSync
    };
  }
});

// node_modules/fs-extra/lib/ensure/symlink-paths.js
var require_symlink_paths = __commonJS({
  "node_modules/fs-extra/lib/ensure/symlink-paths.js"(exports, module2) {
    "use strict";
    var path = require("path");
    var fs = require_graceful_fs();
    var pathExists = require_path_exists().pathExists;
    function symlinkPaths(srcpath, dstpath, callback) {
      if (path.isAbsolute(srcpath)) {
        return fs.lstat(srcpath, (err) => {
          if (err) {
            err.message = err.message.replace("lstat", "ensureSymlink");
            return callback(err);
          }
          return callback(null, {
            toCwd: srcpath,
            toDst: srcpath
          });
        });
      } else {
        const dstdir = path.dirname(dstpath);
        const relativeToDst = path.join(dstdir, srcpath);
        return pathExists(relativeToDst, (err, exists) => {
          if (err)
            return callback(err);
          if (exists) {
            return callback(null, {
              toCwd: relativeToDst,
              toDst: srcpath
            });
          } else {
            return fs.lstat(srcpath, (err2) => {
              if (err2) {
                err2.message = err2.message.replace("lstat", "ensureSymlink");
                return callback(err2);
              }
              return callback(null, {
                toCwd: srcpath,
                toDst: path.relative(dstdir, srcpath)
              });
            });
          }
        });
      }
    }
    function symlinkPathsSync(srcpath, dstpath) {
      let exists;
      if (path.isAbsolute(srcpath)) {
        exists = fs.existsSync(srcpath);
        if (!exists)
          throw new Error("absolute srcpath does not exist");
        return {
          toCwd: srcpath,
          toDst: srcpath
        };
      } else {
        const dstdir = path.dirname(dstpath);
        const relativeToDst = path.join(dstdir, srcpath);
        exists = fs.existsSync(relativeToDst);
        if (exists) {
          return {
            toCwd: relativeToDst,
            toDst: srcpath
          };
        } else {
          exists = fs.existsSync(srcpath);
          if (!exists)
            throw new Error("relative srcpath does not exist");
          return {
            toCwd: srcpath,
            toDst: path.relative(dstdir, srcpath)
          };
        }
      }
    }
    module2.exports = {
      symlinkPaths,
      symlinkPathsSync
    };
  }
});

// node_modules/fs-extra/lib/ensure/symlink-type.js
var require_symlink_type = __commonJS({
  "node_modules/fs-extra/lib/ensure/symlink-type.js"(exports, module2) {
    "use strict";
    var fs = require_graceful_fs();
    function symlinkType(srcpath, type, callback) {
      callback = typeof type === "function" ? type : callback;
      type = typeof type === "function" ? false : type;
      if (type)
        return callback(null, type);
      fs.lstat(srcpath, (err, stats) => {
        if (err)
          return callback(null, "file");
        type = stats && stats.isDirectory() ? "dir" : "file";
        callback(null, type);
      });
    }
    function symlinkTypeSync(srcpath, type) {
      let stats;
      if (type)
        return type;
      try {
        stats = fs.lstatSync(srcpath);
      } catch (e) {
        return "file";
      }
      return stats && stats.isDirectory() ? "dir" : "file";
    }
    module2.exports = {
      symlinkType,
      symlinkTypeSync
    };
  }
});

// node_modules/fs-extra/lib/ensure/symlink.js
var require_symlink = __commonJS({
  "node_modules/fs-extra/lib/ensure/symlink.js"(exports, module2) {
    "use strict";
    var u = require_universalify().fromCallback;
    var path = require("path");
    var fs = require_fs();
    var _mkdirs = require_mkdirs();
    var mkdirs = _mkdirs.mkdirs;
    var mkdirsSync = _mkdirs.mkdirsSync;
    var _symlinkPaths = require_symlink_paths();
    var symlinkPaths = _symlinkPaths.symlinkPaths;
    var symlinkPathsSync = _symlinkPaths.symlinkPathsSync;
    var _symlinkType = require_symlink_type();
    var symlinkType = _symlinkType.symlinkType;
    var symlinkTypeSync = _symlinkType.symlinkTypeSync;
    var pathExists = require_path_exists().pathExists;
    var { areIdentical } = require_stat();
    function createSymlink(srcpath, dstpath, type, callback) {
      callback = typeof type === "function" ? type : callback;
      type = typeof type === "function" ? false : type;
      fs.lstat(dstpath, (err, stats) => {
        if (!err && stats.isSymbolicLink()) {
          Promise.all([
            fs.stat(srcpath),
            fs.stat(dstpath)
          ]).then(([srcStat, dstStat]) => {
            if (areIdentical(srcStat, dstStat))
              return callback(null);
            _createSymlink(srcpath, dstpath, type, callback);
          });
        } else
          _createSymlink(srcpath, dstpath, type, callback);
      });
    }
    function _createSymlink(srcpath, dstpath, type, callback) {
      symlinkPaths(srcpath, dstpath, (err, relative) => {
        if (err)
          return callback(err);
        srcpath = relative.toDst;
        symlinkType(relative.toCwd, type, (err2, type2) => {
          if (err2)
            return callback(err2);
          const dir = path.dirname(dstpath);
          pathExists(dir, (err3, dirExists) => {
            if (err3)
              return callback(err3);
            if (dirExists)
              return fs.symlink(srcpath, dstpath, type2, callback);
            mkdirs(dir, (err4) => {
              if (err4)
                return callback(err4);
              fs.symlink(srcpath, dstpath, type2, callback);
            });
          });
        });
      });
    }
    function createSymlinkSync(srcpath, dstpath, type) {
      let stats;
      try {
        stats = fs.lstatSync(dstpath);
      } catch (e) {
      }
      if (stats && stats.isSymbolicLink()) {
        const srcStat = fs.statSync(srcpath);
        const dstStat = fs.statSync(dstpath);
        if (areIdentical(srcStat, dstStat))
          return;
      }
      const relative = symlinkPathsSync(srcpath, dstpath);
      srcpath = relative.toDst;
      type = symlinkTypeSync(relative.toCwd, type);
      const dir = path.dirname(dstpath);
      const exists = fs.existsSync(dir);
      if (exists)
        return fs.symlinkSync(srcpath, dstpath, type);
      mkdirsSync(dir);
      return fs.symlinkSync(srcpath, dstpath, type);
    }
    module2.exports = {
      createSymlink: u(createSymlink),
      createSymlinkSync
    };
  }
});

// node_modules/fs-extra/lib/ensure/index.js
var require_ensure = __commonJS({
  "node_modules/fs-extra/lib/ensure/index.js"(exports, module2) {
    "use strict";
    var { createFile, createFileSync } = require_file2();
    var { createLink, createLinkSync } = require_link();
    var { createSymlink, createSymlinkSync } = require_symlink();
    module2.exports = {
      // file
      createFile,
      createFileSync,
      ensureFile: createFile,
      ensureFileSync: createFileSync,
      // link
      createLink,
      createLinkSync,
      ensureLink: createLink,
      ensureLinkSync: createLinkSync,
      // symlink
      createSymlink,
      createSymlinkSync,
      ensureSymlink: createSymlink,
      ensureSymlinkSync: createSymlinkSync
    };
  }
});

// node_modules/jsonfile/utils.js
var require_utils4 = __commonJS({
  "node_modules/jsonfile/utils.js"(exports, module2) {
    function stringify(obj, { EOL = "\n", finalEOL = true, replacer = null, spaces } = {}) {
      const EOF = finalEOL ? EOL : "";
      const str = JSON.stringify(obj, replacer, spaces);
      return str.replace(/\n/g, EOL) + EOF;
    }
    function stripBom(content) {
      if (Buffer.isBuffer(content))
        content = content.toString("utf8");
      return content.replace(/^\uFEFF/, "");
    }
    module2.exports = { stringify, stripBom };
  }
});

// node_modules/jsonfile/index.js
var require_jsonfile = __commonJS({
  "node_modules/jsonfile/index.js"(exports, module2) {
    var _fs;
    try {
      _fs = require_graceful_fs();
    } catch (_) {
      _fs = require("fs");
    }
    var universalify = require_universalify();
    var { stringify, stripBom } = require_utils4();
    async function _readFile(file, options = {}) {
      if (typeof options === "string") {
        options = { encoding: options };
      }
      const fs = options.fs || _fs;
      const shouldThrow = "throws" in options ? options.throws : true;
      let data = await universalify.fromCallback(fs.readFile)(file, options);
      data = stripBom(data);
      let obj;
      try {
        obj = JSON.parse(data, options ? options.reviver : null);
      } catch (err) {
        if (shouldThrow) {
          err.message = `${file}: ${err.message}`;
          throw err;
        } else {
          return null;
        }
      }
      return obj;
    }
    var readFile = universalify.fromPromise(_readFile);
    function readFileSync(file, options = {}) {
      if (typeof options === "string") {
        options = { encoding: options };
      }
      const fs = options.fs || _fs;
      const shouldThrow = "throws" in options ? options.throws : true;
      try {
        let content = fs.readFileSync(file, options);
        content = stripBom(content);
        return JSON.parse(content, options.reviver);
      } catch (err) {
        if (shouldThrow) {
          err.message = `${file}: ${err.message}`;
          throw err;
        } else {
          return null;
        }
      }
    }
    async function _writeFile(file, obj, options = {}) {
      const fs = options.fs || _fs;
      const str = stringify(obj, options);
      await universalify.fromCallback(fs.writeFile)(file, str, options);
    }
    var writeFile = universalify.fromPromise(_writeFile);
    function writeFileSync(file, obj, options = {}) {
      const fs = options.fs || _fs;
      const str = stringify(obj, options);
      return fs.writeFileSync(file, str, options);
    }
    var jsonfile = {
      readFile,
      readFileSync,
      writeFile,
      writeFileSync
    };
    module2.exports = jsonfile;
  }
});

// node_modules/fs-extra/lib/json/jsonfile.js
var require_jsonfile2 = __commonJS({
  "node_modules/fs-extra/lib/json/jsonfile.js"(exports, module2) {
    "use strict";
    var jsonFile = require_jsonfile();
    module2.exports = {
      // jsonfile exports
      readJson: jsonFile.readFile,
      readJsonSync: jsonFile.readFileSync,
      writeJson: jsonFile.writeFile,
      writeJsonSync: jsonFile.writeFileSync
    };
  }
});

// node_modules/fs-extra/lib/output-file/index.js
var require_output_file = __commonJS({
  "node_modules/fs-extra/lib/output-file/index.js"(exports, module2) {
    "use strict";
    var u = require_universalify().fromCallback;
    var fs = require_graceful_fs();
    var path = require("path");
    var mkdir = require_mkdirs();
    var pathExists = require_path_exists().pathExists;
    function outputFile(file, data, encoding, callback) {
      if (typeof encoding === "function") {
        callback = encoding;
        encoding = "utf8";
      }
      const dir = path.dirname(file);
      pathExists(dir, (err, itDoes) => {
        if (err)
          return callback(err);
        if (itDoes)
          return fs.writeFile(file, data, encoding, callback);
        mkdir.mkdirs(dir, (err2) => {
          if (err2)
            return callback(err2);
          fs.writeFile(file, data, encoding, callback);
        });
      });
    }
    function outputFileSync(file, ...args) {
      const dir = path.dirname(file);
      if (fs.existsSync(dir)) {
        return fs.writeFileSync(file, ...args);
      }
      mkdir.mkdirsSync(dir);
      fs.writeFileSync(file, ...args);
    }
    module2.exports = {
      outputFile: u(outputFile),
      outputFileSync
    };
  }
});

// node_modules/fs-extra/lib/json/output-json.js
var require_output_json = __commonJS({
  "node_modules/fs-extra/lib/json/output-json.js"(exports, module2) {
    "use strict";
    var { stringify } = require_utils4();
    var { outputFile } = require_output_file();
    async function outputJson(file, data, options = {}) {
      const str = stringify(data, options);
      await outputFile(file, str, options);
    }
    module2.exports = outputJson;
  }
});

// node_modules/fs-extra/lib/json/output-json-sync.js
var require_output_json_sync = __commonJS({
  "node_modules/fs-extra/lib/json/output-json-sync.js"(exports, module2) {
    "use strict";
    var { stringify } = require_utils4();
    var { outputFileSync } = require_output_file();
    function outputJsonSync(file, data, options) {
      const str = stringify(data, options);
      outputFileSync(file, str, options);
    }
    module2.exports = outputJsonSync;
  }
});

// node_modules/fs-extra/lib/json/index.js
var require_json3 = __commonJS({
  "node_modules/fs-extra/lib/json/index.js"(exports, module2) {
    "use strict";
    var u = require_universalify().fromPromise;
    var jsonFile = require_jsonfile2();
    jsonFile.outputJson = u(require_output_json());
    jsonFile.outputJsonSync = require_output_json_sync();
    jsonFile.outputJSON = jsonFile.outputJson;
    jsonFile.outputJSONSync = jsonFile.outputJsonSync;
    jsonFile.writeJSON = jsonFile.writeJson;
    jsonFile.writeJSONSync = jsonFile.writeJsonSync;
    jsonFile.readJSON = jsonFile.readJson;
    jsonFile.readJSONSync = jsonFile.readJsonSync;
    module2.exports = jsonFile;
  }
});

// node_modules/fs-extra/lib/move/move.js
var require_move = __commonJS({
  "node_modules/fs-extra/lib/move/move.js"(exports, module2) {
    "use strict";
    var fs = require_graceful_fs();
    var path = require("path");
    var copy = require_copy2().copy;
    var remove = require_remove().remove;
    var mkdirp = require_mkdirs().mkdirp;
    var pathExists = require_path_exists().pathExists;
    var stat = require_stat();
    function move(src, dest, opts, cb) {
      if (typeof opts === "function") {
        cb = opts;
        opts = {};
      }
      opts = opts || {};
      const overwrite = opts.overwrite || opts.clobber || false;
      stat.checkPaths(src, dest, "move", opts, (err, stats) => {
        if (err)
          return cb(err);
        const { srcStat, isChangingCase = false } = stats;
        stat.checkParentPaths(src, srcStat, dest, "move", (err2) => {
          if (err2)
            return cb(err2);
          if (isParentRoot(dest))
            return doRename(src, dest, overwrite, isChangingCase, cb);
          mkdirp(path.dirname(dest), (err3) => {
            if (err3)
              return cb(err3);
            return doRename(src, dest, overwrite, isChangingCase, cb);
          });
        });
      });
    }
    function isParentRoot(dest) {
      const parent = path.dirname(dest);
      const parsedPath = path.parse(parent);
      return parsedPath.root === parent;
    }
    function doRename(src, dest, overwrite, isChangingCase, cb) {
      if (isChangingCase)
        return rename(src, dest, overwrite, cb);
      if (overwrite) {
        return remove(dest, (err) => {
          if (err)
            return cb(err);
          return rename(src, dest, overwrite, cb);
        });
      }
      pathExists(dest, (err, destExists) => {
        if (err)
          return cb(err);
        if (destExists)
          return cb(new Error("dest already exists."));
        return rename(src, dest, overwrite, cb);
      });
    }
    function rename(src, dest, overwrite, cb) {
      fs.rename(src, dest, (err) => {
        if (!err)
          return cb();
        if (err.code !== "EXDEV")
          return cb(err);
        return moveAcrossDevice(src, dest, overwrite, cb);
      });
    }
    function moveAcrossDevice(src, dest, overwrite, cb) {
      const opts = {
        overwrite,
        errorOnExist: true
      };
      copy(src, dest, opts, (err) => {
        if (err)
          return cb(err);
        return remove(src, cb);
      });
    }
    module2.exports = move;
  }
});

// node_modules/fs-extra/lib/move/move-sync.js
var require_move_sync = __commonJS({
  "node_modules/fs-extra/lib/move/move-sync.js"(exports, module2) {
    "use strict";
    var fs = require_graceful_fs();
    var path = require("path");
    var copySync = require_copy2().copySync;
    var removeSync = require_remove().removeSync;
    var mkdirpSync = require_mkdirs().mkdirpSync;
    var stat = require_stat();
    function moveSync(src, dest, opts) {
      opts = opts || {};
      const overwrite = opts.overwrite || opts.clobber || false;
      const { srcStat, isChangingCase = false } = stat.checkPathsSync(src, dest, "move", opts);
      stat.checkParentPathsSync(src, srcStat, dest, "move");
      if (!isParentRoot(dest))
        mkdirpSync(path.dirname(dest));
      return doRename(src, dest, overwrite, isChangingCase);
    }
    function isParentRoot(dest) {
      const parent = path.dirname(dest);
      const parsedPath = path.parse(parent);
      return parsedPath.root === parent;
    }
    function doRename(src, dest, overwrite, isChangingCase) {
      if (isChangingCase)
        return rename(src, dest, overwrite);
      if (overwrite) {
        removeSync(dest);
        return rename(src, dest, overwrite);
      }
      if (fs.existsSync(dest))
        throw new Error("dest already exists.");
      return rename(src, dest, overwrite);
    }
    function rename(src, dest, overwrite) {
      try {
        fs.renameSync(src, dest);
      } catch (err) {
        if (err.code !== "EXDEV")
          throw err;
        return moveAcrossDevice(src, dest, overwrite);
      }
    }
    function moveAcrossDevice(src, dest, overwrite) {
      const opts = {
        overwrite,
        errorOnExist: true
      };
      copySync(src, dest, opts);
      return removeSync(src);
    }
    module2.exports = moveSync;
  }
});

// node_modules/fs-extra/lib/move/index.js
var require_move2 = __commonJS({
  "node_modules/fs-extra/lib/move/index.js"(exports, module2) {
    "use strict";
    var u = require_universalify().fromCallback;
    module2.exports = {
      move: u(require_move()),
      moveSync: require_move_sync()
    };
  }
});

// node_modules/fs-extra/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/fs-extra/lib/index.js"(exports, module2) {
    "use strict";
    module2.exports = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, require_fs()), require_copy2()), require_empty()), require_ensure()), require_json3()), require_mkdirs()), require_move2()), require_output_file()), require_path_exists()), require_remove());
  }
});

// node_modules/openapi-typescript-codegen/dist/index.js
var require_dist = __commonJS({
  "node_modules/openapi-typescript-codegen/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var e = require_camelcase();
    var t = require_json_schema_ref_parser();
    var n = require("os");
    var r = require("path");
    var o = require_lib2();
    function a(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var l;
    var s;
    var i = a(e);
    var u = a(t);
    exports.HttpClient = void 0, (l = exports.HttpClient || (exports.HttpClient = {})).FETCH = "fetch", l.XHR = "xhr", l.NODE = "node", l.AXIOS = "axios", l.ANGULAR = "angular", exports.Indent = void 0, (s = exports.Indent || (exports.Indent = {})).SPACE_4 = "4", s.SPACE_2 = "2", s.TAB = "tab";
    var p = (e2) => null == e2 ? void 0 : e2.replace(/\\/g, "\\\\");
    var c = (e2) => "string" == typeof e2;
    var m = (e2, t2) => {
      var n2, r2;
      const o2 = null === (n2 = t2["x-enum-varnames"]) || void 0 === n2 ? void 0 : n2.filter(c), a2 = null === (r2 = t2["x-enum-descriptions"]) || void 0 === r2 ? void 0 : r2.filter(c);
      return e2.map((e3, t3) => ({ name: (null == o2 ? void 0 : o2[t3]) || e3.name, description: (null == a2 ? void 0 : a2[t3]) || e3.description, value: e3.value, type: e3.type }));
    };
    var d = (e2) => Array.isArray(e2) ? e2.filter((e3, t2, n2) => n2.indexOf(e3) === t2).filter((e3) => "number" == typeof e3 || "string" == typeof e3).map((e3) => "number" == typeof e3 ? { name: `'_${e3}'`, value: String(e3), type: "number", description: null } : { name: String(e3).replace(/\W+/g, "_").replace(/^(\d+)/g, "_$1").replace(/([a-z])([A-Z]+)/g, "$1_$2").toUpperCase(), value: `'${e3.replace(/'/g, "\\'")}'`, type: "string", description: null }) : [];
    var f = (e2) => {
      if (e2 || "" === e2) {
        if (!/^[a-zA-Z_$][\w$]+$/g.test(e2))
          return `'${e2}'`;
      }
      return e2;
    };
    var h = /* @__PURE__ */ new Map([["file", "binary"], ["any", "any"], ["object", "any"], ["array", "any[]"], ["boolean", "boolean"], ["byte", "number"], ["int", "number"], ["integer", "number"], ["float", "number"], ["double", "number"], ["short", "number"], ["long", "number"], ["number", "number"], ["char", "string"], ["date", "string"], ["date-time", "string"], ["password", "string"], ["string", "string"], ["void", "void"], ["null", "null"]]);
    var y = (e2) => e2.replace(/^[^a-zA-Z_$]+/g, "").replace(/[^\w$]+/g, "_");
    var v = (e2 = "any", t2) => {
      const n2 = { type: "any", base: "any", template: null, imports: [], isNullable: false }, r2 = ((e3, t3) => "binary" === t3 ? "binary" : h.get(e3))(e2, t2);
      if (r2)
        return n2.type = r2, n2.base = r2, n2;
      const o2 = decodeURIComponent(e2.trim().replace(/^#\/definitions\//, "").replace(/^#\/parameters\//, "").replace(/^#\/responses\//, "").replace(/^#\/securityDefinitions\//, ""));
      if (/\[.*\]$/g.test(o2)) {
        const e3 = o2.match(/(.*?)\[(.*)\]$/);
        if (null == e3 ? void 0 : e3.length) {
          const t3 = v(y(e3[1])), r3 = v(y(e3[2]));
          return "any[]" === t3.type ? (n2.type = `${r3.type}[]`, n2.base = r3.type, t3.imports = []) : r3.type ? (n2.type = `${t3.type}<${r3.type}>`, n2.base = t3.type, n2.template = r3.type) : (n2.type = t3.type, n2.base = t3.type, n2.template = t3.type), n2.imports.push(...t3.imports), n2.imports.push(...r3.imports), n2;
        }
      }
      if (o2) {
        const e3 = y(o2);
        return n2.type = e3, n2.base = e3, n2.imports.push(e3), n2;
      }
      return n2;
    };
    var g = (e2, t2, n2) => {
      var r2;
      const o2 = [];
      for (const a2 in t2.properties)
        if (t2.properties.hasOwnProperty(a2)) {
          const l2 = t2.properties[a2], s2 = !!(null === (r2 = t2.required) || void 0 === r2 ? void 0 : r2.includes(a2));
          if (l2.$ref) {
            const e3 = v(l2.$ref);
            o2.push({ name: f(a2), export: "reference", type: e3.type, base: e3.base, template: e3.template, link: null, description: l2.description || null, isDefinition: false, isReadOnly: true === l2.readOnly, isRequired: s2, isNullable: true === l2["x-nullable"], format: l2.format, maximum: l2.maximum, exclusiveMaximum: l2.exclusiveMaximum, minimum: l2.minimum, exclusiveMinimum: l2.exclusiveMinimum, multipleOf: l2.multipleOf, maxLength: l2.maxLength, minLength: l2.minLength, maxItems: l2.maxItems, minItems: l2.minItems, uniqueItems: l2.uniqueItems, maxProperties: l2.maxProperties, minProperties: l2.minProperties, pattern: p(l2.pattern), imports: e3.imports, enum: [], enums: [], properties: [] });
          } else {
            const t3 = n2(e2, l2);
            o2.push({ name: f(a2), export: t3.export, type: t3.type, base: t3.base, template: t3.template, link: t3.link, description: l2.description || null, isDefinition: false, isReadOnly: true === l2.readOnly, isRequired: s2, isNullable: true === l2["x-nullable"], format: l2.format, maximum: l2.maximum, exclusiveMaximum: l2.exclusiveMaximum, minimum: l2.minimum, exclusiveMinimum: l2.exclusiveMinimum, multipleOf: l2.multipleOf, maxLength: l2.maxLength, minLength: l2.minLength, maxItems: l2.maxItems, minItems: l2.minItems, uniqueItems: l2.uniqueItems, maxProperties: l2.maxProperties, minProperties: l2.minProperties, pattern: p(l2.pattern), imports: t3.imports, enum: t3.enum, enums: t3.enums, properties: t3.properties });
          }
        }
      return o2;
    };
    var P = /~1/g;
    var b = /~0/g;
    var O = (e2, t2) => {
      if (t2.$ref) {
        const n2 = t2.$ref.replace(/^#/g, "").split("/").filter((e3) => e3);
        let r2 = e2;
        return n2.forEach((e3) => {
          const n3 = decodeURIComponent(e3.replace(P, "/").replace(b, "~"));
          if (!r2.hasOwnProperty(n3))
            throw new Error(`Could not find reference: "${t2.$ref}"`);
          r2 = r2[n3];
        }), r2;
      }
      return t2;
    };
    var x = (e2, t2, n2, r2, o2) => {
      const a2 = { type: r2, imports: [], enums: [], properties: [] }, l2 = [];
      if (n2.map((t3) => o2(e2, t3)).filter((e3) => {
        const t3 = e3.properties.length, n3 = e3.enums.length;
        return !("any" === e3.type && !t3 && !n3);
      }).forEach((e3) => {
        a2.imports.push(...e3.imports), a2.enums.push(...e3.enums), a2.properties.push(e3);
      }), t2.required) {
        const r3 = ((e3, t3, n3, r4) => n3.reduce((t4, n4) => {
          if (n4.$ref) {
            const o3 = O(e3, n4);
            return [...t4, ...r4(e3, o3).properties];
          }
          return [...t4, ...r4(e3, n4).properties];
        }, []).filter((e4) => !e4.isRequired && t3.includes(e4.name)).map((e4) => __spreadProps(__spreadValues({}, e4), { isRequired: true })))(e2, t2.required, n2, o2);
        r3.forEach((e3) => {
          a2.imports.push(...e3.imports), a2.enums.push(...e3.enums);
        }), l2.push(...r3);
      }
      if (t2.properties) {
        const n3 = g(e2, t2, o2);
        n3.forEach((e3) => {
          a2.imports.push(...e3.imports), a2.enums.push(...e3.enums), "enum" === e3.export && a2.enums.push(e3);
        }), l2.push(...n3);
      }
      return l2.length && a2.properties.push({ name: "properties", export: "interface", type: "any", base: "any", template: null, link: null, description: "", isDefinition: false, isReadOnly: false, isNullable: false, isRequired: false, imports: [], enum: [], enums: [], properties: l2 }), a2;
    };
    var k = (e2, t2, n2 = false, r2 = "") => {
      var o2;
      const a2 = { name: r2, export: "interface", type: "any", base: "any", template: null, link: null, description: t2.description || null, isDefinition: n2, isReadOnly: true === t2.readOnly, isNullable: true === t2["x-nullable"], isRequired: false, format: t2.format, maximum: t2.maximum, exclusiveMaximum: t2.exclusiveMaximum, minimum: t2.minimum, exclusiveMinimum: t2.exclusiveMinimum, multipleOf: t2.multipleOf, maxLength: t2.maxLength, minLength: t2.minLength, maxItems: t2.maxItems, minItems: t2.minItems, uniqueItems: t2.uniqueItems, maxProperties: t2.maxProperties, minProperties: t2.minProperties, pattern: p(t2.pattern), imports: [], enum: [], enums: [], properties: [] };
      if (t2.$ref) {
        const e3 = v(t2.$ref);
        return a2.export = "reference", a2.type = e3.type, a2.base = e3.base, a2.template = e3.template, a2.imports.push(...e3.imports), a2;
      }
      if (t2.enum && "boolean" !== t2.type) {
        const e3 = d(t2.enum), n3 = m(e3, t2);
        if (n3.length)
          return a2.export = "enum", a2.type = "string", a2.base = "string", a2.enum.push(...n3), a2;
      }
      if ("array" === t2.type && t2.items) {
        if (t2.items.$ref) {
          const e3 = v(t2.items.$ref);
          return a2.export = "array", a2.type = e3.type, a2.base = e3.base, a2.template = e3.template, a2.imports.push(...e3.imports), a2;
        }
        {
          const n3 = k(e2, t2.items);
          return a2.export = "array", a2.type = n3.type, a2.base = n3.base, a2.template = n3.template, a2.link = n3, a2.imports.push(...n3.imports), a2;
        }
      }
      if ("object" === t2.type && "object" == typeof t2.additionalProperties) {
        if (t2.additionalProperties.$ref) {
          const e3 = v(t2.additionalProperties.$ref);
          return a2.export = "dictionary", a2.type = e3.type, a2.base = e3.base, a2.template = e3.template, a2.imports.push(...e3.imports), a2;
        }
        {
          const n3 = k(e2, t2.additionalProperties);
          return a2.export = "dictionary", a2.type = n3.type, a2.base = n3.base, a2.template = n3.template, a2.link = n3, a2.imports.push(...n3.imports), a2;
        }
      }
      if (null === (o2 = t2.allOf) || void 0 === o2 ? void 0 : o2.length) {
        const n3 = x(e2, t2, t2.allOf, "all-of", k);
        return a2.export = n3.type, a2.imports.push(...n3.imports), a2.properties.push(...n3.properties), a2.enums.push(...n3.enums), a2;
      }
      if ("object" === t2.type) {
        if (a2.export = "interface", a2.type = "any", a2.base = "any", t2.properties) {
          g(e2, t2, k).forEach((e3) => {
            a2.imports.push(...e3.imports), a2.enums.push(...e3.enums), a2.properties.push(e3), "enum" === e3.export && a2.enums.push(e3);
          });
        }
        return a2;
      }
      if (t2.type) {
        const e3 = v(t2.type, t2.format);
        return a2.export = "generic", a2.type = e3.type, a2.base = e3.base, a2.template = e3.template, a2.imports.push(...e3.imports), a2;
      }
      return a2;
    };
    var R = (e2, t2, n2) => n2.indexOf(e2) === t2;
    var C = (e2, t2) => {
      var n2;
      if (void 0 === e2.default)
        return;
      if (null === e2.default)
        return "null";
      switch (e2.type || typeof e2.default) {
        case "int":
        case "integer":
        case "number":
          return "enum" === t2.export && (null === (n2 = t2.enum) || void 0 === n2 ? void 0 : n2[e2.default]) ? t2.enum[e2.default].value : e2.default;
        case "boolean":
          return JSON.stringify(e2.default);
        case "string":
          return `'${e2.default}'`;
        case "object":
          try {
            return JSON.stringify(e2.default, null, 4);
          } catch (e3) {
          }
      }
    };
    var w = /^(arguments|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|eval|export|extends|false|finally|for|function|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)$/g;
    var q = (e2) => {
      const t2 = e2.replace(/^[^a-zA-Z]+/g, "").replace(/[^\w\-]+/g, "-").trim();
      return i.default(t2).replace(w, "_$1");
    };
    var A = (e2, t2) => {
      const n2 = { imports: [], parameters: [], parametersPath: [], parametersQuery: [], parametersForm: [], parametersCookie: [], parametersHeader: [], parametersBody: null };
      return t2.forEach((t3) => {
        const r2 = O(e2, t3), o2 = ((e3, t4) => {
          var n3;
          const r3 = { in: t4.in, prop: t4.name, export: "interface", name: q(t4.name), type: "any", base: "any", template: null, link: null, description: t4.description || null, isDefinition: false, isReadOnly: false, isRequired: true === t4.required, isNullable: true === t4["x-nullable"], format: t4.format, maximum: t4.maximum, exclusiveMaximum: t4.exclusiveMaximum, minimum: t4.minimum, exclusiveMinimum: t4.exclusiveMinimum, multipleOf: t4.multipleOf, maxLength: t4.maxLength, minLength: t4.minLength, maxItems: t4.maxItems, minItems: t4.minItems, uniqueItems: t4.uniqueItems, pattern: p(t4.pattern), imports: [], enum: [], enums: [], properties: [], mediaType: null };
          if (t4.$ref) {
            const e4 = v(t4.$ref);
            return r3.export = "reference", r3.type = e4.type, r3.base = e4.base, r3.template = e4.template, r3.imports.push(...e4.imports), r3.default = C(t4, r3), r3;
          }
          if (t4.enum) {
            const e4 = d(t4.enum), n4 = m(e4, t4);
            if (n4.length)
              return r3.export = "enum", r3.type = "string", r3.base = "string", r3.enum.push(...n4), r3.default = C(t4, r3), r3;
          }
          if ("array" === t4.type && t4.items) {
            const e4 = v(t4.items.type, t4.items.format);
            return r3.export = "array", r3.type = e4.type, r3.base = e4.base, r3.template = e4.template, r3.imports.push(...e4.imports), r3.default = C(t4, r3), r3;
          }
          if ("object" === t4.type && t4.items) {
            const e4 = v(t4.items.type, t4.items.format);
            return r3.export = "dictionary", r3.type = e4.type, r3.base = e4.base, r3.template = e4.template, r3.imports.push(...e4.imports), r3.default = C(t4, r3), r3;
          }
          let o3 = t4.schema;
          if (o3) {
            if ((null === (n3 = o3.$ref) || void 0 === n3 ? void 0 : n3.startsWith("#/parameters/")) && (o3 = O(e3, o3)), o3.$ref) {
              const e4 = v(o3.$ref);
              return r3.export = "reference", r3.type = e4.type, r3.base = e4.base, r3.template = e4.template, r3.imports.push(...e4.imports), r3.default = C(t4, r3), r3;
            }
            {
              const n4 = k(e3, o3);
              return r3.export = n4.export, r3.type = n4.type, r3.base = n4.base, r3.template = n4.template, r3.link = n4.link, r3.imports.push(...n4.imports), r3.enum.push(...n4.enum), r3.enums.push(...n4.enums), r3.properties.push(...n4.properties), r3.default = C(t4, r3), r3;
            }
          }
          if (t4.type) {
            const e4 = v(t4.type, t4.format);
            return r3.export = "generic", r3.type = e4.type, r3.base = e4.base, r3.template = e4.template, r3.imports.push(...e4.imports), r3.default = C(t4, r3), r3;
          }
          return r3;
        })(e2, r2);
        if ("api-version" !== o2.prop)
          switch (o2.in) {
            case "path":
              n2.parametersPath.push(o2), n2.parameters.push(o2), n2.imports.push(...o2.imports);
              break;
            case "query":
              n2.parametersQuery.push(o2), n2.parameters.push(o2), n2.imports.push(...o2.imports);
              break;
            case "header":
              n2.parametersHeader.push(o2), n2.parameters.push(o2), n2.imports.push(...o2.imports);
              break;
            case "formData":
              n2.parametersForm.push(o2), n2.parameters.push(o2), n2.imports.push(...o2.imports);
              break;
            case "body":
              n2.parametersBody = o2, n2.parameters.push(o2), n2.imports.push(...o2.imports);
          }
      }), n2;
    };
    var j = (e2, t2, n2) => {
      var r2;
      const o2 = { in: "response", name: "", code: n2, description: t2.description || null, export: "generic", type: "any", base: "any", template: null, link: null, isDefinition: false, isReadOnly: false, isRequired: false, isNullable: false, imports: [], enum: [], enums: [], properties: [] };
      let a2 = t2.schema;
      if (a2) {
        if ((null === (r2 = a2.$ref) || void 0 === r2 ? void 0 : r2.startsWith("#/responses/")) && (a2 = O(e2, a2)), a2.$ref) {
          const e3 = v(a2.$ref);
          return o2.export = "reference", o2.type = e3.type, o2.base = e3.base, o2.template = e3.template, o2.imports.push(...e3.imports), o2;
        }
        {
          const t3 = k(e2, a2);
          return o2.export = t3.export, o2.type = t3.type, o2.base = t3.base, o2.template = t3.template, o2.link = t3.link, o2.isReadOnly = t3.isReadOnly, o2.isRequired = t3.isRequired, o2.isNullable = t3.isNullable, o2.format = t3.format, o2.maximum = t3.maximum, o2.exclusiveMaximum = t3.exclusiveMaximum, o2.minimum = t3.minimum, o2.exclusiveMinimum = t3.exclusiveMinimum, o2.multipleOf = t3.multipleOf, o2.maxLength = t3.maxLength, o2.minLength = t3.minLength, o2.maxItems = t3.maxItems, o2.minItems = t3.minItems, o2.uniqueItems = t3.uniqueItems, o2.maxProperties = t3.maxProperties, o2.minProperties = t3.minProperties, o2.pattern = p(t3.pattern), o2.imports.push(...t3.imports), o2.enum.push(...t3.enum), o2.enums.push(...t3.enums), o2.properties.push(...t3.properties), o2;
        }
      }
      if (t2.headers) {
        for (const e3 in t2.headers)
          if (t2.headers.hasOwnProperty(e3))
            return o2.in = "header", o2.name = e3, o2.type = "string", o2.base = "string", o2;
      }
      return o2;
    };
    var H = (e2) => {
      if ("default" === e2)
        return 200;
      if (/[0-9]+/g.test(e2)) {
        const t2 = parseInt(e2);
        if (Number.isInteger(t2))
          return Math.abs(t2);
      }
      return null;
    };
    var E = (e2, t2) => {
      const n2 = e2.type === t2.type && e2.base === t2.base && e2.template === t2.template;
      return n2 && e2.link && t2.link ? E(e2.link, t2.link) : n2;
    };
    var D = (e2, t2) => {
      const n2 = e2.isRequired && void 0 === e2.default, r2 = t2.isRequired && void 0 === t2.default;
      return n2 && !r2 ? -1 : r2 && !n2 ? 1 : 0;
    };
    var T = (e2, t2, n2, r2, o2, a2) => {
      const l2 = ((e3) => {
        const t3 = e3.replace(/^[^a-zA-Z]+/g, "").replace(/[^\w\-]+/g, "-").trim();
        return i.default(t3, { pascalCase: true });
      })(r2), s2 = ((e3, t3, n3) => {
        if (n3)
          return i.default(n3.replace(/^[^a-zA-Z]+/g, "").replace(/[^\w\-]+/g, "-").trim());
        const r3 = e3.replace(/[^/]*?{api-version}.*?\//g, "").replace(/{(.*?)}/g, "").replace(/\//g, "-");
        return i.default(`${t3}-${r3}`);
      })(t2, n2, o2.operationId), u2 = { service: l2, name: s2, summary: o2.summary || null, description: o2.description || null, deprecated: true === o2.deprecated, method: n2.toUpperCase(), path: t2, parameters: [...a2.parameters], parametersPath: [...a2.parametersPath], parametersQuery: [...a2.parametersQuery], parametersForm: [...a2.parametersForm], parametersHeader: [...a2.parametersHeader], parametersCookie: [...a2.parametersCookie], parametersBody: a2.parametersBody, imports: [], errors: [], results: [], responseHeader: null };
      if (o2.parameters) {
        const t3 = A(e2, o2.parameters);
        u2.imports.push(...t3.imports), u2.parameters.push(...t3.parameters), u2.parametersPath.push(...t3.parametersPath), u2.parametersQuery.push(...t3.parametersQuery), u2.parametersForm.push(...t3.parametersForm), u2.parametersHeader.push(...t3.parametersHeader), u2.parametersCookie.push(...t3.parametersCookie), u2.parametersBody = t3.parametersBody;
      }
      if (o2.responses) {
        const t3 = ((e3, t4) => {
          const n4 = [];
          for (const r3 in t4)
            if (t4.hasOwnProperty(r3)) {
              const o3 = t4[r3], a3 = O(e3, o3), l3 = H(r3);
              if (l3) {
                const t5 = j(e3, a3, l3);
                n4.push(t5);
              }
            }
          return n4.sort((e4, t5) => e4.code < t5.code ? -1 : e4.code > t5.code ? 1 : 0);
        })(e2, o2.responses), n3 = ((e3) => {
          const t4 = [];
          return e3.forEach((e4) => {
            const { code: n4 } = e4;
            n4 && 204 !== n4 && n4 >= 200 && n4 < 300 && t4.push(e4);
          }), t4.length || t4.push({ in: "response", name: "", code: 200, description: "", export: "generic", type: "void", base: "void", template: null, link: null, isDefinition: false, isReadOnly: false, isRequired: false, isNullable: false, imports: [], enum: [], enums: [], properties: [] }), t4.filter((e4, t5, n4) => n4.findIndex((t6) => E(t6, e4)) === t5);
        })(t3);
        u2.errors = ((e3) => e3.filter((e4) => e4.code >= 300 && e4.description).map((e4) => ({ code: e4.code, description: e4.description })))(t3), u2.responseHeader = ((e3) => {
          const t4 = e3.find((e4) => "header" === e4.in);
          return t4 ? t4.name : null;
        })(n3), n3.forEach((e3) => {
          u2.results.push(e3), u2.imports.push(...e3.imports);
        });
      }
      return u2.parameters = u2.parameters.sort(D), u2;
    };
    var I = (e2) => {
      const t2 = ((e3 = "1.0") => String(e3).replace(/^v/gi, ""))(e2.info.version), n2 = ((e3) => {
        var t3;
        const n3 = (null === (t3 = e3.schemes) || void 0 === t3 ? void 0 : t3[0]) || "http", r3 = e3.host, o3 = e3.basePath || "";
        return (r3 ? `${n3}://${r3}${o3}` : o3).replace(/\/$/g, "");
      })(e2), r2 = ((e3) => {
        const t3 = [];
        for (const n3 in e3.definitions)
          if (e3.definitions.hasOwnProperty(n3)) {
            const r3 = e3.definitions[n3], o3 = v(n3), a2 = k(e3, r3, true, o3.base);
            t3.push(a2);
          }
        return t3;
      })(e2), o2 = ((e3) => {
        var t3;
        const n3 = /* @__PURE__ */ new Map();
        for (const r3 in e3.paths)
          if (e3.paths.hasOwnProperty(r3)) {
            const o3 = e3.paths[r3], a2 = A(e3, o3.parameters || []);
            for (const l2 in o3)
              if (o3.hasOwnProperty(l2))
                switch (l2) {
                  case "get":
                  case "put":
                  case "post":
                  case "delete":
                  case "options":
                  case "head":
                  case "patch":
                    const s2 = o3[l2];
                    ((null === (t3 = s2.tags) || void 0 === t3 ? void 0 : t3.length) ? s2.tags.filter(R) : ["Default"]).forEach((t4) => {
                      const o4 = T(e3, r3, l2, t4, s2, a2), i2 = n3.get(o4.service) || { name: o4.service, operations: [], imports: [] };
                      i2.operations.push(o4), i2.imports.push(...o4.imports), n3.set(o4.service, i2);
                    });
                }
          }
        return Array.from(n3.values());
      })(e2);
      return { version: t2, server: n2, models: r2, services: o2 };
    };
    var S = (e2) => e2.trim().replace(/^#\/components\/schemas\//, "").replace(/^#\/components\/responses\//, "").replace(/^#\/components\/parameters\//, "").replace(/^#\/components\/examples\//, "").replace(/^#\/components\/requestBodies\//, "").replace(/^#\/components\/headers\//, "").replace(/^#\/components\/securitySchemes\//, "").replace(/^#\/components\/links\//, "").replace(/^#\/components\/callbacks\//, "");
    var _ = (e2, t2) => {
      if (e2.mapping) {
        const n2 = ((e3) => {
          const t3 = {};
          for (const n3 in e3)
            t3[e3[n3]] = n3;
          return t3;
        })(e2.mapping), r2 = Object.keys(n2).find((e3) => S(e3) == t2.name);
        if (r2 && n2[r2])
          return n2[r2];
      }
      return t2.name;
    };
    var N = (e2) => {
      if (e2 || "" === e2) {
        if (!/^[a-zA-Z_$][\w$]+$/g.test(e2))
          return `'${e2}'`;
      }
      return e2;
    };
    var B = (e2) => null != e2 && "" !== e2;
    var $ = /* @__PURE__ */ new Map([["file", "binary"], ["any", "any"], ["object", "any"], ["array", "any[]"], ["boolean", "boolean"], ["byte", "number"], ["int", "number"], ["integer", "number"], ["float", "number"], ["double", "number"], ["short", "number"], ["long", "number"], ["number", "number"], ["char", "string"], ["date", "string"], ["date-time", "string"], ["password", "string"], ["string", "string"], ["void", "void"], ["null", "null"]]);
    var M = (e2, t2) => "binary" === t2 ? "binary" : $.get(e2);
    var L = (e2) => e2.replace(/^[^a-zA-Z_$]+/g, "").replace(/[^\w$]+/g, "_");
    var F = (e2 = "any", t2) => {
      const n2 = { type: "any", base: "any", template: null, imports: [], isNullable: false };
      if (Array.isArray(e2)) {
        const r3 = e2.filter((e3) => "null" !== e3).map((e3) => M(e3, t2)).filter(B).join(" | ");
        return n2.type = r3, n2.base = r3, n2.isNullable = e2.includes("null"), n2;
      }
      const r2 = M(e2, t2);
      if (r2)
        return n2.type = r2, n2.base = r2, n2;
      const o2 = decodeURIComponent(S(e2));
      if (/\[.*\]$/g.test(o2)) {
        const e3 = o2.match(/(.*?)\[(.*)\]$/);
        if (null == e3 ? void 0 : e3.length) {
          const t3 = F(L(e3[1])), r3 = F(L(e3[2]));
          return "any[]" === t3.type ? (n2.type = `${r3.type}[]`, n2.base = `${r3.type}`, t3.imports = []) : r3.type ? (n2.type = `${t3.type}<${r3.type}>`, n2.base = t3.type, n2.template = r3.type) : (n2.type = t3.type, n2.base = t3.type, n2.template = t3.type), n2.imports.push(...t3.imports), n2.imports.push(...r3.imports), n2;
        }
      }
      if (o2) {
        const e3 = L(o2);
        return n2.type = e3, n2.base = e3, n2.imports.push(e3), n2;
      }
      return n2;
    };
    var W = (e2, t2, n2, r2) => {
      var o2;
      const a2 = [], l2 = ((e3, t3) => {
        var n3;
        if (e3.components && t3) {
          for (const r3 in e3.components.schemas)
            if (e3.components.schemas.hasOwnProperty(r3)) {
              const o3 = e3.components.schemas[r3];
              if (o3.discriminator && (null === (n3 = o3.oneOf) || void 0 === n3 ? void 0 : n3.length) && o3.oneOf.some((e4) => e4.$ref && S(e4.$ref) == t3.name))
                return o3.discriminator;
            }
        }
      })(e2, r2);
      for (const s2 in t2.properties)
        if (t2.properties.hasOwnProperty(s2)) {
          const i2 = t2.properties[s2], u2 = !!(null === (o2 = t2.required) || void 0 === o2 ? void 0 : o2.includes(s2)), c2 = { name: N(s2), description: i2.description || null, deprecated: true === i2.deprecated, isDefinition: false, isReadOnly: true === i2.readOnly, isRequired: u2, format: i2.format, maximum: i2.maximum, exclusiveMaximum: i2.exclusiveMaximum, minimum: i2.minimum, exclusiveMinimum: i2.exclusiveMinimum, multipleOf: i2.multipleOf, maxLength: i2.maxLength, minLength: i2.minLength, maxItems: i2.maxItems, minItems: i2.minItems, uniqueItems: i2.uniqueItems, maxProperties: i2.maxProperties, minProperties: i2.minProperties, pattern: p(i2.pattern) };
          if (r2 && (null == l2 ? void 0 : l2.propertyName) == s2)
            a2.push(__spreadValues({ export: "reference", type: "string", base: `'${_(l2, r2)}'`, template: null, isNullable: true === i2.nullable, link: null, imports: [], enum: [], enums: [], properties: [] }, c2));
          else if (i2.$ref) {
            const e3 = F(i2.$ref);
            a2.push(__spreadValues({ export: "reference", type: e3.type, base: e3.base, template: e3.template, link: null, isNullable: e3.isNullable || true === i2.nullable, imports: e3.imports, enum: [], enums: [], properties: [] }, c2));
          } else {
            const t3 = n2(e2, i2);
            a2.push(__spreadValues({ export: t3.export, type: t3.type, base: t3.base, template: t3.template, link: t3.link, isNullable: t3.isNullable || true === i2.nullable, imports: t3.imports, enum: t3.enum, enums: t3.enums, properties: t3.properties }, c2));
          }
        }
      return a2;
    };
    var V = /~1/g;
    var U = /~0/g;
    var Q = (e2, t2) => {
      if (t2.$ref) {
        const n2 = t2.$ref.replace(/^#/g, "").split("/").filter((e3) => e3);
        let r2 = e2;
        return n2.forEach((e3) => {
          const n3 = decodeURIComponent(e3.replace(V, "/").replace(U, "~"));
          if (!r2.hasOwnProperty(n3))
            throw new Error(`Could not find reference: "${t2.$ref}"`);
          r2 = r2[n3];
        }), r2;
      }
      return t2;
    };
    var z = (e2, t2, n2, r2, o2) => {
      const a2 = { type: r2, imports: [], enums: [], properties: [] }, l2 = [];
      if (n2.map((t3) => o2(e2, t3)).filter((e3) => {
        const t3 = e3.properties.length, n3 = e3.enums.length, r3 = "any" === e3.type, o3 = "dictionary" === e3.export;
        return !(r3 && !t3 && !n3) || o3;
      }).forEach((e3) => {
        a2.imports.push(...e3.imports), a2.enums.push(...e3.enums), a2.properties.push(e3);
      }), t2.required) {
        const r3 = ((e3, t3, n3, r4) => n3.reduce((t4, n4) => {
          if (n4.$ref) {
            const o3 = Q(e3, n4);
            return [...t4, ...r4(e3, o3).properties];
          }
          return [...t4, ...r4(e3, n4).properties];
        }, []).filter((e4) => !e4.isRequired && t3.includes(e4.name)).map((e4) => __spreadProps(__spreadValues({}, e4), { isRequired: true })))(e2, t2.required, n2, o2);
        r3.forEach((e3) => {
          a2.imports.push(...e3.imports), a2.enums.push(...e3.enums);
        }), l2.push(...r3);
      }
      if (t2.properties) {
        const n3 = W(e2, t2, o2);
        n3.forEach((e3) => {
          a2.imports.push(...e3.imports), a2.enums.push(...e3.enums), "enum" === e3.export && a2.enums.push(e3);
        }), l2.push(...n3);
      }
      return l2.length && a2.properties.push({ name: "properties", export: "interface", type: "any", base: "any", template: null, link: null, description: "", isDefinition: false, isReadOnly: false, isNullable: false, isRequired: false, imports: [], enum: [], enums: [], properties: l2 }), a2;
    };
    var J = (e2, t2) => {
      var n2;
      if (void 0 === e2.default)
        return;
      if (null === e2.default)
        return "null";
      switch (e2.type || typeof e2.default) {
        case "int":
        case "integer":
        case "number":
          return "enum" === (null == t2 ? void 0 : t2.export) && (null === (n2 = t2.enum) || void 0 === n2 ? void 0 : n2[e2.default]) ? t2.enum[e2.default].value : e2.default;
        case "boolean":
          return JSON.stringify(e2.default);
        case "string":
          return `'${e2.default}'`;
        case "object":
          try {
            return JSON.stringify(e2.default, null, 4);
          } catch (e3) {
          }
      }
    };
    var G = (e2, t2, n2 = false, r2 = "") => {
      var o2, a2, l2;
      const s2 = { name: r2, export: "interface", type: "any", base: "any", template: null, link: null, description: t2.description || null, deprecated: true === t2.deprecated, isDefinition: n2, isReadOnly: true === t2.readOnly, isNullable: true === t2.nullable, isRequired: false, format: t2.format, maximum: t2.maximum, exclusiveMaximum: t2.exclusiveMaximum, minimum: t2.minimum, exclusiveMinimum: t2.exclusiveMinimum, multipleOf: t2.multipleOf, maxLength: t2.maxLength, minLength: t2.minLength, maxItems: t2.maxItems, minItems: t2.minItems, uniqueItems: t2.uniqueItems, maxProperties: t2.maxProperties, minProperties: t2.minProperties, pattern: p(t2.pattern), imports: [], enum: [], enums: [], properties: [] };
      if (t2.$ref) {
        const e3 = F(t2.$ref);
        return s2.export = "reference", s2.type = e3.type, s2.base = e3.base, s2.template = e3.template, s2.imports.push(...e3.imports), s2.default = J(t2, s2), s2;
      }
      if (t2.enum && "boolean" !== t2.type) {
        const e3 = (i2 = t2.enum, Array.isArray(i2) ? i2.filter((e4, t3, n4) => n4.indexOf(e4) === t3).filter((e4) => "number" == typeof e4 || "string" == typeof e4).map((e4) => "number" == typeof e4 ? { name: `'_${e4}'`, value: String(e4), type: "number", description: null } : { name: String(e4).replace(/\W+/g, "_").replace(/^(\d+)/g, "_$1").replace(/([a-z])([A-Z]+)/g, "$1_$2").toUpperCase(), value: `'${e4.replace(/'/g, "\\'")}'`, type: "string", description: null }) : []), n3 = ((e4, t3) => {
          var n4, r3;
          const o3 = null === (n4 = t3["x-enum-varnames"]) || void 0 === n4 ? void 0 : n4.filter(c), a3 = null === (r3 = t3["x-enum-descriptions"]) || void 0 === r3 ? void 0 : r3.filter(c);
          return e4.map((e5, t4) => ({ name: (null == o3 ? void 0 : o3[t4]) || e5.name, description: (null == a3 ? void 0 : a3[t4]) || e5.description, value: e5.value, type: e5.type }));
        })(e3, t2);
        if (n3.length)
          return s2.export = "enum", s2.type = "string", s2.base = "string", s2.enum.push(...n3), s2.default = J(t2, s2), s2;
      }
      var i2;
      if ("array" === t2.type && t2.items) {
        if (t2.items.$ref) {
          const e3 = F(t2.items.$ref);
          return s2.export = "array", s2.type = e3.type, s2.base = e3.base, s2.template = e3.template, s2.imports.push(...e3.imports), s2.default = J(t2, s2), s2;
        }
        {
          const n3 = G(e2, t2.items);
          return s2.export = "array", s2.type = n3.type, s2.base = n3.base, s2.template = n3.template, s2.link = n3, s2.imports.push(...n3.imports), s2.default = J(t2, s2), s2;
        }
      }
      if ("object" === t2.type && "object" == typeof t2.additionalProperties) {
        if (t2.additionalProperties.$ref) {
          const e3 = F(t2.additionalProperties.$ref);
          return s2.export = "dictionary", s2.type = e3.type, s2.base = e3.base, s2.template = e3.template, s2.imports.push(...e3.imports), s2.default = J(t2, s2), s2;
        }
        {
          const n3 = G(e2, t2.additionalProperties);
          return s2.export = "dictionary", s2.type = n3.type, s2.base = n3.base, s2.template = n3.template, s2.link = n3, s2.imports.push(...n3.imports), s2.default = J(t2, s2), s2;
        }
      }
      if (null === (o2 = t2.oneOf) || void 0 === o2 ? void 0 : o2.length) {
        const n3 = z(e2, t2, t2.oneOf, "one-of", G);
        return s2.export = n3.type, s2.imports.push(...n3.imports), s2.properties.push(...n3.properties), s2.enums.push(...n3.enums), s2;
      }
      if (null === (a2 = t2.anyOf) || void 0 === a2 ? void 0 : a2.length) {
        const n3 = z(e2, t2, t2.anyOf, "any-of", G);
        return s2.export = n3.type, s2.imports.push(...n3.imports), s2.properties.push(...n3.properties), s2.enums.push(...n3.enums), s2;
      }
      if (null === (l2 = t2.allOf) || void 0 === l2 ? void 0 : l2.length) {
        const n3 = z(e2, t2, t2.allOf, "all-of", G);
        return s2.export = n3.type, s2.imports.push(...n3.imports), s2.properties.push(...n3.properties), s2.enums.push(...n3.enums), s2;
      }
      if ("object" === t2.type) {
        if (s2.export = "interface", s2.type = "any", s2.base = "any", s2.default = J(t2, s2), t2.properties) {
          W(e2, t2, G, s2).forEach((e3) => {
            s2.imports.push(...e3.imports), s2.enums.push(...e3.enums), s2.properties.push(e3), "enum" === e3.export && s2.enums.push(e3);
          });
        }
        return s2;
      }
      if (t2.type) {
        const e3 = F(t2.type, t2.format);
        return s2.export = "generic", s2.type = e3.type, s2.base = e3.base, s2.template = e3.template, s2.isNullable = e3.isNullable || s2.isNullable, s2.imports.push(...e3.imports), s2.default = J(t2, s2), s2;
      }
      return s2;
    };
    var Z = /^(arguments|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|eval|export|extends|false|finally|for|function|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)$/g;
    var K = (e2) => {
      const t2 = e2.replace(/^[^a-zA-Z]+/g, "").replace(/[^\w\-]+/g, "-").trim();
      return i.default(t2).replace(Z, "_$1");
    };
    var X = (e2, t2) => {
      const n2 = { imports: [], parameters: [], parametersPath: [], parametersQuery: [], parametersForm: [], parametersCookie: [], parametersHeader: [], parametersBody: null };
      return t2.forEach((t3) => {
        const r2 = Q(e2, t3), o2 = ((e3, t4) => {
          var n3;
          const r3 = { in: t4.in, prop: t4.name, export: "interface", name: K(t4.name), type: "any", base: "any", template: null, link: null, description: t4.description || null, deprecated: true === t4.deprecated, isDefinition: false, isReadOnly: false, isRequired: true === t4.required, isNullable: true === t4.nullable, imports: [], enum: [], enums: [], properties: [], mediaType: null };
          if (t4.$ref) {
            const e4 = F(t4.$ref);
            return r3.export = "reference", r3.type = e4.type, r3.base = e4.base, r3.template = e4.template, r3.imports.push(...e4.imports), r3;
          }
          let o3 = t4.schema;
          if (o3) {
            if ((null === (n3 = o3.$ref) || void 0 === n3 ? void 0 : n3.startsWith("#/components/parameters/")) && (o3 = Q(e3, o3)), o3.$ref) {
              const e4 = F(o3.$ref);
              return r3.export = "reference", r3.type = e4.type, r3.base = e4.base, r3.template = e4.template, r3.imports.push(...e4.imports), r3.default = J(o3), r3;
            }
            {
              const t5 = G(e3, o3);
              return r3.export = t5.export, r3.type = t5.type, r3.base = t5.base, r3.template = t5.template, r3.link = t5.link, r3.isReadOnly = t5.isReadOnly, r3.isRequired = r3.isRequired || t5.isRequired, r3.isNullable = r3.isNullable || t5.isNullable, r3.format = t5.format, r3.maximum = t5.maximum, r3.exclusiveMaximum = t5.exclusiveMaximum, r3.minimum = t5.minimum, r3.exclusiveMinimum = t5.exclusiveMinimum, r3.multipleOf = t5.multipleOf, r3.maxLength = t5.maxLength, r3.minLength = t5.minLength, r3.maxItems = t5.maxItems, r3.minItems = t5.minItems, r3.uniqueItems = t5.uniqueItems, r3.maxProperties = t5.maxProperties, r3.minProperties = t5.minProperties, r3.pattern = p(t5.pattern), r3.default = t5.default, r3.imports.push(...t5.imports), r3.enum.push(...t5.enum), r3.enums.push(...t5.enums), r3.properties.push(...t5.properties), r3;
            }
          }
          return r3;
        })(e2, r2);
        if ("api-version" !== o2.prop)
          switch (r2.in) {
            case "path":
              n2.parametersPath.push(o2), n2.parameters.push(o2), n2.imports.push(...o2.imports);
              break;
            case "query":
              n2.parametersQuery.push(o2), n2.parameters.push(o2), n2.imports.push(...o2.imports);
              break;
            case "formData":
              n2.parametersForm.push(o2), n2.parameters.push(o2), n2.imports.push(...o2.imports);
              break;
            case "cookie":
              n2.parametersCookie.push(o2), n2.parameters.push(o2), n2.imports.push(...o2.imports);
              break;
            case "header":
              n2.parametersHeader.push(o2), n2.parameters.push(o2), n2.imports.push(...o2.imports);
          }
      }), n2;
    };
    var Y = ["application/json-patch+json", "application/json", "application/x-www-form-urlencoded", "text/json", "text/plain", "multipart/form-data", "multipart/mixed", "multipart/related", "multipart/batch"];
    var ee = (e2, t2) => {
      const n2 = Object.keys(t2).filter((e3) => {
        const t3 = e3.split(";")[0].trim();
        return Y.includes(t3);
      }).find((e3) => {
        var n3;
        return B(null === (n3 = t2[e3]) || void 0 === n3 ? void 0 : n3.schema);
      });
      if (n2)
        return { mediaType: n2, schema: t2[n2].schema };
      const r2 = Object.keys(t2).find((e3) => {
        var n3;
        return B(null === (n3 = t2[e3]) || void 0 === n3 ? void 0 : n3.schema);
      });
      return r2 ? { mediaType: r2, schema: t2[r2].schema } : null;
    };
    var te = (e2, t2, n2) => {
      var r2;
      const o2 = { in: "response", name: "", code: n2, description: t2.description || null, export: "generic", type: "any", base: "any", template: null, link: null, isDefinition: false, isReadOnly: false, isRequired: false, isNullable: false, imports: [], enum: [], enums: [], properties: [] };
      if (t2.content) {
        const n3 = ee(0, t2.content);
        if (n3) {
          if ((null === (r2 = n3.schema.$ref) || void 0 === r2 ? void 0 : r2.startsWith("#/components/responses/")) && (n3.schema = Q(e2, n3.schema)), n3.schema.$ref) {
            const e3 = F(n3.schema.$ref);
            return o2.export = "reference", o2.type = e3.type, o2.base = e3.base, o2.template = e3.template, o2.imports.push(...e3.imports), o2;
          }
          {
            const t3 = G(e2, n3.schema);
            return o2.export = t3.export, o2.type = t3.type, o2.base = t3.base, o2.template = t3.template, o2.link = t3.link, o2.isReadOnly = t3.isReadOnly, o2.isRequired = t3.isRequired, o2.isNullable = t3.isNullable, o2.format = t3.format, o2.maximum = t3.maximum, o2.exclusiveMaximum = t3.exclusiveMaximum, o2.minimum = t3.minimum, o2.exclusiveMinimum = t3.exclusiveMinimum, o2.multipleOf = t3.multipleOf, o2.maxLength = t3.maxLength, o2.minLength = t3.minLength, o2.maxItems = t3.maxItems, o2.minItems = t3.minItems, o2.uniqueItems = t3.uniqueItems, o2.maxProperties = t3.maxProperties, o2.minProperties = t3.minProperties, o2.pattern = p(t3.pattern), o2.imports.push(...t3.imports), o2.enum.push(...t3.enum), o2.enums.push(...t3.enums), o2.properties.push(...t3.properties), o2;
          }
        }
      }
      if (t2.headers) {
        for (const e3 in t2.headers)
          if (t2.headers.hasOwnProperty(e3))
            return o2.in = "header", o2.name = e3, o2.type = "string", o2.base = "string", o2;
      }
      return o2;
    };
    var ne = (e2) => {
      if ("default" === e2)
        return 200;
      if (/[0-9]+/g.test(e2)) {
        const t2 = parseInt(e2);
        if (Number.isInteger(t2))
          return Math.abs(t2);
      }
      return null;
    };
    var re = (e2, t2) => {
      const n2 = e2.type === t2.type && e2.base === t2.base && e2.template === t2.template;
      return n2 && e2.link && t2.link ? re(e2.link, t2.link) : n2;
    };
    var oe = (e2, t2) => {
      const n2 = e2.isRequired && void 0 === e2.default, r2 = t2.isRequired && void 0 === t2.default;
      return n2 && !r2 ? -1 : r2 && !n2 ? 1 : 0;
    };
    var ae = (e2, t2, n2, r2, o2, a2) => {
      const l2 = ((e3) => {
        const t3 = e3.replace(/^[^a-zA-Z]+/g, "").replace(/[^\w\-]+/g, "-").trim();
        return i.default(t3, { pascalCase: true });
      })(r2), s2 = ((e3, t3, n3) => {
        if (n3)
          return i.default(n3.replace(/^[^a-zA-Z]+/g, "").replace(/[^\w\-]+/g, "-").trim());
        const r3 = e3.replace(/[^/]*?{api-version}.*?\//g, "").replace(/{(.*?)}/g, "").replace(/\//g, "-");
        return i.default(`${t3}-${r3}`);
      })(t2, n2, o2.operationId), u2 = { service: l2, name: s2, summary: o2.summary || null, description: o2.description || null, deprecated: true === o2.deprecated, method: n2.toUpperCase(), path: t2, parameters: [...a2.parameters], parametersPath: [...a2.parametersPath], parametersQuery: [...a2.parametersQuery], parametersForm: [...a2.parametersForm], parametersHeader: [...a2.parametersHeader], parametersCookie: [...a2.parametersCookie], parametersBody: a2.parametersBody, imports: [], errors: [], results: [], responseHeader: null };
      if (o2.parameters) {
        const t3 = X(e2, o2.parameters);
        u2.imports.push(...t3.imports), u2.parameters.push(...t3.parameters), u2.parametersPath.push(...t3.parametersPath), u2.parametersQuery.push(...t3.parametersQuery), u2.parametersForm.push(...t3.parametersForm), u2.parametersHeader.push(...t3.parametersHeader), u2.parametersCookie.push(...t3.parametersCookie), u2.parametersBody = t3.parametersBody;
      }
      if (o2.requestBody) {
        const t3 = ((e3, t4) => {
          const n3 = { in: "body", export: "interface", prop: "requestBody", name: "requestBody", type: "any", base: "any", template: null, link: null, description: t4.description || null, default: void 0, isDefinition: false, isReadOnly: false, isRequired: true === t4.required, isNullable: true === t4.nullable, imports: [], enum: [], enums: [], properties: [], mediaType: null };
          if (t4.content) {
            const r3 = ee(0, t4.content);
            if (r3) {
              switch (n3.mediaType = r3.mediaType, n3.mediaType) {
                case "application/x-www-form-urlencoded":
                case "multipart/form-data":
                  n3.in = "formData", n3.name = "formData", n3.prop = "formData";
              }
              if (r3.schema.$ref) {
                const e4 = F(r3.schema.$ref);
                return n3.export = "reference", n3.type = e4.type, n3.base = e4.base, n3.template = e4.template, n3.imports.push(...e4.imports), n3;
              }
              {
                const t5 = G(e3, r3.schema);
                return n3.export = t5.export, n3.type = t5.type, n3.base = t5.base, n3.template = t5.template, n3.link = t5.link, n3.isReadOnly = t5.isReadOnly, n3.isRequired = n3.isRequired || t5.isRequired, n3.isNullable = n3.isNullable || t5.isNullable, n3.format = t5.format, n3.maximum = t5.maximum, n3.exclusiveMaximum = t5.exclusiveMaximum, n3.minimum = t5.minimum, n3.exclusiveMinimum = t5.exclusiveMinimum, n3.multipleOf = t5.multipleOf, n3.maxLength = t5.maxLength, n3.minLength = t5.minLength, n3.maxItems = t5.maxItems, n3.minItems = t5.minItems, n3.uniqueItems = t5.uniqueItems, n3.maxProperties = t5.maxProperties, n3.minProperties = t5.minProperties, n3.pattern = p(t5.pattern), n3.imports.push(...t5.imports), n3.enum.push(...t5.enum), n3.enums.push(...t5.enums), n3.properties.push(...t5.properties), n3;
              }
            }
          }
          return n3;
        })(e2, Q(e2, o2.requestBody));
        u2.imports.push(...t3.imports), u2.parameters.push(t3), u2.parametersBody = t3;
      }
      if (o2.responses) {
        const t3 = ((e3, t4) => {
          const n4 = [];
          for (const r3 in t4)
            if (t4.hasOwnProperty(r3)) {
              const o3 = t4[r3], a3 = Q(e3, o3), l3 = ne(r3);
              if (l3) {
                const t5 = te(e3, a3, l3);
                n4.push(t5);
              }
            }
          return n4.sort((e4, t5) => e4.code < t5.code ? -1 : e4.code > t5.code ? 1 : 0);
        })(e2, o2.responses), n3 = ((e3) => {
          const t4 = [];
          return e3.forEach((e4) => {
            const { code: n4 } = e4;
            n4 && 204 !== n4 && n4 >= 200 && n4 < 300 && t4.push(e4);
          }), t4.length || t4.push({ in: "response", name: "", code: 200, description: "", export: "generic", type: "void", base: "void", template: null, link: null, isDefinition: false, isReadOnly: false, isRequired: false, isNullable: false, imports: [], enum: [], enums: [], properties: [] }), t4.filter((e4, t5, n4) => n4.findIndex((t6) => re(t6, e4)) === t5);
        })(t3);
        u2.errors = ((e3) => e3.filter((e4) => e4.code >= 300 && e4.description).map((e4) => ({ code: e4.code, description: e4.description })))(t3), u2.responseHeader = ((e3) => {
          const t4 = e3.find((e4) => "header" === e4.in);
          return t4 ? t4.name : null;
        })(n3), n3.forEach((e3) => {
          u2.results.push(e3), u2.imports.push(...e3.imports);
        });
      }
      return u2.parameters = u2.parameters.sort(oe), u2;
    };
    var le = (e2) => {
      const t2 = ((e3 = "1.0") => String(e3).replace(/^v/gi, ""))(e2.info.version), n2 = ((e3) => {
        var t3;
        const n3 = null === (t3 = e3.servers) || void 0 === t3 ? void 0 : t3[0], r3 = (null == n3 ? void 0 : n3.variables) || {};
        let o3 = (null == n3 ? void 0 : n3.url) || "";
        for (const e4 in r3)
          r3.hasOwnProperty(e4) && (o3 = o3.replace(`{${e4}}`, r3[e4].default));
        return o3.replace(/\/$/g, "");
      })(e2), r2 = ((e3) => {
        const t3 = [];
        if (e3.components) {
          for (const n3 in e3.components.schemas)
            if (e3.components.schemas.hasOwnProperty(n3)) {
              const r3 = e3.components.schemas[n3], o3 = F(n3), a2 = G(e3, r3, true, o3.base);
              t3.push(a2);
            }
        }
        return t3;
      })(e2), o2 = ((e3) => {
        var t3;
        const n3 = /* @__PURE__ */ new Map();
        for (const r3 in e3.paths)
          if (e3.paths.hasOwnProperty(r3)) {
            const o3 = e3.paths[r3], a2 = X(e3, o3.parameters || []);
            for (const l2 in o3)
              if (o3.hasOwnProperty(l2))
                switch (l2) {
                  case "get":
                  case "put":
                  case "post":
                  case "delete":
                  case "options":
                  case "head":
                  case "patch":
                    const s2 = o3[l2];
                    ((null === (t3 = s2.tags) || void 0 === t3 ? void 0 : t3.length) ? s2.tags.filter(R) : ["Default"]).forEach((t4) => {
                      const o4 = ae(e3, r3, l2, t4, s2, a2), i2 = n3.get(o4.service) || { name: o4.service, operations: [], imports: [] };
                      i2.operations.push(o4), i2.imports.push(...o4.imports), n3.set(o4.service, i2);
                    });
                }
          }
        return Array.from(n3.values());
      })(e2);
      return { version: t2, server: n2, models: r2, services: o2 };
    };
    var se;
    !function(e2) {
      e2[e2.V2 = 2] = "V2", e2[e2.V3 = 3] = "V3";
    }(se || (se = {}));
    var ie = (e2) => e2.enum.filter((e3, t2, n2) => n2.findIndex((t3) => t3.name === e3.name) === t2);
    var ue = (e2) => e2.enums.filter((e3, t2, n2) => n2.findIndex((t3) => t3.name === e3.name) === t2);
    var pe = (e2, t2) => {
      const n2 = e2.toLowerCase(), r2 = t2.toLowerCase();
      return n2.localeCompare(r2, "en");
    };
    var ce = (e2) => e2.imports.filter(R).sort(pe).filter((t2) => e2.name !== t2);
    var me = (e2, t2) => {
      const n2 = [];
      return e2.map(t2).forEach((e3) => {
        n2.push(...e3);
      }), n2;
    };
    var de = (e2) => {
      const t2 = __spreadValues({}, e2);
      return t2.operations = ((e3) => {
        const t3 = /* @__PURE__ */ new Map();
        return e3.operations.map((e4) => {
          const n2 = __spreadValues({}, e4);
          n2.imports.push(...me(n2.parameters, (e5) => e5.imports)), n2.imports.push(...me(n2.results, (e5) => e5.imports));
          const r2 = n2.name, o2 = t3.get(r2) || 0;
          return o2 > 0 && (n2.name = `${r2}${o2}`), t3.set(r2, o2 + 1), n2;
        });
      })(t2), t2.operations.forEach((e3) => {
        t2.imports.push(...e3.imports);
      }), t2.imports = ((e3) => e3.imports.filter(R).sort(pe))(t2), t2;
    };
    var fe = (e2) => __spreadProps(__spreadValues({}, e2), { models: e2.models.map((e3) => ((e4) => __spreadProps(__spreadValues({}, e4), { imports: ce(e4), enums: ue(e4), enum: ie(e4) }))(e3)), services: e2.services.map((e3) => de(e3)) });
    var he = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    var ye = { exports: {} };
    var ve = {};
    var ge = { __esModule: true };
    ge.extend = ke, ge.indexOf = function(e2, t2) {
      for (var n2 = 0, r2 = e2.length; n2 < r2; n2++)
        if (e2[n2] === t2)
          return n2;
      return -1;
    }, ge.escapeExpression = function(e2) {
      if ("string" != typeof e2) {
        if (e2 && e2.toHTML)
          return e2.toHTML();
        if (null == e2)
          return "";
        if (!e2)
          return e2 + "";
        e2 = "" + e2;
      }
      if (!Oe.test(e2))
        return e2;
      return e2.replace(be, xe);
    }, ge.isEmpty = function(e2) {
      return !e2 && 0 !== e2 || !(!we(e2) || 0 !== e2.length);
    }, ge.createFrame = function(e2) {
      var t2 = ke({}, e2);
      return t2._parent = e2, t2;
    }, ge.blockParams = function(e2, t2) {
      return e2.path = t2, e2;
    }, ge.appendContextPath = function(e2, t2) {
      return (e2 ? e2 + "." : "") + t2;
    };
    var Pe = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;", "=": "&#x3D;" };
    var be = /[&<>"'`=]/g;
    var Oe = /[&<>"'`=]/;
    function xe(e2) {
      return Pe[e2];
    }
    function ke(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++)
        for (var n2 in arguments[t2])
          Object.prototype.hasOwnProperty.call(arguments[t2], n2) && (e2[n2] = arguments[t2][n2]);
      return e2;
    }
    var Re = Object.prototype.toString;
    ge.toString = Re;
    var Ce = function(e2) {
      return "function" == typeof e2;
    };
    Ce(/x/) && (ge.isFunction = Ce = function(e2) {
      return "function" == typeof e2 && "[object Function]" === Re.call(e2);
    }), ge.isFunction = Ce;
    var we = Array.isArray || function(e2) {
      return !(!e2 || "object" != typeof e2) && "[object Array]" === Re.call(e2);
    };
    ge.isArray = we;
    var qe = { exports: {} };
    !function(e2, t2) {
      t2.__esModule = true;
      var n2 = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
      function r2(e3, t3) {
        var o2 = t3 && t3.loc, a2 = void 0, l2 = void 0, s2 = void 0, i2 = void 0;
        o2 && (a2 = o2.start.line, l2 = o2.end.line, s2 = o2.start.column, i2 = o2.end.column, e3 += " - " + a2 + ":" + s2);
        for (var u2 = Error.prototype.constructor.call(this, e3), p2 = 0; p2 < n2.length; p2++)
          this[n2[p2]] = u2[n2[p2]];
        Error.captureStackTrace && Error.captureStackTrace(this, r2);
        try {
          o2 && (this.lineNumber = a2, this.endLineNumber = l2, Object.defineProperty ? (Object.defineProperty(this, "column", { value: s2, enumerable: true }), Object.defineProperty(this, "endColumn", { value: i2, enumerable: true })) : (this.column = s2, this.endColumn = i2));
        } catch (e4) {
        }
      }
      r2.prototype = new Error(), t2.default = r2, e2.exports = t2.default;
    }(qe, qe.exports);
    var Ae = {};
    var je = { exports: {} };
    !function(e2, t2) {
      t2.__esModule = true;
      var n2 = ge;
      t2.default = function(e3) {
        e3.registerHelper("blockHelperMissing", function(t3, r2) {
          var o2 = r2.inverse, a2 = r2.fn;
          if (true === t3)
            return a2(this);
          if (false === t3 || null == t3)
            return o2(this);
          if (n2.isArray(t3))
            return t3.length > 0 ? (r2.ids && (r2.ids = [r2.name]), e3.helpers.each(t3, r2)) : o2(this);
          if (r2.data && r2.ids) {
            var l2 = n2.createFrame(r2.data);
            l2.contextPath = n2.appendContextPath(r2.data.contextPath, r2.name), r2 = { data: l2 };
          }
          return a2(t3, r2);
        });
      }, e2.exports = t2.default;
    }(je, je.exports);
    var He = { exports: {} };
    !function(e2, t2) {
      t2.__esModule = true;
      var n2, r2 = ge, o2 = (n2 = qe.exports) && n2.__esModule ? n2 : { default: n2 };
      t2.default = function(e3) {
        e3.registerHelper("each", function(e4, t3) {
          if (!t3)
            throw new o2.default("Must pass iterator to #each");
          var n3, a2 = t3.fn, l2 = t3.inverse, s2 = 0, i2 = "", u2 = void 0, p2 = void 0;
          function c2(t4, n4, o3) {
            u2 && (u2.key = t4, u2.index = n4, u2.first = 0 === n4, u2.last = !!o3, p2 && (u2.contextPath = p2 + t4)), i2 += a2(e4[t4], { data: u2, blockParams: r2.blockParams([e4[t4], t4], [p2 + t4, null]) });
          }
          if (t3.data && t3.ids && (p2 = r2.appendContextPath(t3.data.contextPath, t3.ids[0]) + "."), r2.isFunction(e4) && (e4 = e4.call(this)), t3.data && (u2 = r2.createFrame(t3.data)), e4 && "object" == typeof e4)
            if (r2.isArray(e4))
              for (var m2 = e4.length; s2 < m2; s2++)
                s2 in e4 && c2(s2, s2, s2 === e4.length - 1);
            else if (he.Symbol && e4[he.Symbol.iterator]) {
              for (var d2 = [], f2 = e4[he.Symbol.iterator](), h2 = f2.next(); !h2.done; h2 = f2.next())
                d2.push(h2.value);
              for (m2 = (e4 = d2).length; s2 < m2; s2++)
                c2(s2, s2, s2 === e4.length - 1);
            } else
              n3 = void 0, Object.keys(e4).forEach(function(e5) {
                void 0 !== n3 && c2(n3, s2 - 1), n3 = e5, s2++;
              }), void 0 !== n3 && c2(n3, s2 - 1, true);
          return 0 === s2 && (i2 = l2(this)), i2;
        });
      }, e2.exports = t2.default;
    }(He, He.exports);
    var Ee = { exports: {} };
    !function(e2, t2) {
      t2.__esModule = true;
      var n2, r2 = (n2 = qe.exports) && n2.__esModule ? n2 : { default: n2 };
      t2.default = function(e3) {
        e3.registerHelper("helperMissing", function() {
          if (1 !== arguments.length)
            throw new r2.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
        });
      }, e2.exports = t2.default;
    }(Ee, Ee.exports);
    var De = { exports: {} };
    !function(e2, t2) {
      t2.__esModule = true;
      var n2, r2 = ge, o2 = (n2 = qe.exports) && n2.__esModule ? n2 : { default: n2 };
      t2.default = function(e3) {
        e3.registerHelper("if", function(e4, t3) {
          if (2 != arguments.length)
            throw new o2.default("#if requires exactly one argument");
          return r2.isFunction(e4) && (e4 = e4.call(this)), !t3.hash.includeZero && !e4 || r2.isEmpty(e4) ? t3.inverse(this) : t3.fn(this);
        }), e3.registerHelper("unless", function(t3, n3) {
          if (2 != arguments.length)
            throw new o2.default("#unless requires exactly one argument");
          return e3.helpers.if.call(this, t3, { fn: n3.inverse, inverse: n3.fn, hash: n3.hash });
        });
      }, e2.exports = t2.default;
    }(De, De.exports);
    var Te = { exports: {} };
    !function(e2, t2) {
      t2.__esModule = true, t2.default = function(e3) {
        e3.registerHelper("log", function() {
          for (var t3 = [void 0], n2 = arguments[arguments.length - 1], r2 = 0; r2 < arguments.length - 1; r2++)
            t3.push(arguments[r2]);
          var o2 = 1;
          null != n2.hash.level ? o2 = n2.hash.level : n2.data && null != n2.data.level && (o2 = n2.data.level), t3[0] = o2, e3.log.apply(e3, t3);
        });
      }, e2.exports = t2.default;
    }(Te, Te.exports);
    var Ie = { exports: {} };
    !function(e2, t2) {
      t2.__esModule = true, t2.default = function(e3) {
        e3.registerHelper("lookup", function(e4, t3, n2) {
          return e4 ? n2.lookupProperty(e4, t3) : e4;
        });
      }, e2.exports = t2.default;
    }(Ie, Ie.exports);
    var Se = { exports: {} };
    function _e(e2) {
      return e2 && e2.__esModule ? e2 : { default: e2 };
    }
    !function(e2, t2) {
      t2.__esModule = true;
      var n2, r2 = ge, o2 = (n2 = qe.exports) && n2.__esModule ? n2 : { default: n2 };
      t2.default = function(e3) {
        e3.registerHelper("with", function(e4, t3) {
          if (2 != arguments.length)
            throw new o2.default("#with requires exactly one argument");
          r2.isFunction(e4) && (e4 = e4.call(this));
          var n3 = t3.fn;
          if (r2.isEmpty(e4))
            return t3.inverse(this);
          var a2 = t3.data;
          return t3.data && t3.ids && ((a2 = r2.createFrame(t3.data)).contextPath = r2.appendContextPath(t3.data.contextPath, t3.ids[0])), n3(e4, { data: a2, blockParams: r2.blockParams([e4], [a2 && a2.contextPath]) });
        });
      }, e2.exports = t2.default;
    }(Se, Se.exports), Ae.__esModule = true, Ae.registerDefaultHelpers = function(e2) {
      Ne.default(e2), Be.default(e2), $e.default(e2), Me.default(e2), Le.default(e2), Fe.default(e2), We.default(e2);
    }, Ae.moveHelperToHooks = function(e2, t2, n2) {
      e2.helpers[t2] && (e2.hooks[t2] = e2.helpers[t2], n2 || delete e2.helpers[t2]);
    };
    var Ne = _e(je.exports);
    var Be = _e(He.exports);
    var $e = _e(Ee.exports);
    var Me = _e(De.exports);
    var Le = _e(Te.exports);
    var Fe = _e(Ie.exports);
    var We = _e(Se.exports);
    var Ve = {};
    var Ue = { exports: {} };
    !function(e2, t2) {
      t2.__esModule = true;
      var n2 = ge;
      t2.default = function(e3) {
        e3.registerDecorator("inline", function(e4, t3, r2, o2) {
          var a2 = e4;
          return t3.partials || (t3.partials = {}, a2 = function(o3, a3) {
            var l2 = r2.partials;
            r2.partials = n2.extend({}, l2, t3.partials);
            var s2 = e4(o3, a3);
            return r2.partials = l2, s2;
          }), t3.partials[o2.args[0]] = o2.fn, a2;
        });
      }, e2.exports = t2.default;
    }(Ue, Ue.exports), Ve.__esModule = true, Ve.registerDefaultDecorators = function(e2) {
      ze.default(e2);
    };
    var Qe;
    var ze = (Qe = Ue.exports) && Qe.__esModule ? Qe : { default: Qe };
    var Je = { exports: {} };
    !function(e2, t2) {
      t2.__esModule = true;
      var n2 = ge, r2 = { methodMap: ["debug", "info", "warn", "error"], level: "info", lookupLevel: function(e3) {
        if ("string" == typeof e3) {
          var t3 = n2.indexOf(r2.methodMap, e3.toLowerCase());
          e3 = t3 >= 0 ? t3 : parseInt(e3, 10);
        }
        return e3;
      }, log: function(e3) {
        if (e3 = r2.lookupLevel(e3), "undefined" != typeof console && r2.lookupLevel(r2.level) <= e3) {
          var t3 = r2.methodMap[e3];
          console[t3] || (t3 = "log");
          for (var n3 = arguments.length, o2 = Array(n3 > 1 ? n3 - 1 : 0), a2 = 1; a2 < n3; a2++)
            o2[a2 - 1] = arguments[a2];
          console[t3].apply(console, o2);
        }
      } };
      t2.default = r2, e2.exports = t2.default;
    }(Je, Je.exports);
    var Ge = {};
    var Ze = { __esModule: true, createNewLookupObject: function() {
      for (var e2 = arguments.length, t2 = Array(e2), n2 = 0; n2 < e2; n2++)
        t2[n2] = arguments[n2];
      return Ke.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(t2));
    } };
    var Ke = ge;
    Ge.__esModule = true, Ge.createProtoAccessControl = function(e2) {
      var t2 = /* @__PURE__ */ Object.create(null);
      t2.constructor = false, t2.__defineGetter__ = false, t2.__defineSetter__ = false, t2.__lookupGetter__ = false;
      var n2 = /* @__PURE__ */ Object.create(null);
      return n2.__proto__ = false, { properties: { whitelist: Xe.createNewLookupObject(n2, e2.allowedProtoProperties), defaultValue: e2.allowProtoPropertiesByDefault }, methods: { whitelist: Xe.createNewLookupObject(t2, e2.allowedProtoMethods), defaultValue: e2.allowProtoMethodsByDefault } };
    }, Ge.resultIsAllowed = function(e2, t2, n2) {
      return tt("function" == typeof e2 ? t2.methods : t2.properties, n2);
    }, Ge.resetLoggedProperties = function() {
      Object.keys(et).forEach(function(e2) {
        delete et[e2];
      });
    };
    var Xe = Ze;
    var Ye = function(e2) {
      if (e2 && e2.__esModule)
        return e2;
      var t2 = {};
      if (null != e2)
        for (var n2 in e2)
          Object.prototype.hasOwnProperty.call(e2, n2) && (t2[n2] = e2[n2]);
      return t2.default = e2, t2;
    }(Je.exports);
    var et = /* @__PURE__ */ Object.create(null);
    function tt(e2, t2) {
      return void 0 !== e2.whitelist[t2] ? true === e2.whitelist[t2] : void 0 !== e2.defaultValue ? e2.defaultValue : (function(e3) {
        true !== et[e3] && (et[e3] = true, Ye.log("error", 'Handlebars: Access has been denied to resolve the property "' + e3 + '" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'));
      }(t2), false);
    }
    function nt(e2) {
      return e2 && e2.__esModule ? e2 : { default: e2 };
    }
    ve.__esModule = true, ve.HandlebarsEnvironment = ut;
    var rt = ge;
    var ot = nt(qe.exports);
    var at = Ae;
    var lt = Ve;
    var st = nt(Je.exports);
    var it = Ge;
    ve.VERSION = "4.7.7";
    ve.COMPILER_REVISION = 8;
    ve.LAST_COMPATIBLE_COMPILER_REVISION = 7;
    ve.REVISION_CHANGES = { 1: "<= 1.0.rc.2", 2: "== 1.0.0-rc.3", 3: "== 1.0.0-rc.4", 4: "== 1.x.x", 5: "== 2.0.0-alpha.x", 6: ">= 2.0.0-beta.1", 7: ">= 4.0.0 <4.3.0", 8: ">= 4.3.0" };
    function ut(e2, t2, n2) {
      this.helpers = e2 || {}, this.partials = t2 || {}, this.decorators = n2 || {}, at.registerDefaultHelpers(this), lt.registerDefaultDecorators(this);
    }
    ut.prototype = { constructor: ut, logger: st.default, log: st.default.log, registerHelper: function(e2, t2) {
      if ("[object Object]" === rt.toString.call(e2)) {
        if (t2)
          throw new ot.default("Arg not supported with multiple helpers");
        rt.extend(this.helpers, e2);
      } else
        this.helpers[e2] = t2;
    }, unregisterHelper: function(e2) {
      delete this.helpers[e2];
    }, registerPartial: function(e2, t2) {
      if ("[object Object]" === rt.toString.call(e2))
        rt.extend(this.partials, e2);
      else {
        if (void 0 === t2)
          throw new ot.default('Attempting to register a partial called "' + e2 + '" as undefined');
        this.partials[e2] = t2;
      }
    }, unregisterPartial: function(e2) {
      delete this.partials[e2];
    }, registerDecorator: function(e2, t2) {
      if ("[object Object]" === rt.toString.call(e2)) {
        if (t2)
          throw new ot.default("Arg not supported with multiple decorators");
        rt.extend(this.decorators, e2);
      } else
        this.decorators[e2] = t2;
    }, unregisterDecorator: function(e2) {
      delete this.decorators[e2];
    }, resetLoggedPropertyAccesses: function() {
      it.resetLoggedProperties();
    } };
    var pt = st.default.log;
    ve.log = pt, ve.createFrame = rt.createFrame, ve.logger = st.default;
    var ct = { exports: {} };
    !function(e2, t2) {
      function n2(e3) {
        this.string = e3;
      }
      t2.__esModule = true, n2.prototype.toString = n2.prototype.toHTML = function() {
        return "" + this.string;
      }, t2.default = n2, e2.exports = t2.default;
    }(ct, ct.exports);
    var mt = {};
    var dt = {};
    dt.__esModule = true, dt.wrapHelper = function(e2, t2) {
      if ("function" != typeof e2)
        return e2;
      return function() {
        return arguments[arguments.length - 1] = t2(arguments[arguments.length - 1]), e2.apply(this, arguments);
      };
    }, mt.__esModule = true, mt.checkRevision = function(e2) {
      var t2 = e2 && e2[0] || 1, n2 = yt.COMPILER_REVISION;
      if (t2 >= yt.LAST_COMPATIBLE_COMPILER_REVISION && t2 <= yt.COMPILER_REVISION)
        return;
      if (t2 < yt.LAST_COMPATIBLE_COMPILER_REVISION) {
        var r2 = yt.REVISION_CHANGES[n2], o2 = yt.REVISION_CHANGES[t2];
        throw new ht.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + r2 + ") or downgrade your runtime to an older version (" + o2 + ").");
      }
      throw new ht.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e2[1] + ").");
    }, mt.template = function(e2, t2) {
      if (!t2)
        throw new ht.default("No environment passed to template");
      if (!e2 || !e2.main)
        throw new ht.default("Unknown template object: " + typeof e2);
      e2.main.decorator = e2.main_d, t2.VM.checkRevision(e2.compiler);
      var n2 = e2.compiler && 7 === e2.compiler[0];
      var r2 = { strict: function(e3, t3, n3) {
        if (!e3 || !(t3 in e3))
          throw new ht.default('"' + t3 + '" not defined in ' + e3, { loc: n3 });
        return r2.lookupProperty(e3, t3);
      }, lookupProperty: function(e3, t3) {
        var n3 = e3[t3];
        return null == n3 || Object.prototype.hasOwnProperty.call(e3, t3) || Pt.resultIsAllowed(n3, r2.protoAccessControl, t3) ? n3 : void 0;
      }, lookup: function(e3, t3) {
        for (var n3 = e3.length, o3 = 0; o3 < n3; o3++) {
          if (null != (e3[o3] && r2.lookupProperty(e3[o3], t3)))
            return e3[o3][t3];
        }
      }, lambda: function(e3, t3) {
        return "function" == typeof e3 ? e3.call(t3) : e3;
      }, escapeExpression: ft.escapeExpression, invokePartial: function(n3, r3, o3) {
        o3.hash && (r3 = ft.extend({}, r3, o3.hash), o3.ids && (o3.ids[0] = true)), n3 = t2.VM.resolvePartial.call(this, n3, r3, o3);
        var a2 = ft.extend({}, o3, { hooks: this.hooks, protoAccessControl: this.protoAccessControl }), l2 = t2.VM.invokePartial.call(this, n3, r3, a2);
        if (null == l2 && t2.compile && (o3.partials[o3.name] = t2.compile(n3, e2.compilerOptions, t2), l2 = o3.partials[o3.name](r3, a2)), null != l2) {
          if (o3.indent) {
            for (var s2 = l2.split("\n"), i2 = 0, u2 = s2.length; i2 < u2 && (s2[i2] || i2 + 1 !== u2); i2++)
              s2[i2] = o3.indent + s2[i2];
            l2 = s2.join("\n");
          }
          return l2;
        }
        throw new ht.default("The partial " + o3.name + " could not be compiled when running in runtime-only mode");
      }, fn: function(t3) {
        var n3 = e2[t3];
        return n3.decorator = e2[t3 + "_d"], n3;
      }, programs: [], program: function(e3, t3, n3, r3, o3) {
        var a2 = this.programs[e3], l2 = this.fn(e3);
        return t3 || o3 || r3 || n3 ? a2 = bt(this, e3, l2, t3, n3, r3, o3) : a2 || (a2 = this.programs[e3] = bt(this, e3, l2)), a2;
      }, data: function(e3, t3) {
        for (; e3 && t3--; )
          e3 = e3._parent;
        return e3;
      }, mergeIfNeeded: function(e3, t3) {
        var n3 = e3 || t3;
        return e3 && t3 && e3 !== t3 && (n3 = ft.extend({}, t3, e3)), n3;
      }, nullContext: Object.seal({}), noop: t2.VM.noop, compilerInfo: e2.compiler };
      function o2(t3) {
        var n3 = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], a2 = n3.data;
        o2._setup(n3), !n3.partial && e2.useData && (a2 = xt(t3, a2));
        var l2 = void 0, s2 = e2.useBlockParams ? [] : void 0;
        function i2(t4) {
          return "" + e2.main(r2, t4, r2.helpers, r2.partials, a2, s2, l2);
        }
        return e2.useDepths && (l2 = n3.depths ? t3 != n3.depths[0] ? [t3].concat(n3.depths) : n3.depths : [t3]), (i2 = kt(e2.main, i2, r2, n3.depths || [], a2, s2))(t3, n3);
      }
      return o2.isTop = true, o2._setup = function(o3) {
        if (o3.partial)
          r2.protoAccessControl = o3.protoAccessControl, r2.helpers = o3.helpers, r2.partials = o3.partials, r2.decorators = o3.decorators, r2.hooks = o3.hooks;
        else {
          var a2 = ft.extend({}, t2.helpers, o3.helpers);
          !function(e3, t3) {
            Object.keys(e3).forEach(function(n3) {
              var r3 = e3[n3];
              e3[n3] = function(e4, t4) {
                var n4 = t4.lookupProperty;
                return gt.wrapHelper(e4, function(e5) {
                  return ft.extend({ lookupProperty: n4 }, e5);
                });
              }(r3, t3);
            });
          }(a2, r2), r2.helpers = a2, e2.usePartial && (r2.partials = r2.mergeIfNeeded(o3.partials, t2.partials)), (e2.usePartial || e2.useDecorators) && (r2.decorators = ft.extend({}, t2.decorators, o3.decorators)), r2.hooks = {}, r2.protoAccessControl = Pt.createProtoAccessControl(o3);
          var l2 = o3.allowCallsToHelperMissing || n2;
          vt.moveHelperToHooks(r2, "helperMissing", l2), vt.moveHelperToHooks(r2, "blockHelperMissing", l2);
        }
      }, o2._child = function(t3, n3, o3, a2) {
        if (e2.useBlockParams && !o3)
          throw new ht.default("must pass block params");
        if (e2.useDepths && !a2)
          throw new ht.default("must pass parent depths");
        return bt(r2, t3, e2[t3], n3, 0, o3, a2);
      }, o2;
    }, mt.wrapProgram = bt, mt.resolvePartial = function(e2, t2, n2) {
      e2 ? e2.call || n2.name || (n2.name = e2, e2 = n2.partials[e2]) : e2 = "@partial-block" === n2.name ? n2.data["partial-block"] : n2.partials[n2.name];
      return e2;
    }, mt.invokePartial = function(e2, t2, n2) {
      var r2 = n2.data && n2.data["partial-block"];
      n2.partial = true, n2.ids && (n2.data.contextPath = n2.ids[0] || n2.data.contextPath);
      var o2 = void 0;
      n2.fn && n2.fn !== Ot && function() {
        n2.data = yt.createFrame(n2.data);
        var e3 = n2.fn;
        o2 = n2.data["partial-block"] = function(t3) {
          var n3 = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
          return n3.data = yt.createFrame(n3.data), n3.data["partial-block"] = r2, e3(t3, n3);
        }, e3.partials && (n2.partials = ft.extend({}, n2.partials, e3.partials));
      }();
      void 0 === e2 && o2 && (e2 = o2);
      if (void 0 === e2)
        throw new ht.default("The partial " + n2.name + " could not be found");
      if (e2 instanceof Function)
        return e2(t2, n2);
    }, mt.noop = Ot;
    var ft = function(e2) {
      if (e2 && e2.__esModule)
        return e2;
      var t2 = {};
      if (null != e2)
        for (var n2 in e2)
          Object.prototype.hasOwnProperty.call(e2, n2) && (t2[n2] = e2[n2]);
      return t2.default = e2, t2;
    }(ge);
    var ht = function(e2) {
      return e2 && e2.__esModule ? e2 : { default: e2 };
    }(qe.exports);
    var yt = ve;
    var vt = Ae;
    var gt = dt;
    var Pt = Ge;
    function bt(e2, t2, n2, r2, o2, a2, l2) {
      function s2(t3) {
        var o3 = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], s3 = l2;
        return !l2 || t3 == l2[0] || t3 === e2.nullContext && null === l2[0] || (s3 = [t3].concat(l2)), n2(e2, t3, e2.helpers, e2.partials, o3.data || r2, a2 && [o3.blockParams].concat(a2), s3);
      }
      return (s2 = kt(n2, s2, e2, l2, r2, a2)).program = t2, s2.depth = l2 ? l2.length : 0, s2.blockParams = o2 || 0, s2;
    }
    function Ot() {
      return "";
    }
    function xt(e2, t2) {
      return t2 && "root" in t2 || ((t2 = t2 ? yt.createFrame(t2) : {}).root = e2), t2;
    }
    function kt(e2, t2, n2, r2, o2, a2) {
      if (e2.decorator) {
        var l2 = {};
        t2 = e2.decorator(t2, l2, n2, r2 && r2[0], o2, a2, r2), ft.extend(t2, l2);
      }
      return t2;
    }
    var Rt = { exports: {} };
    !function(e2, t2) {
      t2.__esModule = true, t2.default = function(e3) {
        var t3 = void 0 !== he ? he : window, n2 = t3.Handlebars;
        e3.noConflict = function() {
          return t3.Handlebars === e3 && (t3.Handlebars = n2), e3;
        };
      }, e2.exports = t2.default;
    }(Rt, Rt.exports), function(e2, t2) {
      function n2(e3) {
        return e3 && e3.__esModule ? e3 : { default: e3 };
      }
      function r2(e3) {
        if (e3 && e3.__esModule)
          return e3;
        var t3 = {};
        if (null != e3)
          for (var n3 in e3)
            Object.prototype.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
        return t3.default = e3, t3;
      }
      t2.__esModule = true;
      var o2 = r2(ve), a2 = n2(ct.exports), l2 = n2(qe.exports), s2 = r2(ge), i2 = r2(mt), u2 = n2(Rt.exports);
      function p2() {
        var e3 = new o2.HandlebarsEnvironment();
        return s2.extend(e3, o2), e3.SafeString = a2.default, e3.Exception = l2.default, e3.Utils = s2, e3.escapeExpression = s2.escapeExpression, e3.VM = i2, e3.template = function(t3) {
          return i2.template(t3, e3);
        }, e3;
      }
      var c2 = p2();
      c2.create = p2, u2.default(c2), c2.default = c2, t2.default = c2, e2.exports = t2.default;
    }(ye, ye.exports);
    var Ct = ye.exports.default;
    var wt = { 1: function(e2, t2, n2, r2, o2) {
      return "import { NgModule} from '@angular/core';\nimport { HttpClientModule } from '@angular/common/http';\n\nimport { AngularHttpRequest } from './core/AngularHttpRequest';\nimport { BaseHttpRequest } from './core/BaseHttpRequest';\nimport type { OpenAPIConfig } from './core/OpenAPI';\nimport { OpenAPI } from './core/OpenAPI';\n";
    }, 3: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.strict, s2 = e2.lambda;
      return "import type { BaseHttpRequest } from './core/BaseHttpRequest';\nimport type { OpenAPIConfig } from './core/OpenAPI';\nimport { " + (null != (a2 = s2(l2(t2, "httpRequest", { start: { line: 14, column: 12 }, end: { line: 14, column: 23 } }), t2)) ? a2 : "") + " } from './core/" + (null != (a2 = s2(l2(t2, "httpRequest", { start: { line: 14, column: 45 }, end: { line: 14, column: 56 } }), t2)) ? a2 : "") + "';\n";
    }, 5: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "each").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "services"), { name: "each", hash: {}, fn: e2.program(6, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 18, column: 0 }, end: { line: 20, column: 9 } } })) ? a2 : "";
    }, 6: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.strict, s2 = e2.lambda, i2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "import { " + (null != (a2 = s2(l2(t2, "name", { start: { line: 19, column: 12 }, end: { line: 19, column: 16 } }), t2)) ? a2 : "") + (null != (a2 = s2(l2(i2(o2, "root"), "postfix", { start: { line: 19, column: 22 }, end: { line: 19, column: 35 } }), t2)) ? a2 : "") + " } from './services/" + (null != (a2 = s2(l2(t2, "name", { start: { line: 19, column: 61 }, end: { line: 19, column: 65 } }), t2)) ? a2 : "") + (null != (a2 = s2(l2(i2(o2, "root"), "postfix", { start: { line: 19, column: 71 }, end: { line: 19, column: 84 } }), t2)) ? a2 : "") + "';\n";
    }, 8: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.strict, s2 = e2.lambda, i2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "@NgModule({\n	imports: [HttpClientModule],\n	providers: [\n		{\n			provide: OpenAPI,\n			useValue: {\n				BASE: OpenAPI?.BASE ?? '" + (null != (a2 = s2(l2(t2, "server", { start: { line: 30, column: 31 }, end: { line: 30, column: 37 } }), t2)) ? a2 : "") + "',\n				VERSION: OpenAPI?.VERSION ?? '" + (null != (a2 = s2(l2(t2, "version", { start: { line: 31, column: 37 }, end: { line: 31, column: 44 } }), t2)) ? a2 : "") + "',\n				WITH_CREDENTIALS: OpenAPI?.WITH_CREDENTIALS ?? false,\n				CREDENTIALS: OpenAPI?.CREDENTIALS ?? 'include',\n				TOKEN: OpenAPI?.TOKEN,\n				USERNAME: OpenAPI?.USERNAME,\n				PASSWORD: OpenAPI?.PASSWORD,\n				HEADERS: OpenAPI?.HEADERS,\n				ENCODE_PATH: OpenAPI?.ENCODE_PATH,\n			} as OpenAPIConfig,\n		},\n		{\n			provide: BaseHttpRequest,\n			useClass: AngularHttpRequest,\n		},\n" + (null != (a2 = i2(n2, "each").call(null != t2 ? t2 : e2.nullContext || {}, i2(t2, "services"), { name: "each", hash: {}, fn: e2.program(9, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 45, column: 2 }, end: { line: 47, column: 11 } } })) ? a2 : "") + "	]\n})\nexport class " + (null != (a2 = s2(l2(t2, "clientName", { start: { line: 50, column: 16 }, end: { line: 50, column: 26 } }), t2)) ? a2 : "") + " {}\n";
    }, 9: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.strict, s2 = e2.lambda, i2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "		" + (null != (a2 = s2(l2(t2, "name", { start: { line: 46, column: 5 }, end: { line: 46, column: 9 } }), t2)) ? a2 : "") + (null != (a2 = s2(l2(i2(o2, "root"), "postfix", { start: { line: 46, column: 15 }, end: { line: 46, column: 28 } }), t2)) ? a2 : "") + ",\n";
    }, 11: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.strict, s2 = e2.lambda, i2 = null != t2 ? t2 : e2.nullContext || {}, u2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;\n\nexport class " + (null != (a2 = s2(l2(t2, "clientName", { start: { line: 54, column: 16 }, end: { line: 54, column: 26 } }), t2)) ? a2 : "") + " {\n\n" + (null != (a2 = u2(n2, "each").call(i2, u2(t2, "services"), { name: "each", hash: {}, fn: e2.program(12, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 56, column: 1 }, end: { line: 58, column: 10 } } })) ? a2 : "") + "\n	public readonly request: BaseHttpRequest;\n\n	constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = " + (null != (a2 = s2(l2(t2, "httpRequest", { start: { line: 62, column: 87 }, end: { line: 62, column: 98 } }), t2)) ? a2 : "") + ") {\n		this.request = new HttpRequest({\n			BASE: config?.BASE ?? '" + (null != (a2 = s2(l2(t2, "server", { start: { line: 64, column: 29 }, end: { line: 64, column: 35 } }), t2)) ? a2 : "") + "',\n			VERSION: config?.VERSION ?? '" + (null != (a2 = s2(l2(t2, "version", { start: { line: 65, column: 35 }, end: { line: 65, column: 42 } }), t2)) ? a2 : "") + "',\n			WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,\n			CREDENTIALS: config?.CREDENTIALS ?? 'include',\n			TOKEN: config?.TOKEN,\n			USERNAME: config?.USERNAME,\n			PASSWORD: config?.PASSWORD,\n			HEADERS: config?.HEADERS,\n			ENCODE_PATH: config?.ENCODE_PATH,\n		});\n\n" + (null != (a2 = u2(n2, "each").call(i2, u2(t2, "services"), { name: "each", hash: {}, fn: e2.program(14, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 75, column: 2 }, end: { line: 77, column: 11 } } })) ? a2 : "") + "	}\n}\n";
    }, 12: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.strict, s2 = e2.lambda, i2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "	public readonly " + (null != (a2 = i2(n2, "camelCase").call(null != t2 ? t2 : e2.nullContext || {}, i2(t2, "name"), { name: "camelCase", hash: {}, data: o2, loc: { start: { line: 57, column: 17 }, end: { line: 57, column: 37 } } })) ? a2 : "") + ": " + (null != (a2 = s2(l2(t2, "name", { start: { line: 57, column: 42 }, end: { line: 57, column: 46 } }), t2)) ? a2 : "") + (null != (a2 = s2(l2(i2(o2, "root"), "postfix", { start: { line: 57, column: 52 }, end: { line: 57, column: 65 } }), t2)) ? a2 : "") + ";\n";
    }, 14: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.strict, s2 = e2.lambda, i2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "		this." + (null != (a2 = i2(n2, "camelCase").call(null != t2 ? t2 : e2.nullContext || {}, i2(t2, "name"), { name: "camelCase", hash: {}, data: o2, loc: { start: { line: 76, column: 7 }, end: { line: 76, column: 27 } } })) ? a2 : "") + " = new " + (null != (a2 = s2(l2(t2, "name", { start: { line: 76, column: 37 }, end: { line: 76, column: 41 } }), t2)) ? a2 : "") + (null != (a2 = s2(l2(i2(o2, "root"), "postfix", { start: { line: 76, column: 47 }, end: { line: 76, column: 60 } }), t2)) ? a2 : "") + "(this.request);\n";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = e2.invokePartial(s2(r2, "header"), t2, { name: "header", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n" + (null != (a2 = s2(n2, "equals").call(l2, s2(s2(o2, "root"), "httpClient"), "angular", { name: "equals", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.program(3, o2, 0), data: o2, loc: { start: { line: 3, column: 0 }, end: { line: 15, column: 11 } } })) ? a2 : "") + "\n" + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "services"), { name: "if", hash: {}, fn: e2.program(5, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 17, column: 0 }, end: { line: 21, column: 7 } } })) ? a2 : "") + "\n" + (null != (a2 = s2(n2, "equals").call(l2, s2(s2(o2, "root"), "httpClient"), "angular", { name: "equals", hash: {}, fn: e2.program(8, o2, 0), inverse: e2.program(11, o2, 0), data: o2, loc: { start: { line: 23, column: 0 }, end: { line: 80, column: 11 } } })) ? a2 : "");
    }, usePartial: true, useData: true };
    var qt = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const getHeaders = (config: OpenAPIConfig, options: ApiRequestOptions): Observable<HttpHeaders> => {\n	return forkJoin({\n		token: resolve(options, config.TOKEN),\n		username: resolve(options, config.USERNAME),\n		password: resolve(options, config.PASSWORD),\n		additionalHeaders: resolve(options, config.HEADERS),\n	}).pipe(\n		map(({ token, username, password, additionalHeaders }) => {\n			const headers = Object.entries({\n				Accept: 'application/json',\n				...additionalHeaders,\n				...options.headers,\n			})\n				.filter(([_, value]) => isDefined(value))\n				.reduce((headers, [key, value]) => ({\n					...headers,\n					[key]: String(value),\n				}), {} as Record<string, string>);\n\n			if (isStringWithValue(token)) {\n				headers['Authorization'] = `Bearer ${token}`;\n			}\n\n			if (isStringWithValue(username) && isStringWithValue(password)) {\n				const credentials = base64(`${username}:${password}`);\n				headers['Authorization'] = `Basic ${credentials}`;\n			}\n\n			if (options.body) {\n				if (options.mediaType) {\n					headers['Content-Type'] = options.mediaType;\n				} else if (isBlob(options.body)) {\n					headers['Content-Type'] = options.body.type || 'application/octet-stream';\n				} else if (isString(options.body)) {\n					headers['Content-Type'] = 'text/plain';\n				} else if (!isFormData(options.body)) {\n					headers['Content-Type'] = 'application/json';\n				}\n			}\n\n			return new HttpHeaders(headers);\n		}),\n	);\n};";
    }, useData: true };
    var At = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const getRequestBody = (options: ApiRequestOptions): any => {\n	if (options.body) {\n		if (options.mediaType?.includes('/json')) {\n			return JSON.stringify(options.body)\n		} else if (isString(options.body) || isBlob(options.body) || isFormData(options.body)) {\n			return options.body;\n		} else {\n			return JSON.stringify(options.body);\n		}\n	}\n	return undefined;\n};";
    }, useData: true };
    var jt = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const getResponseBody = <T>(response: HttpResponse<T>): T | undefined => {\n	if (response.status !== 204 && response.body !== null) {\n		return response.body;\n	}\n	return undefined;\n};";
    }, useData: true };
    var Ht = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const getResponseHeader = <T>(response: HttpResponse<T>, responseHeader?: string): string | undefined => {\n	if (responseHeader) {\n		const value = response.headers.get(responseHeader);\n		if (isString(value)) {\n			return value;\n		}\n	}\n	return undefined;\n};";
    }, useData: true };
    var Et = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = e2.invokePartial(l2(r2, "header"), t2, { name: "header", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\nimport { HttpClient, HttpHeaders } from '@angular/common/http';\nimport type { HttpResponse, HttpErrorResponse } from '@angular/common/http';\nimport { forkJoin, of, throwError } from 'rxjs';\nimport { catchError, map, switchMap } from 'rxjs/operators';\nimport type { Observable } from 'rxjs';\n\nimport { ApiError } from './ApiError';\nimport type { ApiRequestOptions } from './ApiRequestOptions';\nimport type { ApiResult } from './ApiResult';\nimport type { OpenAPIConfig } from './OpenAPI';\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/isDefined"), t2, { name: "functions/isDefined", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/isString"), t2, { name: "functions/isString", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/isStringWithValue"), t2, { name: "functions/isStringWithValue", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/isBlob"), t2, { name: "functions/isBlob", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/isFormData"), t2, { name: "functions/isFormData", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/base64"), t2, { name: "functions/base64", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/getQueryString"), t2, { name: "functions/getQueryString", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/getUrl"), t2, { name: "functions/getUrl", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/getFormData"), t2, { name: "functions/getFormData", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/resolve"), t2, { name: "functions/resolve", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "angular/getHeaders"), t2, { name: "angular/getHeaders", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "angular/getRequestBody"), t2, { name: "angular/getRequestBody", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "angular/sendRequest"), t2, { name: "angular/sendRequest", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "angular/getResponseHeader"), t2, { name: "angular/getResponseHeader", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "angular/getResponseBody"), t2, { name: "angular/getResponseBody", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/catchErrorCodes"), t2, { name: "functions/catchErrorCodes", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n/**\n * Request method\n * @param config The OpenAPI configuration object\n * @param http The Angular HTTP client\n * @param options The request options from the service\n * @returns Observable<T>\n * @throws ApiError\n */\nexport const request = <T>(config: OpenAPIConfig, http: HttpClient, options: ApiRequestOptions): Observable<T> => {\n	const url = getUrl(config, options);\n	const formData = getFormData(options);\n	const body = getRequestBody(options);\n\n	return getHeaders(config, options).pipe(\n		switchMap(headers => {\n			return sendRequest<T>(config, options, http, url, formData, body, headers);\n		}),\n		map(response => {\n			const responseBody = getResponseBody(response);\n			const responseHeader = getResponseHeader(response, options.responseHeader);\n			return {\n				url,\n				ok: response.ok,\n				status: response.status,\n				statusText: response.statusText,\n				body: responseHeader ?? responseBody,\n			} as ApiResult;\n		}),\n		catchError((error: HttpErrorResponse) => {\n			if (!error.status) {\n				return throwError(error);\n			}\n			return of({\n				url,\n				ok: error.ok,\n				status: error.status,\n				statusText: error.statusText,\n				body: error.error ?? error.statusText,\n			} as ApiResult);\n		}),\n		map(result => {\n			catchErrorCodes(options, result);\n			return result.body as T;\n		}),\n		catchError((error: ApiError) => {\n			return throwError(error);\n		}),\n	);\n};";
    }, usePartial: true, useData: true };
    var Dt = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "export const sendRequest = <T>(\n	config: OpenAPIConfig,\n	options: ApiRequestOptions,\n	http: HttpClient,\n	url: string,\n	body: any,\n	formData: FormData | undefined,\n	headers: HttpHeaders\n): Observable<HttpResponse<T>> => {\n	return http.request<T>(options.method, url, {\n		headers,\n		body: body ?? formData,\n		withCredentials: config.WITH_CREDENTIALS,\n		observe: 'response',\n	});\n};";
    }, useData: true };
    var Tt = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = e2.invokePartial(l2(r2, "header"), t2, { name: "header", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\nimport type { ApiRequestOptions } from './ApiRequestOptions';\nimport type { ApiResult } from './ApiResult';\n\nexport class ApiError extends Error {\n	public readonly url: string;\n	public readonly status: number;\n	public readonly statusText: string;\n	public readonly body: any;\n	public readonly request: ApiRequestOptions;\n\n	constructor(request: ApiRequestOptions, response: ApiResult, message: string) {\n		super(message);\n\n		this.name = 'ApiError';\n		this.url = response.url;\n		this.status = response.status;\n		this.statusText = response.statusText;\n		this.body = response.body;\n		this.request = request;\n	}\n}";
    }, usePartial: true, useData: true };
    var It = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = e2.invokePartial(l2(r2, "header"), t2, { name: "header", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\nexport type ApiRequestOptions = {\n	readonly method: 'GET' | 'PUT' | 'POST' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'PATCH';\n	readonly url: string;\n	readonly path?: Record<string, any>;\n	readonly cookies?: Record<string, any>;\n	readonly headers?: Record<string, any>;\n	readonly query?: Record<string, any>;\n	readonly formData?: Record<string, any>;\n	readonly body?: any;\n	readonly mediaType?: string;\n	readonly responseHeader?: string;\n	readonly errors?: Record<number, string>;\n};";
    }, usePartial: true, useData: true };
    var St = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = e2.invokePartial(l2(r2, "header"), t2, { name: "header", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\nexport type ApiResult = {\n	readonly url: string;\n	readonly ok: boolean;\n	readonly status: number;\n	readonly statusText: string;\n	readonly body: any;\n};";
    }, usePartial: true, useData: true };
    var _t = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const getHeaders = async (config: OpenAPIConfig, options: ApiRequestOptions, formData?: FormData): Promise<Record<string, string>> => {\n	const token = await resolve(options, config.TOKEN);\n	const username = await resolve(options, config.USERNAME);\n	const password = await resolve(options, config.PASSWORD);\n	const additionalHeaders = await resolve(options, config.HEADERS);\n	const formHeaders = typeof formData?.getHeaders === 'function' && formData?.getHeaders() || {}\n\n	const headers = Object.entries({\n		Accept: 'application/json',\n		...additionalHeaders,\n		...options.headers,\n		...formHeaders,\n	})\n	.filter(([_, value]) => isDefined(value))\n	.reduce((headers, [key, value]) => ({\n		...headers,\n		[key]: String(value),\n	}), {} as Record<string, string>);\n\n	if (isStringWithValue(token)) {\n		headers['Authorization'] = `Bearer ${token}`;\n	}\n\n	if (isStringWithValue(username) && isStringWithValue(password)) {\n		const credentials = base64(`${username}:${password}`);\n		headers['Authorization'] = `Basic ${credentials}`;\n	}\n\n	if (options.body) {\n		if (options.mediaType) {\n			headers['Content-Type'] = options.mediaType;\n		} else if (isBlob(options.body)) {\n			headers['Content-Type'] = options.body.type || 'application/octet-stream';\n		} else if (isString(options.body)) {\n			headers['Content-Type'] = 'text/plain';\n		} else if (!isFormData(options.body)) {\n			headers['Content-Type'] = 'application/json';\n		}\n	}\n\n	return headers;\n};";
    }, useData: true };
    var Nt = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const getRequestBody = (options: ApiRequestOptions): any => {\n	if (options.body) {\n		return options.body;\n	}\n	return undefined;\n};";
    }, useData: true };
    var Bt = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const getResponseBody = (response: AxiosResponse<any>): any => {\n	if (response.status !== 204) {\n		return response.data;\n	}\n	return undefined;\n};";
    }, useData: true };
    var $t = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const getResponseHeader = (response: AxiosResponse<any>, responseHeader?: string): string | undefined => {\n	if (responseHeader) {\n		const content = response.headers[responseHeader];\n		if (isString(content)) {\n			return content;\n		}\n	}\n	return undefined;\n};";
    }, useData: true };
    var Mt = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = e2.invokePartial(l2(r2, "header"), t2, { name: "header", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\nimport axios from 'axios';\nimport type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';\nimport FormData from 'form-data';\n\nimport { ApiError } from './ApiError';\nimport type { ApiRequestOptions } from './ApiRequestOptions';\nimport type { ApiResult } from './ApiResult';\nimport { CancelablePromise } from './CancelablePromise';\nimport type { OnCancel } from './CancelablePromise';\nimport type { OpenAPIConfig } from './OpenAPI';\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/isDefined"), t2, { name: "functions/isDefined", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/isString"), t2, { name: "functions/isString", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/isStringWithValue"), t2, { name: "functions/isStringWithValue", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/isBlob"), t2, { name: "functions/isBlob", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/isFormData"), t2, { name: "functions/isFormData", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/isSuccess"), t2, { name: "functions/isSuccess", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/base64"), t2, { name: "functions/base64", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/getQueryString"), t2, { name: "functions/getQueryString", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/getUrl"), t2, { name: "functions/getUrl", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/getFormData"), t2, { name: "functions/getFormData", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/resolve"), t2, { name: "functions/resolve", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "axios/getHeaders"), t2, { name: "axios/getHeaders", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "axios/getRequestBody"), t2, { name: "axios/getRequestBody", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "axios/sendRequest"), t2, { name: "axios/sendRequest", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "axios/getResponseHeader"), t2, { name: "axios/getResponseHeader", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "axios/getResponseBody"), t2, { name: "axios/getResponseBody", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/catchErrorCodes"), t2, { name: "functions/catchErrorCodes", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n/**\n * Request method\n * @param config The OpenAPI configuration object\n * @param options The request options from the service\n * @returns CancelablePromise<T>\n * @throws ApiError\n */\nexport const request = <T>(config: OpenAPIConfig, options: ApiRequestOptions): CancelablePromise<T> => {\n	return new CancelablePromise(async (resolve, reject, onCancel) => {\n		try {\n			const url = getUrl(config, options);\n			const formData = getFormData(options);\n			const body = getRequestBody(options);\n			const headers = await getHeaders(config, options, formData);\n\n			if (!onCancel.isCancelled) {\n				const response = await sendRequest<T>(config, options, url, body, formData, headers, onCancel);\n				const responseBody = getResponseBody(response);\n				const responseHeader = getResponseHeader(response, options.responseHeader);\n\n				const result: ApiResult = {\n					url,\n					ok: isSuccess(response.status),\n					status: response.status,\n					statusText: response.statusText,\n					body: responseHeader ?? responseBody,\n				};\n\n				catchErrorCodes(options, result);\n\n				resolve(result.body);\n			}\n		} catch (error) {\n			reject(error);\n		}\n	});\n};";
    }, usePartial: true, useData: true };
    var Lt = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const sendRequest = async <T>(\n	config: OpenAPIConfig,\n	options: ApiRequestOptions,\n	url: string,\n	body: any,\n	formData: FormData | undefined,\n	headers: Record<string, string>,\n	onCancel: OnCancel\n): Promise<AxiosResponse<T>> => {\n	const source = axios.CancelToken.source();\n\n	const requestConfig: AxiosRequestConfig = {\n		url,\n		headers,\n		data: body ?? formData,\n		method: options.method,\n		withCredentials: config.WITH_CREDENTIALS,\n		cancelToken: source.token,\n	};\n\n	onCancel(() => source.cancel('The user aborted a request.'));\n\n	try {\n		return await axios.request(requestConfig);\n	} catch (error) {\n		const axiosError = error as AxiosError<T>;\n		if (axiosError.response) {\n			return axiosError.response;\n		}\n		throw error;\n	}\n};";
    }, useData: true };
    var Ft = { 1: function(e2, t2, n2, r2, o2) {
      return "import type { HttpClient } from '@angular/common/http';\nimport type { Observable } from 'rxjs';\n\nimport type { ApiRequestOptions } from './ApiRequestOptions';\nimport type { OpenAPIConfig } from './OpenAPI';\n";
    }, 3: function(e2, t2, n2, r2, o2) {
      return "import type { ApiRequestOptions } from './ApiRequestOptions';\nimport type { CancelablePromise } from './CancelablePromise';\nimport type { OpenAPIConfig } from './OpenAPI';\n";
    }, 5: function(e2, t2, n2, r2, o2) {
      return "	constructor(\n		public readonly config: OpenAPIConfig,\n		public readonly http: HttpClient,\n	) {}\n";
    }, 7: function(e2, t2, n2, r2, o2) {
      return "	constructor(public readonly config: OpenAPIConfig) {}\n";
    }, 9: function(e2, t2, n2, r2, o2) {
      return "	public abstract request<T>(options: ApiRequestOptions): Observable<T>;\n";
    }, 11: function(e2, t2, n2, r2, o2) {
      return "	public abstract request<T>(options: ApiRequestOptions): CancelablePromise<T>;\n";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = e2.invokePartial(s2(r2, "header"), t2, { name: "header", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n" + (null != (a2 = s2(n2, "equals").call(l2, s2(s2(o2, "root"), "httpClient"), "angular", { name: "equals", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.program(3, o2, 0), data: o2, loc: { start: { line: 3, column: 0 }, end: { line: 13, column: 11 } } })) ? a2 : "") + "\nexport abstract class BaseHttpRequest {\n\n" + (null != (a2 = s2(n2, "equals").call(l2, s2(s2(o2, "root"), "httpClient"), "angular", { name: "equals", hash: {}, fn: e2.program(5, o2, 0), inverse: e2.program(7, o2, 0), data: o2, loc: { start: { line: 17, column: 1 }, end: { line: 24, column: 12 } } })) ? a2 : "") + "\n" + (null != (a2 = s2(n2, "equals").call(l2, s2(s2(o2, "root"), "httpClient"), "angular", { name: "equals", hash: {}, fn: e2.program(9, o2, 0), inverse: e2.program(11, o2, 0), data: o2, loc: { start: { line: 26, column: 1 }, end: { line: 30, column: 12 } } })) ? a2 : "") + "}";
    }, usePartial: true, useData: true };
    var Wt = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = e2.invokePartial(l2(r2, "header"), t2, { name: "header", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\nexport class CancelError extends Error {\n\n	constructor(message: string) {\n		super(message);\n		this.name = 'CancelError';\n	}\n\n	public get isCancelled(): boolean {\n		return true;\n	}\n}\n\nexport interface OnCancel {\n	readonly isResolved: boolean;\n	readonly isRejected: boolean;\n	readonly isCancelled: boolean;\n\n	(cancelHandler: () => void): void;\n}\n\nexport class CancelablePromise<T> implements Promise<T> {\n	readonly [Symbol.toStringTag]!: string;\n\n	private _isResolved: boolean;\n	private _isRejected: boolean;\n	private _isCancelled: boolean;\n	private readonly _cancelHandlers: (() => void)[];\n	private readonly _promise: Promise<T>;\n	private _resolve?: (value: T | PromiseLike<T>) => void;\n	private _reject?: (reason?: any) => void;\n\n	constructor(\n		executor: (\n			resolve: (value: T | PromiseLike<T>) => void,\n			reject: (reason?: any) => void,\n			onCancel: OnCancel\n		) => void\n	) {\n		this._isResolved = false;\n		this._isRejected = false;\n		this._isCancelled = false;\n		this._cancelHandlers = [];\n		this._promise = new Promise<T>((resolve, reject) => {\n			this._resolve = resolve;\n			this._reject = reject;\n\n			const onResolve = (value: T | PromiseLike<T>): void => {\n				if (this._isResolved || this._isRejected || this._isCancelled) {\n					return;\n				}\n				this._isResolved = true;\n				this._resolve?.(value);\n			};\n\n			const onReject = (reason?: any): void => {\n				if (this._isResolved || this._isRejected || this._isCancelled) {\n					return;\n				}\n				this._isRejected = true;\n				this._reject?.(reason);\n			};\n\n			const onCancel = (cancelHandler: () => void): void => {\n				if (this._isResolved || this._isRejected || this._isCancelled) {\n					return;\n				}\n				this._cancelHandlers.push(cancelHandler);\n			};\n\n			Object.defineProperty(onCancel, 'isResolved', {\n				get: (): boolean => this._isResolved,\n			});\n\n			Object.defineProperty(onCancel, 'isRejected', {\n				get: (): boolean => this._isRejected,\n			});\n\n			Object.defineProperty(onCancel, 'isCancelled', {\n				get: (): boolean => this._isCancelled,\n			});\n\n			return executor(onResolve, onReject, onCancel as OnCancel);\n		});\n	}\n\n	public then<TResult1 = T, TResult2 = never>(\n		onFulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,\n		onRejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null\n	): Promise<TResult1 | TResult2> {\n		return this._promise.then(onFulfilled, onRejected);\n	}\n\n	public catch<TResult = never>(\n		onRejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null\n	): Promise<T | TResult> {\n		return this._promise.catch(onRejected);\n	}\n\n	public finally(onFinally?: (() => void) | null): Promise<T> {\n		return this._promise.finally(onFinally);\n	}\n\n	public cancel(): void {\n		if (this._isResolved || this._isRejected || this._isCancelled) {\n			return;\n		}\n		this._isCancelled = true;\n		if (this._cancelHandlers.length) {\n			try {\n				for (const cancelHandler of this._cancelHandlers) {\n					cancelHandler();\n				}\n			} catch (error) {\n				console.warn('Cancellation threw an error', error);\n				return;\n			}\n		}\n		this._cancelHandlers.length = 0;\n		this._reject?.(new CancelError('Request aborted'));\n	}\n\n	public get isCancelled(): boolean {\n		return this._isCancelled;\n	}\n}";
    }, usePartial: true, useData: true };
    var Vt = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const getHeaders = async (config: OpenAPIConfig, options: ApiRequestOptions): Promise<Headers> => {\n	const token = await resolve(options, config.TOKEN);\n	const username = await resolve(options, config.USERNAME);\n	const password = await resolve(options, config.PASSWORD);\n	const additionalHeaders = await resolve(options, config.HEADERS);\n\n	const headers = Object.entries({\n		Accept: 'application/json',\n		...additionalHeaders,\n		...options.headers,\n	})\n		.filter(([_, value]) => isDefined(value))\n		.reduce((headers, [key, value]) => ({\n			...headers,\n			[key]: String(value),\n		}), {} as Record<string, string>);\n\n	if (isStringWithValue(token)) {\n		headers['Authorization'] = `Bearer ${token}`;\n	}\n\n	if (isStringWithValue(username) && isStringWithValue(password)) {\n		const credentials = base64(`${username}:${password}`);\n		headers['Authorization'] = `Basic ${credentials}`;\n	}\n\n	if (options.body) {\n		if (options.mediaType) {\n			headers['Content-Type'] = options.mediaType;\n		} else if (isBlob(options.body)) {\n			headers['Content-Type'] = options.body.type || 'application/octet-stream';\n		} else if (isString(options.body)) {\n			headers['Content-Type'] = 'text/plain';\n		} else if (!isFormData(options.body)) {\n			headers['Content-Type'] = 'application/json';\n		}\n	}\n\n	return new Headers(headers);\n};";
    }, useData: true };
    var Ut = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const getRequestBody = (options: ApiRequestOptions): any => {\n	if (options.body) {\n		if (options.mediaType?.includes('/json')) {\n			return JSON.stringify(options.body)\n		} else if (isString(options.body) || isBlob(options.body) || isFormData(options.body)) {\n			return options.body;\n		} else {\n			return JSON.stringify(options.body);\n		}\n	}\n	return undefined;\n};";
    }, useData: true };
    var Qt = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const getResponseBody = async (response: Response): Promise<any> => {\n	if (response.status !== 204) {\n		try {\n			const contentType = response.headers.get('Content-Type');\n			if (contentType) {\n				const isJSON = contentType.toLowerCase().startsWith('application/json');\n				if (isJSON) {\n					return await response.json();\n				} else {\n					return await response.text();\n				}\n			}\n		} catch (error) {\n			console.error(error);\n		}\n	}\n	return undefined;\n};";
    }, useData: true };
    var zt = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const getResponseHeader = (response: Response, responseHeader?: string): string | undefined => {\n	if (responseHeader) {\n		const content = response.headers.get(responseHeader);\n		if (isString(content)) {\n			return content;\n		}\n	}\n	return undefined;\n};";
    }, useData: true };
    var Jt = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = e2.invokePartial(l2(r2, "header"), t2, { name: "header", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\nimport { ApiError } from './ApiError';\nimport type { ApiRequestOptions } from './ApiRequestOptions';\nimport type { ApiResult } from './ApiResult';\nimport { CancelablePromise } from './CancelablePromise';\nimport type { OnCancel } from './CancelablePromise';\nimport type { OpenAPIConfig } from './OpenAPI';\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/isDefined"), t2, { name: "functions/isDefined", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/isString"), t2, { name: "functions/isString", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/isStringWithValue"), t2, { name: "functions/isStringWithValue", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/isBlob"), t2, { name: "functions/isBlob", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/isFormData"), t2, { name: "functions/isFormData", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/base64"), t2, { name: "functions/base64", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/getQueryString"), t2, { name: "functions/getQueryString", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/getUrl"), t2, { name: "functions/getUrl", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/getFormData"), t2, { name: "functions/getFormData", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/resolve"), t2, { name: "functions/resolve", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "fetch/getHeaders"), t2, { name: "fetch/getHeaders", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "fetch/getRequestBody"), t2, { name: "fetch/getRequestBody", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "fetch/sendRequest"), t2, { name: "fetch/sendRequest", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "fetch/getResponseHeader"), t2, { name: "fetch/getResponseHeader", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "fetch/getResponseBody"), t2, { name: "fetch/getResponseBody", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/catchErrorCodes"), t2, { name: "functions/catchErrorCodes", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n/**\n * Request method\n * @param config The OpenAPI configuration object\n * @param options The request options from the service\n * @returns CancelablePromise<T>\n * @throws ApiError\n */\nexport const request = <T>(config: OpenAPIConfig, options: ApiRequestOptions): CancelablePromise<T> => {\n	return new CancelablePromise(async (resolve, reject, onCancel) => {\n		try {\n			const url = getUrl(config, options);\n			const formData = getFormData(options);\n			const body = getRequestBody(options);\n			const headers = await getHeaders(config, options);\n\n			if (!onCancel.isCancelled) {\n				const response = await sendRequest(config, options, url, body, formData, headers, onCancel);\n				const responseBody = await getResponseBody(response);\n				const responseHeader = getResponseHeader(response, options.responseHeader);\n\n				const result: ApiResult = {\n					url,\n					ok: response.ok,\n					status: response.status,\n					statusText: response.statusText,\n					body: responseHeader ?? responseBody,\n				};\n\n				catchErrorCodes(options, result);\n\n				resolve(result.body);\n			}\n		} catch (error) {\n			reject(error);\n		}\n	});\n};";
    }, usePartial: true, useData: true };
    var Gt = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "export const sendRequest = async (\n	config: OpenAPIConfig,\n	options: ApiRequestOptions,\n	url: string,\n	body: any,\n	formData: FormData | undefined,\n	headers: Headers,\n	onCancel: OnCancel\n): Promise<Response> => {\n	const controller = new AbortController();\n\n	const request: RequestInit = {\n		headers,\n		body: body ?? formData,\n		method: options.method,\n		signal: controller.signal,\n	};\n\n	if (config.WITH_CREDENTIALS) {\n		request.credentials = config.CREDENTIALS;\n	}\n\n	onCancel(() => controller.abort());\n\n	return await fetch(url, request);\n};";
    }, useData: true };
    var Zt = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const base64 = (str: string): string => {\n	try {\n		return btoa(str);\n	} catch (err) {\n		// @ts-ignore\n		return Buffer.from(str).toString('base64');\n	}\n};";
    }, useData: true };
    var Kt = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const catchErrorCodes = (options: ApiRequestOptions, result: ApiResult): void => {\n	const errors: Record<number, string> = {\n		400: 'Bad Request',\n		401: 'Unauthorized',\n		403: 'Forbidden',\n		404: 'Not Found',\n		500: 'Internal Server Error',\n		502: 'Bad Gateway',\n		503: 'Service Unavailable',\n		...options.errors,\n	}\n\n	const error = errors[result.status];\n	if (error) {\n		throw new ApiError(options, result, error);\n	}\n\n	if (!result.ok) {\n		throw new ApiError(options, result, 'Generic Error');\n	}\n};";
    }, useData: true };
    var Xt = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const getFormData = (options: ApiRequestOptions): FormData | undefined => {\n	if (options.formData) {\n		const formData = new FormData();\n\n		const process = (key: string, value: any) => {\n			if (isString(value) || isBlob(value)) {\n				formData.append(key, value);\n			} else {\n				formData.append(key, JSON.stringify(value));\n			}\n		};\n\n		Object.entries(options.formData)\n			.filter(([_, value]) => isDefined(value))\n			.forEach(([key, value]) => {\n				if (Array.isArray(value)) {\n					value.forEach(v => process(key, v));\n				} else {\n					process(key, value);\n				}\n			});\n\n		return formData;\n	}\n	return undefined;\n};";
    }, useData: true };
    var Yt = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const getQueryString = (params: Record<string, any>): string => {\n	const qs: string[] = [];\n\n	const append = (key: string, value: any) => {\n		qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);\n	};\n\n	const process = (key: string, value: any) => {\n		if (isDefined(value)) {\n			if (Array.isArray(value)) {\n				value.forEach(v => {\n					process(key, v);\n				});\n			} else if (typeof value === 'object') {\n				Object.entries(value).forEach(([k, v]) => {\n					process(`${key}[${k}]`, v);\n				});\n			} else {\n				append(key, value);\n			}\n		}\n	};\n\n	Object.entries(params).forEach(([key, value]) => {\n		process(key, value);\n	});\n\n	if (qs.length > 0) {\n		return `?${qs.join('&')}`;\n	}\n\n	return '';\n};";
    }, useData: true };
    var en = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const getUrl = (config: OpenAPIConfig, options: ApiRequestOptions): string => {\n	const encoder = config.ENCODE_PATH || encodeURI;\n\n	const path = options.url\n		.replace('{api-version}', config.VERSION)\n		.replace(/{(.*?)}/g, (substring: string, group: string) => {\n			if (options.path?.hasOwnProperty(group)) {\n				return encoder(String(options.path[group]));\n			}\n			return substring;\n		});\n\n	const url = `${config.BASE}${path}`;\n	if (options.query) {\n		return `${url}${getQueryString(options.query)}`;\n	}\n	return url;\n};";
    }, useData: true };
    var tn = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const isBlob = (value: any): value is Blob => {\n	return (\n		typeof value === 'object' &&\n		typeof value.type === 'string' &&\n		typeof value.stream === 'function' &&\n		typeof value.arrayBuffer === 'function' &&\n		typeof value.constructor === 'function' &&\n		typeof value.constructor.name === 'string' &&\n		/^(Blob|File)$/.test(value.constructor.name) &&\n		/^(Blob|File)$/.test(value[Symbol.toStringTag])\n	);\n};";
    }, useData: true };
    var nn = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const isDefined = <T>(value: T | null | undefined): value is Exclude<T, null | undefined> => {\n	return value !== undefined && value !== null;\n};";
    }, useData: true };
    var rn = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const isFormData = (value: any): value is FormData => {\n	return value instanceof FormData;\n};";
    }, useData: true };
    var on = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const isString = (value: any): value is string => {\n	return typeof value === 'string';\n};";
    }, useData: true };
    var an = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const isStringWithValue = (value: any): value is string => {\n	return isString(value) && value !== '';\n};";
    }, useData: true };
    var ln = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const isSuccess = (status: number): boolean => {\n	return status >= 200 && status < 300;\n};";
    }, useData: true };
    var sn = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;\n\nconst resolve = async <T>(options: ApiRequestOptions, resolver?: T | Resolver<T>): Promise<T | undefined> => {\n	if (typeof resolver === 'function') {\n		return (resolver as Resolver<T>)(options);\n	}\n	return resolver;\n};";
    }, useData: true };
    var un = { 1: function(e2, t2, n2, r2, o2) {
      return "import { Inject, Injectable } from '@angular/core';\nimport { HttpClient } from '@angular/common/http';\nimport type { Observable } from 'rxjs';\n\nimport type { ApiRequestOptions } from './ApiRequestOptions';\nimport { BaseHttpRequest } from './BaseHttpRequest';\nimport type { OpenAPIConfig } from './OpenAPI';\nimport { OpenAPI } from './OpenAPI';\nimport { request as __request } from './request';\n";
    }, 3: function(e2, t2, n2, r2, o2) {
      return "import type { ApiRequestOptions } from './ApiRequestOptions';\nimport { BaseHttpRequest } from './BaseHttpRequest';\nimport type { CancelablePromise } from './CancelablePromise';\nimport type { OpenAPIConfig } from './OpenAPI';\nimport { request as __request } from './request';\n";
    }, 5: function(e2, t2, n2, r2, o2) {
      return "@Injectable()\n";
    }, 7: function(e2, t2, n2, r2, o2) {
      return "	constructor(\n		@Inject(OpenAPI)\n		config: OpenAPIConfig,\n		http: HttpClient,\n	) {\n		super(config, http);\n	}\n";
    }, 9: function(e2, t2, n2, r2, o2) {
      return "	constructor(config: OpenAPIConfig) {\n		super(config);\n	}\n";
    }, 11: function(e2, t2, n2, r2, o2) {
      return "	/**\n	 * Request method\n	 * @param options The request options from the service\n	 * @returns Observable<T>\n	 * @throws ApiError\n	 */\n	public override request<T>(options: ApiRequestOptions): Observable<T> {\n		return __request(this.config, this.http, options);\n	}\n";
    }, 13: function(e2, t2, n2, r2, o2) {
      return "	/**\n	 * Request method\n	 * @param options The request options from the service\n	 * @returns CancelablePromise<T>\n	 * @throws ApiError\n	 */\n	public override request<T>(options: ApiRequestOptions): CancelablePromise<T> {\n		return __request(this.config, options);\n	}\n";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = e2.invokePartial(s2(r2, "header"), t2, { name: "header", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n" + (null != (a2 = s2(n2, "equals").call(l2, s2(s2(o2, "root"), "httpClient"), "angular", { name: "equals", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.program(3, o2, 0), data: o2, loc: { start: { line: 3, column: 0 }, end: { line: 19, column: 11 } } })) ? a2 : "") + "\n" + (null != (a2 = s2(n2, "equals").call(l2, s2(s2(o2, "root"), "httpClient"), "angular", { name: "equals", hash: {}, fn: e2.program(5, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 21, column: 0 }, end: { line: 23, column: 11 } } })) ? a2 : "") + "export class " + (null != (a2 = e2.lambda(e2.strict(t2, "httpRequest", { start: { line: 24, column: 15 }, end: { line: 24, column: 26 } }), t2)) ? a2 : "") + " extends BaseHttpRequest {\n\n" + (null != (a2 = s2(n2, "equals").call(l2, s2(s2(o2, "root"), "httpClient"), "angular", { name: "equals", hash: {}, fn: e2.program(7, o2, 0), inverse: e2.program(9, o2, 0), data: o2, loc: { start: { line: 26, column: 1 }, end: { line: 38, column: 12 } } })) ? a2 : "") + "\n" + (null != (a2 = s2(n2, "equals").call(l2, s2(s2(o2, "root"), "httpClient"), "angular", { name: "equals", hash: {}, fn: e2.program(11, o2, 0), inverse: e2.program(13, o2, 0), data: o2, loc: { start: { line: 40, column: 1 }, end: { line: 60, column: 12 } } })) ? a2 : "") + "}";
    }, usePartial: true, useData: true };
    var pn = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const getHeaders = async (config: OpenAPIConfig, options: ApiRequestOptions): Promise<Headers> => {\n	const token = await resolve(options, config.TOKEN);\n	const username = await resolve(options, config.USERNAME);\n	const password = await resolve(options, config.PASSWORD);\n	const additionalHeaders = await resolve(options, config.HEADERS);\n\n	const headers = Object.entries({\n		Accept: 'application/json',\n		...additionalHeaders,\n		...options.headers,\n	})\n		.filter(([_, value]) => isDefined(value))\n		.reduce((headers, [key, value]) => ({\n			...headers,\n			[key]: String(value),\n		}), {} as Record<string, string>);\n\n	if (isStringWithValue(token)) {\n		headers['Authorization'] = `Bearer ${token}`;\n	}\n\n	if (isStringWithValue(username) && isStringWithValue(password)) {\n		const credentials = base64(`${username}:${password}`);\n		headers['Authorization'] = `Basic ${credentials}`;\n	}\n\n	if (options.body) {\n		if (options.mediaType) {\n			headers['Content-Type'] = options.mediaType;\n		} else if (isBlob(options.body)) {\n			headers['Content-Type'] = 'application/octet-stream';\n		} else if (isString(options.body)) {\n			headers['Content-Type'] = 'text/plain';\n		} else if (!isFormData(options.body)) {\n			headers['Content-Type'] = 'application/json';\n		}\n	}\n\n	return new Headers(headers);\n};";
    }, useData: true };
    var cn = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const getRequestBody = (options: ApiRequestOptions): any => {\n	if (options.body) {\n		if (options.mediaType?.includes('/json')) {\n			return JSON.stringify(options.body)\n		} else if (isString(options.body) || isBlob(options.body) || isFormData(options.body)) {\n			return options.body as any;\n		} else {\n			return JSON.stringify(options.body);\n		}\n	}\n	return undefined;\n};";
    }, useData: true };
    var mn = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const getResponseBody = async (response: Response): Promise<any> => {\n	if (response.status !== 204) {\n		try {\n			const contentType = response.headers.get('Content-Type');\n			if (contentType) {\n				const isJSON = contentType.toLowerCase().startsWith('application/json');\n				if (isJSON) {\n					return await response.json();\n				} else {\n					return await response.text();\n				}\n			}\n		} catch (error) {\n			console.error(error);\n		}\n	}\n	return undefined;\n};";
    }, useData: true };
    var dn = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const getResponseHeader = (response: Response, responseHeader?: string): string | undefined => {\n	if (responseHeader) {\n		const content = response.headers.get(responseHeader);\n		if (isString(content)) {\n			return content;\n		}\n	}\n	return undefined;\n};";
    }, useData: true };
    var fn = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = e2.invokePartial(l2(r2, "header"), t2, { name: "header", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\nimport FormData from 'form-data';\nimport fetch, { Headers, RequestInit, Response } from 'node-fetch';\n\nimport { ApiError } from './ApiError';\nimport type { ApiRequestOptions } from './ApiRequestOptions';\nimport type { ApiResult } from './ApiResult';\nimport { CancelablePromise } from './CancelablePromise';\nimport type { OnCancel } from './CancelablePromise';\nimport type { OpenAPIConfig } from './OpenAPI';\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/isDefined"), t2, { name: "functions/isDefined", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/isString"), t2, { name: "functions/isString", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/isStringWithValue"), t2, { name: "functions/isStringWithValue", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/isBlob"), t2, { name: "functions/isBlob", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/isFormData"), t2, { name: "functions/isFormData", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/base64"), t2, { name: "functions/base64", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/getQueryString"), t2, { name: "functions/getQueryString", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/getUrl"), t2, { name: "functions/getUrl", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/getFormData"), t2, { name: "functions/getFormData", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/resolve"), t2, { name: "functions/resolve", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "node/getHeaders"), t2, { name: "node/getHeaders", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "node/getRequestBody"), t2, { name: "node/getRequestBody", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "node/sendRequest"), t2, { name: "node/sendRequest", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "node/getResponseHeader"), t2, { name: "node/getResponseHeader", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "node/getResponseBody"), t2, { name: "node/getResponseBody", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/catchErrorCodes"), t2, { name: "functions/catchErrorCodes", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n/**\n * Request method\n * @param config The OpenAPI configuration object\n * @param options The request options from the service\n * @returns CancelablePromise<T>\n * @throws ApiError\n */\nexport const request = <T>(config: OpenAPIConfig, options: ApiRequestOptions): CancelablePromise<T> => {\n	return new CancelablePromise(async (resolve, reject, onCancel) => {\n		try {\n			const url = getUrl(config, options);\n			const formData = getFormData(options);\n			const body = getRequestBody(options);\n			const headers = await getHeaders(config, options);\n\n			if (!onCancel.isCancelled) {\n				const response = await sendRequest(options, url, body, formData, headers, onCancel);\n				const responseBody = await getResponseBody(response);\n				const responseHeader = getResponseHeader(response, options.responseHeader);\n\n				const result: ApiResult = {\n					url,\n					ok: response.ok,\n					status: response.status,\n					statusText: response.statusText,\n					body: responseHeader ?? responseBody,\n				};\n\n				catchErrorCodes(options, result);\n\n				resolve(result.body);\n			}\n		} catch (error) {\n			reject(error);\n		}\n	});\n};";
    }, usePartial: true, useData: true };
    var hn = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "export const sendRequest = async (\n	options: ApiRequestOptions,\n	url: string,\n	body: any,\n	formData: FormData | undefined,\n	headers: Headers,\n	onCancel: OnCancel\n): Promise<Response> => {\n	const controller = new AbortController();\n\n	const request: RequestInit = {\n		headers,\n		method: options.method,\n		body: body ?? formData,\n		signal: controller.signal,\n	};\n\n	onCancel(() => controller.abort());\n\n	return await fetch(url, request);\n};";
    }, useData: true };
    var yn = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.strict, s2 = e2.lambda, i2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = e2.invokePartial(i2(r2, "header"), t2, { name: "header", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\nimport type { ApiRequestOptions } from './ApiRequestOptions';\n\ntype Resolver<T> = (options: ApiRequestOptions) => Promise<T>;\ntype Headers = Record<string, string>;\n\nexport type OpenAPIConfig = {\n	BASE: string;\n	VERSION: string;\n	WITH_CREDENTIALS: boolean;\n	CREDENTIALS: 'include' | 'omit' | 'same-origin';\n	TOKEN?: string | Resolver<string>;\n	USERNAME?: string | Resolver<string>;\n	PASSWORD?: string | Resolver<string>;\n	HEADERS?: Headers | Resolver<Headers>;\n	ENCODE_PATH?: (path: string) => string;\n};\n\nexport const OpenAPI: OpenAPIConfig = {\n	BASE: '" + (null != (a2 = s2(l2(t2, "server", { start: { line: 21, column: 11 }, end: { line: 21, column: 17 } }), t2)) ? a2 : "") + "',\n	VERSION: '" + (null != (a2 = s2(l2(t2, "version", { start: { line: 22, column: 14 }, end: { line: 22, column: 21 } }), t2)) ? a2 : "") + "',\n	WITH_CREDENTIALS: false,\n	CREDENTIALS: 'include',\n	TOKEN: undefined,\n	USERNAME: undefined,\n	PASSWORD: undefined,\n	HEADERS: undefined,\n	ENCODE_PATH: undefined,\n};";
    }, usePartial: true, useData: true };
    var vn = { 1: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = e2.invokePartial(l2(r2, "fetch/request"), t2, { name: "fetch/request", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "";
    }, 3: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = e2.invokePartial(l2(r2, "xhr/request"), t2, { name: "xhr/request", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "";
    }, 5: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = e2.invokePartial(l2(r2, "axios/request"), t2, { name: "axios/request", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "";
    }, 7: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = e2.invokePartial(l2(r2, "angular/request"), t2, { name: "angular/request", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "";
    }, 9: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = e2.invokePartial(l2(r2, "node/request"), t2, { name: "node/request", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = s2(n2, "equals").call(l2, s2(s2(o2, "root"), "httpClient"), "fetch", { name: "equals", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 1, column: 0 }, end: { line: 1, column: 67 } } })) ? a2 : "") + (null != (a2 = s2(n2, "equals").call(l2, s2(s2(o2, "root"), "httpClient"), "xhr", { name: "equals", hash: {}, fn: e2.program(3, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 2, column: 0 }, end: { line: 2, column: 63 } } })) ? a2 : "") + (null != (a2 = s2(n2, "equals").call(l2, s2(s2(o2, "root"), "httpClient"), "axios", { name: "equals", hash: {}, fn: e2.program(5, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 3, column: 0 }, end: { line: 3, column: 67 } } })) ? a2 : "") + (null != (a2 = s2(n2, "equals").call(l2, s2(s2(o2, "root"), "httpClient"), "angular", { name: "equals", hash: {}, fn: e2.program(7, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 4, column: 0 }, end: { line: 4, column: 71 } } })) ? a2 : "") + (null != (a2 = s2(n2, "equals").call(l2, s2(s2(o2, "root"), "httpClient"), "node", { name: "equals", hash: {}, fn: e2.program(9, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 5, column: 0 }, end: { line: 5, column: 65 } } })) ? a2 : "");
    }, usePartial: true, useData: true };
    var gn = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const getHeaders = async (config: OpenAPIConfig, options: ApiRequestOptions): Promise<Headers> => {\n	const token = await resolve(options, config.TOKEN);\n	const username = await resolve(options, config.USERNAME);\n	const password = await resolve(options, config.PASSWORD);\n	const additionalHeaders = await resolve(options, config.HEADERS);\n\n	const headers = Object.entries({\n		Accept: 'application/json',\n		...additionalHeaders,\n		...options.headers,\n	})\n		.filter(([_, value]) => isDefined(value))\n		.reduce((headers, [key, value]) => ({\n			...headers,\n			[key]: String(value),\n		}), {} as Record<string, string>);\n\n	if (isStringWithValue(token)) {\n		headers['Authorization'] = `Bearer ${token}`;\n	}\n\n	if (isStringWithValue(username) && isStringWithValue(password)) {\n		const credentials = base64(`${username}:${password}`);\n		headers['Authorization'] = `Basic ${credentials}`;\n	}\n\n	if (options.body) {\n		if (options.mediaType) {\n			headers['Content-Type'] = options.mediaType;\n		} else if (isBlob(options.body)) {\n			headers['Content-Type'] = options.body.type || 'application/octet-stream';\n		} else if (isString(options.body)) {\n			headers['Content-Type'] = 'text/plain';\n		} else if (!isFormData(options.body)) {\n			headers['Content-Type'] = 'application/json';\n		}\n	}\n\n	return new Headers(headers);\n};";
    }, useData: true };
    var Pn = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const getRequestBody = (options: ApiRequestOptions): any => {\n	if (options.body) {\n		if (options.mediaType?.includes('/json')) {\n			return JSON.stringify(options.body)\n		} else if (isString(options.body) || isBlob(options.body) || isFormData(options.body)) {\n			return options.body;\n		} else {\n			return JSON.stringify(options.body);\n		}\n	}\n\n	return undefined;\n};";
    }, useData: true };
    var bn = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const getResponseBody = (xhr: XMLHttpRequest): any => {\n	if (xhr.status !== 204) {\n		try {\n			const contentType = xhr.getResponseHeader('Content-Type');\n			if (contentType) {\n				const isJSON = contentType.toLowerCase().startsWith('application/json');\n				if (isJSON) {\n					return JSON.parse(xhr.responseText);\n				} else {\n					return xhr.responseText;\n				}\n			}\n		} catch (error) {\n			console.error(error);\n		}\n	}\n	return undefined;\n};";
    }, useData: true };
    var On = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "const getResponseHeader = (xhr: XMLHttpRequest, responseHeader?: string): string | undefined => {\n	if (responseHeader) {\n		const content = xhr.getResponseHeader(responseHeader);\n		if (isString(content)) {\n			return content;\n		}\n	}\n	return undefined;\n};";
    }, useData: true };
    var xn = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = e2.invokePartial(l2(r2, "header"), t2, { name: "header", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\nimport { ApiError } from './ApiError';\nimport type { ApiRequestOptions } from './ApiRequestOptions';\nimport type { ApiResult } from './ApiResult';\nimport { CancelablePromise } from './CancelablePromise';\nimport type { OnCancel } from './CancelablePromise';\nimport type { OpenAPIConfig } from './OpenAPI';\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/isDefined"), t2, { name: "functions/isDefined", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/isString"), t2, { name: "functions/isString", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/isStringWithValue"), t2, { name: "functions/isStringWithValue", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/isBlob"), t2, { name: "functions/isBlob", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/isFormData"), t2, { name: "functions/isFormData", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/isSuccess"), t2, { name: "functions/isSuccess", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/base64"), t2, { name: "functions/base64", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/getQueryString"), t2, { name: "functions/getQueryString", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/getUrl"), t2, { name: "functions/getUrl", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/getFormData"), t2, { name: "functions/getFormData", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/resolve"), t2, { name: "functions/resolve", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "fetch/getHeaders"), t2, { name: "fetch/getHeaders", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "xhr/getRequestBody"), t2, { name: "xhr/getRequestBody", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "xhr/sendRequest"), t2, { name: "xhr/sendRequest", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "xhr/getResponseHeader"), t2, { name: "xhr/getResponseHeader", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "xhr/getResponseBody"), t2, { name: "xhr/getResponseBody", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n" + (null != (a2 = e2.invokePartial(l2(r2, "functions/catchErrorCodes"), t2, { name: "functions/catchErrorCodes", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n\n/**\n * Request method\n * @param config The OpenAPI configuration object\n * @param options The request options from the service\n * @returns CancelablePromise<T>\n * @throws ApiError\n */\nexport const request = <T>(config: OpenAPIConfig, options: ApiRequestOptions): CancelablePromise<T> => {\n	return new CancelablePromise(async (resolve, reject, onCancel) => {\n		try {\n			const url = getUrl(config, options);\n			const formData = getFormData(options);\n			const body = getRequestBody(options);\n			const headers = await getHeaders(config, options);\n\n			if (!onCancel.isCancelled) {\n				const response = await sendRequest(config, options, url, body, formData, headers, onCancel);\n				const responseBody = getResponseBody(response);\n				const responseHeader = getResponseHeader(response, options.responseHeader);\n\n				const result: ApiResult = {\n					url,\n					ok: isSuccess(response.status),\n					status: response.status,\n					statusText: response.statusText,\n					body: responseHeader ?? responseBody,\n				};\n\n				catchErrorCodes(options, result);\n\n				resolve(result.body);\n			}\n		} catch (error) {\n			reject(error);\n		}\n	});\n};";
    }, usePartial: true, useData: true };
    var kn = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "export const sendRequest = async (\n	config: OpenAPIConfig,\n	options: ApiRequestOptions,\n	url: string,\n	body: any,\n	formData: FormData | undefined,\n	headers: Headers,\n	onCancel: OnCancel\n): Promise<XMLHttpRequest> => {\n	const xhr = new XMLHttpRequest();\n	xhr.open(options.method, url, true);\n	xhr.withCredentials = config.WITH_CREDENTIALS;\n\n	headers.forEach((value, key) => {\n		xhr.setRequestHeader(key, value);\n	});\n\n	return new Promise<XMLHttpRequest>((resolve, reject) => {\n		xhr.onload = () => resolve(xhr);\n		xhr.onabort = () => reject(new Error('Request aborted'));\n		xhr.onerror = () => reject(new Error('Network error'));\n		xhr.send(body ?? formData);\n\n		onCancel(() => xhr.abort());\n	});\n};";
    }, useData: true };
    var Rn = { 1: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "\n" + (null != (a2 = l2(n2, "each").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "imports"), { name: "each", hash: {}, fn: e2.program(2, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 5, column: 0 }, end: { line: 7, column: 9 } } })) ? a2 : "");
    }, 2: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lambda;
      return "import type { " + (null != (a2 = l2(t2, t2)) ? a2 : "") + " } from './" + (null != (a2 = l2(t2, t2)) ? a2 : "") + "';\n";
    }, 4: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = e2.invokePartial(l2(r2, "exportInterface"), t2, { name: "exportInterface", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "";
    }, 6: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "equals").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "export"), "one-of", { name: "equals", hash: {}, fn: e2.program(7, o2, 0), inverse: e2.program(9, o2, 0), data: o2, loc: { start: { line: 12, column: 0 }, end: { line: 26, column: 0 } } })) ? a2 : "";
    }, 7: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = e2.invokePartial(l2(r2, "exportComposition"), t2, { name: "exportComposition", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "";
    }, 9: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "equals").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "export"), "any-of", { name: "equals", hash: {}, fn: e2.program(7, o2, 0), inverse: e2.program(10, o2, 0), data: o2, loc: { start: { line: 14, column: 0 }, end: { line: 26, column: 0 } } })) ? a2 : "";
    }, 10: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "equals").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "export"), "all-of", { name: "equals", hash: {}, fn: e2.program(7, o2, 0), inverse: e2.program(11, o2, 0), data: o2, loc: { start: { line: 16, column: 0 }, end: { line: 26, column: 0 } } })) ? a2 : "";
    }, 11: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "equals").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "export"), "enum", { name: "equals", hash: {}, fn: e2.program(12, o2, 0), inverse: e2.program(13, o2, 0), data: o2, loc: { start: { line: 18, column: 0 }, end: { line: 26, column: 0 } } })) ? a2 : "";
    }, 12: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "if").call(null != t2 ? t2 : e2.nullContext || {}, l2(l2(o2, "root"), "useUnionTypes"), { name: "if", hash: {}, fn: e2.program(13, o2, 0), inverse: e2.program(15, o2, 0), data: o2, loc: { start: { line: 19, column: 0 }, end: { line: 23, column: 7 } } })) ? a2 : "";
    }, 13: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = e2.invokePartial(l2(r2, "exportType"), t2, { name: "exportType", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "";
    }, 15: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = e2.invokePartial(l2(r2, "exportEnum"), t2, { name: "exportEnum", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = e2.invokePartial(s2(r2, "header"), t2, { name: "header", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n" + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "imports"), { name: "if", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 3, column: 0 }, end: { line: 8, column: 7 } } })) ? a2 : "") + "\n" + (null != (a2 = s2(n2, "equals").call(l2, s2(t2, "export"), "interface", { name: "equals", hash: {}, fn: e2.program(4, o2, 0), inverse: e2.program(6, o2, 0), data: o2, loc: { start: { line: 10, column: 0 }, end: { line: 26, column: 11 } } })) ? a2 : "");
    }, usePartial: true, useData: true };
    var Cn = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = e2.invokePartial(l2(r2, "header"), t2, { name: "header", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\nexport const $" + (null != (a2 = e2.lambda(e2.strict(t2, "name", { start: { line: 3, column: 17 }, end: { line: 3, column: 21 } }), t2)) ? a2 : "") + " = " + (null != (a2 = e2.invokePartial(l2(r2, "schema"), t2, { name: "schema", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + " as const;";
    }, usePartial: true, useData: true };
    var wn = { 1: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = l2(n2, "if").call(null != t2 ? t2 : e2.nullContext || {}, l2(l2(o2, "root"), "exportClient"), { name: "if", hash: {}, fn: e2.program(2, o2, 0), inverse: e2.program(4, o2, 0), data: o2, loc: { start: { line: 4, column: 0 }, end: { line: 11, column: 7 } } })) ? a2 : "") + "\n";
    }, 2: function(e2, t2, n2, r2, o2) {
      return "import { Injectable } from '@angular/core';\nimport type { Observable } from 'rxjs';\n";
    }, 4: function(e2, t2, n2, r2, o2) {
      return "import { Injectable } from '@angular/core';\nimport { HttpClient } from '@angular/common/http';\nimport type { Observable } from 'rxjs';\n";
    }, 6: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = l2(n2, "each").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "imports"), { name: "each", hash: {}, fn: e2.program(7, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 15, column: 0 }, end: { line: 17, column: 9 } } })) ? a2 : "") + "\n";
    }, 7: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lambda;
      return "import type { " + (null != (a2 = l2(t2, t2)) ? a2 : "") + " } from '../models/" + (null != (a2 = l2(t2, t2)) ? a2 : "") + "';\n";
    }, 9: function(e2, t2, n2, r2, o2) {
      return "import type { CancelablePromise } from '../core/CancelablePromise';\n";
    }, 11: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "equals").call(null != t2 ? t2 : e2.nullContext || {}, l2(l2(o2, "root"), "httpClient"), "angular", { name: "equals", hash: {}, fn: e2.program(12, o2, 0), inverse: e2.program(14, o2, 0), data: o2, loc: { start: { line: 24, column: 0 }, end: { line: 28, column: 11 } } })) ? a2 : "";
    }, 12: function(e2, t2, n2, r2, o2) {
      return "import { BaseHttpRequest } from '../core/BaseHttpRequest';\n";
    }, 14: function(e2, t2, n2, r2, o2) {
      return "import type { BaseHttpRequest } from '../core/BaseHttpRequest';\n";
    }, 16: function(e2, t2, n2, r2, o2) {
      return "import { OpenAPI } from '../core/OpenAPI';\nimport { request as __request } from '../core/request';\n";
    }, 18: function(e2, t2, n2, r2, o2) {
      return "@Injectable()\n";
    }, 20: function(e2, t2, n2, r2, o2) {
      return "\n	constructor(public readonly httpRequest: BaseHttpRequest) {}\n";
    }, 22: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "equals").call(null != t2 ? t2 : e2.nullContext || {}, l2(l2(o2, "root"), "httpClient"), "angular", { name: "equals", hash: {}, fn: e2.program(23, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 42, column: 1 }, end: { line: 45, column: 12 } } })) ? a2 : "";
    }, 23: function(e2, t2, n2, r2, o2) {
      return "\n	constructor(public readonly http: HttpClient) {}\n";
    }, 25: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.strict, i2 = e2.lambda, u2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "	/**\n" + (null != (a2 = u2(n2, "if").call(l2, u2(t2, "deprecated"), { name: "if", hash: {}, fn: e2.program(26, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 50, column: 1 }, end: { line: 52, column: 8 } } })) ? a2 : "") + (null != (a2 = u2(n2, "if").call(l2, u2(t2, "summary"), { name: "if", hash: {}, fn: e2.program(28, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 53, column: 1 }, end: { line: 55, column: 8 } } })) ? a2 : "") + (null != (a2 = u2(n2, "if").call(l2, u2(t2, "description"), { name: "if", hash: {}, fn: e2.program(30, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 56, column: 1 }, end: { line: 58, column: 8 } } })) ? a2 : "") + (null != (a2 = u2(n2, "unless").call(l2, u2(u2(o2, "root"), "useOptions"), { name: "unless", hash: {}, fn: e2.program(32, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 59, column: 1 }, end: { line: 65, column: 12 } } })) ? a2 : "") + (null != (a2 = u2(n2, "each").call(l2, u2(t2, "results"), { name: "each", hash: {}, fn: e2.program(37, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 66, column: 1 }, end: { line: 68, column: 10 } } })) ? a2 : "") + "	 * @throws ApiError\n	 */\n" + (null != (a2 = u2(n2, "if").call(l2, u2(u2(o2, "root"), "exportClient"), { name: "if", hash: {}, fn: e2.program(39, o2, 0), inverse: e2.program(44, o2, 0), data: o2, loc: { start: { line: 71, column: 1 }, end: { line: 87, column: 8 } } })) ? a2 : "") + "			method: '" + (null != (a2 = i2(s2(t2, "method", { start: { line: 88, column: 15 }, end: { line: 88, column: 21 } }), t2)) ? a2 : "") + "',\n			url: '" + (null != (a2 = i2(s2(t2, "path", { start: { line: 89, column: 12 }, end: { line: 89, column: 16 } }), t2)) ? a2 : "") + "',\n" + (null != (a2 = u2(n2, "if").call(l2, u2(t2, "parametersPath"), { name: "if", hash: {}, fn: e2.program(49, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 90, column: 3 }, end: { line: 96, column: 10 } } })) ? a2 : "") + (null != (a2 = u2(n2, "if").call(l2, u2(t2, "parametersCookie"), { name: "if", hash: {}, fn: e2.program(52, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 97, column: 3 }, end: { line: 103, column: 10 } } })) ? a2 : "") + (null != (a2 = u2(n2, "if").call(l2, u2(t2, "parametersHeader"), { name: "if", hash: {}, fn: e2.program(54, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 104, column: 3 }, end: { line: 110, column: 10 } } })) ? a2 : "") + (null != (a2 = u2(n2, "if").call(l2, u2(t2, "parametersQuery"), { name: "if", hash: {}, fn: e2.program(56, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 111, column: 3 }, end: { line: 117, column: 10 } } })) ? a2 : "") + (null != (a2 = u2(n2, "if").call(l2, u2(t2, "parametersForm"), { name: "if", hash: {}, fn: e2.program(58, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 118, column: 3 }, end: { line: 124, column: 10 } } })) ? a2 : "") + (null != (a2 = u2(n2, "if").call(l2, u2(t2, "parametersBody"), { name: "if", hash: {}, fn: e2.program(60, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 125, column: 3 }, end: { line: 135, column: 10 } } })) ? a2 : "") + (null != (a2 = u2(n2, "if").call(l2, u2(t2, "responseHeader"), { name: "if", hash: {}, fn: e2.program(67, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 136, column: 3 }, end: { line: 138, column: 10 } } })) ? a2 : "") + (null != (a2 = u2(n2, "if").call(l2, u2(t2, "errors"), { name: "if", hash: {}, fn: e2.program(69, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 139, column: 3 }, end: { line: 145, column: 10 } } })) ? a2 : "") + "		});\n	}\n\n";
    }, 26: function(e2, t2, n2, r2, o2) {
      return "	 * @deprecated\n";
    }, 28: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "	 * " + (null != (a2 = l2(n2, "escapeComment").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "summary"), { name: "escapeComment", hash: {}, data: o2, loc: { start: { line: 54, column: 4 }, end: { line: 54, column: 31 } } })) ? a2 : "") + "\n";
    }, 30: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "	 * " + (null != (a2 = l2(n2, "escapeComment").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "description"), { name: "escapeComment", hash: {}, data: o2, loc: { start: { line: 57, column: 4 }, end: { line: 57, column: 35 } } })) ? a2 : "") + "\n";
    }, 32: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "if").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "parameters"), { name: "if", hash: {}, fn: e2.program(33, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 60, column: 1 }, end: { line: 64, column: 8 } } })) ? a2 : "";
    }, 33: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "each").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "parameters"), { name: "each", hash: {}, fn: e2.program(34, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 61, column: 1 }, end: { line: 63, column: 10 } } })) ? a2 : "";
    }, 34: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "	 * @param " + (null != (a2 = e2.lambda(e2.strict(t2, "name", { start: { line: 62, column: 14 }, end: { line: 62, column: 18 } }), t2)) ? a2 : "") + " " + (null != (a2 = l2(n2, "if").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "description"), { name: "if", hash: {}, fn: e2.program(35, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 62, column: 22 }, end: { line: 62, column: 79 } } })) ? a2 : "") + "\n";
    }, 35: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "escapeComment").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "description"), { name: "escapeComment", hash: {}, data: o2, loc: { start: { line: 62, column: 41 }, end: { line: 62, column: 72 } } })) ? a2 : "";
    }, 37: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "	 * @returns " + (null != (a2 = e2.lambda(e2.strict(t2, "type", { start: { line: 67, column: 16 }, end: { line: 67, column: 20 } }), t2)) ? a2 : "") + " " + (null != (a2 = l2(n2, "if").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "description"), { name: "if", hash: {}, fn: e2.program(35, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 67, column: 24 }, end: { line: 67, column: 81 } } })) ? a2 : "") + "\n";
    }, 39: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "equals").call(null != t2 ? t2 : e2.nullContext || {}, l2(l2(o2, "root"), "httpClient"), "angular", { name: "equals", hash: {}, fn: e2.program(40, o2, 0), inverse: e2.program(42, o2, 0), data: o2, loc: { start: { line: 72, column: 1 }, end: { line: 78, column: 12 } } })) ? a2 : "";
    }, 40: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "	public " + (null != (a2 = e2.lambda(e2.strict(t2, "name", { start: { line: 73, column: 11 }, end: { line: 73, column: 15 } }), t2)) ? a2 : "") + "(" + (null != (a2 = e2.invokePartial(l2(r2, "parameters"), t2, { name: "parameters", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "): Observable<" + (null != (a2 = e2.invokePartial(l2(r2, "result"), t2, { name: "result", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "> {\n		return this.httpRequest.request({\n";
    }, 42: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "	public " + (null != (a2 = e2.lambda(e2.strict(t2, "name", { start: { line: 76, column: 11 }, end: { line: 76, column: 15 } }), t2)) ? a2 : "") + "(" + (null != (a2 = e2.invokePartial(l2(r2, "parameters"), t2, { name: "parameters", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "): CancelablePromise<" + (null != (a2 = e2.invokePartial(l2(r2, "result"), t2, { name: "result", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "> {\n		return this.httpRequest.request({\n";
    }, 44: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "equals").call(null != t2 ? t2 : e2.nullContext || {}, l2(l2(o2, "root"), "httpClient"), "angular", { name: "equals", hash: {}, fn: e2.program(45, o2, 0), inverse: e2.program(47, o2, 0), data: o2, loc: { start: { line: 80, column: 1 }, end: { line: 86, column: 12 } } })) ? a2 : "";
    }, 45: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "	public " + (null != (a2 = e2.lambda(e2.strict(t2, "name", { start: { line: 81, column: 11 }, end: { line: 81, column: 15 } }), t2)) ? a2 : "") + "(" + (null != (a2 = e2.invokePartial(l2(r2, "parameters"), t2, { name: "parameters", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "): Observable<" + (null != (a2 = e2.invokePartial(l2(r2, "result"), t2, { name: "result", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "> {\n		return __request(OpenAPI, this.http, {\n";
    }, 47: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "	public static " + (null != (a2 = e2.lambda(e2.strict(t2, "name", { start: { line: 84, column: 18 }, end: { line: 84, column: 22 } }), t2)) ? a2 : "") + "(" + (null != (a2 = e2.invokePartial(l2(r2, "parameters"), t2, { name: "parameters", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "): CancelablePromise<" + (null != (a2 = e2.invokePartial(l2(r2, "result"), t2, { name: "result", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "> {\n		return __request(OpenAPI, {\n";
    }, 49: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "			path: {\n" + (null != (a2 = l2(n2, "each").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "parametersPath"), { name: "each", hash: {}, fn: e2.program(50, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 92, column: 4 }, end: { line: 94, column: 13 } } })) ? a2 : "") + "			},\n";
    }, 50: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.strict, s2 = e2.lambda;
      return "				'" + (null != (a2 = s2(l2(t2, "prop", { start: { line: 93, column: 8 }, end: { line: 93, column: 12 } }), t2)) ? a2 : "") + "': " + (null != (a2 = s2(l2(t2, "name", { start: { line: 93, column: 21 }, end: { line: 93, column: 25 } }), t2)) ? a2 : "") + ",\n";
    }, 52: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "			cookies: {\n" + (null != (a2 = l2(n2, "each").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "parametersCookie"), { name: "each", hash: {}, fn: e2.program(50, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 99, column: 4 }, end: { line: 101, column: 13 } } })) ? a2 : "") + "			},\n";
    }, 54: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "			headers: {\n" + (null != (a2 = l2(n2, "each").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "parametersHeader"), { name: "each", hash: {}, fn: e2.program(50, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 106, column: 4 }, end: { line: 108, column: 13 } } })) ? a2 : "") + "			},\n";
    }, 56: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "			query: {\n" + (null != (a2 = l2(n2, "each").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "parametersQuery"), { name: "each", hash: {}, fn: e2.program(50, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 113, column: 4 }, end: { line: 115, column: 13 } } })) ? a2 : "") + "			},\n";
    }, 58: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "			formData: {\n" + (null != (a2 = l2(n2, "each").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "parametersForm"), { name: "each", hash: {}, fn: e2.program(50, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 120, column: 4 }, end: { line: 122, column: 13 } } })) ? a2 : "") + "			},\n";
    }, 60: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = s2(n2, "equals").call(l2, s2(s2(t2, "parametersBody"), "in"), "formData", { name: "equals", hash: {}, fn: e2.program(61, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 126, column: 3 }, end: { line: 128, column: 14 } } })) ? a2 : "") + (null != (a2 = s2(n2, "equals").call(l2, s2(s2(t2, "parametersBody"), "in"), "body", { name: "equals", hash: {}, fn: e2.program(63, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 129, column: 3 }, end: { line: 131, column: 14 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(s2(t2, "parametersBody"), "mediaType"), { name: "if", hash: {}, fn: e2.program(65, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 132, column: 3 }, end: { line: 134, column: 10 } } })) ? a2 : "");
    }, 61: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "			formData: " + (null != (a2 = e2.lambda(e2.strict(l2(t2, "parametersBody"), "name", { start: { line: 127, column: 16 }, end: { line: 127, column: 35 } }), t2)) ? a2 : "") + ",\n";
    }, 63: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "			body: " + (null != (a2 = e2.lambda(e2.strict(l2(t2, "parametersBody"), "name", { start: { line: 130, column: 12 }, end: { line: 130, column: 31 } }), t2)) ? a2 : "") + ",\n";
    }, 65: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "			mediaType: '" + (null != (a2 = e2.lambda(e2.strict(l2(t2, "parametersBody"), "mediaType", { start: { line: 133, column: 18 }, end: { line: 133, column: 42 } }), t2)) ? a2 : "") + "',\n";
    }, 67: function(e2, t2, n2, r2, o2) {
      var a2;
      return "			responseHeader: '" + (null != (a2 = e2.lambda(e2.strict(t2, "responseHeader", { start: { line: 137, column: 23 }, end: { line: 137, column: 37 } }), t2)) ? a2 : "") + "',\n";
    }, 69: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "			errors: {\n" + (null != (a2 = l2(n2, "each").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "errors"), { name: "each", hash: {}, fn: e2.program(70, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 141, column: 4 }, end: { line: 143, column: 13 } } })) ? a2 : "") + "			},\n";
    }, 70: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "				" + (null != (a2 = e2.lambda(e2.strict(t2, "code", { start: { line: 142, column: 7 }, end: { line: 142, column: 11 } }), t2)) ? a2 : "") + ": `" + (null != (a2 = l2(n2, "escapeDescription").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "description"), { name: "escapeDescription", hash: {}, data: o2, loc: { start: { line: 142, column: 17 }, end: { line: 142, column: 52 } } })) ? a2 : "") + "`,\n";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.strict, i2 = e2.lambda, u2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = e2.invokePartial(u2(r2, "header"), t2, { name: "header", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n" + (null != (a2 = u2(n2, "equals").call(l2, u2(u2(o2, "root"), "httpClient"), "angular", { name: "equals", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 3, column: 0 }, end: { line: 13, column: 11 } } })) ? a2 : "") + (null != (a2 = u2(n2, "if").call(l2, u2(t2, "imports"), { name: "if", hash: {}, fn: e2.program(6, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 14, column: 0 }, end: { line: 19, column: 7 } } })) ? a2 : "") + (null != (a2 = u2(n2, "notEquals").call(l2, u2(u2(o2, "root"), "httpClient"), "angular", { name: "notEquals", hash: {}, fn: e2.program(9, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 20, column: 0 }, end: { line: 22, column: 14 } } })) ? a2 : "") + (null != (a2 = u2(n2, "if").call(l2, u2(u2(o2, "root"), "exportClient"), { name: "if", hash: {}, fn: e2.program(11, o2, 0), inverse: e2.program(16, o2, 0), data: o2, loc: { start: { line: 23, column: 0 }, end: { line: 32, column: 7 } } })) ? a2 : "") + "\n" + (null != (a2 = u2(n2, "equals").call(l2, u2(u2(o2, "root"), "httpClient"), "angular", { name: "equals", hash: {}, fn: e2.program(18, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 34, column: 0 }, end: { line: 36, column: 11 } } })) ? a2 : "") + "export class " + (null != (a2 = i2(s2(t2, "name", { start: { line: 37, column: 16 }, end: { line: 37, column: 20 } }), t2)) ? a2 : "") + (null != (a2 = i2(s2(u2(o2, "root"), "postfix", { start: { line: 37, column: 26 }, end: { line: 37, column: 39 } }), t2)) ? a2 : "") + " {\n" + (null != (a2 = u2(n2, "if").call(l2, u2(u2(o2, "root"), "exportClient"), { name: "if", hash: {}, fn: e2.program(20, o2, 0), inverse: e2.program(22, o2, 0), data: o2, loc: { start: { line: 38, column: 1 }, end: { line: 46, column: 8 } } })) ? a2 : "") + "\n" + (null != (a2 = u2(n2, "each").call(l2, u2(t2, "operations"), { name: "each", hash: {}, fn: e2.program(25, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 48, column: 1 }, end: { line: 149, column: 10 } } })) ? a2 : "") + "}";
    }, usePartial: true, useData: true };
    var qn = { 1: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.strict, s2 = e2.lambda;
      return "export { " + (null != (a2 = s2(l2(t2, "clientName", { start: { line: 4, column: 12 }, end: { line: 4, column: 22 } }), t2)) ? a2 : "") + " } from './" + (null != (a2 = s2(l2(t2, "clientName", { start: { line: 4, column: 39 }, end: { line: 4, column: 49 } }), t2)) ? a2 : "") + "';\n\n";
    }, 3: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "export { ApiError } from './core/ApiError';\n" + (null != (a2 = l2(n2, "if").call(null != t2 ? t2 : e2.nullContext || {}, l2(l2(o2, "root"), "exportClient"), { name: "if", hash: {}, fn: e2.program(4, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 9, column: 0 }, end: { line: 11, column: 7 } } })) ? a2 : "") + "export { CancelablePromise, CancelError } from './core/CancelablePromise';\nexport { OpenAPI } from './core/OpenAPI';\nexport type { OpenAPIConfig } from './core/OpenAPI';\n";
    }, 4: function(e2, t2, n2, r2, o2) {
      return "export { BaseHttpRequest } from './core/BaseHttpRequest';\n";
    }, 6: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "if").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "models"), { name: "if", hash: {}, fn: e2.program(7, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 17, column: 0 }, end: { line: 30, column: 7 } } })) ? a2 : "";
    }, 7: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "\n" + (null != (a2 = l2(n2, "each").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "models"), { name: "each", hash: {}, fn: e2.program(8, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 19, column: 0 }, end: { line: 29, column: 9 } } })) ? a2 : "");
    }, 8: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "if").call(null != t2 ? t2 : e2.nullContext || {}, l2(l2(o2, "root"), "useUnionTypes"), { name: "if", hash: {}, fn: e2.program(9, o2, 0), inverse: e2.program(11, o2, 0), data: o2, loc: { start: { line: 20, column: 0 }, end: { line: 28, column: 7 } } })) ? a2 : "";
    }, 9: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.strict, s2 = e2.lambda;
      return "export type { " + (null != (a2 = s2(l2(t2, "name", { start: { line: 21, column: 17 }, end: { line: 21, column: 21 } }), t2)) ? a2 : "") + " } from './models/" + (null != (a2 = s2(l2(t2, "name", { start: { line: 21, column: 45 }, end: { line: 21, column: 49 } }), t2)) ? a2 : "") + "';\n";
    }, 11: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "if").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "enum"), { name: "if", hash: {}, fn: e2.program(12, o2, 0), inverse: e2.program(14, o2, 0), data: o2, loc: { start: { line: 22, column: 0 }, end: { line: 28, column: 0 } } })) ? a2 : "";
    }, 12: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.strict, s2 = e2.lambda;
      return "export { " + (null != (a2 = s2(l2(t2, "name", { start: { line: 23, column: 12 }, end: { line: 23, column: 16 } }), t2)) ? a2 : "") + " } from './models/" + (null != (a2 = s2(l2(t2, "name", { start: { line: 23, column: 40 }, end: { line: 23, column: 44 } }), t2)) ? a2 : "") + "';\n";
    }, 14: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "if").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "enums"), { name: "if", hash: {}, fn: e2.program(12, o2, 0), inverse: e2.program(9, o2, 0), data: o2, loc: { start: { line: 24, column: 0 }, end: { line: 28, column: 0 } } })) ? a2 : "";
    }, 16: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "if").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "models"), { name: "if", hash: {}, fn: e2.program(17, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 33, column: 0 }, end: { line: 38, column: 7 } } })) ? a2 : "";
    }, 17: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "\n" + (null != (a2 = l2(n2, "each").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "models"), { name: "each", hash: {}, fn: e2.program(18, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 35, column: 0 }, end: { line: 37, column: 9 } } })) ? a2 : "");
    }, 18: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.strict, s2 = e2.lambda;
      return "export { $" + (null != (a2 = s2(l2(t2, "name", { start: { line: 36, column: 13 }, end: { line: 36, column: 17 } }), t2)) ? a2 : "") + " } from './schemas/$" + (null != (a2 = s2(l2(t2, "name", { start: { line: 36, column: 43 }, end: { line: 36, column: 47 } }), t2)) ? a2 : "") + "';\n";
    }, 20: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "if").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "services"), { name: "if", hash: {}, fn: e2.program(21, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 41, column: 0 }, end: { line: 46, column: 7 } } })) ? a2 : "";
    }, 21: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "\n" + (null != (a2 = l2(n2, "each").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "services"), { name: "each", hash: {}, fn: e2.program(22, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 43, column: 0 }, end: { line: 45, column: 9 } } })) ? a2 : "");
    }, 22: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.strict, s2 = e2.lambda, i2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "export { " + (null != (a2 = s2(l2(t2, "name", { start: { line: 44, column: 12 }, end: { line: 44, column: 16 } }), t2)) ? a2 : "") + (null != (a2 = s2(l2(i2(o2, "root"), "postfix", { start: { line: 44, column: 22 }, end: { line: 44, column: 35 } }), t2)) ? a2 : "") + " } from './services/" + (null != (a2 = s2(l2(t2, "name", { start: { line: 44, column: 61 }, end: { line: 44, column: 65 } }), t2)) ? a2 : "") + (null != (a2 = s2(l2(i2(o2, "root"), "postfix", { start: { line: 44, column: 71 }, end: { line: 44, column: 84 } }), t2)) ? a2 : "") + "';\n";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = e2.invokePartial(s2(r2, "header"), t2, { name: "header", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + "\n" + (null != (a2 = s2(n2, "if").call(l2, s2(s2(o2, "root"), "exportClient"), { name: "if", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 3, column: 0 }, end: { line: 6, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(s2(o2, "root"), "exportCore"), { name: "if", hash: {}, fn: e2.program(3, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 7, column: 0 }, end: { line: 15, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(s2(o2, "root"), "exportModels"), { name: "if", hash: {}, fn: e2.program(6, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 16, column: 0 }, end: { line: 31, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(s2(o2, "root"), "exportSchemas"), { name: "if", hash: {}, fn: e2.program(16, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 32, column: 0 }, end: { line: 39, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(s2(o2, "root"), "exportServices"), { name: "if", hash: {}, fn: e2.program(20, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 40, column: 0 }, end: { line: 47, column: 7 } } })) ? a2 : "");
    }, usePartial: true, useData: true };
    var An = { 1: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = s2(n2, "equals").call(l2, s2(s2(o2, "root"), "httpClient"), "fetch", { name: "equals", hash: {}, fn: e2.program(2, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 2, column: 0 }, end: { line: 2, column: 53 } } })) ? a2 : "") + (null != (a2 = s2(n2, "equals").call(l2, s2(s2(o2, "root"), "httpClient"), "xhr", { name: "equals", hash: {}, fn: e2.program(2, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 3, column: 0 }, end: { line: 3, column: 51 } } })) ? a2 : "") + (null != (a2 = s2(n2, "equals").call(l2, s2(s2(o2, "root"), "httpClient"), "axios", { name: "equals", hash: {}, fn: e2.program(2, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 4, column: 0 }, end: { line: 4, column: 53 } } })) ? a2 : "") + (null != (a2 = s2(n2, "equals").call(l2, s2(s2(o2, "root"), "httpClient"), "angular", { name: "equals", hash: {}, fn: e2.program(2, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 5, column: 0 }, end: { line: 5, column: 55 } } })) ? a2 : "") + (null != (a2 = s2(n2, "equals").call(l2, s2(s2(o2, "root"), "httpClient"), "node", { name: "equals", hash: {}, fn: e2.program(2, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 6, column: 0 }, end: { line: 6, column: 52 } } })) ? a2 : "");
    }, 2: function(e2, t2, n2, r2, o2) {
      return "Blob";
    }, 4: function(e2, t2, n2, r2, o2) {
      var a2;
      return null != (a2 = e2.lambda(e2.strict(t2, "base", { start: { line: 8, column: 3 }, end: { line: 8, column: 7 } }), t2)) ? a2 : "";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "equals").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "base"), "binary", { name: "equals", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.program(4, o2, 0), data: o2, loc: { start: { line: 1, column: 0 }, end: { line: 9, column: 13 } } })) ? a2 : "";
    }, useData: true };
    var jn = { 1: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "/**\n" + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "description"), { name: "if", hash: {}, fn: e2.program(2, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 3, column: 0 }, end: { line: 5, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "deprecated"), { name: "if", hash: {}, fn: e2.program(4, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 6, column: 0 }, end: { line: 8, column: 7 } } })) ? a2 : "") + " */\n";
    }, 2: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return " * " + (null != (a2 = l2(n2, "escapeComment").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "description"), { name: "escapeComment", hash: {}, data: o2, loc: { start: { line: 4, column: 3 }, end: { line: 4, column: 34 } } })) ? a2 : "") + "\n";
    }, 4: function(e2, t2, n2, r2, o2) {
      return " * @deprecated\n";
    }, 6: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "unless").call(null != t2 ? t2 : e2.nullContext || {}, l2(l2(o2, "root"), "useUnionTypes"), { name: "unless", hash: {}, fn: e2.program(7, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 13, column: 0 }, end: { line: 37, column: 11 } } })) ? a2 : "";
    }, 7: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "\nexport namespace " + (null != (a2 = e2.lambda(e2.strict(t2, "name", { start: { line: 15, column: 20 }, end: { line: 15, column: 24 } }), t2)) ? a2 : "") + " {\n\n" + (null != (a2 = l2(n2, "each").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "enums"), { name: "each", hash: {}, fn: e2.program(8, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 17, column: 1 }, end: { line: 34, column: 10 } } })) ? a2 : "") + "\n}\n";
    }, 8: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = s2(n2, "ifdef").call(l2, s2(t2, "description"), s2(t2, "deprecated"), { name: "ifdef", hash: {}, fn: e2.program(9, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 18, column: 1 }, end: { line: 27, column: 11 } } })) ? a2 : "") + "	export enum " + (null != (a2 = e2.lambda(e2.strict(t2, "name", { start: { line: 28, column: 16 }, end: { line: 28, column: 20 } }), t2)) ? a2 : "") + " {\n" + (null != (a2 = s2(n2, "each").call(l2, s2(t2, "enum"), { name: "each", hash: {}, fn: e2.program(14, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 29, column: 2 }, end: { line: 31, column: 11 } } })) ? a2 : "") + "	}\n\n";
    }, 9: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "	/**\n" + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "description"), { name: "if", hash: {}, fn: e2.program(10, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 20, column: 1 }, end: { line: 22, column: 8 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "deprecated"), { name: "if", hash: {}, fn: e2.program(12, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 23, column: 1 }, end: { line: 25, column: 8 } } })) ? a2 : "") + "	 */\n";
    }, 10: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "	 * " + (null != (a2 = l2(n2, "escapeComment").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "description"), { name: "escapeComment", hash: {}, data: o2, loc: { start: { line: 21, column: 4 }, end: { line: 21, column: 35 } } })) ? a2 : "") + "\n";
    }, 12: function(e2, t2, n2, r2, o2) {
      return "	 * @deprecated\n";
    }, 14: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.strict, s2 = e2.lambda;
      return "		" + (null != (a2 = s2(l2(t2, "name", { start: { line: 30, column: 5 }, end: { line: 30, column: 9 } }), t2)) ? a2 : "") + " = " + (null != (a2 = s2(l2(t2, "value", { start: { line: 30, column: 18 }, end: { line: 30, column: 23 } }), t2)) ? a2 : "") + ",\n";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = s2(n2, "ifdef").call(l2, s2(t2, "description"), s2(t2, "deprecated"), { name: "ifdef", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 1, column: 0 }, end: { line: 10, column: 10 } } })) ? a2 : "") + "export type " + (null != (a2 = e2.lambda(e2.strict(t2, "name", { start: { line: 11, column: 15 }, end: { line: 11, column: 19 } }), t2)) ? a2 : "") + " = " + (null != (a2 = e2.invokePartial(s2(r2, "type"), t2, { name: "type", hash: { parent: s2(t2, "name") }, data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + ";\n" + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "enums"), { name: "if", hash: {}, fn: e2.program(6, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 12, column: 0 }, end: { line: 38, column: 7 } } })) ? a2 : "");
    }, usePartial: true, useData: true };
    var Hn = { 1: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "/**\n" + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "description"), { name: "if", hash: {}, fn: e2.program(2, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 3, column: 0 }, end: { line: 5, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "deprecated"), { name: "if", hash: {}, fn: e2.program(4, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 6, column: 0 }, end: { line: 8, column: 7 } } })) ? a2 : "") + " */\n";
    }, 2: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return " * " + (null != (a2 = l2(n2, "escapeComment").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "description"), { name: "escapeComment", hash: {}, data: o2, loc: { start: { line: 4, column: 3 }, end: { line: 4, column: 34 } } })) ? a2 : "") + "\n";
    }, 4: function(e2, t2, n2, r2, o2) {
      return " * @deprecated\n";
    }, 6: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = s2(n2, "if").call(l2, s2(t2, "description"), { name: "if", hash: {}, fn: e2.program(7, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 13, column: 1 }, end: { line: 17, column: 8 } } })) ? a2 : "") + (null != (a2 = s2(n2, "containsSpaces").call(l2, s2(t2, "name"), { name: "containsSpaces", hash: {}, fn: e2.program(9, o2, 0), inverse: e2.program(11, o2, 0), data: o2, loc: { start: { line: 18, column: 1 }, end: { line: 22, column: 20 } } })) ? a2 : "");
    }, 7: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "	/**\n	 * " + (null != (a2 = l2(n2, "escapeComment").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "description"), { name: "escapeComment", hash: {}, data: o2, loc: { start: { line: 15, column: 4 }, end: { line: 15, column: 35 } } })) ? a2 : "") + "\n	 */\n";
    }, 9: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.strict, s2 = e2.lambda;
      return "	'" + (null != (a2 = s2(l2(t2, "name", { start: { line: 19, column: 5 }, end: { line: 19, column: 9 } }), t2)) ? a2 : "") + "' = " + (null != (a2 = s2(l2(t2, "value", { start: { line: 19, column: 19 }, end: { line: 19, column: 24 } }), t2)) ? a2 : "") + ",\n";
    }, 11: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.strict, s2 = e2.lambda;
      return "	" + (null != (a2 = s2(l2(t2, "name", { start: { line: 21, column: 4 }, end: { line: 21, column: 8 } }), t2)) ? a2 : "") + " = " + (null != (a2 = s2(l2(t2, "value", { start: { line: 21, column: 17 }, end: { line: 21, column: 22 } }), t2)) ? a2 : "") + ",\n";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = s2(n2, "ifdef").call(l2, s2(t2, "description"), s2(t2, "deprecated"), { name: "ifdef", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 1, column: 0 }, end: { line: 10, column: 10 } } })) ? a2 : "") + "export enum " + (null != (a2 = e2.lambda(e2.strict(t2, "name", { start: { line: 11, column: 15 }, end: { line: 11, column: 19 } }), t2)) ? a2 : "") + " {\n" + (null != (a2 = s2(n2, "each").call(l2, s2(t2, "enum"), { name: "each", hash: {}, fn: e2.program(6, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 12, column: 1 }, end: { line: 23, column: 10 } } })) ? a2 : "") + "}";
    }, useData: true };
    var En = { 1: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "/**\n" + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "description"), { name: "if", hash: {}, fn: e2.program(2, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 3, column: 0 }, end: { line: 5, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "deprecated"), { name: "if", hash: {}, fn: e2.program(4, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 6, column: 0 }, end: { line: 8, column: 7 } } })) ? a2 : "") + " */\n";
    }, 2: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return " * " + (null != (a2 = l2(n2, "escapeComment").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "description"), { name: "escapeComment", hash: {}, data: o2, loc: { start: { line: 4, column: 3 }, end: { line: 4, column: 34 } } })) ? a2 : "") + "\n";
    }, 4: function(e2, t2, n2, r2, o2) {
      return " * @deprecated\n";
    }, 6: function(e2, t2, n2, r2, o2, a2, l2) {
      var s2, i2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (s2 = i2(n2, "ifdef").call(null != t2 ? t2 : e2.nullContext || {}, i2(t2, "description"), i2(t2, "deprecated"), { name: "ifdef", hash: {}, fn: e2.program(7, o2, 0, a2, l2), inverse: e2.noop, data: o2, loc: { start: { line: 13, column: 1 }, end: { line: 22, column: 11 } } })) ? s2 : "") + "	" + (null != (s2 = e2.invokePartial(i2(r2, "isReadOnly"), t2, { name: "isReadOnly", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? s2 : "") + (null != (s2 = e2.lambda(e2.strict(t2, "name", { start: { line: 23, column: 19 }, end: { line: 23, column: 23 } }), t2)) ? s2 : "") + (null != (s2 = e2.invokePartial(i2(r2, "isRequired"), t2, { name: "isRequired", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? s2 : "") + ": " + (null != (s2 = e2.invokePartial(i2(r2, "type"), t2, { name: "type", hash: { parent: i2(l2[1], "name") }, data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? s2 : "") + ";\n";
    }, 7: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "	/**\n" + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "description"), { name: "if", hash: {}, fn: e2.program(8, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 15, column: 1 }, end: { line: 17, column: 8 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "deprecated"), { name: "if", hash: {}, fn: e2.program(10, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 18, column: 1 }, end: { line: 20, column: 8 } } })) ? a2 : "") + "	 */\n";
    }, 8: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "	 * " + (null != (a2 = l2(n2, "escapeComment").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "description"), { name: "escapeComment", hash: {}, data: o2, loc: { start: { line: 16, column: 4 }, end: { line: 16, column: 35 } } })) ? a2 : "") + "\n";
    }, 10: function(e2, t2, n2, r2, o2) {
      return "	 * @deprecated\n";
    }, 12: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "unless").call(null != t2 ? t2 : e2.nullContext || {}, l2(l2(o2, "root"), "useUnionTypes"), { name: "unless", hash: {}, fn: e2.program(13, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 27, column: 0 }, end: { line: 46, column: 11 } } })) ? a2 : "";
    }, 13: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "\nexport namespace " + (null != (a2 = e2.lambda(e2.strict(t2, "name", { start: { line: 29, column: 20 }, end: { line: 29, column: 24 } }), t2)) ? a2 : "") + " {\n\n" + (null != (a2 = l2(n2, "each").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "enums"), { name: "each", hash: {}, fn: e2.program(14, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 31, column: 1 }, end: { line: 43, column: 10 } } })) ? a2 : "") + "\n}\n";
    }, 14: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = s2(n2, "if").call(l2, s2(t2, "description"), { name: "if", hash: {}, fn: e2.program(15, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 32, column: 1 }, end: { line: 36, column: 8 } } })) ? a2 : "") + "	export enum " + (null != (a2 = e2.lambda(e2.strict(t2, "name", { start: { line: 37, column: 16 }, end: { line: 37, column: 20 } }), t2)) ? a2 : "") + " {\n" + (null != (a2 = s2(n2, "each").call(l2, s2(t2, "enum"), { name: "each", hash: {}, fn: e2.program(17, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 38, column: 2 }, end: { line: 40, column: 11 } } })) ? a2 : "") + "	}\n\n";
    }, 15: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "	/**\n	 * " + (null != (a2 = l2(n2, "escapeComment").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "description"), { name: "escapeComment", hash: {}, data: o2, loc: { start: { line: 34, column: 4 }, end: { line: 34, column: 35 } } })) ? a2 : "") + "\n	 */\n";
    }, 17: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.strict, s2 = e2.lambda;
      return "		" + (null != (a2 = s2(l2(t2, "name", { start: { line: 39, column: 5 }, end: { line: 39, column: 9 } }), t2)) ? a2 : "") + " = " + (null != (a2 = s2(l2(t2, "value", { start: { line: 39, column: 18 }, end: { line: 39, column: 23 } }), t2)) ? a2 : "") + ",\n";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2, a2, l2) {
      var s2, i2 = null != t2 ? t2 : e2.nullContext || {}, u2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (s2 = u2(n2, "ifdef").call(i2, u2(t2, "description"), u2(t2, "deprecated"), { name: "ifdef", hash: {}, fn: e2.program(1, o2, 0, a2, l2), inverse: e2.noop, data: o2, loc: { start: { line: 1, column: 0 }, end: { line: 10, column: 10 } } })) ? s2 : "") + "export type " + (null != (s2 = e2.lambda(e2.strict(t2, "name", { start: { line: 11, column: 15 }, end: { line: 11, column: 19 } }), t2)) ? s2 : "") + " = {\n" + (null != (s2 = u2(n2, "each").call(i2, u2(t2, "properties"), { name: "each", hash: {}, fn: e2.program(6, o2, 0, a2, l2), inverse: e2.noop, data: o2, loc: { start: { line: 12, column: 1 }, end: { line: 24, column: 10 } } })) ? s2 : "") + "};\n" + (null != (s2 = u2(n2, "if").call(i2, u2(t2, "enums"), { name: "if", hash: {}, fn: e2.program(12, o2, 0, a2, l2), inverse: e2.noop, data: o2, loc: { start: { line: 26, column: 0 }, end: { line: 47, column: 7 } } })) ? s2 : "");
    }, usePartial: true, useData: true, useDepths: true };
    var Dn = { 1: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "/**\n" + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "description"), { name: "if", hash: {}, fn: e2.program(2, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 3, column: 0 }, end: { line: 5, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "deprecated"), { name: "if", hash: {}, fn: e2.program(4, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 6, column: 0 }, end: { line: 8, column: 7 } } })) ? a2 : "") + " */\n";
    }, 2: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return " * " + (null != (a2 = l2(n2, "escapeComment").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "description"), { name: "escapeComment", hash: {}, data: o2, loc: { start: { line: 4, column: 3 }, end: { line: 4, column: 34 } } })) ? a2 : "") + "\n";
    }, 4: function(e2, t2, n2, r2, o2) {
      return " * @deprecated\n";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = l2(n2, "ifdef").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "description"), l2(t2, "deprecated"), { name: "ifdef", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 1, column: 0 }, end: { line: 10, column: 10 } } })) ? a2 : "") + "export type " + (null != (a2 = e2.lambda(e2.strict(t2, "name", { start: { line: 11, column: 15 }, end: { line: 11, column: 19 } }), t2)) ? a2 : "") + " = " + (null != (a2 = e2.invokePartial(l2(r2, "type"), t2, { name: "type", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + ";";
    }, usePartial: true, useData: true };
    var Tn = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      return "/* istanbul ignore file */\n/* tslint:disable */\n/* eslint-disable */";
    }, useData: true };
    var In = { 1: function(e2, t2, n2, r2, o2) {
      return " | null";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "if").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "isNullable"), { name: "if", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 1, column: 0 }, end: { line: 1, column: 32 } } })) ? a2 : "";
    }, useData: true };
    var Sn = { 1: function(e2, t2, n2, r2, o2) {
      return "readonly ";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "if").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "isReadOnly"), { name: "if", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 1, column: 0 }, end: { line: 1, column: 34 } } })) ? a2 : "";
    }, useData: true };
    var _n = { 1: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "unless").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "isRequired"), { name: "unless", hash: {}, fn: e2.program(2, o2, 0), inverse: e2.program(4, o2, 0), data: o2, loc: { start: { line: 2, column: 0 }, end: { line: 2, column: 54 } } })) ? a2 : "";
    }, 2: function(e2, t2, n2, r2, o2) {
      return "?";
    }, 4: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "if").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "default"), { name: "if", hash: {}, fn: e2.program(2, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 2, column: 23 }, end: { line: 2, column: 43 } } })) ? a2 : "";
    }, 6: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "unless").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "isRequired"), { name: "unless", hash: {}, fn: e2.program(7, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 4, column: 0 }, end: { line: 4, column: 64 } } })) ? a2 : "";
    }, 7: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "unless").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "default"), { name: "unless", hash: {}, fn: e2.program(2, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 4, column: 22 }, end: { line: 4, column: 53 } } })) ? a2 : "";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "if").call(null != t2 ? t2 : e2.nullContext || {}, l2(l2(o2, "root"), "useOptions"), { name: "if", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.program(6, o2, 0), data: o2, loc: { start: { line: 1, column: 0 }, end: { line: 5, column: 9 } } })) ? a2 : "";
    }, useData: true };
    var Nn = { 1: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "if").call(null != t2 ? t2 : e2.nullContext || {}, l2(l2(o2, "root"), "useOptions"), { name: "if", hash: {}, fn: e2.program(2, o2, 0), inverse: e2.program(12, o2, 0), data: o2, loc: { start: { line: 2, column: 0 }, end: { line: 27, column: 7 } } })) ? a2 : "";
    }, 2: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "{\n" + (null != (a2 = s2(n2, "each").call(l2, s2(t2, "parameters"), { name: "each", hash: {}, fn: e2.program(3, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 4, column: 0 }, end: { line: 6, column: 9 } } })) ? a2 : "") + "}: {\n" + (null != (a2 = s2(n2, "each").call(l2, s2(t2, "parameters"), { name: "each", hash: {}, fn: e2.program(6, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 8, column: 0 }, end: { line: 20, column: 9 } } })) ? a2 : "") + "}";
    }, 3: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = e2.lambda(e2.strict(t2, "name", { start: { line: 5, column: 3 }, end: { line: 5, column: 7 } }), t2)) ? a2 : "") + (null != (a2 = l2(n2, "if").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "default"), { name: "if", hash: {}, fn: e2.program(4, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 5, column: 10 }, end: { line: 5, column: 48 } } })) ? a2 : "") + ",\n";
    }, 4: function(e2, t2, n2, r2, o2) {
      var a2;
      return " = " + (null != (a2 = e2.lambda(e2.strict(t2, "default", { start: { line: 5, column: 31 }, end: { line: 5, column: 38 } }), t2)) ? a2 : "");
    }, 6: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = l2(n2, "ifdef").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "description"), l2(t2, "deprecated"), { name: "ifdef", hash: {}, fn: e2.program(7, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 9, column: 0 }, end: { line: 18, column: 10 } } })) ? a2 : "") + (null != (a2 = e2.lambda(e2.strict(t2, "name", { start: { line: 19, column: 3 }, end: { line: 19, column: 7 } }), t2)) ? a2 : "") + (null != (a2 = e2.invokePartial(l2(r2, "isRequired"), t2, { name: "isRequired", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + ": " + (null != (a2 = e2.invokePartial(l2(r2, "type"), t2, { name: "type", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + ",\n";
    }, 7: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "/**\n" + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "description"), { name: "if", hash: {}, fn: e2.program(8, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 11, column: 0 }, end: { line: 13, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "deprecated"), { name: "if", hash: {}, fn: e2.program(10, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 14, column: 0 }, end: { line: 16, column: 7 } } })) ? a2 : "") + " */\n";
    }, 8: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return " * " + (null != (a2 = l2(n2, "escapeComment").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "description"), { name: "escapeComment", hash: {}, data: o2, loc: { start: { line: 12, column: 3 }, end: { line: 12, column: 34 } } })) ? a2 : "") + "\n";
    }, 10: function(e2, t2, n2, r2, o2) {
      return " * @deprecated\n";
    }, 12: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "\n" + (null != (a2 = l2(n2, "each").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "parameters"), { name: "each", hash: {}, fn: e2.program(13, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 24, column: 0 }, end: { line: 26, column: 9 } } })) ? a2 : "");
    }, 13: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = e2.lambda(e2.strict(t2, "name", { start: { line: 25, column: 3 }, end: { line: 25, column: 7 } }), t2)) ? a2 : "") + (null != (a2 = e2.invokePartial(l2(r2, "isRequired"), t2, { name: "isRequired", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + ": " + (null != (a2 = e2.invokePartial(l2(r2, "type"), t2, { name: "type", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + (null != (a2 = l2(n2, "if").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "default"), { name: "if", hash: {}, fn: e2.program(4, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 25, column: 36 }, end: { line: 25, column: 74 } } })) ? a2 : "") + ",\n";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "if").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "parameters"), { name: "if", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 1, column: 0 }, end: { line: 28, column: 7 } } })) ? a2 : "";
    }, usePartial: true, useData: true };
    var Bn = { 1: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "each").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "results"), { name: "each", hash: {}, fn: e2.program(2, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 2, column: 0 }, end: { line: 2, column: 66 } } })) ? a2 : "";
    }, 2: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = e2.invokePartial(l2(r2, "type"), t2, { name: "type", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + (null != (a2 = l2(n2, "unless").call(null != t2 ? t2 : e2.nullContext || {}, l2(o2, "last"), { name: "unless", hash: {}, fn: e2.program(3, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 2, column: 26 }, end: { line: 2, column: 57 } } })) ? a2 : "");
    }, 3: function(e2, t2, n2, r2, o2) {
      return " | ";
    }, 5: function(e2, t2, n2, r2, o2) {
      return "void";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "if").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "results"), { name: "if", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.program(5, o2, 0), data: o2, loc: { start: { line: 1, column: 0 }, end: { line: 5, column: 9 } } })) ? a2 : "";
    }, usePartial: true, useData: true };
    var $n = { 1: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = e2.invokePartial(l2(r2, "schemaInterface"), t2, { name: "schemaInterface", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "";
    }, 3: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "equals").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "export"), "enum", { name: "equals", hash: {}, fn: e2.program(4, o2, 0), inverse: e2.program(6, o2, 0), data: o2, loc: { start: { line: 3, column: 0 }, end: { line: 17, column: 0 } } })) ? a2 : "";
    }, 4: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = e2.invokePartial(l2(r2, "schemaEnum"), t2, { name: "schemaEnum", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "";
    }, 6: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "equals").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "export"), "array", { name: "equals", hash: {}, fn: e2.program(7, o2, 0), inverse: e2.program(9, o2, 0), data: o2, loc: { start: { line: 5, column: 0 }, end: { line: 17, column: 0 } } })) ? a2 : "";
    }, 7: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = e2.invokePartial(l2(r2, "schemaArray"), t2, { name: "schemaArray", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "";
    }, 9: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "equals").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "export"), "dictionary", { name: "equals", hash: {}, fn: e2.program(10, o2, 0), inverse: e2.program(12, o2, 0), data: o2, loc: { start: { line: 7, column: 0 }, end: { line: 17, column: 0 } } })) ? a2 : "";
    }, 10: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = e2.invokePartial(l2(r2, "schemaDictionary"), t2, { name: "schemaDictionary", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "";
    }, 12: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "equals").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "export"), "any-of", { name: "equals", hash: {}, fn: e2.program(13, o2, 0), inverse: e2.program(15, o2, 0), data: o2, loc: { start: { line: 9, column: 0 }, end: { line: 17, column: 0 } } })) ? a2 : "";
    }, 13: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = e2.invokePartial(l2(r2, "schemaComposition"), t2, { name: "schemaComposition", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "";
    }, 15: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "equals").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "export"), "all-of", { name: "equals", hash: {}, fn: e2.program(13, o2, 0), inverse: e2.program(16, o2, 0), data: o2, loc: { start: { line: 11, column: 0 }, end: { line: 17, column: 0 } } })) ? a2 : "";
    }, 16: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "equals").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "export"), "one-of", { name: "equals", hash: {}, fn: e2.program(13, o2, 0), inverse: e2.program(17, o2, 0), data: o2, loc: { start: { line: 13, column: 0 }, end: { line: 17, column: 0 } } })) ? a2 : "";
    }, 17: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = e2.invokePartial(l2(r2, "schemaGeneric"), t2, { name: "schemaGeneric", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "equals").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "export"), "interface", { name: "equals", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.program(3, o2, 0), data: o2, loc: { start: { line: 1, column: 0 }, end: { line: 17, column: 11 } } })) ? a2 : "";
    }, usePartial: true, useData: true };
    var Mn = { 1: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "	contains: " + (null != (a2 = e2.invokePartial(l2(r2, "schema"), l2(t2, "link"), { name: "schema", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + ",\n";
    }, 3: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	contains: {\n		type: '" + (null != (a2 = e2.lambda(e2.strict(t2, "base", { start: { line: 7, column: 12 }, end: { line: 7, column: 16 } }), t2)) ? a2 : "") + "',\n	},\n";
    }, 5: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	isReadOnly: " + (null != (a2 = e2.lambda(e2.strict(t2, "isReadOnly", { start: { line: 11, column: 16 }, end: { line: 11, column: 26 } }), t2)) ? a2 : "") + ",\n";
    }, 7: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	isRequired: " + (null != (a2 = e2.lambda(e2.strict(t2, "isRequired", { start: { line: 14, column: 16 }, end: { line: 14, column: 26 } }), t2)) ? a2 : "") + ",\n";
    }, 9: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	isNullable: " + (null != (a2 = e2.lambda(e2.strict(t2, "isNullable", { start: { line: 17, column: 16 }, end: { line: 17, column: 26 } }), t2)) ? a2 : "") + ",\n";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "{\n	type: 'array',\n" + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "link"), { name: "if", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.program(3, o2, 0), data: o2, loc: { start: { line: 3, column: 0 }, end: { line: 9, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "isReadOnly"), { name: "if", hash: {}, fn: e2.program(5, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 10, column: 0 }, end: { line: 12, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "isRequired"), { name: "if", hash: {}, fn: e2.program(7, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 13, column: 0 }, end: { line: 15, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "isNullable"), { name: "if", hash: {}, fn: e2.program(9, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 16, column: 0 }, end: { line: 18, column: 7 } } })) ? a2 : "") + "}";
    }, usePartial: true, useData: true };
    var Ln = { 1: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "	description: `" + (null != (a2 = l2(n2, "escapeDescription").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "description"), { name: "escapeDescription", hash: {}, data: o2, loc: { start: { line: 4, column: 15 }, end: { line: 4, column: 50 } } })) ? a2 : "") + "`,\n";
    }, 3: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = e2.invokePartial(l2(r2, "schema"), t2, { name: "schema", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + (null != (a2 = l2(n2, "unless").call(null != t2 ? t2 : e2.nullContext || {}, l2(o2, "last"), { name: "unless", hash: {}, fn: e2.program(4, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 6, column: 43 }, end: { line: 6, column: 73 } } })) ? a2 : "");
    }, 4: function(e2, t2, n2, r2, o2) {
      return ", ";
    }, 6: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	isReadOnly: " + (null != (a2 = e2.lambda(e2.strict(t2, "isReadOnly", { start: { line: 8, column: 16 }, end: { line: 8, column: 26 } }), t2)) ? a2 : "") + ",\n";
    }, 8: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	isRequired: " + (null != (a2 = e2.lambda(e2.strict(t2, "isRequired", { start: { line: 11, column: 16 }, end: { line: 11, column: 26 } }), t2)) ? a2 : "") + ",\n";
    }, 10: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	isNullable: " + (null != (a2 = e2.lambda(e2.strict(t2, "isNullable", { start: { line: 14, column: 16 }, end: { line: 14, column: 26 } }), t2)) ? a2 : "") + ",\n";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "{\n	type: '" + (null != (a2 = e2.lambda(e2.strict(t2, "export", { start: { line: 2, column: 10 }, end: { line: 2, column: 16 } }), t2)) ? a2 : "") + "',\n" + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "description"), { name: "if", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 3, column: 0 }, end: { line: 5, column: 7 } } })) ? a2 : "") + "	contains: [" + (null != (a2 = s2(n2, "each").call(l2, s2(t2, "properties"), { name: "each", hash: {}, fn: e2.program(3, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 6, column: 12 }, end: { line: 6, column: 82 } } })) ? a2 : "") + "],\n" + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "isReadOnly"), { name: "if", hash: {}, fn: e2.program(6, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 7, column: 0 }, end: { line: 9, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "isRequired"), { name: "if", hash: {}, fn: e2.program(8, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 10, column: 0 }, end: { line: 12, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "isNullable"), { name: "if", hash: {}, fn: e2.program(10, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 13, column: 0 }, end: { line: 15, column: 7 } } })) ? a2 : "") + "}";
    }, usePartial: true, useData: true };
    var Fn = { 1: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "	contains: " + (null != (a2 = e2.invokePartial(l2(r2, "schema"), l2(t2, "link"), { name: "schema", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + ",\n";
    }, 3: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	contains: {\n		type: '" + (null != (a2 = e2.lambda(e2.strict(t2, "base", { start: { line: 7, column: 12 }, end: { line: 7, column: 16 } }), t2)) ? a2 : "") + "',\n	},\n";
    }, 5: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	isReadOnly: " + (null != (a2 = e2.lambda(e2.strict(t2, "isReadOnly", { start: { line: 11, column: 16 }, end: { line: 11, column: 26 } }), t2)) ? a2 : "") + ",\n";
    }, 7: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	isRequired: " + (null != (a2 = e2.lambda(e2.strict(t2, "isRequired", { start: { line: 14, column: 16 }, end: { line: 14, column: 26 } }), t2)) ? a2 : "") + ",\n";
    }, 9: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	isNullable: " + (null != (a2 = e2.lambda(e2.strict(t2, "isNullable", { start: { line: 17, column: 16 }, end: { line: 17, column: 26 } }), t2)) ? a2 : "") + ",\n";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "{\n	type: 'dictionary',\n" + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "link"), { name: "if", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.program(3, o2, 0), data: o2, loc: { start: { line: 3, column: 0 }, end: { line: 9, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "isReadOnly"), { name: "if", hash: {}, fn: e2.program(5, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 10, column: 0 }, end: { line: 12, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "isRequired"), { name: "if", hash: {}, fn: e2.program(7, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 13, column: 0 }, end: { line: 15, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "isNullable"), { name: "if", hash: {}, fn: e2.program(9, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 16, column: 0 }, end: { line: 18, column: 7 } } })) ? a2 : "") + "}";
    }, usePartial: true, useData: true };
    var Wn = { 1: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	isReadOnly: " + (null != (a2 = e2.lambda(e2.strict(t2, "isReadOnly", { start: { line: 4, column: 16 }, end: { line: 4, column: 26 } }), t2)) ? a2 : "") + ",\n";
    }, 3: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	isRequired: " + (null != (a2 = e2.lambda(e2.strict(t2, "isRequired", { start: { line: 7, column: 16 }, end: { line: 7, column: 26 } }), t2)) ? a2 : "") + ",\n";
    }, 5: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	isNullable: " + (null != (a2 = e2.lambda(e2.strict(t2, "isNullable", { start: { line: 10, column: 16 }, end: { line: 10, column: 26 } }), t2)) ? a2 : "") + ",\n";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "{\n	type: 'Enum',\n" + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "isReadOnly"), { name: "if", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 3, column: 0 }, end: { line: 5, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "isRequired"), { name: "if", hash: {}, fn: e2.program(3, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 6, column: 0 }, end: { line: 8, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "isNullable"), { name: "if", hash: {}, fn: e2.program(5, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 9, column: 0 }, end: { line: 11, column: 7 } } })) ? a2 : "") + "}";
    }, useData: true };
    var Vn = { 1: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	type: '" + (null != (a2 = e2.lambda(e2.strict(t2, "type", { start: { line: 3, column: 11 }, end: { line: 3, column: 15 } }), t2)) ? a2 : "") + "',\n";
    }, 3: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "	description: `" + (null != (a2 = l2(n2, "escapeDescription").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "description"), { name: "escapeDescription", hash: {}, data: o2, loc: { start: { line: 6, column: 15 }, end: { line: 6, column: 50 } } })) ? a2 : "") + "`,\n";
    }, 5: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	isReadOnly: " + (null != (a2 = e2.lambda(e2.strict(t2, "isReadOnly", { start: { line: 9, column: 16 }, end: { line: 9, column: 26 } }), t2)) ? a2 : "") + ",\n";
    }, 7: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	isRequired: " + (null != (a2 = e2.lambda(e2.strict(t2, "isRequired", { start: { line: 12, column: 16 }, end: { line: 12, column: 26 } }), t2)) ? a2 : "") + ",\n";
    }, 9: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	isNullable: " + (null != (a2 = e2.lambda(e2.strict(t2, "isNullable", { start: { line: 15, column: 16 }, end: { line: 15, column: 26 } }), t2)) ? a2 : "") + ",\n";
    }, 11: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	format: '" + (null != (a2 = e2.lambda(e2.strict(t2, "format", { start: { line: 18, column: 13 }, end: { line: 18, column: 19 } }), t2)) ? a2 : "") + "',\n";
    }, 13: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	maximum: " + (null != (a2 = e2.lambda(e2.strict(t2, "maximum", { start: { line: 21, column: 13 }, end: { line: 21, column: 20 } }), t2)) ? a2 : "") + ",\n";
    }, 15: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	exclusiveMaximum: " + (null != (a2 = e2.lambda(e2.strict(t2, "exclusiveMaximum", { start: { line: 24, column: 22 }, end: { line: 24, column: 38 } }), t2)) ? a2 : "") + ",\n";
    }, 17: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	minimum: " + (null != (a2 = e2.lambda(e2.strict(t2, "minimum", { start: { line: 27, column: 13 }, end: { line: 27, column: 20 } }), t2)) ? a2 : "") + ",\n";
    }, 19: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	exclusiveMinimum: " + (null != (a2 = e2.lambda(e2.strict(t2, "exclusiveMinimum", { start: { line: 30, column: 22 }, end: { line: 30, column: 38 } }), t2)) ? a2 : "") + ",\n";
    }, 21: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	multipleOf: " + (null != (a2 = e2.lambda(e2.strict(t2, "multipleOf", { start: { line: 33, column: 16 }, end: { line: 33, column: 26 } }), t2)) ? a2 : "") + ",\n";
    }, 23: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	maxLength: " + (null != (a2 = e2.lambda(e2.strict(t2, "maxLength", { start: { line: 36, column: 15 }, end: { line: 36, column: 24 } }), t2)) ? a2 : "") + ",\n";
    }, 25: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	minLength: " + (null != (a2 = e2.lambda(e2.strict(t2, "minLength", { start: { line: 39, column: 15 }, end: { line: 39, column: 24 } }), t2)) ? a2 : "") + ",\n";
    }, 27: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	pattern: '" + (null != (a2 = e2.lambda(e2.strict(t2, "pattern", { start: { line: 42, column: 14 }, end: { line: 42, column: 21 } }), t2)) ? a2 : "") + "',\n";
    }, 29: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	maxItems: " + (null != (a2 = e2.lambda(e2.strict(t2, "maxItems", { start: { line: 45, column: 14 }, end: { line: 45, column: 22 } }), t2)) ? a2 : "") + ",\n";
    }, 31: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	minItems: " + (null != (a2 = e2.lambda(e2.strict(t2, "minItems", { start: { line: 48, column: 14 }, end: { line: 48, column: 22 } }), t2)) ? a2 : "") + ",\n";
    }, 33: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	uniqueItems: " + (null != (a2 = e2.lambda(e2.strict(t2, "uniqueItems", { start: { line: 51, column: 17 }, end: { line: 51, column: 28 } }), t2)) ? a2 : "") + ",\n";
    }, 35: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	maxProperties: " + (null != (a2 = e2.lambda(e2.strict(t2, "maxProperties", { start: { line: 54, column: 19 }, end: { line: 54, column: 32 } }), t2)) ? a2 : "") + ",\n";
    }, 37: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	minProperties: " + (null != (a2 = e2.lambda(e2.strict(t2, "minProperties", { start: { line: 57, column: 19 }, end: { line: 57, column: 32 } }), t2)) ? a2 : "") + ",\n";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "{\n" + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "type"), { name: "if", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 2, column: 0 }, end: { line: 4, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "description"), { name: "if", hash: {}, fn: e2.program(3, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 5, column: 0 }, end: { line: 7, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "isReadOnly"), { name: "if", hash: {}, fn: e2.program(5, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 8, column: 0 }, end: { line: 10, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "isRequired"), { name: "if", hash: {}, fn: e2.program(7, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 11, column: 0 }, end: { line: 13, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "isNullable"), { name: "if", hash: {}, fn: e2.program(9, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 14, column: 0 }, end: { line: 16, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "format"), { name: "if", hash: {}, fn: e2.program(11, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 17, column: 0 }, end: { line: 19, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "maximum"), { name: "if", hash: {}, fn: e2.program(13, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 20, column: 0 }, end: { line: 22, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "exclusiveMaximum"), { name: "if", hash: {}, fn: e2.program(15, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 23, column: 0 }, end: { line: 25, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "minimum"), { name: "if", hash: {}, fn: e2.program(17, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 26, column: 0 }, end: { line: 28, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "exclusiveMinimum"), { name: "if", hash: {}, fn: e2.program(19, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 29, column: 0 }, end: { line: 31, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "multipleOf"), { name: "if", hash: {}, fn: e2.program(21, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 32, column: 0 }, end: { line: 34, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "maxLength"), { name: "if", hash: {}, fn: e2.program(23, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 35, column: 0 }, end: { line: 37, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "minLength"), { name: "if", hash: {}, fn: e2.program(25, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 38, column: 0 }, end: { line: 40, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "pattern"), { name: "if", hash: {}, fn: e2.program(27, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 41, column: 0 }, end: { line: 43, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "maxItems"), { name: "if", hash: {}, fn: e2.program(29, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 44, column: 0 }, end: { line: 46, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "minItems"), { name: "if", hash: {}, fn: e2.program(31, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 47, column: 0 }, end: { line: 49, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "uniqueItems"), { name: "if", hash: {}, fn: e2.program(33, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 50, column: 0 }, end: { line: 52, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "maxProperties"), { name: "if", hash: {}, fn: e2.program(35, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 53, column: 0 }, end: { line: 55, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "minProperties"), { name: "if", hash: {}, fn: e2.program(37, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 56, column: 0 }, end: { line: 58, column: 7 } } })) ? a2 : "") + "}";
    }, useData: true };
    var Un = { 1: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "	description: `" + (null != (a2 = l2(n2, "escapeDescription").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "description"), { name: "escapeDescription", hash: {}, data: o2, loc: { start: { line: 3, column: 15 }, end: { line: 3, column: 50 } } })) ? a2 : "") + "`,\n";
    }, 3: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "each").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "properties"), { name: "each", hash: {}, fn: e2.program(4, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 7, column: 1 }, end: { line: 9, column: 10 } } })) ? a2 : "";
    }, 4: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "		" + (null != (a2 = e2.lambda(e2.strict(t2, "name", { start: { line: 8, column: 5 }, end: { line: 8, column: 9 } }), t2)) ? a2 : "") + ": " + (null != (a2 = e2.invokePartial(l2(r2, "schema"), t2, { name: "schema", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + ",\n";
    }, 6: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	isReadOnly: " + (null != (a2 = e2.lambda(e2.strict(t2, "isReadOnly", { start: { line: 13, column: 16 }, end: { line: 13, column: 26 } }), t2)) ? a2 : "") + ",\n";
    }, 8: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	isRequired: " + (null != (a2 = e2.lambda(e2.strict(t2, "isRequired", { start: { line: 16, column: 16 }, end: { line: 16, column: 26 } }), t2)) ? a2 : "") + ",\n";
    }, 10: function(e2, t2, n2, r2, o2) {
      var a2;
      return "	isNullable: " + (null != (a2 = e2.lambda(e2.strict(t2, "isNullable", { start: { line: 19, column: 16 }, end: { line: 19, column: 26 } }), t2)) ? a2 : "") + ",\n";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "{\n" + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "description"), { name: "if", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 2, column: 0 }, end: { line: 4, column: 7 } } })) ? a2 : "") + "	properties: {\n" + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "properties"), { name: "if", hash: {}, fn: e2.program(3, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 6, column: 0 }, end: { line: 10, column: 7 } } })) ? a2 : "") + "	},\n" + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "isReadOnly"), { name: "if", hash: {}, fn: e2.program(6, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 12, column: 0 }, end: { line: 14, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "isRequired"), { name: "if", hash: {}, fn: e2.program(8, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 15, column: 0 }, end: { line: 17, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "isNullable"), { name: "if", hash: {}, fn: e2.program(10, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 18, column: 0 }, end: { line: 20, column: 7 } } })) ? a2 : "") + "}";
    }, usePartial: true, useData: true };
    var Qn = { 1: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = e2.invokePartial(l2(r2, "typeInterface"), t2, { name: "typeInterface", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "";
    }, 3: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "equals").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "export"), "reference", { name: "equals", hash: {}, fn: e2.program(4, o2, 0), inverse: e2.program(6, o2, 0), data: o2, loc: { start: { line: 3, column: 0 }, end: { line: 19, column: 0 } } })) ? a2 : "";
    }, 4: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = e2.invokePartial(l2(r2, "typeReference"), t2, { name: "typeReference", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "";
    }, 6: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "equals").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "export"), "enum", { name: "equals", hash: {}, fn: e2.program(7, o2, 0), inverse: e2.program(9, o2, 0), data: o2, loc: { start: { line: 5, column: 0 }, end: { line: 19, column: 0 } } })) ? a2 : "";
    }, 7: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = e2.invokePartial(l2(r2, "typeEnum"), t2, { name: "typeEnum", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "";
    }, 9: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "equals").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "export"), "array", { name: "equals", hash: {}, fn: e2.program(10, o2, 0), inverse: e2.program(12, o2, 0), data: o2, loc: { start: { line: 7, column: 0 }, end: { line: 19, column: 0 } } })) ? a2 : "";
    }, 10: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = e2.invokePartial(l2(r2, "typeArray"), t2, { name: "typeArray", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "";
    }, 12: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "equals").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "export"), "dictionary", { name: "equals", hash: {}, fn: e2.program(13, o2, 0), inverse: e2.program(15, o2, 0), data: o2, loc: { start: { line: 9, column: 0 }, end: { line: 19, column: 0 } } })) ? a2 : "";
    }, 13: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = e2.invokePartial(l2(r2, "typeDictionary"), t2, { name: "typeDictionary", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "";
    }, 15: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "equals").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "export"), "one-of", { name: "equals", hash: {}, fn: e2.program(16, o2, 0), inverse: e2.program(18, o2, 0), data: o2, loc: { start: { line: 11, column: 0 }, end: { line: 19, column: 0 } } })) ? a2 : "";
    }, 16: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = e2.invokePartial(l2(r2, "typeUnion"), t2, { name: "typeUnion", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "";
    }, 18: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "equals").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "export"), "any-of", { name: "equals", hash: {}, fn: e2.program(16, o2, 0), inverse: e2.program(19, o2, 0), data: o2, loc: { start: { line: 13, column: 0 }, end: { line: 19, column: 0 } } })) ? a2 : "";
    }, 19: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "equals").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "export"), "all-of", { name: "equals", hash: {}, fn: e2.program(20, o2, 0), inverse: e2.program(22, o2, 0), data: o2, loc: { start: { line: 15, column: 0 }, end: { line: 19, column: 0 } } })) ? a2 : "";
    }, 20: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = e2.invokePartial(l2(r2, "typeIntersection"), t2, { name: "typeIntersection", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "";
    }, 22: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = e2.invokePartial(l2(r2, "typeGeneric"), t2, { name: "typeGeneric", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "equals").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "export"), "interface", { name: "equals", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.program(3, o2, 0), data: o2, loc: { start: { line: 1, column: 0 }, end: { line: 19, column: 11 } } })) ? a2 : "";
    }, usePartial: true, useData: true };
    var zn = { 1: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "Array<" + (null != (a2 = e2.invokePartial(l2(r2, "type"), l2(t2, "link"), { name: "type", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + ">" + (null != (a2 = e2.invokePartial(l2(r2, "isNullable"), t2, { name: "isNullable", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "");
    }, 3: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "Array<" + (null != (a2 = e2.invokePartial(l2(r2, "base"), t2, { name: "base", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + ">" + (null != (a2 = e2.invokePartial(l2(r2, "isNullable"), t2, { name: "isNullable", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "");
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "if").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "link"), { name: "if", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.program(3, o2, 0), data: o2, loc: { start: { line: 1, column: 0 }, end: { line: 5, column: 9 } } })) ? a2 : "";
    }, usePartial: true, useData: true };
    var Jn = { 1: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "Record<string, " + (null != (a2 = e2.invokePartial(l2(r2, "type"), l2(t2, "link"), { name: "type", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + ">" + (null != (a2 = e2.invokePartial(l2(r2, "isNullable"), t2, { name: "isNullable", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "");
    }, 3: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "Record<string, " + (null != (a2 = e2.invokePartial(l2(r2, "base"), t2, { name: "base", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + ">" + (null != (a2 = e2.invokePartial(l2(r2, "isNullable"), t2, { name: "isNullable", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "");
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (a2 = l2(n2, "if").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "link"), { name: "if", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.program(3, o2, 0), data: o2, loc: { start: { line: 1, column: 0 }, end: { line: 5, column: 9 } } })) ? a2 : "";
    }, usePartial: true, useData: true };
    var Gn = { 1: function(e2, t2, n2, r2, o2) {
      var a2;
      return null != (a2 = e2.lambda(t2, t2)) ? a2 : "";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = l2(n2, "enumerator").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "enum"), l2(t2, "parent"), l2(t2, "name"), { name: "enumerator", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 1, column: 0 }, end: { line: 1, column: 55 } } })) ? a2 : "") + (null != (a2 = e2.invokePartial(l2(r2, "isNullable"), t2, { name: "isNullable", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "");
    }, usePartial: true, useData: true };
    var Zn = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = e2.invokePartial(l2(r2, "base"), t2, { name: "base", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + (null != (a2 = e2.invokePartial(l2(r2, "isNullable"), t2, { name: "isNullable", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "");
    }, usePartial: true, useData: true };
    var Kn = { 1: function(e2, t2, n2, r2, o2, a2, l2) {
      var s2, i2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "{\n" + (null != (s2 = i2(n2, "each").call(null != t2 ? t2 : e2.nullContext || {}, i2(t2, "properties"), { name: "each", hash: {}, fn: e2.program(2, o2, 0, a2, l2), inverse: e2.noop, data: o2, loc: { start: { line: 3, column: 0 }, end: { line: 19, column: 9 } } })) ? s2 : "") + "}" + (null != (s2 = e2.invokePartial(i2(r2, "isNullable"), t2, { name: "isNullable", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? s2 : "");
    }, 2: function(e2, t2, n2, r2, o2, a2, l2) {
      var s2, i2 = null != t2 ? t2 : e2.nullContext || {}, u2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (s2 = u2(n2, "ifdef").call(i2, u2(t2, "description"), u2(t2, "deprecated"), { name: "ifdef", hash: {}, fn: e2.program(3, o2, 0, a2, l2), inverse: e2.noop, data: o2, loc: { start: { line: 4, column: 0 }, end: { line: 13, column: 10 } } })) ? s2 : "") + (null != (s2 = u2(n2, "if").call(i2, u2(l2[1], "parent"), { name: "if", hash: {}, fn: e2.program(8, o2, 0, a2, l2), inverse: e2.program(10, o2, 0, a2, l2), data: o2, loc: { start: { line: 14, column: 0 }, end: { line: 18, column: 7 } } })) ? s2 : "");
    }, 3: function(e2, t2, n2, r2, o2) {
      var a2, l2 = null != t2 ? t2 : e2.nullContext || {}, s2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return "/**\n" + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "description"), { name: "if", hash: {}, fn: e2.program(4, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 6, column: 0 }, end: { line: 8, column: 7 } } })) ? a2 : "") + (null != (a2 = s2(n2, "if").call(l2, s2(t2, "deprecated"), { name: "if", hash: {}, fn: e2.program(6, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 9, column: 0 }, end: { line: 11, column: 7 } } })) ? a2 : "") + " */\n";
    }, 4: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return " * " + (null != (a2 = l2(n2, "escapeComment").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "description"), { name: "escapeComment", hash: {}, data: o2, loc: { start: { line: 7, column: 3 }, end: { line: 7, column: 34 } } })) ? a2 : "") + "\n";
    }, 6: function(e2, t2, n2, r2, o2) {
      return " * @deprecated\n";
    }, 8: function(e2, t2, n2, r2, o2, a2, l2) {
      var s2, i2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (s2 = e2.invokePartial(i2(r2, "isReadOnly"), t2, { name: "isReadOnly", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? s2 : "") + (null != (s2 = e2.lambda(e2.strict(t2, "name", { start: { line: 15, column: 18 }, end: { line: 15, column: 22 } }), t2)) ? s2 : "") + (null != (s2 = e2.invokePartial(i2(r2, "isRequired"), t2, { name: "isRequired", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? s2 : "") + ": " + (null != (s2 = e2.invokePartial(i2(r2, "type"), t2, { name: "type", hash: { parent: i2(l2[1], "parent") }, data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? s2 : "") + ";\n";
    }, 10: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = e2.invokePartial(l2(r2, "isReadOnly"), t2, { name: "isReadOnly", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + (null != (a2 = e2.lambda(e2.strict(t2, "name", { start: { line: 17, column: 18 }, end: { line: 17, column: 22 } }), t2)) ? a2 : "") + (null != (a2 = e2.invokePartial(l2(r2, "isRequired"), t2, { name: "isRequired", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + ": " + (null != (a2 = e2.invokePartial(l2(r2, "type"), t2, { name: "type", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + ";\n";
    }, 12: function(e2, t2, n2, r2, o2) {
      return "any";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2, a2, l2) {
      var s2, i2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return null != (s2 = i2(n2, "if").call(null != t2 ? t2 : e2.nullContext || {}, i2(t2, "properties"), { name: "if", hash: {}, fn: e2.program(1, o2, 0, a2, l2), inverse: e2.program(12, o2, 0, a2, l2), data: o2, loc: { start: { line: 1, column: 0 }, end: { line: 23, column: 9 } } })) ? s2 : "";
    }, usePartial: true, useData: true, useDepths: true };
    var Xn = { 1: function(e2, t2, n2, r2, o2) {
      var a2;
      return null != (a2 = e2.lambda(t2, t2)) ? a2 : "";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = l2(n2, "intersection").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "properties"), l2(t2, "parent"), { name: "intersection", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 1, column: 0 }, end: { line: 1, column: 60 } } })) ? a2 : "") + (null != (a2 = e2.invokePartial(l2(r2, "isNullable"), t2, { name: "isNullable", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "");
    }, usePartial: true, useData: true };
    var Yn = { compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = e2.invokePartial(l2(r2, "base"), t2, { name: "base", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "") + (null != (a2 = e2.invokePartial(l2(r2, "isNullable"), t2, { name: "isNullable", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "");
    }, usePartial: true, useData: true };
    var er = { 1: function(e2, t2, n2, r2, o2) {
      var a2;
      return null != (a2 = e2.lambda(t2, t2)) ? a2 : "";
    }, compiler: [8, ">= 4.3.0"], main: function(e2, t2, n2, r2, o2) {
      var a2, l2 = e2.lookupProperty || function(e3, t3) {
        if (Object.prototype.hasOwnProperty.call(e3, t3))
          return e3[t3];
      };
      return (null != (a2 = l2(n2, "union").call(null != t2 ? t2 : e2.nullContext || {}, l2(t2, "properties"), l2(t2, "parent"), { name: "union", hash: {}, fn: e2.program(1, o2, 0), inverse: e2.noop, data: o2, loc: { start: { line: 1, column: 0 }, end: { line: 1, column: 46 } } })) ? a2 : "") + (null != (a2 = e2.invokePartial(l2(r2, "isNullable"), t2, { name: "isNullable", data: o2, helpers: n2, partials: r2, decorators: e2.decorators })) ? a2 : "");
    }, usePartial: true, useData: true };
    var tr = (e2) => {
      Ct.registerHelper("ifdef", function(...e3) {
        const t2 = e3.pop();
        return e3.every((e4) => !e4) ? t2.inverse(this) : t2.fn(this);
      }), Ct.registerHelper("equals", function(e3, t2, n2) {
        return e3 === t2 ? n2.fn(this) : n2.inverse(this);
      }), Ct.registerHelper("notEquals", function(e3, t2, n2) {
        return e3 !== t2 ? n2.fn(this) : n2.inverse(this);
      }), Ct.registerHelper("containsSpaces", function(e3, t2) {
        return /\s+/.test(e3) ? t2.fn(this) : t2.inverse(this);
      }), Ct.registerHelper("union", function(t2, n2, r2) {
        const o2 = Ct.partials.type, a2 = t2.map((t3) => o2(__spreadProps(__spreadValues(__spreadValues({}, e2), t3), { parent: n2 }))).filter(R);
        let l2 = a2.join(" | ");
        return a2.length > 1 && (l2 = `(${l2})`), r2.fn(l2);
      }), Ct.registerHelper("intersection", function(t2, n2, r2) {
        const o2 = Ct.partials.type, a2 = t2.map((t3) => o2(__spreadProps(__spreadValues(__spreadValues({}, e2), t3), { parent: n2 }))).filter(R);
        let l2 = a2.join(" & ");
        return a2.length > 1 && (l2 = `(${l2})`), r2.fn(l2);
      }), Ct.registerHelper("enumerator", function(t2, n2, r2, o2) {
        return !e2.useUnionTypes && n2 && r2 ? `${n2}.${r2}` : o2.fn(t2.map((e3) => e3.value).filter(R).join(" | "));
      }), Ct.registerHelper("escapeComment", function(e3) {
        return e3.replace(/\*\//g, "*").replace(/\/\*/g, "*").replace(/\r?\n(.*)/g, (e4, t2) => `${n.EOL} * ${t2.trim()}`);
      }), Ct.registerHelper("escapeDescription", function(e3) {
        return e3.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\${/g, "\\${");
      }), Ct.registerHelper("camelCase", function(e3) {
        return i.default(e3);
      });
    };
    var nr = o.writeFile;
    var rr = o.copyFile;
    var or = o.pathExists;
    var ar = o.mkdirp;
    var lr = o.remove;
    var sr = (e2) => {
      let t2 = 0, r2 = e2.split(n.EOL);
      return r2 = r2.map((e3) => {
        e3 = e3.trim().replace(/^\*/g, " *");
        let n2 = t2;
        (e3.endsWith("(") || e3.endsWith("{") || e3.endsWith("[")) && t2++, (e3.startsWith(")") || e3.startsWith("}") || e3.startsWith("]")) && n2 && (t2--, n2--);
        const r3 = `${"	".repeat(n2)}${e3}`;
        return "" === r3.trim() ? "" : r3;
      }), r2.join(n.EOL);
    };
    var ir = (e2, t2) => {
      let r2 = e2.split(n.EOL);
      r2 = r2.map((e3) => {
        switch (t2) {
          case exports.Indent.SPACE_4:
            return e3.replace(/\t/g, "    ");
          case exports.Indent.SPACE_2:
            return e3.replace(/\t/g, "  ");
          case exports.Indent.TAB:
            return e3;
        }
      });
      return `${r2.join(n.EOL)}${n.EOL}`;
    };
    var ur = (e2) => {
      switch (e2) {
        case exports.HttpClient.FETCH:
          return "FetchHttpRequest";
        case exports.HttpClient.XHR:
          return "XHRHttpRequest";
        case exports.HttpClient.NODE:
          return "NodeHttpRequest";
        case exports.HttpClient.AXIOS:
          return "AxiosHttpRequest";
        case exports.HttpClient.ANGULAR:
          return "AngularHttpRequest";
      }
    };
    var pr = (e2) => e2.sort((e3, t2) => {
      const n2 = e3.name.toLowerCase(), r2 = t2.name.toLowerCase();
      return n2.localeCompare(r2, "en");
    });
    var cr = (e2) => e2.sort((e3, t2) => {
      const n2 = e3.name.toLowerCase(), r2 = t2.name.toLowerCase();
      return n2.localeCompare(r2, "en");
    });
    var mr = async (e2, t2, n2, o2, a2, l2, s2, i2, u2, p2, c2, m2, d2, f2) => {
      const h2 = r.resolve(process.cwd(), n2), y2 = r.resolve(h2, "core"), v2 = r.resolve(h2, "models"), g2 = r.resolve(h2, "schemas"), P2 = r.resolve(h2, "services");
      if (b2 = process.cwd(), O2 = n2, !r.relative(O2, b2).startsWith(".."))
        throw new Error("Output folder is not a subdirectory of the current working directory");
      var b2, O2;
      s2 && (await lr(y2), await ar(y2), await (async (e3, t3, n3, o3, a3, l3, s3) => {
        const i3 = ur(o3), u3 = { httpClient: o3, clientName: l3, httpRequest: i3, server: e3.server, version: e3.version };
        if (await nr(r.resolve(n3, "OpenAPI.ts"), ir(t3.core.settings(u3), a3)), await nr(r.resolve(n3, "ApiError.ts"), ir(t3.core.apiError(u3), a3)), await nr(r.resolve(n3, "ApiRequestOptions.ts"), ir(t3.core.apiRequestOptions(u3), a3)), await nr(r.resolve(n3, "ApiResult.ts"), ir(t3.core.apiResult(u3), a3)), await nr(r.resolve(n3, "CancelablePromise.ts"), ir(t3.core.cancelablePromise(u3), a3)), await nr(r.resolve(n3, "request.ts"), ir(t3.core.request(u3), a3)), B(l3) && (await nr(r.resolve(n3, "BaseHttpRequest.ts"), ir(t3.core.baseHttpRequest(u3), a3)), await nr(r.resolve(n3, `${i3}.ts`), ir(t3.core.httpRequest(u3), a3))), s3) {
          const e4 = r.resolve(process.cwd(), s3);
          if (!await or(e4))
            throw new Error(`Custom request file "${e4}" does not exists`);
          await rr(e4, r.resolve(n3, "request.ts"));
        }
      })(e2, t2, y2, o2, c2, d2, f2)), i2 && (await lr(P2), await ar(P2), await (async (e3, t3, n3, o3, a3, l3, s3, i3, u3) => {
        for (const p3 of e3) {
          const e4 = r.resolve(n3, `${p3.name}${i3}.ts`), c3 = t3.exports.service(__spreadProps(__spreadValues({}, p3), { httpClient: o3, useUnionTypes: a3, useOptions: l3, postfix: i3, exportClient: B(u3) }));
          await nr(e4, ir(sr(c3), s3));
        }
      })(e2.services, t2, P2, o2, l2, a2, c2, m2, d2)), p2 && (await lr(g2), await ar(g2), await (async (e3, t3, n3, o3, a3, l3) => {
        for (const s3 of e3) {
          const e4 = r.resolve(n3, `$${s3.name}.ts`), i3 = t3.exports.schema(__spreadProps(__spreadValues({}, s3), { httpClient: o3, useUnionTypes: a3 }));
          await nr(e4, ir(sr(i3), l3));
        }
      })(e2.models, t2, g2, o2, l2, c2)), u2 && (await lr(v2), await ar(v2), await (async (e3, t3, n3, o3, a3, l3) => {
        for (const s3 of e3) {
          const e4 = r.resolve(n3, `${s3.name}.ts`), i3 = t3.exports.model(__spreadProps(__spreadValues({}, s3), { httpClient: o3, useUnionTypes: a3 }));
          await nr(e4, ir(sr(i3), l3));
        }
      })(e2.models, t2, v2, o2, l2, c2)), B(d2) && (await ar(h2), await (async (e3, t3, n3, o3, a3, l3, s3) => {
        const i3 = t3.client({ clientName: a3, httpClient: o3, postfix: s3, server: e3.server, version: e3.version, models: pr(e3.models), services: cr(e3.services), httpRequest: ur(o3) });
        await nr(r.resolve(n3, `${a3}.ts`), ir(sr(i3), l3));
      })(e2, t2, h2, o2, d2, c2, m2)), (s2 || i2 || p2 || u2) && (await ar(h2), await (async (e3, t3, n3, o3, a3, l3, s3, i3, u3, p3) => {
        const c3 = t3.index({ exportCore: a3, exportServices: l3, exportModels: s3, exportSchemas: i3, useUnionTypes: o3, postfix: u3, clientName: p3, server: e3.server, version: e3.version, models: pr(e3.models), services: cr(e3.services), exportClient: B(p3) });
        await nr(r.resolve(n3, "index.ts"), c3);
      })(e2, t2, h2, l2, s2, i2, u2, p2, m2, d2));
    };
    var dr = async ({ input: e2, output: t2, httpClient: n2 = exports.HttpClient.FETCH, clientName: r2, useOptions: o2 = false, useUnionTypes: a2 = false, exportCore: l2 = true, exportServices: s2 = true, exportModels: i2 = true, exportSchemas: p2 = false, indent: m2 = exports.Indent.SPACE_4, postfix: d2 = "Service", request: f2, write: h2 = true }) => {
      const y2 = c(e2) ? await (async (e3) => await u.default.bundle(e3, e3, {}))(e2) : e2, v2 = ((e3) => {
        const t3 = e3.swagger || e3.openapi;
        if ("string" == typeof t3) {
          const e4 = t3.charAt(0), n3 = Number.parseInt(e4);
          if (n3 === se.V2 || n3 === se.V3)
            return n3;
        }
        throw new Error(`Unsupported Open API version: "${String(t3)}"`);
      })(y2), g2 = ((e3) => {
        tr(e3);
        const t3 = { index: Ct.template(qn), client: Ct.template(wt), exports: { model: Ct.template(Rn), schema: Ct.template(Cn), service: Ct.template(wn) }, core: { settings: Ct.template(yn), apiError: Ct.template(Tt), apiRequestOptions: Ct.template(It), apiResult: Ct.template(St), cancelablePromise: Ct.template(Wt), request: Ct.template(vn), baseHttpRequest: Ct.template(Ft), httpRequest: Ct.template(un) } };
        return Ct.registerPartial("exportEnum", Ct.template(Hn)), Ct.registerPartial("exportInterface", Ct.template(En)), Ct.registerPartial("exportComposition", Ct.template(jn)), Ct.registerPartial("exportType", Ct.template(Dn)), Ct.registerPartial("header", Ct.template(Tn)), Ct.registerPartial("isNullable", Ct.template(In)), Ct.registerPartial("isReadOnly", Ct.template(Sn)), Ct.registerPartial("isRequired", Ct.template(_n)), Ct.registerPartial("parameters", Ct.template(Nn)), Ct.registerPartial("result", Ct.template(Bn)), Ct.registerPartial("schema", Ct.template($n)), Ct.registerPartial("schemaArray", Ct.template(Mn)), Ct.registerPartial("schemaDictionary", Ct.template(Fn)), Ct.registerPartial("schemaEnum", Ct.template(Wn)), Ct.registerPartial("schemaGeneric", Ct.template(Vn)), Ct.registerPartial("schemaInterface", Ct.template(Un)), Ct.registerPartial("schemaComposition", Ct.template(Ln)), Ct.registerPartial("type", Ct.template(Qn)), Ct.registerPartial("typeArray", Ct.template(zn)), Ct.registerPartial("typeDictionary", Ct.template(Jn)), Ct.registerPartial("typeEnum", Ct.template(Gn)), Ct.registerPartial("typeGeneric", Ct.template(Zn)), Ct.registerPartial("typeInterface", Ct.template(Kn)), Ct.registerPartial("typeReference", Ct.template(Yn)), Ct.registerPartial("typeUnion", Ct.template(er)), Ct.registerPartial("typeIntersection", Ct.template(Xn)), Ct.registerPartial("base", Ct.template(An)), Ct.registerPartial("functions/catchErrorCodes", Ct.template(Kt)), Ct.registerPartial("functions/getFormData", Ct.template(Xt)), Ct.registerPartial("functions/getQueryString", Ct.template(Yt)), Ct.registerPartial("functions/getUrl", Ct.template(en)), Ct.registerPartial("functions/isBlob", Ct.template(tn)), Ct.registerPartial("functions/isDefined", Ct.template(nn)), Ct.registerPartial("functions/isFormData", Ct.template(rn)), Ct.registerPartial("functions/isString", Ct.template(on)), Ct.registerPartial("functions/isStringWithValue", Ct.template(an)), Ct.registerPartial("functions/isSuccess", Ct.template(ln)), Ct.registerPartial("functions/base64", Ct.template(Zt)), Ct.registerPartial("functions/resolve", Ct.template(sn)), Ct.registerPartial("fetch/getHeaders", Ct.template(Vt)), Ct.registerPartial("fetch/getRequestBody", Ct.template(Ut)), Ct.registerPartial("fetch/getResponseBody", Ct.template(Qt)), Ct.registerPartial("fetch/getResponseHeader", Ct.template(zt)), Ct.registerPartial("fetch/sendRequest", Ct.template(Gt)), Ct.registerPartial("fetch/request", Ct.template(Jt)), Ct.registerPartial("xhr/getHeaders", Ct.template(gn)), Ct.registerPartial("xhr/getRequestBody", Ct.template(Pn)), Ct.registerPartial("xhr/getResponseBody", Ct.template(bn)), Ct.registerPartial("xhr/getResponseHeader", Ct.template(On)), Ct.registerPartial("xhr/sendRequest", Ct.template(kn)), Ct.registerPartial("xhr/request", Ct.template(xn)), Ct.registerPartial("node/getHeaders", Ct.template(pn)), Ct.registerPartial("node/getRequestBody", Ct.template(cn)), Ct.registerPartial("node/getResponseBody", Ct.template(mn)), Ct.registerPartial("node/getResponseHeader", Ct.template(dn)), Ct.registerPartial("node/sendRequest", Ct.template(hn)), Ct.registerPartial("node/request", Ct.template(fn)), Ct.registerPartial("axios/getHeaders", Ct.template(_t)), Ct.registerPartial("axios/getRequestBody", Ct.template(Nt)), Ct.registerPartial("axios/getResponseBody", Ct.template(Bt)), Ct.registerPartial("axios/getResponseHeader", Ct.template($t)), Ct.registerPartial("axios/sendRequest", Ct.template(Lt)), Ct.registerPartial("axios/request", Ct.template(Mt)), Ct.registerPartial("angular/getHeaders", Ct.template(qt)), Ct.registerPartial("angular/getRequestBody", Ct.template(At)), Ct.registerPartial("angular/getResponseBody", Ct.template(jt)), Ct.registerPartial("angular/getResponseHeader", Ct.template(Ht)), Ct.registerPartial("angular/sendRequest", Ct.template(Dt)), Ct.registerPartial("angular/request", Ct.template(Et)), t3;
      })({ httpClient: n2, useUnionTypes: a2, useOptions: o2 });
      switch (v2) {
        case se.V2: {
          const e3 = I(y2), u2 = fe(e3);
          if (!h2)
            break;
          await mr(u2, g2, t2, n2, o2, a2, l2, s2, i2, p2, m2, d2, r2, f2);
          break;
        }
        case se.V3: {
          const e3 = le(y2), u2 = fe(e3);
          if (!h2)
            break;
          await mr(u2, g2, t2, n2, o2, a2, l2, s2, i2, p2, m2, d2, r2, f2);
          break;
        }
      }
    };
    var fr = { HttpClient: exports.HttpClient, generate: dr };
    exports.default = fr, exports.generate = dr;
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var import_chokidar = __toESM(require_chokidar());
function openApiTypescriptCodegen(options) {
  var _a, _b, _c;
  const watcher = import_chokidar.default.watch(options.input, {
    ignoreInitial: true,
    interval: (_b = (_a = options.watch) == null ? void 0 : _a.interval) != null ? _b : 1e3
  });
  const openApiOptions = __spreadValues({
    output: (_c = options.output) != null ? _c : "openapi"
  }, options);
  return {
    name: "vite-plugin-openapi-typescript-codegen",
    enforce: "pre",
    buildStart: async () => {
      var _a2;
      const OpenAPI = await Promise.resolve().then(() => __toESM(require_dist()));
      OpenAPI.generate(openApiOptions);
      if (!((_a2 = options.watch) == null ? void 0 : _a2.disabled)) {
        console.log("Watching for changes...");
        watcher.on("change", () => {
          console.log("Change detected, regenerating...");
          OpenAPI.generate(openApiOptions);
          console.log("Done!");
        });
      }
    },
    buildEnd: () => {
      watcher.close();
    }
  };
}
var src_default = openApiTypescriptCodegen;
/*! Bundled license information:

normalize-path/index.js:
  (*!
   * normalize-path <https://github.com/jonschlinkert/normalize-path>
   *
   * Copyright (c) 2014-2018, Jon Schlinkert.
   * Released under the MIT License.
   *)

is-extglob/index.js:
  (*!
   * is-extglob <https://github.com/jonschlinkert/is-extglob>
   *
   * Copyright (c) 2014-2016, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

is-glob/index.js:
  (*!
   * is-glob <https://github.com/jonschlinkert/is-glob>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

is-number/index.js:
  (*!
   * is-number <https://github.com/jonschlinkert/is-number>
   *
   * Copyright (c) 2014-present, Jon Schlinkert.
   * Released under the MIT License.
   *)

to-regex-range/index.js:
  (*!
   * to-regex-range <https://github.com/micromatch/to-regex-range>
   *
   * Copyright (c) 2015-present, Jon Schlinkert.
   * Released under the MIT License.
   *)

fill-range/index.js:
  (*!
   * fill-range <https://github.com/jonschlinkert/fill-range>
   *
   * Copyright (c) 2014-present, Jon Schlinkert.
   * Licensed under the MIT License.
   *)
*/
