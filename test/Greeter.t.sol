// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../contracts/Greeter.sol";

contract CounterTest is Test {
    Greeter public greeter;

    function setUp() public {
        greeter = new Greeter("Hi!");
    }

    function testGreet() public {
        assertEq(greeter.greet(), "Hi!");
    }

    function testSetGreeting() public {
        greeter.setGreeting("Bye!");
        assertEq(greeter.greet(), "Bye!");
    }
}
