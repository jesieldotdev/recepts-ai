import React from "react"

export interface TabProps{
    id: number
    name: string
    content: React.JSX.Element
}

export interface ContentPart {
    text: string;
}

export interface Content {
    parts: ContentPart[];
    role: string;
}

export interface SafetyRating {
    category: string;
    probability: string;
}

export interface Candidate {
    content: Content;
    finishReason: string;
    index: number;
    safetyRatings: SafetyRating[];
}

interface ContentBody {
    parts: ContentPart[];
}

export interface ApiBody {
    contents: ContentBody[];
}


export interface PromptFeedback {
    safetyRatings: SafetyRating[];
}

export interface ApiResponse {
    candidates: Candidate[];
    promptFeedback: PromptFeedback;
}
// export interface Recipe{
//     name: string
//     ingredients: string[]
//     instructions: string[]
// }

export interface Category {
    id: number;
    name: string;
    recepts: string[]
  };

export interface RecipeCategory{
    id: number
    name: string
}
  export interface RecipeProps {
    _id: string;
    title: string;
    description: string;
    image: string;
    time: string;
    level: string;
    slugs: string[];
    about: string;
    ingredients: string[];
    steps: Step[];
    category: RecipeCategory
  }
  
  export interface Step {
    order: number;
    description: string;
  }