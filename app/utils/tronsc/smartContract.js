const pzItemContractAddress = 'TDKwjZrmT1RyDEJtTCW9GU9i3eHjq5ZMaj';
const pzEggContractAddress = 'TYdpcKn4CVCpKPrEtHpn27wFATmnjzAfNc';
const pzHeroContractAddress = 'TA4THgfyFzgjwvaxJsD3JDua4F5ony71Fx';
const pzChestContractAddress = 'TLzVGMSm5RsDpnzQmKP325mHDa977cAdwj';

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
