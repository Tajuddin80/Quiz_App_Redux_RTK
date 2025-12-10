import { createSlice } from "@reduxjs/toolkit";
import { quizData } from "@/home/quizData";

interface IQuizState {
  questions: typeof quizData;
  currentQuestionIndex: number;
  userAnswer: (string | null)[];
  quizCompleted: boolean;
}

const initialState: IQuizState = {
  questions: quizData,
  currentQuestionIndex: 0,
  userAnswer: Array(quizData.length).fill(null),
  quizCompleted: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questionIndex, answer } = action.payload;
      state.userAnswer[questionIndex] = answer;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },

    completeQuiz: (state) => {
      state.quizCompleted = true;
    },
  },
});

export const { setAnswer, nextQuestion, previousQuestion , completeQuiz} = quizSlice.actions;
export default quizSlice.reducer;
