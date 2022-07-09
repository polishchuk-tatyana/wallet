// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Transact{

    mapping(string => uint) balances;

    //creating new wallet
    function create_wallet(string memory pk, uint amount)public{
         
        balances[pk] = amount;
    }

    //sending founds function
    function _transfer(string memory pk, string memory new_pk) public returns(string memory){
        if (balances[pk] != 0){
            balances[new_pk] += balances[pk];
            balances[pk] = 0;
        }
        return new_pk;
    }
    
    //show founds for user
    function get_amount(string memory pk) public view returns(uint){
        return balances[pk];
    }

}