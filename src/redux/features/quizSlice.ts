import { createSlice } from "@reduxjs/toolkit";
import { quizData } from "@/home/quizData";

const initialState = {
  questions: quizData,
  currentQuestionIndex: 0,
  userAnswer: Array(quizData.length).fill(null),
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questionIndex, answer } = action.payload;
      state.userAnswer[questionIndex] = answer
    },
  },
});

export default quizSlice.reducer;
