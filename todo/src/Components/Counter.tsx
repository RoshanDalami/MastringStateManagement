"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@/Features/Counter/counterSlice";
import type { RootState } from "@/Providers/redux/store";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="bg-indigo-600 rounded-md px-3 py-1.5 text-white"
        onClick={() => dispatch(increment())}
      >
        Increase
      </button>
      <span className="mx-5">{count}</span>
      <button
        className="bg-indigo-600 rounded-md px-3 py-1.5 text-white"
        onClick={() => dispatch(decrement())}
      >
        Decrease
      </button>
    </div>
  );
}
