import type {
  TypedAbiArg,
  TypedAbiFunction,
  TypedAbiMap,
  TypedAbiVariable,
  Response,
} from "@clarigen/core";

export const contracts = {
  commissionTrait: {
    functions: {},
    maps: {},
    variables: {},
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch21",
    clarity_version: "Clarity1",
    contractName: "commission-trait",
  },
  extensionTrait: {
    functions: {},
    maps: {},
    variables: {},
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch30",
    clarity_version: "Clarity2",
    contractName: "extension-trait",
  },
  microNthng: {
    functions: {
      mint_x: {
        name: "mint!",
        access: "private",
        args: [
          { name: "account", type: "principal" },
          { name: "amount", type: "uint128" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          account: TypedAbiArg<string, "account">,
          amount: TypedAbiArg<number | bigint, "amount">
        ],
        Response<boolean, bigint>
      >,
      transfer: {
        name: "transfer",
        access: "public",
        args: [
          { name: "to", type: "principal" },
          { name: "amount", type: "uint128" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          to: TypedAbiArg<string, "to">,
          amount: TypedAbiArg<number | bigint, "amount">
        ],
        Response<boolean, bigint>
      >,
      getTotalSupply: {
        name: "get-total-supply",
        access: "read_only",
        args: [],
        outputs: { type: "uint128" },
      } as TypedAbiFunction<[], bigint>,
    },
    maps: {},
    variables: {
      totalSupply: {
        name: "total-supply",
        type: "uint128",
        access: "variable",
      } as TypedAbiVariable<bigint>,
    },
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [{ name: "micro-nothing" }],
    epoch: "Epoch21",
    clarity_version: "Clarity1",
    contractName: "micro-nthng",
  },
  nftTrait: {
    functions: {},
    maps: {},
    variables: {},
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch21",
    clarity_version: "Clarity1",
    contractName: "nft-trait",
  },
  nope: {
    functions: {
      checkErr: {
        name: "check-err",
        access: "private",
        args: [
          {
            name: "result",
            type: { response: { ok: "bool", error: "uint128" } },
          },
          {
            name: "prior",
            type: { response: { ok: "bool", error: "uint128" } },
          },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          result: TypedAbiArg<Response<boolean, number | bigint>, "result">,
          prior: TypedAbiArg<Response<boolean, number | bigint>, "prior">
        ],
        Response<boolean, bigint>
      >,
      sendNothingUnwrap: {
        name: "send-nothing-unwrap",
        access: "private",
        args: [
          {
            name: "recipient",
            type: {
              tuple: [
                { name: "amount", type: "uint128" },
                {
                  name: "memo",
                  type: { optional: { buffer: { length: 34 } } },
                },
                { name: "to", type: "principal" },
              ],
            },
          },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          recipient: TypedAbiArg<
            {
              amount: number | bigint;
              memo: Uint8Array | null;
              to: string;
            },
            "recipient"
          >
        ],
        Response<boolean, bigint>
      >,
      updateThresholdState: {
        name: "update-threshold-state",
        access: "private",
        args: [],
        outputs: { type: "bool" },
      } as TypedAbiFunction<[], boolean>,
      sendMany: {
        name: "send-many",
        access: "public",
        args: [
          {
            name: "recipients",
            type: {
              list: {
                type: {
                  tuple: [
                    { name: "amount", type: "uint128" },
                    {
                      name: "memo",
                      type: { optional: { buffer: { length: 34 } } },
                    },
                    { name: "to", type: "principal" },
                  ],
                },
                length: 200,
              },
            },
          },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          recipients: TypedAbiArg<
            {
              amount: number | bigint;
              memo: Uint8Array | null;
              to: string;
            }[],
            "recipients"
          >
        ],
        Response<boolean, bigint>
      >,
      sendNothing: {
        name: "send-nothing",
        access: "public",
        args: [
          { name: "amount", type: "uint128" },
          { name: "to", type: "principal" },
          { name: "memo", type: { optional: { buffer: { length: 34 } } } },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          to: TypedAbiArg<string, "to">,
          memo: TypedAbiArg<Uint8Array | null, "memo">
        ],
        Response<boolean, bigint>
      >,
      setAdmin: {
        name: "set-admin",
        access: "public",
        args: [{ name: "new-admin", type: "principal" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [newAdmin: TypedAbiArg<string, "newAdmin">],
        Response<boolean, bigint>
      >,
      setMetadata: {
        name: "set-metadata",
        access: "public",
        args: [
          {
            name: "uri",
            type: { optional: { "string-utf8": { length: 256 } } },
          },
          { name: "name", type: { "string-ascii": { length: 32 } } },
          { name: "symbol", type: { "string-ascii": { length: 32 } } },
          { name: "decimals", type: "uint128" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          uri: TypedAbiArg<string | null, "uri">,
          name: TypedAbiArg<string, "name">,
          symbol: TypedAbiArg<string, "symbol">,
          decimals: TypedAbiArg<number | bigint, "decimals">
        ],
        Response<boolean, bigint>
      >,
      transfer: {
        name: "transfer",
        access: "public",
        args: [
          { name: "amount", type: "uint128" },
          { name: "from", type: "principal" },
          { name: "to", type: "principal" },
          { name: "memo", type: { optional: { buffer: { length: 34 } } } },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          from: TypedAbiArg<string, "from">,
          to: TypedAbiArg<string, "to">,
          memo: TypedAbiArg<Uint8Array | null, "memo">
        ],
        Response<boolean, bigint>
      >,
      unwrap: {
        name: "unwrap",
        access: "public",
        args: [{ name: "amount", type: "uint128" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [amount: TypedAbiArg<number | bigint, "amount">],
        Response<boolean, bigint>
      >,
      wrapNthng: {
        name: "wrap-nthng",
        access: "public",
        args: [{ name: "amount", type: "uint128" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [amount: TypedAbiArg<number | bigint, "amount">],
        Response<boolean, bigint>
      >,
      getBalance: {
        name: "get-balance",
        access: "read_only",
        args: [{ name: "user", type: "principal" }],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<
        [user: TypedAbiArg<string, "user">],
        Response<bigint, null>
      >,
      getDecimals: {
        name: "get-decimals",
        access: "read_only",
        args: [],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<[], Response<bigint, null>>,
      getName: {
        name: "get-name",
        access: "read_only",
        args: [],
        outputs: {
          type: {
            response: { ok: { "string-ascii": { length: 32 } }, error: "none" },
          },
        },
      } as TypedAbiFunction<[], Response<string, null>>,
      getSymbol: {
        name: "get-symbol",
        access: "read_only",
        args: [],
        outputs: {
          type: {
            response: { ok: { "string-ascii": { length: 32 } }, error: "none" },
          },
        },
      } as TypedAbiFunction<[], Response<string, null>>,
      getTokenUri: {
        name: "get-token-uri",
        access: "read_only",
        args: [],
        outputs: {
          type: {
            response: {
              ok: { optional: { "string-utf8": { length: 256 } } },
              error: "none",
            },
          },
        },
      } as TypedAbiFunction<[], Response<string | null, null>>,
      getTotalSupply: {
        name: "get-total-supply",
        access: "read_only",
        args: [],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<[], Response<bigint, null>>,
      isSafeToWrap: {
        name: "is-safe-to-wrap",
        access: "read_only",
        args: [
          { name: "amount", type: "uint128" },
          { name: "wrapper", type: "principal" },
        ],
        outputs: { type: "bool" },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          wrapper: TypedAbiArg<string, "wrapper">
        ],
        boolean
      >,
    },
    maps: {},
    variables: {
      ERR_INVALID_PARAMS: {
        name: "ERR-INVALID-PARAMS",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      ERR_UNAUTHORIZED: {
        name: "ERR-UNAUTHORIZED",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      ERR_YOU_POOR: {
        name: "ERR-YOU-POOR",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      MAX_SUPPLY: {
        name: "MAX-SUPPLY",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      WRAP_THRESHOLD: {
        name: "WRAP-THRESHOLD",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      contractAdmin: {
        name: "contract-admin",
        type: "principal",
        access: "variable",
      } as TypedAbiVariable<string>,
      isThresholdReached: {
        name: "is-threshold-reached",
        type: "bool",
        access: "variable",
      } as TypedAbiVariable<boolean>,
      tokenDecimals: {
        name: "token-decimals",
        type: "uint128",
        access: "variable",
      } as TypedAbiVariable<bigint>,
      tokenName: {
        name: "token-name",
        type: {
          "string-ascii": {
            length: 32,
          },
        },
        access: "variable",
      } as TypedAbiVariable<string>,
      tokenSymbol: {
        name: "token-symbol",
        type: {
          "string-ascii": {
            length: 32,
          },
        },
        access: "variable",
      } as TypedAbiVariable<string>,
      tokenUri: {
        name: "token-uri",
        type: {
          optional: {
            "string-utf8": {
              length: 256,
            },
          },
        },
        access: "variable",
      } as TypedAbiVariable<string | null>,
    },
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [{ name: "NOT" }],
    epoch: "Epoch24",
    clarity_version: "Clarity2",
    contractName: "nope",
  },
  ogBitcoinPizzaLeatherEdition: {
    functions: {
      isOwner: {
        name: "is-owner",
        access: "private",
        args: [
          { name: "token-id", type: "uint128" },
          { name: "user", type: "principal" },
        ],
        outputs: { type: "bool" },
      } as TypedAbiFunction<
        [
          tokenId: TypedAbiArg<number | bigint, "tokenId">,
          user: TypedAbiArg<string, "user">
        ],
        boolean
      >,
      isSenderOwner: {
        name: "is-sender-owner",
        access: "private",
        args: [{ name: "id", type: "uint128" }],
        outputs: { type: "bool" },
      } as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">], boolean>,
      mintMany: {
        name: "mint-many",
        access: "private",
        args: [
          {
            name: "uris",
            type: {
              list: { type: { "string-ascii": { length: 64 } }, length: 25 },
            },
          },
        ],
        outputs: { type: { response: { ok: "uint128", error: "uint128" } } },
      } as TypedAbiFunction<
        [uris: TypedAbiArg<string[], "uris">],
        Response<bigint, bigint>
      >,
      mintManyIter: {
        name: "mint-many-iter",
        access: "private",
        args: [
          { name: "hash", type: { "string-ascii": { length: 64 } } },
          { name: "next-id", type: "uint128" },
        ],
        outputs: { type: "uint128" },
      } as TypedAbiFunction<
        [
          hash: TypedAbiArg<string, "hash">,
          nextId: TypedAbiArg<number | bigint, "nextId">
        ],
        bigint
      >,
      payRoyalty: {
        name: "pay-royalty",
        access: "private",
        args: [
          { name: "price", type: "uint128" },
          { name: "royalty", type: "uint128" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          price: TypedAbiArg<number | bigint, "price">,
          royalty: TypedAbiArg<number | bigint, "royalty">
        ],
        Response<boolean, bigint>
      >,
      trnsfr: {
        name: "trnsfr",
        access: "private",
        args: [
          { name: "id", type: "uint128" },
          { name: "sender", type: "principal" },
          { name: "recipient", type: "principal" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          id: TypedAbiArg<number | bigint, "id">,
          sender: TypedAbiArg<string, "sender">,
          recipient: TypedAbiArg<string, "recipient">
        ],
        Response<boolean, bigint>
      >,
      burn: {
        name: "burn",
        access: "public",
        args: [{ name: "token-id", type: "uint128" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [tokenId: TypedAbiArg<number | bigint, "tokenId">],
        Response<boolean, bigint>
      >,
      buyInUstx: {
        name: "buy-in-ustx",
        access: "public",
        args: [
          { name: "id", type: "uint128" },
          { name: "comm-trait", type: "trait_reference" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          id: TypedAbiArg<number | bigint, "id">,
          commTrait: TypedAbiArg<string, "commTrait">
        ],
        Response<boolean, bigint>
      >,
      claim: {
        name: "claim",
        access: "public",
        args: [
          {
            name: "uris",
            type: {
              list: { type: { "string-ascii": { length: 64 } }, length: 25 },
            },
          },
        ],
        outputs: { type: { response: { ok: "uint128", error: "uint128" } } },
      } as TypedAbiFunction<
        [uris: TypedAbiArg<string[], "uris">],
        Response<bigint, bigint>
      >,
      freezeMetadata: {
        name: "freeze-metadata",
        access: "public",
        args: [],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<[], Response<boolean, bigint>>,
      listInUstx: {
        name: "list-in-ustx",
        access: "public",
        args: [
          { name: "id", type: "uint128" },
          { name: "price", type: "uint128" },
          { name: "comm-trait", type: "trait_reference" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          id: TypedAbiArg<number | bigint, "id">,
          price: TypedAbiArg<number | bigint, "price">,
          commTrait: TypedAbiArg<string, "commTrait">
        ],
        Response<boolean, bigint>
      >,
      lockContract: {
        name: "lock-contract",
        access: "public",
        args: [],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<[], Response<boolean, bigint>>,
      setArtistAddress: {
        name: "set-artist-address",
        access: "public",
        args: [{ name: "address", type: "principal" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [address: TypedAbiArg<string, "address">],
        Response<boolean, bigint>
      >,
      setLicenseName: {
        name: "set-license-name",
        access: "public",
        args: [{ name: "name", type: { "string-ascii": { length: 40 } } }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [name: TypedAbiArg<string, "name">],
        Response<boolean, bigint>
      >,
      setLicenseUri: {
        name: "set-license-uri",
        access: "public",
        args: [{ name: "uri", type: { "string-ascii": { length: 80 } } }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [uri: TypedAbiArg<string, "uri">],
        Response<boolean, bigint>
      >,
      setRoyaltyPercent: {
        name: "set-royalty-percent",
        access: "public",
        args: [{ name: "royalty", type: "uint128" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [royalty: TypedAbiArg<number | bigint, "royalty">],
        Response<boolean, bigint>
      >,
      setTokenUri: {
        name: "set-token-uri",
        access: "public",
        args: [
          { name: "hash", type: { "string-ascii": { length: 64 } } },
          { name: "token-id", type: "uint128" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          hash: TypedAbiArg<string, "hash">,
          tokenId: TypedAbiArg<number | bigint, "tokenId">
        ],
        Response<boolean, bigint>
      >,
      transfer: {
        name: "transfer",
        access: "public",
        args: [
          { name: "id", type: "uint128" },
          { name: "sender", type: "principal" },
          { name: "recipient", type: "principal" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          id: TypedAbiArg<number | bigint, "id">,
          sender: TypedAbiArg<string, "sender">,
          recipient: TypedAbiArg<string, "recipient">
        ],
        Response<boolean, bigint>
      >,
      unlistInUstx: {
        name: "unlist-in-ustx",
        access: "public",
        args: [{ name: "id", type: "uint128" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [id: TypedAbiArg<number | bigint, "id">],
        Response<boolean, bigint>
      >,
      getArtistAddress: {
        name: "get-artist-address",
        access: "read_only",
        args: [],
        outputs: { type: { response: { ok: "principal", error: "none" } } },
      } as TypedAbiFunction<[], Response<string, null>>,
      getBalance: {
        name: "get-balance",
        access: "read_only",
        args: [{ name: "account", type: "principal" }],
        outputs: { type: "uint128" },
      } as TypedAbiFunction<[account: TypedAbiArg<string, "account">], bigint>,
      getLastTokenId: {
        name: "get-last-token-id",
        access: "read_only",
        args: [],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<[], Response<bigint, null>>,
      getLicenseName: {
        name: "get-license-name",
        access: "read_only",
        args: [],
        outputs: {
          type: {
            response: { ok: { "string-ascii": { length: 40 } }, error: "none" },
          },
        },
      } as TypedAbiFunction<[], Response<string, null>>,
      getLicenseUri: {
        name: "get-license-uri",
        access: "read_only",
        args: [],
        outputs: {
          type: {
            response: { ok: { "string-ascii": { length: 80 } }, error: "none" },
          },
        },
      } as TypedAbiFunction<[], Response<string, null>>,
      getListingInUstx: {
        name: "get-listing-in-ustx",
        access: "read_only",
        args: [{ name: "id", type: "uint128" }],
        outputs: {
          type: {
            optional: {
              tuple: [
                { name: "commission", type: "principal" },
                { name: "price", type: "uint128" },
                { name: "royalty", type: "uint128" },
              ],
            },
          },
        },
      } as TypedAbiFunction<
        [id: TypedAbiArg<number | bigint, "id">],
        {
          commission: string;
          price: bigint;
          royalty: bigint;
        } | null
      >,
      getOwner: {
        name: "get-owner",
        access: "read_only",
        args: [{ name: "token-id", type: "uint128" }],
        outputs: {
          type: { response: { ok: { optional: "principal" }, error: "none" } },
        },
      } as TypedAbiFunction<
        [tokenId: TypedAbiArg<number | bigint, "tokenId">],
        Response<string | null, null>
      >,
      getRoyaltyPercent: {
        name: "get-royalty-percent",
        access: "read_only",
        args: [],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<[], Response<bigint, null>>,
      getTokenUri: {
        name: "get-token-uri",
        access: "read_only",
        args: [{ name: "token-id", type: "uint128" }],
        outputs: {
          type: {
            response: {
              ok: { optional: { "string-ascii": { length: 71 } } },
              error: "none",
            },
          },
        },
      } as TypedAbiFunction<
        [tokenId: TypedAbiArg<number | bigint, "tokenId">],
        Response<string | null, null>
      >,
    },
    maps: {
      cids: {
        name: "cids",
        key: "uint128",
        value: { "string-ascii": { length: 64 } },
      } as TypedAbiMap<number | bigint, string>,
      market: {
        name: "market",
        key: "uint128",
        value: {
          tuple: [
            { name: "commission", type: "principal" },
            { name: "price", type: "uint128" },
            { name: "royalty", type: "uint128" },
          ],
        },
      } as TypedAbiMap<
        number | bigint,
        {
          commission: string;
          price: bigint;
          royalty: bigint;
        }
      >,
      tokenCount: {
        name: "token-count",
        key: "principal",
        value: "uint128",
      } as TypedAbiMap<string, bigint>,
    },
    variables: {
      DEPLOYER: {
        name: "DEPLOYER",
        type: "principal",
        access: "constant",
      } as TypedAbiVariable<string>,
      ERR_CONTRACT_LOCKED: {
        name: "ERR-CONTRACT-LOCKED",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      ERR_INVALID_PERCENTAGE: {
        name: "ERR-INVALID-PERCENTAGE",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      ERR_INVALID_USER: {
        name: "ERR-INVALID-USER",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      ERR_LISTING: {
        name: "ERR-LISTING",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      ERR_METADATA_FROZEN: {
        name: "ERR-METADATA-FROZEN",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      ERR_NFT_MINT: {
        name: "ERR-NFT-MINT",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      ERR_NOT_AUTHORIZED: {
        name: "ERR-NOT-AUTHORIZED",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      ERR_NOT_FOUND: {
        name: "ERR-NOT-FOUND",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      ERR_WRONG_COMMISSION: {
        name: "ERR-WRONG-COMMISSION",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      artistAddress: {
        name: "artist-address",
        type: "principal",
        access: "variable",
      } as TypedAbiVariable<string>,
      lastId: {
        name: "last-id",
        type: "uint128",
        access: "variable",
      } as TypedAbiVariable<bigint>,
      licenseName: {
        name: "license-name",
        type: {
          "string-ascii": {
            length: 40,
          },
        },
        access: "variable",
      } as TypedAbiVariable<string>,
      licenseUri: {
        name: "license-uri",
        type: {
          "string-ascii": {
            length: 80,
          },
        },
        access: "variable",
      } as TypedAbiVariable<string>,
      locked: {
        name: "locked",
        type: "bool",
        access: "variable",
      } as TypedAbiVariable<boolean>,
      metadataFrozen: {
        name: "metadata-frozen",
        type: "bool",
        access: "variable",
      } as TypedAbiVariable<boolean>,
      royaltyPercent: {
        name: "royalty-percent",
        type: "uint128",
        access: "variable",
      } as TypedAbiVariable<bigint>,
    },
    constants: {},
    non_fungible_tokens: [
      { name: "og-bitcoin-pizza-leather-edition", type: "uint128" },
    ],
    fungible_tokens: [],
    epoch: "Epoch25",
    clarity_version: "Clarity2",
    contractName: "og-bitcoin-pizza-leather-edition",
  },
  sip010TraitFtStandard: {
    functions: {},
    maps: {},
    variables: {},
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch21",
    clarity_version: "Clarity1",
    contractName: "sip-010-trait-ft-standard",
  },
  sip013SemiFungibleTokenTrait: {
    functions: {},
    maps: {},
    variables: {},
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch21",
    clarity_version: "Clarity1",
    contractName: "sip013-semi-fungible-token-trait",
  },
  smartWallet: {
    functions: {
      enableAdmin: {
        name: "enable-admin",
        access: "public",
        args: [
          { name: "admin", type: "principal" },
          { name: "enabled", type: "bool" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          admin: TypedAbiArg<string, "admin">,
          enabled: TypedAbiArg<boolean, "enabled">
        ],
        Response<boolean, bigint>
      >,
      extensionCall: {
        name: "extension-call",
        access: "public",
        args: [
          { name: "extension", type: "trait_reference" },
          { name: "payload", type: { buffer: { length: 2048 } } },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          extension: TypedAbiArg<string, "extension">,
          payload: TypedAbiArg<Uint8Array, "payload">
        ],
        Response<boolean, bigint>
      >,
      sip009Transfer: {
        name: "sip009-transfer",
        access: "public",
        args: [
          { name: "nft-id", type: "uint128" },
          { name: "recipient", type: "principal" },
          { name: "sip009", type: "trait_reference" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          nftId: TypedAbiArg<number | bigint, "nftId">,
          recipient: TypedAbiArg<string, "recipient">,
          sip009: TypedAbiArg<string, "sip009">
        ],
        Response<boolean, bigint>
      >,
      sip010Transfer: {
        name: "sip010-transfer",
        access: "public",
        args: [
          { name: "amount", type: "uint128" },
          { name: "recipient", type: "principal" },
          { name: "memo", type: { optional: { buffer: { length: 34 } } } },
          { name: "sip010", type: "trait_reference" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          recipient: TypedAbiArg<string, "recipient">,
          memo: TypedAbiArg<Uint8Array | null, "memo">,
          sip010: TypedAbiArg<string, "sip010">
        ],
        Response<boolean, bigint>
      >,
      stxTransfer: {
        name: "stx-transfer",
        access: "public",
        args: [
          { name: "amount", type: "uint128" },
          { name: "recipient", type: "principal" },
          { name: "memo", type: { optional: { buffer: { length: 34 } } } },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          recipient: TypedAbiArg<string, "recipient">,
          memo: TypedAbiArg<Uint8Array | null, "memo">
        ],
        Response<boolean, bigint>
      >,
      transferWallet: {
        name: "transfer-wallet",
        access: "public",
        args: [{ name: "new-admin", type: "principal" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [newAdmin: TypedAbiArg<string, "newAdmin">],
        Response<boolean, bigint>
      >,
      isAdminCalling: {
        name: "is-admin-calling",
        access: "read_only",
        args: [],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<[], Response<boolean, bigint>>,
    },
    maps: {
      admins: {
        name: "admins",
        key: "principal",
        value: "bool",
      } as TypedAbiMap<string, boolean>,
    },
    variables: {
      errForbidden: {
        name: "err-forbidden",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errUnauthorised: {
        name: "err-unauthorised",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
    },
    constants: {
      errForbidden: {
        isOk: false,
        value: 4_003n,
      },
      errUnauthorised: {
        isOk: false,
        value: 4_001n,
      },
    },
    non_fungible_tokens: [],
    fungible_tokens: [{ name: "ect" }],
    epoch: "Epoch30",
    clarity_version: "Clarity2",
    contractName: "smart-wallet",
  },
  smartWalletEndpoint: {
    functions: {
      stxTransfer: {
        name: "stx-transfer",
        access: "public",
        args: [
          {
            name: "details",
            type: {
              tuple: [
                { name: "amount", type: "uint128" },
                { name: "to", type: "principal" },
              ],
            },
          },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          details: TypedAbiArg<
            {
              amount: number | bigint;
              to: string;
            },
            "details"
          >
        ],
        Response<boolean, bigint>
      >,
      stxTransferSponsored: {
        name: "stx-transfer-sponsored",
        access: "public",
        args: [
          {
            name: "details",
            type: {
              tuple: [
                { name: "amount", type: "uint128" },
                { name: "fees", type: "uint128" },
                { name: "to", type: "principal" },
              ],
            },
          },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          details: TypedAbiArg<
            {
              amount: number | bigint;
              fees: number | bigint;
              to: string;
            },
            "details"
          >
        ],
        Response<boolean, bigint>
      >,
    },
    maps: {},
    variables: {
      errInvalidPayload: {
        name: "err-invalid-payload",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
    },
    constants: {
      errInvalidPayload: {
        isOk: false,
        value: 5_000n,
      },
    },
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch30",
    clarity_version: "Clarity2",
    contractName: "smart-wallet-endpoint",
  },
  sponsoredTransfer: {
    functions: {
      call: {
        name: "call",
        access: "public",
        args: [{ name: "payload", type: { buffer: { length: 2048 } } }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [payload: TypedAbiArg<Uint8Array, "payload">],
        Response<boolean, bigint>
      >,
    },
    maps: {},
    variables: {
      errInvalidPayload: {
        name: "err-invalid-payload",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
    },
    constants: {
      errInvalidPayload: {
        isOk: false,
        value: 500n,
      },
    },
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch30",
    clarity_version: "Clarity2",
    contractName: "sponsored-transfer",
  },
  unsafeSip010Transfer: {
    functions: {
      call: {
        name: "call",
        access: "public",
        args: [{ name: "payload", type: { buffer: { length: 2048 } } }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [payload: TypedAbiArg<Uint8Array, "payload">],
        Response<boolean, bigint>
      >,
    },
    maps: {},
    variables: {
      errInvalidPayload: {
        name: "err-invalid-payload",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
    },
    constants: {
      errInvalidPayload: {
        isOk: false,
        value: 500n,
      },
    },
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch30",
    clarity_version: "Clarity2",
    contractName: "unsafe-sip010-transfer",
  },
} as const;

export const accounts = {
  deployer: {
    address: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
    balance: "100000000000000",
  },
  faucet: {
    address: "STNHKEPYEPJ8ET55ZZ0M5A34J0R3N5FM2CMMMAZ6",
    balance: "100000000000000",
  },
  wallet_1: {
    address: "ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5",
    balance: "100000000000000",
  },
  wallet_2: {
    address: "ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG",
    balance: "100000000000000",
  },
  wallet_3: {
    address: "ST2JHG361ZXG51QTKY2NQCVBPPRRE2KZB1HR05NNC",
    balance: "100000000000000",
  },
  wallet_4: {
    address: "ST2NEB84ASENDXKYGJPQW86YXQCEFEX2ZQPG87ND",
    balance: "100000000000000",
  },
  wallet_5: {
    address: "ST2REHHS5J3CERCRBEPMGH7921Q6PYKAADT7JP2VB",
    balance: "100000000000000",
  },
  wallet_6: {
    address: "ST3AM1A56AK2C1XAFJ4115ZSV26EB49BVQ10MGCS0",
    balance: "100000000000000",
  },
  wallet_7: {
    address: "ST3PF13W7Z0RRM42A8VZRVFQ75SV1K26RXEP8YGKJ",
    balance: "100000000000000",
  },
  wallet_8: {
    address: "ST3NBRSFKX28FQ2ZJ1MAKX58HKHSDGNV5N7R21XCP",
    balance: "100000000000000",
  },
} as const;

export const identifiers = {
  commissionTrait: "SP3D6PV2ACBPEKYJTCMH7HEN02KP87QSP8KTEH335.commission-trait",
  extensionTrait: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.extension-trait",
  microNthng: "SP32AEEF6WW5Y0NMJ1S8SBSZDAY8R5J32NBZFPKKZ.micro-nthng",
  nftTrait: "SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9.nft-trait",
  nope: "SP32AEEF6WW5Y0NMJ1S8SBSZDAY8R5J32NBZFPKKZ.nope",
  ogBitcoinPizzaLeatherEdition:
    "SP16GEW6P7GBGZG0PXRXFJEMR3TJHJEY2HJKBP1P5.og-bitcoin-pizza-leather-edition",
  sip010TraitFtStandard:
    "SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard",
  sip013SemiFungibleTokenTrait:
    "SPDBEG5X8XD50SPM1JJH0E5CTXGDV5NJTKAKKR5V.sip013-semi-fungible-token-trait",
  smartWallet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.smart-wallet",
  smartWalletEndpoint:
    "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.smart-wallet-endpoint",
  sponsoredTransfer:
    "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.sponsored-transfer",
  unsafeSip010Transfer:
    "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.unsafe-sip010-transfer",
} as const;

export const simnet = {
  accounts,
  contracts,
  identifiers,
} as const;

export const deployments = {
  commissionTrait: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.commission-trait",
    simnet: "SP3D6PV2ACBPEKYJTCMH7HEN02KP87QSP8KTEH335.commission-trait",
    testnet: null,
    mainnet: null,
  },
  extensionTrait: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.extension-trait",
    simnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.extension-trait",
    testnet: null,
    mainnet: "SPEG9GC5SB98MFTJK79ZSF5WQSKB5RF24W3RR66P.extension-trait",
  },
  microNthng: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.micro-nthng",
    simnet: "SP32AEEF6WW5Y0NMJ1S8SBSZDAY8R5J32NBZFPKKZ.micro-nthng",
    testnet: null,
    mainnet: null,
  },
  nftTrait: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.nft-trait",
    simnet: "SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9.nft-trait",
    testnet: null,
    mainnet: "SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9.nft-trait",
  },
  nope: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.nope",
    simnet: "SP32AEEF6WW5Y0NMJ1S8SBSZDAY8R5J32NBZFPKKZ.nope",
    testnet: null,
    mainnet: "SP32AEEF6WW5Y0NMJ1S8SBSZDAY8R5J32NBZFPKKZ.nope",
  },
  ogBitcoinPizzaLeatherEdition: {
    devnet:
      "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.og-bitcoin-pizza-leather-edition",
    simnet:
      "SP16GEW6P7GBGZG0PXRXFJEMR3TJHJEY2HJKBP1P5.og-bitcoin-pizza-leather-edition",
    testnet: null,
    mainnet:
      "SP16GEW6P7GBGZG0PXRXFJEMR3TJHJEY2HJKBP1P5.og-bitcoin-pizza-leather-edition",
  },
  sip010TraitFtStandard: {
    devnet:
      "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.sip-010-trait-ft-standard",
    simnet:
      "SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard",
    testnet: null,
    mainnet:
      "SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard",
  },
  sip013SemiFungibleTokenTrait: {
    devnet:
      "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.sip013-semi-fungible-token-trait",
    simnet:
      "SPDBEG5X8XD50SPM1JJH0E5CTXGDV5NJTKAKKR5V.sip013-semi-fungible-token-trait",
    testnet: null,
    mainnet:
      "SPDBEG5X8XD50SPM1JJH0E5CTXGDV5NJTKAKKR5V.sip013-semi-fungible-token-trait",
  },
  smartWallet: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.smart-wallet",
    simnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.smart-wallet",
    testnet: null,
    mainnet: "SPEG9GC5SB98MFTJK79ZSF5WQSKB5RF24W3RR66P.smart-wallet",
  },
  smartWalletEndpoint: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.smart-wallet-endpoint",
    simnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.smart-wallet-endpoint",
    testnet: null,
    mainnet: "SPEG9GC5SB98MFTJK79ZSF5WQSKB5RF24W3RR66P.smart-wallet-endpoint",
  },
  sponsoredTransfer: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.sponsored-transfer",
    simnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.sponsored-transfer",
    testnet: null,
    mainnet: "SPEG9GC5SB98MFTJK79ZSF5WQSKB5RF24W3RR66P.sponsored-transfer",
  },
  unsafeSip010Transfer: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.unsafe-sip010-transfer",
    simnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.unsafe-sip010-transfer",
    testnet: null,
    mainnet: "SPEG9GC5SB98MFTJK79ZSF5WQSKB5RF24W3RR66P.unsafe-sip010-transfer",
  },
} as const;

export const project = {
  contracts,
  deployments,
} as const;
