import { createSlice } from "@reduxjs/toolkit";
const initialState = {

    selectedQuotation: {
        request: false,
        response: false,
        failed: false,
        data: {},
        error: {},
    },

    createQuotation: {
        request: false,
        response: false,
        failed: false,
        data: {},
        error: {},
    },

    allQuotationByEOCID: {
        request: false,
        response: false,
        failed: false,
        data: [],
        error: {},
    },



};
export const QuotationSlice = createSlice({
    name: "quotation",
    initialState,
    reducers: {
        resetQuotation: (state) => {
            state.allQuotationByEOCID.request = initialState.allQuotationByEOCID.request;
            state.allQuotationByEOCID.response = initialState.allQuotationByEOCID.response;
            state.allQuotationByEOCID.failed = initialState.allQuotationByEOCID.failed;

            state.selectedQuotation.request = initialState.selectedQuotation.request;
            state.selectedQuotation.response = initialState.selectedQuotation.response;
            state.selectedQuotation.failed = initialState.selectedQuotation.failed;

            state.createQuotation.request = initialState.createQuotation.request;
            state.createQuotation.response = initialState.createQuotation.response;
            state.createQuotation.failed = initialState.createQuotation.failed;

        },

        requestSelectedQuotation: (state) => {

            state.selectedQuotation.request = true;
        },

        requestCreateQuotation: (state) => {

            state.createQuotation.request = true;
        },
        responseCreateQuotation: (state, action) => {

            state.createQuotation.response = true;
            state.createQuotation.data = action.payload;
        },
        failedCreateQuotation: (state, action) => {

            state.createQuotation.failed = true;
            state.createQuotation.error = action.payload;
        },
        requestAllQuotationByEOCID: (state) => {

            state.allQuotationByEOCID.request = true;

        },
        responseAllQuotationByEOCID: (state, action) => {

            state.allQuotationByEOCID.response = true;
            state.allQuotationByEOCID.data = action.payload;
        },
        failedAllQuotationByEOCID: (state, action) => {

            state.allQuotationByEOCID.failed = true;
            state.allQuotationByEOCID.error = action.payload;
        }

    },
});
export default QuotationSlice.reducer;
export const {
    resetQuotation,

    requestSelectedQuotation,
    requestCreateQuotation,
    responseCreateQuotation,
    failedCreateQuotation,
    requestAllQuotationByEOCID,
    responseAllQuotationByEOCID,
    failedAllQuotationByEOCID

} = QuotationSlice.actions;
