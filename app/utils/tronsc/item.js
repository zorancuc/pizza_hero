import { pzItemContract } from './smartContract';

export const itemsOfOwner = async accountAddress => {
  let result = await pzItemContract()
    .itemsOfOwner(accountAddress)
    .call();
  result = result.ownerItems;
  console.log(result);
  return result;
};
