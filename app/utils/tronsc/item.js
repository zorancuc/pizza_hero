import { pzItemContract } from './smartContract';

export const itemsOfOwner = async accountAddress => {
  let result = await pzItemContract()
    .itemsOfOwner(accountAddress)
    .call();
  result = result.ownerItems;
  // console.log(result);
  return result;
};

export const getItem = async id => {
  const result = await pzItemContract()
    .getItem(id)
    .call();
  // console.log(result);
  return result;
};

export const balanceOfOwner = async accountAddress => {
  let result = await pzItemContract()
    .balanceOf(accountAddress)
    .call();
  result = result.count;
  return result;
};
