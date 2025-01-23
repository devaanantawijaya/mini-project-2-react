// Tambahkan matchers untuk DOM
import "@testing-library/jest-dom";

// Tambahkan TextEncoder dan TextDecoder dari modul util
global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;
