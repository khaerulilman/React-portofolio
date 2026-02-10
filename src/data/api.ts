import type { WorkExperienceResponse } from "./types";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchWorkExperiences =
  async (): Promise<WorkExperienceResponse> => {
    try {
      const response = await fetch(
        `${API_URL}/107c172c-f92b-4b54-a51d-b8a3a235af21/table/4f2b5821-a1bb-400d-b47d-0fea1aa1de4d/simplify`,
        {
          method: "GET",
          headers: {
            "x-api-key": API_KEY,
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const data: WorkExperienceResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching work experiences:", error);
      throw error;
    }
  };
