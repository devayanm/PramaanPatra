// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BirthCertificate {
    struct ChildDetails {
        string child_name;
        string child_father_name;
        string child_mother_name;
        string birth_date;
        address issuedFrom;
        address issuedTo;
    }
    mapping(address => ChildDetails) private childDetails;

    function addChildDetails(
        string memory name,
        string memory father_name,
        string memory mother_name,
        string memory dob,
        address _issuedTo
    ) external {
        childDetails[_issuedTo] = ChildDetails(
            name,
            father_name,
            mother_name,
            dob,
            msg.sender,
            _issuedTo
        );
    }

    function getAllChildDetails(
        address _issuedTo
    ) external view returns (ChildDetails memory) {
        return childDetails[_issuedTo];
    }
}
