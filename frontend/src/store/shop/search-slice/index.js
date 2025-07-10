import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Use the correct port (8000) or environment variable
const API_BASE_URL = "https://ecommerce-fullstack-design-x-git-eb411d-syedharyyshahs-projects.vercel.app";

const initialState = {
  isLoading: false,
  searchResults: [],
  error: null,
};

export const getSearchResults = createAsyncThunk(
  "shopSearch/getSearchResults",
  async ({ keyword, category }, { rejectWithValue }) => {
    try {
      const queryParams = new URLSearchParams({ keyword });
      if (category && category !== "all") {
        queryParams.append("category", category);
      }
      const response = await axios.get(
        `${API_BASE_URL}/api/shop/search?${queryParams.toString()}`
      );

      if (!response.data || !response.data.data) {
        throw new Error("Invalid response structure");
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || "Failed to fetch search results"
      );
    }
  }
);

const searchSlice = createSlice({
  name: "shopSearch",
  initialState,
  reducers: {
    resetSearchResults: (state) => {
      state.searchResults = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearchResults.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getSearchResults.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchResults = action.payload.data;
        state.error = null;
      })
      .addCase(getSearchResults.rejected, (state, action) => {
        state.isLoading = false;
        state.searchResults = [];
        state.error = action.payload;
      });
  },
});

export const { resetSearchResults } = searchSlice.actions;

export default searchSlice.reducer;