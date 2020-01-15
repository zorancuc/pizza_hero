const pzItemContractAddress = 'TGaGnnye4AEVN5aASc2N6JjwPbLhgYX8xN';
const pzEggContractAddress = 'TXZRADD4AkmWvseqi68MrVErRhN28mWZ6v';
const pzHeroContractAddress = 'TMg8YeQ4Ns1gEkByHMcLPCpGUThYxp6eVp';
const pzChestContractAddress = 'TRUFGqUsu5fXwdHtbNoqkvWiXtPAgN4tbY';

const smartContract = {
  tronWeb: false,
  pzChestContract: false,
  pzItemContract: false,
  pzHeroContract: false,
  pzEggContract: false,
};

// const pzChestContract = smartContract.getChestContract();
// const pzItemContract = smartContract.getItemContract();
// const pzHeroContract = smartContract.getHeroContract();
// const pzEggContract = smartContract.getEggContract();

const pzChestContract = () => smartContract.pzChestContract;
const pzItemContract = () => smartContract.pzItemContract;
const pzHeroContract = () => smartContract.pzHeroContract;
const pzEggContract = () => smartContract.pzEggContract;

const setTronWeb = async tronWeb => {
  console.log('SET TRONWEB');
  smartContract.tronWeb = tronWeb;
  smartContract.pzChestContract = await tronWeb
    .contract()
    .at(pzChestContractAddress);
  smartContract.pzItemContract = await tronWeb
    .contract()
    .at(pzItemContractAddress);
  smartContract.pzHeroContract = await tronWeb
    .contract()
    .at(pzHeroContractAddress);
  smartContract.pzEggContract = await tronWeb
    .contract()
    .at(pzEggContractAddress);
};

export {
  setTronWeb,
  pzChestContract,
  pzItemContract,
  pzHeroContract,
  pzEggContract,
};
