import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: "idle",
    ERROR: 'error',
    LOADING: 'loading',
})

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
        // setProducts(state, action) {
        //     // donot use this(coz tere will be no side effect)
        //     // const res = await fetch('https://fakestoreapi.com/products');
        //     //use thunk middleware
        //     state.data = action.payload;
        // },
        // setStatus(state, action) {
        //     state.status = action.payload;
        // },
    },
    extraReducers: (builder)=>{
builder
.addCase(fetchProducts.pending,(state)=>{
    state.status=STATUSES.LOADING
})
.addCase(fetchProducts.fulfilled,(state,action)=>{
    state.data=action.payload;
    state.status=STATUSES.IDLE;

})
.addCase(fetchProducts.rejected,(state,action)=>{
    state.status=STATUSES.ERROR;
})
    }
})

export const { setProducts, setStatus } = productSlice.actions;

export default productSlice.reducer;

//thunks middleware


export const fetchProducts = createAsyncThunk("products/fetch", async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;

})


// export const fetchProducts = () => {
//     return async function fetchProductsThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING));
//         // const prop = getState. by doing this u can get the whole state....
//         try {
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE))
//         }
//         catch (err) {
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR))
//         }
//     }
// }
