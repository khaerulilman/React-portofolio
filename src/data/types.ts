// Types for Work Experience API response

export interface WorkExperienceCell {
  company: string;
  role: string;
  summary: string;
  period: string;
  detail: string;
}

export interface WorkExperienceData {
  name: string;
  cells: WorkExperienceCell[];
}

export interface WorkExperienceResponse {
  success: boolean;
  message: string;
  data: WorkExperienceData;
}
