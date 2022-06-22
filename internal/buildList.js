const { version } = require("../package.json");

const milkomeda = require("../tokens/milkomeda.json");
const milkomedaTestnet = require("../tokens/milkomeda-testnet.json");
const algorandTestnet = require("../tokens/algorand-testnet.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "MilkySwap Menu",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI:
      "https://milky-interface.vercel.app/favicon.png",
    keywords: ["milkyswap", "default"],
    tokens: [
      ...milkomeda,
      ...milkomedaTestnet,
      ...algorandTestnet,
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
