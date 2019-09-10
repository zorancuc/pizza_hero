import { pzChestContract } from './smartContract';

export const buyChest = async (chestId, refAddr, bTRX, value) => {
  let i;

  let length = await pzChestContract()
    .getChestGroupSupply()
    .call();
  // eslint-disable-next-line no-underscore-dangle
  length = parseInt(length._hex, 16);
  console.log(length);

  for (i = 0; i < length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    const chestGroupInfo = await pzChestContract()
      .getChestGroupById(i)
      .call();
    console.log(parseInt(chestGroupInfo.price, 10));
    if (parseInt(chestGroupInfo.price, 10) === 50 * 1000000) {
      console.log(parseInt(chestGroupInfo.price, 10));
      console.log(i);
      break;
    }
  }

  pzChestContract()
    .buyChest(i, refAddr, true)
    .send({ shouldPollResponse: true, callValue: value * 1000000 });
};

export const getBoughtChests = async accountAddress => {
  let result = await pzChestContract()
    .chestsOfOwner(accountAddress)
    .call();
  result = result.ownerChests;
  console.log(result);
  return result;
};
