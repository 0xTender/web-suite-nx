// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import "hardhat/console.sol";

contract Hello {
  event MessageEvent(string message);

  constructor(string memory _message) {
    console.log(_message);
    message(_message);
  }

  function message(string memory _message) public {
    emit MessageEvent(_message);
  }
}
