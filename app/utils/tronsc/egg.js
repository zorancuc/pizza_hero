import { pzEggContract } from './smartContract';

export const eggsOfOwner = async accountAddress => {
  let result = await pzEggContract()
    .eggsOfOwner(accountAddress)
    .call();
  result = result.ownerEggs;
  console.log(result);
  return result;
};

export const getEgg = async id => {
  const result = await pzEggContract()
    .getEgg(id)
    .call();
  console.log(result);
  return result;
};
