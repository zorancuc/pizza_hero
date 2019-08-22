import { pzChestContract } from './smartContract';

export const buyChest = (chestId, refAddr, bTRX, value) =>
  pzChestContract
    .buyChest(chestId, refAddr, true)
    .send({ shouldPollResponse: true, callValue: value * 1000000 });
