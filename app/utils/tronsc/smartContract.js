const pzItemContractAddress = 'TS77FSX5gdJumJWYDCSXWbJub5fWYJbiRe';
const pzEggContractAddress = 'TY7pWNRboKYwbN9YRHd8uhvSoff3pEBK6C';
const pzHeroContractAddress = 'TUeewwGiwi1GRnADHR5EmaswXpJmbV6bVw';
const pzChestContractAddress = 'TTLMDSMVgoMf4ut6EDbEuaRvLk5xbVZMdQ';

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
  console.log('SET TRONWEB IN SMART CONTRACT');
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
