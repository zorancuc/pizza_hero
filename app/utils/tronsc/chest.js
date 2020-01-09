import { pzChestContract } from './smartContract';

export const buyChest = async (chestId, refAddr, bTRX, value) => {
  let i;

  let length = await pzChestContract()
    .getChestGroupSupply()
    .call();
  // eslint-disable-next-line no-underscore-dangle
  length = parseInt(length._hex, 16);
  // console.log(length);

  for (i = 0; i < length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    const chestGroupInfo = await pzChestContract()
      .getChestGroupById(i)
      .call();
    // console.log(parseInt(chestGroupInfo.price, 10));
    if (parseInt(chestGroupInfo.price, 10) === 50 * 1000000) {
      // console.log(parseInt(chestGroupInfo.price, 10));
      // console.log(i);
      break;
    }
  }

  if (bTRX) {
    await pzChestContract()
      .buyChest(i, refAddr, true)
      .send({ shouldPollResponse: true, callValue: value * 1000000 });
  } else {
    await pzChestContract()
      .buyChest(i, refAddr, false)
      .send({
        shouldPollResponse: true,
        tokenValue: value * 1000000,
        tokenId: '1000027',
      });
  }
};

export const chestsOfOwner = async accountAddress => {
  let result = await pzChestContract()
    .chestsOfOwner(accountAddress)
    .call();
  result = result.ownerChests;
  // console.log(result);
  return result;
};

export const balanceOfOwner = async accountAddress => {
  let result = await pzChestContract()
    .balanceOf(accountAddress)
    .call();
  result = result.count;
  return result;
};

export const getChestById = async chestId => {
  const result = await pzChestContract()
    .getChestById(chestId)
    .call();
  return result;
};

export const openChest = async chestId => {
  await pzChestContract()
    .openChest(chestId)
    .send({ shouldPollResponse: true, callValue: 0 });
};
