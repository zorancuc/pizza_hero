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

  async setTronWeb(tronWeb) {
    this.tronWeb = tronWeb;
    this.pzChestContract = await tronWeb.contract().at(pzChestContractAddress);
    this.pzItemContract = await tronWeb.contract().at(pzItemContractAddress);
    this.pzHeroContract = await tronWeb.contract().at(pzHeroContractAddress);
    this.pzEggContract = await tronWeb.contract().at(pzEggContractAddress);
  },

  getChestContract() {
    return this.pzChestContract;
  },

  getItemContract() {
    return this.pzItemContract;
  },

  getHeroContract() {
    return this.pzHeroContract;
  },

  getEggContract() {
    return this.pzEggContract;
  },
};

const pzChestContract = smartContract.getChestContract();
const pzItemContract = smartContract.getItemContract();
const pzHeroContract = smartContract.getHeroContract();
const pzEggContract = smartContract.getEggContract();

export {
  smartContract,
  pzChestContract,
  pzItemContract,
  pzHeroContract,
  pzEggContract,
};
