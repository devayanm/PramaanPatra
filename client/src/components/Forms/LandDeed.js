import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select, TextField, Button } from "@mui/material";
import "./LandDeed.css";


function LandDeed() {
    const [formData, setFormData] = useState({
        ownerName: "",
        plotNo: "",
        mouzaCode: "",
        mouzaName: "",
        khatianNo: "",
        transferType: "",
        issuingTo: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};

        if (formData.ownerName.length < 2) {
            newErrors.ownerName = "Owner's Name must be at least 2 characters long";
        }

        const plotNoPattern = /^[a-zA-Z0-9]{3,}$/;
        if (!plotNoPattern.test(formData.plotNo)) {
            newErrors.plotNo = "Plot No must be at least 3 alphanumeric characters";
        }

        const mouzaCodePattern = /^[A-Z]{3}-\d{3}$/;
        if (!mouzaCodePattern.test(formData.mouzaCode)) {
            newErrors.mouzaCode = "Invalid Mouza Code format (e.g., ABC-123)";
        }

        const khatianNo = parseInt(formData.khatianNo);
        if (isNaN(khatianNo) || khatianNo <= 0) {
            newErrors.khatianNo = "Khatian No must be a positive integer";
        }

        if (!formData.transferType) {
            newErrors.transferType = "Transfer Type is required";
        }

        if (!formData.issuingTo) {
            newErrors.issuingTo = "Issuing To is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();

        if (isValid) {
            console.log(formData);
        }
    };

    return (
        <div className="landdeed-form">
            <div className="form-container container grid grid-two-col">
                <div className="left-side">
                    <img className="landdeed-img" src="/images/Landdeed.png" alt="Landdeed"></img>
                </div>
                <div className="right-side">
                    <div className="form-title">Land Deed Form</div>
                    <form onSubmit={handleSubmit}>
                        <div className="text-field">
                            <TextField
                                fullWidth
                                label="Owner's Name"
                                name="ownerName"
                                value={formData.ownerName}
                                onChange={handleChange}
                                error={!!errors.ownerName}
                                helperText={errors.ownerName}
                            />
                        </div>
                        <div className="text-field">
                            <TextField
                                fullWidth
                                label="Plot No"
                                name="plotNo"
                                value={formData.plotNo}
                                onChange={handleChange}
                                error={!!errors.plotNo}
                                helperText={errors.plotNo}
                            />
                        </div>
                        <div className="text-field">
                        <FormControl fullWidth>
                            <InputLabel>Transfer Type</InputLabel>
                            <Select
                                name="transferType"
                                value={formData.transferType}
                                onChange={handleChange}
                                error={!!errors.transferType}
                            >
                                <MenuItem value="Type 1">Type 1</MenuItem>
                                <MenuItem value="Type 2">Type 2</MenuItem>
                                <MenuItem value="Type 3">Type 3</MenuItem>
                            </Select>
                        </FormControl>
                        </div>
                        <div className="text-field">
                        <FormControl fullWidth>
                            <InputLabel>Issuing To</InputLabel>
                            <Select
                                name="issuingTo"
                                value={formData.issuingTo}
                                onChange={handleChange}
                                error={!!errors.issuingTo}
                            >
                                <MenuItem value="Issuing 1">Issuing 1</MenuItem>
                                <MenuItem value="Issuing 2">Issuing 2</MenuItem>
                                <MenuItem value="Issuing 3">Issuing 3</MenuItem>
                            </Select>
                        </FormControl>
                        </div>
                        <div className="text-field">
                            <TextField
                                fullWidth
                                label="Khatian NO."
                                name="khatianNo"
                                value={formData.khatianNo}
                                onChange={handleChange}
                                error={!!errors.khatianNo}
                                helperText={errors.khatianNo}
                            />
                        </div>
                        <div className="text-field">
                            <TextField
                                fullWidth
                                label="Mouza Code"
                                name="mouzaCode"
                                value={formData.mouzaCode}
                                onChange={handleChange}
                                error={!!errors.mouzaCode}
                                helperText={errors.mouzaCode}
                            />
                        </div>
                        <div className="text-field">
                            <TextField
                                fullWidth
                                label="Mouza Name"
                                name="mouzaName"
                                value={formData.mouzaName}
                                onChange={handleChange}
                                error={!!errors.mouzaName}
                                helperText={errors.mouzaName}
                            />
                        </div>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            CREATE CERTIFICATE
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default LandDeed
