import { describe, expect, it } from '@jest/globals';
import { installSnap } from '@metamask/snaps-jest';

const HL_NAME = 'testooor.hl';
const EXPECTED_ADDRESS = '0xF26F5551E96aE5162509B25925fFfa7F07B2D652';
const CHAIN_ID_999 = 'eip155:999';

describe('onNameLookup', () => {
  it('resolves testooor.hl', async () => {
    const request = {
      domain: HL_NAME,
      chainId: CHAIN_ID_999,
    };

    const { onNameLookup } = await installSnap();
    const response = await onNameLookup(request);

    expect(response).toRespondWith({
      resolvedAddresses: [
        {
          resolvedAddress: EXPECTED_ADDRESS,
          protocol: 'Hyperliquid Names',
          domainName: HL_NAME,
        },
      ],
    });
  });
});