import { pzChestContract } from './smartContract';

export const buyChest = async (chestGroupId, refAddr, bTRX) => {
  const chestGroupInfo = await pzChestContract()
    .getChestGroupById(chestGroupId)
    .call();

  const price = parseInt(chestGroupInfo.price, 10);
  const tokenPrice = parseInt(chestGroupInfo.tokenPrice, 10);
  const { tokenId } = chestGroupInfo;

  // console.log('BUY CHESTESTESTSET');
  // console.log(chestGroupId);
  // console.log(price);
  // console.log(tokenPrice);
  // console.log(tokenId);
  // console.log(bTRX);
  if (bTRX) {
    await pzChestContract()
      .buyChest(chestGroupId, refAddr, true)
      .send({ shouldPollResponse: true, callValue: price });
  } else {
    await pzChestContract()
      .buyChest(chestGroupId, refAddr, false)
      .send({
        shouldPollResponse: true,
        tokenValue: tokenPrice,
        tokenId,
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
