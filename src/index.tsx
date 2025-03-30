import type { OnNameLookupHandler } from "@metamask/snaps-sdk"

const API_KEY = "CPEPKMI-HUSUX6I-SE2DHEA-YYWFG5Y"

export const onNameLookup: OnNameLookupHandler = async (request) => {
  const { domain } = request

  if (domain && domain.endsWith(".hl")) {
    const response = await fetch(
      `https://api.hlnames.xyz/resolve/address/${domain}`,
      {
        headers: {
          "accept": "*/*",
          "X-API-Key": API_KEY,
        },
      }
    )
    const data = await response.json()
    const resolvedAddress = data.address
    if (resolvedAddress && resolvedAddress !== "0x0000000000000000000000000000000000000000") {
      return {
        resolvedAddresses: [
          { resolvedAddress, protocol: "Hyperliquid Names", domainName: domain },
        ],
      }
    }
  }
  
  return null
}