module.exports = {
  solidity: "0.8.3",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    harmonyTest:{
      gas: 80000000,
      url: "https://rpc.s0.b.hmny.io",
      accounts:process.env.HARMONY_PRIVATE_KEY !== undefined ? [process.env.HARMONY_PRIVATE_KEY] : []
    },

    
  }
};