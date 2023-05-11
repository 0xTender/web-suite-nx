// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import 'hardhat/console.sol';

contract Hello {
  string public message;

  constructor(string memory _message) {
    console.log(_message);
  }

  function setMessage(string memory _message) public {
    message = _message;
  }
}
