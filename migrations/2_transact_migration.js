const Transact = artifacts.require("Transact");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(Transact);
  let res = await Transact.deployed()
  await res.create_wallet("0xd4afcde4c6acc1acfeaef3123469bad6baf867a300bed0ec30d7220c31abc6ef", 100)
  let l = await res.get_amount("0xd4afcde4c6acc1acfeaef3123469bad6baf867a300bed0ec30d7220c31abc6ef")
  console.log("This is accounts: ", l.toNumber());
  let s = web3.utils.fromUtf8("YUI")
  console.log(s)
};
