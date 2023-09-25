// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Certificate {
    struct ChildDetails {
        string child_name;
        string child_father_name;
        string child_mother_name;
        string birth_date;
        string birth_location;
        address issuedFrom;
        address issuedTo;
    }
    struct GraduationDetails {
        string student_name;
        string course_name;
        string institute_name;
        uint course_duration;
        string graduation_date;
        address issuedFrom;
        address issuedTo;
    }
    address[] haveBirthCertificate;
    mapping(address => ChildDetails) private childDetails;
    mapping(address => GraduationDetails) private graduationDetails;

    function addChildDetails(
        string memory name,
        string memory father_name,
        string memory mother_name,
        string memory dob,
        string memory birth_location,
        address _issuedTo
    ) external {
        for (uint i = 0; i < haveBirthCertificate.length; i++) {
            if (haveBirthCertificate[i] == _issuedTo) {
                revert("This account already has a certificate provided!");
            }
        }
        childDetails[_issuedTo] = ChildDetails(
            name,
            father_name,
            mother_name,
            dob,
            birth_location,
            msg.sender,
            _issuedTo
        );
        haveBirthCertificate.push(_issuedTo);
    }

    function getAllChildDetails(
        address _issuedTo
    ) external view returns (ChildDetails memory) {
        return childDetails[_issuedTo];
    }

    function addGraduationDetails(
        string memory _student_name,
        string memory _course_name,
        string memory _institute_name,
        uint _course_duration,
        string memory _graduation_date,
        address _issuedTo
    ) public {
        graduationDetails[_issuedTo] = GraduationDetails(
            _student_name,
            _course_name,
            _institute_name,
            _course_duration,
            _graduation_date,
            msg.sender,
            _issuedTo
        );
    }

    function getGraduationDetails(
        address _issuedTo
    ) external view returns (GraduationDetails memory) {
        return graduationDetails[_issuedTo];
    }
}
