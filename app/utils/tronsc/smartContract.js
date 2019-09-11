const pzItemContractAddress = 'TCUuXcCoUtWAVdv4EwxADVbZe3scEo6vbP';
const pzEggContractAddress = 'THzngcVDeggjMjmV81isnZMUK8m8AxiQoN';
const pzHeroContractAddress = 'THvRpURyddQabLtErtfu2xp7hxLWuJutUc';
const pzChestContractAddress = 'TNyjLK7HjUj8N3hDNba3sYSkubRnkUznbp';

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
