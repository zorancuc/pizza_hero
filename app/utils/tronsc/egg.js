import { pzEggContract } from './smartContract';

export const eggsOfOwner = async accountAddress => {
  let result = await pzEggContract()
    .eggsOfOwner(accountAddress)
    .call();
  result = result.ownerEggs;
  console.log(result);
  return result;
};
