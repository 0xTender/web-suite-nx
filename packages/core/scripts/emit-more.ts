import { deployments, ethers, getNamedAccounts } from "hardhat";

import { Hello } from "../typechain-types";
import { randomInt } from "crypto";

const runner = async () => {
  const HelloContract = await ethers.getContract<Hello>("Hello");

  for (let index = 0; index < 2; index++) {
    const tx = await HelloContract.message(`Message ${randomInt(0, 100)}`);
    await tx.wait();
  }
};

runner().catch(console.error);
