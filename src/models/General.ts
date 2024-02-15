import React from "react"

export interface TabProps{
    id: number
    name: string
    content: React.JSX.Element
}

export interface Recept{
    id: number
    name: string
    image_url: string
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


export interface Recipe{
    name: string
    ingredients: string[]
    instructions: string[]
}