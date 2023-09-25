import React, { useState } from "react";
import {
    Box,
    Button,
    Card,
    FormControl,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    MenuItem,
    Select,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function LandDeed() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            ownersName: "",
            plotName: "",
            khatianNo: "",
            mouzaCode: "",
            mouzaName: "",
            password: "",
        },
    });

    return (
        <Card sx={{ width: "70%", mt: 5, mb: 5, display: "flex" }}>
            <Box
                sx={{
                    width: "50%",
                    bgcolor: "cyan",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Card
                    height={250}
                    width={250}
                    component="img"
                    src="/images/Landdeed.png"
                    sx={{ borderRadius: "50%" }}
                />
            </Box>
            <Box>
                <Stack spacing={3} component="form" onSubmit={formik.handleSubmit} sx={{ padding: '50px' }}>
                    <FormControl fullWidth sx={{ width: '400px' }}>
                        <InputLabel>Owner's Name</InputLabel>
                        <OutlinedInput
                            label="Ownersname"
                            name="ownersName"
                            value={formik.values.ownersName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                Boolean(formik.touched.ownersName) &&
                                Boolean(formik.errors.ownersName)
                            }
                        />
                        {Boolean(formik.touched.ownersName) && (
                            <Typography
                                variant="body2"
                                mt={1}
                                color="red"
                                alignSelf="start"
                            >
                                {formik.errors.ownersName}
                            </Typography>
                        )}
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Plot No</InputLabel>
                        <OutlinedInput
                            label="Plotno"
                            name="plotNo"
                            value={formik.values.plotName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                Boolean(formik.touched.plotName) &&
                                Boolean(formik.errors.plotName)
                            }
                        />
                        {Boolean(formik.touched.plotName) && (
                            <Typography
                                variant="body2"
                                mt={1}
                                color="red"
                                alignSelf="start"
                            >
                                {formik.errors.plotName}
                            </Typography>
                        )}
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Transfer Type</InputLabel>
                        <Select
                            name="transferType"
                            value={formik.values.transferType}
                            onChange={formik.handleChange}
                            error={!!formik.errors.transferType}
                        >
                            <MenuItem value="Type 1">Type 1</MenuItem>
                            <MenuItem value="Type 2">Type 2</MenuItem>
                            <MenuItem value="Type 3">Type 3</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Issuing To</InputLabel>
                        <Select
                            name="issuingTo"
                            value={formik.values.issuingTo}
                            onChange={formik.handleChange}
                            error={!!formik.errors.issuingTo}
                        >
                            <MenuItem value="Issuing 1">Issuing 1</MenuItem>
                            <MenuItem value="Issuing 2">Issuing 2</MenuItem>
                            <MenuItem value="Issuing 3">Issuing 3</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Khatian No</InputLabel>
                        <OutlinedInput
                            label="Khatian No"
                            name="khatianNo"
                            value={formik.values.khatianNo}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                Boolean(formik.touched.khatianNo) &&
                                Boolean(formik.errors.khatianNo)
                            }
                        />
                        {Boolean(formik.touched.khatianNo) && (
                            <Typography variant="body2" mt={1} color="red" alignSelf="start">
                                {formik.errors.khatianNo}
                            </Typography>
                        )}
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Mouza Code</InputLabel>
                        <OutlinedInput
                            label="Mouza Code"
                            name="mouzaCode"
                            value={formik.values.mouzaCode}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                Boolean(formik.touched.mouzaCode) &&
                                Boolean(formik.errors.mouzaCode)
                            }
                        />
                        {Boolean(formik.touched.mouzaCode) && (
                            <Typography variant="body2" mt={1} color="red" alignSelf="start">
                                {formik.errors.mouzaCode}
                            </Typography>
                        )}
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Mouza Name</InputLabel>
                        <OutlinedInput
                            label="Mouza Name"
                            name="mouzaName"
                            value={formik.values.mouzaName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                Boolean(formik.touched.mouzaName) && Boolean(formik.errors.mouzaName)
                            }
                        />
                        {Boolean(formik.touched.mouzaName) && (
                            <Typography variant="body2" mt={1} color="red" alignSelf="start">
                                {formik.errors.mouzaName}
                            </Typography>
                        )}
                    </FormControl>
                    <Button variant="contained" type="submit" fullWidth>
                        CREATE CERTIFICATE
                    </Button>
                </Stack>
            </Box>
        </Card >
    );
};
export default LandDeed
