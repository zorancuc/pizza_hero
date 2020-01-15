import { pzChestContract } from './smartContract';

export const buyChest = async (chestGroupId, refAddr, chestAmount, bTRX) => {
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
      .buyChest(chestGroupId, refAddr, chestAmount, true)
      .send({ shouldPollResponse: true, callValue: price * chestAmount });
  } else {
    await pzChestContract()
      .buyChest(chestGroupId, refAddr, chestAmount, false)
      .send({
        shouldPollResponse: true,
        tokenValue: tokenPrice * chestAmount,
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

export const getChestGroupInfo = async () => {
  let chestGroupInfo = [];
  if (!pzChestContract()) {
    return [];
  }
  let chestGroupSupply = await pzChestContract()
    .getChestGroupSupply()
    .call();
  // eslint-disable-next-line no-underscore-dangle
  chestGroupSupply = parseInt(chestGroupSupply._hex, 16);
  for (let i = 0; i < chestGroupSupply; i += 1) {
    chestGroupInfo.push(
      pzChestContract()
        .getChestGroupById(i)
        .call(),
    );
  }
  chestGroupInfo = await Promise.all(chestGroupInfo);
  return chestGroupInfo;
};

export const instance = pzChestContract();
